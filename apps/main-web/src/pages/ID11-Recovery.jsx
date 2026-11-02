import React from "react";
import { Activity, Lock, Database } from "lucide-react";
import { id11OmegaMap as ID11_Map } from "@main-web/data/ID11_OmegaMap";
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
// --- ONLINE UZLY (ID11) - THE-RECOVERY [100 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE OBNOVY (Vstup do Servisnej Zóny)
// import Node_ID11_01 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_01";
// import Node_ID11_02 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_02";
// import Node_ID11_03 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_03";
// import Node_ID11_04 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_04";
// import Node_ID11_05 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_05";
// import Node_ID11_06 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_06";
// import Node_ID11_07 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_07";
// import Node_ID11_08 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_08";
// import Node_ID11_09 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_09";
// import Node_ID11_10 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_10";

// 📂 SEKCIA B: DEFRAGMENTÁCIA SPÁNKU (Porážka Insomnie)
// import Node_ID11_11 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_11";
// import Node_ID11_12 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_12";
// import Node_ID11_13 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_13";
// import Node_ID11_14 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_14";
// import Node_ID11_15 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_15";
// import Node_ID11_16 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_16";
// import Node_ID11_17 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_17";
// import Node_ID11_18 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_18";
// import Node_ID11_19 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_19";
// import Node_ID11_20 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_20";

// 📂 SEKCIA C: PALIVO, STRES A OVERCLOCKING (Chémia Systému)
// import Node_ID11_21 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_21";
// import Node_ID11_22 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_22";
// import Node_ID11_23 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_23";
// import Node_ID11_24 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_24";
// import Node_ID11_25 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_25";
// import Node_ID11_26 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_26";
// import Node_ID11_27 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_27";
// import Node_ID11_28 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_28";
// import Node_ID11_29 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_29";
// import Node_ID11_30 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_30";

// 📂 SEKCIA D: MENTÁLNA HYGIENA A DETOX (Očista RAM)
// import Node_ID11_31 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_31";
// import Node_ID11_32 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_32";
// import Node_ID11_33 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_33";
// import Node_ID11_34 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_34";
// import Node_ID11_35 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_35";
// import Node_ID11_36 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_36";
// import Node_ID11_37 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_37";
// import Node_ID11_38 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_38";
// import Node_ID11_39 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_39";
// import Node_ID11_40 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_40";

// 📂 SEKCIA E: DOPAMÍNOVÝ DETOX A NÁVRAT K ZÁKLADOM
// import Node_ID11_41 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_41";
// import Node_ID11_42 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_42";
// import Node_ID11_43 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_43";
// import Node_ID11_44 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_44";
// import Node_ID11_45 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_45";
// import Node_ID11_46 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_46";
// import Node_ID11_47 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_47";
// import Node_ID11_48 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_48";
// import Node_ID11_49 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_49";
// import Node_ID11_50 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_50";

// 📂 SEKCIA F: POHYB, KINETIKA A ÚDRŽBA HARDVÉRU
// import Node_ID11_51 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_51";
// import Node_ID11_52 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_52";
// import Node_ID11_53 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_53";
// import Node_ID11_54 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_54";
// import Node_ID11_55 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_55";
// import Node_ID11_56 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_56";
// import Node_ID11_57 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_57";
// import Node_ID11_58 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_58";
// import Node_ID11_59 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_59";
// import Node_ID11_60 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_60";

// 📂 SEKCIA G: DYCH A PRÚDENIE ENERGIE (The Chi Engine)
// import Node_ID11_61 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_61";
// import Node_ID11_62 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_62";
// import Node_ID11_63 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_63";
// import Node_ID11_64 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_64";
// import Node_ID11_65 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_65";
// import Node_ID11_66 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_66";
// import Node_ID11_67 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_67";
// import Node_ID11_68 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_68";
// import Node_ID11_69 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_69";
// import Node_ID11_70 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_70";

// 📂 SEKCIA H: TERAPIA, FREKVENCIE A BIO-ZARIADENIA
// import Node_ID11_71 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_71";
// import Node_ID11_72 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_72";
// import Node_ID11_73 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_73";
// import Node_ID11_74 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_74";
// import Node_ID11_75 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_75";
// import Node_ID11_76 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_76";
// import Node_ID11_77 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_77";
// import Node_ID11_78 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_78";
// import Node_ID11_79 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_79";
// import Node_ID11_80 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_80";

// 📂 SEKCIA I: 3-MINÚTOVÝ RESET (Pohotovostný Protokol)
// import Node_ID11_81 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_81";
// import Node_ID11_82 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_82";
// import Node_ID11_83 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_83";
// import Node_ID11_84 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_84";
// import Node_ID11_85 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_85";
// import Node_ID11_86 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_86";
// import Node_ID11_87 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_87";
// import Node_ID11_88 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_88";
// import Node_ID11_89 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_89";
// import Node_ID11_90 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_90";

// 📂 SEKCIA J: ENDGAME (Nezničiteľný Skafander a Bytie)
// import Node_ID11_91 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_91";
// import Node_ID11_92 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_92";
// import Node_ID11_93 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_93";
// import Node_ID11_94 from "@main-web/subPages/ID11-Recovery/PRO/Node_ID11_94";
// import Node_ID11_95 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_95";
// import Node_ID11_96 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_96";
// import Node_ID11_97 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_97";
// import Node_ID11_98 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_98";
// import Node_ID11_99 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_99";
// import Node_ID11_100 from "@main-web/subPages/ID11-Recovery/OMEGA/Node_ID11_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  // "ID11-01": Node_ID11_01, // [PRO]
  // "ID11-02": Node_ID11_02, // [PRO]
  // "ID11-03": Node_ID11_03, // [PRO]
  // "ID11-04": Node_ID11_04, // [PRO]
  // "ID11-05": Node_ID11_05, // [PRO]
  // "ID11-06": Node_ID11_06, // [PRO]
  // "ID11-07": Node_ID11_07, // [PRO]
  // "ID11-08": Node_ID11_08, // [PRO]
  // "ID11-09": Node_ID11_09, // [OMEGA]
  // "ID11-10": Node_ID11_10, // [OMEGA]
  // 📂 SEKCIA B
  // "ID11-11": Node_ID11_11, // [PRO]
  // "ID11-12": Node_ID11_12, // [PRO]
  // "ID11-13": Node_ID11_13, // [PRO]
  // "ID11-14": Node_ID11_14, // [PRO]
  // "ID11-15": Node_ID11_15, // [PRO]
  // "ID11-16": Node_ID11_16, // [PRO]
  // "ID11-17": Node_ID11_17, // [OMEGA]
  // "ID11-18": Node_ID11_18, // [OMEGA]
  // "ID11-19": Node_ID11_19, // [OMEGA]
  // "ID11-20": Node_ID11_20, // [OMEGA]
  // 📂 SEKCIA C
  // "ID11-21": Node_ID11_21, // [PRO]
  // "ID11-22": Node_ID11_22, // [PRO]
  // "ID11-23": Node_ID11_23, // [PRO]
  // "ID11-24": Node_ID11_24, // [PRO]
  // "ID11-25": Node_ID11_25, // [PRO]
  // "ID11-26": Node_ID11_26, // [PRO]
  // "ID11-27": Node_ID11_27, // [OMEGA]
  // "ID11-28": Node_ID11_28, // [OMEGA]
  // "ID11-29": Node_ID11_29, // [OMEGA]
  // "ID11-30": Node_ID11_30, // [OMEGA]
  // 📂 SEKCIA D
  // "ID11-31": Node_ID11_31, // [PRO]
  // "ID11-32": Node_ID11_32, // [PRO]
  // "ID11-33": Node_ID11_33, // [PRO]
  // "ID11-34": Node_ID11_34, // [PRO]
  // "ID11-35": Node_ID11_35, // [PRO]
  // "ID11-36": Node_ID11_36, // [PRO]
  // "ID11-37": Node_ID11_37, // [OMEGA]
  // "ID11-38": Node_ID11_38, // [OMEGA]
  // "ID11-39": Node_ID11_39, // [OMEGA]
  // "ID11-40": Node_ID11_40, // [OMEGA]
  // 📂 SEKCIA E
  // "ID11-41": Node_ID11_41, // [PRO]
  // "ID11-42": Node_ID11_42, // [PRO]
  // "ID11-43": Node_ID11_43, // [PRO]
  // "ID11-44": Node_ID11_44, // [PRO]
  // "ID11-45": Node_ID11_45, // [PRO]
  // "ID11-46": Node_ID11_46, // [PRO]
  // "ID11-47": Node_ID11_47, // [OMEGA]
  // "ID11-48": Node_ID11_48, // [OMEGA]
  // "ID11-49": Node_ID11_49, // [OMEGA]
  // "ID11-50": Node_ID11_50, // [OMEGA]
  // 📂 SEKCIA F
  // "ID11-51": Node_ID11_51, // [PRO]
  // "ID11-52": Node_ID11_52, // [PRO]
  // "ID11-53": Node_ID11_53, // [PRO]
  // "ID11-54": Node_ID11_54, // [PRO]
  // "ID11-55": Node_ID11_55, // [PRO]
  // "ID11-56": Node_ID11_56, // [PRO]
  // "ID11-57": Node_ID11_57, // [OMEGA]
  // "ID11-58": Node_ID11_58, // [OMEGA]
  // "ID11-59": Node_ID11_59, // [OMEGA]
  // "ID11-60": Node_ID11_60, // [OMEGA]
  // 📂 SEKCIA G
  // "ID11-61": Node_ID11_61, // [PRO]
  // "ID11-62": Node_ID11_62, // [PRO]
  // "ID11-63": Node_ID11_63, // [PRO]
  // "ID11-64": Node_ID11_64, // [PRO]
  // "ID11-65": Node_ID11_65, // [PRO]
  // "ID11-66": Node_ID11_66, // [PRO]
  // "ID11-67": Node_ID11_67, // [OMEGA]
  // "ID11-68": Node_ID11_68, // [OMEGA]
  // "ID11-69": Node_ID11_69, // [OMEGA]
  // "ID11-70": Node_ID11_70, // [OMEGA]
  // 📂 SEKCIA H
  // "ID11-71": Node_ID11_71, // [PRO]
  // "ID11-72": Node_ID11_72, // [PRO]
  // "ID11-73": Node_ID11_73, // [PRO]
  // "ID11-74": Node_ID11_74, // [PRO]
  // "ID11-75": Node_ID11_75, // [PRO]
  // "ID11-76": Node_ID11_76, // [PRO]
  // "ID11-77": Node_ID11_77, // [OMEGA]
  // "ID11-78": Node_ID11_78, // [OMEGA]
  // "ID11-79": Node_ID11_79, // [OMEGA]
  // "ID11-80": Node_ID11_80, // [OMEGA]
  // 📂 SEKCIA I
  // "ID11-81": Node_ID11_81, // [PRO]
  // "ID11-82": Node_ID11_82, // [PRO]
  // "ID11-83": Node_ID11_83, // [PRO]
  // "ID11-84": Node_ID11_84, // [PRO]
  // "ID11-85": Node_ID11_85, // [PRO]
  // "ID11-86": Node_ID11_86, // [PRO]
  // "ID11-87": Node_ID11_87, // [OMEGA]
  // "ID11-88": Node_ID11_88, // [OMEGA]
  // "ID11-89": Node_ID11_89, // [OMEGA]
  // "ID11-90": Node_ID11_90, // [OMEGA]
  // 📂 SEKCIA J
  // "ID11-91": Node_ID11_91, // [PRO]
  // "ID11-92": Node_ID11_92, // [PRO]
  // "ID11-93": Node_ID11_93, // [PRO]
  // "ID11-94": Node_ID11_94, // [PRO]
  // "ID11-95": Node_ID11_95, // [OMEGA]
  // "ID11-96": Node_ID11_96, // [OMEGA]
  // "ID11-97": Node_ID11_97, // [OMEGA]
  // "ID11-98": Node_ID11_98, // [OMEGA]
  // "ID11-99": Node_ID11_99, // [OMEGA]
  // "ID11-100": Node_ID11_100, // [OMEGA]
};

// export default function ID11_TheRecovery() {
//   return (
//     <>
//   <MetaTags
//     title="THE-RECOVERY: Biohacking, Mentálne zdravie a Prevencia vyhorenia | NEXUS OS"
//     description="Tvoj biologický hardvér hlási kritické vyčerpanie. THE-RECOVERY je servisná zóna pre biohacking spánku, mentálnu hygienu a reštart neurónovej siete po vyhorení. Vráťte svojmu telu výkon."
//     image="https://projekt-nexus.sk/img-nexus/dimenzie/id11-the-recovery.jpg"
//     color="#FFBF00"
//     url="https://projekt-nexus.sk/ID11"
//     ogTitle="THE-RECOVERY: Tvoj systém padá na vyčerpanie. Odomkni reštart."
//     ogDescription="Pracovný stres a nespavosť ti pália procesor. Nečakaj na fatálny System Crash. Odomkni protokoly pre biohacking, mentálnu hygienu a vráť svojmu biologickému Skafandru stratený výkon."
//     twitterTitle="THE-RECOVERY: Tvoj systém padá na vyčerpanie. Odomkni reštart."
//     twitterDescription="Pracovný stres a nespavosť ti pália procesor. Nečakaj na fatálny System Crash. Odomkni protokoly pre biohacking a mentálnu hygienu."
//   />

//   <GlobalDimensionHub
//     dimensionId="ID11"
//     dimensionName="THE-RECOVERY"
//     dimColor={ID11_Map?.color || "#FFBF00"}
//     customMap={ID11_Map}
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
  const dimColor = "#FFBF00"; // Jantárovo Žltá / Zlatá pre ID11 The-Recovery

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
            ID11 // The-Recovery
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          The{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Recovery
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Activity size={14} style={{ color: dimColor }} /> Servisná Zóna
            Hardvéru
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Systémová obnova hardvéru. Biohacking spánku, liečenie a mentálna
            hygiena. Reset neurónovej siete po útoku Matrixu. Umenie hlbokého
            odpočinku, regenerácie a návratu k sile."
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
          {ID11_Map?.sections?.map((sec) => (
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
                          {node.id.split("-")[1]}.
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
