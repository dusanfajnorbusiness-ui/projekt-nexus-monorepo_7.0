import { BlogTopicMap } from "@blog/components/Blog-TopicMap.jsx";
import { BlogCommunityPanel } from "@blog/components/BlogCommunityPanel.jsx";
import BlogComposer from "@blog/components/BlogComposer.jsx";
// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE) ⚠️
// ============================================================================
import { BlogHeader } from "@blog/components/BlogHeader.jsx";
import { BlogPostCard } from "@blog/components/BlogPostCard.jsx";
import { BlogToolbar } from "@blog/components/BlogToolbar.jsx";
import RepresentativeHeader from "@blog/components/RepresentativeHeader.jsx";
import { useBlogEngine } from "@blog/hooks/Blog-Engine.js";
import { NexusRadarEngine } from "@main-web/components/NexusRadarEngine.jsx";
// import { GlobalProfil } from "@blog/components/GlobalProfil";
import MetaTags from "@shared/components/MetaTags.jsx";
import { getTierColor } from "@shared/data/nexusConfig.js";
import { NexusDB } from "@shared/services/NexusDB_Core.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
// 🛰️ EXODUS-READY: 11. 5. 2026 | MODUL: ID14-BLOG
import { Activity, ChevronLeft, ChevronRight, MessageSquare, Terminal, X } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { useThemeSync } from "@shared/hooks/useThemeSync.js";

const CORE_VERSION = "P-BlogPage V12.1-EXODUS";


export const RecursiveThread = ({ parentId, engine, userState, level }) => {
  // ⚡ Ak letí Radar (Deep Link), zrušíme limit 5 a otvoríme všetky! Inak ho necháme pre úsporu RAM.
  const [visibleLimit, setVisibleLimit] = useState(
    window.nexus_radar_in_progress ? 9999 : 5,
  );

  useEffect(() => {
    const handleRadarExpand = () => setVisibleLimit(9999);
    window.addEventListener(
      "nexus_radar_in_progress_signal",
      handleRadarExpand,
    );
    if (window.nexus_radar_in_progress) setVisibleLimit(9999);
    return () =>
      window.removeEventListener(
        "nexus_radar_in_progress_signal",
        handleRadarExpand,
      );
  }, []);

  if (!engine || !engine.replies) return null;

  const childReplies = engine.replies
    .filter((r) => r.parentId === parentId)
    .sort((a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0));

  if (childReplies.length === 0) return null;

  const visibleReplies = childReplies.slice(0, visibleLimit);
  const hiddenCount = childReplies.length - visibleLimit;

  return (
    <div className="flex flex-col relative w-full mt-4 gap-4">
      {visibleReplies.map((reply) => (
        <React.Fragment key={reply.id}>
          {/* ⚡ PLNE ŠIROKÝ PRÍSPEVOK (100% šírka, identická s hlavným vláknom) */}
          <div className="w-full relative flex flex-col transition-all duration-500">
            {/* ⚡ VIZUÁLNA OBLÚKOVÁ ČIARA (Spojnica) - Nezmenšuje šírku karty! */}
            <div className="absolute -top-5 left-6 w-8 h-8 border-b-2 border-l-2 border-[#333] rounded-bl-xl z-0 pointer-events-none"></div>

            {/* ⚡ Samotná Karta príspevku na plnú šírku */}
            <div className="relative z-10 w-full mt-2">
              <BlogPostCard
                post={reply}
                engine={engine}
                userState={userState}
              />
            </div>

            {/* Ďalšia úroveň rekurzie */}
            <RecursiveThread
              parentId={reply.id}
              engine={engine}
              userState={userState}
              level={level + 1}
            />
          </div>
        </React.Fragment>
      ))}

      {/* ⚡ TLAČIDLO PRE NAČÍTANIE ZVYŠKU VLÁKNA */}
      {hiddenCount > 0 && (
        <button
          onClick={() => {
            if (typeof SoundFX !== "undefined" && SoundFX.click)
              SoundFX.click();
            setVisibleLimit((prev) => prev + 10);
          }}
          className="mx-auto mt-2 mb-2 px-4 py-2 border border-[#39FF14]/30 bg-[#39FF14]/10 text-[#39FF14] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#39FF14]/20 transition-all shadow-[0_0_15px_rgba(57,255,20,0.1)] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
        >
          Načítať ďalšie odpovede ({hiddenCount})
        </button>
      )}
    </div>
  );
};

const ThreadCluster = ({ rootPost, engine, userState }) => {
  const [showReplies, setShowReplies] = useState(false);
  // 1. Ak operátor zvolí "Moje Vlákna" (PARTICIPATED), okamžite rozbaľujeme,
  // aby videl svoje odpovede vnútri cudzích tém.
  useEffect(() => {
    if (engine?.filters?.type === "PARTICIPATED") {
      setShowReplies(true);
    }
  }, [engine?.filters?.type]);

  // 2. Ak Inteligentný Zameriavač (Radar) nariadi rozbalenie konkrétnej karty po odpovedi
  useEffect(() => {
    const handleForceExpand = (e) => {
      if (e.detail && e.detail.rootId === rootPost.id) {
        setShowReplies(true);
      }
    };
    window.addEventListener("nexus_force_expand_cluster", handleForceExpand);
    return () =>
      window.removeEventListener(
        "nexus_force_expand_cluster",
        handleForceExpand,
      );
  }, [rootPost.id]);
  // 3. Rekurzívny výpočet všetkých odpovedí patriacich pod toto vlákno
  const threadRepliesCount = useMemo(() => {
    if (!engine?.allRawPosts) return 0;
    let count = 0;
    engine.allRawPosts.forEach((p) => {
      let curr = p;
      let depth = 0;
      // Prejdeme predkov, či nepatríme pod tento rootPost
      while (curr && curr.parentId && depth < 20) {
        if (curr.parentId === rootPost.id) {
          count++;
          break;
        }
        curr = engine.allRawPosts.find((x) => x.id === curr.parentId);
        depth++;
      }
    });
    return count;
  }, [engine?.allRawPosts, rootPost.id]);

  return (
    <div className="thread-cluster relative group mb-8 rounded-xl transition-all duration-500 w-full min-w-0">
      <BlogPostCard post={rootPost} engine={engine} userState={userState} />

      {/* ⚡ UI/UX: Brutalistické tlačidlo na rozbalenie s počítadlom */}
      {threadRepliesCount > 0 && (
        <div className="mt-3 ml-2 sm:ml-8 z-10 relative">
          <button
            onClick={() => {
              if (typeof SoundFX !== "undefined" && SoundFX.click)
                SoundFX.click();
              setShowReplies(!showReplies);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase transition-all border backdrop-blur-md shadow-lg ${
              showReplies
                ? "bg-[#E91E63]/10 border-[#E91E63]/30 text-[#E91E63] hover:bg-[#E91E63]/20 hover:shadow-[#E91E63]/20"
                : "bg-[#39FF14]/10 border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/20 hover:shadow-[#39FF14]/20"
            }`}
          >
            <MessageSquare size={14} />
            {showReplies
              ? "Zbaliť vlákno"
              : `Zobraziť Diskusiu (${threadRepliesCount})`}
          </button>
        </div>
      )}

      {/* 🛑 FIX: 10000px nestačilo pre 18+ dlhých odpovedí. Extrémne vlákna boli fyzicky odseknuté.
          Nasadzujeme 99999px a pridávame spodný vankúš (pb-8) pre voľné dýchanie tieňov. */}
      <div
        className={`transition-all duration-500 origin-top overflow-hidden w-full ${
          showReplies
            ? "max-h-[99999px] opacity-100 mt-2 pb-8"
            : "max-h-0 opacity-0"
        }`}
      >
        {showReplies && (
          <RecursiveThread
            parentId={rootPost.id}
            engine={engine}
            userState={userState}
            level={1}
          />
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 🏛️ HLAVNÝ KOMPONENT
// ============================================================================
export default function BlogPage({
  setActiveTab,
  userState,
  getTierColor,
  themeColor,
  onThemeChange
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("MAP"); // "MAP" alebo "THREAD"
  const [expandedThreads, setExpandedThreads] = useState({});

  const toggleThread = (id) => {
    if (typeof SoundFX !== "undefined" && SoundFX?.click) SoundFX.click();
    setExpandedThreads((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const [bridgePayload, setBridgePayload] = useState({
    text: "",
    node: "ID14",
    parentId: null,
    replyTargetId: null,
  });

  // 🛑 ÚPLNE ZMAZANÝ TENTO BLOK:
  /*
  // 🚀 FORCED SCROLL-TO-TOP (Reset osi Y pri načítaní stránky)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  */

  // ⚡ LAPAČ SIGNÁLOV Z VÝŤAHU (Prepínanie Map / Thread)
  useEffect(() => {
    const handleSwitchTab = (e) => {
      // Keď Výťah zakričí "MAP" alebo "THREAD", Blog sa prepne!
      if (e.detail === "MAP" || e.detail === "THREAD") {
        setActiveView(e.detail);
      }
    };
    window.addEventListener("nexus_switch_local_tab", handleSwitchTab);
    return () =>
      window.removeEventListener("nexus_switch_local_tab", handleSwitchTab);
  }, []);

  // ⚡ STAVY PRE PROFIL (Deklarované len raz!)
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isProfileMaximized, setIsProfileMaximized] = useState(false);

  useEffect(() => {
    const handleOpenProfile = (e) => {
      setSelectedProfile(e.detail);
    };
    window.addEventListener("nexus_open_profile", handleOpenProfile);
    return () =>
      window.removeEventListener("nexus_open_profile", handleOpenProfile);
  }, []);

  const engine = useBlogEngine(userState);
  

  const safeGetTierColor = typeof getTierColor === "function" ? getTierColor : () => "#E91E63";
  const activeColor = safeGetTierColor(userState?.tier || "FREE");

  // 📡 SYSTÉMOVÝ SIGNÁL PRI ŠTARTE
  // useEffect(() => {
  //   console.log(
  //     `%c [LOADED]: ${CORE_VERSION} `,
  //     "background: #000; color: #E91E63; font-weight: bold; padding: 2px;",
  //   );
  // }, []);

  // ⚡ EXODUS FIX: Zmazaný asynchrónny Firebase import, Ping beží cez NexusDB
  useEffect(() => {
    if (userState?.email && !userState.isGuest) {
      NexusDB.pingActiveStatus(userState.email);
    }
  }, [userState?.email, userState?.isGuest]);

  // ⚡ THE BRIDGE PROTOCOL: Čítanie požiadaviek z LocalStorage (Napr. z Uzlov)
  useEffect(() => {
    const processBridgeSignal = () => {
      try {
        const signalRaw = localStorage.getItem("nexus_blog_bridge_signal");
        if (signalRaw) {
          // 0. OŽIVENIE PREMENNEJ SIGNAL (Toto ti spôsobovalo pád aplikácie!)
          const signal = JSON.parse(signalRaw);

          // 1. Zameriavač štítku (Žiadne polia, čistá a bezpečná extrakcia prvých 4 znakov, napr. "ID01")
          const defaultCategory = signal.category
            ? String(signal.category).toUpperCase().substring(0, 4)
            : signal.node
              ? String(signal.node).toUpperCase().substring(0, 4)
              : "ID14";

          // 🔴 SONDA PRE ARCHITEKTA
          console.log(
            "%c 🛠️ [BRIDGE PAYLOAD PRIJATÝ]:",
            "background: #FF003C; color: #FFF; font-weight: bold;",
            signal,
          );

          // 2. ANTI-CRASH ŠTÍT: Extrakcia čistého textu

          let safeText = "";
          if (signal.text) {
            if (typeof signal.text === "string") {
              safeText = signal.text;
            } else {
              safeText = String(
                signal.text.toString
                  ? signal.text.toString()
                  : JSON.stringify(signal.text),
              );
              if (safeText === "[object Object]")
                safeText = JSON.stringify(signal.text);
            }
          }

          // 3. ČISTÝ ZÁPIS PAYLOADU
          setBridgePayload({
            text: safeText,
            title: signal.title ? String(signal.title) : "",
            nodeId: signal.nodeId || signal.node || "UNKNOWN_NODE",
            name: signal.name || "Neznámy Uzol",
            node: defaultCategory, // Už je bezpečne naformátované a orezané
            parentId: signal.parentId || null,
            replyTargetId: signal.replyTargetId || null,
            isEdit: signal.isEdit || false,
            editPostId: signal.editPostId || null,
            editTitle: signal.editTitle ? String(signal.editTitle) : "",
          });

          setActiveView("THREAD");
          localStorage.removeItem("nexus_blog_bridge_signal");

          // 🛑 ÚPLNE ZMAZANÝ BLOK: Vypúšťam 3D Zoom Engine a window.dispatchEvent(NEXUS_RADAR_LOCK)
        }
      } catch (err) {
        console.error("🔥 [BRIDGE ERROR]:", err);
      }
    };

    // Počúvanie na Storage Event (Ak signál príde z iného Tabu prehliadača)
    window.addEventListener("storage", processBridgeSignal);

    // Počúvanie na tvoj lokálny Footer Event (Ak signál príde v tom ISTOM Tabe!)
    window.addEventListener("nexus_bridge_event", processBridgeSignal);

    // Okamžitá kontrola pri naloadovaní Blogu
    processBridgeSignal();

    return () => {
      window.removeEventListener("storage", processBridgeSignal);
      window.removeEventListener("nexus_bridge_event", processBridgeSignal);
    };
  }, [activeColor]); // 🛑 ODSTRÁNENÝ execute3DZoom Z DEPENDENCY ARRAY
  // 🛑 ÚPLNE ZMAZANÝ: const hasScrolledFromUrl = useRef(false);
  // 🛑 ÚPLNE ZMAZANÝ CELÝ: useEffect(() => { ... deep linking logika ... });
  // Už ťa nič nebude nasilu hádzať po stránke pri štarte.

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Defaultne 10 príspevkov na ušetrenie RAM

  const postsToPaginate = engine?.posts || [];
  const totalItems = postsToPaginate.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Kedykoľvek zmeníš kategóriu alebo filter v Toolbare, mriežka sa okamžite vráti na prvú stranu.
  // Týmto zabránime "prázdnej obrazovke", ak si bol na strane 3, ale tvoje témy zaplnia len 1 stranu.
  useEffect(() => {
    setCurrentPage(1);
    console.log(
      "%c 🔄 [PAGINATION]: Filter alebo Kategória zmenená. Reset Mriežky na Stranu 1.",
      "color: #00FFFF; font-weight: bold;",
    );

    // ⚠️ ARCHITEKT: Tieto závislosti v hranatých zátvorkách definujú, na čo má Reset reagovať.
    // Skontroluj si, ako presne sa volajú tvoje premenné pre filter v BlogPage.
    // Ak sú v engine, nechaj to takto. Ak ich máš cez useState ako "filter" a "category", daj tam [filter, category].
  }, [engine?.filter, engine?.category, engine?.activeFilter]);
  // 1. ZÁKLADNÝ RESET A SPÚŠŤAČ ZAMERIAVAČA PO ODOSLANÍ
  useEffect(() => {
    const handlePostDeployed = (e) => {
      setCurrentPage(1);

      // 🛑 ANTI-FOCUS JUMP (KILL-SWITCH 1): Zničíme pamäť prehliadača hneď pri odoslaní.
      // Zabráni natívnemu správaniu vrátiť ťa násilne hore na tlačidlo "Odpovedať".
      if (
        document.activeElement &&
        typeof document.activeElement.blur === "function"
      ) {
        document.activeElement.blur();
      }
    };

    window.addEventListener("nexus_post_deployed_with_id", handlePostDeployed);
    window.addEventListener("nexus_post_deployed", handlePostDeployed);
    return () => {
      window.removeEventListener(
        "nexus_post_deployed_with_id",
        handlePostDeployed,
      );
      window.removeEventListener("nexus_post_deployed", handlePostDeployed);
    };
  }, []);

  // 2. RADAR JUMP: Nájdenie postu, rozbalenie materskej karty a zoskok
  useEffect(() => {
    const handleRadarJump = (e) => {
      const targetId = e?.detail?.targetId;
      const expandId = e?.detail?.expandId;
      if (!targetId && !expandId) return;

      const finalTargetId = targetId || expandId;

      // 🛑 KĽÚČOVÝ ZÁMOK A SIGNÁL: Povieme celému Reactu, nech okamžite zhodí limit 5 pre Deep Link!
      window.nexus_radar_in_progress = true;
      window.dispatchEvent(new Event("nexus_radar_in_progress_signal"));

      // KROK 1: Hlboké prehľadávanie predkov (Výťah na Ultimátny Root Uzol)
      let rootId = finalTargetId;
      let currentPost = engine?.allRawPosts?.find(
        (p) => p.id === finalTargetId,
      );
      let depth = 0;

      if (expandId) {
        rootId = expandId;
        currentPost = engine?.allRawPosts?.find((p) => p.id === expandId);
      }

      while (currentPost && currentPost.parentId && depth < 20) {
        rootId = currentPost.parentId;
        currentPost = engine?.allRawPosts?.find(
          (p) => p.id === currentPost.parentId,
        );
        depth++;
      }

      // KROK 2: Prepneme stranu a ROZBALÍME vlákno
      if (rootId && postsToPaginate.length) {
        const rootIndex = postsToPaginate.findIndex((p) => p.id === rootId);
        if (rootIndex !== -1) {
          setCurrentPage(Math.floor(rootIndex / itemsPerPage) + 1);
        }

        // 🛑 ABSOLÚTNY FIX: Radar potrebuje DOM v plnej hĺbke.
        // Ak ťa hľadá v Mape, nenájde ťa. Prepíname ťa násilne do Vlákien (THREAD)!
        window.dispatchEvent(
          new CustomEvent("nexus_switch_local_tab", { detail: "THREAD" }),
        );

        window.dispatchEvent(
          new CustomEvent("nexus_force_expand_cluster", { detail: { rootId } }),
        );
      }

      // KROK 3: Inteligentné zameranie a jediný plynulý zoskok
      setTimeout(() => {
        window.nexus_radar_in_progress = false;

        // Anti-Focus Kill-Switch
        if (
          document.activeElement &&
          typeof document.activeElement.blur === "function"
        ) {
          document.activeElement.blur();
        }

        let bestTarget = finalTargetId;

        if (rootId) {
          // Hľadáme naprieč celou hĺbkou stromu
          const allThreadPosts = engine?.allRawPosts?.filter((p) => {
            let curr = p;
            let depth = 0;
            while (curr && curr.parentId && depth < 50) {
              if (curr.parentId === rootId) return true;
              curr = engine.allRawPosts.find((x) => x.id === curr.parentId);
              depth++;
            }
            return false;
          });

          if (allThreadPosts && allThreadPosts.length > 0) {
            // 1. ZÁLOHA: Mock príspevok v RAM (Optimistic UI)
            const mockReply = allThreadPosts.find(
              (p) => p.id && String(p.id).includes("local-mock"),
            );

            if (mockReply && mockReply.id) {
              bestTarget = mockReply.id;
            } else if (userState?.email || userState?.displayName) {
              // 2. HLAVNÝ PLÁN: Tvoja absolútne najnovšia odpoveď v tomto strome (Nekompromisná zhoda)
              const uMail = String(userState?.email || "")
                .toLowerCase()
                .trim();
              const uName = String(userState?.displayName || "")
                .toLowerCase()
                .trim();

              const myReplies = allThreadPosts.filter((p) => {
                const pMail = String(p.authorId || "")
                  .toLowerCase()
                  .trim();
                const pName = String(p.authorName || "")
                  .toLowerCase()
                  .trim();
                return (uMail && pMail === uMail) || (uName && pName === uName);
              });

              if (myReplies.length > 0) {
                myReplies.sort((a, b) => {
                  const timeA = a.timestamp?.seconds
                    ? a.timestamp.seconds * 1000
                    : new Date(a.timestamp).getTime() || 0;
                  const timeB = b.timestamp?.seconds
                    ? b.timestamp.seconds * 1000
                    : new Date(b.timestamp).getTime() || 0;
                  return timeB - timeA;
                });
                const latestMyReply = myReplies;
                if (latestMyReply && latestMyReply.id)
                  bestTarget = latestMyReply.id;
              } else if (targetId && targetId !== expandId) {
                // Ak bol kliknutý konkrétny target (napr z inboxu)
                bestTarget = targetId;
              } else {
                // 🛑 ZABITÝ FALLBACK NA CUDZIEHO SYNA!
                // Ak nemáme exaktne tvoju odpoveď, držíme ťa pevne na materskej téme (rootId).
                bestTarget = rootId;
              }
            }
          }
        }

        // ⚡ SYNCHRONIZÁCIA: Až teraz odošleme presný cieľ nášmu holografickému 3D Radaru!
        window.dispatchEvent(
          new CustomEvent("nexus_radar_visual_lock", { detail: bestTarget }),
        );

        let el =
          document.getElementById(`post-${bestTarget}`) ||
          document.getElementById(`topic-${bestTarget}`);
        if (!el)
          el =
            document.getElementById(`post-${finalTargetId}`) ||
            document.getElementById(`topic-${finalTargetId}`);

        if (el) {
          // 🛑 FIX: Zmenené na block: "start", aby zafungoval CSS scroll-margin-top 140px a neuseklo hlavičku!
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.warn(
            `[RADAR]: Cieľ stále nie je v DOM. Záchranný skok na Toolbar.`,
          );
          const tb = document.getElementById("nexus-blog-toolbar");
          if (tb) tb.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 850);
    };

    const handleReset = () => setCurrentPage(1);
    window.addEventListener("nexus_radar_jump", handleRadarJump);
    window.addEventListener("nexus_reset_page", handleReset);
    return () => {
      window.removeEventListener("nexus_radar_jump", handleRadarJump);
      window.removeEventListener("nexus_reset_page", handleReset);
    };
  }, [postsToPaginate, itemsPerPage, engine?.allRawPosts]);

  const goToPage = (page) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleLimitChange = (e) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Pri zmene hustoty vrátime operátora na stranu 1
  };

  // Matrix nekompromisne rešpektuje Hustotu Gridu
  const currentData = postsToPaginate.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // 3. DEEP LINKING: Zdieľané URL odkazy a ich zameranie
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const threadId = urlParams.get("thread");
    const hashId = window.location.hash; // Načíta napr. #post-6c7ea...

    if (threadId && postsToPaginate && postsToPaginate.length > 0) {
      if (window.nexus_deeplink_processed === threadId) return;
      window.nexus_deeplink_processed = threadId;

      let finalTarget = threadId;

      // Ak máme v URL aj mriežku (#post-...), extrahujeme presné ID odpovede
      if (hashId && hashId.includes("post-")) {
        finalTarget = hashId.replace("#post-", "");
      }

      // 🛑 Musíme systém okamžite prepnúť z MAPY do THREAD (Vlákien).
      window.dispatchEvent(
        new CustomEvent("nexus_switch_local_tab", { detail: "THREAD" }),
      );

      // Dáme Celeronu 800ms na vykreslenie hlavnej mriežky v režime THREAD, potom strieľame.
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("nexus_radar_jump", {
            detail: { targetId: finalTarget, expandId: threadId },
          }),
        );
      }, 800);
    }
  }, [postsToPaginate, window.location.search, window.location.hash]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#E91E63] selection:text-white overflow-x-hidden pb-20 text-left">
      {/* 🛑 Ochrana pred Sticky Hlavičkou a Toolbarom. Štít zvýšený na 260px! */}
      <style>{`
        [id^="post-"], 
        [id^="topic-"], 
        #nexus-blog-feed-top, 
        #nexus-blog-topicmap {
          scroll-margin-top: 260px !important;
        }
      `}</style>
      {/* 🛰️ TICHÝ STRÁŽCA: Náš Centrálny Zameriavač (Beží na pozadí) */}
      <NexusRadarEngine defaultColor={activeColor || "#E91E63"} />
      <MetaTags
        title="NEXUS BLOG: IT Diskusné fórum, osobný rozvoj a produktivita"
        description="Pripojte sa do otvorenej komunikačnej siete Projektu Nexus. Verejné diskusné fórum pre programátorov, freelancerov a tvorcov hľadajúcich sebarozvoj, produktivitu a únik z Matrixu."
        image="https://projekt-nexus.sk/img-nexus/pages/BlogPage.jpg"
        color="#FF1493"
        url="https://projekt-nexus.sk/blog"
        ogTitle="NEXUS BLOG: Pripoj sa do Siete a defragmentuj svoju myseľ"
        ogDescription="Bežné sociálne siete ti pália RAM a kradnú pozornosť. Vstúp do nášho verejného fóra. Žiadny toxický šum, len IT komunita a čistá prežitá pravda."
        twitterTitle="NEXUS BLOG: Pripoj sa do Siete a defragmentuj svoju myseľ"
        twitterDescription="Bežné sociálne siete ti pália RAM a kradnú pozornosť. Vstúp do nášho fóra. Žiadny toxický šum, len čistá prežitá pravda."
      />
      {/* 🔴 GLOBÁLNA HLAVIČKA BLOGU (1:1 AGENCY STANDARDS) */}
      <BlogHeader
        userState={userState}
        getTierColor={safeGetTierColor}
        onTopicMapClick={() => setActiveView("MAP")}
        onThemeChange={onThemeChange}
      />

        <header className="max-w-[1500px] mx-auto px-3 md:px-6 pt-6 pb-2 space-y-4 text-center md:text-left border-b border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border bg-[#E91E63]/10 text-[#E91E63] border-[#E91E63]/40"
            >
              <span className="w-2 h-2 rounded-full bg-[#E91E63] animate-ping" />
              NEXUS BLOG // OPEN COMMUNICATION NETWORK
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              DEFRAGMENTÁCIA{" "}
              <span 
                className="text-[#E91E63]"
                style={{ filter: "drop-shadow(0 0 15px rgba(233,30,99,0.5))" }}
              >
                MYSLI
              </span>{" "}
              & IT KOMUNITA
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Verejná komunikačná sieť a diskusné fórum Projektu Nexus. Žiadny toxický šum sociálnych sietí – len IT komunita, sebarozvoj, produktivita a čistá prežitá pravda V20.
            </p>
          </div>
        </div>
      </header>

      <NexusRadarEngine defaultColor={activeColor || "#E91E63"} />
      {/* 🔴 HLAVNÉ ROZLOŽENIE MATRIXU (Grid Layout) */}
      <main className="max-w-[1500px] mx-auto p-3 md:p-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_350px] gap-4 md:gap-6">
        {/* LÁVÝ SEKTOR: Composer, Toolbar a Dátový Tok */}
        <div className="flex flex-col gap-4 relative z-10 min-w-0">
          <div
            id="nexus-blog-composer"
            className="w-full relative scroll-mt-24"
          >
            <BlogComposer
              bridgePayload={bridgePayload}
              engine={engine}
              userState={userState}
            />
          </div>

          <BlogToolbar
            engine={engine}
            activeView={activeView}
            setActiveView={setActiveView}
            userState={userState}
          />

          <div className="mt-2" id="nexus-blog-feed-top">
            {activeView === "MAP" ? (
              <BlogTopicMap
                engine={engine}
                setActiveView={setActiveView}
                userState={userState}
              />
            ) : (
              <div className="space-y-12 animate-in fade-in duration-700">
                {/* Dynamická hlavička reprezentatívneho uzla (iba pri špecifickom filtri) */}
                {engine.filters?.category &&
                  engine.filters.category !== "ALL" && (
                    <RepresentativeHeader
                      clusterId={engine.filters.category}
                      color="#E91E63"
                      userTier={userState?.tier}
                      isCategory={true}
                    />
                  )}

                {/* Stavy Dátového Toku (Loading / Prázdne / Dáta) */}
                {engine.loading ? (
                  <div className="p-32 flex flex-col items-center justify-center opacity-30">
                    <Activity size={40} className="animate-spin mb-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                      Sync_In_Progress...
                    </span>
                  </div>
                ) : engine.posts.length === 0 ? (
                  <div className="p-32 border border-dashed border-white/5 text-center bg-white/[0.01] rounded-[3rem]">
                    <p className="text-white/20 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] italic">
                      Žiadne signály v tomto sektore Matrixu.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col w-full min-w-0">
                    {/* 🟢 TOP LIŠTA: KATALÓG SIGNÁLOV A HUSTOTA GRIDU */}
                    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0a0a0a] border border-[#222] p-4 rounded-2xl shadow-lg w-full mb-6 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#E91E63]/10 rounded-xl text-[#E91E63]">
                          <Terminal size={16} />
                        </div>
                        <div>
                          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white leading-none">
                            Katalóg Signálov
                          </h2>
                          <div className="text-[9px] text-[#666] font-mono mt-1">
                            Zobrazené: {totalItems > 0 ? startIndex + 1 : 0}-
                            {Math.min(startIndex + itemsPerPage, totalItems)} z{" "}
                            {totalItems}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        <span className="text-[9px] font-black text-[#555] uppercase tracking-widest hidden sm:block">
                          Hustota Gridu:
                        </span>
                        <select
                          value={itemsPerPage}
                          onChange={handleLimitChange}
                          className="bg-[#111] text-white border border-[#333] text-[10px] font-black px-3 py-1.5 rounded-lg outline-none cursor-pointer hover:border-[#E91E63] transition-colors"
                        >
                          <option value={5}>5 Vlákien</option>
                          <option value={10}>10 Vlákien</option>
                          <option value={15}>15 Vlákien</option>
                          <option value={20}>20 Vlákien</option>
                          <option value={30}>30 Vlákien</option>
                          <option value={50}>50 Vlákien</option>
                        </select>
                      </div>
                    </div>

                    {/* 🟢 MRIEŽKA PRÍSPEVKOV (Aktuálne vyrezaná strana) */}
                    {currentData.map((rootPost) => (
                      <ThreadCluster
                        key={rootPost.id}
                        rootPost={rootPost}
                        engine={engine}
                        userState={userState}
                      />
                    ))}

                    {/* 🟢 SPODNÁ NAVIGÁCIA (PAGINÁCIA ŠÍPKY) */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center gap-4 mt-8 mb-12 bg-[#0a0a0a] border border-[#222] p-4 rounded-[2rem] w-full relative z-10">
                        <button
                          onClick={() => goToPage(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="p-3 bg-[#111] border border-[#333] rounded-xl text-white disabled:opacity-20 hover:border-[#E91E63] transition-colors"
                        >
                          <ChevronLeft size={16} />
                        </button>

                        <div className="flex gap-2 flex-wrap justify-center">
                          {Array.from({ length: totalPages }).map((_, i) => {
                            const p = i + 1;
                            // Skrátené zobrazenie pri veľkom počte stránok
                            if (
                              totalPages > 5 &&
                              p !== 1 &&
                              p !== totalPages &&
                              Math.abs(p - currentPage) > 1
                            ) {
                              if (Math.abs(p - currentPage) === 2) {
                                return (
                                  <span
                                    key={p}
                                    className="text-[#333] font-black px-1"
                                  >
                                    ...
                                  </span>
                                );
                              }
                              return null;
                            }
                            return (
                              <button
                                key={p}
                                onClick={() => goToPage(p)}
                                className={`w-10 h-10 text-[10px] font-black rounded-xl border transition-all ${
                                  currentPage === p
                                    ? "bg-[#E91E63] border-[#E91E63] text-white shadow-[0_0_15px_#E91E6340]"
                                    : "bg-[#111] border-[#333] text-[#555] hover:border-white/20 hover:text-white"
                                }`}
                              >
                                {p}
                              </button>
                            );
                          })}
                        </div>

                        <button
                          onClick={() => goToPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="p-3 bg-[#111] border border-[#333] rounded-xl text-white disabled:opacity-20 hover:border-[#E91E63] transition-colors"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* PRAVÝ SEKTOR: Community Panel (Fixovaný Desktop Sidebar) */}
        <div className="hidden lg:block relative z-10">
          <div className="sticky top-[80px]">
            <BlogCommunityPanel engine={engine} setActiveView={setActiveView} />
          </div>
        </div>
      </main>
      {/* 🔴 MOBILNÝ SIDEBAR (Vysúvacie menu) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-[85%] max-w-[350px] bg-[#050505] border-l border-[#222] h-full p-4 overflow-y-auto animate-in slide-in-from-right-full shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#222]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#E91E63]" />
                <span className="text-[10px] font-black uppercase text-[#E91E63] tracking-widest">
                  System Nav
                </span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-[#888] hover:text-white p-2 bg-[#111] border border-[#333] transition-colors"
              >
                <X size={14} />
              </button>
            </div>
            <BlogCommunityPanel
              engine={engine}
              setActiveView={(view) => {
                setActiveView(view);
                setSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
