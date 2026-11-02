/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY SERVICE MODAL V20.95)
// Súbor: apps/agency/src/components/AgencyServiceModal.jsx
// Status: 100% GROUNDED // ALL DATA FIELDS RENDERED IN STRUCTURED BLOCKS
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React, { useEffect } from "react";
import {
  X,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  Layers,
  Users,
  Building,
  UserCheck,
  Download,
  Flame,
} from "lucide-react";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalYTMediaPlayer } from "./Agency-YT-MediaPlayer";

// 🎨 PRÍSNA MATICA FARIEB PODĽA TIER ZÁKONA V20
const GET_TIER_CONFIG = (tierCode = "", tier = "") => {
  const code = String(tierCode || tier || "").toUpperCase();

  if (
    code.includes("MASTER") ||
    code.includes("CROWN") ||
    code.includes("MASTERMIUM")
  ) {
    return {
      label: "MASTERMIUM",
      badgeClass:
        "border-[#FF003C] bg-[#FF003C]/15 text-[#FF003C] shadow-[0_0_12px_rgba(255,0,60,0.35)]",
    };
  }
  if (code.includes("OMEGA") || code.includes("OMEGAMIUM")) {
    return {
      label: "OMEGAMIUM",
      badgeClass:
        "border-[#FFD700] bg-[#FFD700]/15 text-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.35)]",
    };
  }
  if (code.includes("PRO") || code.includes("PROMIUM")) {
    return {
      label: "PROMIUM",
      badgeClass:
        "border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.35)]",
    };
  }
  return {
    label: "FREE ONBOARDING",
    badgeClass:
      "border-[#00F3FF] bg-[#00F3FF]/15 text-[#00F3FF] shadow-[0_0_12px_rgba(0,243,255,0.35)]",
  };
};

export const AgencyServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!service) return null;

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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-in fade-in duration-200 font-mono text-white">
      <div className="bg-[#050A0E] border border-[#00f3ff]/50 rounded-3xl max-w-5xl w-full p-5 md:p-8 space-y-6 relative shadow-[0_0_60px_rgba(0,243,255,0.25)] max-h-[92vh] overflow-y-auto custom-scroll">
        {/* ZATVÁRACIE TLAČIDLO */}
        <button
          onClick={() => {
            SoundFX?.playClick?.();
            onClose();
          }}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-all cursor-pointer border border-white/10 hover:border-[#00f3ff] z-20"
        >
          <X size={18} />
        </button>
        {/* 1. HLAVIČKA A ŠTÍTKY (HEADER BLOCK) */}
        <div className="space-y-4 border-b border-white/10 pb-6 pr-10">
          <div className="flex items-center justify-between gap-2 text-xs font-bold flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                style={{
                  borderColor: serviceColor
                    ? `${serviceColor}aa`
                    : "rgba(0, 243, 255, 0.6)",
                  color: serviceColor || "#00F3FF",
                  boxShadow: `0 0 12px ${serviceColor || "#00F3FF"}55`,
                }}
                className="px-3 py-1 rounded-xl border bg-black/80 uppercase tracking-wider font-black backdrop-blur-md"
              >
                {service.id} // {service.dimension || "V20"}
              </span>

              {service.subCategoryTitle && (
                <span className="px-2.5 py-1 rounded-xl border border-white/15 bg-white/5 text-zinc-300 text-[10px] uppercase">
                  {service.subCategoryTitle}
                </span>
              )}
            </div>

            <span
              className={`px-3 py-1 rounded-xl border uppercase tracking-widest font-black backdrop-blur-md text-xs ${tierConfig.badgeClass}`}
            >
              {tierConfig.label}
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">
              {service.title}
            </h2>
            {service.fullName && service.fullName !== service.title && (
              <p className="text-xs text-zinc-400 font-sans">
                {service.fullName}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xl md:text-2xl font-black text-[#FFD700] tracking-tight">
              {service.displayPrice || service.price}
            </div>

            {/* METADÁTA TAGY: EXEC TIME, DIFFICULTY, TOOLS */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-zinc-300">
              {service.deliveryTime && (
                <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 flex items-center gap-1">
                  <Clock size={12} className="text-[#00F3FF]" />{" "}
                  {service.deliveryTime}
                </span>
              )}
              {service.execTime && (
                <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 flex items-center gap-1">
                  <Zap size={12} className="text-[#FFD700]" />{" "}
                  {service.execTime}
                </span>
              )}
              {service.difficulty && (
                <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 flex items-center gap-1">
                  <Flame size={12} className="text-[#FF003C]" />{" "}
                  {service.difficulty}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 2. MEDIA TERMINÁL A STIAHNUTIE ARCHÍVOV */}
        <div className="space-y-3 bg-black/50 p-4 rounded-2xl border border-white/10">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <Sparkles size={15} className="text-[#00f3ff]" />
            <span>MEDIA MATRIX TERMINÁL (6 SPÍNAČOV):</span>
          </div>
          <GlobalYTMediaPlayer mode="service" serviceData={service} compact />

          {/* SÚBORY NA STIAHNUTIE (IMAGE FORMATS / ZIP) */}
          {(formats.ratio16x9 || formats.zipUrl) && (
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-[10px]">
              <span className="text-zinc-500 font-bold uppercase mr-2 flex items-center gap-1">
                <Download size={12} /> FORMATS & ASSETS:
              </span>
              {formats.ratio16x9 && (
                <a
                  href={formats.ratio16x9}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 hover:border-[#00f3ff] text-zinc-300 hover:text-white transition-all"
                >
                  16:9 HD Desktop
                </a>
              )}
              {formats.ratio9x16 && (
                <a
                  href={formats.ratio9x16}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 hover:border-[#00f3ff] text-zinc-300 hover:text-white transition-all"
                >
                  9:16 Shorts Mobile
                </a>
              )}
              {formats.ratio1x1 && (
                <a
                  href={formats.ratio1x1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 hover:border-[#00f3ff] text-zinc-300 hover:text-white transition-all"
                >
                  1:1 Square Post
                </a>
              )}
              {formats.zipUrl && (
                <a
                  href={formats.zipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#00f3ff]/10 border border-[#00f3ff]/40 text-[#00f3ff] font-bold transition-all flex items-center gap-1"
                >
                  ZIP Master Pack
                </a>
              )}
            </div>
          )}
        </div>

        {/* 3. STRATEGICKÝ BRIEF & ŠTRUKTÚRA SLUŽBY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ZAMERANIE A POINTA */}
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 space-y-2">
            <div className="font-bold text-[#00f3ff] uppercase font-mono text-xs flex items-center gap-1.5">
              <Target size={14} />
              <span>🎯 ZAMERANIE A POINTA:</span>
            </div>
            <p className="leading-relaxed font-sans text-xs text-zinc-300">
              {scan.zameranieAPointa || service.spoilerIntro}
            </p>
          </div>

          {/* DETAILNÝ POPIS & CIEĽ */}
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 space-y-2">
            <div className="font-bold text-[#FFD700] uppercase font-mono text-xs flex items-center gap-1.5">
              <Layers size={14} />
              <span>📋 DETAILNÝ POPIS & CIEĽ:</span>
            </div>
            <p className="leading-relaxed font-sans text-xs text-zinc-300">
              {scan.detailnyPopis || service.goal || service.desc}
            </p>
          </div>
        </div>

        {/* 4. DOPLŇUJÚCE METADÁTA: TOOLS, LIEVIK, ČO ZÍSKAŠ */}
        <div className="bg-black/40 p-4 rounded-2xl border border-white/10 space-y-3 font-sans text-xs">
          {scan.coZiskas && (
            <div className="space-y-1">
              <strong className="text-[#00FF66] font-mono uppercase text-[11px] block">
                🎁 Čo získaš:
              </strong>
              <p className="text-zinc-300 leading-relaxed">{scan.coZiskas}</p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10 font-mono text-[11px]">
            {service.tools && (
              <div>
                <span className="text-zinc-500 font-bold block">
                  🛠️ NÁSTROJE & STACK:
                </span>
                <span className="text-white">{service.tools}</span>
              </div>
            )}
            {service.funnel && (
              <div>
                <span className="text-zinc-500 font-bold block">
                  🎯 MARKETINGOVÝ LIEVIK:
                </span>
                <span className="text-[#00f3ff]">{service.funnel}</span>
              </div>
            )}
            {scan.kCemuSaTotoDaPouzit && (
              <div>
                <span className="text-zinc-500 font-bold block">
                  💡 K ČOMU SA TO DÁ POUŽIŤ:
                </span>
                <span className="text-zinc-300">
                  {scan.kCemuSaTotoDaPouzit}
                </span>
              </div>
            )}
            {scan.akoToFunguje && (
              <div>
                <span className="text-zinc-500 font-bold block">
                  ⚙️ AKO TO FUNGUJE:
                </span>
                <span className="text-zinc-300">{scan.akoToFunguje}</span>
              </div>
            )}
          </div>
        </div>

        {/* 5. CIEĽOVÁ SKUPINA (PRE KOHO JE TOTO) */}
        {(targetAudience.preAkyTypLudi ||
          targetAudience.preAkyTypCloveka ||
          targetAudience.preAkyTypSpolocnosti) && (
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 space-y-3 font-sans text-xs">
            <div className="font-bold text-white font-mono uppercase text-xs flex items-center gap-1.5">
              <Users size={14} className="text-[#BF00FF]" />
              <span>👥 CLIENT MATCH DIAGNOSTIKA:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {targetAudience.preAkyTypLudi && (
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase flex items-center gap-1">
                    <Users size={12} className="text-[#00f3ff]" /> Pre kategóriu
                    ľudí:
                  </span>
                  <p className="text-zinc-300 text-[11px]">
                    {targetAudience.preAkyTypLudi}
                  </p>
                </div>
              )}
              {targetAudience.preAkyTypCloveka && (
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase flex items-center gap-1">
                    <UserCheck size={12} className="text-[#39FF14]" /> Pre typ
                    človeka:
                  </span>
                  <p className="text-zinc-300 text-[11px]">
                    {targetAudience.preAkyTypCloveka}
                  </p>
                </div>
              )}
              {targetAudience.preAkyTypSpolocnosti && (
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase flex items-center gap-1">
                    <Building size={12} className="text-[#FFD700]" /> Pre typ
                    spoločnosti:
                  </span>
                  <p className="text-zinc-300 text-[11px]">
                    {targetAudience.preAkyTypSpolocnosti}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        {/* 6. 5 FÁZ GHOST-MODE EXEKÚCIE (20 ÚKONOV) */}
        {phases.length > 0 && (
          <div className="space-y-3 font-mono">
            <div className="font-bold text-white uppercase text-xs tracking-wider flex items-center gap-1.5">
              <Zap size={14} className="text-[#FFD700]" />
              <span>🛠️ 5 FÁZ GHOST-MODE EXEKÚCIE ({phases.length} FÁZ):</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {phases.map((phase, pIdx) => (
                <div
                  key={phase.phaseId || pIdx}
                  className="bg-black/40 p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all space-y-1.5"
                >
                  <div className="text-xs font-bold text-[#00f3ff] uppercase">
                    {phase.title}
                  </div>
                  <ul className="text-[11px] text-zinc-300 space-y-1 pl-1">
                    {Array.isArray(phase.steps) &&
                      phase.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={13}
                            className="text-[#00f3ff] shrink-0 mt-0.5"
                          />
                          <span>{step}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. IP SECURITY & BEZPEČNOSTNÝ PAS */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2 text-[10px] font-mono text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-white font-bold uppercase">
              <ShieldCheck size={14} className="text-[#00f3ff]" /> BEZPEČNOSTNÝ
              PAS A LICENČNÁ INTEGRITA
            </span>
            {ip.licenseTier && (
              <span className="text-[#FFD700] font-bold">{ip.licenseTier}</span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[9px]">
            <div>
              <span className="text-zinc-500">Autor & Vydavateľ:</span>{" "}
              <span className="text-zinc-300">
                {ip.author || "Dušan Fajnor"} //{" "}
                {ip.publisher || "NEXUS AGENCY"}
              </span>
            </div>
            <div>
              <span className="text-zinc-500">Autorské práva:</span>{" "}
              <span className="text-zinc-300">
                {ip.copyrightText || "© 2026 Dušan Fajnor"}
              </span>
            </div>
            {ip.sha256CleanMaster && (
              <div className="col-span-1 sm:col-span-2 truncate">
                <span className="text-zinc-500">SHA-256 Master Checksum:</span>{" "}
                <span className="text-[#00f3ff] font-bold">
                  {ip.sha256CleanMaster}
                </span>
              </div>
            )}
            {ip.sha256PromoWatermark && (
              <div className="col-span-1 sm:col-span-2 truncate">
                <span className="text-zinc-500">SHA-256 Watermark Hash:</span>{" "}
                <span className="text-zinc-400">{ip.sha256PromoWatermark}</span>
              </div>
            )}
          </div>
        </div>

        {/* 8. MODAL FOOTER */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 font-mono">
          <button
            onClick={() => {
              SoundFX?.playClick?.();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase cursor-pointer transition-all border border-white/10"
          >
            Zatvoriť
          </button>

          <a
            href={directKofiLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => SoundFX?.playSuccess?.()}
            className="px-6 py-2.5 rounded-xl bg-[#00f3ff] text-black font-black text-xs uppercase hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.4)] cursor-pointer"
          >
            <Zap size={14} />
            <span>Aktivovať Službu na Ko-Fi</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgencyServiceModal;
