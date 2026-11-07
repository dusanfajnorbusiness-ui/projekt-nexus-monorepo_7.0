import { getTooltip } from "@shared/data/TooltipsShop.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { ShopVIP_Ticket } from "@shop/components/ShopVIP_Ticket.jsx";
import { Cpu, ExternalLink, FileText, Image as ImageIcon, Music, ShoppingBag, Video } from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP HEADER COMPONENT V20.95)
// Súbor: apps/shop/src/components/ShopHeaderComponent.jsx
// Status: 100% GROUNDED // CYBER-BRUTALISM SHOP HEADER & 6 SIBLINGS NAV
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";

export const SHOP_NAV_TABS = [
  {
    id: "shop",
    label: "NEXUS SHOP",
    icon: ShoppingBag,
    color: "#FFD700",
    signal: "bg-amber-400 animate-pulse",
    tooltipKey: "SHOP_MAIN",
    desc: "Hlavný komerčný obchod, Členstvá, OC Kredity a Matrix FX",
    activeBorder: "border-[#FFD700]",
    activeBg: "bg-[#FFD700]/15",
    glow: "shadow-[0_0_15px_rgba(255,215,0,0.3)]",
  },
  {
    id: "videos",
    label: "VIDEO MEDIA",
    icon: Video,
    color: "#9D00FF",
    signal: "bg-purple-500",
    tooltipKey: "SHOP_VIDEO",
    desc: "Dynamické videá, Shorts, Reels a 4K slučky",
    activeBorder: "border-[#9D00FF]",
    activeBg: "bg-[#9D00FF]/15",
    glow: "shadow-[0_0_15px_rgba(157,0,255,0.3)]",
  },
  {
    id: "audios",
    label: "AUDIO MEDIA",
    icon: Music,
    color: "#FF0055",
    signal: "bg-rose-500",
    tooltipKey: "SHOP_AUDIO",
    desc: "Hudobný katalóg, Soundtracks a SFX efekty",
    activeBorder: "border-[#FF0055]",
    activeBg: "bg-[#FF0055]/15",
    glow: "shadow-[0_0_15px_rgba(255,0,85,0.3)]",
  },
  {
    id: "images",
    label: "IMAGE MEDIA",
    icon: ImageIcon,
    color: "#FF9900",
    signal: "bg-orange-400",
    tooltipKey: "SHOP_IMAGE",
    desc: "Avatary, Wallpapery a vizuálne aktíva",
    activeBorder: "border-[#FF9900]",
    activeBg: "bg-[#FF9900]/15",
    glow: "shadow-[0_0_15px_rgba(255,153,0,0.3)]",
  },
  {
    id: "documents",
    label: "DOCUMENTS",
    icon: FileText,
    color: "#00F3FF",
    signal: "bg-cyan-400",
    tooltipKey: "SHOP_DOCUMENTS",
    desc: "E-booky, PDF príručky a študijné materiály",
    activeBorder: "border-[#00F3FF]",
    activeBg: "bg-[#00F3FF]/15",
    glow: "shadow-[0_0_15px_rgba(0,243,255,0.3)]",
  },
  {
    id: "apps",
    label: "APPS MEDIA",
    icon: Cpu,
    color: "#00FF66",
    signal: "bg-emerald-400",
    tooltipKey: "SHOP_APPS",
    desc: "SaaS aplikácie, APK a PC nástroje",
    activeBorder: "border-[#00FF66]",
    activeBg: "bg-[#00FF66]/15",
    glow: "shadow-[0_0_15px_rgba(0,255,102,0.3)]",
  },
];

export const ShopHeaderComponent = ({
  activeTab = "shop",
  handleTabClick,
  themeColor = "#FFD700", // Kybernetická Zlatá pre Shop Mainframe a 6 Súrodencov
  onThemeChange,
  tabConfig = SHOP_NAV_TABS, // 👈 IMPLICITNÝ FALLBACK PRE SÚRODENCOV
  userTier = "FREE",
  userBalance = 0,
  userEmail = "Hosť",
  getTierColor = () => "#FFD700",
  showFn = () => {},
  posFn = () => {},
  hideFn = () => {},
  onShowTooltip,
  onUpdateTooltipPos,
  onHideTooltip,
}) => {
  const tooltipShow = showFn || onShowTooltip;
  const tooltipPos = posFn || onUpdateTooltipPos;
  const tooltipHide = hideFn || onHideTooltip;

  // ⚡ Defenzívny handler zmeny tabu – filtrácia SyntheticEvent objektov
  const onTabClick = (tab, e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    
    // Ak by prichádzal samotný SyntheticEvent ako 1. argument, extrahujeme ID alebo fallback
    const isEvent = tab && typeof tab === "object" && (tab._reactName || tab.nativeEvent);
    const rawId = isEvent ? "shop" : (typeof tab === "object" ? tab?.id : tab);
    const cleanTab = String(rawId || "shop").toLowerCase().trim();

    if (typeof handleTabClick === "function") {
      handleTabClick(cleanTab);
    } else {
      sessionStorage.setItem("nexus_shop_active_tab", cleanTab);
      const targetUrl = cleanTab === "shop" ? "/shop/shop/all" : `/shop/shop/all?tab=${cleanTab}`;
      if (typeof window !== "undefined") {
        window.location.href = targetUrl;
      }
    }
  };

  // ⚡ Defenzívna filtrácia pre Tooltip (ochrana pred vykreslením eventu v JSX)
  const handleSafeShowTooltip = (tooltipKey, e) => {
    if (!tooltipKey || typeof tooltipKey === "object") return;
    tooltipShow(String(tooltipKey), e);
  };

  return (
    <header className="w-full bg-[#03070A]/90 border-b border-[#FFD700]/30 backdrop-blur-2xl sticky top-0 z-40 font-mono text-white py-3 px-4 md:px-8 mb-6 shadow-[0_4px_20px_rgba(255,215,0,0.1)]">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* 👑 TOP BAR: LOGO, BRAND TITLE & VIP TICKET (1:1 AGENCY SYNC) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* LOGO & BRAND TITLE */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => SoundFX?.playClick?.()}
          >
            <div className="w-9 h-9 rounded-xl bg-[#FFD700]/10 border border-[#FFD700] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-transform group-hover:scale-105">
              <ShoppingBag className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div>
              <h1 className="text-sm md:text-base font-extrabold tracking-widest text-white uppercase flex items-center gap-2">
                NEXUS SHOP{" "}
                <span className="text-[10px] text-[#FFD700] bg-[#FFD700]/10 px-2 py-0.5 rounded-full border border-[#FFD700]/30">
                  V20.95
                </span>
              </h1>
              <p className="text-[10px] text-gray-400 hidden sm:block uppercase tracking-wide">
                OS GENESIS // DIGITAL ASSETS MATRIX // 6 SIBLINGS
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: VIP TICKET & ACTIONS */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <ShopVIP_Ticket
              pageKey={activeTab}
              userTier={userTier}
              getTierColor={getTierColor}
              handleShowTooltip={showFn}
              handleUpdateTooltipPos={posFn}
              handleHideTooltip={hideFn}
            />
          </div>
        </div>

        {/* 🌐 NAVIGÁCIA 6 SÚRODENCOV (DEFENZÍVNE OPRAVENÉ STYLES & PRETEKANIE) */}
        <div className="p-1.5 bg-black/60 border border-white/10 rounded-xl backdrop-blur-md">
          <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {tabConfig.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;

              const originClass =
                idx === 0
                  ? "origin-left"
                  : idx === tabConfig.length - 1
                    ? "origin-right"
                    : "origin-center";

              return (
                <button
                  key={tab.id}
                  onClick={(e) => onTabClick(tab, e)}
                  onMouseEnter={(e) => handleSafeShowTooltip(tab.tooltipKey || "SHOP_MAIN", e)}
                  onMouseMove={(e) => tooltipPos(e)}
                  onMouseLeave={() => tooltipHide()}
                  className={`group relative p-3 rounded-xl border font-mono text-left transition-all duration-300 transform hover:-translate-y-0.5 select-none ${originClass} ${
                    isActive
                      ? "border-[#FFD700] bg-[#FFD700]/10 shadow-[0_0_20px_rgba(255,215,0,0.2)] text-white font-bold ring-1 ring-white/20"
                      : "border-white/10 bg-black/40 hover:border-white/30 text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    {IconComp && (
                      <IconComp
                        size={18}
                        style={{ color: isActive ? tab.color : "#a1a1aa" }}
                        className="transition-colors shrink-0"
                      />
                    )}
                    <span
                      className={`h-2 w-2 rounded-full shrink-0 ${tab.signal || "bg-gray-500"}`}
                    />
                  </div>

                  <h3
                    className="text-xs font-black uppercase tracking-wider mb-0.5 transition-colors truncate"
                    style={{ color: isActive ? tab.color : "#ffffff" }}
                  >
                    {tab.label}
                  </h3>
                  {tab.desc && (
                    <p className="text-[9px] text-zinc-400 font-normal normal-case truncate leading-tight hidden sm:block">
                      {tab.desc}
                    </p>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ShopHeaderComponent;