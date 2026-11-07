// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "OfflineDimensionPreview" umiestnený pod tým.

import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub.jsx";
import { id06OmegaMap as ID06_Map } from "@main-web/data/ID06_OmegaMap.js";
import { Cpu, Database, Lock } from "lucide-react";

/*
// ============================================================================
// --- ONLINE UZLY (ID06) - DATA-ABSORBER [100 NODES READY] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE KOGNITÍVNEJ BRÁNY (Vstup do Matrixu)
// import Node_ID06_01 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_01";
// import Node_ID06_02 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_02";
// import Node_ID06_03 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_03";
// import Node_ID06_04 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_04";
// import Node_ID06_05 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_05";
// import Node_ID06_06 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_06";
// import Node_ID06_07 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_07";
// import Node_ID06_08 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_08";
// import Node_ID06_09 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_09";
// import Node_ID06_10 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_10";

// 📂 SEKCIA B: NEUROPLASTICITA A REPROGRAMOVANIE (Brain Architecture)
// import Node_ID06_11 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_11";
// import Node_ID06_12 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_12";
// import Node_ID06_13 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_13";
// import Node_ID06_14 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_14";
// import Node_ID06_15 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_15";
// import Node_ID06_16 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_16";
// import Node_ID06_17 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_17";
// import Node_ID06_18 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_18";
// import Node_ID06_19 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_19";
// import Node_ID06_20 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_20";

// 📂 SEKCIA C: DEEP WORK A EXTRÉMNY FOCUS (Eliminácia trenia)
// import Node_ID06_21 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_21";
// import Node_ID06_22 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_22";
// import Node_ID06_23 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_23";
// import Node_ID06_24 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_24";
// import Node_ID06_25 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_25";
// import Node_ID06_26 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_26";
// import Node_ID06_27 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_27";
// import Node_ID06_28 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_28";
// import Node_ID06_29 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_29";
// import Node_ID06_30 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_30";

// 📂 SEKCIA D: DEKÓDOVANIE A RÝCHLOSŤ (Data Ingestion)
// import Node_ID06_31 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_31";
// import Node_ID06_32 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_32";
// import Node_ID06_33 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_33";
// import Node_ID06_34 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_34";
// import Node_ID06_35 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_35";
// import Node_ID06_36 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_36";
// import Node_ID06_37 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_37";
// import Node_ID06_38 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_38";
// import Node_ID06_39 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_39";
// import Node_ID06_40 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_40";

// 📂 SEKCIA E: EXTERNÁ PAMÄŤ (The Second Brain)
// import Node_ID06_41 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_41";
// import Node_ID06_42 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_42";
// import Node_ID06_43 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_43";
// import Node_ID06_44 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_44";
// import Node_ID06_45 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_45";
// import Node_ID06_46 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_46";
// import Node_ID06_47 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_47";
// import Node_ID06_48 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_48";
// import Node_ID06_49 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_49";
// import Node_ID06_50 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_50";

// 📂 SEKCIA F: LOGIKA, ANALÝZA A KÓDOVANIE (Processing)
// import Node_ID06_51 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_51";
// import Node_ID06_52 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_52";
// import Node_ID06_53 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_53";
// import Node_ID06_54 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_54";
// import Node_ID06_55 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_55";
// import Node_ID06_56 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_56";
// import Node_ID06_57 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_57";
// import Node_ID06_58 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_58";
// import Node_ID06_59 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_59";
// import Node_ID06_60 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_60";

// 📂 SEKCIA G: PREKONÁVANIE ODPORU A PROKRASTINÁCIE (Bypass Firewallu)
// import Node_ID06_61 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_61";
// import Node_ID06_62 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_62";
// import Node_ID06_63 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_63";
// import Node_ID06_64 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_64";
// import Node_ID06_65 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_65";
// import Node_ID06_66 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_66";
// import Node_ID06_67 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_67";
// import Node_ID06_68 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_68";
// import Node_ID06_69 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_69";
// import Node_ID06_70 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_70";

// 📂 SEKCIA H: Z TEÓRIE DO EXEKÚCIE (Compilation & Deployment)
// import Node_ID06_71 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_71";
// import Node_ID06_72 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_72";
// import Node_ID06_73 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_73";
// import Node_ID06_74 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_74";
// import Node_ID06_75 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_75";
// import Node_ID06_76 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_76";
// import Node_ID06_77 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_77";
// import Node_ID06_78 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_78";
// import Node_ID06_79 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_79";
// import Node_ID06_80 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_80";

// 📂 SEKCIA I: SKILL STACKING A MULTI-THREADING (Umelá Inteligencia)
// import Node_ID06_81 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_81";
// import Node_ID06_82 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_82";
// import Node_ID06_83 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_83";
// import Node_ID06_84 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_84";
// import Node_ID06_85 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_85";
// import Node_ID06_86 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_86";
// import Node_ID06_87 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_87";
// import Node_ID06_88 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_88";
// import Node_ID06_89 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_89";
// import Node_ID06_90 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_90";

// 📂 SEKCIA J: MAJSTROVSTVO A ENDGAME (Od Absorbéra k Zdrojovému Kódu)
// import Node_ID06_91 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_91";
// import Node_ID06_92 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_92";
// import Node_ID06_93 from "@main-web/subPages/ID06-Study/PRO/Node_ID06_93";
// import Node_ID06_94 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_94";
// import Node_ID06_95 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_95";
// import Node_ID06_96 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_96";
// import Node_ID06_97 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_97";
// import Node_ID06_98 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_98";
// import Node_ID06_99 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_99";
// import Node_ID06_100 from "@main-web/subPages/ID06-Study/OMEGA/Node_ID06_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
// const NODE_COMPONENTS = {
// 📂 SEKCIA A
// "ID06-01": Node_ID06_01, // [PRO]
// "ID06-02": Node_ID06_02, // [PRO]
// "ID06-03": Node_ID06_03, // [PRO]
// "ID06-04": Node_ID06_04, // [PRO]
// "ID06-05": Node_ID06_05, // [PRO]
// "ID06-06": Node_ID06_06, // [PRO]
// "ID06-07": Node_ID06_07, // [PRO]
// "ID06-08": Node_ID06_08, // [PRO]
// "ID06-09": Node_ID06_09, // [OMEGA]
// "ID06-10": Node_ID06_10, // [OMEGA]

// 📂 SEKCIA B
// "ID06-11": Node_ID06_11, // [PRO]
// "ID06-12": Node_ID06_12, // [PRO]
// "ID06-13": Node_ID06_13, // [PRO]
// "ID06-14": Node_ID06_14, // [PRO]
// "ID06-15": Node_ID06_15, // [PRO]
// "ID06-16": Node_ID06_16, // [PRO]
// "ID06-17": Node_ID06_17, // [OMEGA]
// "ID06-18": Node_ID06_18, // [OMEGA]
// "ID06-19": Node_ID06_19, // [OMEGA]
// "ID06-20": Node_ID06_20, // [OMEGA]

// 📂 SEKCIA C
// "ID06-21": Node_ID06_21, // [PRO]
// "ID06-22": Node_ID06_22, // [PRO]
// "ID06-23": Node_ID06_23, // [PRO]
// "ID06-24": Node_ID06_24, // [PRO]
// "ID06-25": Node_ID06_25, // [PRO]
// "ID06-26": Node_ID06_26, // [PRO]
// "ID06-27": Node_ID06_27, // [OMEGA]
// "ID06-28": Node_ID06_28, // [OMEGA]
// "ID06-29": Node_ID06_29, // [OMEGA]
// "ID06-30": Node_ID06_30, // [OMEGA]

// 📂 SEKCIA D
// "ID06-31": Node_ID06_31, // [PRO]
// "ID06-32": Node_ID06_32, // [PRO]
// "ID06-33": Node_ID06_33, // [PRO]
// "ID06-34": Node_ID06_34, // [PRO]
// "ID06-35": Node_ID06_35, // [PRO]
// "ID06-36": Node_ID06_36, // [PRO]
// "ID06-37": Node_ID06_37, // [OMEGA]
// "ID06-38": Node_ID06_38, // [OMEGA]
// "ID06-39": Node_ID06_39, // [OMEGA]
// "ID06-40": Node_ID06_40, // [OMEGA]

// 📂 SEKCIA E
// "ID06-41": Node_ID06_41, // [PRO]
// "ID06-42": Node_ID06_42, // [PRO]
// "ID06-43": Node_ID06_43, // [PRO]
// "ID06-44": Node_ID06_44, // [PRO]
// "ID06-45": Node_ID06_45, // [PRO]
// "ID06-46": Node_ID06_46, // [PRO]
// "ID06-47": Node_ID06_47, // [OMEGA]
// "ID06-48": Node_ID06_48, // [OMEGA]
// "ID06-49": Node_ID06_49, // [OMEGA]
// "ID06-50": Node_ID06_50, // [OMEGA]

// 📂 SEKCIA F
// "ID06-51": Node_ID06_51, // [PRO]
// "ID06-52": Node_ID06_52, // [PRO]
// "ID06-53": Node_ID06_53, // [PRO]
// "ID06-54": Node_ID06_54, // [PRO]
// "ID06-55": Node_ID06_55, // [PRO]
// "ID06-56": Node_ID06_56, // [PRO]
// "ID06-57": Node_ID06_57, // [OMEGA]
// "ID06-58": Node_ID06_58, // [OMEGA]
// "ID06-59": Node_ID06_59, // [OMEGA]
// "ID06-60": Node_ID06_60, // [OMEGA]

// 📂 SEKCIA G
// "ID06-61": Node_ID06_61, // [PRO]
// "ID06-62": Node_ID06_62, // [PRO]
// "ID06-63": Node_ID06_63, // [PRO]
// "ID06-64": Node_ID06_64, // [PRO]
// "ID06-65": Node_ID06_65, // [PRO]
// "ID06-66": Node_ID06_66, // [PRO]
// "ID06-67": Node_ID06_67, // [OMEGA]
// "ID06-68": Node_ID06_68, // [OMEGA]
// "ID06-69": Node_ID06_69, // [OMEGA]
// "ID06-70": Node_ID06_70, // [OMEGA]

// 📂 SEKCIA H
// "ID06-71": Node_ID06_71, // [PRO]
// "ID06-72": Node_ID06_72, // [PRO]
// "ID06-73": Node_ID06_73, // [PRO]
// "ID06-74": Node_ID06_74, // [PRO]
// "ID06-75": Node_ID06_75, // [PRO]
// "ID06-76": Node_ID06_76, // [PRO]
// "ID06-77": Node_ID06_77, // [OMEGA]
// "ID06-78": Node_ID06_78, // [OMEGA]
// "ID06-79": Node_ID06_79, // [OMEGA]
// "ID06-80": Node_ID06_80, // [OMEGA]

// 📂 SEKCIA I
// "ID06-81": Node_ID06_81, // [PRO]
// "ID06-82": Node_ID06_82, // [PRO]
// "ID06-83": Node_ID06_83, // [PRO]
// "ID06-84": Node_ID06_84, // [PRO]
// "ID06-85": Node_ID06_85, // [PRO]
// "ID06-86": Node_ID06_86, // [PRO]
// "ID06-87": Node_ID06_87, // [OMEGA]
// "ID06-88": Node_ID06_88, // [OMEGA]
// "ID06-89": Node_ID06_89, // [OMEGA]
// "ID06-90": Node_ID06_90, // [OMEGA]

// 📂 SEKCIA J
//   "ID06-91": Node_ID06_91, // [PRO]
//   "ID06-92": Node_ID06_92, // [PRO]
//   "ID06-93": Node_ID06_93, // [PRO]
//   "ID06-94": Node_ID06_94, // [OMEGA]
//   "ID06-95": Node_ID06_95, // [OMEGA]
//   "ID06-96": Node_ID06_96, // [OMEGA]
//   "ID06-97": Node_ID06_97, // [OMEGA]
//   "ID06-98": Node_ID06_98, // [OMEGA]
//   "ID06-99": Node_ID06_99, // [OMEGA]
//   "ID06-100": Node_ID06_100, // [OMEGA]
// };

export default function ID06_DataAbsorber() {
   return (
     <>
      <MetaTags 
        title="DATA-ABSORBER: Akcelerované učenie a Hlboká práca (Deep Work) | NEXUS OS"
        description="Neviete sa sústrediť na štúdium? DATA-ABSORBER je kognitívna brána pre akcelerované učenie, techniky hlbokej práce (Deep Work) a kognitívny tréning. Premeňte teóriu na tvrdé IT zručnosti."
        image="https://projekt-nexus.sk/img-nexus/dimenzie/id06-data-absorber.jpg"
        color="#BF00FF"
        url="https://projekt-nexus.sk/ID06"
        ogTitle="DATA-ABSORBER: Tvoja pamäť preteká. Nauč sa kódovať dáta do mozgu"
        ogDescription="Zasekol si sa v 'Tutorial Hell'? Neustále čítaš, pozeráš videá, no tvoje reálne výsledky sú nulové. Odomkni metódy Hlbokej práce (Deep Work) a akcelerovaného učenia. Premeň teóriu na exekúciu."
        twitterTitle="DATA-ABSORBER: Tvoja pamäť preteká. Nauč sa kódovať dáta do mozgu"
        twitterDescription="Zasekol si sa v 'Tutorial Hell'? Neustále študuješ, no nič netvoríš. Odomkni metódy Hlbokej práce (Deep Work) a premeň teóriu na exekúciu."
      />
      
      <GlobalDimensionHub
        dimensionId="ID06"
        dimensionName="DATA-ABSORBER"
        dimColor={ID06_Map?.color || "#BF00FF"}
        customMap={ID06_Map}
        nodeComponents={NODE_COMPONENTS}
      />
    </>
// */

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

export default function OfflineDimensionPreview() {
  const dimColor = "#BF00FF"; // Fialová farba pre ID06 Data-Absorber

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
            ID06 // Data-Absorber
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Data{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Absorber
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Cpu size={14} style={{ color: dimColor }} /> Systémová Architektúra
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Kognitívna brána k poznaniu. Metódy hlbokej práce (Deep Work) a
            kognitívny tréning. Dekódovanie surových dát a využitie
            neuroplasticity. Premena informácie na prežitú vedomosť. Extrakcia
            užitočného kódu z mŕtvych zdrojov."
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
          {ID06_Map?.sections?.map((sec) => (
            <div key={sec.sectionId} className="space-y-4">
              <h4
                className="text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2"
                style={{ color: dimColor }}
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
                        className="text-[8px] px-1 py-0.5 rounded border shrink-0 font-bold"
                        style={{ borderColor: badgeColor, color: badgeColor }}
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
