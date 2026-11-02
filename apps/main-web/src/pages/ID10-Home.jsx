import React from "react";
import { Home, Lock, Database } from "lucide-react";
import { id10OmegaMap as ID10_Map } from "@main-web/data/ID10_OmegaMap";
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
// --- ONLINE UZLY (ID10) - NONIDENTITY-CORE [102 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: ZÁKLADNÉ PILIERE VNÚTRA (Vstupná Brána)
// import Node_ID10_01 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_01";
// import Node_ID10_02 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_02";
// import Node_ID10_03 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_03";
// import Node_ID10_04 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_04";
// import Node_ID10_05 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_05";
// import Node_ID10_06 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_06";
// import Node_ID10_07 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_07";
// import Node_ID10_08 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_08";
// import Node_ID10_09 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_09";
// import Node_ID10_10 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_10";
// import Node_ID10_101 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_101"; // Slovník
// import Node_ID10_102 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_102"; // Prekladový Kľúč

// 📂 SEKCIA B: ARCHITEKTÚRA DOMÁCEHO PROSTREDIA (Fyzický Habitat)
// import Node_ID10_11 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_11";
// import Node_ID10_12 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_12";
// import Node_ID10_13 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_13";
// import Node_ID10_14 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_14";
// import Node_ID10_15 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_15";
// import Node_ID10_16 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_16";
// import Node_ID10_17 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_17";
// import Node_ID10_18 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_18";
// import Node_ID10_19 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_19";
// import Node_ID10_20 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_20";

// 📂 SEKCIA C: DEFRAGMENTÁCIA DISKU (Meditácia a Ticho)
// import Node_ID10_21 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_21";
// import Node_ID10_22 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_22";
// import Node_ID10_23 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_23";
// import Node_ID10_24 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_24";
// import Node_ID10_25 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_25";
// import Node_ID10_26 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_26";
// import Node_ID10_27 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_27";
// import Node_ID10_28 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_28";
// import Node_ID10_29 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_29";
// import Node_ID10_30 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_30";

// 📂 SEKCIA D: WU-WEI V PRAXI (Umenie Nekonania)
// import Node_ID10_31 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_31";
// import Node_ID10_32 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_32";
// import Node_ID10_33 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_33";
// import Node_ID10_34 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_34";
// import Node_ID10_35 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_35";
// import Node_ID10_36 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_36";
// import Node_ID10_37 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_37";
// import Node_ID10_38 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_38";
// import Node_ID10_39 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_39";
// import Node_ID10_40 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_40";

// 📂 SEKCIA E: OFFLINE MÓD (Digitálna a Senzorická Očista)
// import Node_ID10_41 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_41";
// import Node_ID10_42 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_42";
// import Node_ID10_43 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_43";
// import Node_ID10_44 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_44";
// import Node_ID10_45 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_45";
// import Node_ID10_46 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_46";
// import Node_ID10_47 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_47";
// import Node_ID10_48 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_48";
// import Node_ID10_49 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_49";
// import Node_ID10_50 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_50";

// 📂 SEKCIA F: TICHÝ SVEDOK A POZOROVATEĽ (System Admin)
// import Node_ID10_51 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_51";
// import Node_ID10_52 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_52";
// import Node_ID10_53 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_53";
// import Node_ID10_54 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_54";
// import Node_ID10_55 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_55";
// import Node_ID10_56 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_56";
// import Node_ID10_57 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_57";
// import Node_ID10_58 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_58";
// import Node_ID10_59 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_59";
// import Node_ID10_60 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_60";

// 📂 SEKCIA G: RODINA A LOKÁLNA SIEŤ (Blízke Uzly)
// import Node_ID10_61 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_61";
// import Node_ID10_62 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_62";
// import Node_ID10_63 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_63";
// import Node_ID10_64 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_64";
// import Node_ID10_65 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_65";
// import Node_ID10_66 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_66";
// import Node_ID10_67 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_67";
// import Node_ID10_68 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_68";
// import Node_ID10_69 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_69";
// import Node_ID10_70 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_70";

// 📂 SEKCIA H: BIG CRUNCH PROTOKOLY (Kolaps do seba)
// import Node_ID10_71 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_71";
// import Node_ID10_72 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_72";
// import Node_ID10_73 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_73";
// import Node_ID10_74 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_74";
// import Node_ID10_75 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_75";
// import Node_ID10_76 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_76";
// import Node_ID10_77 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_77";
// import Node_ID10_78 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_78";
// import Node_ID10_79 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_79";
// import Node_ID10_80 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_80";

// 📂 SEKCIA I: AKUMULÁCIA A ZDROJ (Nabitie Baterky)
// import Node_ID10_81 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_81";
// import Node_ID10_82 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_82";
// import Node_ID10_83 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_83";
// import Node_ID10_84 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_84";
// import Node_ID10_85 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_85";
// import Node_ID10_86 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_86";
// import Node_ID10_87 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_87";
// import Node_ID10_88 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_88";
// import Node_ID10_89 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_89";
// import Node_ID10_90 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_90";

// 📂 SEKCIA J: ABSOLÚTNE BYTIE A JEMNOHMOTNÉ TELÁ
// import Node_ID10_91 from "@main-web/subPages/ID10-Home/FREE/Node_ID10_91";
// import Node_ID10_92 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_92";
// import Node_ID10_93 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_93";
// import Node_ID10_94 from "@main-web/subPages/ID10-Home/PRO/Node_ID10_94";
// import Node_ID10_95 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_95";
// import Node_ID10_96 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_96";
// import Node_ID10_97 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_97";
// import Node_ID10_98 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_98";
// import Node_ID10_99 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_99";
// import Node_ID10_100 from "@main-web/subPages/ID10-Home/OMEGA/Node_ID10_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // 📂 SEKCIA A
  // "ID10-01": Node_ID10_01, // [FREE]
  // "ID10-02": Node_ID10_02, // [FREE]
  // "ID10-03": Node_ID10_03, // [FREE]
  // "ID10-04": Node_ID10_04, // [FREE]
  // "ID10-05": Node_ID10_05, // [FREE]
  // "ID10-06": Node_ID10_06, // [FREE]
  // "ID10-07": Node_ID10_07, // [PRO]
  // "ID10-08": Node_ID10_08, // [PRO]
  // "ID10-09": Node_ID10_09, // [OMEGA]
  // "ID10-10": Node_ID10_10, // [OMEGA]
  // "ID10-101": Node_ID10_101, // [FREE]
  // "ID10-102": Node_ID10_102, // [FREE]
  // 📂 SEKCIA B
  // "ID10-11": Node_ID10_11, // [FREE]
  // "ID10-12": Node_ID10_12, // [FREE]
  // "ID10-13": Node_ID10_13, // [PRO]
  // "ID10-14": Node_ID10_14, // [PRO]
  // "ID10-15": Node_ID10_15, // [PRO]
  // "ID10-16": Node_ID10_16, // [PRO]
  // "ID10-17": Node_ID10_17, // [OMEGA]
  // "ID10-18": Node_ID10_18, // [OMEGA]
  // "ID10-19": Node_ID10_19, // [OMEGA]
  // "ID10-20": Node_ID10_20, // [OMEGA]
  // 📂 SEKCIA C
  // "ID10-21": Node_ID10_21, // [FREE]
  // "ID10-22": Node_ID10_22, // [FREE]
  // "ID10-23": Node_ID10_23, // [PRO]
  // "ID10-24": Node_ID10_24, // [PRO]
  // "ID10-25": Node_ID10_25, // [PRO]
  // "ID10-26": Node_ID10_26, // [PRO]
  // "ID10-27": Node_ID10_27, // [OMEGA]
  // "ID10-28": Node_ID10_28, // [OMEGA]
  // "ID10-29": Node_ID10_29, // [OMEGA]
  // "ID10-30": Node_ID10_30, // [OMEGA]
  // 📂 SEKCIA D
  // "ID10-31": Node_ID10_31, // [FREE]
  // "ID10-32": Node_ID10_32, // [FREE]
  // "ID10-33": Node_ID10_33, // [PRO]
  // "ID10-34": Node_ID10_34, // [PRO]
  // "ID10-35": Node_ID10_35, // [PRO]
  // "ID10-36": Node_ID10_36, // [PRO]
  // "ID10-37": Node_ID10_37, // [OMEGA]
  // "ID10-38": Node_ID10_38, // [OMEGA]
  // "ID10-39": Node_ID10_39, // [OMEGA]
  // "ID10-40": Node_ID10_40, // [OMEGA]
  // 📂 SEKCIA E
  // "ID10-41": Node_ID10_41, // [FREE]
  // "ID10-42": Node_ID10_42, // [FREE]
  // "ID10-43": Node_ID10_43, // [PRO]
  // "ID10-44": Node_ID10_44, // [PRO]
  // "ID10-45": Node_ID10_45, // [PRO]
  // "ID10-46": Node_ID10_46, // [PRO]
  // "ID10-47": Node_ID10_47, // [OMEGA]
  // "ID10-48": Node_ID10_48, // [OMEGA]
  // "ID10-49": Node_ID10_49, // [OMEGA]
  // "ID10-50": Node_ID10_50, // [OMEGA]
  // 📂 SEKCIA F
  // "ID10-51": Node_ID10_51, // [FREE]
  // "ID10-52": Node_ID10_52, // [FREE]
  // "ID10-53": Node_ID10_53, // [PRO]
  // "ID10-54": Node_ID10_54, // [PRO]
  // "ID10-55": Node_ID10_55, // [PRO]
  // "ID10-56": Node_ID10_56, // [PRO]
  // "ID10-57": Node_ID10_57, // [OMEGA]
  // "ID10-58": Node_ID10_58, // [OMEGA]
  // "ID10-59": Node_ID10_59, // [OMEGA]
  // "ID10-60": Node_ID10_60, // [OMEGA]
  // 📂 SEKCIA G
  // "ID10-61": Node_ID10_61, // [FREE]
  // "ID10-62": Node_ID10_62, // [FREE]
  // "ID10-63": Node_ID10_63, // [PRO]
  // "ID10-64": Node_ID10_64, // [PRO]
  // "ID10-65": Node_ID10_65, // [PRO]
  // "ID10-66": Node_ID10_66, // [PRO]
  // "ID10-67": Node_ID10_67, // [OMEGA]
  // "ID10-68": Node_ID10_68, // [OMEGA]
  // "ID10-69": Node_ID10_69, // [OMEGA]
  // "ID10-70": Node_ID10_70, // [OMEGA]
  // 📂 SEKCIA H
  // "ID10-71": Node_ID10_71, // [FREE]
  // "ID10-72": Node_ID10_72, // [FREE]
  // "ID10-73": Node_ID10_73, // [PRO]
  // "ID10-74": Node_ID10_74, // [PRO]
  // "ID10-75": Node_ID10_75, // [PRO]
  // "ID10-76": Node_ID10_76, // [PRO]
  // "ID10-77": Node_ID10_77, // [OMEGA]
  // "ID10-78": Node_ID10_78, // [OMEGA]
  // "ID10-79": Node_ID10_79, // [OMEGA]
  // "ID10-80": Node_ID10_80, // [OMEGA]
  // 📂 SEKCIA I
  // "ID10-81": Node_ID10_81, // [FREE]
  // "ID10-82": Node_ID10_82, // [FREE]
  // "ID10-83": Node_ID10_83, // [PRO]
  // "ID10-84": Node_ID10_84, // [PRO]
  // "ID10-85": Node_ID10_85, // [PRO]
  // "ID10-86": Node_ID10_86, // [PRO]
  // "ID10-87": Node_ID10_87, // [OMEGA]
  // "ID10-88": Node_ID10_88, // [OMEGA]
  // "ID10-89": Node_ID10_89, // [OMEGA]
  // "ID10-90": Node_ID10_90, // [OMEGA]
  // 📂 SEKCIA J
  // "ID10-91": Node_ID10_91, // [FREE]
  // "ID10-92": Node_ID10_92, // [PRO]
  // "ID10-93": Node_ID10_93, // [PRO]
  // "ID10-94": Node_ID10_94, // [PRO]
  // "ID10-95": Node_ID10_95, // [OMEGA]
  // "ID10-96": Node_ID10_96, // [OMEGA]
  // "ID10-97": Node_ID10_97, // [OMEGA]
  // "ID10-98": Node_ID10_98, // [OMEGA]
  // "ID10-99": Node_ID10_99, // [OMEGA]
  // "ID10-100": Node_ID10_100, // [OMEGA]
};

// export default function ID10_NonIdentityCore() {
//   // console.log("[SYS_LOG]: Renderujem ID10 Hub s mapou:", ID10_Map);

//   return (
//     <>
//       {/* <MetaTags
//         title="NONIDENTITY-CORE: Vnútorný pokoj, Wu-wei a Digitálny detox | NEXUS OS"
//         description="Váš systém je preťažený hlukom Matrixu? NONIDENTITY-CORE je priestor pre digitálny detox, minimalizmus a Wu-wei. Prepnite sa do stavu Tichého svedka a nájdite absolútny pokoj."
//         image="https://projekt-nexus.sk/img-nexus/dimenzie/id10-nonidentity-core.jpg"
//         color="#0044FF"
//         url="https://projekt-nexus.sk/ID10"
//         ogTitle="NONIDENTITY-CORE: Tvoja myseľ neustále kričí. Vypni ju."
//         ogDescription="Matrix ťa programuje k neustálemu stresu a výkonu. Zastav túto expanziu. Odomkni protokoly pre Wu-wei, digitálny detox a urob zo svojho domova nepriestrelný firewall pred vonkajším hlukom."
//         twitterTitle="NONIDENTITY-CORE: Tvoja myseľ neustále kričí. Vypni ju."
//         twitterDescription="Matrix ťa programuje k neustálemu stresu. Zastav túto expanziu. Odomkni protokoly pre Wu-wei, digitálny detox a urob zo svojho domova nepriestrelný firewall."
//       /> */}

//       <GlobalDimensionHub
//         dimensionId="ID10"
//         dimensionName="NONIDENTITY-CORE"
//         dimColor={ID10_Map?.color || "#0044FF"}
//         customMap={ID10_Map}
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
  const dimColor = "#0044FF"; // Hlboká Modrá pre ID10 NonIdentity-Core

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left space-y-6 max-w-5xl mx-auto p-4 md:p-8 font-mono">
      {/* 1. Globálne audio, efekty a pozadie */}
      <GlobalComponents themeColor={dimColor} />
      {/* HLAVIČKA (Kompaktná) */}{" "}
      <header className="border-b border-white/10 pb-4">
        {" "}
        <div className="flex items-center gap-3 mb-2">
          <span
            className="bg-black border px-2 py-0.5 text-[10px] font-black uppercase tracking-widest"
            style={{
              borderColor: dimColor,
              color: dimColor,
              boxShadow: `0 0 10px ${dimColor}40`,
            }}
          >
            ID10 // NonIdentity-Core
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          NonIdentity{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Core
          </span>
        </h1>
      </header>
      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Home size={14} style={{ color: dimColor }} /> Habitat Tichého
            Svedka
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Domov ako chrám prítomnosti. Fyzické ukotvenie cez Wu-wei a Big
            Crunch protokoly. Zastavenie expanzie Matrixu vo vlastnom vnútornom
            priestore. Návrat z vytvorenej identity (Avatara) späť do
            absolútneho a čistého Bytia."
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
          {ID10_Map?.sections?.map((sec) => (
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
        PROCESSED BY GEMINI_AI NEURAL_LINK_V5 <br />© 2026 NEXUS PROTOCOL.
      </footer>
    </div>
  );
}
