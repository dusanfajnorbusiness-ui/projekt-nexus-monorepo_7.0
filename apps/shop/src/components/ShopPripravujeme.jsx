import { PRIPRAVUJEME_SECTION_TITLES, PRIPRAVUJEME_THEME_COLORS, SHOP_PRIPRAVUJEME_DATA } from "@shop/data/ShopPripravujeme.js";
import { Activity, CheckCircle2, ChevronDown, ChevronUp, Clock, Cpu, Info, Layers, Lock, ShieldCheck, Sparkles, Terminal, Video, Volume2, Zap } from "lucide-react";
/* eslint-disable no-undef */
import React, { useState } from "react";

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP PRIPRAVUJEME ACCORDION V20.0)
// File: src/components/ShopPripravujeme.jsx
// Status: STRICTLY GROUNDED // REUSABLE ROADMAP SPOILER ACCORDION FOR ALL 3 MEDIA
// Core Version: BC-PRIPRAVUJEME-UI V20.0
// ============================================================================

export const ShopPripravujeme = ({
  type = "apps",
  handleShowTooltip,
  handleUpdateTooltipPos,
  handleHideTooltip,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Data resolution according to type
  const items = SHOP_PRIPRAVUJEME_DATA[type] || [];
  const sectionTitle =
    PRIPRAVUJEME_SECTION_TITLES[type] || "🚀 PRIPRAVUJEME // THE ROADMAP";
  const themeColor = PRIPRAVUJEME_THEME_COLORS[type] || "#00E5FF";

  // Section Icon Picker
  const SectionIcon =
    type === "audios" ? Volume2 : type === "videos" ? Video : Cpu;

  const showFn = handleShowTooltip || (() => {});
  const posFn = handleUpdateTooltipPos || (() => {});
  const hideFn = handleHideTooltip || (() => {});

  return (
    <div
      className="w-full max-w-full min-w-0 mb-8 rounded-2xl border bg-[#050A0E]/90 backdrop-blur-2xl shadow-2xl relative overflow-hidden transition-all duration-300 font-mono text-left"
      style={{
        borderColor: `${themeColor}40`,
        boxShadow: isOpen ? `0 0 25px ${themeColor}20` : "none",
      }}
    >
      {/* 👑 ACCORDION HEADER BAR */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={(e) =>
          showFn(
            "PLÁNOVANÁ ROADMAPA",
            `Rozbaliť / zbaliť zoznam ${items.length} plánovaných pripravovaných uzlov v sekcii ${type.toUpperCase()}`,
            e,
          )
        }
        onMouseMove={posFn}
        onMouseLeave={hideFn}
        className="w-full p-4 md:p-5 flex items-center justify-between gap-4 bg-gradient-to-r from-black/80 via-[#080d12] to-black hover:bg-white/5 transition-colors cursor-pointer select-none"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className="p-2.5 rounded-xl border shrink-0 flex items-center justify-center"
            style={{
              color: themeColor,
              borderColor: `${themeColor}60`,
              backgroundColor: `${themeColor}15`,
              boxShadow: `0 0 12px ${themeColor}30`,
            }}
          >
            <SectionIcon size={20} className="animate-pulse" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span
                className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border"
                style={{
                  color: themeColor,
                  borderColor: `${themeColor}40`,
                  backgroundColor: `${themeColor}10`,
                }}
              >
                THE ROADMAP // {type.toUpperCase()}
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 uppercase tracking-wider">
                {items.length} PRIPRAVOVANÝCH UZLOV
              </span>
            </div>
            <h2 className="text-xs md:text-sm font-black text-white tracking-wider uppercase truncate">
              {sectionTitle}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline-block text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
            {isOpen ? "[ ZBALIŤ SPOILER ]" : "[ ROZBALIŤ PLAN ]"}
          </span>
          <div
            className="p-2 rounded-lg border text-white transition-transform duration-300"
            style={{
              borderColor: `${themeColor}40`,
              backgroundColor: `${themeColor}10`,
            }}
          >
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </button>

      {/* 🚀 ACCORDION BODY (INFORMATIONAL CARDS ONLY - NO BUTTONS) */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/60 p-4 md:p-6 space-y-4 animate-in fade-in duration-300">
          {/* NOTICE BANNER */}
          <div className="p-3 bg-black/80 border border-yellow-500/30 rounded-xl flex items-center justify-between gap-3 text-[10px] text-zinc-400 font-mono">
            <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-wider">
              <Info size={14} className="shrink-0" />
              <span>[ ℹ️ INFORMACNÝ PREHĽAD ROADMAPY ]</span>
            </div>
            <span className="hidden md:inline-block text-zinc-500 text-[9px]">
              Karty slúžia výhradne ako plánovaný vývojový zoznam bez akčných
              nákupných tlačidiel.
            </span>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => {
              const itemColor = item.color || themeColor;

              return (
                <div
                  key={item.id}
                  className="bg-[#080d12] border border-white/10 rounded-xl p-4 flex flex-col justify-between gap-3 hover:border-white/30 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
                  style={{
                    boxShadow: `0 0 15px rgba(0,0,0,0.5)`,
                  }}
                >
                  {/* TOP BADGES BAR */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border"
                        style={{
                          color: itemColor,
                          borderColor: `${itemColor}50`,
                          backgroundColor: `${itemColor}15`,
                        }}
                      >
                        {item.dimension || "ROADMAP"}
                      </span>
                      {item.platform && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-white/5 text-zinc-300 border border-white/10 uppercase">
                          {item.platform}
                        </span>
                      )}
                      {item.duration && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-white/5 text-yellow-400 border border-yellow-500/30 uppercase flex items-center gap-1">
                          <Clock size={10} /> {item.duration}
                        </span>
                      )}
                    </div>

                    <span className="px-2 py-0.5 rounded text-[9px] font-black bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 uppercase tracking-widest shrink-0">
                      {item.tier || "STANDBY"}
                    </span>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <div>
                    <h3 className="text-xs font-black text-white group-hover:text-[#FFD700] transition-colors tracking-wide mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* SPECS / FEATURES PILLS */}
                  {item.specs && item.specs.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-white/5">
                      {item.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10 font-bold"
                        >
                          ⚡ {spec}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* STATUS BAR BOTTOM */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                    <span className="flex items-center gap-1 text-yellow-400/90 font-bold">
                      <Lock size={10} />{" "}
                      {item.status || "[ STATUS: VO VÝVOJI ]"}
                    </span>
                    {item.goal && (
                      <span
                        className="text-zinc-500 truncate max-w-[120px]"
                        title={item.goal}
                      >
                        {item.goal}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPripravujeme;
