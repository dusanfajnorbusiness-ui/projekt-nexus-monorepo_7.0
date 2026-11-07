import { SoundFX } from "@shared/utils/SoundEngine.js";
import { ArrowUpRight, Clock, Zap } from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY SERVICE CARD V20.95)
// Súbor: apps/agency/src/components/AgencyServiceCard.jsx
// Status: 100% GROUNDED // ZERO SYNTAX ERRORS // V20 CHIRURGIA
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";

// 🎨 PRÍSNA MATICA FARIEB PODĽA TIER ZÁKONA V20
const GET_TIER_CONFIG = (tierCode = "", tier = "") => {
  const code = String(tierCode || tier || "").toUpperCase();

  if (
    code.includes("MASTER") ||
    code.includes("CROWN") ||
    code.includes("MASTERMIUM")
  ) {
    return {
      label: "MASTERMIUM",
      badgeClass:
        "border-[#FF003C] bg-[#FF003C]/15 text-[#FF003C] shadow-[0_0_12px_rgba(255,0,60,0.35)]",
    };
  }
  if (code.includes("OMEGA") || code.includes("OMEGAMIUM")) {
    return {
      label: "OMEGAMIUM",
      badgeClass:
        "border-[#FFD700] bg-[#FFD700]/15 text-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.35)]",
    };
  }
  if (code.includes("PRO") || code.includes("PROMIUM")) {
    return {
      label: "PROMIUM",
      badgeClass:
        "border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.35)]",
    };
  }
  // FREE / FREEMIUM (DEFAULT CYAN)
  return {
    label: "FREE ONBOARDING",
    badgeClass:
      "border-[#00F3FF] bg-[#00F3FF]/15 text-[#00F3FF] shadow-[0_0_12px_rgba(0,243,255,0.35)]",
  };
};

export const AgencyServiceCard = ({
  service,
  onOpenModal,
  layoutView = "GRID_3",
}) => {
  if (!service) return null;

  const directKofiLink = String(
    service.kofiLink ||
      service.kofiUrl ||
      "https://ko-fi.com/cybertech_architect/commissions",
  ).trim();

  const tierConfig = GET_TIER_CONFIG(service.tierCode, service.tier);
  const serviceColor = String(service.color || "#00F3FF").trim();
  const isListMode = layoutView === "list" || layoutView === "LIST";

  return (
    <article
      onMouseEnter={() => SoundFX?.playHover?.()}
      className={`bg-[#050A0E] border border-white/10 hover:border-[#00f3ff]/60 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,243,255,0.2)] flex flex-col justify-between group relative overflow-hidden font-mono text-white ${
        isListMode ? "md:flex-row md:items-center md:gap-6" : "space-y-4"
      }`}
    >
      {/* GLOW EFEKT NA POZADÍ */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#00f3ff]/5 rounded-full blur-2xl group-hover:bg-[#00f3ff]/15 transition-all pointer-events-none" />

      {/* 5-RIADKOVÁ VERTIKÁLNA ŠTRUKTÚRA */}
      <div className="space-y-3 flex-1">
        {/* 1. RIADOK: DVOJICA VYLEPŠENÝCH ŠTÍTKOV (LEFT: SERVICE | RIGHT: TIER) */}
        <div className="flex items-center justify-between text-[10px] font-bold gap-2 flex-wrap">
          {/* ĽAVÝ ŠTÍTOK: TYP SLUŽBY & DIMENZIA */}
          <span
            style={{
              borderColor: serviceColor
                ? `${serviceColor}88`
                : "rgba(0, 243, 255, 0.6)",
              color: serviceColor || "#00F3FF",
              boxShadow: `0 0 10px ${serviceColor || "#00F3FF"}44`,
            }}
            className="px-2.5 py-1 rounded-xl border bg-black/60 uppercase tracking-wider font-extrabold backdrop-blur-md"
          >
            {service.id} // {service.dimension || "V20"}
          </span>

          {/* PRAVÝ ŠTÍTOK: TIER CODE VO FARBE TIER */}
          <span
            className={`px-2.5 py-1 rounded-xl border uppercase tracking-widest font-black backdrop-blur-md ${tierConfig.badgeClass}`}
          >
            {tierConfig.label}
          </span>
        </div>

        {/* 2. RIADOK: OBRÁZOK (IMG) S OVERLAY A TIME BADGE */}
        {(service.image || service.imageUrl) && (
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-white/30 bg-black/60">
            <img
              src={service.image || service.imageUrl}
              alt={service.title || "Nexus B2B Service"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/01-uiux-diagnostika-a-audit-webu-16x9.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-2 left-2 text-[9px] font-bold text-zinc-300 bg-black/85 px-2 py-0.5 rounded border border-white/10 backdrop-blur flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#00F3FF]" />⏳{" "}
              {service.deliveryTime || "1 - 2 dni"}
            </span>
          </div>
        )}

        {/* 3. RIADOK: CENA SLUŽBY */}
        <div className="text-base font-black text-[#FFD700] tracking-tight pt-1">
          {service.displayPrice || service.price || "Cena dohodou"}
        </div>

        {/* 4. RIADOK: NÁZOV SLUŽBY */}
        <h3 className="text-sm font-black text-white group-hover:text-[#00F3FF] transition-colors uppercase leading-snug">
          {service.title}
        </h3>

        {/* 5. RIADOK: POPIS SLUŽBY */}
        <p className="text-xs text-zinc-400 font-sans line-clamp-3 leading-relaxed">
          {service.spoilerIntro || service.goal || service.desc || ""}
        </p>
      </div>

      {/* SPODNÁ AKČNÁ LIŠTA */}
      <div
        className={`pt-4 border-t border-white/10 flex items-center gap-2 ${
          isListMode ? "md:border-t-0 md:pt-0 md:w-64" : ""
        }`}
      >
        <button
          onClick={() => {
            SoundFX?.playClick?.();
            onOpenModal?.(service);
          }}
          className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-[#00f3ff] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/15 hover:border-[#00f3ff] flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>DETAIL PROTOKOLU</span>
          <ArrowUpRight size={14} />
        </button>

        <a
          href={directKofiLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => SoundFX?.playSuccess?.()}
          className="px-3.5 py-2.5 rounded-xl bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/40 transition-all text-xs font-black uppercase flex items-center justify-center cursor-pointer shadow-[0_0_10px_rgba(0,243,255,0.2)]"
          title="Aktivovať cez Ko-Fi"
        >
          <Zap size={14} />
        </a>
      </div>
    </article>
  );
};

export default AgencyServiceCard;
