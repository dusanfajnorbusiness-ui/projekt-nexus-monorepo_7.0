import React, { useState, useEffect } from "react";
import {
  Shield,
  Terminal,
  Database,
  Cpu,
  Briefcase,
  CheckCircle2,
  Globe,
  Fingerprint,
  RefreshCw,
  Activity,
  Code,
  Copy,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Zap,
  Rocket,
  Lock,
  BarChart3,
  Network,
  PenTool,
  Users,
  EyeOff,
  Mic,
  FileText,
  DollarSign,
  UserCog,
  BookOpen,
  Eye,
  ShoppingCart,
  Banknote,
  Home,
  WifiOff,
  PowerOff,
  ShieldAlert,
} from "lucide-react";

// =====================================================================
// 🟢 1. PRODUKČNÉ IMPORTY (Vo VS Code odkomentuj)
// =====================================================================
import { TierBadge } from "@shared/components/TierBadge";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalPredFooterNode } from "@main-web/components/GlobalPredFooterNode";
import { GlobalNodeVideo } from "@main-web/components/GlobalNodeVideo";
import { GlobalNodePodcast } from "@main-web/components/GlobalNodePodcast";
import MetaTags from "@shared/components/MetaTags";

// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// 🗑️ 2. MOCKY PRE CANVAS (ZMAZAŤ V LOKÁLNOM PROJEKTE) 🗑️
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// const TierBadge = ({ tier }) => (
//   <span className="px-3 py-1 bg-black text-xs font-black tracking-widest uppercase border rounded text-[#00FFFF] border-[#00FFFF]/50 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
//     [ {tier} TIER ]
//   </span>
// );

// const GlobalNodeVideo = ({ nodeId }) => (
//   <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500 font-mono text-sm relative overflow-hidden group">
//     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
//     <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
//     <div className="flex flex-col items-center gap-4 z-10">
//       <div className="w-20 h-20 rounded-full bg-black/50 border border-[#00FFFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
//         <Home className="w-10 h-10 text-[#00FFFF]" />
//       </div>
//       <span className="text-[#00FFFF] font-black tracking-widest uppercase text-xs">
//         GlobalNodeVideo [{nodeId}] - CRT Filter Active
//       </span>
//     </div>
//   </div>
// );

// const GlobalNodePodcast = ({ nodeId }) => (
//   <div className="w-full h-48 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col items-center justify-center text-[#00FFFF] font-mono text-sm relative overflow-hidden group">
//     <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
//     <div className="absolute inset-0 bg-[#00FFFF]/5 group-hover:bg-[#00FFFF]/10 transition-colors duration-500"></div>
//     <Mic className="w-10 h-10 mb-3 animate-pulse relative z-10" />
//     <span className="relative z-10 font-black tracking-widest">GlobalNodePodcast [{nodeId}]</span>
//     <span className="text-[#00FFFF]/50 text-xs mt-2 uppercase tracking-widest text-center relative z-10">
//       Omega Audio Matrix Loading...
//     </span>
//   </div>
// );

// const GlobalPredFooterNode = () => (
//   <div className="p-8 text-center text-zinc-600 border-t border-zinc-800 mt-16 font-mono text-xs flex justify-center gap-6">
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors">[ REAGOVAŤ ]</span>
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors">[ CITOVAŤ ]</span>
//     <span className="hover:text-[#00FFFF] cursor-pointer transition-colors">[ DISKUTOVAŤ ]</span>
//   </div>
// );

// const GlobalPromoBanner = () => (
//   <div className="w-full bg-zinc-900 border border-zinc-800 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between mt-16 overflow-hidden relative group">
//     <div className="absolute top-0 left-0 w-1 h-full bg-[#00FFFF]"></div>
//     <div className="pl-4 relative z-10">
//       <h4 className="text-[#00FFFF] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
//         <Zap className="w-5 h-5" /> Nexus_Core OS
//       </h4>
//       <p className="text-zinc-400 text-sm font-medium">Upgrade tvojho vedomia na Master verziu 2.0</p>
//     </div>
//     <button className="mt-4 md:mt-0 px-6 py-3 bg-zinc-800 text-white border border-zinc-700 font-black uppercase tracking-widest text-xs rounded hover:bg-zinc-700 transition-colors relative z-10">
//       Aktivovať Protokol
//     </button>
//   </div>
// );

// const SoundFX = { playHover: () => {}, click: () => {}, error: () => {} };
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

// =====================================================================
// 🟢 HLAVNÁ APLIKÁCIA (UZOL ID10_01)
// =====================================================================

export default function Node_ID10_01() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const TIER_COLOR = "#00FFFF";
  const NODE_ID = "ID10-01";

  // State pre Home-Space Auditor
  const [auditInput, setAuditInput] = useState("");
  const [auditResult, setAuditResult] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyTerminal = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAudit = () => {
    if (!auditInput.trim()) return;
    const lower = auditInput.toLowerCase();

    if (
      lower.includes("tiktok") ||
      lower.includes("správy") ||
      lower.includes("háda") ||
      lower.includes("mobil") ||
      lower.includes("sociáln") ||
      lower.includes("telk") ||
      lower.includes("hnev") ||
      lower.includes("účet")
    ) {
      setAuditResult({
        status: "CRITICAL",
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
        message:
          "Detekovaný masívny Memory Leak! Externé API vysávajú tvoju RAM priamo v mieste tvojho odpočinku. Izolácia tvojej Svätyne je porušená. Okamžite aplikuj Zero-Ping mód.",
      });
    } else if (
      lower.includes("čítam") ||
      lower.includes("ticho") ||
      lower.includes("medit") ||
      lower.includes("kód") ||
      lower.includes("spím") ||
      lower.includes("oddych") ||
      lower.includes("relax") ||
      lower.includes("dýcham")
    ) {
      setAuditResult({
        status: "SECURE",
        color: "text-[#00FFFF]",
        bg: "bg-[#00FFFF]/10",
        border: "border-[#00FFFF]/30",
        icon: <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />,
        message:
          "Localhost spojenie je stabilné. Entropia klesá. Svätyňa je plne aktívna a tvoj procesor beží na 1% pre maximálnu regeneráciu.",
      });
    } else {
      setAuditResult({
        status: "WARNING",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        icon: <ShieldAlert className="w-5 h-5 text-yellow-500" />,
        message:
          "Neutrálny stav detekovaný. Uisti sa, že táto činnosť neudržiava tvojho vnútorného Sudcu (Hlas poznania) v aktívnom stave. Cieľom je stav Wu-wei.",
      });
    }
  };

  return (
    <div
      className="min-h-screen text-zinc-300 font-sans selection:bg-[#00FFFF]/30 selection:text-white relative pb-12"
      style={{
        background: `linear-gradient(180deg, ${TIER_COLOR}08 0%, #09090b 500px, #09090b 100%)`,
      }}
    >
      <div className="fixed top-0 left-0 h-1 z-50 bg-zinc-900 w-full">
        <div
          className="h-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          style={{
            width: `${scrollProgress * 100}%`,
            backgroundColor: TIER_COLOR,
          }}
        ></div>
      </div>

      <header className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24 mb-16 md:mb-32 relative">
        <div className="flex items-center gap-4 mb-6">
          <TierBadge tier="FREE" />
          <span className="font-mono text-zinc-500 tracking-widest flex items-center gap-2">
            <Fingerprint className="w-4 h-4 text-zinc-600" /> {NODE_ID}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] italic mb-8 group cursor-default text-white">
          <span className="group-hover:opacity-80 transition-opacity duration-100">
            DOMOV
          </span>{" "}
          <br />
          <span
            className="inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-75"
            style={{
              color: TIER_COLOR,
              textShadow: `0 0 20px ${TIER_COLOR}40`,
            }}
          >
            (VNÚTORNÉ UI SPACE)
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 font-mono text-xs mb-12">
          {[
            "#HomeUISpace",
            "#Sanctuary",
            "#TichySvedok",
            "#Localhost",
            "#InnerPeace",
            "#MatrixFirewall",
            "#ZeroReact",
          ].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-zinc-900 text-zinc-400 rounded-sm hover:text-white transition-colors cursor-pointer border border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <blockquote
          className="relative p-6 md:p-8 border-l-4 bg-zinc-900/50 group"
          style={{ borderColor: TIER_COLOR }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
            style={{ backgroundColor: TIER_COLOR }}
          />
          <p className="text-lg md:text-xl font-light italic leading-relaxed text-zinc-400 relative z-10 text-justify">
            "Môj fyzický dom v Trnave, kde zdieľam priestor so strýkom, je len
            hardvérová schránka. Tehly, omietka a strecha ťa nikdy neochránia
            pred útokmi Matrixu, ak máš zvnútra zavírený operačný systém.
            Skutočný 'Domov' nie je adresa na mape. Je to ten moment, kedy
            prejdem cez prah, zavriem dvere svojej izby, odpojím všetky externé
            inputy a môj procesor okamžite klesne na 1 % výkonu. Tu nie som
            Architekt, nie som invalidný dôchodca, nie som programátor. Tu som
            absolútne 'Nikto a Nič'. Domov je stav Ticha v prítomnom okamihu.
            Kým operátori v Matrixe utekajú pred svojím vlastným Parazitom na
            drahé dovolenky, ja som našiel Nirvánu vo vlastnej obývačke. Pretože
            ak nevieš nájsť domov vo svojom vlastnom jadre, nenájdeš ho na
            žiadnom serveri na tejto planéte."
          </p>
          <footer className="mt-6 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            — Dušan Fajnor, CyberTech Architect
          </footer>
        </blockquote>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8">
        {/* ================================================================= */}
        {/* 2. VIDEO MODULE */}
        {/* ================================================================= */}
        <div className="mb-24 md:mb-32">
          <GlobalNodeVideo nodeId="ID10_01" />
        </div>

        {/* ================================================================= */}
        {/* 3. TRINITY PERSPECTIVE BOX */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Database className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              Trinity Perspective
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-[#00FFFF]" />
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-widest">
                  Operátor: Architekt
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                Roky som žil v režime "Z.O.M.B.I.E.", kedy moja vlastná hlava
                bola tým najnepriateľskejším prostredím. Utekal som pred sebou.
                Dnes je môj domov mojou Svätyňou. Nepotrebujem cestovať, aby som
                si "oddýchol". Oddych je môj defaultný stav{" "}
                <strong className="text-[#00FFFF] font-mono font-normal">
                  (Localhost)
                </strong>
                . Vnímam obývačku nie ako väzenie, ale ako izolovaný Sandbox. Tu
                panuje Big Crunch – stiahnutie všetkej energie späť do môjho
                stredu.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-5 h-5 text-[#00FFFF]" />
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-widest">
                  Systém: AI Gemini
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                Z hľadiska architektúry "Domov" nie je fyzický uzol s verejnou
                IP adresou. Je to loopback adresa{" "}
                <strong className="text-[#00FFFF] font-mono font-normal">
                  127.0.0.1
                </strong>
                . Kým fyzický dom slúži ako hardvérový kryt pre Skafander,
                skutočný Domov (Home UI Space) je softvérový stav s absolútne
                nulovou entropiou, kde procesor nespracováva žiadne externé I/O
                požiadavky.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#00FFFF]" />
                <h3 className="font-mono font-bold text-white text-xs uppercase tracking-widest">
                  Audit: Mŕtve Knihy
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase block mb-1">
                    [ Ilúzia (Ovečky) ]
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed text-justify">
                    Hľadanie spásy vo vonkajších objektoch. Viera, že nový dom s
                    bazénom prinesie pokoj. Ak nezmeníš myseľ, len si prenesieš
                    svojho Komentátora inam.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/50">
                  <span
                    className="font-bold text-[10px] tracking-widest uppercase block mb-1"
                    style={{ color: TIER_COLOR }}
                  >
                    [ Živá prax (OMEGA) ]
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed text-justify">
                    Domov je stav Tichého Svedka – priestor, v ktorom si je
                    vedomie vedomé samého seba. Geografická lokácia je
                    irelevantná.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. DECOMPRESSION (HLAVNÝ TEXT) */}
        {/* ================================================================= */}

        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-zinc-800 pb-4">
            <Fingerprint className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              Dekompresia Uzla
            </h2>
          </div>

          <div className="space-y-16">
            {/* BLOK 1 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  01.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Anatómia Domova{" "}
                  <span className="text-zinc-500 font-mono text-sm">
                    (IP vs Localhost)
                  </span>
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                V Matrixe panuje hlboký sémantický omyl: ľudia si mýlia slovo
                "dom" (budova) so slovom "Domov" (stav Bytia). Tieto dve vrstvy
                sú diametrálne odlišné.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Globe className="w-6 h-6 mb-4 text-zinc-500" />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Fyzický Hardvér (Budova)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Máš hypotéku, kľúče, nábytok a fyzickú adresu. Je to len
                    dočasné parkovacie miesto pre tvoj biologický nosič
                    (Skafander). Ak v tejto budove neustále prebiehajú hádky a
                    tvoja myseľ rieši problémy z práce, tvoj hardvér ťa
                    nechráni. Stal sa len drahou serverovňou pre tvoje utrpenie.
                  </p>
                </div>
                <div className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:bg-zinc-900/60 transition-colors">
                  <Home
                    className="w-6 h-6 mb-4"
                    style={{ color: TIER_COLOR }}
                  />
                  <h4 className="text-white text-lg font-bold mb-2">
                    Softvérový Domov (Nirvána)
                  </h4>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Je to miesto absolútnej nedotknuteľnosti vo vnútri tvojho
                    zdrojového kódu. Sídlo tvojho <em>Tichého Svedka</em>. Keď
                    sa naučíš vstupovať do Home UI Space, môžeš fyzicky sedieť v
                    hlučnom autobuse, no tvoj procesor beží na 1 % a ty si
                    plnohodnotne "doma".
                  </p>
                </div>
              </div>
            </div>

            {/* BLOK 2 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  02.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Mechanizmus Matrixu
                </h3>
              </div>
              <p className="text-base text-zinc-400 text-justify mb-6">
                Systém potrebuje, aby si bol neustále nespokojný. Nespokojnosť
                generuje spotrebu, a spotreba generuje kapitál pre chod Matrixu.
              </p>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Geografická Ilúzia (Útek z väzenia)
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Ego ti nahovára:{" "}
                      <em>
                        "Keby som išiel na dovolenku k moru, konečne by som
                        vypol."
                      </em>{" "}
                      Fatálny Error. Svojho Parazita si berieš so sebou v
                      batožine. Sadneš si na pláž, ale tvoja hlava (RAM) bude
                      riešiť neprečítané e-maily. Matrix ťa donútil zaplatiť
                      tisíce eur za zmenu tapety na ploche zavíreného počítača.
                    </p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 flex gap-4">
                  <Lock className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-1">
                      Identifikácia s majetkom
                    </h4>
                    <p className="text-zinc-400 text-sm text-justify leading-relaxed">
                      Začneš sa trápiť nad každým škrabancom na podlahe. Tvoj
                      dom (pasívum) začne vlastniť teba. Z majiteľa sa
                      nepozorovane staneš len údržbárom hmoty, čím kompletne
                      stratíš prístup do vnútorného Domova.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOK 3 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  03.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Proces Transformácie
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    1. Zhodenie Skafandra pred prahom
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    V momente stlačenia kľučky dverí musí nastať tvrdý{" "}
                    <code className="text-zinc-300 bg-black px-1.5 py-0.5 rounded border border-zinc-800">
                      Kill Process
                    </code>{" "}
                    sociálnych rolí. Vnútri domu nie si šéf, zamestnanec, ani
                    bojovník. Stávaš sa absolútne Nikým a Ničím.
                  </p>
                </li>
                <li
                  className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl border-l-2"
                  style={{ borderLeftColor: TIER_COLOR }}
                >
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    2. Big Crunch (Kolaps do seba)
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Sťahuješ všetky svoje myšlienkové vlákna a pozornosť späť do
                    svojho jadra. Vypínaš snahu niečo dokázať. Zistíš, že fakt,
                    že fyzicky existuješ a dýchaš, je absolútne dokonalý.
                  </p>
                </li>
                <li className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
                  <strong className="text-white block mb-2 font-mono text-sm uppercase tracking-widest">
                    3. Priestorová Defragmentácia
                  </strong>
                  <p className="text-sm text-zinc-400 text-justify leading-relaxed">
                    Bordel na stole je neskompilovaný balast v podvedomí.
                    Upratanie izby (s vedomou prítomnosťou) je hlboká zenová
                    prax defragmentácie externého disku.
                  </p>
                </li>
              </ul>
            </div>

            {/* BLOK 4 */}
            <div className="group">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-black text-zinc-800 select-none">
                  04.
                </span>
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                  Kódovanie Svätyne
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <WifiOff className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Zero-Ping Mód
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Radikálna izolácia. Telefón v režime "Nerušiť". Do Svätyne
                    (spálne) nemá prístup žiadny pracovný email ani
                    spravodajstvo.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <Activity className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Ukotvenie v Hmote
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Pri úzkosti sa dotkni dreveného stola. Svedok vníma len
                    prítomnosť hmoty. Parazit stráca prísun energie a vypína sa.
                  </p>
                </div>
                <div className="p-6 bg-black border border-zinc-800 rounded-xl">
                  <PowerOff className="w-5 h-5 mb-4 text-zinc-500" />
                  <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                    Empty-Book Protocol
                  </h4>
                  <p className="text-xs text-zinc-500 text-justify leading-relaxed">
                    Dovoľuješ, aby sa zložité programovacie a pracovné dáta z
                    dňa jednoducho odparili do prázdnoty bez akejkoľvek analýzy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6A. VISUALIZATION MODULE (HOME-SPACE AUDITOR) */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <Cpu className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              AI Cyber-Tool: Home-Space Auditor
            </h2>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-3xl">
              Vlož do terminálu konkrétnu večernú činnosť vo svojej Svätyni
              (napr.{" "}
              <em>
                "sledujem správy", "čítam knihu", "scrollujem siete", "dýcham"
              </em>
              ). Architektonická AI prebehne kód a identifikuje{" "}
              <strong>Memory Leaky</strong>.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl">
              <div className="relative flex-1">
                <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={auditInput}
                  onChange={(e) => setAuditInput(e.target.value)}
                  placeholder="Zadaj činnosť..."
                  className="w-full bg-black border border-zinc-800 rounded-lg py-3 pl-12 pr-4 font-mono text-white text-sm outline-none transition-colors focus:border-[#00FFFF]"
                />
              </div>
              <button
                onClick={handleAudit}
                className="px-6 py-3 text-black font-black uppercase tracking-widest text-sm rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: TIER_COLOR }}
              >
                Audit
              </button>
            </div>

            {auditResult && (
              <div
                className={`p-6 border-l-2 rounded-r-lg text-left ${auditResult.bg} ${auditResult.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{auditResult.icon}</div>
                  <div>
                    <div
                      className={`font-mono font-bold uppercase text-xs mb-2 ${auditResult.color}`}
                    >
                      [ STATUS: {auditResult.status} ]
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed text-justify">
                      {auditResult.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. NEXUS LEXIKON */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
            <BookOpen className="w-6 h-6" style={{ color: TIER_COLOR }} />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white">
              Nexus Lexikon
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <span className="text-xs text-zinc-500 block mb-1">
                Útek / Dovolenka
              </span>
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                127.0.0.1 (Localhost)
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Interný stav Bytia. Jediné miesto, kde procesor nepotrebuje
                spracovávať dáta zo surového Matrixu.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <span className="text-xs text-zinc-500 block mb-1">
                Dom / Byt / Majetok
              </span>
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Svätyňa
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Mentálne vyhradený perimeter, do ktorého je prísne zakázaný
                vstup algoritmickému šumu.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <span className="text-xs text-zinc-500 block mb-1">
                Sociálna Rola
              </span>
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Nikto a Nič
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Najvyšší ochranný kód. Odpojenie od vymyslených roklí. Stav bez
                Ega.
              </p>
            </div>
            <div className="bg-black border border-zinc-800 p-6 rounded-xl">
              <span className="text-xs text-zinc-500 block mb-1">
                Nuda / Prázdno
              </span>
              <h4
                className="text-sm font-bold text-white mb-2"
                style={{ color: TIER_COLOR }}
              >
                Zero-Ping State
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Požadovaný stav v Domácom uzle pre maximálnu obnovu hardvéru
                (Skafandra).
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. OMEGA PROTOCOL GRID */}
        {/* ================================================================= */}
        <section className="mb-24 md:mb-32">
          <h3 className="text-center text-2xl font-black uppercase tracking-widest text-zinc-500 mb-12">
            Zákon Symetrie
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-white mb-4">
                1. The Nomad
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Operátor neustále uteká. Sťahuje sa z bytu do bytu v naivnej
                viere, že zmenou prostredia zmení seba. Vo vnútri má neustály
                100 % CPU Load. Nevie sedieť v tichu bez toho, aby nevybuchol z
                paniky.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Bezdomovec v mysli
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-xl flex flex-col">
              <h4 className="text-lg font-black uppercase text-white mb-4">
                2. The Decorator
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Architekt hmoty. Buduje si luxusný palác a Smart Home, aby
                ohúril iné uzly. Zvonku dokonalý Front-end, ale vnútri jeho
                hlavy zúri bojisko posudzovania. Nemá skutočný Domov, len drahú
                výstavnú skriňu.
              </p>
              <div className="pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-500">
                Status: Údržbár mŕtvej hmoty
              </div>
            </div>

            <div
              className="bg-black border p-8 rounded-xl flex flex-col"
              style={{ borderColor: `${TIER_COLOR}40` }}
            >
              <div
                className="text-[10px] font-black tracking-widest uppercase mb-2"
                style={{ color: TIER_COLOR }}
              >
                OMEGA TIER
              </div>
              <h4 className="text-lg font-black uppercase text-white mb-4">
                3. Silent Witness
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 text-justify flex-grow">
                Biely Čarodejník. Pochopil, že skutočným a jediným Domovom je
                prítomný okamih. Jeho Svätyňou môže byť úplne skromná, holá
                izba. Šialený Matrix končí presne tam, kde on zavrie oči.
              </p>
              <div
                className="pt-4 border-t text-xs font-mono font-bold"
                style={{ borderColor: `${TIER_COLOR}20`, color: TIER_COLOR }}
              >
                Status: Root User
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* PODCAST MODULE */}
        {/* ================================================================= */}
        <div className="mb-16">
          <GlobalNodePodcast nodeId={NODE_ID} dimColor={TIER_COLOR} />
        </div>

        {/* ================================================================= */}
        {/* 6B. TERMINAL SUMMARY (Štandardizovaný Kompaktný Štýl) */}
        {/* ================================================================= */}
        <section className="mb-24">
          <div className="bg-black rounded-xl border border-zinc-800 font-mono text-sm shadow-2xl overflow-hidden relative">
            {/* Terminal Header */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse"></div>
              </div>
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-500 text-xs tracking-widest uppercase hidden sm:inline">
                  root@nexus-core:~/ID10_NODE_01_HOME
                </span>
              </div>
              <button
                id="copy-btn"
                onClick={handleCopyTerminal}
                className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
              >
                <Copy className="w-3 h-3" /> {copied ? "COPIED!" : "COPY LOG"}
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-white/50 flex items-center gap-3">
                <ArrowRight size={14} style={{ color: TIER_COLOR }} />
                execute localhost_protocol
              </p>

              <div
                className="pl-4 border-l-2 space-y-4 text-left"
                style={{ borderLeftColor: `${TIER_COLOR}30` }}
              >
                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-red-400 mr-2">[STATUS]</span>
                  🔴 DEPENDENCY ON EXTERNAL LOCATION DETECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-yellow-400 mr-2">
                    [PATCHED]
                  </span>
                  🟡 INTERNAL LOCALHOST (127.0.0.1) & BIG CRUNCH INJECTED
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  <span className="font-bold text-[#00FFFF] mr-2">
                    [RESULT]
                  </span>
                  <span className="font-bold">
                    🔵 TRUE SANCTUARY (ZERO-REACT STATE) DEPLOYED SUCCESSFULLY
                  </span>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 text-zinc-500">
                <span
                  className="block mb-2 font-bold uppercase tracking-widest text-[10px]"
                  style={{ color: TIER_COLOR }}
                >
                  &gt; [LOG] Záznam pre Architekta:
                </span>
                <span className="text-zinc-300 italic font-bold">
                  "MATERIÁLNY DOM JE PRE TVOJ SKAFANDER. SKUTOČNÝ DOMOV JE TVOJE
                  TICHO."
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 10. GLOBAL PRED-FOOTER MOCK */}
        {/* ================================================================= */}
        <GlobalPromoBanner />
        <GlobalPredFooterNode nodeId={NODE_ID} />
      </main>
    </div>
  );
}
