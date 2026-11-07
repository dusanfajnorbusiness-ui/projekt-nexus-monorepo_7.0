import React from "react";
import { Hash, AlignLeft, X, PenTool } from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (NAPOJENÉ NA TVOJ MODULÁRNY SYSTÉM)
// VO SVOJOM VS CODE ODKOMENTUJ TIETO RIADKY A ZMAŽ MOCK BLOK NIŽŠIE
// ============================================================================
import { DIMENSION_DESCRIPTIONS } from "@main-web/data/DimensionDescriptions.js";
import { getTierColor } from "@shared/data/nexusConfig.js";

// ============================================================================
// 🛑 MOCK PRE CANVAS NÁHĽAD (ZMAZAŤ V LOKÁLNOM PROJEKTE) 🛑
// ============================================================================

// ============================================================================

const CATEGORY_COLORS = {
  system: "#FF003C",
  cyber: "#00FFFF",
  it: "#0070FF",
  philosophy: "#BF00FF",
  psychology: "#FF1493",
  psychiatry: "#FF8C00",
  spiritual: "#FFD700",
  religion: "#F5F5DC",
  relationships: "#FF007F",
  esotericism: "#9400D3",
  zen: "#39FF14",
  meditation: "#00FA9A",
  contemplation: "#87CEEB",
  sport: "#FF4500",
  health: "#32CD32",
  games: "#FFFF00",
  politics: "#8B0000",
  habits: "#1E90FF",
  other: "#A9A9A9",
  uncategorized: "#555555",
};

export const RepresentativeHeader = ({ engine, userState }) => {
  // Komponent číta vybranú kategóriu priamo z Engine Filtrov
  const categoryId = engine?.filters?.category;

  if (!categoryId || categoryId === "ALL" || categoryId === "uncategorized")
    return null;

  // ⚡ FIX: Bezpečná normalizácia kľúča
  const normalizedCatId = String(categoryId).toLowerCase();
  const catMeta =
    DIMENSION_DESCRIPTIONS[categoryId] ||
    DIMENSION_DESCRIPTIONS[normalizedCatId];

  if (!catMeta) return null;

  // ⚡ FIX: Farba priamo z meta dát dimenzie
  const catColor = catMeta.color || CATEGORY_COLORS[normalizedCatId] || "#555";
  const operatorColor = getTierColor(userState?.tier || "FREE");

  return (
    <div
      className="relative flex flex-col justify-center rounded-[2rem] overflow-hidden p-6 md:p-10 mb-8 shadow-2xl border border-[#222] animate-in fade-in zoom-in-95 duration-500 min-h-[200px] group transition-all"
      style={{
        borderLeft: `4px solid ${catColor}`,
        backgroundColor: "#0a0a0a",
        background: `linear-gradient(270deg, ${operatorColor}10 0%, #0a0a0a 60%)`,
      }}
    >
      {/* ⚡ TLAČIDLO PRE ZRUŠENIE FILTRA */}
      <button
        onClick={() => {
          if (engine?.setFilters)
            engine.setFilters((p) => ({ ...p, category: "ALL" }));
        }}
        className="absolute top-6 right-6 z-20 p-2 bg-black/60 border border-white/10 text-white/40 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 rounded-xl transition-all"
        title="Zrušiť filter kategórie"
      >
        <X size={16} />
      </button>

      {/* ⚡ Vodoznak pozadia (Ikona Hash) */}
      <div className="absolute -right-10 -bottom-10 opacity-[0.03] rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
        <Hash size={180} style={{ color: catColor }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* 1. Zjednotený Subtitle: Verzia a Kontext (Kopíruje dizajn z Obchodu) */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="p-2 rounded-lg border transition-colors duration-500"
            style={{
              backgroundColor: `${catColor}10`,
              borderColor: `${catColor}30`,
            }}
          >
            <AlignLeft size={16} style={{ color: catColor }} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">
            FILTER_AKTÍVNY // {normalizedCatId}
          </span>
        </div>

        {/* 2. Zjednotený Hero Nadpis (4xl / 6xl Master Standard) */}
        <h2
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic flex flex-col md:flex-row md:items-center gap-2 md:gap-4 transition-colors duration-500 mb-6 text-white"
          style={{ textShadow: `0 0 30px ${catColor}40` }}
        >
          <span style={{ color: catColor }}>{catMeta.name}</span>
        </h2>

        {/* 3. Sémantický Popis */}
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-mono max-w-3xl mb-8">
          {catMeta.desc}
        </p>

        {/* 4. Tlačidlo Auto-Focus Composer */}
        <div className="flex items-center relative z-20">
          <button
            onClick={() => {
              if (engine?.setFilters)
                engine.setFilters((p) => ({ ...p, category: categoryId }));
              window.dispatchEvent(new Event("nexus_focus_composer"));
            }}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-[10px] font-black uppercase tracking-widest text-white transition-all rounded-xl flex items-center gap-3 shadow-lg"
          >
            <PenTool size={14} style={{ color: operatorColor }} /> Spustiť
            Diskusiu k Sektoru
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeHeader;
