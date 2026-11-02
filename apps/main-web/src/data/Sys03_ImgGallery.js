/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS03 MASTER DATASET V20.95)
// Súbor: src/data/Sys03_ImgGallery.js
// Status: 100% GROUNDED // 100% PERFECT CDN MATCH // ZERO STANDBY FALLBACK
// ============================================================================

const CDN_BASE =
  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images";

export function sanitizeCdnUrl(pathOrUrl) {
  if (!pathOrUrl) return "";
  const full = pathOrUrl.startsWith("http")
    ? pathOrUrl
    : CDN_BASE + "/" + pathOrUrl;
  return full
    .replaceAll(" ", "%20")
    .replaceAll("(", "%28")
    .replaceAll(")", "%29")
    .replaceAll("'", "%27");
}

export const GALLERY_CATEGORIES = [
  { id: "ALL", label: "Všetky Aktíva", icon: "LayoutGrid" },
  { id: "DIMENSIONS", label: "16 Kognitívnych Dimenzií", icon: "Layers" },
  { id: "AVATARS", label: "21 Bot Avatars (VIP)", icon: "Bot", isPro: true },
  { id: "AGENCY", label: "Nexus Agency (Služby)", icon: "Briefcase" },
  { id: "DOCUMENTS", label: "Taktické Kódexy & Knihy", icon: "BookOpen" },
  { id: "PAGES", label: "Systémové Porty & Stránky", icon: "FileText" },
  { id: "CODM", label: "CoDM Zombies Arzenál", icon: "Gamepad2" },
  { id: "MATRIX", label: "Matrix FX Anomálie", icon: "Zap" },
  { id: "MEMBERSHIP", label: "Členstvá & Kľúče", icon: "Crown" },
  { id: "PACKS", label: "OC Balíky (Packs)", icon: "Package" },
  { id: "SYS", label: "Moduly SYS01-SYS05", icon: "Terminal" },
];

export const SYS03_GALLERY_DATA = [
  {
    id: "CODM-05",
    title: "CoDM: Clasic Normal Boss Abomination",
    category: "CODM",
    tier: "FREE",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Clasic Normal Boss Abomination.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/clasic-normal_boss-abomination-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/clasic-normal_boss-abomination-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/clasic-normal_boss-abomination-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/clasic-normal_boss-abomination_all-formats.zip",
    },
  },
  {
    id: "CODM-01",
    title: "CoDM: Clasic Endles Survive Max Rounds",
    category: "CODM",
    tier: "FREEMIUM",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Clasic Endles Survive Max Rounds.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/clasic-endles-survive-max-rounds-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/clasic-endles-survive-max-rounds-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/clasic-endles-survive-max-rounds-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/clasic-endles-survive-max-rounds_all-formats.zip",
    },
  },
  {
    id: "CODM-02",
    title: "CoDM: Clasic Endles Survive Retreat Exfil",
    category: "CODM",
    tier: "PROMIUM",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Clasic Endles Survive Retreat Exfil.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/clasic-endles-survive-retreat-exfil-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/clasic-endles-survive-retreat-exfil-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/clasic-endles-survive-retreat-exfil-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/clasic-endles-survive-retreat-exfil_all-formats.zip",
    },
  },
  {
    id: "CODM-03",
    title: "CoDM: Clasic Hardcore Boss Abomination",
    category: "CODM",
    tier: "PROMIUM",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Clasic Hardcore Boss Abomination.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/clasic-hardcore_boss-abomination-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/clasic-hardcore_boss-abomination-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/clasic-hardcore_boss-abomination-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/clasic-hardcore_boss-abomination_all-formats.zip",
    },
  },
  {
    id: "CODM-04",
    title: "CoDM: Clasic Hardcore Boss Jubokko",
    category: "CODM",
    tier: "PROMIUM",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Clasic Hardcore Boss Jubokko.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/clasic-hardcore_boss-jubokko-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/clasic-hardcore_boss-jubokko-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/clasic-hardcore_boss-jubokko-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/clasic-hardcore_boss-jubokko_all-formats.zip",
    },
  },
  {
    id: "CODM-06",
    title: "CoDM: Undead Siege Casual Mode",
    category: "CODM",
    tier: "OMEGAMIUM",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Undead Siege Casual Mode.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/undead-siege_casual-mode-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/undead-siege_casual-mode-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/undead-siege_casual-mode-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/undead-siege_casual-mode_all-formats.zip",
    },
  },
  {
    id: "CODM-07",
    title: "CoDM: Undead Siege Hard Mode",
    category: "CODM",
    tier: "OMEGAMIUM",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Undead Siege Hard Mode.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/undead-siege_hard-mode-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/undead-siege_hard-mode-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/undead-siege_hard-mode-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/undead-siege_hard-mode_all-formats.zip",
    },
  },
  {
    id: "CODM-08",
    title: "CoDM: Undead Siege Nightmare Mode",
    category: "CODM",
    tier: "MASTERMIUM",
    desc: "Taktická herná miniatúra a sprievodca pre CoDM: Undead Siege Nightmare Mode.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/1x1_feed/undead-siege_nightmare-mode-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/9x16_shorts/undead-siege_nightmare-mode-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/16x9_desktop/undead-siege_nightmare-mode-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/codmMaster/zip-all-formaty/undead-siege_nightmare-mode_all-formats.zip",
    },
  },
  {
    id: "DIM-ID00",
    title: "ID00 Mentor Hub",
    category: "DIMENSIONS",
    tier: "FREE",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID00 Mentor Hub.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id00-mentor-hub-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id00-mentor-hub-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id00-mentor-hub-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id00-mentor-hub_all-formats.zip",
    },
  },
  {
    id: "DIM-ID01",
    title: "ID01 Identity Core",
    category: "DIMENSIONS",
    tier: "FREE",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID01 Identity Core.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id01-identity-core-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id01-identity-core-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id01-identity-core-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id01-identity-core_all-formats.zip",
    },
  },
  {
    id: "DIM-ID02",
    title: "ID02 The Workflow",
    category: "DIMENSIONS",
    tier: "FREE",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID02 The Workflow.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id02-the-workflow-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id02-the-workflow-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id02-the-workflow-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id02-the-workflow_all-formats.zip",
    },
  },
  {
    id: "DIM-ID03",
    title: "ID03 Cash Engine",
    category: "DIMENSIONS",
    tier: "PRO",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID03 Cash Engine.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id03-cash-engine-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id03-cash-engine-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id03-cash-engine-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id03-cash-engine_all-formats.zip",
    },
  },
  {
    id: "DIM-ID04",
    title: "ID04 Revenue Architect",
    category: "DIMENSIONS",
    tier: "PRO",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID04 Revenue Architect.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id04-revenue-architect-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id04-revenue-architect-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id04-revenue-architect-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id04-revenue-architect_all-formats.zip",
    },
  },
  {
    id: "DIM-ID05",
    title: "ID05 Assets Matrix",
    category: "DIMENSIONS",
    tier: "OMEGA",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID05 Assets Matrix.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id05-assets-matrix-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id05-assets-matrix-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id05-assets-matrix-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id05-assets-matrix_all-formats.zip",
    },
  },
  {
    id: "DIM-ID06",
    title: "ID06 Data Absorber",
    category: "DIMENSIONS",
    tier: "PRO",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID06 Data Absorber.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id06-data-absorber-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id06-data-absorber-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id06-data-absorber-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id06-data-absorber_all-formats.zip",
    },
  },
  {
    id: "DIM-ID07",
    title: "ID07 Skills Tree",
    category: "DIMENSIONS",
    tier: "PRO",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID07 Skills Tree.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id07-skills-tree-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id07-skills-tree-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id07-skills-tree-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id07-skills-tree_all-formats.zip",
    },
  },
  {
    id: "DIM-ID08",
    title: "ID08 Empty Book",
    category: "DIMENSIONS",
    tier: "FREE",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID08 Empty Book.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id08-empty-book-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id08-empty-book-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id08-empty-book-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id08-empty-book_all-formats.zip",
    },
  },
  {
    id: "DIM-ID09",
    title: "ID09 Sergeant Core",
    category: "DIMENSIONS",
    tier: "PRO",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID09 Sergeant Core.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id09-sergeant-core-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id09-sergeant-core-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id09-sergeant-core-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id09-sergeant-core_all-formats.zip",
    },
  },
  {
    id: "DIM-ID10",
    title: "ID10 NonIdentity Core",
    category: "DIMENSIONS",
    tier: "FREE",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID10 NonIdentity Core.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id10-nonidentity-core-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id10-nonidentity-core-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id10-nonidentity-core-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id10-nonidentity-core_all-formats.zip",
    },
  },
  {
    id: "DIM-ID11",
    title: "ID11 The Recovery",
    category: "DIMENSIONS",
    tier: "PRO",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID11 The Recovery.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id11-the-recovery-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id11-the-recovery-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id11-the-recovery-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id11-the-recovery_all-formats.zip",
    },
  },
  {
    id: "DIM-ID12",
    title: "ID12 Nexus Codex",
    category: "DIMENSIONS",
    tier: "OMEGA",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID12 Nexus Codex.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id12-nexus-codex-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id12-nexus-codex-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id12-nexus-codex-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id12-nexus-codex_all-formats.zip",
    },
  },
  {
    id: "DIM-ID13",
    title: "ID13 Nexus Habits",
    category: "DIMENSIONS",
    tier: "PRO",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID13 Nexus Habits.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id13-nexus-habits-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id13-nexus-habits-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id13-nexus-habits-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id13-nexus-habits_all-formats.zip",
    },
  },
  {
    id: "DIM-ID14",
    title: "ID14 Nexus Blog",
    category: "DIMENSIONS",
    tier: "FREE",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID14 Nexus Blog.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id14-nexus-blog-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id14-nexus-blog-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id14-nexus-blog-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id14-nexus-blog_all-formats.zip",
    },
  },
  {
    id: "DIM-ID15",
    title: "ID15 Death Core",
    category: "DIMENSIONS",
    tier: "MASTER",
    desc: "Vizuálny kampaňový kryt pre kognitívnu dimenziu ID15 Death Core.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/1x1_feed/id15-death-core-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/9x16_shorts/id15-death-core-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop/id15-death-core-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/zip-all-formaty/id15-death-core_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID00",
    title: "Bot Avatar ID00_MENTOR-BOT",
    category: "AVATARS",
    tier: "FREE",
    isBot: true,
    priceOc: 0,
    priceEur: "0.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID00_MENTOR-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID00_MENTOR-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID00_MENTOR-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID00_MENTOR-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID00_MENTOR-BOT_all-formats.zip",
    },
  },

  {
    id: "AVATAR-ID01",
    title: "Bot Avatar ID01_IDENTITY-BOT",
    category: "AVATARS",
    tier: "FREE",
    isBot: true,
    priceOc: 0,
    priceEur: "0.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID01_IDENTITY-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID01_IDENTITY-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID01_IDENTITY-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID01_IDENTITY-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID01_IDENTITY-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID02",
    title: "Bot Avatar ID02_WORK-BOT",
    category: "AVATARS",
    tier: "FREEMIUM",
    isBot: true,
    priceOc: 2500,
    priceEur: "25.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID02_WORK-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID02_WORK-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID02_WORK-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID02_WORK-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID02_WORK-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID03",
    title: "Bot Avatar ID03_CASH-BOT",
    category: "AVATARS",
    tier: "PROMIUM",
    isBot: true,
    priceOc: 4900,
    priceEur: "49.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID03_CASH-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID03_CASH-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID03_CASH-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID03_CASH-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID03_CASH-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID04",
    title: "Bot Avatar ID04_REVENUE-BOT",
    category: "AVATARS",
    tier: "PROMIUM",
    isBot: true,
    priceOc: 4900,
    priceEur: "49.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID04_REVENUE-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID04_REVENUE-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID04_REVENUE-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID04_REVENUE-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID04_REVENUE-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID05",
    title: "Bot Avatar ID05_ASSETS-BOT",
    category: "AVATARS",
    tier: "OMEGAMIUM",
    isBot: true,
    priceOc: 6900,
    priceEur: "69.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID05_ASSETS-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID05_ASSETS-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID05_ASSETS-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID05_ASSETS-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID05_ASSETS-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID06",
    title: "Bot Avatar ID06_ABSORBER-BOT",
    category: "AVATARS",
    tier: "PROMIUM",
    isBot: true,
    priceOc: 4900,
    priceEur: "49.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID06_ABSORBER-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID06_ABSORBER-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID06_ABSORBER-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID06_ABSORBER-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID06_ABSORBER-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID07",
    title: "Bot Avatar ID07_SKILLS-BOT",
    category: "AVATARS",
    tier: "PROMIUM",
    isBot: true,
    priceOc: 4900,
    priceEur: "49.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID07_SKILLS-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID07_SKILLS-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID07_SKILLS-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID07_SKILLS-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID07_SKILLS-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID08",
    title: "Bot Avatar ID08_EMPTY-BOT",
    category: "AVATARS",
    tier: "FREEMIUM",
    isBot: true,
    priceOc: 2500,
    priceEur: "25.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID08_EMPTY-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID08_EMPTY-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID08_EMPTY-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID08_EMPTY-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID08_EMPTY-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID09",
    title: "Bot Avatar ID09_SERGEANT-BOT",
    category: "AVATARS",
    tier: "FREEMIUM",
    isBot: true,
    priceOc: 2500,
    priceEur: "25.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID09_SERGEANT-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID09_SERGEANT-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID09_SERGEANT-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID09_SERGEANT-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID09_SERGEANT-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID10",
    title: "Bot Avatar ID10_SILENT-BOT",
    category: "AVATARS",
    tier: "FREE",
    isBot: true,
    priceOc: 0,
    priceEur: "0.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID10_SILENT-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID10_SILENT-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID10_SILENT-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID10_SILENT-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID10_SILENT-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID11",
    title: "Bot Avatar ID11_RECOVERY-BOT",
    category: "AVATARS",
    tier: "PROMIUM",
    isBot: true,
    priceOc: 4900,
    priceEur: "49.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID11_RECOVERY-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID11_RECOVERY-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID11_RECOVERY-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID11_RECOVERY-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID11_RECOVERY-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID12",
    title: "Bot Avatar ID12_CODEX-BOT",
    category: "AVATARS",
    tier: "OMEGAMIUM",
    isBot: true,
    priceOc: 6900,
    priceEur: "69.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID12_CODEX-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID12_CODEX-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID12_CODEX-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID12_CODEX-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID12_CODEX-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID13",
    title: "Bot Avatar ID13_HABITS-BOT",
    category: "AVATARS",
    tier: "OMEGAMIUM",
    isBot: true,
    priceOc: 6900,
    priceEur: "69.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID13_HABITS-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID13_HABITS-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID13_HABITS-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID13_HABITS-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID13_HABITS-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID14",
    title: "Bot Avatar ID14_BLOG-BOT",
    category: "AVATARS",
    tier: "FREE",
    isBot: true,
    priceOc: 0,
    priceEur: "0.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID14_BLOG-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID14_BLOG-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID14_BLOG-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID14_BLOG-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID14_BLOG-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID15",
    title: "Bot Avatar ID15_DEATH-BOT",
    category: "AVATARS",
    tier: "FREEMIUM",
    isBot: true,
    priceOc: 2500,
    priceEur: "25.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID15_DEATH-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID15_DEATH-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID15_DEATH-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID15_DEATH-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID15_DEATH-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID16",
    title: "Bot Avatar ID16_UPLINK-BOT",
    category: "AVATARS",
    tier: "OMEGAMIUM",
    isBot: true,
    priceOc: 6900,
    priceEur: "69.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID16_UPLINK-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID16_UPLINK-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID16_UPLINK-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID16_UPLINK-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID16_UPLINK-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID17",
    title: "Bot Avatar ID17_HOME-BOT",
    category: "AVATARS",
    tier: "FREE",
    isBot: true,
    priceOc: 0,
    priceEur: "0.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID17_HOME-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID17_HOME-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID17_HOME-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID17_HOME-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID17_HOME-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID18",
    title: "Bot Avatar ID18_OPERATOR-BOT",
    category: "AVATARS",
    tier: "MASTERMIUM",
    isBot: true,
    priceOc: 9900,
    priceEur: "99.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID18_OPERATOR-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID18_OPERATOR-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID18_OPERATOR-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID18_OPERATOR-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID18_OPERATOR-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID19",
    title: "Bot Avatar ID19_SHOP-BOT",
    category: "AVATARS",
    tier: "OMEGAMIUM",
    isBot: true,
    priceOc: 6900,
    priceEur: "69.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID19_SHOP-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID19_SHOP-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID19_SHOP-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID19_SHOP-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID19_SHOP-BOT_all-formats.zip",
    },
  },
  {
    id: "AVATAR-ID20",
    title: "Bot Avatar ID20_SETTINGS-BOT",
    category: "AVATARS",
    tier: "PROMIUM",
    isBot: true,
    priceOc: 4900,
    priceEur: "49.00 €",
    desc: "Proprietárny 3D Bionický Bot Avatar pre profilovú identitu ID20_SETTINGS-BOT.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/1x1_feed/ID20_SETTINGS-BOT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/9x16_shorts/ID20_SETTINGS-BOT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/16x9_desktop/ID20_SETTINGS-BOT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/operatorsBotMaster/zip-all-formaty/ID20_SETTINGS-BOT_all-formats.zip",
    },
  },
  // ============================================================================
  // 💼 NEXUS AGENCY (13 B2B SLUŽIEB)
  // ============================================================================
  {
    id: "SRV-01",
    title: "01. UI/UX Diagnostika a Audit Webu",
    category: "AGENCY",
    tier: "FREE",
    desc: "B2B Klientska služba Nexus Agency: 01. UI/UX Diagnostika a Audit Webu.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/01.%20UI-UX%20Diagnostika-a-Audit-Webu-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/01-uiux-diagnostika-a-audit-webu-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/01-uiux-diagnostika-a-audit-webu-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/01-uiux-diagnostika-a-audit-webu_all-formats.zip",
    },
  },
  {
    id: "SRV-02",
    title: "02. Front-end Chirurgia a Úprava Kódu",
    category: "AGENCY",
    tier: "PRO",
    desc: "B2B Klientska služba Nexus Agency: 02. Front-end Chirurgia a Úprava Kódu.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/02.%20Front-end_Chirurgia-a-Uprava-Kodu-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/02-front-end-chirurgia-a-uprava-kodu-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/02-front-end-chirurgia-a-uprava-kodu-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/02-front-end-chirurgia-a-uprava-kodu_all-formats.zip",
    },
  },
  {
    id: "SRV-03",
    title: "03. Excel Diagnostika a Organizácia Dát",
    category: "AGENCY",
    tier: "OMEGA",
    desc: "B2B Klientska služba Nexus Agency: 03. Excel Diagnostika a Organizácia Dát.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/03.%20Excel-Diagnostika-a-Organizacia-Dat-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/03-excel-diagnostika-a-organizacia-dat-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/03-excel-diagnostika-a-organizacia-dat-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/03-excel-diagnostika-a-organizacia-dat_all-formats.zip",
    },
  },
  {
    id: "SRV-04",
    title: "04. Virtuálna Administratíva a Prepis Dát",
    category: "AGENCY",
    tier: "PRO",
    desc: "B2B Klientska služba Nexus Agency: 04. Virtuálna Administratíva a Prepis Dát.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/04.%20Virtualna-Administrativa-a-Prepis-Dat-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/04-virtualna-administrativa-a-prepis-dat-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/04-virtualna-administrativa-a-prepis-dat-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/04-virtualna-administrativa-a-prepis-dat_all-formats.zip",
    },
  },
  {
    id: "SRV-05",
    title: "05. Úprava Textov (Sémantická Dekompresia)",
    category: "AGENCY",
    tier: "FREE",
    desc: "B2B Klientska služba Nexus Agency: 05. Úprava Textov (Sémantická Dekompresia).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/05.%20Uprava-Textov_%28Semanticka-Dekompresia%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/05-uprava-textov-semanticka-dekompresia-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/05-uprava-textov-semanticka-dekompresia-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/05-uprava-textov-semanticka-dekompresia_all-formats.zip",
    },
  },
  {
    id: "SRV-06",
    title: "06. Písanie Príspevkov a Predajných Skriptov",
    category: "AGENCY",
    tier: "PRO",
    desc: "B2B Klientska služba Nexus Agency: 06. Písanie Príspevkov a Predajných Skriptov.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/06.%20Pisanie-Prispevkov-a-Predajnych-Skriptov-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/06-pisanie-prispevkov-a-predajnych-skriptov-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/06-pisanie-prispevkov-a-predajnych-skriptov-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/06-pisanie-prispevkov-a-predajnych-skriptov_all-formats.zip",
    },
  },
  {
    id: "SRV-07",
    title: "07. Ghostwriting (Tvorba E-bookov)",
    category: "AGENCY",
    tier: "MASTER",
    desc: "B2B Klientska služba Nexus Agency: 07. Ghostwriting (Tvorba E-bookov).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/07.%20Ghostwriting_%28Tvorba_E-bookov%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/07-ghostwriting-tvorba-e-bookov-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/07-ghostwriting-tvorba-e-bookov-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/07-ghostwriting-tvorba-e-bookov_all-formats.zip",
    },
  },
  {
    id: "SRV-08",
    title: "08. Dynamický Strih Videí (Shorts / Reels)",
    category: "AGENCY",
    tier: "PRO",
    desc: "B2B Klientska služba Nexus Agency: 08. Dynamický Strih Videí (Shorts / Reels).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/08.%20Dynamicky-Strih-Videi_%28Shorts-Reels%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/08-dynamicky-strih-videi-shorts-reels-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/08-dynamicky-strih-videi-shorts-reels-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/08-dynamicky-strih-videi-shorts-reels_all-formats.zip",
    },
  },
  {
    id: "SRV-09",
    title: "09. CoDM Zombies - Taktický Manuál & Support",
    category: "AGENCY",
    tier: "MASTER",
    desc: "B2B Klientska služba Nexus Agency: 09. CoDM Zombies - Taktický Manuál & Support.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/09.%20CoDM-Zombies_Takticky-Manual-%26-Support-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/09-codm-zombies-takticky-manual-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/09-codm-zombies-takticky-manual-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/09-codm-zombies-takticky-manual_all-formats.zip",
    },
  },
  {
    id: "SRV-10",
    title: "10. B2B Licencia - FFVII Ultimate Guide",
    category: "AGENCY",
    tier: "OMEGA",
    desc: "B2B Klientska služba Nexus Agency: 10. B2B Licencia - FFVII Ultimate Guide.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/10.%20B2B-Licencia_FFVII-Ultimate-Guide-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/10-b2b-licencia-ffvii-ultimate-guide-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/10-b2b-licencia-ffvii-ultimate-guide-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/10-b2b-licencia-ffvii-ultimate-guide_all-formats.zip",
    },
  },
  {
    id: "SRV-11",
    title: "11. B2B Licencia - FFVIII Ultimate Guide",
    category: "AGENCY",
    tier: "OMEGA",
    desc: "B2B Klientska služba Nexus Agency: 11. B2B Licencia - FFVIII Ultimate Guide.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/11.%20B2B-Licencia_FFVIII-Ultimate-Guide-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/11-b2b-licencia-ffviii-ultimate-guide-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/11-b2b-licencia-ffviii-ultimate-guide-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/11-b2b-licencia-ffviii-ultimate-guide_all-formats.zip",
    },
  },
  {
    id: "SRV-12",
    title: "12. Trinity Apps - Rezervácia Vývojovej Kapacity (Waitlist)",
    category: "AGENCY",
    tier: "MASTER",
    desc: "B2B Klientska služba Nexus Agency: 12. Trinity Apps - Rezervácia Vývojovej Kapacity (Waitlist).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/12.%20Trinity-App_Rezervacia-Vyvojovej-Kapacity_%28Waitlist%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/12-trinity-apps-rezervacia-kapacity-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/12-trinity-apps-rezervacia-kapacity-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/12-trinity-apps-rezervacia-kapacity_all-formats.zip",
    },
  },
  {
    id: "SRV-13",
    title: "13. B2B Enterprise - Nexus Franchise License",
    category: "AGENCY",
    tier: "MASTER",
    desc: "B2B Klientska služba Nexus Agency: 13. B2B Enterprise - Nexus Franchise License.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/1x1_feed/13.%20B2B-Enterprise_Nexus-Franchise-License_%28Waitlist%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/9x16_shorts/13-nexus-franchise-license-b2b-enterprise-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/16x9_desktop/13-nexus-franchise-license-b2b-enterprise-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/servicesMaster/zip-all-formaty/13-nexus-franchise-license-b2b-enterprise_all-formats.zip",
    },
  },
  {
    id: "CAMP-14",
    title: "NEXUS PROMIUM (MEMBERSHIP)",
    category: "MEMBERSHIP",
    tier: "PROMIUM",
    desc: "Prémiové systémové členstvo OS Genesis: NEXUS PROMIUM (MEMBERSHIP).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/14-nexus-pro-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/9x16_shorts/14-nexus-pro-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/14-nexus-pro-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/zip-all-formaty/14-nexus-pro_all-formats.zip",
    },
  },
  {
    id: "CAMP-15",
    title: "NEXUS OMEGAMIUM (MEMBERSHIP)",
    category: "MEMBERSHIP",
    tier: "OMEGAMIUM",
    desc: "Prémiové systémové členstvo OS Genesis: NEXUS OMEGAMIUM (MEMBERSHIP).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/15-nexus-omega-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/9x16_shorts/15-nexus-omega-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/15-nexus-omega-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/zip-all-formaty/15-nexus-omega_all-formats.zip",
    },
  },
  {
    id: "CAMP-16",
    title: "MASTERMIUM ARCHITECT (MEMBERSHIP)",
    category: "MEMBERSHIP",
    tier: "MASTERMIUM",
    desc: "Prémiové systémové členstvo OS Genesis: MASTERMIUM ARCHITECT (MEMBERSHIP).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/16-master-architect-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/9x16_shorts/16-master-architect-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/16-master-architect-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/zip-all-formaty/16-master-architect_all-formats.zip",
    },
  },
  {
    id: "CAMP-17",
    title: "NEXUS FOUNDER'S PACK (Lifetime Access)",
    category: "PACKS",
    tier: "MASTERMIUM",
    desc: "Kreditný balík OC pre nákup aktív: NEXUS FOUNDER'S PACK (Lifetime Access).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/17-nexus-founder-s-pack-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/17-nexus-founder-s-pack-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/17-nexus-founder-s-pack-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/17-nexus-founder-s-pack_all-formats.zip",
    },
  },
  {
    id: "CAMP-18",
    title: "POCKET PACK (500 OC)",
    category: "PACKS",
    tier: "FREE",
    desc: "Kreditný balík OC pre nákup aktív: POCKET PACK (500 OC).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/18-pocket-pack-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/18-pocket-pack-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/18-pocket-pack-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/18-pocket-pack_all-formats.zip",
    },
  },
  {
    id: "CAMP-19",
    title: "STARTER PACK (2 500 OC)",
    category: "PACKS",
    tier: "PROMIUM",
    desc: "Kreditný balík OC pre nákup aktív: STARTER PACK (2 500 OC).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/19-starter-pack-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/19-starter-pack-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/19-starter-pack-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/19-starter-pack_all-formats.zip",
    },
  },
  {
    id: "CAMP-20",
    title: "MARATHON PACK (5 500 OC)",
    category: "PACKS",
    tier: "PROMIUM",
    desc: "Kreditný balík OC pre nákup aktív: MARATHON PACK (5 500 OC).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/20-marathon-pack-promo-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/20-marathon-pack-promo-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/20-marathon-pack-promo-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/20-marathon-pack-promo_all-formats.zip",
    },
  },
  {
    id: "CAMP-21",
    title: "OMEGA KEY PACK (11 000 OC)",
    category: "PACKS",
    tier: "OMEGAMIUM",
    desc: "Kreditný balík OC pre nákup aktív: OMEGA KEY PACK (11 000 OC).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/21-omega-key-pack-full-access-16x9.png",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/21-omega-key-pack-full-access-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/21-omega-key-pack-full-access-16x9.png",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/21-omega-key-pack-full-access_all-formats.zip",
    },
  },
  {
    id: "CAMP-09",
    title: "09. OMEGA MATRIX FX BUNDLE (8v1 Komplet)",
    category: "MATRIX",
    tier: "OMEGAMIUM",
    desc: "Kompletná kolekcia 8x Matrix FX vizuálnych anomálií a systémových efektov OS Genesis v jednom balíku.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/09.%20OMEGA_MATRIX_FX_BUNDLE_%288v1%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/09-OMEGA-MATRIX-FX-BUNDLE-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/09-OMEGA-MATRIX-FX-BUNDLE-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/09-OMEGA-MATRIX-FX-BUNDLE_all-formats.zip",
    },
  },
  {
    id: "CAMP-23",
    title: "23. MATRIX FX: Biometric Scan",
    category: "MATRIX",
    tier: "FREE",
    desc: "Kognitívny Painkiller a biometrický skener pre okamžitú verifikáciu identity operátora.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/23-BIOMETRIC-SCAN-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/23-BIOMETRIC-SCAN-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/23-BIOMETRIC-SCAN-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/23-BIOMETRIC-SCAN_all-formats.zip",
    },
  },
  {
    id: "CAMP-24",
    title: "24. MATRIX FX: Network Short Circuit",
    category: "MATRIX",
    tier: "FREEMIUM",
    desc: "Elektrizujúci systémový skrat a kognitívny šok pre tvrdý reset sieťových uzlov.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/24.%20NETWORK_SHORT_CIRCUIT-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/24-NETWORK-SHORT-CIRCUIT-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/24-NETWORK-SHORT-CIRCUIT-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/24-NETWORK-SHORT-CIRCUIT_all-formats.zip",
    },
  },
  {
    id: "CAMP-25",
    title: "25. MATRIX FX: CRT Signal Interference",
    category: "MATRIX",
    tier: "PROMIUM",
    desc: "Sémantický Error modul a CRT interferencia pre prekonanie kognitívneho odporu.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/25.%20CRT_SIGNAL_INTERFERENCE-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/25-CRT-SIGNAL-INTERFERENCE-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/25-CRT-SIGNAL-INTERFERENCE-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/25-CRT-SIGNAL-INTERFERENCE_all-formats.zip",
    },
  },
  {
    id: "CAMP-26",
    title: "26. MATRIX FX: Power Surge Detected",
    category: "MATRIX",
    tier: "PROMIUM",
    desc: "Elektromagnetický výkonový impulz a prepäťový šok pre zmazanie šumu v podvedomí.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/26.%20POWER_SURGE_DETECTED-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/26-POWER-SURGE-DETECTED-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/26-POWER-SURGE-DETECTED-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/26-POWER-SURGE-DETECTED_all-formats.zip",
    },
  },
  {
    id: "CAMP-27",
    title: "27. MATRIX FX: Decrypting Data Nodes",
    category: "MATRIX",
    tier: "OMEGAMIUM",
    desc: "Analytický dešifrovací štartér pre rozšifrovanie a odblokovanie chránených uzlov Siete.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/27.%20DECRYPTING_DATA_NODES-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/27-DECRYPTING-DATA-NODES-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/27-DECRYPTING-DATA-NODES-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/27-DECRYPTING-DATA-NODES_all-formats.zip",
    },
  },
  {
    id: "CAMP-28",
    title: "28. MATRIX FX: Matrix Data Overflow",
    category: "MATRIX",
    tier: "OMEGAMIUM",
    desc: "Kultový Flow-Trigger pre zaplavenie systému čistými dátami a okamžitý fokus.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/28.%20MATRIX_DATA_OVERFLOW-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/28-MATRIX-DATA-OVERFLOW-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/28-MATRIX-DATA-OVERFLOW-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/28-MATRIX-DATA-OVERFLOW_all-formats.zip",
    },
  },
  {
    id: "CAMP-29",
    title: "29. MATRIX FX: Cognitive Shield Active",
    category: "MATRIX",
    tier: "MASTERMIUM",
    desc: "Kognitívny ochranný štít OS Genesis pre kompletnú izoláciu pred vonkajšími Parazitmi.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/29.%20COGNITIVE_SHIELD_ACTIVE-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/29-COGNITIVE-SHIELD-ACTIVE-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/29-COGNITIVE-SHIELD-ACTIVE-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/29-COGNITIVE-SHIELD-ACTIVE_all-formats.zip",
    },
  },
  {
    id: "CAMP-30",
    title: "30. MATRIX FX: Neural Link Established",
    category: "MATRIX",
    tier: "MASTERMIUM",
    desc: "Najvyšší taktický neurálny uplink pre priame synchronizované prepojenie s Architektom.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/1x1_feed/30.%20NEURAL_LINK_ESTABLISHED-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/9x16_shorts/30-NEURAL-LINK-ESTABLISHED-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/16x9_desktop/30-NEURAL-LINK-ESTABLISHED-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/matrix-fxMaster/zip-all-formaty/30-NEURAL-LINK-ESTABLISHED_all-formats.zip",
    },
  },
  {
    id: "SYS-01",
    title: "SYS 01: Video Nodes (Video Rozcestník)",
    category: "SYS",
    tier: "FREE",
    desc: "Systémový modul OS Genesis: Databáza video uzlov, rozcestník video obsahu a organické rozhranie.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/1x1_feed/SYS01_VIDEO-NODES-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/9x16_shorts/SYS01_VIDEO-NODES-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop/SYS01_VIDEO-NODES-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/zip-all-formaty/SYS01_VIDEO-NODES_all-formats.zip",
    },
  },
  {
    id: "SYS-02",
    title: "SYS 02: Video Mentoring (Exkluzívne Záznamy)",
    category: "SYS",
    tier: "OMEGAMIUM",
    desc: "Systémový modul OS Genesis: Prémiové záznamy a streamy z mentoringu exkluzívne pre OMEGA operátorov.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/1x1_feed/SYS02_MENTORING-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/9x16_shorts/SYS02_MENTORING-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop/SYS02_MENTORING-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/zip-all-formaty/SYS02_MENTORING_all-formats.zip",
    },
  },
  {
    id: "SYS-03",
    title: "SYS 03: Nexus Img Gallery (Obrazová Galéria)",
    category: "SYS",
    tier: "FREE",
    desc: "Systémový modul OS Genesis: Centrálna vizuálna galéria obrázkov, štítov a kampaňových aktív.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/1x1_feed/SYS03_NEXUS-IMG-GALLERY-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/9x16_shorts/SYS03_NEXUS-IMG-GALLERY-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop/SYS03_NEXUS-IMG-GALLERY-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/zip-all-formaty/SYS03_NEXUS-IMG-GALLERY_all-formats.zip",
    },
  },
  {
    id: "SYS-04",
    title: "SYS 04: Nexus Video Gallery (Video Galéria)",
    category: "SYS",
    tier: "PROMIUM",
    desc: "Systémový modul OS Genesis: Archív 21 video kampaní, Intros a Outros sekvencií pre všetky dimenzie.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/1x1_feed/SYS04_NEXUS-VIDEO-GALLERY-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/9x16_shorts/SYS04_NEXUS-VIDEO-GALLERY-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop/SYS04_NEXUS-VIDEO-GALLERY-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/zip-all-formaty/SYS04_NEXUS-VIDEO-GALLERY_all-formats.zip",
    },
  },
  {
    id: "SYS-05",
    title: "SYS 05: Master Directory (Centrálny Register)",
    category: "SYS",
    tier: "FREEMIUM",
    desc: "Systémový modul OS Genesis: Centrálny z-indexovaný register všetkých odkazov, sietí, agentúr a portov.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/1x1_feed/SYS05_MASTER-DIRECTORY-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/9x16_shorts/SYS05_MASTER-DIRECTORY-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop/SYS05_MASTER-DIRECTORY-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/zip-all-formaty/SYS05_MASTER-DIRECTORY_all-formats.zip",
    },
  },
  {
    id: "SYS-STANDBY",
    title: "System Standby Signal (Default Anchor)",
    category: "SYS",
    tier: "FREE",
    desc: "Pohotovostný systémový signál a predvolená vizuálna kotva OS Genesis.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/system-standby_image/1x1_feed/system-standby-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/system-standby_image/9x16_shorts/system-standby-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/system-standby_image/16x9_desktop/system-standby-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/system-standby_image/zip-all-formaty/system-standby_all-formats.zip",
    },
  },
  {
    id: "PAGE-01",
    title: "HomePage (Nexus Home Gateway)",
    category: "PAGES",
    tier: "FREE",
    desc: "Vizuálny štít a kampaňový port pre úvodnú bránu NEXUS OS Genesis Gateway.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/01.%20homePage-%28NEXUS_HOME_GATEWAY%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/homePage-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/homePage-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/homePage_all-formats.zip",
    },
  },
  {
    id: "PAGE-02",
    title: "ShopPage (Merchant Terminal)",
    category: "PAGES",
    tier: "FREE",
    desc: "Vizuálny štít pre obchodný terminál NEXUS Shop a nákupné okno.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/02.%20ShopPage-%28MERCHANT_TERMINAL%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/ShopPage-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/ShopPage-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/ShopPage_all-formats.zip",
    },
  },
  {
    id: "PAGE-03",
    title: "OperatorsPage (Entity Grid)",
    category: "PAGES",
    tier: "PROMIUM",
    desc: "Riadiaci port pre operátorské avatary, B2B špecifikácie a prístupové roly.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/03.%20OperatorsPage-%28ENTITY_GRID%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/OperatorsPage-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/OperatorsPage-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/OperatorsPage_all-formats.zip",
    },
  },
  {
    id: "PAGE-04",
    title: "SettingsPage (Core Setup)",
    category: "PAGES",
    tier: "PROMIUM",
    desc: "Systémový port pre konfiguračné matrice, API kľúče a nastavenie terminálu.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/04.%20SettingsPage-%28CORE_SETUP%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/SettingsPage-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/SettingsPage-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/SettingsPage_all-formats.zip",
    },
  },
  {
    id: "PAGE-05",
    title: "UplinkModal (Security Gate)",
    category: "PAGES",
    tier: "OMEGAMIUM",
    desc: "Bezpečnostný modálny port pre verifikáciu identity a šifrovaný uplink.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/05.%20UplinkModal-%28SECURITY_GATE%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/UplinkModal-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/UplinkModal-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/UplinkModal_all-formats.zip",
    },
  },
  {
    id: "PAGE-06",
    title: "BlogPage (Semantic Broadcast)",
    category: "PAGES",
    tier: "FREEMIUM",
    desc: "Sémantický vysielací port pre satelitné články a obsahový kanál OS Genesis.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/06.%20BlogPage-%28SEMANTIC_BROADCAST%29-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/BlogPage-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/BlogPage-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/BlogPage_all-formats.zip",
    },
  },
  {
    id: "PAGE-07",
    title: "ShopAudioMedia (Audio Sub-Terminal)",
    category: "PAGES",
    tier: "PROMIUM",
    desc: "Špeciálny pod-terminál pre správu hudobných skladieb a zvukových assetov.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/ShopAudioMedia-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/ShopAudioMedia.jpg-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/ShopAudioMedia-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/ShopAudioMedia_all-formats.zip",
    },
  },
  {
    id: "PAGE-08",
    title: "ShopDocumentsMedia (Documents Sub-Terminal)",
    category: "PAGES",
    tier: "MASTERMIUM",
    desc: "Špeciálny pod-terminál pre 69 Kódexov, PDF e-booky a PPTX prezentácie.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/ShopDocumentsMedia-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/ShopDocumentsMedia-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/ShopDocumentsMedia-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/ShopDocumentsMedia_all-formats.zip",
    },
  },
  {
    id: "PAGE-09",
    title: "ShopImageMedia (Image Sub-Terminal)",
    category: "PAGES",
    tier: "PROMIUM",
    desc: "Špeciálny pod-terminál pre vizuálne galérie, obrázky a kampaňové bannery.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/ShopImageMedia-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/ShopImageMedia-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/ShopImageMedia-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/ShopImageMedia_all-formats.zip",
    },
  },
  {
    id: "PAGE-10",
    title: "ShopVideoMedia (Video Sub-Terminal)",
    category: "PAGES",
    tier: "MASTERMIUM",
    desc: "Špeciálny pod-terminál pre kampaňové videá, intrová a outrová multimédiá.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/1x1_feed/ShopVideoMedia-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/9x16_shorts/ShopVideoMedia-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/ShopVideoMedia-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/zip-all-formaty/ShopVideoMedia_all-formats.zip",
    },
  },
  {
    id: "AGENCY-01",
    title: "Jednočlenná IT Armáda (Nexus Agency)",
    category: "AGENCY",
    tier: "PROMIUM",
    desc: "Vizuálny štít a kampaňový profil pre vývojovú architektúru Jednočlenná IT Armáda.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/1x1_feed/Jedno-clenna_IT-Armada.jpg-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/9x16_shorts/Jedno-clenna_IT-Armada-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/16x9_desktop/Jedno-clenna_IT-Armada-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/zip-all-formaty/Jedno-clenna_IT-Armada_all-formats.zip",
    },
  },
  {
    id: "AGENCY-02",
    title: "Sídlo Architekta (Nexus Agency Headquarters)",
    category: "AGENCY",
    tier: "MASTERMIUM",
    desc: "Vizuálny štít pre riadiace sídlo Architekta a hlavný uzol Nexus Agency.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/1x1_feed/Sidlo-Architekta.jpg-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/9x16_shorts/Sidlo-Architekta-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/16x9_desktop/Sidlo-Architekta-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/zip-all-formaty/Sidlo-Architekta_all-formats.zip",
    },
  },
  {
    id: "AGENCY-AVATAR",
    title: "Nexus Agency Master Avatar",
    category: "AGENCY",
    tier: "OMEGAMIUM",
    desc: "Oficiálny identitný avatar a reprezentatívny profil Nexus Agency.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/documents/nexusAgency_avatar.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/documents/nexusAgency_avatar.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/documents/nexusAgency_avatar.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/nexus-agency_Master/documents/nexusAgency_avatar.jpg",
    },
  },

  {
    id: "DOC-32B17",
    title:
      "Robert T. Kiyosaki: Cashflow Kvadrant - Defragmentácia Vzorcov (ID08)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Robert T. Kiyosaki: Cashflow Kvadrant - Defragmentácia Vzorcov (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/kiyosaki-32b17-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/kiyosaki-32b17-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/kiyosaki-32b17-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B17_Semantic_Elevator_32B17.zip",
    },
  },
  {
    id: "DOC-32B18",
    title: "4 vznešené pravdy Budhy: Safe Mode Protocols (ID08)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: 4 vznešené pravdy Budhy: Safe Mode Protocols (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/budha-32b18-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/budha-32b18-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/budha-32b18-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B18_OS_Genesis_Buddha_Protocol.zip",
    },
  },
  {
    id: "DOC-32B",
    title: "THE DEAD BOOKS ARCHIVE [Master Kampaň pre Knižnicu] (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: THE DEAD BOOKS ARCHIVE [Master Kampaň pre Knižnicu] (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/dead-books-archive-32b-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/dead-books-archive-32b-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/dead-books-archive-32b-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B_ID08_DEAD_BOOKS_ARCHIVE.zip",
    },
  },
  {
    id: "DOC-32B1",
    title: "Eckhart Tolle: Sila Prítomnosti - Zen Override (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Eckhart Tolle: Sila Prítomnosti - Zen Override (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/tolle-32b1-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/tolle-32b1-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/tolle-32b1-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B1_CYBERNETIC_ZEN_OVERRIDE.zip",
    },
  },
  {
    id: "DOC-32B2",
    title: "Osho: Medikament Meditácie - System Override (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Osho: Medikament Meditácie - System Override (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/osho-32b2-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/osho-32b2-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/osho-32b2-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B2_OSHO_SYSTEM_OVERRIDE.zip",
    },
  },
  {
    id: "DOC-32B3",
    title: "Miguel Ruiz: Štyri Toltécke Firewally (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Miguel Ruiz: Štyri Toltécke Firewally (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/ruiz-32b3-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/ruiz-32b3-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/ruiz-32b3-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B3_Toltec_Security_Patch.zip",
    },
  },
  {
    id: "DOC-32B4",
    title: "C.G. Jung: Integrácia Tieňa - Shadow Kernel Patch (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: C.G. Jung: Integrácia Tieňa - Shadow Kernel Patch (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/jung-32b4-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/jung-32b49x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/jung-32b4-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B4_SHADOW_KERNEL_PATCH.zip",
    },
  },
  {
    id: "DOC-32B5",
    title: "Mantak Chia: Taoistická Alchýmia Energie (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Mantak Chia: Taoistická Alchýmia Energie (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/chia-32b5-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/chia-32b5-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/chia-32b5-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B5_NEXUS_PROTOCOL_ID08.zip",
    },
  },
  {
    id: "DOC-32B6",
    title: "Dr. Joseph Murphy: Moc Podvedomia - Prepis Kódu (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Dr. Joseph Murphy: Moc Podvedomia - Prepis Kódu (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/murphy-32b6-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/murphy-32b6-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/murphy-32b6-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B6_SEMANTIC_ELEVATOR_32B6.zip",
    },
  },
  {
    id: "DOC-32B7",
    title: "Kurt Tepperwein: Mentálny Tréning - Kalibrácia Biosu (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Kurt Tepperwein: Mentálny Tréning - Kalibrácia Biosu (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/tepperwein-32b7-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/tepperwein-32b7-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/tepperwein-32b7-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B7_TEPPERWEIN_BIOS_CALIBRATION.zip",
    },
  },
  {
    id: "DOC-32B8",
    title: "Michael Newton: Putovanie Duší - Kód Svedka (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Michael Newton: Putovanie Duší - Kód Svedka (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/newton-32b8-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/newton-32b8-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/newton-32b8-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B8_SEMANTIC_LIFT_32B8.zip",
    },
  },
  {
    id: "DOC-32B9",
    title: "Viktor E. Frankl: Hľadanie Zmyslu - Logotherapy Patch (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Viktor E. Frankl: Hľadanie Zmyslu - Logotherapy Patch (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/frankl-32b9-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/frankl-32b9-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/frankl-32b9-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B9_Logotherapy_System_Patch.zip",
    },
  },
  {
    id: "DOC-32B10",
    title: "Sigmund Freud: Dekonštrukcia Ega - Ego Override (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Sigmund Freud: Dekonštrukcia Ega - Ego Override (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/freud-32b10-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/freud-32b10-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/freud-32b10-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B10_EGO_OVERRIDE.zip",
    },
  },
  {
    id: "DOC-32B11",
    title: "Daniel Kahneman: Myslenie Rýchle a Pomalé - System 1 & 2 (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Daniel Kahneman: Myslenie Rýchle a Pomalé - System 1 & 2 (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/kahneman-32b11-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/kahneman-32b11-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/kahneman-32b11-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B11_KAHNEMAN_PATCH_32B11.zip",
    },
  },
  {
    id: "DOC-32B12",
    title: "Adžán Ča & Sujiva: Vipassana Ticho - Cyber Zen (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Adžán Ča & Sujiva: Vipassana Ticho - Cyber Zen (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/sujiva-32b12-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/sujiva-32b12-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/sujiva-32b12-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B12_Cyber_Zen_Defragmentation.zip",
    },
  },
  {
    id: "DOC-32B13",
    title: "Dale Carnegie: Ako Získať Priateľov - P2P Handshake (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Dale Carnegie: Ako Získať Priateľov - P2P Handshake (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/carnegie-32b13-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/carnegie-32b13-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/carnegie-32b13-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B13_Carnegie_P2P_Protocol.zip",
    },
  },
  {
    id: "DOC-32B14",
    title: "George S. Clason: Najbohatší Muž v Babylone - Root Protocol (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: George S. Clason: Najbohatší Muž v Babylone - Root Protocol (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/clason-32b14-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/clason-32b14-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/clason-32b14-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B14_OS_Genesis_Root_Protocol.zip",
    },
  },
  {
    id: "DOC-32B15",
    title: "Napoleon Hill: Mysli a Zbohatni - Obsession Code (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Napoleon Hill: Mysli a Zbohatni - Obsession Code (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/hill-32b15-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/hill-32b15-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/hill-32b15-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B15_OBSESSION_CODE.zip",
    },
  },
  {
    id: "DOC-32B16",
    title: "Neale Donald Walsch: Rozhovory s Bohom - Walsch Protocol (ID08)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Neale Donald Walsch: Rozhovory s Bohom - Walsch Protocol (ID08).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/walsch-32b16-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/walsch-32b16-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/walsch-32b16-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32B16_The_Walsch_Protocol.zip",
    },
  },
  {
    id: "DOC-32A",
    title: "NEXUS MASTER CODEX [Early Access] (ID12)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS MASTER CODEX [Early Access] (ID12).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/1x1_feed/nexus- master-codex-32a-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/9x16_shorts/nexus-master-codex-32a-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-01/16x9_desktop/nexus-master-codex-32a-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32A_Nexus_Master_Codex.zip",
    },
  },
  {
    id: "DOC-32L",
    title: "Stop Parazitovi & Deconstruction of Ego (ID01)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Stop Parazitovi & Deconstruction of Ego (ID01).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/stop-parazitovi-32l-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/stop-parazitovi-32l-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/stop-parazitovi-32l-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32L_IDENTITY_CORE_ID01.zip",
    },
  },
  {
    id: "DOC-32M",
    title: "Sémantické Vysielanie & Budovanie Kmeňa (ID14)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Sémantické Vysielanie & Budovanie Kmeňa (ID14).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/semantic-broadcasting-32m-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/semantic-broadcasting-32m-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/semantic-broadcasting-32m-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32M_Semantic_Broadcasting_Protocol.zip",
    },
  },
  {
    id: "DOC-32C",
    title: "The-Workflow & System Reboot (ID02)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: The-Workflow & System Reboot (ID02).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/system-reboot-32c-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/system-reboot-32c-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/system-reboot-32c-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32C_ID02_WORKFLOW_ENGINE.zip",
    },
  },
  {
    id: "DOC-32G",
    title: "CoDM Damage-Run Architektúra (ID09)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: CoDM Damage-Run Architektúra (ID09).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/sergeant-core-32g-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/sergeant-core-32g-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/sergeant-core-32g-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32G_ID09_Sergeant-Core_Blueprint.zip",
    },
  },
  {
    id: "DOC-32D",
    title: "Cash-Engine & Dlhová Defragmentácia (ID03)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Cash-Engine & Dlhová Defragmentácia (ID03).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/cash-engine-32d-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/cash-engine-32d-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/cash-engine-32d-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32D_CASH_ENGINE_ID_03.zip",
    },
  },
  {
    id: "DOC-32E",
    title: "Trojan Horse Advertising & Neuromarketing (ID04)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Trojan Horse Advertising & Neuromarketing (ID04).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/trojan-horse-32e-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/trojan-horse-32e-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/trojan-horse-32e-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32E_The_Trojan_Horse_Protocol.zip",
    },
  },
  {
    id: "DOC-32F",
    title: "Kognitívny Overclocking & Absorpcia Dát (ID06)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Kognitívny Overclocking & Absorpcia Dát (ID06).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/data-absorber-32f-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/data-absorber-32f-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/data-absorber-32f-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32F_ID06_DATA_ABSORBER.zip",
    },
  },
  {
    id: "DOC-32H",
    title: "Poprava Insomnie & Shutdown Protokol (ID11)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Poprava Insomnie & Shutdown Protokol (ID11).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/insomnia-shutdown-32h-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/insomnia-shutdown-32h-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/insomnia-shutdown-32h-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32H_ID11_SHUTDOWN_PROTOCOL.zip",
    },
  },
  {
    id: "DOC-32J",
    title: "IT-Skills Tree & Git Deployment (ID07)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: IT-Skills Tree & Git Deployment (ID07).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/skills-tree-32j-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/skills-tree-32j-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/skills-tree-32j-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32J_ID07_TECH_BLUEPRINT.zip",
    },
  },
  {
    id: "DOC-32I",
    title: "Assets-Matrix & Globálna Alokácia (ID05)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Assets-Matrix & Globálna Alokácia (ID05).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/assets-matrix-32i-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/assets-matrix-32i-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/assets-matrix-32i-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32I_ID05_Assets_Matrix.zip",
    },
  },
  {
    id: "DOC-32K",
    title: "Time Architect & Habit Stacking (ID13)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Time Architect & Habit Stacking (ID13).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/1x1_feed/time-architect-32k-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/9x16_shorts/time-architect-32k-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-02/16x9_desktop/time-architect-32k-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32K_NEXUS_HABITS_DATA_BOOK.zip",
    },
  },
  {
    id: "DOC-32N",
    title: "Dekonštrukcia Ega & Tvorba Avatara (ID01)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Dekonštrukcia Ega & Tvorba Avatara (ID01).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/1x1_feed/dekonstrukcia-ega-32n-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/9x16_shorts/dekonstrukcia-ega-32n-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/16x9_desktop/dekonstrukcia-ega-32n-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32N_ID01_IDENTITY_CORE.zip",
    },
  },
  {
    id: "DOC-32S",
    title: "Sémantické Vysielanie & Budovanie Kmeňa (ID14)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Sémantické Vysielanie & Budovanie Kmeňa (ID14).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/1x1_feed/semanticke-vysielanie-32s-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/9x16_shorts/semanticke-vysielanie-32s-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/16x9_desktop/semanticke-vysielanie-32s-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32S_OS_Genesis_ID14_Protocol.zip",
    },
  },
  {
    id: "DOC-32P",
    title: "Prompt Engineering & AI Kódovanie (ID07)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Prompt Engineering & AI Kódovanie (ID07).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/1x1_feed/Prompt-engineering-32p-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/9x16_shorts/prompt-engineering-32p-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/16x9_desktop/prompt-engineering-32p-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32P_ID07_AI_Protocol.zip",
    },
  },
  {
    id: "DOC-32O",
    title: "Investičný Firewall & DCA Stratégia (ID05)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Investičný Firewall & DCA Stratégia (ID05).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/1x1_feed/investicny-firewall-32o-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/9x16_shorts/investicny-firewall-32o-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/16x9_desktop/investicny-firewall-32o-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32O_ASSETS_MATRIX_PROTOCOL.zip",
    },
  },
  {
    id: "DOC-32R",
    title: "Habit Stacking & Denná Architektúra (ID13)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: Habit Stacking & Denná Architektúra (ID13).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/1x1_feed/habit-stacking-32r-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/9x16_shorts/habit-stacking-32r-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-03/16x9_desktop/habit-stacking-32r-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/32R_NEXUS_HABIT_PROTOCOLS.zip",
    },
  },
  {
    id: "DOC-33A",
    title: "NEXUS WEB APP [PRO Licencia]",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS WEB APP [PRO Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-web-app-PROMIUM-33a-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-web-app-pro-33a-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-web-app-pro-33a-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/33A_NEXUS_PRO_SYSTEM_DEPLOYMENT.zip",
    },
  },
  {
    id: "DOC-34A",
    title: "NEXUS MOB APP [PRO Licencia]",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS MOB APP [PRO Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-mob-app-PROMIUM-34a-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-mob-app-pro-34a-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-mob-app-pro-34a-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/34A_Nexus_Pro_Deployment.zip",
    },
  },
  {
    id: "DOC-35A",
    title: "NEXUS DESK APP [PRO Licencia]",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS DESK APP [PRO Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-desk-app-PROMIUM-35a-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-desk-app-pro-35a-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-desk-app-pro-35a-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/35A_NEXUS_PRO_TERMINAL.zip",
    },
  },
  {
    id: "DOC-33B",
    title: "NEXUS WEB APP [OMEGA Licencia]",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS WEB APP [OMEGA Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-web-app-OMEGAMIUM-33b-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-web-app-omega-33b-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-web-app-omega-33b-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/33B_NEXUS_OMEGA_PROTOCOL.zip",
    },
  },
  {
    id: "DOC-34B",
    title: "NEXUS MOB APP [OMEGA Licencia]",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS MOB APP [OMEGA Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-mob-app-OMEGAMIUM-34b-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-mob-app-omega-34b-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-mob-app-omega-34b-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/34B_Nexus_Omega_Protocol.zip",
    },
  },
  {
    id: "DOC-35B",
    title: "NEXUS DESK APP [OMEGA Licencia]",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS DESK APP [OMEGA Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-desk-app-OMEGAMIUM-35b-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-desk-app-omega-35b-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-desk-app-omega-35b-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/35B_NEXUS_OMEGA_DEPLOYMENT.zip",
    },
  },
  {
    id: "DOC-33C",
    title: "NEXUS WEB APP [MASTER Licencia]",
    category: "DOCUMENTS",
    tier: "MASTERMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS WEB APP [MASTER Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-web-app- MASTERMIUM -33c-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-web-app-master-33c-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-web-app-master-33c-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/33C_NEXUS_MASTER_PROTOCOL.zip",
    },
  },
  {
    id: "DOC-34C",
    title: "NEXUS MOB APP [MASTER Licencia]",
    category: "DOCUMENTS",
    tier: "MASTERMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS MOB APP [MASTER Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-mob-app- MASTERMIUM -34c-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-mob-app-master-34c-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-mob-app-master-34c-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/34C_Nexus_Mobile_Protocol.zip",
    },
  },
  {
    id: "DOC-35C",
    title: "NEXUS DESK APP [MASTER Licencia]",
    category: "DOCUMENTS",
    tier: "MASTERMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS DESK APP [MASTER Licencia].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/1x1_feed/nexus-desk-app- MASTERMIUM -35c-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/9x16_shorts/nexus-desk-app-master-35c-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-04/16x9_desktop/nexus-desk-app-master-35c-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/35C_NEXUS_MASTER_PROTOCOL.zip",
    },
  },
  {
    id: "DOC-36A",
    title: "OSOBNÝ MENTORING [60 Minút] (OC SLUŽBY)",
    category: "DOCUMENTS",
    tier: "MASTERMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: OSOBNÝ MENTORING [60 Minút] (OC SLUŽBY).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-05/1x1_feed/osobny-mentoring-36a-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-05/9x16_shorts/osobny-mentoring-36a-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-05/16x9_desktop/osobny-mentoring-36a-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/36A_ROOT_ACCESS_36A.zip",
    },
  },
  {
    id: "DOC-36B",
    title: "B2B FRANŠÍZOVÉ PORADENSTVO [Discovery Call]",
    category: "DOCUMENTS",
    tier: "MASTERMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: B2B FRANŠÍZOVÉ PORADENSTVO [Discovery Call].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-05/1x1_feed/b2b-fransizove-poradenstvo-36b-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-05/9x16_shorts/b2b-fransizove-poradenstvo-36b-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-05/16x9_desktop/b2b-fransizove-poradenstvo-36b-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/36B_NEXUS_OS_GENESIS.zip",
    },
  },
  {
    id: "DOC-37A",
    title: "PROJEKT NEXUS OS: GENESIS EDITION",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: PROJEKT NEXUS OS: GENESIS EDITION.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/1x1_feed/Projekt-nexus-os-37a-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/9x16_shorts/projekt-nexus-os-37a-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/16x9_desktop/projekt-nexus-os-37a-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/37A_Nexus_OS_Genesis.zip",
    },
  },
  {
    id: "DOC-37B",
    title: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS AGENCY DIGITAL INFRASTRUCTURE.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/1x1_feed/nexus-agency-37b-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/9x16_shorts/nexus-agency-37b-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/16x9_desktop/nexus-agency-37b-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/37B_NEXUS_SURGICAL_PROTOCOL.zip",
    },
  },
  {
    id: "DOC-37C",
    title: "UNIFIKOVANÁ ŠTRUKTÚRA 5 KARIET",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: UNIFIKOVANÁ ŠTRUKTÚRA 5 KARIET.",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/1x1_feed/unifikovana-struktura-37c-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/9x16_shorts/unifikovana-struktura-37c-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/16x9_desktop/unifikovana-struktura-37c-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/37C_Nexus_5_Card_Matrix.zip",
    },
  },
  {
    id: "DOC-37D",
    title: "[ 🆔 LEVEL 48 - CYBERTECH ARCHITECT ]",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: [ 🆔 LEVEL 48 - CYBERTECH ARCHITECT ].",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/1x1_feed/cybertech-architect-37d-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/9x16_shorts/cybertech-architect-37d-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-06/16x9_desktop/cybertech-architect-37d-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/37D_Nexus_Genesis.zip",
    },
  },
  {
    id: "DOC-38A",
    title: "NEXUS LEXIKÓN (Sémantický Prekladač)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS LEXIKÓN (Sémantický Prekladač).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-07/1x1_feed/nexus-lexikon-38a-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-07/9x16_shorts/nexus-lexikon-38a-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-07/16x9_desktop/nexus-lexikon-38a-19x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/38A_Nexus_Lexikon.zip",
    },
  },
  {
    id: "DOC-38B",
    title: "NEXUS LEXICON - OPERATING MANUAL (Operačný Manuál Bytia)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: NEXUS LEXICON - OPERATING MANUAL (Operačný Manuál Bytia).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-07/1x1_feed/operating-manual-38b-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-07/9x16_shorts/operating-manual-38b-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-07/16x9_desktop/operating-manual-38b-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/38B_NEXUS_LEXICON_38B.zip",
    },
  },
  {
    id: "DOC-ID01",
    title: "KAMPAŇ ID01: IDENTITY-CORE (100 Nodes)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID01: IDENTITY-CORE (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/identity-core-id01-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/identity-core-id01-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/identity-core-id01-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID01_IDENTITY_CORE.zip",
    },
  },
  {
    id: "DOC-ID10",
    title: "KAMPAŇ ID10: NONIDENTITY-CORE (100 Nodes)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID10: NONIDENTITY-CORE (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/nonidentity-core-id10-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/nonidentity-core-id10-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/nonidentity-core-id10-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID10_Nonidentity_Core.zip",
    },
  },
  {
    id: "DOC-ID14",
    title: "KAMPAŇ ID14: NEXUS-BLOG (100 Nodes)",
    category: "DOCUMENTS",
    tier: "FREE",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID14: NEXUS-BLOG (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/nexus-blog-id14-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/nexus-blog-id14-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/nexus-blog-id14-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID14_NEXUS_TRANSMISSION.zip",
    },
  },
  {
    id: "DOC-ID00",
    title: "KAMPAŇ ID00: MENTOR HUB (100 AI Transcripts)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID00: MENTOR HUB (100 AI Transcripts).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/mentor-hub-id00-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/mentor-hub-id00-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/mentor-hub-id00-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID00_MENTOR_HUB.zip",
    },
  },
  {
    id: "DOC-ID02",
    title: "KAMPAŇ ID02: THE-WORKFLOW (100 Nodes)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID02: THE-WORKFLOW (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/the-workflow-id02-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/the-workflow-id02-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/the-workflow-id02-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID02_EXECUTION_ENGINE.zip",
    },
  },
  {
    id: "DOC-ID08",
    title: "KAMPAŇ ID08: EMPTY-BOOK (100 Nodes)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID08: EMPTY-BOOK (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/empty-book-id08-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/empty-book-id08-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/empty-book-id08-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID08_EMPTY_BOOK_PROTOCOL.zip",
    },
  },
  {
    id: "DOC-ID09",
    title: "KAMPAŇ ID09: SERGEANT-CORE (100 Nodes)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID09: SERGEANT-CORE (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/sergeant-core-id09-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/sergeant-core-id09-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/sergeant-core-id09-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID09_Sergeant-Core_Tactical_Protocol.zip",
    },
  },
  {
    id: "DOC-ID15",
    title: "KAMPAŇ ID15: DEATH-CORE (100 Nodes)",
    category: "DOCUMENTS",
    tier: "FREEMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID15: DEATH-CORE (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/death-core-id15-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/death-core-id15-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/death-core-id15-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID15_Death_Core.zip",
    },
  },
  {
    id: "DOC-ID03",
    title: "KAMPAŇ ID03: CASH-ENGINE (100 Nodes)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID03: CASH-ENGINE (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/cash-engine-id03-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/cash-engine-id03-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/cash-engine-id03-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID03_CASH_ENGINE.zip",
    },
  },
  {
    id: "DOC-ID04",
    title: "KAMPAŇ ID04: REVENUE-ARCHITECT (100 Nodes)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID04: REVENUE-ARCHITECT (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/revenue-architect-id04-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/revenue-architect-id04-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/revenue-architect-id04-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID04_REVENUE_ARCHITECT.zip",
    },
  },
  {
    id: "DOC-ID06",
    title: "KAMPAŇ ID06: DATA-ABSORBER (100 Nodes)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID06: DATA-ABSORBER (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/data-absorber-id06-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/data-absorber-id06-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/data-absorber-id06-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID06_NEXUS_DATA_ABSORBER.zip",
    },
  },
  {
    id: "DOC-ID07",
    title: "KAMPAŇ ID07: SKILLS-TREE (100 Nodes)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID07: SKILLS-TREE (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/skills-tree-id07-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/skills-tree-id07-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/skills-tree-id07-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID07_SKILLS_TREE.zip",
    },
  },
  {
    id: "DOC-ID11",
    title: "KAMPAŇ ID11: THE-RECOVERY (100 Nodes)",
    category: "DOCUMENTS",
    tier: "PROMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID11: THE-RECOVERY (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/the-recovery-id11-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/the-recovery-id11-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/the-recovery-id11-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID11_SYSTEM_RECOVERY.zip",
    },
  },
  {
    id: "DOC-ID05",
    title: "KAMPAŇ ID05: ASSETS-MATRIX (100 Nodes)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID05: ASSETS-MATRIX (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/assets-matrix-id05-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/assets-matrix-id05-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/assets-matrix-id05-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID05_ASSETS_MATRIX.zip",
    },
  },
  {
    id: "DOC-ID12",
    title: "KAMPAŇ ID12: NEXUS-CODEX (100 Nodes)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID12: NEXUS-CODEX (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/nexus-codex-id12-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/nexus-codex-id12-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/nexus-codex-id12-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID12_NEXUS_CODEX.zip",
    },
  },
  {
    id: "DOC-ID13",
    title: "KAMPAŇ ID13: NEXUS-HABITS (100 Nodes)",
    category: "DOCUMENTS",
    tier: "OMEGAMIUM",
    desc: "Taktický e-book a kampaňový kódex OS Genesis: KAMPAŇ ID13: NEXUS-HABITS (100 Nodes).",
    formats: {
      "1x1":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/1x1_feed/nexus-habits-id13-1x1.jpg",
      "9x16":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/9x16_shorts/nexus-habits-id13-9x16.jpg",
      "16x9":
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/documents-image-kt-01-08_Master/documents-image-kt-08/16x9_desktop/nexus-habits-id13-16x9.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/ID13_NEXUS_HABITS_UPGRADE.zip",
    },
  },
];
