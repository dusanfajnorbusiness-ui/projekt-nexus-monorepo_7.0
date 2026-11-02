import React from "react";
import {
  Users,
  Terminal,
  Activity,
  ArrowLeft,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GlobalComponents } from "@main-web/components/GlobalComponents";
import { GlobalHamburgerMenu } from "@main-web/components/GlobalHamburgerMenu";
import { GlobalFooter } from "@main-web/components/GlobalFooter";
import { SoundFX } from "@shared/utils/SoundEngine";

const CORE_VERSION = "SYS02-VIDEO_MENTORING V20.0-STANDBY";
const DIM_COLOR = "#E91E63";
const STANDBY_IMAGE =
  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop/SYS02_MENTORING-16x9.jpg";

export const Sys02_Mentoring = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    if (SoundFX && typeof SoundFX.click === "function") SoundFX.click();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#030507] text-white font-mono relative selection:bg-[#E91E63] selection:text-white">
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
        <header className="mb-16 border-b border-[#E91E63]/20 pb-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-3 mb-4">
            <Users size={24} color={DIM_COLOR} />
            <span className="text-[#E91E63] text-[10px] font-black uppercase tracking-[0.3em]">
              SYS 02 | Stream Vault
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Video <span className="text-[#E91E63] italic">Mentoring</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Centrálny mentoringový trezor (Single Source of Truth). Archív
            asynchrónneho mentoringu, OMEGA streamov a dešifrovaných dátových
            dialógov s Mentormi Siete.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 🛑 SYSTEM STANDBY // AWAITING DEPLOYMENT (OFFLINE NODE) */}
        {/* ========================================================================= */}
        <div className="bg-[#050A0E]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl relative group">
          <div className="relative aspect-video w-full bg-black overflow-hidden border-b border-white/10">
            <img
              src={STANDBY_IMAGE}
              alt="SYS02 Video Mentoring Standby"
              className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-black/40 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/80 px-3.5 py-1.5 rounded-xl border border-[#E91E63]/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E91E63] animate-ping" />
              <span className="text-[9px] font-black tracking-widest text-[#E91E63] uppercase">
                SYSTEM STANDBY // AWAITING STREAM VAULT
              </span>
            </div>
          </div>

          <div className="p-6 md:p-10 text-left space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                  <Terminal size={20} style={{ color: DIM_COLOR }} />
                  SYS 02 // STREAM VAULT VO VÝVOJI
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-1">
                  CORE_VERSION: {CORE_VERSION} | TIER: OMEGA GATEWAY
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#E91E63]/10 border border-[#E91E63]/30 text-[#E91E63] text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Clock size={12} /> STANDBY
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Activity
                    size={12}
                    className="animate-pulse text-[#E91E63]"
                  />{" "}
                  ENCRYPTED
                </span>
              </div>
            </div>

            <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-xs text-zinc-400 leading-relaxed space-y-2">
              <p className="text-white font-bold flex items-center gap-2">
                <ShieldAlert size={14} style={{ color: DIM_COLOR }} />
                OMEGA Streamy a Archív dešifrovaných relácií
              </p>
              <p>
                Priame asynchrónne linky a mentoringové záznamy sú v stave
                prípravy. Prístup k dešifrovaným súborom bude aktivovaný pre
                operátorov s overenou identitou.
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
      <GlobalHamburgerMenu activeTab="sys02" themeColor={DIM_COLOR} />
      <GlobalFooter themeColor={DIM_COLOR} />
    </div>
  );
};

export default Sys02_Mentoring;
