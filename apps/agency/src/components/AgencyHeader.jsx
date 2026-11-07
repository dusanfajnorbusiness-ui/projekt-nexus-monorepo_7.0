
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY HEADER COMPONENT V20.95)
// Súbor: apps/agency/src/components/AgencyHeader.jsx
// Status: 100% GROUNDED // CYBER-BRUTALISM HEADER // TELEMETRY & NAVIGATION
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { useThemeSync } from "@shared/hooks/useThemeSync.js";
import { Cpu, ExternalLink, Shield, Terminal } from "lucide-react";

export const AgencyHeader = ({
  themeColor,
  dimensionName = "NEXUS AGENCY // DIGITAL INFRASTRUCTURE",
  subTitle = "18 MASTER SERVICES // ZERO STANDBY FALLBACK",
  onThemeChange,
}) => {
  // Kánonická farba pre Agency / OS Genesis Mainframe je Kybernetický Cyan (#00f3ff)
  const AGENCY_CYAN = "#00f3ff";
  const activeColor = themeColor || AGENCY_CYAN;

  return (
    <header className="w-full bg-[#03070A]/90 border-b border-[#00f3ff]/30 backdrop-blur-2xl sticky top-0 z-40 font-mono text-white py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO & BRAND TITLE */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#00f3ff]/10 border border-[#00f3ff] flex items-center justify-center shadow-[0_0_15px_#00f3ff]">
            <Cpu className="w-5 h-5 text-[#00f3ff]" />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-extrabold tracking-widest text-white uppercase flex items-center gap-2">
              NEXUS AGENCY{" "}
              <span className="text-[10px] text-[#00f3ff] bg-[#00f3ff]/10 px-2 py-0.5 rounded-full border border-[#00f3ff]/30">
                V20.95
              </span>
            </h1>
            <p className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-[#00f3ff]">
              {dimensionName} <span className="text-zinc-500">|</span> <span className="text-zinc-400">{subTitle}</span>
            </p>
            <p className="text-[10px] text-gray-400 hidden sm:block">
              OS GENESIS // DIGITAL INFRASTRUCTURE ARCHITECT
            </p>
          </div>
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-3">
          <a
            href="https://ko-fi.com/cybertech_architect/commissions"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => SoundFX?.playSuccess?.()}
            onMouseEnter={() => SoundFX?.playHover?.()}
            className="px-4 py-2 text-xs font-bold bg-[#00f3ff] text-black rounded-xl hover:bg-white transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)] flex items-center gap-1.5 uppercase tracking-wider"
          >
            Ko-Fi Shop <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AgencyHeader;
