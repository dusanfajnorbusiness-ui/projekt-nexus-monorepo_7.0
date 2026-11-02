/* eslint-disable no-undef */

// ============================================================================

// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS 01 - SYS 05 UNIFIED FILTERS DATA V20.132)

// Súbor: src/data/Sys01-05_Filters.js

// Status: 100% GROUNDED // ALL EXPORTS RESTORED // ZERO COMPILATION ERRORS

// ============================================================================

/**
 * 🎯 TIER Color Map (OS Genesis Standards)
 */
export const TIER_COLOR_MAP = {
  ALL: "#A1A1AA",
  FREE: "#00f3ff",
  FREEMIUM: "#00f3ff",
  PRO: "#39FF14",
  PROMIUM: "#39FF14",
  OMEGA: "#FFD700",
  OMEGAMIUM: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
};

/**
 * 🏷️ TIER Filter Options (IUM Standards)
 */
export const TIER_OPTIONS = [
  { id: "ALL", label: "Všetky Tiery" },
  { id: "FREE", label: "FREE" },
  { id: "FREEMIUM", label: "FREEMIUM" },
  { id: "PROMIUM", label: "PROMIUM" },
  { id: "OMEGAMIUM", label: "OMEGAMIUM" },
  { id: "MASTERMIUM", label: "MASTERMIUM" },
];

/**
 * 📐 Format / Ratio Filter Options
 */
export const FORMAT_OPTIONS = [
  { id: "ALL", label: "Všetky Formáty" },
  { id: "1x1", label: "1:1 Feed" },
  { id: "9x16", label: "9:16 Shorts" },
  { id: "16x9", label: "16:9 Desktop" },
  { id: "zip", label: "ZIP Balíky" },
];

/**
 * 🎯 Normalizačná funkcia pre jednoznačné zaradenie do MIUM Tierov (V20 Defenzívna)
 */
export function getNormalizedTier(rawTier = "FREE") {
  const clean = String(rawTier || "FREE")
    .toUpperCase()
    .trim();
  if (clean.includes("FREEMIUM")) return "FREEMIUM";
  if (clean.includes("FREE") || clean.includes("ZDARMA")) return "FREE";
  if (clean.includes("PROMIUM") || clean.includes("PRO")) return "PROMIUM";
  if (clean.includes("OMEGAMIUM") || clean.includes("OMEGA"))
    return "OMEGAMIUM";
  if (
    clean.includes("MASTERMIUM") ||
    clean.includes("MASTER") ||
    clean.includes("ARCHITECT")
  )
    return "MASTERMIUM";
  return "FREE";
}

/**
 * 📊 DYNAMICKÝ VÝPOČET POČÍTADIEL PRE KATEGÓRIE, TIERY A FORMÁTY
 * @param {Array} items - Pole všetkých aktív
 * @returns {Object} Počítadlá pre filtre
 */
export function calculateFilterCounts(items = [], activeCategory = "ALL") {
  const safeItems = Array.isArray(items) ? items : [];
  const safeCat = String(activeCategory || "ALL").trim();

  const counts = {
    total: safeItems.length,
    categories: { ALL: safeItems.length },
    tiers: {
      ALL: 0,
      FREE: 0,
      FREEMIUM: 0,
      PROMIUM: 0,
      OMEGAMIUM: 0,
      MASTERMIUM: 0,
    },
    formats: { ALL: 0, "1x1": 0, "9x16": 0, "16x9": 0, zip: 0 },
  };

  safeItems.forEach((item) => {
    if (!item) return;

    // 1. Primárne kategórie (Počítajú sa VŽDY pre celkový prehľad)
    const cat = String(item.category || "OTHER").trim();
    const subCat = String(item.subCategory || "").trim();

    counts.categories[cat] = (counts.categories[cat] || 0) + 1;
    if (subCat && subCat !== cat) {
      counts.categories[subCat] = (counts.categories[subCat] || 0) + 1;
    }

    // Detekcia KT kategórií z URL ak subCategory chýba
    let urlKtMatch = null;
    if (
      !subCat &&
      item.formats &&
      typeof item.formats === "object" &&
      item.formats["1x1"]
    ) {
      const match = String(item.formats["1x1"]).match(/kt-\d{2}/i);
      if (match && match) {
        urlKtMatch = String(match || "").toLowerCase();
        counts.categories[urlKtMatch] =
          (counts.categories[urlKtMatch] || 0) + 1;
      }
    }

    // 2. Sekundárne filtre (Tiery a Formáty) sa počítajú pre ZVOLENÚ KATEGÓRIU
    const matchesActiveCategory =
      safeCat === "ALL" ||
      cat === safeCat ||
      subCat === safeCat ||
      urlKtMatch === safeCat;

    if (matchesActiveCategory) {
      // Tier počítadlo pre aktívnu kategóriu
      const normalizedTier = getNormalizedTier(item.tier);
      counts.tiers[normalizedTier] = (counts.tiers[normalizedTier] || 0) + 1;
      counts.tiers.ALL++;

      // Formát počítadlo pre aktívnu kategóriu
      if (item.formats && typeof item.formats === "object") {
        let hasFormat = false;
        if (item.formats["1x1"]) {
          counts.formats["1x1"]++;
          hasFormat = true;
        }
        if (item.formats["9x16"]) {
          counts.formats["9x16"]++;
          hasFormat = true;
        }
        if (item.formats["16x9"]) {
          counts.formats["16x9"]++;
          hasFormat = true;
        }
        if (item.formats.zip) {
          counts.formats.zip++;
          hasFormat = true;
        }
        if (hasFormat) counts.formats.ALL++;
      }
    }
  });

  return counts;
}

export default {
  TIER_COLOR_MAP,
  TIER_OPTIONS,
  FORMAT_OPTIONS,
  getNormalizedTier,
  calculateFilterCounts,
};
