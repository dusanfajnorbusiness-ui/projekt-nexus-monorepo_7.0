// 🛰️ EXODUS-READY: 14. 5. 2026 | MODUL: BLOG TOOLBAR V20
import React, { useState, useEffect, useMemo } from "react";
import {
  Pin,
  Search,
  ChevronDown,
  Filter,
  Layers,
  User,
  Bell,
  Heart,
  CheckCircle2,
  Globe,
  MessageSquare,
  X,
  List,
  Quote,
  Hash,
  Target,
  PenTool,
} from "lucide-react";

// ============================================================================
// ⚠️ LOKÁLNE IMPORTY (NAPOJENÉ NA TVOJ MODULÁRNY SYSTÉM)
// ============================================================================
import { getTierColor } from "@shared/data/nexusConfig.js";
import { DIMENSION_DESCRIPTIONS } from "@main-web/data/DimensionDescriptions.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { NexusDB } from "@shared/services/NexusDB_Core.js";

const CORE_VERSION = "BT-BlogToolbar V20.1-CATEGORIES-FIX";

// ============================================================================
// ⚡ INTELIGENTNÝ TOOLTIP
// ============================================================================
const ToolbarTooltip = ({
  children,
  text,
  color = "#00f3ff",
  position = "top",
  align = "center",
}) => {
  const isTop = position === "top";
  let alignClasses = "left-1/2 -translate-x-1/2";
  let originClass = isTop ? "origin-bottom" : "origin-top";

  if (align === "right") {
    alignClasses = "right-0";
    originClass = isTop ? "origin-bottom-right" : "origin-top-right";
  } else if (align === "left") {
    alignClasses = "left-0";
    originClass = isTop ? "origin-bottom-left" : "origin-top-left";
  }

  return (
    <div className="relative group/tool inline-flex z-50">
      {children}
      <div
        className={`absolute ${isTop ? "bottom-full mb-2" : "top-full mt-2"} ${alignClasses} ${originClass} scale-95 opacity-0 invisible group-hover/tool:scale-100 group-hover/tool:opacity-100 group-hover/tool:visible transition-all duration-200 pointer-events-none w-max z-`}
      >
        <div
          className="bg-[#050505] border text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)] rounded-lg backdrop-blur-md"
          style={{
            borderColor: `${color}80`,
            color: color,
            boxShadow: `0 0 15px ${color}20`,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 HLAVNÝ KOMPONENT: BLOG TOOLBAR
// ============================================================================
export const BlogToolbar = ({
  engine,
  activeView,
  setActiveView,
  userState,
}) => {
  const [unifiedSearch, setUnifiedSearch] = useState("");
  const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
  // ⚡ Rozdelený stav pre radar (Ošetrené proti undefined)
  const [radarAlerts, setRadarAlerts] = useState({
    reactionCount: 0,
    replyCount: 0,
  });

  // ⚡ STAVY PRE @MENTION RADAR
  const [showSearchRadar, setShowSearchRadar] = useState(false);
  const [radarQuery, setRadarQuery] = useState("");

  const tColor = getTierColor(userState?.tier || "FREE");

  // 📡 SYSTÉMOVÝ SIGNÁL PRI ŠTARTE
  useEffect(() => {
    console.log(
      `%c [LOADED]: ${CORE_VERSION} `,
      "background: #000; color: #39FF14; font-weight: bold; border: 1px solid #39FF14; padding: 2px;",
    );
  }, []);

  // 📡 NOTIFIKÁCIE REAKCIÍ A ODPOVEDÍ (INBOX RADAR)
  useEffect(() => {
    if (!userState?.email || userState.isGuest) return;
    const unsub = NexusDB.subscribeToBlogNotifications(
      userState.email,
      (data) => setRadarAlerts(data), // ⚡ Zapisujeme duálny objekt
    );
    return () => {
      if (unsub) unsub();
    };
  }, [userState?.email, userState?.isGuest]);

  // ⚡ EXTRAKCIA A TRIEDENIE KATEGÓRIÍ (OPRAVENÝ ESLINT ERROR A PRIDANÉ TRIEDENIE)
  const availableCategories = useMemo(() => {
    if (!DIMENSION_DESCRIPTIONS) return [];

    return Object.entries(DIMENSION_DESCRIPTIONS).map(([key, data]) => {
      // 1. Zistenie presného typu kategórie (DIM, SYS, STK) pre jej zaradenie do správnej sekcie
      let computedType = data.type;
      if (!computedType) {
        if (key.toUpperCase().startsWith("ID")) computedType = "DIM";
        else if (
          key.toUpperCase().includes("SYS") ||
          key.toUpperCase() === "API_ORACLE"
        )
          computedType = "SYS";
        else computedType = "STK";
      }

      return {
        id: key,
        name: data.name,
        color: data.color || "#00f3ff",
        type: computedType,
      };
    }); // ⚡ FIX: Úplne sme zmazali `.filter(...)` a problém s 'key is not defined' je preč! Všetko vyfiltrujeme priamo v renderi HTML.
  }, []);

  // ⚡ EXTRAKCIA OPERÁTOROV PRE RADAR
  const networkOperators = useMemo(() => {
    if (!engine?.allRawPosts) return [];
    const uniqueOps = new Map();
    engine.allRawPosts.forEach((post) => {
      if (post.authorName && !uniqueOps.has(post.authorName)) {
        uniqueOps.set(post.authorName, post.authorName);
      }
    });
    return Array.from(uniqueOps.values());
  }, [engine?.allRawPosts]);

  // ⚡ UNIVERZÁLNY SCROLL NA VRCH
  const smartScrollToTop = () => {
    setTimeout(() => {
      const feedTop =
        document.getElementById("nexus-blog-feed-top") ||
        document.getElementById("nexus-blog-topicmap");
      if (feedTop) {
        // 🛑 ABSOLÚTNY FIX: Počítame presnú pozíciu.
        // 240px offset ťa bezpečne zastaví pod Sticky Hlavičkou aj Toolbarom!
        const yOffset =
          feedTop.getBoundingClientRect().top + window.scrollY - 240;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 480, behavior: "smooth" });
      }
    }, 100);
  };

  // ⚡ MOZOG RADARU: Výpočet notifikácií
  const unreadRadar = useMemo(() => {
    if (!engine?.allRawPosts || !engine?.readPosts || !userState?.email) {
      return { newPosts: 0, newReplies: 0 };
    }
    let newPostsCount = 0;
    let newRepliesCount = 0;
    const myEmail = userState.email;

    engine.allRawPosts.forEach((post) => {
      if (!engine.readPosts.includes(post.id)) {
        if (!post.parentId) newPostsCount++;
        else if (post.authorId !== myEmail) {
          const parent = engine.allRawPosts.find((p) => p.id === post.parentId);
          if (parent && parent.authorId === myEmail) newRepliesCount++;
        }
      }
    });

    return { newPosts: newPostsCount, newReplies: newRepliesCount };
  }, [engine?.allRawPosts, engine?.readPosts, userState?.email]);

  // ⚡ GLOBÁLNY RESET
  const handleGlobalReset = (targetView) => {
    if (SoundFX?.click) SoundFX.click();
    if (setActiveView) setActiveView(targetView);
    if (engine?.setFilters) {
      engine.setFilters((p) => ({
        ...p,
        type: "ALL",
        category: "ALL",
        searchTxt: "",
        operatorSearch: "",
        focusedThread: null,
      }));
    }
    smartScrollToTop(); // TOTO SME VRÁTILI: Zroluje ťa dole na mriežku
  };

  // ⚡ TAKTICKÝ RADAR (3D ZOOM + AUTO-READ)
  const executeRadarScan = (scanType) => {
    if (SoundFX?.click) SoundFX.click();

    // ⚡ ODPÁLENIE ČISTIČA (Zmazanie čísla z INBOXU a Blogu po kliknutí)
    if (scanType === "REACTIONS" || scanType === "REPLIES") {
      NexusDB.markBlogNotificationsAsRead(userState?.email, scanType);
    }

    const myEmail = userState?.email;
    let targetId = null;
    let glowColor = "#00f3ff";
    let targetView = "THREAD";
    let filterType = "ALL";

    const sorted = [...(engine?.allRawPosts || [])].sort((a, b) => {
      const tA = a.timestamp?.seconds || 0;
      const tB = b.timestamp?.seconds || 0;
      return tB - tA;
    });

    if (scanType === "MY_TOPICS") {
      targetView = "MAP";
      filterType = "MINE";
      glowColor = "#FFAA00";
      const myTopic = sorted.find((p) => !p.parentId && p.authorId === myEmail);
      if (myTopic) targetId = myTopic.id;
    } else if (scanType === "MY_THREADS") {
      targetView = "THREAD";
      filterType = "PARTICIPATED"; // Zobrazuje tvoje odpovede v cudzích aj tvojich vláknach
      glowColor = "#FFAA00";
      const myThread = sorted.find((p) => p.parentId && p.authorId === myEmail);
      if (myThread) targetId = myThread.id;
    } else if (scanType === "NEW_THREADS") {
      targetView = "THREAD";
      filterType = "ALL";
      glowColor = "#FF003C";
      const newPost = sorted.find(
        (p) => !p.parentId && !engine?.readPosts?.includes(p.id),
      );
      if (newPost) targetId = newPost.id;
    } else if (scanType === "REPLIES") {
      targetView = "THREAD";
      filterType = "ALL";
      glowColor = "#39FF14";
      const newReply = sorted.find((p) => {
        if (engine?.readPosts?.includes(p.id)) return false;
        if (p.parentId && p.authorId !== myEmail) {
          const parent = sorted.find((x) => x.id === p.parentId);
          return parent && parent.authorId === myEmail;
        }
        return false;
      });
      if (newReply) targetId = newReply.id;
    } else if (scanType === "REACTIONS") {
      targetView = "THREAD";
      filterType = "REACTIONS";
      glowColor = "#39FF14";
      if (
        radarAlerts.hasReactions &&
        typeof setHasNewReactions === "function"
      ) {
        setRadarAlerts({ hasReactions: false, hasReplies: false });
      }
    }

    if (!targetId && (scanType === "NEW_THREADS" || scanType === "REPLIES")) {
      alert(
        "MATRIX RADAR: V tomto sektore už nie sú žiadne zachytené signály.",
      );
      return;
    }

    // 1. NÁSILNÁ ZMENA STAVOV (Filtre a View)
    if (engine?.setFilters) {
      engine.setFilters((p) => ({
        ...p,
        type: filterType,
        category: "ALL",
        searchTxt: "",
        operatorSearch: "",
        focusedThread: null, // 🛑 FIX: Prevencia proti kolapsu výšky stránky
      }));
    }

    if (setActiveView) setActiveView(targetView);
    // Synchro signál pre BlogPage, aby fyzicky prepla záložku do THREAD
    window.dispatchEvent(
      new CustomEvent("nexus_switch_local_tab", { detail: targetView }),
    );

    // 2. EXEKÚCIA ZOSKOKU
    if (targetId) {
      if (
        (scanType === "NEW_THREADS" || scanType === "REPLIES") &&
        engine?.markAsRead
      ) {
        engine.markAsRead(targetId);
      }

      // 🛑 ABSOLÚTNY FIX: Ak ideme do MAPY, nesmieme volať "nexus_radar_jump",
      // pretože ten v BlogPage natvrdo prepína systém do THREAD módu a hľadá hĺbku.
      if (targetView === "MAP") {
        setTimeout(() => {
          // V mape nepotrebujeme rozbaľovať vlákna. Iba vypálime 3D Glow a zoskočíme.
          window.dispatchEvent(
            new CustomEvent("nexus_radar_visual_lock", { detail: targetId }),
          );
          const el = document.getElementById(`topic-${targetId}`);
          if (el) {
            // Vďaka CSS Štítu 260px z BlogPage sa to zastaví presne a bezpečne!
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            smartScrollToTop();
          }
        }, 350);
      } else {
        // Ak ideme do VLÁKIEN (THREAD), použijeme náš hĺbkový Radar.
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("nexus_radar_jump", {
              detail: { targetId: targetId, expandId: targetId },
            }),
          );
        }, 350);
      }
    } else {
      smartScrollToTop();
    }
  };

  // ⚡ SMART SEARCH S @MENTION RADAROM
  const handleSmartSearch = (val) => {
    setUnifiedSearch(val);
    if (val.startsWith("@")) {
      setShowSearchRadar(true);
      setRadarQuery(val.substring(1).toLowerCase());
    } else {
      setShowSearchRadar(false);
      if (engine?.setFilters) {
        engine.setFilters((p) => ({
          ...p,
          operatorSearch: "",
          searchTxt: val,
          category: "ALL",
          focusedThread: null,
        }));
      }
    }
  };

  const executeOperatorSearch = (operatorName) => {
    if (SoundFX?.click) SoundFX.click();
    setUnifiedSearch(`@${operatorName}`);
    setShowSearchRadar(false);
    if (engine?.setFilters) {
      engine.setFilters((p) => ({
        ...p,
        operatorSearch: operatorName,
        searchTxt: "",
        category: "ALL",
        focusedThread: null,
      }));
    }
  };

  // ⚡ SYNCHRONIZÁCIA KATEGÓRIÍ PRE ŠTÍTOK V STATUS BARE
  const isPinActive = engine?.filters?.pinnedOnly;
  const activeCategory =
    engine?.filters?.category !== "ALL" ? engine?.filters?.category : null;

  let currentCatName = "VŠETKY KATEGÓRIE";
  let activeCatColor = "#ffffff";

  if (activeCategory) {
    const foundCat = availableCategories.find((d) => d.id === activeCategory);
    if (foundCat) {
      currentCatName = foundCat.name;
      activeCatColor = foundCat.color;
    }
  }

  // ZATVORENIE DROPDOWNU PRI KLIKNUTÍ MIMO
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isCatDropdownOpen &&
        !e.target.closest("#nexus-cat-dropdown-container")
      ) {
        setIsCatDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCatDropdownOpen]);

  // ⚡ LAPAČ SIGNÁLOV Z VÝŤAHU (Diaľkové odpálenie Radaru)
  useEffect(() => {
    const handleRadarSignal = (e) => {
      if (e.detail) {
        executeRadarScan(e.detail);
      }
    };
    window.addEventListener("nexus_radar_scan", handleRadarSignal);
    return () =>
      window.removeEventListener("nexus_radar_scan", handleRadarSignal);
  }, []); // 🛑 PRIDANÉ PRÁZDNE ZÁTVORKY! Lapač sa načíta len raz. RAM zachránená.

  // // ⚡ SONDA: Výpis stavu radarov do konzoly pre Architekta (F12)
  // console.log(
  //   "[NEXUS_RADAR_SONDA] Zvonček (Nové vlákna):",
  //   unreadRadar.newPosts,
  // );
  // console.log(
  //   "[NEXUS_RADAR_SONDA] Bublina (Odpovede a Zmienky):",
  //   radarAlerts.replyCount,
  // );
  // console.log(
  //   "[NEXUS_RADAR_SONDA] Srdce (Čisté lajky):",
  //   radarAlerts.reactionCount,
  // );

  return (
    <div
      id="nexus-blog-toolbar"
      className="flex flex-col gap-0 mt-6 bg-[#0a0a0a] border border-[#222] rounded-[2rem] p-4 md:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative group/toolbar transition-all z-50"
      style={{ borderLeft: `4px solid ${tColor}` }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.10] group-hover/toolbar:opacity-[0.20] transition-opacity duration-1000 overflow-hidden rounded-[2rem]">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(270deg, ${tColor} 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* 🟢 RIADOK 1: MASTER ROW */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 pb-4 w-full border-b border-[#222] relative">
          {/* 1A. GLOBÁLNE A PERSONÁLNE RADARY */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <ToolbarTooltip
              text="Všetky Témy (Katalóg)"
              color="#00f3ff"
              position="top"
              align="left"
            >
              <button
                onClick={() => handleGlobalReset("MAP")}
                className="p-2.5 rounded-xl bg-black text-white/50 border border-[#333] hover:text-[#00f3ff] hover:border-[#00f3ff]/50 transition-all shadow-md"
              >
                <Globe size={16} />
              </button>
            </ToolbarTooltip>
            <ToolbarTooltip
              text="Všetky Vlákna (Feed)"
              color="#00f3ff"
              position="top"
              align="left"
            >
              <button
                onClick={() => handleGlobalReset("THREAD")}
                className="p-2.5 rounded-xl bg-black text-white/50 border border-[#333] hover:text-[#00f3ff] hover:border-[#00f3ff]/50 transition-all shadow-md"
              >
                <List size={16} />
              </button>
            </ToolbarTooltip>

            <div className="w-[1px] h-8 bg-[#333] mx-1"></div>

            {[
              {
                id: "MY_TOPICS",
                icon: <User size={16} />,
                tooltip: "Moje Témy",
                count: 0,
              },
              {
                id: "MY_THREADS",
                icon: <MessageSquare size={16} />,
                tooltip: "Moje Vlákna",
                count: 0,
              },

              {
                id: "NEW_THREADS",
                icon: (
                  <Bell
                    size={16}
                    className={unreadRadar.newPosts > 0 ? "animate-pulse" : ""}
                  />
                ),
                tooltip: "Nová téma s vláknom",
                color: "#FF003C",
                count: unreadRadar.newPosts || 0,
              },
              {
                id: "REPLIES",
                icon: <MessageSquare size={16} />,
                tooltip: "Odpovede a Zmienky", // ⚡ Priorita 1 a 2
                color: "#00FF00",
                count: radarAlerts.replyCount || 0,
              },
              {
                id: "REACTIONS",
                icon: <Heart size={16} />,
                tooltip: "Iba Lajky", // ⚡ Priorita 3
                color: "#00FF00",
                count: radarAlerts.reactionCount || 0,
              },
            ].map((btn) => (
              <ToolbarTooltip
                key={btn.id}
                text={btn.tooltip}
                color={btn.color || "#fff"}
                position="top"
                align="center"
              >
                <button
                  onClick={() => executeRadarScan(btn.id)}
                  className={`relative p-2.5 rounded-xl transition-all shadow-md ${
                    btn.count > 0
                      ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                      : "bg-black text-white/50 border border-[#333] hover:border-white/20 hover:text-white"
                  }`}
                >
                  {btn.icon}
                  {btn.count > 0 && (
                    <div
                      className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-[9px] font-black text-black flex items-center justify-center animate-in zoom-in shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                      style={{ backgroundColor: btn.color }}
                    >
                      {btn.count > 99 ? "99+" : btn.count}
                    </div>
                  )}
                </button>
              </ToolbarTooltip>
            ))}

            {/* 🟢 FAJKA: PREČÍTAŤ VŠETKO */}
            {(unreadRadar.newPosts > 0 ||
              radarAlerts.replyCount > 0 ||
              radarAlerts.reactionCount > 0) && (
              <ToolbarTooltip
                text="Označiť všetko ako prečítané"
                color="#39FF14"
                position="top"
                align="center"
              >
                <button
                  onClick={() => {
                    // 1. Zmaže staré notifikácie (Lokálne vlákna)
                    if (engine?.markAllAsRead) engine.markAllAsRead();

                    // 2. Bleskový čistič INBOXU pre Supabase (Zhasne radar z druhej strany)
                    if (userState?.email) {
                      NexusDB.markBlogNotificationsAsRead(
                        userState.email,
                        "REACTIONS",
                      );
                      NexusDB.markBlogNotificationsAsRead(
                        userState.email,
                        "REPLIES",
                      );
                    }

                    // 3. Vizuálny okamžitý reset čísel (Odstráni ESLint error)
                    if (typeof setRadarAlerts === "function") {
                      setRadarAlerts({
                        hasReactions: false,
                        hasReplies: false,
                        reactionCount: 0,
                        replyCount: 0,
                      });
                    }

                    if (SoundFX?.success) SoundFX.success();
                  }}
                  className="p-2.5 rounded-xl bg-black text-[#39FF14]/50 border border-[#333] hover:text-[#39FF14] hover:bg-[#39FF14]/10 transition-all ml-2 shadow-md"
                >
                  <CheckCircle2 size={16} />
                </button>
              </ToolbarTooltip>
            )}
          </div>

          {/* 1B. PRAVÁ STRANA: Kategórie a Search (s ochranou proti vytekaniu) */}
          <div className="flex flex-col md:flex-row items-center gap-3 w-full xl:w-auto flex-1 xl:justify-end">
            {/* ⚡ KATEGÓRIE VERTIKÁLNY DROPDOWN (S Rozdelením na 3 klastre) */}
            <div
              id="nexus-cat-dropdown-container"
              className="relative w-full md:max-w-[250px] shrink xl:border-l xl:border-[#333] xl:pl-4"
            >
              <button
                onClick={() => setIsCatDropdownOpen(!isCatDropdownOpen)}
                className="w-full px-4 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all rounded-xl flex items-center justify-between gap-2 bg-[#050505] border border-[#333] text-white hover:bg-[#111] hover:border-white/30 shadow-md"
                style={
                  activeCategory && activeCategory !== "ALL"
                    ? { borderColor: activeCatColor }
                    : {}
                }
              >
                <div className="flex items-center gap-2 truncate">
                  {!activeCategory || activeCategory === "ALL" ? (
                    <Layers size={14} className="text-white/50 shrink-0" />
                  ) : (
                    <Filter
                      size={14}
                      style={{ color: activeCatColor }}
                      className="shrink-0"
                    />
                  )}
                  <span className="truncate">{currentCatName}</span>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-white/50 shrink-0 transition-transform ${isCatDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isCatDropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 xl:left-4 w-full md:w-[280px] bg-[#050505] border border-[#333] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,1)] flex flex-col max-h-[400px] overflow-y-auto hide-scroll animate-in fade-in slide-in-from-top-2 z-">
                  {/* 🌐 VŠETKY KATEGÓRIE (Sticky = Zostane vždy viditeľné na vrchu scrollu) */}
                  <button
                    onClick={() => {
                      if (SoundFX?.click) SoundFX.click();
                      if (engine?.setFilters)
                        engine.setFilters((p) => ({
                          ...p,
                          category: "ALL",
                          focusedThread: null,
                        }));
                      setIsCatDropdownOpen(false);
                    }}
                    className="text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white/80 hover:bg-white/10 transition-colors border-b border-[#222] flex items-center gap-3 shrink-0 sticky top-0 bg-[#050505] z-10 shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
                  >
                    <Globe size={12} className="shrink-0 text-[#00f3ff]" />{" "}
                    VŠETKY KATEGÓRIE
                  </button>

                  {/* 🧠 SEKICIA 1: KOGNITÍVNE JADRÁ (DIM) */}
                  <div className="px-4 py-2 mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-[#39FF14]/50 border-b border-[#222] bg-black/50">
                    🧠 KOGNITÍVNE JADRÁ (ID00 - ID14)
                  </div>
                  {availableCategories
                    .filter((c) => c.type === "DIM")
                    .map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            if (SoundFX?.click) SoundFX.click();
                            if (engine?.setFilters)
                              engine.setFilters((p) => ({
                                ...p,
                                category: cat.id,
                                focusedThread: null,
                              }));
                            if (setActiveView) setActiveView("THREAD");
                            setIsCatDropdownOpen(false);
                          }}
                          className={`text-left px-4 py-2.5 text-[9px] font-black uppercase tracking-widest transition-colors border-b border-[#222] flex items-center gap-3 shrink-0 ${isActive ? "bg-[#111] text-white" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
                        >
                          <Hash
                            size={12}
                            style={{ color: cat.color }}
                            className="shrink-0"
                          />
                          <span
                            className="truncate"
                            style={{ color: isActive ? cat.color : "inherit" }}
                          >
                            {cat.name}
                          </span>
                        </button>
                      );
                    })}

                  {/* ⚡ SEKCIA 2: SYSTÉMOVÉ KLASTRE (SYS) */}
                  {availableCategories.filter((c) => c.type === "SYS").length >
                    0 && (
                    <>
                      <div className="px-4 py-2 mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-[#FFD700]/50 border-b border-[#222] bg-black/50">
                        ⚡ SYSTÉMOVÉ KLASTRE (GLOBÁLNE UZLY)
                      </div>
                      {availableCategories
                        .filter((c) => c.type === "SYS")
                        .map((cat) => {
                          const isActive = activeCategory === cat.id;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => {
                                if (SoundFX?.click) SoundFX.click();
                                if (engine?.setFilters)
                                  engine.setFilters((p) => ({
                                    ...p,
                                    category: cat.id,
                                    focusedThread: null,
                                  }));
                                if (setActiveView) setActiveView("THREAD");
                                setIsCatDropdownOpen(false);
                              }}
                              className={`text-left px-4 py-2.5 text-[9px] font-black uppercase tracking-widest transition-colors border-b border-[#222] flex items-center gap-3 shrink-0 ${isActive ? "bg-[#111] text-white" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
                            >
                              <Hash
                                size={12}
                                style={{ color: cat.color }}
                                className="shrink-0"
                              />
                              <span
                                className="truncate"
                                style={{
                                  color: isActive ? cat.color : "inherit",
                                }}
                              >
                                {cat.name}
                              </span>
                            </button>
                          );
                        })}
                    </>
                  )}

                  {/* 🏷️ SEKCIA 3: SÉMANTICKÉ TÉMY A KATEGÓRIE (STK) */}
                  <div className="px-4 py-2 mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-[#E91E63]/50 border-b border-[#222] bg-black/50">
                    🏷️ SÉMANTICKÉ TÉMY A KATEGÓRIE (STK)
                  </div>
                  {availableCategories
                    .filter((c) => c.type === "STK")
                    .map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            if (SoundFX?.click) SoundFX.click();
                            if (engine?.setFilters)
                              engine.setFilters((p) => ({
                                ...p,
                                category: cat.id,
                                focusedThread: null,
                              }));
                            if (setActiveView) setActiveView("THREAD");
                            setIsCatDropdownOpen(false);
                          }}
                          className={`text-left px-4 py-2.5 text-[9px] font-black uppercase tracking-widest transition-colors border-b border-[#222] last:border-0 flex items-center gap-3 shrink-0 ${isActive ? "bg-[#111] text-white" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
                        >
                          <Hash
                            size={12}
                            style={{ color: cat.color }}
                            className="shrink-0"
                          />
                          <span
                            className="truncate"
                            style={{ color: isActive ? cat.color : "inherit" }}
                          >
                            {cat.name}
                          </span>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>

            {/* SMART SEARCH + @MENTION RADAR */}
            <div className="relative w-full md:max-w-[240px] shrink group/search">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/search:text-[#00f3ff] transition-colors"
              />
              <input
                type="text"
                value={unifiedSearch}
                onChange={(e) => handleSmartSearch(e.target.value)}
                placeholder="Hľadať alebo @operátora..."
                className="w-full bg-black border border-[#333] text-white text-[10px] font-mono px-9 py-2.5 rounded-xl focus:border-[#00f3ff] focus:outline-none transition-all placeholder:text-white/20 hover:border-white/20 shadow-md"
              />
              {unifiedSearch && (
                <button
                  onClick={() => {
                    setUnifiedSearch("");
                    setShowSearchRadar(false);
                    if (engine?.setFilters)
                      engine.setFilters((p) => ({
                        ...p,
                        searchTxt: "",
                        operatorSearch: "",
                      }));
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#FF003C] transition-colors bg-black rounded-full p-0.5"
                >
                  <X size={12} />
                </button>
              )}

              {/* RADAR OPERÁTOROV */}
              {showSearchRadar && (
                <div className="absolute top-[calc(100%+8px)] right-0 w-[250px] bg-[#050505] border border-[#333] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,1)] z- overflow-hidden flex flex-col max-h-60 overflow-y-auto hide-scroll animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2 text-[8px] font-black uppercase tracking-widest text-[#00f3ff]/50 border-b border-[#222] bg-black flex items-center gap-2">
                    <Target
                      size={10}
                      className="animate-pulse text-[#00f3ff]"
                    />{" "}
                    Zameriavam Entitu...
                  </div>
                  {networkOperators.filter((op) =>
                    op.toLowerCase().includes(radarQuery),
                  ).length > 0 ? (
                    networkOperators
                      .filter((op) => op.toLowerCase().includes(radarQuery))
                      .map((op) => (
                        <button
                          key={op}
                          onClick={() => executeOperatorSearch(op)}
                          className="text-left px-4 py-2.5 text-[10px] font-mono text-white/80 hover:bg-[#00f3ff]/10 hover:text-[#00f3ff] transition-colors border-b border-[#222] last:border-0 flex items-center gap-3 group/op"
                        >
                          <User
                            size={12}
                            className="opacity-50 group-hover/op:opacity-100 group-hover/op:scale-110 transition-all shrink-0"
                          />{" "}
                          <span className="truncate">@{op}</span>
                        </button>
                      ))
                  ) : (
                    <div className="px-4 py-6 text-[9px] uppercase tracking-widest text-center text-white/30 font-mono">
                      Žiadny signál entity.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 🔴 RIADOK 3: STATUS BAR (Prístrojová doska) */}
        <div className="flex flex-wrap items-center gap-2 pt-4 mt-2 relative z-10">
          {/* Defaultný štítok */}
          {(!activeCategory || activeCategory === "ALL") && (
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 text-white/40 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest cursor-default shadow-md">
              <Globe size={10} className="shrink-0" /> VŠETKY KATEGÓRIE
            </div>
          )}

          {/* Aktívna Kategória - SYNCHRONIZOVANÁ */}
          {activeCategory && activeCategory !== "ALL" && (
            <button
              onClick={() =>
                engine?.setFilters((p) => ({ ...p, category: "ALL" }))
              }
              className="flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all group shadow-lg"
              style={{
                backgroundColor: `${activeCatColor}15`,
                color: activeCatColor,
                borderColor: `${activeCatColor}40`,
                borderWidth: "1px",
              }}
            >
              <Filter size={10} className="shrink-0" /> {currentCatName}
              <X
                size={10}
                className="opacity-50 group-hover:opacity-100 shrink-0"
              />
            </button>
          )}

          {/* Pripnuté */}
          {isPinActive && (
            <button
              onClick={() =>
                engine?.setFilters((p) => ({ ...p, pinnedOnly: false }))
              }
              className="flex items-center gap-2 px-3 py-1 bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/30 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#00f3ff] hover:text-black transition-all group shadow-lg"
            >
              <Pin size={10} className="shrink-0" /> Pripnuté
              <X
                size={10}
                className="opacity-50 group-hover:opacity-100 shrink-0"
              />
            </button>
          )}

          {/* Aktívne Vyhľadávanie textu */}
          {unifiedSearch && !unifiedSearch.startsWith("@") && (
            <button
              onClick={() => {
                setUnifiedSearch("");
                engine?.setFilters((p) => ({
                  ...p,
                  searchTxt: "",
                  operatorSearch: "",
                }));
              }}
              className="flex items-center gap-2 px-3 py-1 bg-white/10 text-white border border-white/30 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all group shadow-lg"
            >
              <Search size={10} className="shrink-0" /> Hľadám: {unifiedSearch}
              <X
                size={10}
                className="opacity-50 group-hover:opacity-100 shrink-0"
              />
            </button>
          )}

          {/* Aktívne Vyhľadávanie operátora */}
          {unifiedSearch && unifiedSearch.startsWith("@") && (
            <button
              onClick={() => {
                setUnifiedSearch("");
                engine?.setFilters((p) => ({
                  ...p,
                  searchTxt: "",
                  operatorSearch: "",
                }));
              }}
              className="flex items-center gap-2 px-3 py-1 bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/30 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#39FF14] hover:text-black transition-all group shadow-lg"
            >
              <User size={10} className="shrink-0" /> Entita: {unifiedSearch}
              <X
                size={10}
                className="opacity-50 group-hover:opacity-100 shrink-0"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogToolbar;
