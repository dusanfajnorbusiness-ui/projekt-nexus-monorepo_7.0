/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY SHELL ROOT V20.95)
// Súbor: apps/agency/src/App.jsx
// Status: 100% GROUNDED // PROTOKOL V20 // STABILIZED AGENCY SHELL
// CORE_VERSION: AGENCY-ROOT-V20.95
// ============================================================================

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// OSTRÉ IMPORTY ZO @shared (MONOREPO REGISTER)
import { GlobalComponents } from "@shared/components/GlobalComponents.jsx";
import { GlobalFooter } from "@shared/components/GlobalFooter.jsx";
import { SystemLogModal } from "@shared/components/SystemLogModal.jsx";

// ⚠️ MODULY V PRÍPRAVE (ZAKOMENTOVANÉ PRE NESKORŠIU INTEGRÁCIU)
// import { GlobalHamburgerMenu } from "@shared/components/GlobalHamburgerMenu.jsx";
// import { GlobalProfil } from "@shared/components/GlobalProfil.jsx";
// import { GlobalMessages } from "@shared/components/GlobalMessages.jsx";

// LOKÁLNE KOMPONENTY APPS/AGENCY
import { AgencyHeader } from "./components/AgencyHeader.jsx";
import { NexusAgencyPage } from "./pages/NexusAgencyPage.jsx";

const DEFAULT_USER_STATE = {
  tier: "QUEST",
  credits: 0,
  isGuest: true,
  displayName: "GUEST_ENTITY",
  email: "",
  avatar: null,
};

export function App() {
  const [themeColor, setThemeColor] = useState("#00f3ff"); // Kánonický Cyan pre Agency
  const [userState, setUserState] = useState(DEFAULT_USER_STATE);
  const [isSystemLogOpen, setIsSystemLogOpen] = useState(false);

  // Načítanie identity z lokálnej pamäte (Defenzívne podľa V20)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("nexus_active_identity");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          setUserState((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch (e) {
      console.warn("⚠️ [AGENCY SHELL]: Identity parse fallback to QUEST:", e);
    }
  }, []);

  const handleLogout = () => {
    try {
      Object.keys(localStorage || {}).forEach((key) => {
        if (key.startsWith("nexus_")) localStorage.removeItem(key);
      });
    } catch (_) {}
    window.location.href = "https://projekt-nexus.sk/login";
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#020406] text-[#b3d4d6] font-mono overflow-x-hidden flex flex-col relative text-left">
        {/* V20 VÝBER A SCROLL ŠTÝLY */}
        <style>{`
          ::selection { background-color: #00f3ff; color: #000; }
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          [id^="nexus-"] { scroll-margin-top: 150px; }
        `}</style>

        {/* 1. SYSTÉMOVÉ KOMPONENTY (DÁTOVÝ MOST & SOUND ENGINE) */}
        <div className="relative z-50 pointer-events-none">
          <div className="pointer-events-auto">
            <GlobalComponents themeColor={themeColor} userState={userState} />
          </div>
        </div>

        {/* 2. MONOLITNÝ AGENCY CYBER-DOCK (HEADER — JEDINÁ AKTÍVNA AGENCY) */}
        <AgencyHeader
          userState={userState}
          themeColor={themeColor}
          handleLogout={handleLogout}
        />

        {/* 3. OBSAH AGENTÚRY (18 B2B SLUŽIEB & MANIFESTO) */}
        <main className="pt-20 flex-1 relative z-10">
          <Routes>
            <Route
              path="/*"
              element={<NexusAgencyPage userState={userState} themeColor={themeColor} />}
            />
          </Routes>
        </main>

        {/* 4. GLOBÁLNY FOOTER MONOLITU */}
        <GlobalFooter
          userTier={userState?.tier || "QUEST"}
          themeColor={themeColor}
          activeTab="agency"
          onNavigate={(path) => {
            const cleanPath = String(path || "").replace(/^\//, "");
            if (cleanPath === "home" || !cleanPath) {
              window.location.href = "https://projekt-nexus.sk";
            } else {
              window.location.href = `https://${cleanPath}.projekt-nexus.sk`;
            }
          }}
          onOpenSystemLog={() => setIsSystemLogOpen(true)}
          uptime={1337}
        />

        {/* 5. ONLINE SYSTEM LOG MODAL */}
        <SystemLogModal
          isOpen={isSystemLogOpen}
          onClose={() => setIsSystemLogOpen(false)}
          themeColor={themeColor}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;