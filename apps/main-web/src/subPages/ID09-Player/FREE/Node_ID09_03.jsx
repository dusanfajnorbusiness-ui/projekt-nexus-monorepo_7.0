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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID09_03)
// =====================================================================

export default function Node_ID09_03() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // ZÁKON FARIEB: UZOL JE FREE -> TIER COLOR JE CYAN
  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID09-03";

  // State pre Book-To-Code Compiler Engine / AI Tool
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

    // Vlastná logika vizualizéra bude doplnená v Časti 4 (AI Cyber-Tool)
    setAuditResult({
      status: "SYSTEM LOG",
      color: "text-[#00FFFF]",
      bg: "bg-[#00FFFF]/10",
      border: "border-[#00FFFF]/30",
      icon: <Terminal className="w-5 h-5 text-[#00FFFF]" />,
      message:
        "Dáta zosynchronizované. Error bol zapísaný a vyhodnotený ako neškodný pre tvoj BIOS.",
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
            PREŽITÁ PRAVDA V HRÁCH
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (SKOK DO VIRTUALITY A TRÉNING TRPEZLIVOSTI)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#LivedTruth",
            "#VirtualDeath",
            "#RespawnMentality",
            "#ErrorLog",
            "#RageQuit",
            "#MatrixResilience",
            "#zombieSergeant",
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
            "V bežnom svete ťa Matrix programuje k panickému strachu zo
            zlyhania. Ak skrachuješ, prídeš o prácu alebo vyrobíš dlh, systém ťa
            okamžite onálepkuje ako lúzra. Ale keď som vstúpil do Player UI
            Space a začal analyticky hrať hardcore tituly a CoDM Zombies,
            objavil som ultimátnu Prežitú Pravdu: Virtuálna smrť nie je 'Game
            Over'. Je to čistý, vysoko cenný zber dát. Keď ťa Boss zabije po
            50-ty krát, tvoj Komentátor Parazit vrie a chce rozbiť displej. Ale
            tvoj Tichý Svedok sa usmeje, pretože vie, že s každým úmrtím si
            stiahol nový kúsok Bossovho algoritmu. Ak dokážeš aplikovať
            'Respawn' mentalitu z videohier na svoje reálne dlhy a biznis,
            stávaš sa v Matrixe absolútne nezničiteľným. Neexistuje prehra.
            Existuje len 'Error Log', návrat na 'Checkpoint' a ďalší pokus s
            optimalizovanejším Loadoutom."
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
          <GlobalNodeVideo nodeId="ID09-03" dimColor="#FF003C" />
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
                Roky som pri hrách prežíval toxický hnev (Rage Quit). Keď som v
                hre zomrel, môj procesor išiel zlyhať od nervov, obviňoval som
                "laggujúci internet" alebo hru samotnú. Bolo to zrkadlo môjho
                života – keď mi narástol dlh na 3500 €, tiež som obviňoval štát
                a systém. Zmena kódu prišla, keď môj Avatar (@zombieSergeant)
                prijal smrť ako nástroj. Keď dnes zomriem v 30. kole Endless
                Runu, nenadávam. Analyzujem videozáznam. Zistím, že som zle
                rotoval, alebo som mal zlý timing na "K-BUM". Túto istú
                analytickú, bezemočnú trpezlivosť som následne preniesol do
                budovania Nexusu. Keď mi spadne kód alebo nevyjde biznis ťah, je
                to len virtuálna smrť. Dám "Respawn" a kódim ďalej.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                V softvérovom inžinierstve sa chyba (Zlyhanie / Bug) nepovažuje
                za osobnú urážku vývojára. Je to tzv.{" "}
                <strong className="text-white">Exception thrown</strong>{" "}
                (Vyvolanie výnimky). Systém ťa upozorňuje, že aktuálne vstupné
                parametre nevedú k požadovanému výsledku. Videohra je uzavretá
                "Trial and Error" (Pokus/Omyl) simulácia. Núti operátora k
                rýchlemu, iteratívnemu testovaniu (A/B testing). Schopnosť
                Skafandra opakovane zomrieť a znova sa postaviť s novou taktikou
                priamo preprogramováva neurónové dráhy mozgu, čím sa drasticky
                zvyšuje celková psychická reziliencia (Odolnosť voči zlyhaniu v
                reálnom svete).
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
                    Robert Kiyosaki:
                  </strong>{" "}
                  Vo svojich textoch jasne deklaruje:{" "}
                  <em>
                    "Víťazi sa neboja prehier. Prehra je súčasťou procesu
                    víťazstva. Ľudia, ktorí sa vyhýbajú zlyhaniu, sa vyhýbajú aj
                    úspechu."
                  </em>{" "}
                  Hranie videohier je najlepším praktickým trenažérom tohto
                  zákona.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Stoická filozofia:
                  </strong>{" "}
                  Stoickí filozofi učili, že prekážka na ceste SA STÁVA samotnou
                  cestou. V hernom svete neexistuje progres bez prekážok
                  (Bossov). Ak hru prejdeš bez jedinej smrti na prvýkrát,
                  nenaučil si sa nič a hra ťa nudila. Skutočná Pravda sa formuje
                  v omyloch.
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
                  Anatómia Virtuálnej Smrti{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Error Log vs. Fatality)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix do nás od detstva v škole inštaloval "Systém jednej
                šance". Ak dostaneš pätorku, zlyhal si. Hry túto toxickú
                paradigmu úplne rozbíjajú.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Skull className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Dekompresia Zlyhania
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď v hrách ako Final Fantasy alebo Dark Souls narazíš na
                    ťažkého Bossa, vývojári vedia, že na prvý pokus zomrieš.
                    Smrť tam nie je trest; je to komunikačné rozhranie hry. Smrť
                    ti hovorí:{" "}
                    <em>
                      "Tento Boss útočí v 3-sekundových intervaloch a má imunitu
                      na oheň."
                    </em>{" "}
                    Zomrieť znamená stiahnuť si túto informáciu na svoj lokálny
                    HDD.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <RefreshCw
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Aplikácia na Matrix
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Bežný operátor (Z.O.M.B.I.E.) vníma stratu zamestnania alebo
                    krach podnikania ako "Fatality" (Konečnú). Architekt s
                    herným výcvikom to vníma len ako "Error Log". Vie, že celý
                    život je navrhnutý tak, aby si ním prechádzal cez systém
                    Checkpointov. Smrť eGa alebo projektu je len premazaním
                    neefektívneho kódu, aby mohol byť nahradený silnejším.
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
                    (Vírus Hnevu - Rage Quit)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Prečo väčšina hráčov (a ľudí v živote) pri zlyhaní reaguje
                agresiou a frustráciou? Odpoveďou je EGO (Komentátor Parazit).
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Thermal Throttling Procesora (Hnev)
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Keď ťa v CoDM Zombies zabije obyčajný "minion" kvôli
                      tvojej nepozornosti, tvoje Ego utrpí šok. Nechce si
                      priznať vlastnú nekompetentnosť. Spustí obranný
                      mechanizmus: začneš kričať, trieskať do
                      klávesnice/tabletu. Tvoj procesor sa začne prehrievať
                      (Limbické trenie) a nasleduje "Rage Quit" (Vypnutie v
                      hneve). V reálnom živote je to moment, kedy po hádke alebo
                      neúspechu človek prepadne depresiám a vzdá sa.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Klamstvo Falošnej Dokonalosti
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Matrix nám predáva ideál, že všetko musí ísť hladko a na
                      prvýkrát. Herný analytik tento mýtus ničí. Analyzuje, že
                      100% Win Rate je podvod. Pochopil, že frustrácia z prehry
                      nie je spôsobená hrou, ale jeho vlastným falošným
                      očakávaním, že už je "dokonalý hráč".
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
                    (Resilience Protocol)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako pretaviť opakované herné smrti do žulovej, nezničiteľnej
                trpezlivosti v kvadrantoch biznisu a financií.
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Oddelenie Svedka od Avatara
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď v hre ovládaš postavu, vidíš ju na obrazovke. Keď
                    postava zomrie, ty ako hráč sedíš v bezpečí na gauči. Tento
                    tréning oddelenia je kľúčový! Keď v reálnom živote zažívaš
                    finančnú krízu, musíš aktivovať rovnaký prístup. Tvoj
                    fyzický "Skafander" možno práve trpí, ale ty – Tichý Svedok
                    (Root User) – si absolútne v bezpečí. Si len Hráč, ktorý
                    práve stratil jeden "život" v simulácii.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Grind ako forma Meditácie (Deep Work)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Opakovanie toho istého náročného levelu (alebo Endless runu)
                    50-krát za sebou učí tvoj mozog brutálnej vytrvalosti.
                    Odstraňuje sa "Decision Fatigue" a nastupuje Flow-state.
                    Svalová pamäť preberá kontrolu. Keď neskôr musíš 40 hodín
                    kódovať web (Projekt Nexus) a neustále riešiť bugy, tvoj
                    mozog už nepanikári. Bol vycvičený vydržať nudnú a bolestivú
                    repetíciu v Player UI Space.
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
                    (Kódovanie Trpezlivosti)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Taktiky @zombieSergeanta na priamu konverziu herného neúspechu
                do systémovej sily.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Activity className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    The VOD Review (Záznam a Analýza)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Nikdy nezahadzuj nevydarený Run. Ja používam PrismLive na
                    nahrávanie aj mojich "smrtí". Keď Run padne, pozriem si
                    záznam s chladnou hlavou. Vidím:{" "}
                    <em>
                      "Aha, tu som minul Trap Mastera priskoro a tu som
                      nerefreshol armor."
                    </em>{" "}
                    To isté platí pre reálny život – analyzuj svoj zlyhaný
                    pohovor, rozchod alebo biznis stretnutie ako záznam z hry.
                    Nájdi Error, urob Patch, pošli Update.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <RefreshCw
                    className="w-5 h-5 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zmena Loadoutu (Pivot)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Ak ťa boss zabije 10-krát tou istou zbraňou, Einstein by to
                    nazval šialenstvom (robiť to isté a čakať iný výsledok).
                    Herná smrť ťa núti ísť do Menu a zmeniť Gunsmith (Loadout).
                    Ak ti v živote nefunguje jeden model podnikania alebo
                    šetrenia, netlač to nasilu. Vráť sa do "Lobby", preprogramuj
                    svoje priority (Zmeň Loadout) a skús iný prístup.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <PowerOff className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zero-React Reset
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Keď v hre zomrieš v poslednej sekunde, inštinkt velí
                    zakričať. Aplikuj tvrdý "Zero-React" protokol. Zhlboka sa
                    nadýchni, neprehovor ani slovo, polož tablet a pozeraj do
                    steny 3 minúty. Umenie prijať masívnu stratu s absolútnym
                    fyzickým a vokálnym tichom je znakom najvyššej dominancie
                    nad vlastným Parazitom.
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
                Virtuálna smrť
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Moment v hre (alebo zlyhanie v živote), kedy systém ukončí tvoj
                pokus. Je to neutrálny akt odovzdania spätnej väzby o tom, že
                tvoja aktuálna stratégia (kód) obsahuje kritické chyby.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Respawn Mentality
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Schopnosť kedykoľvek vziať úplné zlyhanie, zresetovať svoje
                emócie na nulu a začať riešiť problém odznova s vedomosťami
                získanými z predchádzajúceho pádu.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Rage Quit
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Zlyhanie biologického chladenia Skafandra. Emočný výbuch
                spôsobený Komentátorom Parazitom, ktorý nedokáže spracovať
                urážku svojej (falošnej) dokonalosti.
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
                1. The Rage Quitter
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Občasný hráč, ktorý neznáša prehru. Jeho CPU sa pri každom
                zlyhaní v hre (aj v živote) okamžite prehreje. Rozbíja periférie
                (ovládače, vzťahy) a obviňuje zo svojich chýb samotný Matrix,
                Lagg, alebo "zlých ľudí". Nikdy sa nepoučí, pretože Ego odmieta
                priznať chybu kódu.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Ovládaný Egom
              </div>
            </div>

            {/* KARTA 2 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Pay-to-Win Casual
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Hráč, ktorý odmieta prežiť bolesť z učenia sa. Ak je hra (alebo
                život) ťažká, hľadá skratku – kupuje si výhody za peniaze
                (mikrotransakcie, pôžičky) alebo okamžite vyhľadáva návody
                (Tutorial Hell). Jeho reálna psychická reziliencia (odolnosť) sa
                blíži k nule.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Útek pred bolesťou
              </div>
            </div>

            {/* KARTA 3 (OMEGA) */}
            <div
              className="bg-black border p-8 rounded-xl flex flex-col shadow-[0_0_20px_rgba(0,255,255,0.15)] relative overflow-hidden"
              style={{ borderColor: `${TIER_COLOR}40` }}
            >
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
                Biely Čarodejník. Zomrie 100-krát a 100-krát sa postaví s
                chladnejšou hlavou a ostrejšou taktikou. Vníma smrť v hre (a
                zlyhanie v biznise) len ako zber tvrdých dát. Každú prehru s
                úsmevom zapíše do databázy a optimalizuje svoj ďalší krok.
                Matrix ho nedokáže zlomiť.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold relative z-10"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Architekt Reziliencie
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (RESILIENCE DECOMPILER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Resilience Decompiler
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Interaktívny terminál napojený na API Gemini. Do okna zapíš tvoje
              najčerstvejšie životné "Zlyhanie" (napr.{" "}
              <em>"Vyhodili ma z práce"</em> alebo <em>"Spadol mi e-shop"</em>).
              Umelá inteligencia (Svedok) tento tvoj problém okamžite nasimuluje
              ako "Smrť v RPG hre" a vygeneruje ti presný 3-krokový "Respawn
              Protocol" (zmena Loadoutu, analýza VOD, nový Spawn), čím tvoju
              bolesť premení na čistú taktickú úlohu.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj tvoje najčerstvejšie zlyhanie..."
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
          {/* Karmínová červená farba pre odlíšenie audia */}
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
                  root@nexus-core:~/ID09_NODE_03_LIVED_TRUTH
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
                execute respawn_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-500 mr-2">[STATUS]</span>
                  🔴 SYSTEM FAILURE / RAGE QUIT AND EGO DAMAGE DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-500 mr-2">
                    [PATCHED]
                  </span>
                  🟡 RESPAWN PROTOCOL & VOD ANALYSIS INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 FAILURE CONVERTED TO DATA. RESILIENCE UPGRADED TO
                    MAXIMUM.
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
                  "SMRŤ V HRE NIE JE KONIEC. JE TO LEN SPRÁVA OD MATRIXU, ŽE MÁŠ
                  ZMENIŤ KÓD. DÁVAJ RESPAWN, KÝM NEVYHRÁŠ."
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
