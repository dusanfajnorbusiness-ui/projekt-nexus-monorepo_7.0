import React, { useState, useMemo } from "react";
import {
  X,
  Zap,
  ExternalLink,
  Copy,
  Check,
  Shield,
  Crown,
  Clock,
  Calendar,
  Sparkles,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { SoundFX } from "@shared/utils/SoundEngine";
import { supabase } from "@shared/services/NexusDB_Supabase";

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (GLOBAL PAYWALL MODAL V20.95)
// File: src/components/GlobalPaywallModal.jsx
// Status: REAL-TIME UNIFIED PURCHASE TERMINAL // USERS, MESSAGES, WALLET & TIER SYNC
// ============================================================================

export const GlobalPaywallModal = ({
  isOpen,
  onClose,
  campaign,
  userBalance = 0,
  userTier = "FREE",
  userEmail: propEmail = "",
  currentExpiresAt = null,
  onSuccessTransaction,
}) => {
  const [selectedMonths, setSelectedMonths] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [liveBalance, setLiveBalance] = useState(userBalance);

  // 🔄 Synchronizácia kreditu z LocalStorage (Single Source of Truth)
  const syncModalBalance = React.useCallback(() => {
    if (typeof window === "undefined") return;
    const isQuest =
      localStorage.getItem("nexus_quest_mode") === "true" ||
      sessionStorage.getItem("nexus_quest_mode") === "true" ||
      localStorage
        .getItem("nexus_active_identity")
        ?.includes('"email":"quest"');

    if (isQuest) {
      setLiveBalance(0);
      return;
    }
    let creds = Number(userBalance) || 0;
    try {
      const activeId = localStorage.getItem("nexus_active_identity");
      if (activeId) {
        const parsed = JSON.parse(activeId);
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
    setLiveBalance(creds);
  }, [userBalance]);

  React.useEffect(() => {
    syncModalBalance();
    window.addEventListener("storage", syncModalBalance);
    window.addEventListener("nexus_credits_updated", syncModalBalance);
    window.addEventListener("nexus_user_updated", syncModalBalance);
    return () => {
      window.removeEventListener("storage", syncModalBalance);
      window.removeEventListener("nexus_credits_updated", syncModalBalance);
      window.removeEventListener("nexus_user_updated", syncModalBalance);
    };
  }, [syncModalBalance]);

  // Sound Triggers
  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();
  const triggerError = () => SoundFX && SoundFX.error && SoundFX.error();

  // 1. HOOK PRE DÁTUM EXSPIRÁCIE
  const newExpirationDate = useMemo(() => {
    if (!campaign) return "";
    if (campaign.tier === "MASTER" && campaign.isLifetime) {
      return "DOBA NEURČITÁ // DOŽIVOTNÝ ROOT PRÍSTUP";
    }

    const baseDate =
      currentExpiresAt && new Date(currentExpiresAt) > new Date()
        ? new Date(currentExpiresAt)
        : new Date();

    const resultDate = new Date(baseDate);
    resultDate.setMonth(resultDate.getMonth() + selectedMonths);

    return resultDate.toLocaleString("sk-SK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [currentExpiresAt, selectedMonths, campaign]);

  // 2. HOOK PRE PRESNÚ OC CENU (PARSOVANIE REÁLNEJ CENY Z KAMPANE/DOKUMENTU)
  const baseOcPrice = useMemo(() => {
    if (!campaign) return 0;
    if (typeof campaign.priceOc === "number") return campaign.priceOc;
    if (typeof campaign.ocPrice === "number") return campaign.ocPrice;
    if (typeof campaign.price === "number") return campaign.price;
    return 2500;
  }, [campaign]);

  // 🛑 EARLY RETURN AŽ PO VŠETKÝCH HOOKOCH (KONTROLA ZOBRAZENIA MODALU)
  if (!isOpen || !campaign) return null;

  const STACK_OPTIONS = [1, 3, 5, 7, 10, 12];
  const isMembership =
    campaign.category === "MEMBERSHIP" || campaign.subCategory === "membership";

  const totalOcPrice = baseOcPrice * (isMembership ? selectedMonths : 1);
  const effectiveBalance =
    liveBalance > 0 ? liveBalance : Number(userBalance) || 0;
  const hasEnoughBalance = effectiveBalance >= totalOcPrice;
  const missingOc = Math.max(0, totalOcPrice - effectiveBalance);

  // KO-FI LINKY
  const kofiTiersUrl = "https://ko-fi.com/cybertech_architect/tiers";
  const kofiShopUrl = "https://ko-fi.com/cybertech_architect/shop";

  const handleCopyLink = () => {
    triggerSuccess();
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // 🛒 NÁKUP, STOHOVANIE & UNIFIKOVANÝ ZÁPIS DO MATRIXU
  const handleConfirmPurchase = async () => {
    if (!hasEnoughBalance) {
      triggerError();
      window.open(kofiShopUrl, "_blank");
      return;
    }

    triggerClick();
    setIsProcessing(true);

    try {
      // 1. DOHĽADANIE IDENTITY OPERÁTORA (EMAIL)
      let operatorEmail = propEmail;
      if (!operatorEmail) {
        const activeIdentity = localStorage.getItem("nexus_active_identity");
        if (activeIdentity) {
          try {
            const parsed = JSON.parse(activeIdentity);
            operatorEmail = parsed.email || "";
          } catch (e) {}
        }
      }
      if (!operatorEmail) {
        const altUser =
          localStorage.getItem("nexus_user") ||
          localStorage.getItem("nexus_active_user");
        if (altUser) {
          try {
            const parsed = JSON.parse(altUser);
            operatorEmail = parsed.email || "";
          } catch (e) {}
        }
      }

      if (!operatorEmail) {
        throw new Error(
          "Chýba identita operátora (E-mail). Prihlás sa prosím do Siete.",
        );
      }

      // 2. NAČÍTANIE ŽIVÉHO PROFILU Z TABUĽKY 'users' V SUPABASE
      const { data: dbUser, error: fetchErr } = await supabase
        .from("users")
        .select("*")
        .eq("email", operatorEmail)
        .maybeSingle();

      if (fetchErr) {
        console.warn("[SUPABASE FETCH WARN]:", fetchErr.message);
      }

      const currentCredits = dbUser
        ? Number(dbUser.credits) || 0
        : effectiveBalance;
      if (currentCredits < totalOcPrice) {
        throw new Error(
          `Nedostatok OC kreditov. Vyžaduje sa ${totalOcPrice} OC, máš ${currentCredits} OC.`,
        );
      }

      const newCredits = Math.max(0, currentCredits - totalOcPrice);

      // Určenie nového TIERu (ak kupuje vyššie členstvo)
      const TIER_RANK = {
        FREE: 1,
        FREEMIUM: 1,
        PRO: 2,
        OMEGA: 3,
        MASTER: 4,
        ARCHITECT: 5,
      };
      const currentTierClean = (
        dbUser?.tier ||
        userTier ||
        "FREE"
      ).toUpperCase();
      const campaignTierClean = (campaign.tier || "FREE").toUpperCase();

      let targetTier = currentTierClean;
      if (
        isMembership &&
        TIER_RANK[campaignTierClean] > (TIER_RANK[currentTierClean] || 0)
      ) {
        targetTier = campaignTierClean;
      }

      // Aktualizácia unlocked_nodes
      let currentUnlocked = [];
      try {
        currentUnlocked =
          typeof dbUser?.unlocked_nodes === "string"
            ? JSON.parse(dbUser.unlocked_nodes || "[]")
            : dbUser?.unlocked_nodes || [];
      } catch (e) {
        currentUnlocked = [];
      }
      const itemId = campaign.id || campaign.code || campaign.nodeKey;
      if (itemId && !currentUnlocked.includes(itemId)) {
        currentUnlocked.push(itemId);
      }

      // Ak je to MATRIX_FX, pridáme aj aliasy pre SettingsPage.jsx a aktualizujeme LocalStorage
      if (
        campaign.category === "MATRIX_FX" ||
        campaign.subCategory === "matrix_fx"
      ) {
        const cId = (campaign.id || campaign.code || "").toUpperCase();
        const fxAliases = {
          CAMP_23: [
            "CAMP_23",
            "matrix-fx-biometric-23",
            "kampan-23",
            "laser",
            "biometric",
          ],
          CAMP_24: [
            "CAMP_24",
            "matrix-fx-network-24",
            "kampan-24",
            "lightning",
            "network",
          ],
          CAMP_25: [
            "CAMP_25",
            "matrix-fx-crt-25",
            "kampan-25",
            "crtGlitch",
            "crt",
            "glitch",
          ],
          CAMP_26: [
            "CAMP_26",
            "matrix-fx-power-26",
            "kampan-26",
            "empSurge",
            "emp",
            "power",
          ],
          CAMP_27: [
            "CAMP_27",
            "matrix-fx-decrypting-27",
            "kampan-27",
            "textScramble",
            "scramble",
            "decrypting",
          ],
          CAMP_28: [
            "CAMP_28",
            "matrix-fx-overflow-28",
            "kampan-28",
            "dataCascade",
            "cascade",
            "overflow",
          ],
          CAMP_29: [
            "CAMP_29",
            "matrix-fx-shield-29",
            "kampan-29",
            "focusShield",
            "shield",
            "cognitive",
          ],
          CAMP_30: [
            "CAMP_30",
            "matrix-fx-neural-30",
            "kampan-30",
            "neuralCursor",
            "neural",
            "cursor",
          ],
        };

        const aliasList = fxAliases[cId] || [itemId];
        aliasList.forEach((alias) => {
          if (alias && !currentUnlocked.includes(alias)) {
            currentUnlocked.push(alias);
          }
        });

        // Nastavenie pre SettingsPage.jsx
        localStorage.setItem("nexus_matrix_fx", "true");
        try {
          const savedFx = JSON.parse(
            localStorage.getItem("nexus_advanced_fx") || "{}",
          );
          if (cId === "CAMP_23" || cId.includes("23")) savedFx.laser = true;
          if (cId === "CAMP_24" || cId.includes("24")) savedFx.lightning = true;
          if (cId === "CAMP_25" || cId.includes("25")) savedFx.crtGlitch = true;
          if (cId === "CAMP_26" || cId.includes("26")) savedFx.empSurge = true;
          if (cId === "CAMP_27" || cId.includes("27"))
            savedFx.textScramble = true;
          if (cId === "CAMP_28" || cId.includes("28"))
            savedFx.dataCascade = true;
          if (cId === "CAMP_29" || cId.includes("29"))
            savedFx.focusShield = true;
          if (cId === "CAMP_30" || cId.includes("30"))
            savedFx.neuralCursor = true;
          localStorage.setItem("nexus_advanced_fx", JSON.stringify(savedFx));
          window.dispatchEvent(
            new CustomEvent("nexus_advanced_fx_changed", { detail: savedFx }),
          );
        } catch (e) {}

        window.dispatchEvent(new Event("nexus_matrix_fx_changed"));
        window.dispatchEvent(new Event("nexus_settings_updated"));
      }

      // Aktualizácia transaction_history
      let currentHistory = [];
      try {
        currentHistory =
          typeof dbUser?.transaction_history === "string"
            ? JSON.parse(dbUser.transaction_history || "[]")
            : dbUser?.transaction_history || [];
      } catch (e) {
        currentHistory = [];
      }

      const newTxRecord = {
        id: `TXN-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
        type: isMembership ? "MEMBERSHIP_STACK" : "PURCHASE",
        category: (() => {
          const catUpper = String(
            campaign.category ||
              campaign.subCategory ||
              campaign.itemType ||
              "",
          ).toUpperCase();
          const idUpper = String(
            campaign.id || campaign.code || campaign.nodeKey || "",
          ).toUpperCase();
          if (
            catUpper.includes("MEMBERSHIP") ||
            catUpper.includes("PACK") ||
            catUpper.includes("MATRIX") ||
            catUpper === "SHOP"
          )
            return "SHOP";
          if (catUpper.includes("VIDEO") || idUpper.includes("VID"))
            return "VIDEOS";
          if (catUpper.includes("AUDIO") || idUpper.includes("AUD"))
            return "AUDIOS";
          if (
            catUpper.includes("IMAGE") ||
            catUpper.includes("AVATAR") ||
            idUpper.includes("AVATAR") ||
            idUpper.includes("BOT")
          )
            return "IMAGES";

          if (
            catUpper.includes("DOC") ||
            catUpper.includes("PDF") ||
            catUpper.includes("PPTX") ||
            idUpper.includes("CAMP_32") ||
            idUpper.includes("CAMP_33") ||
            idUpper.includes("CAMP_34") ||
            idUpper.includes("CAMP_35")
          )
            return "DOCUMENTS";
          if (
            catUpper.includes("APP") ||
            idUpper.includes("CAMP_33") ||
            idUpper.includes("CAMP_34") ||
            idUpper.includes("CAMP_35") ||
            idUpper.includes("CAMP_39") ||
            idUpper.includes("CAMP_40") ||
            idUpper.includes("CAMP_41")
          )
            return "APPS";

          if (
            catUpper.includes("NODE") ||
            idUpper.includes("ID0") ||
            idUpper.includes("ID1")
          )
            return "NODES";
          return "OTHERS";
        })(),
        item: itemId,
        title: campaign.title,
        amount: -totalOcPrice,
        cost: totalOcPrice,
        duration_months: isMembership ? selectedMonths : 0,
        tier: targetTier,
        date: new Date().toISOString(),
      };

      currentHistory.unshift(newTxRecord);

      // 3. TVRDÝ UPDATE DO TABUĽKY 'users' V SUPABASE
      const updatePayload = {
        credits: newCredits,
        tier: targetTier,
        unlocked_nodes: JSON.stringify(currentUnlocked),
        transaction_history: JSON.stringify(currentHistory.slice(0, 50)),
        // last_active omitted for schema safety
      };

      if (isMembership) {
        updatePayload.tier_expires_at = newExpirationDate.includes(
          "DOBA NEURČITÁ",
        )
          ? null
          : newExpirationDate;
      }

      let { error: updateErr } = await supabase
        .from("users")
        .update(updatePayload)
        .eq("email", operatorEmail);

      // 🛡️ FALLBACK FIREWALL: Ak v databáze chýba stĺpec subscription_expires_at alebo last_active
      if (updateErr) {
        console.warn(
          "[SUPABASE UPDATE WARN]: Prvý pokus zlyhal, aplikujem Fallback:",
          updateErr.message,
        );
        delete updatePayload.subscription_expires_at;
        delete updatePayload.last_active;

        const { error: retryErr } = await supabase
          .from("users")
          .update(updatePayload)
          .eq("email", operatorEmail);

        if (retryErr) {
          console.warn(
            "[SUPABASE UPDATE WARN]: Druhý pokus zlyhal, znižujem payload na základ:",
            retryErr.message,
          );
          const basicPayload = { credits: newCredits, tier: targetTier };
          const { error: finalErr } = await supabase
            .from("users")
            .update(basicPayload)
            .eq("email", operatorEmail);

          if (finalErr) {
            console.error("[SUPABASE UPDATE CRITICAL]:", finalErr);
            throw new Error(`Zápis do databázy zlyhal: ${finalErr.message}`);
          }
        }
      }

      // 4. INJEKCIA NOTIFIKÁCIE DO TABUĽKY 'messages' (GLOBAL MESSAGES INBOX)
      try {
        const isAvatar =
          campaign.category === "IMAGES" ||
          campaign.subCategory === "kt-avatars" ||
          (campaign.id && String(campaign.id).startsWith("AVATAR-"));
        const rawUrl =
          campaign.imageUrl ||
          `https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/bot-avatars/${campaign.nodeKey || campaign.id}.png`;
        const jpgUrl = rawUrl.replace(/\.png$/i, ".jpg");

        const msgTitle = isMembership
          ? `ČLENSTVO ${targetTier} ACTIVATED / STACKED 👑`
          : isAvatar
            ? `ODOMKNUTÝ BOT AVATAR: ${campaign.title} 🤖`
            : `ODOMKNUTÝ UZOL: ${campaign.title} 🔑`;

        const msgBody = isMembership
          ? `Úspešne si odomkol / predĺžil členstvo ${campaign.title} o ${selectedMonths} mesiac(e).\n\nOdpočítané: -${totalOcPrice.toLocaleString("sk-SK")} OC\nNové Saldo: ${newCredits.toLocaleString("sk-SK")} OC\nHodnosť Operátora: ${targetTier}\nPlatnosť do: ${newExpirationDate}`
          : isAvatar
            ? `Úspešne si odomkol 3D Bot Avatara pre tvoj profil OS Genesis: ${campaign.title}.\n\nURL adresa pre tvoj profil (.jpg):\n${jpgUrl}\n\nOdpočítané: -${totalOcPrice.toLocaleString("sk-SK")} OC\nNové Saldo: ${newCredits.toLocaleString("sk-SK")} OC\nStatus: URL adresa avatara bola aktivovaná. Skopíruj si ju v obchode alebo v nastaveniach profilu.`
            : `Úspešne si odomkol dátový uzol: ${campaign.title}.\n\nOdpočítané: -${totalOcPrice.toLocaleString("sk-SK")} OC\nNové Saldo: ${newCredits.toLocaleString("sk-SK")} OC\nStatus: Uzol bol natrvalo priradený do tvojho Skafandra.`;

        await supabase.from("messages").insert([
          {
            sender_id: "system_core",
            sender_name: "NEXUS_SYSTEM",
            recipient_id: operatorEmail,
            text: `[ ${msgTitle} ]\n\n${msgBody}`,
            is_read: false,
            is_archived: false,
            is_system: true,
            timestamp: new Date().toISOString(),
          },
        ]);
      } catch (msgErr) {
        console.warn("[SUPABASE MSG WARN]: Injekcia správy zlyhala:", msgErr);
      }

      // 6. REAL-TIME BLESKOVÁ SYNCHRONIZÁCIA LOCALSTORAGE & REACT EVENTS
      const activeId = localStorage.getItem("nexus_active_identity");
      let idObj = {
        email: operatorEmail,
        credits: newCredits,
        tier: targetTier,
        unlockedNodes: currentUnlocked,
      };
      if (activeId) {
        try {
          idObj = {
            ...JSON.parse(activeId),
            credits: newCredits,
            tier: targetTier,
            unlockedNodes: currentUnlocked,
          };
        } catch (e) {}
      }
      localStorage.setItem("nexus_active_identity", JSON.stringify(idObj));
      localStorage.setItem("nexus_user", JSON.stringify(idObj));
      localStorage.setItem("nexus_active_user", JSON.stringify(idObj));
      localStorage.setItem("nexus_credits", newCredits.toString());
      localStorage.setItem("nexus_oc_credits", newCredits.toString());
      localStorage.setItem("nexus_balance", newCredits.toString());

      // Odpálenie globálnych klientskych eventov
      window.dispatchEvent(new Event("nexus_user_updated"));
      window.dispatchEvent(new Event("nexus_credits_updated"));
      window.dispatchEvent(new Event("nexus_identity_changed"));
      window.dispatchEvent(new Event("storage"));

      triggerSuccess();

      if (onSuccessTransaction) {
        onSuccessTransaction({
          campaign,
          months: selectedMonths,
          totalOcPrice,
          newCredits,
          newTier: targetTier,
          newExpirationDate,
        });
      }

      onClose();
    } catch (err) {
      console.error("[PAYWALL ERROR]:", err);
      triggerError();
      alert(`⚠️ Chyba pri spracovaní transakcie: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-in fade-in duration-300 font-mono text-left">
      <div className="bg-[#050A0E] border-2 border-[#FFD700]/60 rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.2)] relative">
        {/* MODAL HEADER */}
        <div className="p-5 bg-black/80 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <Crown size={22} className="text-[#FFD700] animate-pulse" />
            <div>
              <h2 className="text-sm md:text-base font-extrabold text-white tracking-wide uppercase">
                {isMembership
                  ? "STOHOVANIE ČLENSTVA OS GENESIS"
                  : "ODOMKNUTIE DÁTOVÉHO UZLA"}
              </h2>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                ID: {campaign.id || campaign.code} | TIER:{" "}
                {campaign.tier || "FREE"}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              triggerClick();
              onClose();
            }}
            className="p-2 bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 rounded-xl border border-white/10 transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 md:p-8 space-y-6 flex-1 overflow-y-auto custom-scroll">
          {/* CAMPAIGN CARD SUMMARY */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm font-black text-white">
                {campaign.title}
              </div>
              <div className="text-xs text-zinc-400">
                {campaign.spoilerIntro || campaign.desc}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[10px] text-zinc-500 uppercase">
                Základná Sadzba
              </div>
              <div className="text-sm font-black text-[#FFD700]">
                {baseOcPrice.toLocaleString("sk-SK")} OC{" "}
                {isMembership ? "/ mes." : ""}
              </div>
            </div>
          </div>

          {/* STOHOVANIE MESIACOV (LEN PRE MEMBERSHIP) */}
          {isMembership && (
            <div className="space-y-3 p-4 bg-black/60 border border-white/10 rounded-2xl">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#00f3ff] font-bold uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={14} /> ZVOĽ POČET MESIACOV STOHOVANIA:
                </span>
                <span className="text-zinc-400 text-[11px] font-bold">
                  {selectedMonths}x Mesiac
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {STACK_OPTIONS.map((m) => {
                  const isActive = selectedMonths === m;
                  return (
                    <button
                      key={m}
                      onClick={() => {
                        triggerClick();
                        setSelectedMonths(m);
                      }}
                      onMouseEnter={triggerHover}
                      className={`py-2.5 rounded-xl text-xs font-black uppercase transition-all border cursor-pointer ${
                        isActive
                          ? "bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-105"
                          : "bg-black/80 text-zinc-400 hover:text-white border-white/10 hover:border-white/20"
                      }`}
                    >
                      {m}x
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ČASOVÁ PEČIATKA & NOVÝ STAV EXSPIRÁCIE */}
          <div className="p-4 bg-black/80 border border-[#00f3ff]/30 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 flex items-center gap-1.5">
                <Clock size={14} className="text-[#00f3ff]" />{" "}
                {isMembership
                  ? "ČASOVÁ PEČIATKA STOHOVANIA:"
                  : "ČASOVÁ PEČIATKA ACCESU:"}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#00f3ff]/10 text-[#00f3ff] border border-[#00f3ff]/30 font-bold uppercase">
                ODOMKNUTÉ NA DOBU{" "}
                {!isMembership ||
                (campaign.tier === "MASTER" && campaign.isLifetime)
                  ? "NEURČITÚ"
                  : "URČITÚ"}
              </span>
            </div>

            <div className="text-sm font-bold text-white flex items-center gap-2 pt-1 border-t border-white/10">
              <Calendar size={14} className="text-[#FFD700]" />
              {isMembership ? (
                <span>
                  Platnosť prístupu do:{" "}
                  <strong className="text-[#FFD700]">
                    {newExpirationDate}
                  </strong>
                </span>
              ) : (
                <span>
                  Platnosť prístupu:{" "}
                  <strong className="text-[#39FF14]">
                    TRVALÝ // DOŽIVOTNÝ UZOL
                  </strong>
                </span>
              )}
            </div>
          </div>

          {/* STAV PEŇAŽENKY & KALKULÁCIA */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between text-xs">
            <div>
              <div className="text-zinc-500 uppercase text-[10px]">
                Tvoje Saldo Konta
              </div>
              <div className="text-base font-black text-white">
                {effectiveBalance.toLocaleString("sk-SK")} OC
              </div>
            </div>
            <div className="text-right">
              <div className="text-zinc-500 uppercase text-[10px]">
                Celková Suma na Úhradu
              </div>
              <div
                className={`text-base font-black ${hasEnoughBalance ? "text-[#39FF14]" : "text-[#FF003C]"}`}
              >
                {totalOcPrice.toLocaleString("sk-SK")} OC
              </div>
            </div>
          </div>

          {/* UPOZORNENIE PRI NEDOSTATKU OC KREDITOV */}
          {!hasEnoughBalance && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
              <AlertTriangle size={16} className="shrink-0 animate-pulse" />
              <span>
                V peňaženke ti chýba{" "}
                <strong>{missingOc.toLocaleString("sk-SK")} OC</strong>{" "}
                kreditov. Dobij si konto cez Ko-fi obchod.
              </span>
            </div>
          )}

          {/* AKČNÝ FOOTER A TLAČIDLÁ */}
          <div className="space-y-3 pt-2">
            {campaign.category === "NODES" ? (
              <div className="space-y-3">
                {/* 1. ODOMKNÚŤ SINGLE NODE ZA 500 OC */}
                <button
                  onClick={handleConfirmPurchase}
                  disabled={isProcessing || !hasEnoughBalance}
                  className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    hasEnoughBalance
                      ? "bg-[#39FF14] hover:bg-[#39FF14]/80 text-black border border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                      : "bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed opacity-60"
                  }`}
                >
                  <Zap size={14} /> ODOMKNÚŤ TENTO UZOL ZA 500 OC
                </button>

                {/* 2. KO-FI BRÁNY PRE POCKET PACK A TIERS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <a
                    href="https://ko-fi.com/s/f20aa188e8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink size={12} /> KÚPIŤ POCKET PACK (500 OC / 5€)
                  </a>

                  <a
                    href="https://ko-fi.com/cybertech_architect/tiers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center justify-center gap-1.5"
                  >
                    <Crown size={12} /> KÚPIŤ VIP ČLENSTVO (EUR)
                  </a>
                </div>
              </div>
            ) : hasEnoughBalance ? (
              /* 1. HLAVNÉ TLAČIDLO: POTVRDIŤ STOHOVANIE ALEBO PRESMERUJE NA KO-FI FIAT */
              <button
                onClick={handleConfirmPurchase}
                disabled={isProcessing}
                className="w-full py-4 bg-[#FFD700] hover:bg-[#FFD700]/80 text-black border border-[#FFD700] rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(255,215,0,0.4)]"
              >
                <Zap size={16} />

                {isProcessing
                  ? isMembership
                    ? "SPRACOVÁVAM STOHOVANIE..."
                    : "SPRACOVÁVAM ODOMKNUTIE..."
                  : totalOcPrice === 0
                    ? "ODOMKNÚŤ ZDARMA"
                    : isMembership
                      ? `POTVRDIŤ A STOHOVAŤ (${selectedMonths}x MESIAC ZA ${totalOcPrice.toLocaleString("sk-SK")} OC)`
                      : `ODOMKNÚŤ A KÚPIŤ ZA ${totalOcPrice.toLocaleString("sk-SK")} OC`}
              </button>
            ) : (
              <a
                href={kofiShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#FF003C] hover:bg-[#FF003C]/80 text-white border border-[#FF003C] rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,0,60,0.4)]"
              >
                <ExternalLink size={16} /> NEDOSTATOK KREDITOV (CHÝBA{" "}
                {missingOc.toLocaleString("sk-SK")} OC) ➔ KÚPIŤ OC BALÍK NA
                KO-FI
              </a>
            )}

            {/* SECONDARY ROW: EUR FIAT BRÁNA + KOPÍROVAŤ LINK */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a
                href={kofiTiersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink size={14} /> KÚPIŤ ČLENSTVO ZA EUR (
                {campaign.price})
              </a>

              <button
                onClick={handleCopyLink}
                className="py-3 px-4 bg-white/5 hover:bg-white/15 text-white border border-white/20 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedLink ? (
                  <Check size={14} className="text-green-400" />
                ) : (
                  <Copy size={14} />
                )}
                {copiedLink ? "Trvalý Odkaz Skopírovaný!" : "Kopírovať Link"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPaywallModal;
