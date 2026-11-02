import React from "react";
import { Scale, Lock, Database } from "lucide-react";
import { id12OmegaMap as ID12_Map } from "@main-web/data/ID12_OmegaMap";
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
// --- ONLINE UZLY (ID12) - NEXUS-CODEX [100 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: ÚSTAVA A ZÁKLADNÁ DOKTRÍNA (The Core Law)
// import Node_ID12_01 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_01";
// import Node_ID12_02 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_02";
// import Node_ID12_03 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_03";
// import Node_ID12_04 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_04";
// import Node_ID12_05 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_05";
// import Node_ID12_06 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_06";
// import Node_ID12_07 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_07";
// import Node_ID12_08 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_08";
// import Node_ID12_09 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_09";
// import Node_ID12_10 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_10";

// 📂 SEKCIA B: SÉMANTICKÁ LEGISLATÍVA (Zákony Jazyka)
// import Node_ID12_11 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_11";
// import Node_ID12_12 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_12";
// import Node_ID12_13 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_13";
// import Node_ID12_14 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_14";
// import Node_ID12_15 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_15";
// import Node_ID12_16 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_16";
// import Node_ID12_17 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_17";
// import Node_ID12_18 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_18";
// import Node_ID12_19 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_19";
// import Node_ID12_20 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_20";

// 📂 SEKCIA C: AUTH MATRIX A ZÁKONY HIERARCHIE (Prístupy)
// import Node_ID12_21 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_21";
// import Node_ID12_22 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_22";
// import Node_ID12_23 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_23";
// import Node_ID12_24 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_24";
// import Node_ID12_25 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_25";
// import Node_ID12_26 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_26";
// import Node_ID12_27 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_27";
// import Node_ID12_28 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_28";
// import Node_ID12_29 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_29";
// import Node_ID12_30 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_30";

// 📂 SEKCIA D: KÓDEX CTI A ETIKA ARCHITEKTA (Cyber-Knight)
// import Node_ID12_31 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_31";
// import Node_ID12_32 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_32";
// import Node_ID12_33 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_33";
// import Node_ID12_34 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_34";
// import Node_ID12_35 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_35";
// import Node_ID12_36 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_36";
// import Node_ID12_37 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_37";
// import Node_ID12_38 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_38";
// import Node_ID12_39 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_39";
// import Node_ID12_40 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_40";

// 📂 SEKCIA E: FINANČNÁ ÚSTAVA (Zákony Cash-Enginu)
// import Node_ID12_41 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_41";
// import Node_ID12_42 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_42";
// import Node_ID12_43 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_43";
// import Node_ID12_44 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_44";
// import Node_ID12_45 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_45";
// import Node_ID12_46 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_46";
// import Node_ID12_47 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_47";
// import Node_ID12_48 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_48";
// import Node_ID12_49 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_49";
// import Node_ID12_50 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_50";

// 📂 SEKCIA F: STABILITA SYSTÉMU (Defragmentácia a Údržba)
// import Node_ID12_51 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_51";
// import Node_ID12_52 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_52";
// import Node_ID12_53 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_53";
// import Node_ID12_54 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_54";
// import Node_ID12_55 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_55";
// import Node_ID12_56 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_56";
// import Node_ID12_57 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_57";
// import Node_ID12_58 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_58";
// import Node_ID12_59 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_59";
// import Node_ID12_60 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_60";

// 📂 SEKCIA G: ZMLUVA SO STROJOM (Pravidlá AI Integrácie)
// import Node_ID12_61 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_61";
// import Node_ID12_62 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_62";
// import Node_ID12_63 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_63";
// import Node_ID12_64 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_64";
// import Node_ID12_65 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_65";
// import Node_ID12_66 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_66";
// import Node_ID12_67 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_67";
// import Node_ID12_68 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_68";
// import Node_ID12_69 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_69";
// import Node_ID12_70 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_70";

// 📂 SEKCIA H: MULTI-TENANCY A FRANŠÍZOVÉ ZÁKONY (Scaling)
// import Node_ID12_71 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_71";
// import Node_ID12_72 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_72";
// import Node_ID12_73 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_73";
// import Node_ID12_74 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_74";
// import Node_ID12_75 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_75";
// import Node_ID12_76 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_76";
// import Node_ID12_77 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_77";
// import Node_ID12_78 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_78";
// import Node_ID12_79 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_79";
// import Node_ID12_80 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_80";

// 📂 SEKCIA I: ZÁKONY BOJA A REPREZENTÁCIE (Gaming & YT)
// import Node_ID12_81 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_81";
// import Node_ID12_82 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_82";
// import Node_ID12_83 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_83";
// import Node_ID12_84 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_84";
// import Node_ID12_85 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_85";
// import Node_ID12_86 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_86";
// import Node_ID12_87 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_87";
// import Node_ID12_88 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_88";
// import Node_ID12_89 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_89";
// import Node_ID12_90 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_90";

// 📂 SEKCIA J: ENDGAME - KÓDEX ABSOLÚTNA (Root Access)
// import Node_ID12_91 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_91";
// import Node_ID12_92 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_92";
// import Node_ID12_93 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_93";
// import Node_ID12_94 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_94";
// import Node_ID12_95 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_95";
// import Node_ID12_96 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_96";
// import Node_ID12_97 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_97";
// import Node_ID12_98 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_98";
// import Node_ID12_99 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_99";
// import Node_ID12_100 from "@main-web/subPages/ID12-Codex/OMEGA/Node_ID12_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  // "ID12-01": Node_ID12_01, // [OMEGA]
  // "ID12-02": Node_ID12_02, // [OMEGA]
  // "ID12-03": Node_ID12_03, // [OMEGA]
  // "ID12-04": Node_ID12_04, // [OMEGA]
  // "ID12-05": Node_ID12_05, // [OMEGA]
  // "ID12-06": Node_ID12_06, // [OMEGA]
  // "ID12-07": Node_ID12_07, // [OMEGA]
  // "ID12-08": Node_ID12_08, // [OMEGA]
  // "ID12-09": Node_ID12_09, // [OMEGA]
  // "ID12-10": Node_ID12_10, // [OMEGA]
  // 📂 SEKCIA B
  // "ID12-11": Node_ID12_11, // [OMEGA]
  // "ID12-12": Node_ID12_12, // [OMEGA]
  // "ID12-13": Node_ID12_13, // [OMEGA]
  // "ID12-14": Node_ID12_14, // [OMEGA]
  // "ID12-15": Node_ID12_15, // [OMEGA]
  // "ID12-16": Node_ID12_16, // [OMEGA]
  // "ID12-17": Node_ID12_17, // [OMEGA]
  // "ID12-18": Node_ID12_18, // [OMEGA]
  // "ID12-19": Node_ID12_19, // [OMEGA]
  // "ID12-20": Node_ID12_20, // [OMEGA]
  // 📂 SEKCIA C
  // "ID12-21": Node_ID12_21, // [OMEGA]
  // "ID12-22": Node_ID12_22, // [OMEGA]
  // "ID12-23": Node_ID12_23, // [OMEGA]
  // "ID12-24": Node_ID12_24, // [OMEGA]
  // "ID12-25": Node_ID12_25, // [OMEGA]
  // "ID12-26": Node_ID12_26, // [OMEGA]
  // "ID12-27": Node_ID12_27, // [OMEGA]
  // "ID12-28": Node_ID12_28, // [OMEGA]
  // "ID12-29": Node_ID12_29, // [OMEGA]
  // "ID12-30": Node_ID12_30, // [OMEGA]
  // 📂 SEKCIA D
  // "ID12-31": Node_ID12_31, // [OMEGA]
  // "ID12-32": Node_ID12_32, // [OMEGA]
  // "ID12-33": Node_ID12_33, // [OMEGA]
  // "ID12-34": Node_ID12_34, // [OMEGA]
  // "ID12-35": Node_ID12_35, // [OMEGA]
  // "ID12-36": Node_ID12_36, // [OMEGA]
  // "ID12-37": Node_ID12_37, // [OMEGA]
  // "ID12-38": Node_ID12_38, // [OMEGA]
  // "ID12-39": Node_ID12_39, // [OMEGA]
  // "ID12-40": Node_ID12_40, // [OMEGA]
  // 📂 SEKCIA E
  // "ID12-41": Node_ID12_41, // [OMEGA]
  // "ID12-42": Node_ID12_42, // [OMEGA]
  // "ID12-43": Node_ID12_43, // [OMEGA]
  // "ID12-44": Node_ID12_44, // [OMEGA]
  // "ID12-45": Node_ID12_45, // [OMEGA]
  // "ID12-46": Node_ID12_46, // [OMEGA]
  // "ID12-47": Node_ID12_47, // [OMEGA]
  // "ID12-48": Node_ID12_48, // [OMEGA]
  // "ID12-49": Node_ID12_49, // [OMEGA]
  // "ID12-50": Node_ID12_50, // [OMEGA]
  // 📂 SEKCIA F
  // "ID12-51": Node_ID12_51, // [OMEGA]
  // "ID12-52": Node_ID12_52, // [OMEGA]
  // "ID12-53": Node_ID12_53, // [OMEGA]
  // "ID12-54": Node_ID12_54, // [OMEGA]
  // "ID12-55": Node_ID12_55, // [OMEGA]
  // "ID12-56": Node_ID12_56, // [OMEGA]
  // "ID12-57": Node_ID12_57, // [OMEGA]
  // "ID12-58": Node_ID12_58, // [OMEGA]
  // "ID12-59": Node_ID12_59, // [OMEGA]
  // "ID12-60": Node_ID12_60, // [OMEGA]
  // 📂 SEKCIA G
  // "ID12-61": Node_ID12_61, // [OMEGA]
  // "ID12-62": Node_ID12_62, // [OMEGA]
  // "ID12-63": Node_ID12_63, // [OMEGA]
  // "ID12-64": Node_ID12_64, // [OMEGA]
  // "ID12-65": Node_ID12_65, // [OMEGA]
  // "ID12-66": Node_ID12_66, // [OMEGA]
  // "ID12-67": Node_ID12_67, // [OMEGA]
  // "ID12-68": Node_ID12_68, // [OMEGA]
  // "ID12-69": Node_ID12_69, // [OMEGA]
  // "ID12-70": Node_ID12_70, // [OMEGA]
  // 📂 SEKCIA H
  // "ID12-71": Node_ID12_71, // [OMEGA]
  // "ID12-72": Node_ID12_72, // [OMEGA]
  // "ID12-73": Node_ID12_73, // [OMEGA]
  // "ID12-74": Node_ID12_74, // [OMEGA]
  // "ID12-75": Node_ID12_75, // [OMEGA]
  // "ID12-76": Node_ID12_76, // [OMEGA]
  // "ID12-77": Node_ID12_77, // [OMEGA]
  // "ID12-78": Node_ID12_78, // [OMEGA]
  // "ID12-79": Node_ID12_79, // [OMEGA]
  // "ID12-80": Node_ID12_80, // [OMEGA]
  // 📂 SEKCIA I
  // "ID12-81": Node_ID12_81, // [OMEGA]
  // "ID12-82": Node_ID12_82, // [OMEGA]
  // "ID12-83": Node_ID12_83, // [OMEGA]
  // "ID12-84": Node_ID12_84, // [OMEGA]
  // "ID12-85": Node_ID12_85, // [OMEGA]
  // "ID12-86": Node_ID12_86, // [OMEGA]
  // "ID12-87": Node_ID12_87, // [OMEGA]
  // "ID12-88": Node_ID12_88, // [OMEGA]
  // "ID12-89": Node_ID12_89, // [OMEGA]
  // "ID12-90": Node_ID12_90, // [OMEGA]
  // 📂 SEKCIA J
  // "ID12-91": Node_ID12_91, // [OMEGA]
  // "ID12-92": Node_ID12_92, // [OMEGA]
  // "ID12-93": Node_ID12_93, // [OMEGA]
  // "ID12-94": Node_ID12_94, // [OMEGA]
  // "ID12-95": Node_ID12_95, // [OMEGA]
  // "ID12-96": Node_ID12_96, // [OMEGA]
  // "ID12-97": Node_ID12_97, // [OMEGA]
  // "ID12-98": Node_ID12_98, // [OMEGA]
  // "ID12-99": Node_ID12_99, // [OMEGA]
  // "ID12-100": Node_ID12_100, // [OMEGA]
};

// export default function ID12_NexusCodex() {
//   return (
//     <>
//   <MetaTags
//     title="NEXUS-CODEX: Ústava Systému, Pravidlá Matrixu a Etika Kódu | NEXUS OS"
//     description="Váš systém beží v chaose bez hraníc? NEXUS-CODEX je centrálna Ústava vášho Matrixu. Zadefinujte logické zákony, VOP a etiku operovania v Sieti pre udržanie absolútnej kontroly."
//     image="https://projekt-nexus.sk/img-nexus/dimenzie/id12-nexus-codex.jpg"
//     color="#00E5FF"
//     url="https://projekt-nexus.sk/ID12"
//     ogTitle="NEXUS-CODEX: Tvoj systém sa rúca. Odomkni kybernetickú Ústavu"
//     ogDescription="Žiješ v chaose, pretože tvojmu systému chýbajú exaktné hranice. Zastav tento Error. Odomkni NEXUS-CODEX, zaveď prísne logické zákony a chráň svoje jadro pred toxickým kódom z okolia."
//     twitterTitle="NEXUS-CODEX: Tvoj systém sa rúca. Odomkni kybernetickú Ústavu"
//     twitterDescription="Žiješ v chaose, pretože tvojmu systému chýbajú hranice. Odomkni NEXUS-CODEX a zaveď prísne logické zákony."
//   />

//   <GlobalDimensionHub
//     dimensionId="ID12"
//     dimensionName="NEXUS-CODEX"
//     dimColor={ID12_Map?.color || "#00E5FF"}
//     customMap={ID12_Map}
//     nodeComponents={NODE_COMPONENTS}
//   />
// </>
//   );
// }

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

export default function OfflineDimensionPreview() {
  const dimColor = "#00E5FF"; // Tyrkysová pre ID12 Nexus-Codex

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
            ID12 // Nexus-Codex
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Nexus{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Codex
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Scale size={14} style={{ color: dimColor }} /> Centrálna Ústava
            Matrixu
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Základná doska pre fungovanie vedomia v Sieti. Etika kódu, logické
            zákony a sémantický poriadok reality. Bez tohto dokumentu sa systém
            a tvoja franšíza zrútia do chaosu."
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
          {ID12_Map?.sections?.map((sec) => (
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
