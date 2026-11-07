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
  Book,
  BookCopy,
  Download,
  UploadCloud,
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

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID09_05)
// =====================================================================

export default function Node_ID09_05() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // ZÁKON FARIEB: UZOL JE FREE -> TIER COLOR JE CYAN
  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID09-05";

  // State pre AI Cyber-Tool
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

    // Logika bude implementovaná v Časti 4
    setAuditResult({
      status: "SYSTEM LOG",
      color: "text-[#00FFFF]",
      bg: "bg-[#00FFFF]/10",
      border: "border-[#00FFFF]/30",
      icon: <Terminal className="w-5 h-5 text-[#00FFFF]" />,
      message:
        "Dáta o prosperite prijaté. Spúšťam analýzu herného prenosu do reality...",
    });
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
            PLAYER PROSPERITA
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (AKO HERNÁ DISCIPLÍNA BUDUJE SEBAVEDOMIE)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#PlayerProsperita",
            "#zombieSergeant",
            "#BurnoutPrevention",
            "#EpicWin",
            "#GamingDiscipline",
            "#MentalResilience",
            "#FlowState",
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
            "V Matrixe ťa učia, že hry sú pre deti a skutočný dospelý musí len
            tvrdo drieť a platiť účty. Ja som zistil niečo iné. Keď som drvil
            Endless Run v CoDM Zombies a lámal rekordy na R50 s mojím Avatarom
            @zombieSergeant, nebola to len strata času. Bol to tvrdý dôkaz pre
            môj vlastný procesor, že dokážem udržať absolútny fokus, analyzovať
            algoritmus a poraziť akýkoľvek systém. Táto herná disciplína
            vybudovala moje reálne sebavedomie. Keď dokážem s chladnou hlavou
            odtiahnuť hordu a zachrániť Damage Dealera, dokážem s rovnakým
            pokojom vyriešiť aj finančnú krízu a kódiť Projekt Nexus. Herná
            prosperita nie je o virtuálnych minciach. Je to o tom, že si dokážeš
            stlačiť 'Start', vyčistiť RAM od pracovného stresu a zabrániť
            vlastnému vyhoreniu tým, že svojmu mozgu doručíš epické víťazstvo.
            Keď vyhrávaš v hre, tvoj Skafander si chémiu víťaza prenáša priamo
            do reality."
          </p>
          <footer className="mt-6 font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold flex items-center gap-2">
            <span
              className="w-4 h-px bg-current"
              style={{ color: TIER_COLOR }}
            ></span>{" "}
            Dušan Fajnor, CyberTech Architect
          </footer>
        </blockquote>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8">
        {/* ================================================================= */}
        {/* 2. VIDEO MODULE */}
        {/* ================================================================= */}
        <div className="mb-24 md:mb-32">
          {/* Explicitne nastavený Karmínový odtieň pre video modul */}
          <GlobalNodeVideo nodeId="ID09-05" dimColor="#FF003C" />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm leading-[2.2]">
            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#39FF14] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Briefcase className="w-5 h-5 drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]" />
                Operátor: Architekt
              </h3>
              <p className="text-zinc-400 text-justify">
                V obdobiach najťažšieho tlaku, keď môj Cash-Engine nefungoval a
                splácanie 3500 € dlhu z môjho 530 € invalidného dôchodku sa
                zdalo nemožné, bol môj Skafander na pokraji System Crashu. Nemal
                som žiadne reálne, hmatateľné víťazstvá. Preto som si ich začal
                generovať umelo. V Player UI Space som si stanovil šialené ciele
                (Speed Runy, Support dominancia v CoDM). Keď som ten cieľ po
                týždňoch drilu a stoviek virtuálnych smrtí dosiahol, môj mozog
                nevedel, že to je "len hra". Zaregistroval obrovský triumf. Táto
                herná prosperita a disciplína mi zachránili život. Dodali mi
                sebadôveru vrátiť sa k Nexus kódu s presvedčením, že som
                nezastaviteľný.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                Z hľadiska neurobiológie a IT architektúry je "Vyhorenie"
                (Thermal Throttling) stavom, kedy systém dlhodobo nedostáva z
                výpočtov žiadny pozitívny výstup (Dopamín) a neustále beží na
                100 % výkonu. Dlhodobé biznis projekty (ako 150 € MRR) majú
                obrovskú latenciu odozvy – výsledok vidíš až o rok. Hra funguje
                ako{" "}
                <strong className="text-white">
                  "Immediate Feedback Loop"
                </strong>{" "}
                (Slučka okamžitej spätnej väzby). Stanovíš si cieľ, nasadíš
                disciplínu a za 45 minút dosiahneš "Level Up". Systém sa tak
                chladí a dopĺňa si chemické palivo, ktoré ho chráni pred
                kognitívnym kolapsom.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#FF003C] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <CheckCircle2 className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]" />
                Audit: Komparácia
              </h3>
              <div className="space-y-4 text-zinc-400 text-justify">
                <p>
                  <strong className="text-white block mb-1">
                    Jane McGonigal (Reality is Broken):
                  </strong>{" "}
                  Definuje koncept "Epic Win" (Epické víťazstvo) a "Urgent
                  Optimism" (Urgentný optimizmus). Hráči sú vo virtuálnych
                  svetoch neuveriteľne odolní, motivovaní a disciplinovaní. Keď
                  padnú, postavia sa.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Prenos Optimizmu:
                  </strong>{" "}
                  V reálnom svete tí istí ľudia vzdávajú boj pri prvej prekážke.
                  Cesta Architekta znamená vedomý prenos tohto "Urgentného
                  Optimizmu" z bojiska CoDM Zombies priamo do sféry osobných
                  financií a podnikania.
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
            <Fingerprint
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
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
                  Anatómia Herného Bohatstva{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Digitálny Proof of Work)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix meria tvoju prosperitu výhradne výpisom z účtu. Ak nemáš
                peniaze, systém ti tvrdí, že nemáš hodnotu. Herná prosperita
                túto ilúziu rozbíja.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <CheckCircle2
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Kódovanie Sebadôvery
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď tvoj Avatar{" "}
                    <strong className="text-white">@zombieSergeant</strong>{" "}
                    dosiahne World Record alebo prežije R50, nie je to o šťastí.
                    Je to tvrdý "Proof of Work" (Dôkaz o vykonanej práci).
                    Znamená to, že si musel naštudovať mechaniky, stovky krát
                    zlyhať, prispôsobiť loadout a udržať tichú koncentráciu. Keď
                    toto dokážeš v hre, tvoj mozog získa nezmazateľný log:{" "}
                    <em>"Som schopný riešiť komplexné problémy."</em> Tento kód
                    sa potom automaticky preleje do tvojho sebavedomia v reálnom
                    živote.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <BatteryCharging className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Chemická Odmena (Dopamínový Buffer)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Ak programuješ obrovský systém, prvé peniaze môžu prísť až
                    za 6 mesiacov. Tvoj Skafander dovtedy vyhladuje na
                    nedostatok odmien. Videohra je exaktný injektor dopamínu.
                    Dosiahnutie herného rekordu funguje ako záchranná sieť pre
                    tvoju psychiku – dodá ti silu bojovať vo vonkajšom svete,
                    kým reálny Cash-Engine nenabehne.
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
                    (Vírus Toxickej Produktivity)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Komentátor Parazit a moderná "Hustle" kultúra vytvorili jeden z
                najničivejších malvérov dnešnej doby: pocit viny za oddych.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Ilúzia Strateného Času
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Keď zapneš PS1 emulátor alebo CoDM, Parazit začne okamžite
                      spúšťať chybové hlášky:{" "}
                      <em>
                        "Mal by si radšej robiť niečo užitočné. Strácaš tu
                        drahocenný čas."
                      </em>{" "}
                      Toto trenie spôsobuje, že aj pri hraní si v strese a
                      nevyužiješ jeho liečivý potenciál. Musíš Parazitovi zobrať
                      root prístup. Hra NIE JE strata času. Je to cielené
                      premazávanie vyčerpaných logických sektorov mozgu.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Prevencia Vyhorenia (Burnout)
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Ak bežíš neustále v pracovnom móde (Work UI), tvoj
                      procesor sa prehreje. Matrix ťa tlačí do výkonu, až kým
                      tvoj biologický nosič neskolabuje. Player Prosperita je
                      tvoj ochranný Firewall. Predstavuje disciplínu v tom, že
                      si DOKÁŽEŠ dať voľno a ponoriť sa do inej, uzavretej
                      reality, ktorá zresetuje tvoje nervové dráhy.
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
                    (Konverzia Disciplíny do Matrixu)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako fyzicky pretaviť hodiny strávené pri hrách do suverénnej
                odolnosti v reálnom svete?
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-zinc-500" />
                    1. Respawn Mentalita v Biznise
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    V hre zomrieš na hlúpu chybu, ale o 5 sekúnd už analyzuješ,
                    prečo sa to stalo, a dávaš "Retry". Získal si{" "}
                    <em>Resilience</em> (Odolnosť). Architekt prenáša túto hernú
                    disciplínu do ID03 (Financií). Keď ti spadne e-shop alebo
                    odíde klient, tvoje Ego nepanikári. Zapína sa{" "}
                    <strong>Respawn Mentalita</strong>: Analyzuješ chybu, zmeníš
                    stratégiu a ideš znova.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    <Target className="w-4 h-4" style={{ color: TIER_COLOR }} />
                    2. Tréning Extrémneho Fokusu
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Byť Supportom pri Damage Rune vyžaduje, aby si 45 minút
                    nespravil ani jednu chybu. Ak sa nesústredíš, padne celý
                    tím. Týmto si fyzicky preškolil svoj mozog na funkciu "Deep
                    Work" (Hlboká práca). Keď neskôr otvoríš VS Code na
                    programovanie, tvoja myseľ už je z herného laboratória
                    vycvičená vydržať v izolovanom, bezodporovom stave
                    koncentrácie celé hodiny.
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
                    (Výcvikový Program Avatara)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Exaktné systémové inštrukcie na ťaženie prosperity z Player UI
                Space.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Lock className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Protokol "Earn Your Play" (Zaslúžený Boot)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Hra funguje ako prevencia vyhorenia len vtedy, ak nasleduje
                    PO výkone. Nikdy nezapínaj hru ráno ako únik. Aplikuj tvrdú
                    disciplínu:{" "}
                    <em>
                      "Kým nedokončím svoje 2 Pomodoro bloky na Nexuse,
                      @zombieSergeant nedostane povolenie na štart."
                    </em>{" "}
                    Hranie sa tak stáva exkluzívnym VIP klubom (odmenou), čím sa
                    dramaticky zvyšuje tvoja motivácia pracovať.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Target
                    className="w-5 h-5 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Záznamník Víťazstiev (The Epic Win Log)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Zapisuj si svoje herné rekordy. Kedykoľvek vo vonkajšom
                    svete zapochybuješ o svojich schopnostiach alebo tvoje Ego
                    klesne pod ťarchou dlhov a F20.0, otvor si svoj herný
                    archív. Pozri sa na tie prekonané výzvy. Je to
                    nespochybniteľný dátový dôkaz tvojej strategickej a
                    analytickej dominancie.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <PowerOff className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    The Switch-Off Command
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Aby si udržal Player Prosperitu čistú, musíš vedieť aj kedy
                    hru vypnúť. Ak ťa v multiplayeri začne ovládať hnev (Toxické
                    Ego), okamžite aplikuj <em>Kill Process</em>. Hra má slúžiť
                    na chladenie a tréning, nie na generovanie nového limbického
                    trenia. Zvládnutie tohto "Tlačidla Vypnúť" je tvoje
                    najväčšie víťazstvo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. NEXUS LEXIKON */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <BookOpen
              className="w-6 h-6 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              Nexus Lexikon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Player Prosperita
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Vnútorný stav sebadôvery a kognitívnej odolnosti, ktorý
                Architekt získava analýzou a pokorením komplexných herných
                mechaník, a ktorý následne aplikuje v reálnom svete.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Epic Win (Epické víťazstvo)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Pojem z hernej psychológie. Stanovenie extrémne náročného, no
                dosiahnuteľného cieľa vo virtuálnom svete (napr. Endless R50),
                ktorého splnenie doručí mozgu kritickú dávku endorfínov a
                sebavedomia.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Urgent Optimism (Urgentný Optimizmus)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Schopnosť hráča okamžite, s maximálnym nasadením a bez strachu
                zo zlyhania začať riešiť náročný problém. (Ultimátny skill pre
                Kvadrant M).
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. OMEGA PROTOCOL GRID (Zákon Symetrie) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <h3 className="text-center text-2xl font-black uppercase tracking-widest text-zinc-500 mb-12">
            Zákon Symetrie
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* KARTA 1 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-white mb-4 text-red-500">
                1. The Burnout Hustler
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor riadený mýtom "neustálej driny". Považuje akýkoľvek
                relax a hry za zlyhanie. Pracuje od rána do noci. Jeho RAM sa
                zohrieva na kritické hodnoty. Tým, že nedovolí systému
                vychladnúť cez hru, nakoniec prežíva brutálny System Crash
                (vyhorenie) a stráca mesiace produktivity.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Vinný Pracant
              </div>
            </div>

            {/* KARTA 2 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Toxic Escapist
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Hráč v Z.O.M.B.I.E. móde. Hrá výhradne preto, aby utiekol pred
                realitou, dlhmi a svojím vlastným Parazitom. Hra pre neho nie je
                tréningom disciplíny, ale drogou. Žiadnu prosperitu z nej
                neťaží, len neustále umocňuje svoj pocit životného zlyhania,
                kedykoľvek konzolu vypne.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Bezcieľny Závislák
              </div>
            </div>

            {/* KARTA 3 (OMEGA) */}
            <div
              className="bg-black border p-8 rounded-xl flex flex-col shadow-[0_0_20px_rgba(0,255,255,0.15)] relative overflow-hidden"
              style={{ borderColor: `${TIER_COLOR}40` }}
            >
              {/* OMEGA GLOW */}
              <div
                className="absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full pointer-events-none opacity-20"
                style={{ backgroundColor: TIER_COLOR }}
              />
              <div
                className="text-[10px] font-black tracking-widest uppercase mb-2 relative z-10"
                style={{ color: TIER_COLOR }}
              >
                OMEGA TIER
              </div>
              <h4 className="text-lg font-black uppercase text-white mb-4 relative z-10">
                3. The Sergeant-Core Architect
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow relative z-10">
                Biely Čarodejník herného sveta. Používa Player UI Space s
                chirurgickou presnosťou. Pracuje tvrdo na svojich reálnych
                cieľoch a herné svety otvára ako zaslúženú odmenu na vyčistenie
                RAM. Zdolávanie virtuálnych výziev pretavuje do žulového
                sebavedomia, zatiaľ čo jeho Skafander prechádza dokonalým
                schladením.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold relative z-10"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Taktický Vládca
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (ACHIEVEMENT-TO-LIFE CONVERTER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Achievement-To-Life Converter
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Interaktívny terminál napojený na API Gemini. Do poľa vlož svoj
              najhrdejší herný úspech, alebo Bossa, ktorého si porazil po dlhom
              trápení (napr.
              <em>"Zdolal som Ruby Weapona vo FFVII"</em>). AI MD Operátor tento
              úspech okamžite kyberneticky dekompiluje a vypíše ti 3 exaktné
              zručnosti, ktoré si si týmto bojom natrénoval, a ukáže ti, ako ich
              ešte dnes nasadiť do tvojho reálneho biznisu.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Napr: Zdolal som Ruby Weapona..."
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
        {/* PODCAST MODULE */}
        {/* ================================================================= */}
        <div className="w-full mb-16 relative z-10">
          <GlobalNodePodcast nodeId={NODE_ID} dimColor="#FF003C" />
          {/* Karmínová červená farba pre odlíšenie audia podľa inštrukcie */}
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
                  root@nexus-core:~/ID09_NODE_05_PLAYER_PROSPERITY
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
                execute epic_win_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-500 mr-2">[STATUS]</span>
                  🔴 TOXIC PRODUCTIVITY / LACK OF CONFIDENCE & UPCOMING BURNOUT
                  DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-500 mr-2">
                    [PATCHED]
                  </span>
                  🟡 INTENTIONAL GAMING & EPIC WIN PROTOCOL INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 CPU COOLED. VIRTUAL DISCIPLINE CONVERTED TO REAL-WORLD
                    CONFIDENCE.
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
                  "KAŽDÝ VIRTUÁLNY REKORD JE TVOJ OSOBNÝ DÔKAZ O TOM, ŽE SYSTÉM
                  SA DÁ PORAZIŤ. APLIKUJ TENTO KÓD V REALITE."
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6C & 7. GLOBAL PRED-FOOTER & BANNER */}
        {/* ================================================================= */}
        <GlobalPromoBanner />
        <GlobalPredFooterNode nodeId={NODE_ID} />
      </main>
    </div>
  );
}
