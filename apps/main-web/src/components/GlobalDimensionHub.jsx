import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  ChevronLeft,
  Activity,
  Terminal,
  LayoutList,
  Search,
  LayoutGrid,
  Grid2X2,
  List,
  Lock,
  Unlock,
  ChevronRight,
  Compass,
  ShieldCheck,
  Briefcase,
  TrendingUp,
} from "lucide-react";

// ============================================================================
// ⚠️ IMPORTY (ZAKOMENTOVANÉ PRE STABILITU CANVAS NÁHĽADU) ⚠️
// ARCHITEKT: PRED NASADENÍM ODKOMENTUJ TIETO ORIGINÁLY A ZMAŽ MOCK BLOK:
// ============================================================================

import { NODE_STATUS_REGISTRY } from "@main-web/data/NodeStatusRegistry";
import { GlobalOfflineNode } from "./GlobalOfflineNode";
import { SoundFX } from "@shared/utils/SoundEngine";
import nodeStats from "@main-web/data/nodeStats.json";
// import MetaTags from "./MetaTags";
import { GlobalComponents } from "./GlobalComponents";
import { GlobalFooter } from "./GlobalFooter";
import { GlobalHamburgerMenu } from "./GlobalHamburgerMenu";
import GlobalPaywallModal from "./shop/GlobalPaywallModal";

// 🛡️ LOKÁLNA MATICA TIERov
const TIER_VALUES = {
  BANNED: 0,
  FREE: 1,
  PRO: 2,
  OMEGA: 3,
  MODERATOR: 4,
  ADMIN: 5,
  MASTER: 6,
  ARCHITECT: 7,
};
const TIER_COLORS = {
  FREE: "#00FFFF",
  PRO: "#39FF14",
  OMEGA: "#FFD700",
  MODERATOR: "#D2B48C",
  ADMIN: "#FF6600",
  MASTER: "#FF1493",
  ARCHITECT: "#FF003C",
  BANNED: "#ef4444",
};

// 🏷️ REGISTER DIMENZIONÁLNYCH NÁLEPIEK (OVERHANGING BADGES) - SYNC S MASTER MAPOU
const DIMENSION_TAGS = {
  ID00: {
    id: "ID00",
    short: "ISM",
    name: "Mentor-Hub",
    full: "Inteligentný Systémový Mentoring",
    color: "#FFFFFF",
  },
  ID01: {
    id: "ID01",
    short: "OSI",
    name: "Identity-Core",
    full: "Osobný Rast a Identita",
    color: "#39FF14",
  },
  ID02: {
    id: "ID02",
    short: "PHP",
    name: "The-Workflow",
    full: "Produktivita a Hlboká Práca",
    color: "#FFEB3B",
  },
  ID03: {
    id: "ID03",
    short: "ROF",
    name: "Cash-Engine",
    full: "Riadenie Osobných Financií",
    color: "#FFD700",
  },
  ID04: {
    id: "ID04",
    short: "TZP",
    name: "Revenue-Architect",
    full: "Tvorba Zisku a Podnikanie",
    color: "#FFAA00",
  },
  ID05: {
    id: "ID05",
    short: "IPP",
    name: "Assets-Matrix",
    full: "Investície a Pasívny Príjem",
    color: "#FF8C00",
  },
  ID06: {
    id: "ID06",
    short: "AUŠ",
    name: "Data-Absorber",
    full: "Akcelerované Učenie a Štúdium",
    color: "#BF00FF",
  },
  ID07: {
    id: "ID07",
    short: "RIT",
    name: "Skills-Tree",
    full: "Rozvoj IT Zručností",
    color: "#8A2BE2",
  },
  ID08: {
    id: "ID08",
    short: "SLD",
    name: "Empty-Book",
    full: "Sémantická Literárna Databáza",
    color: "#00FFFF",
  },
  ID09: {
    id: "ID09",
    short: "TMG",
    name: "Sergeant-Core",
    full: "Taktické Myslenie a Gaming",
    color: "#FF003C",
  },
  ID10: {
    id: "ID10",
    short: "NDB",
    name: "NonIdentity-Core",
    full: "Nenáboženské Duchovno a Bytie",
    color: "#0044FF",
  },
  ID11: {
    id: "ID11",
    short: "MFR",
    name: "The-Recovery",
    full: "Mentálna a Fyzická Regenerácia",
    color: "#FFBF00",
  },
  ID12: {
    id: "ID12",
    short: "CKM",
    name: "Nexus-Codex",
    full: "Centrálny Kódex Matrixu",
    color: "#6B21A8",
  },
  ID13: {
    id: "ID13",
    short: "ADN",
    name: "Nexus-Habits",
    full: "Architektúra Denných Návykov",
    color: "#1E3A8A",
  },
  ID14: {
    id: "ID14",
    short: "OKS",
    name: "Nexus-Blog",
    full: "Otvorená Komunikačná Sieť",
    color: "#FF1493",
  },
};

const getSubdomainName = (dimId) => {
  const map = {
    ID00: "Mentor",
    ID01: "Personal",
    ID02: "Work",
    ID03: "Finance",
    ID04: "Business",
    ID05: "Investments",
    ID06: "Study",
    ID07: "Professional",
    ID08: "Reader",
    ID09: "Player",
    ID10: "Home",
    ID11: "Recovery",
    ID12: "Codex",
    ID13: "Habits",
    ID14: "Blog",
  };
  return map[dimId] || dimId;
};

// ============================================================================
// ⚡ VIZUÁLNY TACHOMETER (SÉMANTICKÁ HUSTOTA - 2500r = 100%)
// ============================================================================
const ContentTachometer = ({ currentLines, maxLines = 2500 }) => {
  const size = 52;
  const cRadius = 22;
  const stroke = 4;
  const center = size / 2;
  const circumference = cRadius * 2 * Math.PI;

  const percent = Math.round((currentLines / maxLines) * 100);
  const visualValue = Math.min(percent, 100);
  const strokeDashoffset = circumference - (visualValue / 100) * circumference;

  let color = "#ef4444";
  if (percent >= 50 && percent < 80) color = "#f97316";
  if (percent >= 80 && percent <= 100) color = "#39FF14";
  if (percent > 100) color = "#00FFFF";

  return (
    <div
      className="relative flex items-center justify-center bg-black/80 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/5 shrink-0 cursor-help group/tacho"
      style={{ width: size, height: size }}
      title={`Hustota Uzla: ${percent}% | Kapacita: ${currentLines} z ${maxLines} riadkov kódu`}
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
          className="transition-all duration-2500 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center leading-none mt-0.5 group-hover/tacho:scale-110 transition-transform">
        <span className="text-[10px] font-black mb-0.5" style={{ color }}>
          {percent}%
        </span>
        <span className="text-[6.5px] font-mono font-bold text-white/50 tracking-widest leading-none">
          {currentLines}
          <span className="text-white/20">/2500r</span>
        </span>
      </div>
    </div>
  );
};

/**
 * 🏰 MASTER COMPONENT: GlobalDimensionHub (V30.0 OVERHANGING BADGES)
 */
export const GlobalDimensionHub = ({
  dimensionId,
  dimensionName,
  dimColor,
  customMap,
  nodeComponents = {},
}) => {
  const location = useLocation();
  const [userTier, setUserTier] = useState("FREE");
  const [userOc, setUserOc] = useState(0);
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallCampaign, setPaywallCampaign] = useState(null);
  const [activeSectionId, setActiveSectionId] = useState(
    customMap?.sections?.[0]?.id || null,
  );
  const [viewMode, setViewMode] = useState("GRID_MD");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTier, setFilterTier] = useState("ALL");
  const scrollRef = useRef(0);

  // 🚀 FORCED SCROLL-TO-TOP PROTOCOL (Oprava SPA pretečenia scrollu)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [dimensionId]);

  // 🌐 SYNC: URL Deep Linking & Security Gatekeeper
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlNodeId = params.get("node");

    if (urlNodeId && urlNodeId.startsWith(dimensionId)) {
      // 1. Vyhľadáme cieľový uzol naprieč sekciami
      let targetNode = null;
      customMap?.sections?.forEach((sec) => {
        const found = sec.nodes?.find((n) => n.id === urlNodeId);
        if (found) targetNode = found;
      });

      if (targetNode) {
        // 2. 🛡️ FIREWALL KONTROLA: Má operátor (QUEST / FREE) reálny prístup k tomuto TIERu?
        const hasAccess = checkAccess(targetNode.tier, targetNode.id);

        if (!hasAccess) {
          console.warn(
            `🚨 [SECURITY_GATE]: Operátor (${userTier}) zablokovaný na uzle ${targetNode.id}`,
          );
          if (SoundFX && typeof SoundFX.error === "function") SoundFX.error();

          // Vystrelíme Paywall Modal s ponukou na odomknutie
          if (setPaywallCampaign && setPaywallOpen) {
            setPaywallCampaign({
              id: targetNode.id,
              nodeKey: targetNode.id,
              title: targetNode.title || `UZOL ${targetNode.id}`,
              tier: targetNode.tier || "PRO",
              dimension: dimensionId,
              priceOc: 500,
              ocPrice: 500,
              priceEur: "5.00 €",
              category: "NODES",
              desc: `Odomknutie doživotného prístupu pre uzol ${targetNode.id} v dimenzii ${dimensionId}.`,
            });
            setPaywallOpen(true);
          }

          // 🛡️ OČISTA: Zmažeme nepovolený parameter z URL a nevpustíme ho dnu
          window.history.replaceState(null, "", `/${dimensionId}`);
          setActiveNodeId(null);
          return;
        }

        // 3. Ak kontrolou prešiel, uzol bezpečne otvoríme
        setActiveNodeId(urlNodeId);
      }
    }
  }, [dimensionId, customMap, location.search, userTier, unlockedNodes]);

  // 🔐 Auth Sync
  useEffect(() => {
    try {
      let parsedState = null;
      const match = document.cookie.match(
        new RegExp("(^| )nexus_active_identity=([^;]+)"),
      );
      if (match) parsedState = JSON.parse(decodeURIComponent(match[2]));
      if (!parsedState && localStorage.getItem("nexus_active_identity")) {
        parsedState = JSON.parse(localStorage.getItem("nexus_active_identity"));
      }
      if (parsedState) {
        const isQuestMode =
          localStorage.getItem("nexus_quest_mode") === "true" ||
          sessionStorage.getItem("nexus_quest_mode") === "true" ||
          parsedState.isGuest ||
          parsedState.role === "QUEST";

        const resolvedTier = isQuestMode
          ? "QUEST"
          : parsedState.tier?.toUpperCase() || "FREE";

        setUserTier(resolvedTier);
        setUserOc(
          isQuestMode
            ? 0
            : Number(
                parsedState.oc ||
                  parsedState.ocCredits ||
                  parsedState.credits ||
                  0,
              ),
        );
        setUnlockedNodes(parsedState.unlockedNodes || []);
        if (parsedState.email) setUserEmail(parsedState.email);
        console.log("⚡ [SONDA_V20] Auth_Loaded:", {
          email: parsedState.email,
          oc: parsedState.oc,
        });
      }
    } catch (e) {
      console.warn("Hub_Auth_Sync Error:", e);
    }

    const handleSync = () => {
      try {
        const raw = localStorage.getItem("nexus_active_identity");
        if (raw) {
          const data = JSON.parse(raw);
          if (data.oc !== undefined) setUserOc(Number(data.oc) || 0);
          if (data.credits !== undefined) setUserOc(Number(data.credits) || 0);
          if (data.email) setUserEmail(data.email);
          if (data.unlockedNodes) setUnlockedNodes(data.unlockedNodes);
        }
      } catch (err) {}
    };

    window.addEventListener("nexus_credits_updated", handleSync);
    window.addEventListener("nexus_user_updated", handleSync);
    return () => {
      window.removeEventListener("nexus_credits_updated", handleSync);
      window.removeEventListener("nexus_user_updated", handleSync);
    };
  }, []);

  // ⚡ GHOST-MODE: Úplné skrytie Rýchleho Navigačného Uzla, keď sa číta konkrétny Node (Uzol)
  useEffect(() => {
    // Nájdeme Hamburger v DOM-e
    const hamburger = document.getElementById("nexus-global-hamburger");

    if (hamburger) {
      if (activeNodeId) {
        // OPERÁTOR JE V UZLE -> Tvrdý override: schová menu
        hamburger.style.display = "none";
      } else {
        // OPERÁTOR JE V DIMENZII -> Vráti kontrolu Tailwindu (zobrazí menu)
        hamburger.style.display = "";
      }
    }

    // Bezpečnostná poistka: Ak operátor úplne opustí DimensionHub (napr. na HomePage), menu odomkneme
    return () => {
      if (hamburger) hamburger.style.display = "";
    };
  }, [activeNodeId]);

  const handleNodeClick = (nodeId) => {
    if (SoundFX && typeof SoundFX.click === "function") SoundFX.click();
    scrollRef.current = window.scrollY;

    // ⚡ Vloží do URL lišty presný parameter: /ID01?node=ID01-12
    window.history.pushState(null, "", `/${dimensionId}?node=${nodeId}`);

    setActiveNodeId(nodeId);
    window.scrollTo(0, 0);
  };

  const handleBackToHub = () => {
    if (SoundFX && typeof SoundFX.click === "function") SoundFX.click();

    // ⚡ Návrat na čistú dimenziu bez uzla: /ID01
    window.history.pushState(null, "", `/${dimensionId}`);

    setActiveNodeId(null);
    setTimeout(() => {
      window.scrollTo({ top: scrollRef.current, behavior: "instant" });
    }, 50);
  };

  const checkAccess = (nodeTier, nodeId) => {
    const cleanUserTier = String(userTier || "FREE")
      .toUpperCase()
      .trim();
    const cleanNodeTier = String(nodeTier || "FREE")
      .toUpperCase()
      .trim();
    const userVal = TIER_VALUES[cleanUserTier] || 1;
    const nodeVal = TIER_VALUES[cleanNodeTier] || 1;
    const isQuest =
      localStorage.getItem("nexus_quest_mode") === "true" ||
      sessionStorage.getItem("nexus_quest_mode") === "true" ||
      cleanUserTier === "QUEST";

    const isFirstNode =
      String(nodeId).endsWith("-01") || String(nodeId).endsWith("-1");

    if (isQuest) {
      // Quest má prístup výhradne k prvým bezplatným uzlom (-01 / -1)
      if (isFirstNode) return true;
      return false;
    }
    // 1. Zablokované entity
    if (userVal === 0) return false;

    // 2. Root Access podľa úrovne Tieru

    if (userVal >= nodeVal) return true;

    // 3. ⚡ BEZPEČNOSTNÝ ŠTÍT: Prepis z JSON Stringu na čisté Pole (Array)
    let safeUnlocked = [];
    try {
      if (Array.isArray(unlockedNodes)) {
        safeUnlocked = unlockedNodes;
      } else if (typeof unlockedNodes === "string") {
        safeUnlocked = JSON.parse(unlockedNodes || "[]");
      }
    } catch (err) {
      safeUnlocked = [];
    }

    // 4. Kontrola vlastníctva špecifických kľúčov a uzlov (Tvoja logika)
    if (
      safeUnlocked.includes(nodeId) ||
      safeUnlocked.includes(`${dimensionId}-ALL`) ||
      safeUnlocked.includes("NEXUS_MASTER_KEY")
    ) {
      return true;
    }

    return false;
  };

  const getTierColor = (tier) =>
    TIER_COLORS[String(tier).toUpperCase()] || "rgba(255,255,255,0.4)";

  const isGlobalFilterActive =
    searchQuery.trim() !== "" || filterTier !== "ALL";

  const allNodes = customMap?.sections?.flatMap((sec) => sec.nodes) || [];
  const nodesToRender = isGlobalFilterActive
    ? allNodes.filter(
        (n) =>
          (n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
          (filterTier === "ALL" || n.tier === filterTier),
      )
    : customMap?.sections?.find((s) => s.id === activeSectionId)?.nodes || [];

  const finalDimColor =
    dimColor === "#FFFFFF" || dimColor === "white" ? "#FFFFFF" : dimColor;

  // Nacítame dáta pre nálepku podľa aktuálnej dimenzie
  const dimTag = DIMENSION_TAGS[dimensionId] || {
    short: "SYS",
    full: "System Core",
    color: finalDimColor,
  };

  const triggerHoverSound = () => {
    if (SoundFX && typeof SoundFX.hover === "function") SoundFX.hover();
  };

  return (
    <div className="min-h-screen text-[#b3d4d6] font-mono relative bg-transparent text-left selection:bg-white selection:text-black">
      <div
        className="fixed top-0 left-0 w-full h-[500px] pointer-events-none z-0 opacity-10 transition-colors duration-2500"
        style={{
          backgroundImage: `radial-gradient(circle at top center, ${finalDimColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full max-w-[2500px] mx-auto px-4 md:px-6">
        {activeNodeId ? (
          <div className="animate-in fade-in duration-500 pb-20 w-full">
            <div className="py-6">
              <button
                onClick={handleBackToHub}
                onMouseEnter={triggerHoverSound}
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all bg-black/60 px-5 py-2.5 rounded-xl border border-white/5 backdrop-blur-xl hover:bg-white/5 shadow-xl"
              >
                <ChevronLeft size={14} style={{ color: finalDimColor }} />{" "}
                Back_To_{dimensionId}
              </button>
            </div>

            <div className="w-full">
              {NODE_STATUS_REGISTRY &&
              NODE_STATUS_REGISTRY[activeNodeId] === "ONLINE" &&
              nodeComponents[activeNodeId] ? (
                <div className="w-full">
                  {React.createElement(nodeComponents[activeNodeId], {
                    onInteract: (action) => {
                      if (action.type === "cite" || action.type === "discuss") {
                        if (SoundFX && typeof SoundFX.click === "function")
                          SoundFX.click();
                        window.location.href = "/ID14-Blog";
                      }
                    },
                  })}
                </div>
              ) : (
                <GlobalOfflineNode
                  nodeId={activeNodeId}
                  dimColor={finalDimColor}
                  onBack={handleBackToHub}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="py-8 text-left">
            <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4 opacity-30">
                  <Terminal size={18} style={{ color: finalDimColor }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] italic">
                    Nexus_OS_V20_Optimized
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white italic leading-none drop-shadow-md">
                  {dimensionId}{" "}
                  <span
                    style={{ color: finalDimColor }}
                    className="not-italic opacity-80"
                  >
                    {dimensionName}
                  </span>
                </h1>
              </div>
              <div
                onClick={() =>
                  window.dispatchEvent(new Event("nexus_open_wallet"))
                }
                className="bg-black/60 hover:bg-black/80 border border-white/10 hover:border-[#FFD700]/40 p-3 md:p-4 rounded-2xl backdrop-blur-xl shadow-2xl text-right border-r-[4px] cursor-pointer transition-all group shrink-0"
                style={{ borderRightColor: finalDimColor }}
                title="Kliknutím otvoríš kompletnú globálnu peňaženku"
              >
                <p className="text-[8px] text-white/30 uppercase tracking-[0.4em] font-black mb-1 italic text-right group-hover:text-[#FFD700] transition-colors">
                  Auth_Sync Status
                </p>
                <div className="flex items-center gap-3 justify-end text-[10px] md:text-xs font-black uppercase tracking-widest italic">
                  <span
                    className={
                      userTier === "ARCHITECT"
                        ? "text-red-500"
                        : "text-[#39FF14]"
                    }
                  >
                    {userTier} TIER
                  </span>
                </div>
              </div>
              <div id="nexus-dim-index"></div>
            </header>

            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="w-full lg:w-[280px] shrink-0 space-y-1.5 sticky top-24 z-20 text-left">
                <div className="px-3 mb-4 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                  <div className="flex items-center gap-2 italic">
                    <LayoutList size={14} /> Matrix_Index
                  </div>
                  <Activity
                    size={10}
                    className="animate-pulse"
                    style={{ color: finalDimColor }}
                  />
                </div>
                {customMap?.sections?.map((sec) => {
                  const isActive =
                    !isGlobalFilterActive && activeSectionId === sec.id;

                  return (
                    <button
                      key={sec.id}
                      id={
                        String(sec.id).startsWith("SEC_")
                          ? sec.id
                          : `SEC_${sec.id}`
                      } // 🛡️ V20 KÁNON: Presný match na targetId z MenuHamburgerData ("SEC_A")
                      onMouseEnter={triggerHoverSound}
                      onClick={() => {
                        if (SoundFX && typeof SoundFX.click === "function")
                          SoundFX.click();
                        setSearchQuery("");
                        setFilterTier("ALL");
                        setActiveSectionId(sec.id);

                        // ⚡ AUTO-SCROLL PROTOKOL (Pre zosun na mobiloch)
                        setTimeout(() => {
                          const gridElement =
                            document.getElementById("nexus-dim-grid");
                          if (gridElement) {
                            gridElement.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }, 100);
                      }}
                      className={`w-full p-4 flex items-center justify-between text-left transition-all border rounded-xl group relative overflow-hidden ${isActive ? "bg-white/0.04 border-white/20 shadow-lg" : "border-transparent hover:bg-white/[0.01] bg-black/20"}`}
                    >
                      {isActive && (
                        <div
                          className="absolute left-0 top-0 h-full w-1 shadow-[0_0_8px_white]"
                          style={{ backgroundColor: finalDimColor }}
                        />
                      )}
                      <div className="flex flex-col gap-0.5">
                        <span
                          className={`text-[8px] font-mono uppercase tracking-[0.2em] transition-all ${isActive ? "text-white" : "text-white/20"}`}
                        >
                          {sec.id}
                        </span>
                        <span
                          className={`text-[11px] font-black uppercase tracking-widest transition-all ${isActive ? "text-white translate-x-1 italic" : "text-white/30 group-hover:text-white/60"}`}
                        >
                          {sec.title}
                        </span>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`transition-all ${isActive ? "opacity-100" : "opacity-0 -translate-x-2"}`}
                        style={{ color: finalDimColor }}
                      />
                    </button>
                  );
                })}
              </aside>
              <div id="nexus-dim-search"></div>
              <div className="flex-1 w-full text-left">
                {/* TOOLBAR */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-8 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-md shadow-xl">
                  <div className="relative w-full xl:w-auto flex-1 max-w-md group text-left">
                    <Search
                      size={14}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/10"
                    />
                    <input
                      type="text"
                      placeholder="SCAN_DATA_STREAM..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-neutral-950/90 border border-white/10 focus:border-cyan-400/60 rounded-lg py-2.5 pl-12 pr-4 text-cyan-300 placeholder:text-white/30 text-[10px] font-black uppercase tracking-[0.2em] outline-none transition-all shadow-inner caret-cyan-400"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
                    <div className="flex items-center bg-white/0.02 border border-white/10 rounded-lg p-1">
                      {["ALL", "FREE", "PRO", "OMEGA"].map((t) => (
                        <button
                          key={t}
                          onMouseEnter={triggerHoverSound}
                          onClick={() => {
                            if (SoundFX && typeof SoundFX.click === "function")
                              SoundFX.click();
                            setFilterTier(t);
                          }}
                          className={`px-4 py-1.5 rounded-md text-[9px] font-black uppercase tracking-widest transition-all shrink-0 ${filterTier === t ? "bg-white/10 text-white shadow-inner" : "text-white/30 hover:text-white/60"}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 bg-white/0.02 border border-white/10 rounded-lg p-1 hidden sm:flex">
                      <button
                        onClick={() => setViewMode("GRID_MD")}
                        className={`p-1.5 rounded-md transition-all ${viewMode === "GRID_MD" ? "bg-white/10 text-white" : "text-white/20"}`}
                      >
                        <LayoutGrid size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode("GRID_SM")}
                        className={`p-1.5 rounded-md transition-all ${viewMode === "GRID_SM" ? "bg-white/10 text-white" : "text-white/20"}`}
                      >
                        <Grid2X2 size={16} />
                      </button>
                      <button
                        onClick={() => setViewMode("LIST")}
                        className={`p-1.5 rounded-md transition-all ${viewMode === "LIST" ? "bg-white/10 text-white" : "text-white/20"}`}
                      >
                        <List size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  id="nexus-dim-grid"
                  className={`text-left ${
                    viewMode === "GRID_MD"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                      : viewMode === "GRID_SM"
                        ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                        : "flex flex-col gap-4"
                  }`}
                >
                  {nodesToRender.map((node) => {
                    const isOnline =
                      NODE_STATUS_REGISTRY &&
                      NODE_STATUS_REGISTRY[node.id] === "ONLINE";
                    const hasAccess = checkAccess(node.tier, node.id);
                    const tColor = getTierColor(node.tier);
                    const isList = viewMode === "LIST";

                    const nodeNumber = node.id.split("-")[1] || node.id;
                    const tooltipAddress = `Dimenzia: ${getSubdomainName(dimensionId)} UI Space Uzol ${nodeNumber}`;
                    const tooltipStatus = isOnline
                      ? "ON - online"
                      : "OFF - offline";

                    const currentLines = nodeStats
                      ? nodeStats[node.id] || 0
                      : 0;

                    return (
                      <button
                        key={node.id}
                        onMouseEnter={triggerHoverSound}
                        onClick={() => {
                          if (!isOnline) {
                            handleNodeClick(node.id);
                            return;
                          }
                          if (!hasAccess) {
                            if (SoundFX && typeof SoundFX.error === "function")
                              SoundFX.error();

                            if (setPaywallCampaign && setPaywallOpen) {
                              setPaywallCampaign({
                                id: node.id,
                                nodeKey: node.id,
                                title: node.title || `UZOL ${node.id}`,
                                tier: node.tier || "PRO",
                                dimension: dimensionId,
                                priceOc: 500,
                                ocPrice: 500,
                                priceEur: "5.00 €",
                                category: "NODES",
                                desc: `Odomknutie doživotného prístupu pre uzol ${node.id} v dimenzii ${dimensionId}.`,
                              });
                              setPaywallOpen(true);
                            }
                            return;
                          }
                          handleNodeClick(node.id);
                        }}
                        // ⚡ ZMENA: Odstránil som 'overflow-hidden', aby nálepka mohla trčať von!
                        className={`relative text-left transition-all duration-500 group flex shadow-xl border ${isOnline ? "bg-black/40 border-white/10 hover:border-white/30 hover:-translate-y-1 hover:bg-white/[0.02]" : "bg-black/80 border-white/5 opacity-40 hover:opacity-70"} ${isList ? "flex-row items-center p-6 rounded-2xl justify-between min-h-[100px]" : "flex-col justify-between p-6 md:p-8 rounded-[2rem] min-h-[280px]"}`}
                      >
                        {/* 🏷️ OVERHANGING BADGE (NÁLEPKA POL NA POL) */}
                        {!isList && (
                          <div
                            className="absolute -top-3 -right-3 z-30 flex items-center justify-center rounded-[0.4rem] shadow-[0_4px_15px_rgba(0,0,0,0.6)] border border-black/80 group/badge"
                            style={{
                              backgroundColor: dimTag.color,
                              minWidth: "34px",
                              height: "34px",
                              // Dynamická farba textu (Biela pre tmavé pozadia ako modrá, fialová, červená. Čierna pre svetlé)
                              color: [
                                "#0044FF",
                                "#8A2BE2",
                                "#BF00FF",
                                "#FF003C",
                                "#6B21A8",
                                "#1E3A8A",
                                "#FF1493",
                              ].includes(dimTag.color)
                                ? "#FFF"
                                : "#000",
                            }}
                          >
                            <span className="text-[12px] font-black tracking-widest">
                              {dimTag.short}
                            </span>

                            {/* BUBBLE TOOLTIP (Zobrazí sa len pri prejdení myšou) */}
                            <div className="absolute top-10 right-0 w-max bg-black/95 border border-white/10 rounded-md px-3 py-2 opacity-0 group-hover/badge:opacity-100 transition-opacity pointer-events-none z-40 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                              <span className="text-[9px] font-mono font-bold text-white uppercase tracking-widest">
                                {dimTag.full}
                              </span>
                            </div>
                          </div>
                        )}

                        {isList ? (
                          <>
                            <div className="flex items-center gap-8 text-left">
                              <div
                                title={tooltipAddress}
                                className="px-4 py-2 bg-white/10 text-white font-black text-[10px] tracking-widest rounded-lg border border-white/20 shadow-inner shrink-0 relative"
                              >
                                {node.id}
                                {/* V List zobrazení dáme len malý indikátor farby, aby to nerozbilo riadok */}
                                <div
                                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-black shadow-sm"
                                  style={{ backgroundColor: dimTag.color }}
                                  title={dimTag.full}
                                ></div>
                              </div>
                              <h3
                                className={`text-[11px] md:text-xs font-black uppercase tracking-widest italic ${isOnline ? "text-white" : "text-white/30"}`}
                              >
                                {node.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-6 justify-end">
                              <div
                                title="ÚROVEŇ/LEVEL OPERATORA"
                                className="px-3 py-1 rounded border flex items-center gap-1.5 shadow-lg"
                                style={{
                                  borderColor: tColor,
                                  backgroundColor: `${tColor}20`,
                                }}
                              >
                                {hasAccess ? (
                                  <Unlock size={12} style={{ color: tColor }} />
                                ) : (
                                  <Lock size={12} style={{ color: tColor }} />
                                )}
                                <span
                                  className="text-[10px] font-black tracking-widest uppercase"
                                  style={{ color: tColor }}
                                >
                                  {node.tier || "FREE"}
                                </span>
                              </div>

                              {isOnline && (
                                <ContentTachometer
                                  currentLines={currentLines}
                                  maxLines={2500}
                                />
                              )}

                              <div
                                title={tooltipStatus}
                                className="flex items-center gap-2 hidden sm:flex"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full ${isOnline ? "bg-[#39FF14] shadow-[0_0_10px_#39FF14]" : "bg-red-600 animate-pulse"}`}
                                />
                                <span
                                  className={`text-[9px] font-black uppercase tracking-widest ${isOnline ? "text-[#39FF14]" : "text-red-600"}`}
                                >
                                  {isOnline ? "ON" : "OFF"}
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-between items-start w-full mb-8 text-left gap-2 pt-2">
                              <div
                                title={tooltipAddress}
                                className="px-3 py-1.5 bg-white/10 text-white font-black text-[9px] md:text-[10px] tracking-widest rounded-md border border-white/20 shadow-inner mt-1"
                              >
                                {node.id}
                              </div>

                              <div
                                title={tooltipStatus}
                                className="flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-md border border-white/5 mt-1 shrink-0"
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-[#39FF14] shadow-[0_0_8px_#39FF14]" : "bg-red-600 animate-pulse"}`}
                                />
                                <span
                                  className={`text-[8px] font-black uppercase tracking-widest ${isOnline ? "text-[#39FF14]" : "text-red-600"}`}
                                >
                                  {isOnline ? "ON" : "OFF"}
                                </span>
                              </div>
                            </div>

                            <h3
                              className={`font-black uppercase tracking-widest leading-relaxed italic transition-all mb-8 text-left ${viewMode === "GRID_SM" ? "text-[10px] md:text-[11px]" : "text-[11px] md:text-xs"} ${isOnline ? "text-white group-hover:scale-[1.02]" : "text-white/20"}`}
                            >
                              {node.title}
                            </h3>

                            <div className="mt-auto flex justify-between items-center border-t border-white/5 pt-4 w-full">
                              <div className="flex items-center gap-3">
                                <div
                                  title="ÚROVEŇ/LEVEL OPERATORA"
                                  className="px-3 py-1 rounded border flex items-center gap-1.5 shadow-md"
                                  style={{
                                    borderColor: tColor,
                                    backgroundColor: `${tColor}20`,
                                  }}
                                >
                                  {hasAccess ? (
                                    <Unlock
                                      size={10}
                                      style={{ color: tColor }}
                                    />
                                  ) : (
                                    <Lock size={10} style={{ color: tColor }} />
                                  )}
                                  <span
                                    className="text-[9px] font-black tracking-widest uppercase"
                                    style={{ color: tColor }}
                                  >
                                    {node.tier || "FREE"}
                                  </span>
                                </div>

                                {isOnline && (
                                  <ContentTachometer
                                    currentLines={currentLines}
                                    maxLines={2500}
                                  />
                                )}
                              </div>

                              <Activity
                                title={tooltipStatus}
                                size={16}
                                style={{
                                  color: isOnline ? finalDimColor : "#222",
                                }}
                                className={
                                  isOnline
                                    ? "animate-pulse opacity-40"
                                    : "opacity-10"
                                }
                              />
                            </div>
                            {isOnline && (
                              <div
                                className="absolute bottom-0 left-0 w-full h-[3px] opacity-20 group-hover:opacity-100 transition-all rounded-b-[2rem]"
                                style={{
                                  backgroundColor: finalDimColor,
                                  boxShadow: `0 0 20px ${finalDimColor}`,
                                }}
                              />
                            )}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* 1. Lasery, blesky a scroll šípky */}
      <GlobalComponents dimColor={finalDimColor} themeColor={finalDimColor} />

      {/* 2. Hamburger výťah nakalibrovaný na aktuálnu dimenziu */}
      <GlobalHamburgerMenu
        activeTab={String(dimensionId || "id00").toLowerCase()}
        themeColor={finalDimColor}
        dimColor={finalDimColor}
      />

      {/* 3. Pätička s VOP a ochranou vo farbe dimenzie */}
      <GlobalFooter dimColor={finalDimColor} themeColor={finalDimColor} />
      <GlobalPaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        campaign={paywallCampaign}
        userBalance={userOc}
        userTier={userTier}
        userEmail={userEmail}
        onSuccessTransaction={(data) => {
          if (data?.newCredits !== undefined) setUserOc(data.newCredits);
          if (data?.newTier) setUserTier(data.newTier);
          if (data?.campaign?.id && !unlockedNodes.includes(data.campaign.id)) {
            setUnlockedNodes((prev) => [...prev, data.campaign.id]);
          }
        }}
      />
    </div>
  );
};

export default GlobalDimensionHub;
