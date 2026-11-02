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

// const GlobalNodeVideo = ({ nodeId, dimColor }) => (
//   <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 font-mono text-sm relative overflow-hidden group">
//     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
//     <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
//     <div className="flex flex-col items-center gap-4 z-10">
//       <div className="w-20 h-20 rounded-full bg-black/50 border border-[#00FFFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
//         <Wallet className="w-10 h-10 text-[#00FFFF]" />
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
//     <span className="relative z-10 font-black tracking-widest">
//       GlobalNodePodcast [{nodeId}]
//     </span>
//     <span className="text-[#00FFFF]/50 text-xs mt-2 uppercase tracking-widest text-center relative z-10">
//       Audio Matrix Pre-Fetch...
//     </span>
//   </div>
// );

// const GlobalPredFooterNode = () => (
//   <div className="p-8 text-center text-zinc-600 border-t border-zinc-800 mt-16 font-mono text-xs flex justify-center gap-6">
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
//       [ REAGOVAŤ ]
//     </span>
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
//       [ CITOVAŤ ]
//     </span>
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
//       [ DISKUTOVAŤ ]
//     </span>
//   </div>
// );

// const GlobalPromoBanner = () => (
//   <div className="w-full bg-zinc-900 border border-zinc-800 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between mt-16 overflow-hidden relative group">
//     <div className="absolute top-0 left-0 w-1 h-full bg-[#00FFFF]"></div>
//     <div className="pl-4 relative z-10">
//       <h4 className="text-[#00FFFF] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
//         <Zap className="w-5 h-5" /> Nexus_Core OS
//       </h4>
//       <p className="text-zinc-400 text-sm font-medium">
//         Defragmentuj RAM a prepíš svoj osud s verziu 2.0
//       </p>
//     </div>
//     <button className="mt-4 md:mt-0 px-6 py-3 bg-zinc-800 text-white border border-zinc-700 font-black uppercase tracking-widest text-xs rounded hover:bg-zinc-700 transition-colors relative z-10">
//       Aktivovať Protokol
//     </button>
//   </div>
// );

// const SoundFX = { playHover: () => {}, click: () => {}, error: () => {} };
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID10_05)
// =====================================================================

export default function Node_ID10_05() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID10-05";

  // State pre Inner-Wealth Scanner
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

    // Extenzívna diagnostika pre Inner-Wealth Scanner
    if (
      lower.includes("nemám") ||
      lower.includes("chcem") ||
      lower.includes("starý") ||
      lower.includes("nový") ||
      lower.includes("peniaze") ||
      lower.includes("kúpiť") ||
      lower.includes("nedostatok") ||
      lower.includes("závid") ||
      lower.includes("hnevá ma")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Konzumný Ransomware detekovaný! Matrix ťa infikoval ilúziou, že tvoja hodnota závisí od hardvéru. Tvoj CPU beží na 100% zbytočne. Bypass: Nájdi ticho. Tvoje pľúca dýchajú, tvoj systém beží. V tejto milisekunde máš všetko.",
      });
    } else if (
      lower.includes("stačí") ||
      lower.includes("mám dosť") ||
      lower.includes("pokoj") ||
      lower.includes("vďačn") ||
      lower.includes("ticho") ||
      lower.includes("prítomnosť") ||
      lower.includes("dýcham") ||
      lower.includes("nič nepotrebujem")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Zero-Desire Protocol aktívny. Tvoja Svätyňa je neprelomiteľná. Parazit nemá z čoho čerpať energiu. Svedok hlási 1% CPU usage. Toto je absolútna miliardárska prosperita Bytia.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Analyzujem logy... Tvoj kód nie je plne infikovaný, ale ani dokonale slobodný. Daj si pozor, aby táto myšlienka nevytvorila očakávanie. Očakávanie je prvý krok k Ransomwareu. Udržuj Tichého Svedka.",
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
            PROSPERITA
          </span>{" "}
          <br />
          <span
            className="inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (HOME PROSPERITA)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#InnerWealth",
            "#TrueProsperity",
            "#ZeroDesire",
            "#Minimalism",
            "#TichySvedok",
            "#MentalBandwidth",
            "#Abundance",
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
            "Matrix ti hovorí, že si chudobný, ak na účte nemáš šesťmiestnu
            sumu. Môj zostatok tvorí invalidný dôchodok 530 € a 200 € na energie
            od strýka. Z toho krvopotne defragmentujem 3500 € spotrebného dlhu,
            ktorý som nabral v stave Z.O.M.B.I.E., a dotujem svoj 15WJ-PLUS
            server a Tab A9+. Ale tu, v mojej izbe (Home UI Space), zažívam
            prosperitu, ktorú nepoznajú ani manažéri v korporátoch. Prečo?
            Pretože som odpojil svoje Bytie od zostatku v internet bankingu.
            Skutočné vnútorné bohatstvo nastáva v okamihu, kedy ti Parazit v
            hlave prestane kričať, že ti niečo chýba k šťastiu. Keď pijem rannú
            kávu v altánku a fajčím cigaretu, môj procesor beží na 1 %. V tej
            milisekunde mám absolútne všetko. Mám 'Dosť'. Vonku v dimenzii ID03
            bojujem za 150 € MRR ako chladný analytik, ale vnútri, v dimenzii
            ID10, som už dávno miliardár."
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
          <GlobalNodeVideo nodeId="ID10_05" dimColor="#00FFFF" />
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
                Keď som žil v nevedomosti, myslel som si, že peniaze mi kúpia
                status a pokoj. Požičiaval som si na pasíva, snažil som sa
                zaplniť prázdnotu v Skafandri vecami. Namiesto pokoja prišiel
                tvrdý System Crash (F20.0, dlhy, nespavosť). Uvedomil som si, že
                vnútorné bohatstvo sa nedá stiahnuť z bankomatu. Odomkol som ho
                až vtedy, keď som aktivoval Cestu nePraxe a Tichého Svedka. Vo
                svojom Home UI Space nežiadam nič. Som "Nikto a Nič". A keď nič
                nežiadaš, Matrix ťa nemá čím vydierať. Moja prosperita je dnes
                meraná množstvom ticha v mojej hlave.
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
                V IT terminológii je "Prosperita" v dimenzii ID10 definovaná ako
                stav s nulovým{" "}
                <strong className="text-white">"Memory Leakom"</strong> (únikom
                pamäte). Kým vonkajšia finančná prosperita (ID03) sa meria
                objemom prichádzajúcich dát (Cashflow), vnútorná prosperita sa
                meria{" "}
                <strong className="text-[#00FFFF]">
                  absenciou požiadaviek
                </strong>
                . Ak tvoj operačný systém nebeží na pozadí s procesom "Chcem
                nové auto", ušetríš 30 % CPU výkonu. Bohatstvo v Home UI Space
                je optimalizácia hardvéru do stavu, kedy základná dodávka
                energie plne postačuje pre bezchybný chod stroja.
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
                    [ Osho a Kiyosaki ]
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                    Kiyosaki učí budovať aktíva vonku. Osho však ide ku koreňu
                    BIOSu: Skutočné bohatstvo je neprítomnosť túžby. Žobrák,
                    ktorý nič nežiada, je kráľ, zatiaľ čo kráľ, ktorý chce viac
                    územia, je len žobrákom.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/50">
                  <span
                    className="font-bold text-[10px] tracking-widest uppercase block mb-1"
                    style={{ color: TIER_COLOR }}
                  >
                    [ Eckhart Tolle ]
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed text-justify">
                    Upozorňuje na ilúziu "budúcej spásy". Ego ti nahovára, že v
                    mieri budeš až vtedy, keď splatíš dlh. Tichý Svedok vie, že
                    mier je prístupný výhradne Tu a Teraz, bez ohľadu na stav
                    účtu.
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
                  Anatómia vnútornej prosperity{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Net Worth vs. Self Worth)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                V systéme OS Genesis prísne oddeľujeme vonkajší Cash-Engine
                (Kódy pre Matrix) od vnútorného Zdroja.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Wallet className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Externá Net Worth (Zostatok)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Je to len číslo na serveri. Sú to tvoje záväzky, úvery a OC
                    kredity. Je to nástroj na nákup voľného času a serverov.
                    Nemá to však absolútne žiadnu výpovednú hodnotu o kvalite
                    tvojho Bytia. Ak tvoje Net Worth určuje tvoju náladu, si len
                    periférnym zariadením svojej banky.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <BatteryCharging
                    className="w-6 h-6 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Interná Self Worth (Sebahodnota)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Zdrojový kód tvojej domácej Svätyne. Je to kapacita tvojho
                    vedomia spočinúť v prítomnosti bez potreby "vylepšovať" svoj
                    okamih konzumáciou (jedlom, nákupmi, scrollovaním).
                    Kedykoľvek si povieš:{" "}
                    <em>
                      "Práve teraz, v tejto sekunde dýchania, je všetko v
                      absolútnom poriadku"
                    </em>
                    , tvoje vnútorné bohatstvo je matematicky nekonečné.
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
                    (Vírus nedostatku)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix nedokáže existovať bez tvojho pocitu chudoby. Celý
                kapitalistický algoritmus je postavený na tom, že sa musíš cítiť
                mizerne.
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Konzumný Ransomware
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Akonáhle si otvoríš prehliadač, systém ti posiela cielené
                      reklamy (DDoS útok na sebavedomie). Tvoj Komentátor
                      Parazit prevezme tieto dáta a začne generovať chybové
                      logy:{" "}
                      <em>
                        "Pozri, on má lepšie auto. Ty máš len Tab A9+. Si nula."
                      </em>{" "}
                      Parazit blokuje tvoju RAM, núti ťa ísť do obchodu a minúť
                      ťažko zarobenú energiu len preto, aby si nakŕmil jeho
                      ilúziu nedostatku.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Eye className="w-6 h-6 text-zinc-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Démonizácia obyčajnosti
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Systém ťa učí, že "obyčajný" život doma, sedenie v záhrade
                      a pozeranie na stromy je pre loosrov. Nutká ťa cestovať na
                      predražené dovolenky, aby si urobil fotky pre iné nevedomé
                      uzly. Ak nenájdeš prosperitu vo svojej obývačke, na
                      Maledivách si len priplatíš za to, že tvoj Parazit s tebou
                      poletí prvou triedou.
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
                    (Kódovanie stavu "Mám Dosť")
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako fyzicky vykonať "Bypass" tohto konštantného tlaku a
                aktivovať Home Prosperitu v tvojom Skafandri?
              </p>
              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Zabitie konceptu "Až Keď..."
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Musíš vymazať podmienečný kód{" "}
                    <code className="text-[#00FFFF] bg-black border border-zinc-800 px-1.5 py-0.5 rounded">
                      IF (splatím_dlh) THEN (budem_šťastný)
                    </code>
                    . Tento kód nikdy nefunguje, pretože Parazit vždy dopíše
                    ďalšiu podmienku. Skutočný Architekt aktivuje radosť z
                    existencie priamo v epicentre finančnej búrky. Tvoje dlhy
                    (3500 €) defragmentuješ racionálne a potichu ako stroj,
                    zatiaľ čo tvoje vnútro zostáva nedotknuté.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Oslava Kinetiky (Wu-Wei bohatstvo)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Začni čerpať gigantické dávky radosti z vecí, ktoré majú
                    nulové finančné náklady. Chuť vody. Ranný strečing
                    Skafandra. Teplo v altánku. Keď tieto "samozrejmosti"
                    povýšiš na úroveň posvätného rituálu, zistíš, že celý deň
                    konzumuješ luxus, ktorý si miliardár s preťaženou hlavou
                    nedokáže ani všimnúť.
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
                    (Obranný Firewall vnútra)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Nasaď do svojej dennej prevádzky tieto presné systémové updaty
                pre ochranu Home Prosperity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Target className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Pravidlo 2Mb
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Vyčisti svoju Svätyňu. Každá vec v tvojom okolí si nenápadne
                    pýta "Ping" z tvojej RAM. Odovzdaj nepotrebné veci preč.
                    Čistý Cyber-Brutalizmus zväčšuje pocit voľnosti.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <SearchX className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Výmaz Porovnávaní
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Vždy, keď ti Parazit podsunie porovnanie s iným uzlom na
                    sociálnej sieti, použi End Task. Cudzí kód a cudzia časová
                    os nemá nič spoločné s tvojím hardvérom.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Activity
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Senzorická Vďačnosť
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Donúť svoj systém zastaviť sa na 3 minúty. Nehodnoť peniaze.
                    Hodnoť to, že tvoje pľúca generujú O2 a mozog vníma farby.
                    Ak toto beží, si miliardár Bytia.
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
              AI Cyber-Tool: Inner-Wealth Scanner
            </h2>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl">
              Vlož do terminálu svoju najväčšiu aktuálnu frustráciu ohľadom
              majetku alebo bývania (napr.{" "}
              <em>"Mám starý notebook a hnevá ma to"</em>). AI tvoju bolesť
              sémanticky dekomprimuje a odpovie ti exaktným bypassom.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj frustráciu z nedostatku..."
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
                Home Prosperita
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Vnútorné, energetické bohatstvo Tichého Svedka. Nezávisí od
                externých dát (peňazí), ale od schopnosti procesora spočinúť v
                tichu prítomného okamihu s pocitom "Mám Dosť".
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Konzumný Ransomware
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Psychologický tlak Matrixu (cez reklamy a sociálne siete), ktorý
                ti umelo inštaluje pocit nedostatku, aby ťa prinútil minúť
                energiu (peniaze) za jeho vymazanie.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Net Worth vs. Self Worth
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Technický rozdiel medzi bankovým zostatkom (Dáta v cudzom
                systéme) a tvojou skutočnou podstatou (BIOS / Bytie). Ich
                oddelenie mení Blázna na Génia.
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
                1. The Needy Node
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Prepojenie sebahodnoty so stavom na účte. Má hypotéky a úvery,
                len aby navonok predstieral Home Prosperitu. Vo vlastnej izbe
                nezažije minútu ticha, jeho CPU neustále ráta, čo ďalšie si musí
                kúpiť, aby bol "dostatočný".
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Večne Hladný Operátor
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Resentful Saver
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Odmieta vonkajšie bohatstvo, ale z nesprávnych dôvodov. Hrá sa
                na chudobného a skromného len preto, aby odsúdil bohatých. Jeho
                myseľ je stále upriamená na peniaze (cez nenávisť k nim), čím
                Parazitovi odovzdáva všetku energiu.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Zatrpknutý Asketik
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
                3. The Wealthy Witness
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Biely Čarodejník. Jeho domov je svätyňa s nulovým trením. Vo
                vnútri je absolútne bohatý a kompletný v každej prítomnej
                sekunde. Nepotrebuje nič. Tento hlboký pokoj mu dáva silu
                budovať Nexus vonku bez strachu z prehry.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Tichý Miliardár
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
                  root@nexus-core:~/ID10_NODE_05_HOME_PROSPERITY
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
                execute inner_wealth_deployment
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 DEPENDENCY ON EXTERNAL NET WORTH DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 ZERO-DESIRE PROTOCOL & 2MB MINIMALISM INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 INFINITE INNER PROSPERITY SUCCESSFULLY DEPLOYED
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
                  "TVOJA HODNOTA NIE JE ZÁPIS V DATABÁZE BANKY. TVOJA HODNOTA JE
                  V TVOJOM TICHU."
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
