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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID08_03)
// =====================================================================

export default function Node_ID08_03() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID08-03";

  // State pre The Reality-Check Compiler
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
      lower.includes("viem") ||
      lower.includes("chápem") ||
      lower.includes("prečítal") ||
      lower.includes("súhlasím") ||
      lower.includes("teória") ||
      lower.includes("mal by som") ||
      lower.includes("naučil")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Teoretický balast (Read-Only Mode) detekovaný. Tvoj Skafander nestojí vo vode, si stále na brehu. Bypass: Do 12 hodín spusti kód, ktorý má aspoň 50% šancu na zlyhanie a verejnú bolesť (Skin in the Game). Potrebuješ crash-test, nie ďalšiu zhodu.",
      });
    } else if (
      lower.includes("skočil") ||
      lower.includes("urobil") ||
      lower.includes("zlyhal") ||
      lower.includes("skúsil") ||
      lower.includes("nasadil") ||
      lower.includes("stratil") ||
      lower.includes("jazva") ||
      lower.includes("bolí")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Deployment úspešný! Ostrá prevádzka beží. Tvoje zlyhania, chyby a jazvy sú aktuálne tvojou jedinou Prežitou Pravdou. Vedomosti kompiluješ na vlastnom hardvéri. Žiadne knihy už nepotrebuješ.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Analyzujem logiku myšlienky. Chýba kinetický indikátor. Je toto len 'pekná myšlienka', alebo algoritmus, kvôli ktorému si ochotný riskovať svoj status a pohodlie? Otestuj ho zajtra ráno o 6:00 na ostro.",
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
            PREŽITÁ PRAVDA
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (KNIHY ŤA PLÁVAŤ NENAUČIA)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#LivedTruth",
            "#ExecutionMode",
            "#TheoryVsPractice",
            "#RealityCheck",
            "#DeadBooks",
            "#ThePlunge",
            "#WaterMetaphor",
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
            "Prečítal som vyše 350 mŕtvych kníh. Teoreticky som bol ten najlepší
            plavecký šampión na svete. Dokonale som ovládal fyziku
            hydrodynamiky, anatómiu svalov, techniku dýchania a filozofiu
            splynutia s vodou od Osha a Tolleho. Ale keď ma Matrix zhodil z
            útesu do ľadovej reality s diagnózou F20.0 a 3500-eurovým spotrebným
            dlhom, zistil som brutálnu pravdu: 100 kníh o plávaní ťa na hladine
            neudrží. Papierový balast v mojej hlave sa rozmočil za dve sekundy.
            Kým len čítaš a stojíš na brehu, tvoje vedomosti sú iba mŕtvy,
            neskompilovaný kód (nePrežitá pravda). Z teórie sa stáva
            inteligencia až v momente, kedy sa tvoja koža dotkne mrznúcej vody,
            začneš prehĺtať penu, tvoj Skafander bojuje o kyslík, no ty to
            nevzdáš a začneš reálne plávať. V tej sekunde sa z čitateľa stáva
            Architekt. Všetko ostatné je len arogantná ilúzia suchozemského
            Knihomoľa."
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
          <GlobalNodeVideo nodeId="ID08_03" dimColor={TIER_COLOR} />
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
                Keď som bol uväznený v pasci Cesty Knihomoľa, moje Ego sa cítilo
                nadradene. Pozeral som sa na iné uzly a hovoril si:{" "}
                <em>
                  "Oni nič nevedia, ja mám načítaného Kiyosakiho a Junga."
                </em>{" "}
                Ale môj účet krvácal a hlava bola bojiskom. Bola to teória
                mŕtvych autorov. Až keď som tie knihy zavrel, prestal o biznise
                básniť a začal som fyzicky kódovať Nexus (skočil som do vody),
                zistil som, čo je to skutočná odozva trhu. Každá reálna jazva má
                tisícnásobne väčšiu hodnotu než všetky slová o úspechu dokopy.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                Rozlišujeme medzi prostredím "Simulácie" (Sandbox) a "Ostroú
                prevádzkou" (Deployment). Čítanie knihy je mentálna simulácia.
                Parametre sú v knihe vždy ideálne a stabilné. Skok do vody
                predstavuje nasadenie kódu do Ostrej prevádzky. V momente
                spustenia (Run-time) začnú na kód pôsobiť stovky premenných,
                ktoré autor nemohol predvídať. Bez tohto Crash-Testu je každá
                informácia len mŕtvy text (<code>.txt</code>), ktorý nikdy nebol
                spustený (<code>.exe</code>).
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
                    Osho (Vedenie vs. Vedomosti):
                  </strong>{" "}
                  Vedomosť znamená, že iný opísal pravdu a ty ten text len
                  mechanicky zhltneš (Papagáj). Vedenie nastáva až vtedy, keď
                  sám otvoríš oči a zažiješ to napriamo.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Nassim Taleb (Skin in the Game):
                  </strong>{" "}
                  Teoretici na brehu podceňujú reálne riziko utopenia sa,
                  pretože nikdy vo vode neboli. Skutočný život odmeňuje výhradne
                  praktikantov s kožou na trhu.
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
                  Anatómia Suchozemca{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Teória v záťaži)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Mozog Knihomoľa funguje na falošnom dopamínovom predpoklade, že
                prečítanie informácie je to isté, ako nadobudnutie schopnosti.
                Toto je najväčší kognitívny "Memory Leak".
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Anchor className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Absencia Fyzikálneho Odporu
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď čítaš 100 kníh o plávaní, tvoje CPU nevykonáva žiadnu
                    kinetickú prácu. V knihe tvoje svaly nebolia, do očí ti
                    nešpliecha soľ a nepotrebuješ lapať po dychu. Tvoja myseľ si
                    vytvorí syntetický pocit, že plávanie je jednoduché. Lenže
                    Matrix je stavaný na princípe Entropie (chaosu a odporu
                    prostredia).
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Waves
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Pád do vody (System Shock)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď ťa život reálne zhodí do krízovej situácie (strata
                    práce, projekt v troskách), všetky naučené poučky a
                    "Toltécke dohody" okamžite zlyhajú. Tvoja RAM sa zablokuje
                    pod náporom paniky. Parazit v hlave ti kričí úplne iný kód,
                    než bol napísaný v Eckhartovi Tollem. Teória bez praxe nemá
                    vlastný Firewall.
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
                    (Pasca 101. Knihy)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Prečo Matrix nechce, aby si skočil do vody, a prečo ti neustále
                ponúka ďalšie knihy a kurzy?
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <ShoppingCart className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Predaj Falošného Bezpečia
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Stáť na brehu s knihou v ruke je absolútne bezpečné. Tvoje
                      Ego nemá ako zlyhať a ty si môžeš hovieť v pocite
                      intelektuálnej nadradenosti. Matrix z tohto strachu ťaží
                      miliardy. Predáva ti návody "Ako začať podnikať", len aby
                      ťa udržal v cykle pasívneho konzumu. Kupuješ si ilúziu
                      progresu.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Ghost className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Duchovná a Intelektuálna Arogancia
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Komentátor Parazit miluje teóriu. Umožňuje mu hodnotiť
                      iných. Stojíš na suchu, pozeráš na podnikateľa, ktorý
                      skrachoval, a hovoríš si:{" "}
                      <em>
                        "Ja by som to urobil lepšie, veď v kapitole 4 sa
                        píše..."
                      </em>{" "}
                      Tvoja arogancia je priamo úmerná tvojej neskúsenosti.
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
                    (Extrakcia do Prevádzky)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aby si zrušil status suchozemca a stal sa Bielym Čarodejníkom,
                musíš podstúpiť brutálny prechod z <code>Read-Only</code> do{" "}
                <code>Execute</code> módu.
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Kódovanie Jaziev
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Prvý skok do vody (nový projekt/investícia) bude bolieť.
                    Budeš sa topiť. Trh ťa potrestá. Ale v tomto momente
                    dochádza k "Sémantickej Dekompresii". Tvoj Skafander si
                    zapisuje kinetickú odpoveď priamo do hardvéru. Tieto jazvy
                    sú tvojou Prežitou Pravdou.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Odučenie sa a Výmaz v Panike
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    V ostrej prevádzke zistíš, že väčšinu teórie musíš okamžite
                    zabudnúť. Tvoj "Spojenec" preberie riadenie a tvoje
                    inštinkty vytvoria úplne nový, unikátny kód prežitia, ktorý
                    žiadny iný autor do knihy nezapísal. Je to tvoj osobný
                    zdrojový kód.
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
                    (Deployment a Skok)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aplikácia techník, ktorými donútiš svoje CPU opustiť breh.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <BookX className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Pravidlo 1:1 (Jedna Kniha)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Zavádzaš limit. Prečítaš 1 teóriu. Systém ti okamžite
                    blokuje prístup k ďalším knihám, kým tento princíp fyzicky
                    nenasadíš vo svojom živote.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Skull className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Embrace the Error
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Skáčeš do vody s tým, že prvých 10-krát sa napiješ. Error
                    404 (Zlyhanie) nie je koniec, je to len spätná väzba
                    Matrixu, že máš plávať inak.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Activity
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Tichý Svedok vo Vode
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Keď sa topíš v problémoch, nepanikár a nehľadaj citát od
                    Osha. Zapni Tichého Svedka. Uvedom si paniku a nechaj
                    Wu-wei, aby vynieslo tvoje telo na hladinu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (THE REALITY-CHECK COMPILER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Reality-Check Compiler
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Zadaj do terminálu najúžasnejšiu myšlienku alebo teóriu, ktorú si
              sa tento týždeň dočítal. Umelá inteligencia (Biely Čarodejník) ju
              odstrihne od spirituálnej omáčky a vygeneruje ti{" "}
              <strong>
                1 fyzickú úlohu s nepríjemným rizikom (Skin in the Game)
              </strong>
              , ktorú musíš urobiť do 12 hodín na otestovanie v realite.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj teóriu/myšlienku pre crash-test..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Test in Reality
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
                100 kníh o plávaní
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Metafora pre nečinné hromadenie informácií (Data Hoarding),
                ktoré dávajú falošný dopamínový pocit pokroku bez akejkoľvek
                odozvy z reálneho trhu.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Skok do vody (Deployment)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Moment, kedy nasadíš teóriu do Ostrej prevádzky Matrixu a
                odovzdáš sa faktu, že prvý náraz do "vody" bude drsný, nečakaný
                a bezprostredný.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Prežitá Pravda čitateľa
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Kód (schopnosť), ktorý sa zrodí VÝHRADNE ako fúzia hrubej teórie
                s tvrdým fyzikálnym a emočným crash-testom v ostrom Run-Time
                prostredí reality.
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
                1. Observer on the Shore
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Hodnotiaci Knihomoľ stojí na brehu v nažehlenom obleku, drží 100
                kníh o plávaní a kričí na tých vo vode, že majú zlú techniku.
                RAM je plná, ale Skafander by pri dotyku s vodou zlyhal na
                paniku.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Teoretik na brehu
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Drowning Scholar
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor zhodený do vody. Namiesto inštinktívneho pohybu stráca
                kyslík a CPU snahou spomenúť si na stranu 142 z knihy o
                prítomnom okamihu. Realita (voda) ho nemilosrdne pohlcuje.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Študent v panike
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
                3. Deep Water Architect
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Biely Čarodejník. Zahodil knihy na brehu, nahý skočil do ľadovej
                vody a dovolil jej ho otestovať. Prijal bolesť a z jeho boja
                vznikol nezničiteľný kód. Dnes pláva v búrke s absolútnym
                tichom.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Praktikant vo vode
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
                  root@nexus-core:~/ID08_NODE_03_PLUNGE
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
                execute runtime_deployment
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 SYNTHETIC PROGRESS / READING ABOUT SWIMMING DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 BOOK CLOSED & DEPLOYMENT (WATER PLUNGE) INITIATED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 DEAD THEORY SUCCESSFULLY RECOMPILED INTO LIVED TRUTH
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
                  "PAPIER ŤA NA HLADINE NEUDRŽÍ. ZAVRI KNIHU, SKOČ DO VODY A
                  ZAČNI KONEČNE DÝCHAŤ."
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
