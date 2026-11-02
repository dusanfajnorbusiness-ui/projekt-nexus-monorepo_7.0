// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (DOCUMENTS DATA REGISTER INDEX V20.50)
// File: src/data/ShopDocumentsMedia/index.js
// Status: STRICTLY GROUNDED // 8 SUB-FILES COMBINED // 69 ITEMS TOTAL
// ============================================================================

import { PDF_KT_01_DATA } from "./PDF-kt-01";
import { PDF_KT_02_DATA } from "./PDF-kt-02";
import { PDF_KT_03_DATA } from "./PDF-kt-03";
import { PDF_KT_04_DATA } from "./PDF-kt-04";
import { PDF_KT_05_DATA } from "./PDF-kt-05";
import { PDF_KT_06_DATA } from "./PDF-kt-06";
import { PDF_KT_07_DATA } from "./PDF-kt-07";
import { PDF_KT_08_DATA } from "./PDF-kt-08";

export { PDF_KT_01_DATA } from "./PDF-kt-01";
export { PDF_KT_02_DATA } from "./PDF-kt-02";
export { PDF_KT_03_DATA } from "./PDF-kt-03";
export { PDF_KT_04_DATA } from "./PDF-kt-04";
export { PDF_KT_05_DATA } from "./PDF-kt-05";
export { PDF_KT_06_DATA } from "./PDF-kt-06";
export { PDF_KT_07_DATA } from "./PDF-kt-07";
export { PDF_KT_08_DATA } from "./PDF-kt-08";

export const TIER_COLOR_MAP = {
  FREE: "#00f3ff",
  FREEMIUM: "#00E5FF",
  PRO: "#39FF14",
  PROMIUM: "#39FF14",
  OMEGA: "#FFD700",
  OMEGAMIUM: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
};

export const getTierColor = (tierStr) => {
  if (!tierStr) return "#00f3ff";
  const t = String(tierStr).toUpperCase().trim();
  if (t === "FREE" || t === "ZDARMA") return "#00f3ff";
  if (t.includes("FREEMIUM")) return "#00E5FF";
  if (t.includes("PRO")) return "#39FF14";
  if (t.includes("OMEGA")) return "#FFD700";
  if (t.includes("MASTER")) return "#FF003C";
  return "#00f3ff";
};

export const DIMENSION_COLOR_MAP = {
  ID00: "#FFFFFF",
  ID01: "#39FF14",
  ID02: "#FFEB3B",
  ID03: "#FFD700",
  ID04: "#FFAA00",
  ID05: "#FF8C00",
  ID06: "#BF00FF",
  ID07: "#8A2BE2",
  ID08: "#00FFFF",
  ID09: "#FF003C",
  ID10: "#0044FF",
  ID11: "#FFBF00",
  ID12: "#00E5FF",
  ID13: "#0055FF",
  ID14: "#FF1493",
  ID15: "#8A8A8A",
};

export const getDimensionColor = (dimStr) => {
  if (!dimStr) return "#FFD700";
  const clean = String(dimStr).toUpperCase().split("|")[0].trim();
  return DIMENSION_COLOR_MAP[clean] || "#FFD700";
};

export const CATEGORY_MAP = {
  ALL: "Všetky Kategórie (69)",
  "kt-01": "👑 KATEGÓRIA 1: KÓDEX A MŔTVE KNIHY [Empty-Book & Codex]",
  "kt-02": "👑 KATEGÓRIA 2: OC PDFs [KaaS Data-Books]",
  "kt-03": "👑 KATEGÓRIA 3: OC VIP PDFs [Master Kódexy]",
  "kt-04": "👑 KATEGÓRIA 4: OC APPs [SaaS a Izolované Terminály]",
  "kt-05": "👑 KATEGÓRIA 5: OC SLUŽBY [Mentoring a B2B Zásah]",
  "kt-06":
    "👑 KATEGÓRIA 6: SYSTEM ENGINE & CORE INFRASTRUCTURE [Piliere Siete]",
  "kt-07":
    "👑 KATEGÓRIA 7: COGNITIVE TRANSLATION & LEXICONS [Sémantické Rozhranie]",
  "kt-08": "👑 KATEGÓRIA 8: KAMPAŇ ID00-ID15 [100 Nodes Core Systems]",
};

export const CATEGORY_TOOLTIPS = {
  ALL: "Zobraziť kompletný vedomostný trezor všetkých 69 PDF/PPTX kódexov OS Genesis",
  "kt-01":
    "Sémantické výťahy zo svetových diel a mŕtvych kníh prečítaných Architektom",
  "kt-02":
    "Deformátované a zhustené KaaS dátové knižky pre kognitívny overclocking",
  "kt-03": "Exkluzívne VIP kódexy a investičné matice s bionickým vodoznakom",
  "kt-04": "Izolované PWA softvérové terminály a SaaS aplikácie",
  "kt-05": "Osobný mentoring s Architektom a B2B franšízové poradenstvo",
  "kt-06": "Piliere architektúry OS Genesis a unifikovaná 5-kartová matica",
  "kt-07": "Sémantické slovníky a prekladače zavedené pre komunikáciu s AI",
  "kt-08": "Core kampaňové balíky pre jednotlivé dimenzie ID00 až ID15",
};

export const TIER_TOOLTIPS = {
  ALL: "Zobraziť všetky cenové kategórie PDF a PPTX kódexov",
  FREE: "Bezplatné študijné kódexy dostupné na okamžité stiahnutie",
  PRO: "Profesionálne KaaS dátové príručky pre pokročilú prax",
  OMEGA: "Prémiové VIP kódexy a franšízové štandardy V20",
  MASTER: "Master kódexy s bionickým vodoznakom a neobmedzenými právami",
};

export const SHOP_DOCUMENTS_DATA = [
  ...PDF_KT_01_DATA,
  ...PDF_KT_02_DATA,
  ...PDF_KT_03_DATA,
  ...PDF_KT_04_DATA,
  ...PDF_KT_05_DATA,
  ...PDF_KT_06_DATA,
  ...PDF_KT_07_DATA,
  ...PDF_KT_08_DATA,
];

export const ShopDocumentsMediaData = SHOP_DOCUMENTS_DATA;
