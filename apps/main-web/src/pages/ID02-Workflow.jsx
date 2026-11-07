import React from "react";
import { Cpu, Lock, Database } from "lucide-react";
import { id02OmegaMap as ID02_Map } from "@main-web/data/ID02_OmegaMap.js";
// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "ID02_Workflow" (Offline Preview) umiestnený pod tým.

import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub.jsx";

// ============================================================================
// --- ONLINE UZLY (ID02) - THE WORKFLOW [100 NODES READY] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE ZAMESTNANIA (Vstupná Brána)
import Node_ID02_01 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_01.jsx";
import Node_ID02_02 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_02.jsx";
import Node_ID02_03 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_03.jsx";
import Node_ID02_04 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_04.jsx";
import Node_ID02_05 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_05.jsx";
import Node_ID02_06 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_06.jsx";
// import Node_ID02_07 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_07";
// import Node_ID02_08 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_08";
// import Node_ID02_09 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_09";
// import Node_ID02_10 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_10";
// import Node_ID02_101 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_101";
// import Node_ID02_102 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_102";

// 📂 SEKCIA B: ELIMINÁCIA TRENIA A ODPORU (Anti-Friction Protocols)
// import Node_ID02_11 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_11";
// import Node_ID02_12 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_12";
// import Node_ID02_13 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_13";
// import Node_ID02_14 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_14";
// import Node_ID02_15 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_15";
// import Node_ID02_16 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_16";
// import Node_ID02_17 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_17";
// import Node_ID02_18 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_18";
// import Node_ID02_19 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_19";
// import Node_ID02_20 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_20";

// 📂 SEKCIA C: EFEKTÍVNY TIME MANAGEMENT (Ovládnutie Času)
// import Node_ID02_21 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_21";
// import Node_ID02_22 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_22";
// import Node_ID02_23 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_23";
// import Node_ID02_24 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_24";
// import Node_ID02_25 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_25";
// import Node_ID02_26 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_26";
// import Node_ID02_27 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_27";
// import Node_ID02_28 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_28";
// import Node_ID02_29 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_29";
// import Node_ID02_30 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_30";

// 📂 SEKCIA D: MAXIMALIZÁCIA ZÁROBKU V KVADRANTE "Z"
// import Node_ID02_31 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_31";
// import Node_ID02_32 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_32";
// import Node_ID02_33 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_33";
// import Node_ID02_34 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_34";
// import Node_ID02_35 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_35";
// import Node_ID02_36 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_36";
// import Node_ID02_37 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_37";
// import Node_ID02_38 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_38";
// import Node_ID02_39 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_39";
// import Node_ID02_40 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_40";

// 📂 SEKCIA E: AGILE A SCRUM METODIKA (Systémová Exekúcia)
// import Node_ID02_41 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_41";
// import Node_ID02_42 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_42";
// import Node_ID02_43 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_43";
// import Node_ID02_44 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_44";
// import Node_ID02_45 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_45";
// import Node_ID02_46 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_46";
// import Node_ID02_47 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_47";
// import Node_ID02_48 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_48";
// import Node_ID02_49 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_49";
// import Node_ID02_50 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_50";

// 📂 SEKCIA F: AI A AUTOMATIZÁCIA RUTINY (Zvýšenie Bandwidthu)
// import Node_ID02_51 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_51";
// import Node_ID02_52 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_52";
// import Node_ID02_53 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_53";
// import Node_ID02_54 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_54";
// import Node_ID02_55 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_55";
// import Node_ID02_56 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_56";
// import Node_ID02_57 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_57";
// import Node_ID02_58 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_58";
// import Node_ID02_59 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_59";
// import Node_ID02_60 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_60";

// 📂 SEKCIA G: ZRUČNOSTI A DOŽIVOTNÉ VZDELÁVANIE (Avatar Upgrade)
// import Node_ID02_61 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_61";
// import Node_ID02_62 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_62";
// import Node_ID02_63 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_63";
// import Node_ID02_64 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_64";
// import Node_ID02_65 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_65";
// import Node_ID02_66 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_66";
// import Node_ID02_67 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_67";
// import Node_ID02_68 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_68";
// import Node_ID02_69 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_69";
// import Node_ID02_70 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_70";

// 📂 SEKCIA H: FYZICKÁ A MENTÁLNA ÚDRŽBA (Recovery a Stres)
// import Node_ID02_71 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_71";
// import Node_ID02_72 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_72";
// import Node_ID02_73 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_73";
// import Node_ID02_74 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_74";
// import Node_ID02_75 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_75";
// import Node_ID02_76 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_76";
// import Node_ID02_77 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_77";
// import Node_ID02_78 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_78";
// import Node_ID02_79 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_79";
// import Node_ID02_80 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_80";

// 📂 SEKCIA I: MANAŽMENT PROJEKTOV A ÚLOH (Aplikácia teórie)
// import Node_ID02_81 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_81";
// import Node_ID02_82 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_82";
// import Node_ID02_83 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_83";
// import Node_ID02_84 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_84";
// import Node_ID02_85 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_85";
// import Node_ID02_86 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_86";
// import Node_ID02_87 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_87";
// import Node_ID02_88 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_88";
// import Node_ID02_89 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_89";
// import Node_ID02_90 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_90";

// 📂 SEKCIA J: PRECHODOVÁ FÁZA (Príprava na EXIT)
// import Node_ID02_91 from "@main-web/subPages/ID02-Workflow/FREE/Node_ID02_91";
// import Node_ID02_92 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_92";
// import Node_ID02_93 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_93";
// import Node_ID02_94 from "@main-web/subPages/ID02-Workflow/PRO/Node_ID02_94";
// import Node_ID02_95 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_95";
// import Node_ID02_96 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_96";
// import Node_ID02_97 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_97";
// import Node_ID02_98 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_98";
// import Node_ID02_99 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_99";
// import Node_ID02_100 from "@main-web/subPages/ID02-Workflow/OMEGA/Node_ID02_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  "ID02-01": Node_ID02_01, // [FREE]
  "ID02-02": Node_ID02_02, // [FREE]
  "ID02-03": Node_ID02_03, // [FREE]
  "ID02-04": Node_ID02_04, // [FREE]
  "ID02-05": Node_ID02_05, // [FREE]
  "ID02-06": Node_ID02_06, // [FREE]
  // "ID02-07": Node_ID02_07, // [PRO]
  // "ID02-08": Node_ID02_08, // [PRO]
  // "ID02-09": Node_ID02_09, // [OMEGA]
  // "ID02-10": Node_ID02_10, // [OMEGA]
  // "ID02-101": Node_ID02_101, // [FREE]
  // "ID02-102": Node_ID02_102, // [FREE]

  // 📂 SEKCIA B
  // "ID02-11": Node_ID02_11, // [FREE]
  // "ID02-12": Node_ID02_12, // [FREE]
  // "ID02-13": Node_ID02_13, // [PRO]
  // "ID02-14": Node_ID02_14, // [PRO]
  // "ID02-15": Node_ID02_15, // [PRO]
  // "ID02-16": Node_ID02_16, // [PRO]
  // "ID02-17": Node_ID02_17, // [OMEGA]
  // "ID02-18": Node_ID02_18, // [OMEGA]
  // "ID02-19": Node_ID02_19, // [OMEGA]
  // "ID02-20": Node_ID02_20, // [OMEGA]

  // 📂 SEKCIA C
  // "ID02-21": Node_ID02_21, // [FREE]
  // "ID02-22": Node_ID02_22, // [FREE]
  // "ID02-23": Node_ID02_23, // [PRO]
  // "ID02-24": Node_ID02_24, // [PRO]
  // "ID02-25": Node_ID02_25, // [PRO]
  // "ID02-26": Node_ID02_26, // [PRO]
  // "ID02-27": Node_ID02_27, // [OMEGA]
  // "ID02-28": Node_ID02_28, // [OMEGA]
  // "ID02-29": Node_ID02_29, // [OMEGA]
  // "ID02-30": Node_ID02_30, // [OMEGA]

  // 📂 SEKCIA D
  // "ID02-31": Node_ID02_31, // [FREE]
  // "ID02-32": Node_ID02_32, // [FREE]
  // "ID02-33": Node_ID02_33, // [PRO]
  // "ID02-34": Node_ID02_34, // [PRO]
  // "ID02-35": Node_ID02_35, // [PRO]
  // "ID02-36": Node_ID02_36, // [PRO]
  // "ID02-37": Node_ID02_37, // [OMEGA]
  // "ID02-38": Node_ID02_38, // [OMEGA]
  // "ID02-39": Node_ID02_39, // [OMEGA]
  // "ID02-40": Node_ID02_40, // [OMEGA]

  // 📂 SEKCIA E
  // "ID02-41": Node_ID02_41, // [FREE]
  // "ID02-42": Node_ID02_42, // [FREE]
  // "ID02-43": Node_ID02_43, // [PRO]
  // "ID02-44": Node_ID02_44, // [PRO]
  // "ID02-45": Node_ID02_45, // [PRO]
  // "ID02-46": Node_ID02_46, // [PRO]
  // "ID02-47": Node_ID02_47, // [OMEGA]
  // "ID02-48": Node_ID02_48, // [OMEGA]
  // "ID02-49": Node_ID02_49, // [OMEGA]
  // "ID02-50": Node_ID02_50, // [OMEGA]

  // 📂 SEKCIA F
  // "ID02-51": Node_ID02_51, // [FREE]
  // "ID02-52": Node_ID02_52, // [FREE]
  // "ID02-53": Node_ID02_53, // [PRO]
  // "ID02-54": Node_ID02_54, // [PRO]
  // "ID02-55": Node_ID02_55, // [PRO]
  // "ID02-56": Node_ID02_56, // [PRO]
  // "ID02-57": Node_ID02_57, // [OMEGA]
  // "ID02-58": Node_ID02_58, // [OMEGA]
  // "ID02-59": Node_ID02_59, // [OMEGA]
  // "ID02-60": Node_ID02_60, // [OMEGA]

  // 📂 SEKCIA G
  // "ID02-61": Node_ID02_61, // [FREE]
  // "ID02-62": Node_ID02_62, // [FREE]
  // "ID02-63": Node_ID02_63, // [PRO]
  // "ID02-64": Node_ID02_64, // [PRO]
  // "ID02-65": Node_ID02_65, // [PRO]
  // "ID02-66": Node_ID02_66, // [PRO]
  // "ID02-67": Node_ID02_67, // [OMEGA]
  // "ID02-68": Node_ID02_68, // [OMEGA]
  // "ID02-69": Node_ID02_69, // [OMEGA]
  // "ID02-70": Node_ID02_70, // [OMEGA]

  // 📂 SEKCIA H
  // "ID02-71": Node_ID02_71, // [FREE]
  // "ID02-72": Node_ID02_72, // [FREE]
  // "ID02-73": Node_ID02_73, // [PRO]
  // "ID02-74": Node_ID02_74, // [PRO]
  // "ID02-75": Node_ID02_75, // [PRO]
  // "ID02-76": Node_ID02_76, // [PRO]
  // "ID02-77": Node_ID02_77, // [OMEGA]
  // "ID02-78": Node_ID02_78, // [OMEGA]
  // "ID02-79": Node_ID02_79, // [OMEGA]
  // "ID02-80": Node_ID02_80, // [OMEGA]

  // 📂 SEKCIA I
  // "ID02-81": Node_ID02_81, // [FREE]
  // "ID02-82": Node_ID02_82, // [FREE]
  // "ID02-83": Node_ID02_83, // [PRO]
  // "ID02-84": Node_ID02_84, // [PRO]
  // "ID02-85": Node_ID02_85, // [PRO]
  // "ID02-86": Node_ID02_86, // [PRO]
  // "ID02-87": Node_ID02_87, // [OMEGA]
  // "ID02-88": Node_ID02_88, // [OMEGA]
  // "ID02-89": Node_ID02_89, // [OMEGA]
  // "ID02-90": Node_ID02_90, // [OMEGA]

  // 📂 SEKCIA J
  // "ID02-91": Node_ID02_91, // [FREE]
  // "ID02-92": Node_ID02_92, // [PRO]
  // "ID02-93": Node_ID02_93, // [PRO]
  // "ID02-94": Node_ID02_94, // [PRO]
  // "ID02-95": Node_ID02_95, // [OMEGA]
  // "ID02-96": Node_ID02_96, // [OMEGA]
  // "ID02-97": Node_ID02_97, // [OMEGA]
  // "ID02-98": Node_ID02_98, // [OMEGA]
  // "ID02-99": Node_ID02_99, // [OMEGA]
  // "ID02-100": Node_ID02_100, // [OMEGA]
};

export default function ID02_Workflow() {
  return (
    <>
      {/* <MetaTags
        title="THE-WORKFLOW: Produktivita, Deep Work a Time Management | NEXUS OS"
        description="Zastavte prokrastináciu a digitálne trenie. THE-WORKFLOW je priestor pre agilnú exekúciu, time management a hlbokú prácu (Deep Work). Prevezmite kontrolu nad svojím časom a hacknite Krysí závod."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id02-the-workflow.jpg"
        color="#FFEB3B"
        url="https://projekt-nexus.sk/ID02"
        ogTitle="THE-WORKFLOW: Zastav prokrastináciu a hackni Krysí závod"
        ogDescription="Tvoj pracovný deň je plný digitálneho trenia a vyrušovania. Odinštaluj prokrastináciu. Nasadzujeme protokoly pre Deep Work a agilnú exekúciu. Získaj späť svoj čas."
        twitterTitle="THE-WORKFLOW: Zastav prokrastináciu a hackni Krysí závod"
        twitterDescription="Tvoj pracovný deň je plný digitálneho trenia a vyrušovania. Odinštaluj prokrastináciu a nasad protokoly pre Deep Work. Získaj späť svoj čas."
      /> */}

      <GlobalDimensionHub
        dimensionId="ID02"
        dimensionName="THE-WORKFLOW"
        dimColor={ID02_Map?.color || "#FFEB3B"}
        customMap={ID02_Map}
        nodeComponents={NODE_COMPONENTS}
      />
    </>
  );
}

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

// export default function OfflineDimensionPreview() {
//   const dimColor = "#FFEB3B"; // Farba pre ID02 The-Workflow (Žltá)

//   return (
//     <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono">
//       {/* <MetaTags
//         title="THE-WORKFLOW: Produktivita, Deep Work a Time Management | NEXUS OS"
//         description="Zastavte prokrastináciu a digitálne trenie. THE-WORKFLOW je priestor pre agilnú exekúciu, time management a hlbokú prácu (Deep Work). Prevezmite kontrolu nad svojím časom a hacknite Krysí závod."
//         image="https://projekt-nexus.sk/img-nexus/dimenzie/id02-the-workflow.jpg"
//         color="#FFEB3B"
//         url="https://projekt-nexus.sk/ID02"
//         ogTitle="THE-WORKFLOW: Zastav prokrastináciu a hackni Krysí závod"
//         ogDescription="Tvoj pracovný deň je plný digitálneho trenia a vyrušovania. Odinštaluj prokrastináciu. Nasadzujeme protokoly pre Deep Work a agilnú exekúciu. Získaj späť svoj čas."
//         twitterTitle="THE-WORKFLOW: Zastav prokrastináciu a hackni Krysí závod"
//         twitterDescription="Tvoj pracovný deň je plný digitálneho trenia a vyrušovania. Odinštaluj prokrastináciu a nasad protokoly pre Deep Work. Získaj späť svoj čas."
//       /> */}
//       {/* HLAVIČKA (Kompaktná) */}
//       <header className="border-b border-white/10 pb-4">
//         <div className="flex items-center gap-3 mb-2">
//           <span className="bg-black text-[#FFEB3B] border border-[#FFEB3B] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(255,235,59,0.3)]">
//             ID02 // The-Workflow
//           </span>
//           <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
//             Offline_Dimension
//           </span>
//         </div>
//         <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
//           The{" "}
//           <span className="not-italic" style={{ color: dimColor }}>
//             Workflow
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
//             "Motor tvojej reality. Sektor zameraný na elimináciu digitálneho a
//             mentálneho trenia v procese tvorby cez protokoly Agile a Deep Work.
//             Premena zamestnanca na Master Architecta vlastných procesov."
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
//           {ID02_Map?.sections?.map((sec) => (
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
//                           {node.id.split("-")[1]}.
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
//         PROCESSED BY GEMINI_AI // NEURAL_LINK_V5 <br />© 2026 NEXUS PROTOCOL.
//       </footer>
//     </div>
//   );
// }
