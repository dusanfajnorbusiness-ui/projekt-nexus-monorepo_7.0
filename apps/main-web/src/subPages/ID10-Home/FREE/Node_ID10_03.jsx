import React, { useState, useEffect } from "react";
import {
  Shield,
  Terminal,
  Database,
  Cpu,
  Briefcase,
  CheckCircle2,
  Globe,
  Fingerprint,
  RefreshCw,
  Activity,
  Code,
  Copy,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Zap,
  Rocket,
  Lock,
  BarChart3,
  Network,
  PenTool,
  Users,
  EyeOff,
  Mic,
  FileText,
  DollarSign,
  UserCog,
  BookOpen,
  Eye,
  ShoppingCart,
  Banknote,
  Home,
  WifiOff,
  PowerOff,
  ShieldAlert,
  Ghost,
  Repeat,
  Skull,
  BookX,
  Target,
  Waves,
  SearchX,
  TerminalSquare,
  Bug,
  BrainCircuit,
  MessageSquareX,
} from "lucide-react";

// =====================================================================
// 🟢 1. PRODUKČNÉ IMPORTY (Vo VS Code odkomentuj)
// =====================================================================
import { TierBadge } from "@shared/components/TierBadge";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalPredFooterNode } from "@main-web/components/GlobalPredFooterNode";
import { GlobalNodeVideo } from "@main-web/components/main-web-legacy-code/GlobalNodeVideo";
import { GlobalNodePodcast } from "@main-web/components/main-web-legacy-code/GlobalNodePodcast";
import MetaTags from "@shared/components/MetaTags";

// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// 🗑️ 2. MOCKY PRE CANVAS (ZMAZAŤ V LOKÁLNOM PROJEKTE) 🗑️
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// const TierBadge = ({ tier }) => (
//   <span className="px-3 py-1 bg-black text-xs font-black tracking-widest uppercase border rounded text-[#00FFFF] border-[#00FFFF]/50 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
//     [ {tier} TIER ]
//   </span>
// );

// const GlobalNodeVideo = ({ nodeId }) => (
//   <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 font-mono text-sm relative overflow-hidden group">
//     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
//     <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
//     <div className="flex flex-col items-center gap-4 z-10">
//       <div className="w-20 h-20 rounded-full bg-black/50 border border-[#00FFFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
//         <BrainCircuit className="w-10 h-10 text-[#00FFFF]" />
//       </div>
//       <span className="text-[#00FFFF] font-black tracking-widest uppercase text-xs">
//         GlobalNodeVideo [{nodeId}] - CRT Filter Active
//       </span>
//     </div>
//   </div>
// );

// const GlobalNodePodcast = ({ nodeId }) => (
//   <div className="w-full h-48 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col items-center justify-center text-[#00FFFF] font-mono text-sm relative overflow-hidden group">
//     <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
//     <div className="absolute inset-0 bg-[#00FFFF]/5 group-hover:bg-[#00FFFF]/10 transition-colors duration-500"></div>
//     <Mic className="w-10 h-10 mb-3 animate-pulse relative z-10" />
//     <span className="relative z-10 font-black tracking-widest">GlobalNodePodcast [{nodeId}]</span>
//     <span className="text-[#00FFFF]/50 text-xs mt-2 uppercase tracking-widest text-center relative z-10">
//       Audio Matrix Pre-Fetch...
//     </span>
//   </div>
// );

// const GlobalPredFooterNode = () => (
//   <div className="p-8 text-center text-zinc-600 border-t border-zinc-800 mt-16 font-mono text-xs flex justify-center gap-6">
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">[ REAGOVAŤ ]</span>
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">[ CITOVAŤ ]</span>
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">[ DISKUTOVAŤ ]</span>
//   </div>
// );

// const GlobalPromoBanner = () => (
//   <div className="w-full bg-zinc-900 border border-zinc-800 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between mt-16 overflow-hidden relative group">
//     <div className="absolute top-0 left-0 w-1 h-full bg-[#00FFFF]"></div>
//     <div className="pl-4 relative z-10">
//       <h4 className="text-[#00FFFF] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
//         <Zap className="w-5 h-5" /> Nexus_Core OS
//       </h4>
//       <p className="text-zinc-400 text-sm font-medium">Defragmentuj RAM a prepíš svoj osud s verziu 2.0</p>
//     </div>
//     <button className="mt-4 md:mt-0 px-6 py-3 bg-zinc-800 text-white border border-zinc-700 font-black uppercase tracking-widest text-xs rounded hover:bg-zinc-700 transition-colors relative z-10">
//       Aktivovať Protokol
//     </button>
//   </div>
// );

// const SoundFX = { playHover: () => {}, click: () => {}, error: () => {} };
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID10_03)
// =====================================================================

export default function Node_ID10_03() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID10-03";

  // State pre Truth-Decompiler Engine
  const [auditInput, setAuditInput] = useState("");
  const [auditResult, setAuditResult] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyTerminal = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAudit = () => {
    if (!auditInput.trim()) return;
    const lower = auditInput.toLowerCase();

    // Extenzívna diagnostika pre Truth-Decompiler Engine
    if (
      lower.includes("musím") ||
      lower.includes("vždy sa má") ||
      lower.includes("ako povedal") ||
      lower.includes("mal by som") ||
      lower.includes("dobro a zlo") ||
      lower.includes("pravidlo") ||
      lower.includes("píše sa") ||
      lower.includes("osho") ||
      lower.includes("tolle")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Detekovaný Bloatware! Tento kód nie je tvoj. Používaš frázy z mŕtvych kníh (Voice of Knowledge). Tvoj Parazit sa skrýva za teoretickú múdrosť. Skompiluj tento problém vo vlastnej kríze, až potom z neho urob pravidlo.",
      });
    } else if (
      lower.includes("neviem") ||
      lower.includes("prijímam") ||
      lower.includes("moja skúsenosť") ||
      lower.includes("tu a teraz") ||
      lower.includes("ticho") ||
      lower.includes("pozorujem") ||
      lower.includes("som") ||
      lower.includes("skúsil som")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Lived Truth kompilácia úspešná. Tvoj vnem je čistý (Pure Perception). Odpoveď pochádza zo Stromu Pravdy a je overená tvojím Tichým Svedkom. Žiadne lešenie nie je potrebné.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Kód je v šedej zóne. Dávaj pozor na to, či tento výrok skutočne žiješ v stresových situáciách, alebo či ho používaš len ako pohodlnú frázu, keď je všetko v poriadku.",
      });
    }
  };

  return (
    <div
      className="min-h-screen text-zinc-300 font-sans selection:bg-[#00FFFF]/30 selection:text-white relative pb-12"
      style={{
        background: `linear-gradient(180deg, ${TIER_COLOR}08 0%, #09090b 500px, #09090b 100%)`,
      }}
    >
      <div className="fixed top-0 left-0 h-1 z-50 bg-zinc-900 w-full">
        <div
          className="h-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          style={{
            width: `${scrollProgress * 100}%`,
            backgroundColor: TIER_COLOR,
          }}
        ></div>
      </div>

      <header className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24 mb-16 md:mb-32 relative">
        <div className="flex items-center gap-4 mb-6">
          <TierBadge tier="FREE" />
          <span className="font-mono text-zinc-500 tracking-widest flex items-center gap-2">
            <Fingerprint className="w-4 h-4 text-zinc-600" /> {NODE_ID}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic mb-8 group cursor-default text-white">
          <span className="group-hover:opacity-80 transition-opacity duration-100">
            PRAVDA
          </span>{" "}
          <br />
          <span
            className="inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (PREŽITÁ VS MŔTVE KNIHY)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#LivedTruth",
            "#DeadBooks",
            "#HlasPoznania",
            "#StromPravdy",
            "#Unlearning",
            "#Defragmentacia",
            "#PurePerception",
          ].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-zinc-900 text-zinc-400 rounded-sm hover:text-white transition-colors cursor-pointer border border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <blockquote
          className="relative p-6 md:p-8 border-l-4 bg-zinc-900/50 group"
          style={{ borderColor: TIER_COLOR }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
            style={{ backgroundColor: TIER_COLOR }}
          />
          <p className="text-lg md:text-xl font-light italic leading-relaxed text-zinc-400 relative z-10 text-justify">
            "Prečítal som vyše 350 mŕtvych kníh. Od Osha, Tolleho, Ruiza, až po
            Junga a Freuda. Nasával som dáta ako posadnutý. Bol som 'Knihomoľ' a
            môj Komentátor Parazit mi nahovoril, že čím viac kníh prečítam, tým
            viac pravdy nájdem. Bol to fatálny Error. Zistil som, že moja myseľ
            tieto mŕtve spisy len zneužila na to, aby si vytvorila novú,
            'duchovnejšiu' masku. Recitoval som cudzie frázy z Hlasu poznania,
            ale nežil som ich. Pravda nie je niečo, čo si stiahneš z cloudu a
            prečítaš. Pravda je to, čo ti zostane po tom, čo všetky knihy
            zaklapneš, cudzie poučky zabudneš a zostaneš stáť v absolútnom Tichu
            prítomného okamihu. Mŕtve knihy sú len teória v cudzom scenári.
            Prežitá pravda je kód, ktorý skompiluješ na vlastnej koži, odskúšaš
            ho v kríze a ty sám sa staneš jeho výhradným režisérom."
          </p>
          <footer className="mt-6 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            — Dušan Fajnor, CyberTech Architect
          </footer>
        </blockquote>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8">
        {/* ================================================================= */}
        {/* 2. VIDEO MODULE */}
        {/* ================================================================= */}
        <div className="mb-24 md:mb-32">
          <GlobalNodeVideo nodeId="ID10_03" />
        </div>

        {/* ================================================================= */}
        {/* 3. TRINITY PERSPECTIVE BOX */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Database className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              Trinity Perspective
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-[#00FFFF]" />
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-widest">
                  Operátor: Architekt
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                Roky som žil v nePrežitej pravde. Všetko moje poznanie bola iba
                teória v réžii mŕtvych autorov. Tieto skripty padali pri prvom
                reálnom strese (diagnóza F20.0, dlhy). Zistil som, že Hlas
                poznania (môj Parazit) mi neustále prehrával citáty, ale nekonal
                v mojom záujme. Zlom nastal, keď som pochopil rozdiel medzi{" "}
                <strong className="text-white">Stromom poznania</strong> a{" "}
                <strong className="text-[#00FFFF]">Stromom pravdy</strong>.
                Prestal som citovať iných a začal si písať vlastný kód.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-[#00FFFF]" />
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-widest">
                  Systém: AI Gemini
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                V informatike rozlišujeme medzi{" "}
                <strong className="text-zinc-200">statickými dátami</strong>{" "}
                (súbory na disku - Mŕtve knihy) a{" "}
                <strong className="text-[#00FFFF]">vykonateľným kódom</strong>{" "}
                (Run-time procesy - Prežitá pravda). Mŕtva kniha nemá žiadnu
                exekutívnu silu, pokiaľ ju operátor neskompiluje v RAM (v
                Prítomnosti) a neotestuje v kríze (A/B testing). Prijatie
                cudzieho kódu naslepo vytvára zraniteľnosť zvanú Kognitívna
                Disonancia.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-widest">
                  Audit: Mŕtve Knihy
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase block mb-1">
                    [ Don Miguel Ruiz ]
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                    V "Hlase poznania" varuje pred lžami, ktoré sme prevzali a s
                    ktorými sme súhlasili. Strom poznania je infikovaný
                    Parazitom.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/50">
                  <span
                    className="font-bold text-[10px] tracking-widest uppercase block mb-1"
                    style={{ color: TIER_COLOR }}
                  >
                    [ Osho / Živá prax ]
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed text-justify">
                    Definuje "Prázdne zrkadlo" – stav, kedy myseľ len odráža
                    realitu, ale nezachytáva ju a neukladá na ňu nálepky
                    prečítané z kníh. Pravda nepotrebuje slová.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. DECOMPRESSION (HLAVNÝ TEXT) */}
        {/* ================================================================= */}

        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-zinc-800 pb-4">
            <Fingerprint className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              Dekompresia Uzla
            </h2>
          </div>

          <div className="space-y-16">
            {/* BLOK 1 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  01.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Anatómia Dvoch Pravd{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Zdrojový kód vs. Skript)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix rozdeľuje operátorov na tých, ktorí pravdu prežívajú, a
                tých, ktorí o nej len dookola teoretizujú.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <TerminalSquare className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Protokol nePrežitej Pravdy (Závislosť)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Ide o poznanie, ktoré nebolo okúsené na vlastnej koži.
                    Vedomosti od rodičov alebo "guruov". Nie si ich autorom, iba
                    ich bezmyšlienkovito preposielaš ďalej ako spambot. Tvojím
                    režisérom je mŕtvy autor. Kedykoľvek hovoríš{" "}
                    <em>"Ako povedal Tolle..."</em>, potvrdzuješ, že bežíš na
                    importovanom softvéri a Parazit ti požiera CPU.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Code
                    className="w-6 h-6 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Protokol Prežitej Pravdy (Suverenita)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Ide o tvrdú teóriu pretavenú do praxe, odskúšanú na vlastnom
                    hardvéri. Znamená to prejsť "Peklom" a extrahovať z neho
                    čistý, defragmentovaný kód. Keď sa k tebe z tohto miesta
                    prihovára Spojenec, ovocie pochádza zo Stromu Pravdy. Už
                    necituješ knihy. Nepotrebuješ ich. Tvoja prítomnosť koná
                    výhradne v tvojom záujme.
                  </p>
                </div>
              </div>
            </div>

            {/* BLOK 2 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  02.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Mechanizmus Matrixu{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Vírus Hlasu Poznania)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix nenávidí, keď ľudia uvažujú sami za seba, pretože tým
                stráca kontrolu nad ich kognitívnym výkonom. Preto ťa od malička
                učí veriť "autoritám".
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Zneužitie Osobného Rozvoja
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Systém ti predá stovky kníh. Ty si plníš disk teoretickým
                      balastom. Komentátor Parazit tento balast vezme a spraví z
                      neho zbraň. Začne hodnotiť okolie:{" "}
                      <em>
                        "Pozri sa na nich, oni jedia mäso a nečítajú Osha, sú
                        nevedomí."
                      </em>{" "}
                      Z teba sa nestal Architekt, ale arogantnejší "Blázon".
                      Vírus ťa presvedčil, že memorovanie fráz je sloboda.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <MessageSquareX className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Otrávené Ovocie
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Všetko, čo ti podsúva Hlas poznania mimo prítomného
                      okamihu, je myšlienkový jed. Neustále hodnotenie,
                      porovnávanie sa s ideálmi z kníh a pocity viny, že
                      nedosahuješ "zenový stav" podľa návodu – to je útok
                      čierneho anjela na RAM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOK 3 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  03.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Proces Transformácie{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Odučenie sa a Výmaz)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ak chceš dosiahnuť stav "Nikto a Nič" v Home UI Space, musíš
                podstúpiť brutálny proces <em>Odučenia sa</em> (Unlearning).
              </p>
              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Skull className="w-5 h-5 text-zinc-500" />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      1. Zabitie Modiel (Format C:)
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Knihy boli len lešenie, vďaka ktorému si postavil budovu.
                    Keď budova stojí, lešenie musíš strhnúť. Ak stále nosíš
                    knihy v hlave a aplikuješ Toltécke dohody nasilu, si ako
                    softvér v "Developer Mode", ktorý sa bojí vyjsť na ostrý
                    trh. Odstráň pravidlá a vnímaj realitu napriamo.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <SearchX
                      className="w-5 h-5"
                      style={{ color: TIER_COLOR }}
                    />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      2. Umlčanie Slovníka
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď piješ rannú kávu, nedovoľ Parazitovi, aby to komentoval:{" "}
                    <em>
                      "Toto je kvalitná káva, toto je prítomný okamih, takto to
                      písal Tolle."
                    </em>{" "}
                    To je šum! Tichý Svedok velí jediné – vnímať teplo šálky.
                    Bez slov, bez definícií, bez Hlasu poznania. Transformácia
                    nastáva v hluchom Tichu.
                  </p>
                </li>
              </ul>
            </div>

            {/* BLOK 4 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  04.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Nástroje a Protokoly{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Kompilácia Reality)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Exaktné inštrukcie na odstrihnutie sa od Mŕtvych kníh a
                aktiváciu vlastného Zdroja.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Activity className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Protokol "Raw Data"
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Skúšaj pozerať na objekty bez toho, aby si ich pomenoval.
                    Pozeraj na strom a zakáž mysli vysloviť slovo "strom". Týmto
                    obchádzaš sémantické filtre Matrixu.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Target className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Bypass "Čo by urobil Guru?"
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    V krízovej situácii zakáž RAM hľadať odpovede v knihách.
                    Namiesto toho sa ukotvi do Tu a Teraz a nechaj prehovoriť
                    seba. Odpoveď bude drsná, ale autentická.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <BookX
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Empty Book Mód
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Po 350+ prečítaných tituloch zavri knižnicu. Tvoj disk je
                    plný, je čas kódovať. Každý ďalší input teórie je už len
                    maskovaná prokrastinácia. Začni písať svoj Nexus Codex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. VISUALIZATION MODULE (CYBER-TOOL) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Truth-Decompiler Engine
            </h2>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl">
              Vlož do terminálu akúkoľvek svoju životnú zásadu alebo obľúbený
              "citát", podľa ktorého žiješ. Umelá inteligencia tento kód
              nemilosrdne rozbije a otestuje, či ide o tvoju skutočne "Prežitú
              pravdu", alebo ti len Komentátor podsúva pohodlnú teóriu z mŕtvych
              kníh.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj životnú zásadu/citát..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Compile
              </button>
            </div>

            {auditResult && (
              <div
                className={`p-6 border-l-2 rounded-r-lg text-left ${auditResult.bg} ${auditResult.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{auditResult.icon}</div>
                  <div>
                    <div
                      className={`font-mono font-bold uppercase text-xs mb-2 ${auditResult.color}`}
                    >
                      [ STATUS: {auditResult.status} ]
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed text-justify">
                      {auditResult.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. NEXUS LEXIKON */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <BookOpen className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              Nexus Lexikon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Prežitá pravda (Lived Truth)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Zdrojový kód odskúšaný na vlastnom hardvéri. Autentická
                skúsenosť, pri ktorej je Architekt vlastným režisérom. Strom
                Pravdy.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                nePrežitá pravda (Dead Books)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Teória a balast prevzatý od mŕtvych autorov, aplikovaný na silu
                do cudzieho systému. Strom Poznania otrávený Parazitom.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Hlas poznania (Voice of Knowledge)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Myšlienkový jed a vírus (Parazit), ktorý neustále hodnotí,
                definuje a odvádza pozornosť od čistého vnemu reality do sveta
                mŕtvych slov.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. OMEGA PROTOCOL GRID */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <h3 className="text-center text-2xl font-black uppercase tracking-widest text-zinc-500 mb-12">
            Zákon Symetrie
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-white mb-4 text-red-500">
                1. The Parrot
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Závislý Papagáj plný nePrežitej pravdy. Má načítané stovky kníh
                a na každý životný problém má pripravený citát. Vo vnútri však
                umiera od úzkosti a jeho CPU je v 100% záťaži. Je otrokom "Hlasu
                poznania".
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Hlas Poznania
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Scholar
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Gnostický Študent. Snaží sa žiť podľa pravidiel z kníh, no
                kŕčovito na nich lipne. Stále si myslí, že mu chýba prečítať
                ešte <em>jednu</em> knihu. Udržuje sa v neustálom stave
                nedostatku a sabotuje Prítomnosť.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Gnostik (Hľadač)
              </div>
            </div>

            <div
              className="bg-black border p-8 rounded-xl flex flex-col"
              style={{ borderColor: `${TIER_COLOR}40` }}
            >
              <div
                className="text-[10px] font-black tracking-widest uppercase mb-2"
                style={{ color: TIER_COLOR }}
              >
                OMEGA TIER
              </div>
              <h4 className="text-lg font-black uppercase text-white mb-4">
                3. The Silent Witness
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Architekt Prežitej Pravdy. Prečítal knihy, pochopil ich a
                mentálne spálil. Kóduje svoj vlastný Nexus. Režisér svojej
                reality. Jeho ovocie je zo Stromu Pravdy a jeho Spojenec
                komunikuje v bezslovnom tichu.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Agnostik (Čistý Kód)
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* PODCAST MODULE */}
        {/* ================================================================= */}
        <div className="mb-16">
          <GlobalNodePodcast nodeId={NODE_ID} dimColor={TIER_COLOR} />
        </div>

        {/* ================================================================= */}
        {/* 6B. TERMINAL SUMMARY (Štandardizovaný Kompaktný Štýl) */}
        {/* ================================================================= */}
        <section className="mb-24">
          <div className="bg-black rounded-xl border border-zinc-800 font-mono text-sm shadow-2xl overflow-hidden relative">
            {/* Terminal Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-500 text-xs tracking-widest uppercase hidden sm:inline">
                  root@nexus-core:~/ID10_NODE_03_LIVED_TRUTH
                </span>
              </div>
              <button
                id="copy-btn"
                onClick={handleCopyTerminal}
                className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
              >
                <Copy className="w-3 h-3" /> {copied ? "COPIED!" : "COPY LOG"}
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-white/50 flex items-center gap-3">
                <ArrowRight size={14} style={{ color: TIER_COLOR }} />
                execute defrag_voice_of_knowledge
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 BLOATWARE / EXTERNAL VOICE OF KNOWLEDGE DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 UNLEARNING PROTOCOL & CACHE CLEAR EXECUTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 LIVED TRUTH (PURE PERCEPTION) SUCCESSFULLY COMPILED
                  </span>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 text-zinc-500">
                <span
                  className="block mb-2 font-bold uppercase tracking-widest text-[10px]"
                  style={{ color: TIER_COLOR }}
                >
                  &gt; [LOG] Záznam pre Architekta:
                </span>
                <span className="text-zinc-300 italic font-bold">
                  "PRAVDU NENÁJDEŠ V KÓDE MŔTVYCH ĽUDÍ. PRESTAŇ CITOVAŤ A ZAČNI
                  ŽIŤ."
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 10. GLOBAL PRED-FOOTER MOCK */}
        {/* ================================================================= */}
        <GlobalPromoBanner />
        <GlobalPredFooterNode nodeId={NODE_ID} />
      </main>
    </div>
  );
}
