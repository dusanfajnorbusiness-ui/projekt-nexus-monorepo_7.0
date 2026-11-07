import React, { useState, useEffect, useRef, useMemo } from "react";
import { MessageSquare, Quote, Scan, Activity } from "lucide-react";

import { SoundFX } from "@shared/utils/SoundEngine.js";
import { NexusDB } from "@shared/services/NexusDB_Core.js";
import { DIMENSIONS } from "@shared/data/nexusConfig.js";
import { supabase } from "@shared/services/NexusDB_Supabase.js"; // ⚡ Import pre priamu celkovú telemetriu a ochranu lajkov

const CORE_VERSION =
  "C-GlobalPredFooter V32.8-TELEMETRY (Downward Tooltips & Absolute Time)";

const hexToRgba = (hex, alpha) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex && hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// 🛰️ SENZORICKÁ NÁPOVEDA (TOOLTIP) S PODPOROU SMEROVANIA (UP / DOWN)
const NodeTooltip = ({
  children,
  text,
  color = "#00f3ff",
  position = "up",
}) => (
  <div className="relative group/tool inline-flex">
    {children}
    <div
      className={`absolute left-1/2 -translate-x-1/2 opacity-0 invisible group-hover/tool:opacity-100 group-hover/tool:visible transition-all duration-200 pointer-events-none w-max z-[100] ${
        position === "down" ? "top-full mt-3" : "bottom-full mb-3"
      }`}
    >
      <div
        className="bg-[#050505] border text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-2xl rounded-md"
        style={{
          borderColor: `${color}80`,
          color: color,
          boxShadow: `0 0 15px ${hexToRgba(color, 0.3)}`,
        }}
      >
        {text}
      </div>
    </div>
  </div>
);

export const GlobalPredFooterNode = ({ nodeId = "UNKNOWN_NODE" }) => {
  const [postData, setPostData] = useState(null);

  // 📊 SÉMANTICKÁ TELEMETRIA UZLA
  const [telemetry, setTelemetry] = useState({
    views: 0,
    completion: 0,
    time: 0,
  });
  const footerRef = useRef(null);
  const startTime = useRef(Date.now());
  const hasReachedEnd = useRef(false);

  const lastSelectionRef = useRef("");
  const actionLock = useRef(false);
  const dimPrefix = nodeId.split("-")[0];

  const currentDim = DIMENSIONS?.find((d) => d.id === dimPrefix);
  const activeColor = currentDim?.color || "#FFFFFF";
  const activeName = currentDim?.name || "NEZNÁMY_KLASTER";

  const { myUserId, isGuestEntity } = useMemo(() => {
    let identity = {};
    try {
      const match =
        typeof document !== "undefined"
          ? document.cookie.match(
              new RegExp("(^| )nexus_active_identity=([^;]+)"),
            )
          : null;
      if (match) identity = JSON.parse(decodeURIComponent(match[2]));
      else if (typeof localStorage !== "undefined")
        identity = JSON.parse(
          localStorage.getItem("nexus_active_identity") || "{}",
        );
    } catch (e) {}
    const email = identity?.email || "anonymous";
    return {
      myUserId: email,
      isGuestEntity:
        identity?.isGuest || email === "anonymous" || email === "quest",
    };
  }, []);

  const userState = useMemo(
    () => ({ email: myUserId, isGuest: isGuestEntity }),
    [myUserId, isGuestEntity],
  );

  // 📊 TELEMETRIA: Lifecycle Observer & Absolute Telemetry Loader
  useEffect(() => {
    if (typeof NexusDB.recordNodeView === "function") {
      NexusDB.recordNodeView(nodeId);
    }

    // Načítanie telemetrie priamo zo Supabase
    // Zaručuje celkový čas naakumulovaný v databáze (TIME už po refreshi nikdy neklesne)
    const fetchTelemetry = async () => {
      if (supabase) {
        try {
          const { data } = await supabase
            .from("node_telemetry")
            .select("*")
            .eq("node_id", nodeId)
            .maybeSingle();

          if (data) {
            const completionRate =
              data.views_count > 0
                ? Math.round((data.completed_count / data.views_count) * 100)
                : 0;

            setTelemetry({
              views: data.views_count || 0,
              completion: Math.min(100, completionRate),
              time: data.total_time_seconds || 0, // ⚡ EXODUS FIX: Celkové sekundy namiesto priemeru!
            });
          }
        } catch (err) {
          console.error("Chyba načítania telemetrie uzla:", err);
        }
      } else if (typeof NexusDB.getTelemetry === "function") {
        NexusDB.getTelemetry(nodeId).then((data) => {
          if (data) setTelemetry(data);
        });
      }
    };

    fetchTelemetry();

    // Sledovanie prechodu na spodok stránky (Index dočítania)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasReachedEnd.current) {
          hasReachedEnd.current = true;
          if (typeof NexusDB.recordNodeCompletion === "function") {
            NexusDB.recordNodeCompletion(nodeId);
          }
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      const timeSpentSeconds = Math.floor(
        (Date.now() - startTime.current) / 1000,
      );
      if (timeSpentSeconds > 3) {
        if (typeof NexusDB.addNodeReadTime === "function") {
          NexusDB.addNodeReadTime(nodeId, timeSpentSeconds);
        }
      }
      if (footerRef.current) observer.disconnect();
    };
  }, [nodeId]);

  useEffect(() => {
    const unsub = NexusDB.subscribeToNode(nodeId, (data) => {
      if (data) setPostData(data);
      else setPostData((prev) => (prev?.isOptimistic ? prev : null));
    });
    return () => unsub && unsub();
  }, [nodeId]);

  useEffect(() => {
    const handleSelection = () => {
      const text = window.getSelection().toString().trim();
      if (text) lastSelectionRef.current = text;
    };
    document.addEventListener("selectionchange", handleSelection);
    return () =>
      document.removeEventListener("selectionchange", handleSelection);
  }, []);

  const handleActionClick = async (actionType) => {
    if (actionLock.current) return;
    actionLock.current = true;

    try {
      if (SoundFX?.click) SoundFX.click();

      // 1. Skener chytí ID uzla odkiaľkoľvek môže (Props, URL, alebo natvrdo z Nadpisu)
      const urlParams = new URLSearchParams(window.location.search);
      const queryNode = urlParams.get("node");
      const pathNode = window.location.pathname
        .split("/")
        .filter(Boolean)
        .pop();

      // Skener ukradne H1/H2 nadpis zo živej stránky
      const h1Element =
        document.querySelector("h1") || document.querySelector("h2");
      const domTitle = h1Element ? h1Element.innerText : "";

      // Kyber-injekcia: Vytrhne "ID10-01" alebo aspoň čisté "ID10"
      const idMatch = domTitle.match(/ID\d{2}(?:-\d{1,3})?/i);
      const domNodeId = idMatch ? idMatch.toUpperCase() : null;

      // Kaskádové hľadanie pravdy
      const autoNodeId =
        nodeId ||
        postData?.id ||
        queryNode ||
        domNodeId ||
        pathNode ||
        "UNKNOWN_NODE";

      // Záchyt Kategórie (Vždy bezpečne vyreže prvé 4 znaky, napr. "ID10")
      const autoCategory =
        autoNodeId !== "UNKNOWN_NODE" ? autoNodeId.substring(0, 4) : "ID14";

      // 3. Záchyt reálneho Názvu a vyčistenie od duplicitného ID
      let autoName =
        activeName ||
        postData?.title ||
        domTitle ||
        document.title ||
        "Neznámy Uzol";
      autoName = autoName
        .replace(autoNodeId, "")
        .replace(/^[-:|\s]+/, "")
        .trim(); // Zmaže prefixy typu "ID10-01 -" z názvu

      // 4. Formátovanie dokonalého nadpisu pre Blog Editor
      const autoTitle = `[U_Z_O_L]: ${autoCategory} - ${autoNodeId} | ${autoName}`;

      let selectedText = "";
      if (actionType === "cite" || actionType === "CITE_BONUS") {
        selectedText =
          window.getSelection().toString().trim() ||
          (lastSelectionRef && lastSelectionRef.current);
        if (!selectedText) {
          actionLock.current = false;
          return alert("⚠️ Najprv označte text uzla, ktorý chcete citovať.");
        }
        selectedText = `> ${selectedText}\n\n`;
      } else {
        selectedText = `>>> Diskutujeme k statickému uzlu: #${autoNodeId}\n\n`;
      }

      const payload = {
        action: actionType,
        node: autoCategory,
        category: autoCategory,
        name: autoName,
        text: selectedText,
        title: autoTitle,
        timestamp: Date.now(),
        parentId: null, // 🛡️ MUSÍ BYŤ NULL: Zakladáme nové vlákno, nie odpoveď!
        replyTargetId: null, // 🛡️ Zabraňuje Foreign Key Erroru v Supabase.
        isEdit: false,
        nodeId: autoNodeId, // 🛡️ Finálna poistka pre Blog Composer!
      };

      localStorage.setItem("nexus_blog_bridge_signal", JSON.stringify(payload));
      localStorage.setItem(
        "nexus_blog_draft_title",
        autoTitle, // ⚡ FIX 1: Zmenené z postTitle na autoTitle (Koniec ReferenceErrorov)
      );

      // Zápis telemetrie.
      if (
        typeof NexusDB !== "undefined" &&
        NexusDB.executeNodeAction &&
        !isGuestEntity
      ) {
        const reward = actionType === "cite" ? 0.3 : 0.5;
        try {
          await NexusDB.executeNodeAction(
            autoNodeId !== "UNKNOWN_NODE" ? autoNodeId : nodeId, // Poistka pre ID
            "bridge_action",
            actionType,
            userState,
            reward,
            `The Bridge: ${actionType}`,
          );
        } catch (err) {}
      }

      // 🛑 DEŠTRUKCIA STARÝCH RADAROV A ZLOŽITÝCH PUSH-STATE:
      // Žiadne umelé scrollovanie ani posielanie eventov. Čistý tvrdý presun.
      // Po načítaní /blog preberie kontrolu náš nový NexusRadarEngine.
      if (typeof window !== "undefined") {
        window.location.href = "/blog";
      }
    } catch (err) {
      console.error("🔥 [CRITICAL BRIDGE ERROR]:", err);
    } finally {
      setTimeout(() => {
        actionLock.current = false;
      }, 1000);
    }
  }; // <-- TOTO JE DEFINITÍVNY A JEDINÝ KONIEC FUNKCIE handleActionClick

  const handleReactionClick = async (e, reactionObj) => {
    e.preventDefault();
    e.stopPropagation();
    if (actionLock.current) return;
    actionLock.current = true;

    if (SoundFX?.click) SoundFX.click();

    if (isGuestEntity) {
      actionLock.current = false;
      if (SoundFX?.error) SoundFX.error();
      return alert(
        "Pre zanechanie reakcie a zber OC kreditov musíte byť prihlásený operátor.",
      );
    }

    const type = reactionObj.id;
    const ocValue = reactionObj.ocValue;
    const currentReactions = postData?.reactions || {};

    const newReactions = {
      like: [...(currentReactions.like || [])],
      dislike: [...(currentReactions.dislike || [])],
      brain: [...(currentReactions.brain || [])],
      eye: [...(currentReactions.eye || [])],
      haha: [...(currentReactions.haha || [])],
      wow: [...(currentReactions.wow || [])],
    };

    let oldReaction = null;
    Object.keys(newReactions).forEach((t) => {
      if (newReactions[t].includes(myUserId)) oldReaction = t;
    });

    if (oldReaction)
      newReactions[oldReaction] = newReactions[oldReaction].filter(
        (id) => id !== myUserId,
      );
    if (oldReaction !== type) newReactions[type].push(myUserId);

    // 1. OPTIMISTIC UI
    setPostData((prev) => ({
      ...(prev || {}),
      reactions: newReactions,
      isOptimistic: true,
    }));

    if (SoundFX?.success && ocValue > 0 && oldReaction !== type) {
      SoundFX.success();
    }

    // 2. Pôvodná funkcia na udelenie OC (ignorujeme pády)
    if (NexusDB.executeNodeAction) {
      NexusDB.executeNodeAction(
        nodeId,
        "react",
        type,
        userState,
        ocValue,
        `Reakcia: ${nodeId}`,
      ).catch(() => {});
    }

    // ⚡ 3. TERMINATOR PROTOCOL S OPRAVENÝM ID
    const enforceReactions = async () => {
      if (!supabase) return;
      const docId = `NODE_${nodeId}`;

      try {
        const { data: updData, error: updErr } = await supabase
          .from("nexus_posts")
          .update({ reactions: newReactions })
          .eq("id", docId)
          .select("id");

        if (!updErr && (!updData || updData.length === 0)) {
          const { error: insErr } = await supabase.from("nexus_posts").insert({
            id: docId,
            author_id: "system",
            author_name: "SYSTEM_CORE",
            content: `[SYSTEM] Sémantický uzol ${nodeId} inicializovaný.`,
            title: `[U_Z_O_L]: ${nodeId}`,
            reactions: newReactions,
          });

          if (insErr && insErr.code === "23505") {
            await supabase
              .from("nexus_posts")
              .update({ reactions: newReactions })
              .eq("id", docId);
          }
        }
      } catch (err) {}
    };

    await enforceReactions();

    setTimeout(() => {
      actionLock.current = false;
    }, 200);
  };

  const r = postData?.reactions || {};
  const getRc = (t) => (Array.isArray(r[t]) ? r[t].length : 0);
  const isMyRc = (t) => Array.isArray(r[t]) && r[t].includes(myUserId);

  const REACTION_TYPES = [
    {
      id: "like",
      i: "👍",
      c: "#39FF14",
      r: "+0.1 OC",
      d: "Súhlas",
      ocValue: 0.1,
    },
    {
      id: "brain",
      i: "🧠",
      c: "#BF00FF",
      r: "+0.2 OC",
      d: "Analýza",
      ocValue: 0.2,
    },
    {
      id: "eye",
      i: "👁️",
      c: "#FFD700",
      r: "+0.1 OC",
      d: "Videné",
      ocValue: 0.1,
    },
    {
      id: "haha",
      i: "😂",
      c: "#00FFFF",
      r: "+0.1 OC",
      d: "Humor",
      ocValue: 0.1,
    },
    { id: "wow", i: "😮", c: "#FFAA00", r: "+0.2 OC", d: "Úžas", ocValue: 0.2 },
    {
      id: "dislike",
      i: "👎",
      c: "#FF003C",
      r: "-1.0 OC",
      d: "Nesúhlas",
      ocValue: -1.0,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="border-t border-white/5 pt-10 md:pt-12 flex flex-col items-center gap-6 relative z-20 w-full mt-16 text-left"
    >
      <style>{`
        .btn-cite-${nodeId} { background-color: rgba(255, 255, 255, 0.03); border-color: rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.6); }
        .btn-cite-${nodeId}:hover { background-color: ${hexToRgba(activeColor, 0.1)}; border-color: ${hexToRgba(activeColor, 0.3)}; color: ${activeColor}; }
        .btn-cite-${nodeId}:hover svg { color: ${activeColor} !important; transform: scale(1.1); }
      `}</style>

      <div className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.5em] font-black flex items-center gap-3 text-center">
        <Scan
          size={14}
          className="animate-pulse"
          style={{ color: activeColor }}
        />
        Bridge_Protocol_Exodus_V32.8
      </div>

      {/* 📊 TACHOMETER PRE UZOL (HUD) - OPRAVENÉ TOOlTIPY SMEROM NADOL */}
      {/* ⚡ Zvýšený z-index na z-30 pre stabilnú pozíciu nad všetkými vrstvami */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 border border-white/5 bg-[#030303] px-6 py-2.5 rounded-full text-[9px] font-mono tracking-widest uppercase mt-[-10px] shadow-[0_0_20px_rgba(0,0,0,0.8)] z-30 relative">
        <NodeTooltip
          text="ZOBRAZENIA: Celkový počet načítaní tohto uzla operátormi"
          color={activeColor}
          position="down"
        >
          <div className="flex items-center gap-2 cursor-help select-none">
            <Activity
              size={12}
              style={{ color: activeColor }}
              className="animate-pulse"
            />
            <span className="text-white/40">
              KLIK:{" "}
              <span className="text-white font-black">{telemetry.views}X</span>
            </span>
          </div>
        </NodeTooltip>

        <NodeTooltip
          text="INDEX ČÍTANIA: Pomer medzi zascrollovaním na spoločný footer a celkovým načítaním uzla"
          color={activeColor}
          position="down"
        >
          <div className="flex items-center gap-2 border-l border-white/10 pl-4 md:pl-6 cursor-help select-none">
            <span className="text-white/40">
              INDEX ČÍTANIA:{" "}
              <span className="font-black" style={{ color: activeColor }}>
                {telemetry.completion}%
              </span>
            </span>
          </div>
        </NodeTooltip>

        <NodeTooltip
          text="ČAS ŠTÚDIA: Absolútny kumulatívny čas, strávený čítaním textových dát tohto uzla"
          color={activeColor}
          position="down"
        >
          <div className="flex items-center gap-2 border-l border-white/10 pl-4 md:pl-6 cursor-help select-none">
            <span className="text-white/40">
              TIME:{" "}
              <span className="text-white font-black">
                {Math.floor(telemetry.time / 60)}M {telemetry.time % 60}S
              </span>
            </span>
          </div>
        </NodeTooltip>
      </div>

      <div className="flex flex-wrap justify-center gap-2 w-full max-w-2xl bg-[#0a0a0a] p-2.5 rounded-2xl border border-[#111]">
        {REACTION_TYPES.map((t) => (
          <NodeTooltip key={t.id} text={`${t.d} | ${t.r}`} color={t.c}>
            <button
              onClick={(e) => handleReactionClick(e, t)}
              onMouseEnter={() => SoundFX?.hover && SoundFX.hover()}
              className={`px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 border transition-all ${isMyRc(t.id) ? "bg-white/10 text-white" : "bg-white/5 border-white/5 text-white/50 hover:text-white"}`}
              style={
                isMyRc(t.id)
                  ? { borderColor: t.c, boxShadow: `0 0 12px ${t.c}40` }
                  : {}
              }
            >
              {t.i}{" "}
              <span className="font-black text-[11px]">{getRc(t.id)}</span>
            </button>
          </NodeTooltip>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-4 justify-center mt-2">
        <NodeTooltip text="Citovať v Editore | +0.3 OC" color={activeColor}>
          <button
            onClick={() => handleActionClick("cite")}
            onMouseEnter={() => SoundFX?.hover && SoundFX.hover()}
            className={`btn-cite-${nodeId} flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all w-full sm:w-auto group`}
          >
            <Quote
              size={16}
              className="transition-transform"
              style={{ color: activeColor }}
            />
            Citovať do Blogu
          </button>
        </NodeTooltip>

        <NodeTooltip text="Diskutovať k Uzlu | +0.5 OC" color={activeColor}>
          <button
            onClick={() => handleActionClick("discuss")}
            onMouseEnter={(e) => {
              if (SoundFX?.hover) SoundFX.hover();
              e.currentTarget.style.backgroundColor = hexToRgba(
                activeColor,
                0.3,
              );
            }}
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = hexToRgba(
                activeColor,
                0.15,
              ))
            }
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all w-full sm:w-auto group"
            style={{
              backgroundColor: hexToRgba(activeColor, 0.15),
              borderColor: hexToRgba(activeColor, 0.4),
              borderWidth: "1px",
              boxShadow: `0 0 20px ${hexToRgba(activeColor, 0.15)}`,
            }}
          >
            <MessageSquare
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            Spustiť Diskusiu
          </button>
        </NodeTooltip>
      </div>

      <div className="absolute bottom-0 right-4 opacity-10 pointer-events-none font-mono text-[6px] uppercase tracking-widest text-white">
        {CORE_VERSION}
      </div>
    </footer>
  );
};

export default GlobalPredFooterNode;
