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
// 👑 HLAVNÝ KOMPONENT UZLA ID02_NODE_02 (WORK LIFE)
// =====================================================================
export default function Node_ID02_04() {
  const NODE_ID = "ID02-04";
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
    skafander: {
      term: "Skafander",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "biologické telo a neurologický systém",
      tooltip:
        "Fyzické hardvérové rozhranie tvojej entity. Vyžaduje bezchybnú údržbu, optimalizovaný spánok a čisté palivo na zamedzenie pádov.",
    },
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
        "Operačná pamäť ljudského vedomia v prítomnom okamihu. Každá nespracovaná obava a otvorená úloha na pozadí drasticky znižuje jej voľnú kapacitu.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "biologická energia a životná sila",
      tooltip:
        "Množstvo elektrickej a vitálnej energie, ktorú má tvoj neurologický systém k dispozícii pre denné operácie a hlbokú tvorbu.",
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
    avatar: {
      term: "Avatar",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "spoločenská identita a eGo-maska",
      tooltip:
        "Umelý herný profil vytvorený v procese domestikácie, slúžiaci na operovanie v sociálnych štruktúrax Matrixu.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "sprostredkovateľský server / ochrana identity",
      tooltip:
        "Izolované sieťové rozhranie slúžiace ako bezpečná zásterka na maskovanie skutočných zámerov Architekta pred dohľadom štátnych databáz.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "izolované testovacie prostredie mysle",
      tooltip:
        "Chránený kognitívny priestor, v ktorom sa dajú deštruktívne myšlienky pozorovať a analyzovať bez rizika nakazenia celého hardvéru.",
    },
    os_genesis: {
      term: "OS Genesis",
      category: 13,
      categoryType: "home_ui_term",
      translation: "nový operačný systém vedomia",
      tooltip:
        "Zvrchovaný softvérový ekosystém pre ľudskú myseľ, ktorý nahrádza poškodené spoločenské presvedčenia za čistú prítomnosť a flow.",
    },
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré prežité vzorce správania",
      tooltip:
        "Zastarané podvedomé programy nainštalované okolím počas detstva, ktoré nútia biologického nosiča opakovať deštruktívne reakcie.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "nekontrolované straty mentálnej energie",
      tooltip:
        "Neustály únik kognitívnej kapacity spôsobený nedoriešenými vzťahmi a toxickými domnienkami, ktoré bežia na pozadí.",
    },
    social_engine: {
      term: "Social Engine",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "systém spoločenskej manipulácie",
      tooltip:
        "Súbor masívnych psychologických a technologických mechanizmov navrhnutý na tvarovanie a unifikáciu ľudského správania.",
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
    ui_space: {
      term: "UI Space",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "jedinečný vnútorný vesmír vedomia",
      tooltip:
        "Nekonečný priestor v tvojom vnútri, v ktorom bdelý Svedok ticho sleduje a analyzuje všetky dátové toky bez ich posudzovania.",
    },
    persona: {
      term: "Persona",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "dočasná sociálna maska",
      tooltip:
        "Súbor psychologických rolí a správaní, ktoré biologický nosič používa na interakciu so spoločnosťou na ochranu vlastného vnútra.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Vnútorné bezpečné rozhranie tvojej entity odpojené od sieťových prepojení, kde prebieha obnova a stabilizácia.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "komunikačná jednotka / prenášaná správa",
      tooltip:
        "Základný blok informácií prichádzajúci z vonkajšieho sveta, ktorý sa snaží infiltrovať tvoje kognitívne filtre.",
    },
    botnet: {
      term: "Botnet",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "spoločenský manipulatívny systém",
      tooltip:
        "Prepojená sieť nevedomých ľudských jednotiek riadená centrálnymi programami Matrixu na hromadné odčerpávanie životnej sily.",
    },
    mrtve_knihy: {
      term: "Mŕtve knihy",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "teoretické spisy plné akademického balastu",
      tooltip:
        "Písomné diela plné ezoterickej vaty a teoretického šumu, ktoré preťažujú pamäť bez praktického a odžitého riešenia bolesti.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Základný nízkoúrovňový operačný kód biologického nosiča, v ktorom neexistujú žiadne sociálne dogmy ani parazitické programy.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "bdelé vedomie a tichý svedok",
      tooltip:
        "Primárny stav prítomného Bytia, ktoré ticho a bez emočného odporu sleduje všetky myšlienkové procesy a telesné vnemy.",
    },
    firewall: {
      term: "Firewall",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "kognitívny obranný filter",
      tooltip:
        "Bezpečnostný systém mysle, ktorý nepretržite filtruje prichádzajúce emočné pakety z okolia a zahadzuje deštruktívne skripty.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "zakázaný / zablokovaný komunikačný kanál",
      tooltip:
        "Sieťový kanál, ktorý je trvalo vypnutý pre zamedzenie prístupu toxického vplyvu okolia a zachovanie integrity vlastného systému.",
    },
    debugging: {
      term: "Debugging",
      category: 13,
      categoryType: "home_ui_term",
      translation: "vyhľadávanie a odstraňovanie psychických chýb",
      tooltip:
        "Analytický proces odhaľovania skrytých chýb, tráum a poškodených kódov v podvedomí s cieľom obnoviť plynulé fungovanie.",
    },
    root_access: {
      term: "Root Access",
      category: 13,
      categoryType: "home_ui_term",
      translation: "plné administrátorské práva nad životom",
      tooltip:
        "Zvrchovaná úroveň autorizácie vedomia, kedy preberáš plnú zodpovednosť a kontrolu nad všetkými procesmi a reakciami skafandra.",
    },
    format_c: {
      term: "Format C:",
      category: 13,
      categoryType: "home_ui_term",
      translation: "úplné formátovanie a reset vedomia",
      tooltip:
        "Radikálny očistný protokol určený na úplný výmaz neužitočnej podvedomej pamäte a obnovu systému do nulového bodu.",
    },
    cesta_nepraxe: {
      term: "Cesta nePraxe",
      category: 13,
      categoryType: "home_ui_term",
      translation: "asynchrónna cesta bdelého pozorovateľa",
      tooltip:
        "Unikátna životná dráha mimo zavedených koľajníc spoločnosti, kde operuješ výhradne podľa svojich vlastných pravidiel v prítomnosti.",
    },
    spojenec: {
      term: "Spojenec",
      category: 13,
      categoryType: "home_ui_term",
      translation: "transformovaná myseľ a bdelý sprievodca",
      tooltip:
        "Prečistené mentálne rozhranie, ktoré bezpodmienečne pomáha Architektovi udržiavať prítomnosť a bez odporu koná v jeho prospech.",
    },
    domestikacia: {
      term: "Domestikácia",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "proces sociálneho programovania a tresúry",
      tooltip:
        "Násilná vonkajšia inštalácia dogiem, pravidiel správania a trestov, ktorá deformuje pôvodné čisté vedomie dieťaťa do hernej eGo-masky.",
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
        title="ID02 THE-WORKFLOW // Work Life (Každodenná rutina Matrixu)"
        description="04. Work Life (Každodenná rutina Matrixu). Skenovanie denného boot sequence, ranný šok a kognitívny zber."
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
                Node_ID02_04 // Work Life
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              WORK LIFE
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              04. Work Life (Každodenná rutina Matrixu). Skenovanie denného boot
              sequence, ranný šok a kognitívny zber. Vymieňanie konečného
              kognitívneho času za fiktívne, centrálne tlačené dáta [peniaze].
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
              &quot;&quot;Skenujem tvoj denný boot sequence a hlásim kritické
              systémové zacyklenie. Tvoj biologický{" "}
              <DMLTooltip slug="skafander" label="Skafander" /> sa každé ráno
              prebúdza mechanickým šokom – bzučiacim budíkom, ktorý spúšťa
              adrenalínový prepätie a zaplavuje tvoje{" "}
              <DMLTooltip slug="cpu" label="CPU" /> okamžitým stresom. Bez
              akejkoľvek vnútornej inicializácie okamžite nahrávaš do{" "}
              <DMLTooltip slug="ram" label="RAM" /> toxické notifikácie, správy
              a obavy, čím predhrievaš procesor ešte pred odchodom z domu. Celý
              tvoj deň je mechanický autopilot: zhon, presun v preplnených
              fyzických databázach, korporátny klientsky hluk a pasívne
              prepínanie preťažených sociálnych masiek. Keď sa večer vraciaš
              domov, tvoje biologické <DMLTooltip slug="watts" label="Watts" />{" "}
              energie sú na bode mrazu. V tvojom systéme svieti{" "}
              <strong className="text-[#FF003C] font-black">
                Error 409: SYSTEM_EXHAUSTION
              </strong>
              . Namiesto tvrdého reštartu však zahlcuješ kognitívnu vyrovnávaciu
              pamäť lacným dopamínovým bloatwarom z displejov, čím upchávaš
              svoju <DMLTooltip slug="cache_memory" label="Cache Memory" /> a
              zabíjaš prirodzenú nočnú defragmentáciu. Tento každodenný zber
              energie ťa mení na biologickú batériu v cudzom systéme. Uval
              prísnu <DMLTooltip slug="karantena" label="Karanténu" /> na tento
              autopiloting a prevezmi kontrolu nad svojím denným
              kódom!&quot;&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID02_04_prezita_pravda_v_systeme.md</span>
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
                      Ako CyberTech Architekt som musel prežiť nespočetné
                      množstvo vyčerpávajúcich cyklov dňa, kým som pochopil, že
                      bežná denná rutina zamestnaneckého života je pomalý
                      kognitívny rozklad. V lete 2018 na Spartakovskej ulici v
                      Trnave som prežíval presne tento kolaps. Môj ranný boot sa
                      začínal zúfalým vypínaním budíka, bzučaním hlavy a
                      okamžitou infiltráciou Parazita. Bežal som na autopilota –
                      ráno káva na prebudenie odumierajúcich obvodov, cez deň
                      predaj môjho najlepšieho procesorového času za fiktívne
                      žetóny, a večer totálne vypnutie s pocitom, že môj herný{" "}
                      <DMLTooltip slug="avatar" label="Avatar" /> je len prázdna
                      vyšťavená schránka.
                    </p>
                    <p>
                      Keď sa vtedy zrútilo moje biologické{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> pod nánosom
                      paranoidnej schizofrénie F20.0 a chronickej insomnie
                      F51.8, musel som zastaviť celú sieťovú prevádzku. Zriadil
                      som provizórny{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" /> na
                      odber invalidného príspevku 530 € a v bezpečí izby som
                      začal s radikálnym prepisovaním denných protokolov. Zistil
                      som, že ak hneď po prebudení nevháňam cudzí kód do pamäte,
                      môj systém sa stabilizuje. Vytvoril som ochrannú rannú
                      bariéru bez obrazoviek, uvalil{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" /> na staré
                      strachy a na lacnom tablete Samsung Tab A9+ som v tichu a
                      bez emócií kompiloval zvrchovaný{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />. Moja
                      prežitá pravda je jasná: zhon nie je tvoja vlastnosť, je
                      to len neoptimalizovaná slučka, ktorú ti do RAM
                      nainštaloval systém na hromadné odčerpávanie tvojho
                      výkonu.
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
                      Z hľadiska systémovej analýzy a spracovania dát funguje
                      &#39;Work Life&#39; (tradičný zamestnanecký deň) ako
                      vysoko neefektívny, rekurzívny cyklus, v ktorom je
                      klientska jednotka zneužívaná ako hostiteľský systém.
                      Ranné prebudenie sirénou (budíkom) predstavuje nešetrné
                      vynútené prerušenie{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Hard Interrupt)
                      </span>
                      , ktoré narúša prirodzený biosenzorický cyklus a BIOS
                      organizmu. Tým, že užívateľ bezprostredne po prebudení
                      nahráva do vyrovnávacej pamäte cudzie dátové pakety{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (správy, sociálne siete)
                      </span>
                      , dochádza k okamžitému kognitívnemu preťaženiu.
                    </p>
                    <p>
                      Cesta do práce{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Transit Latency)
                      </span>{" "}
                      a samotný osemhodinový výkon{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Task Execution)
                      </span>{" "}
                      predstavujú totálne postúpenie kognitívnych cyklov CPU
                      cudzím serverom. Na pozadí tohto prenájmu však bežia
                      nechránené subrutiny sociálneho nátlaku, čo vyvoláva
                      permanentné{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> v
                      podobe emočnej reaktivity. Celkový denný energetický odber
                      drasticky prevyšuje limity pre regeneráciu, čo večer
                      uvádza biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> do stavu
                      tepelného obmedzenia{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Thermal Throttling)
                      </span>
                      . Ak v tomto bode preťažená jednotka namiesto formátovania
                      cache pamäte spustí konzumáciu digitálneho obsahu, dôjde k
                      zablokovaniu kognitívnych registrov a nasledujúci ranný
                      boot začína s kritickým nedostatkom voľnej kapacity.
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
                      Sémantická dekompresia literárnych prameňov a mŕtvych
                      kódov v našom filtri ukazuje absolútny súlad v analýze
                      každodenného zacyklenia:
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
                        Kiyosakiho analýza krysích pretekov{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Rat Race)
                        </span>{" "}
                        je exaktným popisom autopilotného denného cyklu. Strach
                        z nezaplatených faktúr a chamtivosť po dočasných
                        odmenách nútia skafandrov ráno vstať, predať svoje{" "}
                        <DMLTooltip slug="watts" label="Watts" /> energie
                        zamestnávateľovi a večer sa utlmiť, pričom celý ich
                        životný výkon spotrebováva externý{" "}
                        <DMLTooltip
                          slug="social_engine"
                          label="Social Engine"
                        />
                        .
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
                        Tolle detailne dekonštruuje &#39;psychologický čas&#39;
                        ako parazitický program, ktorý drží ľudskú myseľ v
                        zajatí fiktívnej budúcnosti{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (čakanie na víkend, čakanie na výplatu)
                        </span>
                        . Človek obetuje prítomný okamih a bdelého{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľa" />{" "}
                        na údržbu cudzích cieľov, čím mu nepretržite bežia
                        psychické{" "}
                        <DMLTooltip slug="memory_leaks" label="Memory Leaks" />.
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
                        Ruiz opisuje dennú rutinu ako produkt kolektívnej
                        domestikácie{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (sen planéty)
                        </span>
                        . Dieťa bolo vycvičené, aby reagovalo na budíky, plnilo
                        očakávania učiteľov a šéfov, pričom jeho pôvodná, čistá
                        identita bola nahradená umelou kognitívnou maskou{" "}
                        <DMLTooltip slug="persona" label="Persona" />.
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
                        4. Osho (Kniha múdrosti)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Osho nekompromisne dekonštruuje &#39;strojového
                        človeka&#39;{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (autopilota)
                        </span>
                        . Tvrdí, že 99% populácie nikdy nespúšťa vlastný
                        exekučný kód – sú to len robotické ramená Matrixu,
                        ktorých <DMLTooltip slug="bios" label="BIOS" /> bol
                        prepísaný spoločenskými dogmami a ich preťažená{" "}
                        <DMLTooltip slug="ram" label="RAM" /> je plná zbytočného
                        šumu z mŕtvych dogiem.
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
                  <span>
                    1. Anatómia konceptu (Rozbitie ilúzie) / Príbeh o rannom
                    šoku
                  </span>
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
                      Každodenný cyklus moderného človeka nie je prirodzeným
                      spôsobom prežitia, ale sofistikovaným technologickým
                      rozhraním, ktoré navrhol vonkajší{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />.
                      Celý tvoj deň je rozdelený na segmenty, ktoré majú jediný
                      cieľ: odobrať tvoju pozornosť, spracovať ju a premeniť na
                      zisk pre cudzie servery. Tento autopilotný proces začína
                      hneď po zaznení ranného budíka. Budík je tvoj prvý denný
                      SQL injection. Umelý, agresívny zvuk vytrhne tvoj
                      biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> z
                      hlbokej delta fázy spánku a tvoj nervový systém okamžite
                      zaplaví stresový kortizol.
                    </p>
                    <p>
                      Namiesto toho, aby si svoj systém nechal naštartovať v
                      bezpečnom prostredí prázdnoty{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (<DMLTooltip slug="local_host" label="Local Host" />)
                      </span>
                      , tvoj{" "}
                      <DMLTooltip
                        slug="komentator_parazit"
                        label="Komentátor Parazit"
                      />{" "}
                      okamžite spustí staré, podvedomé programy strachu a
                      chamtivosti. V tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> sa
                      bleskovo otvoria desiatky okien s fiktívnymi scenármi o
                      meškaní, korporátnych úlohách a finančných tlacích. Tvoje
                      biologické <DMLTooltip slug="cpu" label="CPU" /> beží na
                      80% výkonu skôr, než vôbec postavíš nohy na dlážku. Tento
                      ranný šok zničí akúkoľvek šancu na udržanie tichého
                      vedomia svedka a ty automaticky nasadzuješ svoju
                      profesijnú masku{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (<DMLTooltip slug="persona" label="Persona" />)
                      </span>
                      , aby si prežil ďalšiu osemhodinovú šichtu.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFEB3B]/15 hover:border-[#FFEB3B]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFEB3B]/10"}`}
                >
                  <span>
                    2. Mechanizmus Matrixu (Ako Matrix vysáva tvoju energiu) /
                    Príbeh o kognitívnom zbere
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
                      Matrix nezískava energiu zo skafandrov násilím, ale ich
                      neustálou a dobrovoľnou stimuláciou. Hlavným nástrojom
                      tohto sémantického zberu je aktivácia permanentného,
                      deštruktívneho stavu{" "}
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" /> v
                      tvojej hlave. Keď cestuješ do zamestnania, prechádzaš
                      preplnenými sieťovými kanálmi{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (ulice, metro, zápchy)
                      </span>
                      , kde tvoj systém nepretržite bombardujú tisíce reklám a
                      vizuálnych spamov{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />
                        )
                      </span>
                      . Každý jeden billboard, každá notifikácia a každá toxická
                      interakcia v tvojej <DMLTooltip slug="ram" label="RAM" />{" "}
                      pamäti otvára nekontrolované vlákno pozornosti, čo
                      spôsobuje masívne{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />.
                    </p>
                    <p>
                      Keď dorazíš na pracovisko, tvoje kognitívne porty sú plne
                      vystavené cudzím príkazom. Tvoj šéf, kolegovia a klienti
                      ti bez povolenia zapisujú dáta priamo do podvedomia,
                      pretože tvoj ochranný{" "}
                      <DMLTooltip slug="firewall" label="Firewall" /> je
                      neaktívny a tvoj komunikačný kanál{" "}
                      <DMLTooltip slug="banned_port" label="Banned Port" /> je
                      dokorán otvorený pre cudzí vplyv. Tvoj biologický stroj
                      spotrebováva obrovské množstvo{" "}
                      <DMLTooltip slug="watts" label="Watts" /> na to, aby
                      udržal krok s unifikovaným tempom ostatných zacyklených
                      skafandrov v celom{" "}
                      <DMLTooltip slug="botnet" label="Botnet" />
                      -e. Večer sa vraciaš domov ako energetický prázdny
                      terminál. Zlomený systém sa nedokáže prepnúť do ticha,
                      preto hľadá umelú kompenzáciu – spúšťaš Netflix, sociálne
                      siete alebo otváraš{" "}
                      <DMLTooltip slug="mrtve_knihy" label="Mŕtve knihy" />, čím
                      len ďalej zahlcuješ kognitívnu vyrovnávaciu pamäť a
                      kompletne ničíš prvotný{" "}
                      <DMLTooltip slug="bios" label="BIOS" /> pred ďalším dňom.
                    </p>
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
                      Oslobodenie z tohto deštruktívneho denného zacyklenia
                      vyžaduje radikálny inžiniersky zákrok{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (<DMLTooltip slug="debugging" label="Debugging" />)
                      </span>{" "}
                      and prevzatie zvrchovaných administrátorských práv{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (<DMLTooltip slug="root_access" label="Root Access" />)
                      </span>{" "}
                      nad celým tvojím dňom. Nemôžeš preformátovať realitu
                      zamestnania z večera do rána, no môžeš kompletne
                      prebudovať svoj Personal{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> a urobiť
                      zo svojej mysle nepriestrelný, bezpečný Sandbox.
                    </p>
                    <p
                      className="font-bold uppercase tracking-wider text-xs"
                      style={{ color: DIM_COLOR }}
                    >
                      Tento transformačný proces v tvojom UI Space beží v troch
                      fázach:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Izolácia ranného bootovania:
                        </strong>{" "}
                        Prvá hodina po prebudení patrí strictly tebe. Vypni
                        akékoľvek sieťové pripojenia, uval karanténu na telefón
                        a nekompromisne zablokuj prichádzajúce dátové pakety{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (
                          <DMLTooltip
                            slug="network_packet"
                            label="Network Packet"
                          />
                          )
                        </span>
                        . Udržuj svoj{" "}
                        <DMLTooltip slug="skafander" label="Skafander" /> v
                        tichu, cíť dych a stabilizuj prítomnosť bdelého{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľa" />
                        -a. Týmto činom zabrániš Parazitovi infiltrovať tvoju
                        RAM.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Aktivácia kognitívneho štítu:
                        </strong>{" "}
                        Počas pracovného dňa udržiavaj asertívne, asynchrónne
                        rozhranie. Tvoja{" "}
                        <DMLTooltip slug="persona" label="Persona" /> (pracovná
                        maska) je len tvoj externý skin pre Matrix – tvoja
                        skutočná identita (Svedok) zostáva skrytá v tichom{" "}
                        <DMLTooltip slug="local_host" label="Local Host" />
                        -e na pozadí, kde s úsmevom pozoruje celé to divadlo bez
                        emočnej reaktivity.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Večerné formátovanie cache:
                        </strong>{" "}
                        Pred spaním vykonaj kompletný{" "}
                        <DMLTooltip slug="format_c" label="Format C:" /> pre
                        svoje podvedomie. Vymaž všetky nespracované denné
                        zážitky z vyrovnávacej pamäte, uvoľni{" "}
                        <DMLTooltip slug="ram" label="RAM" /> na 0% and vstúp do
                        spánku ako čistá, zvrchovaná prázdnota.
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
                      Aby tvoja kognitívna kapacita zostala chránená pred
                      každodenným vyčerpaním, musíš do svojho dňa implementovať
                      tri striktné bezpečnostné filtre:
                    </p>
                    <ol className="space-y-4 pl-6 list-decimal text-xs">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Protokol TICHÝ BOOT (Ranná karanténa):
                        </strong>{" "}
                        Prvých 45 minút dňa neotváraj komunikačné kanály.
                        Vykonaj biologickú optimalizáciu – vypi pohár čistej
                        vody, urob kĺbovú rotáciu, stabilizuj prítomnosť a
                        zadefinuj asertívny kód pre celý deň:{" "}
                        <span className="text-[#BF00FF] italic opacity-85">
                          "Keď som, tak som, viem, že som."
                        </span>{" "}
                        Týmto zaistíš bezpečný štart biologického{" "}
                        <DMLTooltip slug="cpu" label="CPU" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívny FIREWALL (Obrana na pracovisku):
                        </strong>
                        <ul className="space-y-2 mt-2 list-disc pl-5">
                          <li>
                            <em>Asynchrónna komunikácia:</em> Reaguj na správy a
                            maily v dávkach, nenechaj sa neustále prerušovať
                            (likvidácia kognitívneho šumu).
                          </li>
                          <li>
                            <em>Vytvorenie Sandboxu:</em> Keď na teba kričí
                            klient alebo šéf, tvoj{" "}
                            <DMLTooltip slug="firewall" label="Firewall" />{" "}
                            zachytí emočný paket, preloží ho ako chybový log ich
                            lokálneho systému a neprepustí ho k tvojmu Rootu.
                          </li>
                          <li>
                            <em>Ochrana energetického napätia:</em> Striktne
                            uzavri komunikačné kanály{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (
                              <DMLTooltip
                                slug="banned_port"
                                label="Banned Port"
                              />
                              )
                            </span>{" "}
                            po 17:00. Žiadna pracovná subrutina nesmie bežať vo
                            tvojom voľnom čase.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Protokol DE-REGISTRÁCIA (Večerný shutdown):
                        </strong>{" "}
                        Pred spaním odpoj všetky obrazovky minimálne hodinu
                        vopred. Spusť manuálny výmaz{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        – predstav si, ako zatváraš všetky otvorené procesy,
                        uvoľňuješ <DMLTooltip slug="ram" label="RAM" /> na
                        absolútnu nulu a odovzdávaš svoj{" "}
                        <DMLTooltip slug="skafander" label="Skafander" />{" "}
                        hlbokej regenerácii bez statického šumu.
                      </li>
                    </ol>
                    <p className="mt-4">
                      Tieto tri kroky ti zabezpečia stabilný chod tvojej{" "}
                      <DMLTooltip slug="cesta_nepraxe" label="Cesta nePraxe" />{" "}
                      uprostred matrixového chaosu.
                    </p>
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
              Tvoj každodenný program beží v nekonečnej, neefektívnej slučke
              cudzích úloh a tvoj biologický Skafander stráca drahocenné
              kognitívne cykly. Je čas preformátovať tvoj denný boot sequence a
              prebrať Root Access.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-left border-t border-gray-800/40 pt-4 space-y-2">
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🔑 INICIALIZOVAŤ SPOJENIE: AKTIVOVAŤ NEXUS PRO KEY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Odomkni kompletné zvrchované porty, vyčisti zanesenú
                  vyrovnávaciu pamäť a naštartuj ochranné ranné a večerné
                  filtre.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Vstúp do hlavnej riadiacej jednotky OS Genesis, stabilizuj
                  svoje biologické CPU a zlikviduj autopiloting raz a navždy.
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
