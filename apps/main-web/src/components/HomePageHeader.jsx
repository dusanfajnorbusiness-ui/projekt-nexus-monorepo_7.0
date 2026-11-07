import { SoundFX } from "@shared/utils/SoundEngine";
import { ExternalLink, Shield } from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (HOMEPAGE HEADER COMPONENT V20.95)
// Súbor: src/components/HomePageHeader.jsx
// Status: 100% GROUNDED // DYNAMIC DIMENSION COLOR // 1:1 AGENCY SYNC
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import { useThemeSync } from "@shared/hooks/useThemeSync.js";

export const HomePageHeader = ({ 
  themeColor, 
  dimensionName = "UNIFIED CYBERKINETIC MAINFRAME",
  onThemeChange
}) => {
  // Kánonická farba pre HomePage / ID01 Mainframe je VŽDY Neon Green (#39FF14)
  const ID01_GREEN = "#39FF14";
  const activeColor = themeColor || ID01_GREEN;

  // 🟢 Oznámime rodičovskému App.jsx, že sme na zelenej dimenzii ID01
  useThemeSync(ID01_GREEN, onThemeChange);

  return (
    <header 
      className="w-full bg-[#03070A]/90 border-b backdrop-blur-2xl sticky top-0 z-40 font-mono text-white py-3 px-4 md:px-8 transition-colors duration-500"
      style={{
        borderBottomColor: `${activeColor}40`,
        boxShadow: `0 4px 20px ${activeColor}15`
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO & BRAND TITLE WITH DYNAMIC DIMENSION COLOR */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => SoundFX?.playClick?.()}
        >
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
            style={{
              backgroundColor: `${activeColor}15`,
              border: `1px solid ${activeColor}`,
              boxShadow: `0 0 15px ${activeColor}40`
            }}
          >
            <Shield className="w-5 h-5" style={{ color: activeColor }} />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-extrabold tracking-widest text-white uppercase flex items-center gap-2">
              PROJEKT NEXUS{" "}
              <span 
                className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                style={{
                  color: activeColor,
                  backgroundColor: `${activeColor}15`,
                  border: `1px solid ${activeColor}40`
                }}
              >
                V20.95
              </span>
            </h1>
            <p className="text-[10px] text-gray-400 hidden sm:block uppercase tracking-wide">
              OS GENESIS // <span style={{ color: activeColor }}>{dimensionName}</span>
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
            className="px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 uppercase tracking-wider text-black hover:bg-white"
            style={{
              backgroundColor: activeColor,
              boxShadow: `0 0 15px ${activeColor}50`
            }}
          >
            Ko-Fi Shop <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;