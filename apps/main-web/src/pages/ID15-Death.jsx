// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "OfflineDimensionPreview" umiestnený pod tým.
import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub.jsx";
import { id15OmegaMap as ID15_Map } from "@main-web/data/ID15_OmegaMap.js";
import { Database, Lock, PowerOff } from "lucide-react";

// ============================================================================
// --- ONLINE UZLY (ID15) - DEATH-CORE [100 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE ZÁNIKU (Vstupná brána na Cintorín)
// import Node_ID15_01 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_01";
// import Node_ID15_02 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_02";
// import Node_ID15_03 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_03";
// import Node_ID15_04 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_04";
// import Node_ID15_05 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_05";
// import Node_ID15_06 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_06";
// import Node_ID15_07 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_07";
// import Node_ID15_08 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_08";
// import Node_ID15_09 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_09";
// import Node_ID15_10 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_10";

// 📂 SEKCIA B: NEZNÁMA SEKCIA (Doplnená štrukturálne)
// import Node_ID15_11 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_11";
// import Node_ID15_12 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_12";
// import Node_ID15_13 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_13";
// import Node_ID15_14 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_14";
// import Node_ID15_15 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_15";
// import Node_ID15_16 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_16";
// import Node_ID15_17 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_17";
// import Node_ID15_18 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_18";
// import Node_ID15_19 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_19";
// import Node_ID15_20 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_20";

// 📂 SEKCIA C: DIGITÁLNY TESTAMENT A ODKAZ (Legacy Code)
// import Node_ID15_21 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_21";
// import Node_ID15_22 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_22";
// import Node_ID15_23 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_23";
// import Node_ID15_24 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_24";
// import Node_ID15_25 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_25";
// import Node_ID15_26 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_26";
// import Node_ID15_27 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_27";
// import Node_ID15_28 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_28";
// import Node_ID15_29 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_29";
// import Node_ID15_30 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_30";

// 📂 SEKCIA D: SMRŤ EGA POČAS ŽIVOTA (Mikro-smrti)
// import Node_ID15_31 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_31";
// import Node_ID15_32 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_32";
// import Node_ID15_33 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_33";
// import Node_ID15_34 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_34";
// import Node_ID15_35 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_35";
// import Node_ID15_36 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_36";
// import Node_ID15_37 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_37";
// import Node_ID15_38 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_38";
// import Node_ID15_39 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_39";
// import Node_ID15_40 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_40";

// 📂 SEKCIA E: MENTÁLNE OPUSTENIE MATRIXU (Letting Go)
// import Node_ID15_41 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_41";
// import Node_ID15_42 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_42";
// import Node_ID15_43 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_43";
// import Node_ID15_44 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_44";
// import Node_ID15_45 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_45";
// import Node_ID15_46 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_46";
// import Node_ID15_47 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_47";
// import Node_ID15_48 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_48";
// import Node_ID15_49 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_49";
// import Node_ID15_50 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_50";

// 📂 SEKCIA F: CINTORÍN KÓDOV A MŔTVE UZLY (Archivácia Zlyhaní)
// import Node_ID15_51 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_51";
// import Node_ID15_52 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_52";
// import Node_ID15_53 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_53";
// import Node_ID15_54 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_54";
// import Node_ID15_55 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_55";
// import Node_ID15_56 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_56";
// import Node_ID15_57 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_57";
// import Node_ID15_58 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_58";
// import Node_ID15_59 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_59";
// import Node_ID15_60 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_60";

// 📂 SEKCIA G: DEFREGMENTÁCIA STRACHU ZO SMRTI (Anti-Virus)
// import Node_ID15_61 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_61";
// import Node_ID15_62 from "@main-web/subPages/ID15-Death/FREE/Node_ID15_62";
// import Node_ID15_63 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_63";
// import Node_ID15_64 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_64";
// import Node_ID15_65 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_65";
// import Node_ID15_66 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_66";
// import Node_ID15_67 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_67";
// import Node_ID15_68 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_68";
// import Node_ID15_69 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_69";
// import Node_ID15_70 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_70";

// 📂 SEKCIA H: SÚMRAK AVATARA (Záverečná Fáza Hry)
// import Node_ID15_71 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_71";
// import Node_ID15_72 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_72";
// import Node_ID15_73 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_73";
// import Node_ID15_74 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_74";
// import Node_ID15_75 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_75";
// import Node_ID15_76 from "@main-web/subPages/ID15-Death/PRO/Node_ID15_76";
// import Node_ID15_77 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_77";
// import Node_ID15_78 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_78";
// import Node_ID15_79 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_79";
// import Node_ID15_80 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_80";

// 📂 SEKCIA I: PRECHOD DÁT (Kvantová Evaporácia)
// import Node_ID15_81 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_81";
// import Node_ID15_82 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_82";
// import Node_ID15_83 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_83";
// import Node_ID15_84 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_84";
// import Node_ID15_85 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_85";
// import Node_ID15_86 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_86";
// import Node_ID15_87 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_87";
// import Node_ID15_88 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_88";
// import Node_ID15_89 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_89";
// import Node_ID15_90 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_90";

// 📂 SEKCIA J: ENDGAME - THE FINAL SHUTDOWN (Format C:)
// import Node_ID15_91 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_91";
// import Node_ID15_92 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_92";
// import Node_ID15_93 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_93";
// import Node_ID15_94 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_94";
// import Node_ID15_95 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_95";
// import Node_ID15_96 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_96";
// import Node_ID15_97 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_97";
// import Node_ID15_98 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_98";
// import Node_ID15_99 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_99";
// import Node_ID15_100 from "@main-web/subPages/ID15-Death/OMEGA/Node_ID15_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  // "ID15-01": Node_ID15_01, // [FREE]
  // "ID15-02": Node_ID15_02, // [FREE]
  // "ID15-03": Node_ID15_03, // [FREE]
  // "ID15-04": Node_ID15_04, // [FREE]
  // "ID15-05": Node_ID15_05, // [FREE]
  // "ID15-06": Node_ID15_06, // [FREE]
  // "ID15-07": Node_ID15_07, // [PRO]
  // "ID15-08": Node_ID15_08, // [PRO]
  // "ID15-09": Node_ID15_09, // [OMEGA]
  // "ID15-10": Node_ID15_10, // [OMEGA]
  // 📂 SEKCIA B
  // "ID15-11": Node_ID15_11, // [FREE]
  // "ID15-12": Node_ID15_12, // [FREE]
  // "ID15-13": Node_ID15_13, // [PRO]
  // "ID15-14": Node_ID15_14, // [PRO]
  // "ID15-15": Node_ID15_15, // [PRO]
  // "ID15-16": Node_ID15_16, // [PRO]
  // "ID15-17": Node_ID15_17, // [OMEGA]
  // "ID15-18": Node_ID15_18, // [OMEGA]
  // "ID15-19": Node_ID15_19, // [OMEGA]
  // "ID15-20": Node_ID15_20, // [OMEGA]
  // 📂 SEKCIA C
  // "ID15-21": Node_ID15_21, // [FREE]
  // "ID15-22": Node_ID15_22, // [FREE]
  // "ID15-23": Node_ID15_23, // [PRO]
  // "ID15-24": Node_ID15_24, // [PRO]
  // "ID15-25": Node_ID15_25, // [PRO]
  // "ID15-26": Node_ID15_26, // [PRO]
  // "ID15-27": Node_ID15_27, // [OMEGA]
  // "ID15-28": Node_ID15_28, // [OMEGA]
  // "ID15-29": Node_ID15_29, // [OMEGA]
  // "ID15-30": Node_ID15_30, // [OMEGA]
  // 📂 SEKCIA D
  // "ID15-31": Node_ID15_31, // [FREE]
  // "ID15-32": Node_ID15_32, // [FREE]
  // "ID15-33": Node_ID15_33, // [PRO]
  // "ID15-34": Node_ID15_34, // [PRO]
  // "ID15-35": Node_ID15_35, // [PRO]
  // "ID15-36": Node_ID15_36, // [PRO]
  // "ID15-37": Node_ID15_37, // [OMEGA]
  // "ID15-38": Node_ID15_38, // [OMEGA]
  // "ID15-39": Node_ID15_39, // [OMEGA]
  // "ID15-40": Node_ID15_40, // [OMEGA]
  // 📂 SEKCIA E
  // "ID15-41": Node_ID15_41, // [FREE]
  // "ID15-42": Node_ID15_42, // [FREE]
  // "ID15-43": Node_ID15_43, // [PRO]
  // "ID15-44": Node_ID15_44, // [PRO]
  // "ID15-45": Node_ID15_45, // [PRO]
  // "ID15-46": Node_ID15_46, // [PRO]
  // "ID15-47": Node_ID15_47, // [OMEGA]
  // "ID15-48": Node_ID15_48, // [OMEGA]
  // "ID15-49": Node_ID15_49, // [OMEGA]
  // "ID15-50": Node_ID15_50, // [OMEGA]
  // 📂 SEKCIA F
  // "ID15-51": Node_ID15_51, // [FREE]
  // "ID15-52": Node_ID15_52, // [FREE]
  // "ID15-53": Node_ID15_53, // [PRO]
  // "ID15-54": Node_ID15_54, // [PRO]
  // "ID15-55": Node_ID15_55, // [PRO]
  // "ID15-56": Node_ID15_56, // [PRO]
  // "ID15-57": Node_ID15_57, // [OMEGA]
  // "ID15-58": Node_ID15_58, // [OMEGA]
  // "ID15-59": Node_ID15_59, // [OMEGA]
  // "ID15-60": Node_ID15_60, // [OMEGA]
  // 📂 SEKCIA G
  // "ID15-61": Node_ID15_61, // [FREE]
  // "ID15-62": Node_ID15_62, // [FREE]
  // "ID15-63": Node_ID15_63, // [PRO]
  // "ID15-64": Node_ID15_64, // [PRO]
  // "ID15-65": Node_ID15_65, // [PRO]
  // "ID15-66": Node_ID15_66, // [PRO]
  // "ID15-67": Node_ID15_67, // [OMEGA]
  // "ID15-68": Node_ID15_68, // [OMEGA]
  // "ID15-69": Node_ID15_69, // [OMEGA]
  // "ID15-70": Node_ID15_70, // [OMEGA]
  // 📂 SEKCIA H
  // "ID15-71": Node_ID15_71, // [PRO]
  // "ID15-72": Node_ID15_72, // [PRO]
  // "ID15-73": Node_ID15_73, // [PRO]
  // "ID15-74": Node_ID15_74, // [PRO]
  // "ID15-75": Node_ID15_75, // [PRO]
  // "ID15-76": Node_ID15_76, // [PRO]
  // "ID15-77": Node_ID15_77, // [OMEGA]
  // "ID15-78": Node_ID15_78, // [OMEGA]
  // "ID15-79": Node_ID15_79, // [OMEGA]
  // "ID15-80": Node_ID15_80, // [OMEGA]
  // 📂 SEKCIA I
  // "ID15-81": Node_ID15_81, // [OMEGA]
  // "ID15-82": Node_ID15_82, // [OMEGA]
  // "ID15-83": Node_ID15_83, // [OMEGA]
  // "ID15-84": Node_ID15_84, // [OMEGA]
  // "ID15-85": Node_ID15_85, // [OMEGA]
  // "ID15-86": Node_ID15_86, // [OMEGA]
  // "ID15-87": Node_ID15_87, // [OMEGA]
  // "ID15-88": Node_ID15_88, // [OMEGA]
  // "ID15-89": Node_ID15_89, // [OMEGA]
  // "ID15-90": Node_ID15_90, // [OMEGA]
  // 📂 SEKCIA J
  // "ID15-91": Node_ID15_91, // [OMEGA]
  // "ID15-92": Node_ID15_92, // [OMEGA]
  // "ID15-93": Node_ID15_93, // [OMEGA]
  // "ID15-94": Node_ID15_94, // [OMEGA]
  // "ID15-95": Node_ID15_95, // [OMEGA]
  // "ID15-96": Node_ID15_96, // [OMEGA]
  // "ID15-97": Node_ID15_97, // [OMEGA]
  // "ID15-98": Node_ID15_98, // [OMEGA]
  // "ID15-99": Node_ID15_99, // [OMEGA]
  // "ID15-100": Node_ID15_100, // [OMEGA]
};

// export default function ID15_DeathCore() {
//   return (
//     <>
//   <MetaTags
//     title="DEATH-CORE: Strach zo smrti, Digitálny Testament a Zánik | NEXUS OS"
//     description="Bojíte sa konečného zániku? DEATH-CORE je priestor pre uloženie vášho digitálneho testamentu, archiváciu mŕtvych projektov a defragmentáciu strachu zo smrti. Návod, ako prijať Format C:."
//     image="https://projekt-nexus.sk/img-nexus/dimenzie/id15-death-core.jpg"
//     color="#4A4A4A"
//     url="https://projekt-nexus.sk/ID15"
//     ogTitle="DEATH-CORE: Tvoj systém raz čaká Format C:. Si pripravený?"
//     ogDescription="Strach zo Shutdownu je základný vírus Matrixu. Zbytočne ti spaľuje energiu. Priprav svoj digitálny testament, archivuj mŕtve kódy a nájdi absolútny pokoj v prijatí nevyhnutného konca."
//     twitterTitle="DEATH-CORE: Tvoj systém raz čaká Format C:. Si pripravený?"
//     twitterDescription="Strach zo Shutdownu je vírus Matrixu. Priprav svoj digitálny testament, archivuj mŕtve kódy a nájdi mier v prijatí zániku."
//   />

//   <GlobalDimensionHub
//     dimensionId="ID15"
//     dimensionName="DEATH-CORE"
//     dimColor={ID15_Map?.color || "#4A4A4A"}
//     customMap={ID15_Map}
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
  const dimColor = "#4A4A4A"; // Legacy Šedá pre ID15 Death-Core

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
            ID15 // Death-Core
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Death{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Core
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <PowerOff size={14} style={{ color: dimColor }} /> Digitálny
            Testament a Archív
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Digitálny cintorín a archív úpadku. Miesto, kde končí expanzia a
            začína zánik (Format C:). Uzol pre uloženie digitálneho testamentu,
            prenos Access Kľúčov ďalším generáciám a úplná defragmentácia
            strachu z konečného 'Game Over' v Matrixe."
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
          {ID15_Map?.sections?.map((sec) => (
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
