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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID08_05)
// =====================================================================

export default function Node_ID08_05() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID08-05";

  // State pre Idea-to-Cash Converter
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
      lower.includes("vesmír") ||
      lower.includes("pozitívn") ||
      lower.includes("zajtra") ||
      lower.includes("raz") ||
      lower.includes("snívať")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Spiritual Hoarding & Wishful Thinking! Matrix ťa oklamal. Krok 1: Prestaň čakať na vesmír. Krok 2: Identifikuj 1 reálny problém vo svojom systéme (dlh, úzkosť). Krok 3: Napíš 5 riadkov fyzického kódu alebo urob nepríjemný hovor. HNEĎ.",
      });
    } else if (
      lower.includes("aktív") ||
      lower.includes("pasív") ||
      lower.includes("dlh") ||
      lower.includes("kiyosaki") ||
      lower.includes("invest") ||
      lower.includes("kód") ||
      lower.includes("peniaze")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Deployment Finančného Kódu detekovaný. Krok 1: Otvor Internet Banking. Krok 2: Zruš jeden trvalý príkaz na Pasívum (napr. predplatné, zbytočnosť). Krok 3: Presmeruj túto čiastku do splatenia zlého dlhu alebo nákupu domény pre tvoj Nexus. 100% ROI.",
      });
    } else if (
      lower.includes("prítom") ||
      lower.includes("myseľ") ||
      lower.includes("strach") ||
      lower.includes("tolle") ||
      lower.includes("osho") ||
      lower.includes("ticho") ||
      lower.includes("ego")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Deployment Mentálneho Kódu detekovaný. Krok 1: Keď príde dnes večer strach alebo úzkosť, neanalyzuj ho. Krok 2: Identifikuj, kde v tele cítiš tlak (RAM overload). Krok 3: Ticho dýchaj do toho miesta bez jediného slova. Popravíš Insomniu.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Teória je príliš vágna na kompiláciu. Neobsahuje priamy 'Painkiller' (Liek na bolesť). Dekomprimuj tento citát na: 1. Akú bolesť rieši? 2. Aký fyzický krok si vyžaduje? 3. Kedy ten krok urobíš? Inak je to len bloatware.",
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
            READER PROSPERITA
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (OD MYŠLIENKY KU KAPITÁLU)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#ReaderProsperita",
            "#DataToCapital",
            "#ROIofReading",
            "#CodeExecution",
            "#KiyosakiPatch",
            "#TolleProtocol",
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
            "Prečítal som vyše 350 mŕtvych kníh. Roky som si myslel, že
            bohatstvo čitateľa sa meria počtom gigabajtov teórie, ktorú má
            uloženú na disku. Ale skutočná 'Reader Prosperita' nastáva až vtedy,
            keď cudzí kód premeníš na vlastný fyzický kapitál alebo absolútny
            vnútorný pokoj. Keď som z Kiyosakiho pochopil rozdiel medzi aktívom
            a pasívom, prestal som len čítať o ceste bohatých a začal som
            fyzicky defragmentovať svojich 3500 € zlého dlhu z prežitia na 530 €
            invalidnom dôchodku. Keď som u Tolleho a Osha objavil silu
            prítomného okamihu, prestal som citovať cudzie frázy a definitívne
            som popravil svoju Insomniu. Myšlienka z knihy nemá absolútne žiadnu
            trhovú hodnotu, kým ju tvoj Skafander neodpracuje v tvrdej fyzickej
            realite. Prosperita čitateľa sa nemeria počtom prečítaných strán,
            ale množstvom bolesti a chýb, ktoré si pomocou nich dokázal zo
            svojho Matrixu navždy odstrániť."
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
          <GlobalNodeVideo nodeId="ID08_05" dimColor={TIER_COLOR} />
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
                V ére "Knihomoľa" som zhromažďoval dáta ako posadnutý. Bol to
                však len teoretický balast. Skutočnú prosperitu som zažil až v
                momente kompilácie. Vzal som Kiyosakiho protokol a surovo ho
                aplikoval na svoj 3500-eurový dlh. Prestal som kupovať pasíva.
                Vzal som Tolleho inštrukcie a aplikoval ich priamo na svoj
                strach a parazitický hlas. Až keď sa myšlienka stala mojím
                vlastným algoritmom a mojím prvým budovaným aktívom (Projekt
                Nexus pre 150 € MRR), zistil som, čo to znamená byť úspešným
                čitateľom.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                V IT systémoch je hodnota definovaná ako Return on Investment
                (ROI). Čítanie je časová investícia. Ak dáta zostanú len na
                disku (Read-Only), ROI je 0%. Prosperita čitateľa nastáva vo
                chvíli "Deploymentu", kedy sa prečítaný sémantický kód
                transformuje do "Executable" (
                <code className="text-[#00FFFF] bg-black px-1 py-0.5 rounded">
                  .exe
                </code>
                ) súboru, ktorý upraví správanie systému (zastavenie plytvania,
                zvýšenie výkonu). Dáta sa menia na fyzický Kapitál.
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
                    Robert Kiyosaki:
                  </strong>{" "}
                  Finančná inteligencia nespočíva v znalosti definícií z kníh,
                  ale v schopnosti vyriešiť reálny problém. Kto číta, no
                  neinvestuje, zostáva chudobný.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Eckhart Tolle:
                  </strong>{" "}
                  Varuje pred "koncepčným myslením" – môžete prečítať knihu o
                  mieri, no ak sa pri prvej hádke identifikujete s Egom, celá
                  kniha bola zbytočná. Prosperita je tiché Bytie v praxi.
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
                  Anatómia Prosperity{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Konverzia textu na menu)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix nám vnútil klamstvo, že "vedomosti sú moc". Vedomosti
                samé o sebe sú len mŕtvy text (teória). Mocou sa stávajú až po
                ich tvrdom kompilovaní do reality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <TerminalSquare className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Dekompresia Významu
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Tvoja prosperita z knihy nezačína vtedy, keď ju dočítaš, ale
                    vtedy, keď ju pochopíš. Čítanie bez poznámkového bloku je
                    strata času. Keď nájdeš kľúčový kód (Painkiller), musíš ho
                    vyextrahovať a preložiť do svojho vlastného jazyka. Až to,
                    čo si sám sformuluješ, môžeš začať žiť.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Banknote
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Prevod do Fyzického Sveta
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Ak čítaš o tom, že "aktíva ti peniaze prinášajú", prosperita
                    nastane až v to ráno, kedy si odoprieš kúpu nového telefónu
                    a tie isté peniaze naleješ do nákupu domény pre tvoj Nexus
                    alebo do splatenia dlhu. To je moment, kedy sa papierový
                    riadok zmenil na digitálny kapitál.
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
                    (Ilúzia Vzdelania)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Prečo milióny ľudí čítajú sebarozvojové knihy, a napriek tomu
                zostávajú v depresiách a v Krysích závodoch? Pretože Matrix
                zmenil učenie na pasívnu zábavu.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <BrainCircuit className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Dopamínový Klam
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Keď čítaš o úspechu miliardárov, mozog vyplaví dopamín,
                      akoby si tým miliardárom bol ty sám. Komentátor Parazit ťa
                      oklame pocitom "skvelej práce na sebe". Ukončíš kapitolu,
                      no tvoj skutočný účet a denná rutina zostali rovnaké. Toto
                      nie je prosperita, to je intelektuálna masturbácia.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Database className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Zberateľstvo Informácií (Hoarding)
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Systém ťa presviedča, že kým začneš kódovať biznis alebo
                      zmeníš svoj život, musíš prečítať "ešte jednu knihu". Tým
                      ťa paralyzuje. Matrix vie, že kým len čítaš a stojíš na
                      brehu, nepredstavuješ preň hrozbu.
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
                    (Zavedenie Kódu do CPU)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aby si z mŕtvej knihy dostal fyzický kapitál a pokoj do Home UI
                Space, musíš použiť násilie na svojom zvyku.
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Kiyosakiho Patch (Finančný Výsledok)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Zistil si, že systém Zamestnanec platí najvyššie dane.
                    Prečítal si, že musíš vybudovať systém "Majiteľ". Reader
                    Prosperita sa u teba zhmotnila, keď si začal programovať OS
                    Genesis pre 1000 uzlov. Každý riadok kódu v Nexuse je
                    priamym zhmotnením textu z Cashflow Kvadrantu.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Tolleho a Oshov Patch (Mentálny Výsledok)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Tvojou bolesťou bola Insomnia (100% preťaženie RAM). Mŕtve
                    knihy radili "Zostaň v prítomnosti". Prosperita nastala v tú
                    noc, kedy si aktivoval Tichého Svedka, ignoroval si Hlas
                    Poznania vo svojej hlave a zaspal si. To nebol úspech knihy,
                    to bol tvoj exekutívny úspech.
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
                    (Meranie ROI z Čítania)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Kybernetické príkazy pre zaručenie Reader Prosperity pri každom
                novom texte.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Activity className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Protokol "1:1"
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Jedna lekcia = Jedna akcia. Ak z knihy nevyextrahuješ aspoň
                    jednu konkrétnu činnosť (napr. zrušenie zmluvy, nová
                    rutina), máš zakázané knihu počítať ako "prečítanú".
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <ShieldCheck className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    The Painkiller Audit
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    "Aký konkrétny Error v mojom živote má táto kniha
                    odstrániť?" Ak nevieš odpoveď, kniha je len Vitamín
                    (balast). Čítaj len to, čo akútne rieši tvoj problém.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Code
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Kompilácia Vlastného Kódexu
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Tvoja finálna prosperita. Z 350+ mŕtvych kníh si urobil
                    dekompresiu a začal si písať vlastný kód. Informácie z
                    cloudu si pretavil do intelektuálneho aktíva, ktoré ti
                    prináša priamy MRR zisk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (IDEA-TO-CASH CONVERTER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Idea-to-Cash Converter
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Skopíruj do terminálu ľubovoľný "inšpiratívny citát" z knihy,
              ktorú práve čítaš. Umelá inteligencia sémanticky vymaže všetku
              duchovnú omáčku a vygeneruje ti{" "}
              <strong>3 drsné, algoritmické a fyzické kroky</strong>, ktoré
              musíš do 24 hodín uskutočniť, aby sa tento citát premenil na
              reálne OC Kredity (peniaze) alebo ušetrenú energiu.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj citát z mŕtvej knihy..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Convert
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
                Reader Prosperita
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Merateľný fyzický alebo psychický výsledok (ROI), ktorý operátor
                dosiahol ako priamy následok implementácie teórie z mŕtvej knihy
                do tvrdej reality.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Kompilácia textu
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Proces, kedy Architekt prestane teóriu len čítať, zavrie knihu a
                začne vykonávať sériu krokov na otestovanie pravdy na vlastnom
                hardvéri (koži).
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Intelektuálna Masturbácia
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Čítanie náučnej literatúry výhradne pre pocit falošnej
                produktivity a nadradenosti, bez akejkoľvek ambície myšlienky
                reálne použiť.
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
                1. The Theorist
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Uväznený v cloude. Prečíta desiatky kníh, pýši sa knižnicou.
                Jeho fyzický život je však katastrofa – nízky príjem, toxické
                vzťahy. Jeho Reader Prosperita je 0, pretože z mŕtvych kníh
                neurobil ani jeden fyzický "Deploy".
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Teoretik bez praxe
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Daydreamer
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Dopamínový Snílek. Číta úspešné príbehy iných a predstavuje si,
                aké by to bolo. Dopamín mu vydrží 3 dni po dočítaní knihy.
                Nechápe, že úspech z knihy si vyžaduje vybudovať reálny, nudný a
                ťažký systém.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Pasívny Snílek
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
                3. The Code Executor
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Architekt Prosperity. Z knihy vyreže iba surový zdrojový kód
                (Painkiller) a okamžite ho inštaluje do života. Mŕtvu literatúru
                mení na hmatateľný kapitál a ticho v hlave. Jeho knižnica sú
                bežiace programy.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Kompilátor Reality
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
                  root@nexus-core:~/ID08_NODE_05_READER_PROSPERITY
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
                execute roi_compilation_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 DEAD DATA ACCUMULATION (ZERO ROI) DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 CODE COMPILATION AND 1:1 EXECUTION PROTOCOL ENGAGED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 DEAD BOOKS SUCCESSFULLY CONVERTED INTO PHYSICAL CAPITAL
                    AND PEACE
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
                  "MŔTVA MYŠLIENKA NA DISKU TI ÚČTY NEZAPLATÍ. SKOMPILUJ JU A
                  UROB Z NEJ SVOJ CASH-ENGINE."
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
