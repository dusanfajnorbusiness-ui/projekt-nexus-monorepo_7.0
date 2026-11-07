/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY FILTERS DATA REGISTER V20.95)
// Súbor: apps/agency/src/data/AgencyFiltersData.js
// Status: 100% GROUNDED // 7 B2B CATEGORIES & STRICT TIER MAPPING
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

export const AGENCY_FILTERS_CONFIG = {
  id: "agency",
  title: "NEXUS AGENCY B2B",
  subtitle: "18 B2B IT Služieb // Digital Infrastructure & Code Surgery",
  color: "#00F3FF",
  searchPlaceholder: "Vyhľadať B2B službu, audit, kód, video alebo cloud...",

  // 🏢 7 PRIMÁRNYCH B2B KATEGÓRIÍ PRE 18 SLUŽIEB
  mainCategories: [
    {
      key: "ALL",
      label: "VŠETKY SLUŽBY (18)",
      iconName: "Globe",
      url: "/agency",
    },
    {
      key: "srv-01-web",
      label: "01. WEB & FRONT-END",
      iconName: "Laptop",
      url: "/agency?cat=srv-01-web",
    },
    {
      key: "srv-02-data",
      label: "02. DÁTA & ADMINISTRATÍVA",
      iconName: "Cpu",
      url: "/agency?cat=srv-02-data",
    },
    {
      key: "srv-03-copy",
      label: "03. OBSAH & COPYWRITING",
      iconName: "FileText",
      url: "/agency?cat=srv-03-copy",
    },
    {
      key: "srv-04-video",
      label: "04. MULTIMÉDIÁ & VIDEO",
      iconName: "Video",
      url: "/agency?cat=srv-04-video",
    },
    {
      key: "srv-05-gaming",
      label: "05. GAMING MASTERMINDS",
      iconName: "Crown",
      url: "/agency?cat=srv-05-gaming",
    },
    {
      key: "srv-06-dev",
      label: "06. VÝVOJ SOFTVÉRU & FRANŠÍZA",
      iconName: "Layers",
      url: "/agency?cat=srv-06-dev",
    },
    {
      key: "srv-07-enterprise",
      label: "07. APPS, MEDIA & ENTERPRISE",
      iconName: "Terminal",
      url: "/agency?cat=srv-07-enterprise",
    },
  ],

  // 🏷️ SEKUNDÁRNE TIER FILTRE
  categories: [
    {
      key: "ALL",
      label: "VŠETKY TIERY",
      iconName: "Layers",
      tooltipText: "Zobraziť služby naprieč všetkými licenčnými úrovňami",
    },
    {
      key: "FREE",
      label: "FREE ONBOARDING",
      iconName: "Shield",
      tooltipText: "Služby s nulovou bariérou vstupu pre nových klientov",
    },
    {
      key: "PROMIUM",
      label: "PRO B2B",
      iconName: "Zap",
      tooltipText: "Štandardné B2B komerčné exekúcie pre malé a stredné firmy",
    },
    {
      key: "OMEGAMIUM",
      label: "OMEGA ENTERPRISE",
      iconName: "Crown",
      tooltipText:
        "Pokročilé riešenia pre náročné projekty a vývojové Waitlisty",
    },
    {
      key: "MASTERMIUM",
      label: "MASTER FRANCHISE",
      iconName: "Terminal",
      tooltipText: "Enterprise licencie s plným odovzdaním kódexov a Know-How",
    },
  ],
};

export default AGENCY_FILTERS_CONFIG;
