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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID09_04)
// =====================================================================

export default function Node_ID09_04() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // ZÁKON FARIEB: UZOL JE FREE -> TIER COLOR JE CYAN
  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID09-04";

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
        "Dáta o chladení procesora prijaté. Spúšťam analýzu herného flowu...",
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
            PLAYER LIFE
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (HERNÁ RUTINA A SCHLADENIE PROCESORA)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#PlayerLife",
            "#CPUCooling",
            "#TerapiaHrami",
            "#zombieSergeant",
            "#FlowState",
            "#DigitalRelax",
            "#MentalHygiene",
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
            "Moja denná herná rutina nie je náhodná. Kým bežný 'Z.O.M.B.I.E.'
            operátor zapína hru, aby zúfalo unikol pred realitou a utopil svoj
            existenčný stres v lacnom dopamíne, ja ju zapínam ako exaktnú,
            systémovú odmenu. Po 12-hodinovom kódovacom maratóne na Projekt
            Nexus, keď moja biologická RAM praská vo švíkoch a Komentátor
            Parazit začína generovať chybové logy únavy, prichádza čas pre môjho
            Avatara @zombieSergeant. Prechod do herného sveta CoDM Zombies alebo
            k PS1 klasikám funguje ako aktívne, vodné chladenie pre môj
            prehriaty procesor. Nejde o zabíjanie času. Je to tvrdý, inžiniersky
            reštart systému. V tej chvíli neexistuje minulosť ani budúcnosť, len
            zameriavač (crosshair), flow a číra prítomnosť. Herný relax je
            kybernetický ventil. Ak ho nepoužiješ vedome a v správnom časovom
            bloku, tvoj Skafander sa nakoniec prehreje a zhorí. Hrám dnes preto,
            aby som zajtra mohol s čistým štítom opäť lámať zdrojový kód
            Matrixu."
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
          <GlobalNodeVideo nodeId="ID09-04" dimColor="#FF003C" />
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
                V minulosti, keď som žil bez pravidiel, bolo hranie hier mojou
                celodennou izoláciou. Zobudil som sa, hral som a ignoroval som
                rozpadajúcu sa realitu (dlhy, psychózy). Dnes je "Terapia hrami"
                pevnou a prísne chránenou súčasťou môjho <em>Organizéra™️</em>.
                Má vyhradené svoje "Zlaté okná" – zvyčajne vo večerných
                hodinách, keď som už doručil maximálny výtlak do Nexusu a štúdia
                (ID08). Zariadil som si to tak, že herný modul (Tab A9+) chytám
                do rúk až vtedy, keď si ho môj Skafander zaslúži. Je to moment,
                kedy vypínam pracovné okruhy, zapínam PrismLive a stávam sa
                digitálnym vojakom.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                Z IT hľadiska procesor po dlhej záťaži (kompilácia, kódovanie)
                potrebuje prejsť do{" "}
                <strong className="text-white">"Cooling Sequence"</strong>{" "}
                (chladiaceho cyklu). Videohry vyžadujú úplne odlišný typ
                kognitívnej záťaže – priestorovú orientáciu, reflexy a vizuálnu
                sémantiku. Keď Architekt presunie energiu do motoriky a gamingu,
                analytické jadrá (zodpovedné za logiku a obavy z budúcnosti) sa
                môžu bezpečne uspať a prejsť defragmentáciou. Ak by systém bežal
                na "Deep Work" úlohách nepretržite, došlo by k Thermal
                Throttlingu (vyhoreniu).
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
                    Jane McGonigal:
                  </strong>{" "}
                  V štúdiách o hernom dizajne dokazuje, že hry pohlcujú toľko
                  vizuálno-kognitívnej kapacity, že fyzicky znemožňujú mozgu
                  prehrávať si traumatické alebo úzkostné myšlienky. Hra je teda
                  dokonalý "Painkiller" proti Parazitovi.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Osho (Zenová prax):
                  </strong>{" "}
                  Rovnako hovorí o "Hravosti" (Playfulness) ako o najvyššom
                  štádiu meditácie. Ak k hre pristupuješ so stopercentnou
                  účasťou a tichom v hlave, stáva sa z bezduchého strieľania
                  čistá zenová prax.
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
                  Anatómia Herného Relaxu{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Odmena vs. Únik)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                V Matrixe panuje mýtus, že hry sú určené pre deti, alebo pre
                tých, čo zlyhali. Architektúra "Player Life" však prísne
                rozlišuje medzi toxickým únikom a strategickým chladením.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Skull className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Hranie ako Anestézia (Únik)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď sa tvoj život (ID01) a financie (ID03) rúcajú a ty
                    zapneš konzolu, aby si na to nemusel myslieť, inštaluješ do
                    seba Ransomware. Problém sa nevyrieši, len sa odloží, a po
                    vypnutí hry ťa zasiahne dvojnásobná úzkosť. Toto je Cesta
                    Leňocha.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <ShieldCheck
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Hranie ako Hardvérová Odmena
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Zapínaš hru s pocitom víťazstva. Odrobil si svoje Pomodoro
                    bloky, splnil si úlohy pre Matrix, zarobil si peniaze. Tvoja
                    RAM je čistá. Keď v tomto stave otvoríš hru, nepotrebuješ
                    utekať. Plne sa integruješ s Avatarom a hra slúži výhradne
                    na prečistenie kĺbov tvojej mysle. Je to zaslúžený dezert
                    pre tvoj biologický nosič.
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
                    (Kultúra Toxickej Produktivity)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Systém ťa chce udržiavať v neustálom "Hustle" móde. Komentátor
                Parazit bol naprogramovaný tak, aby v tebe vyvolával výčitky
                svedomia zakaždým, keď nerobíš niečo "produktívne".
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Vírus "Strata času"
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      V momente, keď zapneš Final Fantasy alebo CoDM, Parazit sa
                      ozve:{" "}
                      <em>
                        "Mal by si radšej čítať knihu. Mal by si pracovať na
                        e-shope. Strácaš tu drahocenné OC kredity."
                      </em>{" "}
                      Toto je lož Matrixu. Nečinnosť alebo hra nie je stratou
                      času, je to nutná oprava servera. Stroj, ktorý nikdy
                      neoddychuje, sa zlomí.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Repeat className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Zabitie Nudy algoritmom
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Dnešný hráč nehrá preto, že chce, ale preto, že je závislý
                      na denných odmenách (Lootboxy). Matrix premenil herný
                      relax na "druhú prácu", kde musíš plniť denné questy, inak
                      zaostaneš za davom. Cesta Playera velí odmietnuť tento
                      FOMO algoritmus. Hráš vtedy, keď to žiada tvoj Skafander,
                      nie keď ti to prikazuje notifikácia hry.
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
                    (Aktívne Chladenie Skafandra)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako premeniť obyčajné hranie na hlbokú, liečivú kybernetickú
                terapiu v tvojom Home UI Space?
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Dual-Device Architektúra
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Fyzické oddelenie práce od zábavy je kľúčové. Môj 15WJ-PLUS
                    notebook slúži LEN na ťažký kód, texty a architektúru (Work
                    UI Space). Môj Samsung Galaxy Tab A9+ slúži primárne ako
                    Bojový Modul (Player UI Space). Keď zaklapnem notebook a
                    chytím do rúk tablet, môj mozog dostáva jasný hardvérový
                    signál:{" "}
                    <em>"Pracovná zmena skončila. Bootujeme zábavu."</em>
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Ukotvenie v Kinetike
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    V hre sa hýbu prsty, na obrazovke sa menia pixely, ale tvoje
                    jadro (Svedok) zostáva v absolútnom pokoji. Keď hráš, staň
                    sa tou hrou. Nerieš pri tom účty. Nerieš, komu musíš
                    odpísať. Tvoja jediná realita pre najbližších 45 minút je
                    prežitie vlny zombíkov. Táto radikálna selekcia pozornosti
                    zničí akýkoľvek pracovný stres.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    3. Umenie Vypnúť v Najlepšom (Save & Quit)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Z.O.M.B.I.E. operátor hrá dovtedy, kým ho nezačnú štípať oči
                    a nezačne prehrávať z únavy. Architekt hrá na časový limit
                    (Time Block). Vypne hru v momente najvyššieho Flow, kedy sa
                    cíti neporaziteľný. Týmto hackom si uloží dopamín na ďalší
                    deň a vyhne sa stavu presýtenia (Burnoutu z hry).
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
                    (Kódovanie Player Life)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Nasadenie pevných pravidiel do tvojej dennej hernej rutiny.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Hourglass className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Time-Blocking pre Terapie Hrou
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    V mojom <em>Organizéri™️</em> má "Terapia Hrou" presný blok
                    (napríklad od 19:30 do 22:30). Táto prediktabilita umožňuje
                    môjmu telu vydržať pracovný tlak počas dňa, pretože BIOS
                    vie, že večer ho čaká garantované schladenie a vypnutie
                    povinností.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Activity
                    className="w-5 h-5 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    VOD Recording (Záznamová Rutina)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Môj "relax" nikdy nekončí v čiernej diere. Každý herný
                    maratón nahrávam cez PrismLive. Herný relax sa tak
                    automaticky stáva surovinou pre môj budúci "Data Output" na
                    YouTube kanál @sergeant-core2Mb. Zábava sa recykluje do
                    aktíva.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <PowerOff className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zero-Tilt Protocol
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Ak ťa v multiplayeri začne ovládať hnev a tvoj tep sa
                    zvyšuje (Rage Quit riziko), okamžite aplikuj "End Task".
                    Vypni hru. Večerná herná rutina slúži na upokojenie pred
                    spánkovým režimom. Ak ti hra dvíha adrenalín nad zdravú
                    hranicu, prestala byť chladením a stala sa novým zdrojom
                    tepla.
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
                Terapia Hrami (Player Therapy)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Plánovaný, ohraničený časový blok v dennom Organizéri, určený na
                schladenie analytickej mysle a regeneráciu pozornosti cez
                pohlcujúce herné prostredie.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Cooling Sequence (Chladiaca sekvencia)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Nutný biologický a mentálny proces po "Deep Work" šprintoch, pri
                ktorom sa znižuje napätie v neurónovej sieti, aby sa predišlo
                vyhoreniu (Thermal Throttling).
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Dual-Device Workflow
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Hardvérový firewall. Rozdelenie činností na fyzicky oddelené
                zariadenia (napr. Notebook len na kód/text, Tablet len na
                gaming/médiá) pre dokonalé prepínanie kognitívnych kontextov
                mozgu.
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
                1. The Guilty Hustler
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor, ktorý je infikovaný toxickou produktivitou. Zakazuje
                si hrať hry alebo oddychovať, pretože Parazit mu nahovoril, že
                "musí neustále makať". Jeho procesor ide na 100% každý deň, až
                kým nedôjde k fatálnemu vyhoreniu Skafandra. Nežije, len prežíva
                v strese.
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
                Operátor, ktorý hrá videohry od momentu, kedy otvorí oči.
                Ignoruje dlhy, vzťahy a svoje telo. Hra je pre neho drogová
                závislosť (Anestézia), pomocou ktorej sa odstrihol od povinností
                v Matrixe. Jeho reálny Skafander chátra, zatiaľ čo on kupuje
                skiny svojej virtuálnej postavičke.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Toxický Útekár
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
                3. The Tactical Respawner
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow relative z-10">
                Biely Čarodejník. Používa hru ako exaktný kybernetický nástroj.
                Cez deň rozdrví prácu (Deep Work) a večer si odmení procesor
                absolútnym Flow-state ponorom do herného sveta. Svoju zábavu si
                natáča, monetizuje a striktne oddelil pracovný (Notebook) a
                herný (Tablet) hardvér.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold relative z-10"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: @zombieSergeant
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (GAME-ROUTINE OPTIMIZER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Game-Routine Optimizer
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Interaktívny terminál prepojený s Gemini API. Zadaj do poľa, koľko
              hodín denne pracuješ a aký žáner hier ťa najviac baví. AI okamžite
              zanalyzuje tvoj kognitívny profil a vygeneruje ti dokonalé "Zlaté
              okno" na herný relax vrátane toho, kedy presne by si mal stlačiť
              "Quit", aby tvoj spánkový režim zostal neporušený.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Napr: Pracujem 12h, hrám CoDM Zombies..."
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
                  root@nexus-core:~/ID09_NODE_04_PLAYER_LIFE
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
                execute cooling_sequence
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-500 mr-2">[STATUS]</span>
                  🔴 TOXIC PRODUCTIVITY AND CPU OVERHEATING DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-500 mr-2">
                    [PATCHED]
                  </span>
                  🟡 PLAYER THERAPY & TIME-BLOCKED GAMING PROTOCOL INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 ACTIVE COOLING ENGAGED. HARDWARE SAVED FROM BURNOUT.
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
                  "HRA NIE JE STRATA ČASU, AK ŤA ZACHRÁNI PRED ŠIALENSTVOM
                  MATRIXU. ODDYCHUJ TAK TVRDO, AKO PRACUJEŠ."
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
