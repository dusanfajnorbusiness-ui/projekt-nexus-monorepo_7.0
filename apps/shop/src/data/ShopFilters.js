// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP FILTERS REGISTER V20.3)
// File: src/data/ShopFilters.js
// Status: SINGLE SOURCE OF TRUTH (DVOJÚROVŇOVÝ DUAL-FILTER PRE 6 SÚRODENCOV)
// ============================================================================

export const SHOP_SIBLINGS_ORDER = [
  "shop",
  "videos",
  "audios",
  "images",
  "documents",
  "apps",
];

export const SHOP_FILTERS_CONFIG = {
  // 🛒 1. NEXUS SHOP (Main Commercial Hub & IT Agency)
  shop: {
    id: "shop",
    title: "NEXUS SHOP",
    subtitle: "Členstvá, OC Balíky, Matrix FX & IT Služby",
    color: "#FFD700",
    searchPlaceholder: "Vyhľadať produkt, balík alebo IT službu...",
    // 🟢 PRIMÁRNE KATEGÓRIE
    mainCategories: [
      { key: "ALL", label: "VŠETKO", iconName: "ShoppingCart", url: "/shop" },
      {
        key: "MEMBERSHIP",
        label: "MEMBERSHIP",
        iconName: "Crown",
        url: "/shop/shop/membership",
      },
      {
        key: "PACKS",
        label: "OC PACKS",
        iconName: "Package",
        url: "/shop/shop/packs",
      },
      {
        key: "MATRIX_FX",
        label: "MATRIX FX",
        iconName: "Zap",
        url: "/shop/shop/matrix_fx",
      },
      {
        key: "SERVICES",
        label: "IT SLUŽBY",
        iconName: "Briefcase",
        url: "/shop/shop/services",
      },
      {
        key: "ZMENAREN",
        label: "ZMENÁREŇ",
        iconName: "RefreshCw",
        url: "/shop/shop/zmenaren",
      },
      {
        key: "CASHFLOW",
        label: "CASHFLOW",
        iconName: "Activity",
        url: "/shop/shop/cashflow",
      },
    ],
    // 🟡 SEKUNDÁRNE TIER FILTRE
    categories: [
      { key: "ALL", label: "VŠETKY TIERY", iconName: "Layers", url: "/shop" },
      {
        key: "FREE",
        label: "FREE",
        iconName: "Shield",
        url: "/shop?tier=FREE",
      },
      {
        key: "FREEMIUM",
        label: "FREEMIUM",
        iconName: "Shield",
        url: "/shop?tier=FREEMIUM",
      },
      {
        key: "PROMIUM",
        label: "PROMIUM",
        iconName: "Zap",
        url: "/shop?tier=PROMIUM",
      },
      {
        key: "OMEGAMIUM",
        label: "OMEGAMIUM",
        iconName: "Key",
        url: "/shop?tier=OMEGAMIUM",
      },
      {
        key: "MASTERMIUM",
        label: "MASTERMIUM",
        iconName: "Crown",
        url: "/shop?tier=MASTERMIUM",
      },
    ],
  },

  // 🎬 2. VIDEOS MEDIA
  videos: {
    id: "videos",
    title: "VIDEOS MEDIA",
    subtitle: "Video Prehľady, Trailery a Sémantické Masterclassy",
    color: "#FF6600",
    searchPlaceholder: "Vyhľadať video...",
    categories: [
      { key: "ALL", label: "VŠETKO", iconName: "Video", url: "/shop/videos" },
      {
        key: "FREE",
        label: "ZDARMA / FREE",
        iconName: "Shield",
        url: "/shop/videos?tier=FREE",
      },
      {
        key: "PRO",
        label: "PRO TIER",
        iconName: "Zap",
        url: "/shop/videos?tier=PRO",
      },
      {
        key: "OMEGA",
        label: "OMEGA TIER",
        iconName: "Key",
        url: "/shop/videos?tier=OMEGA",
      },
      {
        key: "MASTER",
        label: "MASTER TIER",
        iconName: "Crown",
        url: "/shop/videos?tier=MASTER",
      },
    ],
  },
  audios: {
    id: "audios",
    title: "AUDIOS MEDIA",
    subtitle: "Taktické Soundtracks, Focus Backdrops a Podmady",
    color: "#00f3ff",
    searchPlaceholder: "Vyhľadať audio stopu, TIER alebo kategóriu...",
    // 🟢 PRIMÁRNE KATEGÓRIE
    mainCategories: [
      {
        key: "ALL",
        label: "VŠETKO",
        iconName: "Volume2",
        url: "/shop/audios/all",
      },
      {
        key: "kt-balene-aktiva",
        label: "📦 BALENÉ AKTÍVA (ALL PACKS)",
        iconName: "Archive",
        url: "/shop/audios/kt-balene-aktiva",
      },
      {
        key: "kt-codm-zombies",
        label: "CODM ZOMBIES",
        iconName: "Gamepad2",
        url: "/shop/audios/kt-codm-zombies",
      },
    ],
    // 🟡 SEKUNDÁRNE TIER FILTRE (STRIKTNÝ MIUM ŠTANDARD OS GENESIS)
    categories: [
      {
        key: "ALL",
        label: "ALL",
        iconName: "Layers",
        url: "/shop/audios/all",
      },
      {
        key: "FREE",
        label: "FREE",
        iconName: "Shield",
        url: "/shop/audios/all/free",
      },
      {
        key: "FREEMIUM",
        label: "FREEMIUM",
        iconName: "Shield",
        url: "/shop/audios/all/freemium",
      },
      {
        key: "PROMIUM",
        label: "PROMIUM",
        iconName: "Zap",
        url: "/shop/audios/all/promium",
      },
      {
        key: "OMEGAMIUM",
        label: "OMEGAMIUM",
        iconName: "Key",
        url: "/shop/audios/all/omegamium",
      },
      {
        key: "MASTERMIUM",
        label: "MASTERMIUM",
        iconName: "Crown",
        url: "/shop/audios/all/mastermium",
      },
    ],
  },

  // 🎨 4. IMAGES MEDIA
  images: {
    id: "images",
    title: "IMAGES MEDIA",
    subtitle: "3D Hybrid Bot Avatary pre Profil (ID00 - ID20)",
    color: "#39FF14",
    searchPlaceholder: "Vyhľadať Avatara podľa ID, Názvu, Zamerania...",

    mainCategories: [
      {
        key: "ALL",
        label: "VŠETKO (21)",
        iconName: "Layers",
        url: "/shop/images",
      },
      {
        key: "kt-avatars",
        label: "🤖 BOT AVATARY (ID00 - ID20)",
        iconName: "Bot",
        url: "/shop/images?cat=kt-avatars",
      },
    ],
    categories: [
      {
        key: "ALL",
        label: "VŠETKY TIERY",
        iconName: "Layers",
        url: "/shop/images",
      },
      {
        key: "FREE",
        label: "FREE",
        iconName: "Shield",
        url: "/shop/images?tier=FREE",
      },
      {
        key: "FREEMIUM",
        label: "FREEMIUM",
        iconName: "Shield",
        url: "/shop/images?tier=FREEMIUM",
      },
      {
        key: "PROMIUM",
        label: "PROMIUM",
        iconName: "Zap",
        url: "/shop/images?tier=PROMIUM",
      },
      {
        key: "OMEGAMIUM",
        label: "OMEGAMIUM",
        iconName: "Crown",
        url: "/shop/images?tier=OMEGAMIUM",
      },
      {
        key: "MASTERMIUM",
        label: "MASTERMIUM",
        iconName: "Crown",
        url: "/shop/images?tier=MASTERMIUM",
      },
    ],
  },

  // 📑 5. DOCUMENTS MEDIA
  documents: {
    id: "documents",
    title: "DOCUMENTS MEDIA",
    subtitle: "69x PDF & PPTX Taktických Kódexov (ID00 - ID15)",
    searchPlaceholder: "Vyhľadať kódex podľa názvu, ID alebo zamerania...",
    color: "#00f3ff",

    // 🟢 1. ÚROVEŇ: PRIMÁRNY FILTER (LEN 2 HLAVNÉ SMERY + VŠETKO)
    mainCategories: [
      {
        key: "ALL",
        label: "VŠETKO",
        iconName: "Layers",
        url: "/shop/documents",
      },
      {
        key: "kt-kodexy",
        label: "📄 69x TAKTICKÉ KÓDEXY",
        iconName: "FileText",
        url: "/shop/documents?cat=kt-kodexy",
      },
      {
        key: "zip-packs",
        label: "📦 5x MASTER ZIP ALL-PACKS",
        iconName: "Package",
        url: "/shop/documents?cat=zip-packs",
      },
    ],

    // 🟡 2. ÚROVEŇ: SEKUNDÁRNY FILTER (UNIFIKOVANÝ -MIUM ŠTANDARD OS GENESIS)
    categories: [
      { key: "ALL", label: "ALL", iconName: "Layers", url: "/shop/documents" },
      {
        key: "FREE",
        label: "FREE",
        iconName: "Shield",
        url: "/shop/documents?tier=FREE",
      },
      {
        key: "FREEMIUM",
        label: "FREEMIUM",
        iconName: "Shield",
        url: "/shop/documents?tier=FREEMIUM",
      },
      {
        key: "PROMIUM",
        label: "PROMIUM",
        iconName: "Zap",
        url: "/shop/documents?tier=PROMIUM",
      },
      {
        key: "OMEGAMIUM",
        label: "OMEGAMIUM",
        iconName: "Key",
        url: "/shop/documents?tier=OMEGAMIUM",
      },
      {
        key: "MASTERMIUM",
        label: "MASTERMIUM",
        iconName: "Crown",
        url: "/shop/documents?tier=MASTERMIUM",
      },
    ],
  },

  // 💻 6. APPS MEDIA
  apps: {
    id: "apps",
    title: "APPS MEDIA",
    subtitle: "PWA, APK & Electron Softvér OS Genesis",
    color: "#00E5FF",
    searchPlaceholder: "Vyhľadať aplikáciu podľa ID, Názvu, Zamerania...",
    // 1. ÚROVEŇ: PLATFORMA (Primárny filter)
    mainCategories: [
      { key: "ALL", label: "VŠETKO", iconName: "Cpu" },
      { key: "web", label: "WEB PWA", iconName: "Globe" },
      { key: "mob", label: "MOBIL APK", iconName: "Smartphone" },
      { key: "desk", label: "DESKTOP PC", iconName: "Laptop" },
    ],
    // 2. ÚROVEŇ: LICENČNÝ TIER (Sekundárny filter zhodný s ostatnými súrodencami)
    categories: [
      { key: "ALL", label: "VŠETKY", iconName: "Cpu", color: "#FFD700" },
      { key: "FREE", label: "FREE", iconName: "Zap", color: "#00f3ff" },
      {
        key: "FREEMIUM",
        label: "FREEMIUM",
        iconName: "Activity",
        color: "#00f3ff",
      },
      { key: "PROMIUM", label: "PRO", iconName: "Shield", color: "#39FF14" },
      { key: "OMEGAMIUM", label: "OMEGA", iconName: "Crown", color: "#FFD700" },
      {
        key: "MASTERMIUM",
        label: "MASTER",
        iconName: "Terminal",
        color: "#FF003C",
      },
    ],
  },
};

export const getFiltersConfig = (type = "apps") => {
  const cleanType = String(type || "apps")
    .toLowerCase()
    .trim();
  return SHOP_FILTERS_CONFIG[cleanType] || SHOP_FILTERS_CONFIG.apps;
};

export default SHOP_FILTERS_CONFIG;
