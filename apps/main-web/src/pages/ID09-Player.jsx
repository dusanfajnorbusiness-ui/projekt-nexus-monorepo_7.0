// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "OfflineDimensionPreview" umiestnený pod tým.
import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub.jsx";
import { id09OmegaMap as ID09_Map } from "@main-web/data/ID09_OmegaMap.js";
import { Database, Lock, Target } from "lucide-react";

// ============================================================================
// --- ONLINE UZLY (ID09) - SERGEANT-CORE [100 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: VSTUP DO HERNEJ SVÄTYNE (Základné Piliere Hráča)
// import Node_ID09_01 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_01";
// import Node_ID09_02 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_02";
// import Node_ID09_03 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_03";
// import Node_ID09_04 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_04";
// import Node_ID09_05 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_05";
// import Node_ID09_06 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_06";
// import Node_ID09_07 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_07";
// import Node_ID09_08 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_08";
// import Node_ID09_09 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_09";
// import Node_ID09_10 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_10";

// 📂 SEKCIA B: CoDM ZOMBIES - MECHANIKY A ZÁKLADY (Classic Shi No Numa)
// import Node_ID09_11 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_11";
// import Node_ID09_12 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_12";
// import Node_ID09_13 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_13";
// import Node_ID09_14 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_14";
// import Node_ID09_15 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_15";
// import Node_ID09_16 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_16";
// import Node_ID09_17 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_17";
// import Node_ID09_18 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_18";
// import Node_ID09_19 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_19";
// import Node_ID09_20 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_20";

// 📂 SEKCIA C: SPEED RUNS & TIME ATTACKS (Optimalizácia Času)
// import Node_ID09_21 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_21";
// import Node_ID09_22 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_22";
// import Node_ID09_23 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_23";
// import Node_ID09_24 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_24";
// import Node_ID09_25 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_25";
// import Node_ID09_26 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_26";
// import Node_ID09_27 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_27";
// import Node_ID09_28 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_28";
// import Node_ID09_29 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_29";
// import Node_ID09_30 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_30";

// 📂 SEKCIA D: DAMAGE RUNS & DPS MASTERY (Maximalizácia sily)
// import Node_ID09_31 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_31";
// import Node_ID09_32 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_32";
// import Node_ID09_33 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_33";
// import Node_ID09_34 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_34";
// import Node_ID09_35 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_35";
// import Node_ID09_36 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_36";
// import Node_ID09_37 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_37";
// import Node_ID09_38 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_38";
// import Node_ID09_39 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_39";
// import Node_ID09_40 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_40";

// 📂 SEKCIA E: DAMAGE SUPPORT & TAKTICKÁ OBRANA
// import Node_ID09_41 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_41";
// import Node_ID09_42 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_42";
// import Node_ID09_43 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_43";
// import Node_ID09_44 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_44";
// import Node_ID09_45 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_45";
// import Node_ID09_46 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_46";
// import Node_ID09_47 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_47";
// import Node_ID09_48 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_48";
// import Node_ID09_49 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_49";
// import Node_ID09_50 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_50";

// 📂 SEKCIA F: DAMAGE RACE & KILLING RACE (Agresia a Dominancia)
// import Node_ID09_51 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_51";
// import Node_ID09_52 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_52";
// import Node_ID09_53 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_53";
// import Node_ID09_54 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_54";
// import Node_ID09_55 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_55";
// import Node_ID09_56 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_56";
// import Node_ID09_57 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_57";
// import Node_ID09_58 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_58";
// import Node_ID09_59 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_59";
// import Node_ID09_60 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_60";

// 📂 SEKCIA G: UNDEAD SIEGE (Nightmare & Strategický Manažment)
// import Node_ID09_61 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_61";
// import Node_ID09_62 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_62";
// import Node_ID09_63 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_63";
// import Node_ID09_64 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_64";
// import Node_ID09_65 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_65";
// import Node_ID09_66 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_66";
// import Node_ID09_67 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_67";
// import Node_ID09_68 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_68";
// import Node_ID09_69 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_69";
// import Node_ID09_70 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_70";

// 📂 SEKCIA H: SRDCOVKY A RETRO GAMING (Digitálna Nostalgia)
// import Node_ID09_71 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_71";
// import Node_ID09_72 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_72";
// import Node_ID09_73 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_73";
// import Node_ID09_74 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_74";
// import Node_ID09_75 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_75";
// import Node_ID09_76 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_76";
// import Node_ID09_77 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_77";
// import Node_ID09_78 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_78";
// import Node_ID09_79 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_79";
// import Node_ID09_80 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_80";

// 📂 SEKCIA I: OD HRÁČA K TVORCOVI (Content Creation & YT)
// import Node_ID09_81 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_81";
// import Node_ID09_82 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_82";
// import Node_ID09_83 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_83";
// import Node_ID09_84 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_84";
// import Node_ID09_85 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_85";
// import Node_ID09_86 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_86";
// import Node_ID09_87 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_87";
// import Node_ID09_88 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_88";
// import Node_ID09_89 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_89";
// import Node_ID09_90 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_90";

// 📂 SEKCIA J: ENDGAME (Hra ako Zrkadlo Matrixu)
// import Node_ID09_91 from "@main-web/subPages/ID09-Player/FREE/Node_ID09_91";
// import Node_ID09_92 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_92";
// import Node_ID09_93 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_93";
// import Node_ID09_94 from "@main-web/subPages/ID09-Player/PRO/Node_ID09_94";
// import Node_ID09_95 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_95";
// import Node_ID09_96 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_96";
// import Node_ID09_97 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_97";
// import Node_ID09_98 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_98";
// import Node_ID09_99 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_99";
// import Node_ID09_100 from "@main-web/subPages/ID09-Player/OMEGA/Node_ID09_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  // "ID09-01": Node_ID09_01, // [FREE]
  // "ID09-02": Node_ID09_02, // [FREE]
  // "ID09-03": Node_ID09_03, // [FREE]
  // "ID09-04": Node_ID09_04, // [FREE]
  // "ID09-05": Node_ID09_05, // [FREE]
  // "ID09-06": Node_ID09_06, // [FREE]
  // "ID09-07": Node_ID09_07, // [PRO]
  // "ID09-08": Node_ID09_08, // [PRO]
  // "ID09-09": Node_ID09_09, // [OMEGA]
  // "ID09-10": Node_ID09_10, // [OMEGA]
  // 📂 SEKCIA B
  // "ID09-11": Node_ID09_11, // [FREE]
  // "ID09-12": Node_ID09_12, // [FREE]
  // "ID09-13": Node_ID09_13, // [PRO]
  // "ID09-14": Node_ID09_14, // [PRO]
  // "ID09-15": Node_ID09_15, // [PRO]
  // "ID09-16": Node_ID09_16, // [PRO]
  // "ID09-17": Node_ID09_17, // [OMEGA]
  // "ID09-18": Node_ID09_18, // [OMEGA]
  // "ID09-19": Node_ID09_19, // [OMEGA]
  // "ID09-20": Node_ID09_20, // [OMEGA]
  // 📂 SEKCIA C
  // "ID09-21": Node_ID09_21, // [FREE]
  // "ID09-22": Node_ID09_22, // [FREE]
  // "ID09-23": Node_ID09_23, // [PRO]
  // "ID09-24": Node_ID09_24, // [PRO]
  // "ID09-25": Node_ID09_25, // [PRO]
  // "ID09-26": Node_ID09_26, // [PRO]
  // "ID09-27": Node_ID09_27, // [OMEGA]
  // "ID09-28": Node_ID09_28, // [OMEGA]
  // "ID09-29": Node_ID09_29, // [OMEGA]
  // "ID09-30": Node_ID09_30, // [OMEGA]
  // 📂 SEKCIA D
  // "ID09-31": Node_ID09_31, // [FREE]
  // "ID09-32": Node_ID09_32, // [FREE]
  // "ID09-33": Node_ID09_33, // [PRO]
  // "ID09-34": Node_ID09_34, // [PRO]
  // "ID09-35": Node_ID09_35, // [PRO]
  // "ID09-36": Node_ID09_36, // [PRO]
  // "ID09-37": Node_ID09_37, // [OMEGA]
  // "ID09-38": Node_ID09_38, // [OMEGA]
  // "ID09-39": Node_ID09_39, // [OMEGA]
  // "ID09-40": Node_ID09_40, // [OMEGA]
  // 📂 SEKCIA E
  // "ID09-41": Node_ID09_41, // [FREE]
  // "ID09-42": Node_ID09_42, // [FREE]
  // "ID09-43": Node_ID09_43, // [PRO]
  // "ID09-44": Node_ID09_44, // [PRO]
  // "ID09-45": Node_ID09_45, // [PRO]
  // "ID09-46": Node_ID09_46, // [PRO]
  // "ID09-47": Node_ID09_47, // [OMEGA]
  // "ID09-48": Node_ID09_48, // [OMEGA]
  // "ID09-49": Node_ID09_49, // [OMEGA]
  // "ID09-50": Node_ID09_50, // [OMEGA]
  // 📂 SEKCIA F
  // "ID09-51": Node_ID09_51, // [FREE]
  // "ID09-52": Node_ID09_52, // [FREE]
  // "ID09-53": Node_ID09_53, // [PRO]
  // "ID09-54": Node_ID09_54, // [PRO]
  // "ID09-55": Node_ID09_55, // [PRO]
  // "ID09-56": Node_ID09_56, // [PRO]
  // "ID09-57": Node_ID09_57, // [OMEGA]
  // "ID09-58": Node_ID09_58, // [OMEGA]
  // "ID09-59": Node_ID09_59, // [OMEGA]
  // "ID09-60": Node_ID09_60, // [OMEGA]
  // 📂 SEKCIA G
  // "ID09-61": Node_ID09_61, // [FREE]
  // "ID09-62": Node_ID09_62, // [FREE]
  // "ID09-63": Node_ID09_63, // [PRO]
  // "ID09-64": Node_ID09_64, // [PRO]
  // "ID09-65": Node_ID09_65, // [PRO]
  // "ID09-66": Node_ID09_66, // [PRO]
  // "ID09-67": Node_ID09_67, // [OMEGA]
  // "ID09-68": Node_ID09_68, // [OMEGA]
  // "ID09-69": Node_ID09_69, // [OMEGA]
  // "ID09-70": Node_ID09_70, // [OMEGA]
  // 📂 SEKCIA H
  // "ID09-71": Node_ID09_71, // [FREE]
  // "ID09-72": Node_ID09_72, // [FREE]
  // "ID09-73": Node_ID09_73, // [PRO]
  // "ID09-74": Node_ID09_74, // [PRO]
  // "ID09-75": Node_ID09_75, // [PRO]
  // "ID09-76": Node_ID09_76, // [PRO]
  // "ID09-77": Node_ID09_77, // [OMEGA]
  // "ID09-78": Node_ID09_78, // [OMEGA]
  // "ID09-79": Node_ID09_79, // [OMEGA]
  // "ID09-80": Node_ID09_80, // [OMEGA]
  // 📂 SEKCIA I
  // "ID09-81": Node_ID09_81, // [FREE]
  // "ID09-82": Node_ID09_82, // [FREE]
  // "ID09-83": Node_ID09_83, // [PRO]
  // "ID09-84": Node_ID09_84, // [PRO]
  // "ID09-85": Node_ID09_85, // [PRO]
  // "ID09-86": Node_ID09_86, // [PRO]
  // "ID09-87": Node_ID09_87, // [OMEGA]
  // "ID09-88": Node_ID09_88, // [OMEGA]
  // "ID09-89": Node_ID09_89, // [OMEGA]
  // "ID09-90": Node_ID09_90, // [OMEGA]
  // 📂 SEKCIA J
  // "ID09-91": Node_ID09_91, // [FREE]
  // "ID09-92": Node_ID09_92, // [PRO]
  // "ID09-93": Node_ID09_93, // [PRO]
  // "ID09-94": Node_ID09_94, // [PRO]
  // "ID09-95": Node_ID09_95, // [OMEGA]
  // "ID09-96": Node_ID09_96, // [OMEGA]
  // "ID09-97": Node_ID09_97, // [OMEGA]
  // "ID09-98": Node_ID09_98, // [OMEGA]
  // "ID09-99": Node_ID09_99, // [OMEGA]
  // "ID09-100": Node_ID09_100, // [OMEGA]
};

// export default function ID09_SergeantCore() {
//   return (
//     <>
//       {/* <MetaTags
//         title="SERGEANT-CORE: CoDM Zombies, Herné Stratégie a Návody | NEXUS OS"
//         description="Svätyňa Avatara @zombieSergeant. Získajte hardcore herné stratégie, taktické myslenie a speed-run návody pre CoDM Zombies a sériu Final Fantasy. Premeňte hranie na matematickú dominanciu."
//         image="https://projekt-nexus.sk/img-nexus/dimenzie/id09-sergeant-core.jpg"
//         color="#FF003C"
//         url="https://projekt-nexus.sk/ID09"
//         ogTitle="SERGEANT-CORE: Hráte chaos, nie taktiku. Zmeň to na dominanciu"
//         ogDescription="Tvoj tím neustále padá. Nemáte damage, nepoznáte rotácie a elitní bossovia vás mažú z mapy. Odomkni hernú svätyňu, získaj exaktný taktický manuál a staň sa architektom výhry."
//         twitterTitle="SERGEANT-CORE: Hráte chaos, nie taktiku. Zmeň to na dominanciu"
//         twitterDescription="Tvoj tím neustále padá a chýba vám damage. Odomkni hernú svätyňu @zombieSergeant, získaj hardcore taktiky a staň sa architektom výhry."
//       /> */}

//       <GlobalDimensionHub
//         dimensionId="ID09"
//         dimensionName="SERGEANT-CORE"
//         dimColor={ID09_Map?.color || "#FF003C"}
//         customMap={ID09_Map}
//         nodeComponents={NODE_COMPONENTS}
//       />
//     </>
//   );
// }

// // ============================================================================
// // 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// // ============================================================================
// // Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

export default function OfflineDimensionPreview() {
  const dimColor = "#FF003C"; // Crimson Red pre ID09 Sergeant-Core

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
            ID09 // Sergeant-Core
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Sergeant{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Core
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Target size={14} style={{ color: dimColor }} /> Taktický Bojový
            Simulátor
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Svätyňa Avatara @zombieSergeant. Toto nie je únik pred realitou. Je
            to laboratórium pre tréning CPU. Dekódovanie herných mechaník CoDM
            Zombies, tvorba virálnych Shorts cez PrismLive a CapCut, a presun
            strategického myslenia z hry do reálneho biznisu."
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
          {ID09_Map?.sections?.map((sec) => (
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
