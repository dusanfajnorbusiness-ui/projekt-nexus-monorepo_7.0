import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Clock,
  User,
  Pin,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Trash2,
  ArrowRight,
  Activity,
  Edit3,
  Bell,
  Hash,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (NAPOJENÉ NA TVOJ MODULÁRNY SYSTÉM)
// ============================================================================
import { getTierColor } from "@shared/data/nexusConfig";
import { checkPermission } from "@shared/data/permissionsRegistry";
import { DIMENSION_DESCRIPTIONS } from "@shared/data/DimensionDescriptions";
import { SoundFX } from "@shared/utils/SoundEngine";
import BlogPostCard from "./BlogPostCard";
import { RecursiveThread } from "../pages/BlogPage";

const CATEGORY_COLORS = {
  system: "#FF003C",
  cyber: "#00FFFF",
  it: "#0070FF",
  philosophy: "#BF00FF",
  psychology: "#FF1493",
  psychiatry: "#FF8C00",
  spiritual: "#FFD700",
  religion: "#F5F5DC",
  relationships: "#FF007F",
  esotericism: "#9400D3",
  zen: "#39FF14",
  meditation: "#00FA9A",
  contemplation: "#87CEEB",
  sport: "#FF4500",
  health: "#32CD32",
  games: "#FFFF00",
  politics: "#8B0000",
  habits: "#1E90FF",
  other: "#A9A9A9",
  uncategorized: "#555555",
};

// ⚡ PROTOKOL VERZIOVANIA (CORE-VER-001)
const CORE_VERSION = "BM-BlogTopicMap V4.3";

// ⚡ INTELIGENTNÝ TOOLTIP
const MapTooltip = ({
  children,
  text,
  color = "#fff",
  position = "top",
  align = "center",
}) => {
  let alignClass = "left-1/2 -translate-x-1/2";
  if (align === "right") alignClass = "right-0";
  if (align === "left") alignClass = "left-0";

  return (
    <div className="relative group/maptool inline-flex z-[60]">
      {children}
      <div
        className={`absolute ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"} ${alignClass} hidden group-hover/maptool:block w-max pointer-events-none z-[99999]`}
      >
        <div
          className="bg-[#050505] border border-[#333] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.8)] rounded-md backdrop-blur-md"
          style={{ color }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ⚡ KRUHOVÝ TACHOMETER PRE KARTY MÁP
// ============================================================================
const TopicTachometer = ({ currentCount = 0, maxCount = 25, tierColor }) => {
  const size = 52;
  const cRadius = 22;
  const stroke = 4;
  const center = size / 2;
  const circumference = cRadius * 2 * Math.PI;
  const percent = Math.round((currentCount / maxCount) * 100);
  const visualValue = Math.min(percent, 100);
  const strokeDashoffset = circumference - (visualValue / 100) * circumference;

  let color = "#39FF14"; // Default Green
  if (percent >= 80) color = "#f97316";
  if (percent >= 100) color = "#ef4444";

  return (
    <MapTooltip
      text={`Kapacita: ${currentCount}/${maxCount} Vlákien`}
      color={color}
      position="top"
      align="right"
    >
      <div
        className="relative flex items-center justify-center bg-black/80 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/5 shrink-0 cursor-help group/tacho"
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
        <div className="absolute flex flex-col items-center justify-center leading-none mt-0.5 group-hover/tacho:scale-110 transition-transform">
          <span className="text-[10px] font-black mb-0.5" style={{ color }}>
            {percent}%
          </span>
          <span className="text-[6.5px] font-mono font-bold text-white/50 tracking-widest leading-none">
            {currentCount}
            <span className="text-white/20">/{maxCount}</span>
          </span>
        </div>
      </div>
    </MapTooltip>
  );
};

/**
 * 🗺️ HLAVNÝ KOMPONENT: TOPIC MAP
 */
export const BlogTopicMap = ({ engine, setActiveView, userState }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Tento objekt si bude pamätať, ktorá karta je rozbalená a ktorá zbalená
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (id) => {
    if (SoundFX?.click) SoundFX.click();
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 📡 SYSTÉMOVÝ SIGNÁL ZRODU
  useEffect(() => {
    console.log(
      `%c [LOADED]: ${CORE_VERSION} `,
      "background: #000; color: #39FF14; font-weight: bold;",
    );
  }, []);

  // 🛑 ABSOLÚTNY FIX: Tieto dáta musia byť exaktne zadefinované PRED ich použitím v useCallback a useMemo!
  const topics = engine?.posts || [];

  // 🧠 1. INTELIGENTNÁ DETEKCIA NÁHĽADU (Reaguje na filter "Moje Vlákna")
  const getRelevantPreviewReply = useCallback(
    (rootId) => {
      if (!engine?.allRawPosts) return null;

      const threadPosts = engine.allRawPosts.filter((p) => {
        let curr = p;
        let depth = 0;
        while (curr && curr.parentId && depth < 50) {
          if (curr.parentId === rootId) return true;
          curr = engine.allRawPosts.find((x) => x.id === curr.parentId);
          depth++;
        }
        return false;
      });

      if (threadPosts.length === 0) return null;

      // Zoradíme od najnovšieho
      threadPosts.sort((a, b) => {
        const timeA = a.timestamp?.seconds
          ? a.timestamp.seconds * 1000
          : new Date(a.timestamp).getTime() || 0;
        const timeB = b.timestamp?.seconds
          ? b.timestamp.seconds * 1000
          : new Date(b.timestamp).getTime() || 0;
        return timeB - timeA;
      });

      // 🛑 FIX: Ak máš zapnutý filter "MOJE", v náhľade mapy chceme vidieť TVOJU odpoveď!
      const filterType = engine?.filters?.type;
      if (
        filterType === "MY" ||
        filterType === "MINE" ||
        filterType === "PARTICIPATED"
      ) {
        const uMail = String(userState?.email || "")
          .toLowerCase()
          .trim();
        const uName = String(userState?.displayName || "")
          .toLowerCase()
          .trim();

        const myLatest = threadPosts.find((p) => {
          const pMail = String(p.authorId || "")
            .toLowerCase()
            .trim();
          const pName = String(p.authorName || "")
            .toLowerCase()
            .trim();
          return (uMail && pMail === uMail) || (uName && pName === uName);
        });

        if (myLatest) return myLatest; // Ak sa našla tvoja odpoveď, vráti ju (Aj keď je 5. v poradí)
      }

      // Pre všetky ostatné filtre vráti proste globálne najnovšiu odpoveď vo vlákne
      return threadPosts.shift();
    },
    [engine?.allRawPosts, engine?.filters?.type, userState],
  );

  // 🧠 2. ZORAĎOVANIE MAPY PODĽA INTELIGENTNÉHO NÁHĽADU
  const sortedTopics = useMemo(() => {
    return [...topics].sort((a, b) => {
      const aPinned = a.isPinned ? 1 : 0;
      const bPinned = b.isPinned ? 1 : 0;
      if (aPinned !== bPinned) return bPinned - aPinned;

      const latestA = getRelevantPreviewReply(a.id) || a;
      const latestB = getRelevantPreviewReply(b.id) || b;

      const getTs = (t) => {
        if (!t) return 0;
        if (t.seconds) return t.seconds;
        if (typeof t.toMillis === "function") return t.toMillis() / 1000;
        if (t instanceof Date) return t.getTime() / 1000;
        if (typeof t === "number") return t;
        return 0;
      };

      return getTs(latestB.timestamp) - getTs(latestA.timestamp);
    });
  }, [topics, getRelevantPreviewReply]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = sortedTopics.slice(startIndex, startIndex + itemsPerPage);

  const totalItems = sortedTopics.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const goToPage = (page) => {
    if (SoundFX?.click) SoundFX.click();
    if (page >= 1 && page <= totalPages) setCurrentPage(page);

    // 🛑 ÚPLNE ZMAZANÝ SCROLL!
    // Zmazali sme: window.scrollTo({ top: 0, behavior: "smooth" });
    // Položky v mape sa len okamžite vymenia bez trhnutia obrazovkou.
  };

  const handleLimitChange = (e) => {
    if (SoundFX?.click) SoundFX.click();
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const isTopicUnread = (topicId) => {
    if (!engine || !engine.readPosts) return false;
    const readArray = engine.readPosts;
    if (!readArray.includes(topicId)) return true;
    if (engine.replies) {
      const unreadReply = engine.replies.find(
        (r) => r.parentId === topicId && !readArray.includes(r.id),
      );
      if (unreadReply) return true;
    }
    return false;
  };

  return (
    <div
      id="nexus-blog-topicmap" // ⚡ PRIDANÁ KOTVA PRE SCROLL
      className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 w-full relative z-10"
    >
      {/* 🟢 TOP LIŠTA MAPY */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0a0a0a] border border-[#222] p-4 rounded-[1.5rem] mb-6 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#E91E63]/10 rounded-xl text-[#E91E63]">
            <Terminal size={16} />
          </div>
          <div>
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white leading-none">
              Katalóg Signálov
            </h2>
            <div className="text-[9px] text-[#666] font-mono mt-1">
              Celkom detekovaných uzlov: {totalItems}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <span className="text-[9px] font-black text-[#555] uppercase tracking-widest">
            Hustota Gridu:
          </span>
          <select
            value={itemsPerPage}
            onChange={handleLimitChange}
            className="bg-[#111] text-white border border-[#333] text-[10px] font-black px-3 py-1.5 rounded-lg outline-none cursor-pointer hover:border-[#E91E63] transition-colors"
          >
            <option value={10}>10 Tém</option>
            <option value={20}>20 Tém</option>
            <option value={30}>30 Tém</option>
            <option value={50}>50 Tém</option>
          </select>
        </div>
      </div>

      {/* 🟢 MRIEŽKA KARIET (GRID) */}
      {currentData.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-[#222] rounded-[3rem] bg-[#050505]">
          <Activity
            size={32}
            className="mx-auto mb-4 text-[#333] animate-pulse"
          />
          <p className="font-black uppercase tracking-[0.3em] text-[10px] text-[#555]">
            V tomto sektore neboli nájdené žiadne záznamy.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
          {currentData.map((topic, index) => {
            const tierColor = getTierColor(topic.authorTier || topic.tier);

            // ⚡ FIX: Normalizácia kategórií. Extrémna imunita voči Case-Sensitivity.
            const rawCategory = String(
              topic.category || topic.cluster || "uncategorized",
            ).trim();
            const searchTarget = rawCategory.toLowerCase();

            // Inteligentný vyhľadávač v objektoch (ignoruje case a koncovky)
            let catMeta = null;
            if (typeof DIMENSION_DESCRIPTIONS === "object") {
              const matchKey = Object.keys(DIMENSION_DESCRIPTIONS).find(
                (k) =>
                  k.toLowerCase() === searchTarget ||
                  k.toLowerCase() ===
                    searchTarget.replace("stk", "").replace("dim", ""),
              );
              if (matchKey) catMeta = DIMENSION_DESCRIPTIONS[matchKey];
            }

            const catName = catMeta ? catMeta.name : rawCategory;
            let fallbackColor = "#555555";
            const colorKey = Object.keys(CATEGORY_COLORS).find(
              (k) =>
                k.toLowerCase() === searchTarget ||
                k.toLowerCase() ===
                  searchTarget.replace("stk", "").replace("dim", ""),
            );
            if (colorKey) fallbackColor = CATEGORY_COLORS[colorKey];

            const catColor = catMeta ? catMeta.color : fallbackColor;

            // ⚡ SIGNÁLKA PREČÍTANIA A TOOLTIPY
            const hasUnread = isTopicUnread(topic.id);
            const signalColor = hasUnread ? "#ef4444" : "#39FF14";
            const signalText = hasUnread
              ? "NEPREČÍTANÉ DÁTA (NEW)"
              : "VŠETKO PREČÍTANÉ (OK)";

            // Výpočet vizuálneho ID pre mriežku
            const visualIdNumber = totalItems - (startIndex + index);
            const formattedVisualId = `#IDT${String(visualIdNumber).padStart(3, "0")}`;

            // 🧠 NOVÝ MOZOG KARTIČKY: Získa exaktne tvoju odpoveď (alebo poslednú aktivitu)
            const lastReply = getRelevantPreviewReply(topic.id);

            // ⚡ ČASOVÁ PEČIATKA A EDITY (Berie čas tvojej odpovede, ak existuje)
            const rawTs = lastReply
              ? lastReply.editedAt || lastReply.timestamp
              : topic.editedAt || topic.timestamp;
            let timestampObj = new Date();
            if (rawTs) {
              if (rawTs.toDate) timestampObj = rawTs.toDate();
              else if (rawTs.seconds)
                timestampObj = new Date(rawTs.seconds * 1000);
              else timestampObj = new Date(rawTs);
            }
            const timeString = timestampObj.toLocaleString("sk-SK");

            const isEdited = lastReply
              ? !!lastReply.editedAt
              : !!topic.editedAt;
            const editCount = lastReply
              ? lastReply.editCount || 1
              : topic.editCount || 1;

            // ⚡ PRÁVA PRE ADMIN TLAČIDLÁ
            const activeUserEmail = userState?.email;
            const isMe = activeUserEmail === topic.authorId;
            const canDeleteAny = checkPermission(userState?.tier, "delete_any");
            const canDeleteOwn = checkPermission(userState?.tier, "delete_own");
            const canPinNode = checkPermission(userState?.tier, "pin_post");
            const canManageThis = canDeleteAny || (isMe && canDeleteOwn);
            const hasAdminRights = canManageThis || canPinNode;

            return (
              <article
                key={topic.id}
                className="group relative flex flex-col justify-between min-h-[160px] rounded-[2rem] transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
                onClick={(e) => {
                  // Tvrdá blokácia, ak klikol na hocičo, čo je button alebo link
                  if (e.target.closest("button") || e.target.closest("a"))
                    return;

                  if (SoundFX?.click) SoundFX.click();

                  // 🛑 ABSOLÚTNY FIX: Vraciame späť izoláciu témy (Focused Thread).
                  // Vďaka našej 350ms pauze a ochrannému CSS Štítu 260px už nehrozí žiadny "Gumičkový" efekt.
                  // Ostatné (cudzie) témy sa potichu skryjú ešte predtým, než Radar zoskočí.
                  if (engine?.setFilters) {
                    engine.setFilters((prev) => ({
                      ...prev,
                      focusedThread: topic.id,
                    }));
                  }

                  if (setActiveView) setActiveView("THREAD");

                  const jumpTarget = lastReply ? lastReply.id : topic.id;

                  // 1. Násilné prepnutie celého systému z MAPY do VLÁKIEN (THREAD)
                  window.dispatchEvent(
                    new CustomEvent("nexus_switch_local_tab", {
                      detail: "THREAD",
                    }),
                  );

                  // 2. Bezpečný zoskok Radaru
                  setTimeout(() => {
                    window.dispatchEvent(
                      new CustomEvent("nexus_radar_jump", {
                        detail: { targetId: jumpTarget, expandId: topic.id },
                      }),
                    );
                  }, 350);
                }}
              >
                {/* ⚡ 1. POZADIE KARTY (Z-0) */}
                <div
                  className="absolute inset-0 bg-[#0a0a0a] border border-[#222] rounded-[2rem] overflow-hidden group-hover:border-[#333] transition-colors pointer-events-none z-0"
                  style={{
                    borderLeft: `4px solid ${tierColor}`,
                    background: `linear-gradient(270deg, ${tierColor}15 0%, #0a0a0a 40%)`,
                  }}
                ></div>

                {/* ⚡ 2. ŠTÍTKY ID A PIN (Z-20) */}
                <div className="absolute -top-3 left-6 z-20 flex items-center pointer-events-none gap-2">
                  <MapTooltip
                    text="Identifikačné číslo témy"
                    color={tierColor}
                    align="left"
                  >
                    <div
                      className="px-3 py-1 bg-[#050505] text-white border rounded-lg text-[9px] font-black font-mono shadow-xl tracking-widest"
                      style={{ borderColor: tierColor }}
                    >
                      {formattedVisualId}
                    </div>
                  </MapTooltip>
                </div>

                {topic.isPinned && (
                  <div className="absolute -top-3 right-6 z-20 pointer-events-none">
                    <MapTooltip
                      text="Ukotvené na vrchole Matrixu"
                      color="#FFD700"
                      align="right"
                    >
                      <div className="px-3 py-1 bg-[#FFD700] text-black border border-black rounded-lg text-[9px] font-black font-mono shadow-[0_0_20px_rgba(255,215,0,0.5)] tracking-widest flex items-center gap-1.5">
                        <Pin size={10} className="fill-black" /> PINNED
                      </div>
                    </MapTooltip>
                  </div>
                )}

                {/* ⚡ 3. OBSAH (Z-20) */}
                <div className="relative z-20 p-6 pt-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[8px] px-3 py-1 uppercase font-black tracking-widest rounded-full"
                          style={{
                            border: `1px solid ${catColor}30`,
                            borderLeft: `3px solid ${catColor}`,
                            color: catColor,
                          }}
                        >
                          {catName}
                        </span>

                        {/* 🟢/🔴 SIGNÁLKA PREČÍTANÉ/NEPREČÍTANÉ */}
                        <MapTooltip
                          text={signalText}
                          color={signalColor}
                          position="bottom"
                        >
                          <div className="flex items-center gap-1.5 bg-black/50 border border-white/5 px-2 py-0.5 rounded-full cursor-help">
                            <div
                              className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${hasUnread ? "bg-[#ef4444] animate-pulse" : "bg-[#39FF14]"}`}
                              style={{ color: signalColor }}
                            ></div>
                            <span
                              className="text-[7px] font-black uppercase tracking-widest"
                              style={{ color: signalColor }}
                            >
                              {hasUnread ? "NEW" : "OK"}
                            </span>
                          </div>
                        </MapTooltip>
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-white leading-tight uppercase italic group-hover:text-[#E91E63] transition-colors line-clamp-2">
                      {topic.title || "Bez názvu"}
                    </h3>

                    {/* 🕒 ČASOVÁ PEČIATKA A UPRAVENÉ */}
                    <div className="flex items-center gap-3 mt-3 text-[9px] font-mono text-[#666] tracking-widest uppercase">
                      <span className="flex items-center gap-1">
                        <Clock size={10} /> {timeString}
                      </span>
                      {isEdited && (
                        <MapTooltip
                          text={`Počet úprav: ${editCount}`}
                          color="#eab308"
                        >
                          <span className="text-yellow-500/80 italic font-bold border border-yellow-500/20 bg-yellow-500/5 px-1.5 py-0.5 rounded">
                            Upravené {editCount > 1 ? `${editCount}x` : ""}
                          </span>
                        </MapTooltip>
                      )}
                    </div>
                  </div>

                  {/* ⚡ 4. FOOTER S TLAČIDLAMI (Z-30) */}
                  <div className="flex flex-col mt-6 pt-4 border-t border-white/5 gap-4 relative z-30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden">
                          {topic.authorAvatar ? (
                            <img
                              src={topic.authorAvatar}
                              alt="A"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User size={12} className="text-white/20" />
                          )}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 truncate max-w-[100px]">
                          {topic.authorName || "Anonym"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* 🛠️ ADMIN TLAČIDLÁ so SONDAMI */}
                        {hasAdminRights && (
                          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {canPinNode && (
                              <MapTooltip
                                text={
                                  topic.isPinned
                                    ? "Odopnúť tému z vrchu"
                                    : "Pripnúť tému na vrch"
                                }
                                color="#FFD700"
                                position="top"
                              >
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // console.log(
                                    //   "🛠️ [SONDA - PIN TLAČIDLO]: Klik úspešný!",
                                    //   {
                                    //     id: topic.id,
                                    //     isPinned: topic.isPinned,
                                    //     engineAvailable: !!engine?.handleAction,
                                    //   },
                                    // );
                                    if (SoundFX?.click) SoundFX.click();
                                    engine?.handleAction(
                                      topic.id,
                                      "pin",
                                      !topic.isPinned,
                                    );
                                  }}
                                  className="relative z-50 p-2 bg-black hover:bg-[#FFD700]/10 rounded-lg border border-[#333] hover:border-[#FFD700]/50 text-[#888] hover:text-[#FFD700] transition-all cursor-pointer shadow-lg"
                                >
                                  <Pin
                                    size={14}
                                    className={
                                      topic.isPinned
                                        ? "fill-[#FFD700] text-[#FFD700]"
                                        : ""
                                    }
                                  />
                                </button>
                              </MapTooltip>
                            )}
                            {canManageThis && (
                              <MapTooltip
                                text="Terminovať tému (Nenávratne zmazať)"
                                color="#ef4444"
                                position="top"
                              >
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // console.log(
                                    //   "🛠️ [SONDA - TRASH TLAČIDLO]: Klik úspešný!",
                                    //   {
                                    //   id: topic.id,
                                    //   engineAvailable: !!engine?.handleAction,
                                    // },
                                    // );
                                    if (SoundFX?.click) SoundFX.click();
                                    if (
                                      window.confirm(
                                        "MATRIX LOG: Naozaj terminovať celú tému? Táto akcia zmaže aj všetky odpovede v nej.",
                                      )
                                    ) {
                                      engine?.handleAction(topic.id, "delete");
                                    }
                                  }}
                                  className="relative z-50 p-2 bg-black hover:bg-red-500/10 rounded-lg border border-[#333] hover:border-red-500/50 text-[#888] hover:text-red-500 transition-all cursor-pointer shadow-lg"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </MapTooltip>
                            )}
                          </div>
                        )}

                        <div className="flex items-center text-[10px] font-black text-white cursor-help relative z-40">
                          <TopicTachometer
                            currentCount={topic.totalReplies || 0}
                            maxCount={50}
                            tierColor={tierColor}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* 🟢 PAGINÁCIA */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12 bg-[#0a0a0a] border border-[#222] p-4 rounded-[2rem]">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-3 bg-[#111] border border-[#333] rounded-xl text-white disabled:opacity-20 hover:border-[#E91E63] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              if (
                totalPages > 5 &&
                p !== 1 &&
                p !== totalPages &&
                Math.abs(p - currentPage) > 1
              ) {
                if (Math.abs(p - currentPage) === 2)
                  return (
                    <span key={p} className="text-[#333]">
                      ...
                    </span>
                  );
                return null;
              }
              return (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`w-10 h-10 text-[10px] font-black rounded-xl border transition-all ${currentPage === p ? "bg-[#E91E63] border-[#E91E63] text-white shadow-[0_0_15px_#E91E6340]" : "bg-[#111] border-[#333] text-[#555] hover:border-white/20 hover:text-white"}`}
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

      {/* 📐 VIZUÁLNA IMPLEMENTÁCIA (VERSION STAMP) */}
      <div className="absolute -bottom-6 left-2 z-10 opacity-20 pointer-events-none font-mono text-[7px] uppercase tracking-widest text-white">
        {CORE_VERSION}
      </div>
    </div>
  );
};

export default BlogTopicMap;
