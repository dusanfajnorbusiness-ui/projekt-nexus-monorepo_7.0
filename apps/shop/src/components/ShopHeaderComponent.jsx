import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Video,
  Volume2,
  Image,
  FileText,
  Cpu,
} from "lucide-react";
import { getTooltip } from "../data/TooltipsShop";
import { ShopVIP_Ticket } from "./ShopVIP_Ticket";

export const ShopHeaderComponent = ({
  activeTab = "shop",
  onTabChange,
  userBalance = 0,
  userEmail = "",
  userTier = "FREE",
  getTierColor = () => "#FFD700",
  handleShowTooltip,
  onShowTooltip,
  handleUpdateTooltipPos,
  onUpdateTooltipPos,
  handleHideTooltip,
  onHideTooltip,
}) => {
  const navigate = useNavigate();

  const showFn = handleShowTooltip || onShowTooltip;
  const posFn = handleUpdateTooltipPos || onUpdateTooltipPos;
  const hideFn = handleHideTooltip || onHideTooltip;

  const tabConfig = [
    {
      id: "shop",
      label: "NEXUS SHOP",
      desc: "Členstvá, OC balíky, Matrix FX & Služby",
      icon: ShoppingCart,
      color: "#FFD700",
      path: "/shop",
      tooltipKey: "TAB_SHOP",
      glow: "shadow-[0_0_20px_rgba(255,215,0,0.35)]",
      activeBorder: "border-[#FFD700]",
      activeBg: "bg-[#FFD700]/15",
      signal: "bg-[#FFD700] shadow-[0_0_8px_#FFD700]",
    },
    {
      id: "videos",
      label: "VIDEOS MEDIA",
      desc: "Video prehľady a sémantické trailery",
      icon: Video,
      color: "#FF6600",
      path: "/shop/videos",
      tooltipKey: "TAB_VIDEOS",
      glow: "shadow-[0_0_20px_rgba(255,102,0,0.35)]",
      activeBorder: "border-[#FF6600]",
      activeBg: "bg-[#FF6600]/15",
      signal: "bg-[#FF6600] animate-pulse shadow-[0_0_8px_#FF6600]",
    },
    {
      id: "audios",
      label: "AUDIOS MEDIA",
      desc: "Hovorené slovo, mp3 & tónové stimulácie",
      icon: Volume2,
      color: "#BF00FF",
      path: "/shop/audios",
      tooltipKey: "TAB_AUDIOS",
      glow: "shadow-[0_0_20px_rgba(191,0,255,0.35)]",
      activeBorder: "border-[#BF00FF]",
      activeBg: "bg-[#BF00FF]/15",
      signal: "bg-[#BF00FF] shadow-[0_0_8px_#BF00FF]",
    },
    {
      id: "images",
      label: "IMAGES MEDIA",
      desc: "3D Hybrid Robotic Avatary (ID00-ID20)",
      icon: Image,
      color: "#39FF14",
      path: "/shop/images",
      tooltipKey: "TAB_IMAGES",
      glow: "shadow-[0_0_20px_rgba(57,255,20,0.35)]",
      activeBorder: "border-[#39FF14]",
      activeBg: "bg-[#39FF14]/15",
      signal: "bg-[#39FF14] shadow-[0_0_8px_#39FF14]",
    },
    {
      id: "documents",
      label: "DOCUMENTS MEDIA",
      desc: "69x PDF/PPTX taktických manuálov",
      icon: FileText,
      color: "#00f3ff",
      path: "/shop/documents",
      tooltipKey: "TAB_DOCUMENTS",
      glow: "shadow-[0_0_20px_rgba(0,243,255,0.35)]",
      activeBorder: "border-[#00f3ff]",
      activeBg: "bg-[#00f3ff]/15",
      signal: "bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]",
    },
    {
      id: "apps",
      label: "APPS MEDIA",
      desc: "9x SaaS PWA / MOB / DESK terminálov",
      icon: Cpu,
      color: "#00E5FF",
      path: "/shop/apps",
      tooltipKey: "TAB_APPS",
      glow: "shadow-[0_0_20px_rgba(0,229,255,0.35)]",
      activeBorder: "border-[#00E5FF]",
      activeBg: "bg-[#00E5FF]/15",
      signal: "bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]",
    },
  ];

  const handleTabClick = (tab) => {
    sessionStorage.setItem("nexus_shop_active_tab", tab.id);
    if (typeof onTabChange === "function") {
      onTabChange(tab.id);
    } else {
      navigate(tab.path);
    }
  };

  return (
    <header className="w-full mb-8 space-y-6 font-mono text-left relative z-20">
      {/* GLOBÁLNA HLAVIČKA HEADERU */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 md:p-5 bg-[#050A0E]/95 border border-white/10 rounded-2xl backdrop-blur-xl relative z-20 shadow-2xl">
        <div className="text-left font-mono">
          <h1 className="text-base md:text-lg font-black tracking-widest uppercase flex items-center gap-2.5 flex-wrap">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700] animate-pulse shadow-[0_0_8px_#FFD700]" />
            <span className="text-[#FFD700] drop-shadow-[0_0_12px_rgba(0,243,255,0.5)]">
              NEXUS SHOP
            </span>{" "}
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              DIGITAL ASSETS MATRIX
            </span>
          </h1>
          <p className="text-[10px] md:text-[11px] text-zinc-400 mt-1 font-mono">
            Zjednotené centrum digitálnych aktív a komerčných modulov OS Genesis
            Edition
          </p>
        </div>

        <ShopVIP_Ticket
          pageKey={activeTab}
          userTier={userTier}
          getTierColor={getTierColor}
          handleShowTooltip={showFn}
          handleUpdateTooltipPos={posFn}
          handleHideTooltip={hideFn}
        />
      </div>

      {/* NAVIGÁCIA 6 SÚRODENCOV S BEZPEČNÝM CONTAINER OBRANOM PROTI PRETEKANIU */}
      <div className="p-1.5 bg-black/40 border border-white/5 rounded-2xl backdrop-blur-md relative z-20">
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          {tabConfig.map((tab, idx) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;

            // Dynamické nastavenie transform originu podľa pozície (prevencia pretekania po hraniciach)
            const originClass =
              idx === 0
                ? "origin-left"
                : idx === tabConfig.length - 1
                  ? "origin-right"
                  : "origin-center";

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                onMouseEnter={(e) =>
                  showFn?.(tab.label, getTooltip(tab.tooltipKey, tab.desc), e)
                }
                onMouseMove={posFn}
                onMouseLeave={hideFn}
                className={`relative border text-left p-3.5 md:p-4 rounded-xl transition-all duration-300 cursor-pointer ${originClass} ${
                  isActive
                    ? `\${tab.activeBorder} \\({tab.activeBg} \\){tab.glow} text-white scale-[1.01] hover:scale-[1.02] -translate-y-0.5 font-extrabold z-10`
                    : "border-white/10 bg-black/80 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5 hover:scale-[1.01]"
                }`}
              >
                <div className="flex justify-between items-start mb-2.5">
                  <IconComp
                    size={20}
                    style={{ color: isActive ? tab.color : "#a1a1aa" }}
                    className="transition-colors shrink-0"
                  />
                  {/* SIGNÁLKA V PRÍSLUŠNEJ UNIKÁTNEJ FARBE KARTY */}
                  <span
                    className={`h-2 w-2 rounded-full shrink-0 ${tab.signal}`}
                  />
                </div>

                <h3
                  className="text-xs font-black uppercase tracking-wider mb-1 transition-colors truncate"
                  style={{ color: isActive ? tab.color : "#ffffff" }}
                >
                  {tab.label}
                </h3>
                <p className="text-[9px] text-zinc-400 leading-tight line-clamp-2">
                  {tab.desc}
                </p>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default ShopHeaderComponent;
