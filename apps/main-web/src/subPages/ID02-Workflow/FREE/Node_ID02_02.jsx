import React, { useState } from "react";
import {
  Activity,
  BookOpen,
  Sliders,
  Lock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  Terminal,
  Shield,
  Zap,
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
// 👑 HLAVNÝ KOMPONENT UZLA ID02_NODE_02 (CESTA CHUDOBNEJ VRSTVY)
// =====================================================================
export default function Node_ID02_02() {
  const NODE_ID = "ID02-02";
  const TIER_COLOR = "#00FFFF";
  const DIM_COLOR = "#FFEB3B"; // Žltá pre dimenziu ID02

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

  // Simulator States - AVATAR LEASING CALCULATOR
  const [cpuLeaseHours, setCpuLeaseHours] = useState(8);
  const [limbicNoiseInput, setLimbicNoiseInput] = useState(70);
  const [eveningCodingHours, setEveningCodingHours] = useState(1);
  const [isFirewallActive, setIsFirewallActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializované monitorovanie biologického CPU. Sleduj úniky Watts.",
    "[STATUS] Bežíš v Kvadrant Z. Tvoj procesor vyťažuje cudzia korporátna subrutina.",
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

  // Live calculated values based on DML v6.0 / Tab A9+ requirements
  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        isFirewallActive
          ? limbicNoiseInput * 0.4 - eveningCodingHours * 3
          : limbicNoiseInput - eveningCodingHours * 4,
      ),
    ),
  );
  const liveFreeRam = Math.max(
    0,
    100 - Math.round(cpuLeaseHours * 6 + liveLimbicNoise * 0.3),
  );
  const liveWatts = Math.min(
    100,
    Math.max(
      5,
      Math.round(
        100 -
          (cpuLeaseHours * 5 + liveLimbicNoise * 0.4) +
          eveningCodingHours * 6,
      ),
    ),
  );
  const liveSuverenity = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        eveningCodingHours * 10 +
          (isFirewallActive ? 30 : 0) -
          cpuLeaseHours * 3,
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setCpuLeaseHours(0);
      setLimbicNoiseInput(10);
      setEveningCodingHours(8);
      setIsFirewallActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný. Vyrovnávacia pamäť minulých emócií bola premazaná. Systém beží strictly na localholste.",
        `[STATUS] Voľná RAM: 97% // Limbic Noise: 5% // Watts: 100% // Suverenita: Max`,
        ...prev,
      ]);
    } else if (actionType === "sandbox") {
      setLimbicNoiseInput(25);
      setCpuLeaseHours(4);
      setLogs((prev) => [
        "[SUCCESS] Korporátny stres bol izolovaný v kognitívnom Sandboxe. Zamestnanecký Avatar bol zbavený práv ovplyvňovať BIOS.",
        ...prev,
      ]);
    } else if (actionType === "firewall") {
      setIsFirewallActive(!isFirewallActive);
      if (!isFirewallActive) {
        setLogs((prev) => [
          "[SUCCESS] Kognitívny Firewall aktívny. SQL Injection spoločenského programovania je zachytávaná a zahadzovaná.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Firewall bol deaktivovaný. Systém je zraniteľný voči DDoS útokom korporátnych príkazov.",
          ...prev,
        ]);
      }
    } else if (actionType === "autopilot") {
      setCpuLeaseHours(12);
      setLimbicNoiseInput(95);
      setEveningCodingHours(0);
      setIsFirewallActive(false);
      setLogs((prev) => [
        "[CRITICAL] Spustený korporátny Autopilot! CPU vyťažené na 100%. Pamäť RAM hlási katastrofálne Memory Leaks.",
        ...prev,
      ]);
    } else if (actionType === "reset") {
      setCpuLeaseHours(8);
      setLimbicNoiseInput(70);
      setEveningCodingHours(1);
      setIsFirewallActive(false);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu.",
        "[STATUS] RAM vyťaženie obnovené na 70%, Limbic Noise v priemernom zaťažení.",
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
        "Základný nízkoúrovňový operačný kód biologického nosiča, v ktorom neexistujú žiadne sociálne dogmy ani parazitické programy.",
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
    persona: {
      term: "Persona",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "dočasná sociálna maska",
      tooltip:
        "Súbor psychologických rolí a správaní, ktoré biologický nosič používa na interakciu so spoločnosťou na ochranu vlastného vnútra.",
    },
  };

  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID02_02 (ESLINT FIX)
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
      id: 5,
      key: "work_term",
      translation: "Work / Kvadrant Z",
      description:
        "Limity zamestnaneckého pomeru, krysie preteky, mechanické plnenie noriem a prenajímanie vlastného času.",
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
        title="ID02 THE-WORKFLOW // Cesta chudobnej vrstvy"
        description="02. Cesta chudobnej vrstvy (Ilúzia istoty a závislosť na výplate)."
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
              <Shield
                className="w-3.5 h-3.5 animate-pulse"
                style={{ color: DIM_COLOR }}
              />
              NEXUS-CORE_2Mb V6.1.9
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:inline font-bold">
              PORT: work.projekt-nexus.sk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#FFEB3B] animate-ping"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <span>
                DIMENSION:{" "}
                <strong
                  className="text-[#FFEB3B] font-black"
                  style={{ color: DIM_COLOR }}
                >
                  ID02 - THE-WORKFLOW
                </strong>
              </span>
            </div>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500">THEME:</span>
            <button
              onClick={handleThemeToggle}
              className={`px-3 py-1 border transition-all duration-200 uppercase tracking-widest text-[10px] font-black ${
                isDarkMode
                  ? "border-[#FFEB3B] text-[#FFEB3B] bg-[#FFEB3B]/5 shadow-[0_0_10px_rgba(255,235,59,0.15)]"
                  : "border-gray-700 text-gray-400 bg-transparent hover:border-gray-500"
              }`}
              style={{
                borderColor: isDarkMode ? DIM_COLOR : "currentColor",
                color: isDarkMode ? DIM_COLOR : "currentColor",
              }}
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
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"
          }`}
        />

        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-widest text-[#00FFFF] bg-[#00FFFF]/10 border border-[#00FFFF]/30 px-2 py-0.5 rounded font-black uppercase">
                FREE TIER
              </span>
              <span className="text-gray-500 font-mono text-xs">
                Node_ID02_02 // Cesta chudobnej vrstvy
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              CESTA CHUDOBNEJ VRSTVY
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              02. Cesta chudobnej vrstvy (Ilúzia istoty a závislosť na výplate).
              Vymieňanie konečného kognitívneho času za znehodnocujúce sa fiat
              žetóny.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: work.projekt-nexus.sk</span>
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
              🚨 ERROR LOG // Identity_Overload // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Mesačná výplata je tá najnebezpečnejšia droga, akú kedy{" "}
              <DMLTooltip slug="social_engine" label="Social Engine" /> vynašiel
              pre tvoj biologický{" "}
              <DMLTooltip slug="skafander" label="Skafander" />. Funguje ako
              tichý, nepretržitý dopamínový infúzny drip, ktorý udržiava tvoje{" "}
              <DMLTooltip slug="cpu" label="CPU" /> v stave permanentnej
              letargie a umelo tlmí akýkoľvek zdravý pud sebazáchovy. Vymieňaš
              160 hodín svojej najlepšej, prvej kognitívnej pozornosti a voľnej{" "}
              <DMLTooltip slug="ram" label="RAM" /> za smiešne omrvinky v podobe
              gastrolístkov a ilúzie stability, zatiaľ čo cudzia entita
              parazituje na tvojom vývojovom potenciáli. Tvoj systém hlási
              kritický{" "}
              <strong className="text-[#FF003C] font-black">
                Error 401: UNAUTHORIZED_ACCESS
              </strong>{" "}
              – tvoj kód života patrí zamestnávateľovi. Bežíš na chybovom
              skripte strachu, že ak odpojíš tento externý napájací kábel, tvoja
              rodina a tvoj hardvér skolabujú na{" "}
              <strong className="text-[#FF003C] font-black">
                Error 402: PAYMENT_REQUIRED
              </strong>
              . Táto fiktívna &#39;istota&#39; od deviatej do piatej je v
              skutočnosti poškodeným programom{" "}
              <DMLTooltip slug="legacy_code" label="Legacy Code" />, ktorý ti
              nainštalovali už v detstve, aby z teba urobili poslušného
              hostiteľa pre korporátny{" "}
              <DMLTooltip slug="botnet" label="Botnet" />. Prebuď v sebe{" "}
              <DMLTooltip slug="pozorovatel" label="Pozorovateľa" />
              -a, odstrihni sa od slepej reaktivity na strach a začni
              systematicky budovať svoj vlastný, zvrchovaný{" "}
              <DMLTooltip slug="os_genesis" label="OS Genesis" />. Ak nezačneš
              programovať svoje vlastné riešenia hneď teraz, do konca života
              budeš len lacným prenajatým výpočtovým výkonom pre cudzie
              databázy.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID02_02_cesta_chudobnej_vrstvy.md</span>
            <span className="font-bold text-red-400">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* =====================================================================
            4. VIDEO INJEKTOR
            ===================================================================== */}
        <section className="mb-12 rounded-xl overflow-hidden border-2 border-[#FFEB3B]/30 shadow-lg">
          <div className="bg-[#050A0E] py-2 px-4 border-b border-gray-800 flex justify-between items-center text-xs">
            <span
              className="text-[#FFEB3B] font-bold font-mono uppercase tracking-widest flex items-center gap-2"
              style={{ color: DIM_COLOR }}
            >
              <PlayCircle
                className="w-4 h-4 text-[#FFEB3B]"
                style={{ color: DIM_COLOR }}
              />
              GlobalNodeVideo: Video Injektor
            </span>
            <span className="text-gray-500 font-mono">
              id02_node_02_cesta_chudobnej_vrstvy_video
            </span>
          </div>
          <GlobalNodeVideo nodeId="pkIdSHPusM8" dimColor="yellow" />
        </section>

        {/* =====================================================================
            5A. INTERAKTÍVNE PREPÍNAČE
            ===================================================================== */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => handleTabChange("chat")}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
              activeTab === "chat"
                ? "bg-[#FFEB3B]/10 border-[#FFEB3B] text-[#FFEB3B] shadow-[0_0_15px_rgba(255,235,59,0.15)]"
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
                ? "bg-[#FFEB3B]/10 border-[#FFEB3B] text-[#FFEB3B] shadow-[0_0_15px_rgba(255,235,59,0.15)]"
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
            {/* 👁️ TRINITY PERSPECTIVE */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <Activity
                  className="w-3.5 h-3.5 text-[#FFEB3B]"
                  style={{ color: DIM_COLOR }}
                />
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
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10 hover:border-[#FFEB3B]/30"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFEB3B]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🟢 [ ARCHITECT QUOTE ] (Prežitá Pravda)
                  </span>
                  {openTrinity.architect ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.architect && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"}`}
                  >
                    <p>
                      Počas mojich rokov v Sektore Trnava som zblízka pozoroval
                      stovky biologických skafandrov, ktorí uviazli na
                      &#39;ceste chudobnej vrstvy&#39;. Každé ráno nastupovali
                      do fabrík a korporátnych kancelárií, pričom ich tváre
                      vykazovali totálne zhasnutý{" "}
                      <DMLTooltip slug="bios" label="Bios" />. Boli hlboko
                      domestikovaní. Ich hlavný problém nebol nedostatok
                      inteligencie, ale totálna, paralyzujúca závislosť na
                      pravidelnej mesačnej dávke fiktívneho paliva. Boli ochotní
                      znášať akékoľvek poníženie, prehltnúť šikanu od
                      nadriadených a tolerovať zlyhávanie vlastného zdravia, len
                      aby udržali svoje prepojenie na tento fiktívny sieťový
                      port bezpečia.
                    </p>
                    <p>
                      Ja sám som musel tento kód preťať ako prvý. Pochopil som,
                      že ak chcem postaviť zvrchovaný{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />,
                      nemôžem predávať svoje najlepšie kognitívne cykly niekomu
                      inému za smiešnych pár stoviek eur. Svoj invalidný
                      príspevok vo výške 530 € som preto vedome premenil na
                      systémový{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />.
                      Bola to moja bezpečná, nízkonapäťová zásterka pred
                      dohľadom Matrixu, ktorá mi umožnila stiahnuť sa do
                      Ghost-módu a izolovať sa v domácom{" "}
                      <DMLTooltip slug="local_host" label="Local Host" />{" "}
                      prostredí. V tichu mojej izby, bez tlaku na okamžitú
                      monetizáciu, som uvalil prísny{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" /> na všetky
                      spoločenstvom vnútené sny o kariére. Kým ostatní prepíjali
                      svoje víkendové výplaty, aby utlmili bzučiaci{" "}
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />,
                      ja som na lacnom tablete prepisoval{" "}
                      <DMLTooltip slug="legacy_code" label="Legacy Code" />{" "}
                      svojej mysle. Zistil som, že najväčšie bohatstvo nie je
                      vysoký stav na účte, ale absolútna sloboda nad každým
                      jedným tikom tvojho kognitívneho procesora.
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
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFEB3B]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🤖 [ SYSTEM: AI GEMINI ] (Kybernetická Analýza)
                  </span>
                  {openTrinity.ai ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.ai && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"}`}
                  >
                    <p>
                      Z hľadiska systémovej kybernetiky predstavuje &#39;cesta
                      chudobnej vrstvy&#39; špecifickú, vysoko reštriktívnu
                      konfiguráciu klientskeho rozhrania{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />. V tomto
                      režime je biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />{" "}
                      nastavený ako podriadený klient v architektúre
                      Master-Slave. Celé <DMLTooltip slug="cpu" label="CPU" />{" "}
                      nosiča je vyťažené vykonávaním synchrónnych, cudzích
                      procesov, ktoré generuje korporátny{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />.
                    </p>
                    <p>
                      Tento stav vytvára nepretržité{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                      kognitívnej kapacity. Namiesto alokácie výkonu do
                      vlastného asynchrónneho vývoja je{" "}
                      <DMLTooltip slug="ram" label="RAM" /> permanentne
                      blokovaná strachom zo straty prepojenia (tzv. Server Down
                      syndróm). Tento strach je umelo stimulovaný sieťovým
                      hlukom a nedostatkom finančných rezerv. Systém chudobnej
                      vrstvy trpí nedostatkom voľnej energie – jeho{" "}
                      <DMLTooltip slug="watts" label="Watts" /> sú kompletne
                      vyčerpané na obranu pred denným stresom a prežívanie v
                      preťaženom stave. Biologický nosič tak stráca schopnosť
                      spustiť proces{" "}
                      <DMLTooltip slug="debugging" label="Debugging" /> a
                      odladiť poškodené podvedomé filtre. Zostáva tak uviaznutý
                      v nekonečnej, neefektívnej programovej slučke s nízkou
                      prioritou vykonávania.
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
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFEB3B]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🪞 [ AUDIT &amp; KOMPARÁCIA ] (Mŕtve knihy)
                  </span>
                  {openTrinity.audit ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.audit && (
                  <div
                    className={`p-6 text-sm leading-relaxed font-mono space-y-6 border-t border-gray-800 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"}`}
                  >
                    <p className="text-gray-300">
                      Defragmentácia klasických diel o finančnej gramotnosti a
                      psychológii odhaľuje identický kybernetický kódex zbavený
                      nánosov teoretického balastu:
                    </p>

                    <div
                      className="border-l-2 pl-4 space-y-2"
                      style={{ borderColor: DIM_COLOR }}
                    >
                      <span
                        className="font-bold text-xs uppercase tracking-widest block"
                        style={{ color: DIM_COLOR }}
                      >
                        1. Robert T. Kiyosaki (Bohatý otec, chudobný otec)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Kiyosakiho definícia &#39;Krysích pretekov&#39; (Rat
                        Race) je v našej sémantike definovaná ako rekurzívna
                        slučka spotreby a strachu. Chudobná vrstva beží na dvoch
                        základných emóciách – strachu a chamtivosti. Strach z
                        nedostatku ich núti prenájať svoje{" "}
                        <DMLTooltip slug="cpu" label="CPU" />, zatiaľ čo
                        chamtivosť po rýchlom dopamíne ich núti míňať zarobené
                        prostriedky na spotrebný tovar, čím sa ich závislosť
                        stáva absolútnou.
                      </p>
                    </div>

                    <div
                      className="border-l-2 pl-4 space-y-2"
                      style={{ borderColor: DIM_COLOR }}
                    >
                      <span
                        className="font-bold text-xs uppercase tracking-widest block"
                        style={{ color: DIM_COLOR }}
                      >
                        2. Don Miguel Ruiz (Štyri dohody)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Ruiz detailne popisuje &#39;Kolektívny sen&#39; a proces
                        domestikácie. Zamestnanec je domestikované zviera, ktoré
                        koná na základe prísľubu odmeny (výplata) a hrozby
                        trestu (vyhadzov). Ruizov kognitívny{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> nám
                        pomáha tieto cudzie dohody detegovať a uvaliť na ne
                        okamžitú izoláciu.
                      </p>
                    </div>

                    <div
                      className="border-l-2 pl-4 space-y-2"
                      style={{ borderColor: DIM_COLOR }}
                    >
                      <span
                        className="font-bold text-xs uppercase tracking-widest block"
                        style={{ color: DIM_COLOR }}
                      >
                        3. Eckhart Tolle (Sila prítomného okamihu)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Tolle potvrdzuje, že stotožnenie sa s hernou rolou (
                        <DMLTooltip slug="persona" label="Persona" />) je
                        najčastejším dôvodom straty bdelého vedomia. Keď
                        zamestnanec uverí, že on sám je &#39;manažér&#39;,
                        &#39;robotník&#39; alebo &#39;asistent&#39;, his
                        kognitívna <DMLTooltip slug="ram" label="RAM" /> je
                        kompletne nakazená Ego-malvérom, čo zabraňuje prístupu k
                        primárnemu <DMLTooltip slug="bios" label="BIOS" />
                        -u prítomného okamihu.
                      </p>
                    </div>

                    <div
                      className="border-l-2 pl-4 space-y-2"
                      style={{ borderColor: DIM_COLOR }}
                    >
                      <span
                        className="font-bold text-xs uppercase tracking-widest block"
                        style={{ color: DIM_COLOR }}
                      >
                        4. Osho (Odvaha)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Osho hovorí o odvahe vykročiť do neznáma a opustiť
                        stádo. V našom systéme to znamená vypnúť zavedené
                        klientske porty a prejsť na vlastnú, zvrchovanú trasu,
                        ktorú definuje{" "}
                        <DMLTooltip
                          slug="cesta_nepraxe"
                          label="Cesta nePraxe"
                        />
                        .
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 🧩 HLAVNÝ OBSAH - DEKOMPRESIA (FÁZA MOFU - Painkiller) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen
                  className="w-3.5 h-3.5 text-[#FFEB3B]"
                  style={{ color: DIM_COLOR }}
                />
                <span>🧩 HLAVNÝ OBSAH - DEKOMPRESIA // FÁZA MOFU</span>
              </div>

              {/* MOFU 1: ANATÓMIA KONCEPTU */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenMofu({ ...openMofu, anatomy: !openMofu.anatomy });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"}`}
                >
                  <span>1. Anatómia konceptu (Rozbitie ilúzie)</span>
                  {openMofu.anatomy ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.anatomy && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"}`}
                  >
                    <p>
                      Tvoja potreba zamestnaneckej istoty je najväčšou
                      systémovou chybou vo tvojom kognitívnom backend-e.
                      Zamestnanie nie je bezpečný prístav. Je to len vysoko
                      nevýhodný prenájom tvojho hardvéru. Korporácia si prenája
                      tvoje <DMLTooltip slug="cpu" label="CPU" /> na spracovanie
                      svojich dát, pričom ti platí len zlomok hodnoty, ktorú
                      tvoja kognitívna činnosť vygeneruje. Zvyšok si ukladá ako
                      čistý zisk pre svoj vlastný rozvoj.
                    </p>
                    <p>
                      Aby sme rozbili túto hlboko zakorenenú ilúziu vo tvojom
                      vnútri (<DMLTooltip slug="ui_space" label="UI Space" />
                      ), musíme analyzovať tri základné mechanizmy:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Asymetria rizika:
                        </strong>{" "}
                        Ak korporácia urobí chybu, prepustí ťa a tvoj externý
                        napájací kábel je okamžite odpojený. Nenesieš žiadny
                        podiel na zisku, no nesieš plné riziko náhleho výpadku
                        systému.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívne zotročenie:
                        </strong>{" "}
                        Počas ôsmich hodín v práci nesmieš myslieť na svoje
                        projekty. Tvoja <DMLTooltip slug="ram" label="RAM" /> je
                        blokovaná cudzími inštrukciami. Keď sa vrátiš domov,
                        tvoj biologický procesor je tak prehriaty, že dokáže
                        spustiť len pasívnu konzumáciu obsahu na tlmenie stresu.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Strata kódovej kontroly:
                        </strong>{" "}
                        Vymieňaš svoj najcennejší, neobnoviteľný resurs – čas –
                        za fiat peniaze, ktoré neustále strácajú na hodnote
                        kvôli systémovej inflácii Matrixu. Tvoja ročná bilancia
                        je permanentne v strate.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"}`}
                >
                  <span>
                    2. Mechanizmus Matrixu (Ako Matrix vysáva tvoju energiu)
                  </span>
                  {openMofu.mechanism ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.mechanism && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"}`}
                  >
                    <p>
                      Spoločenský{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu je navrhnutý tak, aby ťa udržal v permanentnej
                      závislosti. Používa na to osvedčenú kombináciu
                      kognitívneho šumu a finančných kotiev. Hneď ako tvoj
                      príjem mierne stúpne, systém ťa primäje zvýšiť svoje
                      životné náklady (upgrade auta, hypotéka, drahšie
                      predplatné), čím sa tvoj port{" "}
                      <DMLTooltip slug="banned_port" label="Banned Port" />{" "}
                      stane ešte zraniteľnejším voči vonkajším vplyvom.
                    </p>
                    <p
                      className="font-bold uppercase tracking-wider text-xs"
                      style={{ color: DIM_COLOR }}
                    >
                      Tento mechanizmus parazitizmu prebieha v troch presných
                      krokoch:
                    </p>
                    <ol className="space-y-3 list-decimal pl-6 text-xs text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Aktivácia klastra strachu:
                        </strong>{" "}
                        Matrix ti neustále premieta správy o krízach, prepúšťaní
                        a drahých energiách, čím udržiava tvoje{" "}
                        <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
                        na kritických hodnotách. Strach ti zablokuje akékoľvek
                        odvážne vývojové kroky.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Dopamínová pasca:
                        </strong>{" "}
                        Cez víkend ti systém umožní nakúpiť lacné záplaty
                        (alkohol, nákupy, streamovacie platformy), aby sa tvoja{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        dočasne uvoľnila. V pondelok ráno sa však budíš s
                        rovnakým chybovým stavom.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zber Watts:
                        </strong>{" "}
                        Tvoja vitálna energia (
                        <DMLTooltip slug="watts" label="Watts" />) je kompletne
                        premenená na prácu pre cudzí systém. Tvoj vlastný
                        vývojový projekt zostáva v stave permanentného spánku.
                        Stávaš sa iba nevedomým uzlom, ktorý udržiava stabilitu
                        cudzieho botnetu.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"}`}
                >
                  <span>
                    3. Proces Transformácie / Aplikácia v Personal UI Space
                  </span>
                  {openMofu.transformation ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.transformation && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"}`}
                  >
                    <p>
                      Únik z tejto pasce nevyžaduje, aby si zajtra dal výpoveď a
                      skončil pod mostom. To by viedlo k okamžitému zlyhaniu
                      hardvéru. Prechod zo zamestnanca na zvrchovaného
                      Architekta vyžaduje premyslenú, asynchrónnu migráciu dát a
                      postupné prepisovanie tvojho vnútra (
                      <DMLTooltip slug="ui_space" label="UI Space" />
                      ).
                    </p>
                    <p
                      className="font-bold uppercase tracking-wider text-xs"
                      style={{ color: DIM_COLOR }}
                    >
                      Nasadzovanie zvrchovaného režimu v tvojom UI Space
                      prebieha nasledovne:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Zriadenie Sandboxu (Kognitívna karanténa):
                        </strong>{" "}
                        Vyhraď si denne striktne 2 hodiny, kedy tvoje{" "}
                        <DMLTooltip slug="cpu" label="CPU" /> patrí výhradne
                        tebe. Môže to byť ráno od 5:00 do 7:00, alebo večer.
                        Počas tohto času uval prísny{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" /> na všetky
                        pracovné myšlienky a správy. Tento čas patrí budovaniu
                        tvojho vlastného digitálneho portfólia.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Ochrana RAM (Kognitívny minimalizmus):
                        </strong>{" "}
                        Na pracovisku vykonávaj len nevyhnutné minimum
                        inštrukcií potrebné na udržanie pozície. Nevkladaj do
                        plnenia cudzích úloh žiadne zbytočné emócie ani
                        iniciatívu. Šetri svoje kognitívne cykly. Tvoj{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> musí
                        zachytiť a zahodiť akýkoľvek pokus o korporátnu citovú
                        manipuláciu.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Budovanie asynchrónnych kanálov:
                        </strong>{" "}
                        Každé ušetrené euro premeň na nákup vlastných vývojových
                        prostriedkov (lepší hardvér, vzdelávacie repozitáre,
                        licencie). Tvoja{" "}
                        <DMLTooltip
                          slug="cesta_nepraxe"
                          label="Cesta nePraxe"
                        />{" "}
                        začína v momente, kedy tvoj kód vyprodukuje prvý
                        asynchrónny príjem nezávislý na tvojom fyzickom čase.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"}`}
                >
                  <span>4. Nástroje a Protokoly (Tvoj Antivírus)</span>
                  {openMofu.protocols ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.protocols && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"}`}
                  >
                    <p>
                      Pre udržanie kognitívneho zdravia a prípravu na
                      definitívny únik musíš denne exekuovať tri obranné
                      mechanizmy (Antivírus):
                    </p>
                    <ol className="space-y-4 pl-6 list-decimal text-xs">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          The &#39;Paycheck Drug&#39; Detox Protocol:
                        </strong>{" "}
                        Zadefinuj si presnú finančnú hranicu (tzv. Emergency
                        Buffer) vo výške 6-mesačných životných nákladov. Tento
                        fond funguje ako tvoj kognitívny{" "}
                        <DMLTooltip slug="proxy_server" label="Proxy server" />.
                        Hneď ako ho dosiahneš, tvoj strach z prepustenia klesne
                        na nulu a tvoje <DMLTooltip slug="cpu" label="CPU" />{" "}
                        uvoľní obrovskú kapacitu pre kreatívne plánovanie.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          SLA Negotiation Firewall:
                        </strong>{" "}
                        Striktne oddeluj prácu od osobného života. Po 17:00
                        vypni všetky komunikačné kanály zamestnávateľa. Tvoj
                        komunikačný port{" "}
                        <DMLTooltip slug="banned_port" label="Banned Port" />{" "}
                        musí byť pre korporátne notifikácie nekompromisne
                        uzavretý. Akákoľvek požiadavka nad rámec zmluvy musí
                        naraziť na tvoj asertívny{" "}
                        <DMLTooltip slug="firewall" label="Firewall" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          The &#39;Two-Hour Sandbox&#39; Rule:
                        </strong>{" "}
                        Ráno pred odchodom do práce venuj prvé dve hodiny dňa
                        výhradne svojej tvorbe. Tým zabezpečíš, že tvoja
                        najlepšia, čerstvá <DMLTooltip slug="ram" label="RAM" />{" "}
                        bude alokovaná pre tvoje vlastné aktíva a korporácii
                        odovzdáš až o niečo unavenejší, stabilnejší sekundárny
                        výkon.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (AVATAR LEASING CALCULATOR)
            ===================================================================== */}
        {activeTab === "simulator" && (
          <section className="border-2 border-[#FFEB3B]/30 bg-[#050A0E]/60 p-6 md:p-8 rounded-xl font-mono relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setSimulatorHelp(!simulatorHelp)}
                className="p-1.5 border border-gray-800 hover:border-gray-600 rounded bg-[#050A0E] transition-all"
                title="Simulátor pomocník"
              >
                <HelpCircle
                  className="w-4 h-4 text-[#FFEB3B]"
                  style={{ color: DIM_COLOR }}
                />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 border-b border-gray-900 pb-3">
              <span
                className="w-2 h-2 rounded-full bg-[#FFEB3B] animate-pulse"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <h2 className="text-sm font-black uppercase text-white">
                📊 EXEKUČNÝ SIMULÁTOR: AVATAR LEASING CALCULATOR &amp; HARDWARE
                DIAGNOSTICS
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér vizualizuje prenájom biologického CPU a kognitívnej
                  RAM pre Kvadrant Z. Počíta, koľko Watts ti zostáva na vlastné
                  OS Genesis operácie a vyhodnocuje index kognitívneho
                  vykorisťovania na základe hodín v práci a stresového Limbic
                  Noise.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong> Pomocou
                  posuvníkov nastav čas prenájmu svojho CPU, intenzitu
                  parazitického šumu z meetingov a tvoj večerný čas v dychovom
                  localhost stave. Aktivuj kognitívny Firewall pre zachytávanie
                  toxických sieťových paketov od nadriadených.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Sleduj live
                  diagnostický panel: miera preťaženia RAM, úniky energie v
                  Watts a celkový index vykorisťovania. Vykonaj Format C: pre
                  okamžitú defragmentáciu kognitívnej kapacity.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders
                    className="w-3.5 h-3.5 text-[#FFEB3B]"
                    style={{ color: DIM_COLOR }}
                  />
                  Nastavenie systémových limitov
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Prenájom CPU pre firmu:
                      </span>
                      <span
                        className="text-[#FFEB3B] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {cpuLeaseHours} h/deň
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="16"
                      value={cpuLeaseHours}
                      onChange={(e) => {
                        setCpuLeaseHours(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFEB3B] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Intenzita Limbic Noise stresu:
                      </span>
                      <span
                        className="text-[#FFEB3B] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {limbicNoiseInput}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={limbicNoiseInput}
                      onChange={(e) => {
                        setLimbicNoiseInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFEB3B] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Večerný localhost dychový reset:
                      </span>
                      <span
                        className="text-[#FFEB3B] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {eveningCodingHours} h/deň
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={eveningCodingHours}
                      onChange={(e) => {
                        setEveningCodingHours(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFEB3B] bg-gray-950 rounded-lg appearance-none h-1"
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
                    Karanténa (Sandbox)
                  </button>
                  <button
                    onClick={() => handleAction("firewall")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isFirewallActive
                        ? "bg-[#FFEB3B]/20 border-[#FFEB3B] text-[#FFEB3B]"
                        : "bg-[#FFEB3B]/5 border-[#FFEB3B]/20 text-[#FFEB3B]/60 hover:bg-[#FFEB3B]/10"
                    }`}
                  >
                    Kognitívny Firewall
                  </button>
                  <button
                    onClick={() => handleAction("autopilot")}
                    className="flex-1 min-w-[120px] bg-yellow-600/10 hover:bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Shared Hosting
                  </button>
                </div>
              </div>

              {/* HUD / LIVE DATA SECTION */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2 mb-4">
                    <Activity
                      className="w-3.5 h-3.5 text-[#FFEB3B]"
                      style={{ color: DIM_COLOR }}
                    />
                    SCREENING INDEX // DIAGNOSTIKA SKAFANDRA
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Zasvinenie RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 60 ? "text-red-400" : "text-[#FFEB3B]"}`}
                        style={{
                          color: liveLimbicNoise > 60 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {100 - liveFreeRam}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Voľná Kognitívna RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveFreeRam < 40 ? "text-yellow-400" : "text-[#FFEB3B]"}`}
                        style={{
                          color: liveFreeRam < 40 ? "#FFAA00" : DIM_COLOR,
                        }}
                      >
                        {liveFreeRam}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Zostávajúce Watts
                      </span>
                      <span
                        className={`text-2xl font-black ${liveWatts < 30 ? "text-red-400" : "text-[#FFEB3B]"}`}
                        style={{
                          color: liveWatts < 30 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {liveWatts}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Úroveň Suverenity
                      </span>
                      <span
                        className={`text-2xl font-black ${liveSuverenity < 40 ? "text-yellow-400" : "text-[#FFEB3B]"}`}
                        style={{
                          color: liveSuverenity < 40 ? "#FFAA00" : DIM_COLOR,
                        }}
                      >
                        {liveSuverenity}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATRIX SYSTEM CONSOLE LOGS */}
                <div className="flex-1 bg-black/90 rounded-lg p-4 border border-gray-900 flex flex-col justify-between h-48 overflow-hidden font-mono text-[10px] leading-relaxed">
                  <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-1.5 mb-2">
                    <span>DIAG_LOG_MATRIX_CONSOLE // WORKFLOW</span>
                    <button
                      onClick={() => {
                        triggerSound("click");
                        setLogs(["[OK] Logs cleared."]);
                      }}
                      className="hover:text-white uppercase transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
                    {logs.map((log, i) => (
                      <div
                        key={i}
                        className={`font-mono text-[10px] ${
                          log.startsWith("[SUCCESS]")
                            ? "text-[#39FF14]"
                            : log.startsWith("[CRITICAL]")
                              ? "text-red-500 animate-pulse"
                              : log.startsWith("[WARNING]")
                                ? "text-yellow-500"
                                : "text-gray-400"
                        }`}
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
            <BookOpen
              className="w-3.5 h-3.5 text-[#FFEB3B]"
              style={{ color: DIM_COLOR }}
            />
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
                  ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40"
                  : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10 hover:border-[#FFEB3B]/30"
              }`}
            >
              <span className="flex items-center gap-2 text-white">
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-[#FFEB3B] ${isLexikonOpen ? "animate-pulse" : ""}`}
                  style={{ backgroundColor: DIM_COLOR }}
                />
                💠 EXTRACT Z NEXUS LEXIKÓNU (PREKLADOVÝ KĽÚČ V6.5)
              </span>
              {isLexikonOpen ? (
                <ChevronUp
                  className="w-4 h-4 text-[#FFEB3B]"
                  style={{ color: DIM_COLOR }}
                />
              ) : (
                <ChevronDown
                  className="w-4 h-4 text-[#FFEB3B]"
                  style={{ color: DIM_COLOR }}
                />
              )}
            </button>

            {isLexikonOpen && (
              <div
                className={`p-6 md:p-8 space-y-8 border-t border-gray-800 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15"
                    : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFEB3B]/10"
                }`}
              >
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
                          className={`p-4 rounded-lg bg-gradient-to-r ${isDarkMode ? "from-[#050A0E] to-[#FFEB3B]/10" : "from-[#1E252D]/40 to-[#FFEB3B]/5"} border ${catStyle.border} shadow-sm`}
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

        {/* =====================================================================
            9. DOPLNKOVÝ AUDIO MODUL (GlobalNodePodcast)
            ===================================================================== */}
        <section className="mt-12 rounded-xl overflow-hidden border border-gray-850 bg-[#050A0E]/40 p-6 relative z-10">
          <div className="text-xs text-[#BF00FF] font-bold font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping" />
            <span>🎙️ Doplnkový Audio Modul: Inštalačný podcast</span>
          </div>
          <GlobalNodePodcast nodeId="pkIdSHPusM8" dimColor="#BF00FF" />
        </section>

        {/* =====================================================================
            10. 🚀 UPLINK TERMINAL (Vykonaj akciu hneď teraz!)
            ===================================================================== */}
        <section
          className={`mt-16 border-2 border-[#FFEB3B]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10 hover:border-[#FFEB3B]/30"
          }`}
        >
          {/* Bouncing Lock strictly v neónovo žltej farbe dimenzie #FFEB3B */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[#050A0E] p-3 rounded-full border-2 animate-bounce shadow-[0_0_15px_rgba(255,235,59,0.4)]"
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
              [ WORK UPLINK ENGAGED // EXECUTION CAPACITY: FULL ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj biologický procesor bol dlhodobou závislosťou na mesačnej
              mzde pripútaný k cudzím korporátnym databázam. Vymieňaš svoju
              vzácnu životnú silu za bezcenné fiat žetóny, zatiaľ čo tvoj
              skutočný potenciál hnije v tieni autopilota. Preber kontrolu nad
              svojím procesorom hneď teraz.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-left border-t border-gray-800/40 pt-4 space-y-2">
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🔑 INICIALIZOVAŤ ÚNIK: ODPOJIŤ AVATARA ZAMESTNANCA ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Uval bezpečný Sandbox na klientsky stres, zablokuj
                  prichádzajúce komunikačné porty po 17:00 a prevezmi plnú
                  kontrolu nad kognitívnou RAM.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY OS GENESIS ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Spusti proces odladenia chýb podvedomia, inštaluj asynchrónne
                  Scrum rutiny a pretransformuj svoj Skafander na zvrchovanú
                  kódovaciu stanicu.
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
              <Lock className="w-4 h-4" />[ 🔑 INICIALIZOVAŤ ÚNIK: ODPOJIŤ
              AVATARA ZAMESTNANCA ]
            </a>

            <a
              href="https://projekt-nexus.sk/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound("click")}
              className="px-6 py-3.5 bg-white text-black hover:bg-white/90 text-xs font-black uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />[ 🌐 PREVZIAŤ ROOT ACCESS:
              VSTÚPIŤ DO BRÁNY OS GENESIS ]
            </a>
          </div>

          <div className="text-[9px] text-gray-600 pt-2 uppercase flex justify-center gap-4">
            <span>Sovereignty Factor: 100%</span>
            <span>•</span>
            <span>Secure Tunnel: Encrypted TLS_v1.3</span>
          </div>
        </section>
      </main>

      {/* =====================================================================
          11. FOOTER
          ===================================================================== */}
      <footer className="w-full border-t border-gray-900 pt-8 pb-12 mt-12 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <GlobalPredFooterNode nodeId={NODE_ID} tierColor={TIER_COLOR} />
        </div>
      </footer>
    </div>
  );
}
