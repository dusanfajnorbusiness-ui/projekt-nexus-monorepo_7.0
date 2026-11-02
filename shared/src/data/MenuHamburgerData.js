/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS03 MASTER DATASET V20.25)
// Súbor: src/data/MenuHamburgerData.js
// Status: 100% GROUNDED // 100% PERFECT SSOT MONOLITH
// ============================================================================

// 🏰 1. UŽÍVATEĽSKÉ ROZHRANIE A MODÁLY (Rýchle Akcie)
export const TRIPLE_USER_NAV = [
  {
    isDivider: true,
    label: "🏰 1. UŽÍVATEĽSKÉ ROZHRANIE A MODÁLY \n(Rýchle Akcie)",
  },

  {
    label: "PROFIL OPERÁTORA",
    icon: "User",
    actionTab: "open_profil",
    url: "/profil",
  },
  {
    label: "INBOX (TERMINÁL SPRÁV)",
    icon: "Inbox",
    actionTab: "open_inbox",
    url: "/messages",
    requiresAuth: true,
  },
];

// 🌍 2. GLOBÁLNA NAVIGATION MATRIX OS GENESIS (Všetky Hlavné Porty)
export const GLOBAL_NEXUS_NAV = [
  {
    isDivider: true,
    label:
      "🌍 2. GLOBÁLNA NAVIGATION MATRIX OS GENESIS \n(Všetky Hlavné Porty)",
  },

  { label: "UPLINK MODAL", icon: "Radio", url: "/login" },
  { label: "HOME PAGE", icon: "Home", url: "/" },
  { label: "BLOG PAGE", icon: "BookOpen", url: "/blog" },
  { label: "OPERÁTORS PAGE", icon: "Users", url: "/operators" },
  { label: "SETTINGS PAGE", icon: "Settings", url: "/settings" },
  {
    label: "⚡ ADMIN TERMINAL",
    icon: "ShieldAlert",
    url: "/admin",
    requiresArchitect: true,
  },
];

// 🛍️ 3. MEDIA A AKADÉMIA PORTY OS GENESIS (Obchod a Knižnice)
export const SHOP_MEDIA_NAV = [
  {
    isDivider: true,
    label: "🛍️ 3. MEDIA A AKADÉMIA PORTY OS GENESIS \n(Obchod a Knižnice)",
  },
  { label: "NEXUS SHOP", icon: "ShoppingCart", url: "/shop" },
  { label: "VIDEOS MEDIA", icon: "Video", url: "/shop/videos" },
  { label: "AUDIOS MEDIA", icon: "Music", url: "/shop/audios" },
  { label: "IMAGES MEDIA", icon: "Image", url: "/shop/images" },
  { label: "DOCUMENTS MEDIA", icon: "FileText", url: "/shop/documents" },
  { label: "APPS MEDIA", icon: "Grid", url: "/shop/apps" },
];

// 🚪 4. GLOBÁLNA PÄTKA ODHLÁSENIA (Logout Gateway) A NEXUS AGENCY"
export const LOGOUT_NEXUS_NAV = [
  {
    isDivider: true,
    label: "🚪 4. GLOBÁLNA PÄTKA ODHLÁSENIA \n(Logout Gateway) A NEXUS AGENCY",
  },
  {
    label: "🏢 NEXUS AGENCY \nFULLSTACK CHIRURGIA",
    url: "https://agency.projekt-nexus.sk/",
    icon: "Building2",
    isExternal: true, // 👈 Identifikátor pre externú doménu
  },
  { label: "Odhlásiť sa", icon: "LogOut", url: "/login" },
];

// 👑 6.  UNIFIKOVANÝ GENERÁTOR TIER NAVIGÁCIE PRE VŠETKÝCH 6 SÚRODENCOV
export const getTierNav = (siblingPath = "shop") => [
  { isDivider: true, label: "👑 TIER ÚROVNE" },
  {
    label: "VŠETKY TIERY",
    targetId: "nexus-shop-filters",
    url: `/shop/${siblingPath}`,
    icon: "Item",
  },
  {
    label: "FREE TIER",
    targetId: "nexus-shop-filters",
    url: `/shop/${siblingPath}?tier=FREE`,
    icon: "Shield",
  },
  {
    label: "FREEMIUM TIER",
    targetId: "nexus-shop-filters",
    url: `/shop/${siblingPath}?tier=FREEMIUM`,
    icon: "ShieldAlert",
  },
  {
    label: "PROMIUM TIER",
    targetId: "nexus-shop-filters",
    url: `/shop/${siblingPath}?tier=PROMIUM`,
    icon: "Zap",
  },
  {
    label: "OMEGAMIUM TIER",
    targetId: "nexus-shop-filters",
    url: `/shop/${siblingPath}?tier=OMEGAMIUM`,
    icon: "Key",
  },
  {
    label: "MASTERMIUM ARCHITECT",
    targetId: "nexus-shop-filters",
    url: `/shop/${siblingPath}?tier=MASTERMIUM`,
    icon: "Crown",
  },
];

export const HAMBURGER_MENU_DATA = {
  // =============================================================================================
  // 1. 🍔 Uplink Modal — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/components/UplinkModal.jsx
  // =============================================================================================
  uplink: [
    { isDivider: true, label: "NEXUS UPLINK" },
    {
      label: "OS Genesis Trailer",
      targetId: "nexus-uplink-trailer",
      icon: "PlayCircle",
    },
    { label: "System Tiers", targetId: "nexus-uplink-tiers", icon: "Layers" },
    {
      label: "Bezpečnostný Protokol",
      targetId: "nexus-uplink-security",
      icon: "Shield",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 2. 🍔 HomePage — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/HomePage.jsx
  // =============================================================================================
  home: [
    { isDivider: true, label: "SYSTÉM & PRÁVNE DÁTA" },
    {
      label: "Obchodné podmienky",
      targetId: "nexus-vop-section",
      icon: "FileText",
      url: "/vop",
    },
    {
      label: "Ochrana údajov (GDPR)",
      targetId: "nexus-privacy-section",
      icon: "Lock",
      url: "/privacy",
    },
    {
      label: "Filozofia Systému",
      targetId: "nexus-home-filosophy",
      icon: "BookOpen",
      url: "/",
    },
    {
      label: "Bannery & Promo",
      targetId: "nexus-home-banners",
      icon: "Sparkles",
      url: "/",
    },
    {
      label: "Radar & Filtre",
      targetId: "nexus-home-toolbar",
      icon: "Filter",
      url: "/",
    },

    { isDivider: true, label: "KOGNITÍVNE DIMENZIE (ONLINE: ID00-ID05)" },
    {
      label: "ID00 | MENTOR-HUB",
      targetId: "nexus-home-ID00",
      icon: "BrainCircuit",
      url: "/ID00",
    },
    {
      label: "ID01 | IDENTITY-CORE",
      targetId: "nexus-home-ID01",
      icon: "User",
      url: "/ID01",
    },
    {
      label: "ID02 | THE-WORKFLOW",
      targetId: "nexus-home-ID02",
      icon: "Activity",
      url: "/ID02",
    },
    {
      label: "ID03 | CASH-ENGINE",
      targetId: "nexus-home-ID03",
      icon: "Wallet",
      url: "/ID03",
    },
    {
      label: "ID04 | REVENUE-ARCHITECT",
      targetId: "nexus-home-ID04",
      icon: "Briefcase",
      url: "/ID04",
    },
    {
      label: "ID05 | ASSETS-MATRIX",
      targetId: "nexus-home-ID05",
      icon: "Database",
      url: "/ID05",
    },
    {
      label: "ID06 | DATA-ABSORBER",
      targetId: "nexus-home-ID06",
      icon: "BookOpen",
      url: "/ID06",
    },
    {
      label: "ID07 | SKILLS-TREE",
      targetId: "nexus-home-ID07",
      icon: "Layers",
      url: "/ID07",
    },
    {
      label: "ID08 | EMPTY-BOOK",
      targetId: "nexus-home-ID08",
      icon: "FileText",
      url: "/ID08",
    },
    {
      label: "ID09 | SERGEANT-CORE",
      targetId: "nexus-home-ID09",
      icon: "Target",
      url: "/ID09",
    },
    {
      label: "ID10 | NONIDENTITY-CORE",
      targetId: "nexus-home-ID10",
      icon: "Home",
      url: "/ID10",
    },
    {
      label: "ID11 | THE-RECOVERY",
      targetId: "nexus-home-ID11",
      icon: "HeartPulse",
      url: "/ID11",
    },
    {
      label: "ID12 | NEXUS-CODEX",
      targetId: "nexus-home-ID12",
      icon: "Shield",
      url: "/ID12",
    },
    {
      label: "ID13 | NEXUS-HABITS",
      targetId: "nexus-home-ID13",
      icon: "Clock",
      url: "/ID13",
    },
    {
      label: "ID14 | NEXUS-BLOG",
      targetId: "nexus-home-ID14",
      icon: "MessageSquare",
      url: "/ID14",
    },
    {
      label: "ID15 | DEATH-CORE",
      targetId: "nexus-home-ID15",
      icon: "PowerOff",
      url: "/ID15",
    },

    { isDivider: true, label: "SYSTÉMOVÉ UZLY" },
    {
      label: "SYS 01 | VIDEO NODES",
      targetId: "nexus-home-SYS01",
      icon: "PlaySquare",
      url: "/video_nodes",
    },
    {
      label: "SYS 02 | MENTORING",
      targetId: "nexus-home-SYS02",
      icon: "Users",
      url: "/video_mentoring",
    },
    {
      label: "SYS 03 | IMG GALLERY",
      targetId: "nexus-home-SYS03",
      icon: "Image",
      url: "/nexus_img_gallery",
    },
    {
      label: "SYS 04 | VIDEO GALLERY",
      targetId: "nexus-home-SYS04",
      icon: "Film",
      url: "/nexus_video_gallery",
    },
    {
      label: "SYS 05 | MASTER DIRECTORY",
      targetId: "nexus-home-SYS05",
      icon: "HardDrive",
      url: "/sys05-directory",
    },

    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID00 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID00 // TIER: FREE // SUBDOMAIN: mentor.projekt-nexus.sk
  // =============================================================================================
  id00: [
    { isDivider: true, label: "ID00-NAVIGÁCIA" },

    {
      label: "Karta 1: Cesta (Path)",
      url: "/ID00?node=ID00-01",
      icon: "Compass",
    },
    {
      label: "Karta 2: Pravda (Truth)",
      url: "/ID00?node=ID00-02",
      icon: "ShieldCheck",
    },
    {
      label: "Karta 3: Life (Reality)",
      url: "/ID00?node=ID00-03",
      icon: "Activity",
    },
    {
      label: "Karta 4: Projekty (Action)",
      url: "/ID00?node=ID00-04",
      icon: "Briefcase",
    },
    {
      label: "Karta 5: Prosperita (Results)",
      url: "/ID00?node=ID00-05",
      icon: "TrendingUp",
    },
    { isDivider: true, label: "SEKCIE A - J (100 UZLOV)" },
    {
      label: "Sekcia A: Základná Architektúra Bytia",
      targetId: "SEC_A",
      icon: "Terminal",
    },
    {
      label: "Sekcia B: Hackovanie Matrixu a Spoločnosti",
      targetId: "SEC_B",
      icon: "ShieldAlert",
    },
    { label: "Sekcia C: Anatómia Parazita", targetId: "SEC_C", icon: "Flame" },
    {
      label: "Sekcia D: Transhumanizmus a Budúcnosť",
      targetId: "SEC_D",
      icon: "Cpu",
    },
    {
      label: "Sekcia E: Absolútno a Root Access",
      targetId: "SEC_E",
      icon: "Key",
    },
    {
      label: "Sekcia F: Synergia Človeka a Stroja",
      targetId: "SEC_F",
      icon: "BrainCircuit",
    },
    {
      label: "Sekcia G: Debugging Každodenných Errorov",
      targetId: "SEC_G",
      icon: "Activity",
    },
    {
      label: "Sekcia H: Algoritmy Bohatstva a Hodnoty",
      targetId: "SEC_H",
      icon: "Wallet",
    },
    {
      label: "Sekcia I: Odučenie sa a Výmaz Dát",
      targetId: "SEC_I",
      icon: "Trash2",
    },
    {
      label: "Sekcia J: Endgame - Posledný Dialóg",
      targetId: "SEC_J",
      icon: "CheckCircle2",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID01 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID01 // TIER: FREE // SUBDOMAIN: personal.projekt-nexus.sk
  // =============================================================================================
  id01: [
    { isDivider: true, label: "ID01-NAVIGÁCIA" },
    {
      label: "Karta 1: Cesta (Path)",
      url: "/ID01?node=ID01-01",
      icon: "Compass",
    },
    {
      label: "Karta 2: Pravda (Truth)",
      url: "/ID01?node=ID01-02",
      icon: "ShieldCheck",
    },
    {
      label: "Karta 3: Life (Reality)",
      url: "/ID01?node=ID01-03",
      icon: "Activity",
    },
    {
      label: "Karta 4: Projekty (Action)",
      url: "/ID01?node=ID01-04",
      icon: "Briefcase",
    },
    {
      label: "Karta 5: Prosperita (Results)",
      url: "/ID01?node=ID01-05",
      icon: "TrendingUp",
    },
    { isDivider: true, label: "SEKCIE A - J (100 UZLOV)" },
    {
      label: "Sekcia A: Základné Piliere Vonkajšku",
      targetId: "SEC_A",
      icon: "Flag",
    },
    {
      label: "Sekcia B: Cieľovanie a Vízia (SMARTER)",
      targetId: "SEC_B",
      icon: "Target",
    },
    {
      label: "Sekcia C: Asertivita a Sebavedomie",
      targetId: "SEC_C",
      icon: "Shield",
    },
    {
      label: "Sekcia D: Komunikačné Rozhranie a Vzťahy",
      targetId: "SEC_D",
      icon: "Users",
    },
    {
      label: "Sekcia E: IT Štúdium a Rekvalifikácia",
      targetId: "SEC_E",
      icon: "Terminal",
    },
    {
      label: "Sekcia F: Produkcia, YouTube a Značka",
      targetId: "SEC_F",
      icon: "Video",
    },
    {
      label: "Sekcia G: Emocionálny Firewall",
      targetId: "SEC_G",
      icon: "Flame",
    },
    {
      label: "Sekcia H: Dekonštrukcia Minulosti",
      targetId: "SEC_H",
      icon: "History",
    },
    {
      label: "Sekcia I: Tvorba Avatara a Roleplaying",
      targetId: "SEC_I",
      icon: "BrainCircuit",
    },
    {
      label: "Sekcia J: Integrácia - Avatar v Matrixe",
      targetId: "SEC_J",
      icon: "CheckCircle2",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID02 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID02 // TIER: FREE // SUBDOMAIN: work.projekt-nexus.sk
  // =============================================================================================
  id02: [
    { isDivider: true, label: "ID02-NAVIGÁCIA" },
    {
      label: "Karta 1: Cesta (Path)",
      url: "/ID02?node=ID02-01",
      icon: "Compass",
    },
    {
      label: "Karta 2: Pravda (Truth)",
      url: "/ID02?node=ID02-02",
      icon: "ShieldCheck",
    },
    {
      label: "Karta 3: Life (Reality)",
      url: "/ID02?node=ID02-03",
      icon: "Activity",
    },
    {
      label: "Karta 4: Projekty (Action)",
      url: "/ID02?node=ID02-04",
      icon: "Briefcase",
    },
    {
      label: "Karta 5: Prosperita (Results)",
      url: "/ID02?node=ID02-05",
      icon: "TrendingUp",
    },
    { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    {
      label: "Sekcia A: Základné Piliere Zamestnania",
      targetId: "SEC_A",
      icon: "Briefcase",
    },
    {
      label: "Sekcia B: Eliminácia Trenia a Odporu",
      targetId: "SEC_B",
      icon: "Zap",
    },
    {
      label: "Sekcia C: Efektívny Time Management",
      targetId: "SEC_C",
      icon: "Clock",
    },
    {
      label: "Sekcia D: Maximalizácia Zárobku v Kvadrante Z",
      targetId: "SEC_D",
      icon: "DollarSign",
    },
    {
      label: "Sekcia E: Agile a Scrum Metodika",
      targetId: "SEC_E",
      icon: "Workflow",
    },
    {
      label: "Sekcia F: AI a Automatizácia Rutiny",
      targetId: "SEC_F",
      icon: "Cpu",
    },
    {
      label: "Sekcia G: Zručnosti a Doživotné Vzdelávanie",
      targetId: "SEC_G",
      icon: "Layers",
    },
    {
      label: "Sekcia H: Fyzická a Mentálna Údržba",
      targetId: "SEC_H",
      icon: "HeartPulse",
    },
    {
      label: "Sekcia I: Manažment Projektov a Úloh",
      targetId: "SEC_I",
      icon: "ListChecks",
    },
    {
      label: "Sekcia J: Prechodová Fáza (Príprava na EXIT)",
      targetId: "SEC_J",
      icon: "DoorOpen",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID03 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID03 // TIER: PRO // SUBDOMAIN: finance.projekt-nexus.sk
  // =============================================================================================
  id03: [
    { isDivider: true, label: "ID03-NAVIGÁCIA" },
    {
      label: "Karta 1: Cesta (Path)",
      url: "/ID03?node=ID03-01",
      icon: "Compass",
    },
    {
      label: "Karta 2: Pravda (Truth)",
      url: "/ID03?node=ID03-02",
      icon: "ShieldCheck",
    },
    {
      label: "Karta 3: Life (Reality)",
      url: "/ID03?node=ID03-03",
      icon: "Activity",
    },
    {
      label: "Karta 4: Projekty (Action)",
      url: "/ID03?node=ID03-04",
      icon: "Briefcase",
    },
    {
      label: "Karta 5: Prosperita (Results)",
      url: "/ID03?node=ID03-05",
      icon: "TrendingUp",
    },
    { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    {
      label: "Sekcia A: Základné Piliere Financií",
      targetId: "SEC_A",
      icon: "Wallet",
    },
    {
      label: "Sekcia B: Defragmentácia Dlhu (Zmazanie Malvéru)",
      targetId: "SEC_B",
      icon: "Trash2",
    },
    {
      label: "Sekcia C: Cashflow a Minimalizmus",
      targetId: "SEC_C",
      icon: "Coins",
    },
    {
      label: "Sekcia D: Kiyosakiho Logika v IT",
      targetId: "SEC_D",
      icon: "BarChart3",
    },
    {
      label: "Sekcia E: Budovanie Firewallu a MRR",
      targetId: "SEC_E",
      icon: "ShieldCheck",
    },
    {
      label: "Sekcia F: Zložené Úročenie a Investičné Vízie",
      targetId: "SEC_F",
      icon: "TrendingUp",
    },
    {
      label: "Sekcia G: Emocionálny Firewall na Trhu",
      targetId: "SEC_G",
      icon: "Flame",
    },
    {
      label: "Sekcia H: Marketing & Revenue Injection",
      targetId: "SEC_H",
      icon: "Zap",
    },
    {
      label: "Sekcia I: Systémové Škálovanie a Franšíza",
      targetId: "SEC_I",
      icon: "Boxes",
    },
    {
      label: "Sekcia J: Endgame - Absolútna Finančná Autonómia",
      targetId: "SEC_J",
      icon: "Crown",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID04 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID04 // TIER: PRO // SUBDOMAIN: business.projekt-nexus.sk
  // =============================================================================================
  id04: [
    { isDivider: true, label: "ID04-NAVIGÁCIA" },
    {
      label: "Karta 1: Cesta (Path)",
      url: "/ID04?node=ID04-01",
      icon: "Compass",
    },
    {
      label: "Karta 2: Pravda (Truth)",
      url: "/ID04?node=ID04-02",
      icon: "ShieldCheck",
    },
    {
      label: "Karta 3: Life (Reality)",
      url: "/ID04?node=ID04-03",
      icon: "Activity",
    },
    {
      label: "Karta 4: Projekty (Action)",
      url: "/ID04?node=ID04-04",
      icon: "Briefcase",
    },
    {
      label: "Karta 5: Prosperita (Results)",
      url: "/ID04?node=ID04-05",
      icon: "TrendingUp",
    },
    { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    {
      label: "Sekcia A: Základné Piliere Biznisu",
      targetId: "SEC_A",
      icon: "Briefcase",
    },
    {
      label: "Sekcia B: Produkt, Služba a Value Proposition",
      targetId: "SEC_B",
      icon: "Package",
    },
    {
      label: "Sekcia C: Marketing a Architektúra Značky",
      targetId: "SEC_C",
      icon: "Megaphone",
    },
    {
      label: "Sekcia D: Predajné Lieviky a Konverzia",
      targetId: "SEC_D",
      icon: "Filter",
    },
    {
      label: "Sekcia E: Operatíva, Procesy a Automatizácia",
      targetId: "SEC_E",
      icon: "Cpu",
    },
    {
      label: "Sekcia F: Architektúra Franšízy Genesis",
      targetId: "SEC_F",
      icon: "Building2",
    },
    {
      label: "Sekcia G: Sales & Marketing Matrix",
      targetId: "SEC_G",
      icon: "Layers",
    },
    {
      label: "Sekcia H: Škálovanie a Pákový Efekt",
      targetId: "SEC_H",
      icon: "TrendingUp",
    },
    {
      label: "Sekcia I: Finančný Zen a Psychológia Trhu",
      targetId: "SEC_I",
      icon: "Compass",
    },
    {
      label: "Sekcia J: The Endgame a Exit",
      targetId: "SEC_J",
      icon: "DoorOpen",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID05 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID05 // TIER: OMEGA // SUBDOMAIN: investments.projekt-nexus.sk
  // =============================================================================================
  id05: [
    { isDivider: true, label: "ID05-NAVIGÁCIA" },
    {
      label: "Karta 1: Cesta (Path)",
      url: "/ID05?node=ID05-01",
      icon: "Compass",
    },
    {
      label: "Karta 2: Pravda (Truth)",
      url: "/ID05?node=ID05-02",
      icon: "ShieldCheck",
    },
    {
      label: "Karta 3: Life (Reality)",
      url: "/ID05?node=ID05-03",
      icon: "Activity",
    },
    {
      label: "Karta 4: Projekty (Action)",
      url: "/ID05?node=ID05-04",
      icon: "Briefcase",
    },
    {
      label: "Karta 5: Prosperita (Results)",
      url: "/ID05?node=ID05-05",
      icon: "TrendingUp",
    },
    { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    {
      label: "Sekcia A: Základné Piliere Investovania",
      targetId: "SEC_A",
      icon: "Database",
    },
    {
      label: "Sekcia B: Architektúra Portfólia (Asset Allocation)",
      targetId: "SEC_B",
      icon: "PieChart",
    },
    {
      label: "Sekcia C: Akciový Trh a Pasívne Indexy",
      targetId: "SEC_C",
      icon: "LineChart",
    },
    {
      label: "Sekcia D: Kryptomeny a Decentralizované Financie",
      targetId: "SEC_D",
      icon: "Coins",
    },
    {
      label: "Sekcia E: Real Estate a Fyzické Aktíva",
      targetId: "SEC_E",
      icon: "Home",
    },
    {
      label: "Sekcia F: Risk Management a Bezpečnosť",
      targetId: "SEC_F",
      icon: "Shield",
    },
    {
      label: "Sekcia G: Psychológia Investora (Tichý Svedok)",
      targetId: "SEC_G",
      icon: "Eye",
    },
    {
      label: "Sekcia H: Daňová a Systémová Optimalizácia",
      targetId: "SEC_H",
      icon: "Scale",
    },
    {
      label: "Sekcia I: Generačné Bohatstvo a Odkaz",
      targetId: "SEC_I",
      icon: "Scroll",
    },
    {
      label: "Sekcia J: The Endgame a Absolútna Sloboda",
      targetId: "SEC_J",
      icon: "Crown",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID06 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID06 // TIER: PRO // SUBDOMAIN: study.projekt-nexus.sk
  // =============================================================================================
  id06: [
    { isDivider: true, label: "ID06-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID06?node=ID06-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID06?node=ID06-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID06?node=ID06-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID06?node=ID06-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID06?node=ID06-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Základné Piliere Kognitívnej Brány",
    //   targetId: "SEC_A",
    //   icon: "BookOpen",
    // },
    // {
    //   label: "Sekcia B: Neuroplasticita a Reprogramovanie",
    //   targetId: "SEC_B",
    //   icon: "BrainCircuit",
    // },
    // {
    //   label: "Sekcia C: Deep Work a Extrémny Focus",
    //   targetId: "SEC_C",
    //   icon: "Focus",
    // },
    // {
    //   label: "Sekcia D: Dekódovanie a Rýchlosť Absorpcie",
    //   targetId: "SEC_D",
    //   icon: "Zap",
    // },
    // {
    //   label: "Sekcia E: Externá Pamäť (Second Brain)",
    //   targetId: "SEC_E",
    //   icon: "HardDrive",
    // },
    // {
    //   label: "Sekcia F: Logika, Analýza a Kódovanie",
    //   targetId: "SEC_F",
    //   icon: "Code",
    // },
    // {
    //   label: "Sekcia G: Prekonávanie Odporu a Prokrastinácie",
    //   targetId: "SEC_G",
    //   icon: "ShieldAlert",
    // },
    // {
    //   label: "Sekcia H: Z Teórie do Exekúcie (Deployment)",
    //   targetId: "SEC_H",
    //   icon: "Rocket",
    // },
    // {
    //   label: "Sekcia I: Skill Stacking a Multi-Threading",
    //   targetId: "SEC_I",
    //   icon: "Layers",
    // },
    // {
    //   label: "Sekcia J: Majstrovstvo a Endgame",
    //   targetId: "SEC_J",
    //   icon: "CheckCircle2",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID07 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID07 // TIER: PRO // SUBDOMAIN: professional.projekt-nexus.sk
  // =============================================================================================
  id07: [
    { isDivider: true, label: "ID07-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID07?node=ID07-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID07?node=ID07-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID07?node=ID07-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID07?node=ID07-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID07?node=ID07-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Základné Piliere Expertízy",
    //   targetId: "SEC_A",
    //   icon: "Layers",
    // },
    // {
    //   label: "Sekcia B: Vizuálna Vrstva a UI/UX Chirurgia",
    //   targetId: "SEC_B",
    //   icon: "Layout",
    // },
    // {
    //   label: "Sekcia C: React a Logika Rozhrania",
    //   targetId: "SEC_C",
    //   icon: "Code",
    // },
    // {
    //   label: "Sekcia D: Databázy a Backend Strojovňa",
    //   targetId: "SEC_D",
    //   icon: "Database",
    // },
    // {
    //   label: "Sekcia E: AI-Augmented Architecture",
    //   targetId: "SEC_E",
    //   icon: "Bot",
    // },
    // {
    //   label: "Sekcia F: Debugging a Error Logy",
    //   targetId: "SEC_F",
    //   icon: "Terminal",
    // },
    // {
    //   label: "Sekcia G: Systémový Dizajn a Infraštruktúra",
    //   targetId: "SEC_G",
    //   icon: "Cpu",
    // },
    // {
    //   label: "Sekcia H: Deployment a Ghost-Mode Prevádzka",
    //   targetId: "SEC_H",
    //   icon: "Cloud",
    // },
    // {
    //   label: "Sekcia I: Monetizácia Zručností",
    //   targetId: "SEC_I",
    //   icon: "Wallet",
    // },
    // {
    //   label: "Sekcia J: Majstrovstvo a Tech Autorita",
    //   targetId: "SEC_J",
    //   icon: "Award",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID08 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID08 // TIER: FREE // SUBDOMAIN: reader.projekt-nexus.sk
  // =============================================================================================
  id08: [
    { isDivider: true, label: "ID08-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID08?node=ID08-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID08?node=ID08-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID08?node=ID08-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID08?node=ID08-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID08?node=ID08-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Vstup do Knižnice Matrixu",
    //   targetId: "SEC_A",
    //   icon: "BookOpen",
    // },
    // {
    //   label: "Sekcia B: Odučenie sa (Defragmentácia Dát)",
    //   targetId: "SEC_B",
    //   icon: "Trash2",
    // },
    // {
    //   label: "Sekcia C: Východná Mystika a Absolútno",
    //   targetId: "SEC_C",
    //   icon: "Sun",
    // },
    // {
    //   label: "Sekcia D: Sila Prítomného Okamihu",
    //   targetId: "SEC_D",
    //   icon: "Clock",
    // },
    // {
    //   label: "Sekcia E: Podvedomie a Programovanie",
    //   targetId: "SEC_E",
    //   icon: "Brain",
    // },
    // {
    //   label: "Sekcia F: Západná Psychológia a Analýza Kódu",
    //   targetId: "SEC_F",
    //   icon: "FileText",
    // },
    // {
    //   label: "Sekcia G: Aplikácia - Od Čitateľa k Architektovi",
    //   targetId: "SEC_G",
    //   icon: "Workflow",
    // },
    // {
    //   label: "Sekcia H: Veda, Fyzika a Filozofia",
    //   targetId: "SEC_H",
    //   icon: "Atom",
    // },
    // {
    //   label: "Sekcia I: Lexikón Mŕtvych Kníh (350+ Diel)",
    //   targetId: "SEC_I",
    //   icon: "Library",
    // },
    // {
    //   label: "Sekcia J: Endgame - Prázdna Kniha (Ticho)",
    //   targetId: "SEC_J",
    //   icon: "CheckCircle2",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID09 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID09 // TIER: FREE // SUBDOMAIN: player.projekt-nexus.sk
  // =============================================================================================
  id09: [
    { isDivider: true, label: "ID09-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID09?node=ID09-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID09?node=ID09-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID09?node=ID09-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID09?node=ID09-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID09?node=ID09-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Vstup do Hernej Svätyne",
    //   targetId: "SEC_A",
    //   icon: "Gamepad2",
    // },
    // {
    //   label: "Sekcia B: CoDM Zombies - Mechaniky a Základy",
    //   targetId: "SEC_B",
    //   icon: "Crosshair",
    // },
    // {
    //   label: "Sekcia C: Speed Runs & Time Attacks",
    //   targetId: "SEC_C",
    //   icon: "Timer",
    // },
    // {
    //   label: "Sekcia D: Damage Runs & DPS Mastery",
    //   targetId: "SEC_D",
    //   icon: "Swords",
    // },
    // {
    //   label: "Sekcia E: Damage Support & Taktická Obrana",
    //   targetId: "SEC_E",
    //   icon: "Shield",
    // },
    // {
    //   label: "Sekcia F: Damage Race & Killing Race",
    //   targetId: "SEC_F",
    //   icon: "Flame",
    // },
    // {
    //   label: "Sekcia G: Undead Siege (Nightmare Strategy)",
    //   targetId: "SEC_G",
    //   icon: "Skull",
    // },
    // {
    //   label: "Sekcia H: Srdcovky a Retro Gaming (PS1/PS2)",
    //   targetId: "SEC_H",
    //   icon: "Joystick",
    // },
    // {
    //   label: "Sekcia I: Od Hráča k Tvorcovi (YouTube Assets)",
    //   targetId: "SEC_I",
    //   icon: "Youtube",
    // },
    // {
    //   label: "Sekcia J: Endgame (Hra ako Zrkadlo Matrixu)",
    //   targetId: "SEC_J",
    //   icon: "Flag",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID10 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID10 // TIER: FREE // SUBDOMAIN: home.projekt-nexus.sk
  // =============================================================================================
  id10: [
    { isDivider: true, label: "ID10-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID10?node=ID10-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID10?node=ID10-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID10?node=ID10-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID10?node=ID10-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID10?node=ID10-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Základné Piliere Vnútra",
    //   targetId: "SEC_A",
    //   icon: "Home",
    // },
    // {
    //   label: "Sekcia B: Architektúra Domáceho Prostredia",
    //   targetId: "SEC_B",
    //   icon: "Layout",
    // },
    // {
    //   label: "Sekcia C: Defragmentácia Disku (Ticho a Zen)",
    //   targetId: "SEC_C",
    //   icon: "Disc",
    // },
    // {
    //   label: "Sekcia D: Wu-Wei v Praxi (Umenie Nekonania)",
    //   targetId: "SEC_D",
    //   icon: "Wind",
    // },
    // {
    //   label: "Sekcia E: Offline Mód (Senzorická Očista)",
    //   targetId: "SEC_E",
    //   icon: "WifiOff",
    // },
    // {
    //   label: "Sekcia F: Tichý Svedok a Pozorovateľ",
    //   targetId: "SEC_F",
    //   icon: "Eye",
    // },
    // {
    //   label: "Sekcia G: Rodina a Lokálna Sieť",
    //   targetId: "SEC_G",
    //   icon: "Users",
    // },
    // {
    //   label: "Sekcia H: Big Crunch Protokoly",
    //   targetId: "SEC_H",
    //   icon: "Minimize2",
    // },
    // {
    //   label: "Sekcia I: Akumulácia a Zdroj (Nabitie)",
    //   targetId: "SEC_I",
    //   icon: "BatteryCharging",
    // },
    // {
    //   label: "Sekcia J: Absolútne Bytie a Rozplynutie",
    //   targetId: "SEC_J",
    //   icon: "Sun",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID11 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID11 // TIER: PRO // SUBDOMAIN: recovery.projekt-nexus.sk
  // =============================================================================================
  id11: [
    { isDivider: true, label: "ID11-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID11?node=ID11-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID11?node=ID11-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID11?node=ID11-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID11?node=ID11-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID11?node=ID11-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Základné Piliere Obnovy",
    //   targetId: "SEC_A",
    //   icon: "HeartPulse",
    // },
    // {
    //   label: "Sekcia B: Defragmentácia Spánku (Porážka Insomnie)",
    //   targetId: "SEC_B",
    //   icon: "Moon",
    // },
    // {
    //   label: "Sekcia C: Palivo, Stres a Overclocking",
    //   targetId: "SEC_C",
    //   icon: "Zap",
    // },
    // {
    //   label: "Sekcia D: Mentálna Hygiena a Detox",
    //   targetId: "SEC_D",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Sekcia E: Dopamínový Detox a Reset",
    //   targetId: "SEC_E",
    //   icon: "RotateCcw",
    // },
    // {
    //   label: "Sekcia F: Pohyb, Kinetika a Údržba Hardvéru",
    //   targetId: "SEC_F",
    //   icon: "Activity",
    // },
    // {
    //   label: "Sekcia G: Dych a Prúdenie Energie (Chi Engine)",
    //   targetId: "SEC_G",
    //   icon: "Wind",
    // },
    // {
    //   label: "Sekcia H: Terapia, Frekvencie a Biohacking",
    //   targetId: "SEC_H",
    //   icon: "Radio",
    // },
    // {
    //   label: "Sekcia I: 3-Minútový Reset (Pohotovosť)",
    //   targetId: "SEC_I",
    //   icon: "Timer",
    // },
    // {
    //   label: "Sekcia J: Endgame (Nezničiteľný Skafander)",
    //   targetId: "SEC_J",
    //   icon: "Shield",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID12 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID12 // TIER: OMEGA // SUBDOMAIN: codex.projekt-nexus.sk
  // =============================================================================================
  id12: [
    { isDivider: true, label: "ID12-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID12?node=ID12-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID12?node=ID12-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID12?node=ID12-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID12?node=ID12-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID12?node=ID12-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Ústava a Základná Doktrína",
    //   targetId: "SEC_A",
    //   icon: "Scroll",
    // },
    // {
    //   label: "Sekcia B: Sémantická Legislatíva",
    //   targetId: "SEC_B",
    //   icon: "FileCode",
    // },
    // {
    //   label: "Sekcia C: Auth Matrix a Zákony Hierarchie",
    //   targetId: "SEC_C",
    //   icon: "Key",
    // },
    // {
    //   label: "Sekcia D: Kódex Cti a Etika Architekta",
    //   targetId: "SEC_D",
    //   icon: "Shield",
    // },
    // {
    //   label: "Sekcia E: Finančná Ústava (Cash Engine)",
    //   targetId: "SEC_E",
    //   icon: "Wallet",
    // },
    // {
    //   label: "Sekcia F: Stabilita Systému a Údržba",
    //   targetId: "SEC_F",
    //   icon: "Activity",
    // },
    // {
    //   label: "Sekcia G: Zmluva so Strojom (AI Integrácia)",
    //   targetId: "SEC_G",
    //   icon: "Bot",
    // },
    // {
    //   label: "Sekcia H: Multi-Tenancy a Franšízové Zákony",
    //   targetId: "SEC_H",
    //   icon: "Building2",
    // },
    // {
    //   label: "Sekcia I: Zákony Boja a Reprezentácie",
    //   targetId: "SEC_I",
    //   icon: "Swords",
    // },
    // {
    //   label: "Sekcia J: Endgame - Kódex Absolútna (Root Access)",
    //   targetId: "SEC_J",
    //   icon: "Crown",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID13 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID13 // TIER: OMEGA // SUBDOMAIN: habits.projekt-nexus.sk
  // =============================================================================================
  id13: [
    { isDivider: true, label: "ID13-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID13?node=ID13-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID13?node=ID13-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID13?node=ID13-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID13?node=ID13-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID13?node=ID13-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Základná Architektúra Času",
    //   targetId: "SEC_A",
    //   icon: "Clock",
    // },
    // {
    //   label: "Sekcia B: Ranný Boot Protokol (Startup)",
    //   targetId: "SEC_B",
    //   icon: "Sunrise",
    // },
    // {
    //   label: "Sekcia C: Večerný Shutdown Protokol (Cooling)",
    //   targetId: "SEC_C",
    //   icon: "Sunset",
    // },
    // {
    //   label: "Sekcia D: Algoritmy Produktivity (Habit Stacking)",
    //   targetId: "SEC_D",
    //   icon: "Layers",
    // },
    // {
    //   label: "Sekcia E: Detoxikácia a Výmaz Malvéru",
    //   targetId: "SEC_E",
    //   icon: "Trash2",
    // },
    // {
    //   label: "Sekcia F: Mentálne a Kognitívne Návyky",
    //   targetId: "SEC_F",
    //   icon: "BrainCircuit",
    // },
    // {
    //   label: "Sekcia G: Fyzická Údržba Skafandra",
    //   targetId: "SEC_G",
    //   icon: "HeartPulse",
    // },
    // {
    //   label: "Sekcia H: Finančná a Biznisová Hygiena",
    //   targetId: "SEC_H",
    //   icon: "Wallet",
    // },
    // {
    //   label: "Sekcia I: Sociálny Firewall",
    //   targetId: "SEC_I",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Sekcia J: Endgame - Automatizácia Bytia",
    //   targetId: "SEC_J",
    //   icon: "CheckCircle2",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID14 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID14 // TIER: FREE // SUBDOMAIN: blog.projekt-nexus.sk
  // =============================================================================================
  id14: [
    { isDivider: true, label: "ID14-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID14?node=ID14-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID14?node=ID14-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID14?node=ID14-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID14?node=ID14-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID14?node=ID14-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Vstupná Brána do Siete",
    //   targetId: "SEC_A",
    //   icon: "DoorOpen",
    // },
    // {
    //   label: "Sekcia B: Sémantické Vysielanie (Obsah)",
    //   targetId: "SEC_B",
    //   icon: "Radio",
    // },
    // {
    //   label: "Sekcia C: Interakcia a Odozva (Reakcie)",
    //   targetId: "SEC_C",
    //   icon: "MessageSquare",
    // },
    // {
    //   label: "Sekcia D: Komunitný Firewall (Moderácia)",
    //   targetId: "SEC_D",
    //   icon: "ShieldAlert",
    // },
    // {
    //   label: "Sekcia E: Klastrovanie a Filtrovanie Dát",
    //   targetId: "SEC_E",
    //   icon: "Filter",
    // },
    // {
    //   label: "Sekcia F: Ghost-Mode Marketing a Konverzia",
    //   targetId: "SEC_F",
    //   icon: "Zap",
    // },
    // {
    //   label: "Sekcia G: Global Event Rewards (Tokenomics)",
    //   targetId: "SEC_G",
    //   icon: "Trophy",
    // },
    // {
    //   label: "Sekcia H: YouTube & Media Distribúcia",
    //   targetId: "SEC_H",
    //   icon: "Youtube",
    // },
    // {
    //   label: "Sekcia I: Kolektívne Vedomie (Kmeň)",
    //   targetId: "SEC_I",
    //   icon: "Users",
    // },
    // {
    //   label: "Sekcia J: Endgame - Autonómny Úľ",
    //   targetId: "SEC_J",
    //   icon: "Globe",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3. 🍔 Dimenzia ID15 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // URL: /ID15 // TIER: FREE // SUBDOMAIN: death.projekt-nexus.sk
  // =============================================================================================
  id15: [
    { isDivider: true, label: "ID15-NAVIGÁCIA" },
    // {
    //   label: "Karta 1: Cesta (Path)",
    //   url: "/ID15?node=ID15-01",
    //   icon: "Compass",
    // },
    // {
    //   label: "Karta 2: Pravda (Truth)",
    //   url: "/ID15?node=ID15-02",
    //   icon: "ShieldCheck",
    // },
    // {
    //   label: "Karta 3: Life (Reality)",
    //   url: "/ID15?node=ID15-03",
    //   icon: "Activity",
    // },
    // {
    //   label: "Karta 4: Projekty (Action)",
    //   url: "/ID15?node=ID15-04",
    //   icon: "Briefcase",
    // },
    // {
    //   label: "Karta 5: Prosperita (Results)",
    //   url: "/ID15?node=ID15-05",
    //   icon: "TrendingUp",
    // },
    // { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    // {
    //   label: "Sekcia A: Základné Piliere Zániku",
    //   targetId: "SEC_A",
    //   icon: "PowerOff",
    // },
    // {
    //   label: "Sekcia B: Starnutie Skafandra (Hardvér)",
    //   targetId: "SEC_B",
    //   icon: "Activity",
    // },
    // {
    //   label: "Sekcia C: Digitálny Testament a Odkaz",
    //   targetId: "SEC_C",
    //   icon: "FileText",
    // },
    // {
    //   label: "Sekcia D: Smrť Ega Počas Života",
    //   targetId: "SEC_D",
    //   icon: "Brain",
    // },
    // {
    //   label: "Sekcia E: Mentálne Opustenie Matrixu",
    //   targetId: "SEC_E",
    //   icon: "DoorOpen",
    // },
    // {
    //   label: "Sekcia F: Cintorín Kódov a Mŕtve Uzly",
    //   targetId: "SEC_F",
    //   icon: "Archive",
    // },
    // {
    //   label: "Sekcia G: Defragmentácia Strachu zo Smrti",
    //   targetId: "SEC_G",
    //   icon: "Shield",
    // },
    // { label: "Sekcia H: Súmrak Avatara", targetId: "SEC_H", icon: "Sunset" },
    // {
    //   label: "Sekcia I: Prechod Dát (Kvantová Evaporácia)",
    //   targetId: "SEC_I",
    //   icon: "Sparkles",
    // },
    // {
    //   label: "Sekcia J: Endgame - The Final Shutdown (Format C:)",
    //   targetId: "SEC_J",
    //   icon: "PowerOff",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 3Q. 🍔 DimensionHub — UNIFIKOVANÝ FALLBACK PRE KOGNITÍVNE DIMENZIE
  // =============================================================================================
  dimensionHub: [
    { isDivider: true, label: "DIMENSIONHUB-NAVIGÁCIA" },
    {
      label: "Karta 1: Cesta (Path)",
      targetId: "karta-cesta",
      icon: "Compass",
    },
    {
      label: "Karta 2: Pravda (Truth)",
      targetId: "karta-pravda",
      icon: "ShieldCheck",
    },
    {
      label: "Karta 3: Life (Reality)",
      targetId: "karta-life",
      icon: "Activity",
    },
    {
      label: "Karta 4: Projekty (Action)",
      targetId: "karta-projekty",
      icon: "Briefcase",
    },
    {
      label: "Karta 5: Prosperita (Results)",
      targetId: "karta-prosperita",
      icon: "TrendingUp",
    },
    { isDivider: true, label: "SEKCIE A-J (100 UZLOV)" },
    { label: "Sekcia A: Úvodné Piliere", targetId: "SEC_A", icon: "Flag" },
    { label: "Sekcia B: Štruktúra a Vízia", targetId: "SEC_B", icon: "Target" },
    { label: "Sekcia C: Ochranný Firewall", targetId: "SEC_C", icon: "Shield" },
    { label: "Sekcia D: Procesy a Dáta", targetId: "SEC_D", icon: "Database" },
    {
      label: "Sekcia E: Sémantická Architektúra",
      targetId: "SEC_E",
      icon: "Terminal",
    },
    { label: "Sekcia F: Produkcia a Tvorba", targetId: "SEC_F", icon: "Video" },
    {
      label: "Sekcia G: Optimalizácia a Flow",
      targetId: "SEC_G",
      icon: "Flame",
    },
    {
      label: "Sekcia H: Integrácia do Realiti",
      targetId: "SEC_H",
      icon: "Layers",
    },
    {
      label: "Sekcia I: Pokročilé Protokoly",
      targetId: "SEC_I",
      icon: "BrainCircuit",
    },
    {
      label: "Sekcia J: Endgame a Majstrovstvo",
      targetId: "SEC_J",
      icon: "CheckCircle2",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 4A. 🍔 System Modul 01 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/Sys01_VideoNodes.jsx
  // =============================================================================================
  sys01: [{ isDivider: true, label: "SYS01-NAVIGÁCIA" }, ...LOGOUT_NEXUS_NAV],
  sys01_gallery: [
    { isDivider: true, label: "SYS01-NAVIGÁCIA" },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 4B. 🍔 System Modul 02 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/Sys02_Mentoring.jsx
  // =============================================================================================
  sys02: [{ isDivider: true, label: "SYS02-NAVIGÁCIA" }, ...LOGOUT_NEXUS_NAV],
  sys02_gallery: [
    { isDivider: true, label: "SYS02-NAVIGÁCIA" },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],
  // =============================================================================================
  // 4C. 🍔 System Modul 03 — HAMBURGER MENU DATA (V20 OS GENESIS MONOLIT)
  // File: src/data/MenuHamburgerData.js
  // =============================================================================================

  sys03: [
    { isDivider: true, label: "KATEGÓRIE VIZUÁLOV (11 KATEGÓRIÍ)" },
    {
      label: "1. Všetky Obrázky",
      targetId: "sys03-gallery-grid",
      actionTab: "ALL",
      icon: "LayoutGrid",
      url: "/nexus_img_gallery",
    },
    {
      label: "2. 16 Kognitívnych Dimenzií",
      targetId: "sys03-gallery-grid",
      actionTab: "DIMENSIONS",
      icon: "Layers",
      url: "/nexus_img_gallery?cat=DIMENSIONS",
    },
    {
      label: "3. 21 Bot Avatarov (VIP)",
      targetId: "sys03-picasso-door",
      actionTab: "AVATARS",
      icon: "Bot",
      isPro: true,
      url: "/nexus_img_gallery?cat=AVATARS",
    },
    {
      label: "4. Nexus Agency & Služby",
      targetId: "sys03-picasso-door",
      actionTab: "AGENCY",
      icon: "Briefcase",
      url: "/nexus_img_gallery?cat=AGENCY",
    },
    {
      label: "5. Taktické Kódexy & Knihy",
      targetId: "sys03-picasso-door",
      actionTab: "DOCUMENTS",
      icon: "BookOpen",
      url: "/nexus_img_gallery?cat=DOCUMENTS",
    },
    {
      label: "6. Systémové Porty & Stránky",
      targetId: "sys03-picasso-door",
      actionTab: "PAGES",
      icon: "FileText",
      url: "/nexus_img_gallery?cat=PAGES",
    },
    {
      label: "7. CoDM Zombies Arzenál",
      targetId: "sys03-picasso-door",
      actionTab: "CODM",
      icon: "Gamepad2",
      url: "/nexus_img_gallery?cat=CODM",
    },
    {
      label: "8. Matrix FX Anomálie",
      targetId: "sys03-picasso-door",
      actionTab: "MATRIX",
      icon: "Zap",
      url: "/nexus_img_gallery?cat=MATRIX",
    },
    {
      label: "9. Členstvá & Kľúče",
      targetId: "sys03-picasso-door",
      actionTab: "MEMBERSHIP",
      icon: "Crown",
      url: "/nexus_img_gallery?cat=MEMBERSHIP",
    },
    {
      label: "10. OC Balíky (Packs)",
      targetId: "sys03-picasso-door",
      actionTab: "PACKS",
      icon: "Package",
      url: "/nexus_img_gallery?cat=PACKS",
    },
    {
      label: "11. Moduly SYS01-SYS05",
      targetId: "sys03-picasso-door",
      actionTab: "SYS",
      icon: "Terminal",
      url: "/nexus_img_gallery?cat=SYS",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  sys03_gallery: [
    { isDivider: true, label: "SYS03-NAVIGÁCIA" },
    {
      label: "1. VŠETKY OBRÁZKY",
      targetId: "sys03-picasso-door",
      actionTab: "ALL",
      icon: "LayoutGrid",
      url: "/nexus_img_gallery",
    },
    {
      label: "2. 16 DIMENZIÍ",
      targetId: "sys03-picasso-door",
      actionTab: "DIMENSIONS",
      icon: "Layers",
      url: "/nexus_img_gallery?cat=DIMENSIONS",
    },
    {
      label: "3. 21 BOT AVATARS (VIP)",
      targetId: "sys03-picasso-door",
      actionTab: "AVATARS",
      icon: "Bot",
      isPro: true,
      url: "/nexus_img_gallery?cat=AVATARS",
    },
    {
      label: "4. NEXUS AGENCY (13 SLUŽIEB)",
      targetId: "sys03-picasso-door",
      actionTab: "AGENCY",
      icon: "Briefcase",
      url: "/nexus_img_gallery?cat=AGENCY",
    },
    {
      label: "5. TAKTICKÉ KÓDEXY & KNIHY",
      targetId: "sys03-picasso-door",
      actionTab: "DOCUMENTS",
      icon: "BookOpen",
      url: "/nexus_img_gallery?cat=DOCUMENTS",
    },
    {
      label: "6. SYSTEM PAGES & PORTY",
      targetId: "sys03-picasso-door",
      actionTab: "PAGES",
      icon: "FileText",
      url: "/nexus_img_gallery?cat=PAGES",
    },
    {
      label: "7. CODM ZOMBIES",
      targetId: "sys03-picasso-door",
      actionTab: "CODM",
      icon: "Gamepad2",
      url: "/nexus_img_gallery?cat=CODM",
    },
    {
      label: "8. MATRIX FX ANOMÁLIE",
      targetId: "sys03-picasso-door",
      actionTab: "MATRIX",
      icon: "Zap",
      url: "/nexus_img_gallery?cat=MATRIX",
    },
    {
      label: "9. ČLENSTVÁ & KĽÚČE",
      targetId: "sys03-picasso-door",
      actionTab: "MEMBERSHIP",
      icon: "Crown",
      url: "/nexus_img_gallery?cat=MEMBERSHIP",
    },
    {
      label: "10. OC BALÍKY (PACKS)",
      targetId: "sys03-picasso-door",
      actionTab: "PACKS",
      icon: "Package",
      url: "/nexus_img_gallery?cat=PACKS",
    },
    {
      label: "11. MODULY SYS01-SYS05",
      targetId: "sys03-picasso-door",
      actionTab: "SYS",
      icon: "Terminal",
      url: "/nexus_img_gallery?cat=SYS",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],
  // =============================================================================================
  // 4D. 🍔 System Modul 04 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/Sys04_VideoGallery.jsx
  // =============================================================================================
  sys04: [{ isDivider: true, label: "SYS04-NAVIGÁCIA" }, ...LOGOUT_NEXUS_NAV],
  sys04_gallery: [
    { isDivider: true, label: "SYS04-NAVIGÁCIA" },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 4E. 🍔 System Modul 05 — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/SYS05_Directory.jsx
  // =============================================================================================
  sys05: [
    { isDivider: true, label: "SYS05-NAVIGÁCIA" },
    {
      label: "1. Všetky Odkazy (Master)",
      targetId: "sys05-directory-grid",
      actionTab: "ALL",
      icon: "HardDrive",
      url: "/sys05-directory",
    },
    {
      label: "2. Subdomény (ID00-ID15)",
      targetId: "sys05-directory-grid",
      actionTab: "SUBDOMAINS",
      icon: "Globe",
      url: "/sys05-directory?cat=SUBDOMAINS",
    },
    {
      label: "3. E-mail Matrix (Routing)",
      targetId: "sys05-directory-grid",
      actionTab: "EMAILS",
      icon: "Mail",
      url: "/sys05-directory?cat=EMAILS",
    },
    {
      label: "4. Sociálne Siete & Portály",
      targetId: "sys05-directory-grid",
      actionTab: "SOCIAL",
      icon: "Share2",
      url: "/sys05-directory?cat=SOCIAL",
    },
    {
      label: "5. Komerčné Porty & Ko-Fi",
      targetId: "sys05-directory-grid",
      actionTab: "COMMERCIAL",
      icon: "ShoppingCart",
      url: "/sys05-directory?cat=COMMERCIAL",
    },
    {
      label: "6. B2B Agentúra & Zmluvy",
      targetId: "sys05-directory-grid",
      actionTab: "B2B",
      icon: "Briefcase",
      url: "/sys05-directory?cat=B2B",
    },
    {
      label: "7. Systémové Uzly SYS01-05",
      targetId: "sys05-directory-grid",
      actionTab: "SYS_NODES",
      icon: "Terminal",
      url: "/sys05-directory?cat=SYS_NODES",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 5. 🍔 BlogPage — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/BlogPage.jsx
  // =============================================================================================
  blog: [
    { isDivider: true, label: "1. SEKCIA - EDITOR" },
    {
      label: "Nový Príspevok",
      targetId: "nexus-blog-composer",
      icon: "PenTool",
    },
    {
      label: "Koncepty & Drafty",
      targetId: "nexus-blog-composer",
      icon: "FileEdit",
    },
    { isDivider: true, label: "2. SEKCIA - RADAR A FILTRE" },
    { label: "Nové Signály", targetId: "nexus-blog-toolbar", icon: "Bell" },
    { label: "Vyhľadávanie", targetId: "nexus-blog-toolbar", icon: "Search" },
    { isDivider: true, label: "3. SEKCIA - KATALÓG (MAPY)" },
    {
      label: "Topic Maps",
      targetId: "nexus-blog-toolbar",
      actionTab: "MAP",
      icon: "Globe",
    },
    {
      label: "Moje Témy",
      targetId: "nexus-blog-toolbar",
      actionTab: "MAP",
      icon: "User",
    },
    { isDivider: true, label: "4. SEKCIA - SIGNÁLY (FEED)" },
    {
      label: "Všetky Signály",
      targetId: "nexus-blog-feed-top",
      actionTab: "THREAD",
      icon: "List",
    },
    {
      label: "Moje Signály",
      targetId: "nexus-blog-feed-top",
      actionTab: "MY_POSTS",
      icon: "UserCheck",
    },
    {
      label: "Komentáre & Vlákna",
      targetId: "nexus-blog-feed-top",
      icon: "MessageSquare",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 6. 🍔 OperatorsPage — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/OperatorsPage.jsx
  // =============================================================================================
  operators: [
    { isDivider: true, label: "SIEŤ ENTÍT (RADAR)" },
    {
      label: "Zoznam Operátorov",
      targetId: "nexus-operators-filter",
      actionTab: "OPERATORS",
      icon: "Users",
      url: "/operators",
    },
    {
      label: "Online Operátori",
      targetId: "nexus-operators-filter",
      actionTab: "OPERATORS",
      icon: "Wifi",
    },
    {
      label: "Vyhľadávanie v Sieti",
      targetId: "nexus-operators-filter",
      icon: "Search",
    },
    { isDivider: true, label: "MATRIX SÚŤAŽ" },
    {
      label: "Matrix Leaderboard",
      targetId: "nexus-operators-rewards",
      actionTab: "REWARDS",
      icon: "Trophy",
      url: "/operators/matrix-sutaz",
    },
    {
      label: "Mesačný Rebríček",
      targetId: "nexus-operators-rewards",
      actionTab: "REWARDS",
      icon: "Award",
    },
    {
      label: "Kódex Súťaží",
      targetId: "nexus-operators-rewards",
      actionTab: "REWARDS",
      icon: "Crown",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 7. 🍔 6 SÚRODENCOV OBCHODU — HAMBURGER MENU DATA (V20 OS GENESIS)
  // =============================================================================================

  // 🛒 7.1. SÚRODENEC: NEXUS SHOP
  shop: [
    { isDivider: true, label: "🛒 NEXUS SHOP & AGENCY" },

    {
      label: "Všetko",
      targetId: "nexus-shop-filters",
      icon: "ShoppingCart",
      url: "/shop/shop/all",
    },
    {
      label: "MemberShip",
      targetId: "nexus-shop-membership",
      icon: "Crown",
      url: "/shop/shop/membership",
    },
    {
      label: "OC Balíky (Packs)",
      targetId: "nexus-shop-packs",
      icon: "Package",
      url: "/shop/shop/packs",
    },
    {
      label: "Matrix FX Anomálie",
      targetId: "nexus-shop-matrix-fx",
      icon: "Zap",
      url: "/shop/shop/matrix_fx",
    },
    {
      label: "IT Služby (Agency)",
      targetId: "nexus-shop-services",
      icon: "Briefcase",
      url: "/shop/shop/services",
    },
    {
      label: "Zmenáreň Kreditov",
      targetId: "nexus-shop-zmenaren",
      icon: "RefreshCw",
      url: "/shop/shop/zmenaren",
    },
    {
      label: "Cashflow & Peňaženka",
      targetId: "nexus-shop-cashflow",
      icon: "Wallet",
      url: "/shop/shop/cashflow",
    },
    ...getTierNav("shop"),
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 🎬 7.2. SÚRODENEC: VIDEOS MEDIA
  videos: [
    { isDivider: true, label: "🎬 VIDEOS MEDIA" },

    // {
    //   label: "Všetky Video Prehľady",
    //   targetId: "nexus-shop-filters",
    //   url: "/shop/videos",
    //   icon: "Video",
    // },
    // {
    //   label: "Krátke Shorts (9:16)",
    //   targetId: "nexus-shop-filters",
    //   url: "/shop/videos/short",
    //   icon: "Smartphone",
    // },
    // {
    //   label: "Explainer Videá (16:9)",
    //   targetId: "nexus-shop-filters",
    //   url: "/shop/videos/explainer",
    //   icon: "Tv",
    // },
    // {
    //   label: "Pripravujeme (Standby)",
    //   targetId: "nexus-shop-standby",
    //   icon: "Clock",
    //   url: "/shop/videos/standby",
    // },
    // ...getTierNav("videos"),
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 🎵 7.3. SÚRODENEC: AUDIOS MEDIA
  audios: [
    { isDivider: true, label: "🎵 AUDIOS MEDIA" },
    {
      label: "Všetky Audio Stopy",
      targetId: "nexus-shop-filters",
      url: "/shop/audios",
      icon: "Volume2",
    },
    {
      label: "CoDM Zombies Arzenál",
      targetId: "nexus-shop-filters",
      url: "/shop/audios/kt-codm-zombies",
      icon: "Crosshair",
    },
    {
      label: "5x Master ZIP All-Packs",
      targetId: "nexus-shop-filters",
      url: "/shop/audios/kt-balene-aktiva",
      icon: "Package",
    },

    ...getTierNav("audios"),
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 🎨 7.4. SÚRODENEC: IMAGES MEDIA
  images: [
    { isDivider: true, label: "🎨 IMAGES MEDIA" },
    {
      label: "Všetky Vizuály",
      targetId: "nexus-shop-filters",
      url: "/shop/images",
      icon: "Image",
    },
    {
      label: "21 Bot Avatarov (ID00-ID20)",
      targetId: "nexus-shop-filters",
      url: "/shop/images/avatars",
      icon: "Bot",
    },

    ...getTierNav("images"),
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 📑 7.5. SÚRODENEC: DOCUMENTS MEDIA
  documents: [
    { isDivider: true, label: "📑 DOCUMENTS MEDIA" },
    {
      label: "Všetky Dokumenty",
      targetId: "nexus-shop-filters",
      url: "/shop/documents",
      icon: "FileText",
    },
    {
      label: "69x Taktické Kódexy",
      targetId: "nexus-shop-filters",
      url: "/shop/documents/kt-kodexy",
      icon: "FileText",
    },
    {
      label: "5x Master ZIP All-Packs",
      targetId: "nexus-shop-filters",
      url: "/shop/documents/zip-packs",
      icon: "Package",
    },
    ...getTierNav("documents"),
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // 💻 7.6. SÚRODENEC: APPS MEDIA
  apps: [
    { isDivider: true, label: "💻 APPS MEDIA" },
    {
      label: "Všetky Aplikácie",
      targetId: "nexus-shop-filters",
      url: "/shop/apps",
      icon: "Cpu",
    },
    {
      label: "Progressive Web Apps (PWA)",
      targetId: "nexus-shop-filters",
      url: "/shop/apps/web",
      icon: "Globe",
    },
    {
      label: "Mobilné Aplikácie (APK)",
      targetId: "nexus-shop-filters",
      url: "/shop/apps/mob",
      icon: "Smartphone",
    },
    {
      label: "Desktop PC Softvér",
      targetId: "nexus-shop-filters",
      url: "/shop/apps/desk",
      icon: "Laptop",
    },
    ...getTierNav("apps"),
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 8. 🍔 SettingsPage — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/components/SettingsPage.jsx
  // =============================================================================================
  settings: [
    { isDivider: true, label: "REGISTRAČNÉ ÚDAJE" },
    {
      label: "Užívateľ | Meno",
      targetId: "nexus-settings-user",
      actionTab: "registration",
      icon: "User",
      url: "/settings/registration",
    },
    {
      label: "Heslo a Bezpečnosť",
      targetId: "nexus-settings-password",
      actionTab: "registration",
      icon: "Key",
    },
    { isDivider: true, label: "LOGIN A PREPOJENIE" },
    {
      label: "Google & OAuth Mosty",
      targetId: "nexus-settings-oauth",
      actionTab: "login_connections",
      icon: "Link",
      url: "/settings/login_connections",
    },
    { isDivider: true, label: "DOSSIER EDITOR" },
    {
      label: "Sémantické Dossier",
      targetId: "nexus-settings-dossier",
      actionTab: "dossier",
      icon: "FileText",
      url: "/settings/dossier",
    },
    {
      label: "Avatar & Vizuálna Identita",
      targetId: "nexus-settings-avatar",
      actionTab: "dossier",
      icon: "Bot",
    },
    { isDivider: true, label: "ZDRAVOTNÝ STAV" },
    {
      label: "Biohacking & Stav Skafandra",
      targetId: "nexus-settings-health",
      actionTab: "health",
      icon: "HeartPulse",
      url: "/settings/health",
    },
    { isDivider: true, label: "CONTACT FIELD" },
    {
      label: "E-mail Routing & Kontakty",
      targetId: "nexus-settings-contacts",
      actionTab: "contacts",
      icon: "Share2",
      url: "/settings/contacts",
    },
    { isDivider: true, label: "PEŇAŽENKA" },
    {
      label: "Peňaženka & Cloud Balance",
      targetId: "nexus-settings-wallet",
      actionTab: "wallet",
      icon: "Wallet",
      url: "/settings/wallet",
    },
    { isDivider: true, label: "OPRÁVNENIA" },
    {
      label: "Auth Matrix & TIER Práva",
      targetId: "nexus-settings-perms",
      actionTab: "permissions",
      icon: "ShieldCheck",
      url: "/settings/permissions",
    },
    { isDivider: true, label: "NOTIFIKÁCIE & ADMIN" },
    {
      label: "Systémové Notifikácie",
      targetId: "nexus-settings-notif",
      actionTab: "notifications",
      icon: "Bell",
      url: "/settings/notifications",
    },
    {
      label: "Správa Siete (Admin)",
      targetId: "nexus-settings-matrix",
      actionTab: "auth_matrix",
      icon: "Users",
      url: "/settings/auth_matrix",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 9. 🍔 NEXUS-AGENCY — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/NexusAgency.jsx
  // =============================================================================================
  // agency: [
  //   { isDivider: true, label: "PROJEKT NEXUS OS: GENESIS EDITION" },
  //   { label: "Návrat na Nexus Uplink", icon: "Radio", url: "/login" },
  //   { label: "Návrat na Nexus Home", icon: "Home", url: "/" },
  //   { label: "Návrat na Nexus Blog", icon: "BookOpen", url: "/blog" },
  //   { label: "Návrat na Nexus Operators", icon: "Users", url: "/operators" },
  //   { label: "Návrat na Nexus Shop", icon: "ShoppingCart", url: "/shop" },
  //   { label: "Návrat na Nexus Settings", icon: "Settings", url: "/settings" },

  //   { isDivider: true, label: "NEXUS AGENCY" },
  //   {
  //     label: "Jedno-členná IT Armáda",
  //     targetId: "nexus-agency-hero",
  //     icon: "Terminal",
  //     url: "/agency",
  //   },
  //   {
  //     label: "Ghost-Mode Exekúcia",
  //     targetId: "nexus-agency-features",
  //     icon: "Zap",
  //   },
  //   { isDivider: true, label: "B2B ARZENÁL (13 SLUŽIEB)" },
  //   { label: "Web, UI/UX a Front-end", targetId: "services", icon: "Layout" },
  //   { label: "Dáta a Administratíva", targetId: "services", icon: "Database" },
  //   { label: "Obsah a Copywriting", targetId: "services", icon: "PenTool" },
  //   { label: "Multimédiá a Video", targetId: "services", icon: "Film" },
  //   { label: "Gaming B2B Guides", targetId: "services", icon: "Gamepad2" },
  //   { label: "Software a Franšíza", targetId: "services", icon: "Briefcase" },
  //   { isDivider: true, label: "B2B KONTAKT & DISCOVERY" },
  //   {
  //     label: "Rezervovať Discovery Call",
  //     targetId: "nexus-agency-contact",
  //     icon: "PhoneCall",
  //   },
  //   {
  //     label: "E-mail Routing Matrix",
  //     targetId: "nexus-agency-matrix",
  //     icon: "Mail",
  //   },
  //   { isDivider: true, label: "PROJEKT NEXUS OS: GENESIS EDITION" },
  //   { label: "Odhlásiť sa", icon: "Radio", url: "/login" },
  // ],

  // =============================================================================================
  // 10. 🍔 ADMINPAGE — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/pages/AdminPage.jsx
  // =============================================================================================
  admin: [
    { isDivider: true, label: "DASHBOARD" },
    {
      label: "Hlavný Prehľad",
      targetId: "admin-dashboard",
      actionTab: "DASHBOARD",
      icon: "Layout",
      url: "/admin",
    },
    {
      label: "Analytika Systému",
      targetId: "admin-analytics",
      actionTab: "DASHBOARD",
      icon: "Activity",
    },
    { isDivider: true, label: "OPERATOR CONTROL" },
    {
      label: "Správa Entít",
      targetId: "admin-users",
      actionTab: "USERS",
      icon: "Users",
    },
    {
      label: "Povýšenia & Bány",
      targetId: "admin-users",
      actionTab: "USERS",
      icon: "ShieldAlert",
    },
    { isDivider: true, label: "DB MANAGEMENT" },
    {
      label: "Cloud Limity & Storage",
      targetId: "admin-database",
      actionTab: "STORAGE",
      icon: "HardDrive",
    },
    {
      label: "Konzistencia Registrov",
      targetId: "admin-database",
      actionTab: "DIAGNOSTICS",
      icon: "Database",
    },
    { isDivider: true, label: "SYSTEM LOGS" },
    {
      label: "Živé Systémové Logy",
      targetId: "admin-logs",
      actionTab: "LOGS",
      icon: "Terminal",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 11. 🍔 GlobalProfil — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/components/GlobalProfil.jsx
  // =============================================================================================
  profil: [
    { isDivider: true, label: "PROFIL OPERÁTORA" },
    { label: "Základné Údaje", targetId: "nexus-profil-header", icon: "User" },
    {
      label: "Zdravorný Stav",
      targetId: "nexus-profil-health",
      icon: "Health",
    },
    {
      label: "Verejné Kontakty Siete",
      targetId: "nexus-profil-contacts",
      icon: "Contact",
    },
    {
      label: "Sémantické Dossier",
      targetId: "nexus-profil-dossier",
      icon: "FileText",
    },
    // {
    //   label: "Klientske Prístupy",
    //   targetId: "nexus-profil-tiers",
    //   icon: "Key",
    // },
    // {
    //   label: "Trofeje & Súťažné Body",
    //   targetId: "nexus-profil-trophies",
    //   icon: "Trophy",
    // },
    // {
    //   label: "Aktivita v Sieti",
    //   targetId: "nexus-profil-activity",
    //   icon: "Activity",
    // },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],

  // =============================================================================================
  // 12. 🍔 GlobalMessages — HAMBURGER MENU DATA (V20 OS GENESIS)
  // File: src/components/GlobalMessages.jsx
  // =============================================================================================
  messages: [
    { isDivider: true, label: "KOMUNIKAČNÝ TERMINÁL" },
    {
      label: "Prijaté Správy (Inbox)",
      targetId: "nexus-messages-scroll",
      actionTab: "inbox",
      icon: "Inbox",
    },
    {
      label: "Nová Správa (Compose)",
      targetId: "nexus-messages-scroll",
      actionTab: "compose",
      icon: "PenTool",
    },
    {
      label: "Odoslané Správy (Sent)",
      targetId: "nexus-messages-scroll",
      actionTab: "sent",
      icon: "Send",
    },
    {
      label: "Archív Správ",
      targetId: "nexus-messages-scroll",
      actionTab: "archive",
      icon: "Archive",
    },
    ...TRIPLE_USER_NAV,
    ...GLOBAL_NEXUS_NAV,
    ...SHOP_MEDIA_NAV,
    ...LOGOUT_NEXUS_NAV,
  ],
};

export default HAMBURGER_MENU_DATA;
