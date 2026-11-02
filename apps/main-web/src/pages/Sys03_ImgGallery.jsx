/* eslint-disable no-undef */
import React, { useState, useEffect, useMemo, useCallback } from "react";

import { createPortal } from "react-dom";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  Image as ImageIcon,
  Copy,
  Eye,
  Download,
  Lock,
  X,
  Terminal,
  Activity,
} from "lucide-react";

import { GlobalComponents } from "@main-web/components/GlobalComponents";
import { GlobalHamburgerMenu } from "@main-web/components/GlobalHamburgerMenu";
import { GlobalFooter } from "@main-web/components/GlobalFooter";
import { GlobalPaywallModal } from "@main-web/components/shop/GlobalPaywallModal";
import { getNormalizedTier } from "@main-web/data/Sys01-05_Filters";
import { Sys01_05_Filters } from "@main-web/components/Sys01-05_Filters";
import { SoundFX } from "@shared/utils/SoundEngine";
import {
  SYS03_GALLERY_DATA,
  GALLERY_CATEGORIES,
} from "@main-web/data/Sys03_ImgGallery";

const CORE_VERSION = "SYS03-IMG_GALLERY V20.99-FINAL";
const DIM_COLOR = "#BF00FF";

// 🎨 UNIFIKOVANÁ MATRICA TIER FARIEB (V20 KÁNON)
export const TIER_COLOR_MAP = {
  FREE: "#00F3FF",
  FREEMIUM: "#00F3FF",
  ZDARMA: "#00F3FF",
  PRO: "#39FF14",
  PROMIUM: "#39FF14",
  OMEGA: "#FFD700",
  OMEGAMIUM: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
  ARCHITECT: "#FF003C",
};

export const getTierBadgeColor = (tier) => {
  if (!tier) return "#00F3FF";
  const cleanTier = String(tier).toUpperCase().trim();
  return TIER_COLOR_MAP[cleanTier] || "#00F3FF";
};

export const Sys03_ImgGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  // 1. Priame čítanie stavov z URL
  const activeCategory = queryParams.get("cat") || "ALL";
  const activeTier = queryParams.get("tier") || "ALL";
  const activeFormat = queryParams.get("format") || "ALL";
  const searchQuery = queryParams.get("q") || "";

  const [viewMode, setViewMode] = useState("GRID_MD");
  const [activeRatios, setActiveRatios] = useState({});

  // 2. Unifikovaný zapisovač filtrov do URL adresy (Živý zapisovač)
  const updateFilters = useCallback(
    (newParams) => {
      const params = new URLSearchParams(window.location.search);
      Object.entries(newParams).forEach(([key, val]) => {
        if (!val || val === "ALL") {
          params.delete(key);
        } else {
          params.set(key, String(val).trim());
        }
      });
      const queryString = params.toString();
      navigate(
        queryString
          ? `${window.location.pathname}?${queryString}`
          : window.location.pathname,
        { replace: true },
      );
    },
    [navigate],
  );

  // 3. MOSTÍK: Zapisovanie zmeny kategórie priamo do URL adresy
  const setActiveCategory = useCallback(
    (newCat) => {
      updateFilters({ cat: newCat });
    },
    [updateFilters],
  );

  // Lightbox & Toast
  const [lightboxItem, setLightboxItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  // Paywall Integrácia
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallCampaign, setPaywallCampaign] = useState(null);

  // Zistenie TIERu operátora
  const userTier = useMemo(() => {
    try {
      const raw = localStorage.getItem("nexus_active_identity");
      if (raw) return JSON.parse(raw)?.tier?.toUpperCase() || "FREE";
    } catch (e) {}
    return "FREE";
  }, []);

  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();
  const triggerError = () => SoundFX && SoundFX.error && SoundFX.error();

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // 🍔 HAMBURGER VÝŤAH LISTENER (Chameleón Protokol Uplink)
  useEffect(() => {
    const handleSwitchTab = (e) => {
      const targetCat = e?.detail;
      if (!targetCat) return;

      if (SoundFX && typeof SoundFX.click === "function") SoundFX.click();

      const cleanCat = String(targetCat).trim();

      // 1. Zmena React stavu a zapísanie URL query
      setActiveCategory(cleanCat);
      updateFilters({ cat: cleanCat });

      // 2. JEDINÝ ČISTÝ KOPANEC: 350ms počká na zatvorenie mobilného menu
      setTimeout(() => {
        const galleryGrid = document.getElementById("sys03-gallery-grid");
        if (galleryGrid) {
          galleryGrid.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 350);
    };

    window.addEventListener("nexus_switch_local_tab", handleSwitchTab);
    return () =>
      window.removeEventListener("nexus_switch_local_tab", handleSwitchTab);
  }, [updateFilters]);

  // ⚡ KOPÍROVANIE CDN URL
  const handleCopyUrl = (item, ratioKey) => {
    triggerClick();
    if (item.isBot && item.tier !== "FREE" && userTier === "FREE") {
      triggerError();
      setLightboxItem(null); // Zavrie Lightbox, aby netienil Paywall Modál
      setPaywallCampaign({
        id: item.id,
        title: item.title,
        tier: item.tier || "PRO",
        priceOc: item.priceOc || 2500,
        priceEur: item.priceEur || "25.00 €",
        category: "AVATARS",
        desc: `Odomknutie plnej licencie a 8K mastra pre ${item.title}.`,
      });
      setPaywallOpen(true);
      return;
    }
    const url = item.formats[ratioKey] || item.formats["1x1"];
    navigator.clipboard.writeText(url);
    triggerSuccess();
    showToast(`⚡ CDN URL SKOPÍROVANÁ (${ratioKey})`);
  };

  // 📥 SŤAHOVANIE SÚBORU DO PC
  const handleDownload = async (item, ratioKey) => {
    triggerClick();

    if (item.isBot && item.tier !== "FREE" && userTier === "FREE") {
      triggerError();
      setLightboxItem(null); // Zavrie Lightbox, aby netienil Paywall
      setPaywallCampaign({
        id: item.id,
        title: item.title,
        tier: item.tier || "PRO",
        priceOc: item.priceOc || 2500,
        priceEur: item.priceEur || "25.00 €",
        category: "AVATARS",
        desc: `Odomknutie plnej licencie a 8K mastra pre ${item.title}.`,
      });
      setPaywallOpen(true);
      return;
    }

    const fileUrl =
      item.formats[ratioKey] || item.formats.zip || item.formats["1x1"];
    const ext = ratioKey === "zip" ? "zip" : "jpg";
    const filename = `${item.id}_${ratioKey}.${ext}`;

    try {
      setDownloadingId(item.id);
      showToast(`⏳ SŤAHUJEM AKTÍVUM...`);

      const response = await fetch(fileUrl, { mode: "cors" });
      if (!response.ok) throw new Error("Sieťové sťahovanie zlyhalo");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      triggerSuccess();
      showToast(`✔ ULOŽENÉ DO PC: ${filename}`);
    } catch (err) {
      window.open(fileUrl, "_blank", "noopener,noreferrer");
      showToast(`📥 CDN SŤAHOVANIE OTVORENÉ`);
    } finally {
      setDownloadingId(null);
    }
  };

  // 🔍 FILTROVANIE DÁT: KATEGÓRIA + TIER + FORMÁT + SEARCH
  const filteredItems = useMemo(() => {
    return SYS03_GALLERY_DATA.filter((item) => {
      // 1. Kategória
      const matchCat =
        activeCategory === "ALL" || item.category === activeCategory;

      // 2. TIER Hodnosť
      const matchTier =
        activeTier === "ALL" || getNormalizedTier(item.tier) === activeTier;

      // 3. Formát
      const matchFormat =
        activeFormat === "ALL" ||
        (item.formats && Boolean(item.formats[activeFormat]));

      // 4. Vyhľadávanie
      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        (item.desc && item.desc.toLowerCase().includes(query));

      return matchCat && matchTier && matchFormat && matchQuery;
    });
  }, [activeCategory, activeTier, activeFormat, searchQuery]);

  return (
    <div className="min-h-screen bg-[#030507] text-white font-mono relative selection:bg-[#BF00FF] selection:text-white pb-32">
      {/* 🌌 AMBIENT GLOW */}
      <div
        className="fixed top-0 left-0 w-full h-[500px] pointer-events-none opacity-15"
        style={{
          zIndex: 0,
          backgroundImage: `radial-gradient(circle at top center, ${DIM_COLOR}, transparent 80%)`,
        }}
      />

      {/* ⚡ FLOATING TOAST */}
      {toastMessage &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed top-24 right-6 md:top-24 md:right-8 bg-black/95 border border-[#BF00FF] text-[#BF00FF] px-5 py-3 rounded-2xl shadow-[0_0_35px_rgba(191,0,255,0.6)] backdrop-blur-2xl flex items-center gap-3 text-xs font-black animate-in fade-in duration-200 pointer-events-none"
            style={{ zIndex: 999999999 }}
          >
            <Activity size={14} className="animate-spin" />
            <span>{toastMessage}</span>
          </div>,
          document.body,
        )}

      <div
        className="relative max-w-7xl mx-auto p-4 md:p-8 pt-20"
        style={{ zIndex: 10 }}
      >
        {/* ========================================================================= */}
        {/* 📂 HLAVNÁ STRÁNKA (HEADER KÁNON V20) */}
        {/* ========================================================================= */}

        <header className="mb-16 border-b border-[#BF00FF]/20 pb-8 animate-in fade-in slide-in-from-top-8 duration-700 text-left">
          <div className="flex items-center gap-3 mb-4">
            <ImageIcon size={24} color={DIM_COLOR} />
            <span className="text-[#BF00FF] text-[10px] font-black uppercase tracking-[0.3em]">
              SYS 03 | Public Access
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Nexus Img <span className="text-[#BF00FF] italic">Gallery</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Centrálny vizuálny register (Single Source of Truth). Archív
            kampaní, dimenzií a systémových aktív pripravených na zdieľanie do
            Matrixu. Všetky formáty (1:1 Feed, 9:16 Shorts, 16:9 Desktop) sú
            napojené priamo na Supabase CDN sieť.
          </p>
        </header>

        {/* 🎛️ UNIFIKOVANÝ FILTRAČNÝ KOMPONENT */}
        <Sys01_05_Filters
          categories={GALLERY_CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={(cat) => updateFilters({ cat })}
          activeTier={activeTier}
          setActiveTier={(tier) => updateFilters({ tier })}
          activeFormat={activeFormat}
          setActiveFormat={(format) => updateFilters({ format })}
          searchQuery={searchQuery}
          setSearchQuery={(q) => updateFilters({ q })}
          viewMode={viewMode}
          setViewMode={setViewMode}
          items={SYS03_GALLERY_DATA}
          themeColor={DIM_COLOR}
        />

        {/* 🎯 SÉMANTICKÝ PICASSO ANCHOR PRE DVERE GALÉRIE */}
        <div id="sys03-picasso-door" className="scroll-mt-28" />

        {/* 🖼️ HLAVNÁ MRIEŽKA OBRÁZKOV */}
        <div
          id="sys03-gallery-grid"
          className={`scroll-mt-12 sm:scroll-mt-8 grid ${
            viewMode === "GRID_LG"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : viewMode === "GRID_MD"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
                : "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4"
          }`}
        >
          {filteredItems.map((item) => {
            // 🎯 PREPOJENIE EFEKTÍVNEHO FORMÁTU S GLOBÁLNYM FILTROM
            const effectiveRatio =
              activeRatios[item.id] ||
              (activeFormat && activeFormat !== "ALL" && activeFormat !== "zip"
                ? activeFormat
                : "1x1");

            const currentRatio = effectiveRatio;
            const currentUrl =
              item.formats[effectiveRatio] || item.formats["1x1"];

            const isBotLocked =
              item.isBot && item.tier !== "FREE" && userTier === "FREE";
            const isDownloading = downloadingId === item.id;
            const isCompact = viewMode === "GRID_SM";
            const tierColor = getTierBadgeColor(item.tier);

            return (
              <div
                key={item.id}
                className="bg-[#050A0E]/90 border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* OBRÁZOK S NÁHĽADOM */}
                <div className="relative aspect-square w-full bg-black/80 overflow-hidden border-b border-white/10 flex items-center justify-center">
                  <img
                    src={currentUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => {
                      triggerClick();
                      setLightboxItem(item);
                    }}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/system-standby_image/1x1_feed/system-standby-1x1.jpg";
                    }}
                  />

                  {/* ŠTÍTOK PREVZATÝ Z EFEKTÍVNEHO FORMÁTU */}
                  <div
                    className="absolute top-2 left-2 flex items-center gap-1 bg-black/80 px-1.5 py-0.5 rounded border border-white/10 text-[8px] sm:text-[9px] font-black uppercase text-zinc-300 pointer-events-none"
                    style={{ zIndex: 10 }}
                  >
                    <span>{effectiveRatio.toUpperCase()}</span>
                  </div>

                  {/* TIER BADGE */}
                  <div
                    className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-black uppercase tracking-wider border shadow-md pointer-events-none"
                    style={{
                      zIndex: 10,
                      borderColor: tierColor,
                      backgroundColor: `${tierColor}20`,
                      color: tierColor,
                    }}
                  >
                    {item.tier || "FREE"}
                  </div>

                  {/* PREPÍNAČ HOVER POMERU STRÁN */}
                  {!isCompact && (
                    <div
                      className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/80 p-1 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ zIndex: 20 }}
                    >
                      {["1x1", "9x16", "16x9"].map((r) => (
                        <button
                          key={r}
                          onClick={() =>
                            setActiveRatios((prev) => ({
                              ...prev,
                              [item.id]: r,
                            }))
                          }
                          className={`px-1.5 py-0.5 text-[8px] font-black rounded uppercase transition-colors ${
                            effectiveRatio === r
                              ? "bg-[#BF00FF] text-white"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* OBSAH KARTY */}
                <div className="p-2.5 sm:p-4 text-left flex flex-col flex-1 justify-between gap-2 sm:gap-3">
                  <div>
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-zinc-500">
                      {item.id}
                    </span>
                    <h3 className="text-[11px] sm:text-xs font-black uppercase text-white truncate tracking-wider mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-1 pt-2 border-t border-white/5">
                    <button
                      onClick={() => handleCopyUrl(item, effectiveRatio)}
                      className={`py-1 px-1 sm:py-1.5 sm:px-2 border rounded-lg text-[8px] sm:text-[9px] font-black uppercase flex items-center justify-center gap-1 transition-all ${
                        isBotLocked
                          ? "bg-red-950/40 border-red-500/40 text-red-400 hover:bg-red-900/60"
                          : "bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300 hover:text-white"
                      }`}
                      title={
                        isBotLocked
                          ? "Vyžaduje odomknutie licencie"
                          : "Skopírovať priamy CDN link"
                      }
                    >
                      {isBotLocked ? (
                        <Lock size={10} className="text-red-400 shrink-0" />
                      ) : (
                        <Copy size={10} className="text-[#BF00FF] shrink-0" />
                      )}
                      <span className="hidden sm:inline">
                        {isBotLocked ? "Lock" : "Link"}
                      </span>
                    </button>

                    <button
                      onClick={() => {
                        triggerClick();
                        setLightboxItem(item);
                      }}
                      className="py-1 px-1 sm:py-1.5 sm:px-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[8px] sm:text-[9px] font-black uppercase text-zinc-300 hover:text-white flex items-center justify-center gap-1 transition-all"
                    >
                      <Eye size={10} className="text-cyan-400 shrink-0" />
                      <span className="hidden sm:inline">Pozrieť</span>
                    </button>

                    <button
                      onClick={() => handleDownload(item, effectiveRatio)}
                      disabled={isDownloading}
                      className={`py-1 px-1 sm:py-1.5 sm:px-2 rounded-lg text-[8px] sm:text-[9px] font-black uppercase flex items-center justify-center gap-1 transition-all border ${
                        isBotLocked
                          ? "bg-red-950/40 border-red-500/40 text-red-400"
                          : "bg-[#BF00FF]/10 hover:bg-[#BF00FF]/30 border-[#BF00FF]/40 text-white"
                      }`}
                    >
                      {isDownloading ? (
                        <Activity
                          size={10}
                          className="animate-spin text-[#BF00FF]"
                        />
                      ) : isBotLocked ? (
                        <Lock size={10} />
                      ) : (
                        <Download size={10} />
                      )}
                      <span className="hidden sm:inline">
                        {isBotLocked ? "Lock" : "Uložiť"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxItem &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300 pt-[90px] pb-[80px]"
            style={{ zIndex: 99999999 }}
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="bg-[#050A0E] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative text-left"
              style={{ zIndex: 100000000 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/60">
                <div>
                  <span className="text-[10px] font-mono text-[#BF00FF] font-bold">
                    {lightboxItem.id} // {lightboxItem.category}
                  </span>
                  <h2 className="text-base sm:text-xl font-black uppercase text-white tracking-wide">
                    {lightboxItem.title}
                  </h2>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="w-full md:w-1/2 aspect-square bg-black/60 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center shrink-0 relative">
                  <img
                    src={
                      lightboxItem.formats[
                        activeRatios[lightboxItem.id] ||
                          (activeFormat &&
                          activeFormat !== "ALL" &&
                          activeFormat !== "zip"
                            ? activeFormat
                            : "1x1")
                      ] || lightboxItem.formats["1x1"]
                    }
                    alt={lightboxItem.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                    <h4 className="text-xs font-black uppercase text-white flex items-center gap-2">
                      <Terminal size={14} color={DIM_COLOR} />
                      Technická Telemetria
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {lightboxItem.desc ||
                        "Proprietárne digitálne aktívum OS Genesis pripravené na distribúciu."}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-[9px] font-mono text-zinc-400">
                      <span
                        className="px-2 py-1 rounded border font-bold"
                        style={{
                          color: getTierBadgeColor(lightboxItem.tier),
                          borderColor: getTierBadgeColor(lightboxItem.tier),
                          backgroundColor: `${getTierBadgeColor(lightboxItem.tier)}20`,
                        }}
                      >
                        TIER: {lightboxItem.tier || "FREE"}
                      </span>
                      <span className="bg-black px-2 py-1 rounded border border-white/10">
                        STORAGE: Supabase Bucket 'shop'
                      </span>
                    </div>
                  </div>

                  {/* PRIAME ULOŽENIE DO PC */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block">
                      Priame Uloženie do PC:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {["1x1", "9x16", "16x9"].map((r) => (
                        <button
                          key={r}
                          onClick={() => handleDownload(lightboxItem, r)}
                          className="py-2.5 px-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl text-xs font-black uppercase tracking-wider text-white transition-all flex flex-col items-center justify-center gap-1 cursor-pointer"
                        >
                          <Download size={14} color={DIM_COLOR} />
                          <span>{r}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleCopyUrl(
                        lightboxItem,
                        activeRatios[lightboxItem.id] ||
                          (activeFormat && activeFormat !== "ALL"
                            ? activeFormat
                            : "1x1"),
                      )
                    }
                    className="w-full py-3 bg-[#BF00FF] hover:bg-[#a600e0] text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Copy size={14} /> Skopírovať Priamu CDN URL
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}

      <GlobalPaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        campaign={paywallCampaign}
        userTier={userTier}
      />

      <GlobalComponents themeColor={DIM_COLOR} />
      <GlobalHamburgerMenu activeTab="sys03" themeColor={DIM_COLOR} />
      <GlobalFooter themeColor={DIM_COLOR} />
    </div>
  );
};

export default Sys03_ImgGallery;
