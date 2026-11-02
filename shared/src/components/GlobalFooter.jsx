import React from "react";
import {
  Shield,
  Terminal,
  Cpu,
  Database,
  Zap,
  BrainCircuit,
} from "lucide-react";

export const GlobalFooter = ({
  userTier,
  themeColor = "#39FF14",
  activeTab = "home",
  onNavigate,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/5 bg-[#020408]/80 backdrop-blur-xl overflow-hidden font-mono">
      {/* Dynamický glow efekt podfarbený farbou dimenzie */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-50 transition-colors duration-1000"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${themeColor}, transparent)`,
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-[100px] opacity-10 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: themeColor }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {/* Left Side: Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div
                className="p-1.5 rounded-lg border border-white/10 transition-colors duration-1000 shadow-inner"
                style={{
                  backgroundColor: `${themeColor}15`,
                  color: themeColor,
                }}
              >
                <Shield size={16} />
              </div>
              <span className="font-black tracking-widest uppercase italic text-white text-sm transition-colors duration-1000">
                Nexus{" "}
                <span style={{ color: themeColor }} className="not-italic">
                  OS
                </span>
              </span>
            </div>
            <div className="text-[9px] text-white/40 uppercase tracking-[0.3em] mt-1 flex items-center gap-2">
              CyberTech Architect{" "}
              <span
                style={{ color: themeColor }}
                className="font-black text-[12px]"
              >
                ×
              </span>{" "}
              AI Gemini
            </div>
          </div>

          {/* Center: Status Dashboard */}
          <div className="flex flex-col sm:flex-row items-center gap-4 border border-white/5 bg-white/[0.02] px-6 py-3 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000"
                style={{
                  backgroundColor: themeColor,
                  boxShadow: `0 0 10px ${themeColor}`,
                }}
              />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/50 flex items-center gap-2">
                Sector:{" "}
                <span
                  style={{ color: themeColor }}
                  className="transition-colors duration-1000"
                >
                  {activeTab}
                </span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-white/30" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/50">
                Tier: {userTier}
              </span>
            </div>
          </div>

          {/* Right Side: Copyright & Tech */}
          <div className="flex flex-col items-center md:items-end gap-3 text-[9px] text-white/30 uppercase tracking-widest">
            <div className="flex items-center gap-4 mb-1">
              <Cpu
                size={14}
                className="opacity-40 hover:opacity-100 transition-opacity"
                title="Processing Core"
              />
              <Database
                size={14}
                className="opacity-40 hover:opacity-100 transition-opacity"
                title="Data Matrix"
              />
              <BrainCircuit
                size={14}
                className="opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: themeColor }}
                title="AI Integration"
              />
              <Zap
                size={14}
                className="opacity-40 hover:opacity-100 transition-opacity"
                title="Energy Output"
              />
            </div>
            {/* ⚖️ VOP & SÚKROMIE (Pre Google/Meta Botov a čistý Routing) */}
            <div className="flex items-center gap-3 text-[8px] font-black tracking-widest text-white/30 mb-1">
              <a
                href="/vop"
                className="hover:text-[#00FFFF] transition-colors uppercase cursor-pointer"
              >
                VOP
              </a>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <a
                href="/privacy"
                className="hover:text-[#00FFFF] transition-colors uppercase cursor-pointer"
              >
                Súkromie
              </a>
            </div>
            <p>© {currentYear} NEXUS PROTOCOL. All Rights Reserved.</p>
            <p className="text-[7px] text-white/20 font-black tracking-[0.4em] uppercase">
              Co-Engineered by Sergeant [CORE]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
