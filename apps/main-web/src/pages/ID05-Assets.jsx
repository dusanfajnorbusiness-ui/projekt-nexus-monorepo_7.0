import { Cpu, Lock, Database } from "lucide-react";
// Import Omega Mapy z tvojej lokálnej databázy
import { id05OmegaMap as ID05_Map } from "@main-web/data/ID05_OmegaMap";
// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "ID05_AssetsMatrix" (Offline Preview) umiestnený pod tým.

import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub";

// ============================================================================
// --- ONLINE UZLY (ID05) - ASSETS-MATRIX [100 NODES READY] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE INVESTOVANIA (Vstupná Brána)
import Node_ID05_01 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_01";
import Node_ID05_02 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_02";
import Node_ID05_03 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_03";
import Node_ID05_04 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_04";
import Node_ID05_05 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_05";
import Node_ID05_06 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_06";
// import Node_ID05_07 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_07";
// import Node_ID05_08 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_08";
// import Node_ID05_09 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_09";
// import Node_ID05_10 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_10";

// 📂 SEKCIA B: ARCHITEKTÚRA PORTFÓLIA (Asset Allocation)
// import Node_ID05_11 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_11";
// import Node_ID05_12 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_12";
// import Node_ID05_13 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_13";
// import Node_ID05_14 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_14";
// import Node_ID05_15 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_15";
// import Node_ID05_16 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_16";
// import Node_ID05_17 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_17";
// import Node_ID05_18 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_18";
// import Node_ID05_19 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_19";
// import Node_ID05_20 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_20";

// 📂 SEKCIA C: AKCIOVÝ TRH A PASÍVNE INDEXY (Tradičný Kód)
// import Node_ID05_21 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_21";
// import Node_ID05_22 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_22";
// import Node_ID05_23 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_23";
// import Node_ID05_24 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_24";
// import Node_ID05_25 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_25";
// import Node_ID05_26 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_26";
// import Node_ID05_27 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_27";
// import Node_ID05_28 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_28";
// import Node_ID05_29 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_29";
// import Node_ID05_30 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_30";

// 📂 SEKCIA D: KRYPTOMENY A DECENTRALIZOVANÉ FINANCIE (Web3 Matrix)
// import Node_ID05_31 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_31";
// import Node_ID05_32 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_32";
// import Node_ID05_33 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_33";
// import Node_ID05_34 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_34";
// import Node_ID05_35 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_35";
// import Node_ID05_36 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_36";
// import Node_ID05_37 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_37";
// import Node_ID05_38 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_38";
// import Node_ID05_39 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_39";
// import Node_ID05_40 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_40";

// 📂 SEKCIA E: REAL ESTATE A FYZICKÉ AKTÍVA (Hardvérové Bohatstvo)
// import Node_ID05_41 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_41";
// import Node_ID05_42 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_42";
// import Node_ID05_43 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_43";
// import Node_ID05_44 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_44";
// import Node_ID05_45 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_45";
// import Node_ID05_46 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_46";
// import Node_ID05_47 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_47";
// import Node_ID05_48 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_48";
// import Node_ID05_49 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_49";
// import Node_ID05_50 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_50";

// 📂 SEKCIA F: RISK MANAGEMENT A BEZPEČNOSŤ (Obrana Kapitálu)
// import Node_ID05_51 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_51";
// import Node_ID05_52 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_52";
// import Node_ID05_53 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_53";
// import Node_ID05_54 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_54";
// import Node_ID05_55 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_55";
// import Node_ID05_56 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_56";
// import Node_ID05_57 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_57";
// import Node_ID05_58 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_58";
// import Node_ID05_59 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_59";
// import Node_ID05_60 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_60";

// 📂 SEKCIA G: PSYCHOLÓGIA INVESTORA (Zen a Umenie Bohatstva)
// import Node_ID05_61 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_61";
// import Node_ID05_62 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_62";
// import Node_ID05_63 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_63";
// import Node_ID05_64 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_64";
// import Node_ID05_65 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_65";
// import Node_ID05_66 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_66";
// import Node_ID05_67 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_67";
// import Node_ID05_68 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_68";
// import Node_ID05_69 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_69";
// import Node_ID05_70 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_70";

// 📂 SEKCIA H: DAŇOVÁ A SYSTÉMOVÁ OPTIMALIZÁCIA (Štíty Matrixu)
// import Node_ID05_71 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_71";
// import Node_ID05_72 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_72";
// import Node_ID05_73 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_73";
// import Node_ID05_74 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_74";
// import Node_ID05_75 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_75";
// import Node_ID05_76 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_76";
// import Node_ID05_77 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_77";
// import Node_ID05_78 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_78";
// import Node_ID05_79 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_79";
// import Node_ID05_80 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_80";

// 📂 SEKCIA I: GENERAČNÉ BOHATSTVO A ODKAZ (Legacy Architecture)
// import Node_ID05_81 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_81";
// import Node_ID05_82 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_82";
// import Node_ID05_83 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_83";
// import Node_ID05_84 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_84";
// import Node_ID05_85 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_85";
// import Node_ID05_86 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_86";
// import Node_ID05_87 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_87";
// import Node_ID05_88 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_88";
// import Node_ID05_89 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_89";
// import Node_ID05_90 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_90";

// 📂 SEKCIA J: THE ENDGAME A ABSOLÚTNA SLOBODA (Koniec Simulácie)
// import Node_ID05_91 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_91";
// import Node_ID05_92 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_92";
// import Node_ID05_93 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_93";
// import Node_ID05_94 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_94";
// import Node_ID05_95 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_95";
// import Node_ID05_96 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_96";
// import Node_ID05_97 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_97";
// import Node_ID05_98 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_98";
// import Node_ID05_99 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_99";
// import Node_ID05_100 from "@main-web/subPages/ID05-Investments/OMEGA/Node_ID05_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  "ID05-01": Node_ID05_01, // [OMEGA]
  "ID05-02": Node_ID05_02, // [OMEGA]
  "ID05-03": Node_ID05_03, // [OMEGA]
  "ID05-04": Node_ID05_04, // [OMEGA]
  "ID05-05": Node_ID05_05, // [OMEGA]
  "ID05-06": Node_ID05_06, // [OMEGA]
  // "ID05-07": Node_ID05_07, // [OMEGA]
  // "ID05-08": Node_ID05_08, // [OMEGA]
  // "ID05-09": Node_ID05_09, // [OMEGA]
  // "ID05-10": Node_ID05_10, // [OMEGA]

  // 📂 SEKCIA B
  // "ID05-11": Node_ID05_11, // [OMEGA]
  // "ID05-12": Node_ID05_12, // [OMEGA]
  // "ID05-13": Node_ID05_13, // [OMEGA]
  // "ID05-14": Node_ID05_14, // [OMEGA]
  // "ID05-15": Node_ID05_15, // [OMEGA]
  // "ID05-16": Node_ID05_16, // [OMEGA]
  // "ID05-17": Node_ID05_17, // [OMEGA]
  // "ID05-18": Node_ID05_18, // [OMEGA]
  // "ID05-19": Node_ID05_19, // [OMEGA]
  // "ID05-20": Node_ID05_20, // [OMEGA]

  // 📂 SEKCIA C
  // "ID05-21": Node_ID05_21, // [OMEGA]
  // "ID05-22": Node_ID05_22, // [OMEGA]
  // "ID05-23": Node_ID05_23, // [OMEGA]
  // "ID05-24": Node_ID05_24, // [OMEGA]
  // "ID05-25": Node_ID05_25, // [OMEGA]
  // "ID05-26": Node_ID05_26, // [OMEGA]
  // "ID05-27": Node_ID05_27, // [OMEGA]
  // "ID05-28": Node_ID05_28, // [OMEGA]
  // "ID05-29": Node_ID05_29, // [OMEGA]
  // "ID05-30": Node_ID05_30, // [OMEGA]

  // 📂 SEKCIA D
  // "ID05-31": Node_ID05_31, // [OMEGA]
  // "ID05-32": Node_ID05_32, // [OMEGA]
  // "ID05-33": Node_ID05_33, // [OMEGA]
  // "ID05-34": Node_ID05_34, // [OMEGA]
  // "ID05-35": Node_ID05_35, // [OMEGA]
  // "ID05-36": Node_ID05_36, // [OMEGA]
  // "ID05-37": Node_ID05_37, // [OMEGA]
  // "ID05-38": Node_ID05_38, // [OMEGA]
  // "ID05-39": Node_ID05_39, // [OMEGA]
  // "ID05-40": Node_ID05_40, // [OMEGA]

  // 📂 SEKCIA E
  // "ID05-41": Node_ID05_41, // [OMEGA]
  // "ID05-42": Node_ID05_42, // [OMEGA]
  // "ID05-43": Node_ID05_43, // [OMEGA]
  // "ID05-44": Node_ID05_44, // [OMEGA]
  // "ID05-45": Node_ID05_45, // [OMEGA]
  // "ID05-46": Node_ID05_46, // [OMEGA]
  // "ID05-47": Node_ID05_47, // [OMEGA]
  // "ID05-48": Node_ID05_48, // [OMEGA]
  // "ID05-49": Node_ID05_49, // [OMEGA]
  // "ID05-50": Node_ID05_50, // [OMEGA]

  // 📂 SEKCIA F
  // "ID05-51": Node_ID05_51, // [OMEGA]
  // "ID05-52": Node_ID05_52, // [OMEGA]
  // "ID05-53": Node_ID05_53, // [OMEGA]
  // "ID05-54": Node_ID05_54, // [OMEGA]
  // "ID05-55": Node_ID05_55, // [OMEGA]
  // "ID05-56": Node_ID05_56, // [OMEGA]
  // "ID05-57": Node_ID05_57, // [OMEGA]
  // "ID05-58": Node_ID05_58, // [OMEGA]
  // "ID05-59": Node_ID05_59, // [OMEGA]
  // "ID05-60": Node_ID05_60, // [OMEGA]

  // 📂 SEKCIA G
  // "ID05-61": Node_ID05_61, // [OMEGA]
  // "ID05-62": Node_ID05_62, // [OMEGA]
  // "ID05-63": Node_ID05_63, // [OMEGA]
  // "ID05-64": Node_ID05_64, // [OMEGA]
  // "ID05-65": Node_ID05_65, // [OMEGA]
  // "ID05-66": Node_ID05_66, // [OMEGA]
  // "ID05-67": Node_ID05_67, // [OMEGA]
  // "ID05-68": Node_ID05_68, // [OMEGA]
  // "ID05-69": Node_ID05_69, // [OMEGA]
  // "ID05-70": Node_ID05_70, // [OMEGA]

  // 📂 SEKCIA H
  // "ID05-71": Node_ID05_71, // [OMEGA]
  // "ID05-72": Node_ID05_72, // [OMEGA]
  // "ID05-73": Node_ID05_73, // [OMEGA]
  // "ID05-74": Node_ID05_74, // [OMEGA]
  // "ID05-75": Node_ID05_75, // [OMEGA]
  // "ID05-76": Node_ID05_76, // [OMEGA]
  // "ID05-77": Node_ID05_77, // [OMEGA]
  // "ID05-78": Node_ID05_78, // [OMEGA]
  // "ID05-79": Node_ID05_79, // [OMEGA]
  // "ID05-80": Node_ID05_80, // [OMEGA]

  // 📂 SEKCIA I
  // "ID05-81": Node_ID05_81, // [OMEGA]
  // "ID05-82": Node_ID05_82, // [OMEGA]
  // "ID05-83": Node_ID05_83, // [OMEGA]
  // "ID05-84": Node_ID05_84, // [OMEGA]
  // "ID05-85": Node_ID05_85, // [OMEGA]
  // "ID05-86": Node_ID05_86, // [OMEGA]
  // "ID05-87": Node_ID05_87, // [OMEGA]
  // "ID05-88": Node_ID05_88, // [OMEGA]
  // "ID05-89": Node_ID05_89, // [OMEGA]
  // "ID05-90": Node_ID05_90, // [OMEGA]

  // 📂 SEKCIA J
  // "ID05-91": Node_ID05_91, // [OMEGA]
  // "ID05-92": Node_ID05_92, // [OMEGA]
  // "ID05-93": Node_ID05_93, // [OMEGA]
  // "ID05-94": Node_ID05_94, // [OMEGA]
  // "ID05-95": Node_ID05_95, // [OMEGA]
  // "ID05-96": Node_ID05_96, // [OMEGA]
  // "ID05-97": Node_ID05_97, // [OMEGA]
  // "ID05-98": Node_ID05_98, // [OMEGA]
  // "ID05-99": Node_ID05_99, // [OMEGA]
  // "ID05-100": Node_ID05_100, // [OMEGA]
};

export default function ID05_AssetsMatrix_Online() {
  return (
    <>
      {/* <MetaTags 
        title="ASSETS-MATRIX: Investovanie, pasívny príjem a ETF fondy | NEXUS OS"
        description="Ochrana kapitálu pred infláciou. ASSETS-MATRIX je priestor pre investovanie, budovanie majetku, ETF fondy a kryptomeny. Multiplikácia aktív a cesta k finančnej slobode cez pasívny príjem."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id05-assets-matrix.jpg"
        color="#FF8C00"
        url="https://projekt-nexus.sk/ID05"
        ogTitle="ASSETS-MATRIX: Inflácia ti maže dáta. Zmeň peniaze na aktíva"
        ogDescription="Tvoje úspory potichu požiera inflačný vírus. Prestaň vymieňať svoj čas za peniaze. Začni budovať investičné portfólio, nakúp aktíva a odomkni Auto-Download zisku."
        twitterTitle="ASSETS-MATRIX: Inflácia ti maže dáta. Zmeň peniaze na aktíva"
        twitterDescription="Tvoje úspory potichu požiera inflačný vírus. Prestaň vymieňať čas za peniaze. Začni budovať investičné portfólio a odomkni Auto-Download zisku."
      /> */}

      <GlobalDimensionHub
        dimensionId="ID05"
        dimensionName="ASSETS-MATRIX"
        dimColor={ID05_Map?.color || "#FF8C00"}
        customMap={ID05_Map}
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
//   const dimColor = "#FF8C00"; // Oranžová farba pre ID05 Assets-Matrix

//   return (
//     <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono">
{
  /* <MetaTags
        title="ASSETS-MATRIX: Investovanie, pasívny príjem a ETF fondy | NEXUS OS"
        description="Ochrana kapitálu pred infláciou. ASSETS-MATRIX je priestor pre investovanie, budovanie majetku, ETF fondy a kryptomeny. Multiplikácia aktív a cesta k finančnej slobode cez pasívny príjem."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id05-assets-matrix.jpg"
        color="#FF8C00"
        url="https://projekt-nexus.sk/ID05"
        ogTitle="ASSETS-MATRIX: Inflácia ti maže dáta. Zmeň peniaze na aktíva"
        ogDescription="Tvoje úspory potichu požiera inflačný vírus. Prestaň vymieňať svoj čas za peniaze. Začni budovať investičné portfólio, nakúp aktíva a odomkni Auto-Download zisku."
        twitterTitle="ASSETS-MATRIX: Inflácia ti maže dáta. Zmeň peniaze na aktíva"
        twitterDescription="Tvoje úspory potichu požiera inflačný vírus. Prestaň vymieňať čas za peniaze. Začni budovať investičné portfólio a odomkni Auto-Download zisku."
      /> */
}
{
  /* HLAVIČKA (Kompaktná) */
}
//       <header className="border-b border-white/10 pb-4">
//         <div className="flex items-center gap-3 mb-2">
//           <span
//             className="bg-black border px-2 py-0.5 text-[10px] font-black uppercase tracking-widest"
//             style={{
//               borderColor: dimColor,
//               color: dimColor,
//               boxShadow: `0 0 10px ${dimColor}40`,
//             }}
//           >
//             ID05 // Assets-Matrix
//           </span>
//           <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
//             Offline_Dimension
//           </span>
//         </div>
//         <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
//           Assets{" "}
//           <span className="not-italic" style={{ color: dimColor }}>
//             Matrix
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
//             "Architektúra alokácie kapitálu. Hacking finančného Matrixu.
//             Multiplikácia aktív, nehnuteľností a digitálneho kapitálu cez
//             zložené úročenie. Cesta k absolútnej slobode cez plynulý,
//             nezastaviteľný cashflow bez tvojej aktívnej účasti."
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

//         {/* Scrollable zoznam */}
//         <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[50vh] min-h-[400px] overflow-y-auto custom-scrollbar">
//           {ID05_Map?.sections?.map((sec) => (
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
//                   if (node.tier === "OMEGA") badgeColor = "#FFD700"; // OMEGA tier

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
