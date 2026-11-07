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
// 👑 HLAVNÝ KOMPONENT UZLA ID05_NODE_01 (ASSETS-MATRIX)
// =====================================================================
export default function Node_ID05_01() {
  const NODE_ID = "ID05-01";
  const TIER_COLOR = "#FFD700"; // OMEGA Tier (Gold)
  const DIM_COLOR = "#FF8C00"; // Assets-Matrix Orange

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

  // Simulator States - ASSETS-MATRIX / INVESTMENTS UI SPACE SIMULATOR
  const [activeIncome, setActiveIncome] = useState(1500);
  const [fixedExpenses, setFixedExpenses] = useState(730);
  const [dcaPercentage, setDcaPercentage] = useState(30);
  const [isKarantenaActive, setIsKarantenaActive] = useState(false);
  const [isDcaRobotActive, setIsDcaRobotActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný Investments UI Space monitor. Sledujem kognitívne a finančné zaťaženie.",
    "[STATUS] Bežíš v synchrónnom režime klientskej výmeny času za fiat žetóny.",
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

  // Live calculated values based on DML v6.1 / Samsung Tab A9+ requirements
  const voľnýCashflow = activeIncome - fixedExpenses;
  const dcaAmount = Math.max(
    0,
    Math.round((voľnýCashflow * dcaPercentage) / 100),
  );
  const zostatok = Math.max(1, voľnýCashflow - dcaAmount);

  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (fixedExpenses > activeIncome
          ? 90
          : (fixedExpenses / Math.max(1, activeIncome)) * 100) +
          (isKarantenaActive ? -25 : 15) +
          (isDcaRobotActive ? -20 : 10),
      ),
    ),
  );

  const liveFreeRam = Math.max(
    0,
    Math.min(
      100,
      Math.round(100 - liveLimbicNoise * 0.7 + (isKarantenaActive ? 20 : -10)),
    ),
  );

  const liveWatts = Math.max(
    5,
    Math.min(
      100,
      Math.round(100 - liveLimbicNoise * 0.4 + (isKarantenaActive ? 15 : -10)),
    ),
  );

  const liveAutonomy = Math.min(
    100,
    Math.max(0, Math.round((dcaAmount / Math.max(1, activeIncome)) * 100 * 3)),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setActiveIncome(730);
      setFixedExpenses(400);
      setDcaPercentage(30);
      setIsKarantenaActive(true);
      setIsDcaRobotActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný! Staré podvedomé programy a nafúknuté dlhy vymazané.",
        "[STATUS] Skafander prepnutý strictly do asynchrónneho asistentu so zostatkom strictly +1,00 €.",
        `[STATUS] Voľná RAM: 100% // Limbic Noise: 5% // Watts: 100% // Autonómia: 100%`,
        ...prev,
      ]);
    } else if (actionType === "sandbox") {
      setIsKarantenaActive(!isKarantenaActive);
      if (!isKarantenaActive) {
        setLogs((prev) => [
          "[SUCCESS] Karanténa (48-hodinový SLA Firewall) aktívna. Neproduktívne nákupy sú blokované.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] SLA Firewall vypnutý. Hrozí nebezpečenstvo DDoS útoku marketingu na voľnú RAM.",
          ...prev,
        ]);
      }
    } else if (actionType === "dca_robot") {
      setIsDcaRobotActive(!isDcaRobotActive);
      if (!isDcaRobotActive) {
        setLogs((prev) => [
          "[SUCCESS] Asynchrónny DCA nákupný robot spustený. Nákupy prebiehajú mechanicky bez ľudských emócií.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] DCA robot vypnutý. Tvoj systém opäť prenecháva alokáciu zdrojov emóciám a panike.",
          ...prev,
        ]);
      }
    } else if (actionType === "reset") {
      setActiveIncome(1500);
      setFixedExpenses(730);
      setDcaPercentage(30);
      setIsKarantenaActive(false);
      setIsDcaRobotActive(false);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu (synchrónny nosič s klientskym vyťažením).",
        "[STATUS] I/O toky obnovené na predvolené zaťaženie.",
      ]);
    }
  };

  // =====================================================================
  // 📚 JAZYKOVÁ DATABÁZA DML v6.1 (35 Slov)
  // =====================================================================
  const termsData = {
    skafander: {
      term: "Skafander",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "biologické telo a neurologický systém",
      tooltip:
        "Fyzický hardvérový oblek tvojho vedomia v tejto realite, vyžadujúci optimalizovanú údržbu, kvalitný spánok a čisté biologické Watts.",
    },
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "it_term",
      translation: "biologický procesor a mozog",
      tooltip:
        "Hlavné riadiace a výpočtové centrum neurologického systému, ktoré pri permanentnom kognitívnom preťažení vykazuje prehrievanie a straty taktov.",
    },
    ram: {
      term: "RAM",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kapacita tvojej krátkodobej pozornosti",
      tooltip:
        "Kognitívna vyrovnávacia pamäť vedomia v prítomnom okamihu. Každá nespracovaná emócia a paralelná úloha na pozadí drasticky znižuje jej voľnú kapacitu.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "it_term",
      translation: "biologická energia a životná sila",
      tooltip:
        "Jednotka biologickej a duševnej sily organizmu, ktorú nosič spotrebováva na beh vedomých obvodov a asynchrónnu hlbokú tvorbu.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "nekontrolované straty mentálnej energie",
      tooltip:
        "Neustály, tichý únik kognitívnej kapacity a pozornosti spôsobený nedoriešenými vzťahmi, existenčným strachom a nevedomým autopilotom.",
    },
    cache_memory: {
      term: "Cache Memory",
      category: 2,
      categoryType: "it_term",
      translation: "vyrovnávacia pamäť minulých emócií",
      tooltip:
        "Dočasné kognitívne úložisko podvedomia pre rýchly prístup, ktoré sa pri absencii pravidelného preplachu zanáša deštruktívnym psychickým šumom.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "it_term",
      translation: "izolačný filter a smerovač dátových tokov",
      tooltip:
        "Izolované sieťové rozhranie, napríklad v podobe štátneho príspevku 530,00 €, ktoré maskuje a chráni lokálny host pred existenčným tlakom a devalváciou.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "it_term",
      translation: "izolované testovacie prostredie",
      tooltip:
        "Bezpečne oddelené testovacie prostredie v tvojej mysli alebo na disku, kde spúšťaš nestabilné klientske programy bez rizika infiltrácie biosu.",
    },
    os_genesis: {
      term: "OS Genesis",
      category: 13,
      categoryType: "home_ui_term",
      translation: "zvrchovaný operačný systém vedomia",
      tooltip:
        "Nový, vyčistený operačný systém vedomia, ktorý Architekt inštaluje po úplnom sformátovaní starých spoločenských dogiem a nízkych programov.",
    },
    social_engine: {
      term: "Social Engine",
      category: 2,
      categoryType: "it_term",
      translation: "systém spoločenskej manipulácie",
      tooltip:
        "Globálny socializačný motor a prepracovaný spoločenský mechanizmus navrhnutý na zber energie z biologických nosičov.",
    },
    limbic_noise: {
      term: "Limbic Noise",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kognitívny šum a emočný nepokoj",
      tooltip:
        "Nízkofrekvenčné vyrušovanie a dopamínový hluk amygdaly, ktorý permanentne zaťažuje kognitívne zbernice strachom, letargiou a pochybnosťami.",
    },
    mrtve_knihy: {
      term: "Mŕtve knihy",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "teoretické spisy plné akademického balastu",
      tooltip:
        "Písomné diela a ezoterická literatúra plná teoretickej vaty a akademického šumu, ktoré preťažujú pamäť bez praktického a odžitého riešenia bolesti.",
    },
    cesta_nepraxe: {
      term: "Cesta nePraxe",
      category: 13,
      categoryType: "home_ui_term",
      translation: "asynchrónna cesta bdelého pozorovateľa",
      tooltip:
        "Unikátna a suverénna životná dráha mimo zavedených koľajníc spoločnosti, kde operuješ výhradne podľa svojich vlastných pravidiel v prítomnosti.",
    },
    persona: {
      term: "Persona",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "dočasná sociálna maska",
      tooltip:
        "Súbor naučených psychologických rolí a správaní, ktoré biologický nosič používa na interakciu so spoločnosťou na ochranu vlastného vnútra.",
    },
    avatar: {
      term: "Avatar",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "vonkajší reprezentant v realite",
      tooltip:
        "Ukutá, zámerne konfigurovaná a bdelo riadená sociálna maska, cez ktorú bezpečne komunikuješ s Matrixom bez odhalenia jadra.",
    },
    firewall: {
      term: "Firewall",
      category: 2,
      categoryType: "it_term",
      translation: "kognitívny obranný filter",
      tooltip:
        "Obranný štít v tvojom vedomí, ktorý nepretržite filtruje prichádzajúce dátové pakety a zahadzuje deštruktívne marketingové a emočné vírusy.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "it_term",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Vnútorné bezpečné a izolované exekučné rozhranie tvojej entity (tvoja izba, tvoj notebook) odpojené od sieťových prepojení.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "it_term",
      translation: "zakázaný / zablokovaný komunikačný kanál",
      tooltip:
        "Trvalo uzavreté sieťové rozhranie na zamedzenie prístupu toxického komunikačného trafficu a ochranu kognitívnej stability.",
    },
    debugging: {
      term: "Debugging",
      category: 13,
      categoryType: "home_ui_term",
      translation: "vyhľadávanie a odstraňovanie psychických chýb",
      tooltip:
        "Proces chladného, systematického odhaľovania a premazávania deštruktívnych vzorcov a legacy presvedčení v tvojom BIOS-e.",
    },
    root_access: {
      term: "Root Access",
      category: 13,
      categoryType: "home_ui_term",
      translation: "plné administrátorské práva nad životom",
      tooltip:
        "Zvrchovaná úroveň administrátorskej autorizácie, kedy preberáš plnú zodpovednosť a exekučnú kontrolu nad celým svojím skafandrom.",
    },
    format_c: {
      term: "Format C:",
      category: 13,
      categoryType: "home_ui_term",
      translation: "úplné vyčistenie pevného disku od balastu",
      tooltip:
        "Nekompromisný, čistiaci príkaz vôle na kompletné premazanie zbytočnej podvedomej pamäte, nefunkčných programov a prežitých spoločenských dogiem.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "it_term",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Základný nízkoúrovňový operačný kód biologického hardvéru riadiaci biorytmus, v ktorom neexistujú žiadne sociálne dohody ani vírusy.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "bdelé vedomie a tichý svedok",
      tooltip:
        "Čisté, neidentifikované vedomie prítomného okamihu, ktoré ticho a bez emočného odporu pozoruje toky myšlienok na obrazovke.",
    },
    ui_space: {
      term: "UI Space",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "jedinečný vnútorný vesmír vedomia",
      tooltip:
        "Používateľské a kognitívne rozhranie tvojej entity, vyžadujúce maximálnu dizajnovú čistotu, minimalizmus a elimináciu informačného šumu.",
    },
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré nefunkčné presvedčenia a vzorce chovania",
      tooltip:
        "Zastaralý a chybný kód správania prevzatý z rodinného a spoločenského prostredia, ktorý nevedome beží na pozadí a vyvoláva chyby.",
    },
    botnet: {
      term: "Botnet",
      category: 2,
      categoryType: "it_term",
      translation: "spoločenský manipulatívny systém",
      tooltip:
        "Zosieťovaný a centralizovane koordinovaný zástup nevedomých myslí, plniacich predprogramované mechanické pokyny Matrixu.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "it_term",
      translation: "komunikačná jednotka / prenášaná správa",
      tooltip:
        "Základný komunikačný balík dát a informácií prichádzajúci z vonkajšej siete, ktorý tvoj kognitívny firewall musí preveriť.",
    },
    cashflow: {
      term: "Cashflow",
      category: 6,
      categoryType: "finance_term",
      translation: "tok finančnej energie",
      tooltip:
        "Vstupný a výstupný prúd finančnej energie prechádzajúci cez tvoj systém, definujúci celkovú výpočtovú šírku pásma skafandra.",
    },
    fiat: {
      term: "Fiat",
      category: 6,
      categoryType: "finance_term",
      translation: "platobné fiat žetóny Matrixu",
      tooltip:
        "Ničím nekryté papierové platidlo Matrixu, emitované centralizovanými servermi pre permanentný odber tvojej biologickej energie.",
    },
    zombie_horda: {
      term: "Zombie Horda",
      category: 6,
      categoryType: "finance_term",
      translation: "staré nebezpečné dlhy a veritelia",
      tooltip:
        "Skupina parazitických veriteľov a zlých dlhov, ktoré na pozadí potichu odčerpávajú tvoje voľné finančné Watts a preťažujú RAM.",
    },
    mrr: {
      term: "MRR",
      category: 7,
      categoryType: "business_term",
      translation: "mesačne sa opakujúci príjem z aktív",
      tooltip:
        "Pravidelný, asynchrónny mesačný príjem generovaný strictly z tvojich vlastných vybudovaných digitálnych aktív a licencií.",
    },
    dca: {
      term: "DCA",
      category: 8,
      categoryType: "investment_term",
      translation: "robotická pravidelná alokácia bez emócií",
      tooltip:
        "Metóda Dollar-Cost Averaging realizovaná asynchrónnym DCA nákupným robotom, ktorá úplne vyraďuje ľudské emócie a ľudské časovanie trhu.",
    },
    asset_allocation: {
      term: "Asset Allocation",
      category: 8,
      categoryType: "investment_term",
      translation: "distribúcia voľného kapitálu",
      tooltip:
        "Strategické a matematické rozdelenie voľných finančných Watts do rôznych tried bezpečných aktív strictly pre dlhodobé pasívne toky.",
    },
    sp_500: {
      term: "S&P 500",
      category: 8,
      categoryType: "investment_term",
      translation: "globálny akciový load balancer",
      tooltip:
        "Akciový index reprezentujúci 500 najväčších centralizovaných firiem, fungujúci v Assets-Matrixe ako bezpečný a automatický load balancer.",
    },
    bitcoin: {
      term: "Bitcoin",
      category: 8,
      categoryType: "investment_term",
      translation: "decentralizovaný energetický štít",
      tooltip:
        "Zvrchované, obmedzené a matematicky zabezpečené digitálne aktívum, ktoré ukladáš v offline cold storage pre definitívny únik z fiat Siete.",
    },
    karantena: {
      term: "Karanténa",
      category: 13,
      categoryType: "home_ui_term",
      translation: "ochranná kognitívna izolácia",
      tooltip:
        "Stav prísnej psychologickej a sieťovej izolácie, v ktorej tvoja entita odmieta akékoľvek vonkajšie dogmy, sociálny hluk a klientske vplyvy pre obnovu systému.",
    },
  };

  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID05_01
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
      id: 8,
      key: "investment_term",
      translation: "Investments / Alokácia",
      description:
        "Pravidelný nákupný robot, alokácia voľného kapitálu bez emócií a globálne investičné balancery.",
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
        title="ID05 ASSETS-MATRIX // Investments UI Space (Úvod a zadefinovanie Avatara Investora)"
        description="01. [OMEGA] Investments UI Space (Úvod a zadefinovanie Avatara Investora)."
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
            <span
              className="flex items-center gap-1 text-[#FFD700] font-black"
              style={{ color: TIER_COLOR }}
            >
              <Shield
                className="w-3.5 h-3.5 animate-pulse"
                style={{ color: DIM_COLOR }}
              />
              NEXUS-CORE_2Mb V6.1.0
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:inline font-bold">
              PORT: investments.projekt-nexus.sk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] animate-ping"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <span>
                DIMENSION:{" "}
                <strong className="font-black" style={{ color: DIM_COLOR }}>
                  ID05 - ASSETS-MATRIX
                </strong>
              </span>
            </div>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500">THEME:</span>
            <button
              onClick={handleThemeToggle}
              className={`px-3 py-1 border transition-all duration-200 uppercase tracking-widest text-[10px] font-black ${
                isDarkMode
                  ? "border-[#FF8C00] text-[#FF8C00] bg-[#FF8C00]/5 shadow-[0_0_10px_rgba(255,140,0,0.15)]"
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
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10"
          }`}
        />

        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-widest text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 px-2 py-0.5 rounded font-black uppercase">
                OMEGA TIER
              </span>
              <span className="text-gray-500 font-mono text-xs">
                Node_ID05_01 // Investments UI Space
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              INVESTMENTS UI SPACE
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              01. [OMEGA] Investments UI Space (Úvod a zadefinovanie Avatara
              Investora). Skutočná suverenita začína v bode, kedy odinštaluješ
              emočné reakcie zo svojich obvodov, prevezmeš Root Access a
              alokuješ biologickú energiu do nezničiteľnej asynchrónnej
              zbernice.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: investments.projekt-nexus.sk</span>
            <span>UPLINK: ACTIVE // 256 KB/s</span>
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
              🚨 ERROR LOG // Ownership_Deficit // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Vitaj v najhlbšej vrstve finančného oslobodenia – na
              samotnom vrchole tvojej sémantickej transformácie. Väčšina
              nevedomých nosičov v Matrixe verí naivnej dohode, že bohatstvo
              vzniká z tvrdej, fyzickej driny v Kvadrante &apos;Z&apos;.
              Spúšťajú neustále polling cykly svojho{" "}
              <DMLTooltip slug="skafander" label="Skafander" />
              -a, kým ich kognitívne <DMLTooltip slug="cpu" label="CPU" />{" "}
              nehorí pod náporom permanentného stresu z prežitia. Myslia si, že
              &apos;poctivé sporenie&apos; fiat meny v bankových databázach ich
              ochráni. Toto je však fatálny logický Error,{" "}
              <strong className="text-[#FF003C] font-black">
                Error 402: INFLATION_DATA_WIPE
              </strong>
              . Tlačené <DMLTooltip slug="fiat" label="Fiat" /> žetóny sú iba
              dočasné prenosové jednotky energie, ktoré centrálne servery
              neustále premazávajú cez tichý, na pozadí bežiaci inflačný proces.
              Sporenie v banke je ako zápis drahocenných dát na chybné médium,
              ktoré sa každú sekundu samovoľne vymazáva. Skutočná suverenita
              začína v bode, kedy úplne odinštaluješ emočné reakcie zo svojich
              obvodov, prevezmeš{" "}
              <DMLTooltip slug="root_access" label="Root Access" /> a
              predefinuješ sa na Avatara Investora. Peniaze nie sú tvoj cieľ. Sú
              to len biologické <DMLTooltip slug="watts" label="Watts" />{" "}
              energie, ktoré musíš nekompromisne alokovať do nezničiteľnej,
              asynchrónne fungujúcej{" "}
              <DMLTooltip slug="asset_allocation" label="Asset Allocation" />{" "}
              zbernice. Spusť svoj Assets-Matrix, kým tvoje lokálne obvody
              nezaznamenajú{" "}
              <strong className="text-[#FF003C] font-black">
                Error 509: kognitívny limit pretečenia
              </strong>
              .&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID05_01_investments_ui_space.md</span>
            <span className="font-bold text-red-400">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* =====================================================================
            4. VIDEO INJEKTOR
            ===================================================================== */}
        <section className="mb-12 rounded-xl overflow-hidden border-2 border-[#FF8C00]/30 shadow-lg">
          <div className="bg-[#050A0E] py-2 px-4 border-b border-gray-800 flex justify-between items-center text-xs">
            <span
              className="text-[#FF8C00] font-bold font-mono uppercase tracking-widest flex items-center gap-2"
              style={{ color: DIM_COLOR }}
            >
              <PlayCircle
                className="w-4 h-4 text-[#FF8C00]"
                style={{ color: DIM_COLOR }}
              />
              GlobalNodeVideo: Video Injektor
            </span>
            <span className="text-gray-500 font-mono">
              id05_node_01_investments_ui_space_video
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
                ? "bg-[#FF8C00]/10 border-[#FF8C00] text-[#FF8C00] shadow-[0_0_15px_rgba(255,140,0,0.15)]"
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
                ? "bg-[#FF8C00]/10 border-[#FF8C00] text-[#FF8C00] shadow-[0_0_15px_rgba(255,140,0,0.15)]"
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
                  className="w-3.5 h-3.5 text-[#FF8C00]"
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10 hover:border-[#FF8C00]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.architect
                      ? "transparent"
                      : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FF8C00]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🟢 [ ARCHITECT QUOTE ] (Prežitá Pravda)
                  </span>
                  {openTrinity.architect ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.architect && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"}`}
                  >
                    <p>
                      Keď som po roku 2018 zažil svoj osobný a biologický kolaps
                      v Sektore Trnava na Spartakovskej ulici, ocitol som sa
                      strictly na finančnom dne. Môj lokálny host bol
                      paralyzovaný. Operoval som strictly s nízkonapäťovým{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -om v podobe štátneho invalidného príspevku strictly{" "}
                      <strong className="text-white font-black">
                        730,00 €
                      </strong>{" "}
                      (530 € invalidný príspevok + 200 € podpora od Mira). Z
                      pohľadu{" "}
                      <DMLTooltip slug="mrtve_knihy" label="mŕtvych kníh" /> to
                      bola beznádejná chudoba. No môj inžiniersky systém
                      odmietol akceptovať rolu obete.
                    </p>
                    <p>
                      Uvalil som tvrdú{" "}
                      <DMLTooltip slug="karantena" label="Karanténu" /> na
                      všetky spoločenské statusové programy a prestal reagovať
                      na akékoľvek emočné vplyvy. Znížil som svoje biologické
                      odbery strictly na minimum a uvoľnil tak cennú{" "}
                      <DMLTooltip slug="ram" label="RAM" /> vedomia. Na lacnom
                      tablete Samsung Tab A9+ s 8GB RAM som strictly so
                      zostatkom{" "}
                      <strong className="text-white font-black">+1,00 €</strong>{" "}
                      na konci dňa programoval jadro{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />.
                      Každých 10 € z tohto minimálneho cashflowu, ktoré som
                      ušetril odstrihnutím zbytočných predplatných a zlozvykov,
                      som strictly presmeroval do nákupov DCA{" "}
                      <DMLTooltip slug="dca" label="DCA" /> na burze cez môjho
                      bankového mentora. Zistil som, že prechod do Kvadrantu
                      &apos;I&apos; (Investora) nezávisí od veľkosti kapitálu,
                      ale od nekompromisnej dôslednosti a bezemočnej exekúcie.
                      Zvrchovanosť nevzniká z veľkosti platu, ale z absolútnej
                      kontroly nad každým jedným energetickým{" "}
                      <DMLTooltip slug="watts" label="Watts" /> v tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />.
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10 hover:border-[#FF8C00]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.ai ? "transparent" : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FF8C00]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🤖 [ SYSTEM: AI GEMINI ] (Kybernetická Analýza)
                  </span>
                  {openTrinity.ai ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.ai && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"}`}
                  >
                    <p>
                      Z hľadiska systémového inžinierstva a load-balancingu je
                      prechod k &apos;Avatarovi Investorovi&apos; prechodom od
                      synchrónnej výmeny energie na asynchrónne paralelné
                      procesy. V Kvadrantoch &apos;Z&apos; (zamestnanec) a
                      &apos;S&apos; (živnostník) je biologically-cenné{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> nosiča vyťažené v
                      nekonečnej, blokujúcej polling slučke – čas je priamo
                      vymieňaný za <DMLTooltip slug="fiat" label="Fiat" />{" "}
                      žetóny. Ak sa biologický procesor zastaví, tok prúdu
                      okamžite klesne na nulu.
                    </p>
                    <p>
                      Investičná zbernica (
                      <DMLTooltip
                        slug="asset_allocation"
                        label="Assets-Matrix"
                      />
                      ) funguje ako asynchrónny démon (Daemon Process) bežiaci
                      na pozadí 24/7. Akonáhle presmeruješ voľný prúd do
                      diverzifikovaných indexov typu{" "}
                      <DMLTooltip slug="sp_500" label="S&P 500" /> alebo
                      decentralizovaného digitálneho štítu{" "}
                      <DMLTooltip slug="bitcoin" label="Bitcoin" />, tieto
                      systémy začnú asynchrónne multiplikovať tvoje dátové
                      pakety bez ohľadu na to, či tvoj biologický skafander spí,
                      odpočíva alebo zažíva údržbu. Tradičná držba fiat mien v
                      bankových databázach predstavuje neustály,
                      nezdokumentovaný{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> z
                      dôvodu inflačného premazávania hodnôt. Systémová obrana
                      vyžaduje mechanické DCA bez akéhokoľvek emočného časovania
                      trhu a uloženie asynchrónnych ziskov do studeného
                      úložiska.
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10 hover:border-[#FF8C00]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.audit ? "transparent" : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FF8C00]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🪞 [ AUDIT &amp; KOMPARÁCIA ] (Mŕtve knihy)
                  </span>
                  {openTrinity.audit ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.audit && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"}`}
                  >
                    <p>
                      Defragmentácia a preosievanie historických spisov
                      potvrdzuje, že základy investičného štítu sú nemenné a
                      matematicky overené naprieč časovými snímkami Siete:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mt-4 text-gray-300 marker:text-[#FF8C00]">
                      <li>
                        <strong
                          style={{ color: DIM_COLOR }}
                          className="font-bold"
                        >
                          Robert T. Kiyosaki (Cashflow Kvadrant):
                        </strong>{" "}
                        Kiyosakiho matica exaktne definuje Kvadrant
                        &apos;I&apos; (Investor) ako zvrchované prostredie, kde
                        peniaze pracujú pre teba, na rozdiel od Kvadrantu
                        &apos;Z&apos;, kde ty pracuješ pre peniaze. Naša
                        dekompresia nariaďuje vypnutie synchrónnych zberníc a
                        presun k asynchrónnemu DCA pre uvoľnenie kognitívnej
                        RAM.
                      </li>
                      <li>
                        <strong
                          style={{ color: DIM_COLOR }}
                          className="font-bold"
                        >
                          Don Miguel Ruiz (Štyri dohody):
                        </strong>{" "}
                        Druhá dohoda (&apos;Neberte si nič osobne&apos;) slúži
                        ako kognitívny{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> pred
                        panikou na trhoch. Keď burzové grafy padajú, nevedomí
                        boti z <DMLTooltip slug="botnet" label="Zombie Hordy" />{" "}
                        podliehajú FUD malvéru a v panike vymazávajú svoje
                        investície. Prebudovaný operátor ostáva v stave bdelého
                        Svedka a chladne necháva bežať nákupného robota.
                      </li>
                      <li>
                        <strong
                          style={{ color: DIM_COLOR }}
                          className="font-bold"
                        >
                          Eckhart Tolle (Sila prítomného okamihu):
                        </strong>{" "}
                        Tolle odhaľuje, že strach z budúceho finančného
                        nedostatku je len parazitický skript bežiaci vo
                        vyrovnávacej pamäti{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />.
                        Keď premostíš vedomie do prítomnosti a uvalíš na
                        finančné plánovanie prísny, asertívny{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" />, tvoj
                        systém upadne do hlbokého energetického ticha a flow.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>

            {/* 🧩 HLAVNÝ OBSAH - DEKOMPRESIA (FÁZA MOFU - Painkiller) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen
                  className="w-3.5 h-3.5 text-[#FF8C00]"
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10"}`}
                  style={{
                    borderBottomColor: openMofu.anatomy ? "transparent" : "",
                  }}
                >
                  <span>1. Anatómia konceptu (Rozbitie ilúzie)</span>
                  {openMofu.anatomy ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.anatomy && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"}`}
                  >
                    <p>
                      Tradičná spoločenská ilúzia o &apos;bezpečnom sporení
                      peňazí v banke&apos; je najúspešnejším tichým exploitom v
                      celej histórii Matrixu. Podvedome veríš, že tvoje zarobené
                      a uložené <DMLTooltip slug="fiat" label="Fiat" /> žetóny
                      reprezentujú stabilnú hodnotu. Skutočnosť je taká, že
                      centrálne servery tlačia nové žetóny exponenciálnym
                      tempom, čo sa na tvojom{" "}
                      <DMLTooltip slug="local_host" label="Local Host" />
                      -e prejavuje ako permanentný, nevypnuteľný{" "}
                      <DMLTooltip
                        slug="memory_leaks"
                        label="Memory Leaks"
                      />{" "}
                      kúpnej sily.
                    </p>
                    <p>
                      Rozbitie tejto ilúzie v tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> vyžaduje
                      pochopenie troch kľúčových axióm:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Fiat ako tekutý kód:
                        </strong>{" "}
                        Tlačené peniaze nie sú majetkom, sú iba energetickými
                        balíkmi, ktoré strácajú náboj každú sekundu, kedy ležia
                        nečinné v bankovej databáze. Držanie hotovosti je v
                        podstate súhlasom s pomalým{" "}
                        <DMLTooltip slug="format_c" label="Format C:" /> tvojho
                        úsilia.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Intelektuálna alokácia:
                        </strong>{" "}
                        Prebudovaný Avatar sa nesnaží pracovať viac hodín
                        (synchrónne preťaženie CPU). Sústreďuje sa strictly na
                        strategické presmerovanie tokov (asynchrónna alokácia).
                        Každé jedno ušetrené euro premení na nového digitálneho
                        robotníka, ktorý preňho ťaží časovú slobodu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Nuda ako optimálny runtime:
                        </strong>{" "}
                        Správne navrhnutý investičný systém (
                        <DMLTooltip
                          slug="asset_allocation"
                          label="Assets-Matrix"
                        />
                        ) je pre ľudské Ego nudný. Nevyžaduje neustále
                        sledovanie RSI grafov, ani emočné pretaktovanie na
                        burze. Beží mechanicky, ticho a s minimálnym trecím
                        odporom.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10"}`}
                  style={{
                    borderBottomColor: openMofu.mechanism ? "transparent" : "",
                  }}
                >
                  <span>
                    2. Mechanizmus Matrixu (Ako Matrix vysáva tvoju energiu)
                  </span>
                  {openMofu.mechanism ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.mechanism && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"}`}
                  >
                    <p>
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu parazituje na dvoch základných biologických
                      skriptoch v tvojom skafandri – na strachu z nedostatku a
                      na chamtivosti po rýchlom dopamíne. Cez tieto nechránené
                      porty bleskovo odvádza tvoje voľné kognitívne{" "}
                      <DMLTooltip slug="watts" label="Watts" />.
                    </p>
                    <p>
                      Tento prepracovaný energetický zber prebieha strictly cez
                      tri cykly:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mt-4 text-gray-300 marker:text-[#FF8C00]">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Dopamínový trading (DDoS útok na RAM):
                        </strong>{" "}
                        Matrix ti cez nablýskané aplikácie ponúka
                        &apos;jednoduché pákové obchodovanie&apos; a krypto
                        špekulácie. Tvoje kognitívne obvody zažívajú permanentný{" "}
                        <DMLTooltip slug="limbic_noise" label="Limbic Noise" />.
                        Strácaš pozornosť, tvoja RAM je vyťažená a tvoj systém
                        nakoniec vymaže celý uložený kapitál.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Bezkontaktná anestéza (SaaS pasce):
                        </strong>{" "}
                        Spotrebiteľské prostredie ťa učí platiť bezemočne
                        mobilom či prsteňom, čím odpája tvoje racionálne obvody
                        od reálneho uvedomenia si odtoku prúdu. Každé jedno
                        zbytočné mesačné predplatné funguje ako tichá,
                        parazitická subrutina, ktorá ti vycucáva{" "}
                        <DMLTooltip slug="cashflow" label="cashflow" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Blížiaci sa existenčný Blackout:
                        </strong>{" "}
                        Matrix ťa udržuje v stave existenčného autopilota, kedy
                        veríš, že tvoj synchrónny plat alebo podpora od strýka
                        Mira bude fungovať večne. No v momente, kedy tento
                        napájací port zhasne a tvoj{" "}
                        <DMLTooltip slug="cashflow" label="Cashflow" /> zažije
                        nečakaný kolaps, nechránený systém skolabuje v priebehu
                        30 dní.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10"}`}
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
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.transformation && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"}`}
                  >
                    <p>
                      Prevzatie plných administrátorských práv (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      tvojím investičným rozhraním vyžaduje chladný, racionálny
                      a odžitý prístup (
                      <DMLTooltip slug="debugging" label="Debugging" />) k
                      alokácii tvojich obmedzených kognitívnych a finančných
                      Watts.
                    </p>
                    <p>
                      Transformácia v tvojom vnútri prebieha v troch krokoch:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény (Zastavenie Memory Leakov):
                        </strong>{" "}
                        Spusť okamžitý, radikálny audit všetkých odtokov. Odpoj
                        všetky parazitické subrutiny a predplatné. Prežiť s
                        minimálnym odberom ti vráti kognitívnu suverenitu a
                        stabilizuje peňažnú zbernicu localhostu strictly so
                        zostatkom strictly +1 €.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Inštalácia asynchrónnych nákupov (DCA):
                        </strong>{" "}
                        Úplne vyraď ľudský faktor a emócie zo systému.
                        Nainštaluj mechanického, asynchrónneho{" "}
                        <DMLTooltip slug="dca" label="DCA" /> robota, ktorý hneď
                        po príchode akéhokoľvek prítoku automaticky odčlení
                        strictly{" "}
                        <strong className="text-white font-black">30 %</strong>{" "}
                        kapitálu do globálneho load balancera{" "}
                        <DMLTooltip slug="sp_500" label="S&P 500" /> a
                        decentralizovaného štítu{" "}
                        <DMLTooltip slug="bitcoin" label="Bitcoin" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zriadenie studeného úložiska:
                        </strong>{" "}
                        Zarobené asynchrónne žetóny nenechávaj ležať na
                        burzových serveroch, ku ktorým nemáš zvrchované autorské
                        práva. Strictly ich odosielaj do offline studených
                        peňaženiek (Cold Storage), ktoré sú pre vonkajší svet a
                        bankové exekučné skripty neprístupné.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10"}`}
                >
                  <span>4. Nástroje a Protokoly (Tvoj Antivírus)</span>
                  {openMofu.protocols ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.protocols && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"}`}
                  >
                    <p>
                      Pre bezchybnú prevádzku tvojej asynchrónnej{" "}
                      <DMLTooltip
                        slug="asset_allocation"
                        label="Asset Allocation"
                      />{" "}
                      zbernice nariaďujem tvojmu Skafandru denné spúšťanie
                      týchto troch bezpečnostných protokolov:
                    </p>
                    <div className="space-y-4 pl-4 border-l-2 border-orange-500/30 text-gray-300">
                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            1. PROTOKOL ASYNCHRÓNNEHO DCA (Nákupný robot):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Hneď ako na tvoj port dorazí mesačný prítok (napr.
                            530 € invalidný príspevok), tvoj systém automaticky
                            a bez jedinej emócie odosiela strictly{" "}
                            <strong className="text-white font-black">
                              10 %
                            </strong>{" "}
                            (napr. 53 €) do DCA fondu globálneho indexu{" "}
                            <DMLTooltip slug="sp_500" label="S&P 500" />.
                          </li>
                          <li>
                            Žiadne špekulácie o prepadoch, žiadne emočné
                            časovanie. Robot vykoná zápis na burzový port
                            mechanicky strictly v rovnaký deň v mesiaci, čím
                            defragmentuje nákupné riziko.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            2. PROTOKOL BITCOINOVÝ ŠTÍT (Offline Cold Storage):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Každé prebytočné euro, ktoré vygeneruje tvoj
                            asynchrónny vývoj na Projekte Nexus nad limit
                            existenčného prežitia, strictly konvertuješ do
                            digitálneho zlata{" "}
                            <DMLTooltip slug="bitcoin" label="Bitcoin" />.
                          </li>
                          <li>
                            Tieto dáta strictly odosielaš z burzy na tvoje
                            súkromné hardvérové studené úložisko. Prístupové
                            seed frázy strictly ukladáš mimo dosah akéhokoľvek
                            sieťového prehliadača.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            3. PROTOKOL SLA SPOTREBY (Kognitívny 48-hodinový
                            Firewall):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Pred každým nákupom akéhokoľvek materiálneho pasíva,
                            ktoré presahuje tvoj prevádzkový denný limit, uval
                            na tento nákupný dátový paket karanténnu lehotu
                            strictly{" "}
                            <strong className="text-white font-black">
                              48 hodín
                            </strong>
                            .
                          </li>
                          <li>
                            Ak po tomto čase tvoj racionálny procesor potvrdí,
                            že daná položka ti neuvoľňuje reálnu kognitívnu{" "}
                            <DMLTooltip slug="ram" label="RAM" /> a slúži iba na
                            ohurovanie cudzích databáz, paket natrvalo zahoď a
                            uvoľnenú energiu presmeruj do DCA.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (INVESTMENTS UI SPACE SIMULATOR)
            ===================================================================== */}
        {activeTab === "simulator" && (
          <section className="border-2 border-[#FF8C00]/30 bg-[#050A0E]/60 p-6 md:p-8 rounded-xl font-mono relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setSimulatorHelp(!simulatorHelp)}
                className="p-1.5 border border-gray-800 hover:border-gray-600 rounded bg-[#050A0E] transition-all"
                title="Simulátor pomocník"
              >
                <HelpCircle
                  className="w-4 h-4 text-[#FF8C00]"
                  style={{ color: DIM_COLOR }}
                />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 border-b border-gray-900 pb-3">
              <span
                className="w-2 h-2 rounded-full bg-[#FF8C00] animate-pulse"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <h2 className="text-sm font-black uppercase text-white">
                📊 EXEKUČNÝ SIMULÁTOR: ASSETS-MATRIX / ALLOCATION ENGINE
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér simuluje rozdelenie tvojich kognitívnych Watts a RAM
                  na základe pomeru príjmov, výdavkov skafandra a automatizácie
                  nákupného robota.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong> Pomocou
                  posuvníkov nastav svoj mesačný klientsky príjem, nevyhnutné
                  mesačné výdavky a percento alokované do DCA. Aktivuj
                  karanténny SLA Firewall na odrazenie prebytočnej spotreby
                  alebo DCA robota.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Sleduj
                  real-time reakcie tvojho Skafandra: celkové zaťaženie RAM,
                  vyčerpanie procesora v Watts, parazitický kognitívny šum a
                  celkový index asynchrónnej autonómie.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders
                    className="w-3.5 h-3.5 text-[#FF8C00]"
                    style={{ color: DIM_COLOR }}
                  />
                  Konfigurácia prevádzkových tokov
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        Aktívny príjem (S-Sektor / klientsky):
                      </span>
                      <span
                        className="text-[#FF8C00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {activeIncome} €/mes
                      </span>
                    </div>
                    <input
                      type="range"
                      min="530"
                      max="10000"
                      step="50"
                      value={activeIncome}
                      onChange={(e) => {
                        setActiveIncome(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FF8C00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        Nevyhnutné výdavky skafandra (SLA limit):
                      </span>
                      <span
                        className="text-[#FF8C00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {fixedExpenses} €/mes
                      </span>
                    </div>
                    <input
                      type="range"
                      min="400"
                      max="5000"
                      step="10"
                      value={fixedExpenses}
                      onChange={(e) => {
                        setFixedExpenses(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FF8C00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        DCA Alokácia (% z voľného prúdu):
                      </span>
                      <span
                        className="text-[#FF8C00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {dcaPercentage}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={dcaPercentage}
                      onChange={(e) => {
                        setDcaPercentage(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FF8C00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>
                </div>

                {/* Simulated live indicators */}
                <div className="p-4 bg-black/40 border border-gray-900 rounded-lg text-xs font-mono space-y-1.5 text-gray-400">
                  <div className="flex justify-between">
                    <span>Voľný finančný prúd:</span>
                    <span className="text-white font-bold">
                      {voľnýCashflow} €
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Odosielané do DCA:</span>
                    <span className="text-white font-bold">
                      {dcaAmount} €/mes
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zostávajúci zostatok (localhost):</span>
                    <span
                      className={
                        zostatok === 1
                          ? "text-[#39FF14] font-black animate-pulse"
                          : "text-gray-300 font-bold"
                      }
                    >
                      {zostatok} €
                    </span>
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
                      isKarantenaActive
                        ? "bg-[#FF8C00]/20 border-[#FF8C00] text-[#FF8C00]"
                        : "bg-[#FF8C00]/5 border-[#FF8C00]/20 text-[#FF8C00]/60 hover:bg-[#FF8C00]/10"
                    }`}
                    style={{
                      borderColor: isKarantenaActive ? DIM_COLOR : "",
                      color: isKarantenaActive ? DIM_COLOR : "",
                    }}
                  >
                    Karanténa Sandbox
                  </button>
                  <button
                    onClick={() => handleAction("dca_robot")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isDcaRobotActive
                        ? "bg-[#FF8C00]/20 border-[#FF8C00] text-[#FF8C00]"
                        : "bg-[#FF8C00]/5 border-[#FF8C00]/20 text-[#FF8C00]/60 hover:bg-[#FF8C00]/10"
                    }`}
                    style={{
                      borderColor: isDcaRobotActive ? DIM_COLOR : "",
                      color: isDcaRobotActive ? DIM_COLOR : "",
                    }}
                  >
                    DCA Robot
                  </button>
                  <button
                    onClick={() => handleAction("reset")}
                    className="flex-1 min-w-[120px] bg-gray-800/20 hover:bg-gray-800/40 border border-gray-700/50 text-gray-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Reštartovať
                  </button>
                </div>
              </div>

              {/* HUD / LIVE DATA SECTION */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2 mb-4">
                    <Activity
                      className="w-3.5 h-3.5 text-[#FF8C00]"
                      style={{ color: DIM_COLOR }}
                    />
                    ASSETS HEALTH MONITOR // AKTÍVNE SENZORY
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Limbic Noise (Stres)
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 60 ? "text-red-400 animate-pulse" : "text-[#FF8C00]"}`}
                        style={{
                          color: liveLimbicNoise > 60 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {liveLimbicNoise}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Voľná Kognitívna RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveFreeRam < 40 ? "text-yellow-450 font-black" : "text-[#FF8C00]"}`}
                        style={{
                          color: liveFreeRam < 40 ? "#FFD700" : DIM_COLOR,
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
                        className={`text-2xl font-black ${liveWatts < 30 ? "text-red-400" : "text-[#FF8C00]"}`}
                        style={{
                          color: liveWatts < 30 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {liveWatts}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Index Autonómie (DCA)
                      </span>
                      <span
                        className={`text-2xl font-black ${liveAutonomy < 30 ? "text-red-450" : "text-[#39FF14]"}`}
                        style={{
                          color: liveAutonomy < 30 ? "#FF003C" : "#39FF14",
                        }}
                      >
                        {liveAutonomy}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATRIX SYSTEM CONSOLE LOGS */}
                <div className="flex-1 bg-black/90 rounded-lg p-4 border border-gray-900 flex flex-col justify-between h-48 overflow-hidden font-mono text-[10px] leading-relaxed">
                  <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-1.5 mb-2">
                    <span>DIAG_LOG_ASSETS_CONSOLE // REALTIME</span>
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
              className="w-3.5 h-3.5 text-[#FF8C00]"
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
                  ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15 hover:border-[#FF8C00]/40"
                  : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10 hover:border-[#FF8C00]/30"
              }`}
            >
              <span className="flex items-center gap-2 text-white">
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-[#FF8C00] ${isLexikonOpen ? "animate-pulse" : ""}`}
                  style={{ backgroundColor: DIM_COLOR }}
                />
                💠 EXTRACT Z NEXUS LEXIKÓNU (PREKLADOVÝ KĽÚČ V6.1)
              </span>
              {isLexikonOpen ? (
                <ChevronUp
                  className="w-4 h-4 text-[#FF8C00]"
                  style={{ color: DIM_COLOR }}
                />
              ) : (
                <ChevronDown
                  className="w-4 h-4 text-[#FF8C00]"
                  style={{ color: DIM_COLOR }}
                />
              )}
            </button>

            {isLexikonOpen && (
              <div
                className={`p-6 md:p-8 space-y-8 border-t border-gray-800 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15"
                    : "bg-gradient-to-r from-[#1E252D]/50 to-[#FF8C00]/10"
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
                          className={`p-4 rounded-lg bg-gradient-to-r ${isDarkMode ? "from-[#050A0E] to-[#FF8C00]/10" : "from-[#1E252D]/40 to-[#FF8C00]/5"} border ${catStyle.border} shadow-sm`}
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
                  ⚠️ [MOBILE SCREEN DETECTED] Tabuľka s 36 pojmami je
                  preformátovaná strictly do bionických klikateľných tooltipov
                  priamo v texte pre maximálnu šetrnosť biologickej RAM
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
        <section className="mt-12 rounded-xl overflow-hidden border border-gray-855 bg-[#050A0E]/40 p-6 relative z-10">
          <div className="text-xs text-[#BF00FF] font-bold font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping" />
            <span>🎙️ Doplnkový Audio Modul: Inštalačný podcast</span>
          </div>
          <GlobalNodePodcast
            nodeId="id05_01_investments_ui_space"
            dimColor="#BF00FF"
          />
        </section>

        {/* =====================================================================
            10. 🚀 UPLINK TERMINAL (Vykonaj akciu hneď teraz!)
            ===================================================================== */}
        <section
          className={`mt-16 border-2 border-[#FF8C00]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FF8C00]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FF8C00]/10 hover:border-[#FF8C00]/30"
          }`}
        >
          {/* Bouncing Lock strictly v neónovo oranžovej farbe dimenzie #FF8C00 */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[#050A0E] p-3 rounded-full border-2 animate-bounce shadow-[0_0_15px_rgba(255,140,0,0.4)]"
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
              [ ASSETS-MATRIX EXEKUČNÝ UPLINK TERMINAL ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj biologický hardvér krváca v pomalom, inflačnom premazávaní
              tvojich zbytočne nahromadených úspor. Tvoje kognitívne obvody
              bežia v stave existenčnej paniky a emočného strachu. Odinštaluj
              neexekutívny autopilot zo svojho BIOS-u a aktivuj asynchrónnu
              akumuláciu zdrojov strictly pre prechod na OS Genesis.
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
              NEXUS OMEGA KEY ]
            </a>

            <a
              href="https://ko-fi.com/nexuscore2mb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound("click")}
              className="px-6 py-3.5 bg-white text-black hover:bg-white/90 text-xs font-black uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,140,0,0.25)] flex items-center gap-2"
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
