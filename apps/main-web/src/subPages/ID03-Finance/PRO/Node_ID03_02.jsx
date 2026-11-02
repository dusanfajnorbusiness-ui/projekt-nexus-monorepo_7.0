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
// 👑 HLAVNÝ KOMPONENT UZLA ID03_NODE_02 (CESTA STREDNEJ VRSTVY)
// =====================================================================
export default function Node_ID03_02() {
  const NODE_ID = "ID03-02";
  const TIER_COLOR = "#39FF14"; // PRO Tier
  const DIM_COLOR = "#FFD700"; // Zlatá pre dimenziu ID03

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

  // Simulator States - LIFESTYLE INFLATION & DEBT CALCULATOR
  const [salaryInput, setSalaryInput] = useState(2500);
  const [mortgageInput, setMortgageInput] = useState(1200);
  const [leaseInput, setLeaseInput] = useState(400);
  const [isFirewallActive, setIsFirewallActive] = useState(false);
  const [isFormatCActive, setIsFormatCActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializované monitorovanie kognitívnych Watts Skafandra.",
    "[STATUS] Detegované hypotekárne a lízingové záväzky. Sleduj kognitívne preťaženie.",
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

  // Live calculations based on DML v6.0 / Tab A9+ requirements
  const liveMortgage = isFormatCActive ? 0 : mortgageInput;
  const liveLease = isFormatCActive ? 0 : leaseInput;
  const liveLimbicNoise = Math.min(
    100,
    Math.max(0, Math.round(isFirewallActive ? 20 : liveMortgage > 0 ? 80 : 30)),
  );
  const liveFreeRam = Math.max(
    0,
    100 -
      Math.round(
        liveMortgage * 0.04 + liveLease * 0.05 + liveLimbicNoise * 0.3,
      ),
  );
  const liveWatts = Math.min(
    100,
    Math.max(
      5,
      Math.round(100 - liveLimbicNoise * 0.4 + (isFirewallActive ? 20 : 0)),
    ),
  );
  const liveSuverenity = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (isFormatCActive ? 90 : 20) +
          (isFirewallActive ? 10 : 0) -
          (liveMortgage > 0 ? 30 : 0),
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setIsFormatCActive(true);
      setIsFirewallActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný. Pasíva (hypotéka, lízing) boli odpísané a izolované.",
        "[STATUS] Voľná RAM: 95% // Limbic Noise: 20% // Suverenita: 100% (Root Access)",
        ...prev,
      ]);
    } else if (actionType === "firewall") {
      setIsFirewallActive(!isFirewallActive);
      if (!isFirewallActive) {
        setLogs((prev) => [
          "[SUCCESS] Kognitívny Firewall aktívny. Marketingový spam a statusové tlaky boli odmietnuté.",
          ...prev,
        ]);
      } else {
        setLogs((prev) => [
          "[WARNING] Firewall vypnutý. Systém je otvorený pre lifestyle-inflation vírusy.",
          ...prev,
        ]);
      }
    } else if (actionType === "autopilot") {
      setIsFormatCActive(false);
      setIsFirewallActive(false);
      setSalaryInput(3000);
      setMortgageInput(1500);
      setLeaseInput(600);
      setLogs((prev) => [
        "[CRITICAL] Autopilot aktivovaný! Plat zvýšený na 3000 €, no Matrix okamžite vynútil drahší byt a auto.",
        "[WARNING] Celková kognitívna RAM klesla pod kritickú hranicu 20%.",
        ...prev,
      ]);
    } else if (actionType === "reset") {
      setIsFormatCActive(false);
      setIsFirewallActive(false);
      setSalaryInput(2500);
      setMortgageInput(1200);
      setLeaseInput(400);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu strednej vrstvy.",
        "[STATUS] RAM vyťaženie obnovené na normálne, priemerné zaťaženie.",
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
      translation: "miestny, safe priestor tvojej izby a mysle",
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
    karantena: {
      term: "Karanténa",
      category: 13,
      categoryType: "home_ui_term",
      translation: "izolácia škodlivých spoločenských vplyvov",
      tooltip:
        "Stav prísneho bdelého odpojenia od toxických informácií, osôb a deštruktívnych programov.",
    },
    banned_port: {
      term: "Banned Port",
      category: 2,
      categoryType: "it_term",
      translation: "zablokované komunikačné rozhranie",
      tooltip:
        "Striktne uzavreté komunikačné rozhranie na zablokovanie prichádzajúcich toxických vplyvov.",
    },
    format: {
      term: "Format",
      category: 13,
      categoryType: "home_ui_term",
      translation: "kompletný reset kognitívnych registrov",
      tooltip:
        "Úplný reset a nastavenie nových parametrov pre beh zvrchovaného operačného systému.",
    },
    local_client: {
      term: "Local Client",
      category: 2,
      categoryType: "it_term",
      translation: "lokálne pripojené rozhranie užívateľa",
      tooltip:
        "Lokálne klientske pripojenie k realite podriadené vonkajším sieťovým serverom.",
    },
    network_socket: {
      term: "Network Socket",
      category: 2,
      categoryType: "it_term",
      translation: "komunikačné spojenie tvojho systému",
      tooltip:
        "Aktívny komunikačný uzol otvárajúci dvere pre prenos dát s okolitými entitami.",
    },
    registry: {
      term: "Registry",
      category: 2,
      categoryType: "it_term",
      translation: "systémové databázy tvojich presvedčení",
      tooltip:
        "Centrálna systémová databáza, v ktorej sú uložené všetky tvoje kľúčové životné vzorce.",
    },
    resource_monitor: {
      term: "Resource Monitor",
      category: 2,
      categoryType: "it_term",
      translation: "analytický nástroj tokov energie",
      tooltip:
        "Diagnostický nástroj na meranie a vyhodnocovanie vyťaženia biologických a finančných Watts.",
    },
    sla_shield: {
      term: "SLA Shield",
      category: 2,
      categoryType: "it_term",
      translation: "zmluva o garancii ochrany vedomia",
      tooltip:
        "Hardvérovy a kognitívny štít garantujúci minimálnu kvalitu chodu vedomia bez vyrušovania.",
    },
  };

  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID03_02 (ESLINT FIX)
  // =====================================================================
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
        title="ID03 THE CASH-ENGINE // Cesta Strednej Vrstvy (Pasca klamlivého luxusu)"
        description="02. Cesta Strednej Vrstvy (Pasca klamlivého luxusu a hypoték)."
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
                Node_ID03_02 // Cesta Strednej Vrstvy
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              Cesta Strednej Vrstvy
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              02. Pasca klamlivého luxusu a hypoték. Prenajímaš svoje CPU pre
              fiktívny komfort, kým tvoj local host nevlastní žiadne zvrchované
              digitálne aktíva. Nastav si kognitívny Firewall a zruš finančný
              autopilot.
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
              🚨 ERROR LOG // Identity_Overload // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Vstúpil si do zóny, kde väčšina{" "}
              <DMLTooltip slug="skafander" label="Skafander" />
              -ov oslavuje svoj biologický úspech, zatiaľ čo ich procesorové
              cykly sú zaplavené neviditeľným, toxickým dlhovým malvérom. Veríš
              tradičnému spoločenskému kódu Matrixu:{" "}
              <span className="text-[#FFAA00] font-mono">
                &quot;Choď do dobrej školy, získaj prestížny titul, nájdi si
                bezpečné zamestnanie, vezmi si 30-ročnú hypotéku na luxusnú
                krabicu a poctivo šetri fiat žetóny v banke.&quot;
              </span>{" "}
              Tento program je však fatálny exploit,{" "}
              <strong className="text-[#FF003C] font-black">
                Error 402: INTELLECTUAL_DOMESTICATION
              </strong>
              . Stredná vrstva si len prenajíma drahší komfort, no ich
              kognitívna <DMLTooltip slug="ram" label="RAM" /> je permanentne
              preťažená stresom z mesačného vyrovnávania bilancie. Predávajú
              svoje najvzácnejšie, konečné <DMLTooltip slug="cpu" label="CPU" />{" "}
              takty na splácanie pasív, ktoré pyšne ukazujú ostatným botom v
              Sieti. Ich bankový{" "}
              <DMLTooltip slug="local_host" label="Local Host" /> nevlastní
              žiadne zvrchované digitálne aktíva, ich reálne úspory požiera
              tichá na pozadí bežiaca inflácia. Sú to len lepšie kŕmené batérie
              v tom istom koryte Matrixu. Uval tvrdú{" "}
              <DMLTooltip slug="karantena" label="Karanténu" /> na tieto falošné
              statusové skripty a zruš finančný autopilot skôr, než ti systém
              zahlási{" "}
              <strong className="text-[#FF003C] font-black">
                Error 509: BANDWIDTH_LIMIT_EXCEEDED
              </strong>
              .&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID03_02_cesta_strednej_vrstvy.md</span>
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
              id03_node_02_cesta_strednej_vrstvy_video
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
                ? "bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.15)]"
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
                ? "bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.15)]"
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
                      Keď som v rokoch 2018 až 2023 prežíval svoj vlastný
                      systémový reštart po zlyhaní hardvéru v Sektore Trnava,
                      veľa ľudí z takzvanej &apos;strednej vrstvy&apos; sa mi
                      smialo. Pozerali sa na mňa zhora, pretože som operoval
                      strictly s finančným{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -om v podobe štátneho príspevku <strong>
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
                      % strachom z prepustenia a straty komfortu, ja som mal
                      plné administrátorské práva (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      svojím časom. Uvalil som prísny{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" /> na všetky
                      spoločenské očakávania. Moja voľná výpočtová kapacita bola
                      pretransformovaná do kódovania{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" /> na
                      lacnom tablete Samsung Tab A9+. Moja nízkonapäťová
                      prevádzka mi umožnila vybudovať nezávislú vedomostnú
                      zbernicu bez akéhokoľvek dlhového zaťaženia. Videl som ich
                      luxusné skafandre – boli to len nablýskané väzenské
                      terminály, zatiaľ čo ja som bol voľný, bdelý uzol
                      operujúci v tieni Matrixu.
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
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"
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
                      Z hľadiska systémovej a kognitívnej analýzy je{" "}
                      <span className="text-[#FFAA00] font-mono">
                        &quot;Cesta Strednej Vrstvy&quot;
                      </span>{" "}
                      definovaná ako sofistikovaný optimalizačný algoritmus
                      Matrixu navrhnutý tak, aby maximalizoval odber energie z
                      vysokokapacitných batérií. Kým chudobná vrstva je
                      vyťažovaná priamo cez boj o základné biologické prežitie,
                      stredná vrstva je kontrolovaná cez psychologický klam
                      zvaný{" "}
                      <span className="text-[#FFAA00] font-mono">
                        &quot;lifestyle inflation&quot;
                      </span>{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (inflácia životného štýlu)
                      </span>
                      .
                    </p>
                    <p>
                      Ak biologický procesor zvýši svoj vstupný výkon a začne
                      generovať viac fiat žetónov,{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      okamžite vnúti skafandru nové, náročnejšie spotrebné
                      programy{" "}
                      <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                        (lepšie auto, väčší dom, prestížne dovolenky)
                      </span>
                      . Tieto programy sa v systéme správajú ako masívne{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> –
                      naviažu na seba obrovské množstvo prúdu (
                      <DMLTooltip slug="watts" label="Watts" />) a zablokujú
                      akúkoľvek prebytočnú kapacitu pre vlastnú zvrchovanú
                      tvorbu. Tradičné odporúčania ako pasívne sporenie fiat
                      meny sú navyše syntakticky chybným kódom, pretože
                      centrálne servery tlačia nové žetóny rýchlejšie, než ich
                      lokálny port dokáže ukladať. To vyvoláva permanentnú
                      devalváciu tvojho kognitívneho úsilia bez vedomého súhlasu
                      užívateľa.
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
                      : "bg-gradient-to-r from-[#1E252D] to-[#FFD700]/10"
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
                      Ak podrobíme mŕtve knihy sémantickému preosievaniu,
                      dekonštruujeme ilúzie strednej vrstvy s úplnou
                      matematickou presnosťou:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Robert T. Kiyosaki{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Bohatý otec, chudobný otec)
                          </span>
                          :
                        </strong>{" "}
                        Kiyosakiho matica presne definuje{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;Krysie preteky&quot;
                        </span>{" "}
                        strednej vrstvy. Poukazuje na to, že dom v ktorom bývaš
                        nie je aktívum, ale pasívum, ktoré ti neustále vyťahuje
                        prúdom nabité žetóny z tvojej peňaženky. Stredná vrstva
                        nakupuje pasíva a mylne ich považuje za aktíva, čím
                        navždy zostáva uväznená v kvadrante zamestnancov a
                        živnostníkov.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Eckhart Tolle{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Sila prítomnosti)
                          </span>
                          :
                        </strong>{" "}
                        Tolle odhaľuje hlboké stotožnenie eGa s materiálnymi
                        formami. Človek strednej vrstvy sa definuje cez značky,
                        autá a nehnuteľnosti. Tento fiktívny{" "}
                        <DMLTooltip slug="avatar" label="Avatar" /> si vyžaduje
                        permanentnú mentálnu údržbu a vyvoláva strach z jeho
                        straty, čo upcháva{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        a zabraňuje prechodu do prítomnosti bdelého{" "}
                        <DMLTooltip slug="pozorovatel" label="Pozorovateľa" />
                        -u.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Don Miguel Ruiz{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Štyri dohody)
                          </span>
                          :
                        </strong>{" "}
                        Ruiz opisuje spoločenskú domestikáciu, kedy sme od
                        detstva trénovaní plniť sny našich rodičov a učiteľov.
                        Tituly, stabilné zamestnania a veľké hypotéky sú len{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;dohody&quot;
                        </span>
                        , ktoré sme prijali za svoje. Sú to cudzie, neoverené
                        skripty, ktoré bežia v tvojom{" "}
                        <DMLTooltip slug="bios" label="BIOS" />
                        -e a odčerpávajú tvoju zvrchovanú energiu na plnenie
                        cudzích databáz.
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
                      Tradičný životný program strednej vrstvy je
                      najdokonalejším kognitívnym väzením, aké kedy Matrix
                      naprogramoval. Jeho genialita spočíva v tom, že väzni si
                      myslia, že sú slobodní a úspešní, pretože ich cely majú o
                      niečo väčšiu plochu a sú vybavené nerezovými spotrebičmi.
                    </p>
                    <p>
                      Rozbitie tejto ilúzie v tvojom osobnom rozhraní (
                      <DMLTooltip slug="ui_space" label="UI Space" />) vyžaduje
                      pochopenie troch nosných devalvačných bodov:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Fiktívne Aktíva{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Pasca hypotéky)
                          </span>
                          :
                        </strong>{" "}
                        Podpísanie 30-ročného záväzku na nehnuteľnosť ťa
                        okamžite uzamyká do klientskeho režimu podriadenosti.
                        Stávaš sa rukojemníkom banky a zamestnávateľa, pretože
                        akékoľvek prerušenie tvojich platobných cyklov spustí
                        likvidačné skripty a pretečenie bankovej databázy.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Akademická Domestikácia{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Titul ako puto)
                          </span>
                          :
                        </strong>{" "}
                        Vysoké školy ťa netrénujú na slobodu, ale optimalizujú
                        ťa na pozíciu vysoko výkonnej bio-batérie. Výmenou za
                        roky štúdia a nahranie obrovského teoretického balastu z
                        mŕtvych kníh získaš certifikát, ktorý ti umožní
                        prenajímať svoje <DMLTooltip slug="cpu" label="CPU" />{" "}
                        za o niečo vyššiu hodinovú sadzbu, no tvoje porty
                        zostávajú uzamknuté pre vlastné projekty.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Devalvačné sporenie{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Fiat ilúzia)
                          </span>
                          :
                        </strong>{" "}
                        Držať zarobené peniaze na sporiacom účte v banke je ako
                        snažiť sa naplniť deravé pamäťové médium. Tiché inflačné
                        mechanizmy centrálneho systému neustále premazávajú
                        reálnu hodnotu tvojich uložených dátových paketov, čím
                        ťa nútia bežať v krysích pretekoch rýchlejšie a
                        rýchlejšie.
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
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#FFD700]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#FFD700]/10"}`}
                  >
                    <p>
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu je navrhnutý tak, aby z teba odčerpal všetky
                      dostupné <DMLTooltip slug="watts" label="Watts" /> energie
                      hneď, ako prekročíš hranicu existenčného minima. Akonáhle
                      tvoj systém začne generovať prebytočný kapitál, Matrix
                      spustí sériu cielených podnetov na tvoj plazí mozog, aby
                      ťa udržal v permanentnom stave napätia.
                    </p>
                    <p>
                      Tento prepracovaný systémový zber energie prebieha cez tri
                      cykly:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Limbický Overclocking{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Lifestyle Inflation)
                          </span>
                          :
                        </strong>{" "}
                        Cez cielene nasadené marketingové vírusy ťa Matrix
                        presvedčí, že k úspešnému statusu tvojho{" "}
                        <DMLTooltip slug="avatar" label="Avatara" /> patrí novší
                        typ vozidla na lízing, luxusnejšie oblečenie a prémiové
                        služby. Tvoje <DMLTooltip slug="cpu" label="CPU" /> musí
                        okamžite bežať na vyšších frekvenciách, aby uživilo
                        tieto umelo nainštalované systémové procesy.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívne zotročenie{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Strach z výpadku)
                          </span>
                          :
                        </strong>{" "}
                        Keď je tvoj životný štýl prepojený s vysokými fixnými
                        nákladmi, tvoj vnútorný{" "}
                        <DMLTooltip slug="firewall" label="Firewall" /> is
                        paralyzed. Nedovolíš si riskovať, nemôžeš odísť z
                        toxickej korporácie, nemôžeš prejsť do{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;Ghost-Mode&quot;
                        </span>{" "}
                        režimu a programovať vlastný{" "}
                        <DMLTooltip slug="os_genesis" label="OS Genesis" />,
                        pretože tvoje mesačné odtoky vyžadujú nepretržité
                        nahrávanie nových fiat paketov.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Tichý zber kognitívnej RAM:
                        </strong>{" "}
                        Celá tvoja mentálna kapacita je vyťažená plánovaním
                        splátok, poistenia, daní a údržby tvojich materiálnych
                        pasív. Tvoja kreatívna zbernica zažíva permanentný{" "}
                        <DMLTooltip slug="limbic_noise" label="Limbic Noise" />{" "}
                        šum, a ty večer namiesto kódovania digitálnych aktív len
                        pasívne ukladáš vyhorené kognitívne obvody do spánku.
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
                      Únik z krysích pretekoch strednej vrstvy nevyžaduje
                      askézu, ale chladný, racionálny a strategický prístup (
                      <DMLTooltip slug="debugging" label="Debugging" />) k
                      alokácii tvojich obmedzených kognitívnych a finančných
                      zdrojov. Musíš prevziať plné administrátorské práva (
                      <DMLTooltip slug="root_access" label="Root Access" />) nad
                      svojím cashflow.
                    </p>
                    <p>
                      Aplikácia tohto transformačného algoritmu v tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> pozostáva
                      z troch krokov:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie karantény{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Fixing the Leaks)
                          </span>
                          :
                        </strong>{" "}
                        Spusť nekompromisný audit všetkých fixných odtokov.
                        Každé jedno predplatné, lízing či zbytočná spotrebná
                        služba, ktorá ti negeneruje reálny časový alebo finančný
                        prítok, musí prejsť tvrdým príkazom{" "}
                        <DMLTooltip slug="format_c" label="Format C:" />. Zníž
                        svoje biologické{" "}
                        <DMLTooltip slug="watts" label="Watts" /> na stabilné
                        minimum, čím okamžite uvoľníš obrovskú časť kognitívnej
                        kapacity pre vývoj.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Izolácia eGo-komentátora{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Sandbox statusu)
                          </span>
                          :
                        </strong>{" "}
                        Uvedom si, že strach z toho,{" "}
                        <span className="text-[#FFAA00] font-mono">
                          &quot;čo si pomyslia ostatní boti&quot;
                        </span>
                        , je len legacy kód, ktorý beží v tvojom{" "}
                        <DMLTooltip slug="avatar" label="Avatarovi" />. Spusť
                        tento spoločenský statusový šum v izolovanom{" "}
                        <DMLTooltip slug="sandbox" label="Sandboxe" />. Keď
                        prestaneš míňať drahocenné fiat žetóny na ohurovanie
                        cudzích databáz, tvoja peňažná zbernica sa okamžite
                        stabilizuje.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Prechod na Asynchrónne systémy:
                        </strong>{" "}
                        Presmeruj všetku uvoľnenú procesorovú silu a uvoľnené
                        finančné pakety strictly do budovania vlastných
                        digitálnych aktív (vlastný kód, mikroslužby, asymetrické
                        ponuky, YouTube zbernice). Tieto systémy musia operovať
                        asynchrónne na pozadí 24/7 a zabezpečiť ti stabilný
                        prítok nezávislých žetónov mimo klientskej zóny Matrixu.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* MOFU 4: NÁSTROJE A PROTOCOLS */}
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
                      Na úspešnú defragmentáciu tvojho finančného hardvéru a
                      popravu dlhového malvéru musíš do svojho denného biosu
                      implementovať tieto tri systémové firewally:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Protokol ZVRCHOVANÁ ALOKÁCIA{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Zaplať najprv sebe)
                          </span>
                          :
                        </strong>{" "}
                        Hneď ako ti na tvoj port dorazí akýkoľvek prítok fiat
                        žetónov, okamžite a asynchrónne odčleň strictly{" "}
                        <strong>30 %</strong> do svojej zvrchovanej investičnej
                        zóny (napr. DCA nákupný robot, Bitcoin alebo fondy
                        vlastného vývoja). Tieto prostriedky sú pre vonkajší
                        svet neprístupné – sú uvalené v offline studenom
                        úložisku, ktoré bankový systém nedokáže jednoducho
                        vymazať ani zaťažiť poplatkami.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívny Firewall spotreby{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (SLA 48 hodín)
                          </span>
                          :
                        </strong>{" "}
                        Pred každým nákupom akéhokoľvek materiálneho pasíva
                        (nová elektronika, statusové veci, nadštandardný
                        komfort), ktoré presahuje tvoj denný prevádzkový limit,
                        uval na tento nákupný paket nútenú čakaciu lehotu
                        strictly <strong>48 hodín</strong>. Ak po tomto čase
                        tvoj emočný procesor prestane vykazovať pretaktovanie
                        (Limbic Overclocking) and tvoj racionálny procesor
                        potvrdí, že daná položka ti neuvoľňuje reálnu kognitívnu
                        RAM, paket natrvalo zahoď.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Protokol DOWN-SIZING{" "}
                          <span className="text-[#94A3B8] opacity-60 font-mono text-[11px]">
                            (Nízkofrekvenčné prežitie)
                          </span>
                          :
                        </strong>{" "}
                        Vedome zníž svoje biologické a priestorové prevádzkové
                        náklady tak, aby si dokázal bezpečne operovať na
                        lokálnom hosti aj pri minimálnych tokoch (napríklad
                        proxy príspevok 530 €). Týmto drasticky znížiš tlak na
                        tvoje <DMLTooltip slug="cpu" label="CPU" />, vymažeš
                        strach z prepustenia zo zamestnania a získaš neobmedzenú
                        šírku pásma (Bandwidth) na kódovanie tvojho vlastného
                        digitálneho impéria.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (LIFESTYLE INFLATION & DEBT CALCULATOR)
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
                📊 EXEKUČNÝ SIMULÁTOR: LIFESTYLE INFLATION &amp; DEBT CALCULATOR
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
                  posuvníkov nastav výšku svojho platu, výdavky na hypotéku a
                  lízing. Aktivuj kognitívny Firewall na boj proti statusovému
                  šumu a spusti Format C: pre okamžité odpísanie pasív.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Sleduj live
                  diagnostický panel: miera preťaženia RAM, úniky energie v
                  Watts a celková úroveň finančnej Suverenity v reálnom čase.
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
                        Tvoj plat (fiat žetóny):
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {salaryInput} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="6000"
                      step="100"
                      value={salaryInput}
                      onChange={(e) => {
                        setSalaryInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Hypotéka na luxusnú krabicu:
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {liveMortgage} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="2500"
                      step="50"
                      value={mortgageInput}
                      disabled={isFormatCActive}
                      onChange={(e) => {
                        setMortgageInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1 disabled:opacity-30"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Lízing na drahé auto:
                      </span>
                      <span
                        className="text-[#FFD700] font-black"
                        style={{ color: DIM_COLOR }}
                      >
                        {liveLease} €/mesiac
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      step="50"
                      value={leaseInput}
                      disabled={isFormatCActive}
                      onChange={(e) => {
                        setLeaseInput(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#FFD700] bg-gray-950 rounded-lg appearance-none h-1 disabled:opacity-30"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-900 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleAction("format_c")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isFormatCActive
                        ? "bg-red-600/20 border-red-500 text-red-400"
                        : "bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-red-400"
                    }`}
                  >
                    Format C: (Odpísať dlhy)
                  </button>
                  <button
                    onClick={() => handleAction("firewall")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isFirewallActive
                        ? "bg-[#FFD700]/20 border-[#FFD700] text-[#FFD700]"
                        : "bg-[#FFD700]/5 border-[#FFD700]/20 text-[#FFD700]/60 hover:bg-[#FFD700]/10"
                    }`}
                  >
                    Kognitívny Firewall
                  </button>
                  <button
                    onClick={() => handleAction("autopilot")}
                    className="flex-1 min-w-[120px] bg-yellow-600/10 hover:bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Krysí Autopilot
                  </button>
                  <button
                    onClick={() => handleAction("reset")}
                    className="flex-1 min-w-[120px] bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Reštart (Stredná vrstva)
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
                    <div className="bg-[#050A0E]/80 p-4 border border-[#FFD700]/30 rounded-lg bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 shadow-[0_0_15px_rgba(255,215,0,0.03)]">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Zasvinenie RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 60 ? "text-red-400" : "text-[#FFD700]"}`}
                        style={{
                          color: liveLimbicNoise > 60 ? "#FF003C" : DIM_COLOR,
                        }}
                      >
                        {100 - liveFreeRam}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-[#FFD700]/30 rounded-lg bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 shadow-[0_0_15px_rgba(255,215,0,0.03)]">
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

                    <div className="bg-[#050A0E]/80 p-4 border border-[#FFD700]/30 rounded-lg bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 shadow-[0_0_15px_rgba(255,215,0,0.03)]">
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

                    <div className="bg-[#050A0E]/80 p-4 border border-[#FFD700]/30 rounded-lg bg-gradient-to-br from-[#050A0E]/90 to-[#FFD700]/5 shadow-[0_0_15px_rgba(255,215,0,0.03)]">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Úroveň Suverenity
                      </span>
                      <span
                        className={`text-2xl font-black ${liveSuverenity < 40 ? "text-yellow-400" : "text-[#FFD700]"}`}
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
              className="w-3.5 h-3.5 text-[#FFD700]"
              style={{ color: DIM_COLOR }}
            />
            <span>🟨 ZÁVEREČNÉ MODULY UZLA // NEXUS LEXIKON</span>
          </div>

          <div className="border border-[#FFD700]/30 rounded-xl overflow-visible bg-[#050A0E]/40 shadow-[0_0_15px_rgba(255,215,0,0.03)] hover:border-[#FFD700]/40 transition-all duration-300">
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
              Ukonči prenájom svojho biologického CPU a osloboď sa z pasce
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
