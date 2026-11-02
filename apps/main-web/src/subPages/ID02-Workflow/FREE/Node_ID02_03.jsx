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
import { TierBadge } from "@shared/components/TierBadge";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalPredFooterNode } from "@main-web/components/GlobalPredFooterNode";
import { GlobalNodeVideo } from "@main-web/components/GlobalNodeVideo";
import { GlobalNodePodcast } from "@main-web/components/GlobalNodePodcast";
import MetaTags from "@shared/components/MetaTags";

// =====================================================================
// 👑 HLAVNÝ KOMPONENT UZLA ID02_NODE_02 (PREŽITÁ PRAVDA V SYSTÉME)
// =====================================================================
export default function Node_ID02_03() {
  const NODE_ID = "ID02-03";
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
        title="ID02 THE-WORKFLOW // Prežitá Pravda v systéme"
        description="03. Prežitá Pravda v systéme (Čistá matematika výmeny času za peniaze)."
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
                Node_ID02_03 // Prežitá Pravda v systéme
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              PREŽITÁ PRAVDA V SYSTÉME
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              03. Prežitá Pravda v systéme (Čistá matematika výmeny času za
              peniaze). Vymieňanie konečného kognitívneho času za fiktívne,
              centrálne tlačené dáta [peniaze].
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
              &quot;Počúvaj ma pozorne, ty biologická kalkulačka. Matrix ťa
              dostal na tom najprimitívnejšom kognitívnom cheate: prinútil ťa
              veriť, že vymieňať tvoj{" "}
              <strong className="text-[#FF003C] font-black">
                nenahraditeľný, konečný výpočtový čas
              </strong>{" "}
              – tvoj životný čas na tejto planéte – za{" "}
              <strong className="text-[#FF003C] font-black">
                nekonečne replikovateľné, centrálne tlačené fiktívne dáta
              </strong>{" "}
              [peniaze] je férový obchod. Každé ráno, keď tvoje biologické{" "}
              <DMLTooltip slug="cpu" label="CPU" /> nabehne a tvoja drahocenná{" "}
              <DMLTooltip slug="ram" label="RAM" /> sa naplní cudzími úlohami,
              dobrovoľne spúšťaš skript, ktorý prenáša tvoj životný výkon
              korporátnemu botnetu. Tvoj systém nepretržite hlási{" "}
              <strong className="text-[#FF003C] font-black">
                Error 402: PAYMENT_REQUIRED / RESOURCE_EXHAUSTION
              </strong>
              . Predávaš svoje najlepšie bdelé hodiny, kedy tvoje kognitívne
              obvody fungujú na plný výkon, a výmenou dostávaš len prístupové
              práva k potrave a prenájmu skafandra. Zvyšok tvojho dňa – tvoj
              voľný čas – je len vybitá batéria s vysokým{" "}
              <DMLTooltip slug="limbic_noise" label="Limbic Noise" /> šumom a
              zanesenou <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
              pamäťou. Zastav tento šialený procesorový cyklus, zaveď kognitívny{" "}
              <DMLTooltip slug="firewall" label="Firewall" />, zmeraj si svoju
              hodinovú stratu vitálnej energie a reštartuj systém do zvrchovanej
              matematiky <DMLTooltip slug="os_genesis" label="OS Genesis" />
              .&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID02_03_prezita_pravda_v_systeme.md</span>
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
                      Roky som sedel v presklených korporátnych kancľoch, kým
                      som si nespočítal čistú, krvavú matematiku reality.
                      Predával som svoje najčistejšie kognitívne cykly za
                      smiešne fiat žetóny, zatiaľ čo môj biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> krvácal
                      a môj spánok bol paralyzovaný chronickou nespavosťou. Moje{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> bolo permanentne
                      vyťažené na 100%, kým neprišiel nevyhnutný kolaps –
                      psychóza v lete 2018 na Spartakovskej ulici v Trnave. Štát
                      mi vtedy pridelil nálepku &#39;paranoidná
                      schizofrénia&#39; a invalidný dôchodok 530 €.
                    </p>
                    <p>
                      Väčšina ľudí by v tom videla koniec hry, no pre mňa to bol
                      očistný <DMLTooltip slug="format_c" label="Format C:" /> a
                      zriadenie zvrchovaného{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -a. Tento príspevok od štátu sa stal mojím nízkonapäťovým
                      napájacím zdrojom, ktorý mi umožnil odpojiť sa od
                      korporátneho botnetu a stiahnuť sa do tichého
                      &#39;Ghost-Mode&#39; na domácom{" "}
                      <DMLTooltip slug="local_host" label="Local Host" />
                      -e. Kúpil som si lacný tablet Samsung Tab A9+ za 120 € a
                      začal som bdelo počítať. Zistil som, že ak minimalizujem
                      svoje fixné náklady na kosť, nepotrebujem predávať ani
                      jedinú sekundu svojej{" "}
                      <DMLTooltip slug="ram" label="RAM" /> cudzím majiteľom.
                      Každú jednu hodinu pozornosti som namiesto toho investoval
                      do vývoja vlastného systému a kompilácie{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />. Moja
                      prežitá pravda je jednoduchá: kým nezačneš vnímať svoj čas
                      ako najvzácnejší hardvérový prostriedok, ktorý vlastníš,
                      budeš len lacným hostingom pre cudzie databázy.
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
                      Z hľadiska kybernetického dizajnu a optimalizácie
                      systémových zdrojov predstavuje ľudský život prísne
                      obmedzený počet hardvérových taktov procesora{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Clock Cycles)
                      </span>
                      . Každý biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />{" "}
                      disponuje konečným množstvom energie vyjadrenej vo{" "}
                      <DMLTooltip slug="watts" label="Watts" />, ktorú dokáže
                      premeniť na kognitívny výkon. Keď vstúpiš do klasického
                      zamestnaneckého vzťahu, de facto prenajímaš svoje primárne{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> a operačnú pamäť{" "}
                      <DMLTooltip slug="ram" label="RAM" /> vonkajšiemu
                      hostiteľovi za fixný paušál{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (mzdu)
                      </span>
                      .
                    </p>
                    <p>
                      Tento prenájom je pre klienta extrémne nevýhodný. Ty
                      znášaš všetky náklady na údržbu hardvéru{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (strava, spánok, regenerácia, zdravotné riziká)
                      </span>
                      , zatiaľ čo zamestnávateľ odčerpáva tvoj najlepší výkon v
                      špičkových časoch. Tvoje lokálne procesy sú odsunuté na
                      okraj a spúšťajú sa až v čase hardvérového útlmu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (večer, víkendy)
                      </span>
                      , kedy tvoj klientsky systém vykazuje masívne{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> z
                      celodenného vyťaženia. Navyše, fiktívna odmena, ktorú
                      dostávaš, podlieha neustálemu riadeniu centrálneho{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />
                      -u prostredníctvom inflácie a daní, čo permanentne znižuje
                      hodnotu tvojich akumulovaných dát.
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
                      Keď podrobíme sémantickému preosievaniu klasickú
                      ekonomickú a psychologickú literatúru, odhalíme rovnaké
                      systémové schémy, zbavené ich akademického balastu a
                      prázdnych rečí:
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
                        Kiyosakiho analýza stotožňuje zamestnanie s najväčšou
                        finančnou pasivitou. Predaj času za peniaze je lineárny
                        proces, ktorý ťa navždy uzamyká v krysích pretekoch{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Rat Race)
                        </span>
                        . Skutočná zvrchovanosť začína až vtedy, keď prestaneš
                        prenajímať <DMLTooltip slug="cpu" label="CPU" /> a
                        začneš vlastniť digitálne a finančné aktíva.
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
                        2. Eckhart Tolle (Sila prítomného okamihu)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Tolle varuje pred predajom prítomnosti za fiktívny
                        budúci zisk. Zamestnanec obetuje svoje &#39;Tu a
                        Teraz&#39; – jediný reálny runtime, ktorý má – výmenou
                        za mentalitu prežívania a strach z odpojenia od siete,
                        čím preťažuje svoju{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />.
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
                        3. Don Miguel Ruiz (Štyri dohody)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Ruiz popisuje systém domestikácie ako mechanizmus, ktorý
                        učí deti vymieňať ich autentickú slobodu za schválenie a
                        pozlátka spoločnosti. Mzda je len sofistikovanejšou
                        verziou pochvaly pre domestikovaného psa, ktorá ho drží
                        v poslušnosti vo vnútri ohradeného{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" />
                        -u.
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
                        4. Osho (Od odvahy k rebelstvu)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Osho nekompromisne odsudzuje spoločnosť, ktorá robí z
                        človeka iba koliesko v obrovskom stroji. Akceptovanie
                        roly užitočného robota je vedomou popravou tvojho
                        jedinečného <DMLTooltip slug="bios" label="BIOS" />
                        -u a prechodom do stavu permanentného spánku.
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
                      Musíme rozbiť ilúziu, že tvoja práca ťa definuje a že
                      tvoja výplata predstavuje tvoju hodnotu. Tvoja rola v
                      zamestnaní je len dočasne nainštalovaný balíček{" "}
                      <DMLTooltip slug="persona" label="Persona" />, ktorý slúži
                      ako používateľské rozhranie pre komunikáciu s cudzím
                      firemným systémom. Ty nie si ten projektový manažér,
                      programátor, či operátor na linke. To je len{" "}
                      <DMLTooltip slug="avatar" label="Avatar" /> v cudzom
                      divadle.
                    </p>
                    <p
                      className="font-bold uppercase tracking-wider text-xs"
                      style={{ color: DIM_COLOR }}
                    >
                      Spoznaj skutočnú matematiku tvojho bytia:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Irreparable Clock Cycles{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Neobnoviteľný čas)
                          </span>
                          :
                        </strong>{" "}
                        Tvoj čas na tejto zemi tiká lineárne nadol. Každá
                        sekunda predaná korporácii je nevratne zmazaný sektor na
                        tvojom pevnom disku.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Printed Fiat{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Kopírovateľný šum)
                          </span>
                          :
                        </strong>{" "}
                        Peniaze, ktoré dostávaš, sú len digitálne záznamy, ktoré
                        centrálne banky tlačia stlačením jedného klávesu.
                        Vymieňaš obmedzený hardvér za neobmedzený softvérový šum
                        je matematická samovražda.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Bdelý Svedok{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Tvoj BIOS)
                          </span>
                          :
                        </strong>{" "}
                        Tvoje skutočné Ja, ktoré ticho sleduje, ako predávaš
                        svoje najlepšie{" "}
                        <DMLTooltip slug="watts" label="Watts" /> energie za
                        drobné a nechávaš svoje vlastné projekty zapadať prachom
                        v prázdnych priečinkoch.
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
                      Matrixu je navrhnutý tak, aby ťa udržiaval v permanentnom
                      stave finančného a kognitívneho hladu. Ak by si mal
                      dosatok voľného času a čistú{" "}
                      <DMLTooltip slug="ram" label="RAM" />, veľmi rýchlo by si
                      si uvedomil, v akej otrockej slučke sa nachádzaš. Preto ťa
                      systém okamžite po prebudení zaplavuje masívnym{" "}
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
                      šumom.
                    </p>
                    <p
                      className="font-bold uppercase tracking-wider text-xs"
                      style={{ color: DIM_COLOR }}
                    >
                      Tento mechanizmus funguje cez tri deštruktívne slučky:
                    </p>
                    <ol className="space-y-3 list-decimal pl-6 text-xs text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Hodinový prenájom{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (The Rent)
                          </span>
                          :
                        </strong>{" "}
                        Tvoj čas je ohodnotený hodinovou sadzbou. Systém ti
                        umyselne platí len toľko, aby si pokryl základnú údržbu
                        Skafandra a prenájom bytu, no nikdy nie toľko, aby si si
                        mohol kúpiť vlastnú slobodu a servery.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Dopamínové dane{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Lifestyle Creep)
                          </span>
                          :
                        </strong>{" "}
                        Keď ti systém o niečo zvýši plat, tvoja{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        ťa prinúti kúpiť si lepší telefón, drahšie auto, či
                        luxusnejšiu dovolenku. Zvyšuješ svoje fixné náklady a
                        znova dobrovoľne uzatváraš pascu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zber emočného výkonu:
                        </strong>{" "}
                        Tvoj permanentný stres z termínov, mítingov a
                        klientskych hádok preťažuje tvoje kognitívne{" "}
                        <DMLTooltip slug="cpu" label="CPU" /> a odčerpáva
                        energiu. Matrix ťa vyžmýka do sucha, tvoj port{" "}
                        <DMLTooltip slug="banned_port" label="Banned Port" /> je
                        preplnený toxickými paketmi a domov sa vraciaš
                        kognitívne mŕtvy.
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
                      Únik z tejto pasce nevyžaduje okamžitú, chaotickú výpoveď,
                      ktorá by ti zrútila existenčné rozhranie a vyvolala paniku
                      v amygdale. Vyžaduje tichú, asynchrónnu defragmentáciu
                      tvojho dňa v tvojom vlastnom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> a
                      spustenie precízneho{" "}
                      <DMLTooltip slug="debugging" label="Debugging" />{" "}
                      protokolu.
                    </p>
                    <p
                      className="font-bold uppercase tracking-wider text-xs"
                      style={{ color: DIM_COLOR }}
                    >
                      Postupuj podľa tejto kybernetickej smernice:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Zriadenie lokálneho Sandboxu:
                        </strong>{" "}
                        Vyhraď si denne striktne 2 hodiny{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (napr. od 5:00 do 7:00 ráno)
                        </span>
                        , kedy tvoj{" "}
                        <DMLTooltip slug="skafander" label="Skafander" /> patrí
                        výhradne tebe. Tento čas izoluj v nepriestrelnom{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" />
                        -e – žiadny telefón, žiadne maily, žiadny Parazit.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Kódovanie zvrchovaného jadra:
                        </strong>{" "}
                        V tomto čistom čase, kedy je tvoja{" "}
                        <DMLTooltip slug="ram" label="RAM" /> prázdna, pracuj na
                        vývoji vlastných digitálnych aktív. Píš texty, natáčaj
                        videá, programuj nástroje, buduj asynchrónne predajné
                        lieviky.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Asertívne odstrihnutie zbernice:
                        </strong>{" "}
                        Presne o 17:00{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (alebo v momente konca tvojej zmluvnej povinnosti)
                        </span>{" "}
                        uvaľ okamžitú{" "}
                        <DMLTooltip slug="karantena" label="Karanténa" />
                        -u na všetky korporátne procesy. Vypni firemný laptop,
                        zablokuj prístupové porty{" "}
                        <DMLTooltip slug="banned_port" label="Banned Port" /> a
                        odmietni prenášať akékoľvek obavy na pozadí dňa.
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
                      Pre trvalé prežitie v korporátnej zóne a postupné
                      vybudovanie asynchrónneho cashflowu musíš do svojho dňa
                      nainštalovať tieto tri antivírusové protokoly:
                    </p>
                    <ol className="space-y-4 pl-6 list-decimal text-xs">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Protokol &quot;Hodina Nula&quot;{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Time Allocation)
                          </span>
                          :
                        </strong>{" "}
                        Každý pondelok si spočítaj, koľko hodín si reálne
                        odovzdal cudzím systémom a koľko hodín si venoval
                        kompilácii vlastného{" "}
                        <DMLTooltip slug="os_genesis" label="OS Genesis" />. Ak
                        je pomer pre tvoje projekty nulový, tvoj systém smeruje
                        k nevyhnutnému hardvérovému krachu. Uprav alokáciu RAM
                        okamžite.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívny Firewall na pracovisku:
                        </strong>{" "}
                        Aktivuj obranný{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> proti
                        toxickým kolegom a klientskemu tlaku. Keď ti posielajú
                        poplašné správy{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (
                          <DMLTooltip
                            slug="network_packet"
                            label="Network Packet"
                          />
                          )
                        </span>
                        , ticho ich filtruj s vedomím:{" "}
                        <em>
                          &quot;Toto sú len ich lokálne bežiace chybové logy.
                          Môj systém je izolovaný a ich balíky sa zahadzujú bez
                          reaktivity.&quot;
                        </em>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Večerné Formátovanie{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Cache Flush)
                          </span>
                          :
                        </strong>{" "}
                        Pred spánkom spusti rituálny{" "}
                        <DMLTooltip slug="format_c" label="Format C:" /> pre
                        všetky denné starosti. Vyčisti celú klientsku{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />,
                        zatvor otvorené okná projektov a uvoľni pamäť. Vstupuj
                        do spánku ako čistý, nízkonapäťový{" "}
                        <DMLTooltip slug="local_host" label="Local Host" />,
                        pripravený na rannú tvorbu.
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
              🚀 SYSTEM UPLINK ENGAGED // ALL SYSTEMS STATUS: READY
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-tight">
              [ SYSTEM UPLINK ENGAGED // ALL SYSTEMS STATUS: READY ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj biologický procesor bol preťažený dlhodobým prenájmom tvojho
              výpočtového času za znehodnocujúce sa fiat dáta. Utrpel si
              energetické straty a nechal svoje vlastné servery vyhasnúť. Je čas
              zmeniť matematický vzorec tvojej existencie.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-left border-t border-gray-800/40 pt-4 space-y-2">
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🔑 INICIALIZOVAŤ SPOJENIE: AKTIVOVAŤ NEXUS PRO KEY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Odomkni kompletnú PRO/OMEGA vrstvu Workflow protokolov, zriaď
                  svoj prvý asynchrónny cash-engine a uvoľni kognitívnu RAM.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Prevezmi administrátorské práva nad svojím časom, uval Sandbox
                  na korporátny hluk a spusti zvrchovaný OS Genesis.
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
