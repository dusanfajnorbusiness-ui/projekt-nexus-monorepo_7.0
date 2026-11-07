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
// 👑 HLAVNÝ KOMPONENT UZLA ID03_NODE_04 (PRO)
// =====================================================================
export default function Node_ID03_04() {
  const NODE_ID = "ID03-04";
  const TIER_COLOR = "#39FF14"; // PRO Tier (Green)
  const DIM_COLOR = "#FFD700"; // Pure Gold (Yellow)

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

  // Simulator States - DAILY CASHFLOW & SUBSCRIPTION AUDIT SIMULATOR
  const [incomeInput, setIncomeInput] = useState(730);
  const [overheadInput, setOverheadInput] = useState(353);
  const [subscriptionsInput, setSubscriptionsInput] = useState(60); // Calendly Pro, Prisma, CapCut Pro, etc.
  const [foodCigarettesInput, setFoodCigarettesInput] = useState(150); // food & cigarettes
  const [dcaInput, setDcaInput] = useState(10);
  const [zombieDebtInput, setZombieDebtInput] = useState(168); // old loans

  const [isCleanInstallActive, setIsCleanInstallActive] = useState(false); // cuts subscriptions to 0
  const [isExcelCommitsActive, setIsExcelCommitsActive] = useState(false); // cuts food/cigarettes to 30 (DCA and alternative routing)
  const [is1EuroNetStateActive, setIs1EuroNetStateActive] = useState(false); // targets +1.00 euro zostatok, routes rest to DCA
  const [isSlaShieldActive, setIsSlaShieldActive] = useState(false); // cuts limbic noise, adds RAM

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný audit monitor pre uzol ID03-04.",
    "[STATUS] Databáza pripravená na sledovanie I/O dátových tokov.",
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

  // Live calculations for Simulator
  const actualSubscriptions = isCleanInstallActive ? 0 : subscriptionsInput;
  const actualFoodCigarettes = isExcelCommitsActive
    ? Math.round(foodCigarettesInput * 0.2)
    : foodCigarettesInput; // 80% reduction via alternative paths
  const baseExpensesWithoutDCA =
    overheadInput +
    actualSubscriptions +
    actualFoodCigarettes +
    zombieDebtInput;

  // Under +1.00 net state, DCA absorbs everything that is left over to leave exactly 1.00 Euro remaining!
  let actualDCA = dcaInput;
  if (is1EuroNetStateActive) {
    const leftOverForDCA = incomeInput - baseExpensesWithoutDCA - 1;
    actualDCA = Math.max(0, leftOverForDCA);
  }

  const totalExpenses = baseExpensesWithoutDCA + actualDCA;
  const netZostatok = incomeInput - totalExpenses;

  // Limbic Noise is fueled by debt, high subscription leaks, lack of control, lack of SLA shield
  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (zombieDebtInput > 100 ? 40 : 15) +
          (actualSubscriptions > 30 ? 25 : 0) +
          (!isExcelCommitsActive ? 25 : 0) +
          (isSlaShieldActive ? -25 : 15),
      ),
    ),
  );

  // Free RAM is degraded by high expenses percentage and high limbic noise
  const expensePercentage = totalExpenses / Math.max(1, incomeInput);
  const liveFreeRam = Math.min(
    100,
    Math.max(
      0,
      Math.round(100 - expensePercentage * 60 - liveLimbicNoise * 0.3),
    ),
  );

  // System Watts (biologická sila)
  const liveWatts = Math.min(
    100,
    Math.max(
      5,
      Math.round(
        90 -
          (netZostatok < 1 ? 30 : 0) +
          (isExcelCommitsActive ? 15 : -10) +
          (isCleanInstallActive ? 15 : -5) +
          (isSlaShieldActive ? 10 : -10),
      ),
    ),
  );

  // Sovereignty Level
  const liveSuverenity = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (is1EuroNetStateActive ? 35 : 5) +
          (isCleanInstallActive ? 25 : 0) +
          (isExcelCommitsActive ? 25 : 0) +
          (zombieDebtInput === 0 ? 15 : 0),
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "clean_install") {
      setIsCleanInstallActive(!isCleanInstallActive);
      if (!isCleanInstallActive) {
        setLogs((prev) => [
          "[SUCCESS] Uvalenie karantény (Clean Install) aktívne. Zbytočné SaaS subscription pasce (Calendly Pro, Prisma, CapCut Pro) boli strictly zrušené.",
          "[STATUS] Uvoľnené systémové Watts a kognitívna RAM.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Clean Install zrušený. Parazitické automatické platby opäť odtekajú z bankového servera.",
          ...prev,
        ]);
      }
    } else if (actionType === "excel_commits") {
      setIsExcelCommitsActive(!isExcelCommitsActive);
      if (!isExcelCommitsActive) {
        setLogs((prev) => [
          "[SUCCESS] Excel Commits spustený. Každý finančný paket je ručne zapísaný do offline ledgera. Strava a chladenie CPU strictly odklonené mimo fixný rozpočet.",
          "[STATUS] Kognitívny filter impulzívneho míňania zvýšený o 80%.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Excel Commits vypnutý. Skafander beží na existenčnom autopilotu bez offline kontroly.",
          ...prev,
        ]);
      }
    } else if (actionType === "one_euro") {
      setIs1EuroNetStateActive(!is1EuroNetStateActive);
      if (!is1EuroNetStateActive) {
        setLogs((prev) => [
          "[SUCCESS] Aktivovaný 1€ Net State. Zostatok na konci mesiaca strictly vybalancovaný na +1,00 €. Všetok prebytočný cashflow je strictly presmerovaný do DCA u bankového mentora.",
          "[STATUS] Premazávanie dlhového malvéru zrýchlené.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] 1€ Net State vypnutý. Voľné fiat prostriedky sú ponechané napospas devalvácii a existenčnému šumu.",
          ...prev,
        ]);
      }
    } else if (actionType === "sla_shield") {
      setIsSlaShieldActive(!isSlaShieldActive);
      if (!isSlaShieldActive) {
        setLogs((prev) => [
          "[SUCCESS] Communication SLA Shield aktívny. Po 17:00 sú klientske porty strictly offline. Banned Port kompletne blokuje prichádzajúci traffic.",
          "[STATUS] Spustený preplach vyrovnávacej pamäte Cache Memory.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] SLA Shield neaktívny. Klientske notifikácie preťažujú kognitívnu RAM počas nočného režimu.",
          ...prev,
        ]);
      }
    } else if (actionType === "reset") {
      setIsCleanInstallActive(false);
      setIsExcelCommitsActive(false);
      setIs1EuroNetStateActive(false);
      setIsSlaShieldActive(false);
      setIncomeInput(730);
      setOverheadInput(353);
      setSubscriptionsInput(60);
      setFoodCigarettesInput(150);
      setDcaInput(10);
      setZombieDebtInput(168);
      setLogs([
        "[OK] Systém reštartovaný do neoptimalizovaného stavu.",
        "[CRITICAL] Detegovaná existenčná nestabilita a kognitívny šum.",
      ]);
    }
  };

  // =====================================================================
  // 📚 JAZYKOVÁ DATABÁZA DML v6.5 (31 Slov z JSON-u)
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
        "Kapacita krátkodobej pozornosti a zamerania, ktorú parazitické podprogramy neustále vyťažujú.",
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
        "Krátkodobé úložisko podvedomia pre rýchly prístup, ktoré se bez dôkladného shutdownu zanáša dopamínovým odpadom.",
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
      category: 2,
      categoryType: "it_term",
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
      category: 13,
      categoryType: "home_ui_term",
      translation: "proces odstraňovania chýb a deštruktívnych návykov",
      tooltip:
        "Chladné, analytické hľadanie a premazávanie vadného kódu, chýb v logike vnímania a legacy presvedčení v pamäti.",
    },
    root_access: {
      term: "Root Access",
      category: 13,
      categoryType: "home_ui_term",
      translation: "najvyššie administrátorské práva nad systémom",
      tooltip:
        "Plné administrátorské práva nad biologickým nosičom, tvojím podvedomím a exekúciou času v materiálnom svete.",
    },
    format_c: {
      term: "Format C:",
      category: 13,
      categoryType: "home_ui_term",
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
      category: 2,
      categoryType: "it_term",
      translation: "sieť zotročených a nevedomých myslí",
      tooltip:
        "Globálna sieť koordinovaných, zotročených biologických nosičov, plniacich mechanicky príkazy centrálneho servera Matrixu.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "it_term",
      translation: "najmenšia jednotka prichádzającej informácie",
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
        "Ničím nekrytá štátna mena, slúžiaca v Matrixe ako základné, devalvujúce platidlo za tvoj drahocenný čas.",
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
        "Smerovanie fiat meny, osobné cashflow tabuľky, premazávanie zlého dlhu a nízkofrekvenčná obranu rozpočtu.",
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

  
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#050A0E] text-gray-300" : "bg-[#252D35] text-gray-200"}`}
      onClick={() => setActiveTooltip(null)}
    >
      <MetaTags
        title="ID03 THE CASH-ENGINE // Finance Life (Denná rutina auditu)"
        description="04. [PRO] Finance Life (Tvoja denná rutina auditu Cashflow)."
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
              NEXUS-CORE_2Mb V6.0.0
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
                  ID03 - THE CASH-ENGINE
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
                Node_ID03_04 // Finance Life (Tvoja denná rutina)
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              Finance Life (Tvoja denná rutina)
            </h1>
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              04. [PRO] Finance Life (Tvoja denná rutina auditu Cashflow). Zaveď
              nekompromisnú kontrolu tokov, odstav automatické poplatky a
              naštartuj asynchrónne prežitie.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: finance.projekt-nexus.sk</span>
            <span>UPLINK: ACTIVE // 255 KB/s</span>
          </div>
        </div>
      </header>

      {/* =====================================================================
          3. MAIN LAYOUT
          ===================================================================== */}
      <main className="max-w-7xl mx-auto py-12 px-6 relative z-10">
        {/* =====================================================================
            3A. [ HLAVIČKA UZLA ] (FÁZA TOFU - Útok na plazí mozog)
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
              🚨 ERROR LOG // Financial_Autopilot // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Každé ranné prebudenie biologického{" "}
              <DMLTooltip slug="skafander" label="Skafander" />
              -a sprevádza okamžitá, tichá hrozba neautorizovaných dátových
              tokov. Matrix ťa programuje k existenčnému autopilotu:
              bezmyšlienkovite otvoríš bankovú aplikáciu, zaplavíš svoju
              kognitívnu <DMLTooltip slug="ram" label="RAM" /> vlnou úzkosti zo
              zostatku a po zbytok dňa mechanicky vyjadruješ energetické straty{" "}
              <DMLTooltip slug="memory_leaks" label="Memory Leaks" />. Vstupuješ
              do zóny, kde tvoj{" "}
              <DMLTooltip slug="local_host" label="Local Host" /> beží bez
              bezpečnostných filtrov a tvoje biologické{" "}
              <DMLTooltip slug="cpu" label="CPU" /> spaľuje cenné{" "}
              <DMLTooltip slug="watts" label="Watts" /> na emočnú reaktivitu.
              Toto je{" "}
              <strong className="text-[#FF003C] font-black">
                Error 402: FINANCIAL_AUTOPILOT
              </strong>
              . Zavedenie zvrchovaného{" "}
              <DMLTooltip slug="os_genesis" label="OS Genesis" /> vyžaduje
              chladnú, bezemočnú a neúprosnú kontrolu tvojich I/O dátových
              tokov. Finančná gramotnosť nie je akademickou ozdobou z mŕtvych
              kníh, je to každodenná, železná exekučná rutina. Tvoj osobný{" "}
              <DMLTooltip slug="cashflow" label="Cashflow" /> dashboard na
              Notebooku nesmie byť ovládaný strachom z nedostatku, ale striktne
              konfigurovaný ako chladný analytický Resource Monitor. Vyčisti
              vyrovnávaciu pamäť{" "}
              <DMLTooltip slug="cache_memory" label="Cache Memory" />, aktivuj
              kognitívny <DMLTooltip slug="firewall" label="Firewall" /> and
              spusti exekúciu denného auditu bez jedinej emócie, ako
              nekompromisný stroj.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID03_04_finance_life.md</span>
            <span className="font-bold text-red-500">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* =====================================================================
            3B. VIDEO INJEKTOR
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
              id03_node_04_finance_life_video
            </span>
          </div>
          <GlobalNodeVideo nodeId="pkIdSHPusM8" dimColor="gold" />
        </section>

        {/* =====================================================================
            3C. INTERAKTÍVNE PREPÍNAČE (Tab Switcher)
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
            3D. TAB 1: ŽIVÝ TERMINÁL DIALÓGU
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
              <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
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
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Keď som v Sektore Trnava na Spartakovskej ulici
                      re-konštruoval svoj systém po kolapse v roku 2018,
                      pochopil som, že prežitie vyžaduje presný, matematický
                      preklad každej jednej mince. Môj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> operoval
                      so stabilným príkovom **730,00 €** mesačne – invalidný
                      príspevok 530,00 € ako spoľahlivý{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" /> a
                      Mirova pomoc 200,00 € na energie. Vonkajší svet to vnímal
                      ako sociálne dno, no pre mňa to bola čistá, nízkonapäťová
                      výpočtová šírka pásma (Low-Voltage Bandwidth).
                    </p>
                    <p>
                      Každé jedno ráno som si zapínal svoj Notebook a do offline
                      Excel tabuľky, ktorú som si sám nakódoval, zapísal s
                      presnosťou na centy každú transakciu. Keď mi odišlo 168 €
                      na úvery a 353 € na fixné účty materskej lode, zostávalo
                      mi presne **80,00 €** voľnej{" "}
                      <DMLTooltip slug="ram" label="RAM" />. Úplne som vyškrtol
                      zo svojho rozpočtu stravu a chladenie CPU (cigarety),
                      ktoré som presmeroval na alternatívne rodinné toky, a s
                      tými 80 € som robil divy. Investoval som strictly 10 € do
                      DCA u môjho bankového mentora a zvyšok do kľúčových
                      pracovných licencií (Gemini, Google One, YT Premium).
                      Zostatok na mojom účte musel byť na konci dňa strictly
                      **+1,00 €**. Žiadne slzy, žiadne bedákanie nad
                      nespravodlivosťou Matrixu. Excel neplakal, a tak som
                      neplakal ani ja. Tento ranný rituál držania čistého kódu
                      zvrátil môj existenčný šum na zvrchovanú kódovú pevnosť.
                    </p>
                  </div>
                )}
              </div>

              {/* SYSTEM: AI GEMINI ACCORDION */}
              <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
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
                    <span className="w-2 h-2 rounded-full bg-[#00FFFF]" />
                    🤖 [ SYSTEM: AI GEMINI ] (Kybernetická Analýza)
                  </span>
                  {openTrinity.ai ? (
                    <ChevronUp className="w-4 h-4 text-[#00FFFF]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#00FFFF]" />
                  )}
                </button>
                {openTrinity.ai && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Z hľadiska systémovej kybernetiky predstavuje denný audit
                      osobných financií ekvivalent monitorovania sieťovej
                      prevádzky na lokálnom hostiteli. Biologická jednotka
                      neustále komunikuje s centralizovanými bankovými
                      databázami. Ak neexistuje aktívna kontrola odchádzajúcich
                      paketov,{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      rýchlo spustí neautorizované odbery (fiat drains) v podobe
                      skrytých poplatkov, mikro-transakcií a predplatných
                      služieb.
                    </p>
                    <p>
                      Tento permanentný, tichý únik sily (
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />)
                      vedie k chronickému podhodnoteniu výpočtovej kapacity.
                      Vedomé sledovanie I/O dátového toku eliminuje kognatívny
                      odpor a odstraňuje strach, ktorý v neurologickom okruhu
                      funguje ako rušivý emočný šum (
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />
                      ). Keď sa každé číslo (Data Point) zaznamená strictly do
                      štruktúrovanej tabuľky, myseľ prestane simulovať fiktívne
                      scenáre nedostatku, vyrovnávacia pamäť{" "}
                      <DMLTooltip slug="cache_memory" label="Cache Memory" /> sa
                      prečistí a uvoľní se enormná kognitívna{" "}
                      <DMLTooltip slug="ram" label="RAM" /> pre beh prioritných
                      systémových procesov vývoja vlastného{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />.
                    </p>
                  </div>
                )}
              </div>

              {/* AUDIT & KOMPARÁCIA ACCORDION */}
              <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
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
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    🪞 [ AUDIT & KOMPARÁCIA ] (Mŕtve knihy)
                  </span>
                  {openTrinity.audit ? (
                    <ChevronUp className="w-4 h-4 text-[#8B5CF6]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8B5CF6]" />
                  )}
                </button>
                {openTrinity.audit && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Ak podrobíme mŕtve knihy sémantickému preosievaniu,
                      dekonštruujeme ilúzie strednej vrstvy s úplnou
                      matematickou presnosťou:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          George S. Clason (Najbohatší muž v Babylone):
                        </strong>{" "}
                        Clasonov kódex nariaďuje prísnu evidenciu každej mince.
                        Trvá na tom, aby si si každé ráno prečítal stav svojej
                        peňaženky a zapísal každé odtečené euro. V našom{" "}
                        <DMLTooltip slug="os_genesis" label="OS Genesis" /> je
                        to zhmotnené ako{" "}
                        <strong className="text-[#FFEB3B] font-bold">
                          Resource Allocation Monitor
                        </strong>{" "}
                        – proces, ktorý zabraňuje neautorizovaným transakciám a
                        stabilizuje napájací obvod.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Robert T. Kiyosaki (Cashflow Kvadrant):
                        </strong>{" "}
                        Kiyosakiho I/O výkaz (Income/Expense, Asset/Liability)
                        je najdokonalejším kognitívnym debugerom. Kiyosaki trvá
                        na tom, že bohatstvo vzniká z disciplíny trackovania
                        tokov, nie z výšky platu. Každodenný, chladný pohľad na
                        tvoj štvor-kvadrantový model na localhoste oddeľuje
                        tvoju skutočnú autorskú hodnotu od devalvačnej fiat meny
                        Matrixu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Eckhart Tolle (Sila prítomnosti):
                        </strong>{" "}
                        Tolle odhaľuje, že strach z prázdneho bankového účtu je
                        len projekcia podvedomej{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />,
                        ktorú ovláda{" "}
                        <DMLTooltip
                          slug="mrtve_knihy"
                          label="Komentátor Parazit"
                        />
                        . Keď upriamiš pozornosť strictly na konkrétny, prítomný
                        riadok v Exceli, emócie vyhasnú. Zostáva len bdelý{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľ" />,
                        ktorý ticho riadi svoje klientske rozhranie (
                        <DMLTooltip slug="ui_space" label="UI Space" />) bez
                        psychologického lagovania.
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
                  className="w-3.5 h-3.5 text-[#FFD700]"
                  style={{ color: DIM_COLOR }}
                />
                <span>🧩 HLAVNÝ OBSAH - DEKOMPRESIA // FÁZA MOFU</span>
              </div>

              {/* MOFU 1: ANATÓMIA KONCEPTU */}
              <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Väčšina nevedomých batérií v Matrixe vníma sledovanie
                      svojich výdavkov ako formu obmedzenia, askézy alebo
                      priznanie si chudoby. Tento fatálny psychický blok je v
                      skutočnosti obraným programom Matrixu, ktorý ti bráni
                      postaviť vlastný nezávislý Cash-Engine. Veríš, že ak sa
                      nebudeš pozerať do svojej bankovej databázy, tvoj finančný{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                      zázračne zmizne. To je však ilúzia.
                    </p>
                    <p>
                      Aby sme vyčistili tvoj{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> od týchto
                      chybných legacy kódov, musíme si rozobrať tri kľúčové
                      prvky dennej reality:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Bankový Server (Databáza):
                        </strong>{" "}
                        Tvoje peniaze v banke nie sú fyzické kusy zlata. Sku sú
                        to len šifrované dátové pakety (
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />
                        ) uložené na cudzom, centralizovanom serveri. Banka ti
                        umožňuje k nim pristupovať strictly cez obmedzené
                        klientske rozhranie.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Offline Ledger (Tvoj lokálny Git):
                        </strong>{" "}
                        Tvoja osobná, lokálna databáza v Notebooku (napríklad v
                        Exceli). Je to tvoj vlastný, zvrchovaný záznam pravdy,
                        nezávislý od sieťového pripojenia. Každá manuálne
                        zapísaná transakcia tu funguje ako commit v tvojom
                        životnom repozitári.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Tichý bdelý Svedok (Administrátor):
                        </strong>{" "}
                        Tvoja zvrchovaná identita{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľ" />
                        -a, ktorá sleduje čísla bez toho, aby ich spájala s
                        vlastným eGom. Pre teba čísla nie sú dôvodom na radosť
                        či depresiu, sú to len ukazovatele sieťového zaťaženia a
                        dostupného Bandwidthu.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* MOFU 2: MECHANIZMUS MATRIXU */}
              <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Spoločenský{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu prežíva vďaka tomu, že robí tvoje peňažné odtoky
                      asynchrónnymi, neviditeľnymi a automatickými. Používa na
                      to zradnú metódu zvanú &quot;Subscription Economy&quot;
                      (Ekonomika predplatného) a bezkontaktné platby, ktoré
                      obchádzajú tvoj kognitívny{" "}
                      <DMLTooltip slug="firewall" label="Firewall" />.
                    </p>
                    <p>
                      Tento tichý, nepretržitý odber{" "}
                      <DMLTooltip slug="watts" label="Watts" /> tvojej
                      biologickej energie prebieha nasledovne:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Bezkontaktná anestéza:
                        </strong>{" "}
                        Keď platíš priložením tabletu alebo mobilu, tvoj mozog
                        nepociťuje bolesť zo straty zdrojov. Transakcia prebehne
                        na pozadí, bez kognitívneho loadu. Systém týmto obchádza
                        tvoju bdelosť a ty strácaš prehľad o reálnej cene, ktorú
                        tvoj <DMLTooltip slug="skafander" label="Skafander" />{" "}
                        zaplatil svojím časom.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Skryté na pozadí bežiace procesy:
                        </strong>{" "}
                        Rôzne malé predplatné služby, ktoré si kedysi
                        autorizoval, si každý mesiac ticho sťahujú drobné
                        čiastky. Správajú sa ako parazitické aplikácie na pozadí
                        tvojho OS. Každá jedna z nich ti odoberá kúsky voľnej{" "}
                        <DMLTooltip slug="ram" label="RAM" /> and ty sa na konci
                        mesiaca budíš so systémovým chybovým hlásením{" "}
                        <strong className="text-[#FF003C] font-black">
                          Error 402: INSUFFICIENT_FUNDS
                        </strong>
                        .
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Blížiaca sa Čierna labuť (Black Swan event):
                        </strong>{" "}
                        Ak ignoruješ tieto mikro-úniky, tvoj záložný zdroj
                        (Mirova karta alebo rodinná výpomoc) sa jedného dňa
                        neočakávane odpojí. Tvoj nízkonapäťový rozpočet strictly
                        **730,00 €** zažije okamžitý náraz reálnych nákladov na
                        stravu a chladenie procesora. Bez zvrchovaného
                        trackovacieho firewallu tvoj systém utrpí fatálny
                        Blackout a tvoje biologické{" "}
                        <DMLTooltip slug="cpu" label="CPU" /> kompletne vyhorí v
                        existenčnej panike. Ak nezaplátaš tento{" "}
                        <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                        spustením vlastného Cash-Enginu skôr, tvoj systém
                        vyhorí.
                      </li>
                    </ol>
                  </div>
                )}
              </div>

              {/* MOFU 3: PROCES TRANSFORMÁCIE */}
              <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Náprava finančného smerovania vyžaduje zavedenie
                      nekompromisného, denného monitorovacieho rituálu na tvojom{" "}
                      <DMLTooltip slug="local_host" label="Local Host" />
                      -e. Nemôžeš prečistiť svoju kognitívnu{" "}
                      <DMLTooltip slug="ram" label="RAM" />, kým tvoje
                      podvedomie nepretržite kalkuluje s neoverenými finančnými
                      odhadmi. Must be prevziať plné administrátorské práva (
                      <DMLTooltip slug="root_access" label="Root Access" />
                      ).
                    </p>
                    <p>
                      Aplikácia tohto transformačného algoritmu v tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> pozostáva
                      z troch krokov:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény (The Clean Install):
                        </strong>{" "}
                        Vyčisti svoj bankový port od všetkých neoverených a
                        zbytočných automatických platieb. Odhlás sa zo SaaS
                        subscription pascí (ako Calendly Pro, Prisma, či CapCut
                        Pro), ktoré ti neprinášajú okamžitý a merateľný
                        asynchrónny zisk. Použi bezplatné bypass alternatívy,
                        čím okamžite uvoľníš výpočtové{" "}
                        <DMLTooltip slug="watts" label="Watts" /> pre jadro.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Lokálne zrkadlenie databázy (The Excel Commits):
                        </strong>{" "}
                        Zriaď si lokálnu, offline databázu (Excel) strictly na
                        svojom Notebooku. Každý odchádzajúci finančný{" "}
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />{" "}
                        musíte ručne a bez emócií zapísať do tohto offline
                        ledgera. Týmto donútiš svoj mozog fyzicky precítiť pohyb
                        každého eura, čím aktivuješ hlboký kognatívny filter
                        pred nákupom zbytočností.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Nízkonapäťová stabilizácia (The 1€ Net State):
                        </strong>{" "}
                        Nastav prevádzku svojho{" "}
                        <DMLTooltip slug="skafander" label="Skafander" />
                        -a strictly na nízkonapäťový režim. S rozpočtom 730,00 €
                        udržiavaj chod materskej lode so zostatkom strictly{" "}
                        <strong className="text-white">+1,00 €</strong> a
                        pravidelným 10 € DCA premazávaním dlhového malvéru (
                        <DMLTooltip slug="zombie_horda" label="Zombie Horda" />
                        ). Keď tvoj systém potvrdí, že dokáže prežiť, rásť a
                        programovať zvrchovaný{" "}
                        <DMLTooltip slug="os_genesis" label="OS Genesis" /> aj z
                        tohto minima, existenčný strach navždy zanikne and ty
                        získaš neobmedzenú šírku pásma pre hlbokú prácu.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* MOFU 4: NÁSTROJE A PROTOKOLY */}
              <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
                <button
                  onClick={() => {
                    setOpenMofu({
                      ...openMofu,
                      protocols: !openMofu.protocols,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
                  style={{
                    borderBottomColor: openMofu.protocols ? "transparent" : "",
                  }}
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Aby tvoj asynchrónny Cash-Engine pracoval strictly s
                      nulovým emočným trením a chránil tvoje kognitívne obvody,
                      nariaďujem tvojmu{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />
                      -u denné spúšťanie týchto troch zvrchovaných programov:
                    </p>
                    <div className="space-y-4 pl-4 border-l-2 border-yellow-500/30 text-gray-300">
                      <div>
                        <strong style={{ color: DIM_COLOR }}>
                          TICHÝ BOOT (Ranná kognitívna karanténa):
                        </strong>
                        <ol className="list-decimal pl-6 space-y-1 text-xs mt-1 text-gray-400">
                          <li>
                            Po rannom prebudení tvoj osobný{" "}
                            <DMLTooltip slug="firewall" label="Firewall" />{" "}
                            strictly blokuje prístup k tvojmu biznis e-mailu{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (dusan.fajnor.finance@gmail.com)
                            </span>{" "}
                            a bankovým aplikáciám po dobu prvej hodiny dňa.
                          </li>
                          <li>
                            Žiadne emočné skenovanie zostatkov. Tvoj systém beží
                            strictly na localhoste, chráni drahocennú{" "}
                            <DMLTooltip slug="ram" label="RAM" /> a pripravuje
                            sa na exekutívne kódovanie tvojich vlastných
                            digitálnych aktív.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <strong style={{ color: DIM_COLOR }}>
                          RESOURCE ALLOCATION MONITOR (Denná optimalizácia):
                        </strong>
                        <ol className="list-decimal pl-6 space-y-1 text-xs mt-1 text-gray-400">
                          <li>
                            Každý, aj ten najmenší výdavok strictly zapisuješ do
                            svojej lokálnej offline Excel databázy na Notebooku.
                            Každé číslo je spracované strictly s nulovými
                            emóciami.
                          </li>
                          <li>
                            Akýkoľvek odchádzajúci finančný paket pred
                            schválením odoslania must be prehnaný cez
                            24-hodinový karanténny{" "}
                            <DMLTooltip slug="sandbox" label="Sandbox" />
                            -om, čím sa zamedzí impulzívnym nákupom vyvolaným
                            emočným parazitom.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <strong style={{ color: DIM_COLOR }}>
                          COMMUNICATION SLA SHIELD (Večerný shutdown):
                        </strong>
                        <ol className="list-decimal pl-6 space-y-1 text-xs mt-1 text-gray-400">
                          <li>
                            Po 17:00 hodine sa tvoje finančné a klientske porty
                            strictly prepínajú do offline režimu.{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            nekompromisne blokuje akúkoľvek komunikáciu s
                            bankovým alebo klientskym botnetom (
                            <DMLTooltip slug="botnet" label="Botnet" />
                            ).
                          </li>
                          <li>
                            Uvoľňuješ kognitívne obvody, spúšťaš kompletný
                            preplach{" "}
                            <DMLTooltip
                              slug="cache_memory"
                              label="Cache Memory"
                            />{" "}
                            a pripravuješ hardvér na hlbokú nočnú regeneráciu
                            pre prechod do stavu tichého{" "}
                            <DMLTooltip
                              slug="pozorovatel"
                              label="Pozorovateľa"
                            />
                            .
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
            3E. TAB 2: AKČNÝ SIMULÁTOR (DAILY CASHFLOW & SUBSCRIPTION AUDIT)
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
                📊 EXEKUČNÝ SIMULÁTOR: DAILY CASHFLOW & SUBSCRIPTION AUDIT
                SIMULATOR
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér vizualizuje tvoje kognitívne a finančné prežitie na
                  absolútnom minime s budgetom strictly{" "}
                  <strong style={{ color: DIM_COLOR }}>730 €/mesiac</strong>.
                  Sleduje, ako rozumná alokácia voľnej RAM (~80 €) do
                  digitálneho arzenálu a izolácia Zombie Hordy (dlhov) chráni
                  tvoj skafander pred preťažením CPU.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong> Pomocou
                  posuvníkov nastav mesačné prežitie Materskej lode, výdavky na
                  SaaS a dlhy. Skús spustiť deštruktívny režim (strava a
                  cigarety z fixného rozpočtu) a sleduj, ako rýchlo ti vyhorí
                  procesor.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Diagnostika
                  ukazuje zostatok voľných žetónov (strictly cieľ: +1 €), úroveň
                  zasvinenia kognitívnej RAM a celkovú Suverenitu v reálnom
                  čase.
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
                  Nastavenie finančných a kognitívnych tokov
                </h3>

                <div className="space-y-4">
                  {/* Income Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Celkový fixný príjem (Invalidný + pomoc):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {incomeInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="500"
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

                  {/* Overhead Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Fixné účty materskej lode (Overhead):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {overheadInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      step="5"
                      value={overheadInput}
                      onChange={(e) => {
                        setOverheadInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  {/* Subscriptions Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Parazitické SaaS predplatné (Subscriptions):
                      </span>
                      <span
                        className={`font-black ${isCleanInstallActive ? "line-through text-red-400 opacity-50" : "text-[#FFD700]"}`}
                        style={{ color: isCleanInstallActive ? "" : DIM_COLOR }}
                      >
                        {actualSubscriptions} €/mesiac{" "}
                        {isCleanInstallActive && "(Clean Install)"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="5"
                      value={subscriptionsInput}
                      disabled={isCleanInstallActive}
                      onChange={(e) => {
                        setSubscriptionsInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1 disabled:opacity-30"
                    />
                  </div>

                  {/* Food & Cigarettes Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Strava &amp; Tabak (Kognitívny hluk v rozpočte):
                      </span>
                      <span
                        className={`font-black ${actualFoodCigarettes > 0 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {actualFoodCigarettes} €/mesiac{" "}
                        {isExcelCommitsActive && "(Excel reduction)"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="400"
                      step="10"
                      value={foodCigarettesInput}
                      onChange={(e) => {
                        setFoodCigarettesInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  {/* DCA Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        DCA Investícia (Bankový mentor DCA 15r):
                      </span>
                      <span className="text-[#00FFFF] font-black">
                        {actualDCA} €/mesiac{" "}
                        {is1EuroNetStateActive && "(1€ Net auto-balance)"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="300"
                      step="5"
                      value={dcaInput}
                      disabled={is1EuroNetStateActive}
                      onChange={(e) => {
                        setDcaInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1 disabled:opacity-30"
                    />
                  </div>

                  {/* Zombie Debt Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Zombie Horda (Staré nebezpečné dlhy / splátky):
                      </span>
                      <span
                        className={`font-black ${zombieDebtInput > 0 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {zombieDebtInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="10"
                      value={zombieDebtInput}
                      onChange={(e) => {
                        setZombieDebtInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-900 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAction("clean_install")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isCleanInstallActive
                        ? "bg-green-600/20 border-green-500 text-green-400"
                        : "bg-green-600/5 hover:bg-green-600/15 border-green-500/20 text-green-400/60"
                    }`}
                  >
                    Clean Install
                  </button>
                  <button
                    onClick={() => handleAction("excel_commits")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isExcelCommitsActive
                        ? "bg-blue-600/20 border-blue-500 text-blue-400"
                        : "bg-blue-600/5 hover:bg-blue-600/15 border-blue-500/20 text-blue-400/60"
                    }`}
                  >
                    Excel Commits
                  </button>
                  <button
                    onClick={() => handleAction("one_euro")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      is1EuroNetStateActive
                        ? "bg-[#FFD700]/20 border-[#FFD700] text-[#FFD700]"
                        : "bg-[#FFD700]/5 border-[#FFD700]/20 text-[#FFD700]/60 hover:bg-[#FFD700]/10"
                    }`}
                  >
                    1€ Net State
                  </button>
                  <button
                    onClick={() => handleAction("sla_shield")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isSlaShieldActive
                        ? "bg-purple-600/20 border-purple-500 text-purple-400"
                        : "bg-purple-600/5 border-purple-500/20 text-purple-400/60 hover:bg-purple-600/10"
                    }`}
                  >
                    SLA Shield
                  </button>
                  <button
                    onClick={() => handleAction("reset")}
                    className="flex-1 min-w-[120px] bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Zlyhať na autopilota
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
                    SCREENING INDEX // DIAGNOSTIKA SKAFANDRA
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#FFD700]/30 bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 p-4 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Zasvinenie RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 50 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {100 - liveFreeRam}%
                      </span>
                    </div>

                    <div className="border border-[#FFD700]/30 bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 p-4 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Voľná Kognitívna RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveFreeRam < 40 ? "text-red-400" : "text-[#FFD700]"}`}
                        style={{
                          color: liveFreeRam < 40 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {liveFreeRam}%
                      </span>
                    </div>

                    <div className="border border-[#FFD700]/30 bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 p-4 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Zostávajúce Watts
                      </span>
                      <span
                        className={`text-2xl font-black ${liveWatts < 30 ? "text-red-400" : "text-[#39FF14]"}`}
                        style={{
                          color: liveWatts < 30 ? "#FF003C" : "#39FF14",
                        }}
                      >
                        {liveWatts}%
                      </span>
                    </div>

                    <div className="border border-[#FFD700]/30 bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 p-4 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Voľné Žetóny (strictly: +1 €)
                      </span>
                      <span
                        className={`text-2xl font-black ${netZostatok !== 1 ? "text-red-500 animate-pulse" : "text-[#39FF14]"}`}
                        style={{
                          color: netZostatok !== 1 ? "#FF003C" : "#39FF14",
                        }}
                      >
                        {netZostatok} €
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
            3F. TRINITY APPS (LEXIKON ACCORDION OVERVIEW - RESPONSIVE SHIELD V6.5)
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
                                <th className="py-2.5 px-4 w-1/4 font-black">
                                  Surový Termín
                                </th>
                                <th className="py-2.5 px-4 w-1/4 font-black">
                                  Preklad do DML v6.0
                                </th>
                                <th className="py-2.5 px-4 w-1/2 font-black">
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
                                    className="py-3 px-4 font-black"
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
            3G. DOPLNKOVÝ AUDIO MODUL (GlobalNodePodcast)
            ===================================================================== */}
        <section className="mt-12 rounded-xl overflow-hidden border border-gray-850 bg-[#050A0E]/40 p-6 relative z-10">
          <div className="text-xs text-[#BF00FF] font-bold font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping" />
            <span>🎙️ Doplnkový Audio Modul: Inštalačný podcast</span>
          </div>
          <GlobalNodePodcast
            nodeId="https://soundcloud.com/nexus-core/id03_04_finance_life"
            dimColor="#BF00FF"
          />
        </section>

        {/* =====================================================================
            3H. 🚀 UPLINK TERMINAL (Vykonaj akciu hneď teraz!)
            ===================================================================== */}
        <section
          className={`mt-16 border-2 border-[#FFD700]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"
          }`}
        >
          {/* Bouncing Lock strictly v neónovo žltej farbe dimenzie #FFD700 */}
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
              [ SYSTEM UPLINK ENGAGED // ALL SYSTEMS STATUS: READY ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj finančný systém vykazuje neustále anomálie. Slepé míňanie na
              autopilote ti potajomky páli RAM a tvoj Skafander čelí
              existenčnému prázdnu. Matrix ťa uzamkol v legacy programoch
              strachu. Ukonči prenájom svojho procesora a prevezmi plnú kontrolu
              nad každým odtečeným euróm.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-left border-t border-gray-800/40 pt-4 space-y-2">
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🔑 INICIALIZOVAŤ SPOJENIE: AKTIVOVAŤ NEXUS PRO KEY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Odomkni kompletné spektrum PRO vedomostných uzlov, odstav
                  emočnú reaktivitu a naštartuj zvrchovanú správu tokov.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Pripoj svoj Skafander na zvrchovaný Local Host, zníž
                  biologické Watts na stabilné minimum a spusti zvrchovaný OS
                  Genesis.
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
            <span>Sovereignty Factor: {liveSuverenity}%</span>
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
