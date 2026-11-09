/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS00 MASTER APP V20.95)
// Súbor: apps/main-web/src/App.jsx
// Status: 100% GROUNDED // V20 ESM STRICT EXPORT // ZERO STANDBY FALLBACK
// ============================================================================
import AdminPage from "@admin/pages/AdminPage.jsx";
import NexusAgencyPage from "@agency/pages/NexusAgencyPage.jsx";
import BlogPage from "@blog/pages/BlogPage.jsx";
import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub.jsx";
import { GlobalKeyboard } from "@main-web/components/GlobalKeyboard.jsx";
// 🏠 5. HLAVNÉ STRÁNKY A PORTÁLY (@main-web/pages/ & Subdomény)
import { HomePage } from "@main-web/pages/HomePage.jsx";
// 🌌 6. KOGNITÍVNE DIMENZIE (@main-web/pages/IDxx)
import ID00_Mentor from "@main-web/pages/ID00-Mentor.jsx";
import ID01_Identity from "@main-web/pages/ID01-Identity.jsx";
import ID02_Workflow from "@main-web/pages/ID02-Workflow.jsx";
import ID03_Finance from "@main-web/pages/ID03-Finance.jsx";
import ID04_Revenue from "@main-web/pages/ID04-Revenue.jsx";
import ID05_Assets from "@main-web/pages/ID05-Assets.jsx";
import ID06_Study from "@main-web/pages/ID06-Study.jsx";
import ID07_Skills from "@main-web/pages/ID07-Skills.jsx";
import ID08_Reader from "@main-web/pages/ID08-Reader.jsx";
import ID09_Player from "@main-web/pages/ID09-Player.jsx";
import ID10_Home from "@main-web/pages/ID10-Home.jsx";
import ID11_Recovery from "@main-web/pages/ID11-Recovery.jsx";
import ID12_Codex from "@main-web/pages/ID12-Codex.jsx";
import ID13_Habits from "@main-web/pages/ID13-Habits.jsx";
import ID14_Blog from "@main-web/pages/ID14-Blog.jsx";
import ID15_Death from "@main-web/pages/ID15-Death.jsx";
// 🌌 7. SYSTÉMOVÉ UZLY (@main-web/pages/SysXX)
import Sys01_VideoNodes from "@main-web/pages/Sys01_VideoNodes.jsx";
import Sys02_Mentoring from "@main-web/pages/Sys02_Mentoring.jsx";
import Sys03_ImgGallery from "@main-web/pages/Sys03_ImgGallery.jsx";
import Sys04_VideoGallery from "@main-web/pages/Sys04_VideoGallery.jsx";
import { SYS05_Directory } from "@main-web/pages/SYS05_Directory.jsx";
import OperatorPage from "@operators/pages/OperatorPage.jsx";
import OperatorsPage from "@operators/pages/OperatorsPage.jsx";
import SettingsPage from "@settings/pages/SettingsPage.jsx";
// 🧩 4. GLOBÁLNE UI KOMPONENTY (@shared/components/ & @main-web/components/)
import { GlobalComponents } from "@shared/components/GlobalComponents.jsx";
import { GlobalFooter } from "@shared/components/GlobalFooter.jsx";
import { GlobalHamburgerMenu } from "@shared/components/GlobalHamburgerMenu.jsx";
import { GlobalMessages } from "@shared/components/GlobalMessages.jsx";
import { GlobalProfil } from "@shared/components/GlobalProfil.jsx";
import MetaTags from "@shared/components/MetaTags.jsx";
import { AuthRoute, PublicRoute, StrictRoute } from "@shared/components/NexusRouting.jsx";
import { SystemLogModal } from "@shared/components/SystemLogModal.jsx";
// 🗄️ 2. DÁTA A REGISTRE (@shared/data/)
import { DIMENSIONS, getTierColor } from "@shared/data/nexusConfig.js";
import { checkPermission } from "@shared/data/permissionsRegistry.js";
import PrivacyPage from "@shared/pages/PrivacyPage.jsx";
import VopPage from "@shared/pages/VopPage.jsx";
// ⚡ CENTRÁLNY MOST SUPABASE
import { EXODUS_CONFIG } from "@shared/services/NexusDB_Config.js";
import { NexusDB } from "@shared/services/NexusDB_Core.js";
// 📡 1. DATABÁZOVÉ MOSTY A SLUŽBY (@shared/services/)
import { supabase } from "@shared/services/NexusDB_Supabase.js";
// 🛠️ 3. NÁSTROJE A ENGINE (@shared/utils/)
import { SoundFX } from "@shared/utils/SoundEngine.js";
import GlobalQuestAuth from "@shop/components/GlobalQuestAuth.jsx";
import GlobalWallet from "@shop/components/GlobalWallet.jsx";
import ShopAppsMedia from "@shop/components/ShopAppsMedia.jsx";
import ShopAudioMedia from "@shop/components/ShopAudioMedia.jsx";
import ShopDocumentsMedia from "@shop/components/ShopDocumentsMedia.jsx";
import ShopImageMedia from "@shop/components/ShopImageMedia.jsx";
import ShopVideoMedia from "@shop/components/ShopVideoMedia.jsx";
import ShopPage from "@shop/pages/ShopPage.jsx";
import { SubdomainDropdown } from "@subdomeny/components/SubdomainDropdown.jsx";
import SubdomainStandbyPage from "@subdomeny/pages/SubdomainStandbyPage.jsx";
import { SUBDOMAINS_ARRAY as SUBDOMAINS_LIST } from "@subdomeny/data/SubdomainsMasterData.js";
import UplinkModal from "@uplink/pages/UplinkModal.jsx";
import { Activity, AlertTriangle, Briefcase, Cpu, Database, Grid, LogOut, Mail, Settings, Shield, ShieldAlert, ShoppingCart, Terminal, User, Users, Wallet, Wand2 } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SharedPage from "@shared/pages/SharedPage.jsx";

export const CORE_VERSION = "SK-App V20.95_STABLE";

// ============================================================================
// 👑 V20 MASTER REGISTER SUBDOMÉN A DIMENZIÍ (SSOT ROUTING ENGINE V20.99)
// ============================================================================
const PROTO = "https://";
const DOMAIN = "projekt-nexus.sk";

export const NEXUS_SUBDOMAIN_MAP = {
  // 🌐 CORE SUBDOMÉNY OS GENESIS
  home: `${PROTO}${DOMAIN}`,
  agency: `${PROTO}agency.${DOMAIN}`,
  blog: `${PROTO}blog0.${DOMAIN}`,
  operators: `${PROTO}operators.${DOMAIN}`,
  shop: `${PROTO}shop.${DOMAIN}`,
  settings: `${PROTO}settings.${DOMAIN}`,
  admin: `${PROTO}admin.${DOMAIN}`,
  uplink: `${PROTO}uplink.${DOMAIN}`,
  subdomains: `${PROTO}${DOMAIN}/subdomains`,
  subdomeny: `${PROTO}${DOMAIN}/subdomains`,

  // 🛒 6 SÚRODENCOV OBCHODU (SHOP DIVÍZIE)
  documents: `${PROTO}shop.${DOMAIN}/documents`,
  images: `${PROTO}shop.${DOMAIN}/images`,
  audios: `${PROTO}shop.${DOMAIN}/audios`,
  videos: `${PROTO}shop.${DOMAIN}/videos`,
  apps: `${PROTO}shop.${DOMAIN}/apps`,

  // 📺 SYSTÉMOVÉ MEDIÁLNE MODULY (SYS01 – SYS05)
  Sys01_VideoNodes: `${PROTO}${DOMAIN}/Sys01_VideoNodes`,
  Sys02_Mentoring: `${PROTO}${DOMAIN}/Sys02_Mentoring`,
  Sys03_ImgGallery: `${PROTO}${DOMAIN}/Sys03_ImgGallery`,
  Sys04_VideoGallery: `${PROTO}${DOMAIN}/Sys04_VideoGallery`,
  SYS05_Directory: `${PROTO}${DOMAIN}/SYS05_Directory`,

  // 🧠 16 KOGNITÍVNYCH DIMENZIÍ (ID00 – ID15 ON MAIN-WEB)
  id00: `${PROTO}${DOMAIN}/ID00`,
  id01: `${PROTO}${DOMAIN}/ID01`,
  id02: `${PROTO}${DOMAIN}/ID02`,
  id03: `${PROTO}${DOMAIN}/ID03`,
  id04: `${PROTO}${DOMAIN}/ID04`,
  id05: `${PROTO}${DOMAIN}/ID05`,
  id06: `${PROTO}${DOMAIN}/ID06`,
  id07: `${PROTO}${DOMAIN}/ID07`,
  id08: `${PROTO}${DOMAIN}/ID08`,
  id09: `${PROTO}${DOMAIN}/ID09`,
  id10: `${PROTO}${DOMAIN}/ID10`,
  id11: `${PROTO}${DOMAIN}/ID11`,
  id12: `${PROTO}${DOMAIN}/ID12`,
  id13: `${PROTO}${DOMAIN}/ID13`,
  id14: `${PROTO}${DOMAIN}/ID14`,
  id15: `${PROTO}${DOMAIN}/ID15`,

  // 🌐 SUBDOMÉNY DIMENZIÍ (SUB 00 – SUB 15) -> INTERNÉ TRASY OS GENESIS
  "sub 00": `${PROTO}${DOMAIN}/sub-00`,
  "sub 01": `${PROTO}${DOMAIN}/sub-01`,
  "sub 02": `${PROTO}${DOMAIN}/sub-02`,
  "sub 03": `${PROTO}${DOMAIN}/sub-03`,
  "sub 04": `${PROTO}${DOMAIN}/sub-04`,
  "sub 05": `${PROTO}${DOMAIN}/sub-05`,
  "sub 06": `${PROTO}${DOMAIN}/sub-06`,
  "sub 07": `${PROTO}${DOMAIN}/sub-07`,
  "sub 08": `${PROTO}${DOMAIN}/sub-08`,
  "sub 09": `${PROTO}${DOMAIN}/sub-09`,
  "sub 10": `${PROTO}${DOMAIN}/sub-10`,
  "sub 11": `${PROTO}${DOMAIN}/sub-11`,
  "sub 12": `${PROTO}${DOMAIN}/sub-12`,
  "sub 13": `${PROTO}${DOMAIN}/sub-13`,
  "sub 14": `${PROTO}${DOMAIN}/sub-14`,
  "sub 15": `${PROTO}${DOMAIN}/sub-15`,

  // BEZMEDZERATÉ SYNONYMÁ PRE SUB 00 – SUB 15
  sub00: `${PROTO}${DOMAIN}/sub-00`,
  sub01: `${PROTO}${DOMAIN}/sub-01`,
  sub02: `${PROTO}${DOMAIN}/sub-02`,
  sub03: `${PROTO}${DOMAIN}/sub-03`,
  sub04: `${PROTO}${DOMAIN}/sub-04`,
  sub05: `${PROTO}${DOMAIN}/sub-05`,
  sub06: `${PROTO}${DOMAIN}/sub-06`,
  sub07: `${PROTO}${DOMAIN}/sub-07`,
  sub08: `${PROTO}${DOMAIN}/sub-08`,
  sub09: `${PROTO}${DOMAIN}/sub-09`,
  sub10: `${PROTO}${DOMAIN}/sub-10`,
  sub11: `${PROTO}${DOMAIN}/sub-11`,
  sub12: `${PROTO}${DOMAIN}/sub-12`,
  sub13: `${PROTO}${DOMAIN}/sub-13`,
  sub14: `${PROTO}${DOMAIN}/sub-14`,
  sub15: `${PROTO}${DOMAIN}/sub-15`,
};
 


// Použitie 'function' zaručuje 100% JS Hoisting v celom súbore pred prvým spustením useState
export function getSubIdFromHostname() {
  if (typeof window === "undefined") return null;
  const hostname = String(window.location.hostname || "").toLowerCase();
  const pathname = String(window.location.pathname || "").toLowerCase();
  const port = String(window.location.port || "");
  const searchParams = new URLSearchParams(window.location.search);
  const subParam = searchParams.get("sub");

  // 0. DETEKCIA Z URL TRASY (/sub-00 až /sub-15)
  const pathMatch = pathname.match(/\/sub-(\d{2})/);
  if (pathMatch && pathMatch) {
    return `SUB ${pathMatch}`;
  }

  // 1. URL OVERRIDE
  if (subParam) {
    const found = SUBDOMAINS_ARRAY?.find(
      (s) =>
        String(s.id || "").toLowerCase() ===
          String(subParam || "").toLowerCase() ||
        String(s.slug || "").toLowerCase() ===
          String(subParam || "").toLowerCase(),
    );
    if (found) return found.id;
  }

  // 2. MONOREPO VITE DEV SERVERY (LOCALHOST RADAR)
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    // Port 5171 (main-web) a hlavné portály -> MUST RETURN null FOR HOMEPAGE
    if (
      ["5171", "5172", "5173", "5174", "5175", "5176", "5177"].includes(port)
    ) {
      return null;
    }
    // Porty 51800 - 51815 pre Subdomény
    if (port === "51800") return "SUB 00";
    if (port === "51801") return "SUB 01";
    if (port === "51802") return "SUB 02";
    if (port === "51803") return "SUB 03";
    if (port === "51804") return "SUB 04";
    if (port === "51805") return "SUB 05";
    if (port === "51806") return "SUB 06";
    if (port === "51807") return "SUB 07";
    if (port === "51808") return "SUB 08";
    if (port === "51809") return "SUB 09";
    if (port === "51810") return "SUB 10";
    if (port === "51811") return "SUB 11";
    if (port === "51812") return "SUB 12";
    if (port === "51813") return "SUB 13";
    if (port === "51814") return "SUB 14";
    if (port === "51815") return "SUB 15";
    return null;
  }

  // 3. PRODUKČNÝ MAIN WEB (PROJEKT-NEXUS.SK)
  if (hostname === "projekt-nexus.sk" || hostname === "www.projekt-nexus.sk") {
    return null;
  }

  // 4. PRODUKČNÉ SUBDOMÉNY
  if (hostname.includes("personal.")) return "SUB 01";
  if (hostname.includes("work.")) return "SUB 02";
  if (hostname.includes("finance.")) return "SUB 03";
  if (hostname.includes("business.")) return "SUB 04";
  if (hostname.includes("investments.")) return "SUB 05";
  if (hostname.includes("study.")) return "SUB 06";
  if (hostname.includes("professional.")) return "SUB 07";
  if (hostname.includes("reader.")) return "SUB 08";
  if (hostname.includes("player.")) return "SUB 09";
  if (hostname.includes("home.")) return "SUB 10";
  if (hostname.includes("recovery.")) return "SUB 11";
  if (hostname.includes("codex.")) return "SUB 12";
  if (hostname.includes("habits.")) return "SUB 13";
  if (hostname.includes("blog.")) return "SUB 14";
  if (hostname.includes("death.")) return "SUB 15";
  if (hostname.includes("mentor.")) return "SUB 00";

  return null;
}

class SystemErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("🔥 [NEXUS CRASH DETECTED]:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      const errorMsg = String(
        this.state.error?.stack ||
          this.state.error?.message ||
          this.state.error ||
          "Unknown Error",
      );
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500 font-mono">
          <AlertTriangle
            size={80}
            className="text-red-600 mb-8 animate-pulse drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]"
          />
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4 tracking-[0.3em] italic">
            System_Crash
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mb-12">
            V tomto sektore nastala fatálna chyba kompilácie kódu. Systém
            zablokoval bielu obrazovku a spustil núdzový režim.
            <br />
            <br />
            <span className="text-red-400 font-mono text-xs bg-red-950/40 p-4 rounded-xl border border-red-500/30 block text-left overflow-x-auto whitespace-pre-wrap max-h-60 shadow-inner">
              {errorMsg}
            </span>
          </p>
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="px-10 py-5 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-black border border-red-600/30 transition-all rounded-2xl font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(220,38,38,0.2)] cursor-pointer"
          >
            Reboot System (Return Home)
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Inicializačný signál zrodu do konzoly operátora
console.log(
  `%c[📡 EXODUS DEPLOYMENT] Inicializujem CORE ${CORE_VERSION} — Smerovacie štíty plne aktívne.`,
  "background: #050a0e; color: #39FF14; font-weight: bold; border: 1px solid #39FF14; padding: 3px;",
);

// DOČASNÉ MOCK KOMPONENTY (Kým ich fyzicky nenakódime ako samostatné súbory)
const SysModuleViewer = ({ title, color }) => (
  <div
    className="p-20 mt-20 text-center font-black uppercase text-2xl flex flex-col items-center gap-4 animate-in fade-in duration-700"
    style={{ color: color }}
  >
    <div
      className="w-16 h-16 rounded-full border-4 animate-pulse"
      style={{ borderColor: color, boxShadow: `0 0 20px ${color}` }}
    ></div>
    {title}
    <div className="text-[10px] text-white/30 tracking-[0.3em] mt-4">
      SYSTÉMOVÝ MODUL VO VÝVOJI // OFFLINE_MODE
    </div>
  </div>
);

// DOČASNÉ MOCK KOMPONENTY (Kým ich fyzicky nenakódime ako samostatné súbory)
const NodeViewer = () => (
  <div className="p-20 mt-20 text-center text-[#00f3ff] font-black uppercase text-2xl">
    ZOBRAZOVAČ DYNAMICKÉHO UZLA (VO VÝVOJI)
  </div>
);
const NotFoundPage = () => (
  <div className="p-20 mt-20 text-center text-[#FF003C] font-black uppercase text-2xl">
    404: ERROR LOG - UZOL NENÁJDENÝ
  </div>
);

// ⚡ ZMAZANÝ LOKÁLNY createClient (Aby nevznikali Multiple Instances)

const DEFAULT_USER_STATE = {
  email: "",
  tier: "FREE",
  credits: 0,
  isGuest: true,
  displayName: "",
  dossier: "",
  avatar: "",
  diagnosis: "",
  medication: "",
  www: "",
  phone: "",
  facebook: "",
  google: "",
  unlockedNodes: [],
  lastActive: null,
};

// ⚡ EXODUS FIX: Presunuté z UplinkModal sem, aby si App.jsx vedel vytvoriť Adminov sám.
const getInitialTierInfo = (mailStr) => {
  const m = mailStr.toLowerCase().trim();

  // 👑 GOD MODE PRE ARCHITEKTA A TESTOVACIE ÚČTY (Aplikuje sa iba pri PRVEJ registrácii)
  if (m === "dusan.fajnor.business@gmail.com")
    return { tier: "ARCHITECT", credits: 9999999 };
  if (m === "dusan.fajnor.finance@gmail.com")
    return { tier: "OMEGA", credits: 9999999 };
  if (m === "dusan.fajnor.personall@gmail.com")
    return { tier: "PRO", credits: 9999999 };

  // 🛡️ ADMINISTRATÍVNE TIERY
  if (m === "dusan.fajnor.player@gmail.com")
    return { tier: "MASTER", credits: 9999999 };
  if (m === "dusan.fajnor.work@gmail.com")
    return { tier: "ADMIN", credits: 9999999 };
  if (m === "dusan.fajnor.investments@gmail.com")
    return { tier: "MODERATOR", credits: 9999999 };

  // 🧪 TESTOVACIE ÚČTY PRE BEŽNÝCH HRÁČOV (FREE TIER)
  if (m === "dusan.fajnor.study@gmail.com")
    return { tier: "FREE", credits: 9999999 }; // Veľa OC na testovanie Shopu
  if (m === "dusan.fajnor.professional@gmail.com")
    return { tier: "FREE", credits: 9999999 }; // Stredná hodnota
  if (m === "dusan.fajnor.reader@gmail.com")
    return { tier: "FREE", credits: 9999999 }; // Málo OC (na testovanie varovaní)
  if (m === "dusan.fajnor.home@gmail.com")
    return { tier: "FREE", credits: 9999999 }; // Minimum OC

  // 🛡️ OBYČAJNÍ SMRTEĽNÍCI (Nové registrácie zvonka)
  return { tier: "FREE", credits: 0 };
  // quest tiež doplniť
};

const setNexusCookie = (state) => {
  if (typeof window !== "undefined") {
    const domainStr = window.location.hostname.includes("projekt-nexus.sk")
      ? "domain=.projekt-nexus.sk;"
      : "";
    const lightState = {
      email: state.email,
      tier: state.tier,
      isGuest: state.isGuest,
      displayName: state.displayName,
      credits: state.credits,
      avatar: state.avatar,
    };
    document.cookie = `nexus_active_identity=${encodeURIComponent(JSON.stringify(lightState))}; ${domainStr} path=/; max-age=2592000; secure; samesite=lax`;
  }
};

const getNexusCookie = () => {
  if (typeof window !== "undefined") {
    const match = document.cookie.match(
      new RegExp("(^| )nexus_active_identity=([^;]+)"),
    );
    if (match) return JSON.parse(decodeURIComponent(match[2]));
  }
  return null;
};

const clearNexusCookie = () => {
  if (typeof window !== "undefined") {
    const domainStr = window.location.hostname.includes("projekt-nexus.sk")
      ? "domain=.projekt-nexus.sk;"
      : "";
    document.cookie = `nexus_active_identity=; ${domainStr} path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=lax`;
  }
};

const DimensionConstruction = ({ dimId, dimName, color, navigateTo }) => (
  <div className="min-h-[85vh] flex flex-col items-center justify-center relative z-10 text-center p-8 animate-in fade-in zoom-in-95 duration-1000 mt-20">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[200px] rounded-full opacity-10 pointer-events-none animate-pulse"
      style={{ backgroundColor: color }}
    />
    <div className="relative z-10 flex flex-col items-center">
      <div className="relative mb-16 group">
        <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-1000" />
        <Database
          size={160}
          className="relative z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
          style={{ color: color }}
        />
        <Activity
          size={40}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{ color: color }}
        />
      </div>
      <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-8 italic leading-none drop-shadow-2xl">
        {dimId}{" "}
        <span style={{ color: color }} className="not-italic drop-shadow-glow">
          {dimName}
        </span>
      </h1>
      <p className="text-white/30 font-mono text-sm md:text-lg max-w-3xl leading-relaxed mb-20 italic mx-auto px-4 border-l-2 border-white/5">
        Tento segment Matrixu bol inicializovaný, ale momentálne čaká na
        sémantickú dekompresiu zo strany Architekta.
      </p>
      <button
        onClick={() => navigateTo("home")}
        className="flex items-center justify-center gap-5 px-12 py-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all shadow-2xl backdrop-blur-xl text-white/50 hover:text-white font-black uppercase tracking-[0.5em] text-xs md:text-sm hover:scale-105 active:scale-95 group"
      >
        <Grid
          size={20}
          style={{ color: color }}
          className="group-hover:rotate-90 transition-transform duration-700"
        />{" "}
        Návrat na Grid
      </button>
    </div>
  </div>
);

const getIsAgencySubdomain = () => {
  if (typeof window === "undefined") return false;
  const urlParams = new URLSearchParams(window.location.search);
  return (
    window.location.hostname.startsWith("agency.") ||
    urlParams.get("agency") === "true"
  );
};

const getIsAdminSubdomain = () => {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host.startsWith("admin.") || host.includes("admin-");
};

const AgencyTeleport = ({ themeColor, userState }) => {
  // Na produkcii aj localhoste zobrazujeme priamo Agency modul (Vercel Edge vybavil 301)
  return <NexusAgencyPage themeColor={themeColor} userState={userState} />;
};

export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [userState, setUserState] = useState(
    typeof DEFAULT_USER_STATE !== "undefined"
      ? DEFAULT_USER_STATE
      : { isGuest: true, tier: "QUEST", credits: 0, displayName: "GUEST_ENTITY" }
  );
  const [themeColor, setThemeColor] = useState("#39FF14");
  const [isSystemLogOpen, setIsSystemLogOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  // 2. LAZY INICIALIZÁCIA ACTIVE TAB & SELECTED SUB ID
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const isAdminSub = typeof getIsAdminSubdomain === "function" ? getIsAdminSubdomain() : false;
      if (isAdminSub || path.startsWith("/admin")) {
        return "admin";
      }
    }
    return "home";
  });

   const navigateTo = (targetId) => {
    if (!targetId) return;
    try {
      if (typeof SoundFX !== "undefined" && SoundFX?.click) SoundFX.click();
    } catch (e) {}

    // 🎯 DEFENZÍVNA DEKLARÁCIA PREMENNÝCH (PREVENCIA REFERENCE_ERROR)
    const rawId = String(targetId).trim();
    const cleanId = rawId.replace(/^\//, "");

    // 🎯 1. SUBDOMÉNOVÉ MODULY (/sub-00 až /sub-15)
    const subMatch = cleanId.match(/^sub[\s_-]?(\d{2})$/i);
    if (subMatch) {
      const num = subMatch[1]; // 🎯 ZÍSKA VÝHRADNE "04" (INDEX 1 Z REGEXU)
      const formattedSubId = `SUB ${num}`;

      if (typeof setSelectedSubId === "function") {
        setSelectedSubId(formattedSubId);
      }
      if (typeof setActiveTab === "function") {
        setActiveTab("subdomains");
      }

      navigate(`/sub-${num}`);
      return;
    }

    // 🎯 2. KOGNITÍVNE DIMENZIE (/ID00 až /ID15)
    const idMatch = cleanId.match(/^id[\s_-]?(\d{2})$/i);
    if (idMatch) {
      const num = idMatch[1]; // 🎯 ZÍSKA VÝHRADNE "04" (INDEX 1 Z REGEXU)
      if (typeof setActiveTab === "function") setActiveTab(`ID${num}`);
      navigate(`/ID${num}`);
      return;
    }

    // 🎯 3. HLAVNÉ SEKTORY (agency, shop, blog, settings, home...)
    const cleanKey = cleanId.toLowerCase();
    if (typeof setActiveTab === "function") setActiveTab(cleanKey);
    const targetRoute = cleanKey === "home" ? "/" : `/${cleanKey}`;
    navigate(targetRoute);
  };

  const [selectedSubId, setSelectedSubId] = useState(() => {
    if (typeof window === "undefined") return "SUB 00";
    const host = window.location.hostname.toLowerCase();

    if (typeof SUBDOMAINS_LIST !== "undefined" && Array.isArray(SUBDOMAINS_LIST)) {
      const matchedSub = SUBDOMAINS_LIST.find(
        (sub) => sub?.domain && host.includes(sub.domain.toLowerCase())
      );
      if (matchedSub) {
        console.log("⚡ [NEXUS PROD ROUTER] Detekovaná subdoména z URL:", matchedSub.id, matchedSub.name);
        return matchedSub.id;
      }
    }

    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("id") || "SUB 00";
  });

  // 3. V20 DYNAMICKÉ PREMENNÉ PRE FOOTER A STROJOVŇU (userTier & currentSector)
  const userTier = useMemo(() => {
    if (!userState || userState.isGuest || userState.tier === "QUEST") {
      return "QUEST";
    }
    return userState.tier || "FREE";
  }, [userState]);

  const currentSector = useMemo(() => {
    const rawPathParts = String(location.pathname || "").replace(/^\//, "").split("/");
    const firstSegment = String(rawPathParts || "").toLowerCase();

    if (!firstSegment || firstSegment === "home") return "home";
    if (firstSegment === "login" || firstSegment === "uplinkmodal" || firstSegment === "register") return "uplink";
    if (firstSegment.startsWith("sub")) return selectedSubId || firstSegment;
    return firstSegment;
  }, [location.pathname, selectedSubId]);

  // 4. EFFECTY (GIT LOG PROTOKOL & SUPABASE AUTH HYDRATÁCIA)
  useEffect(() => {
    const currentGitHash = import.meta.env.VITE_GIT_COMMIT_HASH || "v20.95-master";
    const lastSeenHash = localStorage.getItem("nexus_last_seen_git_commit");
    const sessionShown = sessionStorage.getItem("nexus_system_log_session_shown");

    if (lastSeenHash !== currentGitHash && !sessionShown && !isLogModalOpen) {
      setIsLogModalOpen(true);
      sessionStorage.setItem("nexus_system_log_session_shown", "TRUE");
    }
  }, [location.pathname]);

  useEffect(() => {
    let authListener = null;

    const initAuthSession = async () => {
      try {
        if (typeof supabase === "undefined" || !supabase?.auth) return;

        const { data: { session } } = await supabase.auth.getSession();

        if (session?.user) {
          const userMeta = session.user.user_metadata || {};
          const userEmail = session.user.email || "";
          const isMasterAdmin = userEmail.includes("nexus") || userEmail.includes("architect") || userMeta.tier === "ARCHITECT";
          const currentTier = isMasterAdmin ? "ARCHITECT" : (userMeta.tier || "FREE");

          setUserState({
            id: session.user.id,
            email: userEmail,
            displayName: userMeta.display_name || userMeta.full_name || userEmail.split("@"),
            avatar: userMeta.avatar_url || userMeta.avatar || null,
            tier: currentTier,
            credits: userMeta.credits || 2500,
            isGuest: false,
          });
        } else {
          setUserState(typeof DEFAULT_USER_STATE !== "undefined" ? DEFAULT_USER_STATE : {
            isGuest: true,
            tier: "QUEST",
            credits: 0,
            displayName: "GUEST_ENTITY",
          });
        }

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
          if ((event === "SIGNED_IN" || event === "TOKEN_REFRESHED") && session?.user) {
            const userMeta = session.user.user_metadata || {};
            const userEmail = session.user.email || "";
            const isMasterAdmin = userEmail.includes("nexus") || userEmail.includes("architect") || userMeta.tier === "ARCHITECT";
            const currentTier = isMasterAdmin ? "ARCHITECT" : (userMeta.tier || "FREE");

            setUserState({
              id: session.user.id,
              email: userEmail,
              displayName: userMeta.display_name || userMeta.full_name || userEmail.split("@"),
              avatar: userMeta.avatar_url || userMeta.avatar || null,
              tier: currentTier,
              credits: userMeta.credits || 2500,
              isGuest: false,
            });
          } else if (event === "SIGNED_OUT") {
            setUserState(typeof DEFAULT_USER_STATE !== "undefined" ? DEFAULT_USER_STATE : {
              isGuest: true,
              tier: "QUEST",
              credits: 0,
              displayName: "GUEST_ENTITY",
            });
          }
        });

        authListener = listener?.subscription;
      } catch (err) {
        console.warn("⚠️ [NEXUS AUTH HYDRATION ERROR]:", err);
      }
    };

    initAuthSession();

    return () => {
      if (authListener) authListener.unsubscribe();
    };
  }, []);

  const handleSubdomainChange = (subId) => {
    navigate(`/subdomeny?id=${encodeURIComponent(subId)}`);
    
    // Ak používaš navigateTo alebo setCurrentTab:
    if (typeof navigateTo === "function") {
      navigateTo("subdomains");
    } else if (typeof setCurrentPage === "function") {
      setCurrentPage("subdomains");
    }
  };

  // 2. Detekcia subdomény z URL domény (na projekt-nexus.sk vracia null)
  const detectedSubId =
    typeof getSubIdFromHostname === "function" ? getSubIdFromHostname() : null;

  // 3. Aktívna subdoména (null = Hlavný Web)
  // Na domovskej stránke MUSÍ byť hodnota null! Žiadne || "SUB 00"!
  const activeSubId = selectedSubId || detectedSubId || null;

  // 4. Na Hlavnom Webe MUSÍ byť currentSubId null, aby SubdomainDropdown nesvietil ako SUB 00!
  const currentSubId = activeSubId;
  const safeSubId = currentSubId;
  const activeColor = themeColor || "#00f3ff";

  const isBot =
    typeof navigator !== "undefined" &&
    /ReactSnap|HeadlessChrome|Puppeteer|bot|spider|crawl/i.test(
      navigator.userAgent,
    );

  const [isBooting, setIsBooting] = useState(() => {
    if (isBot) return false;
    return true;
  });

  const currentGitHash =
    (typeof import.meta !== "undefined" &&
      import.meta.env?.VITE_GIT_COMMIT_HASH) ||
    "v20.95-master";

  // 3. Efekt detekcie nového pushu (LocalStorage System Log)
  useEffect(() => {
    try {
      const lastSeenCommit = localStorage.getItem("nexus_last_seen_git_commit");
      if (lastSeenCommit !== currentGitHash) {
        setIsSystemLogOpen(true);
      }
    } catch (err) {
      console.warn("⚠️ [NEXUS STORAGE] LocalStorage read skipped:", err);
    }
  }, [currentGitHash]);

  // 4. Unifikovaný Radar URL Adresy (Synchronizuje activeTab aj themeColor)
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const urlParams = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : "",
    );
    const isAdminSub =
      typeof getIsAdminSubdomain === "function" ? getIsAdminSubdomain() : false;

    if (isAdminSub || path.includes("/uplink")) {
      setActiveTab("uplink");
      setThemeColor("#8A2BE2");
    } else if (path.includes("/home") || path === "/") {
      setActiveTab("home");
      setThemeColor("#39FF14");
    } else if (path.includes("/agency") || urlParams.get("agency") === "true") {
      setActiveTab("agency");
      setThemeColor("#00f3ff");
    } else if (path.includes("/blog")) {
      setActiveTab("blog");
      setThemeColor("#E91E63");
      } else if (path.includes("/operators")) {
      setActiveTab("operators");
      setThemeColor("#FFAA00");
    } else if (path.includes("/shop")) {
      setActiveTab("shop");
      setThemeColor("#FFD700");
    } else if (path.includes("/settings")) {
      setActiveTab("settings");
      setThemeColor("#8A2BE2");
    } else if (isAdminSub || path.includes("/admin")) {
      setActiveTab("admin");
      setThemeColor("#FF003C");
    }
  }, [location.pathname]);

  const lastDbUpdateRef = useRef(0);
  const [systemStatus, setSystemStatus] = useState("INITIALIZING CORE...");
  const [showGlobalProfile, setShowGlobalProfile] = useState(false);
  const [isProfileMaximized, setIsProfileMaximized] = useState(false);

  useEffect(() => {
    // 1. OTVÁRANIE MODÁLOV
    const handleOpenProfilSignal = () => setShowGlobalProfile(true);
    const handleOpenInboxSignal = () => setIsGlobalMessagesOpen(true);
    const handleOpenQuestAuthSignal = () => setIsQuestAuthOpen(true);

    // 2. ZATVÁRANIE MODÁLOV (Pre zmazanie activeModal v Hamburger Menu)
    const handleCloseProfilSignal = () => setShowGlobalProfile(false);
    const handleCloseInboxSignal = () => setIsGlobalMessagesOpen(false);

    // REST REGISTRÁCIA POSLUCHÁČOV
    window.addEventListener("nexus_open_profil_modal", handleOpenProfilSignal);
    window.addEventListener("nexus_open_inbox_modal", handleOpenInboxSignal);
    window.addEventListener("nexus_open_quest_auth", handleOpenQuestAuthSignal);

    window.addEventListener(
      "nexus_close_profil_modal",
      handleCloseProfilSignal,
    );
    window.addEventListener("nexus_close_inbox_modal", handleCloseInboxSignal);

    return () => {
      window.removeEventListener(
        "nexus_open_profil_modal",
        handleOpenProfilSignal,
      );
      window.removeEventListener(
        "nexus_open_inbox_modal",
        handleOpenInboxSignal,
      );
      window.removeEventListener(
        "nexus_open_quest_auth",
        handleOpenQuestAuthSignal,
      );

      window.removeEventListener(
        "nexus_close_profil_modal",
        handleCloseProfilSignal,
      );
      window.removeEventListener(
        "nexus_close_inbox_modal",
        handleCloseInboxSignal,
      );
    };
  }, []);

  // 🛑 FIX: Stav pre uloženie dát entity, na ktorú sme klikli z Blogu/Operátorov
  const [targetDossier, setTargetDossier] = useState(null);

  const handleThemeChange = (newColor) => {
    const safeColor = String(newColor || "#00f3ff");
    setThemeColor(safeColor);
  };

  // 📡 LAPAČ SIGNÁLOV: Čaká na povel na otvorenie cudzieho Dossieru
  useEffect(() => {
    const handleOpenDossier = (e) => {
      // 🛑 FIX: Ak event 'e' neexistuje, funkcia nepokračuje (Záchranná brzda)
      if (!e || !e.detail) return;

      // console.log(
      //   "🛠️ [SONDA - LAPAČ]: Signál prijatý. Dekódujem entitu:",
      //   e.detail.email || e.detail.id,
      // );

      // 1. Okamžite načíta to, čo prišlo v signáli
      setTargetDossier(e.detail);
      setShowGlobalProfile(true);

      // 2. Stiahne plný profil z DB, aby vnútorné deti nezostali prázdne
      const targetId = e.detail.email || e.detail.id;

      if (
        targetId &&
        typeof NexusDB !== "undefined" &&
        NexusDB.subscribeToProfile
      ) {
        const unsub = NexusDB.subscribeToProfile(targetId, (fullData) => {
          if (fullData) {
            setTargetDossier((prev) => ({ ...prev, ...fullData }));
          }
          // Memory Leak ochrana
          setTimeout(() => {
            if (typeof unsub === "function") unsub();
          }, 1000);
        });
      }
    };

    // 📡 Prijímač naladený na správnu frekvenciu
    window.addEventListener("nexus_open_profile", handleOpenDossier);
    return () =>
      window.removeEventListener("nexus_open_profile", handleOpenDossier);
  }, []);

  const [firebaseUser, setFirebaseUser] = useState(null);

  const [isGlobalMessagesOpen, setIsGlobalMessagesOpen] = useState(false);
  const [isQuestAuthOpen, setIsQuestAuthOpen] = useState(false);

  const [globalComposeData, setGlobalComposeData] = useState(null);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);

  const [showUplink, setShowUplink] = useState(() => {
    if (typeof window !== "undefined") {
      // 🛑 OPRAVA: Úplné zrušenie Login-Wallu! Noví návštevníci z TikToku/YT už nesmú byť blokovaní.
      const path = window.location.pathname;

      // Uplink Modal vyskočí na celú obrazovku IBA ak systém operátora katapultuje na "/login" (napr. po odhlásení)
      if (path === "/login") return true;

      // Pre všetky ostatné trasy (HomePage, Shop, Blog) sa systém otvorí bez modálu.
      // Skafander sa môže voľne pohybovať, systém ho automaticky berie ako Neznámy Uzol (QUEST / FREE).
      return false;
    }
    return true;
  });

  useEffect(() => {
    // Tento strážca beží nonstop a čaká, kým Supabase zahlási úspešný OAuth návrat
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          const currentLocal = JSON.parse(
            localStorage.getItem("nexus_active_identity") || "{}",
          );

          // Ak je email v pamäti iný (alebo prázdny), urobíme okamžitý Bypass Zápis
          if (currentLocal.email !== session.user.email) {
            localStorage.setItem(
              "nexus_active_identity",
              JSON.stringify({
                ...currentLocal,
                email: session.user.email,
                tier: currentLocal.tier || "FREE",
                isGuest: false,
              }),
            );

            // Ak by sme náhodou mali aktívny užívateľský stav, updatneme aj ten
            setUserState((prev) => ({
              ...prev,
              email: session.user.email,
              isGuest: false,
            }));
          }
        }
      },
    );

    return () => {
      if (authListener?.subscription) authListener.subscription.unsubscribe();
    };
  }, []);

  
  useEffect(() => {
    const handleUrlSync = () => {
      const host = window.location.hostname;
      const path = window.location.pathname.replace("/", "");
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get("tab");

      if (tabParam && tabParam.startsWith("ID")) {
        setActiveTab(tabParam.split("-")[0]);
        return;
      }
      if (path.startsWith("ID")) {
        const targetDim = path.split("-")[0];
        setActiveTab(targetDim);
      } else if (host.startsWith("blog.") || path.startsWith("blog"))
        setActiveTab("blog");
      else if (host.startsWith("shop.") || path.startsWith("shop"))
        setActiveTab("shop");
      else if (
        host.startsWith("operators.") ||
        path.startsWith("operators") ||
        path.startsWith("operator")
      )
        setActiveTab("operators");
      else if (host.startsWith("settings.") || path.startsWith("settings"))
        setActiveTab("settings");
      else if (path.startsWith("login"))
        setActiveTab("login"); // 🛑 Tento port tu chýbal!
      // 🌐 ZACHYTENIE SYSTÉMOVÝCH UZLOV (SYS)
      else if (path.startsWith("Sys01_VideoNodes")) setActiveTab("sys01");
      else if (path.startsWith("Sys02_Mentoring")) setActiveTab("sys02");
      else if (path.startsWith("Sys03_ImgGallery")) setActiveTab("sys03");
      else if (path.startsWith("Sys04_VideoGallery")) setActiveTab("sys04");
      else if (path.startsWith("SYS05_Directory")) setActiveTab("sys05");
      else if (path === "" || path === "home") {
        setActiveTab("home");
      }
    };

    handleUrlSync();
  }, [location.pathname]);

  useEffect(() => {
    const handleOpenInbox = (e) => {
      if (e.detail) setGlobalComposeData(e.detail);
      setIsGlobalMessagesOpen(true);
    };
    window.addEventListener("nexus_open_inbox", handleOpenInbox);
    return () =>
      window.removeEventListener("nexus_open_inbox", handleOpenInbox);
  }, []);

  useEffect(() => {
    if (
      userState.isGuest ||
      !userState.email ||
      userState.email === "anonymous" ||
      userState.email === "quest"
    )
      return;
    const unsubscribeCounts = NexusDB.subscribeToUnreadMessages(
      userState.email,
      setUnreadMessagesCount,
    );
    return () => {
      if (unsubscribeCounts) unsubscribeCounts();
    };
  }, [userState.email, userState.isGuest]);

  useEffect(() => {
    if (userState.isGuest || !userState.email) return;

    const updatePresence = async () => {
      const now = Date.now();
      if (now - lastDbUpdateRef.current > 60000) {
        lastDbUpdateRef.current = now;
        let sessionMins =
          parseInt(localStorage.getItem("nexus_uptime_minutes") || "0", 10) + 1;
        const { resetMins } = await NexusDB.updatePresenceAndMining(
          userState,
          sessionMins,
        );

        if (resetMins) localStorage.setItem("nexus_uptime_minutes", "0");
        else
          localStorage.setItem("nexus_uptime_minutes", sessionMins.toString());
      }
    };

    updatePresence();
    const events = ["mousemove", "keydown", "click", "touchstart"];
    const handleActivity = () => updatePresence();

    events.forEach((evt) =>
      window.addEventListener(evt, handleActivity, { passive: true }),
    );
    return () =>
      events.forEach((evt) => window.removeEventListener(evt, handleActivity));
  }, [userState.email, userState.isGuest]);

  const getThemeColorDyn = () => {
    if (activeTab === "uplink") return "#8A2BE2";
    if (activeTab === "home") return "#39FF14";
    if (activeTab === "agency") return "#00f3ff";
    if (activeTab === "blog") return "#FF1493";
    if (activeTab === "operators") return "#FFAA00";
    if (activeTab === "shop") return "#FFD700";
    
    if (activeTab === "settings") return "#8A2BE2";

    if (activeTab === "admin") return "#FF003C"; // ⚡ PRIDANÉ: Farba Architekta pre Admin Panel
    if (activeTab === "sys01" || activeTab === "Sys01_VideoNodes") return "#FF0000";
    if (activeTab === "sys02" || activeTab === "Sys02_Mentoring") return "#E91E63";
    if (activeTab === "sys03" || activeTab === "Sys03_ImgGallery" ) return "#BF00FF";
    if (activeTab === "sys04" || activeTab === "Sys04_VideoGallery" ) return "#FF0000";
    if (activeTab === "sys05" || activeTab === "SYS05_Directory" ) return "#39FF14";

    const dimPrefix = activeTab?.split("-")[0];
    const dimObj = DIMENSIONS?.find((d) => d.id === dimPrefix);

    if (dimObj && dimObj.color) return dimObj.color;
    if (typeof getTierColor === "function")
      return getTierColor(userState.tier) || "#FF003C";
    return "#FF003C";
  };
  // const themeColor = getThemeColorDyn();

  useEffect(() => {
    const sequence = [
      { status: "LOADING SUPABASE MATRIX...", delay: 600 },
      { status: "VERIFYING SECURITY...", delay: 1200 },
      { status: "AWAITING LOGIN PROTOCOL", delay: 1800 },
    ];
    sequence.forEach((step) =>
      setTimeout(() => setSystemStatus(step.status), step.delay),
    );
    // Odstránené natvrdo zhodenie boot screenu. Teraz to riadi plne Auth Listener.
    setTimeout(() => {
      if (SoundFX?.hover) SoundFX.hover();
    }, 2000);
  }, []);

  // ⚡ ZÁCHRANA IDENTITY A PRE-AUTH (SUPABASE EDITION - RACE CONDITION FIX)
  useEffect(() => {
    // 🛑 TOTO TI TAM CHÝBALO: Deklarácia premennej na samom vrchu hooku!
    let authSubscription = null;

    const handleSession = async (session) => {
      const user = session?.user;
      if (user && !user.is_anonymous) {
        setFirebaseUser(user);

        // 🛑 1. UI uzamkneme do stavu "Loading". Žiadne prázdne zobrazenia.
        setIsBooting(true);
        setSystemStatus("DEŠIFRUJEM IDENTITU...");

        try {
          const userEmail = user.email.toLowerCase();
          const initInfo = getInitialTierInfo(userEmail);

          // 🛑 2. Extrahujeme VŠETKY dáta z DB ešte PREDTÝM, než vpustíme operátora do UI.
          const userData = await NexusDB.verifyAndInitEntity(
            userEmail,
            initInfo,
          );

          setUserState((prev) => {
            const safeData = { ...userData };
            Object.keys(safeData).forEach((key) => {
              if (safeData[key] === null) safeData[key] = "";
            });

            // 🛑 3. Kompletne vyskladaný operátor.
            const recoveredState = {
              ...prev,
              ...safeData,
              email: userEmail,
              // ⚡ NEXUS FIX: Najprv ťaháme DB meno, Discord/Twitch je len záloha (fallback)!
              displayName:
                safeData.displayName ||
                prev.displayName ||
                user.user_metadata?.full_name ||
                userEmail.split("@")[0],
              isGuest: false,
              // ⚡ NEXUS FIX: DB avatar je svätý, prepíše akýkoľvek OAuth (Twitch/Github) avatar!
              avatar:
                safeData.avatar ||
                prev.avatar ||
                user.user_metadata?.avatar_url ||
                user.user_metadata?.picture ||
                "",
            };

            setNexusCookie(recoveredState);
            localStorage.setItem(
              "nexus_active_identity",
              JSON.stringify(recoveredState),
            );
            return recoveredState;
          });

          // 🛑 4. Keď je profil plne naloadovaný, schováme UplinkModal.
          setShowUplink(false);
        } catch (error) {
          console.error("🔥 Profil Sync Error:", error);
        } finally {
          // 🛑 5. Až teraz vypíname Loading. Žiadne blikanie na 3-krát.
          setIsBooting(false);
        }
      } else if (user?.is_anonymous) {
        setFirebaseUser(user);
        setUserState({
          ...DEFAULT_USER_STATE,
          email: "quest",
          displayName: "Quest Operátor",
          tier: "QUEST",
          isGuest: true,
          credits: 0,
          unlockedNodes: [],
        });
        setIsBooting(false);
      } else {
        // 🛑 GHOST-MODE FIX: Ak neexistuje ŽIADNA relácia (čistý/odhlásený užívateľ),
        // musíme okamžite zhodiť Boot Screen, inak tam zamrzne navždy!
        setFirebaseUser(null);
        setUserState({
          ...DEFAULT_USER_STATE,
          email: "quest",
          displayName: "Quest Operátor",
          tier: "QUEST",
          isGuest: true,
          credits: 0,
          unlockedNodes: [],
        });
        setIsBooting(false);
      }
    };

    const initAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          await handleSession(session);
        } else {
          let localState = {};
          try {
            localState = JSON.parse(
              localStorage.getItem("nexus_active_identity") || "{}",
            );
          } catch (e) {
            console.warn(
              "⚠️ [AUTH INIT]: Poškodený localState, prepínam na QUEST.",
            );
          }

          if (!localState.email || localState.email === "quest") {
            setUserState({
              ...DEFAULT_USER_STATE,
              email: "quest",
              displayName: "Quest Operátor",
              tier: "QUEST",
              isGuest: true,
              credits: 0,
              unlockedNodes: [],
            });
          }
          setShowUplink(false);
          // Zhodenie Boot Screenu
          setTimeout(() => setIsBooting(false), 2000);
        }

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, newSession) => {
          if (event === "SIGNED_OUT") {
            clearNexusCookie();
            localStorage.removeItem("nexus_active_identity");
            setUserState(DEFAULT_USER_STATE);
            setShowUplink(false); // Host po odhlásení ostáva v Matrixe
            setFirebaseUser(null);
          } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
            handleSession(newSession);
          }
        });

        // TOTO TI CHÝBALO: Správne odhlásenie listenera a uzatvorenie TRY bloku!
        return () => subscription.unsubscribe();
      } catch (e) {
        console.error("Auth Init Error:", e);
        setIsBooting(false);
      }
    };
    // 🚀 EXEKÚCIA MOTORA:
    initAuth();

    // 🛑 ULTIMÁTNA ZÁCHRANNÁ BRZDA (Failsafe)
    // Ak by Supabase náhodou zamrzol a neposlal odpoveď, o 3.5 sekundy sa UI odomkne násilím!
    const failsafe = setTimeout(() => {
      setIsBooting(false);
    }, 3500);

    // CLEAN-UP PRI ZAVRETÍ APPKY (Zabraňuje Memory Leakom)
    return () => {
      clearTimeout(failsafe);
      if (authSubscription) authSubscription.unsubscribe();
    };
  }, []); // 🛑 TU SA KONČÍ USE EFFECT PRE AUTH.

  useEffect(() => {
    if (!userState.isGuest && userState.email && userState.email !== "quest") {
      NexusDB.pingActiveStatus(userState.email);

      const unsub = NexusDB.subscribeToProfile(userState.email, (data) => {
        if (data) {
          setUserState((prev) => {
            const safeData = { ...data };
            Object.keys(safeData).forEach((key) => {
              if (safeData[key] === null) safeData[key] = "";
            });

            const nextState = {
              ...prev,
              ...safeData,
              unlockedNodes: safeData.unlockedNodes || prev.unlockedNodes || [],
            };

            // ⚡ OCHRANA: Neupdatujeme state, ak nedošlo k žiadnej zmene!
            // Týmto sme definitívne eliminovali re-rendery a blikanie profilu!
            if (JSON.stringify(prev) === JSON.stringify(nextState)) return prev;

            setNexusCookie(nextState);
            localStorage.setItem(
              "nexus_active_identity",
              JSON.stringify(nextState),
            );
            return nextState;
          });
        }
      });
      return () => {
        if (unsub) unsub();
      };
    }
  }, [userState.email, userState.isGuest]);

  // Tento handleUnlock sa teraz volá výhradne pre Quest užívateľov!
  const handleUnlock = (data) => {
    setUserState((prev) => {
      const newState = { ...DEFAULT_USER_STATE, ...data };
      setNexusCookie(newState);
      localStorage.setItem("nexus_active_identity", JSON.stringify(newState));
      return newState;
    });
    setShowUplink(false);
  };

 const handleLogout = async () => {
    if (typeof SoundFX !== "undefined" && SoundFX?.click) SoundFX.click();
    try {
      if (typeof supabase !== "undefined" && supabase?.auth) {
        await supabase.auth.signOut();
      }
    } catch (e) {
      console.error("⚠️ [NEXUS AUTH]: Supabase SignOut Error:", e);
    } finally {
      if (typeof clearNexusCookie === "function") clearNexusCookie();

      // Automatický výmaz VŠETKÝCH súčasných aj BUDÚCICH nexus_* kľúčov
      Object.keys(localStorage || {}).forEach((key) => {
        if (key.startsWith("nexus_")) localStorage.removeItem(key);
      });
      Object.keys(sessionStorage || {}).forEach((key) => {
        if (key.startsWith("nexus_")) sessionStorage.removeItem(key);
      });

      const hostname = typeof window !== "undefined" ? String(window.location.hostname || "") : "";
      const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

      if (isLocalhost) {
        // Na Localhoste zostávame na vývojovom porte!
        if (typeof navigate === "function") {
          navigate("/uplinkmodal");
        } else {
          window.location.href = "/uplinkmodal";
        }
      } else {
        // Na Produkcii smerujeme na centrálny Uplink
        window.location.href = "https://projekt-nexus.sk/login";
      }
    }
  };

  const NavButton = ({ id, icon: Icon, label, onClick }) => {
    const isActive = activeTab === id;
    return (
      <button
        title={label}
        onMouseEnter={() => SoundFX?.hover && SoundFX.hover()}
        onClick={() => {
          if (SoundFX?.click) SoundFX.click();
          if (onClick) {
            onClick();
          } else {
            navigateTo(id);
          }
        }}
        style={{
          cursor: "pointer",
          ...(isActive
            ? {
                backgroundColor: `${themeColor}20`,
                borderColor: `${themeColor}60`,
                boxShadow: `0 0 15px ${themeColor}30`,
              }
            : {}),
        }}
        className={`flex items-center gap-1.5 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 shrink-0 ${
          isActive
            ? "text-white"
            : "text-gray-500 hover:text-white hover:bg-white/5 border border-transparent"
        }`}
      >
        <Icon
          size={14}
          style={{ color: isActive ? themeColor : "inherit" }}
          className="transition-colors duration-500 shrink-0"
        />
        <span className="hidden xl:inline">{label}</span>
      </button>
    );
  };

  useEffect(() => {
    const routeCheck = {
      Sys01_VideoNodes,
      Sys02_Mentoring,
      Sys03_ImgGallery,
      Sys04_VideoGallery,
      SYS05_Directory,
      NodeViewer,
      NotFoundPage,
    };

    Object.entries(routeCheck).forEach(([name, comp]) => {
      if (!comp)
        console.error(
          `🚨 [CRITICAL ROUTE MISSING]: Komponent '${name}' je UNDEFINED! Skontroluj jeho import v App.jsx!`,
        );
    });
  }, []);

  // 🛑 ULTIMÁTNA OCHRANA: Jediný zjednotený Boot Screen po vyhodnotení všetkých hookov!
  if (isBooting && !isBot) {
    return (
      <div className="min-h-screen bg-[#03080a] flex flex-col items-center justify-center font-mono p-6">
        <div className="w-20 h-20 border-2 border-purple-500 rounded-full animate-ping opacity-20 absolute" />
        <Cpu
          className="text-purple-500 animate-pulse relative z-10"
          size={32}
        />
        <div className="mt-8 text-center space-y-2">
          <h2 className="text-white text-xl font-black tracking-[10px] uppercase italic">
            Nexus <span className="text-purple-500">OS</span>
          </h2>
          <p className="text-[#39FF14] text-[10px] uppercase tracking-widest font-bold">
            {systemStatus}
          </p>
        </div>
      </div>
    );
  }

  // Pridaný obal <HelmetProvider>, aby SEO tagy vnútri modalu nespadli
  if (showUplink) {
    return (
      <HelmetProvider>
        <UplinkModal
          onUnlock={handleUnlock}
          onViewVop={() => {
            setActiveTab("vop"); // Prepne Matrix na podmienky
            setShowUplink(false); // Dočasne schová modal, aby si ich mohol čítať
          }}
        />
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#03080a] text-[#b3d4d6] font-mono overflow-x-hidden flex flex-col relative text-left">
        <MetaTags
          title="PROJEKT NEXUS OS | GENESIS EDITION"
          description="Kybernetický operačný systém pre ľudské vedomie. Sémantická dekompresia, taktické kódexy a B2B digitálna architektúra."
          image="/img-nexus/pages/ShopPage.jpg"
          color={themeColor || "#FFD700"}
          url={location.pathname}
        />
        {/* 🛑 FIX: transform-gpu odstránený kvôli obnove fixed pozícií (Hamburger Menu opäť levituje) */}
        <style>{`
        ::selection { background-color: ${themeColor}; color: #000; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* ⚡ GLOBÁLNY RADAR OFFSET: Zastaví scroll 150px pred nadpisom */
        [id^="nexus-"] { scroll-margin-top: 150px; }
    `}</style>
        {/* ⚡ INJEKTÁŽ RÝCHLEHO NAVIGAČNÉHO UZLA (CHAMELEÓN) ⚡ */}
        {/* ⚡ ABSOLÚTNA KARANTÉNA: NA LOGINE VYPÍNAME GLOBÁLNE MENU */}
        {location.pathname !== "/login" &&
           (
            <div
              className={`relative z-50 pointer-events-none transition-all duration-300 ${showGlobalProfile ? "opacity-0 invisible" : "opacity-100 visible"}`}
            >
              <div className="pointer-events-auto">
                <GlobalHamburgerMenu
                  activeTab={activeTab}
                  themeColor={themeColor}
                />
                {/* 📡 DÁTOVÝ MOST: Posielame identitu priamo do motora pre overenie v Ústave */}
                <GlobalComponents
                  themeColor={themeColor}
                  userState={userState}
                />
              </div>
            </div>
          )}
        <GlobalProfil
          isOpen={showGlobalProfile}
          onClose={() => {
            setShowGlobalProfile(false);
            setTimeout(() => setTargetDossier(null), 300); // Po zatvorení vyčistí cudzie dáta
          }}
          isMaximized={isProfileMaximized}
          onToggleMaximize={() => setIsProfileMaximized(!isProfileMaximized)}
          // Ak existuje targetDossier, ukáž cudzí. Ak nie, ukáž tvoj vlastný (userState)
          profileData={targetDossier || userState}
          title={
            targetDossier
              ? `Dossier: ${targetDossier.displayName || "Entita"}`
              : "Profil Operátora"
          }
        />
        {GlobalMessages && (
          <GlobalMessages
            isOpen={isGlobalMessagesOpen}
            onClose={() => setIsGlobalMessagesOpen(false)}
            userState={userState}
            composeData={globalComposeData}
            clearComposeData={() => setGlobalComposeData(null)}
          />
        )}
        {/* ==================================================================== */}
        {/* 🧭 GLOBÁLNA SYSTÉMOVÁ NAVIGÁCIA (V20 CYBER-DOCK RESPONZÍVNY ŠTANDARD) */}
        {/* ==================================================================== */}
        {location.pathname !== "/login" && (
          <nav
            style={{ zIndex: 1000 }}
            className="fixed top-0 left-0 w-full border-b border-cyan-500/30 bg-[#030609]/95 backdrop-blur-xl px-2 sm:px-4 py-2 flex justify-between items-center shadow-[0_4px_25px_rgba(0,180,216,0.15)] font-mono text-left"
          >
            {/* 🛡️ ĽAVÁ ČASŤ: LOGO MATERSKEJ LODE + CYBER-DOCK DOCK TLAČIDLÁ */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 overflow-hidden">
              {/* LOGO MATERSKEJ LODE */}
              <div
                className="flex items-center gap-2 shrink-0 cursor-pointer group px-2 py-1 rounded-xl bg-[#080E14] border border-cyan-500/40 hover:border-cyan-300 transition-all shadow-[0_0_12px_rgba(0,180,216,0.2)]"
                onClick={() => navigateTo("home")}
                title="Projekt Nexus OS Genesis"
              >
                <div
                  className="p-1.5 rounded-lg transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: themeColor,
                    boxShadow: `0 0 15px ${themeColor}60`,
                  }}
                >
                  <Shield size={14} className="text-black font-black" />
                </div>
                <span className="text-white font-black tracking-widest uppercase italic text-xs sm:text-sm hidden md:inline-block">
                  NEXUS <span style={{ color: themeColor }}>OS</span>
                </span>
              </div>

              {/* CYBER-DOCK IKONY / TLAČIDLÁ (PRESVETLENÉ PRE MOBIL) */}
              <div className="flex items-center gap-1 overflow-x-auto hide-scroll py-0.5 max-w-full">
                <NavButton id="home" icon={Grid} label="Home" />
                <NavButton id="agency" icon={Briefcase} label="Agency" />
                <NavButton id="blog" icon={Terminal} label="Blog" />
                <NavButton id="operators" icon={Users} label="Operators" />
                <NavButton id="shop" icon={ShoppingCart} label="Shop" />
                <NavButton id="settings" icon={Settings} label="Settings" />

                {userState?.tier === "ARCHITECT" && (
                  <NavButton id="admin" icon={ShieldAlert} label="ADMIN" />
                )}
              </div>
            </div>

            {/* 🪙 PRAVÁ ČASŤ: SUBDOMÉNY + PEŇAŽENKA + INBOX + PROFIL + LOGOUT */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* INTEGRÁCIA SUBDOMÉNOVÉHO DROPDOWNU (BEZPEČNE UMIESTNENÝ V PRAVEJ ZBERNICI) */}
              <div className="shrink-0">
                <SubdomainDropdown
                  currentSubId={selectedSubId}
                  activeColor={themeColor}
                  onSelectSub={(subId) => {
                    setSelectedSubId(subId);
                    // ⚡ Ošetrenie pre prechod na subdoménu pri výbere z dropdownu
                    const mappedId = String(subId || "").toLowerCase().replace("sub_", "").replace(" ", "");
                    if (NEXUS_SUBDOMAIN_MAP[mappedId]) {
                      navigateTo(mappedId);
                    } else if (typeof setCurrentModule === "function") {
                      setCurrentModule("subdomains");
                    }
                  }}
                />
              </div>

              {/* KONTROLA PEŇAŽENKY S TOOLTIPOM */}
              <div className="relative group flex items-center shrink-0">
                <div className="transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] rounded-xl">
                  <GlobalWallet
                    balance={userState?.credits || 0}
                    userEmail={userState?.email || ""}
                    userTier={userState?.tier || "FREE"}
                    getTierColor={getTierColor}
                  />
                </div>

                {/* QUICK ACTIONS TOOLTIP */}
                <div className="absolute top-full right-0 mt-2 hidden group-hover:flex flex-col gap-1.5 p-3 rounded-xl bg-[#050A0E]/95 border border-amber-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.95)] backdrop-blur-md text-[11px] font-mono whitespace-nowrap z-50 pointer-events-none transition-all">
                  <div className="flex items-center justify-between gap-3 border-b border-amber-500/20 pb-1.5">
                    <span className="text-amber-400 font-black flex items-center gap-1">
                      <span>🪙</span> NEXUS KREDITY
                    </span>
                    <span
                      className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase"
                      style={{
                        backgroundColor: `${getTierColor(userState?.tier)}20`,
                        color: getTierColor(userState?.tier),
                        border: `1px solid ${getTierColor(userState?.tier)}50`,
                      }}
                    >
                      {userState?.tier || "FREE"}
                    </span>
                  </div>
                  <div className="text-gray-300 text-[10px] flex items-center justify-between gap-4">
                    <span>Zostatok:</span>
                    <strong className="text-white font-mono">
                      {userState?.credits || 0} OC
                    </strong>
                  </div>
                </div>
              </div>

              {/* INBOX BUTTON */}
              {userState && !userState.isGuest && (
                <button
                  onClick={() => {
                    if (SoundFX?.click) SoundFX.click();
                    setIsGlobalMessagesOpen(true);
                  }}
                  title="Súkromné Signály (INBOX)"
                  className="relative p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500 hover:text-black transition-colors shrink-0 cursor-pointer"
                >
                  <Mail size={15} />
                  {unreadMessagesCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full shadow-[0_0_8px_red] animate-bounce">
                      {unreadMessagesCount > 9 ? "9+" : unreadMessagesCount}
                    </span>
                  )}
                </button>
              )}

              {/* MENO A TIER (ZOBRAZENÉ AŽ OD XL ŠÍRKY) */}
              <div className="hidden xl:block text-right leading-tight max-w-[130px]">
                <p
                  className="text-[10px] font-black text-white uppercase tracking-wider truncate"
                  title={`Operátor: ${userState?.displayName || "GUEST_ENTITY"}`}
                >
                  {userState?.displayName || "GUEST_ENTITY"}
                </p>
                {(() => {
                  const isQuest =
                    userState?.isGuest ||
                    userState?.tier === "QUEST" ||
                    !userState?.email;
                  const activeTierLabel = isQuest
                    ? "QUEST"
                    : userState?.tier || "FREE";
                  const activeColorTier = getTierColor(activeTierLabel);
                  return (
                    <p
                      className="text-[7px] font-black uppercase tracking-widest"
                      style={{ color: activeColorTier }}
                    >
                      {activeTierLabel} TIER
                    </p>
                  );
                })()}
              </div>

              {/* AVATAR OPERÁTORA */}
              <div
                onClick={() => setShowGlobalProfile(true)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 cursor-pointer overflow-hidden flex items-center justify-center transition-transform hover:scale-105 bg-black shrink-0 relative"
                style={{
                  borderColor: getTierColor(
                    userState?.isGuest ||
                      userState?.tier === "QUEST" ||
                      !userState?.email
                      ? "QUEST"
                      : userState?.tier || "FREE",
                  ),
                }}
                title="Profil Operátora"
              >
                {userState?.avatar ? (
                  <img
                    src={userState.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User
                    size={14}
                    style={{
                      color:
                        userState?.tier === "QUEST" || userState?.isGuest
                          ? "#6B7280"
                          : getTierColor(userState?.tier || "FREE"),
                    }}
                  />
                )}
              </div>

              {/* LOGOUT TLAČIDLO */}
              <button
                onClick={() => {
                  if (typeof handleLogout === "function") {
                    handleLogout();
                  } else if (typeof navigate === "function") {
                    navigate("/login");
                  } else {
                    window.location.href = "/login";
                  }
                }}
                title="Odhlásiť sa zo systému"
                className="px-2 py-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-black transition-all shrink-0 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider cursor-pointer"
              >
                <LogOut size={13} />
                <span className="hidden xl:inline">LOGOUT</span>
              </button>
            </div>
          </nav>
        )}

        {/* 🧭 HLAVNÝ OBSAHOVÝ KONTAJNER MATRIXU */}

        <main
          className={
            getIsAdminSubdomain() ||
            getIsAgencySubdomain() ||
            location.pathname.includes("/agency")
              ? "pt-24 flex-1 relative z-10"
              : "pt-24 flex-1 px-2 md:px-8 pb-20 text-left relative z-10"
          }
        >
          <div
            className={
              getIsAdminSubdomain() ||
              getIsAgencySubdomain() ||
              location.pathname.includes("/agency")
                ? "w-full"
                : "max-w-7xl mx-auto w-full text-left"
            }
          >
            {/* <HelmetProvider> */}
            <SystemErrorBoundary>
              {/* 🏰 0. Globálna Klávesnica (Aktívna pre celý OS Genesis) */}
              <GlobalKeyboard />

              {getIsAdminSubdomain() ? (
                /* 🏰 1. ADMIN SUBDOMÉNA */
                <AdminPage
                  setActiveTab={setActiveTab}
                  userState={userState}
                  themeColor={themeColor}
                  setThemeColor={setThemeColor}
                  onThemeChange={setThemeColor}
                />
              ) : (
                /* 🌍 2. HLAVNÝ MATRIX (V20 BYPASS ROUTING) */
                <Routes>
                  {/* ALIAS TRASA 1 (ENGLISH URL) */}
                  <Route
                    path="/subdomains/*"
                    element={
                      <SubdomainStandbyPage
                        subId={selectedSubId || "SUB 00"}
                        onThemeChange={setThemeColor}
                        onBackToHome={() => setSelectedSubId(null)}
                      />
                    }
                  />

                  {/* ALIAS TRASA 2 (SLOVAK URL) */}
                  <Route
                    path="/subdomeny/*"
                    element={
                      <SubdomainStandbyPage
                        subId={selectedSubId || "SUB 00"}
                        onThemeChange={setThemeColor}
                        onBackToHome={() => setSelectedSubId(null)}
                      />
                    }
                  />
                  {/* ======================================================= */}
                  {/* 🚪 1. MODALS & AUTH GATEWAY                             */}
                  {/* ======================================================= */}
                  <Route
                    path="/uplinkmodal/login/*"
                    element={
                      <PublicRoute userState={userState}>
                        <UplinkModal
                          userState={userState}
                          setUserState={setUserState}
                          onSuccess={() => {
                            const hostname = typeof window !== "undefined" ? String(window.location.hostname || "") : "";
                            const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
                            if (isLocalhost) {
                              navigate("/");
                            } else {
                              window.location.href = "https://projekt-nexus.sk";
                            }
                          }}
                        />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/uplinkmodal/register/*"
                    element={
                      <PublicRoute userState={userState}>
                        <UplinkModal
                          userState={userState}
                          setUserState={setUserState}
                          onSuccess={() => {
                            const hostname = typeof window !== "undefined" ? String(window.location.hostname || "") : "";
                            const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
                            if (isLocalhost) {
                              navigate("/");
                            } else {
                              window.location.href = "https://projekt-nexus.sk";
                            }
                          }}
                        />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/uplinkmodal/*"
                    element={
                      <PublicRoute userState={userState}>
                        <UplinkModal
                          userState={userState}
                          setUserState={setUserState}
                          onSuccess={() => {
                            const hostname = typeof window !== "undefined" ? String(window.location.hostname || "") : "";
                            const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
                            if (isLocalhost) {
                              navigate("/");
                            } else {
                              window.location.href = "https://projekt-nexus.sk";
                            }
                          }}
                        />
                      </PublicRoute>
                    }
                  />

                  {/* ======================================================= */}
                  {/* 🟢 2. PUBLIC CORE (Trojan Horse & Blog)                 */}
                  {/* ======================================================= */}
                  <Route
                    path="/"
                    element={
                      <PublicRoute>
                        <HomePage
                          setActiveTab={setActiveTab}
                          userState={userState}
                          themeColor={themeColor}
                          setThemeColor={setThemeColor}
                          onThemeChange={setThemeColor}
                        />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/home/*"
                    element={
                      <PublicRoute>
                        <HomePage
                          setActiveTab={setActiveTab}
                          userState={userState}
                          themeColor={themeColor}
                          setThemeColor={setThemeColor}
                          onThemeChange={setThemeColor}
                        />
                      </PublicRoute>
                    }
                  />

                  <Route
                    path="/agency/*"
                    element={
                      <NexusAgencyPage
                        userState={userState}
                        getTierColor={getTierColor}
                        themeColor={themeColor}
                        onThemeChange={setThemeColor}
                      />
                    }
                  />

                  <Route
                    path="/blog/*"
                    element={
                      <PublicRoute>
                        <BlogPage
                          setActiveTab={setActiveTab}
                          userState={userState}
                          themeColor={themeColor}
                          onThemeChange={setThemeColor}
                        />
                      </PublicRoute>
                    }
                  />

                  {/* ======================================================= */}
                  {/* 🛒 3. E-SHOP SURODENCI (Tokenomics & Media)             */}
                  {/* ======================================================= */}
                  <Route
                    path="/shop/*"
                    element={
                      <GlobalQuestAuth activeUser={userState}>
                        <ShopPage
                          setActiveTab={setActiveTab}
                          userState={userState}
                          themeColor={themeColor}
                          setThemeColor={setThemeColor}
                          onThemeChange={setThemeColor}
                        />
                      </GlobalQuestAuth>
                    }
                  />
                  <Route
                    path="/shop/documents/*"
                    element={
                      <GlobalQuestAuth activeUser={userState}>
                        <ShopDocumentsMedia />
                      </GlobalQuestAuth>
                    }
                  />
                  <Route
                    path="/shop/images/*"
                    element={
                      <GlobalQuestAuth activeUser={userState}>
                        <ShopImageMedia />
                      </GlobalQuestAuth>
                    }
                  />
                  <Route
                    path="/shop/audios/*"
                    element={
                      <GlobalQuestAuth activeUser={userState}>
                        <ShopAudioMedia />
                      </GlobalQuestAuth>
                    }
                  />
                  <Route
                    path="/shop/videos/*"
                    element={
                      <GlobalQuestAuth activeUser={userState}>
                        <ShopVideoMedia />
                      </GlobalQuestAuth>
                    }
                  />
                  <Route
                    path="/shop/apps/*"
                    element={
                      <GlobalQuestAuth activeUser={userState}>
                        <ShopAppsMedia />
                      </GlobalQuestAuth>
                    }
                  />

                  {/* ======================================================= */}
                  {/* 🛡️ 4. SPRÁVA, OPERÁTORI & ADMIN                         */}
                  {/* ======================================================= */}
                  <Route
                    path="/settings/*"
                    element={
                      <AuthRoute>
                        <SettingsPage
                          setActiveTab={setActiveTab}
                          userState={userState}
                          setUserState={setUserState}
                          themeColor={themeColor}
                          setThemeColor={setThemeColor}
                          onThemeChange={setThemeColor}
                        />
                      </AuthRoute>
                    }
                  />
                  <Route
                    path="/operators/*"
                    element={
                      <AuthRoute>
                        <OperatorsPage
                          setActiveTab={setActiveTab}
                          userState={userState}
                          themeColor={themeColor}
                          setThemeColor={setThemeColor}
                          onThemeChange={setThemeColor}
                        />
                      </AuthRoute>
                    }
                  />
                  <Route
                    path="/operator/:entityId/*"
                    element={
                      <OperatorPage
                        setActiveTab={setActiveTab}
                        userState={userState}
                        themeColor={themeColor}
                        setThemeColor={setThemeColor}
                        onThemeChange={setThemeColor}
                      />
                    }
                  />
                  <Route
                    path="/admin/*"
                    element={
                      <AuthRoute>
                        <AdminPage
                          setActiveTab={setActiveTab}
                          userState={userState}
                          themeColor={themeColor}
                          setThemeColor={setThemeColor}
                          onThemeChange={setThemeColor}
                        />
                      </AuthRoute>
                    }
                  />

                  {/* ======================================================= */}
                  {/* 🚀 5. SATELITNÝ BRAND TELEPORT (Nexus Agency)           */}
                  {/* ======================================================= */}
                  {/* Presuntá na vrch a presmerovaný port na localhost 3000 */}

                  {/* ======================================================= */}
                  {/* 🌌 6. KOGNITÍVNE DIMENZIE (ID00 - ID15 PODĽA ČÍSEL)     */}
                  {/* ======================================================= */}
                  <Route
                    path="/ID00/*"
                    element={
                      <PublicRoute>
                        <ID00_Mentor />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/ID01/*"
                    element={
                      <PublicRoute>
                        <ID01_Identity />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/ID02/*"
                    element={
                      <PublicRoute>
                        <ID02_Workflow />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/ID03/*"
                    element={
                      <StrictRoute requiredTier="PRO">
                        <ID03_Finance />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID04/*"
                    element={
                      <StrictRoute requiredTier="PRO">
                        <ID04_Revenue />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID05/*"
                    element={
                      <StrictRoute requiredTier="OMEGA">
                        <ID05_Assets />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID06/*"
                    element={
                      <StrictRoute requiredTier="PRO">
                        <ID06_Study />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID07/*"
                    element={
                      <StrictRoute requiredTier="PRO">
                        <ID07_Skills />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID08/*"
                    element={
                      <PublicRoute>
                        <ID08_Reader />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/ID09/*"
                    element={
                      <PublicRoute>
                        <ID09_Player />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/ID10/*"
                    element={
                      <PublicRoute>
                        <ID10_Home />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/ID11/*"
                    element={
                      <StrictRoute requiredTier="PRO">
                        <ID11_Recovery />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID12/*"
                    element={
                      <StrictRoute requiredTier="OMEGA">
                        <ID12_Codex />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID13/*"
                    element={
                      <StrictRoute requiredTier="OMEGA">
                        <ID13_Habits />
                      </StrictRoute>
                    }
                  />
                  <Route
                    path="/ID14/*"
                    element={
                      <PublicRoute>
                        <ID14_Blog />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/ID15/*"
                    element={
                      <PublicRoute>
                        <ID15_Death />
                      </PublicRoute>
                    }
                  />

                  {/* ======================================================= */}
                  {/* 📡 7. SYSTÉMOVÉ MODULY (SYS01 - SYS05)                  */}
                  {/* ======================================================= */}
                  <Route
                    path="/Sys01_VideoNodes/*"
                    element={
                      <PublicRoute>
                        <Sys01_VideoNodes />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/Sys02_Mentoring/*"
                    element={
                      <StrictRoute requiredTier="OMEGA">
                        <Sys02_Mentoring />
                      </StrictRoute>
                    }
                  />

                  <Route
                    path="/Sys03_ImgGallery/*"
                    element={
                      <PublicRoute>
                        <Sys03_ImgGallery />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/Sys04_VideoGallery/*"
                    element={
                      <PublicRoute>
                        <Sys04_VideoGallery />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/SYS05_Directory/*"
                    element={<SYS05_Directory />}
                  />
                  <Route path="/links/*" element={<SYS05_Directory />} />

                  {/* ======================================================= */}
                  {/* 🌌 8. SUBDOMÉNY OS GENESIS (SUB 00 - SUB 15 REGISTER)    */}
                  {/* ======================================================= */}
                  {[
                    "00", "01", "02", "03", "04", "05", "06", "07",
                    "08", "09", "10", "11", "12", "13", "14", "15"
                  ].flatMap((num) => [
                    <Route
                      key={`sub-dash-${num}`}
                      path={`/sub-${num}/*`}
                      element={
                        <SubdomainStandbyPage
                          subId={`SUB ${num}`}
                          onThemeChange={setThemeColor}
                          onBackToHome={() => setSelectedSubId(null)}
                        />
                      }
                    />,
                    <Route
                      key={`sub-lower-${num}`}
                      path={`/sub${num}/*`}
                      element={
                        <SubdomainStandbyPage
                          subId={`SUB ${num}`}
                          onThemeChange={setThemeColor}
                          onBackToHome={() => setSelectedSubId(null)}
                        />
                      }
                    />,
                  ])}

                  {/* ======================================================= */}
                  {/* ⚖️ 9. PRÁVNA INTEGRITA & DOKUMENTY                      */}
                  {/* ======================================================= */}
                  <Route
                    path="/vop/*"
                    element={
                      <PublicRoute>
                        <VopPage onBack={() => navigate("/")} />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/privacy/*"
                    element={
                      <PublicRoute>
                        <PrivacyPage onBack={() => navigate("/")} />
                      </PublicRoute>
                    }
                  />

                  {/* ======================================================= */}
                  {/* 🎯 10. DYNAMICKÝ PARAMETER UZLA (Až za konkrétnymi ID)    */}
                  {/* ======================================================= */}
                  <Route
                    path="/:nodeId/*"
                    element={
                      <PublicRoute>
                        <NodeViewer />
                      </PublicRoute>
                    }
                  />

                  {/* ======================================================= */}
                  {/* 🛑 11. ZÁCHRANNÁ BRZDA 404 (ÚPLNE POSLEDNÁ)              */}
                  {/* ======================================================= */}
                  <Route
                    path="*"
                    element={
                      <PublicRoute>
                        <NotFoundPage />
                      </PublicRoute>
                    }
                  />
                </Routes>
              )}
            </SystemErrorBoundary>
          </div>
        </main>
        {/* ⚡ ZÁKAZ VYKRESLENIA DOMOVSKÉHO FOOTERU NA SYS PORTOCH */}
        {/* {!location.pathname.includes("/ID") &&
          !location.pathname.includes("nexus_") &&
          !location.pathname.includes("video_") &&
          location.pathname !== "/login" && ( */}
          {(
            <GlobalFooter
              userTier={
                userState?.isGuest || !userState?.email || userState?.tier === "QUEST"
                  ? "QUEST"
                  : userState?.tier || "FREE"
              }
              themeColor={
                typeof themeColor !== "undefined" ? themeColor : "#39FF14"
              }
              activeTab={
                location.pathname === "/"
                  ? "home"
                  : location.pathname.replace(/^\//, "").split("/") || activeTab || "home"
              }
              onNavigate={(path) => {
                const cleanId = String(path || "").replace(/^\//, "");
                if (typeof navigateTo === "function") {
                  navigateTo(cleanId || "home");
                } else if (typeof navigate === "function") {
                  navigate(path);
                }
              }}
              onOpenSystemLog={() =>
                typeof setIsSystemLogOpen === "function" &&
                setIsSystemLogOpen(true)
              }
              uptime={
                typeof coreUptimeSeconds !== "undefined" ? coreUptimeSeconds : 0
              }
            />
          )}
        <SystemLogModal
          isOpen={isSystemLogOpen}
          onClose={() => setIsSystemLogOpen(false)}
          themeColor={themeColor}
        />
      </div>
    </HelmetProvider>
  );
};
export default App;