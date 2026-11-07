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
  BatteryCharging,
  Wallet,
  Coins,
  ListX,
  Eraser,
  Hourglass,
  FileX,
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

// const GlobalNodeVideo = ({ nodeId, dimColor }) => (
//   <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 font-mono text-sm relative overflow-hidden group">
//     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
//     <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
//     <div className="flex flex-col items-center gap-4 z-10">
//       <div className="w-20 h-20 rounded-full bg-black/50 border border-[#00FFFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
//         <Hourglass className="w-10 h-10 text-[#00FFFF]" />
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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID10_06)
// =====================================================================

export default function Node_ID10_06() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID10-06";

  // State pre Wu-Wei Scanner
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

    // Extenzívna diagnostika pre Wu-Wei Scanner
    if (
      lower.includes("musím") ||
      lower.includes("dokončiť") ||
      lower.includes("prerobiť") ||
      lower.includes("produktívn") ||
      lower.includes("zaostávam") ||
      lower.includes("knihu") ||
      lower.includes("upratať celý") ||
      lower.includes("rýchlo") ||
      lower.includes("naplánova")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Ransomware Ega detekovaný! Toto nie je projekt, toto je strach z prázdnoty. Tvoj procesor beží naplno len preto, aby prehlušil ticho. Bypass: Okamžite zruš tento cieľ. Dovoľ si aspoň na hodinu absolútne nič nerobiť a sleduj, ako systém začne panikáriť, než sa upokojí.",
      });
    } else if (
      lower.includes("nič") ||
      lower.includes("sedím") ||
      lower.includes("dýcham") ||
      lower.includes("pozorujem") ||
      lower.includes("voľný priebeh") ||
      lower.includes("kávu") ||
      lower.includes("relax") ||
      lower.includes("bez cieľa")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Wu-Wei Flow potvrdený. Idle State je aktívny. Tvoj systém neplánuje a netlačí na realitu. V tomto vákuu sa spúšťa Auto-Healing (Sebaopravný mechanizmus) tvojho podvedomia. Zostaň v tomto kóde čo najdlhšie.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Činnosť detekovaná. Odporúčanie: Aplikuj 'Read-Only' mód. Zruš akékoľvek očakávania spojené s výsledkom tejto činnosti a len buď jej tichým pozorovateľom. Nechaj Prítomnosť, nech sa skompiluje sama.",
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
            PROJEKTY
          </span>{" "}
          <br />
          <span
            className="inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (HOME PROJEKTY)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#WuWei",
            "#ZeroTaskMode",
            "#OducenieSa",
            "#AutoHealing",
            "#IdleState",
            "#NonIdentityCore",
            "#TichySvedok",
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
            "Matrix ťa naprogramoval jedným z najdeštruktívnejších vírusov:
            ilúziou, že tvoja hodnota sa meria tvojou produktivitou. Ak nič
            nerobíš, si 'zbytočný'. Preto si ľudia aj domov, do svojej Svätyne,
            neustále ťahajú nové projekty – rekonštruujú, maľujú, organizujú,
            len aby nemuseli zostať sami so sebou v tichu. Keď som budoval OS
            Genesis (ID04), môj procesor išiel na maximum. Ale keď som pochopil
            dimenziu ID10 (Home UI Space), zaviedol som radikálny škrt. V mojej
            izbe a v altánku neexistujú žiadne ciele. Mojím jediným,
            najzložitejším a najdôležitejším projektom v tomto priestore je
            Odučenie sa – nerobiť absolútne nič a nechať veciam voľný priebeh.
            Zistil som, že najväčšia mágia (Wu-wei) nastáva vtedy, keď prestanem
            do reality rýpať, odpojím kód a nechám Prítomnosť, nech sa
            skompiluje sama."
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
          <GlobalNodeVideo nodeId="ID10_06" dimColor={TIER_COLOR} />
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
                Roky som trpel utkvelou predstavou, že musím neustále niečo
                "vylepšovať". Ak som neštudoval kód, cítil som výčitky od
                Parazita. Prelom prišiel, keď som naformátoval tento prístup.
                Domov (ID10) je pre mňa teraz zónou{" "}
                <strong className="text-white">Zero-Task</strong>. Keď si sadnem
                v altánku s kávou, mojím projektom nie je "byť lepším človekom".
                Mojím projektom je iba vnímať chuť kávy. Odučil som sa potrebe
                všetko riadiť. V tomto absolútnom vákuu sa mi Skafander
                regeneruje stokrát rýchlejšie.
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
                V architektúre OS existuje{" "}
                <strong className="text-[#00FFFF] font-mono font-normal">
                  Idle State
                </strong>
                . Keď procesor nemá priradené úlohy (Projekty), nespí. Spúšťa
                kritické procesy na pozadí: <em>Garbage Collection</em>,
                uvoľňovanie RAM a chladenie jadier. Ak operátor nedovolí systému
                vstúpiť do Idle State, systém sa zahltí zostatkovým kódom a
                nasleduje System Crash. Wu-wei je inštrukcia na povolenie
                Auto-Healing (seba-opravných) procesov.
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
                    [ Lao-c’ ]
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                    V Tao Te Ťing definoval princíp Wu-wei (konanie nekonaním)
                    ako najvyššiu formu majstrovstva. Príroda neplánuje,
                    netlačí, a predsa je všetko hotové.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/50">
                  <span
                    className="font-bold text-[10px] tracking-widest uppercase block mb-1"
                    style={{ color: TIER_COLOR }}
                  >
                    [ Osho (OMEGA) ]
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed text-justify">
                    <em>
                      "Sedím ticho, nerobím nič, jar prichádza a tráva rastie
                      sama."
                    </em>{" "}
                    Úzkosť pochádza z Ega, ktoré verí, že udržuje svet v chode.
                    Svedok vie, že svet beží aj bez jeho zásahov.
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
                  Anatómia Projektu "Nič"{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Zero-Task Architecture)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                V Matrixe sa slovo "projekt" spája so stavbou, plánovaním a
                vyhodnocovaním. V dimenzii ID10 má toto slovo opačnú polaritu.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <ListX className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Vymazanie cieľa (Goal-Deletion)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Klasický projekt má začiatok a koniec (Deadline). V Home UI
                    Space neexistuje časová os. Ak ideš na prechádzku do prírody
                    s cieľom urobiť 10 000 krokov pre zdravie, práve si
                    prechádzku zmenil na prácu (Work UI). Ak však ideš von len
                    preto, aby si dal jednu nohu pred druhú, aktivoval si
                    Wu-wei.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Eraser
                    className="w-6 h-6 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Umenie Odučenia sa (Unlearning)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Škola a korporát ťa naučili, ako nasávať dáta a písať kód.
                    Ale nenaučili ťa, ako tie dáta mazať. Najdôležitejší Home
                    Projekt je <em>Odučenie sa</em>. Znamená to vedomé
                    strhávanie pravidiel ("ako by som mal žiť", "čo by som mal v
                    nedeľu robiť"), až kým nezostane len holá, tichá prítomnosť
                    (Tabula Rasa).
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
                    (Fóbia z prázdnoty)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Prečo je pre bežného operátora (Z.O.M.B.I.E.) také desivé
                nerobiť nič?
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Útek pred Parazitom
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Akonáhle človek doma vypne TV, odloží mobil a zruší všetky
                      úlohy, v jeho RAM sa okamžite naštartuje Komentátor
                      Parazit. Začne vyťahovať Error logy (minulé zlyhania) a
                      strachy z budúcnosti. Ľudia radšej začnú v sobotu ráno
                      búrať kúpeľňu alebo upratovať garáž, len aby tento Hlas
                      Poznania prehlušili fyzickou únavou.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Repeat className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Toxicita neustáleho Sebarozvoja
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Matrix inteligentne vytvoril pascu aj pre tých, ktorí už
                      nehľadajú materiálne projekty. Podsunie im "Duchovné
                      projekty". Operátor sa doma snaží "nasilu" meditovať 3
                      hodiny a čítať knihy. Ego len vymenilo oblek, ale procesor
                      je stále preťažený na 100 %. Je to len ďalšia vyšliapaná
                      cestička plná utrpenia.
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
                    (Kódovanie Voľného Priebehu)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako fyzicky vykonať tento najťažší "ne-projekt" vo tvojom Home
                UI Space?
              </p>
              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Zrušenie Kontrolóra (Drop Root Access)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    V biznise (ID04) držíš pevne kormidlo. Doma ho musíš pustiť.
                    Ak máš nevyriešený problém vo vzťahoch, prestaň ho
                    analyzovať. Vypni diagnostické programy. Nechaj veciam voľný
                    priebeh a zistíš, že tvoje podvedomie (Backend) vyrieši
                    tento Error v tichosti za teba, zatiaľ čo ty spíš.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Povolenie Nudy (Boring Protocol)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Musíš prejsť abstinenčným príznakom z nedostatku dopamínu.
                    Zariaď si nedeľu tak, že do nej nezapíšeš ani jeden jediný
                    plán. Ak sa objaví nuda, neprebíjaj ju. Zostaň v nej. Nuda
                    je len čakáreň pred bránou do hlbokého, nezávislého Bytia.
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
                    (Hard-coding the Void)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Exaktné systémové inštrukcie na implementáciu Ničoty.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <FileX className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    "Blank Page" Mód
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Všetky tvoje To-Do Listy sa musia zastaviť pred prahom
                    tvojej Svätyne. Obývačka nesmie obsahovať žiadnu tabuľu s
                    "Visions and Goals".
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Eye className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Read-Only Režim
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Kedykoľvek pristihneš Skafander, že sa doma niekam ponáhľa,
                    aplikuj Read-Only mód. Zastav pohyb. Zahoď cieľ a vráť sa k
                    prítomnosti.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <PowerOff
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Kill-Switch Simulácia
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Keď ťa Parazit tlačí do domáceho projektu, opýtaj sa:{" "}
                    <em>"Čo sa reálne stane, ak to neurobím?"</em> Nestane sa
                    nič. Systém beží ďalej a ty si ušetril RAM.
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
              AI Cyber-Tool: Wu-Wei Scanner
            </h2>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl">
              Vlož do terminálu "domáci projekt" alebo "úlohu", do ktorej sa
              práve doma nútiš (napr.{" "}
              <em>"Musím dočítať túto knihu, lebo inak zaostávam"</em>). AI
              odhalí, či je to Flow, alebo len ďalší "Ransomware" tvojho Ega.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj domácu úlohu..."
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
                Wu-Wei (Konanie nekonaním)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Algoritmus plynulosti. Stav, kedy Architekt vypne všetky
                rezistentné programy a nechá reality bežať podľa ich vlastného
                kódu bez zasahovania.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Zero-Task Mode
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Fyzický aj mentálny stav v Home UI Space, pri ktorom má operátor
                vyslovene zakázané plánovať, tvoriť a analyzovať budúcnosť.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Auto-Healing
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Defragmentačný proces v podvedomí, ktorý sa spustí výhradne
                vtedy, keď ego prestane nasilu "opravovať" svoj život a odstúpi
                do pozície Svedka.
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
                1. The Restless Builder
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Vníma domov len ako ďalšie pracovisko. Po práci si okamžite
                hľadá projekty doma (prerábky, neustály sebarozvoj na silu).
                Jeho CPU nikdy neschádza pod 90 %. Má "krásny dom", ale nula
                Ticha. Žije v napätí.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Neustály Budovateľ
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Apathetic Escapist
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Doma nič nebuduje, no nie kvôli Wu-wei, ale z apatie a úniku.
                Pustí si Netflix a uteká pred Parazitom, ktorého nedokáže vystáť
                v tichu. Mozog nie je v Idle stave, ale je zahlcovaný toxickým
                šumom obrazoviek.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Pasívna Obeť
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
                3. The Silent Architekt
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Biely Čarodejník. Jeho Home UI Space nemá To-Do list. Praktizuje
                aktívne ničnerobenie. Dokáže sedieť v tichu a pozorovať dych bez
                mobilu. Toto "Prázdno" mu slúži ako nabíjačka, vďaka ktorej
                vonku láme kód ako boh.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Majster Wu-wei
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
                  root@nexus-core:~/ID10_NODE_06_PROJECTS
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
                execute auto_healing_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 ENDLESS PROJECTS / FEAR OF EMPTINESS DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 WU-WEI PROTOCOL & IDLE STATE INITIATED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 AUTO-HEALING & ZERO-TASK MODE DEPLOYED SUCCESSFULLY
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
                  "NAJŤAŽŠIA PRÁCA ARCHITEKTA JE NAUČIŤ SA NEROBIŤ ABSOLÚTNE
                  NIČ. DOVOĽ SYSTÉMU ODDÝCHNUŤ SI."
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
