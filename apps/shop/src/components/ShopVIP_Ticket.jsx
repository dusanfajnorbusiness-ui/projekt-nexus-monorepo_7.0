import React, { useState, useEffect, useCallback } from "react";
import { Ticket, Lock } from "lucide-react";

// ============================================================================
// 🎫 HELPER: AUTONÓMNY TIER RESOLVER (BEZPEČNÝ PREČÍTANÍM Z LOCALSTORAGE)
// ============================================================================
const getEffectiveTier = (passedTier) => {
  if (typeof window === "undefined") return passedTier || "FREE";
  try {
    const activeId = localStorage.getItem("nexus_active_identity");
    if (activeId) {
      const parsed = JSON.parse(activeId);
      if (parsed.tier) return String(parsed.tier).toUpperCase();
      if (parsed.membership) return String(parsed.membership).toUpperCase();
    }
    const rawTier = localStorage.getItem("nexus_user_tier");
    if (rawTier) return String(rawTier).toUpperCase();
  } catch (e) {}
  return String(passedTier || "FREE").toUpperCase();
};

// ============================================================================
// 🎫 HELPER: VIP TICKETS STATUS RESOLVER (IZOLOVANÝ SÚRODENECKÝ MÓD)
// ============================================================================
export const getVipTicketsStatus = (
  userTier = "FREE",
  pageKey = "documents",
  savedUsed = 0,
  savedMonth = "",
) => {
  const now = new Date();
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const cleanTier = String(userTier || "FREE")
    .toUpperCase()
    .trim();
  const max = cleanTier === "BANNED" ? 0 : cleanTier === "FREE" ? 0 : 2;

  let used = Number(savedUsed) || 0;

  if (savedMonth !== currentMonth) {
    used = 0;
  }

  const available = Math.max(0, max - used);
  const isLocked = available === 0 && max > 0;

  return {
    max,
    used,
    available,
    month: currentMonth,
    isLocked,
    pageKey,
  };
};

export const ShopVIP_Ticket = ({
  pageKey = "documents",
  userTier = "FREE",
  getTierColor = () => "#FFD700",
  handleShowTooltip,
  handleUpdateTooltipPos,
  handleHideTooltip,
}) => {
  const activeTier = getEffectiveTier(userTier);
  const tierColor = getTierColor(activeTier);

  // ⚡ 1. STAV VIP LÍSTKOV PER PAGE
  const [ticketStatus, setTicketStatus] = useState(() => {
    if (typeof window === "undefined") {
      return getVipTicketsStatus(activeTier, pageKey, 0, "");
    }
    const savedUsed = Number(
      localStorage.getItem(`nexus_vip_tickets_used_${pageKey}`) || 0,
    );
    const savedMonth =
      localStorage.getItem(`nexus_vip_tickets_month_${pageKey}`) || "";
    return getVipTicketsStatus(activeTier, pageKey, savedUsed, savedMonth);
  });

  // ⚡ 2. REAKTÍVNY SYNCHRONIZAČNÝ ENGINE
  const syncData = useCallback(() => {
    if (typeof window === "undefined") return;

    const currentTier = getEffectiveTier(userTier);
    const savedUsed = Number(
      localStorage.getItem(`nexus_vip_tickets_used_${pageKey}`) || 0,
    );
    const savedMonth =
      localStorage.getItem(`nexus_vip_tickets_month_${pageKey}`) || "";
    const updated = getVipTicketsStatus(
      currentTier,
      pageKey,
      savedUsed,
      savedMonth,
    );

    if (savedMonth !== updated.month) {
      localStorage.setItem(`nexus_vip_tickets_used_${pageKey}`, "0");
      localStorage.setItem(`nexus_vip_tickets_month_${pageKey}`, updated.month);
    }
    setTicketStatus(updated);
  }, [userTier, pageKey]);

  useEffect(() => {
    syncData();

    const handleSyncEvent = () => syncData();

    window.addEventListener("storage", handleSyncEvent);
    window.addEventListener("nexus_user_updated", handleSyncEvent);
    window.addEventListener("nexus_vip_tickets_updated", handleSyncEvent);
    window.addEventListener("nexus_identity_changed", handleSyncEvent);

    return () => {
      window.removeEventListener("storage", handleSyncEvent);
      window.removeEventListener("nexus_user_updated", handleSyncEvent);
      window.removeEventListener("nexus_vip_tickets_updated", handleSyncEvent);
      window.removeEventListener("nexus_identity_changed", handleSyncEvent);
    };
  }, [syncData]);

  const getTicketTooltipText = () => {
    if (ticketStatus.max === 0) {
      return `Aktívna úroveň: ${activeTier}. Bezplatní používatelia nemajú nárok na mesačné VIP lístky. Získajte členstvo PRO/OMEGA pre 2x VIP lístok mesačne.`;
    }
    if (ticketStatus.isLocked) {
      return `[${pageKey.toUpperCase()}] VIP Lístky vyčerpané (0/2 k dispozícii). Zobrazenie pre túto kartu je zablokované. Obnovenie 2 nových lístkov prebehne 1. dňa v mesiaci.`;
    }
    return `[${pageKey.toUpperCase()}] VIP Lístky: ${ticketStatus.available}/${ticketStatus.max} k dispozícii nevyučité / 2 mesačne fixne (${ticketStatus.month}).`;
  };

  const showVipTickets =
    pageKey !== "shop" &&
    pageKey !== "images" &&
    pageKey !== "image" &&
    pageKey !== "apps" &&
    pageKey !== "app";

  return (
    <div className="flex items-center gap-3 font-mono">
      {/* 🎫 VIP LÍSTKY INDICATOR (SKRYTÉ PRE SHOP, IMAGES A APPS) */}
      {showVipTickets && (
        <div
          onMouseEnter={(e) =>
            handleShowTooltip?.(
              `🎫 VIP LÍSTOK [${pageKey.toUpperCase()}]`,
              getTicketTooltipText(),
              e,
            )
          }
          onMouseMove={handleUpdateTooltipPos}
          onMouseLeave={handleHideTooltip}
          className={`hidden sm:flex items-center gap-2.5 bg-black/90 border px-3 py-2 rounded-2xl shadow-lg cursor-help transition-all duration-200 group ${
            ticketStatus.isLocked
              ? "border-red-500/60 shadow-red-500/20"
              : "hover:border-[#FFD700]"
          }`}
          style={{
            borderColor: ticketStatus.isLocked
              ? "rgba(239, 68, 68, 0.6)"
              : ticketStatus.available > 0
                ? `${tierColor}80`
                : "rgba(255,255,255,0.15)",
            boxShadow: ticketStatus.isLocked
              ? "0 0 15px rgba(239, 68, 68, 0.3)"
              : ticketStatus.available > 0
                ? `0 0 15px ${tierColor}25`
                : "none",
          }}
        >
          <div className="relative flex items-center justify-center">
            {ticketStatus.isLocked ? (
              <Lock size={18} className="text-red-500 animate-pulse" />
            ) : (
              <Ticket
                size={18}
                style={{
                  color: ticketStatus.available > 0 ? tierColor : "#71717a",
                }}
                className={ticketStatus.available > 0 ? "animate-pulse" : ""}
              />
            )}
            {ticketStatus.available > 0 && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
              </span>
            )}
          </div>

          <div className="text-left font-mono">
            <div className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-1">
              VIP LÍSTOK
              <span
                className={`text-[9px] font-black ${
                  ticketStatus.isLocked ? "text-red-500" : "text-[#39FF14]"
                }`}
              >
                ({ticketStatus.available}/{ticketStatus.max})
              </span>
            </div>
            <div
              className="text-xs font-black uppercase flex items-center gap-1.5"
              style={{ color: ticketStatus.isLocked ? "#ef4444" : tierColor }}
            >
              <span>{activeTier}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopVIP_Ticket;
