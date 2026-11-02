import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  Database,
  Users,
  Settings,
  Activity,
  Terminal,
  ArrowLeft,
  Server,
  Lock,
  Layout,
  Cpu,
  Trophy,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Table,
  Trash2,
  Copy,
  Check,
  Globe,
  Download,
  FileCode,
  Sparkles,
  ExternalLink,
  Search,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (PRODUKČNÝ STACK NEXUS OS)
// ============================================================================
import { NexusDB } from "@shared/services/GlobalNexusDB_Core";
import { SoundFX } from "@shared/utils/SoundEngine";

// 📦 DÁTOVÉ REGISTRE PRE AUTONÓMNY URL MATRIX SCANNER
import { SEO_REGISTRY } from "@admin/data/seoRegistry";
import { SHOP_AUDIO_DATA } from "@admin/data/ShopAudioMedia";
import { SHOP_DOCUMENTS_DATA } from "@admin/data/ShopDocumentsMedia";
import { SHOP_APPS_DATA } from "@admin/data/ShopAppsMedia";
import AVATARS_BOTS_DATA from "@admin/data/ShopImageMedia/Avatars-Bots";
import { SERVICES_DATA } from "@admin/data/ShopPage/Services";
import { PACKS_DATA } from "@admin/data/ShopPage/Packs";
import { MATRIX_FX_DATA } from "@admin/data/ShopPage/MatrixFX";

// ============================================================================
// ⚡ IMMORTAL NEXUS LOG ANALYZER (Prežije F5 aj Hot-Reload cez SessionStorage)
// ============================================================================
if (typeof window !== "undefined" && !window.__NEXUS_LOG_DATA) {
  window.__NEXUS_LOG_DATA = {
    active: false,
    logCount: parseInt(sessionStorage.getItem("NEXUS_DIAG_COUNT") || "0", 10),
    totalBytes: parseInt(sessionStorage.getItem("NEXUS_DIAG_BYTES") || "0", 10),
    hotPaths: JSON.parse(sessionStorage.getItem("NEXUS_DIAG_PATHS") || "{}"),
  };
}

const saveStatsToSession = () => {
  if (typeof window !== "undefined" && window.__NEXUS_LOG_DATA) {
    sessionStorage.setItem(
      "NEXUS_DIAG_COUNT",
      String(window.__NEXUS_LOG_DATA.logCount),
    );
    sessionStorage.setItem(
      "NEXUS_DIAG_BYTES",
      String(window.__NEXUS_LOG_DATA.totalBytes),
    );
    sessionStorage.setItem(
      "NEXUS_DIAG_PATHS",
      JSON.stringify(window.__NEXUS_LOG_DATA.hotPaths),
    );
  }
};

const activateGlobalAnalyzer = () => {
  if (typeof window === "undefined" || window.__NEXUS_LOG_DATA.active) return;
  window.__NEXUS_LOG_DATA.active = true;
  sessionStorage.setItem("NEXUS_DIAG_ACTIVE", "true");

  const originalLog = console.log;
  const encoder = new TextEncoder();

  console.log = function (...args) {
    if (!window.__NEXUS_LOG_DATA.active) {
      return originalLog.apply(console, args);
    }

    window.__NEXUS_LOG_DATA.logCount++;
    try {
      const serialized = args
        .map((arg) => {
          try {
            return typeof arg === "object" ? JSON.stringify(arg) : String(arg);
          } catch (e) {
            return "[Unserializable Object]";
          }
        })
        .join(" ");

      const bytes = encoder.encode(serialized).length;
      window.__NEXUS_LOG_DATA.totalBytes += bytes;

      const stack = new Error().stack;
      const callerLine = stack ? stack.split("\n")[2] : "";
      const cleanCaller = callerLine
        ? callerLine.trim().replace(/^at /, "")
        : "Neznámy pôvodca";

      if (!window.__NEXUS_LOG_DATA.hotPaths[cleanCaller]) {
        window.__NEXUS_LOG_DATA.hotPaths[cleanCaller] = { count: 0, bytes: 0 };
      }
      window.__NEXUS_LOG_DATA.hotPaths[cleanCaller].count++;
      window.__NEXUS_LOG_DATA.hotPaths[cleanCaller].bytes += bytes;

      if (window.__NEXUS_LOG_DATA.logCount % 50 === 0) {
        saveStatsToSession();
      }
    } catch (err) {
      // Tichý fallback
    }
    originalLog.apply(console, args);
  };

  window.addEventListener("beforeunload", saveStatsToSession);
};

const stopAndClearGlobalAnalyzer = () => {
  if (typeof window === "undefined") return;
  window.__NEXUS_LOG_DATA.active = false;
  window.__NEXUS_LOG_DATA.logCount = 0;
  window.__NEXUS_LOG_DATA.totalBytes = 0;
  window.__NEXUS_LOG_DATA.hotPaths = {};
  sessionStorage.removeItem("NEXUS_DIAG_ACTIVE");
  sessionStorage.removeItem("NEXUS_DIAG_COUNT");
  sessionStorage.removeItem("NEXUS_DIAG_BYTES");
  sessionStorage.removeItem("NEXUS_DIAG_PATHS");
};

// Auto-Štart pri načítaní stránky (ak to bolo zapnuté predtým)
if (
  typeof window !== "undefined" &&
  sessionStorage.getItem("NEXUS_DIAG_ACTIVE") === "true"
) {
  activateGlobalAnalyzer();
}

// ============================================================================
// 📊 SUBKOMPONENT: ADMIN CARD METRIKA
// ============================================================================
const AdminCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-black/40 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-4 relative overflow-hidden group hover:border-white/20 transition-all">
    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={100} />
    </div>
    <div className="flex items-center gap-3 text-white/40 relative z-10">
      <Icon size={16} style={{ color }} />
      <span className="text-[9px] font-black uppercase tracking-widest font-mono">
        {title}
      </span>
    </div>
    <div className="text-3xl font-black text-white tracking-tighter relative z-10 font-mono">
      {value}
    </div>
  </div>
);

// ============================================================================
// 🏆 SUBKOMPONENT: MATRIX ADMIN TOOLS (MESAČNÝ RESET A OC BODY)
// ============================================================================
const MatrixAdminTools = ({ users }) => {
  const [isResetting, setIsResetting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState(null);

  const handleMonthlyReset = async () => {
    setIsResetting(true);
    setStatus("ARCHIVING_REWARDS...");
    try {
      const updatePromises = (users || []).map(async (user, index) => {
        const updates = { monthly_earned_oc: 0 };
        if (index === 0 && (user.monthly_earned_oc || 0) > 0)
          updates.wins_gold = (user.wins_gold || 0) + 1;
        if (index === 1 && (user.monthly_earned_oc || 0) > 0)
          updates.wins_silver = (user.wins_silver || 0) + 1;
        if (index === 2 && (user.monthly_earned_oc || 0) > 0)
          updates.wins_bronze = (user.wins_bronze || 0) + 1;
        return NexusDB.updateProfileData(user.email, updates);
      });
      await Promise.all(updatePromises);
      setStatus("SUCCESS");
      if (SoundFX?.success) SoundFX.success();
      setTimeout(() => {
        setStatus(null);
        setShowConfirm(false);
      }, 4000);
    } catch (error) {
      console.error("Reset failed:", error);
      setStatus("ERROR");
      if (SoundFX?.error) SoundFX.error();
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#FF003C]/10 to-transparent border border-[#FF003C]/20 p-8 rounded-[2.5rem] flex flex-col items-center text-center font-mono">
      {!showConfirm ? (
        <>
          <div className="p-4 bg-black rounded-full border border-[#FF003C]/30 mb-4 shadow-[0_0_20px_rgba(255,0,60,0.2)]">
            <RotateCcw
              size={24}
              className="text-[#FF003C] animate-[spin_10s_linear_infinite]"
            />
          </div>
          <h3 className="text-lg font-black uppercase mb-2 tracking-widest italic text-white">
            Mesačná Uzávierka
          </h3>
          <p className="text-white/40 text-[10px] max-w-sm mb-6 uppercase tracking-widest leading-relaxed">
            Pridelenie trofejí lídrom a{" "}
            <span className="text-[#FF003C] font-black">
              vynulovanie mesačných bodov
            </span>{" "}
            pre celú sieť.
          </p>
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-[#FF003C] hover:bg-[#FF4060] text-white font-black uppercase text-[10px] tracking-[0.2em] px-10 py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(255,0,60,0.3)] cursor-pointer"
          >
            Inicializovať Reset
          </button>
        </>
      ) : (
        <div className="w-full">
          {status === "SUCCESS" ? (
            <div className="flex flex-col items-center py-4 animate-in zoom-in">
              <CheckCircle2 size={48} className="text-[#00FF00] mb-4" />
              <h3 className="text-xl font-black uppercase text-[#00FF00] tracking-widest">
                Sieť Resetovaná
              </h3>
            </div>
          ) : (
            <div className="max-w-xs mx-auto space-y-6">
              <div className="flex items-center justify-center gap-3 text-[#FFD700] bg-[#FFD700]/10 p-4 rounded-2xl border border-[#FFD700]/20">
                <AlertTriangle size={20} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Vyžaduje sa potvrdenie
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white/50 rounded-xl text-[10px] font-black uppercase border border-white/10 transition-all cursor-pointer"
                >
                  Zrušiť
                </button>
                <button
                  onClick={handleMonthlyReset}
                  disabled={isResetting}
                  className="flex-1 py-4 bg-[#00FF00] text-black rounded-xl text-[10px] font-black uppercase transition-all hover:brightness-110 active:scale-95 cursor-pointer font-bold"
                >
                  {isResetting ? "Spracúvam..." : "Potvrdiť"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 🌐 SUBKOMPONENT: AUTONÓMNY URL MATRIX SCANNER (V20 ENGINE)
// ============================================================================
const NexusUrlScanner = () => {
  const [copied, setCopied] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const BASE_URL = "https://" + "projekt-nexus.sk";
  const AGENCY_URL = "https://" + "agency.projekt-nexus.sk";
  const ADMIN_URL = "https://" + "admin." + "projekt-nexus.sk";

  // 1. Zber a kategorizácia trás do kanonických 12 kategórií
  const categories = {
    HomePage: new Set(),
    Blog: new Set(),
    Operators: new Set(),
    "Shop/Nexus Shop": new Set(),
    "Shop/Videos Media": new Set(),
    "Shop/Audios Media": new Set(),
    "Shop/Images Media": new Set(),
    "Shop/Documnets Media": new Set(),
    "Shop/Apps Media": new Set(),
    Settings: new Set(),
    Admin: new Set(),
    Agency: new Set(),
  };

  const categorize = (url) => {
    const lower = String(url || "").toLowerCase();
    if (
      lower.includes("admin." + "projekt-nexus.sk") ||
      lower.includes("/admin")
    ) {
      categories["Admin"].add(url);
    } else if (
      lower.includes("agency.projekt-nexus.sk") ||
      lower.includes("/agency")
    ) {
      categories["Agency"].add(url);
    } else if (lower.includes("/shop/videos")) {
      categories["Shop/Videos Media"].add(url);
    } else if (lower.includes("/shop/audios")) {
      categories["Shop/Audios Media"].add(url);
    } else if (lower.includes("/shop/images")) {
      categories["Shop/Images Media"].add(url);
    } else if (lower.includes("/shop/documents")) {
      categories["Shop/Documnets Media"].add(url);
    } else if (lower.includes("/shop/apps")) {
      categories["Shop/Apps Media"].add(url);
    } else if (lower.includes("/shop")) {
      categories["Shop/Nexus Shop"].add(url);
    } else if (lower.includes("/blog")) {
      categories["Blog"].add(url);
    } else if (lower.includes("/operator")) {
      categories["Operators"].add(url);
    } else if (lower.includes("/settings")) {
      categories["Settings"].add(url);
    } else {
      categories["HomePage"].add(url);
    }
  };

  // Sken trás zo SEO registra
  if (typeof SEO_REGISTRY !== "undefined" && SEO_REGISTRY) {
    Object.keys(SEO_REGISTRY).forEach((path) => {
      const p = path.startsWith("/") ? path : "/" + path;
      categorize(BASE_URL + p);
    });
  }

  // Sken Shop Audio Media
  if (Array.isArray(SHOP_AUDIO_DATA)) {
    SHOP_AUDIO_DATA.forEach((item) => {
      if (item?.id) categorize(BASE_URL + "/shop/audios?audio=" + item.id);
    });
  }

  // Sken Shop Documents Media
  if (Array.isArray(SHOP_DOCUMENTS_DATA)) {
    SHOP_DOCUMENTS_DATA.forEach((item) => {
      if (item?.id) categorize(BASE_URL + "/shop/documents/all/" + item.id);
    });
  }

  // Sken Shop Apps Media
  if (Array.isArray(SHOP_APPS_DATA)) {
    SHOP_APPS_DATA.forEach((item) => {
      if (item?.id) categorize(BASE_URL + "/shop/apps/all/" + item.id);
    });
  }

  // Sken 3D Avatarov
  if (Array.isArray(AVATARS_BOTS_DATA)) {
    AVATARS_BOTS_DATA.forEach((item) => {
      if (item?.id) categorize(BASE_URL + "/shop/images?avatar=" + item.id);
    });
  }

  // Sken Agency služieb
  if (SERVICES_DATA && typeof SERVICES_DATA === "object") {
    Object.keys(SERVICES_DATA).forEach((key) => {
      categorize(AGENCY_URL + "/?srv=" + key);
    });
  }

  // Sken Balíkov a Matrix FX
  if (PACKS_DATA && typeof PACKS_DATA === "object") {
    Object.values(PACKS_DATA).forEach((p) => {
      if (p?.id) categorize(BASE_URL + "/shop/shop/all/" + p.id);
    });
  }
  if (MATRIX_FX_DATA && typeof MATRIX_FX_DATA === "object") {
    Object.values(MATRIX_FX_DATA).forEach((fx) => {
      if (fx?.id) categorize(BASE_URL + "/shop/shop/all/" + fx.id);
    });
  }

  // Výpočet celkového počtu unikátnych URL
  const totalUrlsCount = Object.values(categories).reduce(
    (acc, set) => acc + set.size,
    0,
  );

  // Generátor Markdown Sitemapy
  const generateMarkdownString = () => {
    let md = "# 👑 NEXUS OS & NEXUS AGENCY // AUTONOMOUS MASTER SITEMAP\n";
    md +=
      "> **Dátum vygenerovania:** " + new Date().toLocaleString("sk-SK") + "\n";
    md += "> **Autorita:** Root Architect @nexus-core2Mb\n";
    md +=
      "> **Štandard:** V20 Kánon // Zero Improvisation // 100% In-Memory Live Scan\n";
    md += "> **Celkový počet URL adries:** " + totalUrlsCount + "\n\n";
    md += "---\n\n";

    for (const [catName, urlSet] of Object.entries(categories)) {
      const list = Array.from(urlSet).sort();
      md += "### 📂 " + catName + " (" + list.length + ")\n\n";
      if (list.length === 0) {
        md += "_Žiadne detegované trasy v tejto kategórii._\n\n";
      } else {
        list.forEach((u) => {
          md += "- [ ] `" + u + "`\n";
        });
        md += "\n";
      }
    }
    return md;
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdownString();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(md).then(() => {
        setCopied(true);
        if (SoundFX?.success) SoundFX.success();
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const handleDownloadMarkdown = () => {
    const md = generateMarkdownString();
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download =
      "NEXUS_MASTER_SITEMAP_" + new Date().toISOString().slice(0, 10) + ".md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
    if (SoundFX?.click) SoundFX.click();
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 font-mono text-left">
      {/* ⚡ HERO HUD PANEL SCANNERA */}
      <div className="p-6 md:p-8 bg-[#050A0E] border border-[#00f3ff]/30 rounded-3xl shadow-[0_0_30px_rgba(0,243,255,0.1)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f3ff] animate-ping" />
            <span className="text-[10px] font-black uppercase text-[#00f3ff] tracking-widest">
              URL_ENGINE // V20 LIVE SCANNER
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white flex items-center gap-3">
            <Globe className="text-[#00f3ff]" size={32} /> Master URL Matrix
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Autonómny zber a kategorizácia všetkých trás zo SEO registrov a 6
            súrodencov.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
            <span className="text-[10px] uppercase text-zinc-400 font-bold">
              Registrované URL:
            </span>
            <span className="text-xl font-black text-[#39FF14]">
              {totalUrlsCount}
            </span>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="flex-1 sm:flex-none px-5 py-3.5 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/40 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
          >
            {copied ? (
              <Check size={16} className="text-[#39FF14]" />
            ) : (
              <Copy size={16} />
            )}
            {copied ? "Skopírované" : "Kopírovať .MD"}
          </button>

          <button
            onClick={handleDownloadMarkdown}
            className="flex-1 sm:flex-none px-5 py-3.5 bg-[#39FF14]/15 hover:bg-[#39FF14] text-[#39FF14] hover:text-black border border-[#39FF14]/40 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.2)]"
          >
            <Download size={16} /> Stiahnuť SITEMAP.MD
          </button>
        </div>
      </div>

      {/* 🔍 FILTER A PREHĽAD KATEGÓRIÍ */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-black/60 p-4 rounded-2xl border border-white/5">
        <div className="flex items-center gap-2 overflow-x-auto hide-scroll pb-2 md:pb-0">
          <button
            onClick={() => setActiveCategoryFilter("ALL")}
            className={
              "px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all whitespace-nowrap cursor-pointer " +
              (activeCategoryFilter === "ALL"
                ? "bg-white text-black font-black"
                : "bg-white/5 text-zinc-400 hover:text-white")
            }
          >
            Všetky ({totalUrlsCount})
          </button>
          {Object.entries(categories).map(([cat, set]) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={
                "px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all whitespace-nowrap cursor-pointer " +
                (activeCategoryFilter === cat
                  ? "bg-[#00f3ff] text-black font-black"
                  : "bg-white/5 text-zinc-400 hover:text-white")
              }
            >
              {cat} ({set.size})
            </button>
          ))}
        </div>

        <div className="relative">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="text"
            placeholder="Filtrovať trasu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-black/80 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 outline-none focus:border-[#00f3ff]/50 min-w-[220px]"
          />
        </div>
      </div>

      {/* 📋 DYNAMICKÁ MRIEŽKA KATEGÓRIÍ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(categories)
          .filter(
            ([cat]) =>
              activeCategoryFilter === "ALL" || activeCategoryFilter === cat,
          )
          .map(([catName, urlSet]) => {
            const urls = Array.from(urlSet).sort();
            const filteredUrls = urls.filter((u) =>
              u.toLowerCase().includes(searchQuery.toLowerCase()),
            );
            if (filteredUrls.length === 0 && searchQuery) return null;

            return (
              <div
                key={catName}
                className="p-5 bg-[#050A0E] border border-white/10 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <h3 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                      <FileCode size={14} className="text-[#00f3ff]" />{" "}
                      {catName}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10 font-bold">
                      {filteredUrls.length}
                    </span>
                  </div>

                  <div className="space-y-1.5 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                    {filteredUrls.length > 0 ? (
                      filteredUrls.map((u, idx) => (
                        <div
                          key={idx}
                          className="p-2 bg-black/40 hover:bg-white/5 border border-white/5 rounded-lg flex items-center justify-between gap-2 text-[11px] group"
                        >
                          <span className="truncate text-zinc-300 font-mono select-all">
                            {u}
                          </span>
                          <a
                            href={u}
                            target="_blank"
                            rel="noreferrer"
                            className="opacity-0 group-hover:opacity-100 text-[#00f3ff] hover:underline text-[9px] uppercase font-bold shrink-0 flex items-center gap-1"
                          >
                            Otvoriť <ExternalLink size={10} />
                          </a>
                        </div>
                      ))
                    ) : (
                      <div className="text-[10px] text-zinc-600 italic py-2">
                        Žiadne adresy v tejto kategórii.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

// ============================================================================
// 👑 HLAVNÝ KOMPONENT: ADMIN PAGE
// ============================================================================
export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("DASHBOARD");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 🚀 FORCED SCROLL-TO-TOP (Reset osi Y pri načítaní stránky)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // ⚡ STAV PRE ANALYZÁTOR & SONDY
  const [logReport, setLogReport] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isAnalyzerActive, setIsAnalyzerActive] = useState(() =>
    typeof window !== "undefined" && window.__NEXUS_LOG_DATA
      ? window.__NEXUS_LOG_DATA.active
      : false,
  );

  // ⚡ SONDA: Každú 1 sekundu vizuálne skontroluje jadro, aby tlačidlo nepadlo
  useEffect(() => {
    const probe = setInterval(() => {
      if (typeof window !== "undefined" && window.__NEXUS_LOG_DATA) {
        setIsAnalyzerActive(window.__NEXUS_LOG_DATA.active);
      }
    }, 1000);
    return () => clearInterval(probe);
  }, []);

  // ⚡ SUBSCRIPTION: Načítanie a triedenie používateľov zo Supabase
  useEffect(() => {
    const unsub = NexusDB.subscribeToAllUsers((data) => {
      const sorted = [...(data || [])].sort(
        (a, b) => (b.monthly_earned_oc || 0) - (a.monthly_earned_oc || 0),
      );
      setUsers(sorted);
    });
    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, []);

  // ⚡ SPUSTENIE MERANIA
  const startLogAnalyzer = () => {
    if (
      isAnalyzerActive ||
      (typeof window !== "undefined" &&
        window.__NEXUS_LOG_DATA &&
        window.__NEXUS_LOG_DATA.active)
    ) {
      alert(
        "⚠️ Sledovanie už beží! Preklikaj aplikáciu a potom stlač '2. Zobraziť Výsledky'.",
      );
      return;
    }

    activateGlobalAnalyzer();
    setIsAnalyzerActive(true);
    if (SoundFX?.success) SoundFX.success();
  };

  // ⚡ ZASTAVENIE A VYMAZANIE MERANIA
  const stopLogAnalyzer = () => {
    stopAndClearGlobalAnalyzer();
    setIsAnalyzerActive(false);
    setLogReport(null);
    if (SoundFX?.click) SoundFX.click();
  };

  // ⚡ ZOBRAZENIE VÝSLEDKOV V UI
  const printLogReport = () => {
    saveStatsToSession();

    if (!window.__NEXUS_LOG_DATA || !window.__NEXUS_LOG_DATA.active) {
      alert("⚠️ Najprv musíte aktivovať sledovanie logov (Tlačidlo 1).");
      return;
    }

    if (SoundFX?.click) SoundFX.click();

    const sortedPaths = Object.entries(window.__NEXUS_LOG_DATA.hotPaths)
      .map(([file, data]) => ({
        Súbor: file,
        Počet: data.count,
        "Veľkosť (KB)": parseFloat((data.bytes / 1024).toFixed(3)),
      }))
      .sort((a, b) => b.Počet - a.Počet);

    setLogReport({
      totalLogs: window.__NEXUS_LOG_DATA.logCount,
      totalKb: (window.__NEXUS_LOG_DATA.totalBytes / 1024).toFixed(2),
      paths: sortedPaths,
    });
  };

  // ⚡ MAGICKÉ KOPÍROVANIE VÝSLEDKOV
  const handleCopyLogs = () => {
    if (!logReport) return;
    let text = "=== 📊 NEXUS LOG REPORT ===\n";
    text += "Celkom logov: " + logReport.totalLogs + "x\n";
    text += "Záťaž pamäte: " + logReport.totalKb + " KB\n\n";
    text += "🔥 HOT PATHS (Súbory):\n";
    logReport.paths.forEach((p) => {
      text +=
        "- " + p.Počet + "x | " + p["Veľkosť (KB)"] + " KB | " + p.Súbor + "\n";
    });

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        if (SoundFX?.success) SoundFX.success();
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#030507] text-white font-mono flex text-left selection:bg-[#FF003C] selection:text-white">
      <Helmet>
        <title>ROOT ACCESS | Admin Panel Architekta</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* 🛸 SIDEBAR */}
      <aside
        className={
          "bg-black/80 border-r border-white/5 transition-all duration-500 overflow-hidden shrink-0 " +
          (isSidebarOpen ? "w-80" : "w-0")
        }
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-2 bg-[#FF003C] rounded-lg">
              <ShieldAlert size={20} className="text-black" />
            </div>
            <div className="leading-none">
              <h1 className="text-xl font-black uppercase italic tracking-tighter">
                Architect <span className="text-[#FF003C] not-italic">ACC</span>
              </h1>
              <p className="text-[7px] text-white/30 uppercase tracking-[0.4em] mt-1">
                Control Center
              </p>
            </div>
          </div>

          {/* ⚡ NAVIGÁCIA ZÁLOŽIEK */}
          <nav className="space-y-2 flex-1">
            {[
              { id: "DASHBOARD", icon: Layout, label: "Dashboard" },
              { id: "URL_SCANNER", icon: Globe, label: "URL Matrix Scanner" },
              { id: "LOGS", icon: Terminal, label: "System Logs & Diag" },
              { id: "USERS", icon: Users, label: "Operator Control" },
              { id: "DATABASE", icon: Database, label: "DB Management" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  "w-full flex items-center gap-4 p-5 rounded-2xl border transition-all text-[10px] font-black uppercase tracking-widest cursor-pointer " +
                  (activeTab === tab.id
                    ? "bg-[#FF003C]/10 border-[#FF003C]/30 text-white shadow-[0_0_20px_rgba(255,0,60,0.1)]"
                    : "bg-transparent border-transparent text-white/30 hover:bg-white/5")
                }
              >
                <tab.icon
                  size={18}
                  className={activeTab === tab.id ? "text-[#FF003C]" : ""}
                />
                {tab.label}
              </button>
            ))}
          </nav>

          {/* ⚡ STATUS PÄTIČKA SIDEBARU */}
          <div className="mt-auto pt-8 border-t border-white/5">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[8px] text-white/30 uppercase tracking-widest">
                  Matrix Status
                </p>
                <div className="text-[10px] font-black uppercase text-[#39FF14] mt-1 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full animate-pulse" />{" "}
                  Online
                </div>
              </div>
              <button
                onClick={() =>
                  (window.location.href = "https://" + "projekt-nexus.sk")
                }
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/40 cursor-pointer"
                title="Späť na Nexus Web"
              >
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* 🖥️ HLAVNÁ PLOCHA */}
      <main className="flex-1 h-screen overflow-y-auto custom-scrollbar p-6 md:p-12 relative min-w-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-6 left-6 z-[100] p-2 bg-black border border-white/10 rounded-lg text-white/40 hover:text-white transition-all shadow-2xl cursor-pointer"
        >
          <Layout size={16} />
        </button>

        {/* ⚡ SPOLOČNÁ HLAVIČKA PANELU */}
        <header className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#FF003C]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF003C]">
                Subdomain_Active
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
              Management{" "}
              <span className="text-[#FF003C] not-italic">Matrix</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <AdminCard
              icon={Users}
              title="Aktívne Entity"
              value={users.length}
              color="#00f3ff"
            />
            <AdminCard
              icon={Server}
              title="Uptime"
              value="99.9%"
              color="#39FF14"
            />
          </div>
        </header>

        {/* ==================================================================== */}
        {/* 🔀 DYNAMICKÉ PREPÍNANIE ZÁLOŽIEK */}
        {/* ==================================================================== */}

        {/* 1. 🌐 URL MATRIX SCANNER */}
        {activeTab === "URL_SCANNER" && <NexusUrlScanner />}

        {/* 2. ⚡ DASHBOARD (HLAVNÝ PREHĽAD) */}
        {activeTab === "DASHBOARD" && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 animate-in fade-in slide-in-from-right-4 duration-700">
            {/* LÍDRA REBRÍČKA PREVIEW */}
            <div className="xl:col-span-6 space-y-6">
              <div className="bg-[#050A0E] border border-white/10 p-6 rounded-[2rem] shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                    <Trophy size={14} className="text-[#FFD700]" /> Top Líder
                    Siete
                  </h3>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/20 font-bold">
                    RANK #1
                  </span>
                </div>
                {users.length > 0 ? (
                  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-white">
                        {users[0].name || users[0].email}
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        {users[0].email}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-[#39FF14]">
                        {users[0].monthly_earned_oc || 0} OC
                      </div>
                      <div className="text-[9px] text-zinc-500 uppercase">
                        Mesačný zisk
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-zinc-500 italic py-4">
                    Žiadni používatelia v databáze.
                  </div>
                )}
              </div>

              {/* Nástroje pre mesačnú uzávierku */}
              <MatrixAdminTools users={users} />
            </div>

            {/* PRAVÝ BLOK: SKRÁTENÁ TELEMETRIA A RÝCHLY ODKAZ NA SCANNER */}
            <div className="xl:col-span-6 space-y-6">
              <div className="p-6 bg-[#050A0E] border border-[#00f3ff]/30 rounded-[2rem] shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                    <Globe size={14} className="text-[#00f3ff]" /> Rýchly
                    prístup k URL Scanneru
                  </h3>
                  <button
                    onClick={() => setActiveTab("URL_SCANNER")}
                    className="text-[9px] px-3 py-1 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/40 rounded-xl font-bold transition-all cursor-pointer"
                  >
                    Otvoriť Plný Sken ↗
                  </button>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Autonómny generátor sitemap a indexov všetkých 6 súrodencov.
                  Umožňuje jedným klikom vyexportovať kompletný Markdown zoznam
                  do schránky alebo súboru.
                </p>
              </div>

              {/* Rýchly panel diagnostiky logov */}
              <div className="p-6 bg-[#050A0E] border border-white/10 rounded-[2rem] shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                    <Activity size={14} className="text-[#39FF14]" />{" "}
                    Diagnostika UI Logov
                  </h3>
                  <span
                    className={
                      "text-[9px] font-black uppercase px-2 py-0.5 rounded border " +
                      (isAnalyzerActive
                        ? "bg-[#39FF14]/10 text-[#39FF14] border-[#39FF14]/40"
                        : "bg-white/5 text-zinc-500 border-white/10")
                    }
                  >
                    {isAnalyzerActive ? "AKTÍVNA" : "POZASTAVENÁ"}
                  </span>
                </div>
                <button
                  onClick={() => setActiveTab("LOGS")}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-black uppercase text-zinc-300 transition-all cursor-pointer"
                >
                  Prejsť do riadiaceho centra logov ➔
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 3. ⚡ SYSTEM LOGS & DIAGNOSTIKA */}
        {activeTab === "LOGS" && (
          <div className="bg-[#050A0E] border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in duration-500">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                <Terminal size={18} className="text-[#FF003C]" /> UI Log
                Analyzer & Hot Paths
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Sledovanie konzolových volaní, dátového prenosu a pamäťovej
                záťaže rozhrania v reálnom čase.
              </p>
            </div>

            {/* TLAČIDLÁ OVLÁDANIA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={startLogAnalyzer}
                className={
                  "font-black uppercase tracking-widest text-[9px] px-4 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer " +
                  (isAnalyzerActive
                    ? "bg-[#39FF14]/10 border border-[#39FF14]/50 text-[#39FF14]"
                    : "bg-black/50 hover:bg-[#FF003C]/20 text-white hover:text-[#FF003C] border border-white/10 hover:border-[#FF003C]/50")
                }
              >
                <Activity
                  size={14}
                  className={isAnalyzerActive ? "animate-pulse" : ""}
                />
                {isAnalyzerActive
                  ? "1. Sledovanie Aktívne (Beží)"
                  : "1. Spustiť Sledovanie Logov"}
              </button>

              <button
                onClick={printLogReport}
                className="bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 font-black uppercase tracking-widest text-[9px] px-4 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.2)] cursor-pointer"
              >
                <Table size={14} /> 2. Zobraziť Výsledky
              </button>

              <button
                onClick={stopLogAnalyzer}
                disabled={!isAnalyzerActive && !logReport}
                className="bg-black/50 hover:bg-red-500/20 text-white/40 hover:text-red-500 border border-white/5 hover:border-red-500/50 font-black uppercase tracking-widest text-[9px] px-4 py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <Trash2 size={14} /> 3. Zastaviť a Vymazať
              </button>
            </div>

            {/* VÝSLEDKY ANALÝZY */}
            {logReport && (
              <div className="border border-white/10 bg-black/60 p-6 rounded-2xl space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h4 className="text-xs text-[#00f3ff] font-black uppercase tracking-widest flex items-center gap-2">
                    Výsledky Merania Pamäte
                  </h4>
                  <button
                    onClick={handleCopyLogs}
                    className="flex items-center gap-1.5 bg-[#00f3ff]/10 hover:bg-[#00f3ff]/30 text-[#00f3ff] px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    {isCopied ? <Check size={12} /> : <Copy size={12} />}
                    {isCopied ? "Skopírované" : "Kopírovať Výstup"}
                  </button>
                </div>

                <div className="flex gap-6 text-xs text-zinc-400 font-mono">
                  <span>
                    Celkom volaní:{" "}
                    <strong className="text-[#FF003C]">
                      {logReport.totalLogs}x
                    </strong>
                  </span>
                  <span>
                    Dátová záťaž:{" "}
                    <strong className="text-white">
                      {logReport.totalKb} KB
                    </strong>
                  </span>
                </div>

                <div className="max-h-80 overflow-y-auto custom-scrollbar pr-2 space-y-2">
                  {logReport.paths.length > 0 ? (
                    logReport.paths.map((p, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center bg-black/80 p-3 rounded-lg border border-white/5 hover:border-white/20 transition-colors"
                      >
                        <span className="text-[10px] text-zinc-300 font-mono break-all pr-2 max-w-[70%]">
                          {p.Súbor}
                        </span>
                        <div className="text-right flex flex-col shrink-0">
                          <span className="text-xs text-[#FF003C] font-black">
                            {p.Počet}x
                          </span>
                          <span className="text-[10px] text-[#00f3ff]">
                            {p["Veľkosť (KB)"]} KB
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-xs text-zinc-500 italic py-4">
                      Nezaznamenali sa žiadne logy.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. 👥 OPERATOR CONTROL (USERS) */}
        {activeTab === "USERS" && (
          <div className="bg-[#050A0E] border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in duration-500">
            <div className="border-b border-white/10 pb-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                  <Users size={18} className="text-[#00f3ff]" /> Operator
                  Database Matrix
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Kompletný zoznam registrovaných entít a ich stavu bodov v
                  systéme.
                </p>
              </div>
              <span className="text-xs font-black px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-zinc-300">
                {users.length} Používateľov
              </span>
            </div>

            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-500 text-[10px] uppercase">
                    <th className="p-3">Poradie</th>
                    <th className="p-3">Email / Operátor</th>
                    <th className="p-3">Mesačné OC</th>
                    <th className="p-3">Zlaté Výhry</th>
                    <th className="p-3 text-right">Rola</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {users.map((u, i) => (
                    <tr
                      key={u.id || i}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="p-3 font-bold text-zinc-400">#{i + 1}</td>
                      <td className="p-3 text-white font-bold">{u.email}</td>
                      <td className="p-3 text-[#39FF14] font-black">
                        {u.monthly_earned_oc || 0} OC
                      </td>
                      <td className="p-3 text-[#FFD700] font-bold">
                        {u.wins_gold || 0}x
                      </td>
                      <td className="p-3 text-right">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10 text-[9px] uppercase font-bold">
                          {u.role || "OPERATOR"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. 🗄️ DB MANAGEMENT (DATABASE) */}
        {activeTab === "DATABASE" && (
          <div className="bg-[#050A0E] border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in duration-500">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
                <Database size={18} className="text-[#39FF14]" /> Supabase Core
                & Storage Matrix
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Stav pripojenia k cloudovým bucketom a synchronizácia dát.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-black/60 border border-white/10 rounded-2xl">
                <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">
                  Centrálny Postgres
                </div>
                <div className="text-sm font-black text-[#39FF14] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
                  CONNECTED
                </div>
              </div>

              <div className="p-5 bg-black/60 border border-white/10 rounded-2xl">
                <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">
                  Public CDN Buckets
                </div>
                <div className="text-sm font-black text-[#00f3ff]">
                  6 SÚRODENCOV ACTIVE
                </div>
              </div>

              <div className="p-5 bg-black/60 border border-white/10 rounded-2xl">
                <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">
                  Autentifikácia Matrixu
                </div>
                <div className="text-sm font-black text-white">
                  SUPABASE AUTH v2
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 🎨 INTERNÝ ŠTÝL PRE CYBER-SCROLLBAR */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.1); }
      `}</style>
    </div>
  );
}
