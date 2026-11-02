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
  HardDrive,
  FolderTree,
  Link2,
  SaveAll,
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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID08_06)
// =====================================================================

export default function Node_ID08_06() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID08-06";

  // State pre Zettelkasten-Indexer
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
      lower.includes("musím") ||
      lower.includes("vždy") ||
      lower.includes("nikdy") ||
      lower.includes("pravda")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message: (
          <div className="space-y-2 mt-2 font-mono">
            <p>
              <strong className="text-white"># Pravidlo:</strong> Zrušenie
              kognitívneho absolutizmu.
            </p>
            <p>
              <strong className="text-white"># Logika:</strong> Akákoľvek
              myšlienka obsahujúca 'vždy' alebo 'nikdy' preťažuje procesor
              nereálnymi očakávaniami. Matrix miluje extrémy, lebo sa v nich
              zlyháva.
            </p>
            <p className="text-[#00FFFF]">
              <strong className="text-white"># Exekúcia:</strong> Nájdi v tomto
              výroku jeden malý lokálny princíp. Vymaž z neho emócie a otestuj
              ho len na dnešnom poobedí.
            </p>
          </div>
        ),
      });
    } else if (
      lower.includes("peniaze") ||
      lower.includes("bohatstvo") ||
      lower.includes("kiyosaki") ||
      lower.includes("aktíva") ||
      lower.includes("práca")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message: (
          <div className="space-y-2 mt-2 font-mono">
            <p>
              <strong className="text-white"># Pravidlo:</strong> Oddelenie
              emócie od kapitálu.
            </p>
            <p>
              <strong className="text-white"># Logika:</strong> Peniaze nie sú
              dobré ani zlé, sú len dátový tok (Cashflow). Ak ich držíš v RAM,
              stresujú ťa. Ak ich kóduješ na externom HDD (Aktíva), zarábajú.
            </p>
            <p className="text-[#00FFFF]">
              <strong className="text-white"># Exekúcia:</strong> Zruš jedno
              malé pasívum (predplatné, zlozvyk) dnes a vytvor trvalý príkaz na
              investovanie do infraštruktúry.
            </p>
          </div>
        ),
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Hrubé dáta detekované. Bez priameho kľúčového slova zlyháva automatická indexácia. Tvojou úlohou v OneNote je tento odstavec osekať od omáčky. Aká je podstata? Aký je tvoj Painkiller? Nájdi ho a zapíš ho bez emócií v bodoch.",
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
            READER PROJEKTY
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (DATABÁZY A "DEBILNÍČEK")
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#Zettelkasten",
            "#Debilnicek",
            "#ExternalHDD",
            "#DataCapture",
            "#OneNote",
            "#KnowledgeBase",
            "#MemoryLeak",
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
            "Prečítal som vyše 350 mŕtvych kníh. Kedysi som čítal systémom ‚od
            prvej po poslednú stranu‘ a o týždeň som si pamätal len názov
            obálky. Moja biologická RAM jednoducho nedokázala udržať taký
            masívny dátový tok a systém vykonal automatickú ‚Garbage Collection‘
            (výmaz nepotrebných dát). Uvedomil som si, že hlava nie je harddisk,
            hlava je procesor. Začal som si tvoriť externé úložisko – môj slávny
            ‚debilníček‘ v systéme OneNote. Dnes je z neho 3,08 GB gigantický
            monolit, z ktorého beží celý OS Genesis. Vytvoril som si kategórie
            pre všetko: citáty, pravidlá, myšlienky, cvičenia, lexikón. Keď
            narazím na zlomkový kód u Osha alebo Kiyosakiho, prestanem čítať a
            okamžite ho dekomprimujem do OneNotu. Čítanie bez toho, aby si si
            ukladal zdrojový kód do vlastnej databázy, je len zabíjanie času.
            Tvojou úlohou nie je vedieť všetko naspamäť. Tvojou úlohou je
            vybudovať si Zettelkasten, kde presne vieš, v akom priečinku sa
            nachádza tvoj ‚Painkiller‘."
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
          <GlobalNodeVideo nodeId="ID08_06" dimColor={TIER_COLOR} />
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
                Kedysi som si robil poznámky na okraje kníh alebo na stratené
                papieriky. Výsledkom bol chaos. Hľadal som informácie, no
                strácal som ich v neporiadku. Až vytvorenie centrálnej
                infraštruktúry (OneNote a VS Code) zmenilo všetko. Keď robím
                "Terapiu čítaním", mám okamžite otvorený terminál. Mojím cieľom
                nie je prečítať knihu. Mojím cieľom je z knihy vyťažiť surový
                kód a roztriediť ho. Tento "debilníček" mi uvoľnil RAM. Nemusím
                si pamätať nič. Viem, že to tam je.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                Z kybernetického hľadiska ľudský mozog funguje ako vysoko
                výkonný procesor s prchavou RAM. Preťaženie RAM vedie ku
                chybovosti. Riešením je{" "}
                <strong className="text-[#00FFFF] font-normal">
                  Offloading
                </strong>{" "}
                na trvalé úložisko (HDD). Zettelkasten funguje ako relačná
                databáza. Architekt vytvoril logické indexy (Tagy a Kategórie),
                ktoré umožňujú okamžitý výber dát s časovou náročnosťou O(1),
                čím eliminuje zbytočné prehľadávanie 350 kníh.
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
                    Tiago Forte:
                  </strong>{" "}
                  Autor konceptu <em>Building a Second Brain</em> učí presne to,
                  k čomu Architekt dospel evolúciou. Tvoja hlava slúži na
                  generovanie nápadov, nie na ich skladovanie.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Niklas Luhmann:
                  </strong>{" "}
                  Tvorca systému Zettelkasten dokázal napísať 70 kníh vďaka
                  prepojeným kartičkám. Nečakal na inšpiráciu, jednoducho
                  kompiloval svoju databázu.
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
                  Anatómia Externej Pamäte{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (RAM vs. HDD)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix nás v školách programoval k tomu, aby sme si informácie
                pamätali (memorovali). Tento "Legacy kód" je dnes mŕtvy a
                deštruktívny.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <BrainCircuit className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Tragédia Bifľovania
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Prečo by si mal v RAM držať encyklopedické dáta, keď ich
                    vygoogliš za 2 sekundy? Tvoj biologický procesor je stavaný
                    na analytické myslenie a exekúciu, nie ako zberný kontajner.
                    Keď natlačíš 300 strán, o tri dni prebehne{" "}
                    <em>Garbage Collection</em> a nezostane ti nič.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <HardDrive
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Koncept "Druhého Mozgu" (Debilníček)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Tvoj záchranný modul (OneNote, Obsidian). Exaktné miesto, do
                    ktorého prelievaš všetko, čo by inak zaťažovalo CPU.
                    Akonáhle presunieš myšlienku na externý disk, procesor sa
                    ochladí. Stávaš sa prázdnym (Empty-Book stav) a pripraveným
                    operovať "Tu a Teraz".
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
                    (Klamstvo o prečítaných knihách)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Komentátor Parazit ti podsúva obrovské EGO na základe počtu
                kníh, ktoré si prečítal. To je čistý vírus.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Database className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Ilúzia Produktivity (Data Hoarding)
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Prečítaš knihu, cítiš sa "napumpovaný", systém zaplaví
                      dopamín. Odložíš knihu a uplynie mesiac – tvoj životný kód
                      je stále plný errorov a dlhov. Neextrahoval si kód. Zostal
                      si "Konzumentom". Celú energiu čítania si vyhodil oknom.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <PenTool className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Hranie sa so Zvýrazňovačom
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Matrix ti ponúka falošné riešenia. Zvýrazňovanie
                      farbičkami priamo v knihe nie je databáza. Ak podčiarkneš
                      vetu v Tollem a knihu zavrieš, tá veta zomrela v tme. Ak
                      ju chceš o pol roka nájsť, musíš listovať (extrémny
                      friction). Preto myšlienky vyrezávaj do Mainframu.
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
                    (Kódovanie do OneNote)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aplikácia Zettelkasten metódy na tvorbu 3 GB archívu (Základu OS
                Genesis).
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Capture Protocol (Zber dát v reálnom čase)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Nečítam knihy v posteli bez systému. Akonáhle mi v texte od
                    Junga alebo Kiyosakiho "zabliká" červená dióda (Painkiller
                    kód), nasleduje tvrdý <em>Stop Protocol</em>. Čítanie sa
                    zastaví. Otvorím OneNote a okamžite zapisujem.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Sémantická Kompresia (Zákaz Copy-Paste)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Nemôžeš myšlienku len otrocky prepísať. Musíš ju prehnať cez
                    vlastný logický filter. Osho hovorí o "eGu a nevedomí". Ty
                    to zapíšeš ako "Komentátor Parazit" a "Zavírený BIOS". Týmto
                    prekladom do CyberTech slangu si kód zvnútornil.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    3. Kategorizácia (Stromové Indexovanie)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Mám informácie zotriedené podľa presných štítkov: Lexikón,
                    Poznámky, Myšlienky, Zákony. Ak potrebujem riešiť krízu s
                    peniazmi, neotváram Cashflow Kvadrant. Otvorím OneNote v
                    sekcii "Zákony a Pravidlá - Financie".
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
                    (Výstavba Architektúry)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Začni okamžite prenášať dáta z "Mŕtvych kníh" na aktívny server.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <BookOpen className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    NEXUS LEXIKÓN
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Založ si svoj osobný slovník. Kedykoľvek nájdeš silný pojem
                    (Wu-wei), zapíš si ho s vlastnou exaktnou definíciou. Toto
                    je základ pre budovanie tvojej Prežitej Pravdy.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Link2 className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Re-indexing (Prepájanie)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Databáza bez liniek je mŕtva. Keď zistíš, že Freudovo "Id"
                    sa podobá na Tolleho "Emočné telo", daj si poznámku a buduj
                    synapsie vo svojom externom HDD.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Trash2
                    className="w-5 h-5 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zlaté pravidlo Zmazania
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Akonáhle je podstatná myšlienka (Painkiller) natiahnutá do
                    tvojho "Debilníčka", pôvodnú knihu môžeš s kľudom predať.
                    Inštalačný súbor sa maže z Cache.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (ZETTELKASTEN-INDEXER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Zettelkasten-Indexer
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Skopíruj do terminálu akýkoľvek "hrubý a neprehľadný odstavec",
              ktorý si práve podčiarkol v knihe. AI (Biely Čarodejník) tento
              odstavec okamžite prejde sémantickou dekompresiou, odstráni
              zbytočné omáčky a vygeneruje čistý{" "}
              <strong>
                3-bodový Markdown výstup (Pravidlo, Logika, Exekučný krok)
              </strong>
              , ktorý stačí prekopírovať do tvojho Debilníčka.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Vlož surový odstavec z knihy..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Indexovať
              </button>
            </div>

            {auditResult && (
              <div
                className={`p-6 border-l-2 rounded-r-lg text-left ${auditResult.bg} ${auditResult.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{auditResult.icon}</div>
                  <div className="w-full">
                    <div
                      className={`font-mono font-bold uppercase text-xs mb-2 ${auditResult.color}`}
                    >
                      [ STATUS: {auditResult.status} ]
                    </div>
                    <div className="text-sm text-white/80 leading-relaxed">
                      {auditResult.message}
                    </div>
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
                Debilníček (Zettelkasten)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Externý kybernetický HDD Architekta. Štruktúrovaný repozitár,
                ktorý ukladá a indexuje sémantický kód z kníh a odľahčuje
                biologickú RAM pamäť.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Garbage Collection
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Prirodzený proces mozgu, ktorý nekompromisne maže z krátkodobej
                pamäte všetky informácie, ktoré operátor v reálnom čase
                nepoužíva a nezapísal si ich.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Capture Protocol
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Bezpečnostný protokol. Ak narazíš na Painkiller, okamžite
                prerušuješ čítanie a kód vpisuješ do externej databázy pre
                neskoršie nasadenie.
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
                1. The Passive Reader
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Deravá RAM. Prečíta stovky kníh, aby nakŕmil EGO a cítil sa
                produktívne. Podčiarkuje vety zvýrazňovačom, no po zavretí knihy
                si nevyextrahoval ani bajt dát. Procesor zabudne na 90 % obsahu
                do 48 hodín.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Uväznený v konzumácii
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Messy Collector
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Dátový Chaos. Robí si poznámky na papieriky a do mobilu. Má
                obrovské množstvo dát, ale žiadnu indexáciu (Z-Index). Keď príde
                kríza, nastáva "File Not Found" a jeho systém aj tak padá.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Nesystémový zberateľ
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
                3. Zettelkasten Architect
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Pán Databázy. Vie, že mozog je na tvorbu, nie na skladovanie.
                Číta len s otvoreným Debilníčkom. Z 3 GB zdanlivého chaosu
                mŕtvych autorov zostaví okamžite dostupný OS Genesis.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Biely Čarodejník
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
                  root@nexus-core:~/ID08_NODE_06_DATABASES
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
                execute external_hdd_sync
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 VOLATILE RAM OVERLOAD / FORGETTING PROTOCOL DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 ZETTELKASTEN ("DEBILNICEK") EXTERNAL HDD SYNCED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 DATA SUCCESSFULLY OFFLOADED. O(1) RETRIEVAL SPEED
                    ACHIEVED.
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
                  "TVOJA HLAVA MÁ TVORIŤ KÓD, NIE SLÚŽIŤ AKO ZBERNÝ KONTAJNER.
                  VŠETKO SI OKAMŽITE ULOŽ A UPRAC."
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
