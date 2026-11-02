import React from "react";
import { Radio, Lock, Database } from "lucide-react";
import { id14OmegaMap as ID14_Map } from "@main-web/data/ID14_OmegaMap";
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
// --- ONLINE UZLY (ID14) - NEXUS-BLOG [100 NODES READY / PENDING] ---
// ============================================================================

// 📂 SEKCIA A: VSTUPNÁ BRÁNA DO SIETE (Základy Blog UI)
// import Node_ID14_01 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_01";
// import Node_ID14_02 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_02";
// import Node_ID14_03 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_03";
// import Node_ID14_04 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_04";
// import Node_ID14_05 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_05";
// import Node_ID14_06 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_06";
// import Node_ID14_07 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_07";
// import Node_ID14_08 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_08";
// import Node_ID14_09 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_09";
// import Node_ID14_10 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_10";

// 📂 SEKCIA B: SÉMANTICKÉ VYSIELANIE (Tvorba Obsahu)
// import Node_ID14_11 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_11";
// import Node_ID14_12 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_12";
// import Node_ID14_13 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_13";
// import Node_ID14_14 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_14";
// import Node_ID14_15 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_15";
// import Node_ID14_16 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_16";
// import Node_ID14_17 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_17";
// import Node_ID14_18 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_18";
// import Node_ID14_19 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_19";
// import Node_ID14_20 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_20";

// 📂 SEKCIA C: INTERAKCIA A ODOZVA (Kódovanie Reakcií)
// import Node_ID14_21 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_21";
// import Node_ID14_22 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_22";
// import Node_ID14_23 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_23";
// import Node_ID14_24 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_24";
// import Node_ID14_25 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_25";
// import Node_ID14_26 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_26";
// import Node_ID14_27 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_27";
// import Node_ID14_28 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_28";
// import Node_ID14_29 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_29";
// import Node_ID14_30 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_30";

// 📂 SEKCIA D: KOMUNITNÝ FIREWALL (Moderácia a Banovanie)
// import Node_ID14_31 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_31";
// import Node_ID14_32 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_32";
// import Node_ID14_33 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_33";
// import Node_ID14_34 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_34";
// import Node_ID14_35 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_35";
// import Node_ID14_36 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_36";
// import Node_ID14_37 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_37";
// import Node_ID14_38 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_38";
// import Node_ID14_39 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_39";
// import Node_ID14_40 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_40";

// 📂 SEKCIA E: KLASTROVANIE A FILTROVANIE DÁT (Organizácia Matrixu)
// import Node_ID14_41 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_41";
// import Node_ID14_42 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_42";
// import Node_ID14_43 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_43";
// import Node_ID14_44 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_44";
// import Node_ID14_45 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_45";
// import Node_ID14_46 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_46";
// import Node_ID14_47 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_47";
// import Node_ID14_48 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_48";
// import Node_ID14_49 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_49";
// import Node_ID14_50 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_50";

// 📂 SEKCIA F: GHOST-MODE MARKETING A KONVERZIA (ToFu -> BoFu)
// import Node_ID14_51 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_51";
// import Node_ID14_52 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_52";
// import Node_ID14_53 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_53";
// import Node_ID14_54 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_54";
// import Node_ID14_55 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_55";
// import Node_ID14_56 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_56";
// import Node_ID14_57 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_57";
// import Node_ID14_58 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_58";
// import Node_ID14_59 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_59";
// import Node_ID14_60 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_60";

// 📂 SEKCIA G: GLOBAL EVENT REWARDS (Gamifikácia a Tokenomics)
// import Node_ID14_61 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_61";
// import Node_ID14_62 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_62";
// import Node_ID14_63 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_63";
// import Node_ID14_64 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_64";
// import Node_ID14_65 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_65";
// import Node_ID14_66 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_66";
// import Node_ID14_67 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_67";
// import Node_ID14_68 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_68";
// import Node_ID14_69 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_69";
// import Node_ID14_70 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_70";

// 📂 SEKCIA H: YOUTUBE & MEDIA DISTRIBÚCIA (Vonkajšie Vysielanie)
// import Node_ID14_71 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_71";
// import Node_ID14_72 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_72";
// import Node_ID14_73 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_73";
// import Node_ID14_74 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_74";
// import Node_ID14_75 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_75";
// import Node_ID14_76 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_76";
// import Node_ID14_77 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_77";
// import Node_ID14_78 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_78";
// import Node_ID14_79 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_79";
// import Node_ID14_80 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_80";

// 📂 SEKCIA I: KOLEKTÍVNE VEDOMIE (Budovanie Kmeňa a Franšízy)
// import Node_ID14_81 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_81";
// import Node_ID14_82 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_82";
// import Node_ID14_83 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_83";
// import Node_ID14_84 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_84";
// import Node_ID14_85 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_85";
// import Node_ID14_86 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_86";
// import Node_ID14_87 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_87";
// import Node_ID14_88 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_88";
// import Node_ID14_89 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_89";
// import Node_ID14_90 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_90";

// 📂 SEKCIA J: ENDGAME - AUTONÓMNY ÚĽ (Koniec Simulácie)
// import Node_ID14_91 from "@main-web/subPages/ID14-Blog/FREE/Node_ID14_91";
// import Node_ID14_92 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_92";
// import Node_ID14_93 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_93";
// import Node_ID14_94 from "@main-web/subPages/ID14-Blog/PRO/Node_ID14_94";
// import Node_ID14_95 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_95";
// import Node_ID14_96 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_96";
// import Node_ID14_97 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_97";
// import Node_ID14_98 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_98";
// import Node_ID14_99 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_99";
// import Node_ID14_100 from "@main-web/subPages/ID14-Blog/OMEGA/Node_ID14_100";

// ============================================================================
// 🔌 KONEKTOR UZLOV (NODE_COMPONENTS REGISTRY)
// ============================================================================
const NODE_COMPONENTS = {
  // "ID14-01": Node_ID14_01, // [FREE]
  // "ID14-02": Node_ID14_02, // [FREE]
  // "ID14-03": Node_ID14_03, // [FREE]
  // "ID14-04": Node_ID14_04, // [FREE]
  // "ID14-05": Node_ID14_05, // [FREE]
  // "ID14-06": Node_ID14_06, // [FREE]
  // "ID14-07": Node_ID14_07, // [PRO]
  // "ID14-08": Node_ID14_08, // [PRO]
  // "ID14-09": Node_ID14_09, // [OMEGA]
  // "ID14-10": Node_ID14_10, // [OMEGA]
  // "ID14-11": Node_ID14_11, // [FREE]
  // "ID14-12": Node_ID14_12, // [FREE]
  // "ID14-13": Node_ID14_13, // [PRO]
  // "ID14-14": Node_ID14_14, // [PRO]
  // "ID14-15": Node_ID14_15, // [PRO]
  // "ID14-16": Node_ID14_16, // [PRO]
  // "ID14-17": Node_ID14_17, // [OMEGA]
  // "ID14-18": Node_ID14_18, // [OMEGA]
  // "ID14-19": Node_ID14_19, // [OMEGA]
  // "ID14-20": Node_ID14_20, // [OMEGA]
  // "ID14-21": Node_ID14_21, // [FREE]
  // "ID14-22": Node_ID14_22, // [FREE]
  // "ID14-23": Node_ID14_23, // [PRO]
  // "ID14-24": Node_ID14_24, // [PRO]
  // "ID14-25": Node_ID14_25, // [PRO]
  // "ID14-26": Node_ID14_26, // [PRO]
  // "ID14-27": Node_ID14_27, // [OMEGA]
  // "ID14-28": Node_ID14_28, // [OMEGA]
  // "ID14-29": Node_ID14_29, // [OMEGA]
  // "ID14-30": Node_ID14_30, // [OMEGA]
  // "ID14-31": Node_ID14_31, // [FREE]
  // "ID14-32": Node_ID14_32, // [FREE]
  // "ID14-33": Node_ID14_33, // [PRO]
  // "ID14-34": Node_ID14_34, // [PRO]
  // "ID14-35": Node_ID14_35, // [PRO]
  // "ID14-36": Node_ID14_36, // [PRO]
  // "ID14-37": Node_ID14_37, // [OMEGA]
  // "ID14-38": Node_ID14_38, // [OMEGA]
  // "ID14-39": Node_ID14_39, // [OMEGA]
  // "ID14-40": Node_ID14_40, // [OMEGA]
  // "ID14-41": Node_ID14_41, // [FREE]
  // "ID14-42": Node_ID14_42, // [FREE]
  // "ID14-43": Node_ID14_43, // [PRO]
  // "ID14-44": Node_ID14_44, // [PRO]
  // "ID14-45": Node_ID14_45, // [PRO]
  // "ID14-46": Node_ID14_46, // [PRO]
  // "ID14-47": Node_ID14_47, // [OMEGA]
  // "ID14-48": Node_ID14_48, // [OMEGA]
  // "ID14-49": Node_ID14_49, // [OMEGA]
  // "ID14-50": Node_ID14_50, // [OMEGA]
  // "ID14-51": Node_ID14_51, // [FREE]
  // "ID14-52": Node_ID14_52, // [FREE]
  // "ID14-53": Node_ID14_53, // [PRO]
  // "ID14-54": Node_ID14_54, // [PRO]
  // "ID14-55": Node_ID14_55, // [PRO]
  // "ID14-56": Node_ID14_56, // [PRO]
  // "ID14-57": Node_ID14_57, // [OMEGA]
  // "ID14-58": Node_ID14_58, // [OMEGA]
  // "ID14-59": Node_ID14_59, // [OMEGA]
  // "ID14-60": Node_ID14_60, // [OMEGA]
  // "ID14-61": Node_ID14_61, // [FREE]
  // "ID14-62": Node_ID14_62, // [FREE]
  // "ID14-63": Node_ID14_63, // [PRO]
  // "ID14-64": Node_ID14_64, // [PRO]
  // "ID14-65": Node_ID14_65, // [PRO]
  // "ID14-66": Node_ID14_66, // [PRO]
  // "ID14-67": Node_ID14_67, // [OMEGA]
  // "ID14-68": Node_ID14_68, // [OMEGA]
  // "ID14-69": Node_ID14_69, // [OMEGA]
  // "ID14-70": Node_ID14_70, // [OMEGA]
  // "ID14-71": Node_ID14_71, // [FREE]
  // "ID14-72": Node_ID14_72, // [FREE]
  // "ID14-73": Node_ID14_73, // [PRO]
  // "ID14-74": Node_ID14_74, // [PRO]
  // "ID14-75": Node_ID14_75, // [PRO]
  // "ID14-76": Node_ID14_76, // [PRO]
  // "ID14-77": Node_ID14_77, // [OMEGA]
  // "ID14-78": Node_ID14_78, // [OMEGA]
  // "ID14-79": Node_ID14_79, // [OMEGA]
  // "ID14-80": Node_ID14_80, // [OMEGA]
  // "ID14-81": Node_ID14_81, // [FREE]
  // "ID14-82": Node_ID14_82, // [FREE]
  // "ID14-83": Node_ID14_83, // [PRO]
  // "ID14-84": Node_ID14_84, // [PRO]
  // "ID14-85": Node_ID14_85, // [PRO]
  // "ID14-86": Node_ID14_86, // [PRO]
  // "ID14-87": Node_ID14_87, // [OMEGA]
  // "ID14-88": Node_ID14_88, // [OMEGA]
  // "ID14-89": Node_ID14_89, // [OMEGA]
  // "ID14-90": Node_ID14_90, // [OMEGA]
  // "ID14-91": Node_ID14_91, // [FREE]
  // "ID14-92": Node_ID14_92, // [PRO]
  // "ID14-93": Node_ID14_93, // [PRO]
  // "ID14-94": Node_ID14_94, // [PRO]
  // "ID14-95": Node_ID14_95, // [OMEGA]
  // "ID14-96": Node_ID14_96, // [OMEGA]
  // "ID14-97": Node_ID14_97, // [OMEGA]
  // "ID14-98": Node_ID14_98, // [OMEGA]
  // "ID14-99": Node_ID14_99, // [OMEGA]
  // "ID14-100": Node_ID14_100, // [OMEGA]
};

// export default function ID14_NexusBlog() {
//   return (
//     <>
// <MetaTags
//   title="NEXUS-BLOG: Diskusné Fórum, IT Komunita a Osobný Rozvoj | NEXUS OS"
//   description="Uniknite algoritmickému šumu. NEXUS-BLOG je otvorená komunikačná sieť, diskusné fórum a verejný denník pre tvorcov hľadajúcich čistú prežitú pravdu a osobný rast."
//   image="https://projekt-nexus.sk/img-nexus/dimenzie/id14-nexus-blog.jpg"
//   color="#FF1493"
//   url="https://projekt-nexus.sk/ID14"
//   ogTitle="NEXUS-BLOG: Bežné siete ti pália RAM. Pripoj sa do našej komunity"
//   ogDescription="Algoritmy ti kradnú pozornosť a zahlcujú tvoj systém toxickým šumom. Zastav tento Error. Vstúp do našej otvorenej siete, diskutuj s operátormi a sťahuj čisté dáta bez balastu."
//   twitterTitle="NEXUS-BLOG: Bežné siete ti pália RAM. Pripoj sa do našej komunity"
//   twitterDescription="Algoritmy ti kradnú pozornosť a zahlcujú ťa toxickým šumom. Vstúp do našej otvorenej siete, diskutuj a sťahuj čisté dáta bez balastu."
// />

// <GlobalDimensionHub
//   dimensionId="ID14"
//   dimensionName="NEXUS-BLOG"
//   dimColor={ID14_Map?.color || "#FF1493"}
//   customMap={ID14_Map}
//   nodeComponents={NODE_COMPONENTS}
// />
//   );
// }

// ============================================================================
// 🛑 DOČASNÝ NÁHĽAD (OFFLINE DIMENSION PREVIEW)
// ============================================================================
// Tento kód sa zobrazuje, kým je dimenzia zamknutá/offline.

export default function OfflineDimensionPreview() {
  const dimColor = "#FF1493"; // Deep Pink pre ID14 Nexus-Blog

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
            ID14 // Nexus-Blog
          </span>
          <span className="text-white/20 text-[9px] uppercase tracking-[4px]">
            Offline_Dimension
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
          Nexus{" "}
          <span className="not-italic" style={{ color: dimColor }}>
            Blog
          </span>
        </h1>
      </header>

      {/* SYSTÉMOVÝ BOX */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-white font-black uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
            <Radio size={14} style={{ color: dimColor }} /> Otvorená Komunikačná
            Sieť
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed italic">
            "Sémantické vysielanie do Matrixu. Verejný denník, diskusie a
            prepojenie celej Siete entít. Miesto, kde prežitá pravda Architekta
            priamo mení realitu ostatných operátorov a spúšťa Zákon Rezonancie."
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
          {ID14_Map?.sections?.map((sec) => (
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
