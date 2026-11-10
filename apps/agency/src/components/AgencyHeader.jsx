/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY HEADER — STRICT GHOST HUD V20.95)
// Súbor: apps/agency/src/components/AgencyHeader.jsx
// Status: 100% GROUNDED // ZERO LEAK // GHOST PROFILE & UPLINK // CALENDAR INJECTED
// CORE_VERSION: AGENCY-NAV-V20.95
// ============================================================================

import React from "react";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import {
  Cpu,
  ExternalLink,
  Briefcase,
  Terminal,
  Users,
  Calendar,
  Settings,
  User,
  LogIn,
} from "lucide-react";

export const AgencyHeader = ({
  themeColor,
  dimensionName = "NEXUS AGENCY // DIGITAL INFRASTRUCTURE",
  subTitle = "18 MASTER SERVICES // ZERO STANDBY FALLBACK",
  userState,
}) => {
  const AGENCY_CYAN = "#00f3ff";

  // 🛑 100% HLUCHÝ GHOST HANDLER — ŽIADNY REDIRECT, ŽIADNY PÁD
  const handleDeadClick = (nodeName) => {
    if (typeof SoundFX !== "undefined" && SoundFX?.denied) {
      SoundFX.denied();
    } else if (typeof SoundFX !== "undefined" && SoundFX?.click) {
      SoundFX.click();
    }
    console.log(`[AGENCY HUD]: Uzol '${nodeName}' je zablokovaný (PRÍPRAVA SAMOSTATNÉHO UPLINKU).`);
  };

  const handleAgencyHomeClick = () => {
    if (typeof SoundFX !== "undefined" && SoundFX?.click) SoundFX.click();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="w-full bg-[#03070A]/95 border-b border-[#00f3ff]/30 backdrop-blur-2xl sticky top-0 z-40 font-mono text-white py-2.5 px-3 md:px-6 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* LOGO & BRAND TITLE */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            onClick={handleAgencyHomeClick}
            className="flex items-center gap-2.5 group cursor-pointer"
            title="Nexus Agency // B2B Digital Infrastructure"
          >
            <div className="w-8 h-8 rounded-xl bg-[#00f3ff]/10 border border-[#00f3ff] flex items-center justify-center shadow-[0_0_12px_#00f3ff] group-hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4 text-[#00f3ff]" />
            </div>
            <div>
              <h1 className="text-xs md:text-sm font-extrabold tracking-widest text-white uppercase flex items-center gap-1.5 leading-none">
                NEXUS AGENCY{" "}
                <span className="text-[9px] text-[#00f3ff] bg-[#00f3ff]/10 px-1.5 py-0.2 rounded-full border border-[#00f3ff]/30">
                  V20.95
                </span>
              </h1>
              <p className="text-[9px] font-semibold tracking-wider uppercase text-[#00f3ff] hidden sm:block mt-0.5">
                {dimensionName}
              </p>
            </div>
          </div>
        </div>

        {/* 🧭 CYBER-DOCK: AGENCY (ACTIVE) -> BLOG -> OPERATORS -> ORGANIZER -> SETTINGS */}
        <div className="flex items-center gap-1 overflow-x-auto hide-scroll py-0.5">
          {/* 🌟 1. AKTÍVNA AGENCY */}
          <button
            title="NEXUS AGENCY — 18 B2B SLUŽIEB (AKTÍVNY UZOL)"
            onClick={handleAgencyHomeClick}
            style={{
              backgroundColor: `${AGENCY_CYAN}20`,
              borderColor: `${AGENCY_CYAN}80`,
              boxShadow: `0 0 12px ${AGENCY_CYAN}40`,
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white border shrink-0 cursor-pointer hover:bg-[#00f3ff]/30 transition-all"
          >
            <Briefcase size={13} style={{ color: AGENCY_CYAN }} className="shrink-0" />
            <span>Agency</span>
            <span className="text-[8px] bg-[#00f3ff]/20 text-[#00f3ff] px-1 rounded border border-[#00f3ff]/40 ml-0.5">
              ACTIVE
            </span>
          </button>

          {/* 👻 2. HLUCHÝ BLOG */}
          <button
            title="[ 🚧 UZOL VO VÝSTAVBE // B2B MATRIX ]"
            onClick={() => handleDeadClick("Blog")}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-500 border border-transparent shrink-0 opacity-40 hover:opacity-60 cursor-not-allowed transition-all"
          >
            <Terminal size={13} className="shrink-0" />
            <span className="hidden sm:inline">Blog</span>
          </button>

          {/* 👻 3. HLUCHÍ OPERATORS */}
          <button
            title="[ 🚧 UZOL VO VÝSTAVBE // B2B MATRIX ]"
            onClick={() => handleDeadClick("Operators")}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-500 border border-transparent shrink-0 opacity-40 hover:opacity-60 cursor-not-allowed transition-all"
          >
            <Users size={13} className="shrink-0" />
            <span className="hidden sm:inline">Operators</span>
          </button>

          {/* 👻 4. HLUCHÝ ORGANIZER (DOPLNENÝ) */}
          <button
            title="[ 🚧 UZOL VO VÝSTAVBE // ORGANIZÉR & KALENDÁR ]"
            onClick={() => handleDeadClick("Organizer")}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-500 border border-transparent shrink-0 opacity-40 hover:opacity-60 cursor-not-allowed transition-all"
          >
            <Calendar size={13} className="shrink-0" />
            <span className="hidden sm:inline">Organizer</span>
          </button>

          {/* 👻 5. HLUCHÉ SETTINGS */}
          <button
            title="[ 🚧 SYSTÉMOVÉ NASTAVENIA // B2B MATRIX ]"
            onClick={() => handleDeadClick("Settings")}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-500 border border-transparent shrink-0 opacity-40 hover:opacity-60 cursor-not-allowed transition-all"
          >
            <Settings size={13} className="shrink-0" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>

        {/* 🛡️ PRAVÁ ČASŤ: KO-FI B2B SHOP + ZABLOKOVANÝ PROFIL A LOGIN */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://ko-fi.com/cybertech_architect/commissions"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => SoundFX?.playSuccess?.()}
            onMouseEnter={() => SoundFX?.playHover?.()}
            className="px-3 py-1.5 text-[11px] font-bold bg-[#00f3ff] text-black rounded-xl hover:bg-white transition-all shadow-[0_0_12px_rgba(0,243,255,0.3)] flex items-center gap-1.5 uppercase tracking-wider cursor-pointer"
          >
            <span>Ko-Fi Shop</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* 🔒 ZABLOKOVANÝ AVATAR OPERÁTORA (ČAKÁ NA SAMOSTATNÝ UPLINK) */}
          <div
            onClick={() => handleDeadClick("Profil Operátora")}
            className="w-7 h-7 rounded-full border border-gray-600 cursor-not-allowed overflow-hidden flex items-center justify-center bg-black/60 shrink-0 opacity-50 hover:opacity-75 transition-opacity"
            title="[ 🔒 PROFIL ZABLOKOVANÝ // PRÍPRAVA SAMOSTATNÉHO UPLINKU ]"
          >
            <User size={13} className="text-gray-400" />
          </div>

          {/* 🔒 ZABLOKOVANÉ LOGIN TLAČIDLO */}
          <button
            onClick={() => handleDeadClick("Uplink Login")}
            title="[ 🔒 LOGIN UPLINK ZABLOKOVANÝ // VO VÝSTAVBE ]"
            className="p-1.5 rounded-lg bg-gray-800/40 text-gray-400 border border-gray-700/50 hover:bg-gray-800/70 transition-all shrink-0 cursor-not-allowed opacity-60"
          >
            <LogIn size={13} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AgencyHeader;