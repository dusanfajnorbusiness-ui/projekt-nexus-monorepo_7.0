import React, { useState } from "react";
import {
  Activity,
  BookOpen,
  RotateCcw,
  Power,
  Sliders,
  X,
  Lock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  Terminal,
  Shield,
  Zap,
  BadgeAlert,
  HelpCircle,
} from "lucide-react";
import { TierBadge } from "@shared/components/TierBadge";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalPredFooterNode } from "@main-web/components/GlobalPredFooterNode";
import { GlobalNodeVideo } from "@main-web/components/GlobalNodeVideo";
import { GlobalNodePodcast } from "@main-web/components/GlobalNodePodcast";
import MetaTags from "@shared/components/MetaTags";

// =====================================================================
// 👑 HLAVNÝ KOMPONENT UZLA ID01_NODE_04 (PERSONAL LIFE)
// =====================================================================
export default function Node_ID01_04() {
  const NODE_ID = "ID01-04";
  const TIER_COLOR = "#00FFFF";
  const DIM_COLOR = "#39FF14";

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

  // Simulator States - DE-ROLING SEQUENCE SYSTEM
  const [activeMasks, setActiveMasks] = useState(5);
  const [socialPressure, setSocialPressure] = useState(70);
  const [cognitiveHygiene, setCognitiveHygiene] = useState(40);
  const [localHostTime, setLocalHostTime] = useState(2);
  const [isFirewallActive, setIsFirewallActive] = useState(false);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný screening sociálnej identity. Sleduj preťaženie CPU masiek.",
    "[STATUS] Systém spúšťa viacero paralelných sociálnych rolí. RAM zaznamenáva Memory Leaks.",
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

  // Live calculated values based on sliders for Node 04:
  // - activeMasks (1 to 10)
  // - socialPressure (0 to 100)
  // - cognitiveHygiene (0 to 100)
  // - localHostTime (0 to 12)
  const liveLimbicNoise = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        activeMasks * 8 + socialPressure * 0.5 - cognitiveHygiene * 0.4,
      ),
    ),
  );
  const liveCpuLoad = Math.min(
    100,
    Math.max(
      10,
      Math.round(activeMasks * 10 + socialPressure * 0.3 - localHostTime * 4),
    ),
  );
  const liveFreeRam = Math.max(
    0,
    100 -
      Math.round(
        activeMasks * 6 + socialPressure * 0.4 - cognitiveHygiene * 0.3,
      ),
  );
  const liveWitnessFactor = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        100 -
          activeMasks * 7 -
          socialPressure * 0.3 +
          localHostTime * 5 +
          cognitiveHygiene * 0.2,
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setActiveMasks(1);
      setSocialPressure(10);
      setLocalHostTime(12);
      setCognitiveHygiene(95);
      setIsFirewallActive(true);
      setLogs((prev) => [
        "[SUCCESS] Format C: exekuovaný. Všetky sociálne masky boli odinštalované. Biologický procesor bootuje do čistého stavu BIOSu.",
        `[STATUS] Voľná RAM: ${Math.max(0, 100 - Math.round(1 * 6 + 10 * 0.4 - 95 * 0.3))}% // CPU Load: 10% // Witness Factor: 100%`,
        ...prev,
      ]);
    } else if (actionType === "karantena") {
      setActiveMasks(2);
      setCognitiveHygiene(80);
      setLogs((prev) => [
        "[SUCCESS] Sociálna Persona úspešne izolovaná v Sandboxe. Jej vyťažujúce klientske podprogramy boli uvalené do karantény.",
        ...prev,
      ]);
    } else if (actionType === "firewall") {
      setIsFirewallActive(!isFirewallActive);
      if (!isFirewallActive) {
        setSocialPressure(15);
        setLogs((prev) => [
          "[SUCCESS] Kognitívny Firewall aktivovaný. SQL Injection toxického spoločenského nátlaku a domnienok je zahadzovaná.",
          ...prev,
        ]);
      } else {
        setSocialPressure(80);
        setLogs((prev) => [
          "[WARNING] Firewall bol deaktivovaný. Systém je opäť vystavený vonkajším domestikačným prenosom.",
          ...prev,
        ]);
      }
    } else if (actionType === "autopilot") {
      setActiveMasks(9);
      setSocialPressure(95);
      setLocalHostTime(0);
      setCognitiveHygiene(5);
      setIsFirewallActive(false);
      setLogs((prev) => [
        "[CRITICAL] Spustený plný autopilot. Komentátor Parazit prevzal Root Access. Skafander hlási masívne preťaženie Watts.",
        ...prev,
      ]);
    } else if (actionType === "reset") {
      setActiveMasks(5);
      setSocialPressure(70);
      setCognitiveHygiene(40);
      setLocalHostTime(2);
      setIsFirewallActive(false);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu.",
        "[STATUS] RAM vyťaženie obnovené, indexy masiek v bežnom prevádzkovom tolerančnom pásme.",
      ]);
    }
  };
  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID01_04 (ESLINT FIX)
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
  // 📚 JAZYKOVÁ DATABÁZA DML v6.0 (31 Slov)
  // =====================================================================
  const termsData = {
    cpu: {
      term: "CPU",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "biologický procesor a mozog",
      tooltip:
        "Riadiace stredisko biologického skafandra zodpovedné za spracovanie vnemov, ktoré sa pri zahltení myšlienkami prehrieva a znižuje kognitívny výkon.",
    },
    ram: {
      term: "RAM",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "kapacita tvojej krátkodobej pozornosti",
      tooltip:
        "Operačná pamäť ľudského vedomia v prítomnom okamihu. Každá nespracovaná obava a otvorená úloha na pozadí drasticky znižuje jej voľnú kapacitu.",
    },
    proxy_server: {
      term: "Proxy server",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "sprostredkovateľský server / ochrana identity",
      tooltip:
        "Izolované sieťové rozhranie slúžiace ako bezpečná zásterka na maskovanie skutočných zámerov Architekta pred dohľadom štátnych databáz.",
    },
    os_genesis: {
      term: "OS Genesis",
      category: 13,
      categoryType: "home_ui_term",
      translation: "nový operačný systém vedomia",
      tooltip:
        "Zvrchovaný softvérový ekosystém pre ľudskú myseľ, ktorý nahrádza poškodené spoločenské presvedčenia za čistú prítomnosť a flow.",
    },
    pozorovatel: {
      term: "Pozorovateľ",
      category: 13,
      categoryType: "home_ui_term",
      translation: "bdelé vedomie a tichý svedok",
      tooltip:
        "Primárny stav prítomného Bytia, ktoré ticho a bez emočného odporu sleduje všetky myšlienkové procesy a telesné vnemy.",
    },
    avatar: {
      term: "Avatar",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "spoločenská identita a eGo-maska",
      tooltip:
        "Umelý herný profil vytvorený v procese domestikácie, slúžiaci na operovanie v sociálnych štruktúrach Matrixu.",
    },
    firewall: {
      term: "Firewall",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "kognitívny obranný filter",
      tooltip:
        "Bezpečnostný systém mysle, ktorý nepretržite filtruje prichádzajúce emočné pakety z okolia a zahadzuje deštruktívne skripty.",
    },
    skafander: {
      term: "Skafander",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "biologické telo a neurologický systém",
      tooltip:
        "Fyzické hardvérové rozhranie tvojej entity. Vyžaduje bezchybnú údržbu, optimalizovaný spánok a čistú energiu na zamedzenie pádov.",
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
    legacy_code: {
      term: "Legacy Code",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "staré prežité vzorce správania",
      tooltip:
        "Zastarané podvedomé programy nainštalované okolím počas detstva, ktoré nútia biologického nosiča opakovať deštruktívne reakcie.",
    },
    format_c: {
      term: "Format C:",
      category: 13,
      categoryType: "home_ui_term",
      translation: "úplné formátovanie a reset vedomia",
      tooltip:
        "Radikálny očistný protokol určený na úplný výmaz neužitočnej podvedomej pamäte a obnovu systému do nulového bodu.",
    },
    sandbox: {
      term: "Sandbox",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "izolované testovacie prostredie mysle",
      tooltip:
        "Chránený kognitívny priestor, v ktorom sa dajú deštruktívne myšlienky pozorovať a analyzovať bez rizika nakazenia celého hardvéru.",
    },
    botnet: {
      term: "Botnet",
      category: 2,
      categoryType: "IT pojem / hardvér",
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
      categoryType: "IT pojem / hardvér",
      translation: "zakázaný / zablokovaný komunikačný kanál",
      tooltip:
        "Sieťový kanál, ktorý je trvalo vypnutý pre zamedzenie prístupu toxického vplyvu okolia a zachovanie integrity vlastného systému.",
    },
    network_packet: {
      term: "Network Packet",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "komunikačná jednotka / prenášaná správa",
      tooltip:
        "Základný blok informácií prichádzajúci z vonkajšieho sveta, ktorý sa snaží infiltrovať tvoje kognitívne filtre.",
    },
    watts: {
      term: "Watts",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "biologická energia a životná sila",
      tooltip:
        "Množstvo elektrickej a vitálnej energie, ktorú má tvoj neurologický systém k dispozícii pre denné operácie a hlbokú tvorbu.",
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
        "Analytický proces odhaľovania skrytých chýb, tráum a poškodených kódov v podvedomí s cieľom obnoviť plynulé fungovanie.",
    },
    local_host: {
      term: "Local Host",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "lokálny uzavretý systém bytia",
      tooltip:
        "Vnútorné bezpečné rozhranie tvojej entity odpojené od sieťových prepojení, kde prebieha obnova a stabilizácia.",
    },
    cache_memory: {
      term: "Cache Memory",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "vyrovnávacia pamäť minulých emócií",
      tooltip:
        "Dočasné kognitívne úložisko, v ktorom mozog ukladá nedávne emočne nabité zážitky, čo pri zanesení spôsobuje permanentný stres.",
    },
    karantena: {
      term: "Karanténa",
      category: 13,
      categoryType: "home_ui_term",
      translation: "izolácia škodlivých myšlienkových skriptov",
      tooltip:
        "Bezpečné odrezanie a znefunkčnenie poškodeného myšlienkového vzorca v podvedomí, aby neparalyzoval fungovanie organizmu.",
    },
    memory_leaks: {
      term: "Memory Leaks",
      category: 12,
      categoryType: "personal_ui_term",
      translation: "nekontrolované straty mentálnej energie",
      tooltip:
        "Neustály únik kognitívnej kapacity spôsobený nedoriešenými vzťahmi a toxickými domnienkami, ktoré bežia na pozadí.",
    },
    bios: {
      term: "BIOS",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "čisté prvotné vedomie na pozadí hardvéru",
      tooltip:
        "Základný nízkoúrovňový operačný kód biologického nosiča, v ktorom neexistujú žiadne sociálne dogmy ani parazitické programy.",
    },
    social_engine: {
      term: "Social Engine",
      category: 2,
      categoryType: "IT pojem / hardvér",
      translation: "systém spoločenskej manipulácie",
      tooltip:
        "Súbor masívnych psychologických a technologických mechanizmov navrhnutý na tvarovanie a unifikáciu ľudského správania.",
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
  };

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
              <div className="flex justify-between items-start border-b border-gray-800 pb-2 mb-2 text-[10px] font-mono">
                <span
                  className={`font-black uppercase tracking-widest ${catStyle.text}`}
                >
                  {catStyle.name}
                </span>
                <span className="text-gray-500 font-bold">
                  TIER {termData.category}
                </span>
              </div>
              <h4 className="text-sm font-black text-white uppercase mb-1 tracking-tight">
                {termData.term}
              </h4>
              <p className="text-gray-400 font-mono text-[10px] leading-relaxed mb-2 pb-2 border-b border-gray-900/60">
                <span className="text-gray-500 block font-bold mb-0.5">
                  Preklad do DML v6.0:
                </span>
                <strong className="text-white">{termData.translation}</strong>
              </p>
              <p className="text-gray-300 font-mono text-[11px] leading-normal">
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
        title="ID01 IDENTITY-CORE // Personal Life"
        description="Analýza tvojich spoločenských rolí a prepínanie masiek."
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
              <Shield className="w-3.5 h-3.5" />
              NEXUS-CORE_2Mb V6.1.9
            </span>
            <span className="hidden md:inline text-gray-700">|</span>
            <span className="hidden md:inline font-bold">
              PORT: personal.projekt-nexus.sk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
              <span>
                DIMENSION:{" "}
                <strong className="text-[#39FF14] font-black">
                  ID01 - IDENTITY-CORE
                </strong>
              </span>
            </div>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500">THEME:</span>
            <button
              onClick={handleThemeToggle}
              className={`px-3 py-1 border transition-all duration-200 uppercase tracking-widest text-[10px] font-black ${
                isDarkMode
                  ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/5 shadow-[0_0_10px_rgba(57,255,20,0.15)]"
                  : "border-gray-700 text-gray-400 bg-transparent hover:border-gray-500"
              }`}
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
        {/* Background gradient layout (Anti-Glare / DML v5.2) */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15"
              : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"
          }`}
        />

        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs tracking-widest text-[#00FFFF] bg-[#00FFFF]/10 border border-[#00FFFF]/30 px-2 py-0.5 rounded font-black uppercase">
                FREE TIER
              </span>
              <span className="text-gray-500 font-mono text-xs">
                Node_ID01_04 // Personal Life
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              PERSONAL LIFE
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              04. Personal Life (Tvoje spoločenské roly a prepínanie masiek).
              Analýza a uvalenie karantény na cudzie očakávania.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs text-gray-500 gap-1.5">
            <span>PORT: personal.projekt-nexus.sk</span>
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
              🚨 ERROR LOG // IDENTITY_OVERLOAD // STATUS: CRITICAL
            </h2>
          </div>

          <blockquote className="font-mono text-sm leading-relaxed text-gray-300 italic border-l-4 border-red-500 pl-4 py-1 space-y-4">
            <p>
              &quot;Každý deň tvoj biologický{" "}
              <DMLTooltip slug="skafander" label="Skafander" /> spúšťa desiatky
              neoptimalizovaných podprogramov a masiek – tvoje spoločenské roly.
              Hráš vzorného zamestnanca, milujúceho partnera, slušného občana
              alebo úspešného podnikateľa. Každá táto{" "}
              <DMLTooltip slug="persona" label="Persona" /> je len izolovaným,
              umelým herným skinom, ktorý spotrebováva enormný výpočtový výkon
              tvojho <DMLTooltip slug="cpu" label="CPU" />. Ak neustále prepínaš
              tieto masky len preto, aby si zapadol a uspokojil vonkajšie uzly
              Matrixu, tvoja vlastná operačná{" "}
              <DMLTooltip slug="ram" label="RAM" /> trpí masívnym preťažením a
              vznikajú permanentné{" "}
              <DMLTooltip slug="memory_leaks" label="Memory Leaks" />. Bežíš na{" "}
              <DMLTooltip slug="legacy_code" label="Legacy Code" /> nevedomého
              divadla. Je čas na rázne systémové{" "}
              <DMLTooltip slug="debugging" label="Debugging" /> tvojho
              sociálneho správania, uvalenie karantény na cudzie očakávania a
              návrat k čistému Bytiu bez masiek.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID01_04_personal_life.md</span>
            <span className="font-bold text-red-400">
              — Dušan Fajnor (@zombieSergeant), CyberTech Architect
            </span>
          </div>
        </section>

        {/* =====================================================================
            4. VIDEO INJEKTOR
            ===================================================================== */}
        <section className="mb-12 rounded-xl overflow-hidden border-2 border-[#39FF14]/30 shadow-lg">
          <div className="bg-[#050A0E] py-2 px-4 border-b border-gray-800 flex justify-between items-center text-xs">
            <span className="text-[#39FF14] font-bold font-mono uppercase tracking-widest flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-[#39FF14]" />
              GlobalNodeVideo: Video Injektor
            </span>
            <span className="text-gray-500 font-mono">
              id01_node_04_personal_projekty_video
            </span>
          </div>
          <GlobalNodeVideo nodeId="pkIdSHPusM8" dimColor="green" />
        </section>

        {/* =====================================================================
            5A. INTERAKTÍVNE PREPÍNAČE (Live Terminal vs Simulator)
            ===================================================================== */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => handleTabChange("chat")}
            className={`px-4 py-2 font-mono text-xs font-black uppercase tracking-widest border transition-all duration-200 flex items-center gap-2 ${
              activeTab === "chat"
                ? "bg-[#39FF14]/10 border-[#39FF14] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]"
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
                ? "bg-[#39FF14]/10 border-[#39FF14] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]"
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
            {/* 👁️ TRINITY PERSPECTIVE (Trojitý protokol vnímania) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5 text-[#39FF14]" />
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
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10 hover:border-[#39FF14]/30"}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    🟢 [ ARCHITECT QUOTE ] (Prežitá Pravda)
                  </span>
                  {openTrinity.architect ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openTrinity.architect && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Najväčším kognitívnym vyčerpaním v mojom živote nebola
                      samotná práca, ale nepretržité, nútené hranie rolí.
                      Sprevádzala ma neustála úzkosť, strach zo straty masky
                      úspešného chlapca a snaha vyhovieť všetkým toxickým uzlom
                      naokolo. Moje biologické obvody boli tak prehriate, že to
                      vyústilo do kolapsu nervovej sústavy, kedy mi štát
                      pridelil ochranný invalidný dôchodok a do databázy zapísal
                      kód schizofrénie.
                    </p>
                    <p>
                      Až v absolútnom tichu a izolácii v mojej izbe na
                      Spartakovskej ulici v Trnave som si uvedomil, akú hru som
                      to hral. Všetky tie roly a masky neboli mojou identitou.
                      Bola to len unifikovaná{" "}
                      <DMLTooltip slug="persona" label="Persona" /> – nanútený
                      softvér Matrixu. Použil som invalidný dôchodok ako tichý,
                      ochranný{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -om, aby som získal čas, vypol zbytočné sociálne procesy
                      na pozadí, odhodil{" "}
                      <DMLTooltip slug="mrtve_knihy" label="Mŕtve knihy" /> a
                      začal stavať nekompromisné jadro{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />. Moja
                      sloboda začala, keď som všetky tie divadelné roly navždy
                      vymazal zo systému a zostal iba tichým, bdelým svedkom.
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
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    🤖 [ SYSTEM: AI GEMINI ] (Kybernetická Analýza)
                  </span>
                  {openTrinity.ai ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openTrinity.ai && (
                  <div
                    className={`p-6 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Z hľadiska kognitívnej architektúry fungujú sociálne roly
                      ako unifikované balíky inštrukcií –{" "}
                      <DMLTooltip slug="persona" label="Persona" />. Keď sa
                      biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> ocitne v
                      interakcii s inými entitami,{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      systému vyžaduje spustenie špecifického rozhrania.
                      Biologická jednotka prepína medzi rôznymi maskami, z
                      ktorých každá vyžaduje odlišné smerovanie dátových tokov.
                    </p>
                    <p>
                      Tento permanentný stav prepínania a simulácie úspešnosti
                      spotrebováva kritické vitálne{" "}
                      <DMLTooltip slug="watts" label="Watts" /> energie a
                      preťažuje výpočtové kapacity{" "}
                      <DMLTooltip slug="cpu" label="CPU" />. Každá nedoriešená
                      sociálna rola a snaha zapáčiť sa okoliu vytvára fatálne{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> v
                      operačnej <DMLTooltip slug="ram" label="RAM" /> pamäti, čo
                      sa na fyzickej úrovni prejavuje ako chronický stres,
                      insomnia a vyhorenie. Jedinou cestou na zachovanie
                      hardvérovej integrity je izolácia týchto bežiacich masiek
                      v karanténnom prostredí{" "}
                      <DMLTooltip slug="sandbox" label="Sandbox" /> a obnovenie
                      základného kódexu <DMLTooltip slug="bios" label="BIOS" />,
                      v ktorom neexistujú žiadne sociálne nároky.
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
                  className={`w-full p-4 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    🪞 [ AUDIT &amp; KOMPARÁCIA ] (Mŕtve knihy)
                  </span>
                  {openTrinity.audit ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openTrinity.audit && (
                  <div
                    className={`p-6 text-sm leading-relaxed font-mono space-y-6 border-t border-gray-800 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p className="text-gray-300">
                      Defragmentácia psychologického a gnostického dedičstva
                      jasne potvrdzuje, že potlačenie autentického bytia na úkor
                      sociálnej fasády je hlavným patogénom ľudského vedomia:
                    </p>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        1. C.G. Jung (Archetypy a kolektívne podvedomie)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Jung priamo definuje pojem &#39;Persona&#39; ako výsek
                        kolektívnej duše – masku, ktorú si jedinec nasadzuje pri
                        styku so svetom. Jung varuje, že stotožnenie sa s
                        Personou vedie k hlbokému odcudzeniu sa vlastnému Ja
                        (Self) a vyvoláva ťažké kognitívne neurózy.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        2. Eckhart Tolle (Sila prítomného okamihu)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Tolle popisuje prepínanie masiek ako &#39;stotožnenie sa
                        s úlohami&#39; (role-playing). Tvrdí, že kedykoľvek sa
                        stotožníš s nejakou rolou, tvoja prítomnosť sa stráca
                        pod nánosom mentálnych konceptov v tvojej{" "}
                        <DMLTooltip slug="ram" label="RAM" />.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        3. Don Miguel Ruiz (Hlas poznania)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Ruiz vysvetľuje, ako nás spoločnosť učí hrať divadlo.
                        Každá <DMLTooltip slug="persona" label="Persona" /> je
                        podľa neho len falošným obrazom seba samého, ktorý
                        používame na to, aby nás okolitý{" "}
                        <DMLTooltip slug="botnet" label="Botnet" /> prijal.
                        Odhodenie tejto masky je podmienkou pre spustenie
                        skutočnej slobody.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 🧩 HLAVNÝ OBSAH - DEKOMPRESIA (FÁZA MOFU - Painkiller) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <BookOpen className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>🧩 HLAVNÝ OBSAH - DEKOMPRESIA // FÁZA MOFU</span>
              </div>

              {/* MOFU 1: ANATÓMIA KONCEPTU */}
              <div className="border border-gray-800 rounded-xl overflow-visible bg-[#050A0E]/40">
                <button
                  onClick={() => {
                    setOpenMofu({ ...openMofu, anatomy: !openMofu.anatomy });
                    triggerSound("click");
                  }}
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-t-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>1. Anatómia konceptu (Rozbitie ilúzie)</span>
                  {openMofu.anatomy ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.anatomy && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Sociálne roly sú len softvérové záplaty, ktoré ti Matrix
                      nainštaloval, aby tvoj{" "}
                      <DMLTooltip slug="avatar" label="Avatar" /> bezproblémovo
                      komunikoval s herným prostredím. Sú dôležité ako dočasné
                      komunikačné porty, no nesmieš ich zamieňať s vlastným{" "}
                      <DMLTooltip slug="bios" label="BIOS" />
                      -om. V tvojom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> sa však
                      často odohráva fatálna chyba:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Strata identity:
                        </strong>{" "}
                        Keď prídeš domov, tvoj autopilot pokračuje v behu.
                        Neodložíš masku. Trpíš ilúziou, že ty sám si tou
                        úspešnou alebo trpiacou maskou (
                        <DMLTooltip slug="persona" label="Persona" />
                        ).
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívne preťaženie:
                        </strong>{" "}
                        Každá maska si vyžaduje špecifické správanie, pamäť a
                        emócie. Neustále prispôsobovanie sa a strach zo zlyhania
                        v danej roli ti odčerpávajú drahocennú{" "}
                        <DMLTooltip slug="ram" label="RAM" /> a preťažujú
                        procesor <DMLTooltip slug="cpu" label="CPU" />.
                      </li>
                    </ul>
                    <p className="pt-2 text-gray-400 text-xs">
                      Skutočné rozbitie tejto ilúzie nastáva, keď od seba
                      oddelíš herného Avatara, ktorý komunikuje v sociálnom
                      rozhraní, od bdelého{" "}
                      <DMLTooltip slug="pozorovatel" label="Pozorovateľ" />
                      -a, ktorý ticho sleduje celú túto hru s čistým bdelým
                      odstupom.
                    </p>
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>
                    2. Mechanizmus Matrixu (Ako Matrix vysáva tvoju energiu)
                  </span>
                  {openMofu.mechanism ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.mechanism && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Matrix ako centralizovaný{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      profituje z tvojho sociálneho vyčerpania. Udržiava ťa v
                      stave neustáleho tlaku, aby si hral svoje roly dokonale.
                      Každá tvoja snaha zapôsobiť, strach z odmietnutia a hnev z
                      nepochopenia vyvolávajú enormný energetický výboj (
                      <DMLTooltip slug="watts" label="Watts" />
                      ), ktorý systém okamžite pohltí prostredníctvom
                      unifikovanej siete{" "}
                      <DMLTooltip slug="botnet" label="Botnet" />.
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Proces zberu prebieha v troch krokoch:
                    </p>
                    <ol className="space-y-3 list-decimal pl-6 text-xs text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zavedenie štandardov:
                        </strong>{" "}
                        Matrix ti cez{" "}
                        <DMLTooltip slug="mrtve_knihy" label="Mŕtve knihy" /> a
                        médiá nainštaluje vzorce pre &#39;ideálne&#39;
                        fungovanie v každej roli.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Permanentný monitoring:
                        </strong>{" "}
                        Tvoja myseľ (Komentátor) neustále sleduje, či tvoj{" "}
                        <DMLTooltip slug="avatar" label="Avatar" /> spĺňa tieto
                        štandardy, čo vháňa do tvojich obvodov nepretržitý
                        kognitívny hluk –{" "}
                        <DMLTooltip slug="limbic_noise" label="Limbic Noise" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zber emočných paketov:
                        </strong>{" "}
                        Každá tvoja reakcia na mienku iných uzlov je odoslaná
                        ako nešifrovaný{" "}
                        <DMLTooltip
                          slug="network_packet"
                          label="Network Packet"
                        />{" "}
                        priamo do systému, čím strácaš životnú silu a uviazneš v
                        kognitívnom preťažení.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>
                    3. Proces Transformácie / Aplikácia v Personal UI Space
                  </span>
                  {openMofu.transformation ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.transformation && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Oslobodenie sa od tyranskej vlády sociálnych masiek
                      vyžaduje radikálne{" "}
                      <DMLTooltip slug="debugging" label="Debugging" /> and
                      optimalizáciu tvojho správania. Musíš sa naučiť prepínať
                      masky vedome, bez toho, aby si s nimi splýval. Tvoj{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> musí
                      prejsť na zvrchovaný{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />.
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Postup transformácie v tvojom osobnom rozhraní prebieha
                      nasledovne:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Detekcia stotožnenia:
                        </strong>{" "}
                        Keď sa pristihneš pri tom, že v komunikácii s niekým
                        hráš rolu (napr. sa snažíš byť umelo milý, múdry alebo
                        ukrivdený), okamžite spusti interné preskenovanie
                        procesov.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Presun do Sandboxu:
                        </strong>{" "}
                        S tichým úsmevom presmeruj všetku mentálnu silu (
                        <DMLTooltip slug="ram" label="RAM" />) na vnímanie
                        fyzických pocitov{" "}
                        <DMLTooltip slug="skafander" label="Skafander" />
                        -a (dych, váha tela). Tým okamžite izoluješ Personu v
                        bezpečnom <DMLTooltip slug="sandbox" label="Sandbox" />
                        -e a odoberieš jej kognitívne napájanie.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Asynchrónny flow-state:
                        </strong>{" "}
                        Konaj z bdelého, prítomného bytia. Používaj masky len
                        ako dočasné komunikačné linky na ochranu svojho vnútra,
                        no tvoj{" "}
                        <DMLTooltip slug="root_access" label="Root Access" />{" "}
                        musí zostávať v rukách bdelého svedka. Tvoj{" "}
                        <DMLTooltip slug="legacy_code" label="Legacy Code" />{" "}
                        nevedomého divadla sa postupne rozpustí.
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
                  className={`w-full p-5 flex justify-between items-center text-left font-mono text-xs uppercase font-black text-gray-300 rounded-b-xl transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10"}`}
                >
                  <span>4. Nástroje a Protokoly (Tvoj Antivírus)</span>
                  {openMofu.protocols ? (
                    <ChevronUp className="w-4 h-4 text-[#39FF14]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#39FF14]" />
                  )}
                </button>
                {openMofu.protocols && (
                  <div
                    className={`p-6 md:p-8 font-mono text-sm leading-relaxed border-t border-gray-800 space-y-4 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D]/50 to-[#39FF14]/10"}`}
                  >
                    <p>
                      Na ochranu pred nevedomým zotrením hraníc medzi vedomím a
                      sociálnou Personou musíš denne spúšťať tri kognitívne
                      protokoly:
                    </p>
                    <ol className="space-y-4 pl-6 list-decimal text-xs">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Ranný INDIVIDUATION Protokol:
                        </strong>{" "}
                        Hneď po prebudení nevháňaj sociálne interakcie do pamäte{" "}
                        <DMLTooltip slug="ram" label="RAM" />. Ponechaj svoj{" "}
                        <DMLTooltip slug="local_host" label="Local Host" /> v
                        tichu and zadefinuj ranný ochranný kód:{" "}
                        <em className="text-gray-400 font-bold font-mono">
                          &quot;Ja nie som maska, som bdelá prítomnosť.&quot;
                        </em>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívny Firewall (Blokovanie sociálnej
                          infiltrácie):
                        </strong>
                        <ul className="space-y-2 pl-4 list-disc mt-2 text-gray-300">
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Udržuj Banned Port zatvorený:
                            </strong>{" "}
                            Chráň svoj systém pred klebetami, toxickými názormi
                            iných entít and ich lokalizovanými chybami. Tvoj{" "}
                            <DMLTooltip slug="firewall" label="Firewall" /> ich
                            zahadzuje bez analýzy.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Neber si nič osobne:
                            </strong>{" "}
                            Pochop, že správanie iných je len ich herný skript,
                            ktorý nemá prístup k tvojmu Rootu.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Nevytváraj si domnienky:
                            </strong>{" "}
                            Blokuj zbytočné simulácie sociálnych scenárov v{" "}
                            <DMLTooltip slug="cpu" label="CPU" />.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Večerný DE-ROLING Protokol:
                        </strong>{" "}
                        Pred spánkom spusti kompletné vyzlečenie všetkých
                        masiek. Vymaž celú vyrovnávaciu pamäť{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />.
                        Odlož všetky role, plány a fiktívne obavy z budúcnosti
                        do podvedomej{" "}
                        <DMLTooltip slug="karantena" label="Karanténa" />
                        -y, čím predídeš vzniku{" "}
                        <DMLTooltip
                          slug="memory_leaks"
                          label="Memory Leaks"
                        />{" "}
                        počas noci. Vstúp do spánku ako čisté, prázdne vedomie
                        bez akýchkoľvek spoločenských štítkov.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (AVATAR RE-ALIGNMENT)
            ===================================================================== */}
        {activeTab === "simulator" && (
          <section className="border-2 border-[#39FF14]/30 bg-[#050A0E]/60 p-6 md:p-8 rounded-xl font-mono relative">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setSimulatorHelp(!simulatorHelp)}
                className="p-1.5 border border-gray-800 hover:border-gray-600 rounded bg-[#050A0E] transition-all"
                title="Simulátor pomocník"
              >
                <HelpCircle className="w-4 h-4 text-[#39FF14]" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6 border-b border-gray-900 pb-3">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
              <h2 className="text-sm font-black uppercase text-white">
                📊 EXEKUČNÝ SIMULÁTOR: AVATAR DE-ROLING &amp; KOGNITÍVNY
                SCREENING
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér live analyzuje kmitočet a straty vedomia biologického
                  skafandra na základe zaťaženia RAM, intenzity komentátora a
                  okolitého domestikačného tlaku masiek.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong>{" "}
                  Posuvníkmi simuluj reálny denný nápor a kognitívnu hygienu.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Vypočítané
                  indexy jasne odhalia úniky energie a mieru prítomnosti vedomia
                  nad autopilotom masky.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#39FF14]" />
                  Nastavenie systémových limitov
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Počet aktívnych sociálnych masiek:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {activeMasks} masiek
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={activeMasks}
                      onChange={(e) => {
                        setActiveMasks(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Domestikačný tlak okolia:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {socialPressure}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={socialPressure}
                      onChange={(e) => {
                        setSocialPressure(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Kognitívna hygiena (Firewall):
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {cognitiveHygiene}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={cognitiveHygiene}
                      onChange={(e) => {
                        setCognitiveHygiene(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Denný čas na Local Hoste:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {localHostTime} h/deň
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="12"
                      value={localHostTime}
                      onChange={(e) => {
                        setLocalHostTime(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
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
                    onClick={() => handleAction("karantena")}
                    className="flex-1 min-w-[120px] bg-[#00B4D8]/10 hover:bg-[#00B4D8]/20 border border-[#00B4D8]/30 text-[#00B4D8] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Karanténa Persony
                  </button>
                  <button
                    onClick={() => handleAction("firewall")}
                    className={`flex-1 min-w-[120px] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all border ${
                      isFirewallActive
                        ? "bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14]"
                        : "bg-[#39FF14]/5 border-[#39FF14]/20 text-[#39FF14]/60 hover:bg-[#39FF14]/10"
                    }`}
                  >
                    Toltécky Firewall
                  </button>
                  <button
                    onClick={() => handleAction("autopilot")}
                    className="flex-1 min-w-[120px] bg-yellow-600/10 hover:bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Avatar Autopilot
                  </button>
                </div>
              </div>

              {/* HUD / LIVE DATA SECTION */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2 mb-4">
                    <Activity className="w-3.5 h-3.5 text-[#39FF14]" />
                    SCREENING INDEX // DIAGNOSTIKA SKAFANDRA
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Limbic Noise šum
                      </span>
                      <span
                        className={`text-2xl font-black ${liveLimbicNoise > 60 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveLimbicNoise}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Voľná Kognitívna RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveFreeRam < 40 ? "text-yellow-400" : "text-[#39FF14]"}`}
                      >
                        {liveFreeRam}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Preťaženie CPU
                      </span>
                      <span
                        className={`text-2xl font-black ${liveCpuLoad > 70 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveCpuLoad}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Faktor Svedka
                      </span>
                      <span
                        className={`text-2xl font-black ${liveWitnessFactor < 50 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveWitnessFactor}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATRIX SYSTEM CONSOLE LOGS */}
                <div className="flex-1 bg-black/90 rounded-lg p-4 border border-gray-900 flex flex-col justify-between h-48 overflow-hidden font-mono text-[10px] leading-relaxed">
                  <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-1.5 mb-2">
                    <span>DIAG_LOG_MATRIX_CONSOLE // IDENTITY</span>
                    <button
                      onClick={() => handleAction("reset")}
                      className="hover:text-white flex items-center gap-1 uppercase text-[8px] border border-gray-800 px-1 rounded bg-[#050A0E]"
                    >
                      <RotateCcw className="w-2.5 h-2.5" /> Reset
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-thin scrollbar-thumb-gray-800">
                    {logs.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          log.startsWith("[CRITICAL]")
                            ? "text-red-400 font-bold animate-pulse"
                            : log.startsWith("[WARNING]")
                              ? "text-yellow-400 font-medium"
                              : log.startsWith("[SUCCESS]")
                                ? "text-[#39FF14] font-black"
                                : "text-gray-400"
                        }
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
            <BookOpen className="w-3.5 h-3.5 text-[#39FF14]" />
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
                  ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15 hover:border-[#39FF14]/40"
                  : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10 hover:border-[#39FF14]/30"
              }`}
            >
              <span className="flex items-center gap-2 text-white">
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-[#39FF14] ${isLexikonOpen ? "animate-pulse" : ""}`}
                />
                💠 EXTRACT Z NEXUS LEXIKÓNU (PREKLADOVÝ KĽÚČ V6.5)
              </span>
              {isLexikonOpen ? (
                <ChevronUp className="w-4 h-4 text-[#39FF14]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#39FF14]" />
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

                {/* Stolový lexikón skrytý na mobiloch */}
                <div className="hidden md:block space-y-8">
                  {activeCategoriesList.map((cat) => {
                    const catTerms = Object.keys(termsData)
                      .filter((key) => termsData[key].category === cat.id)
                      .map((key) => termsData[key]);

                    const catStyle = categoryStyles[cat.id];

                    return (
                      <div key={cat.id} className="space-y-4">
                        {/* Hlavička kategórie */}
                        <div
                          className={`p-4 rounded-lg bg-gradient-to-r ${isDarkMode ? "from-[#050A0E] to-[#39FF14]/10" : "from-[#1E252D]/40 to-[#39FF14]/5"} border ${catStyle.border} shadow-sm`}
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
        {/* 🎙️ DOPLNKOVÝ AUDIO MODUL */}
        <section className="my-12 rounded-xl overflow-hidden border border-gray-800 bg-[#050A0E]/40 p-6 relative z-10">
          <div className="text-xs text-[#BF00FF] font-bold font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BF00FF] animate-ping" />
            <span>🎙️ Doplnkový Audio Modul: Inštalačný podcast</span>
          </div>
          <GlobalNodePodcast nodeId={NODE_ID} dimColor="#BF00FF" />
        </section>

        {/* =====================================================================
            🚀 UPLINK TERMINAL (Vykonaj akciu hneď teraz!)
            ===================================================================== */}
        <section
          className={`mt-16 border-2 border-[#39FF14]/30 rounded-xl p-8 text-center relative z-10 font-mono space-y-6 transition-all duration-300 ${isDarkMode ? "bg-gradient-to-r from-[#0B0F15] to-[#39FF14]/15" : "bg-gradient-to-r from-[#1E252D] to-[#39FF14]/10 hover:border-[#39FF14]/30"}`}
        >
          {/* Bouncing Lock strictly v neónovo zelenej farbe dimenzie #39FF14 */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[#050A0E] p-3 rounded-full border-2 animate-bounce shadow-[0_0_15px_rgba(57,255,20,0.4)]"
              style={{ borderColor: DIM_COLOR }}
            >
              <Lock className="w-6 h-6" style={{ color: DIM_COLOR }} />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 pt-2">
            <span className="text-[10px] font-black uppercase text-white tracking-widest bg-white/10 px-3 py-1 rounded">
              🚀 UPLINK TERMINAL ENGAGED
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-tight">
              [ SYSTEM UPLINK ENGAGED // ALL SYSTEMS STATUS: READY ]
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Tvoj klientsky procesor beží na limite a tvoj hardvér je
              infikovaný starým, nefunkčným kódom Matrixu. Prestaň prenášať
              svoju drahocennú energiu cudzím programom a zbytočným obavám. Je
              čas na radikálny update.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto text-left border-t border-gray-800/40 pt-4 space-y-2">
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🔑 INICIALIZOVAŤ SPOJENIE: AKTIVOVAŤ NEXUS PRO KEY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Odomkni kompletnú FREE/PRO vrstvu vedomostných uzlov, vyčisti
                  kognitívnu RAM a spusti trvalé odinštalovanie Komentátora
                  Parazita.
                </em>
              </p>
              <p>
                *{" "}
                <strong style={{ color: DIM_COLOR }}>
                  [ 🌐 PREVZIAŤ ROOT ACCESS: VSTÚPIŤ DO BRÁNY ]
                </strong>{" "}
                {"->"}{" "}
                <em>
                  Vstúp do hlavného terminálu OS Genesis, prevezmi kontrolu nad
                  svojím Skafandrom a naštartuj asynchrónny, stabilný cashflow.
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

        {/* =====================================================================
            6. GLOBAL PRED-FOOTER & FOOTER
            ===================================================================== */}
        <footer className="w-full border-t border-gray-900 pt-8 mt-12">
          <GlobalPredFooterNode nodeId={NODE_ID} tierColor={TIER_COLOR} />
        </footer>
      </main>
    </div>
  );
}
