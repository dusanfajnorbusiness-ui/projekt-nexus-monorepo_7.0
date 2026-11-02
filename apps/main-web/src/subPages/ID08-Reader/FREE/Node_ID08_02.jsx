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

// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID08_02)
// =====================================================================

export default function Node_ID08_02() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID08-02";

  // State pre Knowledge vs Action Calculator
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
      lower.includes("čítam") ||
      lower.includes("nič") ||
      lower.includes("plánujem") ||
      lower.includes("chystám") ||
      lower.includes("zajtra") ||
      lower.includes("nemám čas") ||
      lower.includes("iba") ||
      lower.includes("študujem")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Buffer Overflow! Action Ratio < 30%. Tvoja RAM je zaplnená mŕtvou teóriou bez exekúcie. Systém ti zablokoval prístup k ďalšiemu čítaniu. Musíš okamžite nasadiť aspoň 1 naučený riadok do produkcie, inak ti zlyhá BIOS.",
      });
    } else if (
      lower.includes("aplikoval") ||
      lower.includes("kód") ||
      lower.includes("kúpil") ||
      lower.includes("investoval") ||
      lower.includes("napísal") ||
      lower.includes("zmazal") ||
      lower.includes("zmenil") ||
      lower.includes("natočil") ||
      lower.includes("vytvoril")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Just-In-Time Compilation úspešná! Dáta boli transformované na čistý kód a nasadené do ostrej prevádzky. Z teórie sa stala Prežitá Pravda. Tvoj systém je chránený a pripravený na stiahnutie ďalšieho Painkillera.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Zápis detegovaný, ale exekúcia je nejasná. Uisti sa, že tieto 3 kurzy alebo knihy nevytvorili len dopamínový klam produktivity. Odpovedz si: Zaplatilo mi toto štúdium aspoň jeden účet, alebo vyriešilo úzkosť?",
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
            KNIHOMOĽ VS LEŇOCH
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (KONZUMÁCIA VS IGNORANCIA)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#CestaKnihomola",
            "#CestaLenocha",
            "#DataHoarding",
            "#InformationEntropy",
            "#ZombieMode",
            "#DeadBooks",
            "#ExecutionProtocol",
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
            "Do leta 2018 som fungoval v Z.O.M.B.I.E. móde. Bol som 'Leňoch',
            uväznený v pasívnej ignorancii. Po poprave Insomnie sa vo mne
            prebudil hlad a preklopil som sa do druhého extrému – stal sa zo mňa
            'Knihomoľ'. Sťahoval som e-knihy, nakupoval tituly a zhltol vyše 350
            mŕtvych kníh. Osho, Kiyosaki, Jung. Cítil som sa nadradene nad
            'davom', ktorý pozerá len televíziu. Až neskôr prišiel tvrdý
            systémový pád a kruté prebudenie: Cesta Knihomoľa a Cesta Leňocha sú
            len dve rôzne cely v tom istom väzení Matrixu. Leňoch vypína svoj
            procesor (CPU) konzumáciou toxického bulváru, zatiaľ čo Knihomoľ
            svoj procesor naopak prepaľuje teoretickým balastom bez akejkoľvek
            reálnej exekúcie. Kým nenasadíš aspoň jeden prečítaný riadok do
            tvrdej praxe, si rovnakým otrokom systému, či už v ruke držíš
            diaľkový ovládač od TV, alebo knihu od Eckharta Tolleho."
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
          <GlobalNodeVideo nodeId="ID08_02" dimColor={TIER_COLOR} />
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
                V osobnej rovine som zakúsil oba zničujúce extrémy. Dlhé roky
                som ako Leňoch prijímal realitu bez otázok. Keď prišlo
                prebudenie, prepadol som "Duchovnému Egu". Hltal som mŕtve
                knihy. Ale vedomosti nedokázali splatiť moje dlhy (3500 €). Kým
                Leňoch sa vzdal, Knihomoľ trpí utkvelou ilúziou, že "sa učí".
                Rozdiel medzi teóriou a skutočným bohatstvom je ten, že prežiť
                Cestu Praxe znamená knihu zahodiť a ísť kódiť Projekt Nexus do
                noci.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                V architektúre IT to predstavuje kritické systémové zlyhania.
                "Cesta Leňocha" je{" "}
                <strong className="text-white">Entropia</strong> (úpadok) –
                systém neprijíma Security Patche. "Cesta Knihomoľa" je chyba{" "}
                <strong className="text-[#00FFFF]">Buffer Overflow</strong>{" "}
                (Pretečenie pamäte) – operátor nahráva na HDD tisíce GB dát, no
                procesor ich nestíha kompilovať do spúšťacieho (.exe) súboru, čo
                vedie ku kognitívnej paralýze.
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
                  Demaskuje Knihomoľa ako "Analýzu - Paralýzu". Operátori, ktorí
                  prečítajú desiatky kníh o realitách, no neurobia jedinú
                  ponuku, sú zožratí trhom rovnako ako Leňosi.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Osho (OMEGA):
                  </strong>{" "}
                  Varuje pred gnostickou mentalitou. Teoretická vedomosť je
                  mŕtva váha (Dead Weight). Iba vedomosti preskúšané na vlastnej
                  bytosti tvoria inteligenciu.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. DECOMPRESSION (HLAVNÝ TEXT) - ŠTANDARD OSTRÝCH HRÁN A NADPISOV */}
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
                  Anatómia Informačného Zlyhania{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Extrémy Matrixu)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix ťa potrebuje udržať v rovine nečinnosti. Aby to dosiahol,
                vytvoril dve zdanlivo protichodné, no rovnako deštruktívne pasce
                pre tvoju kognitívnu kapacitu.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Waves className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Entita Leňoch (Trash-Data Consumer)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Operátor v tomto móde žije v absolútnej nevedomosti
                    (Z.O.M.B.I.E. mód). Prijíma iba dáta, ktoré mu podsúva
                    hlavný prúd (mainstream, TikTok, negatívne správy). Jeho
                    obranný Firewall neexistuje. Odmieta akýkoľvek "upgrade"
                    softvéru cez odbornú literatúru. Je pasívnym objektom
                    Matrixu, vyciciavaným pre jeho lacný čas a pozornosť.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Database
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Entita Knihomoľ (Data Hoarder)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Prebudenejšia entita, ktorá odmietla lacný dopamín, no
                    spadla do pasce vzdelania. Konzumuje knihu za knihou. Číta
                    Osha pre dušu, Kiyosakiho pre peňaženku. Cíti sa
                    "produktívne", no je to len syntetický klam. Pýši sa počtom
                    prečítaných diel. Matrix vyhral tým, že ho premenil na
                    permanentného akademického zberateľa teórie bez akcie.
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
                    (Ilúzia Produktivity)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix vie, že ak ti zabráni v aplikácii, zabráni ti v
                dosiahnutí slobody a úniku do Nexusu.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Prokrastinácia pod Rúškom Vzdelania
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Komentátor Parazit v tebe vyvolá pocit:{" "}
                      <em>
                        "Ešte nemáš dosť informácií na to, aby si spustil
                        Projekt. Prečítaj si ešte jednu knihu o marketingu."
                      </em>{" "}
                      Učenie sa stáva dokonalým únikovým modulom pred tvrdou
                      zodpovednosťou. Bojíš sa zlyhania, a tak radšej "študuješ"
                      návody.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Ghost className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Nadradenosť Ega (Spiritual Bypass)
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Knihomoľ prestane žiť s ľuďmi a začne žiť nad nimi.
                      Kedykoľvek čelí kríze, jeho Ego začne citovať mŕtve knihy
                      miesto toho, aby ukázalo zraniteľnosť. Myseľ zneužije
                      všetky tie "hlboké poučky" len na to, aby posilnila steny
                      vlastného väzenia.
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
                    (Rozbitie Knihomoľa)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Prejsť do role skutočného Architekta si vyžaduje brutálny zásah
                do spôsobu, akým interaguješ s externými dátami.
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Pravidlo Painkillera (Vitamín vs. Liek)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Leňoch nečíta nič. Knihomoľ číta všetko ("vitamíny" pre
                    Ego). Architekt číta výhradne vtedy, keď jeho systém
                    deteguje kritickú chybu. Ak má Architekt dlhy, otvorí
                    Cashflow Kvadrant. Knihu zavrie v momente, kedy nájde
                    "Liek", a od tej chvíle nasadzuje plnú výpočtovú kapacitu do
                    opravy vlastného systému.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Protokol "Stop and Deploy"
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Zásadná zmena algoritmu učenia. Čítanie bez fixky a
                    zápisníku (Zettelkasten) je prísne zakázané. Kedykoľvek
                    Architekt pri čítaní narazí na "Aha" moment, musí okamžite
                    prerušiť čítanie. Tento koncept sa musí ešte v ten istý deň
                    aplikovať na reálny život – či už do kódu, alebo do rutiny.
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
                    (Kompilácia Dát)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aplikovanie týchto tvrdých pravidiel definitívne zruší mód
                Leňocha aj Knihomoľa.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <BookX className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    "Empty Book" Mindset
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Dôjdenie do bodu singularity. Keď máš na disku 350+ mŕtvych
                    kníh, všetko dôležité už vieš. Zavrieš knižnicu a otočíš
                    fokus dovnútra na Prežitú Pravdu.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Download
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Just-In-Time Learning
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Systém ťahá vedomosti len presne vtedy, keď ich kód aktuálne
                    vyžaduje. Ak neriešiš problém akciového trhu, tvoja RAM má
                    prísny zákaz študovať grafy.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <UploadCloud className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Output &gt; Input
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Liek na prežratosť informáciami je produkcia. Architekt
                    presúva 80 % energie z módu "Downloader" do módu "Uploader"
                    a začne natáčať a písať vlastný kód.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (KNOWLEDGE VS ACTION CALCULATOR) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Knowledge vs Action Calculator
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Zadaj do terminálu názvy posledných 3 kníh alebo kurzov, ktoré si
              preštudoval a{" "}
              <strong>
                čo presne fyzické si na základe nich vo svojom živote urobil
              </strong>{" "}
              (napr.{" "}
              <em>
                "Čítal som Atómové návyky, ale neurobil som s tým zatiaľ nič"
              </em>{" "}
              alebo <em>"Prečítal som React Docs a napísal som prvú Appku"</em>
              ). AI vypočíta tvoje Action Ratio.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Kniha/Kurz a tvoja exekúcia..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Scan Ratio
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
                Cesta Knihomoľa (Data Hoarding)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Kognitívna porucha, charakterizovaná hromadením teoretických
                vedomostí ("mŕtvych kníh") bez akejkoľvek následnej exekúcie v
                realite (Prežitej Pravdy).
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Cesta Leňocha (Entropy)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Úplná pasívna ignorancia a absencia Firewallu voči vonkajšiemu
                svetu. Zastaraný BIOS, ktorý prijíma iba lacné, toxické
                dopamínové kódy z Matrixu.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Just-in-Time Compilation
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Protokol Architekta. Prijímanie iba tých dát, ktoré sú absolútne
                a okamžite nevyhnutné pre opravu súčasného kritického erroru v
                systéme (Painkiller).
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
                1. The Sloth
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Leňoch / Ignorant. Odmieta akýkoľvek update svojho systému. Živí
                sa mentálnym fast-foodom a zostáva nevedomým ozubeným kolesom v
                stroji Matrixu, navždy odkázaný na sny iných.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Hlboká Entropia
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Hoarder
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Knihomoľ. Zaseknutý v ilúzii rastu. Číta stovky kníh a absolvuje
                kurzy. Trpí však extrémnou "akčnou paralýzou". Všetky jeho
                vedomosti umierajú na lokálnom disku, nikdy ich nenasadí.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Data Hoarding
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
                Biely Čarodejník. Mŕtve knihy berie ako surový nástroj, ktorý po
                extrakcii Painkillera zmaže. Žije v stave "Empty Book", kde
                najdôležitejšou literatúrou sú odžité jazvy z bojiska Matrixu.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Architekt Bytia
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
                  root@nexus-core:~/ID08_NODE_02_EXECUTION
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
                execute action_ratio_override
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 SYSTEM OVERLOAD / THEORY HOARDING (BOOKWORM MODE) DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 JUST-IN-TIME COMPILATION & EMPTY-BOOK PROTOCOL INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 DATA SUCCESSFULLY CONVERTED TO LIVED TRUTH (EXECUTION
                    MODE)
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
                  "MŔTVE KNIHY TVOJE DLHY NESPLATIA A TVOJE EGO NEVYPNÚ. PRESTAŇ
                  KONZUMOVAŤ. ZAČNI KÓDOVAŤ REALITU."
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
