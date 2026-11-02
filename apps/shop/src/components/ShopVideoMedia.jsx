/* eslint-disable no-undef */
import React, { useState, useMemo } from "react";
import {
  Video,
  Eye,
  ChevronDown,
  ChevronUp,
  X,
  Copy,
  Check,
  Sparkles,
  PlayCircle,
  Zap,
  Shield,
  ChevronRight,
  Lock,
  HelpCircle,
} from "lucide-react";
import { SoundFX } from "@shared/utils/SoundEngine";
import {
  SHOP_VIDEO_SECTIONS,
  SHOP_VIDEO_DATA,
  VIDEO_CENNIK_MATRICA,
  getTierColor,
} from "../data/ShopVideoMedia";
import { SHOP_TOOLTIPS, getTooltip } from "../data/TooltipsShop";
import { MetaTags } from "../MetaTags";
import { VyhodyClenstva } from "./Vyhody-Clenstva";
import { ShopHeaderComponent } from "./ShopHeaderComponent";
import {
  SHOP_PRIPRAVUJEME_DATA,
  PRIPRAVUJEME_SECTION_TITLES,
  PRIPRAVUJEME_THEME_COLORS,
} from "../data/ShopPripravujeme";

// ============================================================================
// 👑 NEXUS OS: SHOPVIDEOMEDIA COMPONENT V20.50 (CLEAN MASTER ACCORDION & STANDBY)
// File: src/components/ShopVideoMedia.jsx
// Status: STRICTLY GROUNDED // 40 EPISODES IN MASTER ACCORDION // STANDBY BANNER
// ============================================================================

export const ShopVideoMedia = () => {
  // Master Accordion State
  const [isMasterOpen, setIsMasterOpen] = useState(true);

  // Accordion Open States for Categories
  const [openCategories, setOpenCategories] = useState({
    kratke: true,
    vysvetlujuce: true,
  });
  const [isCennikOpen, setIsCennikOpen] = useState(false);

  // Detail Modal State
  // Viewport Floating Tooltip State
  const [floatingTooltip, setFloatingTooltip] = useState({
    title: "",
    text: "",
    visible: false,
    x: 0,
    y: 0,
  });

  const handleShowTooltip = (title, text, e) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (e && e.clientX) {
      setFloatingTooltip({
        title,
        text,
        visible: true,
        x: e.clientX + 15,
        y: e.clientY + 15,
      });
    }
  };

  const handleUpdateTooltipPos = (e) => {
    if (floatingTooltip.visible && e && e.clientX) {
      setFloatingTooltip((prev) => ({
        ...prev,
        x: e.clientX + 15,
        y: e.clientY + 15,
      }));
    }
  };

  const handleHideTooltip = () => {
    setFloatingTooltip({ title: "", text: "", visible: false, x: 0, y: 0 });
  };

  const [selectedDocId, setSelectedDocId] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();

  const selectedDoc = useMemo(() => {
    if (!selectedDocId) return null;
    return (
      SHOP_VIDEO_DATA.find(
        (v) => v.code === selectedDocId || v.title === selectedDocId,
      ) || null
    );
  }, [selectedDocId]);

  const toggleCategory = (catKey, e) => {
    if (e) e.stopPropagation();
    triggerClick();
    setOpenCategories((prev) => ({ ...prev, [catKey]: !prev[catKey] }));
  };

  const expandAllCategories = (e) => {
    if (e) e.stopPropagation();
    triggerClick();
    setOpenCategories({ kratke: true, vysvetlujuce: true });
    setIsCennikOpen(true);
  };

  const collapseAllCategories = (e) => {
    if (e) e.stopPropagation();
    triggerClick();
    setOpenCategories({ kratke: false, vysvetlujuce: false });
    setIsCennikOpen(false);
  };

  const handleOpenDetail = (docCode) => {
    triggerClick();
    setSelectedDocId(docCode);
  };

  const handleCloseDetail = () => {
    triggerClick();
    setSelectedDocId(null);
  };

  const handleCopyLink = (code) => {
    triggerSuccess();
    const fullUrl = `${window.location.origin}/shop/videos?video=${code}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="w-full text-zinc-300 font-mono pb-32 animate-in fade-in duration-700 selection:bg-[#FFD700] selection:text-black relative">
      {/* FLOATING TOOLTIP */}
      {floatingTooltip.visible && (
        <div
          className="fixed pointer-events-none z-[9999] bg-[#080d12] border border-[#FF003C]/60 rounded-xl p-3 shadow-2xl text-left max-w-xs animate-in fade-in duration-150 backdrop-blur-xl"
          style={{
            top: `${floatingTooltip.y}px`,
            left: `${floatingTooltip.x}px`,
          }}
        >
          <div className="font-extrabold text-[#FF003C] text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
            <HelpCircle size={12} /> {floatingTooltip.title}
          </div>
          <div className="text-[10px] text-zinc-300 leading-snug font-mono">
            {floatingTooltip.text}
          </div>
        </div>
      )}

      {/* 🚀 SEO METATAGY */}
      {selectedDoc ? (
        <MetaTags
          title={`NEXUS VIDEO | ${selectedDoc.title}`}
          description={selectedDoc.desc || "Video Prehľad OS Genesis"}
          image="/img-nexus/pages/ShopVideoMedia.jpg"
          color={getTierColor(selectedDoc.tier) || "#8A2BE2"}
          url={`/shop/videos?video=${selectedDoc.code}`}
        />
      ) : (
        <MetaTags
          title="NEXUS VIDEO | Vizuálne Transmisie & Intrá/Outrá"
          description="Video banka OS Genesis: 20x Krátke ToFu/MoFu videá + 20x Vysvetľujúce Masterclassy Mŕtvych Kníh."
          image="/img-nexus/pages/ShopVideoMedia.jpg"
          color="#8A2BE2"
          url="/shop/videos"
        />
      )}

      {/* 👑 JEDNOTNÁ MASTER HLAVIČKA A NAVIGÁCIA */}
      <ShopHeaderComponent
        onShowTooltip={handleShowTooltip}
        onUpdateTooltipPos={handleUpdateTooltipPos}
        onHideTooltip={handleHideTooltip}
        activeTab="videos"
      />

      {/* 1. VÝHODY ČLENSTVA ACCORDION */}
      <VyhodyClenstva
        onShowTooltip={handleShowTooltip}
        onUpdateTooltipPos={handleUpdateTooltipPos}
        onHideTooltip={handleHideTooltip}
      />

      <ShopPripravujeme
        type="videos"
        handleShowTooltip={handleShowTooltip}
        handleUpdateTooltipPos={handleUpdateTooltipPos}
        handleHideTooltip={handleHideTooltip}
      />

      {/* 3. SYSTEM STANDBY BANNER (BELOW MASTER ACCORDION) */}
      <div className="bg-[#050A0E]/90 border-2 border-[#FF003C]/40 p-4 sm:p-6 md:p-8 rounded-2xl mb-8 shadow-2xl space-y-5 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF003C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <Video
              className="text-[#FF003C] animate-pulse shrink-0"
              size={28}
            />
            <div>
              <h3 className="text-base md:text-xl font-black text-[#FF003C] uppercase tracking-wider">
                [ SYSTEM STANDBY | AWAITING CLOUD EXPORT ]
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Nové sémantické video prehľady (40 epizód MP4 v 1080p / 60 FPS)
                sú v štádiu prispôsobovania a exportu pre Sklad OS Genesis.
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded-xl text-[10px] font-black uppercase tracking-widest shrink-0 font-mono shadow-inner">
            ⚡ STANDBY REŽIM // 40 EPISÓD
          </span>
        </div>

        {/* STANDBY PREVIEW IFRAME / IMAGE CONTAINER */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-black relative max-w-4xl mx-auto shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/mF0v6VBQlbw"
            title="Video Standby Preview"
            className="w-full h-full"
            allowFullScreen
          />
        </div>

        <div className="text-center font-mono text-xs text-zinc-500 pt-2">
          💡{" "}
          <em>
            Po dokončení cloudového exportu sa tu automaticky sprístupnia filtre
            a aktívne karty video prehľadov.
          </em>
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedDoc && (
        <div
          onClick={handleCloseDetail}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl z- flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-in fade-in duration-300 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#050A0E] border-2 rounded-3xl max-w-3xl w-full my-auto overflow-hidden shadow-2xl relative text-left font-mono cursor-default"
            style={{ borderColor: getTierColor(selectedDoc.tier) }}
          >
            <div className="p-5 bg-black/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="px-2.5 py-1 rounded-xl text-xs font-black uppercase border"
                  style={{
                    color: getTierColor(selectedDoc.tier),
                    borderColor: `${getTierColor(selectedDoc.tier)}60`,
                    backgroundColor: `${getTierColor(selectedDoc.tier)}15`,
                  }}
                >
                  {selectedDoc.tier}
                </span>
                <div>
                  <h2 className="text-sm md:text-base font-black text-white">
                    {selectedDoc.title}
                  </h2>
                  <div className="text-[10px] text-zinc-500 uppercase mt-0.5">
                    EPISÓDA: {selectedDoc.code} | {selectedDoc.subtitle}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseDetail}
                className="p-2 bg-white/5 hover:bg-red-500 text-zinc-400 hover:text-white rounded-xl border border-white/10 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto custom-scroll">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
                <div className="text-[10px] text-[#FFD700] font-black uppercase flex items-center gap-1">
                  <Sparkles size={12} /> ZAMERANIE A SÉMANTIKA EPISÓDY
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed font-bold">
                  {selectedDoc.desc}
                </p>
              </div>

              <div className="p-4 bg-black/80 border border-[#FF003C]/40 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black text-[#FF003C] uppercase tracking-widest flex items-center gap-2">
                    <PlayCircle
                      size={16}
                      className="text-[#FF003C] animate-pulse"
                    />
                    [ 🎬 VIDEO PREHRÁVAČ | SYSTEM STANDBY ]
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 uppercase font-bold">
                    AWAITING EXPORT
                  </span>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black relative">
                  <iframe
                    src="https://www.youtube.com/embed/mF0v6VBQlbw"
                    title="Video Player"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <div className="text-[10px] text-zinc-400 flex items-center justify-between pt-1">
                  <span>⚡ SYSTEM STANDBY | AWAITING MP4 VIDEO UPLOAD</span>
                  <span>Formát: MP4 1080p / 60 FPS</span>
                </div>
              </div>

              <div className="p-5 bg-black border border-white/10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    Cena Video Prehľadu
                  </div>
                  <div
                    className="text-lg font-black text-white"
                    style={{ color: getTierColor(selectedDoc.tier) }}
                  >
                    {selectedDoc.tier === "FREE"
                      ? "FREE (0.00 €)"
                      : `${selectedDoc.priceOc} OC / ${selectedDoc.priceEur}`}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => handleCopyLink(selectedDoc.code)}
                    className="px-4 py-2.5 bg-white/5 hover:bg-white/15 text-white border border-white/15 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer"
                  >
                    {copiedLink ? (
                      <Check size={14} className="text-green-400" />
                    ) : (
                      <Copy size={14} />
                    )}{" "}
                    {copiedLink ? "Link Skopírovaný!" : "Kopírovať Link"}
                  </button>

                  {/* HLUCHÉ TLAČIDLO NÁKUPU (STANDBY TOOLTIP) */}
                  <div className="relative group">
                    <button
                      type="button"
                      disabled
                      className="px-5 py-2.5 bg-zinc-800/80 text-zinc-500 border border-zinc-700/60 rounded-xl text-xs font-black uppercase flex items-center gap-2 cursor-not-allowed opacity-60 select-none"
                    >
                      <Lock size={14} className="text-[#FF003C]/70" /> Odomknúť
                      za{" "}
                      {selectedDoc.tier === "FREE"
                        ? "0 OC (FREE)"
                        : `${selectedDoc.priceOc} OC`}{" "}
                      (Standby)
                    </button>
                    <div className="absolute bottom-full mb-2 right-0 hidden group-hover:flex flex-col items-end z-50 pointer-events-none w-64">
                      <div className="bg-[#080d12] text-[#FF003C] text-[10px] font-mono border border-[#FF003C]/40 rounded-xl p-2.5 shadow-2xl text-center backdrop-blur-xl">
                        ⚡ Predaj je dočasne pozastavený. Systém očakáva
                        dokončenie cloudového exportu video epizód.
                      </div>
                      <div className="w-2 h-2 bg-[#080d12] border-r border-b border-[#FF003C]/40 rotate-45 -mt-1 mr-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopVideoMedia;
