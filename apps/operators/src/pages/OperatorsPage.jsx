import { getAvatarColor, getPresenceStatus } from "@blog/utils/Blog-PresenceEngine.js";
import MetaTags from "@shared/components/MetaTags.jsx";
// ⚡ EXODUS FIX: Zmazané priame volania "firebase/firestore"

// ============================================================================
// ⚠️ LOKÁLNE IMPORTY PRE VÁŠ PROJEKT (ODKOMENTUJTE V LOKÁLNOM KÓDE) ⚠️
// ============================================================================

import { getTierColor } from "@shared/data/nexusConfig.js";
import { checkPermission } from "@shared/data/permissionsRegistry.js";
import { NexusDB } from "@shared/services/NexusDB_Core.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
// import { GlobalProfil } from "@operators/components/GlobalProfil";
import GlobalEventRewards from "@shop/components/GlobalEventRewards.jsx";
import { Activity, ArrowDownCircle, ArrowUpCircle, Ban, Calendar, Crown, FileText, Filter, Grid, LayoutGrid, List, Search, SlidersHorizontal, Terminal, Trash2, Trophy, User, Users, Wifi } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
// ⚡ PRIDANÝ MOST
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { OperatorsHeader } from "@operators/components/OperatorsHeader.jsx";

// ============================================================================
// ⚡ PROTOKOL VERZIOVANIA (CORE-VER-001)
// ============================================================================
const CORE_VERSION = "P-OperatorsPage V4.9-EXODUS";

export const TooltipHover = ({
  text,
  dimColor = "#39FF14",
  position = "top",
  align = "center",
}) => {
  const isTop = position === "top";
  let alignClasses = "left-1/2 -translate-x-1/2";
  let arrowClasses = "left-1/2 -translate-x-1/2";
  if (align === "right") {
    alignClasses = "right-0";
    arrowClasses = "right-4";
  } else if (align === "left") {
    alignClasses = "left-0";
    arrowClasses = "left-4";
  }
  const animationClass = isTop
    ? "translate-y-2 group-hover/tooltip:translate-y-0"
    : "-translate-y-2 group-hover/tooltip:translate-y-0";

  return (
    <div
      className={`absolute ${isTop ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"} ${alignClasses} w-max max-w-[220px] opacity-0 group-hover/tooltip:opacity-100 invisible group-hover/tooltip:visible transition-all duration-300 pointer-events-none z-[999999] ${animationClass}`}
    >
      <div
        className="bg-[#050505] border rounded-xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl text-left break-words"
        style={{
          borderColor: `${dimColor}50`,
          boxShadow: `0 5px 20px ${dimColor}30`,
        }}
      >
        <span className="text-[10px] text-white/90 font-mono leading-relaxed normal-case tracking-normal whitespace-pre-wrap block">
          {text}
        </span>
      </div>
      <div
        className={`w-2.5 h-2.5 rotate-45 bg-[#050505] absolute ${arrowClasses} ${isTop ? "border-b border-r -bottom-1.5" : "border-t border-l -top-1.5"}`}
        style={{ borderColor: `${dimColor}50` }}
      />
    </div>
  );
};

const OperatorTrophies = ({ op }) => (
  <div className="flex items-center gap-2 bg-black/40 border border-white/5 rounded-lg p-1.5 shrink-0 shadow-inner">
    <div className="relative group/tooltip hover:z-[100] flex items-center gap-1 cursor-help">
      <Trophy size={10} className="text-[#FFD700]" />
      <span className="text-[9px] font-black text-white/70">
        {op.wins_gold || op.winsGold || 0}
      </span>
      <TooltipHover
        text="Zlaté medaily (1. Miesto)"
        dimColor="#FFD700"
        position="top"
      />
    </div>
    <div className="relative group/tooltip hover:z-[100] flex items-center gap-1 cursor-help">
      <Trophy size={10} className="text-[#C0C0C0]" />
      <span className="text-[9px] font-black text-white/70">
        {op.wins_silver || op.winsSilver || 0}
      </span>
      <TooltipHover
        text="Strieborné medaily (2. Miesto)"
        dimColor="#C0C0C0"
        position="top"
      />
    </div>
    <div className="relative group/tooltip hover:z-[100] flex items-center gap-1 cursor-help">
      <Trophy size={10} className="text-[#CD7F32]" />
      <span className="text-[9px] font-black text-white/70">
        {op.wins_bronze || op.winsBronze || 0}
      </span>
      <TooltipHover
        text="Bronzové medaily (3. Miesto)"
        dimColor="#CD7F32"
        position="top"
      />
    </div>
  </div>
);

const OperatorTachometer = ({ activeMinutes = 0, tierColor }) => {
  const max = 100;
  const totalDay = 1440;
  const safeActive = Math.max(0, Math.min(activeMinutes, totalDay));
  const inactive = totalDay - safeActive;
  const pct = Math.min(Math.round((safeActive / max) * 100), 100);

  const size = 36;
  const stroke = 3;
  const radius = 14;
  const circ = radius * 2 * Math.PI;
  const offset = circ - (pct / 100) * circ;

  let color = "#ef4444";
  if (pct >= 50) color = "#f97316";
  if (pct >= 80) color = "#39FF14";

  return (
    <div
      className="relative group/tooltip hover:z-[100] flex items-center justify-center shrink-0 cursor-help bg-black/40 rounded-full border border-white/5"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90 absolute">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="text-[8px] font-black z-10" style={{ color }}>
        {pct}%
      </span>
      <TooltipHover
        text={`Cieľ Aktivity: 100 min/deň\n\n🟢 Aktívne: ${safeActive} min\n🔴 Neaktívne: ${inactive} min`}
        dimColor={color}
        position="top"
        align="center"
      />
    </div>
  );
};

// ============================================================================
// ⚡ VIZUÁLNY TACHOMETER PRE STATUSY SIETE (Zobrazenie Max 999+)
// ============================================================================
const NetworkStatusTacho = ({ count = 0, color, label }) => {
  const maxDisplay = 999;
  const size = 46;
  const cRadius = 18;
  const stroke = 3;
  const center = size / 2;
  const circumference = cRadius * 2 * Math.PI;

  // Vizuálne plnenie kruhu (ak presiahne 999, kruh bude plný na 100%)
  const percent = Math.min((count / maxDisplay) * 100, 100);
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  // Formátovanie textu vnútri tachometra
  const displayCount = count > maxDisplay ? "999+" : count;

  return (
    // ⚡ FIX: Zmenené na "group/tooltip" aby TooltipHover správne reagoval na myš
    <div
      className="relative flex items-center justify-center bg-black/80 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/5 shrink-0 cursor-help group/tooltip hover:border-white/20 transition-all"
      style={{ width: size, height: size }}
    >
      <svg
        height={size}
        width={size}
        className="-rotate-90 absolute top-0 left-0"
      >
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
      <div className="absolute flex flex-col items-center justify-center leading-none mt-0.5 group-hover/tooltip:scale-110 transition-transform">
        <span className="text-[10px] font-black mb-0.5" style={{ color }}>
          {displayCount}
        </span>
        <span className="text-[4.5px] font-mono text-white/50 tracking-[0.2em] uppercase leading-none">
          {label}
        </span>
      </div>

      {/* ⚡ OPRAVENÝ TOOLTIP: Ukazuje exaktné číslo zo surových dát */}
      <TooltipHover
        text={`[ STATUS: ${label} ]\nSkutočný počet: ${count.toLocaleString("sk-SK")} entít`}
        dimColor={color}
        position="bottom"
        align="center"
      />
    </div>
  );
};

export default function OperatorsPage( {
  setActiveTab,
    userState,
    themeColor,
    setThemeColor,
    onThemeChange,
  }) {
  
    useEffect(() => {
      const triggerTheme = onThemeChange || setThemeColor;
      if (triggerTheme) {
        triggerTheme("#FFAA00"); // Operators / Level 48 Control Panel
      }
    }, [onThemeChange, setThemeColor]);
  
  // ==========================================================================
  // 1. INICIALIZÁCIA ROUTER HOOKOV
  // ==========================================================================
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // ==========================================================================
  // 2. ČÍTANIE STAVOV PRIAMO Z URL
  // ==========================================================================
  const currentPath = location.pathname;

  // 🛡️ PREKLAD URL DO TVOJHO INTERNÉHO STAVU:
  let activeView = "OPERATORS"; // Default
  if (currentPath.includes("matrix-sutaz")) {
    activeView = "REWARDS"; // <--- TOTO BOLO TO STRATENÉ SLOVO!
  }

  const filterTier = searchParams.get("tier") || "ALL";
  const searchTerm = searchParams.get("search") || "";
  const viewMode = searchParams.get("view") || "large";

  // ==========================================================================
  // 3. LOKÁLNE STAVY (ostávajú nezmenené...)
  // ==========================================================================
  const [operators, setOperators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortMode, setSortMode] = useState("tier_desc");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  // const [selectedProfile, setSelectedProfile] = useState(null);
  // const [isProfileMaximized, setIsProfileMaximized] = useState(false);

  // ==========================================================================
  // 4. UNESENÉ FUNKCIE (Zapisujú priamo do URL lišty potichu)
  // ==========================================================================
  const setActiveView = (viewName) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();

    // 🛡️ PREKLAD INTERNÉHO STAVU SPÄŤ NA URL ADRESU:
    // Ak tvoje tlačidlo (dole v JSX) pošle "REWARDS", my URL zmeníme na "matrix-sutaz"
    const targetPath = viewName === "OPERATORS" ? "databasa" : "matrix-sutaz";
    navigate(`/operators/${targetPath}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  // 🚀 FORCED SCROLL-TO-TOP (Reset osi Y pri načítaní stránky)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const setFilterTier = (newTier) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    setSearchParams(
      (prev) => {
        if (newTier === "ALL") prev.delete("tier");
        else prev.set("tier", newTier);
        return prev;
      },
      { replace: true },
    );
  };

  const setSearchTerm = (query) => {
    setSearchParams(
      (prev) => {
        if (!query) prev.delete("search");
        else prev.set("search", query);
        return prev;
      },
      { replace: true },
    );
  };

  const setViewMode = (mode) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    setSearchParams(
      (prev) => {
        if (mode === "large") prev.delete("view");
        else prev.set("view", mode);
        return prev;
      },
      { replace: true },
    );
  };

  // ==========================================================================
  // 5. VÝPOČET STATUSOV SIETE PRE TACHOMETRE
  // ==========================================================================
  const networkStats = React.useMemo(() => {
    let online = 0;
    let sleep = 0;
    let offline = 0;

    operators.forEach((op) => {
      if (op.status === "ONLINE") online++;
      else if (op.status === "SLEEP") sleep++;
      else offline++; // Všetko ostatné
    });

    return { online, sleep, offline, total: operators.length };
  }, [operators]);

  // ==========================================================================
  // 6. LAPAČ SIGNÁLOV: Zmena pohľadu z Globálneho Hamburger Menu
  // ==========================================================================
  useEffect(() => {
    const handleSwitchTab = (e) => {
      if (e.detail) {
        // Tvoj hamburger teraz pošle signál, a táto unesená funkcia potichu prepíše URL!
        setActiveView(e.detail);
      }
    };
    window.addEventListener("nexus_switch_local_tab", handleSwitchTab);
    return () =>
      window.removeEventListener("nexus_switch_local_tab", handleSwitchTab);
  }, []);

  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("nexus_active_identity") || "{}")
      : {};
  const userTier = currentUser?.tier || "FREE";
  const canBan = checkPermission(userTier, "ban_user");
  const canDeleteUser = checkPermission(userTier, "edit_constitution");
  const hasAdminUI = canBan || canDeleteUser;
  const tierRank = {
    ARCHITECT: 7,
    MASTER: 6,
    ADMIN: 5,
    MODERATOR: 4,
    OMEGA: 3,
    PRO: 2,
    FREE: 1,
    BANNED: 0,
  };

  // 📡 REAL-TIME SYNC (Cez NexusDB)
  useEffect(() => {
    const unsubscribe = NexusDB.subscribeToAllUsers((fetchedOps) => {
      setOperators(fetchedOps);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // ⚔️ EXEKUTÍVNE FUNKCIE (Cez NexusDB)
  const handlePromote = async (op) => {
    if (!canBan) return;
    if (SoundFX?.click) SoundFX.click();
    if (op.tier === "BANNED" || op.tier === "ARCHITECT" || op.tier === "MASTER")
      return alert("Túto entitu nie je možné povýšiť.");

    const tiers = ["FREE", "PRO", "OMEGA", "MODERATOR", "ADMIN", "MASTER"];
    const currentIdx = tiers.indexOf(op.tier || "FREE");
    const nextTier = tiers[(currentIdx + 1) % tiers.length];

    if (
      window.confirm(
        `Povrdiť POVÝŠENIE operátora ${op.email} na úroveň [ ${nextTier} ]?`,
      )
    ) {
      try {
        await NexusDB.updateUserTier(op.id, nextTier);
        if (SoundFX?.success) SoundFX.success();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleDemote = async (op) => {
    if (!canBan) return;
    if (SoundFX?.click) SoundFX.click();
    if (op.tier === "BANNED")
      return alert("Zabanovaný operátor. Ďalšie zníženie nie je možné.");
    if (op.tier === "ARCHITECT" && !canDeleteUser)
      return alert("Nemáte oprávnenie degradovať entitu ARCHITECT.");

    const tiers = ["FREE", "PRO", "OMEGA", "MODERATOR", "ADMIN", "MASTER"];
    let nextTier = "FREE";
    if (op.tier === "ARCHITECT") nextTier = "MASTER";
    else {
      const currentIdx = tiers.indexOf(op.tier || "FREE");
      if (currentIdx > 0) nextTier = tiers[currentIdx - 1];
    }

    if (
      window.confirm(
        `Povrdiť ZNÍŽENIE TIERu pre operátora ${op.email} na úroveň [ ${nextTier} ]?`,
      )
    ) {
      try {
        await NexusDB.updateUserTier(op.id, nextTier);
        if (SoundFX?.success) SoundFX.success();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleBan = async (op) => {
    if (!canBan) return;
    if (SoundFX?.error) SoundFX.error();
    if (op.tier === "ARCHITECT" && !canDeleteUser)
      return alert("Nemáte oprávnenie zabanovať entitu ARCHITECT.");

    const isBanned = op.tier === "BANNED";
    if (
      window.confirm(
        isBanned
          ? `OBNOVIŤ prístup pre operátora ${op.email}?`
          : `Trvalo ZABANOVAŤ operátora ${op.email}?`,
      )
    ) {
      try {
        await NexusDB.updateUserTier(op.id, isBanned ? "FREE" : "BANNED");
        if (SoundFX?.success) SoundFX.success();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleDelete = async (op) => {
    if (!canDeleteUser) return;
    if (SoundFX?.error) SoundFX.error();
    if (
      window.confirm(
        `VAROVANIE: Naozaj chcete TRVALO VYMAZAŤ operátora ${op.email} zo systémovej databázy? Táto akcia je nevratná.`,
      )
    ) {
      try {
        await NexusDB.deleteUserRecord(op.id);
        if (SoundFX?.success) SoundFX.success();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const filteredAndSortedOperators = useMemo(() => {
    const filtered = operators.filter((op) => {
      const term = searchTerm.toLowerCase();
      const opIdStr = String(op.id || "").toLowerCase();
      const opEmailStr = String(op.email || "").toLowerCase();
      const opNameStr = String(op.displayName || op.name || "").toLowerCase();
      const opTierStr = String(op.tier || "").toUpperCase();

      // Absolútna detekcia Quest hostí (e-mail @anonymous.nexus, displayName quest-*, atď.)
      const isQuestGuest =
        Boolean(op.isGuest) ||
        opTierStr === "QUEST" ||
        opNameStr.includes("quest") ||
        opEmailStr.includes("anonymous") ||
        opEmailStr.includes("quest") ||
        opIdStr.includes("quest");

      const opTierClean = isQuestGuest ? "QUEST" : opTierStr || "FREE";

      // 1. Striktné VETO pre záložky
      let matchTier = false;
      if (filterTier === "ALL") {
        matchTier = !isQuestGuest;
      } else if (filterTier.toUpperCase() === "QUEST") {
        matchTier = isQuestGuest;
      } else if (filterTier.toUpperCase() === "FREE") {
        matchTier = !isQuestGuest && opTierClean === "FREE";
      } else {
        matchTier = !isQuestGuest && opTierClean === filterTier.toUpperCase();
      }

      // 2. Vodotesný dátumový filter OD - DO (Local Timezone parsing)
      let matchDateRange = true;
      if (dateFrom || dateTo) {
        let rawCreated = 0;
        if (op.createdAt?.seconds) rawCreated = op.createdAt.seconds * 1000;
        else if (op.created_at?.seconds)
          rawCreated = op.created_at.seconds * 1000;
        else if (op.createdAt) rawCreated = new Date(op.createdAt).getTime();
        else if (op.created_at) rawCreated = new Date(op.created_at).getTime();

        if (rawCreated > 0 && !isNaN(rawCreated)) {
          if (dateFrom) {
            const [y, m, d] = dateFrom.split("-").map(Number);
            const fromMs = new Date(y, m - 1, d, 0, 0, 0, 0).getTime();
            if (rawCreated < fromMs) matchDateRange = false;
          }
          if (dateTo) {
            const [y, m, d] = dateTo.split("-").map(Number);
            const toMs = new Date(y, m - 1, d, 23, 59, 59, 999).getTime();
            if (rawCreated > toMs) matchDateRange = false;
          }
        } else {
          matchDateRange = false;
        }
      }

      const matchSearch =
        (op.displayName || "").toLowerCase().includes(term) ||
        (op.email || "").toLowerCase().includes(term);

      let matchStatus = true;
      const presence = getPresenceStatus(op.lastActive);
      const now = Date.now();

      if (filterStatus === "ONLINE") {
        matchStatus = presence.status === "ONLINE";
      } else if (filterStatus === "SLEEP") {
        matchStatus = presence.status === "SLEEP";
      } else if (filterStatus === "OFFLINE") {
        matchStatus = presence.status === "OFFLINE";
      } else if (filterStatus === "NEW") {
        if (isQuestGuest) {
          matchStatus = false;
        } else {
          const rawTimestamp =
            op.createdAt?.seconds ||
            op.createdAt ||
            op.lastSync?.seconds ||
            op.lastSync ||
            0;
          const timeRef =
            rawTimestamp *
            (op.createdAt?.seconds || op.lastSync?.seconds ? 1000 : 1);
          const ageMs = timeRef > 0 ? now - timeRef : Infinity;
          const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

          matchStatus = ageMs <= SEVEN_DAYS_MS;
        }
      } else if (filterStatus === "INACTIVE") {
        const lastTime = op.lastActive?.seconds
          ? op.lastActive.seconds * 1000
          : op.lastActive
            ? new Date(op.lastActive).getTime()
            : 0;
        matchStatus =
          lastTime === 0 || now - lastTime > 30 * 24 * 60 * 60 * 1000;
      }

      return matchSearch && matchTier && matchStatus && matchDateRange;
    });

    const sorted = [...filtered].sort((a, b) => {
      const aTier =
        a.isGuest ||
        String(a.email || "").includes("anonymous") ||
        String(a.displayName || "").includes("quest")
          ? "QUEST"
          : a.tier || "FREE";
      const bTier =
        b.isGuest ||
        String(b.email || "").includes("anonymous") ||
        String(b.displayName || "").includes("quest")
          ? "QUEST"
          : b.tier || "FREE";

      if (sortMode === "tier_desc")
        return (tierRank[bTier] || 0) - (tierRank[aTier] || 0);
      if (sortMode === "tier_asc")
        return (tierRank[aTier] || 0) - (tierRank[bTier] || 0);
      if (sortMode === "name_asc")
        return (a.displayName || a.email || "").localeCompare(
          b.displayName || b.email || "",
        );
      if (sortMode === "name_desc")
        return (b.displayName || b.email || "").localeCompare(
          a.displayName || a.email || "",
        );
      return 0;
    });

    return sorted;
  }, [
    operators,
    searchTerm,
    filterTier,
    filterStatus,
    sortMode,
    dateFrom,
    dateTo,
  ]);

  return (
    <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full pb-32 relative text-left">
      <MetaTags
        title="SIEŤ ENTÍT: IT Komunita, Networking a Zoznam Operátorov | NEXUS OS"
        description="Hľadáte spojencov pre svoj rast? SIEŤ ENTÍT je otvorený uzol pre networking, prepájanie IT komunity a vyhľadávanie nezávislých operátorov. Odomknite silu kolektívneho vedomia."
        image="https://www.projekt-nexus.sk/img-nexus/pages/OperatorsPage.jpg"
        color="#00FFFF"
        url="https://www.projekt-nexus.sk/operators"
        ogTitle="SIEŤ ENTÍT: Si sám uprostred spiacich NPC? Nájdi svoj Kmeň."
        ogDescription="V bežnom Matrixe si izolovaný. Obklopuje ťa informačný šum a ľudia bez vízie. Odomkni Sieť Entít, nájdi podobne zmýšľajúcich operátorov a pripoj sa k našej IT komunite. Spoločne kódujeme realitu."
        twitterTitle="SIEŤ ENTÍT: Si sám uprostred spiacich NPC? Nájdi svoj Kmeň."
        twitterDescription="Obklopujú ťa ľudia bez vízie? Odomkni Sieť Entít, nájdi podobne zmýšľajúcich operátorov a pripoj sa k našej exkluzívnej IT komunite."
      />
      <OperatorsHeader
        themeColor={themeColor || "#FFAA00"}
        dimensionName="OPERATOR CONTROL PANEL // CORE MATRIX"
        subTitle="ENTITY NETWORK // V20.95 ARCHITECT"
        onThemeChange={onThemeChange}
      />

      {/* 2. HERO MANIFEST POPIS & HUD TACHOMETRE SIETE */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <header className="mb-8 md:mb-12 border-b border-white/10 pb-6 md:pb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* L'AVÁ STRANA: POPIS UZLA A TITUL */}
          <div className="space-y-3 max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border"
              style={{
                borderColor: `${themeColor || "#FFAA00"}40`,
                backgroundColor: `${themeColor || "#FFAA00"}10`,
                color: themeColor || "#FFAA00"
              }}
            >
              <Terminal size={14} className="animate-pulse" />
              ENTITY_NETWORK // V20.95
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none flex items-center gap-3">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-[#FFAA00]" />
              NEXUS <span className="text-[#FFAA00]" style={{ filter: "drop-shadow(0 0 15px rgba(255,170,0,0.5))" }}>OPERATORS</span>
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Sieť operátorov a databáza entít OS Genesis. Registrácia, Auth Matrix preverovanie a sledovanie sieťovej aktivity v reálnom čase.
            </p>
          </div>

          {/* PRAVÁ STRANA: HUD TACHOMETRE SIETE A CELKOVÁ KAPACITA (ZACHOVANÉ 1:1) */}
          <div className="flex items-center gap-3 md:gap-5 bg-black/40 p-2 pr-5 md:pr-6 rounded-2xl border border-white/10 shadow-inner">
            {/* 3x Tachometer */}
            <div className="flex items-center gap-2 sm:gap-3">
              <NetworkStatusTacho
                count={networkStats?.online || 0}
                color="#39FF14"
                label="Online"
              />
              <NetworkStatusTacho
                count={networkStats?.sleep || 0}
                color="#FFD700"
                label="Sleep"
              />
              <NetworkStatusTacho
                count={networkStats?.offline || 0}
                color="#6b7280"
                label="Offline"
              />
            </div>

            {/* 4. Parameter: Celková Kapacita */}
            <div className="hidden sm:flex flex-col items-end border-l border-white/10 pl-3 md:pl-5">
              <span className="text-[7px] md:text-[8px] font-mono text-white/40 uppercase tracking-widest mb-1">
                Celková Kapacita
              </span>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[#FFAA00]" />
                <span className="text-sm md:text-base font-black text-white tracking-widest">
                  {networkStats?.total
                    ? networkStats.total.toLocaleString("sk-SK")
                    : 0}
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* 🚀 PANEL NÁSTROJOV (ZJEDNOTENÝ MONOLIT V20) */}
      <div className="flex flex-col gap-4 mb-8 bg-black/60 p-4 md:p-5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md w-full relative z-30">
        {/* HORNÝ RIADOK: PREPÍNAČ POHĽADU A FULL-TEXT SEARCH */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          {/* Prepínač medzi Databázou a Súťažou */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1.5 w-full lg:w-auto shrink-0">
            <button
              onClick={() => {
                if (SoundFX?.click) SoundFX.click();
                setActiveView("OPERATORS");
              }}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 lg:flex-none ${
                activeView === "OPERATORS"
                  ? "bg-[#00FFFF]/20 text-[#00FFFF] shadow-inner border border-[#00FFFF]/30"
                  : "text-white/40 hover:text-white"
              }`}
            >
              <Users size={14} /> Databáza
            </button>
            <button
              onClick={() => {
                if (SoundFX?.click) SoundFX.click();
                setActiveView("REWARDS");
              }}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap flex-1 lg:flex-none ${
                activeView === "REWARDS"
                  ? "bg-blue-500/20 text-blue-400 shadow-inner border border-blue-500/30"
                  : "text-white/40 hover:text-white"
              }`}
            >
              <Trophy size={14} /> Matrix Súťaž
            </button>
          </div>

          {/* Full-text Vyhľadávanie */}
          {activeView === "OPERATORS" && (
            <div className="relative w-full lg:w-96 group/tooltip shrink-0 z-20">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/30 group-focus-within:text-[#00FFFF] transition-colors"
                size={16}
              />
              <input
                type="text"
                placeholder="Vyhľadať meno alebo e-mail..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-[12px] font-mono text-white outline-none transition-all focus:border-[#00FFFF]/50 focus:bg-black/40"
              />
            </div>
          )}
        </div>

        {/* SPODNÝ RIADOK: VŠETKY FILTRE V JEDNOM MONOLITICKOM DIVISIONE */}
        {activeView === "OPERATORS" && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5 w-full">
            {/* 1. STATUS FILTER */}
            <div className="relative group/tooltip flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#00FFFF]/40 rounded-xl px-3 py-2 shrink-0 z-20 transition-all">
              <Wifi size={14} className="text-white/40" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-transparent text-white text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer w-full"
              >
                <option value="ALL" className="bg-[#030712] text-white">
                  Všetky Stavy
                </option>
                <option value="ONLINE" className="bg-[#030712] text-[#39FF14]">
                  Online
                </option>
                <option value="SLEEP" className="bg-[#030712] text-[#FFD700]">
                  Spí (Idle)
                </option>
                <option value="OFFLINE" className="bg-[#030712] text-gray-500">
                  Offline
                </option>
                <option value="NEW" className="bg-[#030712] text-[#00FFFF]">
                  Noví operátori
                </option>
                <option
                  value="INACTIVE"
                  className="bg-[#030712] text-[#FF003C]"
                >
                  Neaktívni
                </option>
              </select>
            </div>

            {/* 2. TIER FILTER */}
            <div className="relative group/tooltip flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#00FFFF]/40 rounded-xl px-3 py-2 shrink-0 z-20 transition-all">
              <Filter size={14} className="text-white/40" />
              <select
                value={filterTier}
                onChange={(e) => setFilterTier(e.target.value)}
                className="bg-transparent text-white text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer w-full"
              >
                <option value="ALL" className="bg-[#030712] text-white">
                  Všetky Hodnosti
                </option>
                <option
                  value="ARCHITECT"
                  className="bg-[#030712] text-[#FF003C]"
                >
                  Architect
                </option>
                <option value="MASTER" className="bg-[#030712] text-[#FF1493]">
                  Master
                </option>
                <option value="ADMIN" className="bg-[#030712] text-[#FF6600]">
                  Admin
                </option>
                <option
                  value="MODERATOR"
                  className="bg-[#030712] text-[#D2B48C]"
                >
                  Moderator
                </option>
                <option value="OMEGA" className="bg-[#030712] text-[#FFD700]">
                  Omega
                </option>
                <option value="PRO" className="bg-[#030712] text-[#39FF14]">
                  Pro
                </option>
                <option value="FREE" className="bg-[#030712] text-[#00FFFF]">
                  Free
                </option>
                <option value="QUEST" className="bg-[#030712] text-[#6B7280]">
                  Quest (Hosť)
                </option>
                <option value="BANNED" className="bg-[#030712] text-red-500">
                  Zabanovaní
                </option>
              </select>
            </div>

            {/* 3. DÁTUMOVÝ FILTER (OD - DO) */}
            <div className="relative group/tooltip flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#00FFFF]/40 rounded-xl px-3 py-1.5 shrink-0 z-20 transition-all">
              <Calendar size={14} className="text-[#00FFFF]" />
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-black uppercase text-white/40 tracking-wider">
                  OD:
                </span>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  onClick={(e) => e.target.showPicker && e.target.showPicker()}
                  className="bg-transparent text-white text-[10px] font-mono outline-none cursor-pointer border-none p-0 focus:ring-0 w-[95px] [color-scheme:dark]"
                />
                <span className="text-[9px] font-black uppercase text-white/40 tracking-wider ml-1">
                  DO:
                </span>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  onClick={(e) => e.target.showPicker && e.target.showPicker()}
                  className="bg-transparent text-white text-[10px] font-mono outline-none cursor-pointer border-none p-0 focus:ring-0 w-[95px] [color-scheme:dark]"
                />
                {(dateFrom || dateTo) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDateFrom("");
                      setDateTo("");
                    }}
                    className="ml-1 px-1.5 py-0.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded text-[9px] font-bold uppercase transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* 4. PREPÍNAČ ZORAĎOVANIA */}
            <div className="relative group/tooltip flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#00FFFF]/40 rounded-xl px-3 py-2 shrink-0 z-20 transition-all">
              <SlidersHorizontal size={14} className="text-white/40" />
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value)}
                className="bg-transparent text-white text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer w-full"
              >
                <option value="tier_desc" className="bg-[#030712] text-white">
                  Tier: Od najvyššieho
                </option>
                <option value="tier_asc" className="bg-[#030712] text-white">
                  Tier: Od najnižšieho
                </option>
                <option value="name_asc" className="bg-[#030712] text-white">
                  Meno: A po Z
                </option>
                <option value="name_desc" className="bg-[#030712] text-white">
                  Meno: Z po A
                </option>
              </select>
            </div>

            {/* 5. PREPÍNAČ HUŠTOTY KARIET */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1 shrink-0 z-20">
              <button
                onClick={() => setViewMode("large")}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === "large" ? "bg-[#00FFFF]/20 text-[#00FFFF]" : "text-white/40 hover:text-white"}`}
                title="Veľké Karty"
              >
                <Grid size={15} />
              </button>
              <button
                onClick={() => setViewMode("small")}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === "small" ? "bg-[#00FFFF]/20 text-[#00FFFF]" : "text-white/40 hover:text-white"}`}
                title="Kompaktné Karty"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === "list" ? "bg-[#00FFFF]/20 text-[#00FFFF]" : "text-white/40 hover:text-white"}`}
                title="Riadkový Zoznam"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* 🚀 OBLASŤ VYKRESLENIA OBSAHU */}
      {activeView === "REWARDS" ? (
        <div className="animate-in slide-in-from-right-8 duration-500">
          {GlobalEventRewards && <GlobalEventRewards themeColor="#00FFFF" />}
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Activity
                size={48}
                className="animate-pulse text-[#00FFFF] mb-6"
              />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
                Dekódovanie z Matrixu...
              </span>
            </div>
          ) : filteredAndSortedOperators.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/5 rounded-[3rem] opacity-30">
              <Users size={48} className="mx-auto mb-6" />
              <p className="font-black uppercase tracking-[0.5em] text-xs">
                Žiadny Operátor Nenašiel Zhodu s Vyhľadávaním
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "list"
                  ? "flex flex-col gap-4"
                  : viewMode === "small"
                    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              }
            >
              {/* Hlavný kontajner pre grid/zoznam entít */}

              {filteredAndSortedOperators.map((op) => {
                const isBanned = op.tier === "BANNED";
                const opIdStr = String(op.id || "").toLowerCase();
                const opEmailStr = String(op.email || "").toLowerCase();
                const opNameStr = String(
                  op.displayName || op.name || "",
                ).toLowerCase();
                const opTierStr = String(op.tier || "").toUpperCase();

                const isQuestGuest =
                  Boolean(op.isGuest) ||
                  opTierStr === "QUEST" ||
                  opNameStr.includes("quest") ||
                  opEmailStr.includes("anonymous") ||
                  opEmailStr.includes("quest") ||
                  opIdStr.includes("quest");
                const tColor = isBanned
                  ? "#6b7280"
                  : getTierColor(op.tier || "FREE");
                const semanticColor = getAvatarColor(op.avatar, tColor);
                const presence = getPresenceStatus(op.lastActive);
                const opName =
                  op.displayName || op.email?.split("@")[0] || "Neznáma Entita";

                const myRank = tierRank[userTier] || 1;
                const opRank = tierRank[op.tier || "FREE"] || 1;
                const isUntouchable = !canDeleteUser && myRank <= opRank;

                const activeMins =
                  op.dailyActiveMinutes ||
                  (presence.status === "ONLINE"
                    ? 100
                    : presence.status === "SLEEP"
                      ? 45
                      : 0);

                // ==========================================
                // ⚡ LIST VIEW
                // ==========================================
                if (viewMode === "list") {
                  return (
                    <div
                      key={op.id}
                      className={`bg-[#0a0a0a] border ${isBanned ? "border-red-500/30" : "border-white/5"} rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all w-full relative group`}
                      style={{
                        borderLeft: `4px solid ${isBanned ? "#ef4444" : semanticColor}`,
                      }}
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0 w-full relative z-10">
                        <div className="relative shrink-0 group/tooltip hover:z-[100]">
                          <div
                            className={`w-10 h-10 rounded-full overflow-hidden border-2 flex items-center justify-center bg-black ${isBanned ? "border-red-500" : ""}`}
                            style={
                              !isBanned ? { borderColor: semanticColor } : {}
                            }
                          >
                            {op.avatar ? (
                              <img
                                src={op.avatar}
                                alt="Avatar"
                                className={`w-full h-full object-cover ${isBanned ? "grayscale opacity-50" : ""}`}
                              />
                            ) : (
                              <User size={16} />
                            )}
                          </div>
                          {!isBanned && (
                            <div
                              className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[2px] border-[#0a0a0a] ${presence.ping ? "animate-pulse" : ""}`}
                              style={{ backgroundColor: presence.color }}
                            />
                          )}
                          <TooltipHover
                            text={`Identita Avatara.\nStatus Siete: ${presence.label}`}
                            dimColor={semanticColor}
                            position="top"
                            align="left"
                          />
                        </div>
                        <div className="min-w-0 text-left">
                          <h3
                            className={`text-sm font-black uppercase tracking-widest truncate flex items-center gap-2 ${isBanned ? "text-red-500 line-through opacity-70" : "text-white"}`}
                            style={!isBanned ? { color: semanticColor } : {}}
                          >
                            {opName}
                            {(op.tier === "ARCHITECT" ||
                              op.tier === "MASTER") && (
                              <div className="relative group/tooltip hover:z-[100]">
                                <Crown size={14} style={{ color: tColor }} />
                                <TooltipHover
                                  text="Elitná Entita Siete"
                                  dimColor={tColor}
                                  position="top"
                                  align="center"
                                />
                              </div>
                            )}
                          </h3>
                          <p className="text-[9px] text-white/40 font-mono truncate">
                            {op.email || op.id}
                          </p>
                          <p className="text-[9px] font-mono truncate mt-0.5">
                            {isQuestGuest ||
                            String(op.email || op.id || "")
                              .toLowerCase()
                              .startsWith("quest") ? (
                              <span className="text-amber-400/80 font-bold">
                                ⚠️ Neregistrovaný (Vstup:{" "}
                                {op.lastActive?.seconds
                                  ? new Date(
                                      op.lastActive.seconds * 1000,
                                    ).toLocaleDateString("sk-SK")
                                  : op.last_active
                                    ? new Date(
                                        op.last_active,
                                      ).toLocaleDateString("sk-SK")
                                    : "Dnes"}
                                )
                              </span>
                            ) : (
                              <span className="text-cyan-400/80">
                                🗓️ Registrácia:{" "}
                                {op.createdAt?.seconds
                                  ? new Date(
                                      op.createdAt.seconds * 1000,
                                    ).toLocaleDateString("sk-SK")
                                  : op.created_at
                                    ? new Date(
                                        op.created_at,
                                      ).toLocaleDateString("sk-SK")
                                    : "Pôvodný Operátor"}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto shrink-0 justify-between sm:justify-end relative z-10">
                        {!isBanned && <OperatorTrophies op={op} />}
                        {!isBanned && (
                          <OperatorTachometer
                            activeMinutes={activeMins}
                            tierColor={semanticColor}
                          />
                        )}

                        <div className="relative group/tooltip hover:z-[100]">
                          <span
                            className={`inline-block text-[9px] font-black uppercase tracking-[3px] px-3 py-1.5 rounded border text-center min-w-[100px] ${isBanned ? "text-red-500 border-red-500/50 bg-red-500/10" : ""}`}
                            style={
                              !isBanned
                                ? {
                                    color: tColor,
                                    borderColor: tColor,
                                    backgroundColor: `${tColor}10`,
                                  }
                                : {}
                            }
                          >
                            {op.tier || "FREE"}
                          </span>
                          <TooltipHover
                            text={`Úroveň Autorizácie: ${op.tier || "FREE"} TIER`}
                            dimColor={tColor}
                            position="top"
                            align="center"
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="relative group/tooltip hover:z-[100]">
                            {/* 🛑 FIX: Namiesto lokálneho setSelectedProfile strieľame event do Jadra */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (
                                  typeof SoundFX !== "undefined" &&
                                  SoundFX.click
                                )
                                  SoundFX.click();
                                window.dispatchEvent(
                                  new CustomEvent("nexus_open_profile", {
                                    // 🛑 FIX: Namiesto orezaných 5 premenných posielame ÚPLNE VŠETKO (celý objekt 'op').
                                    // Deti v Profile (Dossier, Kontakty, Zdravie) vďaka tomu okamžite ožijú.
                                    detail: op,
                                  }),
                                );
                              }}
                              className="p-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 rounded-lg transition-colors"
                            >
                              <FileText size={14} />
                            </button>
                            <TooltipHover
                              text="Otvoriť Sémantický Dossier (Profil)"
                              dimColor="#ffffff"
                              align="right"
                            />
                          </div>

                          {canBan &&
                            op.id !== currentUser?.email &&
                            !isUntouchable && (
                              <>
                                <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block"></div>
                                <div className="relative group/tooltip hover:z-[100]">
                                  <button
                                    onClick={() => handlePromote(op)}
                                    disabled={isBanned}
                                    className="p-2 bg-black/40 hover:bg-[#39FF14]/10 text-white/30 hover:text-[#39FF14] border border-white/5 hover:border-[#39FF14]/30 disabled:opacity-20 rounded-lg transition-colors"
                                  >
                                    <ArrowUpCircle size={14} />
                                  </button>
                                  <TooltipHover
                                    text="Povýšiť Operátora"
                                    dimColor="#39FF14"
                                    align="right"
                                  />
                                </div>
                                <div className="relative group/tooltip hover:z-[100]">
                                  <button
                                    onClick={() => handleDemote(op)}
                                    disabled={isBanned}
                                    className="p-2 bg-black/40 hover:bg-yellow-500/10 text-white/30 hover:text-yellow-500 border border-white/5 hover:border-yellow-500/30 disabled:opacity-20 rounded-lg transition-colors"
                                  >
                                    <ArrowDownCircle size={14} />
                                  </button>
                                  <TooltipHover
                                    text="Znížiť TIER"
                                    dimColor="#eab308"
                                    align="right"
                                  />
                                </div>
                                <div className="relative group/tooltip hover:z-[100]">
                                  <button
                                    onClick={() => handleBan(op)}
                                    className={`p-2 bg-black/40 hover:bg-[#FF003C]/10 rounded-lg transition-colors ${isBanned ? "text-[#FF003C] bg-[#FF003C]/10 border border-[#FF003C]/30" : "border border-white/5 hover:border-[#FF003C]/30 text-white/30 hover:text-[#FF003C]"}`}
                                  >
                                    <Ban size={14} />
                                  </button>
                                  <TooltipHover
                                    text={
                                      isBanned
                                        ? "Obnoviť (UNBAN)"
                                        : "Blokovať (BAN)"
                                    }
                                    dimColor="#FF003C"
                                    align="right"
                                  />
                                </div>
                                {canDeleteUser && (
                                  <div className="relative group/tooltip hover:z-[100]">
                                    <button
                                      onClick={() => handleDelete(op)}
                                      className="p-2 bg-black/40 hover:bg-red-600/10 text-white/30 hover:text-red-600 border border-white/5 hover:border-red-600/30 rounded-lg transition-colors"
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                    <TooltipHover
                                      text="Trvalo Vymazať Entitu"
                                      dimColor="#dc2626"
                                      align="right"
                                    />
                                  </div>
                                )}
                              </>
                            )}
                        </div>
                      </div>
                    </div>
                  );
                }

                // ==========================================
                // 🎴 GRID VIEW
                // ==========================================
                return (
                  <div
                    key={op.id}
                    className={`bg-[#0a0a0a] border ${isBanned ? "border-red-500/30" : "border-white/5"} rounded-[2rem] p-6 relative flex flex-col transition-all`}
                    style={{
                      borderTop: `2px solid ${isBanned ? "#ef4444" : semanticColor}`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                      <div
                        className="absolute -right-10 -top-10 w-32 h-32 blur-[50px] rounded-full opacity-5 pointer-events-none"
                        style={{ backgroundColor: semanticColor }}
                      />
                    </div>

                    {(op.tier === "ARCHITECT" || op.tier === "MASTER") && (
                      <div className="absolute top-4 right-4 opacity-50 relative group/tooltip hover:z-[100]">
                        <Crown size={20} style={{ color: tColor }} />
                        <TooltipHover
                          text="Elitný Člen Siete"
                          dimColor={tColor}
                          align="right"
                        />
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-6 relative z-10 text-left">
                      <div className="relative shrink-0 group/tooltip hover:z-[100]">
                        <div
                          className={`w-12 h-12 rounded-full overflow-hidden border-2 flex items-center justify-center bg-black ${isBanned ? "border-red-500" : ""}`}
                          style={
                            !isBanned ? { borderColor: semanticColor } : {}
                          }
                        >
                          {op.avatar ? (
                            <img
                              src={op.avatar}
                              className={`w-full h-full object-cover ${isBanned ? "grayscale opacity-50" : ""}`}
                              alt="Avatar"
                            />
                          ) : (
                            <User size={20} />
                          )}
                        </div>
                        {!isBanned && (
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[3px] border-[#0a0a0a] ${presence.ping ? "animate-pulse" : ""}`}
                            style={{ backgroundColor: presence.color }}
                          />
                        )}
                        <TooltipHover
                          text={`Status Siete: ${presence.label}`}
                          dimColor={presence.color}
                          align="left"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3
                          className={`text-sm font-black uppercase tracking-widest truncate ${isBanned ? "text-red-500 line-through opacity-70" : "text-white"}`}
                          style={!isBanned ? { color: semanticColor } : {}}
                        >
                          {opName}
                        </h3>
                        <p className="text-[9px] text-white/40 font-mono truncate">
                          {op.email || op.id}
                        </p>
                        <p className="text-[9px] font-mono truncate mt-0.5">
                          {isQuestGuest ||
                          String(op.email || op.id || "")
                            .toLowerCase()
                            .startsWith("quest") ? (
                            <span className="text-amber-400/80 font-bold">
                              ⚠️ Neregistrovaný (Vstup:{" "}
                              {op.lastActive?.seconds
                                ? new Date(
                                    op.lastActive.seconds * 1000,
                                  ).toLocaleDateString("sk-SK")
                                : op.last_active
                                  ? new Date(op.last_active).toLocaleDateString(
                                      "sk-SK",
                                    )
                                  : "Dnes"}
                              )
                            </span>
                          ) : (
                            <span className="text-cyan-400/80">
                              🗓️ Registrácia:{" "}
                              {op.createdAt?.seconds
                                ? new Date(
                                    op.createdAt.seconds * 1000,
                                  ).toLocaleDateString("sk-SK")
                                : op.created_at
                                  ? new Date(op.created_at).toLocaleDateString(
                                      "sk-SK",
                                    )
                                  : "Pôvodný Operátor"}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 relative z-10 text-left flex items-center justify-between">
                      <div className="relative group/tooltip hover:z-[100]">
                        <span
                          className={`inline-block text-[9px] font-black uppercase tracking-[3px] px-3 py-1 rounded border ${isBanned ? "text-red-500 border-red-500/50 bg-red-500/10" : ""}`}
                          style={
                            !isBanned
                              ? {
                                  color: tColor,
                                  borderColor: tColor,
                                  backgroundColor: `${tColor}10`,
                                }
                              : {}
                          }
                        >
                          {isQuestGuest
                            ? "QUEST TIER"
                            : `${op.tier || "FREE"} TIER`}
                        </span>
                        <TooltipHover
                          text={`Úroveň oprávnení: ${op.tier}`}
                          dimColor={tColor}
                          align="left"
                        />
                      </div>
                      {!isBanned && (
                        <OperatorTachometer
                          activeMinutes={activeMins}
                          tierColor={semanticColor}
                        />
                      )}
                    </div>

                    {!isBanned && (
                      <div className="mb-6 relative z-10">
                        <OperatorTrophies op={op} />
                      </div>
                    )}

                    <div className="mt-auto relative z-10 flex flex-col gap-2">
                      <div className="flex gap-2 relative group/tooltip hover:z-[100]">
                        {/* 🛑 FIX: Aplikácia Signálneho Mosta pre ďalší režim zobrazenia */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (typeof SoundFX !== "undefined" && SoundFX.click)
                              SoundFX.click();
                            window.dispatchEvent(
                              new CustomEvent("nexus_open_profile", {
                                // 🛑 FIX: Namiesto orezaných 5 premenných posielame ÚPLNE VŠETKO (celý objekt 'op').
                                // Deti v Profile (Dossier, Kontakty, Zdravie) vďaka tomu okamžite ožijú.
                                detail: op,
                              }),
                            );
                          }}
                          className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase text-white/70 hover:text-white flex items-center justify-center gap-2 transition-colors border border-white/5"
                        >
                          <FileText size={14} /> Dossier
                        </button>
                        <TooltipHover
                          text="Otvoriť kompletný záznam o entite"
                          dimColor="#ffffff"
                          align="center"
                        />
                      </div>

                      {canBan &&
                        op.id !== currentUser?.email &&
                        !isUntouchable && (
                          <div className="flex gap-2 mt-2 pt-4 border-t border-white/5">
                            <div className="flex-1 relative group/tooltip hover:z-[100]">
                              <button
                                onClick={() => handlePromote(op)}
                                disabled={isBanned}
                                className="w-full py-2 bg-black/40 text-white/30 hover:text-[#39FF14] hover:bg-[#39FF14]/10 hover:border-[#39FF14]/50 border border-white/5 rounded-lg flex justify-center transition-colors"
                              >
                                <ArrowUpCircle size={14} />
                              </button>
                              <TooltipHover
                                text="Povýšiť"
                                dimColor="#39FF14"
                                align="center"
                              />
                            </div>
                            <div className="flex-1 relative group/tooltip hover:z-[100]">
                              <button
                                onClick={() => handleDemote(op)}
                                disabled={isBanned}
                                className="w-full py-2 bg-black/40 text-white/30 hover:text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/50 border border-white/5 rounded-lg flex justify-center transition-colors"
                              >
                                <ArrowDownCircle size={14} />
                              </button>
                              <TooltipHover
                                text="Degradovať"
                                dimColor="#eab308"
                                align="center"
                              />
                            </div>
                            <div className="flex-1 relative group/tooltip hover:z-[100]">
                              <button
                                onClick={() => handleBan(op)}
                                className={`w-full py-2 bg-black/40 text-white/30 hover:text-[#FF003C] hover:bg-[#FF003C]/10 hover:border-[#FF003C]/50 border border-white/5 rounded-lg flex justify-center transition-colors ${isBanned ? "text-[#FF003C] bg-[#FF003C]/10 border-[#FF003C]/30" : ""}`}
                              >
                                <Ban size={14} />
                              </button>
                              <TooltipHover
                                text={isBanned ? "UNBAN" : "BAN"}
                                dimColor="#FF003C"
                                align="center"
                              />
                            </div>
                            {canDeleteUser && (
                              <div className="flex-1 relative group/tooltip hover:z-[100]">
                                <button
                                  onClick={() => handleDelete(op)}
                                  className="w-full py-2 bg-black/40 text-white/30 hover:text-red-600 hover:bg-red-600/10 hover:border-red-600/50 border border-white/5 rounded-lg flex justify-center transition-colors"
                                >
                                  <Trash2 size={14} />
                                </button>
                                <TooltipHover
                                  text="Vymazať z DB"
                                  dimColor="#dc2626"
                                  align="right"
                                />
                              </div>
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
