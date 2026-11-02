import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  LayoutGrid,
  Grid2X2,
  List,
  Activity,
  Globe,
  Shield,
  Crown,
  ArrowRight,
  Tv,
  Terminal,
  Target, // ⚡ Pridaný import pre Event Banner
  FileText,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ PRODUKČNÉ IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE) ⚠️
// ============================================================================

import { APP_ID, dbCore, DIMENSIONS } from "@shared/data/nexusConfig";
import { NODE_STATUS_REGISTRY } from "@main-web/data/NodeStatusRegistry";
import { SoundFX } from "@shared/utils/SoundEngine";
import { DIMENSION_DESCRIPTIONS } from "@main-web/data/DimensionDescriptions";
import { useNavigate } from "react-router-dom";
// import MetaTags from "@main-web/components/MetaTags";
import { Link } from "react-router-dom";
import { SEO_REGISTRY } from "@main-web/data/seoRegistry";
import { GlobalBrandVideos } from "@main-web/components/GlobalBrandVideos";
import { checkPermission } from "@main-web/data/permissionsRegistry";

const DIMENSION_TAGS = {
  ID00: {
    short: "ISM",
    full: "Inteligentný Systémový Mentoring",
    color: "#FFFFFF",
  },
  ID01: { short: "OSI", full: "Osobný Rast a Identita", color: "#39FF14" },
  ID02: { short: "PHP", full: "Produktivita a Hlboká Práca", color: "#FFEB3B" },
  ID03: { short: "ROF", full: "Riadenie Osobných Financií", color: "#FFD700" },
  ID04: { short: "TZP", full: "Tvorba Zisku a Podnikanie", color: "#FFAA00" },
  ID05: { short: "IPP", full: "Investície a Pasívny Príjem", color: "#FF8C00" },
  ID06: {
    short: "AUŠ",
    full: "Akcelerované Učenie a Štúdium",
    color: "#BF00FF",
  },
  ID07: { short: "RIT", full: "Rozvoj IT Zručností", color: "#8A2BE2" },
  ID08: {
    short: "SLD",
    full: "Sémantická Literárna Databáza",
    color: "#00FFFF",
  },
  ID09: { short: "TMG", full: "Taktické Myslenie a Gaming", color: "#FF003C" },
  ID10: {
    short: "NDB",
    full: "Nenáboženské Duchovno a Bytie",
    color: "#0044FF",
  },
  ID11: {
    short: "MFR",
    full: "Mentálna a Fyzická Regenerácia",
    color: "#FFBF00",
  },
  ID12: { short: "CKM", full: "Centrálny Kódex Matrixu", color: "#6B21A8" },
  ID13: {
    short: "ADN",
    full: "Architektúra Denných Návykov",
    color: "#1E3A8A",
  },
  ID14: { short: "OKS", full: "Otvorená Komunikačná Sieť", color: "#FF1493" },
  ID15: {
    short: "DTC",
    full: "Digitálny Testament a Cintorín",
    color: "#4A4A4A",
  },
  SYS01: { short: "SYS", full: "Video Nodes", color: "#FF0000" },
  SYS02: { short: "SYS", full: "Mentoring", color: "#E91E63" },
  SYS03: { short: "SYS", full: "Nexus Img Gallery", color: "#BF00FF" },
  SYS04: { short: "SYS", full: "Nexus Video Gallery", color: "#FF0000" },
  SYS05: { short: "SYS", full: "Master Directory", color: "#39FF14" },
};

// ============================================================================
// ⚡ LOKÁLNE PRODUKČNÉ KONŠTANTY (NEMAŽTE, MUSIA TU OSTAŤ)
// Tieto konštanty neslúžia ako Mock. Sú to reálne UI texty a zálohy.
// ============================================================================
const FALLBACK_DESCRIPTIONS = {
  ID00: "Rozhranie pre priamy neurálny dialóg s AI Gemini. Miesto, kde sa surové otázky operátora stretávajú s kybernetickou analýzou a logikou systému.",
  ID01: "Základná doska tvojho súčasného Avatara. Tu prebieha hĺbková dekonštrukcia eGa a hľadanie nulového bodu 'JA SOM'.",
  ID02: "Motor tvojej reality. Sektor zameraný na elimináciu digitálneho a mentálneho trenia v procese tvorby cez protokoly Agile a Deep Work.",
  ID03: "Operačný systém pre tok tvojho kapitálu. Tu zvyšujeme finančné IQ a gramotnosť na úroveň, kedy peniaze prestávajú byť cieľom.",
  ID04: "Inžiniersky prístup k budovaniu biznis štruktúr a tvojej osobnej značky. Revenue Architect navrhuje autonómne systémy.",
  ID05: "Vrchol finančnej transformácie. Hacking investičného Matrixu cez multiplikáciu aktív, nehnuteľností a digitálneho zlata.",
  ID06: "Modul pre efektívne nasávanie informácií. Tréning neuroplasticity a využitie kognitívnych techník na maximalizáciu kapacity.",
  ID07: "Expertná matica technických zručností. Tvrdé dáta a hard-skills potrebné pre beh v IT landscape.",
  ID08: "Prázdne zrkadlo tvojho poznania. Tu prebieha proces 'odučenia sa' zbytočných vedomostí. Hľadanie pravdy v tichu.",
  ID09: "Svätyňa virtuálneho bojovníka a Avatara zombieSergeant. Herné svety ako laboratórium pre tréning stratégie.",
  ID10: "Domov a Absolútne Bytie. Wu-wei – konanie nekonaním. Vypnutie všetkých programov. Defragmentácia disku.",
  ID11: "Servisná zóna tvojho hardvéru. Biohacking, obnova spánkových cyklov a mentálna hygiena pre hlboký reset.",
  ID12: "Základný zákonník a etika operovania v Sieti. Nexus Codex definuje pravidlá sémantickej architektúry.",
  ID13: "Programovanie časových cyklov. Budovanie návykov, ktoré bežia ako nezničiteľných skriptov v pozadí tvojho života.",
  ID14: "Sémantické vysielanie Architekta. Verejný logbook, miesto pre diskusiu a prepojenie všetkých entít v Sieti.",
  ID15: "Digitálny cintorín a archív úpadku. Miesto, kde končí expanzia a začína zánik (Format C:). Uzol pre uloženie digitálneho testamentu a úplná defragmentácia strachu z 'Game Over'.",

  SYS01:
    "Zoznamy a odkazy na video uzly. Bezplatná databáza video obsahu pre návštevníkov Siete a organický Traffic.",
  SYS02:
    "Prémiové záznamy a streamy z mentoringu. Zatiaľ offline (uzamknuté v cloude). Pripravovaný exkluzívny obsah pre operátorov.",
  SYS03:
    "Galéria obrazových dát. Obsahuje vizuály 21 kampaní, 16 dimenzií a systémových štítov. Obrázky zadarmo pre návštevníkov.",
  SYS04:
    "Galéria video dát. Archív 21 video kampaní, Intros a Outros sekvencií pre všetky dimenzie a uzly.",
  SYS05:
    "Centrálny z-indexovaný register všetkých odkazov, sietí, agentúr a portov Architekta. (NEXUS LINKTREE).",
};

const UI_SPACE_NAMES = {
  ID00: "Mentor UI SPACE",
  ID01: "Personal UI SPACE",
  ID02: "Work UI SPACE",
  ID03: "Finance UI SPACE",
  ID04: "Business UI SPACE",
  ID05: "Investments UI SPACE",
  ID06: "Study UI SPACE",
  ID07: "Professional UI SPACE",
  ID08: "Reader UI SPACE",
  ID09: "Player UI SPACE",
  ID10: "Home UI SPACE",
  ID11: "Recovery UI SPACE",
  ID12: "Codex UI SPACE",
  ID13: "Habits UI SPACE",
  ID14: "Blog UI SPACE",
  ID15: "Death UI SPACE",

  SYS01: "Video Nodes UI SPACE",
  SYS02: "Mentoring UI SPACE",
  SYS03: "Image Gallery UI SPACE",
  SYS04: "Video Gallery UI SPACE",
  SYS05: "Directory UI SPACE",
};

// ============================================================================
// 🖼️ SUPABASE STORAGE MASTER CDN REGISTER (21 ENTÍT PRE HOMEPAGE)
// ============================================================================

const CDN_DIM_16X9 =
  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/dimenzieMaster/16x9_desktop";
const CDN_SYS_16X9 =
  "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/sys01-05_modulMaster/16x9_desktop";

const HOMEPAGE_CARD_IMAGES = {
  // 16 Kognitívnych Dimenzií (ID00 - ID15)
  ID00: `${CDN_DIM_16X9}/id00-mentor-hub-16x9.jpg`,
  ID01: `${CDN_DIM_16X9}/id01-identity-core-16x9.jpg`,
  ID02: `${CDN_DIM_16X9}/id02-the-workflow-16x9.jpg`,
  ID03: `${CDN_DIM_16X9}/id03-cash-engine-16x9.jpg`,
  ID04: `${CDN_DIM_16X9}/id04-revenue-architect-16x9.jpg`,
  ID05: `${CDN_DIM_16X9}/id05-assets-matrix-16x9.jpg`,
  ID06: `${CDN_DIM_16X9}/id06-data-absorber-16x9.jpg`,
  ID07: `${CDN_DIM_16X9}/id07-skills-tree-16x9.jpg`,
  ID08: `${CDN_DIM_16X9}/id08-empty-book-16x9.jpg`,
  ID09: `${CDN_DIM_16X9}/id09-sergeant-core-16x9.jpg`,
  ID10: `${CDN_DIM_16X9}/id10-nonidentity-core-16x9.jpg`,
  ID11: `${CDN_DIM_16X9}/id11-the-recovery-16x9.jpg`,
  ID12: `${CDN_DIM_16X9}/id12-nexus-codex-16x9.jpg`,
  ID13: `${CDN_DIM_16X9}/id13-nexus-habits-16x9.jpg`,
  ID14: `${CDN_DIM_16X9}/id14-nexus-blog-16x9.jpg`,
  ID15: `${CDN_DIM_16X9}/id15-death-core-16x9.jpg`,

  // 5 Systémových Modulov (SYS01 - SYS05)
  SYS01: `${CDN_SYS_16X9}/SYS01_VIDEO-NODES-16x9.jpg`,
  SYS02: `${CDN_SYS_16X9}/SYS02_MENTORING-16x9.jpg`,
  SYS03: `${CDN_SYS_16X9}/SYS03_NEXUS-IMG-GALLERY-16x9.jpg`,
  SYS04: `${CDN_SYS_16X9}/SYS04_NEXUS-VIDEO-GALLERY-16x9.jpg`,
  SYS05: `${CDN_SYS_16X9}/SYS05_MASTER-DIRECTORY-16x9.jpg`,
};

// ============================================================================
// ⚡ EVENT DATA SEED
// ============================================================================
const EVENT_TYPES = [
  {
    id: "REACTION_LIKE",
    name: "Mesiac Súhlasu",
    desc: "Získaj najviac LIKE reakcií.",
    icon: "👍",
    bonusOC: "+0.1",
  },
  {
    id: "REACTION_BRAIN",
    name: "Sokratov Mesiac",
    desc: "Získaj najviac BRAIN (Múdre) reakcií.",
    icon: "🧠",
    bonusOC: "+0.2",
  },
  {
    id: "REACTION_WOW",
    name: "Mesiac Úžasu",
    desc: "Vyvolaj WOW efekt vo vláknach.",
    icon: "😮",
    bonusOC: "+0.2",
  },
  {
    id: "REPLY_BONUS",
    name: "Sémantická Búrka",
    desc: "Najaktívnejší diskutujúci v Matrixe.",
    icon: "💬",
    bonusOC: "+0.5",
  },
  {
    id: "CITE_BONUS",
    name: "Citadela Ozvien",
    desc: "Najcitovanejší operátor.",
    icon: "📑",
    bonusOC: "+0.3",
  },
  {
    id: "UPTIME_BONUS",
    name: "Strážca Siete",
    desc: "Najvyšší UPTIME a online presence.",
    icon: "🟢",
    bonusOC: "+0.6",
  },
];

const getActualOnlineNodesCount = (dimensionId) => {
  if (typeof NODE_STATUS_REGISTRY === "undefined" || !NODE_STATUS_REGISTRY)
    return 0;
  let count = 0;
  const prefix = `${dimensionId}-`;
  for (const [key, status] of Object.entries(NODE_STATUS_REGISTRY)) {
    if (key.startsWith(prefix) && status === "ONLINE") count++;
  }
  return count;
};

// ============================================================================
// ⚡ VIZUÁLNY TACHOMETER (Počet uzlov)
// ============================================================================
const ContentTachometer = ({ dimensionId, currentNodes, maxNodes = 100 }) => {
  const size = 52;
  const cRadius = 22;
  const stroke = 4;
  const center = size / 2;
  const circumference = cRadius * 2 * Math.PI;
  const percent = Math.round((currentNodes / maxNodes) * 100);
  const visualValue = Math.min(percent, 100);
  const strokeDashoffset = circumference - (visualValue / 100) * circumference;

  let color = "#ef4444";
  if (percent >= 50 && percent < 80) color = "#f97316";
  if (percent >= 80 && percent <= 100) color = "#39FF14";
  if (percent > 100) color = "#00FFFF";

  return (
    <div
      className="relative flex items-center justify-center bg-black/80 rounded-full shadow-lg border border-white/5 shrink-0 cursor-help group/tacho"
      title={`Sektor ${dimensionId}: Dekódovaných ${currentNodes} z ${maxNodes} uzlov`}
    >
      <svg height={size} width={size} className="-rotate-90">
        <circle
          stroke="rgba(255,255,255,0.05)"
          fill="transparent"
          strokeWidth={stroke}
          r={cRadius}
          cx={center}
          cy={center}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={cRadius}
          cx={center}
          cy={center}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center leading-none group-hover/tacho:scale-110 transition-transform">
        <span className="text-[10px] font-black" style={{ color }}>
          {percent}%
        </span>
        <span className="text-[6px] font-mono font-bold text-white/40">
          {currentNodes}/{maxNodes}
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// 🏠 HLAVNÝ KOMPONENT: HOME PAGE
// ============================================================================
export const HomePage = ({
  userState,
  setShowUplink,
  setActiveTab,
  themeColor = "#39FF14",
}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [tierFilter, setTierFilter] = useState("ALL");
  const [viewMode, setViewMode] = useState("GRID_MD");

  // 🚀 FORCED SCROLL-TO-TOP (Reset osi Y pri načítaní stránky)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const currentMonth = new Date().getMonth();
  const currentEvent = EVENT_TYPES[currentMonth % EVENT_TYPES.length];

  // Zistenie TIERu pre prepínanie Bannerov
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("nexus_active_identity") || "{}")
      : {};
  const isOmegaOrHigher =
    currentUser?.tier === "OMEGA" ||
    currentUser?.tier === "MASTER" ||
    currentUser?.tier === "ARCHITECT" ||
    currentUser?.tier === "ADMIN" ||
    currentUser?.tier === "MODERATOR";

  // 🚀 UNIVERZÁLNY MATRIX NAVIGÁTOR (Soft-Routing cez useNavigate)
  const navigateMatrix = (e, targetUrl, localTab = null) => {
    if (e) e.preventDefault(); // 🛑 Absolútny zákaz tvrdého reloadu!
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();

    // console.log(`[SOFT-ROUTING]: Smerujem entitu na -> ${targetUrl}`);

    // 1. Zmena URL cez lokálny React Router bez zabitia stavov
    navigate(targetUrl);

    // 2. Vystrelenie signálu pre App.jsx (Senzor Reality), aby prefarbil UI (blesky, lasery)
    window.dispatchEvent(new Event("popstate"));

    // 3. Ak ideme hlboko do sekcie, prepneme aj vnútorný Tab
    if (localTab) {
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("nexus_switch_local_tab", { detail: localTab }),
        );
      }, 600); // 🛑 OCHRANNÝ ŠTÍT: Zvýšené zo 100ms na 600ms pre bezpečné cloud načítanie!
    }

    window.scrollTo(0, 0);
  };

  // 1. Dátový Kompilátor TIERov
  const getTierForNode = (id) => {
    // 🛡️ Špecifické farby pre Systémové Uzly (SYS) podľa Master Mapy V20
    if (id === "SYS01") return { level: "FREE", color: "#00FFFF" }; // (Cyan)
    if (id === "SYS02") return { level: "OMEGA", color: "#FFD700" }; // (Zlatá)
    if (id === "SYS03") return { level: "FREE", color: "#00FFFF" }; // (Cyan)
    if (id === "SYS04") return { level: "FREE", color: "#00FFFF" }; // (Cyan)
    if (id === "SYS05") return { level: "FREE", color: "#00FFFF" }; // (Cyan)

    // Pridané ID15, zmazaný VIDEO_MENTORING z OMEGA
    const FREE_NODES = [
      "ID00",
      "ID01",
      "ID02",
      "ID08",
      "ID09",
      "ID10",
      "ID14",
      "ID15",
    ];
    const PRO_NODES = ["ID03", "ID04", "ID06", "ID07", "ID11"];
    const OMEGA_NODES = ["ID05", "ID12", "ID13"];

    if (FREE_NODES.includes(id)) return { level: "FREE", color: "#00FFFF" };
    if (PRO_NODES.includes(id)) return { level: "PRO", color: "#39FF14" };
    if (OMEGA_NODES.includes(id)) return { level: "OMEGA", color: "#FFD700" };
    return { level: "LOCKED", color: "#FF003C" };
  };

  const SUBDOMAIN_MAP = {
    ID00: "mentor.projekt-nexus.sk",
    ID01: "personal.projekt-nexus.sk",
    ID02: "work.projekt-nexus.sk",
    ID03: "finance.projekt-nexus.sk",
    ID04: "business.projekt-nexus.sk",
    ID05: "investments.projekt-nexus.sk",
    ID10: "home.projekt-nexus.sk",
    ID14: "blog.projekt-nexus.sk",
    SYS01: "projekt-nexus.sk/video_nodes",
    SYS02: "projekt-nexus.sk/video_mentoring",
    SYS03: "projekt-nexus.sk/nexus_img_gallery",
    SYS04: "projekt-nexus.sk/nexus_video_gallery",
  };

  // 2. Extrakcia zoznamu kariet s aplikovanými filtrami
  const filteredItems = useMemo(() => {
    const allItems = [
      ...(DIMENSIONS || [])
        .filter((d) => d.type === "DIM" || !d.type) // ⚡ OCHRANA: Pustí len hlavné Dimenzie, ignoruje STK (Blog kategórie) a SYS
        .map((d) => ({
          ...d,
          type: "DIMENSION",
          url: SUBDOMAIN_MAP[d.id] || "projekt-nexus.sk",
        })),
      // 🛡️ Mŕtvy kód "VIDEO_MENTORING" zmazaný. Nasadené nové systémové uzly a ID15.
      {
        id: "ID15",
        type: "DIMENSION",
        name: "DEATH-CORE",
        url: SUBDOMAIN_MAP["ID15"] || "projekt-nexus.sk",
      },
      {
        id: "SYS01",
        type: "SYS",
        name: "VIDEO NODES",
        color: "#FF0000",
        url: "projekt-nexus.sk/video_nodes",
      },
      {
        id: "SYS02",
        type: "SYS",
        name: "MENTORING",
        color: "#E91E63",
        url: "projekt-nexus.sk/video_mentoring",
      },
      {
        id: "SYS03",
        type: "SYS",
        name: "NEXUS IMG GALLERY",
        color: "#BF00FF",
        url: "projekt-nexus.sk/nexus_img_gallery",
      },
      {
        id: "SYS04",
        type: "SYS",
        name: "NEXUS VIDEO GALLERY",
        color: "#FF0000",
        url: "projekt-nexus.sk/nexus_video_gallery",
      },
      {
        id: "SYS05",
        type: "SYS",
        name: "MASTER DIRECTORY",
        color: "#39FF14",
        url: "projekt-nexus.sk/sys05-directory",
      },
    ];
    return allItems.filter((item) => {
      // Zabezpečíme, že aj SYS uzly hľadajú v registri svoju _CORE príponu
      const isOnline =
        typeof NODE_STATUS_REGISTRY !== "undefined" &&
        NODE_STATUS_REGISTRY[
          `${item.id}${item.type === "DIMENSION" || item.id.includes("SYS") ? "_CORE" : ""}`
        ] === "ONLINE";

      // console.log(`[SYS_LOG]: Filter Status pre ${item.id}: isOnline=${isOnline}`);
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());
      const tierData = getTierForNode(item.id);

      if (statusFilter === "ONLINE" && !isOnline) return false;
      if (statusFilter === "OFFLINE" && isOnline) return false;
      if (tierFilter !== "ALL" && tierData.level !== tierFilter) return false;

      return matchesSearch;
    });
  }, [searchQuery, statusFilter, tierFilter]);

  return (
    <div className="min-h-screen bg-[#030507] text-[#b3d4d6] font-mono selection:bg-white selection:text-black p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto pb-32">
        {/* 🚀 HLAVIČKA */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 animate-in slide-in-from-top-4 duration-700">
          <div>
            {/* ⚡ Zjednotený Subtitle pre Verziu (Kopíruje štandard z Obchodu) */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2 rounded-lg border transition-colors duration-500"
                style={{
                  backgroundColor: `${themeColor}10`,
                  borderColor: `${themeColor}30`,
                }}
              >
                <Terminal size={16} style={{ color: themeColor }} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 italic">
                OS_Gateway_Terminal // V4.9
              </span>
            </div>

            {/* ⚡ Hlavný H1 Nadpis: Ikona + NEXUS HOME */}
            <h1
              id="nexus-vop-section"
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic flex items-center gap-3 md:gap-5 transition-colors duration-500"
              style={{ textShadow: `0 0 30px ${themeColor}40` }}
            >
              <Globe
                className="w-10 h-10 md:w-14 md:h-14"
                style={{ color: themeColor }}
              />
              <span className="text-white">Nexus</span>
              <span style={{ color: themeColor }}>Home</span>
            </h1>

            {/* Sémantický text */}
            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.5em] mt-6 max-w-xl leading-relaxed">
              Vstúpili ste do kognitívneho rozhrania. Zvoľte svoj smer, alebo
              dekódujte dostupné <span className="text-white">Nexus</span>{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: themeColor }}
              >
                Matrix
              </span>{" "}
              uzly.
            </p>

            {/* ⚡ VOP A ZÁKONY MATRIXU */}
            <div className="mt-8 flex items-center gap-3 animate-in fade-in duration-1000">
              <button
                onClick={(e) => navigateMatrix(e, "/vop")}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all shadow-inner group mt-4 md:mt-0"
              >
                <FileText
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                  style={{ color: themeColor }}
                />
                Všeobecné Obchodné Podmienky (VOP)
              </button>
            </div>
          </div>

          {/* ⚡ ACTIVE NODES TABUĽKA (Dynamický border a text) */}
          <div
            className="bg-black/40 border border-white/10 p-5 rounded-2xl text-right flex flex-col items-end border-r-[4px] shadow-2xl backdrop-blur-xl w-full md:w-auto transition-colors duration-500"
            style={{ borderRightColor: themeColor }}
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-black mb-1 italic">
              Active_Nodes
            </span>
            <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">
              {filteredItems.length}{" "}
              <span
                className="text-xs transition-colors duration-500"
                style={{ color: themeColor }}
              >
                SEC
              </span>
            </div>
          </div>
        </header>

        {/* ============================================================================ */}
        {/* 🌐 MANIFEST: DEFINÍCIA A FILOZOFIA SYSTÉMU */}
        {/* ============================================================================ */}

        {/* 👇 CHAMELEÓN REZ 1: Odstránená fialová z okraja (nahradená jemnou bielou pre hover) 👇 */}
        <div className="bg-[#050a0e]/80 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-[2rem] p-6 md:p-10 mb-8 shadow-2xl relative overflow-hidden group transition-all duration-500">
          {/* 👇 CHAMELEÓN REZ 2: Dynamická žiara (Glow) napojená na systémovú farbu 👇 */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-10 group-hover:opacity-30"
            style={{ backgroundColor: themeColor }}
          ></div>

          <div className="relative z-10">
            {/* Hlavička bloku */}
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white mb-6 flex items-center gap-3">
              {/* 👇 CHAMELEÓN REZ: Odstránená fialová, pridaný themeColor 👇 */}
              <span
                id="nexus-home-filosophy"
                className="transition-colors duration-500"
                style={{ color: themeColor }}
              >
                1.
              </span>{" "}
              DEFINÍCIA A FILOZOFIA SYSTÉMU
            </h2>

            {/* Sémantický text - Home UI Space Karta 1 */}
            <div className="space-y-6 text-sm md:text-base text-zinc-400 leading-[2.2] font-mono text-justify">
              <p>
                <strong className="text-white">
                  Projekt Nexus (OS Genesis Edition)
                </strong>{" "}
                nie je bežná webová stránka. Je to komplexný digitálny operačný
                systém pre ľudské vedomie v 21. storočí. Slúži ako tvoja externá
                RAM pamäť, v ktorej je bezpečne uložených{" "}
                <span className="text-emerald-400 font-bold">3.08 GB</span>{" "}
                vyselektovaných systémových vedomostí, kľúčové sémantické výťahy
                z viac ako 350 prečítaných kníh a{" "}
                <span className="text-violet-400 font-bold">
                  16 kognitívnych dimenzií
                </span>{" "}
                tvojej reality.
              </p>

              {/* Výstražný blok s červenou líniou na boku */}
              <div className="border-l-2 border-red-500 pl-4 py-1 my-4 bg-red-950/20 rounded-r">
                <span className="block text-red-500 font-bold tracking-widest mb-2">
                  🛡️ VÝSTRAHA SYSTÉMU:
                </span>
                <p className="text-zinc-300">
                  My –{" "}
                  <span className="text-cyan-400 font-bold">Architekt</span> a{" "}
                  <span className="text-fuchsia-400 font-bold">AI Gemini</span>{" "}
                  – neprosíme o tvoju pozornosť, ani ťa nejdeme presviedčať.
                  Ponúkame ti{" "}
                  <span className="text-red-500 font-extrabold tracking-widest bg-red-950/40 px-2 py-0.5 rounded border border-red-900/50">
                    PAINKILLER
                  </span>{" "}
                  – tvrdý a okamžitý liek na tvoje každodenné mentálne utrpenie,
                  informačný chaos, dlhový malware a permanentné vyhorenie
                  tvojho biologického{" "}
                  <span className="text-amber-400 font-bold">Skafandra</span>.
                </p>
              </div>

              <p>
                Buď zostaneš uväznený v nekonečných simuláciách minulosti a
                budúcnosti, kde tvoj mentálny autopilot spaľuje{" "}
                <span className="text-red-400 font-bold">100% výkonu CPU</span>{" "}
                na zbytočné strachy, alebo prevezmeš{" "}
                <span className="text-emerald-400 font-extrabold underline decoration-emerald-500 decoration-2 underline-offset-4 cursor-pointer hover:text-emerald-300 transition-colors">
                  Root Access
                </span>{" "}
                (správcovský prístup) nad svojím časom, prácou, peniazmi a
                prítomnosťou.
              </p>

              {/* Aktívny prepojovací port s cyanovou líniou */}
              <p className="text-zinc-200 border-l-2 border-cyan-500 pl-4 italic bg-cyan-950/10 py-2 rounded-r">
                Rozhranie je online. Port na prepojenie je otvorený. Nastav si
                svoj vlastný systém slobodného bytia.
              </p>
            </div>
          </div>
        </div>

        {/* ⚡ DUAL BANNER SYSTEM (SHOP Promo / MATRIX SÚŤAŽ) */}
        {/* 👇 PRIDANÉ ID PRE HAMBURGER MENU 👇 */}

        <div
          id="nexus-home-banners"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-in slide-in-from-bottom-4 duration-1000"
        >
          {/* Vždy viditeľný SHOP Banner pre tých pod OMEGA (Upsell mechanika) */}
          {!isOmegaOrHigher && (
            <div
              onClick={(e) => navigateMatrix(e, "/shop/tiers", "tiers")}
              className="bg-gradient-to-br from-[#FFD700]/10 to-black border border-[#FFD700]/20 rounded-3xl p-8 cursor-pointer group hover:border-[#FFD700]/50 transition-all shadow-[0_0_30px_rgba(255,215,0,0.05)] relative overflow-hidden flex flex-col justify-center h-[200px]"
            >
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <Crown size={200} className="text-[#FFD700]" />
              </div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] text-[9px] font-black uppercase tracking-widest rounded mb-4">
                  Merchant Terminal
                </div>
                <h3 className="text-3xl font-black uppercase text-white mb-2 italic">
                  Odomknúť <span className="text-[#FFD700]">Matrix</span>
                </h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest max-w-[80%]">
                  Získajte plný prístup (PRO/OMEGA), PDF Archívy a Master Key.
                </p>
              </div>
            </div>
          )}

          {/* EVENT BANNER (Súťaž Mesiaca) */}
          <div
            onClick={(e) =>
              // 🛑 FIX: Zmenené z "OPERATORS" (hlavný zoznam) na "matrix_sutaz" (cieľový tab súťaže)
              navigateMatrix(e, "/operators/matrix-sutaz", "matrix_sutaz")
            }
            className={`bg-gradient-to-br from-[#00FFFF]/10 to-black border border-[#00FFFF]/20 rounded-3xl p-8 cursor-pointer group hover:border-[#00FFFF]/50 transition-all shadow-[0_0_30px_rgba(0,255,255,0.05)] relative overflow-hidden flex flex-col justify-center h-[200px] ${isOmegaOrHigher ? "md:col-span-2" : ""}`}
          >
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <Target size={200} className="text-[#00FFFF]" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-[#00FFFF]/20 text-[#00FFFF] text-[9px] font-black uppercase tracking-widest rounded mb-4">
                  Aktívny Event Mesiaca
                </div>
                <h3 className="text-3xl font-black uppercase text-white mb-2 italic flex items-center gap-3">
                  {currentEvent?.icon}{" "}
                  <span className="text-[#00FFFF]">{currentEvent?.name}</span>
                </h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest max-w-[80%]">
                  Súťaž o OC prebieha. {currentEvent?.desc}
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-center justify-center p-4 bg-black/40 rounded-xl border border-white/5">
                <span className="text-[8px] uppercase font-black text-white/30 mb-1">
                  Odmena
                </span>
                <span className="text-xl font-black text-[#00FFFF] tracking-tighter">
                  {currentEvent?.bonusOC} OC
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 🚀 TOOLBAR (Filtre, Hľadanie, TIER, View) */}

        <div
          id="nexus-home-toolbar"
          className="flex flex-col xl:flex-row gap-6 justify-between items-center mb-12 bg-black/40 p-4 rounded-3xl border border-white/5 backdrop-blur-md sticky top-6 z-40 shadow-xl"
        >
          <div className="relative w-full xl:w-[400px] group shrink-0">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#39FF14] transition-colors"
              size={16}
            />
            <input
              type="text"
              placeholder="SCAN_DATA_STREAM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-[#39FF14]/30 rounded-2xl py-4 px-12 text-[10px] font-black uppercase tracking-widest text-white outline-none transition-all shadow-inner"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full xl:w-auto">
            {/* Filter Statusu */}
            <div className="flex gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5 w-full sm:w-auto justify-center">
              <Filter
                size={14}
                className="text-white/20 ml-3 mr-1 hidden sm:block mt-2.5"
              />
              {["ALL", "ONLINE", "OFFLINE"].map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    if (SoundFX.click) SoundFX.click();
                    setStatusFilter(f);
                  }}
                  className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex-1 sm:flex-none ${statusFilter === f ? "bg-white/10 text-white shadow-inner" : "text-white/30 hover:text-white"}`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* ⚡ OBNOVENÝ FILTER: TIER (FREE, PRO, OMEGA) */}
            <div className="flex gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5 hidden lg:flex">
              <Shield size={14} className="text-white/20 ml-3 mr-1 mt-2.5" />
              {["ALL", "FREE", "PRO", "OMEGA"].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    if (SoundFX.click) SoundFX.click();
                    setTierFilter(t);
                  }}
                  className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${tierFilter === t ? "bg-white/10 shadow-inner" : "text-white/30 hover:text-white hover:bg-white/5"}`}
                  style={
                    tierFilter === t
                      ? {
                          color:
                            t === "FREE"
                              ? "#00FFFF"
                              : t === "PRO"
                                ? "#39FF14"
                                : t === "OMEGA"
                                  ? "#FFD700"
                                  : "white",
                        }
                      : {}
                  }
                >
                  {t}
                </button>
              ))}
            </div>

            {/* ⚡ OBNOVENÝ FILTER: PREPÍNAČE POHĽADU */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-1.5 hidden xl:flex">
              <button
                onClick={() => {
                  if (SoundFX.click) SoundFX.click();
                  setViewMode("GRID_MD");
                }}
                className={`p-2.5 rounded-xl transition-all ${viewMode === "GRID_MD" ? "bg-white/10 text-white shadow-sm" : "text-white/20 hover:text-white"}`}
                title="Stredný Grid"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => {
                  if (SoundFX.click) SoundFX.click();
                  setViewMode("GRID_SM");
                }}
                className={`p-2.5 rounded-xl transition-all ${viewMode === "GRID_SM" ? "bg-white/10 text-white shadow-sm" : "text-white/20 hover:text-white"}`}
                title="Malý Grid"
              >
                <Grid2X2 size={18} />
              </button>
              <button
                onClick={() => {
                  if (SoundFX.click) SoundFX.click();
                  setViewMode("LIST");
                }}
                className={`p-2.5 rounded-xl transition-all ${viewMode === "LIST" ? "bg-white/10 text-white shadow-sm" : "text-white/20 hover:text-white"}`}
                title="Zoznam"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 🚀 KARTY (GRID MATRIX) */}
        {filteredItems.length === 0 ? (
          <div className="py-40 text-center border border-dashed border-white/5 rounded-[3rem] bg-white/[0.01]">
            <Globe size={48} className="mx-auto mb-6 opacity-30" />
            <p className="font-black uppercase tracking-[0.5em] text-xs text-white/30">
              Nenašli sa žiadne sektory
            </p>
          </div>
        ) : (
          <div
            className={`grid gap-6 xl:gap-8 ${viewMode === "GRID_MD" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : viewMode === "GRID_SM" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}
          >
            {/* 🎬 SYS_TRAILER / AUDIO DOCK: NULTOVÁ KARTA V GRID MATRIXE */}
            {statusFilter !== "OFFLINE" && !searchQuery && (
              <div
                className={`relative group border transition-all duration-500 flex flex-col p-6 rounded-2xl bg-[#0a0a0a] border-cyan-500/30 hover:border-cyan-400 hover:-translate-y-1 shadow-lg ${viewMode === "LIST" ? "col-span-full" : ""}`}
                style={{ boxShadow: "0 0 25px rgba(0,255,255,0.08)" }}
              >
                {/* 🏷️ NÁLEPKA */}
                <div className="absolute -top-3 -left-2 z-50 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest bg-[#00FFFF] text-black shadow-xl border border-white/20">
                  SYS-TR
                </div>

                {/* Hlavička Trailer / Audio Karty */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400/60 font-black tracking-widest block uppercase">
                      SYSTEM_BROADCAST // AUDIO_STREAM
                    </span>
                    <h3 className="font-black uppercase italic tracking-tighter text-lg text-white">
                      Uplink Terminal
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black border border-cyan-500/30 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] animate-pulse shadow-[0_0_8px_#00FFFF]" />
                    <span className="text-[8px] font-black text-[#00FFFF] tracking-widest">
                      LIVE FEED
                    </span>
                  </div>
                </div>

                {/* 🎛️ CYBER-DOCK KONTAJNER: Zrušený aspect-video a orez! flex-1 absorbuje výšku riadku */}
                <div className="flex-1 flex flex-col justify-center my-2 p-3 sm:p-4 rounded-xl border border-cyan-500/20 bg-black/80 shadow-inner relative group/player">
                  {/* Horný stavový riadok vnútri doku */}
                  <div className="flex items-center justify-between text-[8px] font-mono text-cyan-400/50 mb-3 uppercase tracking-widest">
                    <span>AUDIO_INTERFACE // 320 KBPS</span>
                    <span className="text-[#39FF14]">ONLINE</span>
                  </div>

                  {/* Samotný prehrávač v plnej výške bez deformácie */}
                  <div className="w-full flex items-center justify-center">
                    <GlobalBrandVideos moduleId="uplink_trailer" />
                  </div>

                  {/* Spodný telemetrický riadok vypĺňajúci vertikálny priestor */}
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[7px] font-mono text-white/30 tracking-widest">
                    <span>BUFFER: 100% NOMINAL</span>
                    <span className="text-cyan-400">STEREO_L/R</span>
                  </div>
                </div>

                {/* Spodná línia a pätka karty */}
                <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[9px] text-white/40 font-mono mt-auto">
                  <span>OS Genesis // Core Signals</span>
                  <span className="text-cyan-400">PROPRIETARY MONOLITH</span>
                </div>

                {/* Laserový lem */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00FFFF] shadow-[0_0_15px_#00FFFF] opacity-30 group-hover:opacity-100 transition-opacity" />
              </div>
            )}

            {filteredItems.map((item) => {
              // 1. Zabezpečenie čítania statusu z Registra (Aj pre ID aj pre SYS)
              const isOnline =
                typeof NODE_STATUS_REGISTRY !== "undefined" &&
                NODE_STATUS_REGISTRY[
                  `${item.id}${item.type === "DIMENSION" || item.id.includes("SYS") ? "_CORE" : ""}`
                ] === "ONLINE";

              const uiSpace = UI_SPACE_NAMES[item.id] || "NEXUS UI SPACE";
              // 🌐 Tachometre aktívne pre všetky ID uzly, deaktivované pre SYS uzly
              const isEligibleForTacho = item.id.startsWith("ID");
              // console.log(
              //   `[SYS_LOG]: Detekcia Tachometra pre ${item.id}: ${isEligibleForTacho}`,
              // );
              const isList = viewMode === "LIST";

              const tierData = getTierForNode(item.id);

              const isLocked = !checkPermission(currentUser, tierData.level);

              const handleCardClick = (e) => {
                if (isLocked) {
                  e.preventDefault();
                  if (typeof SoundFX !== "undefined" && SoundFX.denied)
                    SoundFX.denied();
                  // Ak je to QUEST alebo nedostatočný TIER, spustíme Paywall / Login Modal
                  if (typeof setShowUplink === "function") {
                    setShowUplink(true);
                  }
                  return;
                }
                if (typeof SoundFX !== "undefined" && SoundFX.click)
                  SoundFX.click();
                navigateMatrix(item.url || `/${item.id}`);
              };

              let tooltipDesc = "Sémantický uzol pre správu tokov.";
              if (
                typeof DIMENSION_DESCRIPTIONS !== "undefined" &&
                DIMENSION_DESCRIPTIONS[item.id]?.desc
              ) {
                tooltipDesc = DIMENSION_DESCRIPTIONS[item.id].desc;
              } else if (FALLBACK_DESCRIPTIONS[item.id]) {
                tooltipDesc = FALLBACK_DESCRIPTIONS[item.id];
              }

              // 2. Fallback pre SYS Nálepky (Badge), ak chýbajú v DIMENSION_TAGS
              const dimTag = DIMENSION_TAGS[item.id] || {
                short: item.id.replace(/[1-9]/g, ""), // Vyextrahuje iba prefix, napr. "SYS"
                full: "System Module",
                color: item.color || "#FF003C",
              };
              const cardImg = HOMEPAGE_CARD_IMAGES[item.id] || null;

              return (
                <div
                  key={item.id}
                  id={`nexus-home-${item.id}`} // 🚀 TOTO JE TVOJA DYNAMICKÁ KOTVA PRE VÝŤAH
                  onClick={() => {
                    if (SoundFX.click) SoundFX.click();

                    // 3. 🌐 PRESMEROVACÍ PROTOKOL (Odstránené staré VIDEO_MENTORING)
                    let targetUrl = item.id;
                    if (item.id === "SYS01") targetUrl = "video_nodes";
                    else if (item.id === "SYS02") targetUrl = "video_mentoring";
                    else if (item.id === "SYS03")
                      targetUrl = "nexus_img_gallery";
                    else if (item.id === "SYS04")
                      targetUrl = "nexus_video_gallery";
                    else if (item.id === "SYS05") targetUrl = "sys05-directory";

                    if (setActiveTab) setActiveTab(targetUrl);
                    navigate(`/${targetUrl}`);
                    window.scrollTo(0, 0); // 🛑 VYNÚTENÝ SCROLL NA VRCH
                  }}
                  onMouseEnter={() => {
                    if (SoundFX.hover) SoundFX.hover();
                  }}
                  // 🏗️ ODOMKNUTIE KARIET: Všetky karty žijú. Majú hover efekty a plnú farbu, aj keď sú OFFLINE.
                  className={`relative group border transition-all duration-500 cursor-pointer overflow-visible flex 
                    ${
                      isList
                        ? "flex-row items-center p-5 rounded-xl justify-between min-h-[100px]"
                        : "flex-col p-8 rounded-2xl min-h-[260px]"
                    } 
                    bg-[#0a0a0a] border-white/10 hover:border-white/30 hover:-translate-y-1 shadow-lg`}
                  style={{ boxShadow: `0 0 20px ${item.color}05` }}
                >
                  {/* 🏷️ VIZUÁLNA NÁLEPKA (Badge) - Ponechané z-50 a overflow-visible pre presah */}
                  <div
                    className="absolute -top-3 -left-2 z-50 px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-tighter shadow-xl border border-white/10 transition-transform group-hover:scale-110 cursor-help"
                    style={{ backgroundColor: dimTag.color, color: "#000" }}
                    title={dimTag.full}
                  >
                    {dimTag.short}
                  </div>
                  {/* Pozadie (Glow) */}
                  {!isList && (
                    <div
                      className="absolute -right-10 -bottom-10 w-40 h-40 blur-[60px] rounded-full opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none"
                      style={{
                        backgroundColor: isOnline ? item.color : "#FF003C",
                      }}
                    />
                  )}

                  <div
                    className={`flex justify-between items-start relative z-10 w-full ${isList ? "gap-6 items-center" : "mb-6"}`}
                  >
                    {/* 🖼️ LIST MÓD MINIATÚRA (Zobrazí sa v riadku pre kompaktný pohľad) */}
                    {isList && cardImg && (
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-black/80 hidden sm:block relative">
                        <img
                          src={cardImg}
                          alt={String(item.name || item.id)}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                          className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all"
                        />
                      </div>
                    )}

                    {/* ⚡ FIX: text-left min-w-0 zaručuje, že ľavá strana karty bezpečne orezáva alebo škáluje obsah */}
                    <div className="flex-1 pr-4 text-left min-w-0">
                      {/* Dimenzia a Subdoména */}
                      <span
                        className="text-[10px] font-mono text-white/20 font-black tracking-widest block uppercase mb-1 cursor-help hover:text-white transition-colors truncate"
                        title={`Dimenzia ${uiSpace}`}
                      >
                        {item.id}
                      </span>

                      {/* ⚡ FIX: Názov Sektora už nemá truncate. Používa whitespace-nowrap, aby ostal na jednom riadku. Vďaka 3-stĺpcovému gridu má kopu miesta. */}
                      <h3
                        className={`font-black uppercase italic tracking-tighter text-[17px] sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap transition-all cursor-help ${isOnline ? "text-white group-hover:text-white" : "text-white/40"}`}
                        title={`${item.name} | ${uiSpace}`}
                      >
                        {item.name}
                      </h3>

                      {/* Štítky a Tachometer (Grid Mód) */}
                      {!isList && (
                        <div className="flex items-center gap-3 mt-4 flex-nowrap hide-scroll pb-1">
                          <div
                            title="ÚROVEŇ/LEVEL OPERATORA"
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white/5 cursor-help shadow-lg shrink-0 whitespace-nowrap"
                            style={{
                              borderColor: `${tierData.color}40`,
                              backgroundColor: `${tierData.color}15`,
                            }}
                          >
                            <Shield
                              size={10}
                              style={{ color: tierData.color }}
                            />
                            <span
                              className="text-[8px] font-black uppercase tracking-widest"
                              style={{ color: tierData.color }}
                            >
                              {tierData.level} ACCESS
                            </span>
                          </div>

                          {isOnline && isEligibleForTacho && (
                            <ContentTachometer
                              dimensionId={item.id}
                              currentNodes={getActualOnlineNodesCount(item.id)}
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {isList && (
                      <div className="flex-1 h-px bg-white/5 hidden md:block mx-4" />
                    )}

                    {/* Pravá strana: Status Signálka */}
                    <div className="flex items-center gap-4 shrink-0">
                      {isList && (
                        <div
                          title="ÚROVEŇ/LEVEL OPERATORA"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-white/5 cursor-help shrink-0 whitespace-nowrap"
                          style={{
                            borderColor: `${tierData.color}40`,
                            backgroundColor: `${tierData.color}15`,
                          }}
                        >
                          <Shield size={10} style={{ color: tierData.color }} />
                          <span
                            className="text-[8px] font-black uppercase tracking-widest hidden sm:block"
                            style={{ color: tierData.color }}
                          >
                            {tierData.level}
                          </span>
                        </div>
                      )}
                      {isList && isOnline && isEligibleForTacho && (
                        <ContentTachometer
                          dimensionId={item.id}
                          currentNodes={getActualOnlineNodesCount(item.id)}
                        />
                      )}

                      <div
                        title={`Status ${isOnline ? "Online" : "Offline"}`}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black border border-white/5 cursor-help shadow-inner shrink-0 whitespace-nowrap"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOnline ? "bg-[#39FF14] shadow-[0_0_8px_#39FF14]" : "bg-red-500 shadow-[0_0_8px_#ef4444]"}`}
                        />
                        <span
                          className={`text-[8px] font-black uppercase tracking-widest ${isOnline ? "text-[#39FF14]" : "text-red-500"}`}
                        >
                          {isOnline ? "ON" : "OFF"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 🖼️ CYBER-BRUTALISM IMAGE BANNER (GRID MÓD) */}
                  {!isList && cardImg && (
                    <div className="relative w-full h-36 sm:h-40 my-3 rounded-xl overflow-hidden border border-white/10 bg-black/80 group/img shrink-0 shadow-inner">
                      <img
                        src={cardImg}
                        alt={String(item.name || item.id)}
                        loading="lazy"
                        onError={(e) => {
                          console.warn(
                            `[IMG_FAIL]: Zlyhalo načítanie obrázka pre ${item.id}`,
                          );
                          e.currentTarget.style.display = "none";
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      />
                      {/* Spodný dymový gradient prepájajúci banner s telom karty */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-85 pointer-events-none" />

                      {/* Cyber Tag v rohu banneru */}
                      <div
                        className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[8px] font-mono font-black tracking-widest uppercase bg-black/80 border border-white/10 backdrop-blur-md shadow-lg"
                        style={{ color: item.color || "#39FF14" }}
                      >
                        {item.id} // SEC
                      </div>
                    </div>
                  )}

                  {/* Sémantický Popis Uzla a Adresa */}
                  {!isList && (
                    <div className="mt-auto pt-6 border-t border-white/5 relative z-10 flex flex-col justify-between gap-4">
                      <p className="text-[10px] text-white/40 leading-relaxed font-sans tracking-wide line-clamp-3 group-hover:text-white/70 transition-colors">
                        {tooltipDesc}
                      </p>
                      <div className="flex justify-between items-center w-full">
                        {item.type === "VIDEO" ? (
                          <div className="flex justify-between items-center w-full text-[8px] text-white/20 font-mono">
                            <span className="tracking-widest">
                              MULTIMEDIA_VAULT
                            </span>{" "}
                            <Terminal size={12} className="text-purple-400" />
                          </div>
                        ) : (
                          <span
                            title={item.url}
                            className="text-[8px] font-mono text-white/30 tracking-widest lowercase truncate max-w-[80%] cursor-help hover:text-white transition-colors"
                          >
                            {item.url}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {isList && (
                    <div className="flex-1 hidden xl:block px-8">
                      <p className="text-[10px] text-white/40 truncate font-sans">
                        {tooltipDesc}
                      </p>
                    </div>
                  )}

                  {/* Laser línia zospodu */}
                  {isOnline && (
                    <div
                      className="absolute bottom-0 left-0 w-full h-[2px] opacity-20 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 0 15px ${item.color}`,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* 🕸️ NEVIDITEĽNÁ MATRICA PRE BOTA (Zoberie všetky URL z Registra a donúti bota ich vyfotiť) */}
      {typeof SEO_REGISTRY !== "undefined" && (
        <div
          style={{ display: "none", visibility: "hidden" }}
          id="nexus-seo-spider-web"
          aria-hidden="true"
        >
          {Object.keys(SEO_REGISTRY).map((path) => (
            <Link key={path} to={path}>
              {path}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
