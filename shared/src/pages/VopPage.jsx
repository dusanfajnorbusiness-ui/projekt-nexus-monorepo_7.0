import React, { useState, useEffect } from "react";
import { Scale, ArrowLeft, ShieldCheck, Download } from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE)
// ============================================================================
import { parseNexusFormat } from "../utils/nexusParser";
import { SoundFX } from "@shared/utils/SoundEngine";
import vopUrl from "../data/vop_nexus.md"; // Tu v CRA dostaneme URL cestu
// import MetaTags from "../components/MetaTags";

// ============================================================================
// ⚠️ MOCK PRE CANVAS NÁHĽAD (ZMAZAŤ V LOKÁLNOM PROJEKTE) ⚠️
// ============================================================================
// const parseNexusFormat = (t) => <div className="whitespace-pre-wrap">{t}</div>;
// const SoundFX = { click: () => {} };
// const vopUrl = "/static/media/vop_nexus.md"; // Simulácia cesty
// ============================================================================

/**
 * ⚖️ VOP PAGE - PROTOKOL PRÁVNEJ INTEGRITY
 * Fix: Create React App (CRA) vyžaduje fetch pre načítanie obsahu .md súborov.
 */
export default function VopPage({ onBack }) {
  const [content, setContent] = useState(
    "Inicializujem prenos dát z Matrixu...",
  );

  // 🚀 FORCED SCROLL-TO-TOP (Reset osi Y pri načítaní stránky)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        // 🛰️ PROTOKOL EXODUS: Sťahujeme text zo súboru pomocou jeho URL adresy
        const response = await fetch(vopUrl);
        const text = await response.text();

        // Bezpečnostná poistka: Ak sa vráti HTML (napr. 404 stránka), vyhodíme chybu
        if (text.trim().startsWith("<!DOCTYPE")) {
          throw new Error(
            "Súbor vop_nexus.md nebol nájdený na definovanej ceste.",
          );
        }

        setContent(text);
      } catch (err) {
        console.error("🔴 [VOP_LOAD_ERROR]:", err.message);
        setContent(
          "# ⚠️ KRITICKÁ CHYBA\nNepodarilo sa nadviazať spojenie so sémantickým uzlom VOP.",
        );
      }
    };

    loadMarkdown();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#03080a] text-white font-mono p-4 md:p-8 animate-in fade-in duration-700">
      {/* <MetaTags
        title="Všeobecné obchodné podmienky (VOP) | NEXUS OS"
        description="Všeobecné obchodné podmienky Projektu Nexus. Právny kódex a licenčné pravidlá operovania v našom digitálnom ekosystéme."
        image="https://projekt-nexus.sk/img-nexus/nexus-agency/Sidlo-Architekta.jpg"
        color="#8A2BE2"
        url="https://projekt-nexus.sk/vop"
        ogTitle="Všeobecné obchodné podmienky (VOP) | NEXUS OS"
        ogDescription="Ústava a licenčné podmienky pre operátorov Siete. Právny kódex a pravidlá využívania digitálnych aktív Projektu Nexus."
        twitterTitle="Všeobecné obchodné podmienky (VOP) | NEXUS OS"
        twitterDescription="Všeobecné obchodné podmienky Projektu Nexus. Právny kódex pre operátorov v Sieti."
      /> */}
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-8">
          <div>
            <button
              onClick={() => {
                if (typeof SoundFX !== "undefined" && SoundFX.click)
                  SoundFX.click();
                if (typeof onBack === "function") {
                  onBack();
                } else {
                  window.location.href = "/";
                }
              }}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-[#00FFFF] transition-colors mb-4 group cursor-pointer"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />{" "}
              Späť do Matrixu
            </button>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic flex items-center gap-4">
              Nexus <span className="text-[#00FFFF] not-italic">Codex</span>
            </h1>
            <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] mt-2">
              Legal_Integrity_Protocol_V1.1
            </p>
          </div>

          <div className="p-4 bg-black/40 border border-white/10 rounded-2xl flex items-center gap-4 shadow-2xl">
            <Scale size={24} className="text-[#00FFFF]" />
            <div className="text-left">
              <p className="text-[8px] text-white/30 uppercase tracking-widest leading-none mb-1">
                Status
              </p>
              <p className="text-[10px] font-black uppercase text-[#39FF14]">
                Právne Záväzné
              </p>
            </div>
          </div>
        </header>

        <main className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-inner selection:bg-[#00FFFF] selection:text-black">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00FFFF] to-transparent opacity-20" />

          <article className="prose prose-invert max-w-none text-left leading-relaxed text-sm text-white/70">
            {/* ⚡ Vykreslenie preloženého Markdownu */}
            <div
              className="nexus-content"
              dangerouslySetInnerHTML={{ __html: parseNexusFormat(content) }}
            />
          </article>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 bg-[#39FF14]/5 border border-[#39FF14]/20 px-6 py-3 rounded-xl">
              <ShieldCheck size={18} className="text-[#39FF14]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#39FF14]">
                Overená Integrita Architektom
              </span>
            </div>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
            >
              <Download size={14} /> Exportovať Protokol (PDF)
            </button>
          </div>
        </main>

        <footer className="mt-12 text-center pb-20">
          <p className="text-[8px] text-white/10 uppercase tracking-[0.8em]">
            End_of_Transmission
          </p>
        </footer>
      </div>
    </div>
  );
}
