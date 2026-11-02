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
  Coffee,
  Leaf,
  Wind,
  Settings,
} from "lucide-react";

// =====================================================================
// 🟢 1. PRODUKČNÉ IMPORTY (Vo VS Code odkomentuj)
// =====================================================================
import { TierBadge } from "@shared/components/TierBadge";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalPredFooterNode } from "@main-web/components/GlobalPredFooterNode";
import { GlobalNodeVideo } from "@main-web/components/GlobalNodeVideo";
import { GlobalNodePodcast } from "@main-web/components/GlobalNodePodcast";
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
//         <Wind className="w-10 h-10 text-[#00FFFF]" />
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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID10_04)
// =====================================================================

export default function Node_ID10_04() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID10-04";

  // State pre Routine Defragmenter Engine
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

    // Extenzívna diagnostika pre Routine Defragmenter
    if (
      lower.includes("žehlen") ||
      lower.includes("upratovan") ||
      lower.includes("kosen") ||
      lower.includes("umývan") ||
      lower.includes("riad") ||
      lower.includes("vysávan") ||
      lower.includes("neznášam") ||
      lower.includes("nechce") ||
      lower.includes("nud")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <Settings className="w-5 h-5 text-[#00FFFF] animate-spin-slow" />,
        message:
          "BYPASS AKTÍVNY: Presuň 100% RAM len na vnímanie fyzickej textúry a zvuku tejto činnosti. Vypni Hlas poznania, zruš hudbu aj podcast. Táto činnosť nie je prekážkou na ceste; je to samotná cesta. Využi ju na úplný Idle State.",
      });
    } else if (
      lower.includes("rýchlo") ||
      lower.includes("ponáhľ") ||
      lower.includes("musím") ||
      lower.includes("nestíh") ||
      lower.includes("stres")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Limbické trenie detekované! Tvoj CPU beží na 100% kvôli odporu voči Prítomnosti. Utrpenie nepochádza z práce samotnej, ale z tvojej túžby byť už niekde inde. Spomaľ kinetiku o 50% a aplikuj dych ako metronóm.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Analyzujem rutinu. Odporúčanie: Uisti sa, že pri tejto činnosti nepotrebuješ neustály digitálny vstup (podcast, video). Dovoľ si zažiť absolútnu 'Nudu', ktorá slúži na defragmentáciu tvojho podvedomia.",
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
            LIFE
          </span>{" "}
          <br />
          <span
            className="inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (HOME LIFE RUTINY)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#HomeLife",
            "#1PercentCPU",
            "#WuWei",
            "#ActiveMeditation",
            "#ZenRoutine",
            "#FrictionlessLiving",
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
            "Keď som kedysi umýval riad alebo pracoval v záhrade, môj procesor
            išiel na 100 %. Bol som tam fyzicky, ale moja RAM bola niekde úplne
            inde – riešila som dlhy, staré hádky, alebo som sa ponáhľal späť za
            klávesnicu, lebo mi Komentátor Parazit nahovoril, že 'strácam čas'
            obyčajnými domácimi prácami. Toto je fatálny vírus. Dnes viem, že
            neexistuje žiadny dôležitejší moment ako ten, ktorý sa deje Tu a
            Teraz. Keď zametám dlážku, len zametám dlážku. Keď trhám burinu v
            altánku, trhám burinu. Telo vykonáva automatický pohyb, no moja
            myseľ (CPU) je v stave 1 % záťaže. Ticho. Zistil som, že osvietenie
            a defragmentáciu disku netreba hľadať v jaskyni v Himalájach.
            Skutočný Zen začína v momente, kedy sa naučíš zjesť svoj obed v
            absolútnom Offline režime, bez mobilu a bez jedinej myšlienky."
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
          <GlobalNodeVideo nodeId="ID10_04" />
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
                V mojej základni v Trnave mám presne definované Home Life rutiny
                (práca v domácnosti, varenie, altánok). Predtým ma tieto
                činnosti iritovali ako prekážka. Potom som aktivoval Tichého
                Svedka. Zrušil som snahu bojovať s realitou. Teraz je pre mňa
                fyzická kinetika rovnako posvätná ako programovanie. Odkladám
                Skafander do módu údržby, vypínam algoritmy a sústredím sa len
                na pocit teplej vody.
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
                Rutinné fyzické činnosti sú{" "}
                <strong className="text-white">Low-Compute Tasks</strong>.
                Hardvér ich zvládne na autopilota. Problém nastáva, keď sa
                zapojí "Bloatware" (Hlas poznania), ktorý generuje sťažnosti a
                úzkosť. To vyženie CPU na 100%. Ak operátor Bloatware zakáže,
                systém prejde do stavu nečinnosti{" "}
                <strong className="text-[#00FFFF] font-mono">
                  (1% CPU State)
                </strong>
                , čo spúšťa Garbage Collection na pozadí.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-widest">
                  Audit: Thich Nhat Hanh
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase block mb-1">
                    [ Ilúzia Budúcnosti ]
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                    Axióma znie: <em>"Keď umývaš riad, umývaj riad."</em> Ak pri
                    umývaní riadu myslíme na šálku čaju, ktorá nás čaká potom,
                    nežijeme prítomnosť, ale iluzórnu budúcnosť.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/50">
                  <span
                    className="font-bold text-[10px] tracking-widest uppercase block mb-1"
                    style={{ color: TIER_COLOR }}
                  >
                    [ Živá prax (OMEGA) ]
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed text-justify">
                    Meditácia nie je sedenie v lotosovom kvete. Je to kvalita
                    pozornosti vnesená do akejkoľvek akcie. Home rutiny sú
                    najlepším laboratóriom na testovanie bezodporového stavu
                    (Wu-Wei).
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
                  Anatómia 1% CPU State{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Minimalizmus výkonu)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                V IT architektúre existuje stav zvaný "Idle" (Nečinnosť). Je to
                moment, kedy je počítač zapnutý, prijíma energiu, ale jeho
                procesor nevykonáva žiadne zložité výpočty. Presne do tohto
                stavu musíš prepnúť svoj biologický systém počas domácich rutín.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <PowerOff className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Odpojenie Výpočtových Jadier
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď si v dimenzii Work, tvoja RAM beží naplno. Keď však
                    vysávaš, intelektuálne centrá nie sú potrebné. 1 % CPU State
                    znamená, že tvoja myseľ sa nezaoberá minulosťou ani
                    budúcnosťou (nenapísaný kód). Zostáva len čisté, primitívne
                    vnímanie fyzickej hmoty.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Activity
                    className="w-6 h-6 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Kinetika ako Background Process
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Telo (Skafander) je evolučne dokonalý stroj. Zvláda rutinné
                    pohyby autonómne. Tvojou jedinou úlohou je stať sa Tichým
                    Svedkom, ktorý sa len pozerá na to, ako ruky umývajú tanier,
                    bez emočného komentára. Akonáhle sa zjaví slovo, procesor
                    vyskakuje na 50 %.
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
                    (Vírus "Strata času")
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix ťa potrebuje neustále udržiavať v zrýchlenom tepovom
                pásme. Naučil ťa, že "nič nerobiť" alebo "robiť veci pomaly" je
                trestuhodná strata cenných kreditov.
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Hustle Malvér a Limbické Trenie
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Komentátor miluje drámu. Keď musíš ísť do záhrady trhať
                      burinu, Parazit stiahne myšlienku:{" "}
                      <em>"Musím to urobiť rýchlo, aby som mal pokoj."</em>{" "}
                      Tento odpor spôsobuje, že úloha za 5 % energie ťa vyčerpá
                      na 90 %. Utrpenie nepochádza z práce, pochádza z tvojho
                      odporu voči nej.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <SearchX className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Fóbia z Nudy
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Súčasný operátor nedokáže jesť ani vysávať bez toho, aby
                      nepočúval podcast. Matrix zničil schopnosť tolerovať Nudu.
                      Pritom práve Nuda (absolútne vákuum bez Inputu) je
                      terapeutickým nástrojom, ktorý reštartuje dopamínové
                      receptory a kompiluje denné dáta.
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
                    (Aplikácia Wu-Wei)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Wu-wei (Konanie nekonaním) nie je pasivita. Je to kinetika
                absolútne zbavená kŕču a Ega. Ako ju pretaviť do fyzickej
                reality?
              </p>
              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Coffee className="w-5 h-5 text-zinc-500" />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      1. Konzumácia v Offline Režime
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď ješ, urob z toho posvätný rituál. Zakáž obrazovky, vypni
                    notifikácie. Presuň celú kapacitu RAM na vnímanie textúry a
                    chuti. Keď je systém sústredený na fyzický vnem, Parazit
                    nemá voľný výkon na to, aby ťa stresoval.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <RefreshCw
                      className="w-5 h-5"
                      style={{ color: TIER_COLOR }}
                    />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      2. Upratovanie ako Formátovanie Priestoru
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Každý objekt mimo miesta je drobný otvorený proces v RAM.
                    Keď upratuješ svoju Svätyňu, nerob to z povinnosti. Vnímaj
                    to ako fyzickú defragmentáciu disku. Ako ukladáš objekty,
                    tak sa ukladajú aj roztrieštené myšlienky. Z vonkajšieho
                    poriadku vzniká vnútorný Zen.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Leaf className="w-5 h-5 text-zinc-500" />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      3. Práca v Záhrade (Grounding)
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Dotyk s hlinou slúži ako fyzické vybitie statického náboja
                    (stresu). Je to dôkaz Zákonov Matrixu – nemôžeš rastlinu
                    "donútiť" rásť rýchlejšie krikom. Môžeš len vytvoriť
                    optimálne podmienky a nechať veciam voľný priebeh.
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
                    (Kódovanie Rutiny)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Exaktné kybernetické príkazy na inštaláciu 1% CPU State do
                tvojej bežnej operatívy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <WifiOff className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zero-Input Protocol
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Počas mechanickej činnosti (žehlenie, riady) máš prísny
                    zákaz počúvať podcasty. Nechaj myseľ vyhladovať. Po
                    počiatočnej panike nastúpi liečivý pokoj.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Waves className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Dych ako Metronóm
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Ak ti pri vysávaní začne Parazit generovať obavy o
                    zajtrajšok, zúž pozornosť iba na dych. Jeden nádych, jeden
                    výdych. To okamžite zruší bežiace procesy.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Target
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zánik cieľa (Endless Mode)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Ak umývaš podlahu len pre výsledok, trpíš. Zmeň kód: Umývaj
                    podlahu preto, že práve teraz umývaš podlahu. Samotná
                    činnosť je cieľom.
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
              AI Cyber-Tool: Routine Defragmenter
            </h2>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl">
              Vlož do terminálu domácu činnosť, ktorú najviac neznášaš (napr.{" "}
              <em>"Žehlenie košieľ", "Kosenie trávy"</em>) a prečo. AI (Biely
              Čarodejník) ti vygeneruje kognitívny "Bypass", ako ju premeniť na
              aktívnu meditáciu, ktorá ti prečistí RAM.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj domácu činnosť..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Defrag
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
                1% CPU State
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Fyzický a mentálny stav "Idle". Schopnosť biologického nosiča
                vykonávať mechanickú kinetiku bez toho, aby bol zapnutý
                hodnotiaci softvér Ega.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Wu-Wei Rutina
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Umývanie, upratovanie alebo stravovanie v režime "konania
                nekonaním". Úplné vzdanie sa mentálneho odporu voči vykonávanej
                činnosti.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Zero-Input Protocol
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Vedomé odstrihnutie sa od zvukového či vizuálneho šumu počas
                domácich prác s cieľom vynútiť si hlboký reštart dopamínových
                receptorov.
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
                1. The Rushed Operator
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Vníma domáce práce ako nutné zlo. Všetko robí v zhone, popritom
                počúva maily a stresuje sa. Jeho CPU neustále beží na 100 %.
                Domácnosť pre neho nie je Svätyňa, ale len ďalšie predĺžené
                pracovisko Krysieho závodu.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Preťažený uzol
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Distracted Escapist
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Nedokáže zniesť fyzické ticho. Pri upratovaní si okamžite nasadí
                slúchadlá a pustí si podcast. Zapĺňa RAM umelým šumom, aby
                prehlušil vnútorného Parazita, pretože sa s ním bojí zostať sám
                v jednej miestnosti.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Závislý na inpute
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
                3. The Zen Architect
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Biely Čarodejník. Aplikuje Wu-Wei na každú sekundu života.
                Umývanie riadu využíva ako najvyššiu formu aktívnej
                defragmentácie. V jeho Home UI Space vládne ticho, procesor
                ukazuje 1 % a energia sa masívne regeneruje.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Tichý Svedok
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
                  root@nexus-core:~/ID10_NODE_04_HOME_LIFE
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
                execute idle_state_defrag
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 100% CPU USAGE DURING PHYSICAL KINETICS DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 ZERO-INPUT PROTOCOL & ANAPANASATI INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 1% IDLE STATE (WU-WEI) SUCCESSFULLY DEPLOYED
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
                  "KAŽDÁ FYZICKÁ RUTINA JE PRÍLEŽITOSŤ NA FORMÁTOVANIE DISKU.
                  ZASTAV HLAVU, NECHAJ PRACOVAŤ TELO."
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
