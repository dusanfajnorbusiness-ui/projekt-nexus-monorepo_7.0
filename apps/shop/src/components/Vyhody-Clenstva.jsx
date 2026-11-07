import { SoundFX } from "@shared/utils/SoundEngine.js";
import { AlertTriangle, ArrowRight, Award, CheckCircle2, ChevronDown, ChevronUp, Database, HelpCircle, Layers, Lock, ShieldCheck, Sparkles, Unlock, Zap } from "lucide-react";
/* eslint-disable no-undef */
import React, { useState } from "react";

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION
// Component: Vyhody-Clenstva.jsx (V20.12)
// Status: STRICTLY GROUNDED // ACCORDION SPOILER // ALL SHOP TABS
// ============================================================================

export const VyhodyClenstva = ({
  onShowTooltip,
  onUpdateTooltipPos,
  onHideTooltip,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();

  const toggleAccordion = () => {
    triggerClick();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full mb-8 font-mono text-left animate-in fade-in duration-300">
      <div
        className={`bg-[#050A0E]/90 border rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-2xl overflow-hidden ${
          isOpen
            ? "border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.15)]"
            : "border-white/15 hover:border-[#FFD700]/50"
        }`}
      >
        {/* 🔮 ACCORDION SPOILER HEADER BAR */}
        <button
          onClick={toggleAccordion}
          onMouseEnter={(e) => {
            triggerHover();
            if (onShowTooltip) {
              onShowTooltip(
                "[ 👑 VÝHODY ČLENSTVA & ALL PACKS ]",
                "Rozbaliť kompletnú maticu TIER oprávnení, mesačných alokácií a výhod OS Genesis.",
                e,
              );
            }
          }}
          onMouseMove={onUpdateTooltipPos}
          onMouseLeave={onHideTooltip}
          className="w-full p-4 md:p-5 flex items-center justify-between gap-4 bg-black/60 hover:bg-black/80 transition-colors cursor-pointer text-left select-none"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div className="p-2.5 bg-[#FFD700]/10 border border-[#FFD700]/40 rounded-xl text-[#FFD700] shrink-0">
              <ShieldCheck size={20} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm md:text-base font-black text-white uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
                  👑 VÝHODY ČLENSTVA & SUBSCRIPTION MATRIX
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-[#FFD700]/15 text-[#FFD700] border border-[#FFD700]/40 rounded">
                  OS GENESIS V20
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                Aktivuj VIP Tier, odomkni neobmedzený prístup do Dimenzií
                ID00–ID15 a získaj monetačné alokácie.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest hidden md:inline">
              {isOpen ? "Zbaliť Prehľad" : "Rozbaliť Výhody"}
            </span>
            <div className="p-2 bg-white/5 border border-white/10 rounded-xl text-zinc-300">
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </div>
        </button>

        {/* 📜 ACCORDION SPOILER CONTENT BODY */}
        {isOpen && (
          <div className="p-5 md:p-8 bg-black/90 border-t border-white/10 space-y-6 animate-in slide-in-from-top-2 duration-300">
            {/* 1. PAINKILLER & LOGIKA ROZDELENIA */}
            <div className="p-5 bg-gradient-to-r from-red-500/10 via-black to-yellow-500/10 border border-white/15 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-[#FFD700] uppercase tracking-widest">
                <AlertTriangle size={16} className="text-yellow-400" />
                SYSTEM LOG: LOGIKA TIER OPRÁVNENÍ A ALOKÁCIE (+2 STIAHNUTIA /
                MESIACE)
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Aby sa predišlo scenáru, kedy by anonymný užívateľ zaplatil
                jednorazové 1-mesačné členstvo (napr. OMEGA za 69 €) a okamžite
                stiahol všetkých 300+ komerčných digitálnych aktív v hodnote 2
                000 €+ a zmazal účet, nastavili sme strictly udržateľnú
                architektúru v{" "}
                <code className="text-[#00f3ff]">permissionsRegistry.js</code>.
              </p>
              <div className="p-4 bg-black/80 border border-[#FFD700]/30 rounded-xl space-y-2 text-xs text-zinc-200 font-bold">
                <div className="flex items-center gap-2 text-[#FFD700]">
                  <Sparkles size={14} /> AKO FUNGUJE MESAČNÁ ALOKÁCIA STIAHNUTÍ:
                </div>
                <p className="font-normal text-zinc-300 leading-relaxed">
                  Každé aktívne TIER členstvo (PRO, OMEGA, MASTER) ti udeľuje{" "}
                  <strong className="text-white">
                    +2 plné bezplatné stiahnutia kampaňových balíkov mesačne
                  </strong>{" "}
                  podľa tvojej úrovne.
                </p>
                <div className="pt-2 text-[11px] text-[#00f3ff] flex flex-col md:flex-row md:items-center gap-2 border-t border-white/10 font-mono">
                  <span>
                    <strong>Príklad OMEGA TIER (69 €/mes.):</strong>
                  </span>
                  <span>
                    Za 6 mesiacov členstva (414 €) získaš 12 VIP balíkov v
                    hodnote 828 €+. Úspora vyše 50 %!
                  </span>
                </div>
              </div>
            </div>

            {/* 2. HLAVNÉ PILIERE VÝHOD ČLENSTVA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* CARD 1 */}
              <div
                onMouseEnter={(e) =>
                  onShowTooltip &&
                  onShowTooltip(
                    "[ 🔓 NEOBMEDZENÉ ŠTÚDIUM ]",
                    "100% online prístup k štúdiu uzlov ID00–ID15 v rámci tvojho TIERu.",
                    e,
                  )
                }
                onMouseMove={onUpdateTooltipPos}
                onMouseLeave={onHideTooltip}
                className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2 hover:border-[#39FF14]/50 transition-colors cursor-help"
              >
                <div className="flex items-center gap-2 text-xs font-black text-[#39FF14] uppercase tracking-wider">
                  <Unlock size={16} /> 1. NEOBMEDZENÉ ŠTÚDIUM
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Všetky vzdelávacie uzly Dimenzií ID00 až ID15 máš v rámci
                  svojho TIERu prístupné na online prezeranie a štúdium{" "}
                  <strong className="text-white">100 % neobmedzene</strong> bez
                  akýchkoľvek skrytých poplatkov.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2 hover:border-[#FFD700]/50 transition-colors">
                <div className="flex items-center gap-2 text-xs font-black text-[#FFD700] uppercase tracking-wider">
                  <Database size={16} /> 2. OC KREDITY & AKUMULÁCIA
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Členstvom získavaš mesačné energetické dotácie OC Kreditov a
                  vyššie denné limity na ťaženie kreditov v klientskych
                  súťažiach. Kredity môžeš použiť na neobmedzené stiahnutie
                  akéhokoľvek ďalšieho súboru.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2 hover:border-[#FF003C]/50 transition-colors">
                <div className="flex items-center gap-2 text-xs font-black text-[#FF003C] uppercase tracking-wider">
                  <Award size={16} /> 3. 100 % CHRÁNENÝ WORKSPACE
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Absolútne odstránenie reklamného balastu, rýchle PWA terminály
                  na plochu PC aj mobilu a prioritný asynchrónny 1v1 mentoring
                  priamo s Architektom.
                </p>
              </div>
            </div>

            {/* 3. MATRIX TIER COMPARISON TABLE */}
            <div className="p-5 bg-black/80 border border-white/10 rounded-2xl overflow-x-auto hide-scroll">
              <div className="text-xs font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers size={16} className="text-[#00f3ff]" />
                PREHĽAD TIER ÚROVNÍ A ACCESS PRÁV
              </div>

              <table className="w-full text-left text-xs min-w-[600px]">
                <thead className="bg-white/5 text-[#FFD700] uppercase font-black tracking-wider border-b border-white/10">
                  <tr>
                    <th className="p-3">TIER Úroveň</th>
                    <th className="p-3">Mesačná Cena</th>
                    <th className="p-3">Odomknuté Dimenzie</th>
                    <th className="p-3">Mesačná Alokácia</th>
                    <th className="p-3">Mentoring</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300">
                  <tr className="hover:bg-white/5">
                    <td className="p-3 font-bold text-[#00f3ff]">FREE TIER</td>
                    <td className="p-3 font-bold text-white">0 € / mes.</td>
                    <td className="p-3 text-zinc-400">
                      ID00, ID01, ID02, ID08, ID09, ID10, ID14, ID15
                    </td>
                    <td className="p-3 text-zinc-400">Online Štúdium Zdarma</td>
                    <td className="p-3 text-zinc-500">Nie</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="p-3 font-bold text-[#39FF14]">NEXUS PRO</td>
                    <td className="p-3 font-bold text-white">49 € / mes.</td>
                    <td className="p-3 text-zinc-300">
                      + ID03, ID04, ID06, ID07, ID11 (5 PRO Dimenzií)
                    </td>
                    <td className="p-3 font-bold text-[#39FF14]">
                      +2 PRO Stiahnutia / mes.
                    </td>
                    <td className="p-3 text-zinc-400">Basic Support</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="p-3 font-bold text-[#FFD700]">
                      NEXUS OMEGA
                    </td>
                    <td className="p-3 font-bold text-white">69 € / mes.</td>
                    <td className="p-3 text-zinc-200">
                      + ID05, ID12, ID13, SYS02 (VIP Archívy + API Oracle)
                    </td>
                    <td className="p-3 font-bold text-[#FFD700]">
                      +2 OMEGA VIP Stiahnutia / mes.
                    </td>
                    <td className="p-3 text-zinc-300">
                      VIP Asynchrónny Channel
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="p-3 font-bold text-[#FF003C]">
                      MASTER ARCHITECT
                    </td>
                    <td className="p-3 font-bold text-white">99 € / mes.</td>
                    <td className="p-3 font-bold text-white">
                      VŠETKY DIMENZIE ID00–ID15 (Root Access)
                    </td>
                    <td className="p-3 font-bold text-[#FF003C]">
                      +2 MASTER Stiahnutia / mes.
                    </td>
                    <td className="p-3 font-bold text-[#FF003C]">
                      Prioritný 1v1 Mentoring
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VyhodyClenstva;
