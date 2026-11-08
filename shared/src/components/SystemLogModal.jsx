import { SoundFX } from "@shared/utils/SoundEngine.js";
import { CheckCircle2, ChevronDown, ChevronUp, GitCommit, History, Shield, Terminal, X, Zap } from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS03 MASTER DATASET V20.95)
// Súbor: src/components/SystemLogModal.jsx
// Status: 100% GROUNDED // SYSTEM LOG MATRIX & GIT CHANGELOG MODAL
// CORE_VERSION: SYSTEM-LOG-MODAL V20.95
// ============================================================================

import React, { useEffect, useState } from "react";

// 🗄️ VÝCHODISKOVÝ CHANGELOG DÁTOVÝ SÚBOR (PRIPRAVENÝ AŽ NA 30 ZÁZNAMOV)
  const defaultChangelog = [
    {
      id: "LOG-2095-01",
      tag: "AGENCY_SYNC",
      title: "1:1 Synchronizácia Headerov a Typografie",
      summary: "Zosynchronizovaný vizuálny kánon pre Agency, HomePage a Blog.",
      desc: "Implementovaný unifikovaný Header komponent s podporou dynamických farieb (Neónová Zelená #39FF14, Kybernetický Cyan #00f3ff, Magenta #E91E63 a Oranžová #FFAA00). Dekonštruovaný CSS Stacking Context.",
      date: "06.11.2026",
      color: "#00f3ff",
    },
    {
      id: "LOG-2095-02",
      tag: "UI_V20_NAV",
      title: "Responsive Collision Shield pre Peňaženku a Chronometer",
      summary: "Kompaktný ikonový režim pre stredné monitory s instantnými hover tooltipmi.",
      desc: "Upravené z-index hranice pre mobilné viewporty. Pridané defenzívne ošetrenie String(val || '') na zabránenie TypeError pri rýchlom prepínaní dimenzií.",
      date: "05.11.2026",
      color: "#10B981",
    },
    {
      id: "LOG-2095-03",
      tag: "VITE_CONFIG",
      title: "Build-Time Git Hash Injekcia",
      summary: "Automatický detektor nových deployov a zmenových logov z repozitára.",
      desc: "Prepojenie VITE_GIT_COMMIT_HASH prostredníctvom Vite bundlera s automatickým trigerom SystemLogModal pri detekcii novej verzionalizácie.",
      date: "04.11.2026",
      color: "#F59E0B",
    },
    {
      id: "LOG-2095-04",
      tag: "OPERATORS_CORE",
      title: "Level 48 Operators Control Panel & HUD Tachometre",
      summary: "Nasadenie Neónovo Oranžového (#FFAA00) kánonu pre Operators rozhranie.",
      desc: "Prepojené stavové tachometre Online/Sleep/Offline entít s reálnou kapacitou siete. Registrácia routy vo Vite zbernici pod aliasom @operators.",
      date: "03.11.2026",
      color: "#FFAA00",
    },
    {
      id: "LOG-2095-05",
      tag: "ROUTING_HOTFIX",
      title: "Route Theme Reset Eliminácia Memory Leakom",
      summary: "Automatické prepínanie sémantických farieb pri zmene URL location.pathname.",
      desc: "Pridaný odpočúvač useEffect vo webovej zbernici App.jsx, ktorý zabraňuje pretekaniu farieb medzi Homepage, Agency, Blogom a Shopom.",
      date: "02.11.2026",
      color: "#3B82F6",
    },
  ];


export const SystemLogModal = ({
  isOpen = false,
  onClose = () => {},
  themeColor = "#00f3ff",
  customLogs = null,
}) => {
  const currentGitHash =
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_GIT_COMMIT_HASH) ||
    "v20.95-master";

const [gitLogs, setGitLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && !customLogs) {
      setIsLoading(true);
      fetch("[suspicious link removed]")
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            const formattedLogs = data.map((item, idx) => {
              const rawMsg = item.commit?.message || "";
              const msgLines = String(rawMsg).split("\n").filter((line) => line.trim() !== "");
              const commitTitle = msgLines || "Git Update";
              const commitBody = msgLines.slice(1).join(" ").trim() || "Commit evidovaný vo zbernici GitHub.";
              const commitDate = item.commit?.author?.date
                ? new Date(item.commit.author.date).toLocaleDateString("sk-SK", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "DNEŠNÝ PUSH";

              return {
                id: item.sha ? item.sha.substring(0, 7) : `LOG-${idx}`,
                tag: idx === 0 ? "LATEST_PUSH" : "GIT_COMMIT",
                title: commitTitle,
                summary: commitBody.substring(0, 140) + (commitBody.length > 140 ? "..." : ""),
                desc: `Commit SHA: ${item.sha} | Autor: ${item.commit?.author?.name || "Architekt"}`,
                date: commitDate,
                color: idx === 0 ? "#39FF14" : "#00f3ff",
              };
            });
            setGitLogs(formattedLogs);
          }
        })
        .catch((err) => {
          console.warn("⚠️ [NEXUS GIT API] Volanie zlyhalo, aktivujem fallback changelog:", err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isOpen, customLogs]);

  const displayLogs = customLogs || (gitLogs.length > 0 ? gitLogs : defaultChangelog);

  // 🎯 STAV PRE ROZKLIKNUTÚ KARTIČKU (EXPANDABLE CARD ID)
  const [expandedLogId, setExpandedLogId] = useState(null);

  useEffect(() => {
    if (isOpen) {
      try {
        SoundFX?.playSuccess?.();
      } catch (err) {
        console.warn("⚠️ [NEXUS SOUND] SoundFX audio trigger skipped:", err);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAcknowledge = () => {
    try {
      SoundFX?.playClick?.();
      localStorage.setItem("nexus_last_seen_git_commit", currentGitHash);
    } catch (err) {
      console.warn("⚠️ [NEXUS STORAGE] LocalStorage write skipped:", err);
    }
    if (typeof onClose === "function") onClose();
  };

  const toggleExpandLog = (id) => {
    try {
      SoundFX?.playClick?.();
    } catch (err) {
      // quiet fallback
    }
    setExpandedLogId((prev) => (prev === id ? null : id));
  };

  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-mono">
      <div
        className="w-full max-w-2xl bg-[#03070A] border rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.25)] overflow-hidden text-white flex flex-col max-h-[90vh]"
        style={{ borderColor: `${themeColor}50` }}
      >
        {/* 1. HLAVIČKA MODÁLU */}
        <div
          className="px-5 py-4 border-b flex items-center justify-between bg-[#050A0E]"
          style={{ borderBottomColor: `${themeColor}30` }}
        >
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded-xl flex items-center justify-center border"
              style={{
                backgroundColor: `${themeColor}15`,
                borderColor: `${themeColor}50`,
                color: themeColor,
              }}
            >
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-black tracking-wider uppercase">
                  SYSTEM LOG // MATRIX CHANGELOG
                </h2>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                  style={{
                    backgroundColor: `${themeColor}20`,
                    color: themeColor,
                    border: `1px solid ${themeColor}40`,
                  }}
                >
                  NEW PUSH
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
                <span>
                  COMMIT: <strong className="text-white">{currentGitHash}</strong>
                </span>
                <span>|</span>
                <span>OS GENESIS V20.95</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAcknowledge}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-gray-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. OBSAH ZZNAMOV (LIMIT 30 + EXPANDABLE CARDS) */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1 custom-scrollbar">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-3 text-xs text-cyan-300">
            <Zap className="w-5 h-5 text-cyan-400 shrink-0 animate-pulse" />
            <span>
              Boli detegované nové systémové aktualizácie. Matrix bol úspešne prelinkovaný na najnovší commit.
            </span>
          </div>

          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest pb-1 border-b border-white/5">
              <div className="flex items-center gap-2">
                <History className="w-3.5 h-3.5" />
                <span>AKTUÁLNE ZMENY V KÓDE (CHANGELOG)</span>
              </div>
              <span className="text-[10px] text-zinc-500 font-normal">
                POSLEDNÝCH {displayLogs.length} ZÁZNAMOV
              </span>
            </div>

            {displayLogs.map((log) => {
              const isExpanded = expandedLogId === log.id;
              const cardColor = log.color || themeColor;

              return (
                <div
                  key={log.id}
                  onClick={() => toggleExpandLog(log.id)}
                  className="p-3.5 rounded-xl bg-[#080E14] border transition-all text-left cursor-pointer group hover:bg-[#0c151f]"
                  style={{
                    borderColor: isExpanded ? `${cardColor}80` : "rgba(31, 41, 55, 0.8)",
                    boxShadow: isExpanded ? `0 0 15px ${cardColor}20` : "none",
                  }}
                >
                  {/* TAG & DATE HEADER */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className="text-[10px] font-black px-2 py-0.5 rounded border tracking-wider uppercase"
                      style={{
                        backgroundColor: `${cardColor}15`,
                        color: cardColor,
                        borderColor: `${cardColor}40`,
                      }}
                    >
                      [{log.tag}]
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-500">{log.date}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white" />
                      )}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="text-xs font-bold text-white transition-colors flex items-center justify-between"
                    style={{ color: isExpanded ? cardColor : undefined }}
                  >
                    <span>{log.title}</span>
                  </h3>

                  {/* SUMMARY / PREVIEW */}
                  <p className="text-[11px] text-gray-300 mt-1 leading-relaxed">
                    {log.summary || log.desc}
                  </p>

                  {/* EXPANDED DETAILED DESCRIPTION */}
                  {isExpanded && log.desc && log.summary && (
                    <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-zinc-400 leading-relaxed animate-in fade-in duration-300">
                      <strong className="text-zinc-200 block mb-1 uppercase tracking-wider text-[10px]">
                        🔍 CHIRURGICKÝ DETAIL ZMENY:
                      </strong>
                      {log.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. PÄTIČKA A ACKNOWLEDGE TLAČIDLO */}
        <div
          className="p-4 border-t bg-[#050A0E] flex flex-wrap items-center justify-between gap-3"
          style={{ borderTopColor: `${themeColor}30` }}
        >
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>
              STATUS: <strong className="text-emerald-400 uppercase">SYSTEM STABLE & GROUNDED</strong>
            </span>
          </div>

          <button
            type="button"
            onClick={handleAcknowledge}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            style={{
              backgroundColor: themeColor,
              boxShadow: `0 0 20px ${themeColor}50`,
            }}
          >
            <CheckCircle2 className="w-4 h-4 text-black" />
            <span>POTVRDIŤ A SYNCHRONIZOVAŤ [ACKNOWLEDGE]</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemLogModal;