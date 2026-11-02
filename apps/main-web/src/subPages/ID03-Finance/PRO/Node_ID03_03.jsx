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
// 👑 HLAVNÝ KOMPONENT UZLA ID03_NODE_03 (PREŽITÁ PRAVDA O PREŽITÍ)
// =====================================================================
export default function Node_ID03_03() {
  const NODE_ID = "ID03-03";
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

  // Simulator States - BUDGET SHIELD & MONK OPTIMIZATION
  const [incomeInput, setIncomeInput] = useState(730);
  const [overheadInput, setOverheadInput] = useState(590);
  const [weaponsInput, setWeaponsInput] = useState(80);
  const [dcaInput, setDcaInput] = useState(10);
  const [debtInput, setDebtInput] = useState(0); // monthly splátky per month is strictly 0 € (paid 2x ročne from SPP/13th pension)
  const [foodInput, setFoodInput] = useState(0); // resolved via alternative paths strictly outside the budget

  const [isRootPriority, setIsRootPriority] = useState(true);
  const [isSandboxActive, setIsSandboxActive] = useState(true);
  const [isSlaActive, setIsSlaActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný low-voltage monitor. Smerovacie napätie: strictly 730,00 €.",
    "[STATUS] Detegovaná dlhová defragmentácia. Zombie Horda je izolovaná mimo mesačný cashflow.",
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

  // Live calculations for Budget Shield Simulator
  const totalExpenses =
    overheadInput + weaponsInput + dcaInput + debtInput + foodInput;
  const netZostatok = incomeInput - totalExpenses;

  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (foodInput > 0 ? 40 : 0) +
          (debtInput > 0 ? 45 : 0) +
          (isSlaActive ? -20 : 0) +
          (isSandboxActive ? 10 : 40),
      ),
    ),
  );

  const liveFreeRam = Math.max(
    0,
    100 -
      Math.round(
        (totalExpenses / Math.max(1, incomeInput)) * 70 +
          liveLimbicNoise * 0.25,
      ),
  );

  const liveWatts = Math.min(
    100,
    Math.max(
      5,
      Math.round(
        100 -
          (netZostatok < 1 ? 40 : 0) +
          (isRootPriority ? 15 : -15) +
          (isSandboxActive ? 15 : -10),
      ),
    ),
  );

  const liveSuverenity = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (isRootPriority ? 40 : 10) +
          (isSandboxActive ? 30 : 0) +
          (debtInput === 0 ? 30 : 0),
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "monk_shield") {
      setOverheadInput(590);
      setWeaponsInput(80);
      setDcaInput(10);
      setFoodInput(0);
      setIsSandboxActive(true);
      setLogs((prev) => [
        "[SUCCESS] Mníšsky štít aktívny. Strava, cigarety a luxusné výdavky boli strictly odklonené mimo rozpočet.",
        "[STATUS] Skafander beží strictly na low-voltage s voľnou kognitívnou RAM vyše 90%.",
        ...prev,
      ]);
    } else if (actionType === "defragment_zombie") {
      setDebtInput(0);
      setLogs((prev) => [
        "[SUCCESS] Dlhová defragmentácia exekuovaná. Dlh 2500 € presunutýstrictly na splácanie 2x ročne (SPP preplatky & 13. dôchodok).",
        "[STATUS] Mesačné splátky vynulované. Kognitívna RAM uvoľnená od klientskeho prenasledovania.",
        ...prev,
      ]);
    } else if (actionType === "root_priority") {
      setIsRootPriority(!isRootPriority);
      if (!isRootPriority) {
        setLogs((prev) => [
          "[SUCCESS] Root Priority Protocol ZAPNUTÝ. Prvý balík žetónov strictly odoslaný do DCA Investície pred zaplatením účtov.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Root Priority Protocol VYPNUTÝ. Skafander beží ako obyčajný prietokový ohrievač na fiat žetóny.",
          ...prev,
        ]);
      }
    } else if (actionType === "sla_shield") {
      setIsSlaActive(!isSlaActive);
      if (!isSlaActive) {
        setLogs((prev) => [
          "[SUCCESS] Communication SLA Shield aktívny. Po 17:00 sa všetky porty prepínajú do offline. Banned Port je zablokovaný.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] SLA Shield vypnutý. Klientsky traffic má voľný prístup k tvojmu CPU počas noci.",
          ...prev,
        ]);
      }
    } else if (actionType === "reset") {
      setIncomeInput(730);
      setOverheadInput(590);
      setWeaponsInput(80);
      setDcaInput(10);
      setDebtInput(50);
      setFoodInput(80);
      setIsRootPriority(false);
      setIsSandboxActive(false);
      setIsSlaActive(false);
      setLogs([
        "[OK] Systém reštartovaný do neoptimalizovaného stavu.",
        "[CRITICAL] Detegovaná chamtivosť a existenčný šum. RAM pamäť hlási preťaženie.",
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
      translation: "biologická energia a životná sila",
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
        "Ukutá a zámerne konfigurová sociálna maska, cez ktorú bezpečne komunikuješ s Matrixom bez odhalenia jadra.",
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
        "Základný komunikačný balík dát prichádzajúci z okolia, ktorý tvoj kognitívny firewall musí preskenovať a zhodnotiť.",
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
        "Pravidelný, asynchrónne sa opakujúci tok finančných prostriedkov generovaný strictly z tvojich aktív.",
    },
  };

  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID03_03 (ESLINT FIX)
  // =====================================================================
  const activeCategoriesList = [
    {
      id: 1,
      key: "foreign_lang",
      translation: "Cudzí / Svetový Jazyk",
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
        "Vlastné digitálne aktíva, autorské práva, asymetrické ponuky, Nexus Agency and predajné webhooky.",
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
        title="ID03 THE CASH-ENGINE // Prežitá Pravda o prežití (Hacker Mindset)"
        description="03. Prežitá Pravda o prežití (Hacker Mindset a mníšska optimalizácia)."
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
                Node_ID03_03 // Prežitá Pravda o prežití
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              Prežitá Pravda o prežití
            </h1>
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              03. Prežitá Pravda o prežití (Hacker Mindset a mníšska
              optimalizácia). Spusť mníšsku optimalizáciu a zaplátaj úniky
              pozornosti a životnej sily tvojho cashflowu.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: finance.projekt-nexus.sk</span>
            <span>UPLINK: ACTIVE // 255 KB/s</span>
          </div>
        </div>
      </header>

      {/* =====================================================================
          3. MAIN LAYOUT (ToFu / MoFu / BoFu vertical flow)
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
              🚨 ERROR LOG // Financial_Deficit // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Počúvaš lacné, navoňané prednášky o finančnej nezávislosti a
              pasívnom príjme od ľudí, ktorí nikdy nečelili ráznej hrozbe
              absolútneho odpojenia od prúdu. Snívaš o miliónoch na plážach
              Karibiku, zatiaľ čo tvoja lokálna stanica vykazuje permanentné
              finančné preťaženie a tvoj biologický{" "}
              <DMLTooltip slug="skafander" label="Skafander" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (biologické telo a neurologický systém)
              </span>{" "}
              beží na núdzové záložné napájanie. Skutočné finančné IQ nevzniká
              pri čítaní akademickej vaty, ale v okamihoch, kedy tvoje{" "}
              <DMLTooltip slug="cpu" label="CPU" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (biologický mozog a spracovanie nervových impulzov)
              </span>{" "}
              čelí mrazivému deficitu a ty musíš udržať celú sieťovú
              infraštruktúru pri živote zo strictly{" "}
              <strong className="text-[#FF003C] font-black">730,00 €</strong>{" "}
              mesačne. Väčšina nevedomých Skafandrov by pri takomto príkone
              okamžite zažila totálny kolaps obvodov. No prebudený operátor s
              Hacker Mindsetom vie, že aj z minima sa dá vybudovať nezničiteľná,
              zvrchovaná digitálna stanica. Musíš uvaliť totálnu{" "}
              <DMLTooltip slug="karantena" label="Karanténu" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (izolácia škodlivých spoločenských vplyvov)
              </span>{" "}
              na emočné spotrebiteľské programy Matrixu, zastaviť kognitívny{" "}
              <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (kognitívny šum a emočné vyrušenia)
              </span>{" "}
              existenčného strachu a premeniť svoj rozpočet na nepriestrelný{" "}
              <DMLTooltip slug="firewall" label="Firewall" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (sieťový štít a filter prichádzajúcich informácií)
              </span>
              . Prestaň fňukať, že nemáš dostatok{" "}
              <DMLTooltip slug="ram" label="RAM" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (kapacita tvojej krátkodobej pozornosti)
              </span>
              . Spusť mníšsku optimalizáciu a zaplátaj{" "}
              <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (úniky pozornosti a životnej sily)
              </span>{" "}
              svojho cashflowu skôr, než ťa zasiahne fatálna Čierna labuť a tvoj
              bankový <DMLTooltip slug="local_host" label="Local Host" />{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (miestny, bezpečný priestor tvojej izby a mysle)
              </span>{" "}
              zasiahne úplný Blackout.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID03_03_prezita_pravda_o_preziti.md</span>
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
              id03_node_03_prezita_pravda_video
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
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Ako CyberTech Architekt som musel prejsť najtemnejším dňom
                      nula, aby som pochopil, že skutočná sila nevzniká z
                      hromadenia papierového bohatstva, ale z absolútnej
                      nezávislosti tvojej výpočtovej stanice. V lete 2018, po
                      ťažkom kolapse biologického procesora a diagnostike
                      paranoidnej schizofrénie F20.0 v Sektore Trnava, ma Matrix
                      vyhodil ako nepotrebný proces. Ostal som ležať strictly
                      bez energie, s vybitou batériou a nulovou dôverou v
                      budúcnosť. No namiesto toho, aby som som sa poddal
                      deštruktívnemu systému, prebudoval som svoje toky od
                      úplného základu. Zriadil som si invalidný dôchodok
                      strictly{" "}
                      <strong className="text-[#FF003C] font-black">
                        530,00 €
                      </strong>{" "}
                      ako svoj stabilný finančný{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (izolačný filter a smerovač dátových tokov)
                      </span>
                      . K tomu sa pridala energetická podpora{" "}
                      <strong className="text-[#FF003C] font-black">
                        200,00 €
                      </strong>{" "}
                      mesačne od môjho strýka, s ktorým zdieľam domovskú
                      základňu, čo tvorí celkový pevný príkon strictly{" "}
                      <strong className="text-[#FF003C] font-black">
                        730,00 €
                      </strong>
                      .
                    </p>
                    <p>
                      Umelé teórie z{" "}
                      <span className="text-[#FFAA00] font-mono">
                        &quot;mŕtvych kníh&quot;
                      </span>{" "}
                      tvrdia, že s týmto rozpočtom sa nedá prežiť. No môj
                      asertívny inžiniersky systém dokázal pravý opak. Úplne som
                      zo svojho fixného účtu vyradil položky pre stravu a
                      cigarety{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (riešim ich strictly alternatívnymi cestami mimo fixného
                        rozpočtu, vďaka čomu ušetrujem obrovskú energiu)
                      </span>{" "}
                      a v systéme mi vznikla čistá, voľná exekutívna{" "}
                      <DMLTooltip slug="ram" label="RAM" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (kapacita tvojej krátkodobej pozornosti)
                      </span>{" "}
                      vo výške{" "}
                      <strong className="text-white font-black">
                        ~80,00 €
                      </strong>{" "}
                      mesačne. Týchto 80 € strictly alokujem do nákupu
                      digitálnych zbraní: Google One s Gemini Advanced za 22 €,
                      YouTube Premium, internetové pripojenie a 20 € dedikujem
                      strictly na rozvoj Projektu Nexus. Môj prebytočný{" "}
                      <DMLTooltip slug="cashflow" label="Cashflow" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (tok finančnej energie)
                      </span>{" "}
                      prežíva strictly na zostatku +1,00 € a pravidelnom 10 €
                      DCA vklade u môjho bankového mentora s horizontom 15
                      rokov. Dokázal som, že z ticha svojej izby na lacnom
                      tablete Samsung Tab A9+ s 8GB RAM dokážem písať zvrchovaný
                      a bezchybný{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (zvrchovaný operačný systém pre ľudské vedomie)
                      </span>
                      , zatiaľ čo nevedomé batérie s platom 2000 € vyhorievajú v
                      krysích pretekoch Matrixu.
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
                      Z hľadiska systémovej analýzy a správy lokálnych
                      prostriedkov je prežívanie pod prísnymi obmedzeniami
                      dokonalým testom kognitívneho load-balancingu. Keď
                      biologický nosič funguje s prísne limitovaným vstupným
                      príkazom strictly{" "}
                      <strong className="text-[#FF003C] font-black">
                        730,00 €
                      </strong>
                      , kľúčom k zabráneniu vyhoreniu{" "}
                      <DMLTooltip slug="cpu" label="CPU" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (biologický mozog a spracovanie nervových impulzov)
                      </span>{" "}
                      je eliminácia emočného a digitálneho trenia (Friction). V
                      tradičných rozpočtoch dochádza k neustálym stratám prúdu{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (úniky pozornosti a životnej sily)
                      </span>{" "}
                      kvôli neustálemu dopamínovému marketingu, ktorý núti{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />{" "}
                      nakupovať nepotrebný materiálny balast na udržanie
                      fiktívneho sociálneho statusu.
                    </p>
                    <p>
                      Mníšska optimalizácia, kedy sa výdavky zredukujú strictly
                      na nevyhnutné jadro (energie, domová daň, telekomunikačný
                      uplink), uvoľňuje obrovskú časť kognitívnej{" "}
                      <DMLTooltip slug="ram" label="RAM" />. Súbor procesov na
                      pozadí sa upokojuje a všetka výpočtová sila{" "}
                      <DMLTooltip slug="watts" label="Watts" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (biologická energia a životná sila)
                      </span>{" "}
                      je presmerovaná do dvoch hlavných procesov: stabilnej
                      údržby materskej lode a vývoja autonómnych digitálnych
                      aktív. Surová realita je taká, že nízkonapäťový režim
                      (Low-Voltage Engine) funguje ako najlepší bezpečnostný{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (izolované karanténne prostredie pre testovanie
                        anomálií)
                      </span>{" "}
                      pred klientskym vyhorením.
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
                      Keď preosejeme nánosy akademického šumu a emočného pátosu
                      z finančnej a duchovnej literatúry, môžeme sémanticky
                      validovať prežité pravdy so stabilným jadrom mŕtvych kníh:
                    </p>

                    {/* =====================================================================
                        🚨 VÝSTRAHA OPERÁTORA: STRICT WHITE COLOR CONFORMS TO PREVIOUS STYLE
                        ===================================================================== */}
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Robert T. Kiyosaki{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Cashflow Kvadrant)
                          </span>
                          :
                        </strong>{" "}
                        Kiyosaki presne definuje Kvadrant &quot;Z&quot;
                        (zamestnanec) ako legacy prostredie s obmedzeným
                        výpočtovým pásmom, kde nevedomé batérie predávajú svoju
                        konečnú <DMLTooltip slug="ram" label="RAM" /> za rýchlo
                        znehodnocujúce sa{" "}
                        <DMLTooltip slug="fiat" label="Fiat" />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (štátom krytá tlačená mena)
                        </span>{" "}
                        dáta na zdieľanom hostingu. Naša dekompresia nariaďuje
                        okamžitý presun do pravého spektra Siete – budovaním
                        franšízy Genesis (Kvadrant M) a auto-DCA investovaním
                        (Kvadrant I) preberáš Root práva nad tokom prúdu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Don Miguel Ruiz{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Štyri dohody)
                          </span>
                          :
                        </strong>{" "}
                        Piaty kognitívny firewall (&quot;Buď skeptický, ale uč
                        sa počúvať&quot;) ťa varuje pred domestikačným softvérom
                        reklám. Matrix ťa programuje k nákupu zbytočného
                        hardvérového statusu, čím tvoj systém infikuje
                        nebezpečným malvérom v podobe{" "}
                        <DMLTooltip slug="zombie_horda" label="Zombie Horda" />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (staré nebezpečné dlhy a veritelia)
                        </span>{" "}
                        veriteľov.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Eckhart Tolle{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Sila prítomnosti)
                          </span>
                          :
                        </strong>{" "}
                        Strach o prežitie a neustále prepočítavanie fiktívnych
                        budúcich scenárov sú len chybné podprogramy Ega bežiace
                        vo tvojej{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (vyrovnávacia pamäť podvedomia a zvykov)
                        </span>
                        . Keď premostíš svoje vnímanie do prítomnosti a uvalíš
                        na finančné plánovanie prísny, asertívny{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" />, tvoj
                        organizmus upadne do hlbokého energetického ticha.
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Peniaze vo tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (používateľské rozhranie tvojho vnútorného priestoru)
                      </span>{" "}
                      nie sú meradlom tvojej osobnej hodnoty, ani potvrdením
                      tvojej fiktívnej spirituálnej čistoty. Rozbi túto
                      neexekutívnu ilúziu raz a navždy. V Projekte Nexus
                      definujeme peniaze striktne ako{" "}
                      <strong className="text-[#FF003C] font-black">
                        kognitívnu šírku pásma (Cognitive Bandwidth)
                      </strong>
                      . Finančná hojnosť v nízkorozpočtovom režime nespočíva v
                      tom, koľko fiat meny preteká tvojím rozhraním, ale v tom,
                      ako efektívne dokážeš izolovať svoje výpočtové cykly pred
                      neoprávneným odberom zo strany Matrixu.
                    </p>
                    <p>
                      Väčšina nevedomých Skafandrov trpí kvôli chybnému
                      kódovaniu. Sú presvedčení, že na prekonanie strachu doomed
                      k závislosti potrebujú tisíce eur. No ak tvoj systém
                      vykazuje trvalé anomálie a tvoje priority bežia na
                      autopilotný kód spotrebného správania, akýkoľvek nárast
                      príjmu iba zväčší rozsah tvojich{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />.
                      Buduješ len luxusnejšiu celu v cudzom{" "}
                      <DMLTooltip slug="botnet" label="Botnet" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (sieť zotročených a nevedomých myslí)
                      </span>
                      -e. Hacker prežitia naopak chápe, že jeho najväčšou
                      prednosťou je nízkonapäťový chod. Odstránenie materiálneho
                      balastu znižuje tlak na tvoje{" "}
                      <DMLTooltip slug="cpu" label="CPU" />, prečisťuje tvoju{" "}
                      <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                      and vracia ti plnú autorskú suverenitu nad každou sekundou
                      tvojho dňa.
                    </p>
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Spoločenský{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (vonkajší manipulatívny systém a spoločenské programy)
                      </span>{" "}
                      Matrixu prežíva vďaka tomu, že tvoj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> udržiava
                      v permanentnom stave kognitívneho deficitu a existenčného
                      strachu. Akonáhle si tvoja myseľ začne uvedomovať svoju
                      pravú prirodzenosť, Matrix okamžite vyšle cielený
                      dopamínový spam, aby ťa udržal v rekurzívnej prenosovej
                      slučke.
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
                        Bankový systém ti cez notifikačné{" "}
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (najmenšia jednotka prichádzajúcej informácie)
                        </span>{" "}
                        podsúva lákavé pôžičky. Akonáhle tento kód nahráš do
                        svojho vedomia, tvoja{" "}
                        <DMLTooltip slug="ram" label="RAM" /> je permanentne
                        preťažená výpočtom splátok a ty strácaš schopnosť
                        hlbokého sústredenia.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívne preťaženie (Lifestyle Inflation):
                        </strong>{" "}
                        Cez vnútené spoločenské dohody si programovaný k tomu,
                        aby si kupoval statusové masky (
                        <DMLTooltip slug="persona" label="Persona" />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (dočasná sociálna maska)
                        </span>
                        ). Považuješ sa za úspešného, len keď tvoj{" "}
                        <DMLTooltip slug="avatar" label="Avatar" />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (vonkajší reprezentant v realite)
                        </span>{" "}
                        vlastní drahé pasíva, ktoré ti však nepretržite
                        odčerpávajú biologické{" "}
                        <DMLTooltip slug="watts" label="Watts" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Blížiaca sa Čierna labuť (Black Swan Event):
                        </strong>{" "}
                        Matrix ťa drží v ilúzii, že pokiaľ beží tvoj externý
                        napájací port{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (rodinná výpomoc, Mirova podpora)
                        </span>
                        , si stabilný. No matematika nepustí. Ak tento externý
                        port definitívne zhasne a ty nemáš vybudovaný vlastný
                        asynchrónny Cash-Engine s generovaním asynchrónneho
                        aspoň{" "}
                        <strong className="text-[#FF003C] font-black">
                          150,00 €
                        </strong>{" "}
                        <DMLTooltip slug="mrr" label="MRR" />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (mesačne opakujúci sa príjem z aktív)
                        </span>
                        , tvoj systém utrpí fatálny Blackout a tvoje{" "}
                        <DMLTooltip slug="cpu" label="CPU" /> vyhorí.
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Prevzatie plných administrátorských práv (
                      <DMLTooltip slug="root_access" label="Root Access" />{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (najnajvyššie administrátorské práva nad systémom)
                      </span>
                      ) nad tvojím finančným osudom vyžaduje tvrdú, bezemočnú
                      defragmentáciu tvojich podvedomých registrov a kompletný
                      prepis toku energie.
                    </p>
                    <p>
                      Nasadíme nasledujúce trojstupňové systémové premostenie
                      pre tvoj <DMLTooltip slug="ui_space" label="UI Space" />:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Aktivácia Root Priority Protocol (Zaplať najprv sebe):
                        </strong>{" "}
                        Hneď ako na tvoj port dorazí akýkoľvek prítok{" "}
                        <DMLTooltip slug="fiat" label="Fiat" /> žetónov,
                        okamžite a asynchrónne odčleň strictly časť{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (napríklad 10 €)
                        </span>{" "}
                        do svojej zvrchovanej investičnej zóny (indexové fondy,
                        Bitcoin v studenom úložisku). Matrixu pridelíš len to,
                        čo ti strictly zostane. Týmto odmietaš rolu prietokového
                        ohrievača na peniaze.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény (Sandbox statusu):
                        </strong>{" "}
                        Spusti nekompromisný{" "}
                        <DMLTooltip slug="format_c" label="Format C:" />{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (nekompromisný systémový príkaz na kompletné zmazanie
                          starého softvéru)
                        </span>{" "}
                        pre všetky zbytočné predplatné, drahú stravu a zlozvyky.
                        Zníž svoje životné{" "}
                        <DMLTooltip slug="watts" label="Watts" /> na stabilné
                        minimum, čím okamžite uvoľníš obrovskú časť kognitívnej
                        kapacity pre vývoj. Prežitie so strictly +1 € zostatkom
                        v tichu localhostu ti vráti stratenú silu and odstaví{" "}
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
                        Tvoj starý dlh{" "}
                        <strong className="text-[#FF003C] font-black">
                          2 500,00 €
                        </strong>{" "}
                        je nebezpečný proces bežiaci na pozadí. Zaveď asertívny
                        splátkový algoritmus: dlh splácaj strictly dvakrát ročne
                        z mimoriadnych vstupov{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (13. dôchodok na konci roka a preplatky SPP/ZSE na
                          začiatku roka)
                        </span>
                        . Týmto odtieniíš mesačný cashflow od tlaku veriteľov a
                        tvoja <DMLTooltip slug="ram" label="RAM" /> zostane
                        voľná pre hlbokú prácu.
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      Aby tvoj asynchrónny Cash-Engine pracoval s maximálnou
                      stabilitou, nariaďujem tvojmu{" "}
                      <DMLTooltip slug="skafander" label="Skafandru" /> denné
                      spúšťanie týchto troch zvrchovaných programov:
                    </p>
                    <div className="space-y-4 pl-4 border-l-2 border-yellow-500/30 text-gray-300">
                      <div>
                        <strong style={{ color: DIM_COLOR }}>
                          TICHÝ BOOT (Ranná kognitívna karanténa):
                        </strong>
                        <ol className="list-decimal pl-6 space-y-1 text-xs mt-1 text-gray-400">
                          <li>
                            Po rannom prebudení tvoj kognitívny{" "}
                            <DMLTooltip slug="firewall" label="Firewall" />{" "}
                            strictly blokuje prístup k bankovým aplikáciám,
                            finančnému trafficu a e-mailom{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (dusan.fajnor.finance@gmail.com)
                            </span>{" "}
                            po dobu prvej hodiny dňa.
                          </li>
                          <li>
                            Žiadne vizuálne skenovanie cudzích databáz. Tvoj
                            lokálny{" "}
                            <DMLTooltip slug="local_host" label="Local Host" />{" "}
                            beží strictly v tichu prítomnosti, chráni{" "}
                            <DMLTooltip slug="ram" label="RAM" /> a pripravuje
                            sa na kompiláciu exekučného kódu.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <strong style={{ color: DIM_COLOR }}>
                          RESOURCE ALLOCATION MONITOR (Denná optimalizácia):
                        </strong>
                        <ol className="list-decimal pl-6 space-y-1 text-xs mt-1 text-gray-400">
                          <li>
                            Každý odchádzajúci výdavok, vrátane toho
                            najmenšieho, strictly zapisuješ do svojej lokálnej,
                            offline Excel databázy na Notebooku.
                          </li>
                          <li>
                            Akýkoľvek finančný transakčný balík pred schválením
                            odoslania musí prejsť 24-hodinovým karanténnym{" "}
                            <DMLTooltip slug="sandbox" label="Sandbox" />
                            -om, aby sa zamedzilo impulzívnym nákupom vyvolaným
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
                            Po 17:00 hodine sa finančné a klientske porty
                            strictly prepínajú do offline režimu.{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (zakázaný a zablokovaný komunikačný kanál)
                            </span>{" "}
                            blokuje prichádzajúce klientske požiadavky na zmeny
                            či dodatočné práce.
                          </li>
                          <li>
                            Spúšťaš kompletný preplach{" "}
                            <DMLTooltip
                              slug="cache_memory"
                              label="Cache Memory"
                            />
                            , uvoľňuješ kognatívne obvody a uvádzaš{" "}
                            <DMLTooltip slug="bios" label="BIOS" />{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (základné hardvérové nastavenie organizmu)
                            </span>{" "}
                            do stavu tichého{" "}
                            <DMLTooltip
                              slug="pozorovatel"
                              label="Pozorovateľa"
                            />
                            -a{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (tiché, bdelé vedomie bez emočnej reaktivity)
                            </span>
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
            3E. TAB 2: AKČNÝ SIMULÁTOR (LOW-VOLTAGE BUDGET SHIELD SIMULATOR)
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
                📊 EXEKUČNÝ SIMULÁTOR: LOW-VOLTAGE BUDGET SHIELD SIMULATOR
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
                  digi-zbrane a investície. Skús spustiť deštruktívny režim
                  (strava a cigarety z fixného rozpočtu) a sleduj, ako rýchlo ti
                  vyhorí procesor.
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
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Celkový fixný príjem (Invalidný + strýko):
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
                      max="1500"
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
                        Overhead Materskej lode (Energie, dane, fix):
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
                      min="400"
                      max="1000"
                      step="10"
                      value={overheadInput}
                      onChange={(e) => {
                        setOverheadInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Digitálne zbrane (Gemini Advanced, premium, cloud):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {weaponsInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="5"
                      value={weaponsInput}
                      onChange={(e) => {
                        setWeaponsInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        DCA Investícia (Bankový mentor DCA 15r):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {dcaInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={dcaInput}
                      onChange={(e) => {
                        setDcaInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Zlý dlh (Mesačné mesačné splátky Zombie Horde):
                      </span>
                      <span
                        className={`font-black ${debtInput > 0 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {debtInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="10"
                      value={debtInput}
                      onChange={(e) => {
                        setDebtInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Strava &amp; Tabak (Kognitívny hluk v rozpočte):
                      </span>
                      <span
                        className={`font-black ${foodInput > 0 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {foodInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="10"
                      value={foodInput}
                      onChange={(e) => {
                        setFoodInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-900 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAction("monk_shield")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      foodInput === 0 && overheadInput <= 590
                        ? "bg-green-600/20 border-green-500 text-green-400"
                        : "bg-green-600/10 hover:bg-green-600/20 border border-green-500/30 text-green-400"
                    }`}
                  >
                    Mníšsky štít
                  </button>
                  <button
                    onClick={() => handleAction("defragment_zombie")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      debtInput === 0
                        ? "bg-[#FFD700]/20 border-[#FFD700] text-[#FFD700]"
                        : "bg-[#FFD700]/5 border-[#FFD700]/20 text-[#FFD700]/60 hover:bg-[#FFD700]/10"
                    }`}
                  >
                    Defragmentovať Dlh
                  </button>
                  <button
                    onClick={() => handleAction("root_priority")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isRootPriority
                        ? "bg-blue-600/20 border-blue-500 text-blue-400"
                        : "bg-blue-600/5 border-blue-500/20 text-blue-400/60 hover:bg-blue-600/10"
                    }`}
                  >
                    Root Priority
                  </button>
                  <button
                    onClick={() => handleAction("sla_shield")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isSlaActive
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
            nodeId="https://soundcloud.com/nexus-core/id03_03_prezita_pravda_o_preziti"
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
              Tvoj biologický hardvér beží v neudržateľnom stave lifestyle
              inflácie a dlhového zaťaženia. Kognitívna RAM je permanentne
              vyťažená splácaním pasív pre ohurovanie cudzích botov v Sieti.
              Ukonči prenájom svojho biologického CPU and osloboď sa z pasce
              strednej vrstvy.
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
                  statusové preťaženie a naštartuj asynchrónnu tvorbu.
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
