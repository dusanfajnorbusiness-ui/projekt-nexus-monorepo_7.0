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
// 👑 HLAVNÝ KOMPONENT UZLA ID04_NODE_01 (BUSINESS UI SPACE)
// =====================================================================
export default function Node_ID04_01() {
  const NODE_ID = "ID04-01";
  const TIER_COLOR = "#39FF14"; // PRO Tier
  const DIM_COLOR = "#FFAA00"; // Business Orange / Gold

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

  // Simulator States - BUSINESS UI SPACE SIMULATOR
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursWorked, setHoursWorked] = useState(40);
  const [bSystemRevenue, setBSystemRevenue] = useState(0);
  const [isKarantenaActive, setIsKarantenaActive] = useState(false);
  const [isOutputFirstActive, setIsOutputFirstActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný Business UI Space monitor. Sledujem klientske I/O zaťaženie.",
    "[STATUS] Bežíš v synchrónnom S-kvadrante s plnou klientskou závislosťou.",
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
  const synchrónnyPríjem = hourlyRate * hoursWorked * 4;
  const celkovýPríjem = synchrónnyPríjem + bSystemRevenue;

  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (hoursWorked > 40 ? 50 : hoursWorked * 1.1) +
          (isKarantenaActive ? -20 : 25) +
          (hoursWorked > 60 ? 30 : 0),
      ),
    ),
  );

  const liveFreeRam = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        100 -
          hoursWorked * 1.3 +
          (isOutputFirstActive ? 25 : 0) +
          (isKarantenaActive ? 15 : -15),
      ),
    ),
  );

  const liveWatts = Math.max(
    5,
    Math.min(
      100,
      Math.round(
        100 -
          (hoursWorked > 50 ? 35 : 0) -
          liveLimbicNoise * 0.35 +
          (isOutputFirstActive ? 20 : -15),
      ),
    ),
  );

  const liveBSystemIndex = Math.min(
    100,
    Math.max(
      0,
      Math.round((bSystemRevenue / Math.max(1, celkovýPríjem)) * 100),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setHourlyRate(0);
      setHoursWorked(0);
      setBSystemRevenue(150);
      setIsKarantenaActive(true);
      setIsOutputFirstActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný! Klientska závislosť zmazaná z pamäte.",
        "[STATUS] Skafander prepnutý strictly do asynchrónneho B-kvadrantu s 150,00 € MRR.",
        `[STATUS] Voľná RAM: 100% // Limbic Noise: 5% // Watts: 100% // Autonómia: 100%`,
        ...prev,
      ]);
    } else if (actionType === "sandbox") {
      setIsKarantenaActive(!isKarantenaActive);
      if (!isKarantenaActive) {
        setLogs((prev) => [
          "[SUCCESS] Karanténa (Sandbox) na operatívu aktívna. Klientska komunikácia strictly blokovaná.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Karanténa vypnutá. Klientsky DDoS útok opäť preťažuje kognitívne obvody.",
          ...prev,
        ]);
      }
    } else if (actionType === "output_first") {
      setIsOutputFirstActive(!isOutputFirstActive);
      if (!isOutputFirstActive) {
        setLogs((prev) => [
          "[SUCCESS] Ranný Output-First protokol spustený. Prvá hodina strictly pre vlastný B-systém.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Output-First zakázaný. Ráno opäť odovzdávaš cenné CPU cudzím serverom.",
          ...prev,
        ]);
      }
    } else if (actionType === "reset") {
      setHourlyRate(35);
      setHoursWorked(40);
      setBSystemRevenue(0);
      setIsKarantenaActive(false);
      setIsOutputFirstActive(false);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu (synchrónny freelancer).",
        "[STATUS] I/O toky obnovené na predvolené zaťaženie.",
      ]);
    }
  };

  // =====================================================================
  // 📚 JAZYKOVÁ DATABÁZA DML v6.1 (31 Slov)
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
        "Krátkodobé úložisko podvedomia pre rýchly prístup, ktoré sa bez dôkladného shutdownu zanáša dopamínovým odpadom.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "it_term",
      translation: "izolačný filter a ochrana identity",
      tooltip:
        "Sieťový uzol smerujúci a maskujúci toky dát, ktorý zachytáva vonkajší kognitívny tlak pred tvojím local hostom.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "it_term",
      translation: "izolované karanténne prostredie",
      tooltip:
        "Miestne bezpečne oddelené prostredie, v ktorom spúšťaš rizikové klientske vzorce bez ohrozenia jadra biosu.",
    },
    os_genesis: {
      term: "OS Genesis",
      category: 13,
      categoryType: "home_ui_term",
      translation: "zvrchovaný operačný systém pre vedomie",
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
        "Pravidelný, asynchrónne sa opakujúci tok finančných prostriedkov generovaný z tvojich vlastných digitálnych aktív.",
    },
  };

  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID04_01
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
        title="ID04 BUSINESS UI SPACE // Revenue Architect (Autonómny B-Systém vs. Vlastnenie Práce)"
        description="01. [PRO] Business UI Space (Autonómny B-Systém vs. Vlastnenie Práce)."
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
                Node_ID04_01 // Business UI Space
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              BUSINESS UI SPACE
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              01. [PRO] Business UI Space (Autonómny B-Systém vs. Vlastnenie
              Práce). Skutočný podnikateľ v Projekte Nexus nevytvára prácu –
              programuje autonómne, asynchrónne operujúce B-Systémy, ktoré bežia
              na pozadí 24/7.
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
              🚨 ERROR LOG // Ownership_Deficit // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Väčšina nevedomých vývojárov a živnostníkov v Sieti podlieha
              fatálnemu kognitívnemu exploit-u: veria, že vlastnia 'biznis',
              pretože im na port prichádzajú faktúry. V skutočnosti však
              nevlastnia žiadny systém – iba si vytvorili o niečo lepšie platené
              a extrémne stresujúce zamestnanie. Ak tvoj finančný prítok
              okamžite zhasne hneď, ako vypneš svoje biologické{" "}
              <DMLTooltip slug="cpu" label="CPU" /> a zatvoríš Notebook, tvoj
              systém vykazuje{" "}
              <strong className="text-[#FF003C] font-black">
                Error 406: SYSTEM_OWNERSHIP_REQUIRED
              </strong>
              . Si len otrokom vlastnej prevádzky, vyťažuješ svoju drahocennú{" "}
              <DMLTooltip slug="ram" label="RAM" /> na 99 % administratívnym
              balastom a tvoj organizmus beží v permanentnom klientskom
              pretížení. Skutočný podnikateľ v Projekte Nexus nevytvára prácu –
              programuje autonómne, asynchrónne operujúce{" "}
              <strong className="text-[#FFAA00] font-black">B-Systémy</strong>,
              ktoré bežia na pozadí 24/7 bez nutnosti nepretržitého
              metabolického dohľadu. Uval okamžitú karanténu na S-kvadrantový
              autopilot, prepíš podvedomý{" "}
              <DMLTooltip slug="legacy_code" label="Legacy Code" /> klientskej
              závislosti a prevezmi plný{" "}
              <DMLTooltip slug="root_access" label="Root Access" /> nad
              architektúrou svojich príjmov. Naštartuj Business UI Space.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID04_01_business_ui_space.md</span>
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
              id04_node_01_business_ui_space_video
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
                      Keď som v roku 2018 v Sektore Trnava na Spartakovskej
                      ulici prežil totálny hardvérový kolaps nervovej sústavy a
                      biologického procesora, dostal som okamžité a tvrdé
                      odpojenie od všetkých klientskych systémov. Dovtedy som
                      prevádzkoval klasickú 'kreatívnu agentúru' – bol som
                      typickým príkladom živnostníka v S-kvadrante. Hoci som bol
                      hrdý na to, že nemám šéfa, v skutočnosti som mal tridsať
                      šéfov (klientov), ktorí ma vlastnili cez permanentné,
                      neautorizované prichádzajúce{" "}
                      <DMLTooltip
                        slug="network_packet"
                        label="Network Packet"
                      />{" "}
                      požiadavky. Moje <DMLTooltip slug="cpu" label="CPU" />{" "}
                      išlo vyhorieť z nočného programovania a neustáleho
                      emočného šumu{" "}
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />.
                    </p>
                    <p>
                      Po prebudení z biologického dňa nula som musel kompletne
                      prebudovať základy svojej exekučnej stanice. Zriadil som
                      provizórny finančný{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />{" "}
                      strictly vo výške{" "}
                      <strong className="text-white font-black">
                        730,00 €
                      </strong>{" "}
                      (530 € štátny invalidný príspevok + 200 € energetická
                      podpora od strýka Mirova). Úplne som odstavil všetky
                      klientske práce a stiahol sa do asynchrónneho 'Ghost-Mode'
                      režimu. Na lacnom tablete Samsung Tab A9+ s obmedzeným
                      výpočtovým pásmom som začal od nuly projektovať Projekt
                      Nexus. Nie ako ďalšiu prácu, ale ako autonómnu, modulárnu
                      franšízovú zbernicu. Pochopil som, že jediná cesta k
                      trvalej stabilite je uvoľniť{" "}
                      <DMLTooltip slug="ram" label="RAM" /> od klientskeho
                      vyjednávania a všetku zostávajúcu kognitívnu silu strictly
                      investovať do kódovania vlastných asynchrónnych aktív.
                      Dnes moje systémy operujú samostatne, bez ohľadu na to, či
                      moje bio-procesory spia alebo regenerujú.
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
                      Z hľadiska systémového inžinierstva a load-balancingu je
                      rozdiel medzi živnostníkom (S-kvadrant) a majiteľom
                      systému (B-kvadrant) ekvivalentom rozdielu medzi
                      synchrónnym dopytovaním (Polling) a asynchrónnou
                      event-driven architektúrou (Event-Driven Daemon).
                      Živnostník funguje strictly ako synchrónny worker – každá
                      spracovaná požiadavka (fakturovaná hodina) vyžaduje priame
                      vyťaženie taktov jeho lokálneho hardvéru (
                      <DMLTooltip slug="cpu" label="CPU" />
                      ). Ak sa worker zastaví, tok dátových paketov (
                      <DMLTooltip slug="cashflow" label="Cashflow" />) okamžite
                      klesá na absolútnu nulu, čo vyvoláva systémový pád.
                    </p>
                    <p>
                      Majiteľ systému naopak navrhuje a kompiluje autonómny
                      softvérový ekosystém (Business System). Tento ekosystém
                      operuje na pozadí ako nezávislý démon (Daemon Process).
                      Naviaže na seba predajné webhooky, licenčné serverové
                      prepojenia a automatické asynchrónne distribútory{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />{" "}
                      aktualizácií. Biologická jednotka (
                      <DMLTooltip slug="skafander" label="Skafander" />) je v
                      tejto schéme iba architektom, ktorý monitoruje logy
                      (System Logs) a vykonáva{" "}
                      <DMLTooltip slug="debugging" label="Debugging" /> procesov
                      na svojom{" "}
                      <DMLTooltip slug="local_host" label="Local Host" />
                      -e, zatiaľ čo samotný systém generuje stabilné{" "}
                      <strong className="text-white font-black">
                        150,00 € MRR
                      </strong>{" "}
                      (<DMLTooltip slug="mrr" label="MRR" />) s minimálnym
                      zaťažením neurologických{" "}
                      <DMLTooltip slug="watts" label="Watts" />.
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
                      Ak podrobíme teoretické spisy a{" "}
                      <DMLTooltip slug="mrtve_knihy" label="mŕtve knihy" />{" "}
                      sémantickej defragmentácii, s úžasom odhalíme totožné
                      varovné logy v klasických biznis vzorcoch:
                    </p>
                    <p>
                      1.{" "}
                      <strong className="text-white font-black">
                        Robert T. Kiyosaki (Cashflow Kvadrant):
                      </strong>{" "}
                      Kiyosaki presne dekonštruuje kvadrant 'S' (Self-Employed).
                      Poukazuje na to, že živnostník 'vlastní prácu', nie
                      systém, a preto je najvyťaženejšou bio-batériou v celej
                      Sieti. Oslobodenie vyžaduje radikálny presun{" "}
                      <DMLTooltip slug="ram" label="RAM" /> z ľavej strany
                      kvadrantu do pravého spektra (B - Business), kde hlavným
                      exekučným motorom nie je tvoje fyzické telo, ale autonómny
                      systém, ktorý vlastníš a ovládaš.
                    </p>
                    <p>
                      2.{" "}
                      <strong className="text-white font-black">
                        Michael E. Gerber (Podnikateľský mýtus - E-Myth):
                      </strong>{" "}
                      Gerber odhaľuje fatálnu chybu väčšiny technických
                      špecialistov, ktorí si založia živnosť. Fungujú ako tri
                      osobnosti v jednom skafandri: Technik (ktorý chce len
                      kódiť), Manažér (ktorý rieši otravnú administratívu) a
                      Podnikateľ (ktorý má systémovú víziu). Bez vybudovania
                      autonómnych procesov Technik nakoniec úplne vyhorí a
                      preťaží svoju{" "}
                      <DMLTooltip slug="cache_memory" label="Cache Memory" />.
                    </p>
                    <p>
                      3.{" "}
                      <strong className="text-white font-black">
                        Don Miguel Ruiz (Štyri dohody):
                      </strong>{" "}
                      Proces domestikácie nás od detstva programuje veriť dohode
                      o 'ťažkej a vyčerpávajúcej práci' ako jedinej legitímnej
                      ceste k prežitiu. Skafandre sú vytrénované dobrovoľne
                      odovzdávať svoje vitálne{" "}
                      <DMLTooltip slug="watts" label="Watts" /> v klientskom
                      režime výmenou za fiktívne uznanie, pričom ich vlastné
                      porty zostávajú zablokované pre zvrchovanú tvorbu.
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
                      Ilúzia úspešného freelancingu je jedným z
                      najsofistikovanejších manipulatívnych filtrov, ktoré{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu inštaluje do podvedomia talentovaných ľudí. Hovorí
                      ti, že si slobodný, pretože nemáš nadriadeného, zatiaľ čo
                      tvoj <DMLTooltip slug="ui_space" label="UI Space" /> je
                      zaplavený klientskym dopamínovým šumom.
                    </p>
                    <p>
                      Ak chceme úspešne odladiť tvoju exekučnú architektúru,
                      musíme nekompromisne rozbiť túto ilúziu a predefinovať
                      tvojho <DMLTooltip slug="avatar" label="Avatar" />
                      -a Podnikateľa:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Vlastnenie Práce (Synchrónny režim):
                        </strong>{" "}
                        Každé jedno euro prítoku je podmienené aktívnym
                        kódovaním na{" "}
                        <DMLTooltip slug="local_host" label="Local Host" />
                        -e. Tvoj Skafander vymieňa konečný čas za znehodnocujúce
                        sa <DMLTooltip slug="fiat" label="Fiat" /> žetóny. Keď
                        tvoj procesor ochorie alebo zažije systémový reštart
                        (kolaps 2018), tvoj Cashflow okamžite vysychá.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Vlastnenie Systému (Asynchrónny režim):
                        </strong>{" "}
                        Programuješ digitálne mechanizmy, ktoré bežia autonómne.
                        Tvoríš predajné lieviky, asymetrické ponuky, vzdelávacie
                        automaty a predávaš Access Keys (licencie) pre{" "}
                        <DMLTooltip slug="os_genesis" label="OS Genesis" />.
                        Tvoja stanica generuje stabilný pasívny prítok na
                        pozadí, zatiaľ čo ty spíš, medituješ v prítomnosti{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľ" />
                        -a, alebo prečisťuješ svoju cache.
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
                      Spoločenský <DMLTooltip slug="botnet" label="botnet" />{" "}
                      Matrixu ťaží energiu zo živnostníkov prostredníctvom
                      rafinovaného mechanizmu zvaného 'The Illusion of Activity'
                      (Ilúzia dôležitej aktivity). Tento program využíva tvoj
                      prirodzený strach z nedostatku a zameriava tvoje
                      neurologické <DMLTooltip slug="cpu" label="CPU" /> na
                      mechanické, neproduktívne činnosti.
                    </p>
                    <p>
                      Tento prepracovaný parazitický zber prebieha cez tri fázy:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mt-4 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Limbický Overclocking (Busywork):
                        </strong>{" "}
                        Matrix ťa zaplaví nekonečnými, zbytočnými úlohami
                        (odpisovanie na maily, úpravy loga, nekonečné
                        strategické mítingy). Tvoj organizmus páli vzácne{" "}
                        <DMLTooltip slug="watts" label="Watts" /> energie a
                        tvoja <DMLTooltip slug="ram" label="RAM" /> zažíva
                        chronické preťaženie, hoci tvoj reálny pokrok je nulový.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Klientsky DDoS útok:
                        </strong>{" "}
                        Ak nemáš zavedený tvrdý komunikačný{" "}
                        <DMLTooltip slug="firewall" label="Firewall" />, klienti
                        neustále infiltrujú tvoj{" "}
                        <DMLTooltip slug="ui_space" label="UI Space" /> cez
                        neautorizované komunikačné porty. Každá nečakaná správa
                        vyvoláva{" "}
                        <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
                        šum a odpája ťa od hlbokého asynchrónneho flow-state.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Tiché existenčné krvácanie (
                          <DMLTooltip
                            slug="memory_leaks"
                            label="Memory Leaks"
                          />
                          ):
                        </strong>{" "}
                        Celý tvoj životný štýl je naviazaný na neustálu
                        prítomnosť pri klávesnici. Nemáš čas zastaviť sa, urobiť
                        kompletný{" "}
                        <DMLTooltip slug="format_c" label="Format C:" /> and
                        naprogramovať asynchrónne systémy, pretože si
                        nepretržite vyťažovaný hasením operatívnych požiarov pre
                        cudzie servery.
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
                      Únik z pasce klientskeho zotročenia vyžaduje radikálny
                      prechod od neustálej aktivity k prísnej systémovej
                      architektúre (
                      <DMLTooltip slug="debugging" label="Debugging" />
                      ). Musíš prevziať plné administrátorské práva (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      tokom svojho času a peňazí.
                    </p>
                    <p>
                      Aplikácia tohto transformačného algoritmu v tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> pozostáva
                      z troch krokov:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény (Sandbox pre operatívu):
                        </strong>{" "}
                        Kompletne izoluj klientsku komunikáciu. Všetky
                        neštruktúrované správy a požiadavky odsuň do
                        samostatného{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" />
                        -u, ktorý otváraš strictly len v presne vyhradenom čase
                        (napr. o 14:00 na 30 minút). Tvoj ranný procesor tak
                        zostáva dokonale čistý.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Prechod na Asymetrické ponuky:
                        </strong>{" "}
                        Prestaň predávať svoje hodiny. Začni predávať strictly
                        škálovateľné, asynchrónne produkty – licencie, hotové
                        frameworky, predpripravené PDF knižnice a automatizované
                        diagnostiky. Týmto odpájaš prítok financií od fyzického
                        času tvojho skafandra.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Aktivácia asynchrónnej MRR zbernice:
                        </strong>{" "}
                        Sústreď všetku kreatívnu energiu na vybudovanie aspoň{" "}
                        <strong className="text-white font-black">
                          150,00 € MRR
                        </strong>{" "}
                        (<DMLTooltip slug="mrr" label="MRR" />) (napr. predajom
                        prístupových kľúčov k Projektu Nexus). Akonáhle tvoje
                        fixné biologické náklady (nízkonapäťové prežitie
                        strictly za 730 €) začnú byť stabilne kryté
                        asynchrónnymi tokmi, existenčný strach navždy zhasne a
                        tvoja <DMLTooltip slug="ram" label="RAM" /> získa
                        neobmedzenú kapacitu pre expanziu.
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
                      Aby tvoja komerčná zvrchovaná stanica pracovala s
                      maximálnou stabilitou, nariaďujem tvojmu{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />
                      -u denné spúšťanie týchto troch zvrchovaných programov:
                    </p>
                    <div className="space-y-4 pl-4 border-l-2 border-orange-500/30 text-gray-300">
                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            1. RANNÝ OUTPUT-FIRST PROTOKOL (Architektúra nad
                            Operatívou):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Prvú, kognitívne najcennejšiu hodinu dňa strictly
                            venuješ výhradne programovaniu, navrhovaniu alebo
                            písaniu tvojich vlastných systémov (B-Systémov).
                          </li>
                          <li>
                            Tvoj <DMLTooltip slug="firewall" label="Firewall" />{" "}
                            počas tohto cyklu nekompromisne zahadzuje všetky
                            prichádzajúce klientske emaily, správy a
                            notifikácie. Najprv zapíš dáta do svojej databázy,
                            až potom prenámaj svoje procesory iným.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            2. RESOURCE ALLOCATION MONITOR (System Tracker):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Každý krok, úlohu a exekúciu vo svojom biznise
                            strictly meriaš a zapisuješ do offline Excelu na
                            Notebooku.
                          </li>
                          <li>
                            Žiadne improvizované akcie. Každý nový biznis nápad
                            musí najprv prejsť 48-hodinovým karanténnym{" "}
                            <DMLTooltip slug="sandbox" label="Sandbox" />
                            -om, aby sa overilo, či generuje asynchrónny zisk,
                            alebo je to len ďalšia pasca na tvoj osobný čas.
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
                            Po 17:00 hodine sa všetky klientske a komunikačné
                            porty strictly prepínajú do offline režimu.{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            blokuje akýkoľvek neautorizovaný traffic.
                          </li>
                          <li>
                            Spúšťaš kompletný preplach{" "}
                            <DMLTooltip
                              slug="cache_memory"
                              label="Cache Memory"
                            />
                            , odstavuješ eGo-komentátora a ukladáš hardvér do
                            hlbokej regenerácie v stave bdelého{" "}
                            <DMLTooltip
                              slug="pozorovatel"
                              label="Pozorovateľ"
                            />
                            -a.
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
            5C. TAB 2: AKČNÝ SIMULÁTOR (BUSINESS UI SPACE SIMULATOR)
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
                📊 EXEKUČNÝ SIMULÁTOR: B-SYSTEM vs. S-QUADRANT ACCELERATOR
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér simuluje rozdelenie tvojich kognitívnych Watts a RAM
                  medzi predaj času (synchrónna činnosť v S-kvadrante) a
                  budovanie autonómnych B-systémov (asynchrónny príjem).
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong> Pomocou
                  posuvníkov nastav svoju hodinovú sadzbu, odpracované hodiny
                  týždenne a pasívny príjem z B-systému (MRR). Aktivuj
                  karanténny Sandbox pre blokovanie operatívnych DDoS útokov
                  alebo spusti Output-First rannú ríšu.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Sleduj
                  real-time reakcie tvojho Skafandra: celkové zaťaženie RAM,
                  vyčerpanie procesora v Watts, parazitický kognitívny šum a
                  tvoj celkový index asynchrónnej autonómie.
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
                        Hodinová sadzba (S-Sadzba):
                      </span>
                      <span
                        className="text-[#FFAA00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {hourlyRate} €/hod
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="150"
                      step="5"
                      value={hourlyRate}
                      onChange={(e) => {
                        setHourlyRate(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFAA00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        Odpracované klientske hodiny týždenne:
                      </span>
                      <span
                        className="text-[#FFAA00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {hoursWorked} hod
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="80"
                      step="1"
                      value={hoursWorked}
                      onChange={(e) => {
                        setHoursWorked(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFAA00] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400 font-bold">
                        Asynchrónny príjem z B-Systému (MRR):
                      </span>
                      <span
                        className="text-[#FFAA00] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {bSystemRevenue} €/mes
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2500"
                      step="25"
                      value={bSystemRevenue}
                      onChange={(e) => {
                        setBSystemRevenue(Number(e.target.value));
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
                      isKarantenaActive
                        ? "bg-[#FFAA00]/20 border-[#FFAA00] text-[#FFAA00]"
                        : "bg-[#FFAA00]/5 border-[#FFAA00]/20 text-[#FFAA00]/60 hover:bg-[#FFAA00]/10"
                    }`}
                    style={{
                      borderColor: isKarantenaActive ? DIM_COLOR : "",
                      color: isKarantenaActive ? DIM_COLOR : "",
                    }}
                  >
                    Karanténa Sandbox
                  </button>
                  <button
                    onClick={() => handleAction("output_first")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isOutputFirstActive
                        ? "bg-[#FFAA00]/20 border-[#FFAA00] text-[#FFAA00]"
                        : "bg-[#FFAA00]/5 border-[#FFAA00]/20 text-[#FFAA00]/60 hover:bg-[#FFAA00]/10"
                    }`}
                    style={{
                      borderColor: isOutputFirstActive ? DIM_COLOR : "",
                      color: isOutputFirstActive ? DIM_COLOR : "",
                    }}
                  >
                    Ranný Output-First
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
                      className="w-3.5 h-3.5 text-[#FFAA00]"
                      style={{ color: DIM_COLOR }}
                    />
                    BUSINESS HEALTH MONITOR // AKTÍVNE SENSORI
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Limbic Noise (Stres)
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 60 ? "text-red-400" : "text-[#FFAA00]"}`}
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
                        className={`text-2xl font-black ${liveFreeRam < 40 ? "text-yellow-400" : "text-[#FFAA00]"}`}
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
                        className={`text-2xl font-black ${liveWatts < 30 ? "text-red-400" : "text-[#FFAA00]"}`}
                        style={{
                          color: liveWatts < 30 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {liveWatts}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Autonómia (Podiel B-Systému)
                      </span>
                      <span
                        className={`text-2xl font-black ${liveBSystemIndex < 30 ? "text-red-400" : "text-[#39FF14]"}`}
                        style={{
                          color: liveBSystemIndex < 30 ? "#FF003C" : "#39FF14",
                        }}
                      >
                        {liveBSystemIndex}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATRIX SYSTEM CONSOLE LOGS */}
                <div className="flex-1 bg-black/90 rounded-lg p-4 border border-gray-900 flex flex-col justify-between h-48 overflow-hidden font-mono text-[10px] leading-relaxed">
                  <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-1.5 mb-2">
                    <span>DIAG_LOG_BUSINESS_CONSOLE // REALTIME</span>
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
              [ BUSINESS UI SPACE EXEKUČNÝ UPLINK TERMINAL ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoja kognitívna <DMLTooltip slug="ram" label="RAM" /> je
              preťažená synchrónnym predajom hodín za fiat žetóny. Nevlastníš
              žiadny digitálny systém – iba stresujúcu, vysoko-energetickú
              prácu. Je čas prevziať{" "}
              <DMLTooltip slug="root_access" label="Root Access" />, odladiť
              legacy klientske programy a postaviť svoj prvý autonómny{" "}
              <strong style={{ color: DIM_COLOR }}>B-Systém</strong> pre
              asynchrónnu expanziu.
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
