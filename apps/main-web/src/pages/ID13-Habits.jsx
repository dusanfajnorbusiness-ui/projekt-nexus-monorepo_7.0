import React from "react";
import { Repeat, Lock, Database } from "lucide-react";
import { id13OmegaMap as ID13_Map } from "@main-web/data/ID13_OmegaMap";
// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "OfflineDimensionPreview" umiestnený pod tým.

// import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub";
import { GlobalComponents } from "@main-web/components/GlobalComponents";
import { GlobalHamburgerMenu } from "@main-web/components/GlobalHamburgerMenu";
// ============================================================================
// --- ONLINE UZLY (ID13) - NEXUS-HABITS [100 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÁ ARCHITEKTÚRA ČASU (Vstup do Systému Návykov)
// import Node_ID13_01 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_01";
// import Node_ID13_02 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_02";
// import Node_ID13_03 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_03";
// import Node_ID13_04 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_04";
// import Node_ID13_05 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_05";
// import Node_ID13_06 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_06";
// import Node_ID13_07 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_07";
// import Node_ID13_08 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_08";
// import Node_ID13_09 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_09";
// import Node_ID13_10 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_10";

// 📂 SEKCIA B: RANNÝ BOOT PROTOKOL (Startup Sequence)
// import Node_ID13_11 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_11";
// import Node_ID13_12 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_12";
// import Node_ID13_13 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_13";
// import Node_ID13_14 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_14";
// import Node_ID13_15 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_15";
// import Node_ID13_16 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_16";
// import Node_ID13_17 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_17";
// import Node_ID13_18 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_18";
// import Node_ID13_19 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_19";
// import Node_ID13_20 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_20";

// 📂 SEKCIA C: VEČERNÝ SHUTDOWN PROTOKOL (Cooling Sequence)
// import Node_ID13_21 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_21";
// import Node_ID13_22 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_22";
// import Node_ID13_23 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_23";
// import Node_ID13_24 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_24";
// import Node_ID13_25 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_25";
// import Node_ID13_26 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_26";
// import Node_ID13_27 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_27";
// import Node_ID13_28 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_28";
// import Node_ID13_29 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_29";
// import Node_ID13_30 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_30";

// 📂 SEKCIA D: ALGORITMY PRODUKTIVITY (Deep Work Habits)
// import Node_ID13_31 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_31";
// import Node_ID13_32 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_32";
// import Node_ID13_33 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_33";
// import Node_ID13_34 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_34";
// import Node_ID13_35 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_35";
// import Node_ID13_36 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_36";
// import Node_ID13_37 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_37";
// import Node_ID13_38 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_38";
// import Node_ID13_39 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_39";
// import Node_ID13_40 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_40";

// 📂 SEKCIA E: DETOXIKÁCIA A VÝMAZ MALVÉRU (Odinštalovanie Zlozvykov)
// import Node_ID13_41 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_41";
// import Node_ID13_42 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_42";
// import Node_ID13_43 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_43";
// import Node_ID13_44 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_44";
// import Node_ID13_45 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_45";
// import Node_ID13_46 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_46";
// import Node_ID13_47 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_47";
// import Node_ID13_48 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_48";
// import Node_ID13_49 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_49";
// import Node_ID13_50 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_50";

// 📂 SEKCIA F: MENTÁLNE A KOGNITÍVNE NÁVYKY (Mindset Architecture)
// import Node_ID13_51 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_51";
// import Node_ID13_52 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_52";
// import Node_ID13_53 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_53";
// import Node_ID13_54 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_54";
// import Node_ID13_55 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_55";
// import Node_ID13_56 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_56";
// import Node_ID13_57 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_57";
// import Node_ID13_58 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_58";
// import Node_ID13_59 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_59";
// import Node_ID13_60 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_60";

// 📂 SEKCIA G: FYZICKÁ ÚDRŽBA SKAFANDRA (Hardware Routines)
// import Node_ID13_61 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_61";
// import Node_ID13_62 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_62";
// import Node_ID13_63 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_63";
// import Node_ID13_64 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_64";
// import Node_ID13_65 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_65";
// import Node_ID13_66 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_66";
// import Node_ID13_67 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_67";
// import Node_ID13_68 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_68";
// import Node_ID13_69 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_69";
// import Node_ID13_70 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_70";

// 📂 SEKCIA H: FINANČNÁ A BIZNISOVÁ HYGIENA (Wealth Scripts)
// import Node_ID13_71 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_71";
// import Node_ID13_72 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_72";
// import Node_ID13_73 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_73";
// import Node_ID13_74 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_74";
// import Node_ID13_75 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_75";
// import Node_ID13_76 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_76";
// import Node_ID13_77 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_77";
// import Node_ID13_78 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_78";
// import Node_ID13_79 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_79";
// import Node_ID13_80 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_80";

// 📂 SEKCIA I: SOCIÁLNY FIREWALL (Komunikačné Rutiny)
// import Node_ID13_81 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_81";
// import Node_ID13_82 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_82";
// import Node_ID13_83 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_83";
// import Node_ID13_84 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_84";
// import Node_ID13_85 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_85";
// import Node_ID13_86 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_86";
// import Node_ID13_87 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_87";
// import Node_ID13_88 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_88";
// import Node_ID13_89 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_89";
// import Node_ID13_90 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_90";

// 📂 SEKCIA J: ENDGAME - AUTOMATIZÁCIA BYTIA (Mastery)
// import Node_ID13_91 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_91";
// import Node_ID13_92 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_92";
// import Node_ID13_93 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_93";
// import Node_ID13_94 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_94";
// import Node_ID13_95 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_95";
// import Node_ID13_96 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_96";
// import Node_ID13_97 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_97";
// import Node_ID13_98 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_98";
// import Node_ID13_99 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_99";
// import Node_ID13_100 from "@main-web/subPages/ID13-Habits/OMEGA/Node_ID13_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // "ID13-01": Node_ID13_01, // [OMEGA]
  // "ID13-02": Node_ID13_02, // [OMEGA]
  // "ID13-03": Node_ID13_03, // [OMEGA]
  // "ID13-04": Node_ID13_04, // [OMEGA]
  // "ID13-05": Node_ID13_05, // [OMEGA]
  // "ID13-06": Node_ID13_06, // [OMEGA]
  // "ID13-07": Node_ID13_07, // [OMEGA]
  // "ID13-08": Node_ID13_08, // [OMEGA]
  // "ID13-09": Node_ID13_09, // [OMEGA]
  // "ID13-10": Node_ID13_10, // [OMEGA]
  // "ID13-11": Node_ID13_11, // [OMEGA]
  // "ID13-12": Node_ID13_12, // [OMEGA]
  // "ID13-13": Node_ID13_13, // [OMEGA]
  // "ID13-14": Node_ID13_14, // [OMEGA]
  // "ID13-15": Node_ID13_15, // [OMEGA]
  // "ID13-16": Node_ID13_16, // [OMEGA]
  // "ID13-17": Node_ID13_17, // [OMEGA]
  // "ID13-18": Node_ID13_18, // [OMEGA]
  // "ID13-19": Node_ID13_19, // [OMEGA]
  // "ID13-20": Node_ID13_20, // [OMEGA]
  // "ID13-21": Node_ID13_21, // [OMEGA]
  // "ID13-22": Node_ID13_22, // [OMEGA]
  // "ID13-23": Node_ID13_23, // [OMEGA]
  // "ID13-24": Node_ID13_24, // [OMEGA]
  // "ID13-25": Node_ID13_25, // [OMEGA]
  // "ID13-26": Node_ID13_26, // [OMEGA]
  // "ID13-27": Node_ID13_27, // [OMEGA]
  // "ID13-28": Node_ID13_28, // [OMEGA]
  // "ID13-29": Node_ID13_29, // [OMEGA]
  // "ID13-30": Node_ID13_30, // [OMEGA]
  // "ID13-31": Node_ID13_31, // [OMEGA]
  // "ID13-32": Node_ID13_32, // [OMEGA]
  // "ID13-33": Node_ID13_33, // [OMEGA]
  // "ID13-34": Node_ID13_34, // [OMEGA]
  // "ID13-35": Node_ID13_35, // [OMEGA]
  // "ID13-36": Node_ID13_36, // [OMEGA]
  // "ID13-37": Node_ID13_37, // [OMEGA]
  // "ID13-38": Node_ID13_38, // [OMEGA]
  // "ID13-39": Node_ID13_39, // [OMEGA]
  // "ID13-40": Node_ID13_40, // [OMEGA]
  // "ID13-41": Node_ID13_41, // [OMEGA]
  // "ID13-42": Node_ID13_42, // [OMEGA]
  // "ID13-43": Node_ID13_43, // [OMEGA]
  // "ID13-44": Node_ID13_44, // [OMEGA]
  // "ID13-45": Node_ID13_45, // [OMEGA]
  // "ID13-46": Node_ID13_46, // [OMEGA]
  // "ID13-47": Node_ID13_47, // [OMEGA]
  // "ID13-48": Node_ID13_48, // [OMEGA]
  // "ID13-49": Node_ID13_49, // [OMEGA]
  // "ID13-50": Node_ID13_50, // [OMEGA]
  // "ID13-51": Node_ID13_51, // [OMEGA]
  // "ID13-52": Node_ID13_52, // [OMEGA]
  // "ID13-53": Node_ID13_53, // [OMEGA]
  // "ID13-54": Node_ID13_54, // [OMEGA]
  // "ID13-55": Node_ID13_55, // [OMEGA]
  // "ID13-56": Node_ID13_56, // [OMEGA]
  // "ID13-57": Node_ID13_57, // [OMEGA]
  // "ID13-58": Node_ID13_58, // [OMEGA]
  // "ID13-59": Node_ID13_59, // [OMEGA]
  // "ID13-60": Node_ID13_60, // [OMEGA]
  // "ID13-61": Node_ID13_61, // [OMEGA]
  // "ID13-62": Node_ID13_62, // [OMEGA]
  // "ID13-63": Node_ID13_63, // [OMEGA]
  // "ID13-64": Node_ID13_64, // [OMEGA]
  // "ID13-65": Node_ID13_65, // [OMEGA]
  // "ID13-66": Node_ID13_66, // [OMEGA]
  // "ID13-67": Node_ID13_67, // [OMEGA]
  // "ID13-68": Node_ID13_68, // [OMEGA]
  // "ID13-69": Node_ID13_69, // [OMEGA]
  // "ID13-70": Node_ID13_70, // [OMEGA]
  // "ID13-71": Node_ID13_71, // [OMEGA]
  // "ID13-72": Node_ID13_72, // [OMEGA]
  // "ID13-73": Node_ID13_73, // [OMEGA]
  // "ID13-74": Node_ID13_74, // [OMEGA]
  // "ID13-75": Node_ID13_75, // [OMEGA]
  // "ID13-76": Node_ID13_76, // [OMEGA]
  // "ID13-77": Node_ID13_77, // [OMEGA]
  // "ID13-78": Node_ID13_78, // [OMEGA]
  // "ID13-79": Node_ID13_79, // [OMEGA]
  // "ID13-80": Node_ID13_80, // [OMEGA]
  // "ID13-81": Node_ID13_81, // [OMEGA]
  // "ID13-82": Node_ID13_82, // [OMEGA]
  // "ID13-83": Node_ID13_83, // [OMEGA]
  // "ID13-84": Node_ID13_84, // [OMEGA]
  // "ID13-85": Node_ID13_85, // [OMEGA]
  // "ID13-86": Node_ID13_86, // [OMEGA]
  // "ID13-87": Node_ID13_87, // [OMEGA]
  // "ID13-88": Node_ID13_88, // [OMEGA]
  // "ID13-89": Node_ID13_89, // [OMEGA]
  // "ID13-90": Node_ID13_90, // [OMEGA]
  // "ID13-91": Node_ID13_91, // [OMEGA]
  // "ID13-92": Node_ID13_92, // [OMEGA]
  // "ID13-93": Node_ID13_93, // [OMEGA]
  // "ID13-94": Node_ID13_94, // [OMEGA]
  // "ID13-95": Node_ID13_95, // [OMEGA]
  // "ID13-96": Node_ID13_96, // [OMEGA]
  // "ID13-97": Node_ID13_97, // [OMEGA]
  // "ID13-98": Node_ID13_98, // [OMEGA]
  // "ID13-99": Node_ID13_99, // [OMEGA]
  // "ID13-100": Node_ID13_100, // [OMEGA]
};

// export default function ID13_NexusHabits() {
//   return (
//     <>
//   <MetaTags
//     title="NEXUS-HABITS: Budovanie Návykov, Disciplína a Denný Režim | NEXUS OS"
//     description="Váš deň riadi chaos? NEXUS-HABITS je časová architektúra pre budovanie denných návykov, sebadisciplíny a optimalizáciu času. Premeňte svoje rutiny na nezničiteľné skripty."
//     image="https://projekt-nexus.sk/img-nexus/dimenzie/id13-nexus-habits.jpg"
//     color="#00008B"
//     url="https://projekt-nexus.sk/ID13"
//     ogTitle="NEXUS-HABITS: Motivácia vždy zlyhá. Spoliehaj sa na Kód."
//     ogDescription="Tvoj deň riadi chaos. Motivácia je nespoľahlivý externý server, ktorý vždy padne. Odomkni NEXUS-HABITS, naprogramuj si tvrdú disciplínu a urob zo svojich denných rutín nezničiteľné skripty v pozadí."
//     twitterTitle="NEXUS-HABITS: Motivácia vždy zlyhá. Spoliehaj sa na Kód."
//     twitterDescription="Tvoj deň riadi chaos. Motivácia je nespoľahlivá. Odomkni NEXUS-HABITS, naprogramuj si tvrdú disciplínu a urob zo svojich rutín nezničiteľné skripty."
//   />

//   <GlobalDimensionHub
//     dimensionId="ID13"
//     dimensionName="NEXUS-HABITS"
//     dimColor={ID13_Map?.color || "#00008B"}
//     customMap={ID13_Map}
//     nodeComponents={NODE_COMPONENTS}
//   />
// </>
//   );
// }

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
export default function OfflineDimensionPreview() {
  const dimColor = "#1E3A8A"; // Tmavá Modrá pre ID13 Nexus-Habits

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono">
      {/* 1. Globálne audio, efekty a pozadie */}
      <GlobalComponents themeColor={dimColor} />

      {/* HLAVIČKA (Kompaktná) */}
      <header className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="bg-black border px-2 py-0.5 text-[10px] font-black uppercase tracking-widest"
            style={{
              borderColor: dimColor,
              color: dimColor,
              boxShadow: `0 0 10px ${dimColor}40`,
            }}
          >
            ID13 // Nexus-Habits
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Nexus{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Habits
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Repeat size={14} style={{ color: dimColor }} /> Časová Architektúra
            Žitia
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Programovanie denného režimu a životných cyklov. Budovanie návykov
            ako nezničiteľných skriptov, ktoré bežia automaticky na pozadí.
            Vypnutie motivácie a spustenie absolútnej disciplíny."
          </p>
        </div>
        <div className="shrink-0 flex flex-col items-center opacity-40">
          <Lock size={24} className="mb-2" style={{ color: dimColor }} />
          <p className="text-[9px] uppercase tracking-[3px]">
            Čaká na dekompresiu
          </p>
        </div>
      </div>

      {/* DYNAMICKÝ VÝPIS OMEGA MAPY (100 Uzlov) */}
      <div className="mt-8 border border-white/10 rounded-2xl bg-[#030507] overflow-hidden shadow-2xl">
        <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-3">
          <Database size={16} style={{ color: dimColor }} />
          <h3 className="text-white text-xs font-black uppercase tracking-widest">
            Predikovaná Omega Mapa (100 Uzlov)
          </h3>
        </div>

        {/* Scrollable zoznam */}
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[50vh] min-h-[400px] overflow-y-auto custom-scrollbar">
          {ID13_Map?.sections?.map((sec) => (
            <div key={sec.sectionId} className="space-y-4">
              <h4
                className="text-[10px] font-black uppercase tracking-widest pb-2"
                style={{
                  color: dimColor,
                  borderBottom: `1px solid ${dimColor}40`,
                }}
              >
                SEKCIA {sec.sectionId}: {sec.sectionTitle}
              </h4>
              <ul className="space-y-2">
                {sec.nodes?.map((node, nodeIdx) => {
                  let badgeColor = "#00FFFF";
                  if (node.tier === "PRO") badgeColor = "#39FF14";
                  if (node.tier === "OMEGA") badgeColor = "#FFD700";

                  return (
                    <li
                      key={node.id || `node-\${nodeIdx}`} // 👈 TENTO RIADOK ZMAŽE REACT ERROR
                      className="text-[10px] flex items-start gap-2"
                    >
                      <span
                        className="px-1 py-0.5 rounded font-bold shrink-0"
                        style={{
                          border: `1px solid ${badgeColor}`,
                          color: badgeColor,
                          fontSize: "8px",
                        }}
                      >
                        {node.tier}
                      </span>
                      <span className="text-zinc-500 leading-tight">
                        <span className="text-zinc-300 font-bold mr-1">
                          {node.id.split("-")}.
                        </span>
                        {node.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Globálne Hamburger Menu (Už neviditeľný plynulý plávajúci tón) */}
      <GlobalHamburgerMenu activeTab="id06" themeColor={dimColor} />

      <footer className="pt-10 opacity-20 text-[9px] uppercase tracking-widest text-center">
        DESIGNED BY | SERGEANT [CORE] DUŠAN FAJNOR <br />
        PROCESSED BY GEMINI_AI // NEURAL_LINK_V5 <br />© 2026 NEXUS PROTOCOL.
      </footer>
    </div>
  );
}
