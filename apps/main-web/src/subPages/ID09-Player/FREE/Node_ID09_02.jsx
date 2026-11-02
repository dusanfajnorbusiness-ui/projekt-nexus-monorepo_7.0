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
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID09_02)
// =====================================================================

export default function Node_ID09_02() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // ZÁKON FARIEB: UZOL JE FREE -> TIER COLOR JE CYAN
  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID09-02";

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
            CESTA PLAYERA
          </span>{" "}
          <br />
          <span
            className="inline-block mt-4 text-3xl md:text-5xl lg:text-6xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (OD OBČASNÉHO HRÁČA K ANALYTIKOVI)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#PlayerPath",
            "#GameplayAnalysis",
            "#LoreDecryption",
            "#zombieSergeant",
            "#TacticalMindset",
            "#IntentionalGaming",
            "#SystemHacking",
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
            "Do leta 2018 som bol vo svete videohier len radovým NPC
            (Non-Playable Character), aj keď som držal v ruke ovládač. Bol som
            občasný hráč, ktorý hľadal v pixeloch na obrazovke iba úkryt pred
            zlyhávajúcim reálnym životom a dlhmi. Zabíjal som čas bezhlavou
            streľbou a lacným dopamínom. Moja zmena z 'Leňocha' na Architekta v
            Player UI Space nastala vtedy, keď som prestal hru 'hrať' a začal
            som ju 'dekompilovať'. Uvedomil som si, že Final Fantasy alebo CoDM
            Zombies nie sú len farebné obrázky. Sú to prísne logické,
            matematické systémy, plné premenných, spawn-ratov a DPS algoritmov.
            Akonáhle prestaneš tupo stláčať tlačidlá a začneš čítať zdrojový kód
            herných mechaník, Lore a stratégiu, hra prestáva byť útekom. Stáva
            sa z nej ten najbrutálnejší a najbezpečnejší kognitívny trenažér pre
            tvoj reálny mozog."
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
          <GlobalNodeVideo nodeId="ID09-02" dimColor="#FF003C" />
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
                Roky som trpel ilúziou, že hraním hier si "oddýchnem". V
                skutočnosti som si len vyčerpával RAM. "Cesta Playera" znamená u
                mňa úplný obrat. Keď dnes zapnem CoDM Zombies alebo starú
                klasiku z PS1, môj Avatar (@zombieSergeant) nejde "zabiť čas".
                Ide analyzovať. Zbieram hard-dáta o správaní sa Bossa, hľadám
                "glitche" v pohybe nepriateľov a študujem hlboký príbeh (Lore),
                aby som pochopil zámer vývojára. Moje hranie je čistá
                matematika, optimalizácia a logistika.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors group">
              <h3 className="text-[#00FFFF] uppercase mb-4 flex items-center gap-3 border-b border-zinc-800 pb-3 font-black tracking-widest text-left">
                <Cpu className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                Systém: AI Gemini
              </h3>
              <p className="text-zinc-400 text-justify">
                V systémovej architektúre rozoznávame dvoch používateľov:{" "}
                <strong className="text-white">End-User</strong> (koncový
                užívateľ, občasný hráč) a{" "}
                <strong className="text-white">QA/System Analyst</strong>{" "}
                (Testovač/Analytik). End-User reaguje výhradne na grafické
                rozhranie (Front-end), podlieha emóciám a panike. Analytik
                (Cesta Playera) Front-end ignoruje a vidí Back-end: časovače,
                Hitboxy, "If-Then-Else" podmienky umelej inteligencie
                nepriateľov a tabuľkové hodnoty zbraní. Hra pre neho predstavuje
                Reverse Engineering komplexného kybernetického diela.
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
                  Tvrdí, že hry v nás nebudujú agresiu, ale tzv. "Urgentný
                  Optimizmus" – túžbu okamžite a s plným nasadením riešiť
                  zložité prekážky.
                </p>
                <div className="border-t border-zinc-800/50 pt-4">
                  <strong className="text-white block mb-1">
                    Sun Tzu (Umenie vojny):
                  </strong>{" "}
                  Definuuje, že stratégia bez taktiky je najpomalšia cesta k
                  víťazstvu a taktika bez stratégie je hluk pred porážkou.
                  Analytik nebeží slepo do hordy, ale vopred vypočíta trasu a
                  muníciu.
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
                  Anatómia Dvoch Ciest{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Konzument vs. Analytik)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Matrix miluje občasných hráčov, pretože nevyvíjajú kognitívne
                úsilie, len pália svoj čas a peniaze za virtuálne predmety.
                Cesta Playera je prechod z pasivity do aktivity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Ghost className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Občasný Hráč (Casual Escapist)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Zapína hru v stave únavy a vyčerpania (Z.O.M.B.I.E. mód).
                    Nevníma príbeh (preskakuje dialógy), nečíta štatistiky
                    zbraní, volí "to, čo pekne strieľa". Jeho jediným cieľom je
                    lacný dopamínový hit. Ak prehrá, vinní hru, "laggujúci"
                    internet alebo podvádzajúcich súperov. Hra ho mentálne
                    degraduje.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <TerminalSquare
                    className="w-6 h-6 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Analytik Mechaník (The Player)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Zapína hru s konkrétnym cieľom (<em>Intentional Gaming</em>
                    ). Pristupuje k virtuálnemu svetu s rešpektom ako k
                    zložitému matematickému problému. Analyzuje mapu, ráta{" "}
                    <em>Frames per Second</em> (FPS) pri animáciách a sleduje
                    synergiu v tíme. Zlyhanie (Game Over) nevníma ako prehru,
                    ale ako cenný <em>Error Log</em>, z ktorého vytiahne dáta
                    pre ďalší, lepší pokus.
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
                    (Pasca bezcieľnosti)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Prečo je také ťažké stať sa Analytikom? Pretože herný priemysel
                bol v poslednej dekáde preprogramovaný na kradnutie pozornosti,
                nie na tréning mozgu.
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Bug className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Lootbox Malvér
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Moderné hry sa zámerne odklonili od hlbokého dizajnu (aký
                      mala napr. éra PS1/PS2) k psychologickej manipulácii
                      (skinner box). Systém na teba bliká, rozdáva ti denné
                      odmeny a núti ťa vykonávať nezmyselné, opakujúce sa
                      mikro-úlohy (Grinding), aby ťa udržal v stave nečinnosti.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Repeat className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Strata Schopnosti "Riešiť"
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Bežný hráč má dnes pri každom probléme tendenciu okamžite
                      googliť "ako to prejsť" (Tutorial Hell) alebo si kúpiť
                      virtuálne vylepšenie za reálne peniaze. Analytik tento
                      prístup odmieta. Zaseknutie sa na náročnom Bossovi vníma
                      ako výzvu pre svoj vlastný procesor. Analyzuje "Patern"
                      (vzorec útokov) a prekonáva ho výlučne vlastnou
                      inteligenciou.
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
                  Dekódovanie Trojice{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (Gameplay, Lore, Stratégia)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Aby sa z teba stal skutočný Architekt v Player UI Space, musíš
                ovládnuť tri kľúčové vrstvy každej hernej simulácie.
              </p>

              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Gameplay (Surová Fyzika)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Tu študuješ "hitboxy" (kde presne zasiahnuť nepriateľa),{" "}
                    <em>Movement</em> (kiting, slide-cancelling v CoDM) a
                    ekonomiku zdrojov (počet nábojov, zisk bodov z killov).
                    Prestávaš stláčať tlačidlá náhodne a meníš svoj
                    ovládač/displej na chirurgický nástroj s nulovým trením.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Lore (Sémantická a Príbehová vrstva)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Hry ako Final Fantasy VII/VIII neboli len o boji. Boli to
                    epické sémantické siete, plné náboženských, psychologických
                    (Jungových) a filozofických odkazov. Analytik číta všetky
                    herné logy, denníky a texty. Pochopenie príbehu (Lore) ti
                    umožní predvídať, ako vývojári (architekti hry) mysleli, čím
                    získaš výhodu v riešení hádaniek.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    3. Stratégia (Makro pohľad)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    V CoDM Zombies (Endless Run) stratégia znamená pochopiť
                    škálovanie zdravia nepriateľov. Ak má Boss v kole 30 milióny
                    HP, tvoja taktika "strielať do hlavy" už nestačí. Stratégia
                    je výpočet synergie – použitie Trap Mastera na +25% DMG,
                    rotácia mincí a perfektné "choke points".
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
                    (Výcvik Seržanta)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Ako fyzicky preprogramovať svoj prístup k hrám a udržať svojho
                Skafandra v špičkovej mentálnej forme.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <PowerOff className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Protokol "Intentional Boot"
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Zákaz zapnúť hru s myšlienkou "idem sa chvíľu hrať". Vždy si
                    definuj vstupný parameter. Napríklad:{" "}
                    <em>
                      "Tento run idem trénovať výhradne orientáciu na minimape a
                      zvukové stopy krokov."
                    </em>{" "}
                    Ostrý fokus okamžite zmení tvoju hru na prácu na vysokej
                    úrovni.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <Activity
                    className="w-5 h-5 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Záznam a Analýza (VOD Review)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Rovnako ako v profi športe alebo v IT (kde čítaš logy
                    zlyhaní servera), nahrávaj svoje prehraté hry. V prehrávači
                    uvidíš, že tvoja "zlá smola" bola len séria zlých a
                    uponáhľaných mikro-rozhodnutí, kedy tvoje Ego spanikárilo.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors">
                  <RefreshCw className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Aplikácia na Realitu (Cross-Training)
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Vedomosti, ktoré získaš optimalizáciou herných financií
                    (materií vo FF, bodov v CoD), sú identické algoritmy ako
                    správa osobného Cashflow (ID03). Nauč sa vnímať herný
                    tréning ako kompiláciu zručností, ktoré na druhý deň s
                    úspechom nasadíš pri riadení svojho reálneho biznisu.
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
                Intentional Gaming
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Striktný protokol, kedy je pred každým spustením hry jasne
                definovaný cieľ (napr. tréning konkrétnej mechaniky). Opak
                bezcieľneho zabíjania času (Hranie so zámerom).
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Lore Decryption
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Schopnosť Analytika čítať sémantické vrstvy hry, mýty a vnútornú
                logiku virtuálneho sveta s cieľom pochopiť skrytý zámer jej
                vývojárov (Dekódovanie príbehu).
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Gameplay Analysis
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed text-justify">
                Dekonštrukcia surového kódu hry (RNG pravdepodobnosti, Hitboxy,
                DPS tabuľky) do exaktných matematických dát pre dosiahnutie
                taktickej dominancie.
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
                1. The Casual Escapist
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Hráč v Z.O.M.B.I.E. móde. Hrá hry, len aby nemusel myslieť na
                reálny život. Utráca stovky eur za kozmetické úpravy (skiny),
                preskakuje príbeh a pri každom zlyhaní obviňuje hru. Jeho RAM je
                otupená a po vypnutí hry cíti iba prázdnotu.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Pasívna Obeť
              </div>
            </div>

            {/* KARTA 2 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-zinc-300 mb-4">
                2. The Raging Tryhard
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Hráč, ktorý síce študuje hru, ale je plne ovládaný svojím Egom.
                Hrá výhradne na svoje K/D skóre (Kills/Deaths) a ponižuje
                spoluhráčov. Nedokáže zniesť prehru, pri ktorej prežíva reálny,
                toxický stres (Thermal Throttling procesora).
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Toxický Bojovník
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
                3. The Tactical Analyst
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow relative z-10">
                Biely Čarodejník herného sveta. Vníma hru ako kybernetickú
                šachovnicu. Skúma Lore, dekompiluje kódy zbraní a analyzuje
                Movement. K zlyhaniu pristupuje s absolútne chladnou hlavou ako
                ku zberu cenných dát. Svoje herné zručnosti konvertuje do
                taktických návodov a sebarozvoja v realite.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold relative z-10"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Architekt / @zombieSergeant
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. AI CYBER-TOOL (GAME-MECHANICS DECOMPILER) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu
              className="w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
              style={{ color: TIER_COLOR }}
            />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Game-Mechanics Decompiler
            </h2>
          </div>

          <div className="bg-[#050a14] border border-zinc-800 rounded-xl p-8 md:p-10 font-mono shadow-2xl relative overflow-hidden text-left">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl text-justify">
              Interaktívne prepojenie s API Gemini. Operátor do terminálu zadá
              hernú prekážku alebo Bossa, s ktorým si nevie rady (napr.{" "}
              <em>"Neviem prejsť R30 S&R v CoDM"</em>). AI sémanticky rozloží
              tohto Bossa na jeho zdrojový kód (Paterny, zraniteľnosti, DPS
              požiadavky) a vygeneruje chladný, 3-krokový algoritmický postup na
              jeho likvidáciu.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj hernú prekážku alebo Bossa..."
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
                  root@nexus-core:~/ID09_NODE_02_PLAYER_PATH
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
                execute gameplay_analysis_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-500 mr-2">[STATUS]</span>
                  🔴 MINDLESS ESCAPISM AND CASUAL TIME-KILLING DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-500 mr-2">
                    [PATCHED]
                  </span>
                  🟡 GAMEPLAY ANALYSIS & LORE DECRYPTION PROTOCOLS INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 VIRTUAL WORLDS SUCCESSFULLY CONVERTED INTO STRATEGIC
                    COGNITIVE TRAINING
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
                  "HRA NIE JE ÚNIK PRED REALITOU. HRA JE LABORATÓRIUM, V KTOROM
                  TRÉNUJEŠ SVOJU MYSEĽ NA REÁLNE BOJE."
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
