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
// 👑 HLAVNÝ KOMPONENT UZLA ID03_NODE_01 (CASH ENGINE)
// =====================================================================
export default function Node_ID03_01() {
  const NODE_ID = "ID03-01";
  const TIER_COLOR = "#39FF14"; // PRO Tier
  const DIM_COLOR = "#FFD700"; // Pure Gold

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

  // Simulator States - CASH-ENGINE SIMULATOR
  const [incomeInput, setIncomeInput] = useState(730);
  const [expensesInput, setExpensesInput] = useState(650);
  const [mrrInput, setMrrInput] = useState(0);
  const [isRootPriority, setIsRootPriority] = useState(false);
  const [isSandboxActive, setIsSandboxActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný Cash-Engine monitor. Sledujem I/O dátové prúdy.",
    "[STATUS] Bežíš strictly v kvadrante Z. ",
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
    Math.max(0, Math.round(isSandboxActive ? 15 : 75)),
  );
  const liveFreeRam = Math.max(
    0,
    100 -
      Math.round(
        (expensesInput / Math.max(1, incomeInput)) * 80 + liveLimbicNoise * 0.2,
      ),
  );
  const liveWatts = Math.min(
    100,
    Math.max(
      5,
      Math.round(
        100 -
          (expensesInput > incomeInput ? 45 : 0) +
          (isRootPriority ? 15 : -10) +
          (isSandboxActive ? 20 : 0),
      ),
    ),
  );
  const liveSuverenity = Math.min(
    100,
    Math.max(
      0,
      Math.round((mrrInput / Math.max(1, incomeInput + mrrInput)) * 100),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setIncomeInput(730);
      setExpensesInput(150);
      setMrrInput(150);
      setIsRootPriority(true);
      setIsSandboxActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný. Zbytočný dopamínový dopad bol vyčistený. Cash-Engine vykazuje 150 € MRR zvrchovanosť!",
        `[STATUS] Voľná RAM: 97% // Limbic Noise: 15% // Watts: 100% // Suverenita: 17%`,
        ...prev,
      ]);
    } else if (actionType === "defragment") {
      setExpensesInput(300);
      setLogs((prev) => [
        "[SUCCESS] Dlh 3500 € defragmentovaný strictly do mikro-splátok. Kognitívna RAM bola uvoľnená.",
        ...prev,
      ]);
    } else if (actionType === "sandbox") {
      setIsSandboxActive(!isSandboxActive);
      if (!isSandboxActive) {
        setExpensesInput(350);
        setLogs((prev) => [
          "[SUCCESS] Karanténa na zbytočné výdavky aktívna. Skafander prechádza do nízkonapäťového režimu.",
          ...prev,
        ]);
      } else {
        setExpensesInput(650);
        setLogs((prev) => [
          "[WARNING] Karanténa deaktivovaná. Parazitické subrutiny znova odčerpávajú zdroje.",
          ...prev,
        ]);
      }
    } else if (actionType === "reset") {
      setIncomeInput(730);
      setExpensesInput(650);
      setMrrInput(0);
      setIsRootPriority(false);
      setIsSandboxActive(false);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu.",
        "[STATUS] I/O toky obnovené na predvolené zaťaženie.",
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
        "Biologické telo a neurologická schránka, slúžiaca ako tvoj primárny hardvérový oblek pre beh vedomia.",
    },
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "it_term",
      translation: "biologický mozog a spracovanie nervových impulzov",
      tooltip:
        "Biologický mozog a nervová ústredňa, ktorá filtruje chemické signály reality a riadi takty vnímania.",
    },
    ram: {
      term: "RAM",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kapacita tvojej krátkodobej pozornosti",
      tooltip:
        "Kapacita krátkodobej pozornosti and zamerania, ktorú parazitické podprogramy neustále vyťažujú.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "it_term",
      translation: "jednotka biologickej a duševnej energie",
      tooltip:
        "Jednotka biologickej, elektrickej a nervovej sily organizmu, potrebná pre exekúciu zvrchovanej vôle.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "úniky pozornosti a životnej sily",
      tooltip:
        "Nekontrolované straty energie a pozornosti vyvolané starými mentálnymi konfliktami a nespracovanými logmi.",
    },
    cache_memory: {
      term: "Cache Memory",
      category: 2,
      categoryType: "it_term",
      translation: "vyrovnávacia pamäť podvedomia a zvykov",
      tooltip:
        "Krátkodobé úložisko podvedomia pre rýchly prístup, ktoré sa bez dôkladného shutdownu zanáša dopamínovým odpadom.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "it_term",
      translation: "izolačný filter a smerovač dátových tokov",
      tooltip:
        "Sieťový uzol smerujúci a maskujúci toky dát, ktorý zachytáva vonkajší kognitívny tlak pred tvojím local hostom.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "it_term",
      translation: "izolované karanténne prostredie pre testovanie anomálií",
      tooltip:
        "Miestne bezpečne oddelené prostredie, v ktorom spúšťaš rizikové klientske vzorce bez ohrozenia jadra biosu.",
    },
    os_genesis: {
      term: "OS Genesis",
      category: 13,
      categoryType: "home_ui_term",
      translation: "zvrchovaný operačný systém pre ľudské vedomie",
      tooltip:
        "Nový, vyčistený operačný systém vedomia, ktorý staviaš od nuly po vymazaní legacy vzorcov a parazita.",
    },
    social_engine: {
      term: "Social Engine",
      category: 5,
      categoryType: "work_term",
      translation: "vonkajší manipulatívny systém a spoločenské programy",
      tooltip:
        "Súbor spoločenských inštitúcií, noriem a programov, ktoré ťa domestikujú do polohy poslušnej klientskej batérie.",
    },
    limbic_noise: {
      term: "Limbic Noise",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kognitívny šum a emočné vyrušenia",
      tooltip:
        "Nízkofrekvenčný emočný a mentálny hluk limbrického systému vyvolaný strachom, chamtivosťou a pochybnosťami.",
    },
    mrtve_knihy: {
      term: "Mŕtve knihy",
      category: 9,
      categoryType: "philosophical_term",
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
      category: 10,
      categoryType: "psychological_term",
      translation: "dočasná sociálna maska",
      tooltip:
        "Súbor psychologických rolí a správaní, ktoré biologický nosič používa na interakciu so spoločnosťou na ochranu vlastného vnútra.",
    },
    avatar: {
      term: "Avatar",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "vonkajší reprezentant v realite",
      tooltip:
        "Ukutá a zámerne konfigurovaná sociálna maska, cez ktorú bezpečne komunikuješ s Matrixom bez odhalenia jadra.",
    },
    firewall: {
      term: "Firewall",
      category: 2,
      categoryType: "it_term",
      translation: "sieťový štít a filter prichádzajúcich informácií",
      tooltip:
        "Kognitívna bezpečnostná vrstva odmietajúca neoprávnené požiadavky, manipulatívne pakety a emočné vyrušenia.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "it_term",
      translation: "miestny, bezpečný priestor tvojej izby a mysle",
      tooltip:
        "Izolovaný lokálny počítačový uzol, tvoje vývojové a meditačné útočisko oslobodené od vonkajšieho sieťového šumu.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "it_term",
      translation: "zakázaný a zablokovaný komunikačný kanál",
      tooltip:
        "Hardvérovo alebo softvérovo vypnutý komunikačný port, cez ktorý odmietaš prijímať toxický sociálny alebo klientsky traffic.",
    },
    debugging: {
      term: "Debugging",
      category: 3,
      categoryType: "ai_concept",
      translation: "proces odstraňovania chýb a deštruktívnych návykov",
      tooltip:
        "Chladné, analytické hľadanie a premazávanie vadného kódu, chýb v logike vnímania a legacy presvedčení v pamäti.",
    },
    root_access: {
      term: "Root Access",
      category: 4,
      categoryType: "system_command",
      translation: "najvyššie administrátorské práva nad systémom",
      tooltip:
        "Plné administrátorské práva nad biologickým nosičom, tvojím podvedomím a exekúciou času v materiálnom svete.",
    },
    format_c: {
      term: "Format C:",
      category: 4,
      categoryType: "system_command",
      translation: "úplné vyčistenie pevného disku od balastu",
      tooltip:
        "Nekompromisný systémový príkaz na kompletné zmazanie starých súborov, toxických väzieb a nefunkčného softvéru.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "it_term",
      translation: "základné hardvérové nastavenie organizmu",
      tooltip:
        "Základný operačný kód biologického hardvéru, koordinujúci cirkadiánne cykly, autonómny nervový systém a vitalitu.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "tiché, bdelé vedomie bez emočnej reaktivity",
      tooltip:
        "Čisté, neidentifikované vedomie prítomného okamihu, ktoré pozoruje procesy mysle bez akéhokoľvek posudzovania.",
    },
    ui_space: {
      term: "UI Space",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "používateľské rozhranie tvojho vnútorného priestoru",
      tooltip:
        "Zobrazené prostredie tvojho vedomia a pozornosti, ktoré si vyžaduje čistý dizajn a nulový informačný šum.",
    },
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré nefunkčné presvedčenia a vzorce chovania",
      tooltip:
        "Zastaralý a toxický program prebratý od spoločnosti, ktorý beží podvedome a bráni ti v asynchrónnom napredovaní.",
    },
    botnet: {
      term: "Botnet",
      category: 5,
      categoryType: "work_term",
      translation: "sieť zotročených a nevedomých myslí",
      tooltip:
        "Globálna sieť koordinovaných, zotročených biologických nosičov, plniacich mechanicky príkazy centrálneho servera Matrixu.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "it_term",
      translation: "najmenšia jednotka prichádzajúcej informácie",
      tooltip:
        "Základný komunikačný balík dát prichádzajúci z okolia, ktorý tvoj kognitívny firewall must be preskenovať a zhodnotiť.",
    },
    cashflow: {
      term: "Cashflow",
      category: 6,
      categoryType: "finance_term",
      translation: "tok finančnej energie",
      tooltip:
        "I/O tok finančnej energie prechádzajúci cez tvoj systém, určujúci tvoju celkovú výpočtovú šírku pásma.",
    },
    fiat: {
      term: "Fiat",
      category: 6,
      categoryType: "finance_term",
      translation: "štátom krytá tlačená mena",
      tooltip:
        "Ničím nekrytá štátna mena, slúžiaca v Matrixe asypmtoticky ako základné, devalvujúce platidlo za tvoj drahocenný čas.",
    },
    zombie_horda: {
      term: "Zombie Horda",
      category: 6,
      categoryType: "finance_term",
      translation: "staré nebezpečné dlhy a veritelia",
      tooltip:
        "Skupina deštruktívnych veriteľov a starých dlhov, ktoré ti na pozadí neustále požierajú výpočtový výkon a RAM.",
    },
    mrr: {
      term: "MRR",
      category: 7,
      categoryType: "business_term",
      translation: "mesačne sa opakujúci príjem z aktív",
      tooltip:
        "Pravidelný, asynchrónne sa opakujúci tok finančných prostriedkov generovaný z tvojich vlastných digitálnych aktív.",
    },
  };

  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID03_01
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
      id: 3,
      key: "ai_concept",
      translation: "AI Pojem / Augmentácia",
      description:
        "Asynchrónna integrácia neurónových sietí, agentic workflows, modelov a kompilátorov.",
    },
    {
      id: 4,
      key: "system_command",
      translation: "Systémový príkaz / Akcia",
      description:
        "Nekompromisné exekučné príkazy vôle, okamžité reštarty, vymazanie cache a formátovanie pamäte.",
    },
    {
      id: 5,
      key: "work_term",
      translation: "Work / Kvadrant Z",
      description:
        "Limity zamestnaneckého pomeru, krysie preteky, mechanické plnenie noriem a prenájom času.",
    },
    {
      id: 6,
      key: "finance_term",
      translation: "Finance / Toky",
      description:
        "Smerovanie fiat meny, osobné cashflow tabuľky, premazávanie zlého dlhu a obrana rozpočtu.",
    },
    {
      id: 7,
      key: "business_term",
      translation: "Business / Budovanie B-Systému",
      description:
        "Vlastné digitálne aktíva, autorské práva, asymetrické ponuky, Nexus Agency a predajné webhooky.",
    },
    {
      id: 9,
      key: "philosophical_term",
      translation: "Filozofický Pojem - Mŕtve knihy",
      description:
        "Teoretické koncepty a spisy antických stoikov, Osho, Tolle a Ruiz, transformované do taktických PDF.",
    },
    {
      id: 10,
      key: "psychological_term",
      translation: "Psychologický Pojem - Mŕtve knihy",
      description:
        "Hlbinná psychológia, Carl Gustav Jung, obranné mechanizmy vedomia, dekonštrukcia tieňa a Persona.",
    },
    {
      id: 12,
      key: "personal_ui_term",
      translation: "Personal UI Pojem - Duševno / ČIERNE SLOVO",
      description:
        "Myšlienkový balast, autopilot, Komentátor Parazit, otváranie starých konfliktov a preťažovanie RAM.",
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
        title="ID03 CASH-ENGINE // Finance UI Space (Peniaze ako výpočtová energia a šírka pásma Siete)"
        description="01. [PRO] Finance UI Space (Peniaze ako výpočtová energia a šírka pásma Siete)."
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
              PORT: finance.projekt-nexus.sk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-ping"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <span>
                DIMENSION:{" "}
                <strong
                  className="text-[#FFD700] font-black"
                  style={{ color: DIM_COLOR }}
                >
                  ID03 - CASH-ENGINE
                </strong>
              </span>
            </div>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500">THEME:</span>
            <button
              onClick={handleThemeToggle}
              className={`px-3 py-1 border transition-all duration-200 uppercase tracking-widest text-[10px] font-black ${
                isDarkMode
                  ? "border-[#FFD700] text-[#FFD700] bg-[#FFD700]/5 shadow-[0_0_10px_rgba(255,215,0,0.15)]"
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
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"
          }`}
        />

        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-widest text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/30 px-2 py-0.5 rounded font-black uppercase">
                PRO TIER
              </span>
              <span className="text-gray-500 font-mono text-xs">
                Node_ID03_01 // Finance UI Space
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              FINANCE UI SPACE
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              01. [PRO] Finance UI Space (Peniaze ako výpočtová energia a šírka
              pásma Siete). Peniaze nie sú tvoj cieľ, sú čistou kognitívnou
              energetickou jednotkou a šírkou pásma pre tvoj biologický
              Skafander.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: finance.projekt-nexus.sk</span>
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
              🚨 ERROR LOG // Financial_Deficit // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Väčšina nevedomých batérií v Matrixe vníma peniaze cez
              prizmu chamtivosti, hriechu alebo nedosiahnuteľného luxusu. Tento
              závažný kognitívny log udržiava ich biologické{" "}
              <DMLTooltip slug="cpu" label="CPU" /> v neustálom, zničujúcom
              existenčnom strese. Prestaň sa správať ako zotročený klient
              cudzích systémov. Peniaze nie sú tvoj cieľ. Peniaze sú čistá{" "}
              <strong className="text-[#FF003C] font-black">
                výpočtová energia
              </strong>
              , energetické palivo <DMLTooltip slug="watts" label="Watts" /> a
              šírka pásma{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (Bandwidth)
              </span>
              , ktorú tvoj <DMLTooltip slug="skafander" label="Skafander" />{" "}
              potrebuje na plynulé operovanie a nákup absolútnej časovej
              suverenity v Sieti. Ak tvoja peňaženka krváca a systém permanentne
              vyhadzuje{" "}
              <strong className="text-[#FF003C] font-black">
                Error 402: PAYMENT_REQUIRED
              </strong>
              , tvoja kognitívna <DMLTooltip slug="ram" label="RAM" /> je
              paralyzovaná strachom zo zajtrajška a tvoj exekučný výkon klesá k
              nule. Nemôžeš programovať zvrchovaný{" "}
              <DMLTooltip slug="os_genesis" label="OS Genesis" /> na{" "}
              <DMLTooltip slug="local_host" label="Local Host" />
              -e, ak nemáš z čoho zaplatiť nájom a tvoj server je odpojený od
              napájania. Uval okamžitú karanténu na chudobné legacy programy,
              stabilizuj svoje toky a premeň svoj finančný príjem na
              nekompromisný obranný{" "}
              <DMLTooltip slug="firewall" label="Firewall" />. Spusť svoj
              Cash-Engine.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID03_01_finance_ui_space.md</span>
            <span className="font-bold text-red-400">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* =====================================================================
            4. VIDEO INJEKTOR
            ===================================================================== */}
        <section className="mb-12 rounded-xl overflow-hidden border-2 border-[#FFD700]/30 shadow-lg">
          <div className="bg-[#050A0E] py-2 px-4 border-b border-gray-800 flex justify-between items-center text-xs">
            <span
              className="text-[#FFD700] font-bold font-mono uppercase tracking-widest flex items-center gap-2"
              style={{ color: DIM_COLOR }}
            >
              <PlayCircle
                className="w-4 h-4 text-[#FFD700]"
                style={{ color: DIM_COLOR }}
              />
              GlobalNodeVideo: Video Injektor
            </span>
            <span className="text-gray-500 font-mono">
              id03_node_01_finance_ui_space_video
            </span>
          </div>
          <GlobalNodeVideo nodeId="pkIdSHPusM8" dimColor="gold" />
        </section>

        {/* =====================================================================
            5A. INTERAKTÍVNE PREPÍNAČE
            ===================================================================== */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => handleTabChange("chat")}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
              activeTab === "chat"
                ? "bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.15)]"
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
                ? "bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.15)]"
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
                  className="w-3.5 h-3.5 text-[#FFD700]"
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.architect
                      ? "transparent"
                      : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFD700]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🟢 [ ARCHITECT QUOTE ] (Prežitá Pravda)
                  </span>
                  {openTrinity.architect ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.architect && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Ako CyberTech Architekt som musel prejsť tvrdým dňom nula,
                      aby som pochopil, že finančná sloboda nie je o miliónoch
                      na pláži. V lete 2018, po ťažkom biologickom kolapse a
                      diagnostike paranoidnej schizofrénie F20.0 v Sektore
                      Trnava, bol môj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> takmer
                      odpísaný. Ostal som ležať strictly s nulovým výkonom.
                      Matrix ma vyhodil ako nepotrebný proces. Moje finančné{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> zachránila len
                      okamžitá a chladná re-architektúra tokov: zriadil som si
                      invalidný dôchodok 530,00 € slúžiaci ako stabilizačný{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />. K
                      tomu sa pridala energetická podpora 200,00 € od strýka
                      Mirova, s ktorým zdieľam základňu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Materskú loď)
                      </span>
                      . Celkový vstupný príjem strictly činí{" "}
                      <strong className="text-[#FF003C] font-black">
                        730,00 €
                      </strong>
                      . Z hľadiska mŕtvych kníh je to pod hranicou chudoby, no
                      môj asertívny inžiniersky systém dokázal, že to stačí na
                      plynulý beh zvrchovanej stanice. Úplne som vyradil stravu
                      a cigarety z tohto fixného účtu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (riešim ich externými alternatívnymi cestami)
                      </span>{" "}
                      a ostala mi strictly čistá exekutívna voľná{" "}
                      <DMLTooltip slug="ram" label="RAM" /> vo výške{" "}
                      <strong className="text-white font-black">
                        ~80,00 €
                      </strong>{" "}
                      mesačne. Týchto 80 € strictly investujem do digitálneho
                      arzenálu – Google One, predplatné Gemini, YT Premium a 20
                      € dedikujem strictly na rozvoj Projektu Nexus. Moje
                      prežitie stoi strictly na zostatku +1,00 € a pravidelnom
                      10 € DCA vklade u môjho bankového mentora. Dokázal som
                      utíšiť{" "}
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
                      existenčného strachu a z ticha svojej izby na lacnom
                      tablete programujem zvrchovaný{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />.
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.ai ? "transparent" : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFD700]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🤖 [ SYSTEM: AI GEMINI ] (Kybernetická Analýza)
                  </span>
                  {openTrinity.ai ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.ai && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Z hľadiska systémovej kybernetiky a alokácie zdrojov{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Resource Allocation)
                      </span>{" "}
                      predstavujú financie v Sieti ekvivalent prenosového výkonu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Bandwidth)
                      </span>{" "}
                      a prúdu. Každý biologický hardvér vyžaduje pre svoju
                      prevádzku konštantný prísun energie{" "}
                      <DMLTooltip slug="watts" label="Watts" /> – napájanie
                      serverov, licenčné poplatky za vývojárske nástroje a
                      fyzické prežitie. Bankový systém funguje strictly ako
                      globálna centralizovaná databáza, pričom tvoje osobné
                      úspory sú len číselné záznamy{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Data Packets)
                      </span>{" "}
                      na zdieľanom hostingu.
                    </p>
                    <p>
                      Ak tvoje I/O dátové prúdy vykazujú trvalé anomálie a tvoje
                      výdavky{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Output)
                      </span>{" "}
                      dlhodobym vyjadrením prevyšujú tvoje reálne príjmy{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Input)
                      </span>
                      , v systéme vzniká masívny{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                      finančného charakteru. Tento stav rýchlo vyústi do
                      vyčerpania rezervnej kapacity a následného kolapsu celého
                      bio-procesora. Kybernetická defragmentácia osobných
                      financií preto vyžaduje zavedenie prísnych bezpečnostných
                      filtrov na ochranu kognitívnej kapacity{" "}
                      <DMLTooltip slug="ram" label="RAM" /> pred lacným
                      dopamínovým spamom a nastavenie nízkonapäťovej{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Low-Voltage)
                      </span>{" "}
                      prevádzky pre prežitie akéhokoľvek vonkajšieho sieťového
                      kolapsu.
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
                      ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40"
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"
                  }`}
                  style={{
                    borderBottomColor: openTrinity.audit ? "transparent" : "",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#FFD700]"
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🪞 [ AUDIT &amp; KOMPARÁCIA ] (Mŕtve knihy)
                  </span>
                  {openTrinity.audit ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openTrinity.audit && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Ak preosejeme nánosy akademického šumu a emočného pátosu z
                      finančnej literatúry, môžeme sémanticky validovať prežité
                      pravdy so stabilným jadrom mŕtvych kníh:
                    </p>
                    <p>
                      1.{" "}
                      <strong className="text-white font-black">
                        Robert T. Kiyosaki{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Cashflow Kvadrant)
                        </span>
                        :
                      </strong>{" "}
                      Kiyosaki presne definuje Kvadrant &quot;Z&quot;{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (zamestnanec)
                      </span>{" "}
                      a &quot;S&quot;{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (samostatne zárobkovo činná osoba)
                      </span>{" "}
                      ako legacy prostredie s obmedzeným výpočtovým pásmom{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Bandwidth Limit)
                      </span>
                      , kde nevedomé batérie predávajú svoju konečnú{" "}
                      <DMLTooltip slug="ram" label="RAM" /> za rýchlo
                      znehodnocujúce sa <DMLTooltip slug="fiat" label="Fiat" />{" "}
                      dáta. Naša dekompresia nariaďuje okamžitý presun do
                      pravého spektra Siete – budovaním franšízy Genesis{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Kvadrant M)
                      </span>{" "}
                      a auto-DCA investovaním{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Kvadrant I)
                      </span>{" "}
                      preberáš{" "}
                      <DMLTooltip slug="root_access" label="Root Access" />{" "}
                      práva nad tokom prúdu.
                    </p>
                    <p>
                      2.{" "}
                      <strong className="text-white font-black">
                        Don Miguel Ruiz{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Štyri dohody)
                        </span>
                        :
                      </strong>{" "}
                      Piaty kognitívny firewall{" "}
                      <span className="text-[#BF00FF] italic opacity-85">
                        &quot;Buď skeptický, ale uč sa počúvať&quot;
                      </span>{" "}
                      ťa varuje pred domestikačným softvérom reklám. Matrix ťa
                      programuje k nákupu zbytočného hardvérového statusu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (drahé autá, luxusné oblečenie na dlh)
                      </span>
                      , čím tvoj systém infikuje nebezpečným malvérom v podobe{" "}
                      <DMLTooltip slug="zombie_horda" label="Zombie Horda" />{" "}
                      veriteľov.
                    </p>
                    <p>
                      3.{" "}
                      <strong className="text-white font-black">
                        Eckhart Tolle{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Sila prítomnosti)
                        </span>
                        :
                      </strong>{" "}
                      Strach o prežitie a neustále prepočítavanie fiktívnych
                      budúcich scenárov sú len chybné logické podprogramy Ega
                      bežiace vo tvojej{" "}
                      <DMLTooltip slug="cache_memory" label="Cache Memory" />.
                      Keď premostíš svoje vnímanie do prítomnosti a uvalíš na
                      finančné plánovanie prísny, asertívny{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" />, tvoj
                      organizmus upadne do hlbokého energetického ticha.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* 🧩 HLAVNÝ OBSAH - DEKOMPRESIA (FÁZA MOFU - Painkiller) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen
                  className="w-3.5 h-3.5 text-[#FFD700]"
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
                  style={{
                    borderBottomColor: openMofu.anatomy ? "transparent" : "",
                  }}
                >
                  <span>1. Anatómia konceptu (Rozbitie ilúzie)</span>
                  {openMofu.anatomy ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.anatomy && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Peniaze vo tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> nie sú
                      meradlom tvojej osobnej hodnoty, ani potvrdením tvojej
                      fiktívnej spirituálnej čistoty. Rozbi túto neexekutívnu
                      ilúziu raz a navždy. V Projekte Nexus definujeme peniaze
                      striktne ako{" "}
                      <strong className="text-white font-black">
                        kognitívnu šírku pásma (Cognitive Bandwidth)
                      </strong>
                      .
                    </p>
                    <p>Predstav si nasledovnú situáciu:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          NPC v krysích pretekoch:
                        </strong>{" "}
                        Beží na Factory Settings. Celý mesiac páli svoje
                        procesorové cykly, predáva životný čas, aby dostal malý
                        mesačný balík <DMLTooltip slug="fiat" label="Fiat" />{" "}
                        žetónov. V ten istý deň, kedy mu balík dorazí, ho
                        kompletne rozdistribuuje iným korporátnym databázam{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (leasingy, splátky, luxus, zbytočné predplatné)
                        </span>
                        . Jeho zostatok RAM klesá na 0% a on ostáva uväznený v
                        nekonečnej klientskej prenosovej slučke.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Prebudený Operátor:
                        </strong>{" "}
                        Vníma svoj{" "}
                        <DMLTooltip slug="skafander" label="Skafander" /> ako
                        zvrchovaný lokálny server. Chápe, že každý cent, ktorý
                        ušetrí a presmeruje strictly do vlastnej infraštruktúry{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (nákup kníh, stabilizácia bývania, AI predplatné,
                          cloud)
                        </span>
                        , zvyšuje his výpočtovú silu. Na prežitie so{" "}
                        <DMLTooltip
                          slug="proxy_server"
                          label="Proxy server-om"
                        />{" "}
                        so 730,00 € nepotrebuje schválenie Matrixu. His prežitá
                        pravda stojí strictly na nízkych nákladoch a ochrane
                        vlastného <DMLTooltip slug="bios" label="BIOS" />
                        -u pred akýmkoľvek externým šumom.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
                  style={{
                    borderBottomColor: openMofu.mechanism ? "transparent" : "",
                  }}
                >
                  <span>
                    2. Mechanizmus Matrixu (Ako Matrix vysáva tvoju energiu)
                  </span>
                  {openMofu.mechanism ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.mechanism && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Centrálny{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu je navrhnutý na bleskový a tichý zber tvojej
                      biologickej energie. Prežíva vďaka tomu, že tvoj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> udržiava
                      v permanentnom kognitívnom deficite.
                    </p>
                    <p>
                      Tento parazitický zber prebieha cez tri nechránené porty:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Infekcia dlhovým malvérom (
                          <DMLTooltip
                            slug="zombie_horda"
                            label="Zombie Horda"
                          />
                          ):
                        </strong>{" "}
                        Bankový botnet ti neustále posiela notifikačné pakety s
                        ponukami na &quot;ľahké spotrebné úvery&quot; a kreditné
                        karty. Akonáhle tento malvér nahráš do svojho
                        podvedomia, tvoje <DMLTooltip slug="cpu" label="CPU" />{" "}
                        začne pracovať strictly pre cudzie databázy, aby si
                        splatil staré chyby v príkaze.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívne preťaženie (Dopamínový DDoS):
                        </strong>{" "}
                        Algoritmy na sociálnych sieťach ti neustále vnucujú
                        umelý statusový deficit. Cez neustály{" "}
                        <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
                        ťa presviedčajú, že bez nových materiálnych aktualizácií
                        si len nekompatibilný proces, čím ťa nútia páliť cenné{" "}
                        <DMLTooltip slug="watts" label="Watts" /> na nákup
                        nepotrebného balastu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Blížiaca sa Čierna labuť (Black Swan):
                        </strong>{" "}
                        Matrix ťa drží v ilúzii, že kým funguje tvoj externý
                        záložný zdroj{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (rodinná pomoc, Mirova karta)
                        </span>
                        , si v bezpečí. No matematika nepustí. Keď tento externý
                        napájací port definitívne zhasne a tvoj{" "}
                        <DMLTooltip slug="cashflow" label="Cashflow" /> zažije
                        tvrdý <DMLTooltip slug="format_c" label="Format C:" />{" "}
                        (Reset), neprebudený systém utrpí fatálny Blackout. Ak
                        nezaplátaš tento{" "}
                        <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                        spustením vlastného Cash-Enginu skôr, tvoj systém
                        vyhorí.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
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
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.transformation && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Prevzatie plných práv (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      tvojím Finance{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> vyžaduje
                      okamžité odladenie chýb (
                      <DMLTooltip slug="debugging" label="Debugging" />) a
                      preprogramovanie tokov energie.
                    </p>
                    <p>
                      Nasadíme nasledujúce trojstupňové systémové premostenie:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Aktivácia Root Priority Protocol (Zaplať najprv sebe):
                        </strong>{" "}
                        Hneď ako na tvoj účet dorazí akýkoľvek{" "}
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />{" "}
                        príjmu, prvý balík dát{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (napr. strictly 10 €)
                        </span>{" "}
                        sa automaticky odošle do tvojho investičného archívu pre
                        dlhodobý asynchrónny rast. Matrixu pridelíš len to, čo
                        ti strictly ostane. Ak to urobíš naopak, nikdy neuvoľníš
                        ani jeden voľný bit RAM.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény (Minimalistický Sandbox):
                        </strong>{" "}
                        Zakomentuj zo svojho rozpočtu všetky parazitické
                        subrutiny. Strava, zlozvyky, drahé stimulanty a
                        statusové poplatky musia prejsť tvrdým rezom. Tvoje
                        prežitie so strictly +1 € zostatkom v tichu localhostu
                        ti vráti stratenú energiu a odstaví{" "}
                        <DMLTooltip
                          slug="social_engine"
                          label="Social Engine"
                        />
                        .
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Defragmentácia Zombie Hordy:
                        </strong>{" "}
                        Tvoj dlh 3500 € je nebezpečný proces prebiehajúci na
                        pozadí. Nastav strictly mikro-splátkový systém{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (zredukovaný na minimum)
                        </span>
                        , aby si zabránil vyhoreniu procesora, a chladne, s
                        nulovými emóciami maže tento malvér z minimálneho
                        cashflowu.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
                >
                  <span>4. Nástroje a Protokoly (Tvoj Antivírus)</span>
                  {openMofu.protocols ? (
                    <ChevronUp
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-4 h-4 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                  )}
                </button>
                {openMofu.protocols && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Aby tvoj asynchrónny Cash-Engine pracoval s maximálnou
                      stabilitou, nariaďujem tvojmu{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />
                      -u denné spúšťanie týchto troch zvrchovaných programov:
                    </p>
                    <div className="space-y-4 pl-4 border-l-2 border-yellow-500/30 text-gray-300">
                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            1. TICHÝ BOOT (Ranná synchronizácia):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Po rannom prebudení tvoj kognitívny{" "}
                            <DMLTooltip slug="firewall" label="Firewall" />{" "}
                            strictly blokuje akýkoľvek prístup k e-mailom{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (dusan.fajnor.finance@gmail.com)
                            </span>{" "}
                            a bankovým aplikáciám po dobu prvej hodiny dňa.
                          </li>
                          <li>
                            Žiadne vizuálne skenovanie cudzích databáz. Tvoj
                            systém beží strictly na localhoste, chráni{" "}
                            <DMLTooltip slug="ram" label="RAM" /> a pripravuje
                            sa na kompiláciu exekučného kódu.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            2. RESOURCE ALLOCATION MONITOR (Denná
                            optimalizácia):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Každý odchádzajúci výdavok, vrátane toho
                            najmenšieho, strictly zapisuješ do svojej lokálnej,
                            offline Excel databázy na Notebooku.
                          </li>
                          <li>
                            Akýkoľvek finančný{" "}
                            <DMLTooltip
                              slug="network_packet"
                              label="Network Packet"
                            />{" "}
                            pred schválením odoslania must be prejsť
                            24-hodinovým karanténnym{" "}
                            <DMLTooltip slug="sandbox" label="Sandbox" />
                            -om, aby sa zamedzilo impulzívnym nákupom vyvolaným
                            emočným parazitom.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            3. COMMUNICATION SLA SHIELD (Večerný shutdown):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Po 17:00 hodine sa finančné a klientske porty
                            strictly prepínajú do offline režimu.{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            blokuje prichádzajúce klientske požiadavky na platby
                            či zmeny zadania.
                          </li>
                          <li>
                            Uvoľňuješ kognitívne obvody, spúšťaš kompletný
                            preplach{" "}
                            <DMLTooltip
                              slug="cache_memory"
                              label="Cache Memory"
                            />{" "}
                            a pripravuješ hardvér na hlbokú nočnú regeneráciu.
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
            5C. TAB 2: AKČNÝ SIMULÁTOR (CASH-ENGINE SIMULATOR)
            ===================================================================== */}
        {activeTab === "simulator" && (
          <section className="border-2 border-[#FFD700]/30 bg-[#050A0E]/60 p-6 md:p-8 rounded-xl font-mono relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setSimulatorHelp(!simulatorHelp)}
                className="p-1.5 border border-gray-800 hover:border-gray-600 rounded bg-[#050A0E] transition-all"
                title="Simulátor pomocník"
              >
                <HelpCircle
                  className="w-4 h-4 text-[#FFD700]"
                  style={{ color: DIM_COLOR }}
                />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 border-b border-gray-900 pb-3">
              <span
                className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"
                style={{ backgroundColor: DIM_COLOR }}
              />
              <h2 className="text-sm font-black uppercase text-white">
                📊 EXEKUČNÝ SIMULÁTOR: CASH-ENGINE &amp; DEFRAGMENTATION
                DIAGNOSTICS
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér vizualizuje I/O toky finančnej energie vo tvojom
                  Cash-Engine. Počíta, koľko kognitívnej RAM a biologických
                  Watts ti zostáva na zvrchovaný rozvoj OS Genesis.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong> Nastav
                  svoj celkový mesačný príjem, parazitické výdavky a MRR z
                  vlastných aktív. Aktivuj Root Priority Protocol pre auto-vklad
                  alebo Karanténny Sandbox na premazanie zbytočného statusového
                  balastu.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Sleduj live
                  diagnostický panel: miera preťaženia RAM, úniky energie v
                  Watts, miera hrozby Zombie Hordy a celkový Index Finančnej
                  Suverenity.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders
                    className="w-3.5 h-3.5 text-[#FFD700]"
                    style={{ color: DIM_COLOR }}
                  />
                  Nastavenie tokov energie
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Vstupný mesačný príjem (Input):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {incomeInput} €
                      </span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="3000"
                      step="10"
                      value={incomeInput}
                      onChange={(e) => {
                        setIncomeInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Výstupné výdavky (Output):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {expensesInput} €
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="2500"
                      step="10"
                      value={expensesInput}
                      onChange={(e) => {
                        setExpensesInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Monthly Recurring Revenue (MRR):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {mrrInput} €
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1500"
                      step="10"
                      value={mrrInput}
                      onChange={(e) => {
                        setMrrInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
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
                    onClick={() => handleAction("defragment")}
                    className="flex-1 min-w-[120px] bg-yellow-600/10 hover:bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Defragmentácia dlhu
                  </button>
                  <button
                    onClick={() => handleAction("sandbox")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isSandboxActive
                        ? "bg-[#FFD700]/20 border-[#FFD700] text-[#FFD700]"
                        : "bg-[#FFD700]/5 border-[#FFD700]/20 text-[#FFD700]/60 hover:bg-[#FFD700]/10"
                    }`}
                    style={{
                      borderColor: isSandboxActive ? DIM_COLOR : "",
                      color: isSandboxActive ? DIM_COLOR : "",
                    }}
                  >
                    Karanténa Sandbox
                  </button>
                  <button
                    onClick={() => {
                      setIsRootPriority(!isRootPriority);
                      triggerSound("click");
                    }}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isRootPriority
                        ? "bg-[#FFD700]/20 border-[#FFD700] text-[#FFD700]"
                        : "bg-[#FFD700]/5 border-[#FFD700]/20 text-[#FFD700]/60 hover:bg-[#FFD700]/10"
                    }`}
                    style={{
                      borderColor: isRootPriority ? DIM_COLOR : "",
                      color: isRootPriority ? DIM_COLOR : "",
                    }}
                  >
                    Zaplať najprv sebe
                  </button>
                </div>
              </div>

              {/* HUD / LIVE DATA SECTION */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2 mb-4">
                    <Activity
                      className="w-3.5 h-3.5 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                    CASH-ENGINE // SYSTEM HEALTH MONITOR
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Zasvinenie RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 60 ? "text-red-400" : "text-[#FFD700]"}`}
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
                        className={`text-2xl font-black ${liveFreeRam < 40 ? "text-yellow-400" : "text-[#FFD700]"}`}
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
                        className={`text-2xl font-black ${liveWatts < 30 ? "text-red-400" : "text-[#FFD700]"}`}
                        style={{
                          color: liveWatts < 30 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {liveWatts}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Index Suverenity (MRR)
                      </span>
                      <span
                        className={`text-2xl font-black ${liveSuverenity < 25 ? "text-red-400" : "text-[#FFD700]"}`}
                        style={{
                          color: liveSuverenity < 25 ? "#FF003C" : DIM_COLOR,
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
                    <span>DIAG_LOG_CASH_CONSOLE // WORKFLOW</span>
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
              className="w-3.5 h-3.5 text-[#FFD700]"
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
                  ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40"
                  : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"
              }`}
            >
              <span className="flex items-center gap-2 text-white">
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-[#FFD700] ${isLexikonOpen ? "animate-pulse" : ""}`}
                  style={{ backgroundColor: DIM_COLOR }}
                />
                💠 EXTRACT Z NEXUS LEXIKÓNU (PREKLADOVÝ KĽÚČ V6.5)
              </span>
              {isLexikonOpen ? (
                <ChevronUp
                  className="w-4 h-4 text-[#FFD700]"
                  style={{ color: DIM_COLOR }}
                />
              ) : (
                <ChevronDown
                  className="w-4 h-4 text-[#FFD700]"
                  style={{ color: DIM_COLOR }}
                />
              )}
            </button>

            {isLexikonOpen && (
              <div
                className={`p-6 md:p-8 space-y-8 border-t border-gray-800 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15"
                    : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"
                }`}
              >
                <div className="border-b border-gray-855 pb-3 mb-2 flex flex-wrap justify-between items-center gap-2">
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

                    const catStyle = categoryStyles[cat.id] || {
                      hex: "#FFF",
                      border: "border-gray-800",
                    };

                    return (
                      <div key={cat.id} className="space-y-4">
                        {/* Hlavička kategórie */}
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-r ${isDarkMode ? "from-[#050A0E] to-[#FFD700]/10" : "from-[#1E252D]/40 to-[#FFD700]/5"} border ${catStyle.border} shadow-sm`}
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
                  ⚠️ [MOBILE SCREEN DETECTED] Tabuľka s 31 pojmami je
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
        <section className="mt-12 rounded-xl overflow-hidden border border-gray-855 bg-[#050A0E]/40 p-6 relative z-10">
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
          className={`mt-16 border-2 border-[#FFD700]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"
          }`}
        >
          {/* Bouncing Lock strictly v neónovo zlatej farbe dimenzie #FFD700 */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[#050A0E] p-3 rounded-full border-2 animate-bounce shadow-[0_0_15px_rgba(255,215,0,0.4)]"
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
              [ CASH-ENGINE EXEKUČNÝ UPLINK TERMINAL ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj finančný <DMLTooltip slug="cashflow" label="Cashflow" />{" "}
              momentálne krváca. Prenajímaš výpočtový výkon svojho Skafandra v
              kvadrante &quot;Z&quot; za znehodnocujúce sa{" "}
              <DMLTooltip slug="fiat" label="Fiat" /> dáta. Zastav tento{" "}
              <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> skôr, než
              Mirova podpora definitívne zhasne a systém zasiahne úplný
              Blackout. Prejdi strictly do kvadrantu &quot;M&quot; a aktivuj
              predaj Access Keys pre naštartovanie stability{" "}
              <strong style={{ color: DIM_COLOR }}>150 € MRR</strong>. Odomkni
              plný, zvrchovaný a nekompromisný{" "}
              <DMLTooltip slug="root_access" label="Root Access" /> k
              nízkonapäťovému a vyčistenému{" "}
              <DMLTooltip slug="os_genesis" label="OS Genesis" /> jadru.
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
              <Lock className="w-4 h-4" />[ 🎙️ ODOBERAŤ KASTROVANÉ PODCASTY:
              TIERS KO-FI ]
            </a>

            <a
              href="https://ko-fi.com/nexuscore2mb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound("click")}
              className="px-6 py-3.5 bg-white text-black hover:bg-white/90 text-xs font-black uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.25)] flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />[ 🚀 VYKONAŤ UPLINK: KÚPIŤ
              ACCESS KEYS ]
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
