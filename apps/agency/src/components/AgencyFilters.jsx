import { AGENCY_FILTERS_CONFIG } from "@agency/data/AgencyFiltersData.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { Filter, Layers, LayoutGrid, List, RotateCcw, Search } from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY FILTERS V20.95)
// Súbor: apps/agency/src/components/AgencyFilters.jsx
// Status: 100% GROUNDED // 7 CATEGORIES COUNTER + ROBUST TIER MATCHING
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React, { useMemo } from "react";

// 🎨 MAPA FARIEB TIER PRE SEKUNDÁRNY FILTER
const TIER_COLOR_MAP = {
  ALL: "#00F3FF",
  FREE: "#00F3FF",
  FREEMIUM: "#00F3FF",
  PROMIUM: "#39FF14",
  PRO: "#39FF14",
  OMEGAMIUM: "#FFD700",
  OMEGA: "#FFD700",
  MASTERMIUM: "#FF003C",
  MASTER: "#FF003C",
};

// 🧮 HELPER FUNCTION PRE SPRAVODLIVÉ URČENIE KATEGÓRIE SLUŽBY
export const getPrimaryCategoryKey = (item) => {
  if (!item) return "srv-01-web";
  const idStr = String(item.id || item.nodeKey || "").toUpperCase();

  // 1. ABSOLÚTNA PRIORITA PRE SRV_14 AŽ SRV_18 (07. APPS, MEDIA & ENTERPRISE)
  if (
    idStr.includes("SRV_14") ||
    idStr.includes("SRV_15") ||
    idStr.includes("SRV_16") ||
    idStr.includes("SRV_17") ||
    idStr.includes("SRV_18") ||
    idStr.includes("14-VIDEOS") ||
    idStr.includes("15-AUDIOS") ||
    idStr.includes("16-IMAGES") ||
    idStr.includes("17-DOCUMENTS") ||
    idStr.includes("18-APPS")
  ) {
    return "srv-07-enterprise";
  }

  // 2. EXAKTNÉ TESTY PRE OSTATNÉ SLUŽBY
  if (
    idStr.includes("SRV_12") ||
    idStr.includes("SRV_13") ||
    idStr.includes("12-TRINITY") ||
    idStr.includes("13-FRANCHISE")
  )
    return "srv-06-dev";
  if (
    idStr.includes("SRV_09") ||
    idStr.includes("SRV_10") ||
    idStr.includes("SRV_11") ||
    idStr.includes("09-CODM") ||
    idStr.includes("10-FFVII") ||
    idStr.includes("11-FFVIII")
  )
    return "srv-05-gaming";
  if (idStr.includes("SRV_08") || idStr.includes("08-DYNAMICKY"))
    return "srv-04-video";
  if (
    idStr.includes("SRV_05") ||
    idStr.includes("SRV_06") ||
    idStr.includes("SRV_07") ||
    idStr.includes("05-UPRAVA") ||
    idStr.includes("06-PISANIE") ||
    idStr.includes("07-GHOSTWRITING")
  )
    return "srv-03-copy";
  if (
    idStr.includes("SRV_03") ||
    idStr.includes("SRV_04") ||
    idStr.includes("03-EXCEL") ||
    idStr.includes("04-VIRTUALNA")
  )
    return "srv-02-data";
  if (
    idStr.includes("SRV_01") ||
    idStr.includes("SRV_02") ||
    idStr.includes("01-UIUX") ||
    idStr.includes("02-FRONTEND")
  )
    return "srv-01-web";

  // 3. FALLBACK PODĽA SUBCATEGORY SÚBORU
  const sub = String(item.subCategory || "").toLowerCase();
  if (sub === "srv-07-enterprise") return "srv-07-enterprise";
  if (sub === "srv-06-dev") return "srv-06-dev";
  if (sub === "srv-05-gaming") return "srv-05-gaming";
  if (sub === "srv-04-video") return "srv-04-video";
  if (sub === "srv-03-copy") return "srv-03-copy";
  if (sub === "srv-02-data") return "srv-02-data";

  return "srv-01-web";
};

// 🧮 HELPER FUNCTION PRE SPRAVODLIVÉ URČENIE TIER KĽÚČA
export const getTierKey = (item) => {
  if (!item) return "FREE";
  const tierVal = String(item.tier || item.tierCode || "").toUpperCase();
  if (
    tierVal.includes("MASTER") ||
    tierVal.includes("CROWN") ||
    tierVal.includes("MASTERMIUM")
  )
    return "MASTERMIUM";
  if (tierVal.includes("OMEGA") || tierVal.includes("OMEGAMIUM"))
    return "OMEGAMIUM";
  if (tierVal.includes("PRO") || tierVal.includes("PROMIUM")) return "PROMIUM";
  return "FREE";
};

export const AgencyFilters = ({
  activeSubcat = "ALL",
  onSubcatChange,
  activeTier = "ALL",
  onTierChange,
  searchTerm = "",
  onSearchChange,
  layoutView = "GRID_3",
  onLayoutChange,
  onResetFilters,
  dataItems = [],
}) => {
  const itemsList = useMemo(() => {
    if (Array.isArray(dataItems)) return dataItems;
    if (typeof dataItems === "object" && dataItems !== null)
      return Object.values(dataItems);
    return [];
  }, [dataItems]);

  // 🧮 DYNAMICKÝ PREPOČET POČÍTADLA PRE 7 PRIMÁRNYCH KATEGÓRIÍ
  const subcatCounts = useMemo(() => {
    const map = { ALL: itemsList.length };
    (AGENCY_FILTERS_CONFIG?.mainCategories || []).forEach((cat) => {
      if (cat.key !== "ALL") map[cat.key] = 0;
    });
    itemsList.forEach((item) => {
      const key = getPrimaryCategoryKey(item);
      map[key] = (map[key] || 0) + 1;
    });
    return map;
  }, [itemsList]);

  // 🧮 DYNAMICKÝ PREPOČET POČÍTADLA PRE SEKUNDÁRNE TIERY
  const tierCounts = useMemo(() => {
    const map = {
      ALL: itemsList.length,
      FREE: 0,
      PROMIUM: 0,
      OMEGAMIUM: 0,
      MASTERMIUM: 0,
    };
    itemsList.forEach((item) => {
      const key = getTierKey(item);
      map[key] = (map[key] || 0) + 1;
    });
    return map;
  }, [itemsList]);

  return (
    <div className="bg-[#03070A] border border-white/10 rounded-2xl p-4 md:p-6 space-y-5 font-mono text-white shadow-xl backdrop-blur-md">
      {/* SEARCH BAR + CONTROLS */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#00f3ff]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={
              AGENCY_FILTERS_CONFIG?.searchPlaceholder ||
              "Vyhľadať B2B službu..."
            }
            className="w-full bg-black/60 border border-white/15 focus:border-[#00f3ff] rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#00f3ff] transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* LAYOUT SWITCHER */}
          <div className="flex items-center bg-black/60 border border-white/15 rounded-xl p-1">
            <button
              onClick={() => {
                SoundFX?.playClick?.();
                onLayoutChange?.("GRID_3");
              }}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                layoutView === "GRID_3" || layoutView === "grid"
                  ? "bg-[#00f3ff] text-black shadow-[0_0_10px_#00f3ff]"
                  : "text-zinc-400 hover:text-white"
              }`}
              title="Mriežka 3 stĺpce"
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => {
                SoundFX?.playClick?.();
                onLayoutChange?.("list");
              }}
              className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                layoutView === "list" || layoutView === "LIST"
                  ? "bg-[#00f3ff] text-black shadow-[0_0_10px_#00f3ff]"
                  : "text-zinc-400 hover:text-white"
              }`}
              title="Zoznam pod sebou"
            >
              <List size={15} />
            </button>
          </div>

          {/* RESET BUTTON */}
          <button
            onClick={() => {
              SoundFX?.playClick?.();
              onResetFilters?.();
            }}
            className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 hover:border-[#00f3ff] text-zinc-300 hover:text-[#00f3ff] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* 🏢 PRIMÁRNY FILTER: 7 KATEGÓRIÍ S POČÍTADLAMI */}
      <div className="space-y-2">
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
          <Layers size={12} className="text-[#00f3ff]" />
          <span>PRIMÁRNY FILTER (7 SEKTOROV):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(AGENCY_FILTERS_CONFIG?.mainCategories || []).map((cat) => {
            const count = subcatCounts[cat.key] || 0;
            const isActive = activeSubcat === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => {
                  SoundFX?.playClick?.();
                  onSubcatChange?.(cat.key);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-[#00f3ff] text-black border-[#00f3ff] shadow-[0_0_12px_rgba(0,243,255,0.4)]"
                    : "bg-white/5 border-white/10 text-zinc-300 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${
                    isActive
                      ? "bg-black/30 text-black"
                      : "bg-black/60 text-[#00f3ff]"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 🏷️ SEKUNDÁRNY FILTER: TIER CODES (DOKONALÉ SLUŽOBNÉ PREPOJENIE) */}
      <div className="space-y-2 pt-2 border-t border-white/10">
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
          <Filter size={12} className="text-[#FFD700]" />
          <span>SEKUNDÁRNY FILTER (TIER ACCESS):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(AGENCY_FILTERS_CONFIG?.categories || []).map((tier) => {
            const count = tierCounts[tier.key] || 0;
            const isActive = activeTier === tier.key;
            const tierColor = TIER_COLOR_MAP[tier.key] || "#00F3FF";

            return (
              <button
                key={tier.key}
                onClick={() => {
                  SoundFX?.playClick?.();
                  onTierChange?.(tier.key);
                }}
                style={{
                  backgroundColor: isActive
                    ? tierColor
                    : "rgba(255, 255, 255, 0.05)",
                  borderColor: isActive
                    ? tierColor
                    : "rgba(255, 255, 255, 0.1)",
                  color: isActive ? "#000000" : "#E4E4E7",
                  boxShadow: isActive ? `0 0 12px ${tierColor}66` : "none",
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer"
              >
                <span>{tier.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-md text-[10px] font-black ${
                    isActive
                      ? "bg-black/30 text-black"
                      : "bg-black/60 text-white"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AgencyFilters;
