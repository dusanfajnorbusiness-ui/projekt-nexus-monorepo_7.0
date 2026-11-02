/* eslint-disable no-undef */
import React, { useState, useEffect, useMemo } from "react";
import {
  Activity,
  TrendingUp,
  DollarSign,
  Cpu,
  Server,
  Zap,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  Sliders,
  ArrowUpRight,
  ArrowDownRight,
  Layers,
  Crown,
  Wallet,
  FileText,
  Video,
  Volume2,
  Sparkles,
  Terminal,
  Filter,
  HelpCircle,
  Copy,
  ExternalLink,
  Info,
  Check,
  Briefcase,
  Database,
} from "lucide-react";

import { SHOP_CAMPAIGN_DATA } from "../data/ShopPage";
import { supabase } from "@shared/services/NexusDB_Supabase";
import { SoundFX } from "@shared/utils/SoundEngine";

// ============================================================================
// 👑 NEXUS OS: AUTONÓMNY KIYOSAKI CASHFLOW MAINFRAME V8.0
// File: src/components/GlobalCashflow.jsx
// Status: 100% GROUNDED // SSOT AGGREGATION // ZERO-MAINTENANCE // PROJECT-ONLY
// ============================================================================

export const GlobalCashflow = ({
  userTier = "FREE",
  userEmail = "",
  handleShowTooltip,
  handleUpdateTooltipPos,
  handleHideTooltip,
  onShowTooltip,
  onUpdateTooltipPos,
  onHideTooltip,
}) => {
  // Dual Fallback for Tooltip Handlers
  const showFn = handleShowTooltip || onShowTooltip;
  const posFn = handleUpdateTooltipPos || onUpdateTooltipPos;
  const hideFn = handleHideTooltip || onHideTooltip;
  // --- SOUND TRIGGERS ---
  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();

  // --- DYNAMIC EXPENSE TOGGLES & SLIDERS (PROJECT CLOUD COST CONFIG) ---
  const [notebookLmTier, setNotebookLmTier] = useState("STANDARD"); // "STANDARD" (22€) | "ADVANCED" (99€)
  const [ytPromoBudget, setYtPromoBudget] = useState(20); // 20€ - 40€
  const [capcutPaid, setCapcutPaid] = useState(false); // 0€ vs 10€
  const [prismProPaid, setPrismProPaid] = useState(false); // 0€ vs 15€

  // Real-time Supabase Sales / History state
  const [realSalesData, setRealSalesData] = useState({
    membershipsTotal: 0,
    packsTotal: 0,
    servicesTotal: 0,
    matrixFxTotal: 0,
    documentsTotal: 0,
    totalEurRevenue: 0,
    activeSubscribersCount: 0,
    isLoading: true,
  });

  // Fetch / Subscribe to Real-Time Supabase Transactions
  useEffect(() => {
    let isMounted = true;

    const fetchSalesData = async () => {
      try {
        if (!supabase) {
          if (isMounted)
            setRealSalesData((prev) => ({ ...prev, isLoading: false }));
          return;
        }

        const { data, error } = await supabase
          .from("global_shop_history")
          .select("*");

        if (error || !data) {
          if (isMounted)
            setRealSalesData((prev) => ({ ...prev, isLoading: false }));
          return;
        }

        let memberships = 0;
        let packs = 0;
        let services = 0;
        let matrixFx = 0;
        let docs = 0;
        let totalEur = 0;

        data.forEach((row) => {
          const cat = String(row.category || "").toUpperCase();
          const amountEur = Number(
            row.price_eur || row.eur_amount || row.priceEur || 0,
          );

          if (cat === "MEMBERSHIP") memberships += amountEur;
          else if (cat === "PACKS") packs += amountEur;
          else if (cat === "SERVICES") services += amountEur;
          else if (cat === "MATRIX_FX") matrixFx += amountEur;
          else docs += amountEur;

          totalEur += amountEur;
        });

        if (isMounted) {
          setRealSalesData({
            membershipsTotal: memberships,
            packsTotal: packs,
            servicesTotal: services,
            matrixFxTotal: matrixFx,
            documentsTotal: docs,
            totalEurRevenue: totalEur,
            activeSubscribersCount: data.filter(
              (d) => String(d.category).toUpperCase() === "MEMBERSHIP",
            ).length,
            isLoading: false,
          });
        }
      } catch (err) {
        if (isMounted)
          setRealSalesData((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchSalesData();

    let subscription = null;
    if (supabase) {
      subscription = supabase
        .channel("public:global_shop_history_cashflow_v8")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "global_shop_history" },
          () => {
            fetchSalesData();
          },
        )
        .subscribe();
    }

    return () => {
      isMounted = false;
      if (subscription && supabase) supabase.removeChannel(subscription);
    };
  }, []);

  // --- DYNAMIC CLOUD EXPENSES CALCULATIONS (KVADRANT 2) ---
  const expensesBreakdown = useMemo(() => {
    const supabasePro = 25.0;
    const websupportDomain = 1.25; // 15€/yr
    const notebookLm = notebookLmTier === "ADVANCED" ? 99.0 : 22.0;
    const msOffice365 = 13.0;
    const codmZombiesSupport = 12.0;
    const nexusReserve = 20.0;
    const ytPromo = Number(ytPromoBudget) || 20.0;
    const capcut = capcutPaid ? 10.0 : 0.0;
    const prismLive = prismProPaid ? 15.0 : 0.0;

    const totalCloudExpenses =
      supabasePro +
      websupportDomain +
      notebookLm +
      msOffice365 +
      codmZombiesSupport +
      nexusReserve +
      ytPromo +
      capcut +
      prismLive;

    return {
      supabasePro,
      websupportDomain,
      notebookLm,
      msOffice365,
      codmZombiesSupport,
      nexusReserve,
      ytPromo,
      capcut,
      prismLive,
      totalCloudExpenses,
    };
  }, [notebookLmTier, ytPromoBudget, capcutPaid, prismProPaid]);

  // --- SSOT ASSET CATALOG ANALYSIS FROM SHOP_CAMPAIGN_DATA (KVADRANT 3) ---
  const assetCatalogStats = useMemo(() => {
    const rawData = SHOP_CAMPAIGN_DATA ? Object.values(SHOP_CAMPAIGN_DATA) : [];

    let membershipsCount = 0;
    let packsCount = 0;
    let matrixFxCount = 0;
    let servicesCount = 0;
    let pdfCount = 0;
    let audioCount = 0;
    let videoCount = 0;

    rawData.forEach((item) => {
      const cat = String(item.category || "").toUpperCase();
      if (cat === "MEMBERSHIP") membershipsCount++;
      else if (cat === "PACKS") packsCount++;
      else if (cat === "MATRIX_FX") matrixFxCount++;
      else if (cat === "SERVICES") servicesCount++;
      else if (cat.includes("PDF") || item.type === "PDF") pdfCount++;
      else if (cat.includes("AUDIO")) audioCount++;
      else if (cat.includes("VIDEO")) videoCount++;
      else pdfCount++;
    });

    return {
      totalNodes: rawData.length,
      membershipsCount,
      packsCount,
      matrixFxCount,
      servicesCount,
      pdfCount,
      audioCount,
      videoCount,
    };
  }, []);

  // --- NET CASHFLOW (VOĽNÁ RAM) ---
  const netProjectCashflow =
    realSalesData.totalEurRevenue - expensesBreakdown.totalCloudExpenses;

  // --- GOAL MRR BAROMETER TARGETS (KVADRANT 4) ---
  const mrrGoals = [
    {
      key: "FREE",
      title: "FREE GOAL",
      target: 150,
      desc: "Baseline Keep-Alive (Supabase, Doména & AI)",
    },
    {
      key: "PRO",
      title: "PRO GOAL",
      target: 750,
      desc: "Infrastructure & Community (15x PRO)",
    },
    {
      key: "OMEGA",
      title: "OMEGA GOAL",
      target: 1500,
      desc: "Automation & PWA Apps (21x OMEGA)",
    },
    {
      key: "MASTER",
      title: "MASTER GOAL",
      target: 3500,
      desc: "Sovereign Scale & Mentoring (35x MASTER)",
    },
    {
      key: "ARCHITECT",
      title: "ARCHITECT GOAL",
      target: 7500,
      desc: "B2B Enterprise Franchising",
    },
  ];

  const currentGoalIndex = useMemo(() => {
    const rev = realSalesData.totalEurRevenue;
    for (let i = mrrGoals.length - 1; i >= 0; i--) {
      if (rev >= mrrGoals[i].target) return i;
    }
    return 0;
  }, [realSalesData.totalEurRevenue]);

  const activeGoal = mrrGoals[currentGoalIndex];
  const nextGoal =
    mrrGoals[Math.min(currentGoalIndex + 1, mrrGoals.length - 1)];
  const progressToNext = Math.min(
    100,
    Math.max(0, (realSalesData.totalEurRevenue / nextGoal.target) * 100),
  );

  return (
    <div className="w-full space-y-8 font-mono text-left select-none animate-in fade-in duration-500">
      {/* 👑 HEADER MAINFRAME BANNER: KIYOSAKI CASHFLOW V8.0 */}
      <div className="bg-[#050A0E]/95 border-2 border-[#FFD700]/50 p-6 md:p-8 rounded-3xl backdrop-blur-2xl shadow-[0_0_30px_rgba(255,215,0,0.15)] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Activity className="text-[#FFD700] animate-pulse" size={26} />
              <h2 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">
                KIYOSAKI CASHFLOW{" "}
                <span className="text-[#FFD700]">
                  // PROJECT MAINFRAME V8.0
                </span>
              </h2>
              <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/30 uppercase tracking-widest">
                ZERO-MAINTENANCE SSOT
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-3xl leading-relaxed">
              Autonómny finančný monitor Projektu Nexus. Vyhodnocuje reálne EUR
              prítoky zo Supabase zbernice voči fixnej cloudovej infraštruktúre
              bez nutnosti manuálnej údržby.
            </p>
          </div>

          {/* ⚡ CISTÁ VOĽNÁ RAM (NET PROJECT CASHFLOW GAUGE) */}
          <div
            onMouseEnter={(e) =>
              showFn?.(
                "⚡ VOĽNÁ RAM (NET CASHFLOW)",
                `Čistá mesačná bilancia po odrátaní cloudových nákladov (${expensesBreakdown.totalCloudExpenses.toFixed(2)} €) od hrubých príjmov (${realSalesData.totalEurRevenue.toFixed(2)} €).`,
                e,
              )
            }
            onMouseMove={posFn}
            onMouseLeave={hideFn}
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl border-2 backdrop-blur-xl shrink-0 transition-all cursor-help ${
              netProjectCashflow >= 0
                ? "bg-[#39FF14]/10 border-[#39FF14] shadow-[0_0_25px_rgba(57,255,20,0.3)] text-[#39FF14]"
                : "bg-[#FF003C]/10 border-[#FF003C] shadow-[0_0_25px_rgba(255,0,60,0.3)] text-[#FF003C]"
            }`}
          >
            <Wallet size={28} className="animate-pulse" />
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                Čistá Voľná RAM (Net Cashflow)
              </div>
              <div className="text-xl md:text-2xl font-black tracking-wider">
                {netProjectCashflow >= 0 ? "+" : ""}
                {netProjectCashflow.toFixed(2)} € / mes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 4 KVADRANTY CASHFLOW MATRIX (GRID 2x2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 🟢 KVADRANT 1: PRÍJMY (REAL-TIME EUR REVENUE) */}
        <div
          onMouseEnter={(e) =>
            showFn?.(
              "🟢 KVADRANT 1: PRÍJMY",
              "Živý agregátor tržieb v EUR zo Supabase zbernice za Členstvá, OC Balíky, Matrix FX, IT Služby a KaaS manuály.",
              e,
            )
          }
          onMouseMove={posFn}
          onMouseLeave={hideFn}
          className="bg-[#050A0E] border border-[#39FF14]/40 p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-[#39FF14]/20 pb-3">
            <div className="flex items-center gap-2 text-[#39FF14] font-black text-xs uppercase tracking-widest">
              <TrendingUp size={16} /> KVADRANT 1 // PRÍJMY PROJEKTU (REAL-TIME)
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/30 font-mono">
              SUPABASE LIVE
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs p-2.5 bg-white/5 rounded-xl border border-white/5">
              <span className="text-zinc-300 flex items-center gap-2">
                <Crown size={14} className="text-[#FFD700]" /> Členstvá (PRO /
                OMEGA / MASTER)
              </span>
              <span className="font-bold text-white">
                {realSalesData.membershipsTotal.toFixed(2)} €
              </span>
            </div>

            <div className="flex justify-between items-center text-xs p-2.5 bg-white/5 rounded-xl border border-white/5">
              <span className="text-zinc-300 flex items-center gap-2">
                <Wallet size={14} className="text-[#00f3ff]" /> OC Kreditné
                Balíky (Packs)
              </span>
              <span className="font-bold text-white">
                {realSalesData.packsTotal.toFixed(2)} €
              </span>
            </div>

            <div className="flex justify-between items-center text-xs p-2.5 bg-white/5 rounded-xl border border-white/5">
              <span className="text-zinc-300 flex items-center gap-2">
                <Zap size={14} className="text-[#FF003C]" /> Matrix FX Anomálie
              </span>
              <span className="font-bold text-white">
                {realSalesData.matrixFxTotal.toFixed(2)} €
              </span>
            </div>

            <div className="flex justify-between items-center text-xs p-2.5 bg-white/5 rounded-xl border border-white/5">
              <span className="text-zinc-300 flex items-center gap-2">
                <Briefcase size={14} className="text-[#BF00FF]" /> B2B IT Služby
                & Franšízy
              </span>
              <span className="font-bold text-white">
                {realSalesData.servicesTotal.toFixed(2)} €
              </span>
            </div>

            <div className="flex justify-between items-center text-xs p-2.5 bg-white/5 rounded-xl border border-white/5">
              <span className="text-zinc-300 flex items-center gap-2">
                <FileText size={14} className="text-[#39FF14]" /> KaaS Dokumenty
                & Mediálne Uzly
              </span>
              <span className="font-bold text-white">
                {realSalesData.documentsTotal.toFixed(2)} €
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-sm font-black">
            <span className="text-zinc-400 uppercase tracking-widest text-[11px]">
              Hrubý Príjem Celkom:
            </span>
            <span className="text-[#39FF14] text-base">
              {realSalesData.totalEurRevenue.toFixed(2)} € / mes
            </span>
          </div>
        </div>

        {/* 🔴 KVADRANT 2: REŽIJNÉ CLOUD NÁKLADY (DYNAMIC EXPENSES) */}
        <div
          onMouseEnter={(e) =>
            showFn?.(
              "🔴 KVADRANT 2: REŽIJA & CLOUD",
              "Fixné a variabilné režijné náklady na prevádzku cloud infraštruktúry Projektu Nexus.",
              e,
            )
          }
          onMouseMove={posFn}
          onMouseLeave={hideFn}
          className="bg-[#050A0E] border border-[#FF003C]/40 p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-[#FF003C]/20 pb-3">
            <div className="flex items-center gap-2 text-[#FF003C] font-black text-xs uppercase tracking-widest">
              <Server size={16} /> KVADRANT 2 // REŽIJA A CLOUD INFRAŠTRUKTÚRA
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#FF003C]/10 text-[#FF003C] border border-[#FF003C]/30 font-mono">
              FIXED & VARIABLE
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-xl">
              <span className="text-zinc-300 flex items-center gap-2">
                <Database size={13} className="text-[#00f3ff]" /> Supabase PRO
                Database
              </span>
              <span className="font-bold text-white">25.00 €</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-white/5 rounded-xl">
              <span className="text-zinc-300 flex items-center gap-2">
                <Globe size={13} className="text-yellow-400" /> WebSupport
                Doména (projekt-nexus.sk)
              </span>
              <span className="font-bold text-white">
                1.25 €{" "}
                <span className="text-[9px] text-zinc-500">(15€/rok)</span>
              </span>
            </div>

            {/* TOGGLE: NotebookLM STANDARD (22€) vs ADVANCED (99€) */}
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-xl border border-white/10">
              <span className="text-zinc-300 flex items-center gap-2">
                <Sparkles size={13} className="text-[#BF00FF]" /> NotebookLM /
                Gemini Mainframe
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    triggerClick();
                    setNotebookLmTier(
                      notebookLmTier === "STANDARD" ? "ADVANCED" : "STANDARD",
                    );
                  }}
                  onMouseEnter={(e) => {
                    triggerHover();
                    showFn?.(
                      "🧠 NOTEBOOKLM PREPÍNAČ",
                      notebookLmTier === "ADVANCED"
                        ? "Aktivovaný Advanced TIER (99 €/mes) - 500 zdrojov & pokročilé AI funkcie."
                        : "Aktivovaný Standard TIER (22 €/mes) - 50 zdrojov na zošit.",
                      e,
                    );
                  }}
                  onMouseMove={posFn}
                  onMouseLeave={hideFn}
                  className={`px-2 py-1 rounded text-[9px] font-black uppercase border transition-all cursor-pointer ${
                    notebookLmTier === "ADVANCED"
                      ? "bg-[#BF00FF] text-white border-[#BF00FF] shadow-[0_0_10px_rgba(191,0,255,0.5)]"
                      : "bg-black/60 text-zinc-400 border-white/20 hover:text-white"
                  }`}
                >
                  {notebookLmTier === "ADVANCED"
                    ? "PRO / 500 SOURCES (99 €)"
                    : "STD / 50 SOURCES (22 €)"}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center p-2 bg-white/5 rounded-xl">
              <span className="text-zinc-300 flex items-center gap-2">
                <FileText size={13} className="text-blue-400" /> Microsoft 365
                Family
              </span>
              <span className="font-bold text-white">13.00 €</span>
            </div>

            <div className="flex justify-between items-center p-2 bg-white/5 rounded-xl">
              <span className="text-zinc-300 flex items-center gap-2">
                <Terminal size={13} className="text-green-400" /> CoDM Zombies
                Support + Režijný Fond
              </span>
              <span className="font-bold text-white">32.00 €</span>
            </div>

            {/* SLIDER / TOGGLE: YT PROMO (GOOGLE ADS) */}
            <div className="flex justify-between items-center p-2 bg-white/5 rounded-xl border border-white/10">
              <span className="text-zinc-300 flex items-center gap-2">
                <Video size={13} className="text-[#FF6600]" /> YT PROMO (Google
                Ads Akvizícia)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="20"
                  max="40"
                  step="5"
                  value={ytPromoBudget}
                  onChange={(e) => setYtPromoBudget(Number(e.target.value))}
                  onMouseEnter={(e) =>
                    showFn?.(
                      "📺 YT PROMO BUDGET",
                      `Mesačný rozpočet na Google Ads akvizíciu operátorov (${ytPromoBudget} €/mes).`,
                      e,
                    )
                  }
                  onMouseMove={posFn}
                  onMouseLeave={hideFn}
                  className="w-16 accent-[#FF6600] cursor-pointer"
                />
                <span className="font-bold text-[#FF6600]">
                  {ytPromoBudget}.00 €
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-sm font-black">
            <span className="text-zinc-400 uppercase tracking-widest text-[11px]">
              Celkové Cloud Náklady:
            </span>
            <span className="text-[#FF003C] text-base">
              {expensesBreakdown.totalCloudExpenses.toFixed(2)} € / mes
            </span>
          </div>
        </div>

        {/* 🟡 KVADRANT 3: DYNAMICKÝ ARZENÁL AKTÍV (SSOT CATALOG STATS) */}
        <div
          onMouseEnter={(e) =>
            showFn?.(
              "🟡 KVADRANT 3: ARZENÁL AKTÍV",
              "Automatický súčet digitálnych uzlov a KaaS obsahu načítaného zo Single Source of Truth (SHOP_CAMPAIGN_DATA).",
              e,
            )
          }
          onMouseMove={posFn}
          onMouseLeave={hideFn}
          className="bg-[#050A0E] border border-[#FFD700]/40 p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-[#FFD700]/20 pb-3">
            <div className="flex items-center gap-2 text-[#FFD700] font-black text-xs uppercase tracking-widest">
              <Layers size={16} /> KVADRANT 3 // ARZENÁL AKTÍV (SSOT OBSAH)
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 font-mono">
              {assetCatalogStats.totalNodes} NODES ONLINE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] text-zinc-500 uppercase font-bold">
                Členstvá
              </div>
              <div className="text-lg font-black text-[#FFD700] mt-0.5">
                {assetCatalogStats.membershipsCount} Tiers
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] text-zinc-500 uppercase font-bold">
                OC Balíky
              </div>
              <div className="text-lg font-black text-[#00f3ff] mt-0.5">
                {assetCatalogStats.packsCount} Packs
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] text-zinc-500 uppercase font-bold">
                Matrix FX
              </div>
              <div className="text-lg font-black text-[#FF003C] mt-0.5">
                {assetCatalogStats.matrixFxCount} Anomálií
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-[10px] text-zinc-500 uppercase font-bold">
                B2B IT Služby
              </div>
              <div className="text-lg font-black text-[#BF00FF] mt-0.5">
                {assetCatalogStats.servicesCount} Licencií
              </div>
            </div>
          </div>

          <div className="p-3 bg-black/60 rounded-2xl border border-white/10 flex justify-between items-center text-xs">
            <span className="text-zinc-400">
              PDF / PPTX / Mediálne Manuály:
            </span>
            <span className="font-black text-[#39FF14]">
              {assetCatalogStats.pdfCount} KaaS Súborov
            </span>
          </div>
        </div>

        {/* 👑 KVADRANT 4: MRR GOAL BAROMETER (GOALS TARGET VS REALITY) */}
        <div
          onMouseEnter={(e) =>
            showFn?.(
              "👑 KVADRANT 4: GOAL MRR BAROMETER",
              `Sledovanie mesačných tržieb voči strategickým míľnikom OS Genesis. Aktuálny cieľ: ${nextGoal.title} (${nextGoal.target} €).`,
              e,
            )
          }
          onMouseMove={posFn}
          onMouseLeave={hideFn}
          className="bg-[#050A0E] border border-[#00f3ff]/40 p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-[#00f3ff]/20 pb-3">
            <div className="flex items-center gap-2 text-[#00f3ff] font-black text-xs uppercase tracking-widest">
              <BarChart3 size={16} /> KVADRANT 4 // GOAL MRR BAROMETER
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/30 font-mono">
              TARGET: {nextGoal.target} € / MES
            </span>
          </div>

          {/* PROGRESS METER */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-zinc-300">
                Stupeň Pokroku:{" "}
                <strong className="text-[#FFD700]">{activeGoal.title}</strong>
              </span>
              <span className="text-[#00f3ff]">
                {realSalesData.totalEurRevenue.toFixed(2)} € / {nextGoal.target}
                .00 €
              </span>
            </div>

            <div className="w-full h-3 bg-black/80 rounded-full border border-white/10 overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-[#00f3ff] via-[#39FF14] to-[#FFD700] rounded-full transition-all duration-700 shadow-[0_0_15px_rgba(0,243,255,0.6)]"
                style={{ width: `${Math.max(5, progressToNext)}%` }}
              />
            </div>
          </div>

          {/* MILESTONE LIST */}
          <div className="space-y-2 text-xs pt-1">
            {mrrGoals.map((mrr, idx) => {
              const isPassed = realSalesData.totalEurRevenue >= mrr.target;
              const isCurrentNext = idx === currentGoalIndex + 1;

              return (
                <div
                  key={mrr.key}
                  className={`p-2 rounded-xl flex items-center justify-between border transition-all ${
                    isPassed
                      ? "bg-[#39FF14]/10 border-[#39FF14]/40 text-[#39FF14]"
                      : isCurrentNext
                        ? "bg-[#00f3ff]/10 border-[#00f3ff]/60 text-white font-bold animate-pulse"
                        : "bg-white/5 border-white/5 text-zinc-500"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isPassed ? (
                      <CheckCircle2 size={12} />
                    ) : (
                      <Sliders size={12} />
                    )}
                    <span>
                      {mrr.title} ({mrr.target} €)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono">{mrr.desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCashflow;
