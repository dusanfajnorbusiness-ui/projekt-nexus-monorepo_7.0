import React from "react";
import { Cpu, Lock, Database } from "lucide-react";
import { ID01_Map } from "@main-web/data/ID01_OmegaMap";
// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub";

// ============================================================================
// --- ONLINE UZLY (ID01) - IDENTITY CORE [104 NODES READY] ---
// ============================================================================

// 📂 SEKCIA A
import Node_ID01_01 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_01";
import Node_ID01_02 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_02";
import Node_ID01_03 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_03";
import Node_ID01_04 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_04";
import Node_ID01_05 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_05";
import Node_ID01_06 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_06";
// import Node_ID01_07 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_07";
// import Node_ID01_08 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_08";
// import Node_ID01_09 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_09";
// import Node_ID01_10 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_10";
// import Node_ID01_101 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_101";
// import Node_ID01_102 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_102";

// // 📂 SEKCIA B
// import Node_ID01_11 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_11";
// import Node_ID01_12 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_12";
// import Node_ID01_13 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_13";
// import Node_ID01_14 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_14";
// import Node_ID01_15 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_15";
// import Node_ID01_16 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_16";
// import Node_ID01_17 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_17";
// import Node_ID01_18 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_18";
// import Node_ID01_19 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_19";
// import Node_ID01_20 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_20";

// // 📂 SEKCIA C
// import Node_ID01_21 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_21";
// import Node_ID01_22 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_22";
// import Node_ID01_23 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_23";
// import Node_ID01_24 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_24";
// import Node_ID01_25 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_25";
// import Node_ID01_26 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_26";
// import Node_ID01_27 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_27";
// import Node_ID01_28 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_28";
// import Node_ID01_29 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_29";
// import Node_ID01_30 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_30";

// // 📂 SEKCIA D
// import Node_ID01_31 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_31";
// import Node_ID01_32 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_32";
// import Node_ID01_33 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_33";
// import Node_ID01_34 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_34";
// import Node_ID01_35 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_35";
// import Node_ID01_36 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_36";
// import Node_ID01_37 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_37";
// import Node_ID01_38 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_38";
// import Node_ID01_39 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_39";
// import Node_ID01_40 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_40";
// import Node_ID01_40_2 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_40_2";

// // 📂 SEKCIA E
// import Node_ID01_41 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_41";
// import Node_ID01_42 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_42";
// import Node_ID01_43 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_43";
// import Node_ID01_44 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_44";
// import Node_ID01_45 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_45";
// import Node_ID01_46 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_46";
// import Node_ID01_47 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_47";
// import Node_ID01_48 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_48";
// import Node_ID01_49 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_49";
// import Node_ID01_50 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_50";

// // 📂 SEKCIA F
// import Node_ID01_51 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_51";
// import Node_ID01_52 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_52";
// import Node_ID01_53 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_53";
// import Node_ID01_54 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_54";
// import Node_ID01_55 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_55";
// import Node_ID01_56 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_56";
// import Node_ID01_57 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_57";
// import Node_ID01_58 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_58";
// import Node_ID01_58_2 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_58_2";
// import Node_ID01_59 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_59";
// import Node_ID01_60 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_60";

// // 📂 SEKCIA G
// import Node_ID01_61 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_61";
// import Node_ID01_62 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_62";
// import Node_ID01_63 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_63";
// import Node_ID01_64 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_64";
// import Node_ID01_65 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_65";
// import Node_ID01_66 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_66";
// import Node_ID01_67 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_67";
// import Node_ID01_68 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_68";
// import Node_ID01_69 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_69";
// import Node_ID01_70 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_70";

// 📂 SEKCIA H
// import Node_ID01_71 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_71";
// import Node_ID01_72 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_72";
// import Node_ID01_73 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_73";
// import Node_ID01_74 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_74";
// import Node_ID01_75 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_75";
// import Node_ID01_76 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_76";
// import Node_ID01_77 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_77";
// import Node_ID01_78 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_78";
// import Node_ID01_79 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_79";
// import Node_ID01_80 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_80";

// 📂 SEKCIA I
// import Node_ID01_81 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_81";
// import Node_ID01_82 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_82";
// import Node_ID01_83 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_83";
// import Node_ID01_84 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_84";
// import Node_ID01_85 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_85";
// import Node_ID01_86 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_86";
// import Node_ID01_87 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_87";
// import Node_ID01_88 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_88";
// import Node_ID01_89 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_89";
// import Node_ID01_90 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_90";

// 📂 SEKCIA J
// import Node_ID01_91 from "@main-web/subPages/ID01-Identity/FREE/Node_ID01_91";
// import Node_ID01_92 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_92";
// import Node_ID01_93 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_93";
// import Node_ID01_94 from "@main-web/subPages/ID01-Identity/PRO/Node_ID01_94";
// import Node_ID01_95 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_95";
// import Node_ID01_96 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_96";
// import Node_ID01_97 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_97";
// import Node_ID01_98 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_98";
// import Node_ID01_99 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_99";
// import Node_ID01_100 from "@main-web/subPages/ID01-Identity/OMEGA/Node_ID01_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A: ZÁKLADNÉ PILIERE VONKAJŠKU
  "ID01-01": Node_ID01_01,
  "ID01-02": Node_ID01_02,
  "ID01-03": Node_ID01_03,
  "ID01-04": Node_ID01_04,
  "ID01-05": Node_ID01_05,
  "ID01-06": Node_ID01_06,
  // "ID01-07": Node_ID01_07,
  // "ID01-08": Node_ID01_08,
  // "ID01-09": Node_ID01_09,
  // "ID01-10": Node_ID01_10,
  // "ID01-101": Node_ID01_101,
  // "ID01-102": Node_ID01_102,

  // 📂 SEKCIA B: CIEĽOVANIE A VÍZIA
  // "ID01-11": Node_ID01_11,
  // "ID01-12": Node_ID01_12,
  // "ID01-13": Node_ID01_13,
  // "ID01-14": Node_ID01_14,
  // "ID01-15": Node_ID01_15,
  // "ID01-16": Node_ID01_16,
  // "ID01-17": Node_ID01_17,
  // "ID01-18": Node_ID01_18,
  // "ID01-19": Node_ID01_19,
  // "ID01-20": Node_ID01_20,

  // 📂 SEKCIA C: EFEKTÍVNY TIME MANAGEMENT
  // "ID01-21": Node_ID01_21,
  // "ID01-22": Node_ID01_22,
  // "ID01-23": Node_ID01_23,
  // "ID01-24": Node_ID01_24,
  // "ID01-25": Node_ID01_25,
  // "ID01-26": Node_ID01_26,
  // "ID01-27": Node_ID01_27,
  // "ID01-28": Node_ID01_28,
  // "ID01-29": Node_ID01_29,
  // "ID01-30": Node_ID01_30,

  // 📂 SEKCIA D: FINANČNÁ GRAMOTNOSŤ A INTELIGENCIA
  // "ID01-31": Node_ID01_31,
  // "ID01-32": Node_ID01_32,
  // "ID01-33": Node_ID01_33,
  // "ID01-34": Node_ID01_34,
  // "ID01-35": Node_ID01_35,
  // "ID01-36": Node_ID01_36,
  // "ID01-37": Node_ID01_37,
  // "ID01-38": Node_ID01_38,
  // "ID01-39": Node_ID01_39,
  // "ID01-40": Node_ID01_40,
  // "ID01-40_2": Node_ID01_40_2,

  // 📂 SEKCIA E: IT ŠTÚDIUM A REKVALIFIKÁCIA
  // "ID01-41": Node_ID01_41,
  // "ID01-42": Node_ID01_42,
  // "ID01-43": Node_ID01_43,
  // "ID01-44": Node_ID01_44,
  // "ID01-45": Node_ID01_45,
  // "ID01-46": Node_ID01_46,
  // "ID01-47": Node_ID01_47,
  // "ID01-48": Node_ID01_48,
  // "ID01-49": Node_ID01_49,
  // "ID01-50": Node_ID01_50,

  // 📂 SEKCIA F: PRODUKCIA, YOUTUBE A OSOBNÁ ZNAČKA
  // "ID01-51": Node_ID01_51,
  // "ID01-52": Node_ID01_52,
  // "ID01-53": Node_ID01_53,
  // "ID01-54": Node_ID01_54,
  // "ID01-55": Node_ID01_55,
  // "ID01-56": Node_ID01_56,
  // "ID01-57": Node_ID01_57,
  // "ID01-58": Node_ID01_58,
  // "ID01-58_2": Node_ID01_58_2,
  // "ID01-59": Node_ID01_59,
  // "ID01-60": Node_ID01_60,

  // 📂 SEKCIA G: SOCIÁLNE INTERAKCIE A VZŤAHY
  // "ID01-61": Node_ID01_61,
  // "ID01-62": Node_ID01_62,
  // "ID01-63": Node_ID01_63,
  // "ID01-64": Node_ID01_64,
  // "ID01-65": Node_ID01_65,
  // "ID01-66": Node_ID01_66,
  // "ID01-67": Node_ID01_67,
  // "ID01-68": Node_ID01_68,
  // "ID01-69": Node_ID01_69,
  // "ID01-70": Node_ID01_70,

  // 📂 SEKCIA H: PRACOVNÝ POHOVOR A KARIÉRA
  // "ID01-71": Node_ID01_71,
  // "ID01-72": Node_ID01_72,
  // "ID01-73": Node_ID01_73,
  // "ID01-74": Node_ID01_74,
  // "ID01-75": Node_ID01_75,
  // "ID01-76": Node_ID01_76,
  // "ID01-77": Node_ID01_77,
  // "ID01-78": Node_ID01_78,
  // "ID01-79": Node_ID01_79,
  // "ID01-80": Node_ID01_80,

  // 📂 SEKCIA I: MANAŽMENT VÝKONU A PSYCHOLÓGIA ÚSPECHU
  // "ID01-81": Node_ID01_81,
  // "ID01-82": Node_ID01_82,
  // "ID01-83": Node_ID01_83,
  // "ID01-84": Node_ID01_84,
  // "ID01-85": Node_ID01_85,
  // "ID01-86": Node_ID01_86,
  // "ID01-87": Node_ID01_87,
  // "ID01-88": Node_ID01_88,
  // "ID01-89": Node_ID01_89,
  // "ID01-90": Node_ID01_90,

  // 📂 SEKCIA J: INTEGRÁCIA - AVATAR V MATRIXE
  // "ID01-91": Node_ID01_91,
  // "ID01-92": Node_ID01_92,
  // "ID01-93": Node_ID01_93,
  // "ID01-94": Node_ID01_94,
  // "ID01-95": Node_ID01_95,
  // "ID01-96": Node_ID01_96,
  // "ID01-97": Node_ID01_97,
  // "ID01-98": Node_ID01_98,
  // "ID01-99": Node_ID01_99,
  // "ID01-100": Node_ID01_100,
};

export default function ID01_Identity() {
  return (
    <>
      {/* <MetaTags
        title="IDENTITY-CORE: Osobný rozvoj, psychológia a ovládnutie mysle | NEXUS OS"
        description="Cítite sa ako obeť vlastnej mysle? IDENTITY-CORE je priestor pre osobný rozvoj, dekonštrukciu Ega a budovanie silnej osobnosti. Prevezmite kontrolu nad svojím životom."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id01-identity-core.jpg"
        color="#39FF14"
        url="https://projekt-nexus.sk/ID01"
        ogTitle="IDENTITY-CORE: Tvoje Ego ťa sabotuje. Preprogramuj svoju myseľ"
        ogDescription="Tvoj systém beží na starých programoch a strachu. Zastav toxického parazita v hlave. Dekonštruuj svoje staré 'Ja' a vytvor si Avatara, ktorý v Matrixe víťazí."
        twitterTitle="IDENTITY-CORE: Tvoje Ego ťa sabotuje. Preprogramuj svoju myseľ"
        twitterDescription="Tvoj systém beží na starých programoch a strachu. Zastav toxického parazita v hlave. Dekonštruuj svoje staré 'Ja' a vytvor si nového Avatara."
      /> */}

      <GlobalDimensionHub
        dimensionId="ID01"
        dimensionName="IDENTITY-CORE"
        dimColor={ID01_Map?.color || "#39FF14"}
        customMap={ID01_Map}
        nodeComponents={NODE_COMPONENTS}
      />
    </>
  );
}

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód je ZAKOMENTOVANÝ, pretože ID01 už pobeží v ostrej prevádzke.

// export function OfflineDimensionPreview() {
//   const dimColor = "#39FF14"; // Farba pre ID01 Identity-Core

//   return (
//     <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono">
{
  /* <MetaTags
  title="IDENTITY-CORE: Osobný rozvoj, psychológia a ovládnutie mysle | NEXUS OS"
  description="Cítite sa ako obeť vlastnej mysle? IDENTITY-CORE je priestor pre osobný rozvoj, dekonštrukciu Ega a budovanie silnej osobnosti. Prevezmite kontrolu nad svojím životom."
  image="https://projekt-nexus.sk/img-nexus/dimenzie/id01-identity-core.jpg"
  color="#39FF14"
  url="https://projekt-nexus.sk/ID01"
  ogTitle="IDENTITY-CORE: Tvoje Ego ťa sabotuje. Preprogramuj svoju myseľ"
  ogDescription="Tvoj systém beží na starých programoch a strachu. Zastav toxického parazita v hlave. Dekonštruuj svoje staré 'Ja' a vytvor si Avatara, ktorý v Matrixe víťazí."
  twitterTitle="IDENTITY-CORE: Tvoje Ego ťa sabotuje. Preprogramuj svoju myseľ"
  twitterDescription="Tvoj systém beží na starých programoch a strachu. Zastav toxického parazita v hlave. Dekonštruuj svoje staré 'Ja' a vytvor si nového Avatara."
/>; */
}
//       {/* HLAVIČKA (Kompaktná) */}
//       <header className="border-b border-white/10 pb-4">
//         <div className="flex items-center gap-3 mb-2">
//           <span
//             className="bg-black text-[#FFFFFF] border border-[#FFFFFF] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(57,255,20,0.3)]"
//             style={{ borderColor: dimColor, color: dimColor }}
//           >
//             ID01 // Identity-Core
//           </span>
//           <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
//             Offline_Dimension
//           </span>
//         </div>
//         <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
//           Identity{" "}
//           <span className="not-italic" style={{ color: dimColor }}>
//             Core
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
//             "Architektúra tvojho Avatara. Rozklad eGa a hľadanie nulového bodu
//             JA. Zdrojový kód tvojej osobnosti a individuality v Matrixe. Prechod
//             od ID-ečka k čistému Bytiu tichého svedka."
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
//           {ID01_Map?.sections?.map((sec) => (
//             <div key={sec.sectionId} className="space-y-4">
//               <h4
//                 className="text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2"
//                 style={{ color: dimColor }}
//               >
//                 SEKCIA {sec.sectionId}: {sec.sectionTitle}
//               </h4>
//               <ul className="space-y-2">
//                 {sec.nodes.map((node) => {
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
