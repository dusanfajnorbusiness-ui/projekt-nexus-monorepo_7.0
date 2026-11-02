import React from "react";
import { Cpu, Lock, Database } from "lucide-react";
// Import Omega Mapy z tvojej lokálnej databázy
import { id04OmegaMap as ID04_Map } from "@main-web/data/ID04_OmegaMap";
// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "ID04_RevenueArchitect" (Offline Preview) umiestnený pod tým.

import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub";

// ============================================================================
// --- ONLINE UZLY (ID04) - REVENUE-ARCHITECT [100 NODES READY] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE BIZNISU (Vstupná Brána)
import Node_ID04_01 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_01";
import Node_ID04_02 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_02";
import Node_ID04_03 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_03";
import Node_ID04_04 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_04";
import Node_ID04_05 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_05";
import Node_ID04_06 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_06";
// import Node_ID04_07 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_07";
// import Node_ID04_08 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_08";
// import Node_ID04_09 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_09";
// import Node_ID04_10 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_10";

// 📂 SEKCIA B: PRODUKT, SLUŽBA A VALUE PROPOSITION (Kódovanie Hodnoty)
// import Node_ID04_11 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_11";
// import Node_ID04_12 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_12";
// import Node_ID04_13 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_13";
// import Node_ID04_14 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_14";
// import Node_ID04_15 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_15";
// import Node_ID04_16 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_16";
// import Node_ID04_17 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_17";
// import Node_ID04_18 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_18";
// import Node_ID04_19 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_19";
// import Node_ID04_20 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_20";

// 📂 SEKCIA C: MARKETING A ARCHITEKTÚRA ZNAČKY (Attraction Matrix)
// import Node_ID04_21 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_21";
// import Node_ID04_22 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_22";
// import Node_ID04_23 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_23";
// import Node_ID04_24 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_24";
// import Node_ID04_25 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_25";
// import Node_ID04_26 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_26";
// import Node_ID04_27 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_27";
// import Node_ID04_28 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_28";
// import Node_ID04_29 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_29";
// import Node_ID04_30 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_30";

// 📂 SEKCIA D: PREDAJNÉ LIEVIKY A KONVERZIA (Sales Funnels)
// import Node_ID04_31 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_31";
// import Node_ID04_32 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_32";
// import Node_ID04_33 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_33";
// import Node_ID04_34 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_34";
// import Node_ID04_35 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_35";
// import Node_ID04_36 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_36";
// import Node_ID04_37 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_37";
// import Node_ID04_38 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_38";
// import Node_ID04_39 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_39";
// import Node_ID04_40 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_40";

// 📂 SEKCIA E: OPERATÍVA, PROCESY A AUTOMATIZÁCIA (Backend System)
// import Node_ID04_41 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_41";
// import Node_ID04_42 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_42";
// import Node_ID04_43 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_43";
// import Node_ID04_44 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_44";
// import Node_ID04_45 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_45";
// import Node_ID04_46 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_46";
// import Node_ID04_47 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_47";
// import Node_ID04_48 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_48";
// import Node_ID04_49 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_49";
// import Node_ID04_50 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_50";

// 📂 SEKCIA F: ARCHITEKTÚRA FRANŠÍZY GENESIS (System of Systems)
// import Node_ID04_51 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_51";
// import Node_ID04_52 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_52";
// import Node_ID04_53 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_53";
// import Node_ID04_54 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_54";
// import Node_ID04_55 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_55";
// import Node_ID04_56 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_56";
// import Node_ID04_57 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_57";
// import Node_ID04_58 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_58";
// import Node_ID04_59 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_59";
// import Node_ID04_60 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_60";

// 📂 SEKCIA G: SALES & MARKETING MATRIX (Predaj a Výtlak)
// import Node_ID04_61 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_61";
// import Node_ID04_62 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_62";
// import Node_ID04_63 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_63";
// import Node_ID04_64 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_64";
// import Node_ID04_65 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_65";
// import Node_ID04_66 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_66";
// import Node_ID04_67 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_67";
// import Node_ID04_68 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_68";
// import Node_ID04_69 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_69";
// import Node_ID04_70 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_70";

// 📂 SEKCIA H: SKÁLOVANIE A PÁKOVÝ EFEKT (System Leverage)
// import Node_ID04_71 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_71";
// import Node_ID04_72 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_72";
// import Node_ID04_73 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_73";
// import Node_ID04_74 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_74";
// import Node_ID04_75 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_75";
// import Node_ID04_76 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_76";
// import Node_ID04_77 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_77";
// import Node_ID04_78 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_78";
// import Node_ID04_79 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_79";
// import Node_ID04_80 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_80";

// 📂 SEKCIA I: FINANČNÝ ZEN A PSYCHOLÓGIA TRHU
// import Node_ID04_81 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_81";
// import Node_ID04_82 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_82";
// import Node_ID04_83 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_83";
// import Node_ID04_84 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_84";
// import Node_ID04_85 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_85";
// import Node_ID04_86 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_86";
// import Node_ID04_87 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_87";
// import Node_ID04_88 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_88";
// import Node_ID04_89 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_89";
// import Node_ID04_90 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_90";

// 📂 SEKCIA J: THE ENDGAME A EXIT (Koniec Hry v Kvadrante M)
// import Node_ID04_91 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_91";
// import Node_ID04_92 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_92";
// import Node_ID04_93 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_93";
// import Node_ID04_94 from "@main-web/subPages/ID04-Business/PRO/Node_ID04_94";
// import Node_ID04_95 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_95";
// import Node_ID04_96 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_96";
// import Node_ID04_97 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_97";
// import Node_ID04_98 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_98";
// import Node_ID04_99 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_99";
// import Node_ID04_100 from "@main-web/subPages/ID04-Business/OMEGA/Node_ID04_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  "ID04-01": Node_ID04_01, // [PRO]
  "ID04-02": Node_ID04_02, // [PRO]
  "ID04-03": Node_ID04_03, // [PRO]
  "ID04-04": Node_ID04_04, // [PRO]
  "ID04-05": Node_ID04_05, // [PRO]
  "ID04-06": Node_ID04_06, // [PRO]
  // "ID04-07": Node_ID04_07, // [PRO]
  // "ID04-08": Node_ID04_08, // [PRO]
  // "ID04-09": Node_ID04_09, // [OMEGA]
  // "ID04-10": Node_ID04_10, // [OMEGA]

  // 📂 SEKCIA B
  // "ID04-11": Node_ID04_11, // [PRO]
  // "ID04-12": Node_ID04_12, // [PRO]
  // "ID04-13": Node_ID04_13, // [PRO]
  // "ID04-14": Node_ID04_14, // [PRO]
  // "ID04-15": Node_ID04_15, // [PRO]
  // "ID04-16": Node_ID04_16, // [PRO]
  // "ID04-17": Node_ID04_17, // [OMEGA]
  // "ID04-18": Node_ID04_18, // [OMEGA]
  // "ID04-19": Node_ID04_19, // [OMEGA]
  // "ID04-20": Node_ID04_20, // [OMEGA]

  // 📂 SEKCIA C
  // "ID04-21": Node_ID04_21, // [PRO]
  // "ID04-22": Node_ID04_22, // [PRO]
  // "ID04-23": Node_ID04_23, // [PRO]
  // "ID04-24": Node_ID04_24, // [PRO]
  // "ID04-25": Node_ID04_25, // [PRO]
  // "ID04-26": Node_ID04_26, // [PRO]
  // "ID04-27": Node_ID04_27, // [OMEGA]
  // "ID04-28": Node_ID04_28, // [OMEGA]
  // "ID04-29": Node_ID04_29, // [OMEGA]
  // "ID04-30": Node_ID04_30, // [OMEGA]

  // 📂 SEKCIA D
  // "ID04-31": Node_ID04_31, // [PRO]
  // "ID04-32": Node_ID04_32, // [PRO]
  // "ID04-33": Node_ID04_33, // [PRO]
  // "ID04-34": Node_ID04_34, // [PRO]
  // "ID04-35": Node_ID04_35, // [PRO]
  // "ID04-36": Node_ID04_36, // [PRO]
  // "ID04-37": Node_ID04_37, // [OMEGA]
  // "ID04-38": Node_ID04_38, // [OMEGA]
  // "ID04-39": Node_ID04_39, // [OMEGA]
  // "ID04-40": Node_ID04_40, // [OMEGA]

  // 📂 SEKCIA E
  // "ID04-41": Node_ID04_41, // [PRO]
  // "ID04-42": Node_ID04_42, // [PRO]
  // "ID04-43": Node_ID04_43, // [PRO]
  // "ID04-44": Node_ID04_44, // [PRO]
  // "ID04-45": Node_ID04_45, // [PRO]
  // "ID04-46": Node_ID04_46, // [PRO]
  // "ID04-47": Node_ID04_47, // [OMEGA]
  // "ID04-48": Node_ID04_48, // [OMEGA]
  // "ID04-49": Node_ID04_49, // [OMEGA]
  // "ID04-50": Node_ID04_50, // [OMEGA]

  // 📂 SEKCIA F
  // "ID04-51": Node_ID04_51, // [PRO]
  // "ID04-52": Node_ID04_52, // [PRO]
  // "ID04-53": Node_ID04_53, // [PRO]
  // "ID04-54": Node_ID04_54, // [PRO]
  // "ID04-55": Node_ID04_55, // [PRO]
  // "ID04-56": Node_ID04_56, // [PRO]
  // "ID04-57": Node_ID04_57, // [OMEGA]
  // "ID04-58": Node_ID04_58, // [OMEGA]
  // "ID04-59": Node_ID04_59, // [OMEGA]
  // "ID04-60": Node_ID04_60, // [OMEGA]

  // 📂 SEKCIA G
  // "ID04-61": Node_ID04_61, // [PRO]
  // "ID04-62": Node_ID04_62, // [PRO]
  // "ID04-63": Node_ID04_63, // [PRO]
  // "ID04-64": Node_ID04_64, // [PRO]
  // "ID04-65": Node_ID04_65, // [PRO]
  // "ID04-66": Node_ID04_66, // [PRO]
  // "ID04-67": Node_ID04_67, // [OMEGA]
  // "ID04-68": Node_ID04_68, // [OMEGA]
  // "ID04-69": Node_ID04_69, // [OMEGA]
  // "ID04-70": Node_ID04_70, // [OMEGA]

  // 📂 SEKCIA H
  // "ID04-71": Node_ID04_71, // [PRO]
  // "ID04-72": Node_ID04_72, // [PRO]
  // "ID04-73": Node_ID04_73, // [PRO]
  // "ID04-74": Node_ID04_74, // [PRO]
  // "ID04-75": Node_ID04_75, // [PRO]
  // "ID04-76": Node_ID04_76, // [PRO]
  // "ID04-77": Node_ID04_77, // [OMEGA]
  // "ID04-78": Node_ID04_78, // [OMEGA]
  // "ID04-79": Node_ID04_79, // [OMEGA]
  // "ID04-80": Node_ID04_80, // [OMEGA]

  // 📂 SEKCIA I
  // "ID04-81": Node_ID04_81, // [PRO]
  // "ID04-82": Node_ID04_82, // [PRO]
  // "ID04-83": Node_ID04_83, // [PRO]
  // "ID04-84": Node_ID04_84, // [PRO]
  // "ID04-85": Node_ID04_85, // [PRO]
  // "ID04-86": Node_ID04_86, // [PRO]
  // "ID04-87": Node_ID04_87, // [OMEGA]
  // "ID04-88": Node_ID04_88, // [OMEGA]
  // "ID04-89": Node_ID04_89, // [OMEGA]
  // "ID04-90": Node_ID04_90, // [OMEGA]

  // 📂 SEKCIA J
  // "ID04-91": Node_ID04_91, // [PRO]
  // "ID04-92": Node_ID04_92, // [PRO]
  // "ID04-93": Node_ID04_93, // [PRO]
  // "ID04-94": Node_ID04_94, // [PRO]
  // "ID04-95": Node_ID04_95, // [OMEGA]
  // "ID04-96": Node_ID04_96, // [OMEGA]
  // "ID04-97": Node_ID04_97, // [OMEGA]
  // "ID04-98": Node_ID04_98, // [OMEGA]
  // "ID04-99": Node_ID04_99, // [OMEGA]
  // "ID04-100": Node_ID04_100, // [OMEGA]
};

export default function ID04_RevenueArchitect_Online() {
  return (
    <>
      {/* <MetaTags 
        title="REVENUE-ARCHITECT: Budovanie biznisu a predajné lieviky | NEXUS OS"
        description="Zasekli ste sa v podnikaní? REVENUE-ARCHITECT je priestor pre dizajn biznis štruktúr, B2B škálovanie a tvorbu predajných lievikov. Vybudujte autonómny systém generujúci príjem."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id04-revenue-architect.jpg"
        color="#FFAA00"
        url="https://projekt-nexus.sk/ID04"
        ogTitle="REVENUE-ARCHITECT: Si otrokom vlastnej firmy? Zmeň to na Systém"
        ogDescription="Ak si vo firme ten najdôležitejší, postavil si si len lepšie platené väzenie. Odovzdaj operatívu algoritmom. Navrhni B2B predajné lieviky a staň sa Majiteľom autonómneho systému."
        twitterTitle="REVENUE-ARCHITECT: Si otrokom vlastnej firmy? Zmeň to na Systém"
        twitterDescription="Ak si vo firme najdôležitejší, postavil si si väzenie. Odovzdaj operatívu algoritmom. Navrhni B2B predajné lieviky a staň sa Architektom."
      /> */}

      <GlobalDimensionHub
        dimensionId="ID04"
        dimensionName="REVENUE-ARCHITECT"
        dimColor={ID04_Map?.color || "#FFAA00"}
        customMap={ID04_Map}
        nodeComponents={NODE_COMPONENTS}
      />
    </>
  );
}

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

// export default function ID04_RevenueArchitect() {
//   const dimColor = "#FFAA00"; // Farba pre ID04 Revenue-Architect (Oranžová)

//   return (
//     <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono pb-20">
{
  /* <MetaTags
        title="REVENUE-ARCHITECT: Budovanie biznisu a predajné lieviky | NEXUS OS"
        description="Zasekli ste sa v podnikaní? REVENUE-ARCHITECT je priestor pre dizajn biznis štruktúr, B2B škálovanie a tvorbu predajných lievikov. Vybudujte autonómny systém generujúci príjem."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id04-revenue-architect.jpg"
        color="#FFAA00"
        url="https://projekt-nexus.sk/ID04"
        ogTitle="REVENUE-ARCHITECT: Si otrokom vlastnej firmy? Zmeň to na Systém"
        ogDescription="Ak si vo firme ten najdôležitejší, postavil si si len lepšie platené väzenie. Odovzdaj operatívu algoritmom. Navrhni B2B predajné lieviky a staň sa Majiteľom autonómneho systému."
        twitterTitle="REVENUE-ARCHITECT: Si otrokom vlastnej firmy? Zmeň to na Systém"
        twitterDescription="Ak si vo firme najdôležitejší, postavil si si väzenie. Odovzdaj operatívu algoritmom. Navrhni B2B predajné lieviky a staň sa Architektom."
      /> */
}
{
  /* HLAVIČKA (Kompaktná) */
}
// <header className="border-b border-white/10 pb-4">
//   <div className="flex items-center gap-3 mb-2">
//     <span className="bg-black text-[#FFAA00] border border-[#FFAA00] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(255,170,0,0.3)]">
//       ID04 // Revenue-Architect
//     </span>
//     <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
//       Offline_Dimension
//     </span>
//   </div>
//   <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
//     Revenue{" "}
//     <span className="not-italic" style={{ color: dimColor }}>
//       Architect
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
//       "Dizajn biznis štruktúr a budovanie značky. Programovanie systémov
//       generujúcich príjem. Cesta profesionála od snov k exaktnej exekúcii,
//       B2B škálovaniu a strategickému plánovaniu reality v kvadrante 'M'."
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
  /* Scrollable zoznam v Grid rozložení s custom scrollbarom */
}
//         <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[50vh] min-h-[400px] overflow-y-auto custom-scrollbar">
//           {ID04_Map?.sections?.map((sec) => (
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
