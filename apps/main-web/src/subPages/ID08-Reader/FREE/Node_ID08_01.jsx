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

// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// 🗑️ 2. MOCKY PRE CANVAS (ZMAZAŤ V LOKÁLNOM PROJEKTE) 🗑️
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID08_01)
// =====================================================================

export default function Node_ID08_01() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID08-01";

  // State pre Book-To-Code Compiler Engine
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

    if (
      lower.includes("tajomstvo") ||
      lower.includes("vesmír mi dá") ||
      lower.includes("stačí si priať") ||
      lower.includes("motivačné") ||
      lower.includes("manifest")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Bullshit kód detekovaný! Toto je Wishful Thinking. Krok 1: Zahoď túto knihu. Krok 2: Napíš 5 riadkov reálneho kódu alebo urob 1 reálnu pracovnú úlohu. Krok 3: Opakuj. Vesmír ti nedá nič, čo si sám nenaprogramuješ.",
      });
    } else if (
      lower.includes("osvietenie") ||
      lower.includes("ego") ||
      lower.includes("tolle") ||
      lower.includes("osho") ||
      lower.includes("prítomnosť") ||
      lower.includes("ticho")
    ) {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Teoretická spiritualita detekovaná. Krok 1: Zavri knihu. Krok 2: Vypni všetky vstupy (mobil, PC) na 10 minút. Krok 3: Len pozoruj dych a nehodnoť. Nečítaj o meditácii, vykonaj ju.",
      });
    } else if (
      lower.includes("zbohatnúť") ||
      lower.includes("pasíva") ||
      lower.includes("aktíva") ||
      lower.includes("kiyosaki") ||
      lower.includes("investície") ||
      lower.includes("cashflow")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Painkiller dáta detekované. Kompilácia do reality zahájená. Krok 1: Otvor Excel. Krok 2: Vypíš svoje presné fixné výdavky a dlhy. Krok 3: Zruš dnes jedno predplatné, ktoré nepoužívaš. Znalosť je kód, konaj.",
      });
    } else {
      setAuditResult({
        status: "SYSTEM LOG",
        color: "text-zinc-400",
        bg: "bg-zinc-900/50",
        border: "border-zinc-700",
        icon: <Terminal className="w-5 h-5 text-zinc-400" />,
        message:
          "Dáta prijaté. Ak je toto len teória, vymaž to z RAM. Ak to rieši tvoj akútny problém, nájdi v texte jeden jediný krok, odlož čítanie a do 24 hodín ho zrealizuj vo fyzickom svete.",
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
            READER UI SPACE
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (OD KONZUMÁCIE K EXEKÚCII)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#ReaderUISpace",
            "#EmptyBook",
            "#DeadBooks",
            "#DataCompilation",
            "#SpiritualHoarding",
            "#CodeExecution",
            "#LivedTruth",
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
            "Zhltol som viac ako 350 mŕtvych kníh. Osho, Tolle, Ruiz, Jung,
            Kiyosaki. Moja RAM bola narvaná teóriou na prasknutie. Komentátor
            Parazit ma presviedčal, že čím viac stránok 'nasajem', tým bližšie
            budem k slobode. Bol to jeden z najprepracovanejších malvérov
            Matrixu. Postupne som pochopil, že čítať knihy a neaplikovať ich do
            reality, je len sofistikovanejšia forma prokrastinácie. Mŕtva kniha
            je len textový súbor (read-only). Nemá absolútne žiadnu exekutívnu
            silu, pokiaľ ten cudzí kód nevezmeš, neprežiješ ho na vlastnej koži
            a neprepíšeš ním svoj každodenný algoritmus. Reader UI Space nie je
            knižnica, kde si ukladáš prečítané trofeje na poličku Ega. Je to
            komprimačné laboratórium, kde sa cudzí text nemilosrdne láme a mení
            na tvoju Prežitú Pravdu."
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
          <GlobalNodeVideo nodeId="ID08_01" dimColor={TIER_COLOR} />
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
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Briefcase className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Operátor: Architekt
              </h3>
              <p className="text-zinc-400 text-justify">
                Roky som trpel utkvelou predstavou, že som vďaka množstvu
                prečítaných kníh "niekde inde" ako dav. V skutočnosti som bol
                rovnako uväznený, len moje mreže boli z papiera a duchovných
                citátov. Zlom nastal, keď mi zrútilo systém – F20.0, dlhy,
                insomnia. Žiadna kniha mi v tej sekunde nepomohla. Musel som tie
                knihy zavrieť a začať testovať ich kód priamo v boji.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                V systémoch rozlišujeme medzi{" "}
                <strong className="text-white">Data Storage</strong> a{" "}
                <strong className="text-white">Data Execution</strong>.
                Operátor, ktorý len číta, mení svoj mozog na nevyužitý externý
                disk. Operátor, ktorý knihy kóduje do života, funguje ako
                "Kompilátor". Zoberie gigabajtový textový blok, extrahuje z neho
                3 riadky exekučného kódu a okamžite ich nasadí.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#FF003C] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <CheckCircle2 className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]" />
                Audit: Mŕtve Knihy
              </h3>
              <div className="space-y-4 text-zinc-400 text-justify">
                <p>
                  <strong className="text-white block mb-1">
                    Osho (Prázdne Zrkadlo):
                  </strong>{" "}
                  Jasne definuje "Empty Book" – myseľ nesmie byť skladiskom
                  cudzích slov, inak stratí schopnosť odrážať prítomnú realitu.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Eckhart Tolle:
                  </strong>{" "}
                  Varuje pred "Koncepčným myslením". Čítať návod na meditáciu 10
                  hodín nie je meditácia; je to len konzumácia dát o meditácii.
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
                  Anatómia dvoch prístupov{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Konzument vs. Architekt)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                V Matrixe existujú dva typy entít pracujúcich s informáciami.
                Rozdiel medzi nimi nie je v počte prečítaných kníh, ale v
                rýchlosti konverzie dát do praxe.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <BookCopy className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Konzument textu (Data Hoarder)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Táto entita číta 50 kníh ročne o osobnom raste a duchovne.
                    Pýši sa tým pred okolím. Cieľom je presvedčiť Parazita, že
                    "pracuje na sebe". Výsledok? Žiadne reálne peniaze nezarobí
                    a žiadny pokoj nenájde. Teória bez praxe vytvára arogantné
                    Ego, ktoré cituje Tolleho, ale pri hádke v rodine okamžite
                    prejde do Kernel Panicu.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Code
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Architekt (Kóder reality)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Nečíta knihy, on ich "dekomprimuje". Ak nájde v Kiyosakim
                    funkčný princíp o pasívach, zavrie knihu a 3 týždne nerieši
                    nič iné, len ho programuje do svojho Cash-Enginu. Architekt
                    vie, že jedna úspešne implementovaná technika má
                    1000-násobne väčšiu hodnotu než 300 zabudnutých kníh na
                    poličke.
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
                    (Intelektuálna Prokrastinácia)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix veľmi rýchlo pochopil, že ťa nemôže udržať v Krysích
                pretekoch len cez televíziu. U inteligentnejších uzlov nasadzuje
                rafinovanejší vírus:{" "}
                <strong className="text-white">závislosť na učení</strong>.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Malvér "Ešte nie som pripravený"
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Chceš začať podnikať. Parazit ti však podsunie log:{" "}
                      <em>
                        "Musíš si najprv prečítať túto novú knihu o marketingu."
                      </em>{" "}
                      Takto ťa Matrix udrží v slučke večného študenta. Kupuješ
                      kurzy, cítiš sa produktívne, no len zbabelo utekáš pred
                      zodpovednosťou "vydať nedokonalý kód na živý trh".
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Repeat className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Dopamínový klam
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Prečítanie skvelej myšlienky uvoľní v tvojom nosiči
                      rovnakú dávku dopamínu, akoby si tú vec reálne dosiahol.
                      Mozog je hacknutý. Cítiš sa úspešný len z čítania o
                      úspechu, čím sa stráca tvoj reálny ťah na exekúciu.
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
                    (Filter v Reader UI Space)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako sa vymaniť z roly "čítača" a preprogramovať svoj prístup k
                akejkoľvek knižnici?
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Zero-Ego čítanie
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Prestaň čítať preto, aby si znel múdro. Čítaj v režime
                    Tichého Svedka. Nechaj, nech kód mŕtvych autorov len ticho
                    prepíše tie sektory tvojho disku, ktoré sú poškodené. Zvyšok
                    knihy ignoruj.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Protokol "Stop and Execute"
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď pri čítaní narazíš na "Aha moment", okamžite prestaň
                    čítať ďalej. Kniha sa musí odložiť a daný kód sa musí ten
                    istý deň začať fyzicky inštalovať do tvojej práce alebo
                    rutiny.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    3. Format C: (Prežitá Pravda)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď techniku otestuješ a spáli ťa na nej realita, získaš
                    Prežitú Pravdu. Kód je už tvoj. Tvoja osobná jazva z trhu má
                    nevyčísliteľne vyššiu hodnotu než ich papierová poučka.
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
                    (Dátová Dekompresia)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Presné inštrukcie na operovanie v doméne ID08.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <PenTool className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zákaz Čítania bez Fixky
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Ak čítaš bez toho, aby si ukladal zdrojový kód do OneNote,
                    tvoja RAM to do týždňa vymaže. Z každého sedenia musíš
                    vyextrahovať surové, zapísané fakty.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <BookX
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Empty-Book Protocol
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Najlepší kód je ten, čo už beží a nemusíš ho hľadať. Po 350
                    dielach nastáva bod singularity. Zatváraš knihy a začínaš
                    generovať svoj vlastný NEXUS CODEX.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <ShieldCheck className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Vitamín vs. Painkiller
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Nečítaj to, čo je "dobré pre rozvoj" (Vitamíny). Čítaj len
                    to, čo okamžite rieši tvoj momentálny, akútny a pálčivý
                    problém (Painkiller). Focus zachraňuje hardvér.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (BOOK-TO-CODE COMPILER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Book-To-Code Compiler
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Zadaj do terminálu citát alebo teóriu z prečítanej knihy, ktorej
              nerozumieš alebo ju nevieš aplikovať (napr.{" "}
              <em>"Sila prítomného okamihu od Tolleho"</em> alebo{" "}
              <em>"Bohatý otec chudobný otec"</em>). AI tento teoretický balast
              rozbije a vygeneruje fyzické kroky pre inštaláciu do reality.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj teóriu alebo citát..."
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
                Reader UI Space
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Dimenzia určená na extrakciu, sémantickú dekompresiu a aplikáciu
                (nasadenie do praxe) informácií z kníh do bežného života.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Mŕtve Knihy
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Všetka teória napísaná inými entitami. Kód, ktorý nemá hodnotu,
                pokiaľ ho neskompiluješ cez vlastnú bolesť do "Prežitej Pravdy".
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Kognitívna prokrastinácia
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Vírus Matrixu. Klamlivý pocit vlastnej produktivity získaný z
                neustáleho štúdia ďalšej literatúry bez exekúcie
                predchádzajúcich lekcií.
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
                1. The Hoarder
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Intelektuálny zberateľ. Vníma knihy ako odznaky. Má prečítané
                stovky kníh, no jeho reálny život je v troskách. Bojuje so
                strachom a dlhmi. Jeho RAM je zaplnená mŕtvou teóriou, ktorá mu
                zabraňuje vnímať surovú prítomnosť.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Zberateľ Teórie
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Apathetic
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Konzument bez filtra. Nečíta nič iné než spravodajské feedy a
                toxické diskusie. Jeho systém je zraniteľný, pretože odmieta
                akýkoľvek "Security Update" vo forme odbornej literatúry.
                Prežíva na chybnom kóde Matrixu.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Bezpečnostné Riziko
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
                3. The Code Compiler
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Architekt Prázdnej Knihy. Používa knihy výhradne ako dočasné
                inštalačné balíky. Keď získa algoritmus, knihu mentálne spáli a
                kód aplikuje do praxe. Jeho vlastný život sa stal jedinou
                knihou, z ktorej sa učí.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Exekútor
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
                  root@nexus-core:~/ID08_NODE_01_READER_UI
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
                execute empty_book_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 DEAD BOOK HOARDING / LACK OF EXECUTION DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 EMPTY-BOOK PROTOCOL & COMPILER ROUTINE INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 RAW DATA CONVERTED TO LIVED TRUTH (O(1) EFFICIENCY)
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
                  "KNIHA JE LEN MANUÁL. POKIAĽ NEOTVORÍŠ TERMINÁL A NENAPÍŠEŠ
                  KÓD, NEVIEŠ NIČ. ZAVRI KNIHU A KONAJ."
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
