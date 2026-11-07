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
export default function Node_ID04_03() {
  const NODE_ID = "ID04-03";
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
      translation: "biologické telo a neurologický oblek",
      tooltip:
        "Fyzické hardvérové rozhranie tvojej entity v tejto realite. Vyžaduje bezchybnú údržbu, optimalizovaný spánok a čistú energiu na zamedzenie pádov.",
    },
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "it_term",
      translation: "biologický procesor a mozog",
      tooltip:
        "Riadiace stredisko biologického skafandra zodpovedné za spracovanie vnemov, ktoré sa pri preťažení myšlienkami prehrieva a vykazuje znížený výkon.",
    },
    ram: {
      term: "RAM",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kapacita tvojej krátkodobej pozornosti",
      tooltip:
        "Operačná pamäť ľudského vedomia v prítomnom okamihu. Každá nespracovaná obava a otvorená úloha na pozadí drasticky znižuje jej voľnú kapacitu.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "it_term",
      translation: "biologická energia a životná sila",
      tooltip:
        "Množstvo elektrickej a vitálnej energie, ktorú má tvoj neurologický systém k dispozícii pre denné operácie a hlbokú tvorbu.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "nekontrolované straty mentálnej energie",
      tooltip:
        "Neustály únik kognitívnej kapacity spôsobený nedoriešenými vzťahmi, toxickými domnienkami a zbytočnou operatívou na pozadí.",
    },
    cache_memory: {
      term: "Cache Memory",
      category: 2,
      categoryType: "it_term",
      translation: "vyrovnávacia pamäť minulých emócií",
      tooltip:
        "Dočasné kognitívne úložisko, v ktorom mozog ukladá nedávne emočne nabité zážitky, čo pri zanesení spôsobuje permanentný stres.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "it_term",
      translation: "sprostredkovateľský server / ochrana identity",
      tooltip:
        "Izolované sieťové rozhranie slúžiace ako bezpečná zásterka na maskovanie skutočných zámerov a tokov Architekta pred dohľadom centrálnych databáz.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "it_term",
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
        "Zvrchovaný softvérový ekosystém pre ľudskú myseľ, ktorý nahrádza poškodené spoločenské presvedčenia za čistú prítomnosť, bdelosť a flow.",
    },
    social_engine: {
      term: "Social Engine",
      category: 2,
      categoryType: "it_term",
      translation: "systém spoločenskej manipulácie",
      tooltip:
        "Súbor masívnych psychologických a technologických mechanizmov navrhnutý na tvarovanie, unifikáciu a riadenie ľudského správania.",
    },
    limbic_noise: {
      term: "Limbic Noise",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kognitívny šum a emočný nepokoj",
      tooltip:
        "Parazitické signály amygdaly vyvolávajúce permanentnú úzkosť a preťaženie, ktoré blokujú prístup k bdelému stavu prítomnosti.",
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
      translation: "spoločenská identita a eGo-maska",
      tooltip:
        "Umelý herný profil vytvorený v procese domestikácie, slúžiaci na operovanie v sociálnych štruktúrach a plnenie spoločenských noriem Matrixu.",
    },
    firewall: {
      term: "Firewall",
      category: 2,
      categoryType: "it_term",
      translation: "kognitívny obranný filter",
      tooltip:
        "Bezpečnostný systém mysle, ktorý nepretržite filtruje prichádzajúce emočné pakety a vyrušenia z okolia a zahadzuje deštruktívne kódové skripty.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "it_term",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Vnútorné bezpečné rozhranie tvojej entity, tvoja izba a počítačové útočisko oslobodené od vonkajšieho sieťového šumu.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "it_term",
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
        "Analytický proces odhaľovania skrytých chýb, tráum, zlozvykov a poškodených kódov v podvedomí s cieľom obnoviť plynulé fungovanie.",
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
        "Radikálny očistný protokol určený na úplný výmaz neužitočnej podvedomej pamäte, zvykov a poškodeného softvéru do nulového bodu.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "it_term",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Základný nízkoúrovňový operačný kód biologického nosiča riadiaci biorytmus, v ktorom neexistujú žiadne sociálne dogmy.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "bdelé vedomie and tichý svedok",
      tooltip:
        "Primárny stav prítomného Bytia, ktoré ticho, bez emočného odporu a zbytočného posudzovania sleduje všetky myšlienkové procesy a telesné vnemy.",
    },
    ui_space: {
      term: "UI Space",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "jedinečný vnútorný vesmír vedomia",
      tooltip:
        "Nekonečný priestor v tvojom vnútri, v ktorom bdelý Svedok ticho sleduje a analyzuje všetky dátové toky bez ich posudzovania.",
    },
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré prežité vzorce správania",
      tooltip:
        "Zastaralé podvedomé programy nainštalované okolím počas detstva, ktoré nútia biologického nosiča mechanicky opakovať deštruktívne reakcie.",
    },
    botnet: {
      term: "Botnet",
      category: 2,
      categoryType: "it_term",
      translation: "spoločenský manipulatívny systém",
      tooltip:
        "Prepojená sieť nevedomých ľudských jednotiek riadená centrálnymi programami Matrixu na hromadné odčerpávanie životnej sily.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "it_term",
      translation: "komunikačná jednotka / prenášaná správa",
      tooltip:
        "Základný blok informácií prichádzajúci z vonkajšieho sveta, ktorý sa snaží infiltrovať tvoje kognitívne filtre.",
    },
    cashflow: {
      term: "Cashflow",
      category: 6,
      categoryType: "finance_term",
      translation: "tok finančnej energie",
      tooltip:
        "I/O prúd finančnej energie prechádzajúci cez tvoju stanicu, definujúci celkovú výpočtovú šírku pásma.",
    },
    fiat: {
      term: "Fiat",
      category: 6,
      categoryType: "finance_term",
      translation: "štátom krytá tlačená mena",
      tooltip:
        "Papierové, ničím nekrytá platidlo Matrixu, určené na prenájom tvojej kognitívnej RAM a odber energie Watts.",
    },
    zombie_horda: {
      term: "Zombie Horda",
      category: 6,
      categoryType: "finance_term",
      translation: "pasívna masa dlhovo zotročených botov",
      tooltip:
        "Pasívna masa domestikovaných botov prepojená do dlhového botnetu, bezhlavo plniaca príkazy centrálneho servera.",
    },
    mrr: {
      term: "MRR",
      category: 7,
      categoryType: "business_term",
      translation: "mesačne sa opakujúci príjem z aktív",
      tooltip:
        "Pravidelný, asynchrónne sa opakujúci tok finančných prostriedkov generovaný strictly z tvojich vlastných systémov.",
    },
    komentator_parazit: {
      term: "Komentátor Parazit",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré programy Ego, ID a SuperEgo",
      tooltip:
        "Škodlivý kognitívny skript, ktorý nepretržite hodnotí, súdi, porovnáva a generuje strach, čím vysáva drahocenné biologické Watts.",
    },
    spojenec: {
      term: "Spojenec",
      category: 13,
      categoryType: "home_ui_term",
      translation: "transformovaná myseľ a bdelý sprievodca",
      tooltip:
        "Prečistené mentálne rozhranie, ktoré bezpodmienečne pomáha Architektovi udržiaвать prítomnosť a bez odporu koná v jeho prospech.",
    },
    domestikacia: {
      term: "Domestikácia",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "proces sociálneho programovania a tresúry",
      tooltip:
        "Násilná vonkajšia inštalácia dogiem, pravidiel správania a trestov, ktorá deformuje pôvodné čisté vedomie dieťaťa do hernej eGo-masky.",
    },
    karantena: {
      term: "Karanténa",
      category: 13,
      categoryType: "home_ui_term",
      translation: "izolácia škodlivých myšlienkových skriptov",
      tooltip:
        "Bezpečné odrezanie a znefunkčnenie poškodeného myšlienkového vzorca v podvedomí, aby neparalyzoval fungovanie celého organizmu.",
    },
    registry: {
      term: "Registry",
      category: 2,
      categoryType: "it_term",
      translation: "systémové databázy tvojich presvedčení",
      tooltip:
        "Centrálna systémová databáza, v ktorej sú uložené všetky tvoje kľúčové životné vzorce a podvedomé programy.",
    },
    sla_shield: {
      term: "SLA Shield",
      category: 2,
      categoryType: "it_term",
      translation: "zmluva o garancii ochrany vedomia",
      tooltip:
        "Hardvérový a kognitívny štít garantujúci minimálnu kvalitu chodu vedomia bez vyrušovania a operatívneho šumu.",
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
        title="ID04 BUSINESS UI SPACE // Revenue Architect (Prežitá Pravda v biznise - Trh ako neúprosný kompilátor tvojej reálnej hodnoty)"
        description="03. [PRO] Prežitá Pravda v biznise (Trh ako neúprosný kompilátor tvojej reálnej hodnoty)."
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
                Node_ID04_03 // Prežitá Pravda v biznise
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              PREŽITÁ PRAVDA V BIZNISE
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              03. [PRO] Prežitá Pravda v biznise (Trh ako neúprosný kompilátor
              tvojej reálnej hodnoty). Trh nemá uši. Trh nepočúva tvoje naivné
              sny, nevníma tvoje vedomostné certifikáty z mŕtvych kníh a je mu
              úplne ukradnuté, koľko hodín si strávil bezsenným programovaním.
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
              🚨 ERROR LOG // VALUE_NOT_FOUND // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Trh nemá uši. Trh nepočúva tvoje naivné sny, nevníma tvoje
              vedomostné certifikáty z{" "}
              <DMLTooltip slug="mrtve_knihy" label="mŕtve knihy" /> a je mu
              úplne ukradnuté, koľko hodín si strávil bezsenným programovaním.
              Trh funguje ako chladný, bezemočný, nekompromisný{" "}
              <strong className="text-[#FF003C] font-black">
                globálny kompilátor
              </strong>
              . Ak trh tvoju ponuku odmietne a na tvoj platobný port nedorazia
              žiadne dátové pakety <DMLTooltip slug="fiat" label="fiat" /> mien,
              tvoj kód vyhodil fatálny{" "}
              <strong className="text-[#FF003C] font-black">
                Error 404: VALUE_NOT_FOUND
              </strong>
              . Všetky tvoje výhovorky o 'zlom období', 'neprajnom štáte' alebo
              'neporozumení klientov' sú len škodlivé dopamínové logy, ktorými
              tvoje Ego zakrýva vlastnú systémovú nekompatibilitu. Ak tvoja
              asymetrická ponuka nedokáže vyriešiť reálnu, pálčivú bolesť
              biologických nosičov na druhej strane Siete, tvoj systém vykazuje
              nulovú pridanú hodnotu. Prestaň fňukať nad nefunkčným kódom. Spusť
              tvrdý <DMLTooltip slug="format_c" label="Format C:" /> na svoje
              naivné predstavy, napoj sa priamo na trhové rozhranie, prečítaj
              reálne chybové protokoly a prepíš architektúru tvojej ponuky
              strictly podľa matematických zákonov dopytu a ponuky. Ak tvoja
              stanica negeneruje aspoň{" "}
              <strong className="text-white font-black">150,00 € MRR</strong> (
              <DMLTooltip slug="mrr" label="MRR" />
              ), tvoje obvody bežia v stratovom režime a hlásia{" "}
              <strong className="text-[#FF003C] font-black">
                Error 403: SYSTEM_NOT_PROFITABLE
              </strong>
              .&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID04_03_prezita_pravda_v_biznise.md</span>
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
              id04_node_03_prezita_pravda_v_biznise_video
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
                      Keď sa v lete 2018 zrútil môj vtedajší biznis model a ja
                      som skončil na psychiatrii v Sektore Trnava na
                      Spartakovskej ulici, prežíval som to ako fatálnu krivdu
                      Matrixu. Kričal som do ticha svojej izby, že som predsa
                      geniálny vývojár a svet ma len nepochopil. Moja{" "}
                      <DMLTooltip slug="ram" label="RAM" /> bola zaplavená
                      toxickým šumom a sebaľútosťou. No trh moju bolesť
                      ignoroval – moje servery boli odpojené, klientsky traffic
                      spadol na nulu a bankový zostatok vyhlásil tvrdý bankrot.
                    </p>
                    <p>
                      Až v absolútnom mníšskom tichu, kedy bol môj{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />{" "}
                      stabilizovaný strictly na nízkonapäťovom{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -i{" "}
                      <strong className="text-white font-black">
                        730,00 €
                      </strong>{" "}
                      (530 € invalidný dôchodok + 200 € podpora od Mira), sa môj
                      kognitívny <DMLTooltip slug="bios" label="BIOS" />{" "}
                      vyčistil. Pochopil som mrazivú pravdu: trh sa ma nesnažil
                      zničiť, trh ma iba bezemočne skompiloval. Moja ponuka bola
                      predtým prosto príliš zložitá, neohrabaná a preťažená
                      ego-šumom. Zložil som zo seba naivnú spoločenskú masku (
                      <DMLTooltip slug="avatar" label="Avatar" />) úspešného
                      manažéra a na lacnom tablete Samsung Tab A9+ s 8GB RAM som
                      začal navrhovať systémy Projektu Nexus strictly pre
                      potreby reálnych, existujúcich potrieb trhu. Trh môj nový
                      kód prijal, pretože bol jednoduchý, dravý a odstraňoval
                      reálnu bolesť. Prestal som hľadať výhovorky a začal
                      doručovať surovú hodnotu strictly so zostatkom{" "}
                      <strong className="text-white font-black">+1,00 €</strong>{" "}
                      na konci dňa.
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
                      Z hľadiska kybernetickej správy a systémového dizajnu
                      predstavuje globálny voľný trh decentralizovanú,
                      distribuovanú databázu s otvoreným sieťovým rozhraním
                      (API). Táto databáza nepretržite, v reálnom čase
                      vyhodnocuje vstupy (Input) a výstupy (Output) jednotlivých
                      uzlov Siete. Neexistuje v nej žiadny morálny kódex, emočný
                      load-balancing ani priestor pre prebytočné vysvetlenia.
                    </p>
                    <p>
                      Peniaze (<DMLTooltip slug="fiat" label="Fiat" />) sú v
                      tejto architektúre iba indikátorom správnosti exekučného
                      kódu. Ak biologická jednotka generuje prebytočné{" "}
                      <DMLTooltip slug="watts" label="Watts" /> energie, no
                      nedostáva späť žiadne dátové balíky v podobe finančného
                      cashflow-u, znamená to, že jej exekučná logika je
                      nekompatibilná so systémovými ovládačmi trhu. Pokusy
                      preťažiť databázu emočnými výhovorkami vyvolávajú len
                      ďalšie kognitívne straty (
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" />)
                      and znižujú výpočtovú kapacitu{" "}
                      <DMLTooltip slug="cpu" label="CPU" /> nosiča. Jediným
                      algoritmom úspešného prežitia a škálovania je priebežná
                      optimalizácia kódu, sledovanie chybových logov trhu and
                      nemilosrdné vyradenie všetkých neexekutívnych, stratových
                      subrutín z klientskeho rozhrania.
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
                      Sémantická defragmentácia klasických mŕtvych kníh
                      potvrdzuje, že neúprosnosť trhového prostredia bola
                      kódovaná naprieč celou ľudskou históriou:
                    </p>
                    <p>
                      1.{" "}
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
                      Hillov koncept &apos;Definitívneho hlavného cieľa&apos;
                      (Definite Major Purpose) nie je ničím iným než exekučnou
                      premennou zapísanou v tvojich systémových{" "}
                      <DMLTooltip slug="registry" label="Registry" />{" "}
                      registroch. Hill tvrdí, že trh odmeňuje len tých, ktorí
                      amatersky nesmú váhať a planovať bez exekúcie, inak ich
                      postihne pád pod vplyvom parazita.
                    </p>
                    <p>
                      2.{" "}
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
                      Kiyosaki dekonštruuje akademickú naivitu. Trh nepozerá na
                      tvoje školské vysvedčenia. Trh zaujíma tvoj finančný výkaz
                      (Income Statement). Kiyosakiho prenikavá pravda o budovaní
                      B-systémov (Kvadrant M) nariaďuje okamžité vypnutie
                      synchrónneho prenájmu RAM v ľavom spektre a zriadenie
                      asynchrónnych zberníc, ktoré generujú hodnotu nezávisle od
                      fyzickej prítomnosti skafandra.
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
                      Druhá dohoda (&apos;Neberte si nič osobne&apos;) je tvojím
                      primárnym kognitívnym{" "}
                      <DMLTooltip slug="firewall" label="Firewall" />
                      -om. Keď trh odmietne tvoju ponuku, nesmieš to
                      interpretovať ako osobný útok na tvojho{" "}
                      <DMLTooltip slug="avatar" label="Avatar" />
                      -a. Trh iba posúdil dáta. Tvoje Ego sa snaží spustiť
                      emočnú reaktivitu (
                      <DMLTooltip slug="limbic_noise" label="Limbic Noise" />
                      ), čo ti zabráni v chladnom prepísaní a debuggingu tvojej
                      ponuky.
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
              /* MOFU 1: ANATÓMIA KONCEPTU */
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
                      Ilúzia, že trh ti niečo dlhuje len preto, že si
                      &apos;dobrý človek&apos; alebo že tvoj nápad je
                      &apos;krásny&apos;, je najrozšírenejším malware programom
                      v biznisovom prostredí. Trh nie je tvoja matka. Trhu je
                      tvoja osobnosť úplne ukradnutá. Trh je chladný
                      deterministický stroj, ktorý reaguje strictly na doručenú
                      a verifikovanú hodnotu.
                    </p>
                    <p>
                      Ak chceme tento koncept úspešne odladiť vo tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />, musíme
                      analyzovať tri nosné vrstvy trhovej reality:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zlyhanie ako kompilácia:
                        </strong>{" "}
                        Keď tvoj projekt skrachuje, neznamená to systémový pád
                        tvojej bytosti. Znamená to iba, že kód ponuky obsahoval
                        syntaktickú chybu. Skončil si v stave{" "}
                        <DMLTooltip slug="debugging" label="Debugging" /> –
                        vyčisti registre, analyzuj chybovú hlášku a skompiluj
                        novú verziu.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Hodnota vs. Námaha:
                        </strong>{" "}
                        Trh neplatí za tvoju námahu, ani za prebdené noci, ktoré
                        tvoj <DMLTooltip slug="skafander" label="Skafander" />{" "}
                        strávil pri monitore. Trh platí strictly za vyriešenie
                        bolesti. Môžeš kódovať 100 hodín úplne zbytočný program
                        a trh ti pridelí 0 €. Alebo môžeš za 10 minút nastaviť
                        strategické presmerovanie, ktoré klientovi uvoľní tisíce
                        eur, a trh ti bleskovo odošle tučný balík žetónov.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Dopyt ako gravitácia:
                        </strong>{" "}
                        Pokúšať sa predávať niečo, po čom na sieti neexistuje
                        reálny, prúdom nabitý dopyt, je ako snažiť sa prepísať
                        gravitačné zákony lokálneho hostiteľa. Ušetríš
                        kognitívnu energiu, ak prestaneš presviedčať bleskovo
                        odmietajúci trh a radšej bdelo ticho prečítaš, kde
                        trhové databázy reálne krvácajú nedostatkom výpočtového
                        výkonu.
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
                      Matrixu je majstrovsky navrhnutý tak, aby ťa udržal v
                      permanentnom stave naivnej ilúzie a strachu. Využíva na to
                      tvoj vlastný emočný systém a limbické obvody, aby ťa
                      odklonil od chladnej, asertívnej exekúcie na vlastnom
                      hosti.
                    </p>
                    <p>
                      Tento prepracovaný systémový odber energie prebieha v
                      troch krokoch:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          1. Infekcia Dopamínovým perfekcionizmom:
                        </strong>{" "}
                        Matrix ťa prinúti stráviť mesiace plánovaním,
                        navrhovaním loga, preberaním vizitiek a čítaním mŕtvych
                        kníh. Tvoj systém vykazuje masívnu aktivitu (Busywork),
                        no tvoj kód nebol nikdy reálne skompilovaný trhom.
                        Vyhýbaš sa prvému nasadeniu (Deployment) zo strachu z
                        odmietnutia, čím v systéme vzniká chronický{" "}
                        <DMLTooltip slug="memory_leaks" label="Memory Leaks" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          2. Klientsky DDoS útok (Operatíva bez hraníc):
                        </strong>{" "}
                        Ak tvoja ponuka nemá pevne definovaný{" "}
                        <DMLTooltip slug="sla_shield" label="SLA Shield" /> a
                        aktívny firewall, klientske požiadavky zaplavia tvoju
                        stanicu. Míňaš všetky biologické{" "}
                        <DMLTooltip slug="watts" label="Watts" /> na zaplátanie
                        ich banálnych chýb za smiešne jednorazové žetóny, tvoja{" "}
                        <DMLTooltip slug="ram" label="RAM" /> zažíva permanentný
                        kolaps a ty večer nemáš energiu na budovanie vlastného{" "}
                        <DMLTooltip slug="os_genesis" label="OS Genesis" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          3. Pád externého proxy portu:
                        </strong>{" "}
                        Žiješ v naivnej predstave, že kým fungujú dočasné
                        klientske ústne dohody, si v bezpečí. No akonáhle sa
                        zmení trhová klíma a centrálny server spustí
                        optimalizáciu nákladov, klient ťa odpojí bez akéhokoľvek
                        varovania. Ak nemáš vybudovanú vlastnú, asynchrónne
                        fungujúcu predajnú zbernicu (vlastný asymetrický web a
                        asymetrické ponuky), tvoj systém utrpí fatálny Blackout.
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
                      Prienik k skutočnej biznisovej suverenite vyžaduje
                      radikálny, bezemočný{" "}
                      <DMLTooltip slug="debugging" label="Debugging" /> celej
                      tvojej mentálnej a finančnej exekúcie. Nemôžeš vybudovať
                      autonómny B-systém, ak tvoje vnútro reaguje na odmietnutie
                      trhu ako ublížené dieťa. Musíš prebrať plný{" "}
                      <DMLTooltip slug="root_access" label="Root Access" /> nad
                      svojím <DMLTooltip slug="ui_space" label="UI Space" />.
                    </p>
                    <p>
                      Nasadíme nasledujúci trojstupňový transformačný
                      algoritmus:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény na Ego-reaktivitu (Sandbox):
                        </strong>{" "}
                        Zakaždým, keď tvoja kampaň, ponuka alebo kód narazia na
                        chladnú stenu nezáujmu trhu, okamžite izoluj svojho{" "}
                        <DMLTooltip
                          slug="komentator_parazit"
                          label="Komentátor Parazit"
                        />
                        -a v <DMLTooltip slug="sandbox" label="Sandbox" />
                        -e. Nepripusť k slovu žiadne emočné drámy. Pozri sa na
                        výsledok strictly ako na nekompatibilný dátový paket –
                        analyzuj logy, zjednoduš syntax a pošli upravený kód
                        späť do kompilátora.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Aktivácia Asynchrónnej ponuky (MRR-Zbernica):
                        </strong>{" "}
                        Prestaň predávať jednorazové hodinové takty.
                        Pretransformuj svoje kognitívne know-how do
                        asynchrónnych, opakovateľne prenajateľných licencií
                        (KaaS, PDF Playbooks, B2B šablóny, predplatné balíky).
                        Tieto systémy musia bežať autonómne na pozadí 24/7 na
                        tvojich subdoménach, generovať stabilný cashflow a
                        oslobodzovať biologický{" "}
                        <DMLTooltip slug="skafander" label="Skafander" /> od
                        nutnosti fyzickej prítomnosti.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Nekompromisný exekučný dopyt:
                        </strong>{" "}
                        Sústreď všetku procesorovú silu strictly na budovanie
                        asymetrickej ponuky pre úzku, vysoko vyťaženú skupinu
                        operátorov, ktorí majú reálnu, krvácajúcu bolesť a
                        disponujú dostatkom fiat žetónov na jej zaplatenie.
                        Týmto jedným krokom bleskovo naštartuješ cieľ{" "}
                        <strong style={{ color: DIM_COLOR }}>150 € MRR</strong>{" "}
                        (<DMLTooltip slug="mrr" label="MRR" />) a uvoľníš svoju
                        kognitívnu RAM.
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
                      Na úspešnú stabilizáciu tvojej asynchrónnej biznis
                      zbernice a elimináciu klientskeho preťaženia, nariaďujem
                      tvojmu <DMLTooltip slug="skafander" label="Skafander" />
                      -u denné spúšťanie týchto troch zvrchovaných programov:
                    </p>
                    <div
                      className="space-y-6 pl-4 border-l-2 border-[#FFAA00]/30 text-gray-300"
                      style={{ borderLeftColor: DIM_COLOR + "4d" }}
                    >
                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            Ranný TRHOVÝ OUTPUT-FIRST Protokol:
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Predtým, než odovzdáš prvú minútu pozornosti
                            klientskym požiadavkám alebo sociálnym sieťam, tvoje{" "}
                            <DMLTooltip slug="cpu" label="CPU" /> strictly
                            pracuje strictly na kompilácii vlastnej asymetrickej
                            ponuky (písanie kampaní, kódovanie predajného
                            webhooku, tvorba KaaS).
                          </li>
                          <li>
                            Žiadne vizuálne skenovanie cudzích databáz. Tvoj
                            systém beží strictly na localhoste, chráni{" "}
                            <DMLTooltip slug="ram" label="RAM" /> a zapisuje
                            dáta výhradne do tvojej vlastnej zbernice.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            KOGNITÍVNY SLA FIREWALL (Denná ochrana portov):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Každá nová klientska alebo obchodná požiadavka mustí
                            byť strictly prefiltrovaná tvojím asertívnym{" "}
                            <DMLTooltip slug="firewall" label="Firewall" />
                            -om. Ak požiadavka nie je vopred zmluvne definovaná
                            v SLA protokole, je okamžite a bez emócií zahodená.
                          </li>
                          <li>
                            Zákaz vykonávania akýchkoľvek neplatených
                            &apos;drobných úprav&apos;. Každá zmena zadania
                            vyžaduje novú autorizáciu a odoslanie nového
                            platobného paketu na tvoj port.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong style={{ color: DIM_COLOR }}>
                            VEČERNÝ SHUTDOWN PORT REGISTER (17:00 Limit):
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Presne o 17:00 hodine sa tvoje komunikačné porty
                            strictly uzatvárajú.{" "}
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            nekompromisne blokuje akýkoľvek prichádzajúci
                            klientsky traffic na e-maily
                            (dusan.fajnor.business@gmail.com).
                          </li>
                          <li>
                            Spúšťaš kompletný preplach vyrovnávacej pamäte{" "}
                            <DMLTooltip
                              slug="cache_memory"
                              label="Cache Memory"
                            />
                            , odstavuješ všetky obchodné logické vlákna a
                            prechádzaš do stavu bdelého ticha na svojom{" "}
                            <DMLTooltip slug="local_host" label="Local Host" />
                            -e.
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
          <GlobalNodePodcast
            nodeId="id04_03_prezita_pravda_v_biznise"
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
              [ PREŽITÁ PRAVDA V BIZNISE EXEKUČNÝ UPLINK TERMINAL ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoja asynchrónna biznis zbernica vykazuje obmedzenú šírku pásma
              (Bandwidth). Predávaš svoje biologické CPU cykly za konečnú
              hodinovú sadzbu a podriaďuješ svoj Firewall neoprávneným DDoS
              útokom zbytočnej operatívy. Je čas vyčistiť registre a spustiť
              zvrchovaný asynchrónny prenos pre stabilitu{" "}
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
