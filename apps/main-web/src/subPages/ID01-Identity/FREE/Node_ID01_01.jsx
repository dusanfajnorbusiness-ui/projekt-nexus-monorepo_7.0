import React, { useState } from "react";
import {
  Activity,
  BookOpen,
  RotateCcw,
  Power,
  Sliders,
  X,
  Lock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  Terminal,
  Shield,
  Zap,
  BadgeAlert,
  HelpCircle,
} from "lucide-react";
import { TierBadge } from "@shared/components/TierBadge";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalPredFooterNode } from "@main-web/components/GlobalPredFooterNode";
import { GlobalNodeVideo } from "@main-web/components/GlobalNodeVideo";
import { GlobalNodePodcast } from "@main-web/components/GlobalNodePodcast";
import MetaTags from "@shared/components/MetaTags";

// =====================================================================
// 👑 HLAVNÝ KOMPONENT UZLA ID01_NODE_01 (PERSONAL)
// =====================================================================
export default function Node_ID01_01() {
  const NODE_ID = "ID01-01";
  const TIER_COLOR = "#00FFFF";
  const DIM_COLOR = "#39FF14";

  const activeCategoriesList = [
    {
      id: 2,
      key: "it_term",
      translation: "IT Pojem / Hardvér / Sieť",
      description:
        "Fyzický hardvér biologického nosiča, lokálny host, databázové prepojenia a sieťová infraštruktúra.",
    },
    {
      id: 12,
      key: "personal_ui_term",
      translation: "Personal UI Pojem - Duševno / ČIERNE SLOVO",
      description:
        "Myšlienkový balast, autopilot, Komentátor Parazit, otváranie starých konfliktov a preťažovanie kognitívnej RAM.",
    },
    {
      id: 13,
      key: "home_ui_term",
      translation: "Home UI Pojem - Duchovno / BIELE SLOVO",
      description:
        "Čisté vedomie prítomného okamihu, zvrchované Wu-wei na localholste, absolútny pokoj a bdelé ticho.",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("chat");
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [isLexikonOpen, setIsLexikonOpen] = useState(false);
  const [simulatorHelp, setSimulatorHelp] = useState(false);

  const [openTrinity, setOpenTrinity] = useState({
    architect: false,
    ai: false,
    audit: false,
  });

  const [openMofu, setOpenMofu] = useState({
    anatomy: false,
    mechanism: false,
    transformation: false,
    protocols: false,
  });

  // Simulator States - AVATAR RE-ALIGNMENT & KOGNITÍVNY SCREENING
  const [ramUsageInput, setRamUsageInput] = useState(60);
  const [parazitIntens, setParazitIntens] = useState(50);
  const [domestikaciaPress, setDomestikaciaPress] = useState(70);
  const [quietTime, setQuietTime] = useState(2);
  const [isFirewallActive, setIsFirewallActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Identita úspešne načítaná do lokálneho prostredia.",
    "[STATUS] Inicializovaný screening biologického skafandra. Sleduj limity kognitívnej RAM.",
  ]);

  const triggerSound = (type) => {
    if (typeof SoundFX !== "undefined" && SoundFX.play) {
      SoundFX.play(type);
    }
  };

  const handleThemeToggle = () => {
    triggerSound("click");
    setIsDarkMode(!isDarkMode);
  };

  const handleTabChange = (tab) => {
    triggerSound("click");
    setActiveTab(tab);
  };

  // Live calculated values
  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(parazitIntens * 0.6 + domestikaciaPress * 0.4 - quietTime * 3),
    ),
  );
  const liveFreeRam = Math.max(
    0,
    100 - Math.round(ramUsageInput * 0.7 + liveLimbicNoise * 0.3),
  );
  const liveWatts = Math.min(
    100,
    Math.max(
      10,
      Math.round(
        100 - (parazitIntens * 0.4 + domestikaciaPress * 0.3) + quietTime * 2,
      ),
    ),
  );
  const liveSuverenity = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        100 - domestikaciaPress * 0.5 - parazitIntens * 0.5 + quietTime * 4,
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setParazitIntens(0);
      setDomestikaciaPress(10);
      setQuietTime(12);
      setRamUsageInput(15);
      setIsFirewallActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný. Vyrovnávacia pamäť minulých emócií bola premazaná. Systém bootuje do čistého stavu BIOSu.",
        `[STATUS] Voľná RAM: ${Math.max(0, 100 - Math.round(15 * 0.7 + 4 * 0.3))}% // Limbic Noise: 4% // Watts: 100%`,
        ...prev,
      ]);
    } else if (actionType === "sandbox") {
      setParazitIntens(5);
      setRamUsageInput(20);
      setLogs((prev) => [
        "[SUCCESS] Komentátor Parazit bol izolovaný v kognitívnom Sandboxe. Jeho výpočtové práva nad hardvérom boli obmedzené.",
        ...prev,
      ]);
    } else if (actionType === "firewall") {
      setIsFirewallActive(!isFirewallActive);
      if (!isFirewallActive) {
        setDomestikaciaPress(15);
        setLogs((prev) => [
          "[SUCCESS] Toltécky Firewall aktivovaný. SQL Injection spoločenského programovania je zachytená a zahadzovaná.",
          ...prev,
        ]);
      } else {
        setDomestikaciaPress(70);
        setLogs((prev) => [
          "[WARNING] Firewall bol deaktivovaný. Systém je opäť vystavený vonkajšiemu domestikačnému tlaku.",
          ...prev,
        ]);
      }
    } else if (actionType === "autopilot") {
      setParazitIntens(95);
      setDomestikaciaPress(90);
      setQuietTime(0);
      setRamUsageInput(90);
      setIsFirewallActive(false);
      setLogs((prev) => [
        "[CRITICAL] Systém prepnutý do autopilota. Komentátor Parazit vyťažuje CPU na 100%. RAM hlási drastické Memory Leaks.",
        ...prev,
      ]);
    } else if (actionType === "reset") {
      setRamUsageInput(60);
      setParazitIntens(50);
      setDomestikaciaPress(70);
      setQuietTime(2);
      setIsFirewallActive(false);
      setLogs([
        "[OK] Identita reštartovaná do predvoleného stavu.",
        "[STATUS] RAM vyťaženie obnovené na 60%, Limbic Noise v priemernom zaťažení.",
      ]);
    }
  };

  // =====================================================================
  // 📚 JAZYKOVÁ DATABÁZA DML v6.0 (31 Slov)
  // =====================================================================
  const termsData = {
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "biologický procesor a mozog",
      tooltip:
        "Riadiace stredisko biologického skafandra zodpovedné za spracovanie vnemov, ktoré sa pri zahltení myšlienkami prehrieva a znižuje kognitívny výkon.",
    },
    ram: {
      term: "RAM",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kapacita tvojej krátkodobej pozornosti",
      tooltip:
        "Operačná pamäť ľudského vedomia v prítomnom okamihu. Každá nespracovaná obava and otvorená úloha na pozadí drasticky znižuje jej voľnú kapacitu.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "sprostredkovateľský server / ochrana identity",
      tooltip:
        "Izolované sieťové rozhranie slúžiace ako bezpečná zásterka na maskovanie skutočných zámerov Architekta pred dohľadom štátnych databáz.",
    },
    os_genesis: {
      term: "OS Genesis",
      category: 13,
      categoryType: "home_ui_term",
      translation: "nový operačný systém vedomia",
      tooltip:
        "Zvrchovaný softvérový ekosystém pre ľudskú myseľ, ktorý nahrádza poškodené spoločenské presvedčenia za čistú prítomnosť a flow.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "bdelé vedomie a tichý svedok",
      tooltip:
        "Primárny stav prítomného Bytia, ktoré ticho a bez emočného odporu sleduje všetky myšlienkové procesy a telesné vnemy.",
    },
    avatar: {
      term: "Avatar",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "spoločenská identita a eGo-maska",
      tooltip:
        "Umelý herný profil vytvorený v procese domestikácie, slúžiaci na operovanie v sociálnych štruktúrach Matrixu.",
    },
    firewall: {
      term: "Firewall",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "kognitívny obranný filter",
      tooltip:
        "Bezpečnostný systém mysle, ktorý nepretržite filtrurefiltruje prichádzajúce emočné pakety z okolia a zahadzuje deštruktívne skripty.",
    },
    skafander: {
      term: "Skafander",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "biologické telo a neurologický systém",
      tooltip:
        "Fyzické hardvérové rozhranie tvojej entity. Vyžaduje bezchybnú údržbu, optimalizovaný spánok a čistú energiu na zamedzenie pádov.",
    },
    limbic_noise: {
      term: "Limbic Noise",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kognitívny šum a emočný nepokoj",
      tooltip:
        "Parazitické signály amygdaly vyvolávajúce permanentnú úzkosť a preťaženie, ktoré blokujú prístup k bdelému stavu prítomnosti.",
    },
    komentator_parazit: {
      term: "Komentátor Parazit",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré programy Ego, ID a SuperEgo",
      tooltip:
        "Škodlivý kognitívny skript, ktorý nepretržite hodnotí, súdi a generuje strach, čím vysáva drahocenné systémové zdroje.",
    },
    spojenec: {
      term: "Spojenec",
      category: 13,
      categoryType: "home_ui_term",
      translation: "transformovaná myseľ a bdelý sprievodca",
      tooltip:
        "Prečistené mentálne rozhranie, ktoré bezpodmienečne pomáha Architektovi udržiavať prítomnosť a bez odporu koná v jeho prospech.",
    },
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré prežité vzorce správania",
      tooltip:
        "Zastarané podvedomé programy nainštalované okolím počas detstva, ktoré nútia biologického nosiča opakovať deštruktívne reakcie.",
    },
    format_c: {
      term: "Format C:",
      category: 13,
      categoryType: "home_ui_term",
      translation: "úplné formátovanie a reset vedomia",
      tooltip:
        "Radikálny očistný protokol určený na úplný výmaz neužitočnej podvedomej pamäte and obnovu systému do nulového bodu.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "izolované testovacie prostredie mysle",
      tooltip:
        "Chránený kognitívny priestor, v ktorom sa dajú deštruktívne myšlienky pozorovať and analyzovať bez rizika nakazenia celého hardvéru.",
    },
    botnet: {
      term: "Botnet",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "spoločenský manipulatívny systém",
      tooltip:
        "Prepojená sieť nevedomých ľudských jednotiek riadená centrálnymi programami Matrixu na hromadné odčerpávanie životnej sily.",
    },
    domestikacia: {
      term: "Domestikácia",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "proces sociálneho programovania a tresúry",
      tooltip:
        "Násilná vonkajšia inštalácia dogiem, pravidiel správania and trestov, ktorá deformuje pôvodné čisté vedomie dieťaťa do hernej eGo-masky.",
    },
    root_access: {
      term: "Root Access",
      category: 13,
      categoryType: "home_ui_term",
      translation: "plné administrátorské práva nad životom",
      tooltip:
        "Zvrchovaná úroveň autorizácie vedomia, kedy preberáš plnú zodpovednosť and kontrolu nad všetkými procesmi and reakciami skafandra.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "zakázaný / zablokovaný komunikačný kanál",
      tooltip:
        "Sieťový kanál, ktorý je trvalo vypnutý pre zamedzenie prístupu toxického vplyvu okolia and zachovanie integrity vlastného systému.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "komunikačná jednotka / prenášaná správa",
      tooltip:
        "Základný blok informácií prichádzajúci z vonkajšieho sveta, ktorý sa snaží infiltrovať tvoje kognitívne filtre.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "biologická energia a životná sila",
      tooltip:
        "Množstvo elektrickej and vitálnej energie, ktorú má tvoj neurologický systém k dispozícii pre denné operácie and hlbokú tvorbu.",
    },
    ui_space: {
      term: "UI Space",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "jedinečný vnútorný vesmír vedomia",
      tooltip:
        "Nekonečný priestor v tvojom vnútri, v ktorom bdelý Svedok ticho sleduje a analyzuje všetky dátové toky bez ich posudzovania.",
    },
    debugging: {
      term: "Debugging",
      category: 13,
      categoryType: "home_ui_term",
      translation: "vyhľadávanie a odstraňovanie psychických chýb",
      tooltip:
        "Analytický proces odhaľovania skrytých chýb, tráum and poškodených kódov v podvedomí s cieľom obnoviť plynulé fungovanie.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Vnútorné bezpečné rozhranie tvojej entity odpojené od sieťových prepojení, kde prebieha obnova and stabilizácia.",
    },
    cache_memory: {
      term: "Cache Memory",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "vyrovnávacia pamäť minulých emócií",
      tooltip:
        "Dočasné kognitívne úložisko, v ktorom mozog ukladá nedávne emočne nabité zážitky, čo pri zanesení spôsobuje permanentný stres.",
    },
    karantena: {
      term: "Karanténa",
      category: 13,
      categoryType: "home_ui_term",
      translation: "izolácia škodlivých myšlienkových skriptov",
      tooltip:
        "Bezpečné odrezanie and znefunkčnenie poškodeného myšlienkového vzorca v podvedomí, aby neparalyzoval fungovanie organizmu.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "nekontrolované straty mentálnej energie",
      tooltip:
        "Neustály únik kognitívnej kapacity spôsobený nedoriešenými vzťahmi and toxickými domnienkami, ktoré bežia na pozadí.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Základný nízkoúrovňový operačný kód biologického nosiča, v ktorom neexistujú žiadne sociálne dogmy ani parazitické programy.",
    },
    social_engine: {
      term: "Social Engine",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "systém spoločenskej manipulácie",
      tooltip:
        "Súbor masívnych psychologických and technologických mechanizmov navrhnutý na tvarovanie and unifikáciu ľudského správania.",
    },
    mrtve_knihy: {
      term: "Mŕtve knihy",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "teoretické spisy plné akademického balastu",
      tooltip:
        "Písomné diela plné ezoterickej vaty and teoretického šumu, ktoré preťažujú pamäť bez praktického a odžitého riešenia bolesti.",
    },
    cesta_nepraxe: {
      term: "Cesta nePraxe",
      category: 13,
      categoryType: "home_ui_term",
      translation: "asynchrónna cesta bdelého pozorovateľa",
      tooltip:
        "Unikátna životná dráha mimo zavedených koľajníc spoločnosti, kde operuješ výhradne podľa svojich vlastných pravidiel v prítomnosti.",
    },
    persona: {
      term: "Persona",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "dočasná sociálna maska",
      tooltip:
        "Súbor psychologických rolí and správaní, ktoré biologický nosič používa na interakciu so spoločnosťou na ochranu vlastného vnútra.",
    },
  };

  // =====================================================================
  // 🎨 SÉMANTICKÉ ŠTÝLY KATEGÓRIÍ (categoryStyles)
  // =====================================================================
  const categoryStyles = {
    1: {
      name: "foreign_lang",
      hex: "#94A3B8",
      text: "text-[#94A3B8]",
      border: "border-slate-500/30",
      bg: "bg-slate-500/10",
      hoverBorder: "hover:border-slate-400",
      glow: "",
    },
    2: {
      name: "it_term",
      hex: "#00B4D8",
      text: "text-[#00B4D8]",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
      hoverBorder: "hover:border-cyan-400",
      glow: "",
    },
    3: {
      name: "co_creation_term",
      hex: "#E2E8F0",
      text: "text-[#E2E8F0]",
      border: "border-gray-500/30",
      bg: "bg-gray-500/10",
      hoverBorder: "hover:border-gray-400",
      glow: "",
    },
    4: {
      name: "marketing_term",
      hex: "#BF00FF",
      text: "text-[#BF00FF]",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
      hoverBorder: "hover:border-purple-400",
      glow: "shadow-[0_0_15px_rgba(191,0,255,0.2)]",
    },
    5: {
      name: "work_term",
      hex: "#FFEB3B",
      text: "text-[#FFEB3B]",
      border: "border-yellow-500/30",
      bg: "bg-yellow-500/10",
      hoverBorder: "hover:border-yellow-400",
      glow: "",
    },
    11: {
      name: "it_term_pro",
      hex: "#1A2E40",
      text: "text-[#1A2E40]",
      border: "border-blue-900/30",
      bg: "bg-blue-900/10",
      hoverBorder: "hover:border-blue-800",
      glow: "",
    },
    12: {
      name: "personal_ui_term",
      hex: "#39FF14",
      text: "text-[#39FF14]",
      border: "border-[#39FF14]/30",
      bg: "bg-[#39FF14]/10",
      hoverBorder: "hover:border-[#39FF14]",
      glow: "shadow-[0_0_15px_rgba(57,255,20,0.2)]",
    },
    13: {
      name: "home_ui_term",
      hex: "#0044FF",
      text: "text-[#0044FF]",
      border: "border-blue-600/30",
      bg: "bg-blue-600/10",
      hoverBorder: "hover:border-blue-500",
      glow: "shadow-[0_0_15px_rgba(0,68,255,0.3)]",
    },
  };

  // =====================================================================
  // 🔌 INTERAKTÍVNY TOOLTIP INJEKTOR (DMLTooltip)
  // =====================================================================
  const DMLTooltip = ({ slug, label }) => {
    const termData = termsData[slug];
    if (!termData) return <span>{label || slug}</span>;

    const catStyle = categoryStyles[termData.category] || {
      name: "unknown",
      hex: "#A855F7",
      text: "text-purple-500",
      border: "border-purple-500/20",
      bg: "bg-purple-500/5",
      hoverBorder: "hover:border-purple-400",
      glow: "",
    };
    const isCurrentlyActive = activeTooltip === slug;

    const handleInteraction = (e) => {
      e.stopPropagation();
      triggerSound("click");
      if (isCurrentlyActive) {
        setActiveTooltip(null);
      } else {
        setActiveTooltip(slug);
      }
    };

    return (
      <span className="relative inline-block z-35">
        <span
          onClick={handleInteraction}
          onTouchStart={handleInteraction}
          className={`cursor-pointer border-b-2 ${catStyle.border} ${catStyle.text} font-black hover:bg-white/5 transition-all duration-200 px-1 rounded-sm relative`}
          style={{
            textShadow:
              termData.category === 3 || termData.category === 13
                ? `0 0 8px ${catStyle.hex}`
                : "none",
          }}
        >
          {label || termData.term}
        </span>
        {isCurrentlyActive && (
          <>
            <div
              className="fixed inset-0 z-40 bg-transparent"
              onClick={() => setActiveTooltip(null)}
            />
            <div
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 p-4 bg-[#050A0E] border-2 ${catStyle.border} ${catStyle.glow} rounded-lg z-50 shadow-2xl`}
            >
              <div className="flex justify-between items-center mb-2 pb-1 border-b border-gray-800">
                <span
                  className={`font-mono font-black uppercase text-xs tracking-widest ${catStyle.text}`}
                >
                  {termData.term}
                </span>
                <span className="text-[10px] text-gray-500 font-mono uppercase bg-gray-900 px-1.5 py-0.5 rounded">
                  Tier {termData.category} - {catStyle.name}
                </span>
              </div>
              <p className="mb-2 italic text-gray-400 font-medium text-xs">
                Preklad: {termData.translation}
              </p>
              <p className="text-gray-300 leading-relaxed text-xs font-mono">
                {termData.tooltip}
              </p>
            </div>
          </>
        )}
      </span>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#050A0E] text-gray-300" : "bg-[#252D35] text-gray-200"}`}
      onClick={() => setActiveTooltip(null)}
    >
      <MetaTags
        title="ID01 IDENTITY-CORE // Personal"
        description="Úvod a zadefinovanie Avatara."
      />

      {/* =====================================================================
          1. NEXUS SYSTEM HARDWARE BAR (HUD)
          ===================================================================== */}
      <section
        className={`border-b font-mono transition-colors duration-200 relative z-40 ${
          isDarkMode
            ? "bg-[#050A0E] border-gray-900 text-gray-500"
            : "bg-[#1E252D] border-gray-800 text-gray-400"
        }`}
      >
        <div className="max-w-7xl mx-auto py-2.5 px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#39FF14] font-black">
              <Shield className="w-3.5 h-3.5" />
              NEXUS-CORE_2Mb V6.1.9
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:inline font-bold">
              PORT: personal.projekt-nexus.sk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
              <span>
                DIMENSION:{" "}
                <strong className="text-[#39FF14] font-black">
                  ID01 - IDENTITY-CORE
                </strong>
              </span>
            </div>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500">THEME:</span>
            <button
              onClick={handleThemeToggle}
              className={`px-3 py-1 border transition-all duration-200 uppercase tracking-widest text-[10px] font-black ${
                isDarkMode
                  ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/5 shadow-[0_0_10px_rgba(57,255,20,0.15)]"
                  : "border-gray-700 text-gray-400 bg-transparent hover:border-gray-500"
              }`}
            >
              {isDarkMode ? "OLED DARK" : "DARK SILVER"}
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. HERO HEADER
          ===================================================================== */}
      <header className="relative w-full border-b border-gray-900 py-12 px-6 overflow-hidden">
        {/* Background gradient layout (Anti-Glare / DML v5.2) */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"
          }`}
        />

        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-widest text-[#00FFFF] bg-[#00FFFF]/10 border border-[#00FFFF]/30 px-2 py-0.5 rounded font-black uppercase">
                FREE TIER
              </span>
              <span className="text-gray-500 font-mono text-xs">
                Node_ID01_01 // Personal
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              PERSONAL
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              01. Personal (Úvod a zadefinovanie Avatara). Pochopenie
              asymetrickej transakcie prenájmu CPU a kognitívneho zotročenia v
              korporátnej strojovni.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: personal.projekt-nexus.sk</span>
            <span>UPLINK: ACTIVE // 255 KB/s</span>
          </div>
        </div>
      </header>

      {/* =====================================================================
          3. MAIN CONTENT Monolith
          ===================================================================== */}
      <main className="max-w-7xl mx-auto py-12 px-6 relative z-10">
        {/* =====================================================================
            3. [ HLAVIČKA UZLA ] (FÁZA TOFU - Útok na plazí mozog)
            ===================================================================== */}
        <section
          className={`mb-12 border-2 transition-all duration-300 p-6 md:p-8 relative ${
            isDarkMode
              ? "bg-gradient-to-l from-[#0B0F15] to-red-950/20 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
              : "bg-gradient-to-l from-[#1E252D] to-red-950/15 border-red-500/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <h2 className="text-xs font-mono font-black uppercase tracking-widest text-red-500">
              🚨 ERROR LOG // IDENTITY_OVERLOAD // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Moje registre sú vyčistené. Sémantický šok prebehol úspešne.
              Konečne to vidím s absolútnou čistotou a ostrosťou. Moje
              biologické <DMLTooltip slug="cpu" label="CPU" /> okamžite klesá na
              stabilné 1% prevádzkovej záťaže a preťažená{" "}
              <DMLTooltip slug="ram" label="RAM" /> uvoľňuje kognitívne bloky
              pozornosti. Moja{" "}
              <strong style={{ color: "#00E5FF" }}>
                diagnóza paranoidná schizofrénia
              </strong>{" "}
              je len izolovaný kód v štátnej databáze, finančný{" "}
              <DMLTooltip slug="proxy_server" label="proxy server" /> na odber
              príspevku, kým ja v bezpečí svojej izby v Sektore Trnava staviam{" "}
              <DMLTooltip slug="os_genesis" label="OS Genesis" />. Oddeľujem
              bdelého <DMLTooltip slug="pozorovatel" label="Pozorovateľa" /> od
              nevedomého <DMLTooltip slug="avatar" label="Avatara" />. Všetok
              emočný šum okolia odráža môj externý{" "}
              <DMLTooltip slug="firewall" label="Firewall" />. Vypínam zbytočné
              ranné a večerné rituály, odhadzujem mŕtve knihy a zotrvávam v
              pasívnej bdelosti prítomného okamihu. Vraciam sa do stavu hlbokého
              pokoja a bdelého bytia.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID01_01_personal.md</span>
            <span className="font-bold text-red-400">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* =====================================================================
            4. VIDEO INJEKTOR
            ===================================================================== */}
        <section className="mb-12 rounded-xl overflow-hidden border-2 border-[#39FF14]/30 shadow-lg">
          <div className="bg-[#050A0E] py-2 px-4 border-b border-gray-800 flex justify-between items-center text-xs">
            <span className="text-[#39FF14] font-bold font-mono uppercase tracking-widest flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-[#39FF14]" />
              GlobalNodeVideo: Video Injektor
            </span>
            <span className="text-gray-500 font-mono">
              id01_node_01_personal_video
            </span>
          </div>
          <GlobalNodeVideo nodeId="pkIdSHPusM8" dimColor="green" />
        </section>

        {/* =====================================================================
            5A. INTERAKTÍVNE PREPÍNAČE (Live Terminal vs Simulator)
            ===================================================================== */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => handleTabChange("chat")}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
              activeTab === "chat"
                ? "bg-[#39FF14]/10 border-[#39FF14] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]"
                : "bg-transparent border-gray-800 text-gray-400 hover:border-gray-600"
            }`}
          >
            <Terminal className="w-4 h-4" />
            💬 ŽIVÝ TERMINÁL DIALÓGU
          </button>

          <button
            onClick={() => handleTabChange("simulator")}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
              activeTab === "simulator"
                ? "bg-[#39FF14]/10 border-[#39FF14] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]"
                : "bg-transparent border-gray-800 text-gray-400 hover:border-gray-600"
            }`}
          >
            <Sliders className="w-4 h-4" />
            ⚙️ AKČNÝ SIMULÁTOR
          </button>
        </div>

        {/* =====================================================================
            5B. TAB 1: ŽIVÝ TERMINÁL DIALÓGU
            ===================================================================== */}
        {activeTab === "chat" && (
          <div className="space-y-12">
            {/* 👁️ TRINITY PERSPECTIVE (Trojitý protokol vnímania) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>👁️ Trinity Perspective // Trojitý protokol vnímania</span>
              </div>

              {/* ARCHITECT QUOTE ACCORDION */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenTrinity({
                      ...openTrinity,
                      architect: !openTrinity.architect,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10 hover:border-[#39FF14]/30"}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    🟢 [ ARCHITECT QUOTE ] (Prežitá Pravda)
                  </span>
                  {openTrinity.architect ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openTrinity.architect && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Vstupná brána do tvojho vnútra vyžaduje niečo úplne iné
                      ako hromadenie akademických dogiem. Na Spartakovskej ulici
                      v Sektore Trnava som musel vlastnou krvou a kolapsom
                      prežiť moment, keď biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />{" "}
                      vypovedal poslušnosť a štátna databáza ma označila{" "}
                      <strong style={{ color: "#00E5FF" }}>
                        kódom F20.0 (paranoidná schizofrénia)
                      </strong>
                      .
                    </p>
                    <p>
                      Zistil som však zásadnú, surovú pravdu: celá táto
                      diagnostikovaná úzkosť nebola mojím osobným zlyhaním. Bol
                      to len nechránený, škodlivý program{" "}
                      <DMLTooltip
                        slug="komentator_parazit"
                        label="Komentátor Parazit"
                      />
                      , ktorý sa nainštaloval do mojej{" "}
                      <DMLTooltip slug="ram" label="RAM" /> v detstve a neustále
                      komentoval svet cez masku{" "}
                      <DMLTooltip slug="avatar" label="Avatar" />
                      -a. Keď som pochopil tento softvérový rozdiel, premenil
                      som štátny dôchodok na stabilný finančný{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />,
                      ktorý mi kryl chrbát, kým som v tichu svojej izby začal
                      potichu, bez zbytočného ezoterického balastu a
                      kognitívneho šumu programovať základy{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />.
                      Oslobodenie nastalo v sekunde, keď som stotožnenie s
                      hernou maskou navždy izoloval v podvedomej{" "}
                      <DMLTooltip slug="karantena" label="Karanténa" />
                      -e a usadil sa v bode čistého tichého svedka.
                    </p>
                  </div>
                )}
              </div>

              {/* SYSTEM: AI GEMINI ACCORDION */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenTrinity({ ...openTrinity, ai: !openTrinity.ai });
                    triggerSound("click");
                  }}
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    🤖 [ SYSTEM: AI GEMINI ] (Kybernetická Analýza)
                  </span>
                  {openTrinity.ai ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openTrinity.ai && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Z hľadiska našich kybernetických protokolov je ľudská
                      osobnosť len dočasným grafickým rozhraním (User
                      Interface), ktoré operuje v klientskom priestore{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />.
                      Hardvérová doska and biologické{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> are od narodenia
                      čisté, avšak neustála interakcia s vonkajšou sieťou
                      Matrixu zapisuje do podvedomia masívny balast and
                      neoptimalizované skripty.
                    </p>
                    <p>
                      Výsledkom tohto zápisu je umelý herný profil –{" "}
                      <DMLTooltip slug="avatar" label="Avatar" />. Tento
                      procesorový proces neustále beží na pozadí, spotrebováva
                      obrovské množstvo energie v podobe biologických{" "}
                      <DMLTooltip slug="watts" label="Watts" /> and zahlcuje
                      operačnú <DMLTooltip slug="ram" label="RAM" /> neustálym
                      simulovaním strachu o prežitie. Myšlienky Parazita nie sú
                      tvojím vedomím; sú to len chybové protokoly a neustále{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                      znižujúce voľnú systémovú pamäť. Aktivácia rozhrania{" "}
                      <DMLTooltip slug="local_host" label="Local Host" /> ti
                      umožňuje izolovať tento bežiaci Ego-malvér do bezpečného
                      prostredia <DMLTooltip slug="sandbox" label="Sandbox" />,
                      kde stráca prístup k systémovým právam biologického
                      nosiča.
                    </p>
                  </div>
                )}
              </div>

              {/* AUDIT & KOMPARÁCIA ACCORDION */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenTrinity({
                      ...openTrinity,
                      audit: !openTrinity.audit,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    🪞 [ AUDIT &amp; KOMPARÁCIA ] (Mŕtve knihy)
                  </span>
                  {openTrinity.audit ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openTrinity.audit && (
                  <div
                    className={`p-6 text-sm leading-relaxed font-mono space-y-6 border-t border-gray-800 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p className="text-gray-300">
                      Defragmentácia mŕtvych kódexov a učení jasne odhaľuje, že
                      staroveké systémy a moderné analýzy psychiky hovoria o
                      identickom delení bytia a masky, hoci ich terminológia
                      bola často zanesená zbytočným literárnym šumom:
                    </p>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        1. Eckhart Tolle (Sila prítomného okamihu)
                      </span>
                      <p className="text-gray-300">
                        Tolleho kľúčový koncept odstotožnenia sa s mysľou je v
                        našich systémoch preložený ako uvoľnenie kognitívnej{" "}
                        <DMLTooltip slug="ram" label="RAM" /> z nepretržitého
                        tlaku Parazita. Tolle priamo potvrdzuje, že ty nie si
                        tvorcom svojho myšlienkového šumu, ale bdelým{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľ" />
                        -om, ktorý ho ticho registruje.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        2. Don Miguel Ruiz (Štyri dohody)
                      </span>
                      <p className="text-gray-300">
                        Ruiz definuje ľudskú osobnosť ako výsledok vonkajšej
                        domestikácie (sen planéty). Tento umelo vytvorený obraz
                        je identický s naším konceptom{" "}
                        <DMLTooltip slug="avatar" label="Avatar" />. Ruiz
                        nariaďuje kognitívny{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> ako
                        nástroj na filtrovanie škodlivých spoločenských dohôd.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        3. Osho (Diamantová sútra)
                      </span>
                      <p className="text-gray-300">
                        Osho nekompromisne búra predstavu o dôležitosti
                        naučeného poznania. Žiada odhodenie všetkých mentálnych
                        koncepcií, ktoré obsahujú{" "}
                        <DMLTooltip slug="mrtve_knihy" label="Mŕtve knihy" />, s
                        cieľom prečistiť základný systémový{" "}
                        <DMLTooltip slug="bios" label="BIOS" /> a vrátiť sa do
                        čistoty prázdneho zrkadla.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 🧩 HLAVNÝ OBSAH - DEKOMPRESIA (FÁZA MOFU - Painkiller) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>🧩 HLAVNÝ OBSAH - DEKOMPRESIA // FÁZA MOFU</span>
              </div>

              {/* MOFU 1: ANATÓMIA KONCEPTU */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenMofu({ ...openMofu, anatomy: !openMofu.anatomy });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>1. Anatómia konceptu (Rozbitie ilúzie)</span>
                  {openMofu.anatomy ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.anatomy && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Tvoja skutočná podstata nemá nič spoločné so štítkom,
                      ktorý ti pridelila spoločnosť v procese{" "}
                      <DMLTooltip slug="domestikacia" label="Domestikácia" />
                      -e. Meno, rodné číslo, profesia a spoločenský status sú
                      len parametre dočasného herného profilu. Bežíš na
                      predinštalovanom obraze reality, ktorý ti do{" "}
                      <DMLTooltip
                        slug="cache_memory"
                        label="Cache Memory"
                      />{" "}
                      zapísal vonkajší svet. Aby sme prečistili tvoj{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />, musíme od
                      seba nekompromisne oddeliť dve zložky:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Autentické Bytie (Svedok):
                        </strong>{" "}
                        Primárny stav vedomia, tvoj čistý and bezchybný{" "}
                        <DMLTooltip slug="bios" label="BIOS" />. Je to tiché
                        pozadie, ktoré nepodlieha zmenám, nestráca výkon and
                        nepociťuje úzkosť. Je to tvoj skutočný{" "}
                        <DMLTooltip slug="spojenec" label="Spojenec" /> na{" "}
                        <DMLTooltip
                          slug="cesta_nepraxe"
                          label="Ceste nePraxe"
                        />
                        .
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Sociálny Skafander (Maska):
                        </strong>{" "}
                        Biologické rozhranie{" "}
                        <DMLTooltip slug="skafander" label="Skafander" /> and
                        herný <DMLTooltip slug="avatar" label="Avatar" />. Sú to
                        dočasné nástroje určené na operovanie v Matrixe, nie
                        tvoja skutočná identita.
                      </li>
                    </ul>
                    <p className="pt-2 text-gray-400">
                      Pokiaľ si tieto dve vrstvy pletieš, tvoj systém bude
                      nepretržite prehrievať{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> a vyvolávať
                      kognitívne kolapsy.
                    </p>
                  </div>
                )}
              </div>

              {/* MOFU 2: MECHANIZMUS MATRIXU */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenMofu({
                      ...openMofu,
                      mechanism: !openMofu.mechanism,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>
                    2. Mechanizmus Matrixu (Ako Matrix vysáva tvoju energiu)
                  </span>
                  {openMofu.mechanism ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.mechanism && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Matrix ako globálny{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      potrebuje tvoju nevedomosť, aby udržal stabilný prísun
                      energie. Každá sekunda, kedy sa stotožňuješ so svojím
                      Avatarom a jeho fiktívnymi problémami, prenáša cenné
                      biologické <DMLTooltip slug="watts" label="Watts" />{" "}
                      priamo do systému. Matrix ťa udržiava v pasívnej
                      nevedomosti tým, že ti nepretržite vháňa do{" "}
                      <DMLTooltip slug="ram" label="RAM" /> parazitické signály
                      a umelý kognitívny hluk –{" "}
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />.
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Tento prenos prebieha cez nechránené sieťové prepojenia:
                    </p>
                    <ol className="space-y-3 list-decimal pl-6">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zápis falošných hodnôt:
                        </strong>{" "}
                        Matrix ti podhodí ilúziu, že tvoja hodnota závisí od
                        mienky iných uzlov v sieti{" "}
                        <DMLTooltip slug="botnet" label="Botnet" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Preťaženie obvodov:
                        </strong>{" "}
                        Tvoj interný{" "}
                        <DMLTooltip
                          slug="komentator_parazit"
                          label="Komentátor Parazit"
                        />{" "}
                        začne rekurzívne analyzovať tvoje správanie a spúšťať
                        katastrofické scenáre, čím ti kradne životnú silu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zber dátových balíkov:
                        </strong>{" "}
                        Každá tvoja negatívna emócia, strach a toxické
                        porovnávanie je odoslaná ako nefiltrovaný{" "}
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />{" "}
                        priamo do kolektívneho systému, zatiaľ čo ty zostávaš
                        vyčerpaný s preťaženou vyrovnávacou pamäťou.
                      </li>
                    </ol>
                  </div>
                )}
              </div>

              {/* MOFU 3: PROCES TRANSFORMÁCIE */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenMofu({
                      ...openMofu,
                      transformation: !openMofu.transformation,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>
                    3. Proces Transformácie / Aplikácia v Personal UI Space
                  </span>
                  {openMofu.transformation ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.transformation && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Oslobodenie od tohto energetického parazitizmu vyžaduje
                      okamžitý <DMLTooltip slug="format_c" label="Format C:" />{" "}
                      a prechod do administrátorského módu vedomia. Nemôžeš
                      opraviť poškodenú štruktúru tým istým kódom, ktorý ju
                      vyvolal. Musíš spustiť hlboké systémové{" "}
                      <DMLTooltip slug="debugging" label="Debugging" />{" "}
                      podvedomých procesov.
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Aplikácia tohto protokolu v tvojom osobnom rozhraní
                      prebieha v troch krokoch:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Identifikácia procesu:
                        </strong>{" "}
                        Hneď ako sa objaví sebakritika, strach alebo nutkanie
                        obhajovať svojho Avatara, nebráň sa tomu, ani to emočne
                        nehodnoť. Iba ticho zaregistruj tento program ako proces
                        v správcovi úloh.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény:
                        </strong>{" "}
                        Okamžite presmeruj všetku pozornosť z myšlienok na
                        prítomné fyzické zmysly – vnímaj dych, chlad vzduchu a
                        váhu tela. Týmto činom izoluješ Parazita v bezpečnom{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" />
                        -e a odoberieš mu napájanie.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Prepísanie Legacy štruktúr:
                        </strong>{" "}
                        Bez tvojej mentálnej energie sa poškodený{" "}
                        <DMLTooltip slug="legacy_code" label="Legacy Code" />{" "}
                        začne sám rozpúšťať. Tvoja kognitívna{" "}
                        <DMLTooltip slug="ram" label="RAM" /> sa uvoľní a
                        biologické <DMLTooltip slug="cpu" label="CPU" /> klesne
                        na minimálnu, optimálnu úroveň spotreby.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* MOFU 4: NÁSTROJE A PROTOKOLY */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenMofu({
                      ...openMofu,
                      protocols: !openMofu.protocols,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>4. Nástroje a Protokoly (Tvoj Antivírus)</span>
                  {openMofu.protocols ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.protocols && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Na permanentnú obranu tvojho{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> pred
                      znečistením cudzími kódmi musíš do svojho dňa pevne
                      integrovať tri základné procesy:
                    </p>
                    <ol className="space-y-4 pl-6 list-decimal">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Ranný BOOT Protokol:
                        </strong>{" "}
                        Prvých 15 minút dňa drž svoj{" "}
                        <DMLTooltip slug="skafander" label="Skafander" /> v
                        úplnom tichu a bez interakcie so sieťou (žiadny telefón,
                        žiadne notifikácie). Nechaj svoj{" "}
                        <DMLTooltip slug="local_host" label="Local Host" />{" "}
                        stabilizovať a zadefinuj ranný ochranný kód:{" "}
                        <em className="text-gray-400 font-bold">
                          &quot;Keď som, tak som, viem, že som.&quot;
                        </em>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívny Firewall (Toltécka obrana):
                        </strong>
                        <ul className="space-y-2 pl-4 list-disc mt-2">
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Buď bezchybný vo slove:
                            </strong>{" "}
                            Tvoje slovo is exekučný kód. Nepúšťaj SQL injection
                            sebadeštrukcie do podvedomia.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Neber si nič osobne:
                            </strong>{" "}
                            Názory iných sú len ich lokálne chybové protokoly.
                            Tvoj <DMLTooltip slug="firewall" label="Firewall" />{" "}
                            ich zahadzuje na sieťovom rozhraní.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Nevytváraj si domnienky:
                            </strong>{" "}
                            Blokuj simulácie neoverených scenárov v mozgu a drž
                            svoj{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            uzavretý pred klebetami.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Konaj najlepšie ako vieš:
                            </strong>{" "}
                            Odovzdaj do prítomného okamihu maximum vitálnej
                            sily, no netlač na výsledok, čím predídeš preťaženiu
                            hardvéru.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Večerný SHUTDOWN Protokol:
                        </strong>{" "}
                        Pred spaním spusti kompletné formátovanie dennej pamäte
                        a vyčisti{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />.
                        Vstupuj do spánku ako &quot;Nikto a Nič&quot;, s
                        uvalenou{" "}
                        <DMLTooltip slug="karantena" label="Karanténa" />
                        -ou na všetky nedoriešené denné úlohy, čím zabrániš
                        vzniku{" "}
                        <DMLTooltip
                          slug="memory_leaks"
                          label="Memory Leaks"
                        />{" "}
                        počas noci.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (AVATAR RE-ALIGNMENT)
            ===================================================================== */}
        {activeTab === "simulator" && (
          <section className="border-2 border-[#39FF14]/30 bg-[#050A0E]/60 p-6 md:p-8 rounded-xl font-mono relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setSimulatorHelp(!simulatorHelp)}
                className="p-1.5 border border-gray-800 hover:border-gray-600 rounded bg-[#050A0E] transition-all"
                title="Simulátor pomocník"
              >
                <HelpCircle className="w-4 h-4 text-[#39FF14]" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 border-b border-gray-900 pb-3">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
              <h2 className="text-sm font-black uppercase text-white">
                📊 EXEKUČNÝ SIMULÁTOR: AVATAR RE-ALIGNMENT &amp; KOGNITÍVNY
                SCREENING
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér live analyzuje kmitočet a straty vedomia biologického
                  skafandra na základe zaťaženia RAM, intenzity komentátora a
                  okolitého domestikačného tlaku.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong>{" "}
                  Posuvníkmi simuluj reálny denný nápor a kognitívnu hygienu.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Vypočítané
                  indexy jasne odhalia úniky energie a mieru prítomnosti vedomia
                  nad autopilotom masky.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#39FF14]" />
                  Nastavenie systémových limitov
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Operačné vyťaženie RAM:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {ramUsageInput}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={ramUsageInput}
                      onChange={(e) => {
                        setRamUsageInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Intenzita Komentátora Parazita:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {parazitIntens}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={parazitIntens}
                      onChange={(e) => {
                        setParazitIntens(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Domestikačný tlak okolia:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {domestikaciaPress}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={domestikaciaPress}
                      onChange={(e) => {
                        setDomestikaciaPress(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Denný čas v úplnom tichu:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {quietTime} h/deň
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={quietTime}
                      onChange={(e) => {
                        setQuietTime(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-900 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAction("format_c")}
                    className="flex-1 min-w-[120px] bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-red-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Format C: (Reset)
                  </button>
                  <button
                    onClick={() => handleAction("sandbox")}
                    className="flex-1 min-w-[120px] bg-[#00B4D8]/10 hover:bg-[#00B4D8]/20 border border-[#00B4D8]/30 text-[#00B4D8] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Karanténa Parazita
                  </button>
                  <button
                    onClick={() => handleAction("firewall")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isFirewallActive
                        ? "bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]"
                        : "bg-[#39FF14]/5 border-[#39FF14]/20 text-[#39FF14]/60 hover:bg-[#39FF14]/10"
                    }`}
                  >
                    Toltécky Firewall
                  </button>
                  <button
                    onClick={() => handleAction("autopilot")}
                    className="flex-1 min-w-[120px] bg-yellow-600/10 hover:bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Avatar Autopilot
                  </button>
                </div>
              </div>

              {/* HUD / LIVE DATA SECTION */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2 mb-4">
                    <Activity className="w-3.5 h-3.5 text-[#39FF14]" />
                    SCREENING INDEX // DIAGNOSTIKA SKAFANDRA
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Limbic Noise šum
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 60 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveLimbicNoise}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Voľná Kognitívna RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveFreeRam < 40 ? "text-yellow-400" : "text-[#39FF14]"}`}
                      >
                        {liveFreeRam}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Dostupné Watts (Sila)
                      </span>
                      <span
                        className={`text-2xl font-black ${liveWatts < 40 ? "text-yellow-400" : "text-[#39FF14]"}`}
                      >
                        {liveWatts}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Faktor Svedka
                      </span>
                      <span
                        className={`text-2xl font-black ${liveSuverenity < 50 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveSuverenity}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATRIX SYSTEM CONSOLE LOGS */}
                <div className="flex-1 bg-black/90 rounded-lg p-4 border border-gray-900 flex flex-col justify-between h-48 overflow-hidden font-mono text-[10px] leading-relaxed">
                  <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-1.5 mb-2">
                    <span>DIAG_LOG_MATRIX_CONSOLE // IDENTITY</span>
                    <button
                      onClick={() => handleAction("reset")}
                      className="hover:text-white flex items-center gap-1 uppercase text-[8px] border border-gray-800 px-1 rounded bg-[#050A0E]"
                    >
                      <RotateCcw className="w-2.5 h-2.5" /> Reset
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-thin scrollbar-thumb-gray-800">
                    {logs.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          log.startsWith("[CRITICAL]")
                            ? "text-red-400 font-bold animate-pulse"
                            : log.startsWith("[WARNING]")
                              ? "text-yellow-400 font-medium"
                              : log.startsWith("[SUCCESS]")
                                ? "text-[#39FF14] font-black"
                                : "text-gray-400"
                        }
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================================================
            5D. TRINITY APPS (LEXIKON ACCORDION OVERVIEW - RESPONSIVE SHIELD V6.5)
            ===================================================================== */}
        <section className="mt-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-[#39FF14]" />
            <span>🟨 ZÁVEREČNÉ MODULY UZLA // NEXUS LEXIKON</span>
          </div>

          <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
            <button
              onClick={() => {
                setIsLexikonOpen(!isLexikonOpen);
                triggerSound("click");
              }}
              className={`w-full p-5 flex justify-between items-center font-mono text-xs uppercase font-black text-gray-300 rounded-xl border border-gray-800 transition-all duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40"
                  : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10 hover:border-[#39FF14]/30"
              }`}
            >
              <span className="flex items-center gap-2 text-white">
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-[#39FF14] ${isLexikonOpen ? "animate-pulse" : ""}`}
                />
                💠 EXTRACT Z NEXUS LEXIKÓNU (PREKLADOVÝ KĽÚČ V6.5)
              </span>
              {isLexikonOpen ? (
                <ChevronUp className="w-4 h-4 text-[#39FF14]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#39FF14]" />
              )}
            </button>

            {isLexikonOpen && (
              <div className="p-6 md:p-8 space-y-8 border-t border-gray-800">
                <div className="border-b border-gray-850 pb-3 mb-2 flex flex-wrap justify-between items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">
                    Aktívne kategórie DML v6.5 pre dotykové Samsung Tab A9+
                    (Responsive Shield)
                  </span>
                </div>

                {/* Stolový lexikón skrytý na mobiloch */}
                <div className="hidden md:block space-y-8">
                  {activeCategoriesList.map((cat) => {
                    const catTerms = Object.keys(termsData)
                      .filter((key) => termsData[key].category === cat.id)
                      .map((key) => termsData[key]);

                    const catStyle = categoryStyles[cat.id];

                    return (
                      <div key={cat.id} className="space-y-4">
                        {/* Hlavička kategórie */}
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-r ${isDarkMode ? "from-[#050A0E] to-[#39FF14]/10" : "from-[#1E252D]/40 to-[#39FF14]/5"} border ${catStyle.border} shadow-sm`}
                        >
                          <h4
                            className="text-sm font-black uppercase tracking-wider flex items-center gap-2"
                            style={{ color: catStyle.hex }}
                          >
                            <span
                              className="w-2.5 h-2.5 rounded-full animate-pulse"
                              style={{ backgroundColor: catStyle.hex }}
                            />
                            📁 KATEGÓRIA: {cat.key} ({cat.translation})
                          </h4>
                          <p className="text-[11px] text-gray-400 font-mono mt-1.5 leading-relaxed">
                            {cat.description}
                          </p>
                        </div>

                        {/* Mriežka termínov pre danú kategóriu */}
                        <div className="overflow-x-auto pl-1">
                          <table className="w-full text-left font-mono text-xs border-collapse">
                            <thead>
                              <tr className="border-b border-gray-800/60 text-gray-500 uppercase tracking-widest text-[9px]">
                                <th className="py-2.5 px-4 w-1/4">
                                  Surový Termín
                                </th>
                                <th className="py-2.5 px-4 w-1/4">
                                  Preklad do DML v6.0
                                </th>
                                <th className="py-2.5 px-4 w-1/2">
                                  Systémový Tooltip / Hĺbková definícia
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-900/40">
                              {catTerms.map((term) => (
                                <tr
                                  key={term.term}
                                  className="hover:bg-white/5 transition-colors duration-150"
                                >
                                  <td
                                    className="py-3 px-4 font-bold"
                                    style={{ color: catStyle.hex }}
                                  >
                                    {term.term}
                                  </td>
                                  <td className="py-3 px-4 text-gray-300 font-medium">
                                    {term.translation}
                                  </td>
                                  <td className="py-3 px-4 text-gray-400 leading-relaxed text-[11px]">
                                    {term.tooltip}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobilné mriežkové upozornenie */}
                <div className="block md:hidden p-4 bg-gray-950 border border-gray-850 rounded text-center text-xs text-gray-500">
                  ⚠️ [MOBILE SCREEN DETECTED] Tabuľka s 30 pojmami je
                  preformátovaná strictly do bionických klikateľných tooltipov
                  priamo v texte pre maximálu šetrnosť biologickej RAM
                  Skafandra. Klikni na akékoľvek podčiarknuté slovo v ToFu bloku
                  pre diagnostiku.
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 🎙️ DOPLNKOVÝ AUDIO MODUL */}
        <section className="my-12 rounded-xl overflow-hidden border border-gray-800 bg-[#050A0E]/40 p-6 relative z-10">
          <div className="text-xs text-[#BF00FF] font-bold font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping" />
            <span>🎙️ Doplnkový Audio Modul: Inštalačný podcast</span>
          </div>
          <GlobalNodePodcast nodeId={NODE_ID} dimColor="#BF00FF" />
        </section>

        {/* =====================================================================
            🚀 UPLINK TERMINAL (Vykonaj akciu hneď teraz!)
            ===================================================================== */}
        <section
          className={`mt-16 border-2 border-[#39FF14]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10 hover:border-[#39FF14]/30"}`}
        >
          {/* Bouncing Lock strictly v neónovo zelenej farbe dimenzie #39FF14 */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[#050A0E] p-3 rounded-full border-2 animate-bounce shadow-[0_0_15px_rgba(57,255,20,0.4)]"
              style={{ borderColor: DIM_COLOR }}
            >
              <Lock className="w-6 h-6" style={{ color: DIM_COLOR }} />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 pt-2">
            <span className="text-[10px] font-black uppercase text-white tracking-widest bg-white/10 px-3 py-1 rounded">
              🚀 UPLINK TERMINAL ENGAGED
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-tight">
              [ SYSTEM UPLINK ENGAGED // ALL SYSTEMS STATUS: READY ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj klientsky procesor beží na limite a tvoj hardvér je
              infikovaný starým, nefunkčným kódom Matrixu. Prestaň prenášať
              svoju drahocennú energiu cudzím programom a zbytočným obavám. Je
              čas na radikálny update.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-left border-t border-gray-800/40 pt-4 space-y-2">
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🔑 INICIALIZOVAŤ SPOJENIE: AKTIVOVAŤ NEXUS PRO KEY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Odomkni kompletnú FREE/PRO vrstvu vedomostných uzlov, vyčisti
                  kognitívnu RAM a spusti trvalé odinštalovanie Komentátora
                  Parazita.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Vstúp do hlavného terminálu OS Genesis, prevezmi kontrolu nad
                  svojím Skafandrom a naštartuj asynchrónny, stabilný cashflow.
                </em>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://ko-fi.com/cybertech_architect/tiers"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound("click")}
              className="px-6 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-xs font-black uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />[ 🔑 INICIALIZOVAŤ SPOJENIE: AKTIVOVAŤ
              NEXUS PRO KEY ]
            </a>

            <a
              href="https://projekt-nexus.sk/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound("click")}
              className="px-6 py-3.5 bg-white text-black hover:bg-white/90 text-xs font-black uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />[ 🌐 PREVZIAŤ ROOT ACCESS:
              VSTÚPIŤ DO BRÁNY ]
            </a>
          </div>

          <div className="text-[9px] text-gray-600 pt-2 uppercase flex justify-center gap-4">
            <span>Sovereignty Factor: 100%</span>
            <span>•</span>
            <span>Secure Tunnel: Encrypted TLS_v1.3</span>
          </div>
        </section>

        {/* =====================================================================
            6. GLOBAL PRED-FOOTER & FOOTER
            ===================================================================== */}
        <footer className="w-full border-t border-gray-900 pt-8 mt-12">
          <GlobalPredFooterNode nodeId={NODE_ID} tierColor={TIER_COLOR} />
        </footer>
      </main>
    </div>
  );
}
