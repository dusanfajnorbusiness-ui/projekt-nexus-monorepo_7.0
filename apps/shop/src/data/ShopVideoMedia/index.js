// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP VIDEO MEDIA DATA V20.22)
// File: src/data/ShopVideoMedia.js
// Status: STRICTLY GROUNDED // EXACT 40 EPISODES // 100% SPEC COMPLIANT
// ============================================================================

export const TIER_COLOR_MAP = {
  FREE: "#00f3ff",
  PRO: "#39FF14",
  OMEGA: "#FFD700",
  MASTER: "#FF003C",
};

export const getTierColor = (tierStr) => {
  if (!tierStr) return "#00f3ff";
  const t = String(tierStr).toUpperCase();
  if (t.includes("MASTER")) return TIER_COLOR_MAP.MASTER;
  if (t.includes("OMEGA")) return TIER_COLOR_MAP.OMEGA;
  if (t.includes("PRO")) return TIER_COLOR_MAP.PRO;
  return TIER_COLOR_MAP.FREE;
};

export const getDimensionColor = (dimStr) => {
  if (!dimStr) return "#FFD700";
  const d = String(dimStr).toUpperCase();
  if (d.includes("ID00")) return "#FFFFFF";
  if (d.includes("ID01")) return "#39FF14";
  if (d.includes("ID02")) return "#FFEB3B";
  if (d.includes("ID03")) return "#FFD700";
  if (d.includes("ID04")) return "#FFAA00";
  if (d.includes("ID05")) return "#FF8C00";
  if (d.includes("ID06")) return "#BF00FF";
  if (d.includes("ID07")) return "#8A2BE2";
  if (d.includes("ID08")) return "#00FFFF";
  if (d.includes("ID09")) return "#FF003C";
  if (d.includes("ID10")) return "#0044FF";
  if (d.includes("ID11")) return "#FFBF00";
  if (d.includes("ID12")) return "#00E5FF";
  if (d.includes("ID13")) return "#0055FF";
  if (d.includes("ID14")) return "#FF1493";
  if (d.includes("ID15")) return "#8A8A8A";
  return "#FFD700";
};

export const VIDEO_CATEGORY_MAP = {
  kratke: "🎬 1. Štúdio video prehľady: Krátke (20)",
  vysvetlujuce: "🎬 2. Štúdio video prehľady: Vysvetľujúci (20)",
};

export const VIDEO_CATEGORY_TOOLTIPS = {
  ALL: "Zobraziť všetky video prehľady (40 epizód)",
  kratke:
    "20 Krátkych vysoko-frekvenčných video prehľadov (3-5 minút, ToFu/MoFu)",
  vysvetlujuce:
    "20 Hĺbkových vysvetľujúcich video masterclassov mŕtvych kníh (15-20 minút)",
};

export const VIDEO_CENNIK_MATRICA = {
  konverzia: "100 OC = 1.00 € (1 OC = 0.01 €)",
  tiers: [
    {
      tier: "FREE",
      cenaOc: 0,
      cenaEur: "0.00 €",
      popis: "Zadarmo na pozretie a stiahnutie v obchode",
    },
    {
      tier: "PRO",
      cenaOc: 4900,
      cenaEur: "49.00 €",
      popis: "Stiahnutie samostatnej MP4 stopy v 1080p / 60 FPS",
    },
    {
      tier: "PRO ALL",
      cenaOc: 24500,
      cenaEur: "245.00 €",
      popis: "Zľavnený komplet PRO (50% zľava namiesto 49 000 OC)",
    },
    {
      tier: "OMEGA",
      cenaOc: 6900,
      cenaEur: "69.00 €",
      popis: "VIP Trezorové MP4 video v master kvalite",
    },
    {
      tier: "OMEGA ALL",
      cenaOc: 25900,
      cenaEur: "259.00 €",
      popis: "Zľavnený komplet OMEGA (60% zľava namiesto 69 000 OC)",
    },
    {
      tier: "MASTER",
      cenaOc: 9900,
      cenaEur: "99.00 €",
      popis: "Root Access MP4 video + kompletný kódovací kód",
    },
    {
      tier: "MASTER ALL",
      cenaOc: 29900,
      cenaEur: "299.00 €",
      popis: "Zľavnený komplet MASTER (70% zľava namiesto 99 000 OC)",
    },
  ],
};

export const SHOP_VIDEO_SECTIONS = [
  {
    catKey: "kratke",
    catTitle:
      "🎬 1. Štúdio video prehľady: Krátke - TIER FREE | PRO | OMEGA | MASTER",
    catDesc:
      "Krátke, vysoko-frekvenčné vizuálne spúšťače (3-5 minút) zamerané na bleskový bypass kognitívneho odporu a nastolenie sústredenia.",
    items: [
      {
        code: "1.1",
        title: 'Epizóda: "WHITE MONOLITH INJECTOR"',
        subtitle: "ID00 - Mentor-Hub",
        tier: "FREE",
        priceOc: 0,
        priceEur: "0.00 €",
        duration: "03:15 min",
        desc: "Návrat do tichého stavu Zdroja a nadviazanie spojenia s asynchrónnym Mentor-Hubom.",
      },
      {
        code: "1.2",
        title: 'Epizóda: "NEON IDENTITY FORGE"',
        subtitle: "ID01 - Identity-Core",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "04:20 min",
        desc: "Dekonštrukcia starého ega a kódovanie nového suverénneho avatara.",
      },
      {
        code: "1.3",
        title: 'Epizóda: "THE WORKFLOW REBOOT"',
        subtitle: "ID02 - The-Workflow",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "03:45 min",
        desc: "Likvidácia prokrastinácie a nasadenie neľútostného exekučného cyklu.",
      },
      {
        code: "1.4",
        title: 'Epizóda: "CASHFLOW VAULT OVERWRITE"',
        subtitle: "ID03 - Cash-Engine",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "04:10 min",
        desc: "Vymazanie dlhových vzorcov a stabilizácia finančného prúdu.",
      },
      {
        code: "1.5",
        title: 'Epizóda: "ORANGE REVENUE ARCHITECT"',
        subtitle: "ID04 - Revenue-Architect",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "05:00 min",
        desc: "Budovanie marketingových lievikov a asynchrónnych predajných systémov.",
      },
      {
        code: "1.6",
        title: 'Epizóda: "GLOBAL ASSET GEOMETRY"',
        subtitle: "ID05 - Assets-Matrix",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "04:30 min",
        desc: "Globálna alokácia kapitálu, Cold Storage a DCA stratégia.",
      },
      {
        code: "1.7",
        title: 'Epizóda: "NEURO-ABSORBER INSTANCE"',
        subtitle: "ID06 - Data-Absorber",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "03:50 min",
        desc: "Kognitívny overclocking a blesková absorpcia knižničných dát.",
      },
      {
        code: "1.8",
        title: 'Epizóda: "BLUE-VIOLET ROOT FORGE"',
        subtitle: "ID07 - Skills-Tree",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "04:15 min",
        desc: "Mastering AI promptovania, ReactJS a Git deploymentu.",
      },
      {
        code: "1.9",
        title: 'Epizóda: "CYAN VACUUM PROTOCOL"',
        subtitle: "ID08 - Empty-Book",
        tier: "FREE",
        priceOc: 0,
        priceEur: "0.00 €",
        duration: "03:00 min",
        desc: "Vákuový reset a vymazanie kognitívneho spamu z mysle.",
      },
      {
        code: "1.10",
        title: 'Epizóda: "COMBAT RADAR SYSTEM"',
        subtitle: "ID09 - Sergeant-Core",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "04:05 min",
        desc: "CoDM Zombies damage-run taktika a bojová architektúra.",
      },
      {
        code: "1.11",
        title: 'Epizóda: "NON-IDENTITY SILENT SWITCH"',
        subtitle: "ID10 - NonIdentity-Core",
        tier: "FREE",
        priceOc: 0,
        priceEur: "0.00 €",
        duration: "03:30 min",
        desc: "Prechod do ticha mysle a uvoľnenie prehnaných emočných reakcií.",
      },
      {
        code: "1.12",
        title: 'Epizóda: "AMBER RECOVERY POD"',
        subtitle: "ID11 - The-Recovery",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "04:45 min",
        desc: "Poprava chronickej insomnie a regenerácia biologického nosiča.",
      },
      {
        code: "1.13",
        title: 'Epizóda: "TURQUOISE CODEX ENGINE"',
        subtitle: "ID12 - Nexus-Codex",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "04:15 min",
        desc: "Systémová ústava OS Genesis a nezmeniteľné kódové pravidlá.",
      },
      {
        code: "1.14",
        title: 'Epizóda: "GEAR DIAL TIME METRICS"',
        subtitle: "ID13 - Nexus-Habits",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "04:00 min",
        desc: "Time Architect, habit stacking a presná denná architektúra.",
      },
      {
        code: "1.15",
        title: 'Epizóda: "PINK SOUNDWAVE SATELLITE"',
        subtitle: "ID14 - Nexus-Blog",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "03:40 min",
        desc: "Sémantické P2P vysielanie a budovanie lojálneho Kmeňa.",
      },
      {
        code: "1.16",
        title: 'Epizóda: "DEATH CORE COOLDOWN"',
        subtitle: "ID15 - Death-Core",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "05:15 min",
        desc: "Akceptácia konečnosti, oslobodenie od strachu a transcendencia.",
      },
      {
        code: "1.17",
        title: 'Epizóda: "THE TRINITY APPS ARCHITECTURE"',
        subtitle: "Svet Božského Kódu",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "04:30 min",
        desc: "Prepojenie Web, Mobile a Desktop PWA terminálov na kľúč.",
      },
      {
        code: "1.18",
        title: 'Epizóda: "GHOST-MODE AGENCY EMULATOR"',
        subtitle: "Upratovanie Operatívy",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "04:10 min",
        desc: "Fungovanie v Ghost-Móde bez zbytočného vyjednávania a mítingov.",
      },
      {
        code: "1.19",
        title: 'Epizóda: "STARTER PACK BOOTUP SEQUENCE"',
        subtitle: "Kampaň 19 Starter Pack",
        tier: "FREE",
        priceOc: 0,
        priceEur: "0.00 €",
        duration: "03:05 min",
        desc: "Štartovací bootup pre nových operátorov vstupujúcich do Siete.",
      },
      {
        code: "1.20",
        title: 'Epizóda: "FRANCHISE ENTERPRISE UPLINK"',
        subtitle: "White-Label franšíza",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "05:30 min",
        desc: "Architektúra klonovania celého ekosystému NEXUS OS pre B2B partners.",
      },
    ],
  },
  {
    catKey: "vysvetlujuce",
    catTitle:
      "🎬 2. Štúdio video prehľady: Vysvetľujúci - TIER FREE | PRO | OMEGA | MASTER",
    catDesc:
      "Hĺbkové vizuálne dekompresie a masterclassy (15-20 minút), ktoré rozoberajú a do IT sémantiky prekladajú 20 svetových diel mŕtvych kníh.",
    items: [
      {
        code: "2.1",
        title: 'Epizóda: "ECKHART TOLLE - THE POWER OF NOW"',
        subtitle: "RAM vs HDD calibration",
        tier: "FREE",
        priceOc: 0,
        priceEur: "0.00 €",
        duration: "15:30 min",
        desc: "Ako uvoľniť 90% kognitívneho výkonu vymazaním minulých a budúcich simulácií z RAM.",
      },
      {
        code: "2.2",
        title: 'Epizóda: "OSHO - TERMINATING THE INTERNAL COMMENTATOR"',
        subtitle: "The Silent Witness",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "16:45 min",
        desc: "Odinštalovanie vnútorného kritika a prechod do chodu tichého svedka.",
      },
      {
        code: "2.3",
        title: 'Epizóda: "DON MIGUEL RUIZ - TOLTEC SSL PROTOCOLS"',
        subtitle: "4 Firewally pre tvoj Skafander",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "17:10 min",
        desc: "Toltécke dohody ako 4 bezpečnostné SSL vrstvy pre ochranu Skafandra.",
      },
      {
        code: "2.4",
        title: 'Epizóda: "CARL GUSTAV JUNG - SHADOW DECOMPRESSION"',
        subtitle: "Integration of HDD data",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "18:20 min",
        desc: "Integrácia potlačených dát z tieňa do aktívneho vedomého systému.",
      },
      {
        code: "2.5",
        title:
          'Epizóda: "DR. JOSEPH MURPHY - PROGRAMMING THE SUBCONSCIOUS BACKEND"',
        subtitle: "Memory Overwrite",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "15:50 min",
        desc: "Preprogramovanie podvedomého backendu a prepísanie starých registrov.",
      },
      {
        code: "2.6",
        title: 'Epizóda: "KURT TEPPERWEIN - SYSTEM BIOS CALIBRATION"',
        subtitle: "Manual Hardware Control",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "16:15 min",
        desc: "Ručné prebratie kontroly nad hardvérom a vymazanie podmienených reakcií.",
      },
      {
        code: "2.7",
        title: 'Epizóda: "MICHAEL NEWTON - SOUL CLUSTER VLAN INTEGRATION"',
        subtitle: "End of Game Over Panic",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "19:10 min",
        desc: "Klastrová analýza duší a eliminácia strachu z konečného 'Game Over'.",
      },
      {
        code: "2.8",
        title: 'Epizóda: "VIKTOR E. FRANKL - EXISTENTIAL EXECUTiVE"',
        subtitle: "Meaning in Hell of Matrix",
        tier: "FREE",
        priceOc: 0,
        priceEur: "0.00 €",
        duration: "17:30 min",
        desc: "Nájdenie neochvejného zmyslu bytia aj v tých najťažších podmienkach Matrixu.",
      },
      {
        code: "2.9",
        title: 'Epizóda: "SIGMUND FREUD - ID/EGO MATRIX DEBUGGER"',
        subtitle: "Deconstructing Superego Malware",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "18:00 min",
        desc: "Psychoanalytická dekonštrukcia potlačených konfliktov a malvéru superega.",
      },
      {
        code: "2.10",
        title: 'Epizóda: "DANIEL KAHNEMAN - SYSTEM 1 & 2 COPROCESSOR"',
        subtitle: "Cognitive Cycle Optimization",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "16:50 min",
        desc: "Optimalizácia koprocesora: Rýchle intuitívne Systém 1 vs Pomalé analytické Systém 2.",
      },
      {
        code: "2.11",
        title: 'Epizóda: "ADŽÁN ČA - THE STILL FOREST POOL"',
        subtitle: "Sensory Overload Filter",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "15:40 min",
        desc: "Filtrácia senzorického preťaženia a vytvorenie nepohnutej hladiny vnímania.",
      },
      {
        code: "2.12",
        title: 'Epizóda: "DALE CARNEGIE - HUMAN P2P INTERACTION PROTOCOLS"',
        subtitle: "Ego Firewall Bypass",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "17:15 min",
        desc: "Obchádzanie obranného firewallu ega pri medziľudských P2P komunikáciách.",
      },
      {
        code: "2.13",
        title: 'Epizóda: "GEORGE S. CLASON - THE BABYLON TREASURY ENGINE"',
        subtitle: "10% Automated Outflow",
        tier: "PRO",
        priceOc: 4900,
        priceEur: "49.00 €",
        duration: "16:20 min",
        desc: "Automatické 10% odklánanie príjmu pre budovanie nezávislej pokladnice.",
      },
      {
        code: "2.14",
        title: 'Epizóda: "NAPOLEON HILL - OBSESSION ENGINE PROTOCOL"',
        subtitle: "Overwriting Registry of Lack",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "18:40 min",
        desc: "Prepísanie podvedomých registrov nedostatku na obsesívny motor úspechu.",
      },
      {
        code: "2.15",
        title:
          'Epizóda: "NEALE DONALD WALSCH - CONVERSATIONS WITH MAIN ENGINE"',
        subtitle: "Uninstalling Guilt",
        tier: "OMEGA",
        priceOc: 6900,
        priceEur: "69.00 €",
        duration: "19:30 min",
        desc: "Odinštalovanie viny, dogiem a strachu z trestu cez priamy rozhovor so Zdrojom.",
      },
      {
        code: "2.16",
        title: 'Epizóda: "ROBERT T. KIYOSAKI - CASHFLOW QUADRANT REBOOT"',
        subtitle: "Uninstalling Legacy Poor Habits",
        tier: "FREE",
        priceOc: 0,
        priceEur: "0.00 €",
        duration: "17:00 min",
        desc: "Odinštalovanie chudobného firmware a prechod z ľavej strany kvadrantu na pravú.",
      },
      {
        code: "2.17",
        title: 'Epizóda: "BUDDHA - THE ZERO STATE PROTOCOL"',
        subtitle: "Ending 100% CPU Suffering",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "20:00 min",
        desc: "4 vznešené pravdy ako nulový stav: Ukončenie 100% CPU trpenia a túžby.",
      },
      {
        code: "2.18",
        title: 'Epizóda: "MANTAK CHIA - ENERGY RETENTION VALVE"',
        subtitle: "Locking Lower Bus Channels",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "18:15 min",
        desc: "Uzamknutie spodných energetických kanálov a presun surového prúdu do hlavy.",
      },
      {
        code: "2.19",
        title: 'Epizóda: "LAO TZU - WU-WEI DYNAMICS"',
        subtitle: "Maximum Performance with 0 Fuel",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "19:00 min",
        desc: "Dynamika konania nekonaním: Maximálny výstup s nulovým pálením biologického paliva.",
      },
      {
        code: "2.20",
        title: 'Epizóda: "MARCUS AURELIUS - THE STOIC COMMANDER"',
        subtitle: "Daily CPU Log Write",
        tier: "MASTER",
        priceOc: 9900,
        priceEur: "99.00 €",
        duration: "19:45 min",
        desc: "Denný stoický zápisník: Udržiavanie pokoja a disciplíny v strede vojny Matrixu.",
      },
    ],
  },
];

export const SHOP_VIDEO_DATA = SHOP_VIDEO_SECTIONS.flatMap(
  (section) => section.items,
);

export const ShopVideoMediaData = SHOP_VIDEO_DATA;
export default SHOP_VIDEO_DATA;
