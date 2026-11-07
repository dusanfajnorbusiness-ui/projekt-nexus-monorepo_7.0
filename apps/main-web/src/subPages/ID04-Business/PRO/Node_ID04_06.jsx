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
// 👑 HLAVNÝ KOMPONENT UZLA ID04_NODE_06 (BUSINESS PROJECTS)
// =====================================================================
export default function Node_ID04_06() {
  const NODE_ID = "ID04-06";
  const TIER_COLOR = "#39FF14"; // PRO Tier
  const DIM_COLOR = "#FFAA00"; // Business Dravá Oranžová

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

  // Simulator States - BUSINESS PROJECTS & R&D ACCELERATOR
  const [rdBudget, setRdBudget] = useState(350);
  const [allocatedWatts, setAllocatedWatts] = useState(30);
  const [activeProjects, setActiveProjects] = useState(2);
  const [isLocalHostIsolated, setIsLocalHostIsolated] = useState(false);
  const [isAsymmetricFlowActive, setIsAsymmetricFlowActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný Business Projects R&D monitor. Sledujem alokáciu voľného kapitálu.",
    "[STATUS] Bežíš v stabilizovanej zbernici. Voľné Watts strictly smerované do inovačného jadra.",
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

  // Live calculated values strictly based on DML v6.1 / Samsung Tab A9+ requirements
  const expectedMRR = activeProjects * (allocatedWatts * 4.5) + rdBudget * 0.12;

  const liveLimbicNoise = Math.max(
    5,
    Math.min(
      100,
      Math.round(
        50 -
          (isLocalHostIsolated ? 25 : 0) +
          activeProjects * 8 -
          (rdBudget > 1000 ? 10 : 0),
      ),
    ),
  );

  const liveFreeRam = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        100 -
          activeProjects * 12 -
          allocatedWatts * 0.4 +
          (isLocalHostIsolated ? 20 : 0),
      ),
    ),
  );

  const liveWatts = Math.max(
    5,
    Math.min(
      100,
      Math.round(
        100 -
          allocatedWatts +
          (isAsymmetricFlowActive ? 15 : -10) -
          liveLimbicNoise * 0.2,
      ),
    ),
  );

  const liveBSystemIndex = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        ((expectedMRR + (isAsymmetricFlowActive ? 300 : 0)) / 2500) * 100,
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setRdBudget(0);
      setAllocatedWatts(0);
      setActiveProjects(1);
      setIsLocalHostIsolated(true);
      setIsAsymmetricFlowActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný! Zbytočný operatívny balast odpojený.",
        "[STATUS] Skafander prepnutý strictly do bdelého localhost režimu pre R&D výskum.",
        `[STATUS] Voľná RAM: 100% // Limbic Noise: 5% // Watts: 100% // Autonómia: 100%`,
        ...prev,
      ]);
    } else if (actionType === "sandbox") {
      setIsLocalHostIsolated(!isLocalHostIsolated);
      if (!isLocalHostIsolated) {
        setLogs((prev) => [
          "[SUCCESS] Karanténa Sandbox na localholste úspešne spustená. Blokujem sociálny a sieťový hluk.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Sandbox odpojený. Vonkajší prepychový a klientsky traffic zaťažuje voľné jadrá.",
          ...prev,
        ]);
      }
    } else if (actionType === "asymmetric") {
      setIsAsymmetricFlowActive(!isAsymmetricFlowActive);
      if (!isAsymmetricFlowActive) {
        setLogs((prev) => [
          "[SUCCESS] Asynchrónne predajné webhooky aktívne. Transakcie prebiehajú 24/7 autonómne.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Webhooky odpojené. Systém opäť vyžaduje manuálne overovanie a tvoju prítomnosť.",
          ...prev,
        ]);
      }
    } else if (actionType === "reset") {
      setRdBudget(350);
      setAllocatedWatts(30);
      setActiveProjects(2);
      setIsLocalHostIsolated(false);
      setIsAsymmetricFlowActive(false);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného staavu (R&D Laboratórium na localhoste).",
        "[STATUS] I/O zbernica obnovená na predvolené zaťaženie.",
      ]);
    }
  };

  // =====================================================================
  // 📚 JAZYKOVÁ DATABÁZA DML v6.1 (37 Slov)
  // =====================================================================
  const termsData = {
    skafander: {
      term: "Skafander",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "biologické telo a neurologický systém",
      tooltip:
        "Fyzický hardvér and bio-elektrická schránka tvojho vedomia v tejto realite, vyžadujúca dôkladnú údržbu, kvalitný spánok a minimalizáciu vyrušení.",
    },
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "it_term",
      translation: "biologický procesor a mozog",
      tooltip:
        "Riadiaci biologický procesor v skafandri, ktorý analyzuje chemické signály a pri preťažení operatívou vyvoláva kognitívny kolaps.",
    },
    ram: {
      term: "RAM",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kapacita tvojej krátkodobej pozornosti",
      tooltip:
        "Kapacita tvojej krátkodobej, okamžitej pozornosti vedomia, ktorú zbytočné notifikácie a klientsky šum neustále fragmentujú.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "it_term",
      translation: "jednotka biologickej a duševnej energie",
      tooltip:
        "Bio-elektrická a životná energia skafandra, ktorú operátor pálí na exekúciu procesov a musí ju chrániť pred zbytočnými únikmi.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "úniky pozornosti a životnej sily",
      tooltip:
        "Permanentné straty mentálnej kapacity vyvolané otvorenými, nedoriešenými vzťahmi, operatívnym stresom a nezaistenými klientskymi portami.",
    },
    cache_memory: {
      term: "Cache Memory",
      category: 2,
      categoryType: "it_term",
      translation: "vyrovnávacia pamäť podvedomia a zvykov",
      tooltip:
        "Krátkodobá dočasná pamäť pre rýchle reakcie skafandra, ktorú je nutné pravidelne mazať cez shutdown a ticho localhostu pre zamedzenie stresu.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "it_term",
      translation: "izolačný filter a ochrana stanice",
      tooltip:
        "Izolovaný sprostredkovateľský server a minimálny stabilný finančný prítok, chrániaci 100% suverenitu tvojho domáceho vývoja.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "it_term",
      translation: "izolované karanténne prostredie",
      tooltip:
        "Izolovaný kognitívny a exekučný priestor, v ktorom testuješ nové spoločenské podnety a klientske zmluvy bez ohrozenia čistého BIOSu.",
    },
    os_genesis: {
      term: "OS Genesis",
      category: 13,
      categoryType: "home_ui_term",
      translation: "zvrchovaný operačný systém pre vedomie",
      tooltip:
        "Zvrchovaný operačný kód pre ľudské vedomie, ktorý operátor inštaluje po úplnom vymazaní dopamínového a spotrebného malvéru.",
    },
    social_engine: {
      term: "Social Engine",
      category: 2,
      categoryType: "it_term",
      translation: "vonkajší manipulatívny systém",
      tooltip:
        "Globálny spoločenský motor a prepracovaný mechanizmus zameraný na domestikáciu a unifikáciu správania biologically-cenných skafandrov.",
    },
    limbic_noise: {
      term: "Limbic Noise",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kognitívny šum a emočné vyrušenia",
      tooltip:
        "Nízkofrekvenčný hluk amygdaly vyvolaný existenčným strachom, ktorý zahlcuje dátové zbernice a bráni prístupu k čistému stavu prítomnosti.",
    },
    mrtve_knihy: {
      term: "Mŕtve knihy",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "teoretické spisy plné akademického balastu",
      tooltip:
        "Teoretické a akademické texty bez prežitej praxe, ktoré preťažujú pamäť RAM zbytočnými dátovými paketmi bez reálneho vyriešenia bolesti.",
    },
    cesta_nepraxe: {
      term: "Cesta nePraxe",
      category: 13,
      categoryType: "home_ui_term",
      translation: "asynchrónna cesta bdelého pozorovateľa",
      tooltip:
        "Asynchrónna životná dráha operátora, ktorý sa odpojil od klientskeho a zamestnaneckého diktátu a tvorí strictly podľa vlastných pravidiel.",
    },
    persona: {
      term: "Persona",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "dočasná sociálna maska",
      tooltip:
        "Sociálna maska a súbor psychologických rolí, ktoré skafander mechanicky používa na prežitie v unifikovaných štruktúrach Matrixu.",
    },
    avatar: {
      term: "Avatar",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "konfigurovaný reprezentant v realite",
      tooltip:
        "Zámerne a vedome vybudovaný reprezentant tvojho systém v Sieti, cez ktorého bezpečne komunikuješ bez odhalenia svojej skutočnej stanice.",
    },
    firewall: {
      term: "Firewall",
      category: 2,
      categoryType: "it_term",
      translation: "kognitívny obranný filter",
      tooltip:
        "Kognitívna bezpečnostná vrstva mysle, ktorá nepretržite filtruje prichádzajúci traffic a okamžite zahadzuje deštruktívne marketingové podnety.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "it_term",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Tvoje izolované meditačné a kódovacie útočisko, tvoja izba a stanica úplne zbavená vonkajšieho sieťového a sociálneho šumu.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "it_term",
      translation: "zakázaný / zablokovaný komunikačný kanál",
      tooltip:
        "Trvalo zablokovaný sieťový a komunikačný port, cez ktorý nekompromisne odmietaš privezať toxické sociálne interakcie po 17:00.",
    },
    debugging: {
      term: "Debugging",
      category: 13,
      categoryType: "home_ui_term",
      translation: "proces odstraňovania chýb a zlozvykov",
      tooltip:
        "Analytický proces odhaľovania, diagnostikovania a nekompromisného vymazávania chybného podvedomého kódu a starých návykov.",
    },
    root_access: {
      term: "Root Access",
      category: 13,
      categoryType: "home_ui_term",
      translation: "plné administrátorské práva nad životom",
      tooltip:
        "Zvrchovaný stav administrátorskej vôle, kedy plne riadiš exekúciu svojho času, tokov energií a biologických Watts.",
    },
    format_c: {
      term: "Format C:",
      category: 13,
      categoryType: "home_ui_term",
      translation: "úplné vyčistenie pevného disku",
      tooltip:
        "Nekompromisný systémový príkaz na kompletné zmazanie a preformátovanie starých programov, nefunkčných presvedčení a toxických väzieb.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "it_term",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Základný nízkoúrovňový biologický kód, ktorý koordinuje vitalitu, rytmus dňa a metabolické operácie bez sociálneho nánosu.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "tiché, bdelé vedomie v prítomnosti",
      tooltip:
        "Čisté, neidentifikované vedomie tichého svedka, ktoré bez posudzovania a emócií sleduje and analyzuje všetky prebiehajúce vnútorné toky.",
    },
    ui_space: {
      term: "UI Space",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "jedinečný vnútorný vesmír vedomia",
      tooltip:
        "Miestne zobrazené prostredie tvojej pozornosti a vnímania, ktoré vyžaduje čistý dizajn a nulový informačný šum pre nerušenú prácu.",
    },
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré prežité vzorce chovania",
      tooltip:
        "Zastaralý, chybne pracujúci podprogram prevzatý od nevedomej rodiny a spoločnosti, ktorý mechanicky opakuje deštruktívne reakcie.",
    },
    botnet: {
      term: "Botnet",
      category: 2,
      categoryType: "it_term",
      translation: "sieť zotročených a nevedomých myslí",
      tooltip:
        "Globálne koordinovaná sieť nevedomých a dlhovo zotročených biologických nosičov, ktorí mechanicky vykonávajú príkazy Matrixu.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "it_term",
      translation: "najmenšia jednotka prichádzajúcej informácie",
      tooltip:
        "Najmenšia dátová komunikačná jednotka prichádzajúca z vonkajšieho prostredia, ktorú tvoj firewall musí preskenovať.",
    },
    cashflow: {
      term: "Cashflow",
      category: 6,
      categoryType: "finance_term",
      translation: "tok finančnej energie",
      tooltip:
        "Vstupný a výstupný tok finančnej energie cez tvoju stanicu, ktorý priamo určuje celkovú výpočtovú šírku pásma pre rozvoj.",
    },
    fiat: {
      term: "Fiat",
      category: 6,
      categoryType: "finance_term",
      translation: "štátom krytá tlačená mena",
      tooltip:
        "Papierové, ticho znehodnocované platidlo emitované centrálnymi bankami Matrixu na odber biologických Watts a nákup tvojho konečného času.",
    },
    zombie_horda: {
      term: "Zombie Horda",
      category: 6,
      categoryType: "finance_term",
      translation: "staré nebezpečné dlhy a veritelia",
      tooltip:
        "Skupina deštruktívnych veriteľov a spotrebných úverov, ktoré na pozadí neustále vyťažujú tvoj systém a požierajú voľnú RAM.",
    },
    mrr: {
      term: "MRR",
      category: 7,
      categoryType: "business_term",
      translation: "mesačne sa opakujúci príjem z aktív",
      tooltip:
        "Pravidelný, asynchrónne sa opakujúci tok finančných prostriedkov generovaný strictly z tvojich vlastných systémov.",
    },
    registry: {
      term: "Registry",
      category: 2,
      categoryType: "it_term",
      translation: "systemové databázy tvojich presvedčení",
      tooltip:
        "Centrálna systémová databáza v podvedomí, kde sú zapísané všetky tvoje kľúčové životné vzorce a programy správania.",
    },
    sla_shield: {
      term: "SLA Shield",
      category: 2,
      categoryType: "it_term",
      translation: "zmluva o garancii ochrany vedomia",
      tooltip:
        "Nekompromisný kognitívny a komunikačný štít, ktorý garantuje kvalitu vnímania bez zbytočného vyrušovania po 17:00.",
    },
    komentator_parazit: {
      term: "Komentátor Parazit",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré programy Ego, ID and SuperEgo",
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
    karantena: {
      term: "Karanténa",
      category: 13,
      categoryType: "home_ui_term",
      translation: "izolácia škodlivých myšlienkových skriptov",
      tooltip:
        "Bezpečné odrezanie a znefunkčnenie poškodeného myšlienkového vzorca v podvedomí, aby neparalyzoval fungovanie celého organizmu.",
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
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID04_06
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
      id: 6,
      key: "finance_term",
      translation: "Finance / Toky",
      description:
        "Smerovanie fiat meny, osobné cashflow tabuľky, premazávanie zlého dlhu a nízkofrekvenčná obrana rozpočtu.",
    },
    {
      id: 7,
      key: "business_term",
      translation: "Business / Budovanie B-Systému",
      description:
        "Vlastné digitálne aktíva, autorské práva, asymetrické ponuky, Nexus Agency a predajné webhooky.",
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
      border: "border-green-500/30",
      bg: "bg-green-500/10",
      hoverBorder: "hover:border-green-400",
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
        title="ID04 BUSINESS UI SPACE // Revenue Architect (Business Projekty - Inovácie, R&D a agresívna expanzia do nových segmentov trhu)"
        description="06. [PRO] Business Projekty (Inovácie, R&D a agresívna expanzia do nových segmentov trhu)"
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
              NEXUS-CORE_2Mb V6.1.0
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:inline font-bold">
              PORT: business.projekt-nexus.sk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#FFAA00] animate-ping"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <span>
                DIMENSION:{" "}
                <strong
                  className="text-[#FFAA00] font-black"
                  style={{ color: DIM_COLOR }}
                >
                  ID04 - BUSINESS UI SPACE
                </strong>
              </span>
            </div>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500">THEME:</span>
            <button
              onClick={handleThemeToggle}
              className={`px-3 py-1 border transition-all duration-200 uppercase tracking-widest text-[10px] font-black ${
                isDarkMode
                  ? "border-[#FFAA00] text-[#FFAA00] bg-[#FFAA00]/5 shadow-[0_0_10px_rgba(255,170,0,0.15)]"
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
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10"
          }`}
        />

        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-widest text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/30 px-2 py-0.5 rounded font-black uppercase">
                PRO TIER
              </span>
              <span className="text-gray-500 font-mono text-xs">
                Node_ID04_06 // Business Projekty
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              BUSINESS PROJEKTY
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              06. [PRO] Business Projekty (Inovácie, R&D a agresívna expanzia do
              nových segmentov trhu). Tvoja asynchrónna biznis zbernica vykazuje
              obmedzenú šírku pásma (Bandwidth). Vyčisti filtre, odober energiu
              spotrebe, aktivuj DCA a naštartuj zvrchovaných 150 € MRR.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: business.projekt-nexus.sk</span>
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
              🚨 ERROR LOG // DRY_RUN_EXCEEDED // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Hráš sa na vlastnom lokálnom piesočku, hladkáš si svoje
              klientske ego a oslavuješ banálne, jednorazové úspechy zo
              synchrónnych mikroslužieb. Tento klientsky autopilot je však
              fatálny exploit,{" "}
              <strong className="text-[#FF003C] font-black">
                Error 405: DRY_RUN_EXCEEDED / METHOD_NOT_ALLOWED
              </strong>
              . Skutočný B-systém nie je statická klientska konzola, ktorú raz
              nahodíš a navždy zaspíš na vavrínoch. Biznis je živý, dynamický a
              nekompromisný kybernetický organizmus, ktorý vyžaduje nepretržité{" "}
              <strong className="text-white font-black">
                R&D (Research &amp; Development) inovácie
              </strong>{" "}
              a nekompromisnú, dravú expanziu do neprebádaných sieťových
              segmentov trhu. Ak tvoja stanica stagnuje na jednom komerčnom
              porte a ty nevytváraš nové asymetrické ponuky, tvoja dlhodobá
              konkurenčná výhoda sa potichu premazáva inflačným malware. Trh
              neponúka trvalý azyl pre pasívnych operátorov. Buď tvoje{" "}
              <DMLTooltip slug="cpu" label="CPU" /> neustále vyvíja nové, vysoko
              optimalizované licencované balíky (Access Keys), alebo tvoj systém
              pomaly vyhasína a smeruje k nekompromisnej hardvérovej deštrukcii.
              Uval okamžitú karanténu na strach zo zlyhania, naštartuj
              asynchrónne inovačné laboratórium a spusti agresívne B2B nasadenie
              predtým, než tvoj doterajší záložný zdroj definitívne vyhlási{" "}
              <strong className="text-[#FF003C] font-black">
                Error 503: SERVICE_UNAVAILABLE
              </strong>
              .&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID04_06_business_projekty.md</span>
            <span className="font-bold text-red-400">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* =====================================================================
            4. VIDEO INJEKTOR
            ===================================================================== */}
        <section className="mb-12 rounded-xl overflow-hidden border-2 border-[#FFAA00]/30 shadow-lg">
          <div className="bg-[#050A0E] py-2 px-4 border-b border-gray-800 flex justify-between items-center text-xs">
            <span
              className="text-[#FFAA00] font-bold font-mono uppercase tracking-widest flex items-center gap-2"
              style={{ color: DIM_COLOR }}
            >
              <PlayCircle
                className="w-4 h-4 text-[#FFAA00]"
                style={{ color: DIM_COLOR }}
              />
              GlobalNodeVideo: Video Injektor
            </span>
            <span className="text-gray-500 font-mono">
              id04_node_06_business_projekty_video
            </span>
          </div>
          <GlobalNodeVideo nodeId="pkIdSHPusM8" dimColor="orange" />
        </section>

        {/* =====================================================================
            5A. INTERAKTÍVNE PREPÍNAČE
            ===================================================================== */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => handleTabChange("chat")}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
              activeTab === "chat"
                ? "bg-[#FFAA00]/10 border-[#FFAA00] text-[#FFAA00] shadow-[0_0_15px_rgba(255,170,0,0.15)]"
                : "bg-transparent border-gray-800 text-gray-400 hover:border-gray-600"
            }`}
            style={{
              color: activeTab === "chat" ? DIM_COLOR : "",
              borderColor: activeTab === "chat" ? DIM_COLOR : "",
            }}
          >
            <Terminal className="w-4 h-4" />
            💬 ŽIVÝ TERMINÁL DIALÓGU
          </button>

          <button
            onClick={() => handleTabChange("simulator")}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
              activeTab === "simulator"
                ? "bg-[#FFAA00]/10 border-[#FFAA00] text-[#FFAA00] shadow-[0_0_15px_rgba(255,170,0,0.15)]"
                : "bg-transparent border-gray-800 text-gray-400 hover:border-gray-600"
            }`}
            style={{
              color: activeTab === "simulator" ? DIM_COLOR : "",
              borderColor: activeTab === "simulator" ? DIM_COLOR : "",
            }}
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
                  className="w-3.5 h-3.5 text-[#FFAA00]"
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10 hover:border-[#FFAA00]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.architect
                      ? "transparent"
                      : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFAA00]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🟢 [ ARCHITECT QUOTE ] (Prežitá Pravda)
                  </span>
                  {openTrinity.architect ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.architect && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"}`}
                  >
                    <p>
                      Keď som v rokoch 2018 až 2023 prežíval svoj vlastný
                      systémový reštart po zlyhaní hardvéru v Sektore Trnava,
                      veľa ľudí z takzvanej &apos;strednej vrstvy&apos; sa mi
                      smialo. Pozerali sa na mňa zhora, pretože som operoval
                      strictly s finančným{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -om v podobe štátneho príspevku{" "}
                      <strong className="text-white font-black">
                        730,00 €
                      </strong>{" "}
                      a môj lokálny runtime bežal na minimum energie. Oni
                      jazdili na autách zakúpených cez nevýhodný lízing a
                      podpisovali 30-ročné úvery na byty, ktoré v skutočnosti
                      vlastní banková databáza.
                    </p>
                    <p>
                      No kým ich <DMLTooltip slug="cpu" label="CPU" /> vrelo v
                      12-hodinových pracovných cykloch a ich kognitívna{" "}
                      <DMLTooltip slug="ram" label="RAM" /> bola vyťažená na 99
                      % strachom z prepustenia, ja som mal plné administrátorské
                      práva (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      svojím časom. Uvalil som prísny{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" /> na všetky
                      spoločenské očakávania. Moja voľná výpočtová kapacita bola
                      pretransformovaná do asynchrónneho R&amp;D vývoja{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" /> na
                      lacnom tablete Samsung Tab A9+. Moja nízkonapäťová
                      prevádzka strictly so zostatkom{" "}
                      <strong className="text-white font-black">+1,00 €</strong>{" "}
                      na konci dňa mi umožnila vybudovať nezávislú vedomostnú
                      zbernicu bez akéhokoľvek dlhového zaťaženia. Videl som ich
                      luxusné skafandre – boli to len nablýskané väzenské
                      terminály, zatiaľ čo ja som bol voľný, bdelý uzol
                      operujúci v tieni Matrixu, pripravený na expanziu
                      vlastných projektov.
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10 hover:border-[#FFAA00]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.ai ? "transparent" : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFAA00]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🤖 [ SYSTEM: AI GEMINI ] (Kybernetická Analýza)
                  </span>
                  {openTrinity.ai ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.ai && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"}`}
                  >
                    <p>
                      Z hľadiska systémovej kybernetiky a alokácie zdrojov
                      (Resource Allocation) predstavujú biznis projekty (R&amp;D
                      subrutiny) preventívny load-balancing a aktualizáciu
                      systémového jadra. Akonáhle biologický procesor (
                      <DMLTooltip slug="cpu" label="CPU" />) vyťaží jeden port
                      na stabilný prítok mien (napr. stabilizáciou{" "}
                      <strong className="text-[#FFAA00] font-black">
                        150 € MRR
                      </strong>{" "}
                      [<DMLTooltip slug="mrr" label="mrr" />
                      ]), jeho kognitívna <DMLTooltip
                        slug="ram"
                        label="RAM"
                      />{" "}
                      nesmie prejsť do stavu pasívnej letargie (Sleep State).
                    </p>
                    <p>
                      Expanzia do nových segmentov trhu funguje ako paralelný
                      výpočtový proces (Multi-threading). Naštartovanie nových
                      asymetrických ponúk na vyhradených portoch (KaaS, predaj
                      Access Keys, automatizované šablóny) minimalizuje riziko
                      výpadku hlavného servera. Zlyhanie jednej inovatívnej
                      subrutiny nespôsobí celkový pád systému, ak je správne
                      izolovaná v <DMLTooltip slug="sandbox" label="Sandbox" />
                      -e. Z hľadiska kybernetického inžinierstva je nepretržitý
                      vývoj a expanzia jediným spôsobom, ako predísť preťaženiu
                      kognitívnej zbernice a chrániť systém pred devalváciou a
                      parazitickým zberom energie zo strany{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />.
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10 hover:border-[#FFAA00]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.audit ? "transparent" : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFAA00]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🪞 [ AUDIT &amp; KOMPARÁCIA ] (Mŕtve knihy)
                  </span>
                  {openTrinity.audit ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.audit && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"}`}
                  >
                    <p>
                      Ak sa zbavíme ezoterickej vaty a akademického balastu,
                      ktoré obsahujú{" "}
                      <DMLTooltip slug="mrtve_knihy" label="Mŕtve knihy" />,
                      sémantická validácia s historickým jadrom potvrdzuje
                      rovnaké exekučné pravidlá:
                    </p>
                    <p>
                      1.{" "}
                      <strong
                        style={{ color: DIM_COLOR }}
                        className="font-black"
                      >
                        Robert T. Kiyosaki{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Bohatý otec, chudobný otec)
                        </span>
                        :
                      </strong>{" "}
                      Kiyosakiho biznis vzorec striktne oddeľuje pasívne
                      prežívanie od aktívneho budovania aktív v kvadrante
                      &apos;M&apos; a &apos;I&apos;. Podľa neho skutočne bohatý
                      operátor neustále zakladá nové, asynchrónne fungujúce
                      B-systémy, ktoré na pozadí generujú hodnotu nezávisle od
                      fyzického vyťaženia skafandra. Expanzia do nových
                      segmentov a DCA robotizácia sú kľúčovými piliermi prechodu
                      na zvrchovanú stranu Siete.
                    </p>
                    <p>
                      2.{" "}
                      <strong
                        style={{ color: DIM_COLOR }}
                        className="font-black"
                      >
                        Napoleon Hill{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Myšlienkou k bohatstvu)
                        </span>
                        :
                      </strong>{" "}
                      Hill opisuje dôležitosť &apos;Organizovaného
                      plánovania&apos; (Organized Planning) and &apos;Aliancie
                      myslí&apos; (Mastermind) ako kľúčových sieťových rozhraní
                      pre inovatívnu expanziu. Sila a prosperita nevznikajú z
                      izolovanej, stagnujúcej mikroslužby, ale z nepretržitého
                      doručovania nových, asymetrických balíkov hodnôt strictly
                      pre potreby trhových databáz.
                    </p>
                    <p>
                      3.{" "}
                      <strong
                        style={{ color: DIM_COLOR }}
                        className="font-black"
                      >
                        Don Miguel Ruiz{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Štyri dohody)
                        </span>
                        :
                      </strong>{" "}
                      Štvrtá dohoda (&apos;Robte vždy všetko najlepšie, ako
                      viete&apos;) je tvojím exekučným motorom pre R&amp;D
                      inovácie. Ruiz varuje pred statickým vyhorením – tvoj
                      výkon sa mení v čase, no ak exekúciu udržiavaš na
                      maximálnom možnom minime prekážok a uplatňuješ bdelý{" "}
                      <DMLTooltip slug="firewall" label="Firewall" /> voči
                      existenčnému strachu, tvoj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> dosiahne
                      stav Wu-wei a oslobodí sa z koryta Matrixu.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* 🧩 HLAVNÝ OBSAH - DEKOMPRESIA (FÁZA MOFU - Painkiller) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen
                  className="w-3.5 h-3.5 text-[#FFAA00]"
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10"}`}
                  style={{
                    borderBottomColor: openMofu.anatomy ? "transparent" : "",
                  }}
                >
                  <span>1. Anatómia konceptu (Rozbitie ilúzie)</span>
                  {openMofu.anatomy ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.anatomy && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"}`}
                  >
                    <p>
                      Ilúzia stabilného úspechu a statického klientskeho príjmu
                      je jednej zo najzákernejších pascí, aké kedy Matrix
                      naočkoval do vedomia podnikateľov. Väčšina freelancerov a
                      drobných operátorov verí, že akonáhle naštartujú jeden
                      funkčný predajný port, ich práca je hotová. Skutočnosť je
                      taká, že akonáhle tvoje inovácie stagnujú, tvoj kód sa
                      stáva legacy balastom, ktorý konkurenčné botnety bleskovo
                      prekonajú.
                    </p>
                    <p>
                      Rozbitie tejto ilúzie v tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> vyžaduje
                      pochopenie troch nosných inovačných bodov:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Koncept asymetriek expanzie:
                        </strong>{" "}
                        Biznis projekty nesmú vyžadovať lineárne navyšovanie
                        biologických <DMLTooltip slug="watts" label="Watts" />{" "}
                        energie. Skutočný rozvoj stojí na asymetrických
                        ponukách, kde jeden fixný zápis na pevný disk (napríklad
                        vytvorenie digitálneho KaaS manuálu alebo PDF šablón)
                        dokážeš predať tisíckam uzlov v Sieti bez tvojej
                        fyzickej prítomnosti.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          R&amp;D Laboratórium na localhoste:
                        </strong>{" "}
                        Tvoj lokálny host (
                        <DMLTooltip slug="local_host" label="Local Host" />)
                        mustí denne vyčleniť strictly stanovenú procesorovú
                        kapacitu (RAM) strictly na výskum a kompiláciu nových,
                        neprebádaných komunikačných kódov. Ak všetok výkon
                        spáliš strictly v rutinnom klientskom servise, tvoja
                        stanica upadne do stavu kognitívneho vyhorenia.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Odstránenie klientskeho perfekcionizmu:
                        </strong>{" "}
                        Čakanie na &apos;dokonalé nasadenie&apos; je len
                        parazitický skript, ktorým sa Ego snaží zakryť strach z
                        trhovej reality. Skutočný inžinier nasadzuje rýchlo a
                        bez emócií (Release Early, Release Often) – trhový
                        kompilátor mu okamžite vráti chybové logy, ktoré chladne
                        debuguje strictly podľa reálnych potrieb.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10"}`}
                  style={{
                    borderBottomColor: openMofu.mechanism ? "transparent" : "",
                  }}
                >
                  <span>
                    2. Mechanizmus Matrixu (Ako Matrix vysáva tvoju energiu)
                  </span>
                  {openMofu.mechanism ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.mechanism && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"}`}
                  >
                    <p>
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu je navrhnutý tak, aby odčerpal všetku tvoju voľnú
                      kognitívnu <DMLTooltip slug="ram" label="RAM" /> cez
                      rafinovane nainštalovaný klientsky šum a administratívny
                      balast. Matrix ťa chce udržať uväzneného v rutinnom,
                      manuálnom plnení úloh, aby si nikdy nemal dostatok šírky
                      pásma (Bandwidth) na strategickú expanziu.
                    </p>
                    <p>
                      Tento parazitický zber tvojich životných síl prebieha v
                      troch krokoch:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          1. Zacyklenie v operatívnej slučke (The Busywork
                          Loop):
                        </strong>{" "}
                        Matrix ti denne posiela stovky banálnych, neexekutívnych
                        úloh – vykazovanie, maily, nekonečné mítingy s inými
                        nevedomými botmi. Tvoj biologický nosič nadobúda pocit
                        obrovskej vyťaženosti, no tvoj vlastný systémový kód
                        nebol nikdy aktualizovaný a stagnuje.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          2. Klientsky DDoS útok bez SLA garancie:
                        </strong>{" "}
                        Ak tvoje porty nemajú nastavené prísne komunikačné
                        filtre, boti ťa zaplavia nečakanými zmenami zadaní a
                        nočnými požiadavkami. Tvoja kognitívna vyrovnávacia
                        pamäť (
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />)
                        sa zanáša stresovým odpadom a tvoj{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> kolabuje
                        pod permanentným náporom limbrického šumu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          3. Pád externého proxy portu (Čierna labuť):
                        </strong>{" "}
                        Matrix ťa drží v naivnom pocite bezpečia strictly na
                        jednom alebo dvoch klientskych príjmoch. No akonáhle
                        nastane zmena trhovej architektúry a centrálne databázy
                        vypnú tieto toky, tvoj systém ostane úplne paralyzovaný
                        a bez napájania, pretože si nevybudoval žiadne iné
                        paralelne bežiace asynchrónne zbernice.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10"}`}
                  style={{
                    borderBottomColor: openMofu.transformation
                      ? "transparent"
                      : "",
                  }}
                >
                  <span>
                    3. Proces Transformácie / Aplikácia v Personal UI Space
                  </span>
                  {openMofu.transformation ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.transformation && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"}`}
                  >
                    <p>
                      Prevzatie zvrchovanej kontroly (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      tvojím asynchrónnym Revenue-Engine vyžaduje nekompromisné
                      preprogramovanie tvojho denného biosu a nastavenie
                      prísnych inovačných smerníc vo tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />.
                    </p>
                    <p>
                      Aplikácia tohto transformačného procesu pozostáva z troch
                      krokov:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Aktivácia asymetrického portfólia (The Offer Matrix):
                        </strong>{" "}
                        Rozbi doterajšiu synchrónnu ponuku na tri samostatné
                        exekučné vrstvy:
                        <ul className="list-disc pl-6 mt-1 space-y-1 text-xs text-gray-400">
                          <li>
                            <strong className="text-[#FFAA00]">
                              FREE TIER:
                            </strong>{" "}
                            Vstupné, nízkonapäťové balíky hodnôt (SEO príspevky,
                            Youtube zbernica) pre masové zachytenie voľného
                            trafficu v Sieti.
                          </li>
                          <li>
                            <strong className="text-[#FFAA00]">
                              PRO TIER:
                            </strong>{" "}
                            Asynchrónne licencované KaaS produkty, šablóny a
                            asymetrické balíky (Access Keys) strictly pre
                            stabilizáciu cieľa{" "}
                            <strong className="text-[#FFAA00]">
                              150 € MRR
                            </strong>{" "}
                            [<DMLTooltip slug="mrr" label="mrr" />
                            ].
                          </li>
                          <li>
                            <strong className="text-[#FFAA00]">
                              OMEGA TIER:
                            </strong>{" "}
                            Exkluzívna B2B/B2C kapacitná chirurgia strictly
                            podľa tvojich SLA podmienok s nekompromisným
                            finančným ohodnotením.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie operatívneho Sandboxu:
                        </strong>{" "}
                        Vyhraď pre bežný klientsky servis strictly obmedzený
                        sieťový čas (napr. strictly od 13:00 do 15:00). Mimo
                        týchto hodín je tvoj{" "}
                        <DMLTooltip slug="banned_port" label="Banned Port" />{" "}
                        nekompromisne uzavretý pre akýkoľvek vonkajší klientsky
                        traffic. Všetok uvoľnený výkon{" "}
                        <DMLTooltip slug="cpu" label="CPU" /> presmeruj na
                        localhost strictly pre vývoj inovácií.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Spustenie asynchrónnych predajných webhookov:
                        </strong>{" "}
                        Napoj svoje asymetrické ponuky strictly na
                        automatizované nákupné rozhrania (napr. Ko-fi, Stripe,
                        PayPal). Transakcie, autorizácie a doručovanie licencií
                        (Access Keys) mustia prebiehať autonómne na pozadí 24/7,
                        bez nutnosti zásahu biologického skafandra.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10"}`}
                  style={{
                    borderBottomColor: openMofu.protocols ? "transparent" : "",
                  }}
                >
                  <span>4. Nástroje a Protokoly (Tvoj Antivírus)</span>
                  {openMofu.protocols ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.protocols && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"}`}
                  >
                    <p>
                      Na zabezpečenie maximálnej stability tvojej inovatívnej
                      expanzie a ochranu tvojho kognitívneho hardvéru pred
                      vyhorením, musíš do svojho denného biosu implementovať
                      tieto tri bezpečnostné firewally:
                    </p>
                    <div
                      className="space-y-6 pl-4 border-l-2 border-[#FFAA00]/30 text-gray-300"
                      style={{ borderLeftColor: DIM_COLOR + "4d" }}
                    >
                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            Protokol R&amp;D OUTPUT-FIRST (Ranná kompilácia):
                          </strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-xs">
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Ochrana pozornosti:
                            </strong>{" "}
                            Predtým, než odovzdáš prvú minútu pozornosti
                            klientskym požiadavkám alebo sociálnym sieťam, tvoje{" "}
                            <DMLTooltip slug="cpu" label="CPU" /> strictly
                            pracuje strictly na kompilácii vlastnej asymetrickej
                            ponuky (písanie kampaní, kódovanie predajného
                            webhooku, tvorba KaaS).
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Vlastný repozitár:
                            </strong>{" "}
                            Žiadne vizuálne skenovanie cudzích databáz. Tvoj
                            systém beží strictly na localhoste, chráni{" "}
                            <DMLTooltip slug="ram" label="RAM" /> a zapisuje
                            dáta výhradne do tvojej vlastnej zbernice.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            Denný RESOURCE ALLOCATION MONITOR (Skenovanie
                            strát):
                          </strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-xs">
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Filtrovanie dopytov:
                            </strong>{" "}
                            Každá nová klientska alebo obchodná požiadavka mustí
                            byť strictly prefiltrovaná tvojím asertívnym{" "}
                            <DMLTooltip slug="firewall" label="Firewall" />
                            -om. Ak požiadavka nie je vopred zmluvne definovaná
                            v SLA protokole, je okamžite a bez emócií zahodená.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Zákaz nadpráce:
                            </strong>{" "}
                            Zákaz vykonávania akýchkoľvek neplatených
                            &apos;drobných úprav&apos;. Každá zmena zadania
                            vyžaduje novú autorizáciu a odoslanie nového
                            platobného paketu na tvoj port.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            Večerný SHUTDOWN &amp; PREPLACH CACHE (17:00 Limit):
                          </strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-xs">
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Uzatvorenie komunikácie:
                            </strong>{" "}
                            Presne o 17:00 hodine sa klientske komunikačné porty
                            strictly odpájajú.{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            zahadzuje akýkoľvek prichádzajúci klientsky traffic.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Vymazanie cache:
                            </strong>{" "}
                            Spúšťaš kompletný preplach vyrovnávacej pamäte{" "}
                            <DMLTooltip
                              slug="cache_memory"
                              label="Cache Memory"
                            />
                            , odstavuješ všetky logické vlákna biznisu a
                            prechádzaš do prítomného okamihu Wu-wei ako
                            zvrchovaný bdelý{" "}
                            <DMLTooltip
                              slug="pozorovatel"
                              label="Pozorovateľ"
                            />
                            .
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (BUSINESS PROSPERITA ACCELERATOR)
            ===================================================================== */}
        {activeTab === "simulator" && (
          <section className="border-2 border-[#FFAA00]/30 bg-[#050A0E]/60 p-6 md:p-8 rounded-xl font-mono relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setSimulatorHelp(!simulatorHelp)}
                className="p-1.5 border border-gray-800 hover:border-gray-600 rounded bg-[#050A0E] transition-all"
                title="Simulátor pomocník"
              >
                <HelpCircle
                  className="w-4 h-4 text-[#FFAA00]"
                  style={{ color: DIM_COLOR }}
                />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 border-b border-gray-900 pb-3">
              <span
                className="w-2 h-2 rounded-full bg-[#FFAA00] animate-pulse"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <h2 className="text-sm font-black uppercase text-white">
                📊 EXEKUČNÝ SIMULÁTOR: BUSINESS PROJECTS &amp; R&amp;D
                ACCELERATOR
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér simuluje rozdelenie tvojich kognitívnych Watts a RAM
                  medzi predaj času (S-kvadrant) a budovanie autonómnych
                  B-systémov pre optimálnu zadržateľnosť firemného zisku.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong> Pomocou
                  posuvníkov nastav hodinovú sadzbu a odpracované hodiny pre
                  klientsky zisk, ako aj asynchrónny príjem z B-systému (MRR).
                  Aktiváciou Sandboxu alebo Output-First uvoľníš zaťaženie
                  procesora.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Sleduj
                  real-time reakcie skafandra: celkové zaťaženie RAM, vyčerpanie
                  procesora v Watts, parazitický limbický kmitočet a tvoj
                  asynchrónny cashflow index.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders
                    className="w-3.5 h-3.5 text-[#FFAA00]"
                    style={{ color: DIM_COLOR }}
                  />
                  Konfigurácia prevádzkových tokov
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        R&amp;D mesačný rozpočet:
                      </span>
                      <span
                        className="text-[#FFAA00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {rdBudget} €/mes
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      step="50"
                      value={rdBudget}
                      onChange={(e) => {
                        setRdBudget(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFAA00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        Alokované denné Watts do vývoja:
                      </span>
                      <span
                        className="text-[#FFAA00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {allocatedWatts} Watts
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={allocatedWatts}
                      onChange={(e) => {
                        setAllocatedWatts(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFAA00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        Aktívne inovačné B-Projekty:
                      </span>
                      <span
                        className="text-[#FFAA00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {activeProjects} projekty
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={activeProjects}
                      onChange={(e) => {
                        setActiveProjects(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFAA00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-900 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAction("format_c")}
                    className="flex-1 min-w-[120px] bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-red-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Format C: (Odpis hodín)
                  </button>
                  <button
                    onClick={() => handleAction("sandbox")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isLocalHostIsolated
                        ? "bg-[#FFAA00]/20 border-[#FFAA00] text-[#FFAA00]"
                        : "bg-[#FFAA00]/5 border-[#FFAA00]/20 text-[#FFAA00]/60 hover:bg-[#FFAA00]/10"
                    }`}
                    style={{
                      borderColor: isLocalHostIsolated ? DIM_COLOR : "",
                      color: isLocalHostIsolated ? DIM_COLOR : "",
                    }}
                  >
                    Karanténa Sandbox
                  </button>
                  <button
                    onClick={() => handleAction("asymmetric")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isAsymmetricFlowActive
                        ? "bg-[#FFAA00]/20 border-[#FFAA00] text-[#FFAA00]"
                        : "bg-[#FFAA00]/5 border-[#FFAA00]/20 text-[#FFAA00]/60 hover:bg-[#FFAA00]/10"
                    }`}
                    style={{
                      borderColor: isAsymmetricFlowActive ? DIM_COLOR : "",
                      color: isAsymmetricFlowActive ? DIM_COLOR : "",
                    }}
                  >
                    Predajné Webhooky
                  </button>
                  <button
                    onClick={() => handleAction("reset")}
                    className="flex-1 min-w-[120px] bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Reštart prevádzky
                  </button>
                </div>
              </div>

              {/* DIAGNOSTIC MONITOR SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Activity className="w-3.5 h-3.5 text-[#39FF14]" />
                  Monitor inovačných parametrov skafandra
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-950 p-4 border border-gray-900 rounded-lg relative overflow-hidden">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      Kognitívna RAM
                    </div>
                    <div className="text-2xl font-black mt-1 text-[#39FF14]">
                      {liveFreeRam}%
                    </div>
                    <div className="text-[9px] text-gray-400 font-mono mt-1">
                      Operačná kapacita pozornosti
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-[#39FF14] transition-all duration-300"
                      style={{ width: `${liveFreeRam}%` }}
                    />
                  </div>

                  <div className="bg-gray-950 p-4 border border-gray-900 rounded-lg relative overflow-hidden">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      Zostávajúce Watts
                    </div>
                    <div className="text-2xl font-black mt-1 text-[#00FFFF]">
                      {liveWatts}%
                    </div>
                    <div className="text-[9px] text-gray-400 font-mono mt-1">
                      Životná a duševná energia
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-[#00FFFF] transition-all duration-300"
                      style={{ width: `${liveWatts}%` }}
                    />
                  </div>

                  <div className="bg-gray-950 p-4 border border-gray-900 rounded-lg relative overflow-hidden">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      Limbic Noise
                    </div>
                    <div className="text-2xl font-black mt-1 text-red-500">
                      {liveLimbicNoise}%
                    </div>
                    <div className="text-[9px] text-gray-400 font-mono mt-1">
                      Emočné poplachy a úzkosť
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-300"
                      style={{ width: `${liveLimbicNoise}%` }}
                    />
                  </div>

                  <div className="bg-gray-950 p-4 border border-gray-900 rounded-lg relative overflow-hidden">
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      Expected MRR
                    </div>
                    <div
                      className="text-2xl font-black mt-1 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    >
                      {expectedMRR.toFixed(2)} €
                    </div>
                    <div className="text-[9px] text-gray-400 font-mono mt-1">
                      Asynchrónny prenos hodnôt
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-[#FFAA00] transition-all duration-300"
                      style={{
                        width: `${liveBSystemIndex}%`,
                        backgroundColor: DIM_COLOR,
                      }}
                    />
                  </div>
                </div>

                {/* LOGS MONITOR */}
                <div className="bg-black p-4 border border-gray-900 rounded-lg">
                  <div className="text-[9px] text-gray-600 font-black uppercase tracking-wider mb-2 flex justify-between">
                    <span>SYSTEM REALTIME DIAGNOSTIC LOGS</span>
                    <span className="animate-pulse">● LIVE_STREAM</span>
                  </div>
                  <div className="h-28 overflow-y-auto font-mono text-[10px] text-gray-400 space-y-1.5 scrollbar-thin scrollbar-thumb-gray-800">
                    {logs.map((log, i) => (
                      <div
                        key={i}
                        className={
                          log.includes("[SUCCESS]")
                            ? "text-[#39FF14]"
                            : log.includes("[WARNING]")
                              ? "text-red-400"
                              : "text-gray-400"
                        }
                      >
                        &gt; {log}
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
              className="w-3.5 h-3.5 text-[#FFAA00]"
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
                  ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15 hover:border-[#FFAA00]/40"
                  : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10 hover:border-[#FFAA00]/30"
              }`}
            >
              <span className="flex items-center gap-2 text-white">
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-[#FFAA00] ${isLexikonOpen ? "animate-pulse" : ""}`}
                  style={{ backgroundColor: DIM_COLOR }}
                />
                💠 EXTRACT Z NEXUS LEXIKÓNU (PREKLADOVÝ KĽÚČ V6.1)
              </span>
              {isLexikonOpen ? (
                <ChevronUp
                  className="w-4 h-4 text-[#FFAA00]"
                  style={{ color: DIM_COLOR }}
                />
              ) : (
                <ChevronDown
                  className="w-4 h-4 text-[#FFAA00]"
                  style={{ color: DIM_COLOR }}
                />
              )}
            </button>

            {isLexikonOpen && (
              <div
                className={`p-6 md:p-8 space-y-8 border-t border-gray-800 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15"
                    : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFAA00]/10"
                }`}
              >
                <div className="border-b border-gray-855 pb-3 mb-2 flex flex-wrap justify-between items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">
                    Aktívne kategórie DML v6.1 pre dotykové Samsung Tab A9+
                    (Responsive Shield)
                  </span>
                </div>

                {/* Stolový lexikón skrytý na mobiloch */}
                <div className="hidden md:block space-y-8">
                  {activeCategoriesList.map((cat) => {
                    const catTerms = Object.keys(termsData)
                      .filter((key) => termsData[key].category === cat.id)
                      .map((key) => termsData[key]);

                    const catStyle = categoryStyles[cat.id] || {
                      hex: "#FFF",
                      border: "border-gray-800",
                    };

                    return (
                      <div key={cat.id} className="space-y-4">
                        {/* Hlavička kategórie */}
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-r ${isDarkMode ? "from-[#050A0E] to-[#FFAA00]/10" : "from-[#1E252D]/40 to-[#FFAA00]/5"} border ${catStyle.border} shadow-sm`}
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
                <div className="block md:hidden p-4 bg-gray-950 border border-gray-855 rounded text-center text-xs text-gray-500">
                  ⚠️ [MOBILE SCREEN DETECTED] Tabuľka s 37 pojmami je
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
            9. DOPLNKOVÝ AUDIO MODUL
            ===================================================================== */}
        <section className="my-12 rounded-xl overflow-hidden border border-gray-800 bg-[#050A0E]/40 p-6 relative z-10">
          <div className="text-xs text-[#BF00FF] font-bold font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping" />
            <span>🎙️ Doplnkový Audio Modul: Inštalačný podcast</span>
          </div>
          <GlobalNodePodcast
            nodeId="id04_06_business_projekty"
            dimColor="#BF00FF"
          />
        </section>

        {/* =====================================================================
            10. 🚀 UPLINK TERMINAL (Vykonaj akciu hneď teraz!)
            ===================================================================== */}
        <section
          className={`mt-16 border-2 border-[#FFAA00]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FFAA00]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FFAA00]/10 hover:border-[#FFAA00]/30"
          }`}
        >
          {/* Bouncing Lock strictly v neónovo zlatej farbe dimenzie #FFAA00 */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[#050A0E] p-3 rounded-full border-2 animate-bounce shadow-[0_0_15px_rgba(255,170,0,0.4)]"
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
              [ BUSINESS PROJECTS EXEKUČNÝ UPLINK TERMINAL ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj biznis systém vykazuje stagnáciu v jedinom sieťovom segmente.
              Kognitívna RAM je permanentne zaťažovaná rutinnou operatívou,
              zatiaľ kým konkurenčné botnety ticho premazávajú tvoju autorskú
              pridanú hodnotu. Ukonči prenájom svojho biologického CPU a spusti
              dravé R&amp;D inovácie pre stabilizáciu{" "}
              <strong style={{ color: DIM_COLOR }}>150,00 € MRR</strong> (
              <DMLTooltip slug="mrr" label="MRR" />
              ).
            </p>
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
              href="https://ko-fi.com/nexuscore2mb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound("click")}
              className="px-6 py-3.5 bg-white text-black hover:bg-white/90 text-xs font-black uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,170,0,0.25)] flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />[ 🌐 PREVZIAŤ ROOT ACCESS:
              VSTÚPIŤ DO BRÁNY ]
            </a>
          </div>

          <div className="text-[9px] text-gray-600 pt-2 uppercase flex justify-center gap-4">
            <span>Autonomy Factor: 100%</span>
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
