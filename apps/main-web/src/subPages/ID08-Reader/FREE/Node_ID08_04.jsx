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
  Library,
  Trash2,
  Flame,
  LifeBuoy,
  Droplet,
  Anchor,
  Bookmark,
  Focus,
  Calendar,
  AlarmClock,
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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID08_04)
// =====================================================================

export default function Node_ID08_04() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID08-04";

  // State pre Reading-Routine Optimizer
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
      lower.includes("večer") ||
      lower.includes("postel") ||
      lower.includes("zaspávam") ||
      lower.includes("unaven") ||
      lower.includes("noc")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Bedtime Reading Malware detekovaný! Čítanie tesne pred spaním, keď je tvoj procesor na 1% výkone, znamená nulovú indexáciu dát do pamäte. Kniha slúži len ako sedatívum. Presuň toto okno na čas, kedy máš plnú RAM kapacitu.",
      });
    } else if (
      lower.includes("ráno") ||
      lower.includes("káv") ||
      lower.includes("altánok") ||
      lower.includes("pomodoro") ||
      lower.includes("obed") ||
      lower.includes("zapisujem") ||
      lower.includes("tich") ||
      lower.includes("blok")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Deep-Work Ingestion aktívne! Zlaté okno (Time-Block) správne alokované. Tvoj systém kompiluje text bez interference. Odporúčanie: Pre plný efekt aktivuj počas tohto bloku Letový Režim na zariadení.",
      });
    } else if (
      lower.includes("autobus") ||
      lower.includes("obed") ||
      lower.includes("cestou") ||
      lower.includes("počúvam hudbu") ||
      lower.includes("tv")
    ) {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Fragmentácia pozornosti (Multitasking). Tvoj procesor platí daň za prepínanie úloh. Dáta sa zapisujú povrchne. Odporúčam vymeniť toto chaotické čítanie za jeden čistý, nerušený 25-minútový Pomodoro šprint.",
      });
    } else {
      setAuditResult({
        status: "SYSTEM LOG",
        color: "text-zinc-400",
        bg: "bg-zinc-900/50",
        border: "border-zinc-700",
        icon: <Terminal className="w-5 h-5 text-zinc-400" />,
        message:
          "Analyzujem plán... Pre maximálnu absorpciu si vyhraď 45 minút neprerušeného času a následne 5 minút kontemplácie na Garbage Collection (zápis na HDD). Neskáč od knihy priamo k inej úlohe.",
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
            READER LIFE
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (KAŽDODENNÁ RUTINA)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#ReaderLife",
            "#TerapiaCitanim",
            "#MindfulReading",
            "#DataIngestion",
            "#Pomodoro",
            "#OneNote",
            "#DeepWork",
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
            "Konzumovať dáta náhodne znamená zahltiť si cache a spomaliť
            procesor. Moje čítanie nie je voľnočasová aktivita, ktorou zabíjam
            nudu pred spaním. Je to prísne štruktúrovaný protokol, ktorý v mojom
            Organizéri nazývam 'Terapia čítaním'. Mám na to vyhradené exaktné
            časové bloky. Keď do rúk beriem Tab A9+ alebo fyzickú knihu,
            prechádzam do režimu 'Mindful Reading' (Všímavé čítanie). Vnímam len
            zdrojový kód autora. Nepočúvam hudbu so slovami, nesledujem
            notifikácie, neskáčem do iných aplikácií. Používam techniku Pomodoro
            – sústredený ponor a nevyhnutný reštart na uloženie dát. Čítať bez
            zapnutého poznámkového bloku (OneNote debilníčka) je pre mňa prísne
            zakázané, pretože neuložené dáta sa z RAM do 24 hodín vymažú
            (Garbage Collection). Takto dokážem absorbovať 50 až 70 kníh ročne
            bez toho, aby som skončil v stave pretečenia pamäte."
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
          <GlobalNodeVideo nodeId="ID08_04" dimColor={TIER_COLOR} />
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
                V dobe, keď ma ovládal Z.O.M.B.I.E. mód, som čítal chaoticky.
                Bral som knihu kedykoľvek, prehltol 100 strán a nič si
                nepamätal. Moja RAM bola zahltená. Dnes mám čítanie zaradené ako
                tvrdý <strong className="text-white">"Task"</strong>. Ak je v
                pláne "Terapia čítaním" od 13:00 do 14:00, svet okolo mňa
                prestáva existovať. Čítam, extrahujem kód do OneNote, analyzujem
                ho a aplikujem do Nexusu.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                Z hľadiska systémovej architektúry ide o{" "}
                <strong className="text-[#00FFFF]">
                  Scheduled Data Ingestion
                </strong>
                . Ak systém sťahuje aktualizácie neustále na pozadí (v autobuse,
                pri jedle), dochádza k fragmentácii. Vytvorením izolovaného Time
                Blocku systém alokuje 100% jadier procesora na dekódovanie
                sémantiky. Zvyšuje sa kompresný pomer.
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
                    Cal Newport (Deep Work):
                  </strong>{" "}
                  Varuje pred roztrieštenou pozornosťou. Skutočné intelektuálne
                  remeslo vyžaduje dlhé bloky nerušeného času.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Zenové Majstrovstvo:
                  </strong>{" "}
                  Mindful Reading znamená, že keď čítaš, neexistuješ ty a kniha,
                  existuje len akt čítania. Prísna technická štruktúra chráni
                  zenový stav.
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
                  Anatómia Terapie Čítaním{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Od Hobby k Hard-Skriptu)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                V Matrixe ľudia vnímajú čítanie kníh buď ako nudnú školskú
                povinnosť, alebo ako pasívnu voľnočasovú aktivitu. V OS Genesis
                má čítanie status <em>Systémovej Terapie</em>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Library className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Kategorizácia Ingestion Portov
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Vo svojom Organizéri mám čítanie rozdelené do pevných
                    kategórií podľa toho, aký sektor HDD chcem updatovať.
                    Rozlišujem finančné vzdelávanie (Kiyosaki), odborné (IT) a
                    osobný rast (Osho). Každý okruh má svoj časový blok.
                    Nemiešam kódy.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <BrainCircuit
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Terapia vs. Konzum
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Pojem "Terapia" používam zámerne. Mŕtve knihy slúžia nielen
                    na dodanie faktov, ale na ukľudnenie roztočeného procesora.
                    Je to forma "Mindful Reading". Pri čítaní sa fyzicky usadím
                    a dovoľujem slovám pôsobiť ako chladiaca kvapalina na mozog.
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
                    (Zabijaci kognitívnej kapacity)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Komentátor Parazit a technológie ťa odnaučili lineárne prijímať
                dáta. Čítanie sa stalo bojom o prežitie pozornosti.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <BatteryCharging className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Vírus "Čítania pred spaním"
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Matrix ťa naučil siahnuť po odbornej knihe o 23:00, keď je
                      tvoja "batéria" na 1 %. Výsledok? Po dvoch stranách
                      zaspíš, procesor nevykoná žiadnu indexáciu. Kniha slúži
                      len ako sedatívum. Architekt robí Terapiu cez deň (napr. o
                      14:00), kedy má plný výpočtový výkon.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <MessageSquareX className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Multitaskingový Malvér
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Najrýchlejší spôsob, ako zničiť hodnotu textu, je čítať a
                      mať zapnutý TV alebo Messenger. Každé odpútanie spôsobuje
                      "Task Switching Tax" – trvá 20 minút, kým sa RAM vráti do
                      ponoru. Architekt nasadzuje Zero-Input mód.
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
                    (Kódovanie rutiny Reader Life)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako presne vyzerá mechanika "nasávania textov" v živote
                Architekta pracujúceho z Home UI Space?
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Time-Blocking (Fixné Okná)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Môj Organizér má jasne zadefinované sloty. Napr. blok od
                    13:00 do 14:00 je natvrdo rezervovaný na Terapiu čítaním. V
                    tejto hodine sa nerieši práca na Nexuse ani povinnosti. Je
                    to posvätný <code>Read-Only</code> čas.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Pravidlo Extrakcie (Zettelkasten Mód)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Neexistuje čítanie bez môjho "debilníčka" vo VS
                    Code/OneNote. Ak na mňa v texte zableskne silný koncept
                    (Painkiller), čítanie preruším. Myšlienku vlastnými slovami
                    prepíšem do systému a označím tagmi. Kniha je len dočasná;
                    môj OneNote je Mainframe.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    3. Učenie sa vyučovaním (Output generácia)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    To, čo prečítam, si neukladám len pre seba. Z prečítaného
                    okamžite vytvorím Výstup. Napíšem recenziu, vytvorím
                    Markdown uzol alebo nahrám podcast. Transformácia na vlastný
                    kód garantuje 100 % zapamätanie si princípu.
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
                    (Hardvérová exekúcia čítania)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Konkrétne pluginy, ktoré nasadzujem pre zrýchlenie a
                skvalitnenie "Data Ingestion" procesu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <AlarmClock className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Metóda Pomodoro (25/5)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Biologický nosič neudrží 100% fokus dlho. Nastavím budík na
                    25 minút brutálneho čítania. Potom 5-minútová pauza
                    (pozeranie do blba), počas ktorej beží kompilácia a
                    ukladanie na HDD.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Mic className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Audio-Terapia (Dvojitý vnem)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Keď zrak zlyháva, zapínam Audioknihy. Toto nasadzujem do
                    "mŕtvych časov" – pri prechádzkach alebo v záhrade, kde telo
                    robí Wu-Wei kinetiku a mozog prijíma audio kód.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Eraser
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Unlearning Pause
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Po prečítaní zložitej kapitoly (napr. Jung) zavriem oči na 5
                    minút. Neanalyzujem. Len ticho pozorujem dojem. Táto pasívna
                    kontemplácia dovoľuje "Zdroju" odpovedať mi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (READING-ROUTINE OPTIMIZER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Reading-Routine Optimizer
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Vlož do terminálu tvoj súčasný denný pracovný rozvrh a{" "}
              <strong>čas/prostredie, kedy zvykneš čítať</strong> (napr.{" "}
              <em>"Čítam večer v posteli kým nezaspím"</em>,{" "}
              <em>"Čítam v autobuse a pozerám mobil"</em>,{" "}
              <em>"Mám blok ráno o 8:00 pri káve"</em>). AI podrobí tvoju rutinu
              záťažovému testu.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Ako a kedy zvykneš čítať?..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Optimize
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
                Terapia Čítaním
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Systematicky naplánované okno v Organizéri určené na hlboký
                ponor do textu s cieľom utíšiť mozgové vlny a prevziať cenný
                sémantický kód.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Mindful Reading
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Zenový prístup k štúdiu. Absolútna koncentrácia výlučne na
                prijímanie slov, bez externého šumu a bez hodnotiaceho
                Komentátora.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Zettelkasten / Debilníček
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Externý HDD Architekta. Záznamník, do ktorého sa okamžite
                ukladajú zachytené myšlienky (Painkillery), aby nedošlo k Memory
                Leaku.
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
                1. The Bedtime Skimmer
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Uspávač. Číta odborne neskoro v noci, keď má CPU 1 %. Stránky
                prelieta bez pochopenia, nerobí si poznámky a na druhý deň si
                nič nepamätá. Jeho investícia do kníh je finančná aj časová
                strata.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Nulová Retencia
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. Multi-tasking Hoarder
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Roztržitý Knihomoľ. Číta všade a stále (v buse, na WC), no vždy
                je jedným okom na notifikáciách. Trpí ilúziou masívnej
                produktivity. Ukladá si do hlavy názvy kníh pre svoje Ego, no
                neovláda z nich žiadny algoritmus.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Task Switching Tax
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
                3. Deep-Work Architect
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Tichý Kompilátor. Knižnica je jeho laboratórium. Čítanie má
                prísne naplánované v "Zlatých hodinách" s 0 % rušením. Nasadzuje
                Pomodoro a každý kľúčový koncept okamžite prekladá do
                hmatateľnej zmeny vo svojom systéme.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Data Ingestion Pro
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
                  root@nexus-core:~/ID08_NODE_04_READER_LIFE
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
                execute deep_ingestion_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 BEDTIME READING / FRAGMENTED ATTENTION DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 MINDFUL READING TIME-BLOCKS & POMODORO INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 DEEP-WORK INGESTION WITH ZERO DATA LOSS DEPLOYED
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
                  "NEČÍTAJ VTEDY, KEĎ UMIERAŠ OD ÚNAVY. ČÍTAJ VTEDY, KEĎ SI
                  PRIPRAVENÝ MENIŤ ZDROJOVÝ KÓD."
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
