import React from "react";
import { BookOpen, Lock, Database } from "lucide-react";
import { id08OmegaMap as ID08_Map } from "@main-web/data/ID08_OmegaMap";
// import MetaTags from "@main-web/components/MetaTags";
// ============================================================================
// 🟢 PRODUKČNÝ KÓD (PRE LOKÁLNE POUŽITIE VO VS CODE A DEPLOYMENT)
// ============================================================================
// LOKÁLNE POUŽITIE: Keď budeš chcieť dimenziu spustiť ostro do produkcie,
// odstráň blokové komentáre (/* a */) v tejto sekcii a zmaž úplne celý
// komponent "OfflineDimensionPreview" umiestnený pod tým.

import { GlobalDimensionHub } from "@main-web/components/GlobalDimensionHub";
import { GlobalComponents } from "@main-web/components/GlobalComponents";
import { GlobalHamburgerMenu } from "@main-web/components/GlobalHamburgerMenu";
// ============================================================================
// --- ONLINE UZLY (ID08) - EMPTY-BOOK [100 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: VSTUP DO KNIŽNICE MATRIXU (Základné Piliere Čitateľa)
// import Node_ID08_01 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_01";
// import Node_ID08_02 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_02";
// import Node_ID08_03 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_03";
// import Node_ID08_04 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_04";
// import Node_ID08_05 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_05";
// import Node_ID08_06 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_06";
// import Node_ID08_07 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_07";
// import Node_ID08_08 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_08";
// import Node_ID08_09 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_09";
// import Node_ID08_10 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_10";

// 📂 SEKCIA B: ODUČENIE SA (Defragmentácia Prijatých Dát)
// import Node_ID08_11 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_11";
// import Node_ID08_12 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_12";
// import Node_ID08_13 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_13";
// import Node_ID08_14 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_14";
// import Node_ID08_15 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_15";
// import Node_ID08_16 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_16";
// import Node_ID08_17 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_17";
// import Node_ID08_18 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_18";
// import Node_ID08_19 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_19";
// import Node_ID08_20 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_20";

// 📂 SEKCIA C: VÝCHODNÁ MYSTIKA A ABSOLÚTNO (Osho, Budha, Zen)
// import Node_ID08_21 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_21";
// import Node_ID08_22 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_22";
// import Node_ID08_23 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_23";
// import Node_ID08_24 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_24";
// import Node_ID08_25 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_25";
// import Node_ID08_26 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_26";
// import Node_ID08_27 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_27";
// import Node_ID08_28 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_28";
// import Node_ID08_29 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_29";
// import Node_ID08_30 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_30";

// 📂 SEKCIA D: SILA PRÍTOMNÉHO OKAMIHU (Eckhart Tolle)
// import Node_ID08_31 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_31";
// import Node_ID08_32 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_32";
// import Node_ID08_33 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_33";
// import Node_ID08_34 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_34";
// import Node_ID08_35 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_35";
// import Node_ID08_36 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_36";
// import Node_ID08_37 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_37";
// import Node_ID08_38 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_38";
// import Node_ID08_39 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_39";
// import Node_ID08_40 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_40";

// 📂 SEKCIA E: PODVEDOMIE A PROGRAMOVANIE (Ruiz, Murphy)
// import Node_ID08_41 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_41";
// import Node_ID08_42 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_42";
// import Node_ID08_43 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_43";
// import Node_ID08_44 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_44";
// import Node_ID08_45 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_45";
// import Node_ID08_46 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_46";
// import Node_ID08_47 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_47";
// import Node_ID08_48 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_48";
// import Node_ID08_49 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_49";
// import Node_ID08_50 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_50";

// 📂 SEKCIA F: ZÁPADNÁ PSYCHOLÓGIA A ANALÝZA KÓDU (Jung, Freud, Frankl)
// import Node_ID08_51 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_51";
// import Node_ID08_52 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_52";
// import Node_ID08_53 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_53";
// import Node_ID08_54 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_54";
// import Node_ID08_55 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_55";
// import Node_ID08_56 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_56";
// import Node_ID08_57 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_57";
// import Node_ID08_58 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_58";
// import Node_ID08_59 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_59";
// import Node_ID08_60 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_60";

// 📂 SEKCIA G: APLIKÁCIA - OD ČITATEĽA K ARCHITEKTOVI (Action Phase)
// import Node_ID08_61 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_61";
// import Node_ID08_62 from "@main-web/subPages/ID08-Reader/FREE/Node_ID08_62";
// import Node_ID08_63 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_63";
// import Node_ID08_64 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_64";
// import Node_ID08_65 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_65";
// import Node_ID08_66 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_66";
// import Node_ID08_67 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_67";
// import Node_ID08_68 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_68";
// import Node_ID08_69 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_69";
// import Node_ID08_70 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_70";

// 📂 SEKCIA H: VEDA, FYZIKA A FILOZOFIA (Zákonitosti Hardvéru)
// import Node_ID08_71 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_71";
// import Node_ID08_72 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_72";
// import Node_ID08_73 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_73";
// import Node_ID08_74 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_74";
// import Node_ID08_75 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_75";
// import Node_ID08_76 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_76";
// import Node_ID08_77 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_77";
// import Node_ID08_78 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_78";
// import Node_ID08_79 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_79";
// import Node_ID08_80 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_80";

// 📂 SEKCIA I: LEXIKÓN MŔTVYCH KNÍH (Pravidlá Výberu)
// import Node_ID08_81 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_81";
// import Node_ID08_82 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_82";
// import Node_ID08_83 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_83";
// import Node_ID08_84 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_84";
// import Node_ID08_85 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_85";
// import Node_ID08_86 from "@main-web/subPages/ID08-Reader/PRO/Node_ID08_86";
// import Node_ID08_87 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_87";
// import Node_ID08_88 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_88";
// import Node_ID08_89 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_89";
// import Node_ID08_90 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_90";

// 📂 SEKCIA J: ENDGAME - PRÁZDNA KNIHA (Majstrovstvo)
// import Node_ID08_91 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_91";
// import Node_ID08_92 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_92";
// import Node_ID08_93 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_93";
// import Node_ID08_94 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_94";
// import Node_ID08_95 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_95";
// import Node_ID08_96 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_96";
// import Node_ID08_97 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_97";
// import Node_ID08_98 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_98";
// import Node_ID08_99 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_99";
// import Node_ID08_100 from "@main-web/subPages/ID08-Reader/OMEGA/Node_ID08_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  // "ID08-01": Node_ID08_01, // [FREE]
  // "ID08-02": Node_ID08_02, // [FREE]
  // "ID08-03": Node_ID08_03, // [FREE]
  // "ID08-04": Node_ID08_04, // [FREE]
  // "ID08-05": Node_ID08_05, // [FREE]
  // "ID08-06": Node_ID08_06, // [FREE]
  // "ID08-07": Node_ID08_07, // [PRO]
  // "ID08-08": Node_ID08_08, // [PRO]
  // "ID08-09": Node_ID08_09, // [OMEGA]
  // "ID08-10": Node_ID08_10, // [OMEGA]
  // 📂 SEKCIA B
  // "ID08-11": Node_ID08_11, // [FREE]
  // "ID08-12": Node_ID08_12, // [FREE]
  // "ID08-13": Node_ID08_13, // [PRO]
  // "ID08-14": Node_ID08_14, // [PRO]
  // "ID08-15": Node_ID08_15, // [PRO]
  // "ID08-16": Node_ID08_16, // [PRO]
  // "ID08-17": Node_ID08_17, // [OMEGA]
  // "ID08-18": Node_ID08_18, // [OMEGA]
  // "ID08-19": Node_ID08_19, // [OMEGA]
  // "ID08-20": Node_ID08_20, // [OMEGA]
  // 📂 SEKCIA C
  // "ID08-21": Node_ID08_21, // [FREE]
  // "ID08-22": Node_ID08_22, // [FREE]
  // "ID08-23": Node_ID08_23, // [PRO]
  // "ID08-24": Node_ID08_24, // [PRO]
  // "ID08-25": Node_ID08_25, // [PRO]
  // "ID08-26": Node_ID08_26, // [PRO]
  // "ID08-27": Node_ID08_27, // [OMEGA]
  // "ID08-28": Node_ID08_28, // [OMEGA]
  // "ID08-29": Node_ID08_29, // [OMEGA]
  // "ID08-30": Node_ID08_30, // [OMEGA]
  // 📂 SEKCIA D
  // "ID08-31": Node_ID08_31, // [FREE]
  // "ID08-32": Node_ID08_32, // [FREE]
  // "ID08-33": Node_ID08_33, // [PRO]
  // "ID08-34": Node_ID08_34, // [PRO]
  // "ID08-35": Node_ID08_35, // [PRO]
  // "ID08-36": Node_ID08_36, // [PRO]
  // "ID08-37": Node_ID08_37, // [OMEGA]
  // "ID08-38": Node_ID08_38, // [OMEGA]
  // "ID08-39": Node_ID08_39, // [OMEGA]
  // "ID08-40": Node_ID08_40, // [OMEGA]
  // 📂 SEKCIA E
  // "ID08-41": Node_ID08_41, // [FREE]
  // "ID08-42": Node_ID08_42, // [FREE]
  // "ID08-43": Node_ID08_43, // [PRO]
  // "ID08-44": Node_ID08_44, // [PRO]
  // "ID08-45": Node_ID08_45, // [PRO]
  // "ID08-46": Node_ID08_46, // [PRO]
  // "ID08-47": Node_ID08_47, // [OMEGA]
  // "ID08-48": Node_ID08_48, // [OMEGA]
  // "ID08-49": Node_ID08_49, // [OMEGA]
  // "ID08-50": Node_ID08_50, // [OMEGA]
  // 📂 SEKCIA F
  // "ID08-51": Node_ID08_51, // [FREE]
  // "ID08-52": Node_ID08_52, // [FREE]
  // "ID08-53": Node_ID08_53, // [PRO]
  // "ID08-54": Node_ID08_54, // [PRO]
  // "ID08-55": Node_ID08_55, // [PRO]
  // "ID08-56": Node_ID08_56, // [PRO]
  // "ID08-57": Node_ID08_57, // [OMEGA]
  // "ID08-58": Node_ID08_58, // [OMEGA]
  // "ID08-59": Node_ID08_59, // [OMEGA]
  // "ID08-60": Node_ID08_60, // [OMEGA]
  // 📂 SEKCIA G
  // "ID08-61": Node_ID08_61, // [FREE]
  // "ID08-62": Node_ID08_62, // [FREE]
  // "ID08-63": Node_ID08_63, // [PRO]
  // "ID08-64": Node_ID08_64, // [PRO]
  // "ID08-65": Node_ID08_65, // [PRO]
  // "ID08-66": Node_ID08_66, // [PRO]
  // "ID08-67": Node_ID08_67, // [OMEGA]
  // "ID08-68": Node_ID08_68, // [OMEGA]
  // "ID08-69": Node_ID08_69, // [OMEGA]
  // "ID08-70": Node_ID08_70, // [OMEGA]
  // 📂 SEKCIA H
  // "ID08-71": Node_ID08_71, // [PRO]
  // "ID08-72": Node_ID08_72, // [PRO]
  // "ID08-73": Node_ID08_73, // [PRO]
  // "ID08-74": Node_ID08_74, // [PRO]
  // "ID08-75": Node_ID08_75, // [PRO]
  // "ID08-76": Node_ID08_76, // [PRO]
  // "ID08-77": Node_ID08_77, // [OMEGA]
  // "ID08-78": Node_ID08_78, // [OMEGA]
  // "ID08-79": Node_ID08_79, // [OMEGA]
  // "ID08-80": Node_ID08_80, // [OMEGA]
  // 📂 SEKCIA I
  // "ID08-81": Node_ID08_81, // [PRO]
  // "ID08-82": Node_ID08_82, // [PRO]
  // "ID08-83": Node_ID08_83, // [PRO]
  // "ID08-84": Node_ID08_84, // [PRO]
  // "ID08-85": Node_ID08_85, // [PRO]
  // "ID08-86": Node_ID08_86, // [PRO]
  // "ID08-87": Node_ID08_87, // [OMEGA]
  // "ID08-88": Node_ID08_88, // [OMEGA]
  // "ID08-89": Node_ID08_89, // [OMEGA]
  // "ID08-90": Node_ID08_90, // [OMEGA]
  // 📂 SEKCIA J
  // "ID08-91": Node_ID08_91, // [OMEGA]
  // "ID08-92": Node_ID08_92, // [OMEGA]
  // "ID08-93": Node_ID08_93, // [OMEGA]
  // "ID08-94": Node_ID08_94, // [OMEGA]
  // "ID08-95": Node_ID08_95, // [OMEGA]
  // "ID08-96": Node_ID08_96, // [OMEGA]
  // "ID08-97": Node_ID08_97, // [OMEGA]
  // "ID08-98": Node_ID08_98, // [OMEGA]
  // "ID08-99": Node_ID08_99, // [OMEGA]
  // "ID08-100": Node_ID08_100, // [OMEGA]
};

// export default function ID08_EmptyBook() {
//   return (
//     <>
//       {/* <MetaTags
//         title="EMPTY-BOOK: Sémantická knižnica, osobný rozvoj a recenzie | NEXUS OS"
//         description="Trpíte informačným preťažením? EMPTY-BOOK je sémantická knižnica a databáza 350+ dekomprimovaných kníh (Osho, Tolle, Jung). Naučte sa čítať do hĺbky, odučte sa balast a aplikujte prežitú pravdu do praxe."
//         image="https://projekt-nexus.sk/img-nexus/dimenzie/id08-empty-book.jpg"
//         color="#00FFFF"
//         url="https://projekt-nexus.sk/ID08"
//         ogTitle="EMPTY-BOOK: Čítaš stovky kníh, no tvoja realita sa nemení"
//         ogDescription="Máš prečítanú celú knižnicu osobného rozvoja, no tvoj systém stále hlási Error. Trpíš kognitívnym preťažením. Odomkni databázu sémanticky dekomprimovaných mŕtvych kníh. Oduč sa informačný balast a nájdi pravdu v tichu."
//         twitterTitle="EMPTY-BOOK: Čítaš stovky kníh, no tvoja realita sa nemení"
//         twitterDescription="Máš prečítanú celú knižnicu, no tvoj systém stále hlási Error. Odomkni databázu sémanticky dekomprimovaných kníh a oduč sa informačný balast."
//       /> */}

//       <GlobalDimensionHub
//         dimensionId="ID08"
//         dimensionName="EMPTY-BOOK"
//         dimColor={ID08_Map?.color || "#00FFFF"}
//         customMap={ID08_Map}
//         nodeComponents={NODE_COMPONENTS}
//       />
//     </>
//   );
// }
// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

export default function OfflineDimensionPreview() {
  const dimColor = "#00FFFF"; // Cyan

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
            ID08 // Empty-Book Cesta
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Empty{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Book
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <BookOpen size={14} style={{ color: dimColor }} /> Sémantická
            Literárna Databáza
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Prázdne zrkadlo poznania. Tu nezhromažďujeme encyklopedické texty.
            Dekódujeme myšlienky od Osha, Tolleho až po Kiyosakiho na hrubé
            skripty prítomnosti, premazávame staré knihy a vraciame sa do stavu
            'Tabula Rasa'."
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
            Predikovaná Omega Mapa (100 Uzlov) Cesta
          </h3>
        </div>

        {/* Scrollable zoznam */}
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[50vh] min-h-[400px] overflow-y-auto custom-scrollbar">
          {ID08_Map?.sections?.map((sec) => (
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
