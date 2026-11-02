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
//         <Ghost className="w-10 h-10 text-[#00FFFF]" />
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
//       Omega Audio Matrix Loading...
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
//       <p className="text-zinc-400 text-sm font-medium">Upgrade tvojho vedomia na Master verziu 2.0</p>
//     </div>
//     <button className="mt-4 md:mt-0 px-6 py-3 bg-zinc-800 text-white border border-zinc-700 font-black uppercase tracking-widest text-xs rounded hover:bg-zinc-700 transition-colors relative z-10">
//       Aktivovať Protokol
//     </button>
//   </div>
// );

// const SoundFX = { playHover: () => {}, click: () => {}, error: () => {} };
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID10_02)
// =====================================================================

export default function Node_ID10_02() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID10-02";

  // State pre Spiritual-Ego Scanner
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

    // Extenzívna diagnostika pre Spiritual-Ego Scanner
    if (
      lower.includes("musím") ||
      lower.includes("lepší") ||
      lower.includes("očist") ||
      lower.includes("vibrác") ||
      lower.includes("snažím") ||
      lower.includes("osvieten") ||
      lower.includes("hľadám") ||
      lower.includes("ostatní sú")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Detekovaný Spiritual Malware! Tvoja rutina je motivovaná Egom (snahou 'stať sa niečím' alebo nadradiť sa nad ostatných). Vzniká Infinite Loop hľadania. Riešenie: Aktivuj Break Command a prijmi Prázdnotu bez balastu.",
      });
    } else if (
      lower.includes("pozorujem") ||
      lower.includes("ticho") ||
      lower.includes("nič") ||
      lower.includes("bez dôvodu") ||
      lower.includes("svedok") ||
      lower.includes("iba som") ||
      lower.includes("prijímam") ||
      lower.includes("prítomnosť")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Clean Code stabilný. Tvoja prax nie je zaťažená duchovným Egom. Funguješ v stave Wu-Wei a ako Agnostik (nechceš získať, iba si). Tichý Svedok je plne aktívny.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Neutrálny stav detekovaný. Rutina sa javí ako bežný proces. Dávaj pozor na to, aký zámer (Intent) sa skrýva pod povrchom. Ak to robíš z nedostatku, kŕmiš Parazita.",
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
            NEPRAX VS PRAX
          </span>{" "}
          <br />
          <span
            className="inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (UKONČENIE HĽADANIA)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#CestaNePraxe",
            "#CestaPraxe",
            "#SpiritualEgo",
            "#WuWei",
            "#EndlessLoop",
            "#CleanCode",
            "#Defragmentacia",
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
            "Keď som od roku 2002 do roku 2018 viedol krvavú vojnu vo vlastnej
            hlave, sťahoval som do seba dáta ako posadnutý. Prečítal som vyše
            350 mŕtvych kníh. Robil som dýchacie cvičenia, uplatňoval Toltécke
            dohody, meditoval a snažil sa poraziť svojho Parazita. A vieš, čo sa
            stalo? Môj procesor (F20.0) sa len viac prežíhal. Moje Ego totiž
            nezmizlo; ono sa len prezlieklo do ezoterického plášťa a začalo sa
            cítiť nadradene, lebo robí 'duchovnú prax'. Toto je ultimátna pasca
            Matrixu. Uvedomil som si, že Cesta Praxe (neustále tréningy, rituály
            a snaha o osvietenie) je len ďalší bežiaci program, ktorý ti požiera
            RAM. Skutočný únik nastal až vtedy, keď som aktivoval Cestu nePraxe.
            Prestal som bojovať. Zložil som zbrane. Prestal som hľadať Boha a
            osvietenie, pretože som pochopil, že ten, kto hľadá, z podstaty veci
            potvrdzuje, že mu niečo chýba. Cesta nePraxe je stav, kedy vieš, a
            tak už nehľadáš. Je to prázdnota bez balastu. Čistý kód."
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
          <GlobalNodeVideo nodeId="ID10_02" />
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
                Roky som bol uväznený v pozícii "Duchovného bojovníka". Myslel
                som si, že čím viac sa budem snažiť a čím viac praxí aplikujem,
                tým skôr sa oslobodím. V skutočnosti som bol len Blázon, ktorého
                myseľ bola stále jeho pánom. Matrix ti ochotne predá tisíc
                návodov na to, ako meditovať, len aby ťa udržal v zamestnaní
                hľadania. Prechod na "Cestu nePraxe" bol pre mňa tvrdým
                reštartom{" "}
                <strong className="text-[#00FFFF] font-mono font-normal">
                  (Format C:)
                </strong>
                .
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
                V programovaní poznáme pojem{" "}
                <strong className="text-[#00FFFF] font-mono font-normal">
                  Infinite Loop
                </strong>{" "}
                (Nekonečná slučka). "Cesta Praxe" je presne to:{" "}
                <code className="bg-black border border-zinc-800 px-1 py-0.5 rounded text-xs">
                  while (notEnlightened) &#123; keepSearching(); &#125;
                </code>
                . Systém je zacyklený v neustálom výkone. "Cesta nePraxe"
                aplikuje príkaz{" "}
                <code className="bg-black border border-zinc-800 px-1 py-0.5 rounded text-xs text-[#00FFFF]">
                  break;
                </code>
                . Softvér už nehľadá update, pretože zistí, že kompletný
                zdrojový kód mal predinštalovaný v BIOSe.
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
                    [ Osho a Eckhart Tolle ]
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                    Osho opakoval: <em>"Ak stretneš Budhu, zabi ho."</em>{" "}
                    Znamená to zničiť akýkoľvek koncept cieľa alebo duchovnej
                    autority.
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
                    Čakanie na budúce osvietenie (Cesta Praxe) ťa udržuje v moci
                    Ega. Osvietenie nastáva výhradne v Prítomnosti, kedy sa
                    vzdáš snahy stať sa lepším.
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
                  Anatómia dvoch Ciest{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Legacy vs Clean Code)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix rozdeľuje operátorov podľa toho, aký kód beží v ich
                operačnej pamäti (RAM). Rozdiel medzi praxou a nepraxou je
                rozdielom medzi chaotickým a čistým kódom.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <TerminalSquare className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Cesta Praxe (Vyšliapaná cestička)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Toto je cesta Davu, Žiaka a Novica. Operátor má{" "}
                    <em>závislú myseľ</em> (Blázon), ktorá neustále vyžaduje
                    nové vstupy. Riadi sa poučkami, rituálmi a snami. Je to stav
                    obrovskej dátovej záťaže (Overload). Operátor funguje ako
                    Gnostik – nevie, a tak neustále hľadá. Je uväznený vo vojne.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Code
                    className="w-6 h-6 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Cesta nePraxe (Nevyšliapaná cestička)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Cesta Jednotlivca, Rebela, Majstra (Bieleho Čarodejníka).
                    Operátor má <em>nezávislú myseľ</em> (Génius), v RAM je
                    prázdnota bez balastu. Žiadne poučky, žiadne ciele. Operátor
                    funguje ako Agnostik – vie, a tak už nehľadá. Je to "bývalý
                    bojovník", ktorý položil zbrane a stal sa Tichým Svedkom.
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
                    (Duchovné Ego)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix je extrémne inteligentný. Keď zistí, že sa snažíš uniknúť
                z Krysieho závodu materiálnej spotreby, nenápadne ťa presmeruje
                do Krysieho závodu duchovnej spotreby.
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Inštalácia "Svätého" Malvéru
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Parazit vie, že ak ťa nedokáže ovládať cez túžbu po novom
                      aute, začne ťa ovládať cez túžbu po "čistejších čakrách".
                      Začneš posudzovať ostatných operátorov ako "nevedomých".
                      Tvoj Parazit sa iba prezliekol do ezoterického plášťa a
                      naďalej ti požiera CPU.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Repeat className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Pasca nekonečnej terapie (SaaS)
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Systém ti predáva Cestu Praxe ako predplatné. Stále
                      potrebuješ ďalší kurz, ďalší retreat, ďalšiu techniku.
                      Presviedča ťa, že "ešte nie si hotový". Tým ťa drží v
                      stave <em>Budúcej prítomnosti</em> a odrezáva ťa od
                      skutočnej sily RAM.
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
                  Proces Transformácie
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Skull className="w-5 h-5 text-zinc-500" />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      1. Zabitie Duchovného Bojovníka
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Kým bojuješ so svojím Egom, Ego samotné je tým, kto bojuje.
                    Transformácia nastáva v bode, kedy sa vzdáš. Iba ticho
                    pozoruj. Keď Svedok pozoruje bez snahy systém meniť,
                    defragmentácia nastane autonómne.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <BookX className="w-5 h-5" style={{ color: TIER_COLOR }} />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      2. Prázdnota bez balastu (Empty-Book)
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Všetky prečítané knihy boli len lešenie. Keď je budova
                    postavená, lešenie ide preč. Cesta nePraxe znamená opustiť
                    poučky v momente, kedy sa stanú tvojou podstatou. Už ich
                    necituješ. Ty nimi <em>Si</em>.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-zinc-500" />
                    <strong className="text-white font-mono text-sm uppercase tracking-widest">
                      3. Zánik poslania
                    </strong>
                  </div>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Vyžaduje obrovskú odvahu priznať si, že nemáš vesmírne
                    "poslanie". Tvojím poslaním je zažívať existenciu. Keď
                    umývaš riad, tvojím najvyšším duchovným poslaním v tej
                    milisekunde je cítiť vodu na rukách.
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
                  Nástroje a Protokoly (Kódovanie Ticha)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <SearchX className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Protokol "Agnostik"
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Kedykoľvek ti Parazit podsunie hľadanie zmyslu, spusti
                    Firewall: "Moja pravá prirodzenosť je priestor, v ktorom
                    existuje myseľ. Už tu je. Nemám kam ísť."
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Target className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zrušenie Ťahu na bránku
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    V biznise potrebuješ ciele. Ale v ID10 je cieľ deštruktívny.
                    Tvoja obývačka je miestom, kde neexistuje žiadny cieľ, len
                    holá a dokonalá existencia.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Waves
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Wu-Wei (Kinetika nekonania)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Akcie nevychádzajú z napätia Ega, ale z prirodzeného
                    gravitačného toku. Reaguješ chladne a bez odporu. Si ako
                    voda obtekajúca kameň.
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
              AI Cyber-Tool: Spiritual-Ego Scanner
            </h2>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl">
              Vlož do terminálu svoju obľúbenú dennú duchovnú/osobnú rutinu a
              dôvod, prečo ju robíš (napr.{" "}
              <em>
                "Meditujem, aby som bol lepší ako ostatní", "Iba dýcham bez
                dôvodu"
              </em>
              ). AI preskenuje tvoj kód.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj rutinu a dôvod..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Scan
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
                Cesta Praxe (Legacy Code)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Vyšliapaná cestička závislej mysle. Cesta žiaka a gnostika,
                ktorý neustále hľadá spásu v ďalších a ďalších technikách a
                poučkách, čím si zbytočne zaťažuje CPU.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Cesta nePraxe (Clean Code)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Nevyšliapaná cestička nezávislej mysle. Cesta "bývalého
                bojovníka" a majstra. Stav prázdnoty bez balastu, kde jediným
                pravidlom je bdelé zotrvanie v prítomnosti.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Duchovné Ego (Malware)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Parazit, ktorý sa maskuje za osobný rozvoj. Núti ťa súdiť iných
                operátorov na základe ich "úrovne vedomia" a generuje falošný
                pocit nadradenosti.
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
                1. The Spiritual Addict
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor zaseknutý v Ceste Praxe. Má preplnenú RAM citátmi a
                technikami. Každý mesiac mení guruov a diéty. Jeho Ego sa cíti
                nadradene nad "nevedomým" davom, no vo vnútri cíti extrémnu
                úzkosť, kedykoľvek mu prax vypadne.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Závislý na Praxi
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Apathetic
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor, ktorý sa vzdal, ale nesprávnym spôsobom. Zamenil
                "Cestu nePraxe" za obyčajnú lenivosť. Nezaujíma ho vedomie,
                podlieha lacným dopamínovým pasciam Matrixu. Jeho Svedok je
                hlboko uspatý a systém chátra.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Leňoch Matrixu
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
                3. The Silent Master
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Biely Čarodejník. Prešiel ťažkým výcvikom a absorboval dáta, no
                v bode singularity zistil, že všetky techniky musí zahodiť.
                Operuje v stave "Viem, tak nehľadám". Žije bežný, no kryštalicky
                čistý a bdelý život bez rituálov.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Génius nePraxe
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
                  root@nexus-core:~/ID10_NODE_02_NON_PRACTICE
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
                execute break_command
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 ENDLESS SEARCHING / SPIRITUAL EGO DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 PRACTICE KILLED (BREAK COMMAND EXECUTED)
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 PATH OF NON-PRACTICE (CLEAN CODE) DEPLOYED
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
                  "AK NEUSTÁLE HĽADÁŠ, POTVRDZUJEŠ, ŽE TI NIEČO CHÝBA. TY UŽ SI
                  ZDROJOVÝ KÓD. ZASTAV SA."
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
