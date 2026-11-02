// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION
// File: src/data/ShopAudioMedia/index.js
// Status: MASTER RE-EXPORT BARREL // STRICT 32 CODM ZOMBIES ITEMS
// ============================================================================

import ZOMBIE_ARE_BACK_DATA from "./Zombie-Are-Back";
import { BALENE_DIGITALNE_DATA } from "./Audio_Balene-Digitalne";

export const SHOP_AUDIO_DATA = [
  ...BALENE_DIGITALNE_DATA,
  ...ZOMBIE_ARE_BACK_DATA,
];
export { ZOMBIE_ARE_BACK_DATA, BALENE_DIGITALNE_DATA };

export const AUDIO_CATEGORY_MAP = {
  ALL: "Všetky Audio Aktíva",
  FREE: "FREE TIER Audio",
  PRO: "PRO TIER Audio",
  OMEGA: "OMEGA TIER Audio",
  MASTER: "MASTER TIER Audio",
  "kt-codm-zombies": "🧟 CoDM Zombies Are Back (32)",
};

export const AUDIO_CATEGORY_TOOLTIPS = {
  ALL: "Zobraziť všetky audio stopy OS Genesis",
  FREE: "Bezplatné taktické stopy pre všetkých operátorov",
  PRO: "Pokročilé taktické a bionické stopy pre PRO členov",
  OMEGA: "Exkluzívne OMEGA audio aktíva",
  MASTER: "Špičkové MASTER audio stopy pre elitných architektov",
  "kt-codm-zombies":
    "🧟 32x CoDM Zombies Are Back taktických soundtrackov (LV-01A až LV-08D)",
};

export const TIER_COLOR_MAP = {
  FREE: "#00f3ff",
  PRO: "#39FF14",
  OMEGA: "#FFD700",
  MASTER: "#FF003C",
};

export const getTierColor = (tier) => {
  if (!tier) return "#00f3ff";
  const u = String(tier).toUpperCase();
  return TIER_COLOR_MAP[u] || "#00f3ff";
};

export const DIMENSION_COLOR_MAP = {
  ID00: "#00f3ff",
  ID01: "#39FF14",
  ID02: "#BF00FF",
  ID03: "#FFD700",
  ID04: "#FF6600",
  ID05: "#FF003C",
};

export const getDimensionColor = (dim) => {
  if (!dim) return "#FFD700";
  return DIMENSION_COLOR_MAP[dim] || "#FFD700";
};

export default SHOP_AUDIO_DATA;
