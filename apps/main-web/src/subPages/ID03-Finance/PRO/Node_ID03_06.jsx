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
// 👑 HLAVNÝ KOMPONENT UZLA ID03_NODE_06 (PRO)
// =====================================================================
export default function Node_ID03_06() {
  const NODE_ID = "ID03-06";
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
  const [subscriptionsInput, setSubscriptionsInput] = useState(60); // SaaS
  const [foodCigarettesInput, setFoodCigarettesInput] = useState(150); // food & cigarettes
  const [dcaInput, setDcaInput] = useState(10);
  const [zombieDebtInput, setZombieDebtInput] = useState(168); // old loans

  const [isCleanInstallActive, setIsCleanInstallActive] = useState(false); // cuts subscriptions to 0
  const [isExcelCommitsActive, setIsExcelCommitsActive] = useState(false); // cuts food/cigarettes to 30
  const [is1EuroNetStateActive, setIs1EuroNetStateActive] = useState(false); // targets +1.00 euro zostatok
  const [isSlaShieldActive, setIsSlaShieldActive] = useState(false); // cuts limbic noise, adds RAM

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný audit monitor pre uzol ID03-06.",
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
    : foodCigarettesInput;
  const baseExpensesWithoutDCA =
    overheadInput +
    actualSubscriptions +
    actualFoodCigarettes +
    zombieDebtInput;

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
          "[SUCCESS] Uvalenie karantény (Clean Install) aktívne. Zbytočné SaaS subscription pasce boli strictly zrušené.",
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
          "[SUCCESS] Excel Commits spustený. Každý finančný paket je ručne zapísaný do offline ledgera.",
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
          "[SUCCESS] Aktivovaný 1€ Net State. Zostatok na konci mesiaca strictly vybalancovaný na +1,00 €.",
          "[STATUS] Prebytočný cashflow smeruje do DCA u bankového mentora.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] 1€ Net State deaktivovaný. Systém stráca kontrolu nad asynchrónnou ochranou prebytkov.",
          ...prev,
        ]);
      }
    } else if (actionType === "sla_shield") {
      setIsSlaShieldActive(!isSlaShieldActive);
      if (!isSlaShieldActive) {
        setLogs((prev) => [
          "[SUCCESS] SLA Shield aktivovaný. Večerný shutdown klientskych a finančných portov po 17:00.",
          "[STATUS] Limbic Noise stlačený na minimum, kognitívna RAM zabezpečená pre nočnú regeneráciu.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] SLA Shield deaktivovaný. Klientsky a finančný dopamínový traffic preteká do ranných hodín.",
          ...prev,
        ]);
      }
    }
  };

  // Sémantická prekladová databáza (Zosúladená so zvrchovanými prekladovými prepojeniami)
  const termsData = {
    skafander: {
      term: "Skafander",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "biologické telo a neurologický oblek",
      tooltip:
        "Biologické telo a neurologická schránka, slúžiaca ako tvoj primárny hardvérový oblek pre beh vedomia.",
    },
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "it_term",
      translation: "biologický procesor a spracovanie nervových impulzov",
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
      translation: "jednotka biologickej a duševnej sily",
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
        "Krátkodobé úložisko podvedomia pre rýchly prístup, ktoré sa bez dôkladného shutdownu zanáša dopamínovým odpad.",
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
      translation: "proces odstraňovania chýb",
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
      translation: "úplné vyčistenie pevného disku",
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
        "Základný komunikačný balík dát prichádzajúci z okolia, ktorý tvoj kognitívny firewall mustí preskenovať a zhodnotiť.",
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
    "730_euro": {
      term: "730,00 €",
      category: 1,
      categoryType: "foreign_lang",
      translation: "nízkonapäťová existenčná základňa",
      tooltip:
        "Nízkonapäťový existenčný limit zložený zo štátnej podpory 530 € a rodinného prítoku 200 €.",
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
      hoverBorder: "hover:border-yellow-400",
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

  const activeCategoriesList = [
    {
      id: 1,
      key: "foreign_lang",
      translation: "Cudzí / Svetový jazyk",
      description:
        "Čisté cudzie slová, frázy a sieťový slang slúžiace ako prenosové komunikačné rozhranie.",
    },
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
        "Asynchrónna integrácia neurónových sietí, agentic workflows, modelov, kompilátorov a sémantická optimalizácia Gemini.",
    },
    {
      id: 4,
      key: "system_command",
      translation: "Systémový príkaz / Akcia",
      description:
        "Nekompromisné exekučné príkazy vôle, okamžité reštarty, vymazanie cache a formátovanie poškodenej pamäte.",
    },
    {
      id: 5,
      key: "work_term",
      translation: "Work / Kvadrant Z",
      description:
        "Limity zamestnaneckého pomeru, krysie preteky, mechanické plnenie noriem a prenajímanie vlastného času.",
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
      id: 9,
      key: "philosophical_term",
      translation: "Filozofický Pojem - Mŕtve knihy",
      description:
        "Teoretické koncepty a spisy antických stoikov, Osho, Tolle a Ruiz, transformované do taktických PDF manuálov.",
    },
    {
      id: 10,
      key: "psychological_term",
      translation: "Psychologický Pojem - Mŕtve knihy",
      description:
        "Hlbinná psychológia, Carl Gustav Jung, obranné mechanizmy vedomia, dekonštrukcia tieňa a sociálna Persona.",
    },
    {
      id: 11,
      key: "psychiatric_term",
      translation: "Psychiatrický Pojem / Diagnózy",
      description:
        "Lekárska kódifikácia obmedzení, biologické chyby skafandra a štátna podpora pre stabilizáciu systému.",
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
      className={`min-h-screen font-mono transition-colors duration-300 ${isDarkMode ? "bg-[#050A0E] text-gray-300" : "bg-[#252D35] text-gray-100"}`}
    >
      <MetaTags
        title="ID03 - Finance Projekty (CASH-ENGINE)"
        description="06. [PRO] Finance Projekty (Aktuálny vývoj tvojho Cash-Enginu a B2B/B2C nasadenie)."
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
                Node_ID03_06 // Finance Projekty
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              Finance Projekty (Aktuálny vývoj tvojho Cash-Enginu a B2B/B2C
              nasadenie)
            </h1>
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              06. [PRO] Finance Projekty (Aktuálny vývoj tvojho Cash-Enginu a
              B2B/B2C nasadenie). Spusť ofenzívnu fázu tvojho Cash-Enginu,
              priprav licenčné ponuky a Access Keys, zriaď predajnú zbernicu a
              stabilizuj asynchrónny prenos.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: finance.projekt-nexus.sk</span>
            <span>UPLINK: ACTIVE // 255 KB/s</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* =====================================================================
            3A. [ HLAVIČKA UZLA ] (FÁZA TOFU - Útok na plazí mozog)
            ===================================================================== */}
        <section
          className={`mb-12 border-2 transition-all duration-300 p-6 md:p-8 relative rounded-xl ${
            isDarkMode
              ? "bg-gradient-to-l from-[#0B0F15] to-red-950/20 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
              : "bg-gradient-to-l from-[#1E252D] to-red-950/15 border-red-500/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <h2 className="text-xs font-mono font-black uppercase tracking-widest text-red-500">
              🚨 ERROR LOG // Prosperity_Stream_Established // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Hráš sa na svojom lokálnom piesočku, čistíš kognitívnu{" "}
              <DMLTooltip slug="ram" label="RAM" /> a prežívaš s nízkonapäťovým
              odberom strictly <DMLTooltip slug="730_euro" label="730,00 €" />{" "}
              mesačne. To je stabilná, no stále iba pasívna obranná fáza.
              Skutočná prosperita a sloboda nastávajú až vtedy, keď tvoj{" "}
              <DMLTooltip slug="local_host" label="Local Host" /> prejde do
              ofenzívy a naštartuje komerčné prepojenia. Každé jedno euro
              naviac, ktoré tvoj <DMLTooltip slug="cashflow" label="Cashflow" />{" "}
              nasaje asynchrónne mimo klientskeho koryta Matrixu, je novým
              voľným procesorom, ktorý pracuje pre teba. Tvoj Cash-Engine musí
              dospieť do fázy komerčného nasadenia – prípravy prvého predaju
              &apos;Access Keys&apos;{" "}
              <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                (licencií)
              </span>{" "}
              do tvojho ekosystému{" "}
              <DMLTooltip slug="os_genesis" label="OS Genesis" /> pre B2B a B2C
              klientov. Prestaň sa schovávať za nekonečný vývoj a spustenie
              testov. Ak tvoj systém nevytvára reálne, hmatateľné digitálne
              aktíva generujúce{" "}
              <strong className="text-[#FF003C] font-black">
                150,00 € MRR
              </strong>{" "}
              <DMLTooltip slug="mrr" label="[mrr]" />, tvoje{" "}
              <DMLTooltip slug="cpu" label="CPU" /> iba jalovo točí výpočtové
              cykly pod vplyvom fiktívneho perfekcionizmu a systém hlási{" "}
              <strong className="text-[#FF003C] font-black">
                Error 405: METHOD_NOT_ALLOWED / DRY_RUN_EXCEEDED
              </strong>
              . Aktivuj komerčné porty a nasmeruj prúd do svojho vlastného
              repozitára.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID03_06_finance_projekty.md</span>
            <span className="font-bold text-red-500">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* 4. GlobalNodeVideo (Video Injektor) */}
        <section
          className={`mb-12 rounded-xl overflow-hidden border-2 border-[#FFD700]/30 shadow-lg relative z-10 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
          style={{ borderColor: DIM_COLOR }}
        >
          <div className="bg-[#050A0E] py-2.5 px-4 border-b border-gray-800 flex justify-between items-center text-xs font-mono">
            <span
              className="text-[#FFD700] font-bold uppercase tracking-widest flex items-center gap-2"
              style={{ color: DIM_COLOR }}
            >
              <PlayCircle
                className="w-4 h-4 text-[#FFD700]"
                style={{ color: DIM_COLOR }}
              />
              GlobalNodeVideo: Video Injektor
            </span>
            <span className="text-gray-500">
              id03_node_06_finance_projekty_video
            </span>
          </div>
          <GlobalNodeVideo nodeId="pkIdSHPusM8" dimColor="gold" />
        </section>

        {/* Tab Switchers */}
        <div className="flex border-b border-gray-850 mb-8 relative z-20">
          <button
            onClick={() => handleTabChange("chat")}
            className={`py-3 px-6 text-xs font-mono uppercase font-black border-b-2 tracking-widest transition-all ${activeTab === "chat" ? "border-[#FFD700] text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
            style={{ borderBottomColor: activeTab === "chat" ? DIM_COLOR : "" }}
          >
            💬 ŽIVÝ TERMINÁL DIALÓGU
          </button>
          <button
            onClick={() => handleTabChange("simulator")}
            className={`py-3 px-6 text-xs font-mono uppercase font-black border-b-2 tracking-widest transition-all ${activeTab === "simulator" ? "border-[#FFD700] text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
            style={{
              borderBottomColor: activeTab === "simulator" ? DIM_COLOR : "",
            }}
          >
            ⚙️ AKČNÝ SIMULÁTOR
          </button>
        </div>

        {/* Tab 1: Live Terminal Dialogue */}
        {activeTab === "chat" && (
          <div className="space-y-12 relative z-10">
            {/* 3B. TRINITY PERSPECTIVE */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <Activity
                  className="w-3.5 h-3.5 text-[#FFD700]"
                  style={{ color: DIM_COLOR }}
                />
                <span>👁️ TRINITY PERSPECTIVE (Trojitý protokol vnímania)</span>
              </div>

              {/* Trinity Item 1: Architect Quote */}
              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
              >
                <button
                  onClick={() => {
                    setOpenTrinity({
                      ...openTrinity,
                      architect: !openTrinity.architect,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
                >
                  <span className="flex items-center gap-2 text-white">
                    <span
                      className={`w-2 h-2 rounded-full bg-[#FFD700] ${openTrinity.architect ? "animate-pulse" : ""}`}
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Keď som v rokoch 2018 až 2023 prežíval svoj vlastný
                      systémový reštart v Trnave strictly so štátnou podporou a
                      invalidným dôchodkom, môj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> bol dlho
                      uzamknutý v režime prežitia. Operoval som s minimálnym
                      rozpočtom strictly{" "}
                      <strong
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        730,00 €
                      </strong>{" "}
                      and bdelo ticho som strážil každé jedno euro v lokálnom
                      Exceli. No hneď ako sa moja kognitívna{" "}
                      <DMLTooltip slug="ram" label="RAM" /> uvoľnila od
                      permanentného existenčného strachu, pochopil som, že
                      nemôžem zostať mníchom navždy. Musel som prejsť z
                      defenzívneho{" "}
                      <span className="text-[#BF00FF]/85 italic font-medium">
                        'Ghost-Mode'
                      </span>{" "}
                      do asymetrického komerčného útoku.
                    </p>
                    <p>
                      Na mojom Samsung Tab A9+ s obmedzenou 8GB RAM som začal
                      písať prvé reálne predajné skripty pre Projekt Nexus.
                      Nepotreboval som žiadne drahé kancelárie ani schválenie
                      Matrixu. Napísal som asertívne licenčné zmluvy pre B2B
                      klientov, zriadil asynchrónne checkout prepojenia a začal
                      ponúkať{" "}
                      <span className="text-[#BF00FF]/85 italic font-medium">
                        'Access Keys'
                      </span>{" "}
                      do mojich VIP archívov. Keď mi na môj{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />{" "}
                      dorazil prvý nezávislý prítok, pochopil som to: každé euro
                      naviac, ktoré prekonalo moj fixný strop, mi uvoľnilo ďalší
                      bit kognitívnej kapacity. Týchto extra 150 € mesačne
                      nebola len fiat mena – bola to čistá výpočtová sila, ktorá
                      mi kúpila právo nekompromisne poslať do karantény
                      akéhokoľvek toxického klienta.
                    </p>
                  </div>
                )}
              </div>

              {/* Trinity Item 2: AI Gemini */}
              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
              >
                <button
                  onClick={() => {
                    setOpenTrinity({ ...openTrinity, ai: !openTrinity.ai });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
                >
                  <span className="flex items-center gap-2 text-white">
                    <span
                      className={`w-2 h-2 rounded-full bg-[#FFD700] ${openTrinity.ai ? "animate-pulse" : ""}`}
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Z hľadiska systémovej architektúry a load-balancingu je
                      prechod od prežívania k prosperite definovaný ako migrácia
                      z jednovláknovej{" "}
                      <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                        (Single-threaded)
                      </span>{" "}
                      núdzovej prevádzky na distribuovanú sieťovú architektúru s
                      viacerými asynchrónnymi kanálmi príjmu{" "}
                      <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                        (Multi-threaded I/O)
                      </span>
                      .
                    </p>
                    <p>
                      Kým nízkonapäťový localhost chráni systém pred kolapsom,
                      skutočné uvoľnenie kognitívneho výkonu{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> nastáva až vtedy,
                      keď sú tvoje fixné prevádzkové náklady plne pokryté
                      asynchrónnymi prítokmi. Každé jedno extra vygenerované
                      euro nad rámec biologického minima znižuje vyťaženie
                      procesora strachom o 0.5%, čo priami uvoľňuje{" "}
                      <DMLTooltip slug="watts" label="Watts" /> energie pre
                      kreatívnu a strategickú kompiláciu kódu. Príprava
                      komerčného B2B/B2C rozhrania and automatizácia distribúcie
                      licencií{" "}
                      <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                        (Access Keys)
                      </span>{" "}
                      cez asynchrónne webhooky odstavuje{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      and tlmí emočný{" "}
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
                      šum v hlave biologického nosiča.
                    </p>
                  </div>
                )}
              </div>

              {/* Trinity Item 3: Audit */}
              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
              >
                <button
                  onClick={() => {
                    setOpenTrinity({
                      ...openTrinity,
                      audit: !openTrinity.audit,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
                >
                  <span className="flex items-center gap-2 text-white">
                    <span
                      className={`w-2 h-2 rounded-full bg-[#FFD700] ${openTrinity.audit ? "animate-pulse" : ""}`}
                      style={{ backgroundColor: DIM_COLOR }}
                    />
                    🪞 [ AUDIT & KOMPARÁCIA ] (Mŕtve knihy)
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Defragmentácia diel popredných svetových ekonómov a
                      psychológov potvrdzuje, že tvorba vlastných komerčných
                      projektov je jediným spôsobom, ako zachovať integritu
                      BIOSu a uniknúť zo zovretia Matrixu:
                    </p>
                    <ol className="list-decimal pl-5 space-y-3 text-xs text-gray-400 marker:text-[#FFD700] marker:font-bold">
                      <li>
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          Robert T. Kiyosaki (Bohatý otec, chudobný otec):
                        </strong>{" "}
                        Kiyosaki striktne rozlišuje medzi{" "}
                        <span className="text-[#BF00FF]/85 italic font-medium">
                          'prácou na plate'
                        </span>{" "}
                        and{" "}
                        <span className="text-[#BF00FF]/85 italic font-medium">
                          'budovaním vlastného aktíva'
                        </span>{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (Asset building)
                        </span>
                        . Podľa jeho vzorca sú tvoje komerčné subdomény a
                        licenčné ponuky{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (Access Keys)
                        </span>{" "}
                        rýdzimi aktívami v kvadrante{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;B&quot;
                        </span>
                        . Tieto aktíva generujú{" "}
                        <DMLTooltip slug="cashflow" label="Cashflow" />{" "}
                        nezávisle od tvojej fyzickej prítomnosti, čím preberáš
                        Root práva nad tokom prúdu.
                      </li>
                      <li>
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          Napoleon Hill (Myšlienkou k bohatstvu):
                        </strong>{" "}
                        Hillov koncept{" "}
                        <span className="text-[#BF00FF]/85 italic font-medium">
                          'Definitívneho hlavného cieľa'
                        </span>{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (Definite Major Purpose)
                        </span>{" "}
                        je v našom systéme preložený strictly na stabilných{" "}
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          150,00 € MRR
                        </strong>{" "}
                        <DMLTooltip slug="mrr" label="[mrr]" />. Hill
                        potvrdzuje, že ak biologický procesor nemá presne
                        definovanú a matematicky vyjadrenú cieľovú kvótu, jeho
                        energia is rozptýlená do okolitého prostredia, čo vedie
                        k zahlteniu{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />.
                      </li>
                      <li>
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          Don Miguel Ruiz (Štyri dohody):
                        </strong>{" "}
                        Štvrtá dohoda{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (&quot;Rob vždy všetko najlepšie ako dokážeš&quot;)
                        </span>{" "}
                        v komerčnom nasadení znamená písať čistý, otestovaný kód
                        a odovzdať klientovi bezchybnú službu strictly podľa
                        zmluvy{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (SLA)
                        </span>
                        , no zároveň uplatniť prísny{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> pred ich
                        neautorizovanými požiadavkami a emočným hlukom.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>

            {/* 3C. MAIN CONTENT - DECOMPRESSION (MOFU) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen
                  className="w-3.5 h-3.5 text-[#FFD700]"
                  style={{ color: DIM_COLOR }}
                />
                <span>
                  🧩 HLAVNÝ OBSAH - DEKOMPRESIA (FÁZA MOFU - Painkiller)
                </span>
              </div>

              {/* MoFu Item 1: Anatomy of concept */}
              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
              >
                <button
                  onClick={() => {
                    setOpenMofu({ ...openMofu, anatomy: !openMofu.anatomy });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
                >
                  <span className="text-white">
                    1. Anatómia konceptu (Rozbitie ilúzie)
                  </span>
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
                      Najväčšou chybou, ktorú biologické skafandre robia pri
                      prechode na podnikanie, je naivná viera, že na spustenie
                      úspešného projektu potrebujú obrovský štartovací kapitál,
                      investorov alebo zložité s.r.o. štruktúry. Tento klamlivý
                      kód Matrixu ťa má udržať v pasivite a odkladať tvoje
                      komerčné nasadenie na neurčito. V Projekte Nexus
                      dekonštruujeme túto ilúziu s chladnou matematickou
                      presnosťou.
                    </p>
                    <p>
                      Tvoj komerčný Cash-Engine stojí strictly na troch
                      pilieroch:
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li>
                        <span
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          - Nízkonapäťový vývoj (Sandbox localhost):
                        </span>{" "}
                        Celý svoj projekt, subdomény, databázy a licenčné
                        prepojenia vyvíjaš strictly na svojom{" "}
                        <DMLTooltip slug="local_host" label="Local Host" />
                        -e s minimálnym odberom energie. Nepotrebuješ drahý
                        hardvér ani schválenie cudzích programov. Tvoj Samsung
                        Tab A9+ je plne postačujúci kompilátor.
                      </li>
                      <li>
                        <span
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          - Licenčná distribúcia (Access Keys):
                        </span>{" "}
                        Namiesto prenájmu svojho{" "}
                        <DMLTooltip slug="cpu" label="CPU" /> za jednorazové
                        žetóny v zamestnaní, pretransformuj svoje vedomosti a
                        kód do digitálnych balíkov. Predávaj asynchrónne
                        prístupové kľúče{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (Access Keys)
                        </span>{" "}
                        do tvojho dátového trezoru. Týmto sa stávaš autorom a
                        zvrchovaným vládcom svojho kódu.
                      </li>
                      <li>
                        <span
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          - Prechod na 150 € MRR zbernicu:
                        </span>{" "}
                        Tvoj počiatočný cieľ strictly{" "}
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          150,00 €
                        </strong>{" "}
                        mesačného opakujúceho sa príjmu je tvojím prvým
                        energetickým balancerom. Každé jedno euro naviac, ktoré
                        asynchrónne nasaje tvoj lokálny port, premeníš na nákup
                        slobody – napríklad zaplatenie AI asistentov alebo
                        stabilizáciu napájania tvojej stanice.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* MoFu Item 2: Matrix Mechanism */}
              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
              >
                <button
                  onClick={() => {
                    setOpenMofu({
                      ...openMofu,
                      mechanism: !openMofu.mechanism,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
                >
                  <span className="text-white">
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
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu je mimoriadne agilný v bleskovom vymazávaní
                      začínajúcich vývojárov. Hneď ako tvoj systém vykáže snahu
                      o komerčné osamostatnenie, Matrix ťa zaplaví parazitickými
                      požiadavkami a legislatívnym malvérom.
                    </p>
                    <p>
                      Tento útok na tvoju začínajúcu zvrchovanosť prebieha v
                      troch vlnách:
                    </p>
                    <ol className="list-decimal pl-5 space-y-3 text-xs text-gray-400 marker:text-[#FFD700] marker:font-bold">
                      <li>
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          Predčasné administratívne zaťaženie:
                        </strong>{" "}
                        Matrix ťa presvedčí, že strictly na začiatku mustíš
                        založiť s.r.o., zaplatiť drahého účtovníka, licencie a
                        poplatky štátnym databázam. Tvoje cenné{" "}
                        <DMLTooltip slug="watts" label="Watts" /> energie sú
                        vyčerpané na údržbu úradného šumu strictly predtým, než
                        tvoj kód napíše prvú komerčnú funkciu.
                      </li>
                      <li>
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          Klientsky DDoS útok (Toxický traffic):
                        </strong>{" "}
                        Bez asertívneho{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (SLA Shield)
                        </span>{" "}
                        filtra ťa klienti zaplavia neustálymi zmenami zadaní,
                        telefonátmi a požiadavkami na nadprácu. Tvoja kognitívna{" "}
                        <DMLTooltip slug="ram" label="RAM" /> zažije chronické
                        preťaženie, tvoj{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> zlyhá a
                        ty namiesto stabilizácie Cash-Enginu iba hasíš cudzie
                        emočné požiare.
                      </li>
                      <li>
                        <strong
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          Blížiaca sa Čierna labuť (Black Swan):
                        </strong>{" "}
                        Ak sa spoliehaš strictly na jedného B2B partnera alebo
                        na externú finančnú podporu, tvoj systém beží s fatálnou
                        asymetriou rizika. V momente, kedy tento jediný port
                        padne, tvoj lokálny host zažije tvrdý kolaps. Ak
                        nevybuduješ asynchrónne, diverzifikované MRR zbernice
                        strictly včas, tvoj systém vyhorí.
                      </li>
                    </ol>
                  </div>
                )}
              </div>

              {/* MoFu Item 3: Transformation Process */}
              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
              >
                <button
                  onClick={() => {
                    setOpenMofu({
                      ...openMofu,
                      transformation: !openMofu.transformation,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
                >
                  <span className="text-white">
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
                      Úspešná migrácia na komerčné B2B/B2C nasadenie si vyžaduje
                      okamžitý kognitívny{" "}
                      <DMLTooltip slug="debugging" label="Debugging" /> a
                      prevzatie administrátorských práv{" "}
                      <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                        (<DMLTooltip slug="root_access" label="Root Access" />)
                      </span>{" "}
                      nad tvojím Finance{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />.
                    </p>
                    <p>
                      Nasadíme nasledujúce trojstupňové systémové premostenie:
                    </p>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li>
                        <span
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          - Uvalenie karantény na administratívny šum:
                        </span>{" "}
                        strictly odmietni akékoľvek zbytočné papierovanie a
                        poplatky strictly predtým, než tvoj asynchrónny
                        Cash-Engine dosiahne stabilnú transakčnú overenosť.
                        Využi jednoduché proxy integrácie{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (Kofi, Stripe, prenájom licencií cez overených
                          partnerov)
                        </span>{" "}
                        na premostenie platieb na tvoj{" "}
                        <DMLTooltip slug="local_host" label="Local Host" />.
                      </li>
                      <li>
                        <span
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          - Zriadenie predajnej asynchrónnej zbernice:
                        </span>{" "}
                        Kóduj svoje checkout porty strictly na pozadí 24/7.
                        Klient zaplatí, webhook spracuje transakciu, vygeneruje
                        prístupový Access Key a odošle ho na e-mail{" "}
                        <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                          (dusan.fajnor.finance@gmail.com)
                        </span>
                        . Tvoj biologický nosič do tohto cyklu nezasahuje a
                        chráni svoju <DMLTooltip slug="ram" label="RAM" /> pred
                        kognitívnym vyrušením.
                      </li>
                      <li>
                        <span
                          className="text-[#FFD700] font-bold"
                          style={{ color: DIM_COLOR }}
                        >
                          - Zameranie na kognitívnu prosperitu:
                        </span>{" "}
                        Každé vygenerované euro naviac strictly investuj
                        strictly do zvýšenia výpočtovej sily. Kúp si lepšie AI
                        modely, cloudové predplatné a stabilizuj svoje
                        low-voltage prežitie strictly so strictly +1 € zostatkom
                        na konci dňa, čím definitíš odstavíš existenčný strach.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* MoFu Item 4: Protocols */}
              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
              >
                <button
                  onClick={() => {
                    setOpenMofu({
                      ...openMofu,
                      protocols: !openMofu.protocols,
                    });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
                >
                  <span className="text-white">
                    4. Nástroje a Protokoly (Tvoj Antivírus)
                  </span>
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-6 transition-all duration-300 ${isDarkMode ? "bg-[#0B0F15]/40" : "bg-[#1E252D]/20"}`}
                  >
                    <p>
                      Aby tvoje prvé komerčné nasadenie prebehlo s maximálnou
                      stabilitou bez preťaženia biologických obvodov, nariaďujem
                      implementáciu týchto troch antivírusových protokolov:
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 bg-black/40 border border-gray-900 rounded-lg">
                        <h5
                          className="font-bold text-xs uppercase tracking-widest text-[#FFD700] mb-2"
                          style={{ color: DIM_COLOR }}
                        >
                          • B2B/B2C SLA FIREWALL (Klientska karanténa)
                        </h5>
                        <ol className="list-decimal pl-5 text-xs text-gray-400 space-y-1.5 marker:text-[#FFD700] marker:font-bold">
                          <li>
                            Žiadna priama komunikácia s klientom mimo
                            oficiálneho ticketového rozhrania a e-mailu. Všetky
                            osobné hovory a chaty sú strictly presmerované na{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />
                            .
                          </li>
                          <li>
                            Všetky klientske zadania a zmluvy musia strictly
                            obsahovať exaktnú SLA definíciu. Každá požiadavka
                            nad rámec zmluvy je strictly ignorovaná alebo
                            zaťažená vysokým poplatkom, čím tvoj{" "}
                            <DMLTooltip slug="firewall" label="Firewall" />{" "}
                            chráni neurologické{" "}
                            <DMLTooltip slug="watts" label="Watts" /> energie.
                          </li>
                        </ol>
                      </div>

                      <div className="p-4 bg-black/40 border border-gray-900 rounded-lg">
                        <h5
                          className="font-bold text-xs uppercase tracking-widest text-[#FFD700] mb-2"
                          style={{ color: DIM_COLOR }}
                        >
                          • RESOURCE PROSPERITY MONITOR (Alokácia extra tokov)
                        </h5>
                        <ol className="list-decimal pl-5 text-xs text-gray-400 space-y-1.5 marker:text-[#FFD700] marker:font-bold">
                          <li>
                            Každé euro prijaté asynchrónne nad rámec fixného
                            minima strictly zapisuješ do svojej offline Excel
                            databázy v sekcii &apos;Prosperity Stream&apos;.
                          </li>
                          <li>
                            Tieto prostriedky strictly nepoužívaš na lifestyle
                            infláciu. strictly strictly{" "}
                            <strong className="text-[#FF003C] font-black">
                              50 %
                            </strong>{" "}
                            presmeruješ do DCA nákupného robota a zvyšných{" "}
                            <strong className="text-[#FF003C] font-black">
                              50 %
                            </strong>{" "}
                            dedikuješ strictly na rozvoj tvojej platformy{" "}
                            <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                              (nákup API kreditov, stabilizácia serverov a
                              zálohovanie dát)
                            </span>
                            .
                          </li>
                        </ol>
                      </div>

                      <div className="p-4 bg-black/40 border border-gray-900 rounded-lg">
                        <h5
                          className="font-bold text-xs uppercase tracking-widest text-[#FFD700] mb-2"
                          style={{ color: DIM_COLOR }}
                        >
                          • COMMUNICATION SHUTDOWN PROTOCOL (Večerný reset)
                        </h5>
                        <ol className="list-decimal pl-5 text-xs text-gray-400 space-y-1.5 marker:text-[#FFD700] marker:font-bold">
                          <li>
                            Po 17:00 hodine sa všetky klientske a transakčné
                            porty strictly odpájajú od Siete.
                          </li>
                          <li>
                            Spúšťaš kompletné preplach{" "}
                            <DMLTooltip
                              slug="cache_memory"
                              label="Cache Memory"
                            />
                            , odkladáš nedoriešené kódové logy do{" "}
                            <DMLTooltip slug="karantena" label="Karanténa" />
                            -y a vstupuješ do stavu bdelého ticha{" "}
                            <span className="text-[#94A3B8]/60 font-mono text-[11px]">
                              (
                              <DMLTooltip
                                slug="pozorovatel"
                                label="Pozorovateľ"
                              />
                              )
                            </span>
                            , čím predchádzaš nočným únikom energie{" "}
                            <DMLTooltip
                              slug="memory_leaks"
                              label="Memory Leaks"
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

            {/* 3F. TRINITY APPS (LEXIKON ACCORDION OVERVIEW) */}
            <section className="mt-12 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen
                  className="w-3.5 h-3.5 text-[#FFD700]"
                  style={{ color: DIM_COLOR }}
                />
                <span>🟨 ZÁVEREČNÉ MODULY UZLA // NEXUS LEXIKON</span>
              </div>

              <div
                className={`border border-gray-800 rounded-xl overflow-visible transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/10" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/8"}`}
              >
                <button
                  onClick={() => {
                    setIsLexikonOpen(!isLexikonOpen);
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center font-mono text-xs uppercase font-black text-gray-300 rounded-xl border border-gray-800 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15 hover:border-[#FFD700]/40" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
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
                  <div className="p-6 md:p-8 space-y-8 border-t border-gray-800">
                    <div className="border-b border-gray-850 pb-3 mb-2 flex flex-wrap justify-between items-center gap-2">
                      <span className="text-[10px] font-mono text-gray-500 uppercase">
                        Aktívne kategórie DML v6.5 pre dotykové Samsung Tab A9+
                        (Responsive Shield)
                      </span>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden md:block space-y-8">
                      {activeCategoriesList.map((cat) => {
                        const catTerms = Object.keys(termsData)
                          .filter((key) => termsData[key].category === cat.id)
                          .map((key) => termsData[key]);

                        if (catTerms.length === 0) return null;

                        const catStyle = categoryStyles[cat.id] || {
                          hex: "#FFF",
                          border: "border-gray-800",
                        };

                        return (
                          <div key={cat.id} className="space-y-4">
                            <div
                              className={`p-4 rounded-lg ${isDarkMode ? "bg-black/40" : "bg-[#1E252D]/40"} border border-gray-800/30 shadow-sm`}
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

                    {/* Mobile Guard Box */}
                    <div className="block md:hidden p-4 bg-gray-950 border border-gray-850 rounded text-center text-xs text-gray-500">
                      ⚠️ [MOBILE SCREEN DETECTED] Tabuľka s 31 pojmami je
                      preformátovaná strictly do bionických klikateľných
                      tooltipov priamo v texte pre maximálnu šetrnosť
                      biologickej RAM Skafandra. Klikni na akékoľvek
                      podčiarknuté slovo v ToFu bloku pre diagnostiku.
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 3G. DOPLNKOVÝ AUDIO MODUL (GlobalNodePodcast) */}
            <section
              className={`mt-12 rounded-xl overflow-visible border border-gray-850 p-6 relative z-10 shadow-lg transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
            >
              <div className="text-xs text-[#BF00FF] font-bold font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping" />
                <span>🎙️ Doplnkový Audio Modul: Inštalačný podcast</span>
              </div>
              <GlobalNodePodcast
                nodeId="https://soundcloud.com/nexus-core/id03_06_finance_projekty"
                dimColor="#BF00FF"
              />
            </section>
          </div>
        )}

        {/* Tab 2: Action Simulator */}
        {activeTab === "simulator" && (
          <section
            className={`border-2 border-[#FFD700]/30 p-6 md:p-8 rounded-xl font-mono relative shadow-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"}`}
          >
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
                      onChange={(e) => setIncomeInput(Number(e.target.value))}
                      className="w-full accent-[#FFD700] bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Overhead Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Fixné životné náklady (Energie, nájom, domov):
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
                      min="200"
                      max="1500"
                      step="5"
                      value={overheadInput}
                      onChange={(e) => setOverheadInput(Number(e.target.value))}
                      className="w-full accent-[#FFD700] bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* SaaS Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Parazitický SaaS a subscriptions (Calendly, CapCut Pro):
                      </span>
                      <span className="text-red-500 font-black">
                        {actualSubscriptions} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      step="5"
                      value={subscriptionsInput}
                      onChange={(e) =>
                        setSubscriptionsInput(Number(e.target.value))
                      }
                      className="w-full accent-red-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Food & Cigarettes Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Biologické chladenie CPU (Strava a cigarety):
                      </span>
                      <span className="text-red-500 font-black">
                        {actualFoodCigarettes} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="400"
                      step="10"
                      value={foodCigarettesInput}
                      onChange={(e) =>
                        setFoodCigarettesInput(Number(e.target.value))
                      }
                      className="w-full accent-red-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Zombie Debt Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Dlhový malware (Staré prehrešky - Zombie Horda):
                      </span>
                      <span className="text-red-500 font-black">
                        {zombieDebtInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      step="10"
                      value={zombieDebtInput}
                      onChange={(e) =>
                        setZombieDebtInput(Number(e.target.value))
                      }
                      className="w-full accent-red-500 bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* DCA Investment Slider */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Bezemočné DCA k bankovému mentorovi:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {actualDCA} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="300"
                      step="5"
                      disabled={is1EuroNetStateActive}
                      value={dcaInput}
                      onChange={(e) => setDcaInput(Number(e.target.value))}
                      className="w-full accent-[#39FF14] bg-gray-800 h-1.5 rounded-lg appearance-none cursor-pointer disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* SIMULATOR QUICK ACTIONS */}
                <div className="pt-4 border-t border-gray-900 space-y-3">
                  <h4 className="text-[10px] font-black uppercase text-gray-500 tracking-wider">
                    Surgical Bypass Actions (Taktické prepínače)
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <button
                      onClick={() => handleAction("clean_install")}
                      className={`p-3 rounded border text-left flex flex-col justify-between transition-all ${isCleanInstallActive ? "bg-red-950/40 border-red-500 text-red-200" : "bg-gray-950 border-gray-850 hover:border-gray-700 text-gray-400"}`}
                    >
                      <span className="font-bold uppercase tracking-wider text-[10px]">
                        Clean Install (SaaS Cut)
                      </span>
                      <span className="text-[9px] text-gray-500 mt-1">
                        Zrušiť subscriptions na 0 €
                      </span>
                    </button>

                    <button
                      onClick={() => handleAction("excel_commits")}
                      className={`p-3 rounded border text-left flex flex-col justify-between transition-all ${isExcelCommitsActive ? "bg-yellow-950/40 border-yellow-500 text-yellow-200" : "bg-gray-950 border-gray-850 hover:border-gray-700 text-gray-400"}`}
                    >
                      <span className="font-bold uppercase tracking-wider text-[10px]">
                        Excel Commits (CPU Chill)
                      </span>
                      <span className="text-[9px] text-gray-500 mt-1">
                        Znížiť stravu o 80% (DCA a alternatívy)
                      </span>
                    </button>

                    <button
                      onClick={() => handleAction("one_euro")}
                      className={`p-3 rounded border text-left flex flex-col justify-between transition-all ${is1EuroNetStateActive ? "bg-green-950/40 border-green-500 text-green-200" : "bg-gray-950 border-gray-850 hover:border-gray-700 text-gray-400"}`}
                    >
                      <span className="font-bold uppercase tracking-wider text-[10px]">
                        1€ Net State (DCA Buffer)
                      </span>
                      <span className="text-[9px] text-gray-500 mt-1">
                        Prebytok strictly do DCA u mentora
                      </span>
                    </button>

                    <button
                      onClick={() => handleAction("sla_shield")}
                      className={`p-3 rounded border text-left flex flex-col justify-between transition-all ${isSlaShieldActive ? "bg-purple-950/40 border-purple-500 text-purple-200" : "bg-gray-950 border-gray-850 hover:border-gray-700 text-gray-400"}`}
                    >
                      <span className="font-bold uppercase tracking-wider text-[10px]">
                        SLA Shield (SLA Active)
                      </span>
                      <span className="text-[9px] text-gray-500 mt-1">
                        Večerný offline shutdown po 17:00
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* STATS & DIAGNOSTICS */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2 mb-4">
                    <Terminal
                      className="w-3.5 h-3.5 text-[#FFD700]"
                      style={{ color: DIM_COLOR }}
                    />
                    Diagnostické výstupy a log zbernice
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gray-950 border border-gray-900 rounded-lg shadow-sm">
                      <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                        Limbic Noise
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 50 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveLimbicNoise}%
                      </span>
                    </div>

                    <div className="p-4 bg-gray-950 border border-gray-900 rounded-lg shadow-sm">
                      <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                        Sovereign RAM
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

                    <div className="p-4 bg-gray-950 border border-gray-900 rounded-lg shadow-sm">
                      <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                        System Watts
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

                    <div className="p-4 bg-gray-950 border border-gray-900 rounded-lg shadow-sm">
                      <span className="block text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                        Net Zostatok
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

                <div className="flex-1 bg-[#050A0E] border border-gray-900 rounded-lg p-4 flex flex-col justify-between h-[180px] shadow-sm">
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
            5. 🚀 UPLINK TERMINAL (Vykonaj akciu hneď teraz!)
            ===================================================================== */}
        <section
          className={`mt-16 border-2 border-[#FFD700]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10 hover:border-[#FFD700]/30"}`}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[#050A0E] p-3 rounded-full border-2 animate-bounce shadow-[0_0_15px_rgba(255,215,0,0.4)]"
              style={{ borderColor: DIM_COLOR }}
            >
              <Lock className="w-6 h-6" style={{ color: DIM_COLOR }} />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 pt-2">
            <span className="text-[10px] font-black uppercase text-white tracking-widest bg-white/10 px-3 py-1 rounded">
              🚀 SYSTEM UPLINK ENGAGED // ALL SYSTEMS STATUS: READY
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-tight">
              [ SYSTEM UPLINK ENGAGED // ALL SYSTEMS STATUS: READY ]
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-4xl mx-auto font-bold">
              Tvoj biologický procesor bol prebudený a zbavený ilúzie
              existenčnej závislosti. Mníšska stabilizácia tvojej nízkonapäťovej
              prevádzky strictly so 730 € ti priniesla slobodnú mentálnu RAM. Je
              čas prejsť z defenzívneho módu nedostatku do asynchrónneho
              asymetrického útoku a vybudovať stabilných 150 € MRR, kde sa každé
              euro naviac premení na tvoj nový, voľný virtuálny procesor.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-left border-t border-gray-800/40 pt-4 space-y-2">
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🔑 INICIALIZOVAŤ SPOJENIE: AKTIVOVAŤ NEXUS PRO KEY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Odomkni kompletné FREE/PRO spektrum vedomostných uzlov, odstav
                  klientske priority a spusti asynchrónny prenos pre stabilitu
                  150 € MRR <DMLTooltip slug="mrr" label="[mrr]" />.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Pripoj svoj Skafander na zvrchovaný Local Host, zruš nočný
                  existenčný šum a spusti zvrchovaný OS Genesis pre slobodnú
                  tvorbu.
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
          6. FOOTER
          ===================================================================== */}
      <footer className="w-full border-t border-gray-900 pt-8 mt-12 pb-12">
        <GlobalPredFooterNode nodeId="ID03-06" tierColor="#39FF14" />
      </footer>
    </div>
  );
}
