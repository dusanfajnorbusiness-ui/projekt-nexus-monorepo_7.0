import React, { useState } from "react";
import {
  Copy,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  RefreshCw,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE)
// ============================================================================
import { SoundFX } from "@shared/utils/SoundEngine";
// import MetaTags from "../MetaTags";

// ============================================================================
// ⚠️ MOCK PRE CANVAS NÁHĽAD (ZMAZAŤ V LOKÁLNOM PROJEKTE) ⚠️
// ============================================================================
// ============================================================================

// 🛑 OC KREDITY MATICA (Zmenáreň Bypass čisto na nákup kapacity)
const OC_PACKAGES = [
  {
    id: "oc_50",
    oc: 50,
    fiat: "0.50",
    color: "#00FFFF",
    desc: "Mikro-injekcia. Testovací Ping.",
  },
  {
    id: "oc_100",
    oc: 100,
    fiat: "1.00",
    color: "#00FFFF",
    desc: "Základná dotácia. Drobné mikrotransakcie.",
  },
  {
    id: "oc_500",
    oc: 500,
    fiat: "5.00",
    color: "#39FF14",
    desc: "Pocket kapacita. Rýchle odomknutie uzla.",
  },
  {
    id: "oc_1000",
    oc: 1000,
    fiat: "10.00",
    color: "#39FF14",
    desc: "Rozšírená kapacita. Stredná dekompresia.",
  },
  {
    id: "oc_2500",
    oc: 2500,
    fiat: "25.00",
    color: "#8A2BE2",
    desc: "Starter Pack. Stabilná rezerva pre Skafander.",
  },
  {
    id: "oc_5000",
    oc: 5000,
    fiat: "50.00",
    color: "#A855F7",
    desc: "Marathon kapacita. Hĺbkový ponor do archívov.",
  },
  {
    id: "oc_7500",
    oc: 7500,
    fiat: "75.00",
    color: "#FFAA00",
    desc: "High-Ticket dotácia. Pokročilá správa Siete.",
  },
  {
    id: "oc_15000",
    oc: 15000,
    fiat: "150.00",
    color: "#FFD700",
    desc: "Master kapacita. Celoživotné aktíva a licencie.",
  },
];

export const Zmenaren = () => {
  const [selectedId, setSelectedId] = useState(OC_PACKAGES.id);
  const [isCopied, setIsCopied] = useState(false);

  // Získanie aktívneho OC balíka
  const activePackage =
    OC_PACKAGES.find((p) => p.id === selectedId) || OC_PACKAGES;

  // Generovanie finálnej správy pre Ko-Fi
  const generatedMessage = `[ SYSTEM LOG: UPLINK ZMENAREN ]\nPožiadavka: Nákup ${activePackage.oc} OC\nSuma: ${activePackage.fiat} EUR\nEmail NEXUS: [ZADAJ SVOJ NEXUS E-MAIL]`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setIsCopied(true);
      if (SoundFX.success) SoundFX.success();
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error("Kopírovanie zlyhalo:", err);
      if (SoundFX.error) SoundFX.error();
    }
  };

  const handleUplink = () => {
    if (SoundFX.click) SoundFX.click();
    // ⚡ TVOJ CENTRÁLNY KO-FI PORT
    window.open("https://ko-fi.com/cybertech_architect", "_blank");
  };

  return (
    <div className="w-full max-w-4xl mx-auto font-mono text-left relative group animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* <MetaTags
        title="NEXUS ZMENÁREŇ | NEXUS OS"
        description="Terminál pre konverziu FIAT meny na Oracle Kredity (OC)."
      /> */}

      {/* GLOW EFEKT V POZADÍ (Dynamický podľa balíka) */}
      <div
        className="absolute -inset-1 bg-gradient-to-r blur-2xl opacity-20 transition-all duration-1000 group-hover:opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, ${activePackage.color}, transparent, ${activePackage.color})`,
        }}
      ></div>

      {/* HLAVNÝ KONTAJNER */}
      <div className="relative bg-[#050a0e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500 p-6 md:p-8">
        {/* HLAVIČKA */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
          <RefreshCw
            size={24}
            style={{ color: activePackage.color }}
            className="animate-spin-slow"
          />
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">
            Zmenáreň <span className="text-zinc-500">Bypass</span>
          </h2>
        </div>

        <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
          Tento port slúži výhradne na priamu konverziu FIAT meny na interné
          Oracle Kredity (OC). Vyberte si požadovanú kapacitu, prekopírujte kód
          a vložte ho do voľnej platby (Donate) na našom Ko-Fi termináli.
        </p>

        {/* GRID MOŽNOSTÍ OC KREDITOV */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {OC_PACKAGES.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => {
                if (SoundFX.click) SoundFX.click();
                setSelectedId(pkg.id);
              }}
              onMouseEnter={() => SoundFX.hover && SoundFX.hover()}
              className={`relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                selectedId === pkg.id
                  ? "bg-white/10 border-white/30 scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white"
                  : "bg-black/50 border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300 hover:bg-white/5"
              }`}
              style={
                selectedId === pkg.id
                  ? { borderColor: pkg.color, color: pkg.color }
                  : {}
              }
            >
              <span className="text-lg md:text-xl font-black">{pkg.oc} OC</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70 mt-1">
                {pkg.fiat} €
              </span>
            </button>
          ))}
        </div>

        {/* AKTUÁLNY VÝBER A AKCIA */}
        <div className="bg-black/60 border border-white/10 p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">
              Cieľová kapacita a Kurz
            </p>
            <p
              className="text-2xl font-black text-white font-mono"
              style={{ color: activePackage.color }}
            >
              {activePackage.oc} OC{" "}
              <span className="text-zinc-600 mx-2 text-lg">=</span>{" "}
              {activePackage.fiat} €
            </p>
            <p className="text-xs text-zinc-400 mt-2">{activePackage.desc}</p>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleCopy}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg border text-xs font-black uppercase tracking-widest transition-all duration-300 bg-black hover:bg-white hover:text-black"
              style={{
                borderColor: activePackage.color,
                color: isCopied ? "#000" : activePackage.color,
                backgroundColor: isCopied ? activePackage.color : "transparent",
              }}
            >
              {isCopied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
              {isCopied ? "Kód skopírovaný" : "Kopírovať Kód"}
            </button>
          </div>
        </div>

        {/* FINÁLNY UPLINK TLAČIDLO */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleUplink}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] text-black"
            style={{
              backgroundColor: activePackage.color,
              boxShadow: `0 0 30px ${activePackage.color}40`,
            }}
          >
            <ExternalLink size={20} /> Prejsť do Ko-Fi Terminálu
          </button>

          <div className="w-full bg-red-500/10 border border-red-500/20 px-4 py-4 rounded-lg flex items-start gap-3 mt-2">
            <AlertTriangle size={18} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-red-400 text-[10px] md:text-xs font-mono font-bold leading-relaxed uppercase tracking-wide">
              Zákon Exekúcie: Na Ko-Fi použite funkciu "Donate" (Support) s
              voľnou sumou. Zadajte presne{" "}
              <span className="text-white">{activePackage.fiat} €</span> a
              vložte prekopírovaný kód do správy spolu so svojím e-mailom, ktorý
              používate tu v Nexuse!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
