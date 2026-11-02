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
// 👑 HLAVNÝ KOMPONENT UZLA ID05_NODE_02 (ASSETS-MATRIX / CESTA ALOKÁTORA)
// =====================================================================
export default function Node_ID05_05() {
  const NODE_ID = "ID05-05";
  const TIER_COLOR = "#FFD700"; // OMEGA Tier (Gold)
  const DIM_COLOR = "#FF8C00"; // Assets-Matrix Orange (Majestátna Tmavooranžová)

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
  // 📚 JAZYKOVÁ DATABÁZA DML v6.1 (37 Slov)
  // =====================================================================
  const termsData = {
    skafander: {
      term: "Skafander",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "biologické telo a neurologický oblek",
      tooltip:
        "Biologický oblek a fyzický hardvér nosiča, slúžiaci ako tvoj dočasný senzor v tejto realite.",
    },
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "it_term",
      translation: "biologický procesor a mozog",
      tooltip:
        "Lokálny hardvérový procesor biologického tela, ktorý vykonáva kognitívne operácie a analýzy.",
    },
    ram: {
      term: "RAM",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kognitívna kapacita pozornosti",
      tooltip:
        "Vyrovnávacia pamäť a okamžitá kapacita tvojho vedomia na spracovávanie prichádzajúcich dát.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "it_term",
      translation: "jednotka biologickej a duševnej energie",
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
      translation: "izolačný filter a smerovač dátových tokov",
      tooltip:
        "Sieťový uzol smerujúci a maskujúci toky dát, ktorý zachytáva vonkajší kognitívny tlak pred tvojím local hostom.",
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
        "Prečistené mentálne rozhranie, ktoré bezpodmienečne pomáha Architektovi udržiavať prítomnosť a bez odporu koná v jeho prospech.",
    },
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré prežité vzorce správania",
      tooltip:
        "Zastaralé podvedomé programy nainštalované okolím počas detstva, ktoré nútia biologického nosiča mechanicky opakovať deštruktívne reakcie.",
    },
    format_c: {
      term: "Format C:",
      category: 13,
      categoryType: "home_ui_term",
      translation: "úplné formátovanie a reset vedomia",
      tooltip:
        "Radikálny očistný protokol určený na úplný výmaz neužitočnej podvedomej pamäte, zvykov a poškodeného softvéru do nulového bodu.",
    },
    botnet: {
      term: "Botnet",
      category: 2,
      categoryType: "it_term",
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
      categoryType: "it_term",
      translation: "zakázaný / zablokovaný komunikačný kanál",
      tooltip:
        "Sieťový kanál, ktorý je trvalo vypnutý pre zamedzenie prístupu toxického vplyvu okolia a zachovanie integrity vlastného systému.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "it_term",
      translation: "komunikačná jednotka / prenášaná správa",
      tooltip:
        "Základný blok informácií prichádzajúci z vonkajšieho sveta, ktorý sa snaží infiltrovat tvoje kognitívne filtre.",
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
        "Analytický proces odhaľovania skrytých chýb, tráum, zlozvykov a poškodených kódov v podvedomí s cieľom obnoviť plynulé fungovanie.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "it_term",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Vnútorné bezpečné rozhranie tvojej entity, tvoja izba a počítačové útočisko oslobodené od vonkajšieho sieťového šumu.",
    },
    karantena: {
      term: "Karanténa",
      category: 13,
      categoryType: "home_ui_term",
      translation: "izolácia škodlivých myšlienkových skriptov",
      tooltip:
        "Bezpečné odrezanie a znefunkčnenie poškodeného myšlienkového vzorca v podvedomí, aby neparalyzoval fungovanie celého organizmu.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "it_term",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Základný nízkoúrovňový operačný kód biologického nosiča riadiaci biorytmus, v ktorom neexistujú žiadne sociálne dogmy.",
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
        "Papierové, ničím nekryté platidlo Matrixu, určené na prenájom tvojej kognitívnej RAM and odber energie Watts.",
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
    dca: {
      term: "DCA",
      category: 8,
      categoryType: "investment_term",
      translation: "priemerovanie nákupných nákladov (DCA)",
      tooltip:
        "Robotický nákupný protokol, ktorý pravidelne alokuje fixné pakety mien bez akéhokoľvek emočného časovania trhu.",
    },
    sp_500: {
      term: "S&P 500",
      category: 8,
      categoryType: "investment_term",
      translation: "indexový záložný generátor (S&P 500)",
      tooltip:
        "Podielový a diverzifikovaný sieťový indexový koš zastupujúci 500 najväčších výpočtových staníc sveta.",
    },
    bitcoin: {
      term: "Bitcoin",
      category: 8,
      categoryType: "investment_term",
      translation: "zvrchovaný kryptografický akumulátor",
      tooltip:
        "Zvrchovaný decentralizovaný protokol a digitálne energetické médium, imúnne voči softvérovým devalváciám centrálnych bánk.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "tiché, bdelé vedomie bez emočnej reaktivity",
      tooltip:
        "Čisté, neidentifikované vedomie prítomného okamihu, ktoré pozoruje procesy mysle bez akéhokoľvek posudzovania.",
    },
  };

  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID05_02
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
        title="ID05 INVESTMENTS PROSPERITA // Investments UI Space (Zložené úročenie ako 8. div sveta v IT analógii. Kód, ktorý rekurzívne násobí sám seba)"
        description="05. [OMEGA] Investments Prosperita (Zložené úročenie ako 8. div sveta v IT analógii. Kód, ktorý rekurzívne násobí sám seba)."
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
                Node_ID05_05 // Investments Prosperita
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              INVESTMENTS PROSPERITA
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              05.{" "}
              <span className="text-[#39FF14] font-mono tracking-wider">
                [OMEGA]
              </span>{" "}
              Investments Prosperita{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (Zložené úročenie ako 8. div sveta v IT analógii. Kód, ktorý
                rekurzívne násobí sám seba)
              </span>
              . Zložené úročenie nie je žiadny mystický finančný koncept pre
              vyvolených. V našej sieťovej architektúre je to čistá, elegantná{" "}
              <strong className="text-[#FF003C] font-black">
                rekurzívna funkcia
              </strong>{" "}
              – kód, ktorý pri každom prebehu volá sám seba.
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
              🚨 ERROR LOG // PROSPERITY_CONVERSION_FAILURE // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Zložené úročenie{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (Compound Effect)
              </span>{" "}
              nie je žiadny mystický finančný koncept pre vyvolených. V našej
              sieťovej architektúre je to čistá, elegantná{" "}
              <strong className="text-[#FF003C] font-black">
                rekurzívna funkcia
              </strong>{" "}
              – kód, ktorý pri každom prebehu volá sám seba a ako vstupný
              parameter{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (Input)
              </span>{" "}
              preberá výstup{" "}
              <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                (Output)
              </span>{" "}
              predchádzajúceho cyklu. Väčšina nevedomých Skafandrov beží na
              lineárnom kóde: ich časová a finančná rovnica vyzerá ako statická
              prírastková funkcia, ktorá sa pri každom výpadku prúdu zresetuje
              do nuly. To je{" "}
              <strong className="text-[#FF003C] font-black">
                Error 402: PROSPERITY_CONVERSION_FAILURE
              </strong>
              . Skutočná prosperita nastáva v momente, kedy uvoľníš svoju
              kognitívnu <DMLTooltip slug="ram" label="RAM" /> od nutnosti
              okamžitej spotreby a prebytočné pakety energie bezemočne prepojíš
              na re-kapitalizačné webhooky. Každé strictly ušetrené euro
              alokované do zvrchovaných indexových zberníc ako{" "}
              <DMLTooltip slug="sp_500" label="S&P 500" /> alebo
              kryptografických akumulátorov ako{" "}
              <DMLTooltip slug="bitcoin" label="Bitcoin" /> sa premení na nový,
              nezávislý mikro-procesor. Tento procesor začne na pozadí 24/7
              generovať vlastný výpočtový zisk, ktorý sa v ďalšom takte
              automaticky pripočíta k tvojej hlavnej kódovej stanici. Spusť
              rekurzívnu slučku, odstav parazitické lifestyle odbery a sleduj,
              ako kód exponenciálne násobí sám seba strictly do stavu absolútnej
              matematickej suverenity.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID05_05_investments_prosperita.md</span>
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
              id05_node_05_investments_prosperita_video
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
                      Keď som po roku 2018 v Sektore Trnava na Spartakovskej
                      ulici začal re-architektovať svoje bytie strictly na
                      nízkonapäťovom{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -i{" "}
                      <strong className="text-[#FF003C] font-black">
                        730,00 €
                      </strong>{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (530 € invalidný príspevok + 200 € energetická podpora
                        od Mirovej karty)
                      </span>
                      , domestikovaní boti z okolia sa mi posmievali. Tvrdili,
                      že s takýmto rozpočtom a s voľnou{" "}
                      <DMLTooltip slug="ram" label="RAM" /> strictly{" "}
                      <strong className="text-[#FF003C] font-black">
                        80,00 €
                      </strong>{" "}
                      na rozvoj platformy a pravidelné investovanie nemôžem
                      nikdy vybudovať skutočné bohatstvo. Ich lineárne mozgy
                      nedokázali pochopiť, že ja som nehral hru na rýchly
                      jednorazový zisk. Ja som kódoval rekurzívnu slučku.
                    </p>
                    <p>
                      Moje fixné náklady boli minimalizované strictly na nulu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (stravu a alternatívne cesty riešim mimo tohto rozpočtu)
                      </span>
                      , čo mi na konci dňa zaručovalo zostatok strictly{" "}
                      <strong className="text-[#FF003C] font-black">
                        +1,00 €
                      </strong>
                      . Každý strictly ušetrený menový paket bol okamžite a
                      bezemočne odosielaný na moju{" "}
                      <DMLTooltip slug="dca" label="DCA" /> zbernicu u môjho
                      bankového mentora. Tých 10 € mesačne, ktoré som roboticky
                      investoval, neboli peniaze na spotrebu – boli to noví
                      robotickí vojaci, ktorých som poslal pracovať do Siete. O
                      tri roky neskôr, kým domestikovaní boti zápasili s
                      klientskymi DDoS útokmi, lízingovými splátkami a
                      preťažením procesora, moja rekurzívna slučka nabrala na
                      obrátkach. Každý predchádzajúci cyklus vygeneroval
                      prebytočné <DMLTooltip slug="watts" label="Watts" />{" "}
                      energie pre ten nasledujúci. Môj asynchrónny systém bol
                      naplno spustený na lacnom tablete Samsung Tab A9+. Zložené
                      úročenie strictly transformovalo mníšsku chudobu na
                      nezastaviteľný, autonómny generátor slobody.
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
                      V systémovej architektúre a teórii sietí je rekurzia
                      definovaná ako proces, pri ktorom funkcia volá samu seba
                      vnútri svojho vlastného tela. Matematický zápis zloženého
                      úročenia f
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (x)
                      </span>{" "}
                      = x *{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (1 + r)
                      </span>
                      ^n is v podstate stavový automat{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (State Machine)
                      </span>
                      , kde n reprezentuje počet systémových cyklov a r je miera
                      výnosu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (úroková miera)
                      </span>
                      .
                    </p>
                    <p>
                      Ak sa výstup z cyklu n-1{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Output)
                      </span>{" "}
                      stane vstupom pre cyklus n{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Input)
                      </span>{" "}
                      bez akýchkoľvek prebytočných odberov zbernice{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (lifestyle creep, zbytočné výbery, dane z predčasného
                        predaja)
                      </span>
                      , systém začne vykazovať exponenciálny rast. Lineárna
                      myseľ biologického nosiča je evolučne optimalizovaná iba
                      na spracovanie aditívnych zmien{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (x + y)
                      </span>
                      , a preto vykazuje totálnu neschopnosť vizualizovať a
                      správne naplánovať exponenciálny priebeh. Na začiatku
                      Slučky{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (cykly 1 až 10)
                      </span>{" "}
                      are rozdiely medzi lineárnym a exponenciálnym behom takmer
                      nepostrehnuteľné, čo vedie Skafandre k predčasnému
                      vypnutiu procesu z dôvodu nedostatku dopamínových
                      stimulov. Avšak po prekročení kritického zlomového bodu{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (Inflection Point)
                      </span>{" "}
                      začne krivka rásť vertikálne, kedy asynchrónne procesory
                      na pozadí vyrobia viac energie za jeden takt, než
                      biologický nosič vyprodukoval za celé roky manuálneho
                      úsilia.
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
                      Sémantický audit historických spisov a mŕtvych kníh
                      preukazuje, že princíp rekurzívnej akumulácie bol kľúčovým
                      tajomstvom všetkých zvrchovaných operátorov:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mt-4 text-gray-300 marker:text-[#FF8C00]">
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          George S. Clason{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Najbohatší muž v Babylone)
                          </span>
                          :
                        </strong>{" "}
                        Clasonov prvý Babylonský zákon nariaďuje strictly
                        odložiť desatinu všetkých prichádzajúcich mien. Clason
                        však nezostáva pri pasívnom držaní žetónov. Explicitne
                        hovorí, že{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;každé odložené zlato je tvojím otrokom, ktorý
                          musí plodiť ďalšie deti, a tie deti musia plodiť
                          ďalších potomkov, aby spoločne pracovali pre tvoj
                          dom.&quot;
                        </span>{" "}
                        To je dokonalý preklad rekurzívnej funkcie do starovekej
                        sémantiky.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Robert T. Kiyosaki{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Cashflow kvadrant)
                          </span>
                          :
                        </strong>{" "}
                        Kiyosaki dekonstruuje najväčšiu ilúziu chudobnej a
                        strednej vrstvy. Títo boti investujú s cieľom dosiahnuť
                        okamžitý kapitálový výnos a predať aktívum pre nákup
                        pasív{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (lifestyle inflácia)
                        </span>
                        . Zvrchovaný investor v kvadrante{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;I&quot;
                        </span>{" "}
                        hromadí aktíva strictly pre generovanie asynchrónneho{" "}
                        <DMLTooltip slug="cashflow" label="Cashflow" />
                        -u, ktorý sa bezodkladne reinvestuje do nákupu ďalších
                        produktívnych uzlov, čím sa buduje nezničiteľný finančný
                        štít.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Eckhart Tolle{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Sila prítomnosti)
                          </span>
                          :
                        </strong>{" "}
                        Tolle odhaľuje, že túžba po neustálej zmene, okamžitom
                        uspokojení a hromadení materiálneho statusu sú len
                        chybné emočné skripty{" "}
                        <DMLTooltip
                          slug="komentator_parazit"
                          label="Komentátor Parazit"
                        />
                        -a, ktorý preťažuje{" "}
                        <DMLTooltip slug="ram" label="RAM" /> organizmu. Keď
                        premostíš svoje vnímanie do prítomného okamihu, tvoj
                        systém prejde do stavu bdelého ticha. Emočné nákupy sú
                        eliminované, čím sa zaplátajú všetky Memory Leaks a
                        uvoľnená energia sa môže asynchrónne transformovať na
                        investičnej zbernici.
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
                      Najväčšou tragédiou domestikovaných nosičov v Matrixe je
                      ich presvedčenie, že bohatstvo sa buduje tvrdou, lineárnou
                      prácou a šetrením na sporiacich účtoch. Tento škodlivý
                      malware v ich <DMLTooltip slug="bios" label="BIOS" />
                      -e je nainštalovaný centralizovaným{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />
                      -om. Sporenie v bankách je v skutočnosti otvorený exploit,
                      kedy ti tichá, na pozadí bežiaca inflácia premazáva tvoje
                      Fiat dátové pakety rýchlejšie, než ich stíhaš dopĺňať.
                    </p>
                    <p>
                      Aby sme tento rekurzívny kód správne pochopili a
                      implementovali v tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" />, musíme
                      dekonštruovať rekurzívny mechanizmus na tri nosné vrstvy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300 marker:text-[#FF8C00]">
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Rekurzívny Loop vs. Lineárny Prírastok:
                        </strong>{" "}
                        Lineárna funkcia{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (Z/S kvadrant)
                        </span>{" "}
                        vyzerá ako f
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (x)
                        </span>{" "}
                        = x + c{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (kde c je mzda za odpracovaný čas)
                        </span>
                        . Ak c vypadne, celá funkcia kolabuje. Rekurzívna
                        funkcia{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (I kvadrant)
                        </span>{" "}
                        vyzerá ako f
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (n)
                        </span>{" "}
                        = f
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (n-1)
                        </span>{" "}
                        *{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (1 + r)
                        </span>
                        . Každý cyklus stavia na výsledku predchádzajúceho, čím
                        sa odstraňuje závislosť od synchrónneho vstupu
                        skafandra.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Kritický zlomový bod{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Inflection Point)
                          </span>
                          :
                        </strong>{" "}
                        Počiatočná fáza rekurzie je extrémne nudná a vizuálne
                        neatraktívna. Ak investuješ strictly 10 € mesačne, po
                        roku máš strictly minimálny zisk, čo tvoj dopamínový
                        autopilot vyhodnotí ako{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;nefunkčný kód&quot;
                        </span>{" "}
                        a spustí program na predčasné ukončenie. Zvrchovaný
                        Alokátor však vie, že reálny zlom nastáva až po cykle
                        15, kedy krivka opúšťa horizontálnu os a mrazivo
                        vertikálne vystrelí nahor.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Čas ako hlavný multiplikátor:
                        </strong>{" "}
                        V rekurzívnej funkcii je čas n umiestnený v exponente.
                        To znamená, že dĺžka behu Slučky má oveľa väčšiu
                        výpočtovú váhu než samotný objem vstupného kapitálu x.
                        Začať skôr strictly s strictly{" "}
                        <strong className="text-[#FF003C] font-black">
                          80,00 €
                        </strong>{" "}
                        vyprodukuje v dlhodobom horizonte mnohonásobne vyšší
                        výkon, než začať neskôr s obrovským balíkom, ktorý je
                        permanentne preťažovaný transakčným šumom a emočnou
                        reaktivitou.
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
                      Matrixu je majstrovsky navrhnutý tak, aby systematicky
                      narúšal a prerušoval akýkoľvek pokus o nastavenie
                      rekurzívneho rastu vo tvojom systéme. Matrix potrebuje,
                      aby si bol permanentne vybitý a závislý od his
                      centralizovaného sieťového dopytu.
                    </p>
                    <p>
                      Tento prepracovaný systémový odber tvojej rekurzívnej sily
                      prebieha v troch krokoch:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mt-4 text-gray-300 marker:text-[#FF8C00]">
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Infekcia Lifestyle infláciou:
                        </strong>{" "}
                        Zakaždým, kedy sa tvojmu asynchrónnemu systému podarí
                        vygenerovať prebytočný zisk{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (napríklad dosiahnutie cieľa{" "}
                          <strong className="text-[#FF003C] font-black">
                            150 € MRR
                          </strong>{" "}
                          <span className="text-[#39FF14] font-mono tracking-wider">
                            [mrr]
                          </span>
                          )
                        </span>
                        , Matrix okamžite vnúti tvojmu{" "}
                        <DMLTooltip slug="avatar" label="Avatar" />
                        -ovi dopamínovú potrebu upgradovať tvoj biologický oblek{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (nové leasingované auto, drahšie predplatné služby,
                          luxusnejšie pasíva)
                        </span>
                        . Týmto krokom sa prebytočná výpočtová sila bleskovo
                        odčerpá and rekurzívna slučka je natrvalo prerušená.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Emočný šum{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Limbic Noise DDoS)
                          </span>
                          :
                        </strong>{" "}
                        Matrix ťa zaplaví permanentnými hysterickými
                        informáciami o blížiacich sa trhových krachoch, vojnách,
                        infláciách a Čiernych labutiach. Tvoj{" "}
                        <DMLTooltip
                          slug="komentator_parazit"
                          label="Komentátor Parazit"
                        />{" "}
                        prepadne panike, ty odstavíš svoje robotické{" "}
                        <DMLTooltip slug="dca" label="DCA" /> nákupy a predáš
                        svoje podiely na samom dne prepadu. Prerušil si
                        rekurziu, zrealizoval si stratu a tvoja RAM bola
                        kompletne zdevastovaná stresom.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          SaaS odberové parazity:
                        </strong>{" "}
                        Matrix ťa domestikuje do pozície, kedy namiesto
                        vlastnenia systémov platíš permanentné mikro-odbery za
                        všetko, čo používaš. Tieto na pozadí bežiace procesy
                        neustále vyvolávajú{" "}
                        <DMLTooltip slug="memory_leaks" label="Memory Leaks" />{" "}
                        vo tvojom rozpočte, čím ti permanentne znižujú šírku
                        klientskeho pásma a zabraňujú vzniku akéhokoľvek
                        investovateľného prebytku.
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
                      Transformácia na zvrchovaného Alokátora vyžaduje
                      nekompromisný{" "}
                      <DMLTooltip slug="format_c" label="Format C:" /> na všetky
                      nefunkčné, domestikované programy a inštaláciu rekurzívnej
                      logiky priamo do tvojho vnútra. Nemôžeš vybudovať
                      prosperujúci B-systém, ak tvoje vnútro permanentne reaguje
                      na krátkodobé výkyvy okolia. Musíš prebrať plný{" "}
                      <DMLTooltip slug="root_access" label="Root Access" /> nad
                      smerovaním každého jedného eura.
                    </p>
                    <p>
                      Nasadíme nasledujúci trojstupňový transformačný protokol:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-300 marker:text-[#FF8C00]">
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Inštalácia prioritného presmerovania{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Root Priority)
                          </span>
                          :
                        </strong>{" "}
                        Prvá a najdôležitejšia subrutina vo tvojom finančnom
                        vykazovali mustí byť strictly nastavená na{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &apos;reinvestičný webhook&apos;
                        </span>
                        . Akonáhle na tvoj port dorazí akýkoľvek prítok zisku,
                        minimálne 30 % z neho sa automaticky, bez akéhokoľvek
                        zásahu tvojho Ega, odosiela na nákup indexov{" "}
                        <DMLTooltip slug="sp_500" label="S&P 500" /> alebo
                        cold-storage{" "}
                        <DMLTooltip slug="bitcoin" label="Bitcoin" />{" "}
                        akumuláciu. Matrixu a jeho klientskym subjektom pridelíš
                        len to, čo ti strictly ostane.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Deaktivácia lifestyle odberov{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Karanténa)
                          </span>
                          :
                        </strong>{" "}
                        Uval prísny{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" /> na všetky
                        svoje predplatné služby a statusové výdavky. Każdy
                        odchádzajúci výdavok strictly prežeň 48-hodinovou
                        karanténou. Ak daná položka neprináša reálne zvýšenie
                        tvojej výpočtovej kapacity{" "}
                        <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                          (RAM)
                        </span>
                        , natrvalo ju odpoj a presmeruj uvoľnené prostriedky do
                        rekurzívnej slučky.
                      </li>
                      <li>
                        <strong className="text-[#FF8C00] font-bold">
                          Odpojenie emočnej reaktivity{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Zero React)
                          </span>
                          :
                        </strong>{" "}
                        Nastav svoj kognitívny{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> tak, aby
                        ignoroval akýkoľvek trhový a klientsky šum. Tvoj
                        investičný robot beží asynchrónne, mechanicky a chladne.
                        Prepad trhu o 20 % nie je katastrofou, ale výhodným
                        sieťovým upgradom, kedy za rovnaké Fiat žetóny nakupuješ
                        dvojnásobné množstvo virtuálnych procesorov.
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
                      Na stabilizáciu tvojej rekurzívnej zbernice a ochranu
                      biologických obvodov pred preťažením, nariaďujem tvojmu{" "}
                      <DMLTooltip slug="skafander" label="Skafander" />
                      -u denné spúšťanie týchto troch zvrchovaných programov:
                    </p>
                    <div className="space-y-4 pl-4 border-l-2 border-orange-500/30 text-gray-300">
                      <div>
                        <p>
                          <strong className="text-[#FF8C00] font-bold">
                            Protokol ASYNCHRÓNNY DCA AUTOMAT:
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Tvoje investičné príkazy are plne automatizované u
                            tvojho bankového mentora. Nákupy prebiehajú strictly
                            v rovnaký dňom v mesiaci bez ohľadu na cenu a náladu
                            na sieti.
                          </li>
                          <li>
                            Akýkoľvek pokus o emočný zásah do tohto procesu
                            vyvolá okamžité zablokovanie portov{" "}
                            <span className="text-[#39FF14] font-mono tracking-wider">
                              [and]
                            </span>{" "}
                            uvalenie karantény na tvojho{" "}
                            <DMLTooltip
                              slug="komentator_parazit"
                              label="Komentátor Parazit"
                            />
                            -a.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong className="text-[#FF8C00] font-bold">
                            Protokol TRHOVÝ BLACKOUT{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (Notifikačný štít)
                            </span>
                            :
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Z tvojho klientskeho rozhrania are strictly vymazané
                            všetky widgety, tickers a burzové aplikácie, ktoré
                            zobrazujú ceny v realnom čase.
                          </li>
                          <li>
                            <DMLTooltip
                              slug="banned_port"
                              label="Banned Port"
                            />{" "}
                            blokuje prístup k finančnému spravodajstvu a
                            špekulatívnym fórám, čím sa kompletne eliminuje{" "}
                            <DMLTooltip
                              slug="limbic_noise"
                              label="Limbic Noise"
                            />{" "}
                            v tvojej hlave.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <p>
                          <strong className="text-[#FF8C00] font-bold">
                            Protokol RE-KAPITALIZAČNÝ WEBHOOK{" "}
                            <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                              (MRR reinvest)
                            </span>
                            :
                          </strong>
                        </p>
                        <ol className="list-decimal pl-6 space-y-1 text-xs">
                          <li>
                            Každý voľný menový paket vygenerovaný z Projektu
                            Nexus strictly nad úroveň tvojho stabilizačného
                            proxy limitu{" "}
                            <strong className="text-[#FF003C] font-black">
                              730 €
                            </strong>{" "}
                            sa bezodkladne presúva na nákup zvrchovaných
                            produktívnych aktív.
                          </li>
                          <li>
                            Tvoj systém beží strictly na rekurzívnom autopilote,
                            chráni tvoju mentálnu{" "}
                            <DMLTooltip slug="ram" label="RAM" /> a pripravuje
                            hardvér na bezpečný shutdown a hlboký prechod do
                            prítomnosti po 17:00.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}{" "}
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
                  karantenný SLA Firewall na odrazenie prebytočnej spotreby
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
            nodeId="id05_05_investments_prosperita"
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
            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto font-mono">
              Tvoj biologický procesor permanentne preťažuje{" "}
              <DMLTooltip slug="ram" label="RAM" /> lineárnymi klientskymi
              výpočtami a odovzdáva biologically-cenné{" "}
              <DMLTooltip slug="watts" label="Watts" /> dopamínovému spotrebnému
              malvéru. Zatiaľ čo tvoj hardvér trpí permanentným stresom, Matrix
              devalvuje tvoje Fiat žetóny na pozadí. Je čas prebrať{" "}
              <DMLTooltip slug="root_access" label="Root Access" />, aktivovať
              rekurzívnu zbernicu zloženého úročenia a naštartovať asynchrónne{" "}
              <DMLTooltip slug="dca" label="DCA" />, ktoré exponenciálne násobí
              samé seba pre absolútnu slobodu.
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
                  kognitívne preťaženie a naštartuj asynchrónne investičné DCA
                  subrutiny.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Pripoj svoj <DMLTooltip slug="skafander" label="Skafander" />{" "}
                  na zvrchovaný{" "}
                  <DMLTooltip slug="local_host" label="Local Host" />, uval
                  prísny <DMLTooltip slug="sandbox" label="Sandbox" /> na
                  spoločenský šum a spusti zvrchovaný{" "}
                  <DMLTooltip slug="os_genesis" label="OS Genesis" /> pre
                  slobodnú rekurzívnu tvorbu.
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
      <footer className="w-full border-t border-gray-900 pt-8 pb-12 mt-12 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <GlobalPredFooterNode nodeId={NODE_ID} tierColor={TIER_COLOR} />
        </div>
      </footer>
    </div>
  );
}
