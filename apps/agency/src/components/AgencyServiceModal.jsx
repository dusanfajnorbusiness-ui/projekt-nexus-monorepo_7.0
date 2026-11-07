/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS03 MASTER DATASET V20.99)
// Súbor: apps/agency/src/components/AgencyServiceModal.jsx
// Status: 100% GROUNDED // CYBER-BRUTALISM V20 // 5-PHASE ACCORDION & VIEWPORT SHIELD
// ============================================================================

import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  Info,
  CheckCircle2,
  Cpu,
  Zap,
  Terminal,
  Layers,
  Shield,
  PlayCircle,
  Folder,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Flame,
  Target,
  Users,
  UserCheck,
  Building,
  ShieldCheck,
  Download,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY & UTILS
// ============================================================================
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { GlobalYTMediaPlayer } from "@agency/components/Agency-YT-MediaPlayer.jsx";

const CDN_FALLBACK_IMG =
  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/01-uiux-diagnostika-a-audit-webu-16x9.jpg";

// 🎨 PRÍSNA MATICA FARIEB PODĽA TIER ZÁKONA V20
const GET_TIER_CONFIG = (tierCode = "", tier = "") => {
  const code = String(tierCode || tier || "").toUpperCase();

  if (
    code.includes("MASTER") ||
    code.includes("CROWN") ||
    code.includes("MASTERMIUM")
  ) {
    return {
      label: "MASTERMIUM TIER",
      badgeClass:
        "border-[#FF003C] bg-[#FF003C]/15 text-[#FF003C] shadow-[0_0_15px_rgba(255,0,60,0.4)]",
    };
  }
  if (code.includes("OMEGA") || code.includes("OMEGAMIUM")) {
    return {
      label: "OMEGAMIUM TIER",
      badgeClass:
        "border-[#FFD700] bg-[#FFD700]/15 text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)]",
    };
  }
  if (code.includes("PRO") || code.includes("PROMIUM")) {
    return {
      label: "PROMIUM TIER",
      badgeClass:
        "border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.4)]",
    };
  }
  return {
    label: "FREE ONBOARDING",
    badgeClass:
      "border-[#00F3FF] bg-[#00F3FF]/15 text-[#00F3FF] shadow-[0_0_15px_rgba(0,243,255,0.4)]",
  };
};

export const AgencyServiceModal = ({ service, onClose }) => {
  // 🪗 STATE PRE INTERAKTÍVNY 5-FÁZOVÝ AKORDEÓN (DEFAULT: FÁZA 1 UNLOCKED)
  const [expandedPhaseIndex, setExpandedPhaseIndex] = useState(0);

  // Zámok scrollovania pozadia pri otvorenom detaile a Klávesa ESC
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        SoundFX?.playClick?.();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const togglePhase = (index) => {
    SoundFX?.playClick?.();
    setExpandedPhaseIndex((prev) => (prev === index ? null : index));
  };

  const directKofiLink = String(
    service.kofiLink ||
      service.kofiUrl ||
      "https://ko-fi.com/cybertech_architect/commissions",
  ).trim();

  const tierConfig = GET_TIER_CONFIG(service.tierCode, service.tier);
  const serviceColor = String(service.color || "#00F3FF").trim();
  const phases = Array.isArray(service.phases) ? service.phases : [];
  const scan = service.scanDetail || {};
  const targetAudience = scan.preKohoJeToto || {};
  const ip = service.ipSecurity || {};
  const formats = service.imageFormats || {};

  return (
    // 🛡️ V20 VIEWPORT SHIELD: pt-20 zabráni zalezeniu pod navigáciu, pb-6 a max-h vymezia obrazovku
    <div className="fixed top-[80px] bottom-0 left-0 right-0 z-[40] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 pt-4 pb-6 overflow-hidden font-mono text-white">
      <div className="relative w-full max-w-5xl bg-[#050A0E] border border-[#00f3ff]/50 rounded-3xl shadow-[0_0_60px_rgba(0,243,255,0.25)] flex flex-col max-h-[calc(100vh-6rem)] overflow-hidden">
        
        {/* 👑 1. MODAL HEADER (STICKY TOP SHIELD) */}
        <div className="p-4 md:p-6 border-b border-white/10 bg-black/90 flex items-center justify-between shrink-0 z-20">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span
                style={{
                  borderColor: `${serviceColor}aa`,
                  color: serviceColor,
                  boxShadow: `0 0 12px ${serviceColor}55`,
                }}
                className="px-3 py-1 rounded-xl border bg-black/80 uppercase tracking-wider font-black backdrop-blur-md"
              >
                {service.id} // {service.dimension || "V20"}
              </span>

              {service.subCategoryTitle && (
                <span className="px-2.5 py-1 rounded-xl border border-white/15 bg-white/5 text-zinc-300 text-[10px] uppercase font-sans">
                  {service.subCategoryTitle}
                </span>
              )}

              <span
                className={`px-3 py-1 rounded-xl border uppercase tracking-widest font-black text-[10px] ${tierConfig.badgeClass}`}
              >
                {tierConfig.label}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              {service.title}
            </h2>
          </div>

          {/* ZATVÁRACIE TLAČIDLO */}
          <button
            onClick={() => {
              SoundFX?.playClick?.();
              onClose();
            }}
            className="p-2.5 bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white border border-white/10 hover:border-[#00f3ff] rounded-xl transition-all cursor-pointer shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* 📜 2. MODAL BODY CONTENT (CUSTOM SCROLL & HIGH DENSITY) */}
        <div className="p-4 md:p-8 space-y-6 overflow-y-auto custom-scroll flex-1">
          
          {/* TOP COVER & DYNAMICKÁ STRATEGICKÁ MATICA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="space-y-3 shrink-0">
              <div className="aspect-[16/9] md:aspect-square relative rounded-2xl overflow-hidden border border-white/20 bg-black group shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                <img
                  src={
                    service.image ||
                    service.imageUrl ||
                    formats.ratio16x9 ||
                    CDN_FALLBACK_IMG
                  }
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = CDN_FALLBACK_IMG;
                  }}
                />
              </div>

              {/* FORMÁTOVÉ ODKAZY ZO SUPABASE CDN */}
              {(formats.ratio16x9 || formats.zipUrl || formats.ratio1x1) && (
                <div className="p-3 bg-black/80 border border-white/10 rounded-xl space-y-2 text-[10px] font-mono">
                  <div className="text-[#FFD700] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Folder size={12} /> SUPABASE CDN ASSETS:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {formats.ratio16x9 && (
                      <a
                        href={formats.ratio16x9}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#00f3ff] rounded text-center text-zinc-300 hover:text-white transition-all"
                      >
                        🖥️ 16:9 HD
                      </a>
                    )}
                    {formats.ratio1x1 && (
                      <a
                        href={formats.ratio1x1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#00f3ff] rounded text-center text-zinc-300 hover:text-white transition-all"
                      >
                        📱 1:1 Feed
                      </a>
                    )}
                    {formats.ratio9x16 && (
                      <a
                        href={formats.ratio9x16}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#00f3ff] rounded text-center text-zinc-300 hover:text-white transition-all"
                      >
                        🎬 9:16 Shorts
                      </a>
                    )}
                    {(formats.zipUrl || formats.zip) && (
                      <a
                        href={formats.zipUrl || formats.zip}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/40 rounded text-center text-[#FFD700] font-bold transition-all"
                      >
                        📦 ZIP Master
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-2 space-y-4">
              {/* OPERAČNÉ ŠPECIFIKÁCIE (SLA, EXEC TIME, DIFFICULTY, STACK) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                {service.deliveryTime && (
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                    <div className="text-[9px] text-zinc-400 uppercase flex items-center gap-1">
                      <Clock size={11} className="text-[#00F3FF]" /> DODANIE (SLA)
                    </div>
                    <div className="font-bold text-white text-[11px] truncate">
                      {service.deliveryTime}
                    </div>
                  </div>
                )}
                {service.execTime && (
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                    <div className="text-[9px] text-zinc-400 uppercase flex items-center gap-1">
                      <Zap size={11} className="text-[#FFD700]" /> GHOST-MODE
                    </div>
                    <div className="font-bold text-white text-[11px] truncate">
                      {service.execTime}
                    </div>
                  </div>
                )}
                {service.difficulty && (
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1 col-span-2 sm:col-span-1">
                    <div className="text-[9px] text-zinc-400 uppercase flex items-center gap-1">
                      <Flame size={11} className="text-[#FF003C]" /> NÁROČNOSŤ
                    </div>
                    <div className="font-bold text-[#FF003C] text-[11px] truncate">
                      {service.difficulty}
                    </div>
                  </div>
                )}
              </div>

              {/* ZAMERANIE A POINTA CARD */}
              <div className="p-4 bg-gradient-to-r from-black/80 to-[#080d12] border border-[#FFD700]/40 rounded-2xl space-y-1.5 shadow-[0_0_20px_rgba(255,215,0,0.08)]">
                <div className="text-[10px] text-[#FFD700] font-black uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={14} /> ZAMERANIE A POINTA
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed font-bold font-sans">
                  {scan.zameranieAPointa || service.spoilerIntro}
                </p>
              </div>

              {/* DETAILNÝ POPIS CARD */}
              {(scan.detailnyPopis || service.goal) && (
                <div className="p-4 bg-black/60 border border-white/10 rounded-2xl space-y-1.5">
                  <div className="text-[10px] text-[#00f3ff] font-black uppercase tracking-widest flex items-center gap-2">
                    <Info size={14} /> DETAILNÝ POPIS & ARCHITEKTÚRA
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    {scan.detailnyPopis || service.goal}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 🎬 MP4 VIDEO PREHĽAD & MEDIA MATRIX TERMINÁL */}
          <div className="p-4 bg-black/90 border border-[#FFD700]/40 rounded-2xl space-y-3 font-mono shadow-[0_0_25px_rgba(255,215,0,0.1)]">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-xs font-black text-[#FFD700] uppercase tracking-widest flex items-center gap-2">
                <PlayCircle size={16} className="text-[#FFD700] animate-pulse" />
                [ 🎬 MP4 VIDEO PREHĽAD | SYSTEM STANDBY ]
              </div>
              <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 uppercase font-black">
                SUPABASE CDN & YOUTUBE
              </span>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
              <GlobalYTMediaPlayer mode="service" serviceData={service} compact />
            </div>
          </div>

          {/* 4-DIELNA STRATEGICKÁ MATRIX MRIEŽKA (ČO ZÍSKAŠ, FUNNEL, AKO TO FUNGUJE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scan.coZiskas && (
              <div className="p-4 bg-black/60 border border-[#39FF14]/30 rounded-2xl space-y-2">
                <div className="text-[10px] text-[#39FF14] font-black uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle2 size={14} /> 🎁 ČO ZÍSKAŠ
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {scan.coZiskas}
                </p>
              </div>
            )}

            {service.funnel && (
              <div className="p-4 bg-black/60 border border-[#00f3ff]/30 rounded-2xl space-y-2">
                <div className="text-[10px] text-[#00f3ff] font-black uppercase tracking-widest flex items-center gap-2">
                  <Target size={14} /> 🎯 MARKETINGOVÝ LIEVIK (FUNNEL)
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {service.funnel}
                </p>
              </div>
            )}

            {scan.akoToFunguje && (
              <div className="p-4 bg-black/60 border border-yellow-400/30 rounded-2xl space-y-2">
                <div className="text-[10px] text-yellow-400 font-black uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} /> ⚙️ AKO TO FUNGUJE
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {scan.akoToFunguje}
                </p>
              </div>
            )}

            {scan.kCemuSaTotoDaPouzit && (
              <div className="p-4 bg-black/60 border border-orange-400/30 rounded-2xl space-y-2">
                <div className="text-[10px] text-orange-400 font-black uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={14} /> 💡 K ČOMU SA DÁ POUŽIŤ
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {scan.kCemuSaTotoDaPouzit}
                </p>
              </div>
            )}
          </div>

          {/* 👥 CLIENT MATCH DIAGNOSTIKA (PRE KOHO JE TOTO) */}
          {(targetAudience.preAkyTypLudi ||
            targetAudience.preAkyTypCloveka ||
            targetAudience.preAkyTypSpolocnosti) && (
            <div className="p-4 bg-[#080d12] border border-[#BF00FF]/40 rounded-2xl space-y-3">
              <div className="text-xs font-black text-[#BF00FF] uppercase tracking-widest flex items-center gap-2">
                <Users size={16} /> 👥 CLIENT MATCH DIAGNOSTIKA
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {targetAudience.preAkyTypLudi && (
                  <div className="bg-black/60 p-3 rounded-xl border border-white/10 space-y-1">
                    <span className="text-[10px] font-bold text-[#00f3ff] uppercase flex items-center gap-1">
                      <Users size={12} /> Pre kategóriu ľudí:
                    </span>
                    <p className="text-zinc-300 text-xs font-sans">
                      {targetAudience.preAkyTypLudi}
                    </p>
                  </div>
                )}
                {targetAudience.preAkyTypCloveka && (
                  <div className="bg-black/60 p-3 rounded-xl border border-white/10 space-y-1">
                    <span className="text-[10px] font-bold text-[#39FF14] uppercase flex items-center gap-1">
                      <UserCheck size={12} /> Pre typ človeka:
                    </span>
                    <p className="text-zinc-300 text-xs font-sans">
                      {targetAudience.preAkyTypCloveka}
                    </p>
                  </div>
                )}
                {targetAudience.preAkyTypSpolocnosti && (
                  <div className="bg-black/60 p-3 rounded-xl border border-white/10 space-y-1">
                    <span className="text-[10px] font-bold text-[#FFD700] uppercase flex items-center gap-1">
                      <Building size={12} /> Pre typ spoločnosti:
                    </span>
                    <p className="text-zinc-300 text-xs font-sans">
                      {targetAudience.preAkyTypSpolocnosti}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 🪗 MOŽNOSŤ B: INTERAKTÍVNY 5-FÁZOVÝ EXEKUČNÝ PROTOKOL (20 ÚKONOV AKORDEÓN) */}
          {phases.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-white/10 font-mono">
              <div className="flex items-center justify-between text-[#FFD700] font-black uppercase text-xs tracking-wider flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-[#FFD700]" />
                  <span>
                    PROOF OF PROCESS // 5-FÁZOVÝ EXEKUČNÝ PROTOKOL (
                    {phases.reduce((acc, p) => acc + (p.steps ? p.steps.length : 0), 0)} KROKOV)
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 font-normal">
                  [ KLIKNI NA FÁZU PRE ROZBALENIE ÚKONOV ]
                </span>
              </div>

              <div className="space-y-2.5">
                {phases.map((phase, pIdx) => {
                  const isExpanded = expandedPhaseIndex === pIdx;
                  return (
                    <div
                      key={phase.phaseId || pIdx}
                      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? "bg-black/95 border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.15)]"
                          : "bg-black/60 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {/* AKORDEÓN HEADER */}
                      <button
                        type="button"
                        onClick={() => togglePhase(pIdx)}
                        className="w-full p-4 flex items-center justify-between text-left cursor-pointer transition-colors"
                      >
                        <div className="text-xs font-black text-[#00f3ff] uppercase tracking-wider flex items-center gap-2.5">
                          <CheckCircle2
                            size={15}
                            className={isExpanded ? "text-[#39FF14] animate-pulse" : "text-[#00f3ff]"}
                          />
                          <span>{phase.title}</span>
                        </div>
                        <div className="text-zinc-400 hover:text-white flex items-center gap-2 text-xs">
                          <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                            {phase.steps ? phase.steps.length : 0} ÚKONOV
                          </span>
                          {isExpanded ? <ChevronUp size={18} className="text-[#00f3ff]" /> : <ChevronDown size={18} />}
                        </div>
                      </button>

                      {/* AKORDEÓN BODY (20 ÚKONOV) */}
                      {isExpanded && phase.steps && phase.steps.length > 0 && (
                        <div className="p-4 pt-0 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-300 animate-fadeIn">
                          {phase.steps.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 flex items-start gap-2.5 text-[11px] leading-relaxed transition-all"
                            >
                              <span className="text-[#FFD700] font-black shrink-0 text-sm">›</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 🛡️ DUAL-HASH IP SHIELD & BEZPEČNOSTNÝ PAS */}
          <div className="p-4 rounded-2xl bg-[#080d12] border border-[#00f3ff]/40 space-y-3 text-[10px] font-mono text-zinc-400 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 flex-wrap gap-2">
              <span className="flex items-center gap-2 text-white font-black uppercase text-xs">
                <ShieldCheck size={16} className="text-[#00f3ff]" /> DUAL-HASH IP SHIELD // KRYPTOGRAFICKÝ AUDIT
              </span>
              {ip.licenseTier && (
                <span className="text-[9px] px-2.5 py-0.5 rounded bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/40 font-black uppercase">
                  {ip.licenseTier}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px]">
              <div>
                <span className="text-zinc-500 uppercase">Autor & Garancia:</span>{" "}
                <span className="text-zinc-200 font-bold block">{ip.author || "Dušan Fajnor @nexus-core2Mb"}</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase">Autorské Práva:</span>{" "}
                <span className="text-zinc-200 font-bold block">{ip.copyrightText || "© 2026 Dušan Fajnor"}</span>
              </div>
              {ip.sha256CleanMaster && (
                <div className="col-span-1 sm:col-span-2 bg-black/60 p-2.5 rounded-xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-zinc-400 font-bold">SHA-256 MASTER CHECKSUM:</span>
                  <code className="text-[#39FF14] select-all break-all font-bold">{ip.sha256CleanMaster}</code>
                </div>
              )}
              {ip.sha256PromoWatermark && (
                <div className="col-span-1 sm:col-span-2 bg-black/60 p-2.5 rounded-xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-zinc-400 font-bold">SHA-256 WATERMARK HASH:</span>
                  <code className="text-zinc-400 select-all break-all">{ip.sha256PromoWatermark}</code>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 👑 3. ACTION FOOTER (STICKY BOTTOM SHIELD WITH VIEWPORT SAFETY) */}
        <div className="p-4 md:p-6 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 font-mono z-20">
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Sadzba Služby (B2B)</div>
            <div className="text-xl md:text-2xl font-black text-[#FFD700]">
              {service.displayPrice || service.price}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                SoundFX?.playClick?.();
                onClose();
              }}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white text-xs font-bold uppercase cursor-pointer transition-all border border-white/10"
            >
              Zatvoriť
            </button>

            <a
              href={directKofiLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => SoundFX?.playSuccess?.()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00f3ff] text-black font-black text-xs uppercase hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.4)] cursor-pointer tracking-wider"
            >
              <Zap size={16} />
              <span>AKTIVOVAŤ SLUŽBU NA KO-FI</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgencyServiceModal;