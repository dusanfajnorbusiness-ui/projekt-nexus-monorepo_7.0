/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS05 MASTER DIRECTORY V20.99)
// Súbor: src/pages/SYS05_Directory.jsx
// Status: 100% GROUNDED // CLUSTER & FLAT DATASET ADAPTER // ZERO IMPROVISATION
// ============================================================================

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  HardDrive,
  Globe,
  Mail,
  Share2,
  ShoppingCart,
  Briefcase,
  Terminal,
  Copy,
  ExternalLink,
  Lock,
  Check,
} from "lucide-react";
import * as LucideIcons from "lucide-react";

import { GlobalComponents } from "@main-web/components/GlobalComponents";
import { GlobalHamburgerMenu } from "@main-web/components/GlobalHamburgerMenu";
import { GlobalFooter } from "@main-web/components/GlobalFooter";
import { Sys01_05_Filters } from "@main-web/components/Sys01-05_Filters";
import { SoundFX } from "@shared/utils/SoundEngine";

// ⚠️ PRIAMY DOVOZ TVOJHO VLASTNÉHO DATASETU Z src/data/sys05_directory.js
import * as Sys05DataModule from "@main-web/data/sys05_directory";

const SYS05_COLOR = Sys05DataModule.SYS05_COLOR || "#39FF14";

export const TIER_COLOR_MAP = {
  FREE: "#00F3FF",
  FREEMIUM: "#00F3FF",
  ZDARMA: "#00F3FF",
  PRO: "#39FF14",
  PROMIUM: "#39FF14",
  OMEGA: "#FFD700",
  OMEGAMIUM: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
  ARCHITECT: "#FF003C",
};

export const getTierBadgeColor = (tier) => {
  if (!tier) return "#00F3FF";
  const cleanTier = String(tier || "")
    .toUpperCase()
    .trim();
  return TIER_COLOR_MAP[cleanTier] || "#00F3FF";
};

// 🎯 UNIFIKOVANÉ KATEGÓRIE PRE SYS05 FILTRE
export const SYS05_CATEGORIES = Sys05DataModule.SYS05_CATEGORIES || [
  { id: "ALL", label: "Všetky Odkazy (Master)", icon: "HardDrive" },
  { id: "SUBDOMAINS", label: "1. Subdomény", icon: "Globe" },
  { id: "EMAILS", label: "2. E-mail Matrix", icon: "Mail" },
  { id: "SOCIAL", label: "3. Sociálne Siete", icon: "Share2" },
  { id: "COMMERCIAL", label: "4. Komerčné Porty", icon: "ShoppingCart" },
  { id: "B2B", label: "5. B2B Agentúra", icon: "Briefcase" },
  { id: "SYS_NODES", label: "6. Systémové Uzly", icon: "Terminal" },
];

export const SYS05_Directory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // --- STAV MANAŽMENT ---
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeTier, setActiveTier] = useState("ALL");
  const [activeFormat, setActiveFormat] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("GRID_MD");

  const [toastMessage, setToastMessage] = useState(null);

  const userTier = useMemo(() => {
    try {
      const raw = localStorage.getItem("nexus_active_identity");
      if (raw) return JSON.parse(raw)?.tier?.toUpperCase() || "FREE";
    } catch (e) {}
    return "FREE";
  }, []);

  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // 1. UNIFIKÁCIA A NORMALIZÁCIA TVOJHO DATASETU (AKCEPTOVANIE KLASTROV AJ PLOCHÝCH POLÍ)
  const allNormalizedItems = useMemo(() => {
    const rawDataset =
      Sys05DataModule.MASTER_DIRECTORY_DATA ||
      Sys05DataModule.SYS05_DIRECTORY_DATA ||
      Sys05DataModule.default?.MASTER_DIRECTORY_DATA ||
      Sys05DataModule.default?.SYS05_DIRECTORY_DATA ||
      [];

    const result = [];

    rawDataset.forEach((entry, idx) => {
      // Ak je entry klaster (obsahuje pole items alebo nodes)
      if (entry && (Array.isArray(entry.items) || Array.isArray(entry.nodes))) {
        const clusterCat = (
          entry.clusterId ||
          entry.category ||
          "GENERAL"
        ).toUpperCase();
        const subItems = entry.items || entry.nodes || [];
        subItems.forEach((sub, subIdx) => {
          result.push({
            ...sub,
            id: sub.id || `${clusterCat}-${subIdx}`,
            title: sub.title || sub.name || "Bez názvu",
            desc: sub.desc || sub.description || sub.subtitle || "",
            url: sub.url || sub.link || sub.domain || "/",
            domain: sub.domain || sub.url || "",
            category: (sub.category || clusterCat).toUpperCase(),
            tier: (sub.tier || sub.licenseTier || "FREE").toUpperCase(),
            icon: sub.icon || "Globe",
            clusterTitle: entry.title || entry.name,
          });
        });
      } else if (entry && typeof entry === "object") {
        // Ak je entry priamo objekt položky
        result.push({
          ...entry,
          id: entry.id || `NODE-${idx}`,
          title: entry.title || entry.name || "Bez názvu",
          desc: entry.desc || entry.description || entry.subtitle || "",
          url: entry.url || entry.link || entry.domain || "/",
          domain: entry.domain || entry.url || "",
          category: (
            entry.category ||
            entry.clusterId ||
            "GENERAL"
          ).toUpperCase(),
          tier: (entry.tier || entry.licenseTier || "FREE").toUpperCase(),
          icon: entry.icon || "Globe",
        });
      }
    });

    return result;
  }, []);

  // 2. SYNCHRONIZÁCIA FILTROV S URL PARAMS
  useEffect(() => {
    const catFromUrl = searchParams.get("cat");
    const tierFromUrl = searchParams.get("tier");
    const fmtFromUrl = searchParams.get("fmt");

    if (catFromUrl) setActiveCategory(catFromUrl.toUpperCase());
    if (tierFromUrl) setActiveTier(tierFromUrl.toUpperCase());
    if (fmtFromUrl) setActiveFormat(fmtFromUrl.toLowerCase());
  }, [searchParams]);

  const updateFilters = useCallback(
    (newParams) => {
      const updated = new URLSearchParams(searchParams);
      Object.entries(newParams).forEach(([key, val]) => {
        if (val && val !== "ALL") {
          updated.set(key, val.toLowerCase());
        } else {
          updated.delete(key);
        }
      });
      setSearchParams(updated, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    updateFilters({ cat: catId });
  };

  const handleTierChange = (tierId) => {
    setActiveTier(tierId);
    updateFilters({ tier: tierId });
  };

  const handleFormatChange = (fmtId) => {
    setActiveFormat(fmtId);
    updateFilters({ fmt: fmtId });
  };

  // 3. 🍔 HAMBURGER VÝŤAH LISTENER
  useEffect(() => {
    const handleSwitchTab = (e) => {
      const targetCat = e?.detail;
      if (!targetCat) return;

      if (SoundFX && typeof SoundFX.click === "function") SoundFX.click();
      const cleanCat = String(targetCat).trim().toUpperCase();

      setActiveCategory(cleanCat);
      updateFilters({ cat: cleanCat });

      setTimeout(() => {
        const directoryGrid = document.getElementById("sys05-directory-grid");
        if (directoryGrid) {
          directoryGrid.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350);
    };

    window.addEventListener("nexus_switch_local_tab", handleSwitchTab);
    return () =>
      window.removeEventListener("nexus_switch_local_tab", handleSwitchTab);
  }, [updateFilters]);

  // 4. PRECIZNA SÉMANTICKÁ FILTRÁCIA S PODPOROU PRE MAPPING KLASTROV Z TVOJHO DATASETU
  const filteredItems = useMemo(() => {
    return allNormalizedItems.filter((item) => {
      const itemCat = String(item.category || "").toUpperCase();

      // Kategórie
      if (activeCategory !== "ALL") {
        const targetCat = activeCategory.toUpperCase();
        let matches = itemCat === targetCat;

        // Mapovanie synonym pre klastre z Tvojho datasetu
        if (
          targetCat === "SUBDOMAINS" &&
          (itemCat === "SUBDOMAINS" || itemCat === "DIMENSIONS")
        )
          matches = true;
        if (
          targetCat === "EMAILS" &&
          (itemCat === "EMAIL" || itemCat === "EMAILS")
        )
          matches = true;
        if (
          targetCat === "SOCIAL" &&
          (itemCat === "SOCIALS" || itemCat === "SOCIAL" || itemCat === "BLOG")
        )
          matches = true;
        if (
          targetCat === "COMMERCIAL" &&
          (itemCat === "SHOP" ||
            itemCat === "COMMERCIAL" ||
            itemCat === "KO-FI" ||
            itemCat === "MEDIA")
        )
          matches = true;
        if (targetCat === "B2B" && (itemCat === "AGENCY" || itemCat === "B2B"))
          matches = true;
        if (
          targetCat === "SYS_NODES" &&
          (itemCat === "SYS" || itemCat === "SYS_NODES")
        )
          matches = true;

        if (!matches) return false;
      }

      // TIER filter
      if (activeTier !== "ALL") {
        const targetTier = String(activeTier).toUpperCase().trim();
        const itemTier = String(item.tier || "FREE")
          .toUpperCase()
          .trim();

        // 1. FREE (0 €) - Čisté FREE, vylúčiť FREEMIUM
        if (
          targetTier === "FREE" &&
          (itemTier.includes("FREEMIUM") ||
            (!itemTier.includes("FREE") && !itemTier.includes("ZDARMA")))
        ) {
          return false;
        }

        // 2. FREEMIUM (25 €)
        if (targetTier === "FREEMIUM" && !itemTier.includes("FREEMIUM")) {
          return false;
        }

        // 3. PROMIUM / PRO (49 €)
        if (
          (targetTier === "PRO" || targetTier === "PROMIUM") &&
          !itemTier.includes("PRO")
        ) {
          return false;
        }

        // 4. OMEGAMIUM / OMEGA (69 €)
        if (
          (targetTier === "OMEGA" || targetTier === "OMEGAMIUM") &&
          !itemTier.includes("OMEGA")
        ) {
          return false;
        }

        // 5. MASTERMIUM / MASTER (99 €)
        if (
          (targetTier === "MASTER" || targetTier === "MASTERMIUM") &&
          !itemTier.includes("MASTER") &&
          !itemTier.includes("ARCHITECT")
        ) {
          return false;
        }
      }

      // Live vyhľadávanie
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchId = String(item.id || "")
          .toLowerCase()
          .includes(q);
        const matchTitle = String(item.title || "")
          .toLowerCase()
          .includes(q);
        const matchDesc = String(item.desc || "")
          .toLowerCase()
          .includes(q);
        const matchDomain = String(item.domain || item.url || "")
          .toLowerCase()
          .includes(q);
        if (!matchId && !matchTitle && !matchDesc && !matchDomain) return false;
      }

      return true;
    });
  }, [allNormalizedItems, activeCategory, activeTier, searchQuery]);

  const handleCopyUrl = (item) => {
    triggerClick();
    const rawUrl = item.url || item.domain || "";
    const targetUrl =
      rawUrl.startsWith("http") || rawUrl.startsWith("mailto:")
        ? rawUrl
        : `${window.location.origin}${rawUrl.startsWith("/") ? "" : "/"}${rawUrl}`;

    navigator.clipboard.writeText(targetUrl);
    triggerSuccess();
    showToast(`⚡ ODKAZ SKOPÍROVANÝ: ${item.title}`);
  };

  const handleOpenLink = (item) => {
    triggerClick();
    const rawUrl = item.url || item.domain || "";
    if (rawUrl.startsWith("http") || rawUrl.startsWith("mailto:")) {
      window.open(rawUrl, "_blank", "noopener,noreferrer");
    } else {
      navigate(rawUrl);
    }
  };

  return (
    <div className="min-h-screen bg-[#020406] text-white font-sans selection:bg-[#39FF14] selection:text-black">
      {/* <GlobalComponents themeColor={SYS05_COLOR} /> */}

      {/* TOAST NOTIFIKÁCIA */}
      {toastMessage && (
        <div className="fixed bottom-10 right-10 z-50 bg-[#39FF14] text-black font-black px-6 py-3 rounded-xl shadow-[0_0_25px_rgba(57,255,20,0.6)] flex items-center gap-2 text-xs uppercase tracking-widest animate-in fade-in slide-in-from-bottom-5">
          <Check size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* ========================================================================= */}
        {/* 📂 HLAVNÁ STRÁNKA (HEADER KÁNON V20) */}
        {/* ========================================================================= */}
        <header className="mb-12 border-b border-[#39FF14]/20 pb-8 animate-in fade-in slide-in-from-top-8 duration-700 text-left">
          <div className="flex items-center gap-3 mb-4">
            <HardDrive size={24} color={SYS05_COLOR} />
            <span className="text-[#39FF14] text-[10px] font-black uppercase tracking-[0.3em]">
              SYS 05 | Public Access
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Nexus Master{" "}
            <span className="text-[#39FF14] italic">Directory</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Centrálny z-indexovaný register všetkých odkazov, subdomén,
            e-mailových uzlov, sociálnych sietí, komerčných portov a B2B zmlúv
            OS Genesis. Single Source of Truth pre kompletný ekosystém.
          </p>
        </header>

        {/* 🎛️ FILTRAČNÉ CENTRUM */}
        <Sys01_05_Filters
          categories={SYS05_CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
          activeTier={activeTier}
          setActiveTier={handleTierChange}
          activeFormat={activeFormat}
          setActiveFormat={handleFormatChange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
          items={allNormalizedItems}
          themeColor={SYS05_COLOR}
        />

        {/* 🖼️ HLAVNÁ MRIEŽKA ODKAZOV */}
        <div
          id="sys05-directory-grid"
          className={`scroll-mt-36 sm:scroll-mt-28 grid ${
            viewMode === "GRID_LG"
              ? "grid-cols-1 md:grid-cols-2 gap-6"
              : viewMode === "GRID_MD"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          }`}
        >
          {filteredItems.map((item, idx) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Globe;
            const tierColor = getTierBadgeColor(item.tier);
            const isMasterLocked =
              item.tier === "MASTER" &&
              userTier !== "MASTER" &&
              userTier !== "ARCHITECT";

            return (
              <div
                key={item.id || idx}
                className="bg-[#050A0E]/90 border border-white/10 hover:border-[#39FF14]/50 rounded-2xl p-5 shadow-xl transition-all duration-300 group flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[9px] font-mono text-[#39FF14] font-bold px-2 py-0.5 rounded bg-[#39FF14]/10 border border-[#39FF14]/30 truncate max-w-[140px]">
                      {item.badge || item.id}
                    </span>
                    <span
                      className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border shrink-0"
                      style={{
                        color: tierColor,
                        borderColor: `${tierColor}40`,
                        backgroundColor: `${tierColor}15`,
                      }}
                    >
                      {item.tier}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 my-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:border-[#39FF14]/40 transition-colors">
                      <Icon size={20} style={{ color: SYS05_COLOR }} />
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-sm font-black uppercase text-white truncate tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-[10px] font-mono text-zinc-500 truncate mt-0.5">
                        {item.domain || item.url}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 my-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5">
                  <button
                    onClick={() => handleCopyUrl(item)}
                    className="py-1.5 px-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[9px] font-black uppercase text-zinc-300 hover:text-white flex items-center justify-center gap-1 transition-all"
                  >
                    <Copy size={11} className="text-[#39FF14] shrink-0" />
                    <span>Link</span>
                  </button>

                  <button
                    onClick={() => handleOpenLink(item)}
                    className={`py-1.5 px-2 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 transition-all border ${
                      isMasterLocked
                        ? "bg-red-950/40 border-red-500/40 text-red-400 hover:bg-red-900/60"
                        : "bg-[#39FF14]/10 hover:bg-[#39FF14]/30 border-[#39FF14]/40 text-white"
                    }`}
                  >
                    {isMasterLocked ? (
                      <Lock size={11} />
                    ) : (
                      <ExternalLink size={11} className="text-[#39FF14]" />
                    )}
                    <span>{isMasterLocked ? "Lock" : "Otvoriť"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <GlobalHamburgerMenu activeTab="sys05" themeColor={SYS05_COLOR} />
      <GlobalFooter themeColor={SYS05_COLOR} />
    </div>
  );
};

export default SYS05_Directory;
