// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "ID03_CashEngine" (Offline Preview) umiestnený pod tým.

import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub.jsx";
// Import Omega Mapy z tvojej lokálnej databázy
import { id03OmegaMap as ID03_Map } from "@main-web/data/ID03_OmegaMap.js";
// ============================================================================
// --- ONLINE UZLY (ID03) - CASH-ENGINE [100 NODES READY] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE FINANCIÍ (Vstupná Brána)
import Node_ID03_01 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_01.jsx";
import Node_ID03_02 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_02.jsx";
import Node_ID03_03 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_03.jsx";
import Node_ID03_04 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_04.jsx";
import Node_ID03_05 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_05.jsx";
import Node_ID03_06 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_06.jsx";
import { Cpu, Database, Lock } from "lucide-react";
import React from "react";

// import Node_ID03_07 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_07";
// import Node_ID03_08 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_08";
// import Node_ID03_09 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_09";
// import Node_ID03_10 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_10";

// 📂 SEKCIA B: DEFRAGMENTÁCIA DLHU (Zbavenie sa Malvéru)
// import Node_ID03_11 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_11";
// import Node_ID03_12 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_12";
// import Node_ID03_13 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_13";
// import Node_ID03_14 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_14";
// import Node_ID03_15 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_15";
// import Node_ID03_16 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_16";
// import Node_ID03_17 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_17";
// import Node_ID03_18 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_18";
// import Node_ID03_19 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_19";
// import Node_ID03_20 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_20";

// 📂 SEKCIA C: CASHFLOW A MINIMALIZMUS (Prežitie na minime)
// import Node_ID03_21 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_21";
// import Node_ID03_22 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_22";
// import Node_ID03_23 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_23";
// import Node_ID03_24 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_24";
// import Node_ID03_25 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_25";
// import Node_ID03_26 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_26";
// import Node_ID03_27 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_27";
// import Node_ID03_28 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_28";
// import Node_ID03_29 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_29";
// import Node_ID03_30 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_30";

// 📂 SEKCIA D: KIYOSAKIHO LOGIKA V IT (Architektúra Bohatstva)
// import Node_ID03_31 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_31";
// import Node_ID03_32 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_32";
// import Node_ID03_33 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_33";
// import Node_ID03_34 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_34";
// import Node_ID03_35 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_35";
// import Node_ID03_36 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_36";
// import Node_ID03_37 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_37";
// import Node_ID03_38 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_38";
// import Node_ID03_39 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_39";
// import Node_ID03_40 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_40";

// 📂 SEKCIA E: BUDOVANIE FIREWALLU A MRR (Generátor Zisku)
// import Node_ID03_41 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_41";
// import Node_ID03_42 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_42";
// import Node_ID03_43 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_43";
// import Node_ID03_44 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_44";
// import Node_ID03_45 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_45";
// import Node_ID03_46 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_46";
// import Node_ID03_47 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_47";
// import Node_ID03_48 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_48";
// import Node_ID03_49 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_49";
// import Node_ID03_50 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_50";

// 📂 SEKCIA F: ZLOŽENÉ ÚROČENIE A INVESTIČNÉ VÍZIE (Projekcie)
// import Node_ID03_51 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_51";
// import Node_ID03_52 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_52";
// import Node_ID03_53 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_53";
// import Node_ID03_54 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_54";
// import Node_ID03_55 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_55";
// import Node_ID03_56 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_56";
// import Node_ID03_57 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_57";
// import Node_ID03_58 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_58";
// import Node_ID03_59 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_59";
// import Node_ID03_60 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_60";

// 📂 SEKCIA G: EMOCIONÁLNY FIREWALL NA TRHU (Psychológia)
// import Node_ID03_61 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_61";
// import Node_ID03_62 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_62";
// import Node_ID03_63 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_63";
// import Node_ID03_64 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_64";
// import Node_ID03_65 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_65";
// import Node_ID03_66 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_66";
// import Node_ID03_67 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_67";
// import Node_ID03_68 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_68";
// import Node_ID03_69 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_69";
// import Node_ID03_70 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_70";

// 📂 SEKCIA H: MARKETING & REVENUE INJECTION (Generátor Dát)
// import Node_ID03_71 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_71";
// import Node_ID03_72 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_72";
// import Node_ID03_73 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_73";
// import Node_ID03_74 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_74";
// import Node_ID03_75 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_75";
// import Node_ID03_76 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_76";
// import Node_ID03_77 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_77";
// import Node_ID03_78 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_78";
// import Node_ID03_79 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_79";
// import Node_ID03_80 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_80";

// 📂 SEKCIA I: SYSTÉMOVÉ ŠKÁLOVANIE A FRANŠÍZA (B2B Mód)
// import Node_ID03_81 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_81";
// import Node_ID03_82 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_82";
// import Node_ID03_83 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_83";
// import Node_ID03_84 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_84";
// import Node_ID03_85 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_85";
// import Node_ID03_86 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_86";
// import Node_ID03_87 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_87";
// import Node_ID03_88 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_88";
// import Node_ID03_89 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_89";
// import Node_ID03_90 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_90";

// 📂 SEKCIA J: ENDGAME - ABSOLÚTNA FINANČNÁ AUTONÓMIA
// import Node_ID03_91 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_91";
// import Node_ID03_92 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_92";
// import Node_ID03_93 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_93";
// import Node_ID03_94 from "@main-web/subPages/ID03-Finance/PRO/Node_ID03_94";
// import Node_ID03_95 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_95";
// import Node_ID03_96 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_96";
// import Node_ID03_97 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_97";
// import Node_ID03_98 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_98";
// import Node_ID03_99 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_99";
// import Node_ID03_100 from "@main-web/subPages/ID03-Finance/OMEGA/Node_ID03_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  "ID03-01": Node_ID03_01, // [PRO]
  "ID03-02": Node_ID03_02, // [PRO]
  "ID03-03": Node_ID03_03, // [PRO]
  "ID03-04": Node_ID03_04, // [PRO]
  "ID03-05": Node_ID03_05, // [PRO]
  "ID03-06": Node_ID03_06, // [PRO]
  // "ID03-07": Node_ID03_07, // [PRO]
  // "ID03-08": Node_ID03_08, // [PRO]
  // "ID03-09": Node_ID03_09, // [OMEGA]
  // "ID03-10": Node_ID03_10, // [OMEGA]

  // 📂 SEKCIA B
  // "ID03-11": Node_ID03_11, // [PRO]
  // "ID03-12": Node_ID03_12, // [PRO]
  // "ID03-13": Node_ID03_13, // [PRO]
  // "ID03-14": Node_ID03_14, // [PRO]
  // "ID03-15": Node_ID03_15, // [PRO]
  // "ID03-16": Node_ID03_16, // [PRO]
  // "ID03-17": Node_ID03_17, // [OMEGA]
  // "ID03-18": Node_ID03_18, // [OMEGA]
  // "ID03-19": Node_ID03_19, // [OMEGA]
  // "ID03-20": Node_ID03_20, // [OMEGA]

  // 📂 SEKCIA C
  // "ID03-21": Node_ID03_21, // [PRO]
  // "ID03-22": Node_ID03_22, // [PRO]
  // "ID03-23": Node_ID03_23, // [PRO]
  // "ID03-24": Node_ID03_24, // [PRO]
  // "ID03-25": Node_ID03_25, // [PRO]
  // "ID03-26": Node_ID03_26, // [PRO]
  // "ID03-27": Node_ID03_27, // [OMEGA]
  // "ID03-28": Node_ID03_28, // [OMEGA]
  // "ID03-29": Node_ID03_29, // [OMEGA]
  // "ID03-30": Node_ID03_30, // [OMEGA]

  // 📂 SEKCIA D
  // "ID03-31": Node_ID03_31, // [PRO]
  // "ID03-32": Node_ID03_32, // [PRO]
  // "ID03-33": Node_ID03_33, // [PRO]
  // "ID03-34": Node_ID03_34, // [PRO]
  // "ID03-35": Node_ID03_35, // [PRO]
  // "ID03-36": Node_ID03_36, // [PRO]
  // "ID03-37": Node_ID03_37, // [OMEGA]
  // "ID03-38": Node_ID03_38, // [OMEGA]
  // "ID03-39": Node_ID03_39, // [OMEGA]
  // "ID03-40": Node_ID03_40, // [OMEGA]

  // 📂 SEKCIA E
  // "ID03-41": Node_ID03_41, // [PRO]
  // "ID03-42": Node_ID03_42, // [PRO]
  // "ID03-43": Node_ID03_43, // [PRO]
  // "ID03-44": Node_ID03_44, // [PRO]
  // "ID03-45": Node_ID03_45, // [PRO]
  // "ID03-46": Node_ID03_46, // [PRO]
  // "ID03-47": Node_ID03_47, // [OMEGA]
  // "ID03-48": Node_ID03_48, // [OMEGA]
  // "ID03-49": Node_ID03_49, // [OMEGA]
  // "ID03-50": Node_ID03_50, // [OMEGA]

  // 📂 SEKCIA F
  // "ID03-51": Node_ID03_51, // [PRO]
  // "ID03-52": Node_ID03_52, // [PRO]
  // "ID03-53": Node_ID03_53, // [PRO]
  // "ID03-54": Node_ID03_54, // [PRO]
  // "ID03-55": Node_ID03_55, // [PRO]
  // "ID03-56": Node_ID03_56, // [PRO]
  // "ID03-57": Node_ID03_57, // [OMEGA]
  // "ID03-58": Node_ID03_58, // [OMEGA]
  // "ID03-59": Node_ID03_59, // [OMEGA]
  // "ID03-60": Node_ID03_60, // [OMEGA]

  // 📂 SEKCIA G
  // "ID03-61": Node_ID03_61, // [PRO]
  // "ID03-62": Node_ID03_62, // [PRO]
  // "ID03-63": Node_ID03_63, // [PRO]
  // "ID03-64": Node_ID03_64, // [PRO]
  // "ID03-65": Node_ID03_65, // [PRO]
  // "ID03-66": Node_ID03_66, // [PRO]
  // "ID03-67": Node_ID03_67, // [OMEGA]
  // "ID03-68": Node_ID03_68, // [OMEGA]
  // "ID03-69": Node_ID03_69, // [OMEGA]
  // "ID03-70": Node_ID03_70, // [OMEGA]

  // 📂 SEKCIA H
  // "ID03-71": Node_ID03_71, // [PRO]
  // "ID03-72": Node_ID03_72, // [PRO]
  // "ID03-73": Node_ID03_73, // [PRO]
  // "ID03-74": Node_ID03_74, // [PRO]
  // "ID03-75": Node_ID03_75, // [PRO]
  // "ID03-76": Node_ID03_76, // [PRO]
  // "ID03-77": Node_ID03_77, // [OMEGA]
  // "ID03-78": Node_ID03_78, // [OMEGA]
  // "ID03-79": Node_ID03_79, // [OMEGA]
  // "ID03-80": Node_ID03_80, // [OMEGA]

  // 📂 SEKCIA I
  // "ID03-81": Node_ID03_81, // [PRO]
  // "ID03-82": Node_ID03_82, // [PRO]
  // "ID03-83": Node_ID03_83, // [PRO]
  // "ID03-84": Node_ID03_84, // [PRO]
  // "ID03-85": Node_ID03_85, // [PRO]
  // "ID03-86": Node_ID03_86, // [PRO]
  // "ID03-87": Node_ID03_87, // [OMEGA]
  // "ID03-88": Node_ID03_88, // [OMEGA]
  // "ID03-89": Node_ID03_89, // [OMEGA]
  // "ID03-90": Node_ID03_90, // [OMEGA]

  // 📂 SEKCIA J
  // "ID03-91": Node_ID03_91, // [PRO]
  // "ID03-92": Node_ID03_92, // [PRO]
  // "ID03-93": Node_ID03_93, // [PRO]
  // "ID03-94": Node_ID03_94, // [PRO]
  // "ID03-95": Node_ID03_95, // [OMEGA]
  // "ID03-96": Node_ID03_96, // [OMEGA]
  // "ID03-97": Node_ID03_97, // [OMEGA]
  // "ID03-98": Node_ID03_98, // [OMEGA]
  // "ID03-99": Node_ID03_99, // [OMEGA]
  // "ID03-100": Node_ID03_100, // [OMEGA]
};

export default function ID03_CashEngine() {
  return (
    <>
      {/* <MetaTags 
        title="CASH-ENGINE: Správa osobných financií a likvidácia dlhov | NEXUS OS"
        description="Získajte kontrolu nad svojím cashflow. Operačný systém vašich peňazí. Zvyšovanie finančnej gramotnosti, likvidácia zlých dlhov a budovanie cesty k finančnej slobode."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id03-cash-engine.jpg"
        color="#FFD700"
        url="https://projekt-nexus.sk/ID03"
        ogTitle="CASH-ENGINE: Zastav finančný Memory Leak a zlikviduj dlhy"
        ogDescription="Tvoj účet je napadnutý spotrebiteľským malvérom (dlhom). Zastav tento Memory Leak. Inicializuj spojenie a prevezmi plnú architektonickú kontrolu nad svojím Cashflow."
        twitterTitle="CASH-ENGINE: Zastav finančný Memory Leak a zlikviduj dlhy"
        twitterDescription="Tvoj účet je napadnutý spotrebiteľským malvérom (dlhom). Zastav tento Memory Leak a prevezmi kontrolu nad svojím Cashflow."
      /> */}
      <GlobalDimensionHub
        dimensionId="ID03"
        dimensionName="CASH-ENGINE"
        dimColor={ID03_Map?.color || "#FFD700"}
        customMap={ID03_Map}
        nodeComponents={NODE_COMPONENTS}
      />
    </>
  );
}

/*
// ============================================================================
// 🔴 OFFLINE PREVIEW (ZOBRAZÍ SA, KÝM NEODKOMENTUJEŠ KÓD VYŠŠIE)
// ============================================================================

export default function ID03_CashEngine() {
  const dimColor = "#FFD700"; // Farba pre ID03 Cash-Engine (Zlatá)

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono pb-20">
      {/* <MetaTags
        title="CASH-ENGINE: Správa osobných financií a likvidácia dlhov | NEXUS OS"
        description="Získajte kontrolu nad svojím cashflow. Operačný systém vašich peňazí. Zvyšovanie finančnej gramotnosti, likvidácia zlých dlhov a budovanie cesty k finančnej slobode."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id03-cash-engine.jpg"
        color="#FFD700"
        url="https://projekt-nexus.sk/ID03"
        ogTitle="CASH-ENGINE: Zastav finančný Memory Leak a zlikviduj dlhy"
        ogDescription="Tvoj účet je napadnutý spotrebiteľským malvérom (dlhom). Zastav tento Memory Leak. Inicializuj spojenie a prevezmi plnú architektonickú kontrolu nad svojím Cashflow."
        twitterTitle="CASH-ENGINE: Zastav finančný Memory Leak a zlikviduj dlhy"
        twitterDescription="Tvoj účet je napadnutý spotrebiteľským malvérom (dlhom). Zastav tento Memory Leak a prevezmi kontrolu nad svojím Cashflow."
      /> */
{
  /* HLAVIČKA (Kompaktná) */
}
// <header className="border-b border-white/10 pb-4">
//   <div className="flex items-center gap-3 mb-2">
//     <span className="bg-black text-[#FFD700] border border-[#FFD700] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(255,215,0,0.3)]">
//       ID03 // Cash-Engine
//     </span>
//     <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
//       Offline_Dimension
//     </span>
//   </div>
//   <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
//     Cash{" "}
//     <span className="not-italic" style={{ color: dimColor }}>
//       Engine
//     </span>
//   </h1>
// </header>

// {/* SYSTÉMOVÝ BOX */}
// <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center shadow-lg">
//   <div className="flex-1">
//     <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
//       <Cpu size={14} style={{ color: dimColor }} /> Systémová Architektúra
//     </h3>
//     <p className="text-zinc-400 text-xs leading-relaxed italic">
//       "Operačný systém tvojich peňazí. Zvyšovanie finančného IQ a
//       gramotnosti. Prechod z ľavého kvadrantu do sféry slobody.
//       Architektúra bohatstva podľa exaktných zákonov toku kapitálu."
//     </p>
//   </div>
//   <div className="shrink-0 flex flex-col items-center opacity-40">
//     <Lock size={24} className="mb-2" style={{ color: dimColor }} />
//     <p className="text-[9px] uppercase tracking-[3px]">
//       Čaká na dekompresiu
//     </p>
//   </div>
// </div>

{
  /* DYNAMICKÝ VÝPIS OMEGA MAPY (100 Uzlov) */
}
// <div className="mt-8 border border-white/10 rounded-2xl bg-[#030507] overflow-hidden shadow-2xl relative z-10">
//   <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-3">
//     <Database size={16} style={{ color: dimColor }} />
//     <h3 className="text-white text-xs font-black uppercase tracking-widest">
//       Predikovaná Omega Mapa (100 Uzlov)
//     </h3>
//   </div>

{
  /* Scrollable zoznam, aby nezabral celú obrazovku */
}
//         <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[50vh] min-h-[400px] overflow-y-auto custom-scrollbar">
//           {ID03_Map?.sections?.map((sec) => (
//             <div key={sec.sectionId} className="space-y-4">
//               <h4
//                 className="text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2"
//                 style={{ color: dimColor }}
//               >
//                 {sec.sectionTitle}
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

//       <footer className="pt-10 opacity-20 text-[9px] uppercase tracking-widest text-center relative z-10">
//         DESIGNED BY | SERGEANT [CORE] DUŠAN FAJNOR <br />
//         PROCESSED BY GEMINI_AI // NEURAL_LINK_V5 <br />© 2026 NEXUS PROTOCOL.
//       </footer>
//     </div>
//   );
// }
