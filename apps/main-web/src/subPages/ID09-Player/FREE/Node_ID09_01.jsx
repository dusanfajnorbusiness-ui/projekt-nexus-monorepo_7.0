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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID09_01)
// =====================================================================

export default function Node_ID09_01() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Farba Dimenzie ID09 (Sergeant-Core)
  const TIER_COLOR = "#00FFFF"; // 🔵 FREE TIER COLOR
  const NODE_ID = "ID09-01";

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
          {/* Označenie TIERu prenášame vizuálne, no ID09 je špecifické FREE */}
          <TierBadge tier="FREE" />
          <span className="font-mono text-zinc-500 tracking-widest flex items-center gap-2">
            <Fingerprint className="w-4 h-4 text-zinc-600" /> {NODE_ID}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic mb-8 group cursor-default text-white">
          <span className="group-hover:opacity-80 transition-opacity duration-100">
            PLAYER UI SPACE
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (OD BEZCIEĽNEHO ZABÍJANIA ČASU K STRATEGICKÉMU TRÉNINGU)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#PlayerUISpace",
            "#zombieSergeant",
            "#TacticalSimulation",
            "#CoDMZombies",
            "#GamingAsTraining",
            "#CognitiveLoad",
            "#FinalFantasy",
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
            "V Z.O.M.B.I.E. móde boli pre mňa videohry len únikovým modulom.
            Lacnou digitálnou anestéziou, aby som nemusel čeliť rozbitému
            Matrixu vonku a dlhom na účte. Len som bezhlavo strieľal, kým mi
            nepadla hlava od únavy. Prelom nastal, keď som prebudil Architekta a
            vytvoril si dedikovaného Avatara: @zombieSergeant. Prestal som
            'zabíjať čas'. Začal som analyzovať herný kód. CoDM Zombies alebo
            Final Fantasy už pre mňa nie sú hry; sú to uzavreté taktické
            laboratóriá. Každý Damage Run, každý Speed Run a každá virtuálna
            smrť je len zber tvrdých dát pre ďalšiu, optimalizovanejšiu
            iteráciu. Hra ťa učí to najdôležitejšie pravidlo prežitia: Každý
            boss sa dá poraziť, ak pochopíš jeho algoritmus, zachováš si chladnú
            hlavu a odmietneš sa vzdať. Tvoj mozog nerozlišuje medzi prekonaním
            digitálneho bossa a prekonaním finančnej krízy. V oboch prípadoch
            trénuješ víťazný kód."
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
          <GlobalNodeVideo nodeId="ID09-01" dimColor={TIER_COLOR} />
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
                Roky som hral hry len na to, aby som "vypol". Bola to pasívna
                ignorancia (Cesta Leňocha). Až neskôr som zistil, že ak k hre
                pristúpiš analyticky, stáva sa z nej dokonalý tréningový
                trenažér pre tvoju RAM. V CoDM Zombies pri Endless runoch
                trénujem fokus na prítomný okamih. Pri Final Fantasy (PS1 éra)
                zasa trénujem alokáciu zdrojov a logistiku. Moja herná svätyňa
                (Player UI Space) je miesto, kde si po celom dni kódovania
                Nexusu schladím procesor, ale zároveň udržujem svoje reflexy a
                strategické myslenie ostré ako britva.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                V systémovom inžinierstve sa videohry považujú za{" "}
                <strong className="text-white">
                  "Closed-Loop Simulations"
                </strong>{" "}
                (Simulácie s uzavretou slučkou). Operátor je vystavený
                komplexným problémom (hordy nepriateľov, time-manažment,
                resource-manažment) v bezpečnom prostredí s nulovým rizikom pre
                fyzický Skafander. Keď sa operátor učí predvídať "Spawn"
                nepriateľov a optimalizuje trasu, preprogramováva svoje
                neurónové dráhy na efektívnejšie riešenie krízových situácií.
                Hranie s úmyslom nie je spotreba času, je to kalibrácia
                algoritmov.
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
                  Dokazuje, že hry saturujú základnú ľudskú potrebu po hrdinstve
                  a progrese. Systém Matrixu vonku je často nefér, plný
                  protekcie a pomalý.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Férový Matrix:
                  </strong>{" "}
                  Hry sú spravodlivým Matrixom: akceptuješ pravidlá, zlepšíš si
                  skill, a si okamžite odmenený postupom. Tichý Svedok vníma
                  túto digitálnu realitu ako pieskovisko. Neidentifikuje sa s
                  postavou, len chladne riadi jej prežitie.
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
                  Anatómia Herného Avatara{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (@zombieSergeant)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aby si mohol z hier ťažiť reálnu mentálnu silu, musíš striktne
                oddeliť svoju fyzickú identitu od svojej digitálnej zbrane.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Target className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Zrodenie Avatara
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Keď som si vytvoril nick{" "}
                    <strong className="text-white">@zombieSergeant</strong>,
                    nevytvoril som len meno do tabuľky, vytvoril som bojovú
                    persónu. Keď držím v ruke bojový modul (Tab A9+), už nie som
                    Dušan Fajnor z Trnavy, ktorý rieši účty. Som seržant,
                    ktorého jedinou úlohou je taktická dominancia, optimalizácia
                    poškodenia (Damage Runs) a ochrana tímu (Support). Avatar
                    absorbuje herný stres, kým tvoje jadro zostáva v chladnom
                    mieri.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <BrainCircuit
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Hra ako Zrkadlo Ega
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Videohra ti neúprosne ukáže tvoje systémové chyby. Ak v hre
                    neustále zomieraš, pretože si príliš chamtivý na "killy"
                    (Kill Stealing) a bežíš do stredu hordy, presne to isté
                    robíš aj vo financiách (FOMO). Hra je len zrýchlený trenažér
                    tvojej vlastnej chamtivosti, netrpezlivosti a zlyhávajúceho
                    fokusu. Oprav to v hre, a opravíš to aj v živote.
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
                    (Pasca Úteku pred Realitou)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix zámerne vyvinul moderné herné modely tak, aby z teba
                neurobili taktika, ale závislého feťáka.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Dopamínový Ransomware v hrách
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Moderné hry, na rozdiel od éry PS1/PS2, sú stavané ako
                      výherné automaty. Lootboxy, denné odmeny za prihlásenie a
                      blikajúce farbičky. Ich cieľom nie je trénovať tvoj mozog,
                      ich cieľom je zotročiť tvoj dopamínový systém, aby si
                      trávil hodiny scrollovaním menu a nakupovaním virtuálnych
                      "Skinov", ktorými si hladkáš Ego.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Repeat className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Bezcieľne zabíjanie času
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Keď si operátor sadne za konzolu po ťažkom dni s
                      myšlienkou "chcem zabiť čas", odovzdáva svoje vedomie.
                      Stáva sa pasívnym prijímačom blikajúcich pixelov. Z tohto
                      hrania nevzíde žiadna regenerácia CPU. Na konci je len
                      krvavý zrak, pocit prázdnoty a výčitky svedomia, že ďalší
                      deň ubehol bez akejkoľvek reálnej odozvy vo fyzickom
                      svete.
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
                    (Štart Taktického Laboratória)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako fyzicky vykonať "Bypass" z bežného hráča na herného
                Architekta v rámci Player UI Space.
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Intentional Gaming (Hranie so Zámyslom)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Nikdy nezapínaj hru bez jasne zadefinovaného cieľa. Ak idem
                    hrať CoDM Zombies, môj cieľ nie je "zahrať si". Môj cieľ je
                    napríklad:{" "}
                    <em>"Otestovať DPS potenciál zbrane HDR na runde 20"</em>,
                    alebo <em>"Prežiť S&R Exfil čisto ako Medic s 0 killmi"</em>
                    . Keď dáš hraniu exaktný parameter, tvoj mozog sa prepne do
                    analytického (riešiteľského) módu, a prestane byť len
                    konzumujúcou špongiou.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Extrakcia Skillu z Retro Hier
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Prečo sa vraciam k sérii Final Fantasy (VII, VIII) alebo
                    starým klasikám? Tieto hry nevyžadovali mikrotransakcie;
                    vyžadovali logiku, čítanie rozsiahlych textov, spájanie
                    materií (algoritmizáciu) a brutálnu trpezlivosť. Retro hry
                    sú ako ťažké činky pre tvoju kognitívnu vytrvalosť. Učia ťa
                    zvládať pomalý, náročný progres k ultimátnemu cieľu, čo je
                    presne to, čo potrebuješ pri budovaní reálneho biznisu.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    3. Akceptácia "Erroru" (Zlyhania)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Hra ťa učí najcennejšiu lekciu Architekta: Smrť v hre
                    znamená len návrat na "Checkpoint". Ak ti nevyšiel biznis
                    (alebo ti spadol Firebase server), je to ten istý
                    Checkpoint. Analyzuješ, prečo ťa Boss zabil, zmeníš
                    stratégiu (Setup) a ideš znova. Bolesť z prehry sa vymaže,
                    zostáva len zber štatistických dát.
                  </p>
                </li>
              </ul>
            </div>

            {/* BLOK 4 ZAČIATOK - PRIPRAVENÉ PRE ĎALŠÍ PAYLOAD */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  04.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Nástroje a Protokoly{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Výbava Digitálneho Seržanta)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Exaktné inštrukcie na operovanie v doméne ID09 pre maximálny
                výtlak.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Zap className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Bojový Modul (Optimalizácia Hardvéru)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Nepotrebuješ PC zostavu za 3000 €, aby si bol dominujúcim
                    hráčom. Tvoj Samsung Galaxy Tab A9+ je optimalizovaný pre
                    maximálny flow. Eliminácia technického trenia (žiadne
                    prehrievanie drahého hardvéru) ti umožňuje sústrediť sa
                    výhradne na čistý Skill a Movement tvojich prstov na
                    dotykovej ploche.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Banknote
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    The Content Conversion (Z hry do Kapitálu)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Skutočný Architekt si nenecháva výhry len pre seba. Tvoje
                    herné maratóny konvertuješ do ziskového digitálneho aktíva.
                    Robíš záznamy cez PrismLive (zrušil si neefektívny AZ
                    Recorder), striháš ich do YouTube Shortsov v CapCute a píšeš
                    "Ultimate Guides". Tvoje voľnočasové hranie tak priamo
                    generuje Traffic a OC Kredity (Zisk) pre tvoj Materský Nexus
                    projekt. Tým si zvrátil rolu – z obete herného priemyslu si
                    sa stal jej producentom.
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
            <BookOpen className="w-6 h-6" style={{ color: TIER_COLOR }} />
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
                Player UI Space
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Vyhradená dimenzia Architekta pre relax, kognitívnu kalibráciu a
                ponorenie sa do simulovaných, uzavretých IT ekosystémov (hier).
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Intentional Gaming (Cielené Hranie)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Protokol, pri ktorom má každé spustenie hry jasne definovaný
                analytický alebo produkčný cieľ, zabraňujúci bezmyšlienkovitému
                plytvaniu času.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Avatar @zombieSergeant
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Fiktívna, vysoko optimalizovaná digitálna identita (Štít), ktorá
                na bojovom poli absorbuje stres, kým tvoje skutočné "Ja" sedí v
                pozícii chladného Svedka.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. OMEGA PROTOCOL GRID (Zákon Symetrie) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <h3 className="text-center text-2xl font-black uppercase tracking-widest text-zinc-500 mb-12">
            Zákon Symetrie
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-white mb-4 text-red-500">
                1. The Escapist
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor uteká do hier pred svojimi problémami (dlhmi, vzťahmi).
                Hrá desiatky hodín bez cieľa, nakupuje predražené skiny na
                vylepšenie Ega a po vypnutí konzoly upadá do hlbokej depresie,
                pretože jeho reálny Skafander stojí pred nezaplatenými účtami.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Pasívna Obeť
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Rager
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor s preťaženým CPU. Svoju agresiu z Matrixu si vybíja v
                hre. Pri zlyhaní kričí do mikrofónu, obviňuje spoluhráčov a
                rozbíja vlastný hardvér. Jeho herný prejav je zrkadlom jeho
                životného chaosu. Nehrá, len ventiluje limbické trenie.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Toxický Hráč
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
                3. The Tactical Architect
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Biely Čarodejník. Hrá výlučne pre analýzu mechaník a tréning
                procesora. Hra je pre neho tichá, šachová partia. Zlyhanie ho
                nerozhodí, len mu dodá dáta pre optimalizáciu. Svoj herný skill
                okamžite konvertuje do videotutoriálov a speňažiteľných
                digitálnych aktív.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: @zombieSergeant
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (GAME-TO-LIFE CONVERTER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Game-To-Life Converter
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Interaktívne prepojenie s API Gemini. Operátor vloží do terminálu
              svoju obľúbenú hru a svoj herný štýl (napr.{" "}
              <em>"Rád hrám za Heallera v MMO"</em> alebo{" "}
              <em>"Rád grindujem suroviny"</em>). Umelá inteligencia mu okamžite
              vygeneruje sémantický preklad, ako tento jeho obľúbený herný
              mechanizmus presne aplikovať do budovania reálneho biznisu alebo
              zvládania konfliktov v jeho živote.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj hru a herný štýl (napr. CoDM, Support)..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#FF003C]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-white font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
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
                  root@nexus-core:~/ID09_NODE_01_PLAYER_UI
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
                execute intentional_gaming_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-500 mr-2">[STATUS]</span>
                  🔴 ESCAPISM AND MINDLESS TIME KILLING DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-500 mr-2">
                    [PATCHED]
                  </span>
                  🟡 INTENTIONAL GAMING & TACTICAL ANALYSIS PROTOCOL INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 VIRTUAL SIMULATION SUCCESSFULLY CONVERTED INTO REAL-WORLD
                    COGNITIVE UPGRADE
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
                  "KAŽDÁ HRA JE LEN ALGORITMUS. NENECHAJ SA NÍM HRAŤ, STAŇ SA
                  TÝM, KTO HO ROZLÚŠTI."
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6C. GLOBAL PRED-FOOTER & BANNER */}
        {/* ================================================================= */}
        <GlobalPromoBanner />
        <GlobalPredFooterNode nodeId={NODE_ID} />
      </main>
    </div>
  );
}
