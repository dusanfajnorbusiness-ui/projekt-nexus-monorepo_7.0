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
// 👑 HLAVNÝ KOMPONENT UZLA ID01_NODE_03 (NEPREŽITÁ PRAVDA)
// =====================================================================
export default function Node_ID01_03() {
  const NODE_ID = "ID01-03";
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

  // Simulator States - BIOS PURITY & DEFRAGMENTER
  const [teoriaVolume, setTeoriaVolume] = useState(80);
  const [unlearningFactor, setUnlearningFactor] = useState(20);
  const [bdelostPercent, setBdelostPercent] = useState(30);
  const [kognitivnyPost, setKognitivnyPost] = useState(1);

  const [logs, setLogs] = useState([
    "[OK] Inicializovaný screening autopilota. Sleduj limity kognitívnej RAM.",
    "[STATUS] Prebieha monitorovanie kognitívneho zaťaženia. Odhoď mŕtve teórie.",
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

  // Live calculated values based on sliders
  const liveRamLoad = Math.min(
    100,
    Math.max(
      10,
      Math.round(
        teoriaVolume * 0.8 - kognitivnyPost * 5 - unlearningFactor * 0.4,
      ),
    ),
  );
  const liveCpuOverheat = Math.min(
    100,
    Math.max(
      5,
      Math.round(
        teoriaVolume * 0.7 + (100 - bdelostPercent) * 0.3 - kognitivnyPost * 4,
      ),
    ),
  );
  const liveBiosPurity = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        bdelostPercent * 0.5 + unlearningFactor * 0.5 + kognitivnyPost * 2,
      ),
    ),
  );
  const liveEnergyWatts = Math.min(
    100,
    Math.max(
      10,
      Math.round(
        100 - liveCpuOverheat * 0.4 - liveRamLoad * 0.3 + bdelostPercent * 0.3,
      ),
    ),
  );

  const handleAction = (actionType) => {
    triggerSound("click");
    if (actionType === "format_c") {
      setTeoriaVolume(10);
      setUnlearningFactor(95);
      setBdelostPercent(90);
      setKognitivnyPost(14);
      setLogs((prev) => [
        "[SUCCESS] Format C: úspešne vykonaný. Všetky mŕtve teórie a cudzie dogmy boli vymazané z kognitívnych registrov. Systém bootuje do čistého stavu BIOSu.",
        `[STATUS] Voľná RAM: ${100 - Math.max(10, Math.round(10 * 0.8 - 14 * 5 - 95 * 0.4))}% // BIOS čistota: 100% // Watts: 100%`,
        ...prev,
      ]);
    } else if (actionType === "kognitivne_embargo") {
      setKognitivnyPost(14);
      setTeoriaVolume(20);
      setUnlearningFactor(60);
      setLogs((prev) => [
        "[SUCCESS] Kognitívne embargo aktivované. Banned Port je uzamknutý pre prichádzajúci informačný šum. RAM sa plynule uvoľňuje.",
        ...prev,
      ]);
    } else if (actionType === "sandbox") {
      setBdelostPercent(95);
      setLogs((prev) => [
        "[SUCCESS] Spustený Sandbox bdelého pozorovateľa. Komentátor Parazit bol izolovaný. Jeho pokusy o vyvolanie pochybností sú blokované.",
        ...prev,
      ]);
    } else if (actionType === "unlearn") {
      setUnlearningFactor(90);
      setTeoriaVolume(15);
      setLogs((prev) => [
        "[SUCCESS] Spustený protokol Odučenia sa (Unlearning). Staré domestikačné algoritmy sa odinštalúvajú. Obnovuje sa Wu-wei stav.",
        ...prev,
      ]);
    } else if (actionType === "reset") {
      setTeoriaVolume(80);
      setUnlearningFactor(20);
      setBdelostPercent(30);
      setKognitivnyPost(1);
      setLogs([
        "[OK] Systém reštartovaný do predvoleného stavu.",
        "[STATUS] RAM vyťaženie obnovené na 80%, kognitívny pôst zresetovaný.",
      ]);
    }
  };
  // =====================================================================
  // 📦 DEFINE: AKTÍVNE KATEGÓRIE PRE UZOL ID01_03 (ESLINT FIX)
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
  // 📚 JAZYKOVÁ DATABÁZA DML v6.0 (30 Slov)
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



  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#050A0E] text-gray-300" : "bg-[#252D35] text-gray-200"}`}
      onClick={() => setActiveTooltip(null)}
    >
      <MetaTags
        title="ID01 IDENTITY-CORE // nePrežitá Pravda"
        description="Rozdiel medzi teóriou z kníh a odžitou realitou."
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
                Node_ID01_03 // nePrežitá Pravda
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4"
              style={{ color: DIM_COLOR }}
            >
              nePrežitá Pravda
            </h1>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
              03. nePrežitá Pravda (Teória z kníh vs Odžitá Realita). Odhoď
              mŕtve teoretické koncepty, vyčisti kognitívnu vyrovnávaciu pamäť a
              naštartuj asynchrónne runtime testovanie v teréne.
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
              &quot;Mnoho hľadačov pravdy trpí fatálnym zahltením. Čítajú
              desiatky kníh, zbierajú ezoterické teórie, navštevujú prednášky a
              veria, že sa posúvajú vpred. V skutočnosti len plnia svoju
              kognitívnu <DMLTooltip slug="ram" label="RAM" /> nepoužiteľným
              teoretickým balastom. Tieto nedomyslené, neodžité koncepty sú len
              neovereným kódom, ktorý preťažuje{" "}
              <DMLTooltip slug="cpu" label="CPU" /> a generuje neustále chyby.
              Pravda sa nekonzumuje – pravda sa kompiluje priamo v akcii, v ohni
              reálnych prekážok a odžitých kríz. Pokiaľ si niečo neodžil v
              teréne, je to pre teba len nePrežitá Pravda. Odhoď tieto{" "}
              <DMLTooltip slug="mrtve_knihy" label="Mŕtve knihy" />, uvoľni
              upchatú <DMLTooltip slug="cache_memory" label="Cache Memory" />,
              spusti kompletný <DMLTooltip slug="format_c" label="Format C:" />{" "}
              pre všetky cudzie poučky a vráť sa k rýdzemu, bdelému prežívaniu
              prítomného okamihu.&quot;
            </p>
          </blockquote>

          <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>FILE: Node_ID01_03_neprezita_pravda.md</span>
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
              id01_node_03_neprezita_pravda_video
            </span>
          </div>
          <GlobalNodeVideo nodeId={NODE_ID} dimColor="cyan" />
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
                      Keď som sa v minulosti snažil uniknúť z vlastného
                      vnútorného pekla, prečítal som stovky publikácií o
                      psychológii, mystike a duchovne. Hltal som každú vetu, no
                      môj biologický{" "}
                      <DMLTooltip slug="skafander" label="Skafander" /> bol
                      čoraz viac paralyzovaný. Moja myseľ bola preťažená a
                      psychózy na Spartakovskej ulici sa len stupňovali. Zistil
                      som šokujúcu vec: duchovná teória bez reálneho uplatnenia
                      funguje ako nekompatibilný softvér. Vytvára obrovský
                      kognitívny pretlak a myšlienkový vírus{" "}
                      <DMLTooltip
                        slug="komentator_parazit"
                        label="Komentátor Parazit"
                      />{" "}
                      ho s radosťou používa na stavbu duchovného eGa.
                    </p>
                    <p>
                      Skutočný zlom nastal, až keď som všetky tie spisy odhodil.
                      Prestal som hľadať odpovede u cudzích autorov a začal som
                      bdelo a ticho pozorovať runtime procesy svojej vlastnej
                      mysle priamo v krutej realite Trnavy. Uvalil som karanténu
                      na cudzie poučky a s asistenčnou zásterkou v podobe
                      invalidného dôchodku ako môjho tichého{" "}
                      <DMLTooltip slug="proxy_server" label="Proxy server" />
                      -a som začal od nuly stavať čisté, funkčné jadro{" "}
                      <DMLTooltip slug="os_genesis" label="OS Genesis" />. Moja
                      odžitá pravda nevznikla v knižnici, ale v bode nulového
                      odporu.
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
                      Z hľadiska spracovania dát je nePrežitá Pravda neovereným
                      softvérovým balíkom, ktorý neprešiel runtime testovaním
                      (runtime testing). Ak biologická jednotka neustále
                      načítava teoretické informácie bez ich bezprostrednej
                      integrácie do praktického správania, dochádza k
                      nebezpečnému fenoménu: kognitívna{" "}
                      <DMLTooltip slug="ram" label="RAM" /> je blokovaná, zatiaľ
                      čo registre <DMLTooltip slug="cpu" label="CPU" /> sú
                      preťažované neustálym analyzovaním abstraktných konceptov.
                    </p>
                    <p>
                      Tento stav vyvoláva permanentné{" "}
                      <DMLTooltip slug="memory_leaks" label="Memory Leaks" /> a
                      vyčerpáva drahocenné vitálne{" "}
                      <DMLTooltip slug="watts" label="Watts" /> neurologického
                      systému. Informácia z kníh zostáva zapísaná len v
                      prechodnej{" "}
                      <DMLTooltip slug="cache_memory" label="Cache Memory" /> a
                      neprepisuje hlboké podvedomé registre (
                      <DMLTooltip slug="legacy_code" label="Legacy Code" />
                      ). Systém prechádza do stavu zacyklenia (Loop), kedy
                      jednotka o slobode len teoretizuje, no v skutočnosti
                      zostáva plne zotročená starými domestikačnými programami v
                      sieti <DMLTooltip slug="botnet" label="Botnet" />. Na
                      uvoľnenie výpočtového výkonu je nevyhnutné zastaviť prísun
                      externých neoverených dát a spustiť proces{" "}
                      <DMLTooltip slug="debugging" label="Debugging" />.
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
                      Defragmentácia starých spisov odhaľuje, že najvplyvnejší
                      inžinieri vedomia minulosti dôrazne varovali pred
                      hromadením prázdnych teórií na úkor priamej skúsenosti
                      prítomnosti:
                    </p>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        1. Don Miguel Ruiz (Hlas poznania)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Ruiz priamo dekonštruuje &#39;Hlas poznania&#39; ako
                        umelo vytvorenú štruktúru, ktorá ti neustále hovorí, čo
                        by si mal vedieť a ako by si mal konať. Toto teoretické
                        ego je podľa neho najväčšou prekážkou pre priame
                        vnímanie reality bez mentálnych filtrov.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        2. Eckhart Tolle (Sila prítomného okamihu)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Tolle varuje pred &#39;duchovným egom&#39;, kedy sa tvoj{" "}
                        <DMLTooltip slug="avatar" label="Avatar" /> začne
                        stotožňovať s prečítanými duchovnými poučkami a
                        konceptmi. Teória o prítomnosti nie je prítomnosťou; je
                        to len ďalší mentálny hluk, ktorý zamestnáva procesor.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#39FF14] pl-4 space-y-2">
                      <span className="font-bold text-[#39FF14] text-xs font-mono uppercase tracking-widest block">
                        3. Osho (Diamantová sútra)
                      </span>
                      <p className="text-gray-300 text-xs">
                        Osho vo svojich výkladoch nekompromisne nariaďuje proces
                        &#39;odučenia sa&#39; (unlearning). Tvrdí, že myseľ
                        preplnená vedomosťami je len dobre naprogramovaným
                        strojom v rukách spoločenského botnetu. Iba prázdna
                        myseľ bez konceptov dokáže spustiť čistý{" "}
                        <DMLTooltip slug="bios" label="BIOS" /> a kráčať po{" "}
                        <DMLTooltip
                          slug="cesta_nepraxe"
                          label="Cesta nePraxe"
                        />
                        .
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
                      Hromadenie teoretických vedomostí vytvára nebezpečnú
                      kognitívnu ilúziu. Tvoj{" "}
                      <DMLTooltip slug="avatar" label="Avatar" /> nadobudne
                      pocit, že ak vie niečo pomenovať a vysvetliť, tak to
                      reálne ovláda. V tvojom vnútornom{" "}
                      <DMLTooltip slug="ui_space" label="UI Space" /> sa však
                      deje závažná chyba:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Neintegrovaný kód:
                        </strong>{" "}
                        Teória z kníh leží v tvojej vyrovnávacej pamäti ako
                        mŕtve dáta. Pokiaľ tieto informácie neprejdú ohňom
                        tvojho osobného prežitku, nemajú žiadnu moc nad tvojím
                        podvedomým backendom. Bežíš na starých reaktívnych
                        synapsiách (
                        <DMLTooltip slug="legacy_code" label="Legacy Code" />
                        ), hoci navonok rozprávaš o osvietení.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Rozkoš z preťažovania:
                        </strong>{" "}
                        Tvoja myseľ (Parazit) miluje čítať ďalšie a ďalšie{" "}
                        <DMLTooltip slug="mrtve_knihy" label="Mŕtve knihy" />.
                        Vytvára to ilúziu progresu, zatiaľ čo v skutočnosti len
                        odďaľuješ moment reálneho činu a tichého spočinutia v
                        prítomnosti.
                      </li>
                    </ul>
                    <p className="pt-2 text-gray-400 text-xs">
                      Rozbiť túto ilúziu znamená pochopiť, že jedna sekunda
                      bdelého, odžitého pozorovania vlastného strachu v
                      prítomnosti má väčšiu hodnotu než celá knižnica
                      spirituálnych teórií.
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
                      Centralizovaný{" "}
                      <DMLTooltip slug="social_engine" label="Social Engine" />{" "}
                      Matrixu miluje teoretických hľadačov. Sú to ideálni
                      spotrebitelia, ktorí kupujú knihy, navštevujú platené
                      semináre, no nikdy reálne neohrozia základy systému,
                      pretože ich správanie zostáva plne predvídateľné. Matrix
                      zneužíva túto pascu, aby odčerpával tvoje{" "}
                      <DMLTooltip slug="watts" label="Watts" /> energie cez
                      umelo vytvorenú spiritualitu.
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Tento odber prebieha nasledovne:
                    </p>
                    <ol className="space-y-3 list-decimal pl-6 text-xs text-gray-300">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Ponuka spirituálneho bloatwaru:
                        </strong>{" "}
                        Systém ti zaplaví priestor nekonečnou ponukou
                        ezoterického a akademického šumu, aby udržal tvoju
                        pozornosť v stave permanentného vyhľadávania (
                        <DMLTooltip slug="limbic_noise" label="Limbic Noise" />
                        ).
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Ukotvenie v pasivite:
                        </strong>{" "}
                        Parazit ťa presvedčí, že ešte nie si dosť pripravený, že
                        potrebuješ prečítať ešte jednu knihu, čím ťa udržiava v
                        pasívnej nečinnosti a mimo stav{" "}
                        <DMLTooltip slug="root_access" label="Root Access" />.
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Zber kognitívnych cyklov:
                        </strong>{" "}
                        Tvoja mentálna frustrácia z toho, že teória nefunguje v
                        praxi, produkuje obrovské emočné straty (
                        <DMLTooltip slug="memory_leaks" label="Memory Leaks" />
                        ), ktoré Matrix s radosťou zhromažďuje prostredníctvom
                        svojich unifikačných kódov.
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
                      Prechod od neprežitej teórie k živej, skompilovanej pravde
                      vyžaduje radikálny pôst od informácií a zahájenie hlbokého{" "}
                      <DMLTooltip slug="debugging" label="Debugging" /> procesu
                      vo tvojom <DMLTooltip slug="ui_space" label="UI Space" />.
                      Musíš presunúť ťažisko z vonkajších zdrojov na vnútornú
                      runtime stabilitu.
                    </p>
                    <p className="font-bold text-[#39FF14] uppercase tracking-wider text-xs">
                      Praktická aplikácia tohto prechodu prebieha v troch
                      krokoch:
                    </p>
                    <ul className="space-y-3 list-none pl-2 border-l border-gray-800 text-xs">
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Uvalenie kognitívneho embarga:
                        </strong>{" "}
                        Zastav na 14 dní akýkoľvek prísun duchovnej,
                        psychologickej a teoretickej teórie. Žiadne mŕtve knihy,
                        žiadne podcasty, žiadne videá. Drž svoj{" "}
                        <DMLTooltip slug="banned_port" label="Banned Port" />{" "}
                        striktne uzavretý pred cudzími inštrukciami.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Monitorovanie vnútornej reaktivity:
                        </strong>{" "}
                        Sleduj, ako sa Parazit búri bez neustáleho prísunu
                        nových dátových balíkov. Ticho pozoruj jeho snahu
                        vyvolať nudu, strach alebo pochybnosti. Izoluj tieto
                        procesy v bezpečnom{" "}
                        <DMLTooltip slug="sandbox" label="Sandbox" />
                        -e bdelého bytia.
                      </li>
                      <li>
                        •{" "}
                        <strong style={{ color: DIM_COLOR }}>
                          Priama kompilácia v realite:
                        </strong>{" "}
                        Začni konať výhradne na základe svojich vlastných
                        pravidiel a tichého pozorovania. Každý krok rob s plnou
                        bdelosťou, či už ide o komunikáciu, prácu alebo spánok.
                        Tvoj neurologický{" "}
                        <DMLTooltip slug="skafander" label="Skafander" /> tak
                        začne nahrávať skutočný, čistý a stabilný{" "}
                        <DMLTooltip slug="os_genesis" label="OS Genesis" />.
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
                      Na udržanie kognitívnej čistoty a obranu pred vírusom
                      teoretizovania musíš denne spúšťať nasledovné klastre:
                    </p>
                    <ol className="space-y-4 pl-6 list-decimal text-xs">
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Ranný SILENT BOOT Protokol:
                        </strong>{" "}
                        Ráno nečítaj žiadne citáty ani spirituálne poučky.
                        Ponechaj svoj{" "}
                        <DMLTooltip slug="local_host" label="Local Host" /> v
                        čistom tichu dychu. Uvedom si, že prítomnosť nepotrebuje
                        vysvetlenie. Stabilizuj kód bytia:{" "}
                        <em className="text-gray-400 font-bold">
                          &quot;Keď som, tak som, viem, že som.&quot;
                        </em>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Kognitívny Firewall (Filter priamej skúsenosti):
                        </strong>
                        <ul className="space-y-2 pl-4 list-disc mt-2 text-gray-300">
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Ignoruj neoverené koncepty:
                            </strong>{" "}
                            Keď ti niekto podhadzuje komplikované spirituálne
                            dogmy, tvoj{" "}
                            <DMLTooltip slug="firewall" label="Firewall" /> ich
                            okamžite filtruje ako spam, pokiaľ ich nedokážeš
                            aplikovať v prítomnom okamihu.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Blokuj SQL injection pochybností:
                            </strong>{" "}
                            Parazit sa bude snažiť spochybniť tvoju čistú
                            prítomnosť poukazovaním na to, že nemáš dostatok
                            vedomostí. Zahoď tento paket bez spracovania v CPU.
                          </li>
                          <li>
                            <strong style={{ color: DIM_COLOR }}>
                              Drž porty zatvorené:
                            </strong>{" "}
                            Nedovoľ, aby ti cudzie názory a poučky upchali
                            drahocennú <DMLTooltip slug="ram" label="RAM" />.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong style={{ color: DIM_COLOR }}>
                          Večerný SHUTDOWN Protokol (Výmaz Cache):
                        </strong>{" "}
                        Pred spaním spusti kompletný výmaz vyrovnávacej pamäte{" "}
                        <DMLTooltip slug="cache_memory" label="Cache Memory" />{" "}
                        od všetkých denných myšlienok a poučiek. Odovzdaj sa
                        spánku ako absolútne prázdne zrkadlo tichého svedka, s
                        uvalenou{" "}
                        <DMLTooltip slug="karantena" label="Karanténa" />
                        -ou na akýkoľvek teoretický šum.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* =====================================================================
            5C. TAB 2: AKČNÝ SIMULÁTOR (BIOS PURITY & DEFRAGMENTER)
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
                📊 EXEKUČNÝ SIMULÁTOR: BIOS PURITY &amp; KOGNITÍVNY
                DEFRAGMENTÁTOR
              </h2>
            </div>

            {/* Simulated Help Block */}
            {simulatorHelp && (
              <div className="p-4 bg-gray-950 border border-gray-800 rounded-lg text-xs leading-relaxed text-gray-400 space-y-2 mb-6">
                <p>
                  <strong className="text-white">🧠 AKO FUNGUJE:</strong> Tento
                  trenažér analyzuje čistotu tvojho BIOSu a celkový výpočtový
                  výkon na základe pomeru mŕtveho teoretického balastu a priamej
                  bdelosti v realite.
                </p>
                <p>
                  <strong className="text-white">🎛️ NASTAVENIE:</strong>{" "}
                  Posuvníkmi nastav množstvo prečítanej teórie, mieru odučenia
                  sa a dĺžku kognitívneho pôstu.
                </p>
                <p>
                  <strong className="text-white">📊 VÝSTUP:</strong> Vypočítané
                  indexy okamžite ukážu zaťaženie RAM, teplotu CPU a rýdzosť
                  tvojho prvotného vedomia.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SLIDERS SECTION */}
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase text-gray-400 flex items-center gap-2 border-b border-gray-900 pb-2">
                  <Sliders className="w-3.5 h-3.5 text-[#39FF14]" />
                  Nastavenie kognitívnych parametrov
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Teoretický balast (Mŕtve knižnice):
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {teoriaVolume}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={teoriaVolume}
                      onChange={(e) => {
                        setTeoriaVolume(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Miera Odučenia sa (Unlearning factor):
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {unlearningFactor}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={unlearningFactor}
                      onChange={(e) => {
                        setUnlearningFactor(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Bdelosť a pozorovanie v prítomnosti:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {bdelostPercent}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={bdelostPercent}
                      onChange={(e) => {
                        setBdelostPercent(Number(e.target.value));
                        triggerSound("click");
                      }}
                      className="w-full accent-[#39FF14] bg-gray-950 rounded-lg appearance-none h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">
                        Dĺžka kognitívneho pôstu:
                      </span>
                      <span className="text-[#39FF14] font-black">
                        {kognitivnyPost} dní
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="14"
                      value={kognitivnyPost}
                      onChange={(e) => {
                        setKognitivnyPost(Number(e.target.value));
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
                    onClick={() => handleAction("kognitivne_embargo")}
                    className="flex-1 min-w-[120px] bg-yellow-600/10 hover:bg-yellow-600/20 border border-yellow-500/30 text-yellow-450 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Kognitívne Embargo
                  </button>
                  <button
                    onClick={() => handleAction("sandbox")}
                    className="flex-1 min-w-[120px] bg-[#00B4D8]/10 hover:bg-[#00B4D8]/20 border border-[#00B4D8]/30 text-[#00B4D8] py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Sandbox Bdelosti
                  </button>
                  <button
                    onClick={() => handleAction("unlearn")}
                    className="flex-1 min-w-[120px] bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 py-2 px-3 rounded text-[10px] font-black uppercase tracking-wider transition-all"
                  >
                    Unlearning Wu-wei
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
                        Preťaženie CPU
                      </span>
                      <span
                        className={`text-2xl font-black ${liveCpuOverheat > 60 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveCpuOverheat}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Vyťaženie RAM
                      </span>
                      <span
                        className={`text-2xl font-black ${liveRamLoad > 65 ? "text-yellow-400" : "text-[#39FF14]"}`}
                      >
                        {liveRamLoad}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Dostupná Sila Watts
                      </span>
                      <span
                        className={`text-2xl font-black ${liveEnergyWatts < 45 ? "text-yellow-400" : "text-[#39FF14]"}`}
                      >
                        {liveEnergyWatts}%
                      </span>
                    </div>

                    <div className="bg-[#050A0E]/80 p-4 border border-gray-900 rounded-lg">
                      <span className="text-[10px] text-gray-500 uppercase block font-bold mb-1">
                        Purity stav BIOSu
                      </span>
                      <span
                        className={`text-2xl font-black ${liveBiosPurity < 45 ? "text-red-400" : "text-[#39FF14]"}`}
                      >
                        {liveBiosPurity}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATRIX SYSTEM CONSOLE LOGS */}
                <div className="flex-1 bg-black/90 rounded-lg p-4 border border-gray-900 flex flex-col justify-between h-48 overflow-hidden font-mono text-[10px] leading-relaxed">
                  <div className="flex justify-between items-center text-gray-500 border-b border-gray-900 pb-1.5 mb-2">
                    <span>DIAG_LOG_MATRIX_CONSOLE // INTEGRATION</span>
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
              Tvoj klientsky procesor beží na limite a tvoj hardvér is
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
