import { GlobalComponents } from "@shared/components/GlobalComponents.jsx";
import { GlobalFooter } from "@shared/components/GlobalFooter.jsx";
import { GlobalHamburgerMenu } from "@shared/components/GlobalHamburgerMenu.jsx";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { Activity, ArrowLeft, Clock, PlaySquare, ShieldAlert, Terminal } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CORE_VERSION = "SYS01-VIDEO_NODES V20.0-STANDBY";
const DIM_COLOR = "#FF0000";
const STANDBY_IMAGE =
  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop/SYS01_VIDEO-NODES-16x9.jpg";

export const Sys01_VideoNodes = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    if (SoundFX && typeof SoundFX.click === "function") SoundFX.click();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#030507] text-white font-mono relative selection:bg-[#FF0000] selection:text-white">
      {/* 🌌 AMBIENT GLOW */}
      <div
        className="fixed top-0 left-0 w-full h-[500px] pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at top center, ${DIM_COLOR}, transparent 80%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 pt-20 pb-32">
        {/* ========================================================================= */}
        {/* 📂 HLAVNÁ STRÁNKA (HEADER KÁNON V20) */}
        {/* ========================================================================= */}
        <header className="mb-16 border-b border-[#FF0000]/20 pb-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-3 mb-4">
            <PlaySquare size={24} color={DIM_COLOR} />
            <span className="text-[#FF0000] text-[10px] font-black uppercase tracking-[0.3em]">
              SYS 01 | Public Access
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Video <span className="text-[#FF0000] italic">Nodes</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Centrálny video register (Single Source of Truth). Archív verejných
            trailerov, kampaňových intier a systémových streamov OS Genesis
            pripravených na vysielanie do Matrixu.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 🛑 SYSTEM STANDBY // AWAITING DEPLOYMENT (OFFLINE NODE) */}
        {/* ========================================================================= */}
        <div className="bg-[#050A0E]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl relative group">
          {/* 16:9 CDN COVER IMAGE S EFEKTOM SKENOVACÍCH ČIAR */}
          <div className="relative aspect-video w-full bg-black overflow-hidden border-b border-white/10">
            <img
              src={STANDBY_IMAGE}
              alt="SYS01 Video Nodes Standby"
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-black/40 to-transparent pointer-events-none" />

            {/* STATUS BADGE V OBRAZE */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/80 px-3.5 py-1.5 rounded-xl border border-[#FF0000]/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-ping" />
              <span className="text-[9px] font-black tracking-widest text-[#FF0000] uppercase">
                SYSTEM STANDBY // AWAITING DATA UPLOADED
              </span>
            </div>
          </div>

          {/* TELEMETRIA & TERMINÁLOVÉ DETAILNÉ HLÁSENIE */}
          <div className="p-6 md:p-10 text-left space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                  <Terminal size={20} style={{ color: DIM_COLOR }} />
                  SYS 01 // UZOL VO VÝVOJI
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-1">
                  CORE_VERSION: {CORE_VERSION} | PORT: 48 // BUFFER INITIALIZED
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#FF0000]/10 border border-[#FF0000]/30 text-[#FF0000] text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Clock size={12} /> STANDBY
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Activity
                    size={12}
                    className="animate-pulse text-[#FF0000]"
                  />{" "}
                  0/100 NODES
                </span>
              </div>
            </div>

            <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-xs text-zinc-400 leading-relaxed space-y-2">
              <p className="text-white font-bold flex items-center gap-2">
                <ShieldAlert size={14} style={{ color: DIM_COLOR }} />
                Dátový tok dočasne pozastavený
              </p>
              <p>
                Video uzly a verejné streamy prebiehajú procesom kódovania a
                synchronizácie s CDN úložiskom Supabase. Akonáhle Architekt
                aktivuje Ghost-Mode Deployment, uzly sa automaticky rozsvietia
                na zeleno.
              </p>
            </div>

            <div className="pt-2 flex justify-start">
              <button
                onClick={handleBackHome}
                className="px-6 py-3 bg-black hover:bg-white/10 border border-white/20 hover:border-white text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-xl hover:scale-105"
              >
                <ArrowLeft size={14} style={{ color: DIM_COLOR }} />
                Návrat do Matrixu (Home)
              </button>
            </div>
          </div>
        </div>
      </div>

      <GlobalComponents themeColor={DIM_COLOR} />
      <GlobalHamburgerMenu activeTab="sys01" themeColor={DIM_COLOR} />
      <GlobalFooter themeColor={DIM_COLOR} />
    </div>
  );
};

export default Sys01_VideoNodes;
