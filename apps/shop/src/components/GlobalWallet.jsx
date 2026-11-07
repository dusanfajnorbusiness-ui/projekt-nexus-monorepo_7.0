import GlobalShopHistory from "@shop/components/GlobalShopHistory.jsx";
import { ShieldCheck, Wallet, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// ============================================================================
// 👑 NEXUS OS GENESIS EDITION - GLOBAL WALLET MASTER COMPONENT V20.8
// File: src/components/GlobalWallet.jsx
// Status: SINGLE SOURCE OF TRUTH // BACKDROP BLUR MODAL // QUEST SHIELD ACTIVE
// ============================================================================

export const GlobalWallet = ({
  balance = 0,
  userEmail = "",
  userTier = "FREE",
  getTierColor = () => "#FFD700",
  className = "",
  handleShowTooltip,
  handleUpdateTooltipPos,
  handleHideTooltip,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [liveBalance, setLiveBalance] = useState(0);
  const [liveEmail, setLiveEmail] = useState("Hosť");
  const [liveTier, setLiveTier] = useState("FREE");

  // ⚡ 1. REAKTÍVNA SYNCHRONIZÁCIA DÁT
  const syncWalletData = useCallback(() => {
    if (typeof window === "undefined") return;

    let mail = userEmail || "";
    let creds = Number(balance) || 0;
    let tier = userTier || "FREE";

    try {
      const activeId = localStorage.getItem("nexus_active_identity");
      if (activeId) {
        const parsed = JSON.parse(activeId);
        if (parsed.email) mail = parsed.email;
        if (parsed.tier) tier = parsed.tier;
        const c =
          parsed.credits ??
          parsed.ocCredits ??
          parsed.oc_credits ??
          parsed.balance;
        if (c !== undefined && c !== null) creds = Number(c) || 0;
      }
    } catch (e) {}

    if (!creds) {
      const standalone =
        localStorage.getItem("nexus_credits") ||
        localStorage.getItem("nexus_user_credits") ||
        localStorage.getItem("nexus_balance") ||
        localStorage.getItem("nexus_oc_credits");
      if (standalone) creds = Number(standalone) || 0;
    }

    // 🛡️ QUEST SHIELD & IZOLÁCIA HOSŤA
    const isGuest =
      !mail ||
      mail === "Hosť" ||
      mail.toLowerCase() === "guest" ||
      !String(mail).includes("@");

    if (isGuest) {
      setLiveEmail("Hosť");
      setLiveBalance(0);
      setLiveTier("FREE");
    } else {
      setLiveEmail(mail);
      setLiveBalance(creds);
      setLiveTier(tier);
    }
  }, [balance, userEmail, userTier]);

  useEffect(() => {
    syncWalletData();

    const handleSync = () => syncWalletData();
    const handleOpenTrigger = () => setIsOpen(true);

    window.addEventListener("storage", handleSync);
    window.addEventListener("nexus_user_updated", handleSync);
    window.addEventListener("nexus_credits_updated", handleSync);
    window.addEventListener("nexus_identity_changed", handleSync);
    window.addEventListener("nexus_open_wallet", handleOpenTrigger);

    return () => {
      window.removeEventListener("storage", handleSync);
      window.removeEventListener("nexus_user_updated", handleSync);
      window.removeEventListener("nexus_credits_updated", handleSync);
      window.removeEventListener("nexus_identity_changed", handleSync);
      window.removeEventListener("nexus_open_wallet", handleOpenTrigger);
    };
  }, [syncWalletData]);

  // 🔒 ZAMKNUTIE SCROLLOVANIA POZADIA PRI OTVORENOM MODALE
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const formattedBalance = (Number(liveBalance) || 0).toLocaleString("sk-SK");
  const tierColor = getTierColor(liveTier);

  return (
    <>
      {/* 🪙 GLOBÁLNA LIŠTA - TLAČIDLO PEŇAŽENKY */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={(e) =>
          handleShowTooltip?.(
            "🪙 NEXUS PEŇAŽENKA",
            `Zostatok: ${formattedBalance} OC [${liveTier}]. Kliknutím otvoríš kompletnú históriu transakcií.`,
            e,
          )
        }
        onMouseMove={handleUpdateTooltipPos}
        onMouseLeave={handleHideTooltip}
        className={`flex items-center gap-2 bg-black/80 hover:bg-black border border-[#FFD700]/40 hover:border-[#FFD700] px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:shadow-[0_0_20px_rgba(255,215,0,0.35)] transition-all duration-200 cursor-pointer font-mono group select-none ${className}`}
      >
        <div className="relative flex items-center justify-center">
          <Wallet
            size={15}
            className="text-[#FFD700] group-hover:scale-110 transition-transform"
          />
          <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FFD700]"></span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-left">
          <span className="text-xs font-black text-[#FFD700] tracking-wider drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
            {formattedBalance}
          </span>
          <span className="text-[10px] font-black text-[#FFD700]/80">OC</span>
        </div>
      </button>

      {/* 🔮 VYSKAKOVACIE OKNO - MODAL S GLOBALSHOPHISTORY A BACKDROP BLUR */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[999999] flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 font-mono cursor-pointer"
          >
            {/* MODAL CONTAINER (STOP PROPAGATION PRE ZAMEDZENIE ZATVORENIA PRI KLIKU VO VNÚTRI) */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-[#050A0E] border border-[#FFD700]/40 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.95),0_0_40px_rgba(255,215,0,0.2)] overflow-hidden flex flex-col max-h-[85vh] my-auto relative cursor-default"
            >
              {/* MODAL HEADER */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-white/10 bg-black/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]">
                    <Wallet size={20} className="animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm md:text-base font-black text-white uppercase tracking-widest flex items-center gap-2">
                        NEXUS PEŇAŽENKA & LEDGER
                      </h2>
                      <span
                        className="text-[9px] font-black uppercase px-2 py-0.5 rounded border"
                        style={{
                          color: tierColor,
                          borderColor: `${tierColor}40`,
                          backgroundColor: `${tierColor}10`,
                        }}
                      >
                        {liveTier}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-400 mt-0.5">
                      Účet:{" "}
                      <span className="text-zinc-200 font-bold">
                        {liveEmail}
                      </span>{" "}
                      | Doživotný transakčný protokol OS Genesis
                    </p>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 border border-white/10 hover:border-red-500/40 rounded-xl transition-all cursor-pointer"
                  title="Zatvoriť peňaženku"
                >
                  <X size={18} />
                </button>
              </div>

              {/* MODAL BODY - EMBEDDED GLOBALSHOPHISTORY */}
              <div className="p-3 md:p-6 overflow-y-auto custom-scrollbar flex-1 bg-gradient-to-b from-black/40 via-transparent to-black/60">
                <GlobalShopHistory
                  userEmail={liveEmail}
                  balance={liveBalance}
                  userTier={liveTier}
                  isCompact={false}
                  hideBalance={false}
                />
              </div>

              {/* MODAL FOOTER STAMP */}
              <div className="px-5 py-2.5 bg-black/80 border-t border-white/5 flex items-center justify-between text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={12} className="text-[#39FF14]" />
                  KRYPTOGRAFICKÝ AUDIT: SUPABASE REALTIME SYNC
                </span>
                <span>CORE_VERSION: GWM-V20.8 (MONOLITH)</span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default GlobalWallet;
