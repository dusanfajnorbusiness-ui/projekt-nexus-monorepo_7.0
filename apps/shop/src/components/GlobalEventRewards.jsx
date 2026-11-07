import React, { useState, useEffect } from "react";
import {
  Trophy,
  Star,
  Crown,
  Zap,
  Activity,
  Clock,
  Award,
  ChevronRight,
  ShieldAlert,
  Target,
  User,
  BookOpen,
  X,
  Info,
} from "lucide-react";

import { SoundFX } from "@shared/utils/SoundEngine.js";
import { supabase } from "@shared/services/NexusDB_Supabase.js";

// ============================================================================
// ⚡ PROTOKOL VERZIOVANIA (CORE-VER-001)
// ============================================================================
const CORE_VERSION = "C-GlobalEventRewards V2.0-SUPABASE-ONLY";

const EVENT_TYPES = [
  {
    id: "REACTION_LIKE",
    name: "Mesiac Súhlasu",
    desc: "Získaj najviac LIKE reakcií.",
    icon: "👍",
    bonusOC: "+0.1",
  },
  {
    id: "REACTION_BRAIN",
    name: "Sokratov Mesiac",
    desc: "Získaj najviac BRAIN (Múdre) reakcií.",
    icon: "🧠",
    bonusOC: "+0.2",
  },
  {
    id: "REACTION_WOW",
    name: "Mesiac Úžasu",
    desc: "Vyvolaj WOW efekt vo vláknach.",
    icon: "😮",
    bonusOC: "+0.2",
  },
  {
    id: "REPLY_BONUS",
    name: "Sémantická Búrka",
    desc: "Najaktívnejší diskutujúci v Matrixe.",
    icon: "💬",
    bonusOC: "+0.5",
  },
  {
    id: "CITE_BONUS",
    name: "Citadela Ozvien",
    desc: "Najcitovanejší operátor.",
    icon: "📑",
    bonusOC: "+0.3",
  },
  {
    id: "UPTIME_BONUS",
    name: "Strážca Siete",
    desc: "Najvyšší UPTIME a online presence.",
    icon: "🟢",
    bonusOC: "+0.6",
  },
];

export const GlobalEventRewards = ({
  themeColor = "#00FFFF",
  currentMonth = new Date().getMonth(),
}) => {
  const [topMonthly, setTopMonthly] = useState([]);
  const [topYearly, setTopYearly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCodex, setShowCodex] = useState(false);

  // 📡 SYSTÉMOVÝ SIGNÁL PRI ŠTARTE
  useEffect(() => {
    console.log(
      `%c [LOADED]: ${CORE_VERSION} `,
      "background: #000; color: #00FFFF; font-weight: bold; border: 1px solid #00FFFF; padding: 2px;",
    );
  }, []);

  const currentEvent = EVENT_TYPES[currentMonth % EVENT_TYPES.length];

  // 📡 REAL-TIME SYNC CEZ SUPABASE MOST
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const { data: users, error } = await supabase.from("users").select("*");

        if (error) throw error;

        if (users) {
          // 🛡️ BULLETPROOF FALLBACK:
          // Ak entita ešte nemá v DB "monthlyEarnedOC", vytiahneme "ocCredits" (podporujeme aj snake_case).
          // Týmto zaručíme, že sa rebríček vždy vizuálne naplní a nezostane prázdny.
          const getMScore = (u) =>
            u.monthlyEarnedOC ||
            u.monthly_earned_oc ||
            u.ocCredits ||
            u.oc_credits ||
            0;
          const getYScore = (u) =>
            u.yearlyEarnedOC ||
            u.yearly_earned_oc ||
            u.ocCredits ||
            u.oc_credits ||
            0;

          // 1. Spracovanie Mesačného Rebríčka (TOP 10)
          const mData = users
            .filter((u) => getMScore(u) > 0)
            .sort((a, b) => getMScore(b) - getMScore(a))
            .slice(0, 10);

          setTopMonthly(mData);

          // 2. Spracovanie Ročného Rebríčka (TOP 5)
          const yData = users
            .filter((u) => getYScore(u) > 0)
            .sort((a, b) => getYScore(b) - getYScore(a))
            .slice(0, 5);

          setTopYearly(yData);
        }
      } catch (err) {
        console.error("🔥 LEADERBOARD FETCH ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();

    // Počúvanie na zmeny v users tabuľke pre živé OC updaty
    const channel = supabase
      .channel("leaderboard_sync")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "users" },
        () => {
          fetchLeaderboard();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  /* ⚙️ POMOCNÉ EXTRAKČNÉ FUNKCIE PRE UI */
  const getOpName = (op) =>
    op.displayName ||
    op.display_name ||
    op.email?.split("@")[0] ||
    "Neznáma Entita";
  const getOpAvatar = (op) => op.avatar || op.avatar_url || op.avatarUrl;
  const getScore = (op, type) => {
    if (type === "month")
      return (
        op.monthlyEarnedOC ||
        op.monthly_earned_oc ||
        op.ocCredits ||
        op.oc_credits ||
        0
      );
    return (
      op.yearlyEarnedOC ||
      op.yearly_earned_oc ||
      op.ocCredits ||
      op.oc_credits ||
      0
    );
  };

  const PodiumSlot = ({ op, rank, type = "month" }) => {
    if (!op)
      return (
        <div className="flex-1 opacity-10 flex flex-col items-center justify-end">
          <User size={40} />
        </div>
      );

    const isGold = rank === 1;
    const isSilver = rank === 2;
    const isBronze = rank === 3;

    const pColor = isGold ? "#FFD700" : isSilver ? "#C0C0C0" : "#CD7F32";
    const heightClass = isGold
      ? "h-40 md:h-48"
      : isSilver
        ? "h-32 md:h-40"
        : "h-24 md:h-32";
    const score = getScore(op, type);

    return (
      <div
        className="flex flex-col items-center justify-end flex-1 z-10 group cursor-help"
        onMouseEnter={() => SoundFX?.hover && SoundFX.hover()}
      >
        {isGold && (
          <Crown
            size={32}
            style={{ color: pColor }}
            className="mb-2 animate-bounce drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
          />
        )}

        <div className="relative mb-4">
          <div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 overflow-hidden bg-black z-10 relative"
            style={{ borderColor: pColor }}
          >
            {getOpAvatar(op) ? (
              <img
                src={getOpAvatar(op)}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={24} className="m-auto mt-2 md:mt-4 text-white/50" />
            )}
          </div>
          <div
            className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-black z-20"
            style={{ backgroundColor: pColor, color: "black" }}
          >
            {rank}
          </div>
        </div>

        <div
          className={`w-full rounded-t-xl border-t border-l border-r flex flex-col items-center justify-start pt-4 transition-all duration-500 group-hover:brightness-150 ${heightClass}`}
          style={{
            borderColor: `${pColor}40`,
            background: `linear-gradient(to top, rgba(0,0,0,0.8), ${pColor}20)`,
          }}
        >
          <span className="text-[10px] md:text-xs font-black uppercase text-white truncate max-w-[80%] mb-1">
            {getOpName(op)}
          </span>
          <span
            className="text-[14px] md:text-lg font-black tracking-tighter"
            style={{ color: pColor }}
          >
            {Number(score || 0).toLocaleString()}{" "}
            <span className="text-[9px] opacity-50">OC</span>
          </span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-10 border border-white/5 rounded-3xl bg-black/40">
        <Activity size={32} className="animate-pulse text-white/50 mb-4" />
        <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
          Synchronizácia s Matrixom...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 text-left font-mono">
      {/* ============================================================ */}
      {/* 📖 KÓDEX SÚŤAŽE (MODAL OVERLAY)                              */}
      {/* ============================================================ */}
      {showCodex && (
        <div className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in zoom-in-95 duration-300">
          <div className="bg-[#050505] border-l-4 border-r border-t border-b border-l-[#00FFFF] border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,255,255,0.1)] relative overflow-hidden">
            <header className="flex justify-between items-center p-6 sm:p-8 border-b border-white/5 relative z-10 bg-black/50 backdrop-blur-xl shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Info size={16} className="text-[#00FFFF]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00FFFF]/70">
                    Transparentný Tender
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white italic">
                  Kódex{" "}
                  <span className="text-[#00FFFF] not-italic">
                    Matrix Súťaží
                  </span>
                </h2>
              </div>
              <button
                onClick={() => setShowCodex(false)}
                className="p-3 bg-white/5 hover:bg-red-500 hover:text-black border border-white/10 hover:border-red-500 rounded-xl transition-all"
              >
                <X size={20} />
              </button>
            </header>

            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1 text-[11px] sm:text-xs leading-relaxed text-white/70 space-y-10 relative z-10">
              <section>
                <h3 className="text-sm font-black uppercase text-white tracking-widest border-b border-white/10 pb-2 mb-4 text-[#00FFFF]">
                  01. Sémantika Súťaží
                </h3>
                <p className="mb-4">
                  Matrix nie je len databáza, je to živý ekosystém.
                  Automatizovaný{" "}
                  <strong className="text-white">
                    RNG (Random Number Generator) systém
                  </strong>{" "}
                  každý mesiac vyhlasuje nový, náhodný "Event", ktorý odmeňuje
                  špecifickú aktivitu v Sieti zvýšeným prísunom OC kreditov.
                  Účelom je motivovať operátorov k hĺbkovej analýze a vzájomnej
                  interakcii.
                </p>
              </section>

              <section>
                <h3 className="text-sm font-black uppercase text-white tracking-widest border-b border-white/10 pb-2 mb-4 text-[#00FFFF]">
                  02. Cykly, Uzávierky a Odmeny
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={16} className="text-[#39FF14]" />
                      <strong className="text-white uppercase tracking-widest">
                        Mesačný Cyklus
                      </strong>
                    </div>
                    <ul className="space-y-3 font-mono">
                      <li className="flex gap-2">
                        <span className="text-[#39FF14]">▸</span>{" "}
                        <strong>Trvanie:</strong> Od 1. dňa do posledného dňa v
                        mesiaci.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#39FF14]">▸</span>{" "}
                        <strong>Reset:</strong> O polnoci 1. dňa nového mesiaca
                        sa skóre nuluje.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#39FF14]">▸</span>{" "}
                        <strong>Dotácia Banku:</strong> Prvé tri entity si delia
                        dotáciu: 1. miesto (50 OC), 2. miesto (25 OC), 3. miesto
                        (10 OC).
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#39FF14]">▸</span>{" "}
                        <strong>Trofeje:</strong> Systém automaticky pripíše
                        zlatú, striebornú alebo bronzovú medailu na profilovú
                        kartu víťaza.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={16} className="text-[#FFD700]" />
                      <strong className="text-white uppercase tracking-widest">
                        Ročný Mega-Bank
                      </strong>
                    </div>
                    <ul className="space-y-3 font-mono">
                      <li className="flex gap-2">
                        <span className="text-[#FFD700]">▸</span>{" "}
                        <strong>Trvanie:</strong> 12 mesiacov (do 31. Decembra).
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#FFD700]">▸</span>{" "}
                        <strong>Vyhodnotenie:</strong> Slávnostný prepočet 1.
                        Januára na Nový Rok.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#FFD700]">▸</span>{" "}
                        <strong>Mega Dotácia:</strong> Výnimočný OC grant pre
                        TOP 3: 1. miesto (500 OC), 2. miesto (250 OC), 3. miesto
                        (100 OC).
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#FFD700]">▸</span>{" "}
                        <strong>Sieň Slávy:</strong> Trvalý zápis entity do
                        kódexu Architekta.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-black uppercase text-white tracking-widest border-b border-white/10 pb-2 mb-6 text-[#00FFFF]">
                  03. Register Aktívnych Eventov
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {EVENT_TYPES.map((ev) => (
                    <div
                      key={ev.id}
                      className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-start gap-4"
                    >
                      <div className="text-2xl mt-1">{ev.icon}</div>
                      <div>
                        <strong className="text-white block uppercase tracking-widest mb-1">
                          {ev.name}
                        </strong>
                        <p className="text-white/40 text-[10px] mb-2">
                          {ev.desc}
                        </p>
                        <span className="inline-block px-2 py-1 bg-[#FF003C]/10 text-[#FF003C] text-[9px] font-black rounded border border-[#FF003C]/20">
                          Odmena: {ev.bonusOC} OC
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <p className="text-center text-[#00FFFF]/50 italic text-[10px] uppercase tracking-widest pt-8 border-t border-white/5">
                Architekt si vyhradzuje právo upraviť pravidlá na základe
                stability Siete.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🏆 LEADERBOARD - MESAČNÝ (Ľavá strana 8 stĺpcov) */}
      <div
        id="nexus-operators-leaderboard"
        className="xl:col-span-8 bg-black/40 border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden flex flex-col"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 blur-[80px] bg-[#00FFFF]/10 rounded-full pointer-events-none" />

        <header className="flex justify-between items-start mb-12 relative z-10 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Trophy size={18} className="text-[#00FFFF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00FFFF]/60">
                Matrix Leaderboard
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white italic">
              Top <span className="text-[#00FFFF]">Operátori</span> Mesiaca
            </h2>
          </div>
          <div className="flex flex-col items-end gap-3">
            <button
              onClick={() => {
                if (SoundFX?.click) SoundFX.click();
                setShowCodex(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/30 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#00FFFF] hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,255,0.1)]"
            >
              <BookOpen size={14} /> Manuál a Kódex
            </button>
            <div className="text-right hidden sm:block">
              <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-1">
                Aktuálny Cyklus
              </span>
              <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-black text-white">
                {new Date()
                  .toLocaleString("sk-SK", { month: "long", year: "numeric" })
                  .toUpperCase()}
              </span>
            </div>
          </div>
        </header>

        {topMonthly.length === 0 ? (
          <div className="py-20 text-center text-white/30 border border-dashed border-white/10 rounded-2xl flex-1">
            Zatiaľ neboli vyťažené žiadne OC v tomto mesiaci.
          </div>
        ) : (
          <div className="flex items-end justify-center gap-2 md:gap-6 mt-8 relative z-10 max-w-3xl mx-auto min-h-[250px]">
            <PodiumSlot op={topMonthly[1]} rank={2} />
            <PodiumSlot op={topMonthly[0]} rank={1} />
            <PodiumSlot op={topMonthly[2]} rank={3} />
          </div>
        )}

        {/* Výpis pod pódiom (Miesta 4-10) */}
        {topMonthly.length > 3 && (
          <div className="mt-8 pt-8 border-t border-white/5 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {topMonthly.slice(3, 10).map((op, idx) => (
              <div
                key={op.id || idx}
                className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-white/30 w-4">
                    {idx + 4}.
                  </span>
                  <div className="w-6 h-6 rounded-full bg-black overflow-hidden border border-white/10">
                    {getOpAvatar(op) ? (
                      <img
                        src={getOpAvatar(op)}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={12} className="m-auto mt-1 text-white/30" />
                    )}
                  </div>
                  <span className="text-[10px] font-black uppercase text-white/70 truncate max-w-[120px]">
                    {getOpName(op)}
                  </span>
                </div>
                <span className="text-[10px] font-black text-[#FFD700]">
                  {Number(getScore(op, "month")).toLocaleString()} OC
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ⚡ INFO O DOTÁCII MESAČNÉHO BANKU */}
        <div className="mt-auto pt-6 border-t border-white/5 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#00FFFF]/60 font-black uppercase tracking-widest mt-8">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-[#00FFFF]" />
            <span>
              Mesačná Dotácia:{" "}
              <span className="text-[#00FFFF]">50 / 25 / 10 OC</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Reset: 01. v Mesiaci (00:00)</span>
          </div>
        </div>
      </div>

      {/* 🎯 AKTÍVNY EVENT A ROČNÁ SÚŤAŽ (Pravá strana 4 stĺpce) */}
      <div className="xl:col-span-4 flex flex-col gap-8">
        {/* MESAČNÝ EVENT KARTA */}
        <div
          id="nexus-operators-active-event"
          className="bg-gradient-to-br from-[#FF003C]/20 to-black border-2 border-[#FF003C]/30 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(255,0,60,0.15)] relative overflow-hidden group"
        >
          <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Target size={150} className="text-[#FF003C]" />
          </div>
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-[#FF003C]/20 text-[#FF003C] text-[9px] font-black uppercase tracking-widest rounded mb-6 border border-[#FF003C]/50">
              Aktívny Event
            </div>
            <h3 className="text-2xl font-black uppercase text-white mb-2 italic flex items-center gap-3">
              {currentEvent.icon} {currentEvent.name}
            </h3>
            <p className="text-[11px] text-white/60 mb-6 uppercase tracking-widest leading-relaxed">
              {currentEvent.desc} Systém odmeňuje operátorov za dodržiavanie
              tohto protokolu prémiovejším prísunom OC.
            </p>
            <div className="flex items-center justify-between p-4 bg-black/60 rounded-xl border border-white/10">
              <span className="text-[9px] text-white/40 uppercase font-black">
                Odmena:
              </span>
              <span className="text-[#FF003C] font-black text-lg tracking-tighter">
                {currentEvent.bonusOC} OC
              </span>
            </div>
          </div>
        </div>

        {/* ROČNÁ SÚŤAŽ O MEGA BANK (1. Január) */}
        <div
          id="nexus-operators-mega-bank"
          className="bg-black/60 border border-[#FFD700]/20 rounded-[2rem] p-8 relative overflow-hidden flex-1 flex flex-col"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 blur-[40px] rounded-full pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-[#FFD700]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFD700]">
                Ročný Mega-Bank
              </span>
            </div>
            <p className="text-[10px] text-white/40 mb-6 uppercase tracking-widest leading-relaxed border-l-2 border-[#FFD700]/30 pl-3">
              Operátori s najvyšším počtom OC (Yearly) získajú 1. Januára
              automatickú dotáciu od Architekta.
            </p>

            <div className="space-y-3 mt-auto">
              {topYearly.length === 0 ? (
                <div className="text-center text-[10px] text-white/20 italic">
                  Prebieha ťažba...
                </div>
              ) : (
                topYearly.slice(0, 3).map((op, idx) => (
                  <div
                    key={op.id || idx}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black text-black ${idx === 0 ? "bg-[#FFD700]" : idx === 1 ? "bg-[#C0C0C0]" : "bg-[#CD7F32]"}`}
                      >
                        {idx + 1}
                      </div>
                      <span className="text-[10px] font-black uppercase text-white/80 truncate max-w-[100px]">
                        {getOpName(op)}
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-black"
                      style={{ color: idx === 0 ? "#FFD700" : "white" }}
                    >
                      {Number(getScore(op, "year")).toLocaleString()} OC
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 pt-4 flex justify-between items-center text-[9px] text-[#FFD700]/60 font-black uppercase border-t border-white/5">
              <span>
                Dotácia:{" "}
                <span className="text-[#FFD700]">500 / 250 / 100 OC</span>
              </span>
              <span>Reset: 01. Január</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalEventRewards;
