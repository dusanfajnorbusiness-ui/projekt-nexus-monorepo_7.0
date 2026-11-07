import React, { useState, useEffect } from "react";
import {
  Pin,
  MessageSquare,
  Quote,
  Eye,
  Share2,
  Edit3,
  Trash2,
  ShieldAlert,
  User,
  Clock,
  Mail,
  Target,
  Activity,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// --- ⚠️ START: MATRIX IMPORTY (ODKOMENTUJ VO SVOJOM LOKÁLNOM PROJEKTE) ⚠️ ---
import { getTierColor, dbCore, APP_ID } from "@shared/data/nexusConfig.js";
import { DIMENSION_DESCRIPTIONS } from "@main-web/data/DimensionDescriptions.js";
import { checkPermission } from "@shared/data/permissionsRegistry.js";
import {
  getPresenceStatus,
  getAvatarColor,
} from "@blog/utils/Blog-PresenceEngine";
import { parseNexusFormat } from "@shared/utils/nexusParser.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { doc, updateDoc } from "firebase/firestore";
// --- ⚠️ KONIEC: MATRIX IMPORTY ⚠️ ---

// --- 🛠️ START: CANVAS MOCKY PRE NÁHĽAD (ZMAŽ VO SVOJOM LOKÁLNOM PROJEKTE) 🛠️ ---
// const getTierColor = (tier) => tier === "ARCHITECT" ? "#00f3ff" : "#39FF14";
// const dbCore = {};
// const APP_ID = "NEXUS_CANVAS";
// const DIMENSION_DESCRIPTIONS = {};
// const checkPermission = () => true;
// const getPresenceStatus = () => ({ status: "ONLINE", color: "#39FF14", ping: true, label: "ONLINE" });
// const getAvatarColor = () => "#ffffff";
// const parseNexusFormat = (text) => text || "";
// const SoundFX = { click: () => {}, success: () => {} };
// --- 🛠️ KONIEC: CANVAS MOCKY 🛠️ ---

const CORE_VERSION = "BC-Blog-PostCard V5.50-ZENITH-BRUTALISMUS";

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

const PostTooltip = ({
  children,
  text,
  color = "#00f3ff",
  position = "top",
  align = "center",
}) => {
  let alignClass = "left-1/2 -translate-x-1/2";
  if (align === "right") alignClass = "right-0";
  if (align === "left") alignClass = "left-0";
  return (
    <div className="relative group/tool inline-flex z-[60]">
      {children}
      <div
        className={`absolute ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"} ${alignClass} hidden group-hover/tool:block w-max pointer-events-none z-[999999]`}
      >
        <div
          className="bg-[#050505] border border-[#333] text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-[0_10px_40px_rgba(0,0,0,1)] rounded-md backdrop-blur-md"
          style={{ borderColor: `${color}80`, color: color }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export const BlogPostCard = React.memo(
  ({ post, engine, userState, isReply = false, replyLevel = 0 }) => {
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);

    // ⚡ PRÉMIOVÁ FUNKCIA: Stav pre zbaľovanie extrémne dlhých textov
    const [isExpanded, setIsExpanded] = useState(false);

    if (!post) return null;

    // --- IDENTITA OPERÁTORA ---
    const activeUser = userState?.email
      ? userState
      : typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("nexus_active_identity") || "{}")
        : {};
    const activeUserEmail = activeUser?.email;

    const isMe = activeUserEmail === post.authorId;
    const isQuest =
      !activeUser ||
      activeUser.isGuest === true ||
      activeUser.tier === "QUEST" ||
      activeUser.email === "quest" ||
      activeUser.email === "NEXUS_GUEST" ||
      !activeUser.email;

    const activeTier = isQuest ? "QUEST" : activeUser?.tier || "FREE";
    const canCiteReply = !isQuest && checkPermission(activeTier, "cite_reply");
    const authorName =
      isMe && activeUser?.displayName
        ? activeUser.displayName
        : post.authorName || "Neznáma Entita";
    const authorAvatar =
      isMe && activeUser?.avatar ? activeUser.avatar : post.authorAvatar || "";
    const authorTierInfo =
      isMe && activeUser?.tier
        ? activeUser.tier
        : post.authorTier || post.tier || "FREE";

    let parsedTimestamp = new Date();
    // Systém teraz berie do úvahy Firebase (timestamp), aj Supabase (created_at)
    const rawTimestamp = post.timestamp || post.created_at || post.createdAt;

    if (rawTimestamp) {
      if (typeof rawTimestamp.toDate === "function") {
        parsedTimestamp = rawTimestamp.toDate(); // Firebase Timestamp Object
      } else if (rawTimestamp.seconds) {
        parsedTimestamp = new Date(rawTimestamp.seconds * 1000); // Firebase Raw Seconds
      } else {
        parsedTimestamp = new Date(rawTimestamp); // Supabase ISO String alebo čistý JS Date
      }
    } else {
      console.warn(
        "⚠️ [SONDA - TIMESTAMP]: Príspevok nemá žiadnu časovú pečiatku, použijem aktuálny čas. Post ID:",
        post.id,
      );
    }

    const timeString = parsedTimestamp.toLocaleString("sk-SK");

    // --- METADÁTA ÚPRAVY ---
    const finalEditCount = Number(post.edit_count || post.editCount || 0);
    const rawEdited = post.edited_at || post.editedAt;
    const isEdited = !!rawEdited;

    let editedTimeString = "";
    if (isEdited && rawEdited) {
      let parsedEdit = new Date();
      if (typeof rawEdited.toDate === "function")
        parsedEdit = rawEdited.toDate();
      else if (rawEdited.seconds)
        parsedEdit = new Date(rawEdited.seconds * 1000);
      else parsedEdit = new Date(rawEdited);

      editedTimeString = parsedEdit.toLocaleTimeString("sk-SK", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // console.log(
    //   `🛠️ [SONDA - ČAS] Vlákno ID: ${post.displayId || post.id} | Surový čas z DB:`,
    //   rawTimestamp,
    //   `| Výsledok v UI: ${timeString}`,
    // );

    const rawCategory = String(
      post.category || post.cluster || "uncategorizedSTK",
    ).trim();
    const searchTarget = rawCategory.toLowerCase();

    let catMeta = null;
    if (typeof DIMENSION_DESCRIPTIONS === "object") {
      const matchKey = Object.keys(DIMENSION_DESCRIPTIONS).find(
        (k) =>
          k.toLowerCase() === searchTarget ||
          k.toLowerCase() === searchTarget.replace("stk", ""),
      );
      if (matchKey) catMeta = DIMENSION_DESCRIPTIONS[matchKey];
    }

    const categoryName = catMeta ? catMeta.name : rawCategory;

    let fallbackColor = "#555555";
    const colorKey = Object.keys(CATEGORY_COLORS).find(
      (k) =>
        k.toLowerCase() === searchTarget ||
        k.toLowerCase() === searchTarget.replace("stk", ""),
    );
    if (colorKey) fallbackColor = CATEGORY_COLORS[colorKey];

    const catColor = catMeta ? catMeta.color : fallbackColor;

    const tierColor = getTierColor(authorTierInfo);
    const avatarColor = getAvatarColor(authorAvatar, tierColor);
    const presence = isMe
      ? { status: "ONLINE", color: "#39FF14", ping: true, label: "ONLINE" }
      : getPresenceStatus(post.lastActive);

    const isPinned = !!post.isPinned;
    const displayId =
      post.displayId || `#D.${post.id?.substring(0, 3).toUpperCase() || "XXX"}`;

    const parentPost =
      post.parentId && engine?.allRawPosts
        ? engine.allRawPosts.find((p) => p.id === post.parentId)
        : null;
    const isReplyToMe =
      parentPost &&
      parentPost.authorId === activeUserEmail &&
      post.authorId !== activeUserEmail;
    const isMentioned =
      post.reactions?.mention?.includes(activeUserEmail) &&
      post.authorId !== activeUserEmail;

    const canDeleteAny = checkPermission(activeUser?.tier, "delete_any");
    const canDeleteOwn = checkPermission(activeUser?.tier, "delete_own");
    const canManageThis = canDeleteAny || (isMe && canDeleteOwn);
    const canBan = checkPermission(activeUser?.tier, "ban_user");
    const canPin = checkPermission(activeUser?.tier, "pin_post");
    const hasAdminRights = canManageThis || (canBan && !isMe) || canPin;

    const r = post.reactions || {};
    const getRc = (t) => (Array.isArray(r[t]) ? r[t].length : 0);
    const isMyRc = (t) => Array.isArray(r[t]) && r[t].includes(activeUserEmail);
    const isUnread = engine?.readPosts
      ? !engine.readPosts.includes(post.id)
      : false;

    const isEvenLevel = replyLevel > 0 && replyLevel % 2 === 0;
    const snakeMargin = isReply
      ? isEvenLevel
        ? `ml-[clamp(2rem,6vw,10rem)] mt-6`
        : `ml-[clamp(1rem,2vw,4rem)] mt-6`
      : "mt-12";

    const handleAvatarClick = () => {
      // console.log(
      //   `🛠️ [SONDA - POSTCARD]: Klik na avatar -> Operátor: ${authorName}. Vystreľujem event...`,
      // );
      if (SoundFX?.click) SoundFX.click();
      if (isQuest || !canCiteReply) {
        if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
        return alert(
          "🛑 PRÍSTUP ZAMIETNUTÝ: Na odpovedanie a citovanie v Sieti sa musíte prihlásiť.",
        );
      }
      window.dispatchEvent(
        new CustomEvent("nexus_open_profile", {
          detail: {
            email: post.authorId,
            displayName: authorName,
            tier: authorTierInfo,
            avatar: authorAvatar,
            lastActive: post.lastActive,
          },
        }),
      );
    };

    const handleActionWithScroll = (callback) => {
      if (SoundFX?.click) SoundFX.click();

      // 1. Spustíme originálnu akciu (zápis do state)
      callback();

      // 2. RADAR JE MŔTVY.
      // Posielame len čistý event do Composera, ktorý nás bez trenia teleportuje na Y:0
      window.dispatchEvent(new CustomEvent("nexus_focus_composer"));
    };

    const handleMessage = () => {
      if (SoundFX?.click) SoundFX.click();
      if (isQuest) {
        if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
        return alert(
          "🛑 PRÍSTUP ZAMIETNUTÝ: Na odosielanie správ operátorom sa musíte prihlásiť.",
        );
      }
      if (isMe) return alert("MATRIX LOG: Nemôžete poslať správu sebe.");
      window.dispatchEvent(
        new CustomEvent("nexus_open_inbox", {
          detail: { recipientId: post.authorId, recipientName: authorName },
        }),
      );
    };

    const handleBanUser = async () => {
      const isBanned = authorTierInfo === "BANNED";
      setIsAdminMenuOpen(false);
      if (
        window.confirm(
          `MATRIX LOG: Naozaj vykonať ${isBanned ? "UNBAN" : "TRVALÝ BAN"} pre operátora ${authorName}?`,
        )
      ) {
        try {
          if (engine?.handleAction) {
            await engine.handleAction(post.id, "ban_user", {
              userId: post.authorId,
              isBanned,
            });
            if (SoundFX?.success) SoundFX.success();
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    const handlePinAction = async () => {
      setIsAdminMenuOpen(false);

      // 🛑 ZMAZANÉ: const currentScrollY = window.scrollY;

      if (engine?.handleAction) {
        await engine.handleAction(post.id, "pin", !isPinned);

        // 🛑 ZMAZANÝ SCROLL! Systém len ticho zmení stav v databáze. Nulová záťaž na CPU.
      }
    };

    return (
      <article
        id={`post-${post.id}`}
        className={`relative group w-full min-w-0 transition-all duration-500 rounded-[2.5rem] z-20 hover:z-[1] ${snakeMargin}`}
      >
        {/* POZADIE: Ľavá čiara a pravý gradient - absolútne oddelené s overflow-hidden kvôli rohom */}
        <div
          id="nexus-blog-postcard" // ⚡ PRIDANÁ KOTVA PRE SCROLL
          className="absolute inset-0 pointer-events-none z-0 rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          style={{
            borderLeft: `4px solid ${tierColor}`,
            background: `linear-gradient(to left, ${tierColor}1A 0%, rgba(10,10,10,0.95) 50%, rgba(5,5,5,0.98) 100%)`,
            borderTop: "1px solid rgba(255,255,255,0.03)",
            borderRight: "1px solid rgba(255,255,255,0.03)",
            borderBottom: "1px solid rgba(255,255,255,0.03)",
            backdropFilter: "blur(16px)",
          }}
        ></div>

        {/* ŠTÍTKY NA VRCHU: Musia byť pointer-events-none pre kontajner, aby neblokovali kliky na telo karty */}
        <div className="absolute -top-4 left-6 sm:left-10 z-[100] flex items-center gap-3 pointer-events-none">
          <PostTooltip
            text={isUnread ? "Nový signál" : "Spracovaný signál"}
            color={isUnread ? "#ef4444" : "#39FF14"}
            align="left"
          >
            {/* Samotný štítok je pointer-events-auto */}

            <div
              className="px-6 py-2.5 bg-[#050505] text-white border-[1.5px] rounded-xl text-[11px] sm:text-xs font-black font-mono shadow-[0_10px_30px_rgba(0,0,0,0.9)] tracking-widest flex items-center gap-3 pointer-events-auto transition-transform group-hover:-translate-y-1"
              style={{ borderColor: tierColor }}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full border border-black shadow-[0_0_10px_currentColor] ${isUnread ? "bg-red-500 animate-pulse" : "bg-[#39FF14]"}`}
              ></div>
              {displayId}
            </div>
          </PostTooltip>

          {isReplyToMe && !isMentioned && (
            <PostTooltip
              text="Tento operátor odpovedá/cituje váš signál"
              color="#39FF14"
              align="left"
            >
              <div className="px-4 py-2.5 bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/50 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.4)] pointer-events-auto animate-pulse">
                <MessageSquare size={14} /> Odpoveď Vám
              </div>
            </PostTooltip>
          )}

          {isMentioned && (
            <PostTooltip
              text="Operátor vás výslovne označil v texte"
              color="#BF00FF"
              align="left"
            >
              <div className="px-4 py-2.5 bg-[#BF00FF]/20 text-[#BF00FF] border border-[#BF00FF]/50 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(191,0,255,0.4)] pointer-events-auto animate-pulse">
                <Target size={14} /> @Mention
              </div>
            </PostTooltip>
          )}
        </div>

        {isPinned && (
          <div className="absolute -top-4 right-8 sm:right-12 z-[100] pointer-events-none">
            <PostTooltip
              text="Ukotvené na vrchole Matrixu"
              color="#FFD700"
              align="right"
            >
              <div className="px-4 py-2 bg-[#FFD700] text-black border-2 border-black rounded-lg text-[10px] font-black uppercase shadow-[0_10px_25px_rgba(255,215,0,0.6)] tracking-widest flex items-center gap-2 pointer-events-auto transition-transform group-hover:-translate-y-1">
                <Pin size={12} className="fill-black" /> Pinned
              </div>
            </PostTooltip>
          </div>
        )}

        {/* VNÚTORNÝ OBSAH: Obalený v z-10 s pointer-events-auto, aby boli zachytené všetky kliky */}
        <div className="relative z-10 flex flex-col w-full min-w-0 h-full pointer-events-auto">
          <div className="flex items-center gap-2 px-6 sm:px-8 pt-6 pb-2">
            <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">
              {timeString}
            </span>

            {isEdited && (
              <span
                className="text-[9px] italic opacity-80 uppercase tracking-widest font-black bg-white/5 px-2 py-0.5 rounded-md"
                style={{ color: tierColor }}
                title={`Naposledy upravené: ${new Date(rawEdited).toLocaleString()}`}
              >
                (Upravené: {editedTimeString}
                {finalEditCount > 0 ? ` | ${finalEditCount}x` : ""})
              </span>
            )}
          </div>

          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 sm:px-8 pb-6 border-b border-white/5 gap-4">
            <div className="flex gap-5 items-center">
              <PostTooltip
                text={`Status: ${presence.label}`}
                color={presence.color}
                position="bottom"
                align="left"
              >
                <div
                  onClick={handleAvatarClick}
                  className="w-14 h-14 border-[2px] rounded-full flex items-center justify-center relative shrink-0 cursor-pointer bg-black shadow-inner hover:scale-105 transition-transform"
                  style={{ borderColor: `${avatarColor}60` }}
                >
                  {authorAvatar ? (
                    <img
                      src={authorAvatar}
                      alt="A"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <User size={24} style={{ color: avatarColor }} />
                  )}
                  <div
                    className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-[3px] border-[#050a0e] ${presence.ping ? "animate-pulse" : ""}`}
                    style={{ backgroundColor: presence.color }}
                  ></div>
                </div>
              </PostTooltip>

              <div className="text-left">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span
                    onClick={handleAvatarClick}
                    className="text-sm md:text-base font-black uppercase tracking-[0.2em] cursor-pointer hover:underline"
                    style={{ color: avatarColor }}
                  >
                    {authorName}
                  </span>
                  <span
                    className="text-[9px] border px-2 py-0.5 rounded-sm uppercase tracking-[0.3em] font-black shadow-sm"
                    style={{
                      color: tierColor,
                      borderColor: `${tierColor}50`,
                      backgroundColor: `${tierColor}15`,
                    }}
                  >
                    {authorTierInfo}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3 shrink-0 sm:ml-auto w-full sm:w-auto relative z-[110]">
              <PostTooltip
                text={`Sektor: ${categoryName}`}
                color={catColor}
                position="bottom"
              >
                <div
                  className="h-9 flex items-center justify-center px-4 bg-black/40 border-[1px] rounded-xl text-[10px] font-black uppercase tracking-widest cursor-help transition-colors hover:bg-black/60 shadow-inner"
                  style={{ color: catColor, borderColor: `${catColor}50` }}
                >
                  {categoryName}
                </div>
              </PostTooltip>

              {isPinned && !isReply && (
                <div className="h-9 w-9 flex items-center justify-center bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/30 shadow-inner">
                  <Pin size={16} className="text-[#FFD700]" />
                </div>
              )}

              {hasAdminRights && (
                <div className="relative">
                  <PostTooltip
                    text="Panel Administrátora"
                    color="#ef4444"
                    position="bottom"
                    align="right"
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsAdminMenuOpen(!isAdminMenuOpen);
                      }}
                      className="h-9 w-9 flex items-center justify-center bg-black/50 border border-white/10 text-white/40 hover:text-white rounded-xl transition-colors hover:bg-white/10 shadow-inner relative z-10"
                    >
                      <Activity size={16} />
                    </button>
                  </PostTooltip>
                  {isAdminMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-[100]"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsAdminMenuOpen(false);
                        }}
                      ></div>
                      <div className="absolute right-0 top-full mt-3 w-64 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,1)] z-[150] overflow-hidden animate-in fade-in zoom-in-95">
                        <div className="px-5 py-3 bg-white/5 border-b border-white/5 text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">
                          Moderačný Protokol
                        </div>
                        {canPin && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePinAction();
                            }}
                            className="w-full text-left px-5 py-4 text-[10px] font-black uppercase text-white hover:bg-white/10 flex items-center gap-3 border-b border-white/5 transition-colors"
                          >
                            <Pin
                              size={14}
                              className={
                                isPinned ? "text-yellow-500" : "text-[#00f3ff]"
                              }
                            />{" "}
                            {isPinned ? "Odopnúť z vrchu" : "Pripnúť na vrch"}
                          </button>
                        )}
                        {canManageThis && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleActionWithScroll(() => {
                                setIsAdminMenuOpen(false);
                                localStorage.setItem(
                                  "nexus_blog_bridge_signal",
                                  JSON.stringify({
                                    text: post.content,
                                    node: post.category,
                                    isEdit: true,
                                    editPostId: post.id,
                                    editTitle: post.title,
                                  }),
                                );
                                window.dispatchEvent(
                                  new Event("nexus_bridge_event"),
                                );
                              });
                            }}
                            className="w-full text-left px-5 py-4 text-[10px] font-black uppercase text-white hover:bg-yellow-500/10 flex items-center gap-3 border-b border-white/5 transition-colors"
                          >
                            <Edit3 size={14} className="text-yellow-500" />{" "}
                            Upraviť Záznam
                          </button>
                        )}
                        {canManageThis && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsAdminMenuOpen(false);
                              if (window.confirm("TERMINOVAŤ?"))
                                engine?.handleAction(post.id, "delete");
                            }}
                            className="w-full text-left px-5 py-4 text-[10px] font-black uppercase text-white hover:bg-red-500/10 flex items-center gap-3 border-b border-white/5 transition-colors"
                          >
                            <Trash2 size={14} className="text-red-500" />{" "}
                            Vymazať Signál
                          </button>
                        )}
                        {canBan && !isMe && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBanUser();
                            }}
                            className="w-full text-left px-5 py-4 text-[10px] font-black uppercase text-white hover:bg-[#FF003C]/10 flex items-center gap-3 transition-colors"
                          >
                            <ShieldAlert
                              size={14}
                              className={
                                authorTierInfo === "BANNED"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }
                            />{" "}
                            {authorTierInfo === "BANNED"
                              ? "Zrušiť BAN"
                              : "Udeliť BAN"}
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </header>

          <div className="flex flex-col w-full min-w-0 text-left p-6 sm:px-8 sm:py-8">
            {post.title && (
              <h2
                className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter mb-8 break-words [overflow-wrap:anywhere] min-w-0"
                style={{
                  color: tierColor,
                  textShadow: `0 0 25px ${tierColor}40`,
                }}
              >
                {post.title}
              </h2>
            )}
            {/* ⚡ ZBAĽOVACÍ KONTAJNER PRE OBSAH */}
            <div className="relative w-full min-w-0 z-10">
              {/* 1. Obal textu s fyzickým výškovým limitom (Fix pre MD Code) */}
              <div
                className={`relative transition-all duration-500 overflow-hidden ${!isExpanded ? "max-h-[160px]" : "max-h-[35000px]"}`}
              >
                <div
                  className="font-mono text-sm sm:text-[15px] leading-relaxed text-[#e0e0e0] prose-nexus break-words [overflow-wrap:anywhere] relative z-10 pb-2 min-w-0"
                  style={{ "--node-color": tierColor }}
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof parseNexusFormat === "function"
                        ? parseNexusFormat(post.content)
                        : post.content,
                  }}
                />

                {/* ⚡ FADE-OUT EFEKT: Jemný prechod do stratena, ak je karta zbalená */}
                {!isExpanded && post?.content && post.content.length > 350 && (
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
                )}
              </div>

              {/* 2. Tlačidlo ZOBRAZIŤ VIAC/MENEJ */}
              {post?.content && post.content.length > 350 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Zabraňuje iným kliknutiam na kartu
                    setIsExpanded(!isExpanded);
                    if (typeof SoundFX !== "undefined" && SoundFX.hover)
                      SoundFX.hover();
                  }}
                  className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors relative z-30"
                  style={{ color: tierColor }}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp size={14} className="animate-bounce" />
                      Zobraziť menej
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} className="animate-bounce" />
                      Zobraziť celé vlákno
                    </>
                  )}
                </button>
              )}

              {/* 3. Vizuálna príloha (Obrázok zostáva nedotknutý pod textom) */}
              {post.imageUrl && (
                <PostTooltip
                  text="Vizuálna príloha k signálu"
                  position="bottom"
                >
                  <div className="mt-8 rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in relative z-10">
                    <img
                      src={post.imageUrl}
                      alt="P"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </PostTooltip>
              )}
            </div>
          </div>
          <footer className="flex flex-col p-6 sm:px-8 border-t border-white/5 bg-[#000000]/40 gap-5 rounded-b-[2.5rem] mt-auto relative z-20">
            <div className="flex flex-wrap justify-end gap-2.5 w-full">
              {[
                { id: "like", i: "👍", c: "#39FF14", r: "+0.1", d: "Súhlas" },
                { id: "brain", i: "🧠", c: "#BF00FF", r: "+0.2", d: "Analýza" },
                { id: "eye", i: "👁️", c: "#FFD700", r: "+0.1", d: "Videné" },
                { id: "haha", i: "😂", c: "#00FFFF", r: "+0.1", d: "Humor" },
                { id: "wow", i: "😮", c: "#FFAA00", r: "+0.2", d: "Úžas" },
                {
                  id: "dislike",
                  i: "👎",
                  c: "#FF003C",
                  r: "-1.0",
                  d: "Nesúhlas",
                },
              ].map((react) => {
                const active = isMyRc(react.id);
                return (
                  <PostTooltip
                    key={react.id}
                    text={`${react.d} | ${react.r} OC`}
                    color={react.c}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (SoundFX?.click) SoundFX.click();
                        engine?.handleAction(post.id, "react", {
                          type: react.id,
                          rewardAmount: parseFloat(react.r),
                          targetAuthorId: post.authorId,
                        });
                      }}
                      className={`px-4 py-2 text-[11px] border-[1.5px] rounded-xl flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 relative z-10 ${active ? "bg-white/5 shadow-inner" : "border-transparent bg-transparent hover:bg-white/5 hover:border-white/10"}`}
                      style={{
                        borderColor: active ? `${react.c}80` : undefined,
                      }}
                    >
                      <span className="text-sm">{react.i}</span>{" "}
                      <span
                        className="font-mono font-black"
                        style={{ color: active ? react.c : "#666" }}
                      >
                        {getRc(react.id)}
                      </span>
                    </button>
                  </PostTooltip>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-end gap-3 text-[10px] font-black uppercase tracking-widest pt-2">
              <PostTooltip
                text={isUnread ? "Prečítať" : "Prečítané"}
                color={isUnread ? "#39FF14" : "#555"}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    engine?.markAsRead?.(post.id);
                  }}
                  className={`px-5 py-3 border-[1.5px] rounded-xl flex items-center gap-2.5 transition-all shadow-md relative z-10 ${isUnread ? "bg-[#111] border-[#333] text-[#666] hover:text-[#39FF14] hover:border-[#39FF14]/50" : "bg-[#39FF14]/10 border-[#39FF14]/30 text-[#39FF14]"}`}
                >
                  <Eye size={16} /> {isUnread ? "Prečítať" : "Prečítané"}
                </button>
              </PostTooltip>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMessage();
                }}
                className={`px-5 py-3 bg-[#0a0a0a] border-[1.5px] transition-all flex items-center gap-2.5 rounded-xl shadow-md relative z-10 ${isMe ? "border-[#222] text-[#444] cursor-not-allowed" : "border-white/10 hover:bg-white/5 text-white"}`}
                style={
                  !isMe
                    ? { color: avatarColor, borderColor: `${avatarColor}40` }
                    : {}
                }
              >
                <Mail size={16} /> Správa
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const url = `${window.location.origin}${window.location.pathname}?thread=${post.id}#post-${post.id}`;
                  navigator.clipboard.writeText(url);
                  if (SoundFX?.success) SoundFX.success();
                  alert("ODKAZ SKOPÍROVANÝ.");
                }}
                className="px-5 py-3 bg-[#0a0a0a] border-[1.5px] border-[#333] text-[#888] hover:text-[#00f3ff] hover:border-[#00f3ff]/50 rounded-xl flex items-center gap-2.5 shadow-md transition-colors relative z-10"
              >
                <Share2 size={16} /> Zdieľať
              </button>

              <PostTooltip text="Citovať v Editore | +0.3 OC" color={tierColor}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionWithScroll(() => {
                      localStorage.setItem(
                        "nexus_blog_bridge_signal",
                        JSON.stringify({
                          text: `> ${post.content}\n\n`,
                          node: post.category,
                          parentId: post.id,
                          replyTargetId: displayId,
                        }),
                      );
                      window.dispatchEvent(new Event("nexus_bridge_event"));
                    });
                  }}
                  className="px-5 py-3 bg-[#0a0a0a] border-[1.5px] border-[#333] text-[#888] hover:text-white rounded-xl flex items-center gap-2.5 group/btn transition-colors relative z-10"
                >
                  <Quote size={16} /> Citovať{" "}
                  <Award
                    size={12}
                    className="text-[#39FF14] opacity-0 group-hover/btn:opacity-100 transition-opacity"
                  />
                </button>
              </PostTooltip>

              <PostTooltip text="Diskutovať | +0.5 OC" color={tierColor}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleActionWithScroll(() => {
                      localStorage.setItem(
                        "nexus_blog_bridge_signal",
                        JSON.stringify({
                          text: ``,
                          node: post.category,
                          parentId: post.id,
                          replyTargetId: displayId,
                        }),
                      );
                      window.dispatchEvent(new Event("nexus_bridge_event"));
                    });
                  }}
                  className="px-8 py-3 font-black text-black rounded-xl flex items-center gap-3 transition-all hover:scale-105 shadow-xl border border-transparent relative z-10"
                  style={{
                    backgroundColor: tierColor,
                    boxShadow: `0 0 25px ${tierColor}50`,
                  }}
                >
                  <MessageSquare size={16} /> Diskutovať
                </button>
              </PostTooltip>
            </div>
          </footer>
        </div>

        <div className="absolute bottom-3 left-6 z-[200] opacity-[0.15] pointer-events-none font-mono text-[7px] uppercase tracking-[0.4em] text-white">
          {CORE_VERSION}
        </div>
      </article>
    );
  },
);

export default BlogPostCard;
