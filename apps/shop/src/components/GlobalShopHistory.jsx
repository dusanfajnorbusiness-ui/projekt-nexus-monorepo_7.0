import React, { useState, useEffect } from "react";
import {
  History,
  Clock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Filter,
  Trash2,
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Tag,
  Crown,
  Unlock,
  LayoutGrid,
  Cpu,
  ShoppingBag,
  Video,
  Headphones,
  Image as ImageIcon,
  FileText,
  Zap,
  Ticket,
  Layers,
  ShieldCheck,
  Wallet,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE)
// ============================================================================
import { NexusDB } from "@shared/services/NexusDB_Core";
import { SoundFX } from "@shared/utils/SoundEngine";

export const GlobalShopHistory = ({
  userEmail,
  isCompact = false,
  hideBalance = false,
}) => {
  const [activeTab, setActiveTab] = useState("TRANSACTIONS");
  const [categoryFilter, setCategoryFilter] = useState("ALL"); // ALL | NODES | SHOP | VIDEOS | AUDIOS | IMAGES | DOCUMENTS | APPS | TOKENOMICS | VIP_TICKETS | OTHERS

  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();
  const triggerError = () => SoundFX && SoundFX.error && SoundFX.error();

  const [balance, setBalance] = useState(0);
  const [userTier, setUserTier] = useState("FREE");
  const [transactions, setTransactions] = useState([]);
  const [unlockedItems, setUnlockedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // 1. CHIRURGICKÝ RESET PEŇAŽENKY & HISTÓRIE
  const handleResetWalletData = () => {
    if (
      !window.confirm(
        "⚠️ POZOR: Naozaj chceš vyčistiť celú históriu transakcií peňaženky a zresetovať kredit?",
      )
    ) {
      return;
    }

    try {
      const keysToClean = [
        "nexus_active_identity",
        "nexus_user",
        "nexus_active_user",
      ];
      keysToClean.forEach((key) => {
        const item = localStorage.getItem(key);
        if (item) {
          try {
            const parsed = JSON.parse(item);
            parsed.transaction_history = [];
            parsed.transactionHistory = [];
            parsed.credits = 0;
            parsed.balance = 0;
            localStorage.setItem(key, JSON.stringify(parsed));
          } catch (e) {}
        }
      });
      localStorage.removeItem("nexus_transaction_history");
      localStorage.removeItem("nexus_credits");

      setBalance(0);
      setTransactions([]);

      window.dispatchEvent(new Event("nexus_user_updated"));
      window.dispatchEvent(new Event("storage"));

      triggerSuccess();
      alert("✅ História peňaženky bola úspešne vyčistená a stav zresetovaný!");
    } catch (err) {
      console.error("[WALLET_RESET_ERROR]:", err);
      triggerError();
    }
  };

  // 2. DATA SUBSCRIPTION & DEEP JSON DECOMPRESSOR
  useEffect(() => {
    if (!userEmail) return;
    setLoading(true);

    try {
      const unsubscribe = NexusDB.subscribeToProfile(userEmail, (data) => {
        if (data) {
          setBalance(data.credits || 0);
          setUserTier(data.tier || "FREE");

          // Rekurzívny decompressor pre Supabase JSONB
          const deepJsonParse = (val) => {
            if (!val) return [];
            if (Array.isArray(val)) {
              if (val.length === 1 && typeof val === "string") {
                return deepJsonParse(val);
              }
              return val
                .map((item) =>
                  typeof item === "string" ? deepJsonParse(item) : item,
                )
                .flat();
            }
            if (typeof val === "string") {
              const cleaned = val.trim();
              try {
                const parsed = JSON.parse(cleaned);
                if (typeof parsed === "string") return deepJsonParse(parsed);
                if (Array.isArray(parsed)) {
                  return parsed
                    .map((item) =>
                      typeof item === "string" ? deepJsonParse(item) : item,
                    )
                    .flat();
                }
                return [parsed];
              } catch (e) {
                try {
                  let unescaped = cleaned
                    .replace(/\\+"/g, '"')
                    .replace(/\\+/g, "");
                  const matches = unescaped.match(/\{[^}]+\}/g);
                  if (matches) {
                    const parsedObjects = matches
                      .map((match) => {
                        try {
                          return JSON.parse(match);
                        } catch (err) {
                          return null;
                        }
                      })
                      .filter(Boolean);
                    if (parsedObjects.length > 0) return parsedObjects;
                  }
                } catch (err2) {
                  console.error(
                    "🚨 [DEEP_PARSER]: Regex unescape zlyhal:",
                    err2,
                  );
                }
                return [val];
              }
            }
            return [val];
          };

          const rawHistory =
            data.transaction_history || data.transactionHistory || [];
          const rawUnlocked = data.unlocked_nodes || data.unlockedNodes || [];

          const safeHistory = deepJsonParse(rawHistory);
          const rawUnlockedList = deepJsonParse(rawUnlocked);

          // Nemilosrdný filter a kategorizácia
          const cleanHistory = safeHistory.filter((tx) => {
            if (!tx) return false;
            if (categoryFilter !== "ALL") {
              const txCat = String(
                tx.category || tx.itemType || "",
              ).toUpperCase();
              const txType = String(tx.type || "").toUpperCase();
              const txItem = String(tx.item || tx.title || "").toUpperCase();

              if (categoryFilter === "VIP_TICKETS") {
                const isVip =
                  txCat === "VIP_TICKETS" ||
                  txCat === "VIP" ||
                  txType.includes("VIP") ||
                  txItem.includes("VIP");
                if (!isVip) return false;
              } else if (categoryFilter === "TOKENOMICS") {
                const isTokenomics =
                  txCat === "TOKENOMICS" ||
                  txType.includes("MINING") ||
                  txType.includes("COMPETITION") ||
                  txType.includes("AIRDROP") ||
                  txItem.includes("PREFOOTER") ||
                  txItem.includes("REACTION") ||
                  txItem.includes("MATRIX_RANK");
                if (!isTokenomics) return false;
              } else if (categoryFilter === "APPS") {
                const txAssetId = String(
                  tx.asset_id || tx.id || tx.item || "",
                ).toUpperCase();
                const isApps =
                  txCat === "APPS" ||
                  txCat.includes("APP") ||
                  txType.includes("APP") ||
                  txItem.includes("APP") ||
                  txItem.includes("NEXUS WEB") ||
                  txItem.includes("NEXUS MOB") ||
                  txItem.includes("NEXUS DESK") ||
                  txAssetId.includes("CAMP_33") ||
                  txAssetId.includes("CAMP_34") ||
                  txAssetId.includes("CAMP_35") ||
                  txAssetId.includes("APP");
                if (!isApps) return false;
              } else if (txCat !== categoryFilter) {
                return false;
              }
            }
            const isVipTx =
              String(tx.category || "").toUpperCase() === "VIP_TICKETS" ||
              String(tx.type || "").includes("VIP");
            if (isVipTx) return true;

            const costStr = String(
              tx.price || tx.amount || tx.amount_oc || "0",
            ).trim();
            return (
              costStr !== "0" &&
              costStr !== "-0" &&
              costStr !== "0 OC" &&
              costStr !== "-0 OC"
            );
          });

          const pdfPurchases = safeHistory
            .filter(
              (tx) =>
                tx &&
                (tx.type === "PURCHASE" || tx.type === "ODOMKNUTIE") &&
                tx.asset_id,
            )
            .map((tx) =>
              tx.asset_id.includes("-PDF") ? tx.asset_id : `${tx.asset_id}-PDF`,
            );

          // Okrem kategórie ALL obmedzíme zobrazenie na posledných 50 záznamov
          const displayHistory =
            categoryFilter === "ALL" ? cleanHistory : cleanHistory.slice(0, 50);

          setTransactions(displayHistory);
          setUnlockedItems([...new Set([...rawUnlockedList, ...pdfPurchases])]);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (e) {
      console.error("Chyba pri synchronizácii:", e);
      setLoading(false);
    }
  }, [userEmail, categoryFilter]);

  let safeUnlockedItems = [];
  try {
    if (Array.isArray(unlockedItems)) {
      safeUnlockedItems = unlockedItems;
    } else if (typeof unlockedItems === "string") {
      const deepJsonParse = (val) => {
        if (!val) return [];
        if (Array.isArray(val)) return val;
        try {
          return deepJsonParse(JSON.parse(val));
        } catch (e) {
          return [];
        }
      };
      safeUnlockedItems = deepJsonParse(unlockedItems);
    }
  } catch (err) {
    safeUnlockedItems = [];
  }

  const hasMasterKey =
    safeUnlockedItems.includes("NEXUS_MASTER_KEY") ||
    userTier === "MASTER" ||
    userTier === "ARCHITECT";

  // Vypočítané metriky pre HUD štatistiky
  const totalIncomeCount = transactions.filter((tx) => {
    const raw =
      tx.amount_oc !== undefined ? tx.amount_oc : tx.amount || tx.price || 0;
    return (Number(raw) || 0) > 0;
  }).length;

  const totalExpenseCount = transactions.filter((tx) => {
    const raw =
      tx.amount_oc !== undefined ? tx.amount_oc : tx.amount || tx.price || 0;
    return (Number(raw) || 0) < 0;
  }).length;

  return (
    <div className="w-full bg-black/70 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-2xl relative overflow-hidden font-mono text-left shadow-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-cyan-500/5">
      {/* 🚀 HEADER SECTION: BALANC CARD & CYBER HUD */}
      {!hideBalance && (
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg">
                <Wallet size={18} className="text-[#FFD700]" />
              </div>
              <h3 className="text-xs md:text-sm font-black text-white uppercase tracking-wider italic">
                História Transakcií Peňaženky
              </h3>
              <button
                onClick={handleResetWalletData}
                title="Resetovať dáta peňaženky"
                className="px-2.5 py-1 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-black border border-red-500/30 hover:border-red-500 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 shadow-sm"
              >
                <Trash2 size={12} /> Reset Peňaženky
              </button>
            </div>

            <div
              className={`${
                isCompact ? "text-2xl" : "text-3xl md:text-4xl"
              } font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] flex items-baseline gap-2`}
            >
              {(Number(balance) || 0).toLocaleString("sk-SK")}{" "}
              <span className="text-base text-[#FFD700] font-black tracking-widest">
                OC
              </span>
            </div>
          </div>

          {/* ⚡ CYBER HUD METRIKY */}
          <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-5">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">
                Transakcie
              </span>
              <span className="text-xs font-black text-white">
                {transactions.length}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-emerald-400 font-bold">
                Príjmy
              </span>
              <span className="text-xs font-black text-emerald-400">
                +{totalIncomeCount}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-red-400 font-bold">
                Výdavky
              </span>
              <span className="text-xs font-black text-red-400">
                -{totalExpenseCount}
              </span>
            </div>
            <div className="flex flex-col pl-2 border-l border-white/10">
              <span className="text-[8px] uppercase tracking-widest text-[#00FFFF] font-bold">
                TIER
              </span>
              <span className="text-xs font-black text-[#00FFFF] uppercase tracking-wider">
                {userTier}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 🚀 FILTER BUTTONS & TRANSACTIONS LIST */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* SIDEBAR FILTERS */}
        <div
          className={`flex flex-nowrap gap-2 overflow-x-auto custom-scrollbar pb-2 ${
            isCompact
              ? "w-full"
              : "lg:flex-col lg:overflow-x-visible lg:pb-0 lg:w-1/3 shrink-0"
          }`}
        >
          {[
            { id: "ALL", label: "Všetko", icon: LayoutGrid, color: "#FFD700" },
            { id: "NODES", label: "Nodes", icon: Cpu, color: "#39FF14" },
            { id: "SHOP", label: "Shop", icon: ShoppingBag, color: "#FFD700" },
            { id: "VIDEOS", label: "Videos", icon: Video, color: "#FF003C" },
            {
              id: "AUDIOS",
              label: "Audios",
              icon: Headphones,
              color: "#8A2BE2",
            },
            {
              id: "IMAGES",
              label: "Images",
              icon: ImageIcon,
              color: "#00F3FF",
            },
            {
              id: "DOCUMENTS",
              label: "Docs",
              icon: FileText,
              color: "#39FF14",
            },
            { id: "APPS", label: "Apps", icon: Cpu, color: "#00E5FF" },
            {
              id: "TOKENOMICS",
              label: "⚡ Tokenomics",
              icon: Zap,
              color: "#FFD700",
            },
            {
              id: "VIP_TICKETS",
              label: "🎫 VIP Lístky",
              icon: Ticket,
              color: "#FF003C",
            },
            { id: "OTHERS", label: "Iné", icon: Layers, color: "#888888" },
          ].map((cat) => {
            const IconComponent = cat.icon;
            const isActive = categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                style={{
                  backgroundColor: isActive ? cat.color : "rgba(0,0,0,0.4)",
                  borderColor: isActive ? cat.color : "rgba(255,255,255,0.1)",
                  color: isActive ? "#000000" : "#a1a1aa",
                  boxShadow: isActive ? `0 0 12px ${cat.color}80` : "none",
                }}
                className="px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border shrink-0 hover:text-white cursor-pointer flex items-center gap-2 justify-between"
              >
                <div className="flex items-center gap-2">
                  <IconComponent className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                </div>
                {isActive && <Zap size={12} className="text-black shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* TRANSACTIONS LIST CONTAINER */}
        <div
          className={`w-full bg-black/40 overflow-y-auto custom-scrollbar rounded-2xl border border-white/10 ${
            isCompact ? "p-3 h-[280px]" : "lg:w-2/3 p-4 h-[420px]"
          }`}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full opacity-30">
              <Activity
                size={32}
                className="text-[#FFD700] animate-spin mb-4"
              />
              <span className="text-[10px] uppercase font-bold text-zinc-500">
                Načítavam transakcie...
              </span>
            </div>
          ) : (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              {transactions.length === 0 ? (
                <div className="p-8 text-center bg-white/5 border border-white/5 rounded-2xl">
                  <AlertCircle
                    size={24}
                    className="mx-auto text-zinc-600 mb-2"
                  />
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
                    Žiadne transakcie v kategórii [{categoryFilter}]
                  </p>
                </div>
              ) : (
                transactions.map((tx, idx) => {
                  const rawAmount =
                    tx.amount_oc !== undefined
                      ? tx.amount_oc
                      : tx.amount || tx.price || 0;
                  const numAmount = Number(rawAmount) || 0;
                  const isPositive = numAmount > 0;
                  const txCat = String(
                    tx.category || tx.itemType || "LOG",
                  ).toUpperCase();
                  const isTokenomics =
                    txCat.includes("TOKENOMICS") ||
                    String(tx.type || "")
                      .toUpperCase()
                      .includes("MINING");

                  return (
                    <div
                      key={tx.id || `tx-${idx}`}
                      className="p-3.5 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 rounded-xl transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* IKONA SMERU TRANSAKCIE (+ / -) */}
                        <div
                          className={`p-2.5 rounded-lg border flex items-center justify-center shrink-0 ${
                            isPositive
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                              : "bg-red-500/10 border-red-500/30 text-red-400"
                          }`}
                        >
                          {isPositive ? (
                            <ArrowUpRight size={16} />
                          ) : (
                            <ArrowDownRight size={16} />
                          )}
                        </div>

                        {/* DETAILY TRANSAKCIE */}
                        <div className="flex flex-col gap-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* BADGE KATEGÓRIE */}
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border bg-white/5 border-white/10 text-zinc-300 flex items-center gap-1">
                              <Tag size={10} className="text-zinc-500" />
                              {txCat}
                            </span>

                            {/* SHIELD ŠTÍTOK PRE TOKENOMICS */}
                            {isTokenomics && (
                              <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border bg-amber-500/10 border-amber-500/30 text-amber-400 flex items-center gap-1">
                                <Activity size={10} /> ⚡ Ťažba / Event
                              </span>
                            )}
                          </div>

                          <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-[#FFD700] transition-colors truncate">
                            {tx.title || tx.item || "Transakcia OS Genesis"}
                          </h4>

                          {/* ⏱️ VODOTESNÉ ČASOVÉ RAZÍTKO (HH:MM:SS DD.MM.YYYY) */}
                          <span className="text-[10px] text-zinc-400 flex items-center gap-1 font-mono">
                            <Clock size={10} className="text-[#FFD700]" />
                            {(() => {
                              const raw =
                                tx.timestamp ||
                                tx.created_at ||
                                tx.createdAt ||
                                tx.date;
                              if (!raw) return "Dnes / Neznámy čas";
                              const d = new Date(
                                raw.seconds ? raw.seconds * 1000 : raw,
                              );
                              if (isNaN(d.getTime())) return String(raw);

                              const timeStr = d.toLocaleTimeString("sk-SK", {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                              });
                              const dateStr = d.toLocaleDateString("sk-SK", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              });
                              return `${timeStr} ${dateStr}`;
                            })()}
                          </span>
                        </div>
                      </div>

                      {/* ZOBRAZENIE OC HODNOTY */}
                      <div className="text-right shrink-0">
                        <div
                          className={`text-sm font-black tracking-tight ${
                            isPositive
                              ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]"
                              : "text-white"
                          }`}
                        >
                          {isPositive ? `+${numAmount}` : `${numAmount}`} OC
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>

      {/* VERSION STAMP */}
      <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center font-mono text-[8px] text-zinc-500 select-none">
        <span>
          CORE_VERSION: GSH-LEDGER V20.12 (TOKENOMICS & TIMESTAMP ENGINE)
        </span>
        <span>DOMOVSKÝ UZOL: NEXUS-CORE_2Mb</span>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 215, 0, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 215, 0, 0.5); }
      `}</style>
    </div>
  );
};

export default GlobalShopHistory;
