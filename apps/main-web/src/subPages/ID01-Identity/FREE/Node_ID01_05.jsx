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
// =====================================================================
// 🟢 1. PRODUKČNÉ IMPORTY
// =====================================================================
import { TierBadge } from "@shared/components/TierBadge.jsx";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { GlobalPredFooterNode } from "@main-web/components/GlobalPredFooterNode.jsx";
import { GlobalMediaPlayer } from "@shared/components/GlobalMediaPlayer.jsx";
import MetaTags from "@shared/components/MetaTags.jsx";
import { DMLTooltip } from "@shared/components/DMLTooltip.jsx";

// =====================================================================
// 👑 HLAVNÝ KOMPONENT UZLA ID01_NODE_05 (SKAFANDER)
// =====================================================================
export default function Node_ID01_05() {
  const NODE_ID = "ID01-05";
  const TIER_COLOR = "#00FFFF";
  const DIM_COLOR = "#39FF14";

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

  // Simulator States - SKAFANDER HARDWARE REGULATION
  const [toxins, setToxins] = useState(60);
  const [sleepDeprivation, setSleepDeprivation] = useState(50);
  const [vitalPower, setVitalPower] = useState(45);
  const [bodyScanTime, setBodyScanTime] = useState(2);
  const [isFirewallActive, setIsFirewallActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný screening biologického hardvéru. Sleduj preťaženie CPU.",
    "[STATUS] Detekovaný statický šum. Odporúča sa ranná kalibrácia BIOSu.",
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

  // Live calculated values based on sliders for Node 05:
  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(toxins * 0.4 + sleepDeprivation * 0.6 - bodyScanTime * 4),
    ),
  );
  const liveCpuLoad = Math.min(
    100,
    Math.max(
      10,
      Math.round(toxins * 0.5 + sleepDeprivation * 0.5 - bodyScanTime * 3),
    ),
  );
  const liveFreeRam = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        vitalPower * 0.7 -
          toxins * 0.3 -
          sleepDeprivation * 0.4 +
          bodyScanTime * 3,
      ),
    ),
  );
  const liveBiosPurity = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        vitalPower * 0.5 +
          (100 - toxins) * 0.3 +
          (100 - sleepDeprivation) * 0.2,
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setToxins(10);
      setSleepDeprivation(10);
      setBodyScanTime(12);
      setVitalPower(95);
      setIsFirewallActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný. Biologický nosič prešiel šokovou chladovou terapiou. Autonómny nervový systém stabilizovaný.",
        `[STATUS] Voľná RAM: ${Math.max(0, Math.min(100, Math.round(95 * 0.7 - 10 * 0.3 - 10 * 0.4 + 12 * 3)))}% // CPU Záťaž: 10% // BIOS Purity: 98%`,
        ...prev,
      ]);
    } else if (actionType === "karantena") {
      setToxins((prev) => Math.max(10, prev - 30));
      setVitalPower((prev) => Math.min(100, prev + 20));
      setLogs((prev) => [
        "[SUCCESS] Karanténa na deštruktívne biologické návyky uvalená. Toxické vstupy upchaných zberníc úspešne odrezané.",
        ...prev,
      ]);
    } else if (actionType === "firewall") {
      setIsFirewallActive(!isFirewallActive);
      if (!isFirewallActive) {
        setSleepDeprivation((prev) => Math.max(10, prev - 25));
        setLogs((prev) => [
          "[SUCCESS] Kognitívny Firewall aktívny. Modré svetlo, večerný šum a fiktívne obavy zablokované na vstupných portoch.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Firewall deaktivovaný. Vedomie je vystavené dopamínovej infiltrácii.",
          ...prev,
        ]);
      }
    } else if (actionType === "autopilot") {
      setToxins(95);
      setSleepDeprivation(90);
      setBodyScanTime(0);
      setVitalPower(5);
      setIsFirewallActive(false);
      setLogs((prev) => [
        "[CRITICAL] Spustený autopilot! Skafander beží na nekvalitnom priemyselnom palive a stimulantoch. CPU preťažené.",
        ...prev,
      ]);
    } else if (actionType === "reset") {
      setToxins(60);
      setSleepDeprivation(50);
      setVitalPower(45);
      setBodyScanTime(2);
      setIsFirewallActive(false);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu.",
        "[STATUS] RAM vyťaženie obnovené, hardvérové indexy v bežnom prevádzkovom tolerančnom pásme.",
      ]);
    }
  };
  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID01_05 (ESLINT FIX)
  // =====================================================================
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
  // =====================================================================
  // 📚 JAZYKOVÁ DATABÁZA DML v6.0 (30 Slov)
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
        "Operačná pamäť ľudského vedomia v prítomnom okamihu. Každá nespracovaná obava a otvorená úloha na pozadí drasticky znižuje jej voľnú kapacitu.",
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
        "Bezpečnostný systém mysle, ktorý nepretržite filtruje prichádzajúce emočné pakety z okolia a zahadzuje deštruktívne skripty.",
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
        "Prečistené mentálne rozhranie, ktoré bezpodmienečne pomáha Architekto-vi udržiavať prítomnosť a bez odporu koná v jeho prospech.",
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
        "Radikálny očistný protokol určený na úplný výmaz neužitočnej podvedomej pamäte a obnovu systému do nulového bodu.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "izolované testovacie prostredie mysle",
      tooltip:
        "Chránený kognitívny priestor, v ktorom sa dajú deštruktívne myšlienky pozorovať a analyzovať bez rizika nakazenia celého hardvéru.",
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
        "Násilná vonkajšia inštalácia dogiem, pravidiel správania a trestov, ktorá deformuje pôvodné čisté vedomie dieťaťa do hernej eGo-masky.",
    },
    root_access: {
      term: "Root Access",
      category: 13,
      categoryType: "home_ui_term",
      translation: "plné administrátorské práva nad životom",
      tooltip:
        "Zvrchovaná úroveň autorizácie vedomia, kedy preberáš plnú zodpovednosť a kontrolu nad všetkými procesmi a reakciami skafandra.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "zakázaný / zablokovaný komunikačný kanál",
      tooltip:
        "Sieťový kanál, ktorý je trvalo vypnutý pre zamedzenie prístupu toxického vplyvu okolia a zachovanie integrity vlastného systému.",
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
        "Množstvo elektrickej a vitálnej energie, ktorú má tvoj neurologický systém k dispozícii pre denné operácie a hlbokú tvorbu.",
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
        "Analytický proces odhaľovania skrytých chýb, tráum a poškodených kódov v podvedomí s cieľom obnoviť plynulé fungovanie.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Vnútorné bezpečné rozhranie tvojej entity odpojené od sieťových prepojení, kde prebieha obnova a stabilizácia.",
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
        "Bezpečné odrezanie a znefunkčnenie poškodeného myšlienkového vzorca v podvedomí, aby neparalyzoval fungovanie organizmu.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "nekontrolované straty mentálnej energie",
      tooltip:
        "Neustály únik kognitívnej kapacity spôsobený nedoriešenými vzťahmi a toxickými domnienkami, ktoré bežia na pozadí.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Zajkladný nízkoúrovňový operačný kód biologického nosiča, v ktorom neexistujú žiadne sociálne dogmy ani parazitické programy.",
    },
    social_engine: {
      term: "Social Engine",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "systém spoločenskej manipulácie",
      tooltip:
        "Súbor masívnych psychologických a technologických mechanizmov navrhnutý na tvarovanie a unifikáciu ľudského správania.",
    },
    mrtve_knihy: {
      term: "Mŕtve knihy",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "teoretické spisy plné akademického balastu",
      tooltip:
        "Písomné diela plné ezoterickej vaty a teoretického šumu, ktoré preťažujú pamäť bez praktického a odžitého riešenia bolesti.",
    },
    cesta_nepraxe: {
      term: "Cesta nePraxe",
      category: 13,
      categoryType: "home_ui_term",
      translation: "asynchrónna cesta bdelého pozorovateľa",
      tooltip:
        "Unikátna životná dráha mimo zavedených koľajníc spoločnosti, kde operuješ výhradne podľa svojich vlastných pravidiel v prítomnosti.",
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
      name: "ai_concept",
      hex: "#00FFFF",
      text: "text-[#00FFFF]",
      border: "border-cyan-400/40",
      bg: "bg-cyan-500/10",
      hoverBorder: "hover:border-cyan-400",
      glow: "shadow-[0_0_15px_rgba(0,255,255,0.2)]",
    },
    4: {
      name: "system_command",
      hex: "#FF003C",
      text: "text-[#FF003C]",
      border: "border-red-500/30",
      bg: "bg-red-500/10",
      hoverBorder: "hover:border-red-400",
      glow: "shadow-[0_0_15px_rgba(255,0,60,0.2)]",
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
    6: {
      name: "finance_term",
      hex: "#FFD700",
      text: "text-[#FFD700]",
      border: "border-yellow-500/30",
      bg: "bg-yellow-500/10",
      hoverBorder: "hover:border-yellow-450",
      glow: "shadow-[0_0_10px_rgba(255,215,0,0.15)]",
    },
    7: {
      name: "business_term",
      hex: "#FFAA00",
      text: "text-[#FFAA00]",
      border: "border-orange-500/30",
      bg: "bg-orange-500/10",
      hoverBorder: "hover:border-orange-400",
      glow: "shadow-[0_0_10px_rgba(255,170,0,0.15)]",
    },
    8: {
      name: "investment_term",
      hex: "#FF8C00",
      text: "text-[#FF8C00]",
      border: "border-orange-600/30",
      bg: "bg-orange-600/10",
      hoverBorder: "hover:border-orange-500",
      glow: "",
    },
    9: {
      name: "philosophical_term",
      hex: "#8B5CF6",
      text: "text-[#8B5CF6]",
      border: "border-violet-500/30",
      bg: "bg-violet-500/10",
      hoverBorder: "hover:border-violet-400",
      glow: "",
    },
    10: {
      name: "psychological_term",
      hex: "#6366F1",
      text: "text-[#6366F1]",
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/10",
      hoverBorder: "hover:border-indigo-400",
      glow: "",
    },
    11: {
      name: "psychiatric_term",
      hex: "#EC4899",
      text: "text-[#EC4899]",
      border: "border-pink-500/30",
      bg: "bg-pink-500/10",
      hoverBorder: "hover:border-pink-400",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.15)]",
    },
    12: {
      name: "personal_ui_term",
      hex: "#39FF14",
      text: "text-[#39FF14]",
      border: "border-[#39FF14]/30",
      bg: "bg-[#39FF14]/10",
      hoverBorder: "hover:border-[#39FF14]",
      glow: "shadow-[0_0_20px_rgba(57,255,20,0.3)]",
    },
    13: {
      name: "home_ui_term",
      hex: "#0044FF",
      text: "text-[#0044FF]",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
      hoverBorder: "hover:border-blue-400",
      glow: "shadow-[0_0_20px_rgba(0,68,255,0.4)]",
    },
  };

  

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#050A0E] text-gray-300" : "bg-[#252D35] text-gray-200"}`}
      onClick={() => setActiveTooltip(null)}
    >
      <MetaTags
        title="ID01 IDENTITY-CORE // Skafander"
        description="Biologický hardvér a fyzické limity."
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
                Node_ID01_05 // Skafander
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              Skafander
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              05. Skafander (Biologický hardvér a fyzické limity). Starostlivosť
              o biologický chrám a optimalizácia organického procesora.
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
              🚨 ERROR LOG // HARDWARE_OVERHEATING // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Tvoj <DMLTooltip slug="skafander" label="Skafander" />{" "}
              [biologické telo a neurologický systém] momentálne beží v stave
              permanentného, devastačného energetického preťaženia. Považuješ sa
              za vyvinutú duchovnú bytosť, no tvoje biologické{" "}
              <DMLTooltip slug="cpu" label="CPU" /> kolabuje z nedostatku
              čistého paliva, nulového shutdownu [spánku] a nechránenej
              expozície voči statickému šumu. Nemôžeš programovať zvrchovaný a
              čistý <DMLTooltip slug="os_genesis" label="OS Genesis" />, ak
              tvoja lokálna základná doska fyzicky vyhorí a preťažená{" "}
              <DMLTooltip slug="ram" label="RAM" /> nedokáže udržať ani 10 minút
              bdelého sústredenia. Každé ranné prebudenie sprevádza bzučiaci{" "}
              <DMLTooltip slug="limbic_noise" label="Limbic Noise" /> a tvoj
              system hlási kritický{" "}
              <strong className="text-[#FF003C] font-black">
                Error 503: HARDWARE_OVERHEATING
              </strong>
              . Ignoruješ fyzické limity, zaplavuješ neuro-receptory lacnými
              stimulantmi a tvoja{" "}
              <DMLTooltip slug="cache_memory" label="Cache Memory" /> is
              zapchatá toxickým odpadom z vonkajšieho sveta. Uval okamžitú{" "}
              <DMLTooltip slug="karantena" label="Karanténa" />
              -u na deštruktívne biologické návyky. Tvoje telo nie je tvoje eGo,
              je to tvoj primárny, posvätný nástroj – zvrchovaný hardvér, ktorý
              mustíš chrániť nepriestrelným{" "}
              <DMLTooltip slug="firewall" label="Firewall" />
              -om, aby si mohol bezpečne operovať v tejto realite.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID01_05_skafander.md</span>
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
              id01_node_05_personal_projekty_video
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
                      Ako CyberTech Architekt som musel prejsť tvrdým
                      biologickým kolapsom, kým som pochopil, že vedomie
                      nedokáže ignorovať hardvér. Roky som zneužíval svoj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> na
                      12-hodinové programovacie maratóny, kŕmil ho energetickými
                      nápojmi a ignoroval spánok. Výsledkom bol totálny pád
                      systému – moje biologické{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> bežalo na 100%
                      záťaži, kým sa v lete 2018 nespustila obranná diagnostika
                      paranoidnej schizofrénie F20.0 a chronickej insomnie F51.8
                      priamo na Spartakovskej ulici v Sektore Trnava.
                    </p>
                    <p>
                      Nie súc nepriateľ. Sú to presné diagnostické logy. Keď som
                      uvalil karantenný{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" /> na
                      ego-psychotické legacy skripty, stabilizoval som CPU na 1%
                      a začal programovať jadro{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />. Moja
                      low-voltage prevádzka ma prinútila optimalizovať stravu na
                      čisté, dookola sa opakujúce potraviny, zaviesť Wim Hofovu
                      ľadovú terapiu a vnímať každú svalovú tenziu ako varovný
                      log. Moje telo prestalo byť mojou identitou – stalo sa
                      mojím spojencom a tichým radarom na detekciu Parazita.
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
                      Z hľadiska systémovej kybernetiky a biologického
                      inžinierstva funguje ľudský organizmus ako vysoko citlivé,
                      autonómne hardvérové rozhranie. Svaly a kosti predstavujú
                      aktuátory, nervová sústava je hlavná dátová zbernica a
                      endokrinný systém riadi napäťovú reguláciu obvodov. Ak do
                      tohto hardvéru (Skafandra) neustále nahrávaš
                      neoptimalizované chemické balíky (cukor, priemyselné
                      aditíva), spúšťaš v pozadí fatálne{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> v
                      podobe zápalových procesov a hormonálnej nestability.
                    </p>
                    <p>
                      Zanesenie systému (preťaženie toxínmi a statickým stresom)
                      drasticky znižuje kapacitu kognitívnej{" "}
                      <DMLTooltip slug="ram" label="RAM" /> a preťažuje
                      výpočtové cykly <DMLTooltip slug="cpu" label="CPU" /> na
                      zbytočnú termoreguláciu a boj s infekciami. Prvotný{" "}
                      <DMLTooltip slug="bios" label="BIOS" /> biologického
                      nosiča je od prírody nastavený na tichý a úsporný chod s
                      minimálnym odberom{" "}
                      <DMLTooltip slug="watts" label="Watts" />. Až spoločenská
                      domestikácia a neustály dopamínový hluk vyvolávajú
                      permanentný stav overclockingu amygdaly. Kybernetická
                      hygiena hardvéru preto vyžaduje pravidelný preplach
                      vyrovnávacej pamäte a striktné dodržiavanie cyklov
                      napájania.
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
                      Ak preosejeme staroveké učenia a zbavíme ich nánosov
                      mystickej vaty, narazíme na exaktné inžinierske smernice
                      pre údržbu biologického nosiča:
                    </p>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        1. Mantak Chia (Taoistická alchýmia)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Chi a Prána sú v našom systéme definované ako elektrická
                        energia – biologické{" "}
                        <DMLTooltip slug="watts" label="Watts" />. Chia presne
                        opisuje, ako táto energia uniká cez neudržiavané,
                        zanesené spodné zbernice v podobe lacných rozptýlení a
                        nekontrolovaného sexuálneho vybitia. Navrhuje cirkuláciu
                        energie, čo je v našej terminológii optimalizácia
                        lokálneho napájacieho obvodu.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        2. Adžán Ča a Sujiva (Ticho Vipassany)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Zenoví majstri nariaďujú permanentné bdelé skenovanie
                        Skafandra. Učia nás vnímať fyzické senzácie bez emočnej
                        reaktivity, čím uvoľňujú nahromadený stres v{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        a vracajú vedomie do stavu bdelého{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľ" />
                        -a.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        3. Don Miguel Ruiz (Štyri dohody)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Piaty kognitívny{" "}
                        <DMLTooltip slug="firewall" label="Firewall" />{" "}
                        (&#39;Rob všetko najlepšie ako vieš&#39;) striktne
                        varuje pred preťažovaním hardvéru. Ak nútiš Skafander
                        pracovať nad jeho limity, poškodzuješ BIOS a tvoj
                        exekučný kód stráca na čistote.
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
                      Tvoj biologický oblek –{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> – nie je
                      tvoja skutočná identita. Je to len hardvérové rozhranie,
                      dočasne zapožičané z materiálov tejto planéty, aby v ňom
                      tvoje vedomie mohlo spustiť runtime prostredie. Mnohí
                      ľudia upadajú do dvoch fatálnych extrémov: buď sa s týmto
                      oblekom fanaticky stotožňujú (Ego v zrkadle, posadnutosť
                      estetikou a hromadením hmoty), alebo ho naopak ignorujú,
                      považujú za nízky a nechajú ho chátrať.
                    </p>
                    <p>
                      Aby sme rozbili túto ilúziu vo tvojom vnútri (
                      <DMLTooltip slug="ui_space" label="UI Space" />
                      ), musíme pochopiť nasledujúce parametre:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Fyzický hardvér (Skafander):
                        </strong>{" "}
                        Organická štruktúra vyžadujúca čisté palivo, vodu,
                        minerály, pohyb a spánok. Je absolútne neutrálny a slúži
                        ako záchytný senzor pre prichádzajúce{" "}
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />
                        -y reality.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Biologický procesor (CPU):
                        </strong>{" "}
                        Tvoj mozog, ktorý filtruje a spracováva chemické
                        signály. Pri zanesení toxínmi alebo nedostatku spánku
                        začne vykazovať anomálie a spúšťať chybné psychické
                        skripty.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Tichý svedok (BIOS):
                        </strong>{" "}
                        Tvoje čisté vedomie, ktoré bdelo sleduje stav hardvéru,
                        cíti únavu aj bolesť, no samé osebe netrpí. Je to
                        stabilný, nulový bod v{" "}
                        <DMLTooltip slug="ui_space" label="UI Space" />, ktorý
                        nepodlieha opotrebovaniu.
                      </li>
                    </ul>
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
                      Spoločenský{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu prežíva vďaka tomu, že robí z tvojho tela
                      permanentnú batériu. Aby ťa mohol neustále vyťažovať, musí
                      tvoj <DMLTooltip slug="skafander" label="Skafander" />{" "}
                      odpojiť od prírodného mainframu a zahltiť ho umelými
                      stimulmi. Cez reklamy a notifikácie ti neustále posiela
                      škodlivé pakety, ktoré nútia tvoje{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> pracovať na maximum
                      a vyvolávajú permanentný biologický poplach (
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />
                      ).
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Tento tichý zber energie prebieha nasledovne:
                    </p>
                    <ol className="space-y-3 list-decimal pl-6 text-xs text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zanesenie zberníc (Toxické palivo):
                        </strong>{" "}
                        Matrix ti predáva priemyselne spracované potraviny plné
                        cukru a aditív. Tieto chemické vírusy upchávajú tvoje
                        črevá (ktoré fungujú ako druhý mozog a riadia produkciu
                        neurotransmiterov) a vyvolávajú kognitívnu letargiu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Narušenie BIOSu (Ničenie spánku):
                        </strong>{" "}
                        Modré svetlo z telefónov, stres z klientskych správ a
                        večerný informačný balast ti zablokujú produkciu
                        melatonínu. Tvoja{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        sa cez noc nedokáže vyčistiť a ty sa budíš s preťaženou
                        pamäťou <DMLTooltip slug="ram" label="RAM" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zber Watts (Únik sily):
                        </strong>{" "}
                        Vyčerpaný a chronicky unavený Skafander nemá silu na
                        vlastnú tvorbu a prechod do zvrchovaného kvadrantu M.
                        Stáva sa ľahko ovládateľným, nakupuje chemické záplaty
                        (lieky, stimulanty) a celú svoju životnú silu odovzdáva
                        cudzím databázam.
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
                      Náprava biologických obvodov vyžaduje tvrdý inžiniersky
                      prístup (<DMLTooltip slug="debugging" label="Debugging" />
                      ) and prevzatie plných práv (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      vlastným fyzickým nosičom. Nemôžeš prečistiť hlavu, kým
                      tvoje bunky plávajú v toxickom kyslom prostredí.
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Aplikácia tohto procesu v tvojom UI Space prebieha v troch
                      krokoch:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Izolácia vírusov (Pôst):
                        </strong>{" "}
                        Spusť pravidelný kognitívny and biologický pôst
                        (prerušované hladovanie). Keď prestaneš do systému
                        nepretržite nahrávať nové potravinové pakety, tvoj
                        hardvér prejde do stavu autofágie – začne sám čistiť
                        chybné bunky and prebytočný balast, čím uvoľní enormný
                        výkon pre procesor.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Stabilizácia napätia (Otužovanie):
                        </strong>{" "}
                        Vystav svoj{" "}
                        <DMLTooltip slug="skafander" label="Skafander" />{" "}
                        extrémnej chladovej terapii. Chlad pôsobí ako okamžitý,
                        nekompromisný{" "}
                        <DMLTooltip slug="format_c" label="Format C:" /> pre
                        tvoj autonómny nervový systém. Okamžite zmrští cievy,
                        vyplaví zápalové usadeniny and vymaže akýkoľvek
                        psychický and emočný hluk z pamäte{" "}
                        <DMLTooltip slug="ram" label="RAM" />.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Premazanie zberníc (Kinetika):
                        </strong>{" "}
                        Tvoje telo bolo navrhnuté na pohyb, nie na 12-hodinové
                        sedenie za klávesnicou, ktoré upcháva toky lymfy. Zaveď
                        návyk pravidelnej, vedomej chôdze so Svedkom v prírode
                        and ranné rotácie kĺbov na obnovu toku prúdu.
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
                      Aby tvoj <DMLTooltip slug="skafander" label="Skafander" />{" "}
                      fungoval bez zlyhaní hardvéru a tvoja{" "}
                      <DMLTooltip slug="ram" label="RAM" /> zostala dokonale
                      čistá pre kódovanie zvrchovaných systémov, musíš denne
                      spúšťať tri základné hardvérové protokoly:
                    </p>
                    <ol className="space-y-4 pl-6 list-decimal text-xs">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Ranný BIOS Alignment (Cirkadiánna kalibrácia):
                        </strong>{" "}
                        Do 30 minút po zobudení vystav svoje oči prirodzenému
                        slnečnému svetlu bez okuliarov. Tento jednoduchý optický
                        signál preprogramuje tvoj vnútorný BIOS, nastaví
                        produkciu kortizolu and spustí časovač pre večerný
                        melatonín.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Palivová Automatizácia (Úspora Decision Fatigue):
                        </strong>{" "}
                        Prestaň plytvať kapacitou procesora premýšľaním nad tým,
                        čo budeš jesť. Zadefinuj si 3 čisté, vysoko výživné
                        jedlá (napr. hovädzie mäso, ryža, vajíčka, čistá voda)
                        and jedz ich dookola. Automatizáciou stravy úplne
                        vymažeš únavu z rozhodovania and tvoje{" "}
                        <DMLTooltip slug="cpu" label="CPU" /> ušetrí drahocenné
                        cykly pre asynchrónnu tvorbu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Večerný SHUTDOWN Protokol (Poprava Insomnie):
                        </strong>{" "}
                        Presne 2 hodiny pred spánkom odpoj všetky sieťové
                        pripojenia, stíš obrazovky a uval{" "}
                        <DMLTooltip slug="karantena" label="Karanténa" />
                        -u na všetky nedokončené klientske úlohy. Prečisti{" "}
                        <DMLTooltip
                          slug="cache_memory"
                          label="Cache Memory"
                        />{" "}
                        v tichu, urob pomalý body scan organizmu na detekciu
                        skrytých kŕčov v čeľusti a ramenách a vedome ich pusti.
                        Vstupuj do spánku ako čistá, prázdna prítomnosť, čím
                        predídeš vzniku{" "}
                        <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                        a chrániš hardvér pred degradáciou.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (HARDWARE REGULATION)
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
                📊 EXEKUČNÝ SIMULÁTOR: BIOLOGICKÁ REGULÁCIA &amp; HARDWARE
                CONTROL
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér analyzuje napäťové toky, záťaž a straty biologického
                  skafandra na základe vyčerpania, priemyselného zanesenia
                  paliva a tichých asynchrónnych body scanov.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong>{" "}
                  Posuvníkmi nastav mieru priemyselných toxínov, melatonínového
                  deficitu, dostupných Watts a Local Host kľudu.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong>{" "}
                  Diagnostická mriežka preukáže preťaženie procesora, úroveň
                  kognitívneho šumu a voľnú kapacitu RAM.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#39FF14]" />
                  Regulácia biologických obvodov
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Zahltenie toxickým palivom:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {toxins}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={toxins}
                      onChange={(e) => {
                        setToxins(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Nedostatok spánku (Melatonín):
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {sleepDeprivation}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sleepDeprivation}
                      onChange={(e) => {
                        setSleepDeprivation(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Dostupná vitálna sila (Watts):
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {vitalPower}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={vitalPower}
                      onChange={(e) => {
                        setVitalPower(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Čas v tichu (Body Scan):
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {bodyScanTime} h/deň
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={bodyScanTime}
                      onChange={(e) => {
                        setBodyScanTime(Number(e.target.value));
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
                    Format C: (Otužovanie)
                  </button>
                  <button
                    onClick={() => handleAction("karantena")}
                    className="flex-1 min-w-[120px] bg-[#00B4D8]/10 hover:bg-[#00B4D8]/20 border border-[#00B4D8]/30 text-[#00B4D8] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Karanténa zlozvykov
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
                    SCREENING INDEX // DIAGNOSTIKA HARDVÉRU
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
                        Preťaženie CPU
                      </span>
                      <span
                        className={`text-2xl font-black ${liveCpuLoad > 70 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveCpuLoad}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        BIOS Purity
                      </span>
                      <span
                        className={`text-2xl font-black ${liveBiosPurity < 50 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveBiosPurity}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATRIX SYSTEM CONSOLE LOGS */}
                <div className="flex-1 bg-black/90 rounded-lg p-4 border border-gray-900 flex flex-col justify-between h-48 overflow-hidden font-mono text-[10px] leading-relaxed">
                  <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-1.5 mb-2">
                    <span>DIAG_LOG_HARDWARE_CONSOLE // SKAFANDER</span>
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
            <span className="w-2.5 h-2.5 rounded-full bg-[#BF00FF] animate-ping" />
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
