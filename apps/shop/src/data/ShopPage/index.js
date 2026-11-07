// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP DATA INDEX V20.38)
// File: src/data/ShopPage/index.js
// Status: STRICTLY GROUNDED // BARREL INDEX EXPORTER
// ============================================================================

import { MEMBERSHIP_DATA } from "./Membership";
import { PACKS_DATA } from "./Packs";
import { MATRIX_FX_DATA, MATRIX_FX_PHASES } from "./MatrixFX";


export const TIER_COLORS = {
  FREE: "#00f3ff",
  FREEMIUM: "#00f3ff",
  PRO: "#39FF14",
  PROMIUM: "#39FF14",
  OMEGA: "#FFD700",
  OMEGAMIUM: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
  ARCHITECT: "#FF003C",
};

export const getTierColor = (tierStr) => {
  if (!tierStr) return "#00f3ff";
  const t = String(tierStr).toUpperCase();
  if (t === "FREE" || t === "FREEMIUM") return "#00f3ff";
  if (t.includes("PRO")) return "#39FF14";
  if (t.includes("OMEGA")) return "#FFD700";
  if (t.includes("MASTER") || t.includes("ARCHITECT")) return "#FF003C";
  return "#00f3ff";
};

export const TIER_TOOLTIPS = {
  ALL: "Zobraziť všetky prístupové TIER úrovne v obchode",
  FREE: "❄️ FREE TIER — Základný bezplatný prístup",
  FREEMIUM: "❄️ FREEMIUM TIER — Základná úroveň obchodu",
  PRO: "🟢 PRO TIER — Pokročilý výpočtový výkon (49 € / mes)",
  OMEGA: "☄️ OMEGA TIER — VIP doživotné kódexy (69 € / mes)",
  MASTER: "🔴 MASTER ARCHITECT — Root Access & Mentoring (99 € / mes)",
};

export {
  MATRIX_FX_PHASES,
  MEMBERSHIP_DATA,
  PACKS_DATA,
  MATRIX_FX_DATA,

};

export const SHOP_CAMPAIGN_DATA = {
  ...MEMBERSHIP_DATA,
  ...PACKS_DATA,
  ...MATRIX_FX_DATA,

};

export const shopCampaignData = SHOP_CAMPAIGN_DATA;
export default SHOP_CAMPAIGN_DATA;
