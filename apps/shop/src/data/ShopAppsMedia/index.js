// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (APPS MEDIA AGGREGATOR INDEX)
// File: src/data/ShopAppsMedia/index.js
// Status: STRICTLY GROUNDED // UNIFIED APPS REGISTER // FULL MATRIX AGGREGATOR
// ============================================================================

import { OS_GENESIS_APPS_DATA } from "./os-genesis.js";
import { NH_DEFRAGMENTATOR_DATA } from "./nh_defragmentator.js";
import { NH_MOTIVACNE_DATA } from "./nh_motivacne-moduly.js";
import { NH_MINDFULNESS_DATA } from "./nh_mindfulness-moduly.js";
import { DISK_MANAGER_DATA } from "./disk-manager.js";
import { CODM_ZOMBIES_GUIDE_DATA } from "./codm-zombies_quide.js";
import { KP_NEXUS_CODEX_DATA } from "./kp_nexus-codex.js";
import { KP_CORE_MATRIX_DATA } from "./kp_core-matrix.js";

export const TIER_COLOR_MAP = {
  ZDARMA: "#00f3ff",
  FREE: "#00f3ff",
  FREEMIUM: "#00E5FF",
  PRO: "#00E5FF",
  PREMIUM: "#00E5FF",
  OMEGA: "#FFD700",
  DELUXE: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
};

export const getTierColor = (tierStr) => {
  if (!tierStr) return "#00f3ff";
  const t = String(tierStr).toUpperCase();
  if (t.includes("MASTER")) return TIER_COLOR_MAP.MASTER;
  if (t.includes("OMEGA") || t.includes("DELUXE")) return TIER_COLOR_MAP.OMEGA;
  if (t.includes("PRO") || t.includes("PREMIUM")) return TIER_COLOR_MAP.PRO;
  return TIER_COLOR_MAP.FREE;
};

export const DIMENSION_COLOR_MAP = {
  ID00: "#FFFFFF",
  ID01: "#39FF14",
  ID02: "#FFEB3B",
  ID03: "#FFD700",
  ID04: "#FFAA00",
  ID05: "#FF8C00",
  ID06: "#BF00FF",
  ID07: "#8A2BE2",
  ID08: "#00FFFF",
  ID09: "#FF003C",
  ID10: "#0044FF",
  ID11: "#FFBF00",
  ID12: "#00E5FF",
  ID13: "#0055FF",
  ID14: "#FF1493",
  ID15: "#8A8A8A",
};

export const getDimensionColor = (dimStr) => {
  if (!dimStr) return "#FFD700";
  const clean = String(dimStr).toUpperCase().trim();
  return DIMENSION_COLOR_MAP[clean] || "#FFD700";
};

// 🏛️ SKUPINY A SUBKATEGÓRIE PRE HLAVNÝ FILTER
export const APPS_CATEGORY_MAP = {
  "kt-04-web": "🌐 Progressive Web Apps (PWA)",
  "kt-04-mob": "📱 Natívne Mobilné Aplikácie (Android / iOS)",
  "kt-04-desk": "💻 Natívny PC Softvér (Electron.js)",
  "kt-04-habits": "🧩 Nexus-Habits & Defragmentátor",
  "kt-04-disk": "🗄️ Disk Manager & Desktop Nodes",
  "kt-04-codm": "🎮 CoDM Zombies Tactical Guide",
  "kt-04-books": "📚 Knihy, Kódexy & Publikácie",
};

export const APPS_CATEGORY_TOOLTIPS = {
  ALL: "Zobraziť všetky softvérové aplikácie, kódexy a terminály OS Genesis",
  "kt-04-web": "🌐 Progressive Web App (PWA) terminály priamo na plochu",
  "kt-04-mob": "📱 Natívne mobilné aplikácie pre iOS a Android",
  "kt-04-desk": "💻 Izolovaný Electron.js desktopový softvér pre Windows a Mac",
  "kt-04-habits": "🧩 Moduly pre defragmentáciu návykov, práne a mindfulness",
  "kt-04-disk":
    "🗄️ Kybernetický spravodajský nástroj pre lokálnu aj cloudovú správu dát",
  "kt-04-codm":
    "🎮 Taktický sprievodca, Speed Runs a Damage Runs pre CoDM Zombies",
  "kt-04-books":
    "📚 Nexus Codex a Core Matrixu pretavené do ucelenej knižnej podoby",
};

export const TIER_TOOLTIPS = {
  ALL: "Zobraziť všetky TIER úrovne",
  PREMIUM: "PRO Licenčný balík — stredná vrstva Matrixu a základný terminál",
  DELUXE:
    "OMEGA VIP Licenčný balík — elitný investičný kvadrant, Kódex a API Oracle",
  MASTERMIUM:
    "MASTER CROWN Licenčný balík — Root Access ku všetkým 15 dimenziám",
};

// 🔗 ZJEDNOTENÝ REGISTRÁTOR VŠETKÝCH DÁT
// 1. OSTRÉ APLIKÁCIE PRE HLAVNÝ SHOP (CAMP_39A – CAMP_41C)
export const SHOP_APPS_DATA = [...OS_GENESIS_APPS_DATA];

// 2. STANDBY MODULY STRICTLY PRE AKORDEÓN PRIPRAVUJEME (ROADMAP)
export const STANDBY_APPS_DATA = [
  ...NH_DEFRAGMENTATOR_DATA,
  ...NH_MOTIVACNE_DATA,
  ...NH_MINDFULNESS_DATA,
  ...DISK_MANAGER_DATA,
  ...CODM_ZOMBIES_GUIDE_DATA,
  ...KP_NEXUS_CODEX_DATA,
  ...KP_CORE_MATRIX_DATA,
];

export const SHOP_APPS_DICT = SHOP_APPS_DATA.reduce((acc, item) => {
  if (item && item.id) acc[item.id] = item;
  if (item && item.nodeKey) acc[item.nodeKey] = item;
  return acc;
}, {});

export const ShopAppsMediaData = SHOP_APPS_DATA;
export default SHOP_APPS_DATA;
