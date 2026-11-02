// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (IMAGES MEDIA INDEX V20.38)
// File: src/data/ShopImageMedia/index.js
// Status: STRICTLY GROUNDED // BARREL EXPORT PATTERN
// ============================================================================

import { AVATARS_BOTS_DATA } from "./Avatars-Bots";

export const TIER_COLOR_MAP = {
  ZDARMA: "#00f3ff",
  FREE: "#00f3ff",
  FREEMIUM: "#00E5FF",
  PRO: "#39FF14",
  PROMIUM: "#39FF14",
  OMEGA: "#FFD700",
  OMEGAMIUM: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
};

export const getTierColor = (tierStr) => {
  if (!tierStr) return "#00f3ff";
  const t = String(tierStr).toUpperCase();
  if (t === "ZDARMA") return TIER_COLOR_MAP.ZDARMA;
  if (t.includes("MASTER")) return TIER_COLOR_MAP.MASTER;
  if (t.includes("OMEGA")) return TIER_COLOR_MAP.OMEGA;
  if (t.includes("PRO")) return TIER_COLOR_MAP.PRO;
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

export const IMAGE_CATEGORY_MAP = {
  "kt-avatars": "🤖 BOT AVATARY (ID00 - ID20)",
};

export const IMAGE_CATEGORY_TOOLTIPS = {
  ALL: "Zobraziť všetky obrázkové a avatar uzly obchodu (21 uzlov)",
  "kt-avatars":
    "🤖 3D Hybrid Robotic Avatary (ID00 až ID20) pre váš profil na blogu OS Genesis",
};

export const TIER_TOOLTIPS = {
  ALL: "Zobraziť všetky obrázkové uzly bez ohľadu na TIER úroveň",
  ZDARMA:
    "Úplne zdarma pre všetkých operátorov Kmeňa OS Genesis (0 OC / 0.00 €)",
  FREE: "Základná TIER úroveň (2500 OC / 25.00 €)",
  PRO: "Vyžaduje aktívne NEXUS PRO členstvo alebo 4900 OC (49.00 €)",
  OMEGA: "Vyžaduje aktívne NEXUS OMEGA členstvo alebo 6900 OC (69.00 €)",
  MASTER: "Vyžaduje MASTER ARCHITECT TIER alebo 9900 OC (99.00 €)",
};

export const SHOP_IMAGE_DATA = [...AVATARS_BOTS_DATA];

export const ShopImageMediaData = SHOP_IMAGE_DATA;
export default SHOP_IMAGE_DATA;
