/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (OPERATORS HEADER V20.95)
// Súbor: apps/operators/src/components/OperatorsHeader.jsx
// Status: 100% GROUNDED // AMBER OPERATOR CLEARANCE (#FFAA00)
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { useThemeSync } from "@shared/hooks/useThemeSync.js";
import { Shield, Terminal, Cpu, ExternalLink } from "lucide-react";

export const OperatorsHeader = ({
  themeColor,
  dimensionName = "OPERATOR CONTROL PANEL // CORE MATRIX",
  subTitle = "SYSTEM LOGS & AUTH MATRIX // LEVEL 48 ARCHITECT",
  onThemeChange,
}) => {
  // 🎯 Kánonická farba pre Operators je Neónová Oranžová (#FFAA00)
  const OPERATOR_AMBER = "#FFAA00";
  const activeColor = themeColor || OPERATOR_AMBER;

  return (
    <header 
      className="w-full bg-[#03070A]/90 border-b backdrop-blur-2xl sticky top-0 z-40 font-mono text-white py-3 px-4 md:px-8"
      style={{ borderColor: `${activeColor}40` }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO & BRAND TITLE */}
        <div className="flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
            style={{ 
              backgroundColor: `${activeColor}15`, 
              borderColor: activeColor,
              borderWidth: "1px",
              boxShadow: `0 0 15px ${activeColor}60`
            }}
          >
            <Shield className="w-5 h-5" style={{ color: activeColor }} />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-extrabold tracking-widest text-white uppercase flex items-center gap-2">
              NEXUS OPERATORS{" "}
              <span 
                className="text-[10px] px-2 py-0.5 rounded-full border"
                style={{ 
                  color: activeColor, 
                  backgroundColor: `${activeColor}15`, 
                  borderColor: `${activeColor}40` 
                }}
              >
                V20.95
              </span>
            </h1>
            <p className="text-[10px] md:text-xs font-semibold tracking-wider uppercase" style={{ color: activeColor }}>
              {dimensionName} <span className="text-zinc-500">|</span> <span className="text-zinc-400">{subTitle}</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE STATUS DIÓDA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: activeColor, boxShadow: `0 0 8px ${activeColor}` }}
            />
            <span>LEVEL 48 // ACTIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OperatorsHeader;