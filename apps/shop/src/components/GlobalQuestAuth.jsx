/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION
// File: src/components/GlobalQuestAuth.jsx
// Core Version: QUEST-AUTH-GUARD V20.12
// Status: STRICTLY GROUNDED // ROUTE GUARD & UPLINK MODAL FOR QUEST USERS
// ============================================================================

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, ShieldAlert, LogIn, ArrowLeft } from "lucide-react";
import {
  isRouteAllowedForQuest,
  isQuestUser,
} from "../data/permissionsRegistry.js";

export const GlobalQuestAuth = ({ children, activeUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const isQuestFlag =
      localStorage.getItem("nexus_quest_mode") === "true" ||
      localStorage.getItem("nexus_guest_mode") === "true" ||
      sessionStorage.getItem("nexus_quest_mode") === "true" ||
      localStorage.getItem("nexus_mode") === "quest" ||
      localStorage.getItem("nexus_mode") === "guest";

    const currentIsQuest = isQuestFlag || isQuestUser(activeUser);
    const routeAllowed = isRouteAllowedForQuest(location.pathname);

    if (currentIsQuest && !routeAllowed) {
      setIsBlocked(true);
    } else {
      setIsBlocked(false);
    }
  }, [location.pathname, activeUser]);

  if (isBlocked) {
    return (
      <div className="relative min-h-screen w-full bg-[#050508] text-white flex items-center justify-center p-4 select-none">
        {/* Cyber-Brutalist Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        {/* VYSKAKOVACIE OKNO (MODAL) */}
        <div className="relative z-50 w-full max-w-lg bg-[#0a0a0f]/95 border-2 border-[#FF003C] rounded-xl p-6 md:p-8 shadow-[0_0_50px_rgba(255,0,60,0.3)] backdrop-blur-md text-center">
          {/* ICON HEADER */}
          <div className="mx-auto w-16 h-16 rounded-full bg-[#FF003C]/10 border border-[#FF003C] flex items-center justify-center mb-6 animate-pulse">
            <Lock className="w-8 h-8 text-[#FF003C]" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF003C]/20 border border-[#FF003C]/50 rounded-full text-xs font-mono text-[#FF003C] uppercase tracking-widest mb-3">
            <ShieldAlert className="w-3.5 h-3.5" /> ACCESS RESTRICTED // QUEST
            MODE
          </div>

          <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-3">
            Prístup do Obchodu Zakázaný
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed font-sans mb-8">
            Obchod OS Genesis, prezeranie Kódexov, prehrávanie médií a
            sťahovanie digitálnych aktív sú prístupné{" "}
            <span className="text-[#00f3ff] font-bold">
              výhradne pre overených Operátorov
            </span>
            . Pre odomknutie plného prístupu sa prosím prihláste alebo
            zaregistrujte.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.projekt-nexus.sk/login"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#FF003C] hover:bg-[#ff1a4f] text-white font-mono font-bold text-sm uppercase rounded-lg transition-all shadow-[0_0_20px_rgba(255,0,60,0.4)] cursor-pointer"
            >
              <LogIn className="w-4 h-4" /> UPLINK IDENTIFIKÁCIA
            </a>

            <button
              onClick={() => navigate("/")}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-mono font-bold text-sm uppercase border border-white/10 rounded-lg transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> HLAVNÉ MENU
            </button>
          </div>

          <div className="mt-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            CORE_VERSION: QUEST-FIREWALL V20.12 // ACCESS_DENIED
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default GlobalQuestAuth;
