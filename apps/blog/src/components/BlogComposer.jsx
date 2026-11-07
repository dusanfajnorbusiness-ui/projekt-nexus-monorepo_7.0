// 🛰️ EXODUS-READY: 14. 5. 2026 | MODUL: BLOG COMPOSER
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Eye,
  Zap,
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Image as ImageIcon,
  Link,
  List as ListIcon,
  ListOrdered,
  Quote,
  Palette,
  Type,
  Eraser,
  ShieldAlert,
  EyeOff,
  Table,
  Edit3,
  Maximize2,
  Minimize2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Save,
  User,
  CornerDownLeft,
  Calendar,
  Clock,
  X,
  AtSign,
  Film,
  Lock,
} from "lucide-react";

import { getTierColor } from "@shared/data/nexusConfig.js";
import { DIMENSION_DESCRIPTIONS } from "@main-web/data/DimensionDescriptions.js";
import { checkPermission } from "@shared/data/permissionsRegistry.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { parseNexusFormat } from "@shared/utils/nexusParser.js";
import { NexusDB } from "@shared/services/NexusDB_Core.js";

const CORE_VERSION = "BC-BlogComposer V9.5-FULL-ARCHITECT";

const EditorTooltip = ({
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
    <div className="relative group/tooltip inline-flex z-[20] hover:z-[99999]">
      {children}
      <div
        className={`absolute ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"} ${alignClass} opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none w-max z-[100000]`}
      >
        <div
          className="bg-[#050505] border text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.9)] rounded-md"
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

export const BlogComposer = ({ engine, userState, bridgePayload }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("uncategorized");
  const [isPreview, setIsPreview] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const [replyToId, setReplyToId] = useState(null);
  const [replyTarget, setReplyTarget] = useState(null);
  const [draftStatus, setDraftStatus] = useState("");

  const [isEditMode, setIsEditMode] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  // Stavy pre zachytenie mosta - vieme, že prichádzame z vonku
  const [isFromBridge, setIsFromBridge] = useState(false);
  const [bridgeTitle, setBridgeTitle] = useState("");

  const [showRadar, setShowRadar] = useState(false);
  const [radarQuery, setRadarQuery] = useState("");
  const [networkEntities, setNetworkEntities] = useState([]);
  const [cursorPos, setCursorPos] = useState(0);

  const textareaRef = useRef(null);
  useEffect(() => {
    if ((replyToId || isEditMode) && !isFromBridge) {
      const focusTimer = setTimeout(() => {
        if (textareaRef && textareaRef.current) {
          // Tichý focus do okna
          textareaRef.current.focus({ preventScroll: true });

          // 🛑 ZMAZANÁ MATEMATIKA A SMOOTH SCROLL!
          // Extrémne rýchly, 0ms skok priamo na vrch obrazovky
          window.scrollTo(0, 0);
        }
      }, 50); // Skrátili sme čas z 150ms na 50ms, bez animácie to CPU zvládne hneď

      return () => clearTimeout(focusTimer);
    }
  }, [replyToId, isEditMode, isFromBridge]);
  const isQuest =
    !userState ||
    userState.isGuest === true ||
    userState.tier === "QUEST" ||
    userState.email === "quest" ||
    userState.email === "NEXUS_GUEST" ||
    !userState.email;

  const activeTier = isQuest ? "QUEST" : userState?.tier || "FREE";

  const tierColor = getTierColor(activeTier);
  const canCreate = !isQuest && checkPermission(activeTier, "create_thread");
  const threadLimitStr = checkPermission(activeTier, "thread_limit") || "5000";

  let MAX_CHARS = 5000;
  if (String(threadLimitStr).includes("INF")) MAX_CHARS = Infinity;
  else if (String(threadLimitStr).includes("K"))
    MAX_CHARS =
      parseFloat(String(threadLimitStr).replace(/[^\d.]/g, "")) * 1000;
  else MAX_CHARS = parseInt(String(threadLimitStr).replace(/\D/g, "")) || 5000;

  const groupedCategories = useMemo(() => {
    const groups = { core: [], sys: [], topic: [] };
    Object.entries(DIMENSION_DESCRIPTIONS || {}).forEach(([id, data]) => {
      if (data && data.group && groups[data.group]) {
        groups[data.group].push({ id: id, originalId: id, ...data });
      }
    });
    return groups;
  }, []);

  useEffect(() => {
    const handleBridgeSignal = () => {
      const stored = localStorage.getItem("nexus_blog_bridge_signal");

      if (stored) {
        try {
          const signal = JSON.parse(stored);

          if (signal.isEdit) {
            setIsEditMode(true);
            setEditPostId(signal.editPostId);
            setTitle(signal.editTitle || "");
            setContent(signal.text || "");
            if (signal.node) setCategory(signal.node);
            if (signal.category) setCategory(signal.category);
          } else {
            // DÁTA PRE CITOVANIE / DISKUTOVANIE Z INÝCH UZLOV
            setIsFromBridge(true);
            if (signal.title) {
              setBridgeTitle(signal.title);
              setTitle(signal.title);
            }
            if (signal.parentId) {
              setReplyToId(signal.parentId);
              setReplyTarget(signal.replyTargetId || signal.parentId);
            }
            if (signal.node) setCategory(signal.node);
            if (signal.category) setCategory(signal.category);

            setContent((prev) => {
              const newText = prev
                ? prev + "\n" + (signal.text || "")
                : signal.text || "";
              localStorage.setItem("nexus_blog_draft_content", newText);
              return newText;
            });
          }

          localStorage.removeItem("nexus_blog_bridge_signal");

          // Čakáme 2500ms, kým zbehne Fallback Unlock a Paginácia
          setTimeout(() => {
            let scanAttempts = 0;

            const radarInterval = setInterval(() => {
              if (textareaRef && textareaRef.current) {
                // 🛑 FIX: Editor je úplne navrchu. Nulujeme zložité výpočty.
                // Skočíme na vrch obrazovky s jemným odsadením 80px pre Header.
                window.scrollTo({ top: 80, behavior: "smooth" });

                textareaRef.current.focus({ preventScroll: true });

                textareaRef.current.style.transition = "all 0.5s ease-out";
                textareaRef.current.style.boxShadow =
                  "0 0 40px rgba(57, 255, 20, 0.4)";
                textareaRef.current.style.borderColor = "#39FF14";

                setTimeout(() => {
                  if (textareaRef.current) {
                    textareaRef.current.style.boxShadow = "";
                    textareaRef.current.style.borderColor = "";
                  }
                }, 2000);

                clearInterval(radarInterval); // Vypíname Radar
              }

              scanAttempts++;
              if (scanAttempts > 15) clearInterval(radarInterval); // Ochrana proti pretečeniu slučky
            }, 300);
          }, 2500);

          return true;
        } catch (err) {
          console.error("Bridge Error:", err);
        }
      }
      return false;
    };

    const initComposer = () => {
      const wasBridgeProcessed = handleBridgeSignal();
      if (!wasBridgeProcessed) {
        const savedContent = localStorage.getItem("nexus_blog_draft_content");
        const savedTitle = localStorage.getItem("nexus_blog_draft_title");
        if (savedContent) setContent(savedContent);
        if (savedTitle) setTitle(savedTitle);
      }
    };

    initComposer();

    const handleFocus = () => {
      // 1. Tichý focus do textového poľa
      if (textareaRef && textareaRef.current) {
        textareaRef.current.focus({ preventScroll: true });
      }

      // 2. RADAR JE MŔTVY A EDITOR JE ÚPLNE HORE.
      // Bleskovo ťa teleportujeme na vrch stránky (0ms záťaž na CPU)
      window.scrollTo(0, 0);
    };

    window.addEventListener("nexus_bridge_event", handleBridgeSignal);
    window.addEventListener("nexus_focus_composer", handleFocus);

    return () => {
      window.removeEventListener("nexus_bridge_event", handleBridgeSignal);
      window.removeEventListener("nexus_focus_composer", handleFocus);
    };
  }, []);

  // ⚡ 1. SYNC Z JADRA DO COMPOSERA (Odstránená blokáda pre "ALL")
  useEffect(() => {
    // Zosynchronizujeme Composer len vtedy, ak píšeme novú tému (nie odpoveď/úpravu)
    // 🛑 OCHRANA ŠTÍTKU: Tvoj Celeron N5100 pri reflow laguje (až 260ms).
    // 50ms časovač vypršal skôr, než sa stihol zrušiť! Zvyšujeme na 500ms.
    const syncTimer = setTimeout(() => {
      // Zosynchronizujeme Composer len vtedy, ak píšeme novú tému (NIE cez Bridge)
      if (
        engine?.filters?.category &&
        !replyToId &&
        !isEditMode &&
        !isFromBridge
      ) {
        setCategory(engine.filters.category);
      }
    }, 500);

    // Vyčistenie časovača proti pretečeniu pamäte

    return () => clearTimeout(syncTimer);
  }, [engine?.filters?.category, replyToId, isEditMode, isFromBridge]);

  useEffect(() => {
    if (NexusDB && NexusDB.subscribeToUsers) {
      const unsubscribe = NexusDB.subscribeToUsers((usersData) => {
        if (!usersData) return;
        const entitiesArray = Object.values(usersData).map((user) => ({
          id: user.email || user.id,
          displayName: user.displayName || user.name || "Neznáma Entita",
        }));
        const uniqueEntities = Array.from(
          new Map(
            entitiesArray.map((item) => [item.displayName, item]),
          ).values(),
        );
        uniqueEntities.sort((a, b) =>
          a.displayName.localeCompare(b.displayName),
        );
        setNetworkEntities(uniqueEntities);
      });
      return () => {
        if (unsubscribe) unsubscribe();
      };
    } else {
      if (engine?.allRawPosts && engine.allRawPosts.length > 0) {
        const uniqueOperators = new Map();
        engine.allRawPosts.forEach((post) => {
          if (post.authorName && !uniqueOperators.has(post.authorName)) {
            uniqueOperators.set(post.authorName, {
              id: post.authorId || post.authorName,
              displayName: post.authorName,
            });
          }
        });
        setNetworkEntities(Array.from(uniqueOperators.values()));
      }
    }
  }, [engine?.allRawPosts]);

  const handleTextChange = (e) => {
    const val = e.target.value;
    const pos = e.target.selectionStart;
    setContent(val);
    setCursorPos(pos);

    localStorage.setItem("nexus_blog_draft_content", val);
    setDraftStatus("Ukladám...");
    setTimeout(() => setDraftStatus(""), 1000);

    const textBeforeCursor = val.substring(0, pos);
    const words = textBeforeCursor.split(/\s/);
    const lastWord = words[words.length - 1];

    if (lastWord.startsWith("@")) {
      setShowRadar(true);
      setRadarQuery(lastWord.substring(1).toLowerCase());
    } else {
      setShowRadar(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    localStorage.setItem("nexus_blog_draft_title", e.target.value);
  };

  // ⚡ 2. SYNC Z COMPOSERA DO JADRA (Obojsmerný most)
  const handleComposerCategoryChange = (selectedCat) => {
    if (SoundFX?.click) SoundFX.click();
    setCategory(selectedCat);

    // Odošleme zmenu do globálneho filtra, čím sa okamžite prefarbí Panel aj Toolbar!
    if (engine?.setFilters && !replyToId && !isEditMode && !isFromBridge) {
      engine.setFilters((prev) => ({
        ...prev,
        category: selectedCat,
      }));
    }
  };

  const insertMention = (displayName) => {
    if (SoundFX?.click) SoundFX.click();
    const textBeforeCursor = content.substring(0, cursorPos);
    const textAfterCursor = content.substring(cursorPos);
    const words = textBeforeCursor.split(/\s/);
    words.pop();

    const newBefore = words.length > 0 ? words.join(" ") + " " : "";
    const mentionTag = `@"${displayName}" `;

    const newText = newBefore + mentionTag + textAfterCursor;
    setContent(newText);
    localStorage.setItem("nexus_blog_draft_content", newText);
    setShowRadar(false);

    setTimeout(() => {
      textareaRef.current.focus({ preventScroll: true });
      const newPos = newBefore.length + mentionTag.length;
      textareaRef.current.setSelectionRange(newPos, newPos);
    }, 10);
  };

  const handleDeploy = async () => {
    if (isQuest || !canCreate) {
      if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
      alert(
        "🛑 PRÍSTUP ZAMIETNUTÝ: Pre publikovanie príspevku v Sieti sa musíte prihlásiť.",
      );
      return;
    }

    if (content.length > MAX_CHARS) {
      console.warn(`Limit znakov prekročený: ${MAX_CHARS.toLocaleString()}`);
      return;
    }
    // 1. OCHRANA KATEGÓRIE: Ani na LocalHoste ťa to nesmie pustiť ďalej bez výberu dimenzie
    if (category === "ALL" && !replyToId && !isEditMode && !isFromBridge) {
      return alert(
        "⚠️ Systémové varovanie: Pred odoslaním nového vlákna musíte zvoliť konkrétnu kategóriu, alebo ho ponechať ako 'Nezaradené'.",
      );
    }

    // 2. LOKÁLNY ŠTÍT: Len informačný log, ŽIADNY RETURN. Necháme dáta prejsť do Enginu.
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    let returnedPostId = null; // 🛡️ PRESUNUTÉ SEM: Extrahované z bloku 'if', aby na ňu dočiahol aj Radar na konci!

    if (engine) {
      let safeCategory = category;
      // ⚡ FIX: Ak náhodou systém prepustí ALL (napríklad pri odpovedi), bezpečne to padne do Nezaradených
      if (
        !category ||
        category === "uncategorized" ||
        category === "ID14" ||
        category === "ALL"
      ) {
        safeCategory = "uncategorizedSTK";
      }

      // 🛑 ZMAZANÝ RIADOK ODTIAĽTO: let returnedPostId = null;

      /* ⚡ FIX 2: Tvrde zbavenie editora focusu PRED nasadením */
      if (textareaRef.current) textareaRef.current.blur();

      if (isEditMode && editPostId) {
        if (engine.updatePost) {
          await engine.updatePost(editPostId, {
            title: title.trim(),
            content,
            category: safeCategory,
            cluster: safeCategory,
          });
          returnedPostId = editPostId;
        }
      } else if (engine.deployPost) {
        const newPost = await engine.deployPost({
          title: title.trim(),
          content,
          category: safeCategory,
          cluster: safeCategory,
          parentId: replyToId || null,
        });

        if (newPost && newPost.id) {
          returnedPostId = newPost.id;
        }
      }

      if (returnedPostId) {
        window.dispatchEvent(
          new CustomEvent("nexus_post_deployed_with_id", {
            detail: {
              postId: returnedPostId,
              isReply: !!replyToId || isEditMode, // 🧠 Engine teraz vie, či ide o odpoveď!
            },
          }),
        );
      } else {
        window.dispatchEvent(new Event("nexus_post_deployed"));
      }
    }

    // 🛡️ Tieto dáta musíme zachrániť PREDTÝM, než ich systém zmaže!
    const savedParentId = replyToId;
    const savedIsEdit = isEditMode;
    const savedIsBridge = isFromBridge;
    const savedTitle = title.trim(); // ⚡ PRIDANÉ: Uložíme si Názov pre náš Text-Radar!

    // ÚPLNÉ VYČISTENIE STAVOV
    setTitle("");
    setContent("");
    setCategory("uncategorized");
    setIsPreview(false);
    setReplyToId(null);
    setReplyTarget(null);
    setIsZenMode(false);
    setIsEditMode(false);
    setEditPostId(null);
    setIsFromBridge(false);
    setBridgeTitle("");
    localStorage.removeItem("nexus_blog_draft_content");
    localStorage.removeItem("nexus_blog_draft_title");
    localStorage.removeItem("nexus_blog_bridge_signal");

    // 🟢 SCENÁR 1: NOVÁ TÉMA (Alebo z Bridge) -> Absolútne uvoľnenie CPU
    if (!savedParentId && !savedIsEdit) {
      setTimeout(() => {
        if (typeof window !== "undefined" && typeof document !== "undefined") {
          // Výpočet spodku s OCHRANNOU ZÓNOU pre vysoký Footer (cca 400px offset)
          const bottomY =
            document.documentElement.scrollHeight - window.innerHeight - 400;

          // Ak je stránka krátka, nepôjdeme do mínusu, ale na reálny spodok
          window.scrollTo({
            top: bottomY > 0 ? bottomY : document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 1200);
    }

    // 🔵 SCENÁR 2: ODPOVEĎ DO VLÁKNA -> 1.8s Sync Delay a Inteligentný Lokátor Syna
    else if (savedParentId && !savedIsEdit && !savedIsBridge) {
      setTimeout(() => {
        let finalTarget = returnedPostId || savedParentId;

        // 🧠 INTELIGENTNÝ LOKÁTOR SYNA (ANTI-RUBBER-BAND FIX)
        if (finalTarget === savedParentId && typeof document !== "undefined") {
          try {
            const allPosts = Array.from(
              document.querySelectorAll('[id^="post-"]'),
            );
            const replies = allPosts.filter(
              (el) => el.id !== `post-${savedParentId}`,
            );

            if (replies.length > 0) {
              // 🛑 FIX: 'replies' je pole! Musíme zobrať prvý záznam (index 0).
              const targetEl = replies;
              if (targetEl && targetEl.id) {
                finalTarget = targetEl.id.replace("post-", "");
              }
            }
          } catch (err) {
            console.warn(
              "NEXUS_LOG: Lokátor syna zlyhal, použijem rodiča.",
              err,
            );
          }
        }

        window.dispatchEvent(
          new CustomEvent("nexus_radar_jump", {
            detail: { targetId: finalTarget, expandId: savedParentId },
          }),
        );
      }, 1800);
    }
  }; // <--- TOTO JE KONIEC FUNKCIE handleDeploy
  const handleInit = () => {
    if (content.length > 50)
      console.warn("NEXUS_LOG: Továrenský reset aplikovaný.");
    setTitle("");
    setContent("");
    setCategory("uncategorized");
    setIsPreview(false);
    setReplyToId(null);
    setReplyTarget(null);
    setIsEditMode(false);
    setEditPostId(null);
    setIsFromBridge(false);
    setBridgeTitle("");
    localStorage.removeItem("nexus_blog_draft_content");
    localStorage.removeItem("nexus_blog_draft_title");
    localStorage.removeItem("nexus_blog_bridge_signal");
  };

  const injectMarkdown = (toolOrPrefix, suffix = "", type = "wrap") => {
    if (SoundFX?.click) SoundFX.click();
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const before = content.substring(0, start);
    const after = content.substring(end);

    let newText = "";
    let newSelectionStart = start;
    let newSelectionEnd = end;

    if (typeof toolOrPrefix === "object" && toolOrPrefix !== null) {
      const tool = toolOrPrefix;
      if (tool.type === "prompt") {
        const val = window.prompt(tool.promptMsg);
        if (val) {
          const wrapPre = tool.pre.replace("$val", val);
          const wrapSuf = tool.suf.replace("$val", val);
          const midText = selectedText || tool.defText || "";
          newText = before + wrapPre + midText + wrapSuf + after;

          if (!selectedText && tool.defText) {
            newSelectionStart = before.length + wrapPre.length;
            newSelectionEnd = newSelectionStart + midText.length;
          } else {
            newSelectionStart = newSelectionEnd =
              before.length + wrapPre.length + midText.length + wrapSuf.length;
          }
        } else return;
      } else if (tool.type === "clear") {
        const clearedText = selectedText.replace(/[\*\~\_\[\]<>\\/]/g, "");
        newText = before + clearedText + after;
        newSelectionStart = start;
        newSelectionEnd = start + clearedText.length;
      } else if (tool.type === "date") {
        const dateStr = new Date().toLocaleDateString("sk-SK");
        newText = before + dateStr + after;
        newSelectionStart = newSelectionEnd = start + dateStr.length;
      } else if (tool.type === "time") {
        const timeStr = new Date().toLocaleTimeString("sk-SK");
        newText = before + timeStr + after;
        newSelectionStart = newSelectionEnd = start + timeStr.length;
      } else {
        const midText = selectedText || tool.defText || "";
        newText = before + tool.pre + midText + tool.suf + after;

        if (!selectedText && tool.defText) {
          newSelectionStart = before.length + tool.pre.length;
          newSelectionEnd = newSelectionStart + midText.length;
        } else {
          newSelectionStart = newSelectionEnd =
            before.length + tool.pre.length + midText.length + tool.suf.length;
        }
      }
    } else {
      const pre = toolOrPrefix;
      const suf = suffix;
      if (type === "clear") {
        const clearedText = selectedText.replace(/[\*\~\_\[\]<>\\/]/g, "");
        newText = before + clearedText + after;
        newSelectionStart = start;
        newSelectionEnd = start + clearedText.length;
      } else {
        const midText = selectedText || "text";
        newText = before + pre + midText + suf + after;

        if (!selectedText) {
          newSelectionStart = before.length + pre.length;
          newSelectionEnd = newSelectionStart + midText.length;
        } else {
          newSelectionStart = newSelectionEnd =
            before.length + pre.length + midText.length + suf.length;
        }
      }
    }

    setContent(newText);
    localStorage.setItem("nexus_blog_draft_content", newText);

    setTimeout(() => {
      textarea.focus({ preventScroll: true });
      textarea.setSelectionRange(newSelectionStart, newSelectionEnd);
    }, 10);
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleDeploy();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "b") {
      e.preventDefault();
      injectMarkdown("**", "**");
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "i") {
      e.preventDefault();
      injectMarkdown("*", "*");
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      injectMarkdown("[", "](url)");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const text =
      e.dataTransfer.getData("text/plain") ||
      e.dataTransfer.getData("text/uri-list");
    if (text) {
      injectMarkdown("", text, "wrap");
      if (SoundFX?.success) SoundFX.success();
    }
  };

  const renderIsland = (toolsList, alignPos = "bottom") => (
    <div className="flex items-center gap-1">
      {toolsList.map((t, idx) => (
        <EditorTooltip
          key={idx}
          text={t.label}
          color={tierColor}
          position={alignPos}
        >
          <button
            onClick={() => injectMarkdown(t)}
            className="p-1.5 bg-[#111] border rounded-md transition-all hover:bg-white/5"
            style={{ color: tierColor, borderColor: `${tierColor}30` }}
          >
            {t.icon}
          </button>
        </EditorTooltip>
      ))}
    </div>
  );

  const island1 = [
    {
      label: "Tučné (Ctrl+B)",
      icon: <Bold size={14} />,
      pre: "**",
      suf: "**",
      defText: "tučný text",
    },
    {
      label: "Kurzíva (Ctrl+I)",
      icon: <Italic size={14} />,
      pre: "*",
      suf: "*",
      defText: "kurzíva",
    },
    {
      label: "Podčiarknuté",
      icon: <Underline size={14} />,
      pre: "[u]",
      suf: "[/u]",
      defText: "podčiarknuté",
    },
    {
      label: "Prečiarknuté",
      icon: <Strikethrough size={14} />,
      pre: "~~",
      suf: "~~",
      defText: "prečiarknuté",
    },
    {
      label: "Farba Textu",
      icon: <Palette size={14} />,
      type: "prompt",
      promptMsg: "Zadaj farbu (napr. red, #FF003C):",
      pre: "[color=$val]",
      suf: "[/color]",
      defText: "farebný text",
    },
    {
      label: "Veľkosť Textu",
      icon: <Type size={14} />,
      type: "prompt",
      promptMsg: "Zadaj veľkosť px (napr. 24):",
      pre: "[size=$val]",
      suf: "[/size]",
      defText: "veľký text",
    },
  ];
  const island2 = [
    {
      label: "Nadpis H1",
      icon: <Heading1 size={14} />,
      pre: "\n# ",
      suf: "",
      defText: "Nadpis 1",
    },
    {
      label: "Nadpis H2",
      icon: <Heading2 size={14} />,
      pre: "\n## ",
      suf: "",
      defText: "Nadpis 2",
    },
    {
      label: "Nadpis H3",
      icon: <Heading3 size={14} />,
      pre: "\n### ",
      suf: "",
      defText: "Nadpis 3",
    },
    {
      label: "Vľavo",
      icon: <AlignLeft size={14} />,
      pre: "[align=left]",
      suf: "[/align]",
      defText: "Zarovnané vľavo",
    },
    {
      label: "Na stred",
      icon: <AlignCenter size={14} />,
      pre: "[align=center]",
      suf: "[/align]",
      defText: "Zarovnané na stred",
    },
    {
      label: "Vpravo",
      icon: <AlignRight size={14} />,
      pre: "[align=right]",
      suf: "[/align]",
      defText: "Zarovnané vpravo",
    },
    {
      label: "Do bloku",
      icon: <AlignJustify size={14} />,
      pre: "[align=justify]",
      suf: "[/align]",
      defText: "Zarovnané do bloku",
    },
  ];
  const island3 = [
    {
      label: "Odrážky",
      icon: <ListIcon size={14} />,
      pre: "\n- ",
      suf: "",
      defText: "položka",
    },
    {
      label: "Číslovanie",
      icon: <ListOrdered size={14} />,
      pre: "\n1. ",
      suf: "",
      defText: "položka",
    },
    {
      label: "Tabuľka",
      icon: <Table size={14} />,
      pre: "\n| Stĺpec 1 | Stĺpec 2 |\n|---|---|\n| Dáta 1 | Dáta 2 |\n",
      suf: "",
    },
  ];
  const island4 = [
    {
      label: "Odkaz (Ctrl+K)",
      icon: <Link size={14} />,
      type: "prompt",
      promptMsg: "Zadaj URL odkaz:",
      pre: "[",
      suf: "]($val)",
      defText: "Názov odkazu",
    },
    {
      label: "Obrázok",
      icon: <ImageIcon size={14} />,
      type: "prompt",
      promptMsg: "Zadaj URL obrázka:",
      pre: "![",
      suf: "]($val)",
      defText: "Popis obrázka",
    },
    {
      label: "YouTube Video",
      icon: <Film size={14} />,
      type: "prompt",
      promptMsg: "Zadaj URL YouTube videa:",
      pre: "[embed]$val",
      suf: "[/embed]",
      defText: "",
    },
    {
      label: "Citácia",
      icon: <Quote size={14} />,
      pre: "\n> ",
      suf: "",
      defText: "Citovaný text",
    },
  ];
  const island5 = [
    {
      label: "Blok Kódu",
      icon: <Code size={14} />,
      pre: "```javascript\n",
      suf: "\n```",
      defText: "// tvoj kód sem",
    },
    {
      label: "Spoiler (Zbaľovacie)",
      icon: <ShieldAlert size={14} />,
      type: "prompt",
      promptMsg: "Zadaj nadpis spoilera:",
      pre: '\n[spoiler="$val"]\n',
      suf: "\n[/spoiler]\n",
      defText: "Tajný obsah",
    },
    {
      label: "Rozmazať text",
      icon: <EyeOff size={14} />,
      pre: "[hide]",
      suf: "[/hide]",
      defText: "Tajný text",
    },
  ];
  const island6 = [
    { label: "Dnešný Dátum", icon: <Calendar size={14} />, type: "date" },
    { label: "Aktuálny Čas", icon: <Clock size={14} />, type: "time" },
  ];

  const catEntry = Object.entries(DIMENSION_DESCRIPTIONS || {}).find(
    ([k]) => k.toLowerCase() === category.toLowerCase(),
  );
  const displayCategoryName = catEntry ? catEntry[1].name : category;

  return (
    <div
      id="nexus-blog-composer"
      className={`bg-[#0a0a0a] border border-[#222] relative group shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-[2rem] transition-all duration-500 ease-in-out z-20 flex flex-col ${isZenMode ? "fixed inset-4 z-[99999]" : ""}`}
      style={{
        borderLeft: `4px solid ${tierColor}`,
        background: `linear-gradient(270deg, ${tierColor}08 0%, #0a0a0a 60%)`,
      }}
    >
      <div className="absolute bottom-4 left-6 z-[60] opacity-20 pointer-events-none font-mono text-[7px] uppercase tracking-widest text-white">
        {CORE_VERSION}
      </div>

      {showRadar && networkEntities.length > 0 && (
        <div className="absolute bottom-[85px] left-6 z-[100000] w-64 bg-[#050505] border border-[#E91E63]/50 rounded-xl shadow-[0_10px_40px_rgba(233,30,99,0.3)] backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95">
          <div className="bg-[#E91E63]/15 text-[#E91E63] text-[9px] font-black uppercase px-3 py-2.5 border-b border-[#E91E63]/30 flex items-center gap-2">
            <AtSign size={12} /> Radar Operátorov
          </div>
          <div className="max-h-48 overflow-y-auto custom-scrollbar flex flex-col">
            {networkEntities
              .filter((e) => e.displayName.toLowerCase().includes(radarQuery))
              .map((entity) => (
                <button
                  key={entity.id}
                  onClick={() => insertMention(entity.displayName)}
                  className="w-full text-left px-4 py-2.5 hover:bg-[#E91E63]/20 text-white font-mono text-[11px] border-b border-white/5 last:border-0 flex items-center gap-3 transition-colors shrink-0"
                >
                  <User size={12} className="text-[#E91E63]" />{" "}
                  {entity.displayName}
                </button>
              ))}
            {networkEntities.filter((e) =>
              e.displayName.toLowerCase().includes(radarQuery),
            ).length === 0 && (
              <div className="px-4 py-4 text-[10px] text-white/30 italic text-center font-mono">
                Sonda nenašla zhodu...
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center bg-[#111] border-b border-[#222] p-4 gap-4 relative z-30 rounded-t-[2rem]">
        <div className="flex items-center gap-4 flex-1 px-2">
          <EditorTooltip
            text="Vizuálna identita Avatara"
            color={tierColor}
            position="bottom"
            align="left"
          >
            <div
              className="w-10 h-10 rounded-full overflow-hidden border-2 bg-black flex items-center justify-center shrink-0 shadow-lg cursor-help"
              style={{ borderColor: tierColor, color: tierColor }}
            >
              {userState?.avatar ? (
                <img
                  src={userState.avatar}
                  alt="Me"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={20} />
              )}
            </div>
          </EditorTooltip>

          {isEditMode ? (
            <div className="flex items-center gap-3 w-full bg-[#111] p-2.5 rounded-xl border border-yellow-500/50 shadow-inner">
              <Edit3 size={16} className="text-yellow-500 shrink-0" />
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="bg-transparent border-none text-white font-black uppercase tracking-widest outline-none text-sm md:text-base w-full"
              />
              <EditorTooltip
                text="Zrušiť úpravu"
                color="#ef4444"
                position="bottom"
                align="right"
              >
                <button
                  onClick={handleInit}
                  className="ml-auto text-red-500 hover:text-white p-1 transition-colors shrink-0"
                >
                  <X size={14} />
                </button>
              </EditorTooltip>
            </div>
          ) : isFromBridge || replyToId ? (
            <div className="flex items-center gap-3 w-full bg-[#111] p-2.5 rounded-xl border border-[#333] shadow-inner">
              <CornerDownLeft size={16} className="text-[#00f3ff] shrink-0" />
              <span className="text-[10px] font-black uppercase text-white tracking-widest truncate">
                {replyToId ? "Odpoveď do vlákna:" : "Spracovávam uzol:"}{" "}
                <span className="text-[#00f3ff] ml-1">
                  {bridgeTitle || replyTarget || category}
                </span>
              </span>
              <EditorTooltip
                text="Zrušiť most / odpoveď"
                color="#ef4444"
                position="bottom"
                align="right"
              >
                <button
                  onClick={handleInit}
                  className="ml-auto text-red-500 hover:text-white p-1 transition-colors shrink-0"
                >
                  <X size={14} />
                </button>
              </EditorTooltip>
            </div>
          ) : (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              disabled={!canCreate}
              placeholder="NÁZOV SÉMANTICKÉHO SIGNÁLU..."
              className="w-full bg-transparent border-none text-white font-black uppercase tracking-widest outline-none placeholder:text-[#444] text-sm md:text-base"
            />
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {isFromBridge || replyToId || isEditMode ? (
            <EditorTooltip
              text="Sémantická Dedičnosť: Kategória pevne zviazaná s pôvodným uzlom."
              color="#ef4444"
              position="bottom"
              align="center"
            >
              <div className="flex items-center gap-2 bg-[#1a1a1a] text-[9px] text-red-500/70 border border-red-500/30 px-4 py-2.5 uppercase font-black tracking-widest rounded-lg cursor-not-allowed shadow-inner transition-colors">
                <Lock size={12} /> {displayCategoryName}
              </div>
            </EditorTooltip>
          ) : (
            <EditorTooltip
              text="Zvoľte sémantický sektor pre nové vlákno."
              color={tierColor}
              position="bottom"
              align="center"
            >
              <select
                value={category}
                onChange={(e) => {
                  const newCat = e.target.value;
                  if (SoundFX?.click) SoundFX.click();
                  setCategory(newCat);

                  // ⚡ SYNC DO JADRA: Okamžite prefarbí Toolbar aj Panel
                  if (
                    engine &&
                    engine.setFilters &&
                    !replyToId &&
                    !isEditMode &&
                    !isFromBridge
                  ) {
                    engine.setFilters((prev) => ({
                      ...prev,
                      category: newCat,
                      focusedThread: null,
                    }));
                  }
                }}
                className="bg-[#1a1a1a] text-[9px] text-white border border-[#333] px-4 py-2.5 uppercase font-black tracking-widest outline-none cursor-pointer hover:border-white/20 transition-all rounded-lg focus:border-[#E91E63] max-w-[200px]"
              >
                {/* ⚡ FIX: Pridané "ALL" a "Nezaradené" namiesto starého disabled "Vyber kategóriu..." */}
                <option value="ALL">🌐 VŠETKY KATEGÓRIE</option>
                <option value="uncategorizedSTK">📦 NEZARADENÉ</option>

                {groupedCategories.core.length > 0 && (
                  <optgroup label="--- KOGNITÍVNE JADRÁ ---">
                    {groupedCategories.core.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </optgroup>
                )}
                {groupedCategories.sys.length > 0 && (
                  <optgroup label="--- SYSTÉMOVÉ UZLY ---">
                    {groupedCategories.sys.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </optgroup>
                )}
                {groupedCategories.topic.length > 0 && (
                  <optgroup label="--- SÉMANTICKÉ TÉMY ---">
                    {groupedCategories.topic.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </EditorTooltip>
          )}
          <EditorTooltip
            text="Továrenský reset editora"
            color="#ef4444"
            position="bottom"
            align="right"
          >
            <button
              onClick={handleInit}
              className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-black border border-red-500/30 text-[10px] font-black px-4 py-2 uppercase tracking-widest transition-all rounded-lg"
            >
              _INIT
            </button>
          </EditorTooltip>
        </div>
      </div>

      <div className="flex flex-wrap items-center bg-[#0a0a0a] border-b border-[#222] p-3 gap-y-2 gap-x-1 relative z-20 overflow-visible">
        {renderIsland(island1)}{" "}
        <div className="w-px h-5 bg-[#333] mx-1 shrink-0 hidden sm:block"></div>
        {renderIsland(island2)}{" "}
        <div className="w-px h-5 bg-[#333] mx-1 shrink-0 hidden md:block"></div>
        {renderIsland(island3)}{" "}
        <div className="w-px h-5 bg-[#333] mx-1 shrink-0 hidden lg:block"></div>
        {renderIsland(island4)}{" "}
        <div className="w-px h-5 bg-[#333] mx-1 shrink-0 hidden lg:block"></div>
        {renderIsland(island5, "bottom")}{" "}
        <div className="w-px h-5 bg-[#333] mx-1 shrink-0 hidden lg:block"></div>
        {renderIsland(island6, "bottom")}
        <div className="w-px h-5 bg-[#333] mx-1 ml-auto shrink-0"></div>
        <EditorTooltip
          text="Zmazať všetky MD znaky z označeného textu"
          color={tierColor}
          align="right"
          position="bottom"
        >
          <button
            onClick={() => injectMarkdown("", "", "clear")}
            className="p-1.5 bg-[#111] border border-[#333] rounded-md transition-all text-[#666] hover:text-white shrink-0"
          >
            <Eraser size={14} />
          </button>
        </EditorTooltip>
        <EditorTooltip
          text={isZenMode ? "Normálny Režim" : "Zväčšiť na celú výšku"}
          color={tierColor}
          align="right"
          position="bottom"
        >
          <button
            onClick={() => setIsZenMode(!isZenMode)}
            className="p-1.5 bg-[#111] border rounded-md transition-all text-white shadow-inner shrink-0"
            style={{
              backgroundColor: `${tierColor}20`,
              borderColor: tierColor,
            }}
          >
            {isZenMode ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </EditorTooltip>
      </div>

      <div
        className={`relative bg-black/40 flex-1 overflow-hidden transition-all duration-500 ease-in-out flex flex-col ${isZenMode ? "min-h-[70vh]" : "min-h-[250px]"}`}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div
          className="absolute left-0 top-0 w-1.5 h-full opacity-30 transition-all duration-500"
          style={{ backgroundColor: tierColor }}
        ></div>
        {isPreview ? (
          <div
            className="w-full h-full flex-1 p-6 text-sm text-[#ddd] font-mono leading-relaxed prose-nexus overflow-y-auto custom-scrollbar z-10 break-words"
            style={{ "--node-color": tierColor }}
            dangerouslySetInnerHTML={{
              __html: content
                ? parseNexusFormat(content)
                : '<span class="opacity-30 italic">Payload je prázdny...</span>',
            }}
          />
        ) : (
          <textarea
            ref={textareaRef}
            value={content}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            disabled={!canCreate}
            maxLength={MAX_CHARS === Infinity ? undefined : MAX_CHARS}
            placeholder={
              canCreate
                ? "Zadaj sémantický payload (@ pre označenie operátora)..."
                : "PRÍSTUP_ZAMIETNUTÝ: Na tvorbu potrebujete vyšší TIER."
            }
            className="w-full h-full flex-1 p-6 bg-transparent border-none text-[#ccc] font-mono text-sm outline-none resize-none placeholder:text-white/20 focus:ring-0 custom-scrollbar z-10"
            spellCheck="false"
          />
        )}
        <div className="absolute bottom-4 right-6 flex items-center gap-3 bg-black/80 px-4 py-2 rounded-xl border border-[#333] backdrop-blur-xl z-20 shadow-2xl">
          {draftStatus && (
            <span className="text-[9px] font-black uppercase text-[#39FF14] animate-pulse flex items-center gap-1.5 border-r border-[#333] pr-4">
              <Save size={12} /> {draftStatus}
            </span>
          )}
          <div
            className={`w-2 h-2 rounded-full ${content.length > 0 ? (content.length >= MAX_CHARS ? "bg-red-500 animate-pulse" : "bg-[#39FF14]") : "bg-[#444]"} shadow-[0_0_10px_currentColor]`}
          ></div>
          <span
            className="text-[10px] font-mono font-bold tracking-widest uppercase"
            style={{ color: content.length >= MAX_CHARS ? "#ef4444" : "#aaa" }}
          >
            Buffer: {content.length.toLocaleString()} /{" "}
            {MAX_CHARS === Infinity ? "∞" : MAX_CHARS.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center p-5 border-t border-[#222] bg-[#050505] relative z-20 shrink-0 gap-4 rounded-b-[2rem]">
        <EditorTooltip
          text={
            isPreview ? "Návrat k písaniu" : "Živý render farieb a formátovania"
          }
          color={tierColor}
          position="top"
          align="left"
        >
          <button
            onClick={() => setIsPreview(!isPreview)}
            className={`flex items-center gap-2 px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl border w-full md:w-auto justify-center ${isPreview ? "text-black shadow-inner" : "bg-[#111] text-[#888] border-[#333] hover:text-white hover:border-[#555]"}`}
            style={
              isPreview
                ? { backgroundColor: tierColor, borderColor: tierColor }
                : {}
            }
          >
            {isPreview ? <Edit3 size={14} /> : <Eye size={14} />}{" "}
            {isPreview ? "Späť na Úpravu" : "Živý Náhľad"}
          </button>
        </EditorTooltip>
        <EditorTooltip
          text="Zakódovať a odoslať payload do Siete"
          color={tierColor}
          position="top"
          align="right"
        >
          <button
            onClick={handleDeploy}
            disabled={
              !content.trim() ||
              (!title.trim() && !replyToId && !isEditMode && !isFromBridge) ||
              !canCreate ||
              content.length > MAX_CHARS
            }
            className="flex items-center justify-center gap-3 px-12 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-2xl skew-x-[-10deg] w-full md:w-auto rounded-md"
            style={{
              backgroundColor: tierColor,
              boxShadow: `0 0 25px ${tierColor}40`,
            }}
          >
            <Zap size={16} className="skew-x-[10deg]" />{" "}
            <span className="skew-x-[10deg]">
              {isEditMode ? "Uložiť Úpravy" : "Odpáliť Payload"}
            </span>
          </button>
        </EditorTooltip>
      </div>
    </div>
  );
};

export default BlogComposer;
