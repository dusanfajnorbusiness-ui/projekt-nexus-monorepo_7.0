/* eslint-disable no-undef */
import React, { useMemo } from "react";
import {
  Search,
  X,
  LayoutGrid,
  Grid2X2,
  Grid3X3,
  Filter,
  Layers,
  Shield,
} from "lucide-react";
import * as LucideIcons from "lucide-react";

import {
  TIER_COLOR_MAP,
  TIER_OPTIONS,
  FORMAT_OPTIONS,
  calculateFilterCounts,
} from "@main-web/data/Sys01-05_Filters";
import { SoundFX } from "@shared/utils/SoundEngine.js";

// ============================================================================
// 👑 NEXUS OS: UNIFIED FILTERS COMPONENT FOR SYS 01 - SYS 05 V20.100
// File: src/components/Sys01-05_Filters.jsx
// Status: 100% GROUNDED // ZERO-ERROR HOVER ENGINE // CLEAN VARIABLE SCOPING
// ============================================================================

export const Sys01_05_Filters = ({
  categories = [],
  activeCategory = "ALL",
  setActiveCategory,
  activeTier = "ALL",
  setActiveTier,
  activeFormat = "ALL",
  setActiveFormat,
  searchQuery = "",
  setSearchQuery,
  viewMode = "GRID_MD",
  setViewMode,
  items = [],
  themeColor = "#BF00FF",
}) => {
  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();

  // 📊 VÝPOČET DYNAMICKÝCH POČÍTADIEL
  const counts = useMemo(() => {
    return calculateFilterCounts(items, activeCategory);
  }, [items, activeCategory]);

  return (
    <div id="sys-filter-anchor" className="space-y-6 mb-10 text-left">
      {/* ========================================================================= */}
      {/* 1. PRIMÁRNY FILTER: KATEGÓRIE (FLEX-WRAP) S POČÍTADLAMI */}
      {/* ========================================================================= */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const Icon = LucideIcons[cat.icon] || LucideIcons.Folder;
          const count =
            counts.categories[cat.id] || (cat.id === "ALL" ? counts.total : 0);

          return (
            <button
              key={cat.id}
              onClick={() => {
                triggerClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={triggerHover}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 border ${
                isActive
                  ? "bg-[#BF00FF]/20 border-[#BF00FF] text-white shadow-[0_0_15px_rgba(191,0,255,0.3)]"
                  : "bg-black/50 border-white/10 text-zinc-400 hover:text-white hover:border-white/25"
              }`}
              style={
                isActive
                  ? {
                      borderColor: themeColor,
                      backgroundColor: `${themeColor}25`,
                      boxShadow: `0 0 15px ${themeColor}40`,
                    }
                  : {}
              }
            >
              <Icon
                size={14}
                style={{ color: isActive ? themeColor : "#A1A1AA" }}
              />
              <span>{cat.label}</span>

              {/* 📊 BADGE POČÍTADLA */}
              <span
                className={`text-[9px] font-mono px-2 py-0.5 rounded-full border transition-colors ${
                  isActive
                    ? "bg-white text-black font-bold border-white"
                    : "bg-white/5 text-zinc-400 border-white/10"
                }`}
              >
                {count}
              </span>

              {cat.isPro && (
                <span className="text-[8px] bg-[#FFD700]/20 text-[#FFD700] px-1.5 py-0.5 rounded border border-[#FFD700]/40 font-bold">
                  VIP
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 2. SEKUNDÁRNY FILTER: TIER, FORMAT & LIVE SEARCH RADAR */}
      {/* ========================================================================= */}
      <div className="bg-black/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md space-y-4">
        {/* HORNÝ RIADOK: TIER FILTER + FORMÁT FILTER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5 pb-3">
          {/* A) TIER HODNOSTI S POČÍTADLAMI A OFICIÁLNYMI FARBAMI */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mr-1 flex items-center gap-1">
              <Shield size={12} style={{ color: themeColor }} />
              Tier:
            </span>
            {TIER_OPTIONS.map((tierOpt) => {
              const isActive = activeTier === tierOpt.id;
              const currentTierColor = TIER_COLOR_MAP[tierOpt.id] || "#A1A1AA";
              const count = counts.tiers[tierOpt.id] ?? 0;

              return (
                <button
                  key={tierOpt.id}
                  onClick={() => {
                    triggerClick();
                    setActiveTier(tierOpt.id);
                  }}
                  onMouseEnter={triggerHover}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
                    isActive
                      ? "bg-white/20 border-white text-white shadow-md"
                      : "bg-black/40 border-white/10 text-zinc-400 hover:text-white hover:border-white/40 hover:bg-white/10"
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: currentTierColor,
                          color: "#FFFFFF",
                          backgroundColor: `${currentTierColor}30`,
                        }
                      : {}
                  }
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: currentTierColor }}
                  />
                  <span>{tierOpt.label}</span>
                  <span className="text-[8px] font-mono opacity-80 px-1 rounded bg-black/40 border border-white/10">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* B) FORMÁT / POMER STRÁN S POČÍTADLAMI */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mr-1 flex items-center gap-1">
              <Layers size={12} className="text-zinc-400" />
              Formát:
            </span>
            {FORMAT_OPTIONS.map((fmt) => {
              const isActive = activeFormat === fmt.id;
              const count = counts.formats[fmt.id] ?? 0;

              return (
                <button
                  key={fmt.id}
                  onClick={() => {
                    triggerClick();
                    setActiveFormat(fmt.id);
                  }}
                  onMouseEnter={triggerHover}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
                    isActive
                      ? "bg-[#BF00FF]/30 border-[#BF00FF] text-white shadow-md"
                      : "bg-black/40 border-white/5 text-zinc-400 hover:text-white hover:border-white/40 hover:bg-white/10"
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: themeColor,
                          backgroundColor: `${themeColor}30`,
                        }
                      : {}
                  }
                >
                  <span>{fmt.label}</span>
                  <span className="text-[8px] font-mono px-1 rounded bg-black/40 border border-white/10">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SPODNÝ RIADOK: SEARCH RADAR + VIEW MODE + COUNTER STATUS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* VYHĽADÁVACÍ RADAR */}
          <div className="relative w-full sm:w-80 flex items-center">
            <Search size={16} className="absolute left-3 text-zinc-500" />
            <input
              type="text"
              placeholder="Filtrovať ID, názov alebo kampaň..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#BF00FF] transition-colors"
              style={{
                borderColor: searchQuery ? themeColor : undefined,
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 text-zinc-500 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* TELEMETRIA & GRID TOGGLE */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
              <Filter size={12} style={{ color: themeColor }} />
              ZOBRAZENÝCH:{" "}
              <strong className="text-white">{items.length}</strong> /{" "}
              {counts.total} AKTÍV
            </span>

            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("GRID_LG")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "GRID_LG"
                    ? "bg-white/20 text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
                title="Veľká mriežka (1 stĺpec mobil)"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("GRID_MD")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "GRID_MD"
                    ? "bg-white/20 text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
                title="Stredná mriežka (2 stĺpce mobil)"
              >
                <Grid2X2 size={16} />
              </button>
              <button
                onClick={() => setViewMode("GRID_SM")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "GRID_SM"
                    ? "bg-white/20 text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
                title="Kompaktná mriežka (3 stĺpce mobil)"
              >
                <Grid3X3 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sys01_05_Filters;
