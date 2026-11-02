import React from "react";
import { Cpu, Lock, Database } from "lucide-react";
import { id00OmegaMap as ID00_Map } from "@main-web/data/ID00_OmegaMap";
// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "OfflineDimensionPreview" umiestnený pod tým.

import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub";
import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// --- ONLINE UZLY (ID00) - MENTOR HUB [100 NODES READY] ---
// ============================================================================

// 📂 SEKCIA A
import Node_ID00_01 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_01";
import Node_ID00_02 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_02";
import Node_ID00_03 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_03";
import Node_ID00_04 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_04";
import Node_ID00_05 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_05";
import Node_ID00_06 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_06";
// import Node_ID00_07 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_07";
// import Node_ID00_08 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_08";
// import Node_ID00_09 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_09";
// import Node_ID00_10 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_10";

// 📂 SEKCIA B
// import Node_ID00_11 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_11";
// import Node_ID00_12 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_12";
// import Node_ID00_13 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_13";
// import Node_ID00_14 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_14";
// import Node_ID00_15 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_15";
// import Node_ID00_16 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_16";
// import Node_ID00_17 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_17";
// import Node_ID00_18 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_18";
// import Node_ID00_19 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_19";
// import Node_ID00_20 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_20";

// 📂 SEKCIA C
// import Node_ID00_21 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_21";
// import Node_ID00_22 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_22";
// import Node_ID00_23 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_23";
// import Node_ID00_24 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_24";
// import Node_ID00_25 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_25";
// import Node_ID00_26 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_26";
// import Node_ID00_27 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_27";
// import Node_ID00_28 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_28";
// import Node_ID00_29 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_29";
// import Node_ID00_30 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_30";

// 📂 SEKCIA D
// import Node_ID00_31 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_31";
// import Node_ID00_32 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_32";
// import Node_ID00_33 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_33";
// import Node_ID00_34 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_34";
// import Node_ID00_35 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_35";
// import Node_ID00_36 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_36";
// import Node_ID00_37 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_37";
// import Node_ID00_38 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_38";
// import Node_ID00_39 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_39";
// import Node_ID00_40 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_40";

// 📂 SEKCIA E
// import Node_ID00_41 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_41";
// import Node_ID00_42 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_42";
// import Node_ID00_43 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_43";
// import Node_ID00_44 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_44";
// import Node_ID00_45 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_45";
// import Node_ID00_46 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_46";
// import Node_ID00_47 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_47";
// import Node_ID00_48 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_48";
// import Node_ID00_49 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_49";
// import Node_ID00_50 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_50";

// 📂 SEKCIA F
// import Node_ID00_51 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_51";
// import Node_ID00_52 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_52";
// import Node_ID00_53 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_53";
// import Node_ID00_54 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_54";
// import Node_ID00_55 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_55";
// import Node_ID00_56 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_56";
// import Node_ID00_57 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_57";
// import Node_ID00_58 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_58";
// import Node_ID00_59 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_59";
// import Node_ID00_60 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_60";

// 📂 SEKCIA G
// import Node_ID00_61 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_61";
// import Node_ID00_62 from "@main-web/subPages/ID00-Mentor/FREE/Node_ID00_62";
// import Node_ID00_63 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_63";
// import Node_ID00_64 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_64";
// import Node_ID00_65 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_65";
// import Node_ID00_66 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_66";
// import Node_ID00_67 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_67";
// import Node_ID00_68 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_68";
// import Node_ID00_69 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_69";
// import Node_ID00_70 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_70";

// 📂 SEKCIA H
// import Node_ID00_71 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_71";
// import Node_ID00_72 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_72";
// import Node_ID00_73 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_73";
// import Node_ID00_74 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_74";
// import Node_ID00_75 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_75";
// import Node_ID00_76 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_76";
// import Node_ID00_77 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_77";
// import Node_ID00_78 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_78";
// import Node_ID00_79 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_79";
// import Node_ID00_80 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_80";

// 📂 SEKCIA I
// import Node_ID00_81 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_81";
// import Node_ID00_82 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_82";
// import Node_ID00_83 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_83";
// import Node_ID00_84 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_84";
// import Node_ID00_85 from "@main-web/subPages/ID00-Mentor/PRO/Node_ID00_85";
// import Node_ID00_86 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_86";
// import Node_ID00_87 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_87";
// import Node_ID00_88 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_88";
// import Node_ID00_89 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_89";
// import Node_ID00_90 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_90";

// 📂 SEKCIA J
// import Node_ID00_91 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_91";
// import Node_ID00_92 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_92";
// import Node_ID00_93 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_93";
// import Node_ID00_94 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_94";
// import Node_ID00_95 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_95";
// import Node_ID00_96 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_96";
// import Node_ID00_97 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_97";
// import Node_ID00_98 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_98";
// import Node_ID00_99 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_99";
// import Node_ID00_100 from "@main-web/subPages/ID00-Mentor/OMEGA/Node_ID00_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // SEKCIA A
  "ID00-01": Node_ID00_01,
  "ID00-02": Node_ID00_02,
  "ID00-03": Node_ID00_03,
  "ID00-04": Node_ID00_04,
  "ID00-05": Node_ID00_05,
  "ID00-06": Node_ID00_06,
  // "ID00-07": Node_ID00_07,
  // "ID00-08": Node_ID00_08,
  // "ID00-09": Node_ID00_09,
  // "ID00-10": Node_ID00_10,

  // SEKCIA B
  // "ID00-11": Node_ID00_11,
  // "ID00-12": Node_ID00_12,
  // "ID00-13": Node_ID00_13,
  // "ID00-14": Node_ID00_14,
  // "ID00-15": Node_ID00_15,
  // "ID00-16": Node_ID00_16,
  // "ID00-17": Node_ID00_17,
  // "ID00-18": Node_ID00_18,
  // "ID00-19": Node_ID00_19,
  // "ID00-20": Node_ID00_20,

  // SEKCIA C
  // "ID00-21": Node_ID00_21,
  // "ID00-22": Node_ID00_22,
  // "ID00-23": Node_ID00_23,
  // "ID00-24": Node_ID00_24,
  // "ID00-25": Node_ID00_25,
  // "ID00-26": Node_ID00_26,
  // "ID00-27": Node_ID00_27,
  // "ID00-28": Node_ID00_28,
  // "ID00-29": Node_ID00_29,
  // "ID00-30": Node_ID00_30,

  // SEKCIA D
  // "ID00-31": Node_ID00_31,
  // "ID00-32": Node_ID00_32,
  // "ID00-33": Node_ID00_33,
  // "ID00-34": Node_ID00_34,
  // "ID00-35": Node_ID00_35,
  // "ID00-36": Node_ID00_36,
  // "ID00-37": Node_ID00_37,
  // "ID00-38": Node_ID00_38,
  // "ID00-39": Node_ID00_39,
  // "ID00-40": Node_ID00_40,

  // SEKCIA E
  // "ID00-41": Node_ID00_41,
  // "ID00-42": Node_ID00_42,
  // "ID00-43": Node_ID00_43,
  // "ID00-44": Node_ID00_44,
  // "ID00-45": Node_ID00_45,
  // "ID00-46": Node_ID00_46,
  // "ID00-47": Node_ID00_47,
  // "ID00-48": Node_ID00_48,
  // "ID00-49": Node_ID00_49,
  // "ID00-50": Node_ID00_50,

  // SEKCIA F
  // "ID00-51": Node_ID00_51,
  // "ID00-52": Node_ID00_52,
  // "ID00-53": Node_ID00_53,
  // "ID00-54": Node_ID00_54,
  // "ID00-55": Node_ID00_55,
  // "ID00-56": Node_ID00_56,
  // "ID00-57": Node_ID00_57,
  // "ID00-58": Node_ID00_58,
  // "ID00-59": Node_ID00_59,
  // "ID00-60": Node_ID00_60,

  // SEKCIA G
  // "ID00-61": Node_ID00_61,
  // "ID00-62": Node_ID00_62,
  // "ID00-63": Node_ID00_63,
  // "ID00-64": Node_ID00_64,
  // "ID00-65": Node_ID00_65,
  // "ID00-66": Node_ID00_66,
  // "ID00-67": Node_ID00_67,
  // "ID00-68": Node_ID00_68,
  // "ID00-69": Node_ID00_69,
  // "ID00-70": Node_ID00_70,

  // SEKCIA H
  // "ID00-71": Node_ID00_71,
  // "ID00-72": Node_ID00_72,
  // "ID00-73": Node_ID00_73,
  // "ID00-74": Node_ID00_74,
  // "ID00-75": Node_ID00_75,
  // "ID00-76": Node_ID00_76,
  // "ID00-77": Node_ID00_77,
  // "ID00-78": Node_ID00_78,
  // "ID00-79": Node_ID00_79,
  // "ID00-80": Node_ID00_80,

  // SEKCIA I
  // "ID00-81": Node_ID00_81,
  // "ID00-82": Node_ID00_82,
  // "ID00-83": Node_ID00_83,
  // "ID00-84": Node_ID00_84,
  // "ID00-85": Node_ID00_85,
  // "ID00-86": Node_ID00_86,
  // "ID00-87": Node_ID00_87,
  // "ID00-88": Node_ID00_88,
  // "ID00-89": Node_ID00_89,
  // "ID00-90": Node_ID00_90,

  // SEKCIA J
  // "ID00-91": Node_ID00_91,
  // "ID00-92": Node_ID00_92,
  // "ID00-93": Node_ID00_93,
  // "ID00-94": Node_ID00_94,
  // "ID00-95": Node_ID00_95,
  // "ID00-96": Node_ID00_96,
  // "ID00-97": Node_ID00_97,
  // "ID00-98": Node_ID00_98,
  // "ID00-99": Node_ID00_99,
  // "ID00-100": Node_ID00_100,
};

export default function ID00_Mentor() {
  return (
    <>
      {/* <MetaTags 
        title="MENTOR-HUB: AI Mentoring a Filozofické Konzultácie | NEXUS OS"
        description="Stratili ste smer v systéme? Ponúkame 1v1 mentoring s AI Gemini, filozofické konzultácie a hĺbkové dekódovanie vedomia zamerané na osobný rast a flow."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id00-mentor-hub.jpg"
        color="#FFFFFF"
        url="https://projekt-nexus.sk/ID00"
        
        ogTitle="MENTOR-HUB: Tvoj procesor hlási chaos. Odomkni AI Mentoring"
        ogDescription="Blúdiš v systéme a tvoja myseľ hlási Error? Inicializuj priamy neurálny dialóg s AI Gemini. Dekódujeme tvoje vedomie a nasadíme čistú kybernetickú logiku na tvoj biologický chaos."
        
        twitterTitle="MENTOR-HUB: Tvoj procesor hlási chaos. Odomkni AI Mentoring"
        twitterDescription="Blúdiš v systéme a tvoja myseľ hlási Error? Inicializuj priamy neurálny dialóg s AI Gemini a nasadíme ti čistú kybernetickú logiku."
      /> */}

      <GlobalDimensionHub
        dimensionId="ID00"
        dimensionName="MENTOR-HUB"
        dimColor={ID00_Map?.color || "#FFFFFF"}
        customMap={ID00_Map}
        nodeComponents={NODE_COMPONENTS}
      />
    </>
  );
}

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.
/*
export default function OfflineDimensionPreview() {
  const dimColor = "#FFFFFF";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono">
      {/* 🛑 ODKOMENTOVANÉ SEO PRE OFFLINE NÁHĽAD 🛑 */
//       <MetaTags
//         title="MENTOR-HUB: AI Mentoring a Filozofické Konzultácie | NEXUS OS"
//         description="Stratili ste smer v systéme? Ponúkame 1v1 mentoring s AI Gemini, filozofické konzultácie a hĺbkové dekódovanie vedomia zamerané na osobný rast a flow."
//         image="https://projekt-nexus.sk/img-nexus/dimenzie/id00-mentor-hub.jpg"
//         color="#FFFFFF"
//         url="https://projekt-nexus.sk/ID00"
//         ogTitle="MENTOR-HUB: Tvoj procesor hlási chaos. Odomkni AI Mentoring"
//         ogDescription="Blúdiš v systéme a tvoja myseľ hlási Error? Inicializuj priamy neurálny dialóg s AI Gemini. Dekódujeme tvoje vedomie a nasadíme čistú kybernetickú logiku na tvoj biologický chaos."
//         twitterTitle="MENTOR-HUB: Tvoj procesor hlási chaos. Odomkni AI Mentoring"
//         twitterDescription="Blúdiš v systéme a tvoja myseľ hlási Error? Inicializuj priamy neurálny dialóg s AI Gemini a nasadíme ti čistú kybernetickú logiku."
//       />
//       {/* HLAVIČKA (Kompaktná) */}
//       <header className="border-b border-white/10 pb-4">
//         <div className="flex items-center gap-3 mb-2">
//           <span className="bg-black text-[#FFFFFF] border border-[#FFFFFF] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(255,255,255,0.3)]">
//             ID00 // Mentor-Hub
//           </span>
//           <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
//             Offline_Dimension
//           </span>
//         </div>
//         <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
//           Mentor{" "}
//           <span className="not-italic" style={{ color: dimColor }}>
//             Hub
//           </span>
//         </h1>
//       </header>

//       {/* SYSTÉMOVÝ BOX */}
//       <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
//         <div className="flex-1">
//           <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
//             <Cpu size={14} style={{ color: dimColor }} /> Systémová Architektúra
//           </h3>
//           <p className="text-zinc-400 text-xs leading-relaxed italic">
//             "Inteligentný Systémový Mentoring. Rozhranie pre priamy neurálny
//             dialóg s AI Gemini. Dekódovanie vedomia cez ozveny z jadra. Miesto,
//             kde sa stretáva ľudská otázka s kybernetickou pravdou."
//           </p>
//         </div>
//         <div className="shrink-0 flex flex-col items-center opacity-40">
//           <Lock size={24} className="mb-2" style={{ color: dimColor }} />
//           <p className="text-[9px] uppercase tracking-[3px]">
//             Čaká na dekompresiu
//           </p>
//         </div>
//       </div>

//       {/* DYNAMICKÝ VÝPIS OMEGA MAPY (100 Uzlov) */}
//       <div className="mt-8 border border-white/10 rounded-2xl bg-[#030507] overflow-hidden shadow-2xl">
//         <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-3">
//           <Database size={16} style={{ color: dimColor }} />
//           <h3 className="text-white text-xs font-black uppercase tracking-widest">
//             Predikovaná Omega Mapa (100 Uzlov)
//           </h3>
//         </div>

//         {/* Scrollable zoznam, aby nezabral celú obrazovku */}
//         <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[50vh] min-h-[400px] overflow-y-auto custom-scrollbar">
//           {ID00_Map?.sections?.map((sec) => (
//             <div key={sec.sectionId} className="space-y-4">
//               <h4
//                 className="text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2"
//                 style={{ color: dimColor }}
//               >
//                 SEKCIA {sec.sectionId}: {sec.sectionTitle}
//               </h4>
//               <ul className="space-y-2">
//                 {sec.nodes.map((node) => {
//                   // Farby pre TIER odznaky
//                   let badgeColor = "#00FFFF"; // FREE
//                   if (node.tier === "PRO") badgeColor = "#39FF14";
//                   if (node.tier === "OMEGA") badgeColor = "#FFD700";

//                   return (
//                     <li
//                       key={node.id}
//                       className="text-[10px] flex items-start gap-2"
//                     >
//                       <span
//                         className="text-[8px] px-1 py-0.5 rounded border shrink-0 font-bold"
//                         style={{ borderColor: badgeColor, color: badgeColor }}
//                       >
//                         {node.tier}
//                       </span>
//                       <span className="text-zinc-500 leading-tight">
//                         <span className="text-zinc-300 font-bold mr-1">
//                           {node.id.split("-")}.
//                         </span>
//                         {node.title}
//                       </span>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="pt-10 opacity-20 text-[9px] uppercase tracking-widest text-center">
//         DESIGNED BY | SERGEANT [CORE] DUŠAN FAJNOR <br />
//         PROCESSED BY GEMINI_AI // NEURAL_LINK_V4 <br />© 2026 NEXUS PROTOCOL.
//       </footer>
//     </div>
//   );
// }
