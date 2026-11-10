import { GlobalYTMediaPlayer } from "@agency/components/Agency-YT-MediaPlayer.jsx";
import { AgencyFilters, getPrimaryCategoryKey, getTierKey } from "@agency/components/AgencyFilters.jsx";
import { AgencyHeader } from "@agency/components/AgencyHeader.jsx";
import { AgencyServiceCard } from "@agency/components/AgencyServiceCard.jsx";
import { AgencyServiceModal } from "@agency/components/AgencyServiceModal.jsx";
import { SERVICES_DATA } from "@agency/data/AgencyServicesData.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { Globe, HelpCircle, Zap } from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY MASTER PAGE V20.95)
// Súbor: apps/agency/src/pages/NexusAgencyPage.jsx
// Status: 100% GROUNDED // URL SEARCH PARAMS ROUTING & 7-CAT FILTERING
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const NexusAgencyPage = ({
  onThemeChange,
  userState,
  getTierColor,
  themeColor,
}) => {
  // 🎯 AUTOMATICKÉ PREPNUTIE GLOBÁLNEJ ZBERNICE NA KYBERNETICKÝ CYAN (#00f3ff)
  useEffect(() => {
    if (onThemeChange) {
      onThemeChange("#00f3ff"); // Agency Digital Infrastructure Mainframe
    }
  }, [onThemeChange]);

  // 100% PURE REACT STATE (BEZ ZNEČISŤOVANIA URL ADRESY)
  const [activeSubcat, setActiveSubcat] = useState("ALL");
  const [activeTier, setActiveTier] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [layoutView, setLayoutView] = useState("GRID_3");

  const servicesList = useMemo(() => {
    return Object.values(SERVICES_DATA || {});
  }, []);

  // ⚙️ PURE STATE HANDLERY (BEZ SETSEARCHPARAMS)
  const handleSubcatChange = (newCat) => {
    SoundFX?.playClick?.();
    setActiveSubcat(newCat || "ALL");
  };

  const handleTierChange = (newTier) => {
    SoundFX?.playClick?.();
    setActiveTier(newTier || "ALL");
  };

  const handleSearchChange = (newQ) => {
    setSearchTerm(newQ || "");
  };

  const handleOpenModal = (service) => {
    SoundFX?.playClick?.();
    setSelectedService(service || null);
  };

  const handleCloseModal = () => {
    SoundFX?.playClick?.();
    setSelectedService(null);
  };

  const handleResetFilters = () => {
    SoundFX?.playClick?.();
    setActiveSubcat("ALL");
    setActiveTier("ALL");
    setSearchTerm("");
    setSelectedService(null);
    setLayoutView("GRID_3");
  };

  // 🧮 PRECIZIA DVOJÚROVŇOVÉHO FILTROVANIA 18 SLUŽIEB
  const filteredServices = useMemo(() => {
    return servicesList.filter((srv) => {
      // 1. PRIMÁRNA FILTRÁCIA (7 SEKTOROV)
      const itemCatKey = getPrimaryCategoryKey(srv);
      const matchSub = activeSubcat === "ALL" || itemCatKey === activeSubcat;

      // 2. SEKUNDÁRNA FILTRÁCIA (TIERS)
      const itemTierKey = getTierKey(srv);
      const matchTier = activeTier === "ALL" || itemTierKey === activeTier;

      // 3. VYHĽADÁVANIE
      const matchSearch =
        !searchTerm ||
        srv.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        srv.id?.toLowerCase().includes(searchTerm.toLowerCase());

      return matchSub && matchTier && matchSearch;
    });
  }, [servicesList, activeSubcat, activeTier, searchTerm]);

  return (
    <div className="min-h-screen bg-[#020406] text-white font-mono selection:bg-[#00f3ff] selection:text-black relative overflow-x-hidden">
      {/* CYBER GRID BACKGROUND */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* 1. HLAVIČKA AGENTÚRY JE UŽ V APP.JSX — TENTO RIADOK ODSTRÁŇ / ZAKOMENTUJ: */}
      {/* <AgencyHeader /> */}

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12">
        {/* HERO BRAND MANIFESTO HEADER */}
        <header className="space-y-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f3ff]/40 bg-[#00f3ff]/10 text-[#00f3ff] text-xs font-black uppercase tracking-widest">
                <Globe size={14} className="animate-spin" />
                NEXUS AGENCY B2B INFRASTRUCTURE
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                DIGITÁLNA{" "}
                <span className="text-[#00f3ff] drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                  CHIRURGIA
                </span>{" "}
                & KÓD
              </h1>
              <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                Jednočlenná IT armáda v Ghost-Móde. 18 špecializovaných B2B
                služieb, Front-End chirurgia, automatizácia dát, video
                explajnery a cloud deployment s nekompromisnou zárukou kvality
                V20.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://ko-fi.com/c/816d0ded89"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => SoundFX?.playSuccess?.()}
                className="px-6 py-3.5 rounded-2xl bg-[#00f3ff] text-black font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <Zap size={16} />
                <span>RÝCHLA B2B OBJEDNÁVKA</span>
              </a>
            </div>
          </div>

          {/* 6-SPÍNAČOVÝ MEDIA PLAYER (BRAND MANIFESTO) */}
          <GlobalYTMediaPlayer mode="manifesto" />
        </header>

        {/* 2. FILTRAČNÉ CENTRUM V20 */}
        <section>
          <AgencyFilters
            activeSubcat={activeSubcat}
            onSubcatChange={handleSubcatChange}
            activeTier={activeTier}
            onTierChange={handleTierChange}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            layoutView={layoutView}
            onLayoutChange={setLayoutView}
            onResetFilters={handleResetFilters}
            dataItems={servicesList}
          />
        </section>

        {/* 3. VYKRESLOVANIE 18 SLUŽIEB CEZ V20 AGENCY SERVICE CARD */}
        <main className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-zinc-400">
            <span className="font-bold uppercase tracking-wider text-[#00f3ff]">
              Zobrazených: {filteredServices.length} z {servicesList.length} B2B
              Služieb
            </span>
            <span className="text-[10px] text-zinc-500">
              LAYOUT: {layoutView}
            </span>
          </div>

          {filteredServices.length === 0 ? (
            <div className="p-12 text-center bg-black/40 border border-white/10 rounded-3xl space-y-4">
              <HelpCircle
                size={48}
                className="mx-auto text-zinc-600 animate-bounce"
              />
              <div className="text-base font-bold text-white uppercase">
                Žiadna služba neodpovedá filtru
              </div>
              <p className="text-xs text-zinc-400 max-w-md mx-auto font-sans">
                Skúste zmeniť vyhľadávací výraz alebo vynulovať vybrané
                kategórie tlačidlom nižšie.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/40 rounded-xl text-xs font-bold uppercase hover:bg-[#00f3ff] hover:text-black transition-all cursor-pointer"
              >
                Resetovať filtre
              </button>
            </div>
          ) : (
            <div
              className={
                layoutView === "GRID_3" || layoutView === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : layoutView === "GRID_MEDIUM"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    : "flex flex-col space-y-4"
              }
            >
              {filteredServices.map((service) => (
                <AgencyServiceCard
                  key={service.id || service.nodeKey}
                  service={service}
                  onOpenModal={handleOpenModal}
                  layoutView={layoutView}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* 4. MODÁL DETAILU SLUŽBY SYNCHRONIZOVANÝ S URL (?srv=SRV_XX) */}
      {selectedService && (
        <AgencyServiceModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default NexusAgencyPage;
