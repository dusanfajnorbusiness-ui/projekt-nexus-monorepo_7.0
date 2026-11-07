// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "OfflineDimensionPreview" umiestnený pod tým.
import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub.jsx";
import { id07OmegaMap as ID07_Map } from "@main-web/data/ID07_OmegaMap.js";
import { Cpu, Database, Lock } from "lucide-react";

// ============================================================================
// --- ONLINE UZLY (ID07) - SKILLS-TREE [100 NODES READY / PENDING] ---
// ============================================================================
/*
// 📂 SEKCIA A: ZÁKLADNÉ PILIERE EXPERTÍZY (Vstup do IT Matrixu)
// import Node_ID07_01 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_01";
// import Node_ID07_02 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_02";
// import Node_ID07_03 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_03";
// import Node_ID07_04 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_04";
// import Node_ID07_05 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_05";
// import Node_ID07_06 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_06";
// import Node_ID07_07 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_07";
// import Node_ID07_08 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_08";
// import Node_ID07_09 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_09";
// import Node_ID07_10 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_10";

// 📂 SEKCIA B: VIZUÁLNA VRSTVA A UI/UX (Front-end Chirurgia)
// import Node_ID07_11 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_11";
// import Node_ID07_12 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_12";
// import Node_ID07_13 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_13";
// import Node_ID07_14 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_14";
// import Node_ID07_15 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_15";
// import Node_ID07_16 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_16";
// import Node_ID07_17 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_17";
// import Node_ID07_18 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_18";
// import Node_ID07_19 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_19";
// import Node_ID07_20 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_20";

// 📂 SEKCIA C: REACT A LOGIKA ROZHRANIA (Front-end Logika)
// import Node_ID07_21 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_21";
// import Node_ID07_22 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_22";
// import Node_ID07_23 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_23";
// import Node_ID07_24 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_24";
// import Node_ID07_25 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_25";
// import Node_ID07_26 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_26";
// import Node_ID07_27 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_27";
// import Node_ID07_28 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_28";
// import Node_ID07_29 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_29";
// import Node_ID07_30 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_30";

// 📂 SEKCIA D: DATABÁZY A BACKEND (Strojovňa Matrixu)
// import Node_ID07_31 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_31";
// import Node_ID07_32 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_32";
// import Node_ID07_33 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_33";
// import Node_ID07_34 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_34";
// import Node_ID07_35 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_35";
// import Node_ID07_36 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_36";
// import Node_ID07_37 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_37";
// import Node_ID07_38 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_38";
// import Node_ID07_39 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_39";
// import Node_ID07_40 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_40";

// 📂 SEKCIA E: AI-AUGMENTED ARCHITECTURE (Spolupráca so strojom)
// import Node_ID07_41 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_41";
// import Node_ID07_42 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_42";
// import Node_ID07_43 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_43";
// import Node_ID07_44 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_44";
// import Node_ID07_45 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_45";
// import Node_ID07_46 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_46";
// import Node_ID07_47 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_47";
// import Node_ID07_48 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_48";
// import Node_ID07_49 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_49";
// import Node_ID07_50 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_50";

// 📂 SEKCIA F: DEBUGGING A ERROR LOGY (Psychológia Vývojára)
// import Node_ID07_51 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_51";
// import Node_ID07_52 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_52";
// import Node_ID07_53 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_53";
// import Node_ID07_54 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_54";
// import Node_ID07_55 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_55";
// import Node_ID07_56 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_56";
// import Node_ID07_57 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_57";
// import Node_ID07_58 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_58";
// import Node_ID07_59 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_59";
// import Node_ID07_60 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_60";

// 📂 SEKCIA G: SYSTÉMOVÝ DIZAJN A INFRAŠTRUKTÚRA
// import Node_ID07_61 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_61";
// import Node_ID07_62 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_62";
// import Node_ID07_63 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_63";
// import Node_ID07_64 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_64";
// import Node_ID07_65 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_65";
// import Node_ID07_66 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_66";
// import Node_ID07_67 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_67";
// import Node_ID07_68 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_68";
// import Node_ID07_69 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_69";
// import Node_ID07_70 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_70";

// 📂 SEKCIA H: DEPLOYMENT A GHOST-MODE PREVÁDZKA
// import Node_ID07_71 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_71";
// import Node_ID07_72 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_72";
// import Node_ID07_73 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_73";
// import Node_ID07_74 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_74";
// import Node_ID07_75 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_75";
// import Node_ID07_76 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_76";
// import Node_ID07_77 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_77";
// import Node_ID07_78 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_78";
// import Node_ID07_79 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_79";
// import Node_ID07_80 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_80";

// 📂 SEKCIA I: MONETIZÁCIA ZRUČNOSTÍ (IT ako Nástroj)
// import Node_ID07_81 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_81";
// import Node_ID07_82 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_82";
// import Node_ID07_83 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_83";
// import Node_ID07_84 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_84";
// import Node_ID07_85 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_85";
// import Node_ID07_86 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_86";
// import Node_ID07_87 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_87";
// import Node_ID07_88 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_88";
// import Node_ID07_89 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_89";
// import Node_ID07_90 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_90";

// 📂 SEKCIA J: MAJSTROVSTVO A ENDGAME (Tech Autorita)
// import Node_ID07_91 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_91";
// import Node_ID07_92 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_92";
// import Node_ID07_93 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_93";
// import Node_ID07_94 from "@main-web/subPages/ID07-Skills/PRO/Node_ID07_94";
// import Node_ID07_95 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_95";
// import Node_ID07_96 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_96";
// import Node_ID07_97 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_97";
// import Node_ID07_98 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_98";
// import Node_ID07_99 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_99";
// import Node_ID07_100 from "@main-web/subPages/ID07-Skills/OMEGA/Node_ID07_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  // "ID07-01": Node_ID07_01, // [PRO]
  // "ID07-02": Node_ID07_02, // [PRO]
  // "ID07-03": Node_ID07_03, // [PRO]
  // "ID07-04": Node_ID07_04, // [PRO]
  // "ID07-05": Node_ID07_05, // [PRO]
  // "ID07-06": Node_ID07_06, // [PRO]
  // "ID07-07": Node_ID07_07, // [PRO]
  // "ID07-08": Node_ID07_08, // [PRO]
  // "ID07-09": Node_ID07_09, // [OMEGA]
  // "ID07-10": Node_ID07_10, // [OMEGA]

  // 📂 SEKCIA B
  // "ID07-11": Node_ID07_11, // [PRO]
  // "ID07-12": Node_ID07_12, // [PRO]
  // "ID07-13": Node_ID07_13, // [PRO]
  // "ID07-14": Node_ID07_14, // [PRO]
  // "ID07-15": Node_ID07_15, // [PRO]
  // "ID07-16": Node_ID07_16, // [PRO]
  // "ID07-17": Node_ID07_17, // [OMEGA]
  // "ID07-18": Node_ID07_18, // [OMEGA]
  // "ID07-19": Node_ID07_19, // [OMEGA]
  // "ID07-20": Node_ID07_20, // [OMEGA]

  // 📂 SEKCIA C
  // "ID07-21": Node_ID07_21, // [PRO]
  // "ID07-22": Node_ID07_22, // [PRO]
  // "ID07-23": Node_ID07_23, // [PRO]
  // "ID07-24": Node_ID07_24, // [PRO]
  // "ID07-25": Node_ID07_25, // [PRO]
  // "ID07-26": Node_ID07_26, // [PRO]
  // "ID07-27": Node_ID07_27, // [OMEGA]
  // "ID07-28": Node_ID07_28, // [OMEGA]
  // "ID07-29": Node_ID07_29, // [OMEGA]
  // "ID07-30": Node_ID07_30, // [OMEGA]

  // 📂 SEKCIA D
  // "ID07-31": Node_ID07_31, // [PRO]
  // "ID07-32": Node_ID07_32, // [PRO]
  // "ID07-33": Node_ID07_33, // [PRO]
  // "ID07-34": Node_ID07_34, // [PRO]
  // "ID07-35": Node_ID07_35, // [PRO]
  // "ID07-36": Node_ID07_36, // [PRO]
  // "ID07-37": Node_ID07_37, // [OMEGA]
  // "ID07-38": Node_ID07_38, // [OMEGA]
  // "ID07-39": Node_ID07_39, // [OMEGA]
  // "ID07-40": Node_ID07_40, // [OMEGA]

  // 📂 SEKCIA E
  // "ID07-41": Node_ID07_41, // [PRO]
  // "ID07-42": Node_ID07_42, // [PRO]
  // "ID07-43": Node_ID07_43, // [PRO]
  // "ID07-44": Node_ID07_44, // [PRO]
  // "ID07-45": Node_ID07_45, // [PRO]
  // "ID07-46": Node_ID07_46, // [PRO]
  // "ID07-47": Node_ID07_47, // [OMEGA]
  // "ID07-48": Node_ID07_48, // [OMEGA]
  // "ID07-49": Node_ID07_49, // [OMEGA]
  // "ID07-50": Node_ID07_50, // [OMEGA]

  // 📂 SEKCIA F
  // "ID07-51": Node_ID07_51, // [PRO]
  // "ID07-52": Node_ID07_52, // [PRO]
  // "ID07-53": Node_ID07_53, // [PRO]
  // "ID07-54": Node_ID07_54, // [PRO]
  // "ID07-55": Node_ID07_55, // [PRO]
  // "ID07-56": Node_ID07_56, // [PRO]
  // "ID07-57": Node_ID07_57, // [OMEGA]
  // "ID07-58": Node_ID07_58, // [OMEGA]
  // "ID07-59": Node_ID07_59, // [OMEGA]
  // "ID07-60": Node_ID07_60, // [OMEGA]

  // 📂 SEKCIA G
  // "ID07-61": Node_ID07_61, // [PRO]
  // "ID07-62": Node_ID07_62, // [PRO]
  // "ID07-63": Node_ID07_63, // [PRO]
  // "ID07-64": Node_ID07_64, // [PRO]
  // "ID07-65": Node_ID07_65, // [PRO]
  // "ID07-66": Node_ID07_66, // [PRO]
  // "ID07-67": Node_ID07_67, // [OMEGA]
  // "ID07-68": Node_ID07_68, // [OMEGA]
  // "ID07-69": Node_ID07_69, // [OMEGA]
  // "ID07-70": Node_ID07_70, // [OMEGA]

  // 📂 SEKCIA H
  // "ID07-71": Node_ID07_71, // [PRO]
  // "ID07-72": Node_ID07_72, // [PRO]
  // "ID07-73": Node_ID07_73, // [PRO]
  // "ID07-74": Node_ID07_74, // [PRO]
  // "ID07-75": Node_ID07_75, // [PRO]
  // "ID07-76": Node_ID07_76, // [PRO]
  // "ID07-77": Node_ID07_77, // [OMEGA]
  // "ID07-78": Node_ID07_78, // [OMEGA]
  // "ID07-79": Node_ID07_79, // [OMEGA]
  // "ID07-80": Node_ID07_80, // [OMEGA]

  // 📂 SEKCIA I
  // "ID07-81": Node_ID07_81, // [PRO]
  // "ID07-82": Node_ID07_82, // [PRO]
  // "ID07-83": Node_ID07_83, // [PRO]
  // "ID07-84": Node_ID07_84, // [PRO]
  // "ID07-85": Node_ID07_85, // [PRO]
  // "ID07-86": Node_ID07_86, // [PRO]
  // "ID07-87": Node_ID07_87, // [OMEGA]
  // "ID07-88": Node_ID07_88, // [OMEGA]
  // "ID07-89": Node_ID07_89, // [OMEGA]
  // "ID07-90": Node_ID07_90, // [OMEGA]

  // 📂 SEKCIA J
  // "ID07-91": Node_ID07_91, // [PRO]
  // "ID07-92": Node_ID07_92, // [PRO]
  // "ID07-93": Node_ID07_93, // [PRO]
  // "ID07-94": Node_ID07_94, // [PRO]
  // "ID07-95": Node_ID07_95, // [OMEGA]
  // "ID07-96": Node_ID07_96, // [OMEGA]
  // "ID07-97": Node_ID07_97, // [OMEGA]
  // "ID07-98": Node_ID07_98, // [OMEGA]
  // "ID07-99": Node_ID07_99, // [OMEGA]
  // "ID07-100": Node_ID07_100, // [OMEGA]
};

export default function ID07_SkillsTree() {
  return (
    <>
      <MetaTags 
        title="SKILLS-TREE: IT Zručnosti, Programovanie a Web Development | NEXUS OS"
        description="Vybudujte si expertnú maticu IT zručností. SKILLS-TREE je priestor pre profesionálny web development, programovanie (React, Tailwind, SQL) a softvérové inžinierstvo. Získajte tvrdé hard-skills."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id07-skills-tree.jpg"
        color="#8A2BE2"
        url="https://projekt-nexus.sk/ID07"
        ogTitle="SKILLS-TREE: Prestaň hľadať návody. Staň sa Architektom kódu"
        ogDescription="Zasekol si sa v Tutorial Hell? Sledovanie cudzích videí z teba programátora neurobí. Odomkni svoj technologický strom, získaj tvrdé IT zručnosti a začni fyzicky kódovať vlastnú realitu."
        twitterTitle="SKILLS-TREE: Prestaň hľadať návody. Staň sa Architektom kódu"
        twitterDescription="Sledovanie cudzích videí z teba programátora neurobí. Odomkni svoj technologický strom, získaj tvrdé IT zručnosti a začni kódovať realitu."
      />
      
      <GlobalDimensionHub
        dimensionId="ID07"
        dimensionName="SKILLS-TREE"
        dimColor={ID07_Map?.color || "#8A2BE2"}
        customMap={ID07_Map}
        nodeComponents={NODE_COMPONENTS}
      />
    </>
*/

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

export default function OfflineDimensionPreview() {
  const dimColor = "#8A2BE2"; // Fialová farba pre ID07 Skills-Tree

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
            ID07 // Skills-Tree
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Skills{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Tree
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Cpu size={14} style={{ color: dimColor }} /> Systémová Architektúra
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Kovárňa kódu. Expertná matica IT zručností. Tvrdé dáta pre IT
            landscape od Reactu a Tailwindu cez Databázy až po nasadenie s AI.
            Architektúra softvérového inžinierstva prežitá v každodennej praxi
            gnostického vývojára v Ghost-Móde."
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
          {ID07_Map?.sections?.map((sec) => (
            <div key={sec.sectionId} className="space-y-4">
              <h4
                className="text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2"
                style={{ color: dimColor }}
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
                        className="text-[8px] px-1 py-0.5 rounded border shrink-0 font-bold"
                        style={{ borderColor: badgeColor, color: badgeColor }}
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
