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
import { GlobalNodeVideo } from "@main-web/components/GlobalNodeVideo";
import { GlobalNodePodcast } from "@main-web/components/GlobalNodePodcast";
import MetaTags from "@shared/components/MetaTags";

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID09_06)
// =====================================================================

export default function Node_ID09_06() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // ZÁKON FARIEB: UZOL JE FREE -> TIER COLOR JE CYAN
  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID09-06";

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
        "Dáta prijaté. Spúšťam analýzu herných projektov a budovania komunity...",
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
            PLAYER PROJEKTY
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (BUDOVANIE HERNÉHO KANÁLU A KOMUNITY)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#ContentCreation",
            "#zombieSergeant",
            "#GameGuides",
            "#PrismLive",
            "#TrojanHorse",
            "#DigitalAsset",
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
            "Stráviť 3 hodiny v Endless Rune a po jeho skončení len vypnúť
            tablet, je z pohľadu systémového inžiniera fatálne plytvanie dátami.
            Keď som bol v Z.O.M.B.I.E. móde, hral som len pre seba, potichu a v
            izolácii. Nenechával som po sebe žiadnu stopu. Dnes, keď si môj
            Avatar @zombieSergeant sadne k Tab A9+, beží na pozadí PrismLive.
            Každý Damage Run, každá chyba, každá porážka Bossa sa nahráva. Herný
            čas už pre mňa nie je čierna diera na spotrebu energie. Je to baňa
            na surové dáta. Tieto dáta zbieram, strihám v CapCute a tvorím z
            nich exaktné taktické manuály (Walkthroughs) a Ultimate Guides pre
            Final Fantasy a CoDM Zombies. Tým, že zverejňujem svoj skill,
            budujem hernú komunitu na YouTube. Zmenil som sa z pasívneho
            konzumenta na distribútora hodnoty. Hra, ktorú som odohral včera,
            tak na mojom kanáli generuje traffic a pozornosť aj o rok, kým ja
            spím."
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
          <GlobalNodeVideo nodeId="ID09-06" dimColor="#FF003C" />
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
                Roky drvenia hier ma naučili mechaniky, ale nepriniesli mi ani
                jedno euro a ani jeden kontakt. Keď som vstal z popola a spustil
                Projekt Nexus, pochopil som, že moje herné znalosti sú "Know-How
                ako Služba" (KaaS). Zastaraný AZ Recorder, ktorý ma ničil 10GB
                uploadmi, som zmazal. Prešiel som na PrismLive a CapCut.
                Vytvoril som kanál @sergeant-core2Mb. Namiesto toho, aby som len
                bezcieľne zabíjal zombíkov, robím výskum. Prepočítavam zdravie
                elít, testujem synergie zbraní a tieto "Hard-dáta" prekladám do
                tutoriálov. Hranie sa tak stalo mojím exekutívnym biznis
                projektom, ktorý ma navyše nesmierne baví.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                Konzumácia bez produkcie generuje takzvaný{" "}
                <strong className="text-white">"Memory Leak"</strong> (únik
                pamäte). Operátor spracuje obrovské množstvo informácií v hre,
                no systém ich následne vymaže. Akonáhle však operátor zapne
                nahrávanie a zverejní analýzu na internete, aplikuje princíp
                "Digitálnej páky" (Digital Leverage). Z jednorazovej investície
                času (napr. 1 hodina hrania) vzniká trvalé digitálne aktívum
                (Video/Guide), ktoré autonómne obsluhuje tisíce neznámych uzlov
                v Sieti 24 hodín denne, 7 dní v týždni.
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
                    Naval Ravikant:
                  </strong>{" "}
                  Vo svojich textoch jasne definuje "Pákový efekt bez povolenia"
                  – kód a médiá. Tvoj herný YouTube kanál a tvoje manuály sú
                  čisté médiá. Nepotrebuješ povolenie štátu ani šéfa na to, aby
                  si ich nahral a vypustil do sveta.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Aplikácia v praxi:
                  </strong>{" "}
                  Tvoríš ich s nulovými marginálnymi nákladmi. To, čo Naval učí
                  teoreticky, ty v Player UI Space aplikuješ prakticky:
                  premieňaš svoju vášeň a analytické myslenie na komunitu a
                  nezávislú autoritu.
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
                  Z Konzumenta na Tvorcu{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Output &gt; Input)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix je naprogramovaný tak, aby z teba urobil doživotného
                konzumenta zábavy. Tvoja záchrana začína v momente, keď otočíš
                dátový tok smerom von.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <UploadCloud className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Odmietnutie Temnoty
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Hrať hry a neukázať svoj skill okoliu je ako napísať
                    dokonalý kód a nechať ho hniť na lokálnom disku. Ak máš
                    taktické myslenie a dokážeš to, čo 90 % hráčov nie, máš
                    morálnu povinnosť to zdokumentovať. Každý tvoj herný prechod
                    (Run) musí mať svoj "Output" – zápisky v debilníčku,
                    videozáznam alebo screenshot štatistík.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Database
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Zber Hard-Dát
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Analytik nestrieľa náhodne. Analytik (
                    <strong className="text-white">@zombieSergeant</strong>)
                    zbiera tvrdé dáta. Aké má Avogadro HP v 30. kole? Koľko
                    sekúnd trvá reload zbrane HDR s Fast Hands perkom? Tieto
                    surové, exaktné dáta zbieraš počas hry. Neskôr ich
                    dekomprimuješ do Excelu alebo Markdown tabuliek a poskytneš
                    ich svojej komunite. Dodávaš hodnotu (Painkiller) ľuďom,
                    ktorí sú zaseknutí a nevedia prejsť úroveň.
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
                  Technologická Architektúra{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Bojový Modul a Strižňa)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aby tvoja produkcia nevyhorela na neefektívnych procesoch
                (Friction), musíš mať nepriestrelný a ľahký hardvérový setup.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Koniec AZ Recordera a Nástup PrismLive
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Záznamy v 4K, ktoré majú 10 GB a ich upload trvá celý deň,
                      sú smrť pre tvoj systém. Architekt optimalizuje. Aplikácia
                      PrismLive na tvojom Galaxy Tab A9+ ti umožňuje okamžitý,
                      bezproblémový streaming a záznam priamo do cloudu s
                      nulovým zdržaním. Zbavil si sa technického odporu.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Settings className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Dynamický Strih v CapCut
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Surové 3-hodinové video z Endless Runu nikto pozerať
                      nebude. Tvojou úlohou ako Tvorcu je "Sémantická
                      dekompresia videa". Použiješ CapCut, vyrežeš hluché
                      miesta, necháš len absolútny Climax (vrchol boja), kľúčové
                      chyby a úspešný záver. Pridáš Z-index vrstvy, zvukové
                      efekty (sound design) a tvoj "Proof of Work" je pripravený
                      pre YouTube Shorts alebo TikTok algoritmy.
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
                  Tvorba "Ultimate Guides"{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Návody ako B2B Produkt)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Tvoje poznatky z hier nemusia končiť len pri bezplatných
                videách. Kóduješ ich do predajných systémov.
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    <Code className="w-4 h-4 text-zinc-500" />
                    1. Architektúra Návodu (Walkthrough)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Dobrý návod na Final Fantasy VII / VIII alebo CoDM nie je
                    len suchý zoznam krokov. Je to psychologická a taktická
                    príručka. Rozkladáš Bossa na algoritmy. Učíš čitateľa, ako
                    prepojiť Materie (logické bloky) pre maximálny efekt.
                    Predávaš mu spôsob, akým myslí Architekt.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    <Coins className="w-4 h-4" style={{ color: TIER_COLOR }} />
                    2. Monetizácia Hobby
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Z týchto návodov vytváraš v Nexus Agency komerčné produkty
                    (napríklad Služba 9, 10, 11). Ak hráč nechce tráviť 100
                    hodín lúštením mechaník, kúpi si tvoju B2B licenciu alebo
                    e-book. Tvoj dávny voľný čas strávený pri PlayStation sa tak
                    retroaktívne mení na opakujúci sa príjem (MRR).
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
                  Vedenie Komunity{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    ("Trojan Horse" Marketing)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Tvoj herný kanál a diskusie k nemu slúžia ako vstupná brána (Top
                of Funnel) do celého ekosystému Projektu Nexus.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Ghost
                    className="w-5 h-5 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Trojský Kôň
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Človek na YouTube nehľadá "ako dekonštruovať svoje Ego".
                    Hľadá "ako prežiť R30 v CoDM Zombies". Tvoje video ho
                    zachytí (Hook). Poskytne mu dokonalý, taktický návod bez
                    zbytočností. V momente, keď si získaš jeho dôveru prežitou
                    pravdou v hre, do záveru videa (Outro) umiestniš odkaz na
                    svoju filozofiu a OS Genesis. Presmeruješ jeho pozornosť od
                    zábavy k skutočnému osobnému rozvoju.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Network className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Budovanie Kmeňa (The Hive Mind)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Z komentárov pod videami nebuduješ chaos, ale armádu
                    operátorov. Keď ti niekto napíše, že tvoja taktika mu
                    pomohla, neuspokojíš len svoje Ego. Pozveš ho na Nexus-Blog
                    (ID14), aby zdieľal svoje vlastné štatistiky. Tvoríš sieť
                    taktických analytikov, ktorí sa učia nielen hrať, ale
                    aplikovať túto tvrdú hernú disciplínu (Respawn mentalitu) aj
                    do svojich osobných a finančných životov.
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
                Ultimate Guide (Taktický Manuál)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Sémanticky dekomprimovaný návod, ktorý nelíči len to "čo
                urobiť", ale odhaľuje hrubý zdrojový kód hry (napr. DPS tabuľky
                a synergie), čím učí čitateľa algoritmickému mysleniu.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Trojan Horse Gaming
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Marketingová taktika. Využitie vysoko atraktívneho, akčného
                herného obsahu na zachytenie divákovej pozornosti s cieľom
                podprahovo mu doručiť Master Protokoly o financiách a raste
                (Projekt Nexus).
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Digital Leverage (Digitálna Páka)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Fenomén, kedy jedna hodina tvojho záznamu (napr. Boss Fight)
                vyprodukuje video, ktoré si pozrie 10 000 ľudí. Tvoj jednorazový
                výdaj energie sa tak exponenciálne multiplikuje v čase.
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
                1. The Silent Consumer
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor odohrá 2000 hodín, no na disku mu nezostane nič.
                Nevyprodukoval jediné video, nenapísal jediný riadok textu. Jeho
                "skúsenosti" sú uväznené v jeho vlastnej RAM a zomrú spolu s
                ním. Z pohľadu Siete je jeho existencia neefektívna.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Hráč bez stopy
              </div>
            </div>

            {/* KARTA 2 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Toxic Streamer
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor nahráva svoje hry, ale jeho výstupom je len krik, hnev
                (Rage Quit) a obviňovanie iných. Neposkytuje publiku žiadnu
                taktickú hodnotu, len šíri emocionálny malvér. Komunita ho
                sleduje len ako bizarnú reality show.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Ego Vysielač
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
                3. The Tactical Creator
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow relative z-10">
                Biely Čarodejník. @zombieSergeant. Z každej relácie extrahuje
                hodnotu. Analyzuje premenné, tvorí striktné návody a šíri ich
                cez pripravené digitálne kanály. Buduje okolo seba kmeň
                analytikov a elegantne ich cez herný obsah prevádza do sveta
                osobnej a finančnej slobody.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold relative z-10"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Architekt Komunity
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (GAME-TO-CONTENT COMPILER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Game-to-Content Compiler
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Interaktívny terminál spojený s Gemini API. Zadaj do poľa, aký
              "Epic Win" (napr. zbraňovú synergiu alebo zabitie Bossa) si práve
              v hre dosiahol a aký softvér používaš (CapCut). AI ti do 5 sekúnd
              vygeneruje presný scenár pre 60-sekundový YouTube Short, štruktúru
              strihu a 3 "Trojan Horse" výzvy do akcie (CTA), ktorými divákov
              dostaneš na tvoj hlavný web.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Napr: Zdolal som Bossa s 11.7M damage..."
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
          {/* Karmínová farba pre odlíšenie audia podľa inštrukcie */}
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
                  root@nexus-core:~/ID09_NODE_06_PLAYER_PROJECTS
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
                execute gameplay_conversion_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-500 mr-2">[STATUS]</span>
                  🔴 PASSIVE CONSUMPTION / ZERO DATA OUTPUT DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-500 mr-2">
                    [PATCHED]
                  </span>
                  🟡 PRISMLIVE RECORDING & KNOWLEDGE-AS-A-SERVICE INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 GAMEPLAY SUCCESSFULLY CONVERTED INTO EVERGREEN DIGITAL
                    ASSETS
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
                  "AK MÁŠ V HRE SKILL A NEUKÁŽEŠ HO SIETI, NEEXISTUJEŠ.
                  NAHRÁVAJ. STRIHAJ. VZDELÁVAJ."
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
