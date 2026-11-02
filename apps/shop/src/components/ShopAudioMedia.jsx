/* eslint-disable no-undef */
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Volume2,
  Eye,
  Download,
  Lock,
  Unlock,
  Zap,
  Ticket,
  PlayCircle,
  PauseCircle,
  X,
  Copy,
  Check,
  Sparkles,
  HelpCircle,
  Shield,
  Radio,
  Folder,
  Layers,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Activity,
  Search,
  Grid3X3,
  Grid,
  List,
  RefreshCw,
  FileText,
  Terminal,
} from "lucide-react";

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AUDIOS MEDIA ENGINE V20.99)
// File: src/components/ShopAudioMedia.jsx
// Status: STRICTLY GROUNDED // FULL V5 MASTER SPECIFICATION // PERFECT WALLET LOGGING
// Core Version: BC-CHIRURG V20.99_FULL_MASTER_V5
// ============================================================================

import { SoundFX } from "@shared/utils/SoundEngine";
import {
  SHOP_AUDIO_DATA,
  AUDIO_CATEGORY_MAP,
  TIER_COLOR_MAP,
  getTierColor,
  getDimensionColor,
} from "../data/ShopAudioMedia";
import { ZOMBIE_ARE_BACK_DATA } from "../data/ShopAudioMedia/Zombie-Are-Back";
import { BALENE_DIGITALNE_DATA } from "../data/ShopAudioMedia/Audio_Balene-Digitalne";
import { SHOP_TOOLTIPS, getTooltip } from "../data/TooltipsShop";
import { MetaTags } from "../MetaTags";
import { VyhodyClenstva } from "./Vyhody-Clenstva";
import { ShopFilters } from "./ShopFilters";
import { GlobalPaywallModal } from "./GlobalPaywallModal";
import { ShopHeaderComponent } from "./ShopHeaderComponent";
import { getVipTicketsStatus } from "./ShopVIP_Ticket";
import { NexusDB } from "@shared/services/NexusDB_Core";
import { supabase } from "@shared/services/NexusDB_Supabase";
import { ShopPripravujeme } from "./ShopPripravujeme";
import ModalPreFilterDrawer from "./ModalPreFilterDrawer";

export const ShopAudioMedia = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // --------------------------------------------------------------------------
  // 1. LOKÁLNY STAV IDENTITY A PEŇAŽENKY
  // --------------------------------------------------------------------------
  const [userEmail, setUserEmail] = useState(() => {
    if (typeof window === "undefined") return "Hosť";
    try {
      const active = localStorage.getItem("nexus_active_identity");
      if (active) {
        const parsed = JSON.parse(active);
        if (parsed.email) return parsed.email;
      }
    } catch (e) {}
    return localStorage.getItem("nexus_user_email") || "Hosť";
  });

  const [userTier, setUserTier] = useState(() => {
    if (typeof window === "undefined") return "FREE";
    try {
      const active = localStorage.getItem("nexus_active_identity");
      if (active) {
        const parsed = JSON.parse(active);
        if (parsed.tier) return parsed.tier.toUpperCase();
      }
    } catch (e) {}
    return "FREE";
  });

  const [balance, setBalance] = useState(() => {
    if (typeof window === "undefined") return 0;
    try {
      const active = localStorage.getItem("nexus_active_identity");
      if (active) {
        const parsed = JSON.parse(active);
        const creds = parsed.credits ?? parsed.ocCredits ?? parsed.balance;
        if (creds !== undefined && creds !== null) return Number(creds) || 0;
      }
    } catch (e) {}
    return Number(localStorage.getItem("nexus_credits")) || 0;
  });

  const [unlockedItems, setUnlockedItems] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("nexus_unlocked_items");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  // VIP Lístky stav pre Audios
  const [ticketStatus, setTicketStatus] = useState(() => {
    if (typeof window === "undefined")
      return getVipTicketsStatus(userTier, "audios", 0, "");
    const used = Number(
      localStorage.getItem("nexus_vip_tickets_used_audios") || 0,
    );
    const month = localStorage.getItem("nexus_vip_tickets_month_audios") || "";
    return getVipTicketsStatus(userTier, "audios", used, month);
  });

  // Reakcia na zmeny v localStorage & Supabase Sync
  useEffect(() => {
    const syncIdentity = () => {
      try {
        const active = localStorage.getItem("nexus_active_identity");
        if (active) {
          const parsed = JSON.parse(active);
          if (parsed.email) setUserEmail(parsed.email);
          if (parsed.tier) setUserTier(parsed.tier.toUpperCase());
          const creds = parsed.credits ?? parsed.ocCredits ?? parsed.balance;
          if (creds !== undefined && creds !== null)
            setBalance(Number(creds) || 0);
        }
        const used = Number(
          localStorage.getItem("nexus_vip_tickets_used_audios") || 0,
        );
        const month =
          localStorage.getItem("nexus_vip_tickets_month_audios") || "";
        setTicketStatus(getVipTicketsStatus(userTier, "audios", used, month));

        const savedUnlocked = localStorage.getItem("nexus_unlocked_items");
        if (savedUnlocked) setUnlockedItems(JSON.parse(savedUnlocked));
      } catch (e) {}
    };

    syncIdentity();
    window.addEventListener("storage", syncIdentity);
    window.addEventListener("nexus_user_updated", syncIdentity);
    window.addEventListener("nexus_vip_tickets_updated", syncIdentity);
    window.addEventListener("nexus_credits_updated", syncIdentity);
    window.addEventListener("nexus_unlocked_items_updated", syncIdentity);

    return () => {
      window.removeEventListener("storage", syncIdentity);
      window.removeEventListener("nexus_user_updated", syncIdentity);
      window.removeEventListener("nexus_vip_tickets_updated", syncIdentity);
      window.removeEventListener("nexus_credits_updated", syncIdentity);
      window.removeEventListener("nexus_unlocked_items_updated", syncIdentity);
    };
  }, [userTier]);

  // --------------------------------------------------------------------------
  // 2. FILTRE, VYHĽADÁVANIE A GRID LAYOUT STAV
  // --------------------------------------------------------------------------
  const [activeSubcat, setActiveSubcat] = useState("ALL");
  const [activeTier, setActiveTier] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [layoutView, setLayoutView] = useState("GRID_3"); // GRID_3 | GRID_MEDIUM | LIST
  const [isPacksOpen, setIsPacksOpen] = useState(false); // 1-riadkový Master ZIP Akordeón
  const [isPreFilterOpen, setIsPreFilterOpen] = useState(false);
  const [activeScope, setActiveScope] = useState("ALL");
  const [preFilterTag, setPreFilterTag] = useState("");

  // Detail Modal a Paywall Modal stav
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallCampaign, setPaywallCampaign] = useState(null);

  // Audio Stream Prehrávač Stav (Anti-Piracy Stream)
  const [playingTrackId, setPlayingTrackId] = useState(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef(null);

  // Viewport Floating Tooltip Stav
  const [floatingTooltip, setFloatingTooltip] = useState({
    title: "",
    text: "",
    visible: false,
    x: 0,
    y: 0,
  });

  const handleShowTooltip = (title, text, e) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (e && e.clientX) {
      setFloatingTooltip({
        title,
        text,
        visible: true,
        x: e.clientX + 15,
        y: e.clientY + 15,
      });
    }
  };

  const handleUpdateTooltipPos = (e) => {
    if (floatingTooltip.visible && e && e.clientX) {
      setFloatingTooltip((prev) => ({
        ...prev,
        x: e.clientX + 15,
        y: e.clientY + 15,
      }));
    }
  };

  const handleHideTooltip = () => {
    setFloatingTooltip({ title: "", text: "", visible: false, x: 0, y: 0 });
  };

  const triggerHover = () => {
    if (SoundFX?.hover) SoundFX.hover();
  };
  const triggerClick = () => {
    if (SoundFX?.click) SoundFX.click();
  };
  const triggerSuccess = () => {
    if (SoundFX?.success) SoundFX.success();
  };
  const triggerError = () => SoundFX && SoundFX.error && SoundFX.error();

  // Merge Všetkých Audio Dát
  const allAudioItems = useMemo(() => {
    const combined = [...(SHOP_AUDIO_DATA || [])];
    const uniqueMap = new Map();
    combined.forEach((item) => {
      if (item && item.id) uniqueMap.set(item.id, item);
    });
    return Array.from(uniqueMap.values());
  }, []);

  // --------------------------------------------------------------------------
  // RESTFUL URL SYNC & UNIFIKOVANÝ CANONICAL ROUTING V20 (OS GENESIS)
  // --------------------------------------------------------------------------
  const KNOWN_TIERS = useMemo(
    () => [
      "all",
      "zdarma",
      "free",
      "freemium",
      "pro",
      "promium",
      "omega",
      "omegamium",
      "master",
      "mastermium",
    ],
    [],
  );

  useEffect(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const cleanSegments = parts.filter((p) => p !== "shop");

    let activeCat = "ALL";
    let activeTr = "ALL";
    let activeAudioId = null;

    if (
      Array.isArray(cleanSegments) &&
      cleanSegments.length >= 1 &&
      String(cleanSegments[0] || "").toLowerCase() === "audios"
    ) {
      // 1. Primárny filter (Kategória)
      if (cleanSegments[1]) {
        activeCat = cleanSegments[1];
      }

      // 2. Sekundárny segment (TIER alebo Priamy ID Produktu)
      if (cleanSegments[2]) {
        const seg2Lower = String(cleanSegments[2]).toLowerCase();
        if (KNOWN_TIERS.includes(seg2Lower)) {
          let normTr = seg2Lower.toUpperCase();
          if (normTr === "ZDARMA") normTr = "FREE";
          if (normTr === "PRO") normTr = "PROMIUM";
          if (normTr === "OMEGA") normTr = "OMEGAMIUM";
          if (normTr === "MASTER") normTr = "MASTERMIUM";
          activeTr = normTr;
          if (cleanSegments[3]) {
            activeAudioId = cleanSegments[3];
          }
        } else {
          // cleanSegments je kanonické ID Produktu
          activeAudioId = cleanSegments[2];
        }
      }
    }

    // Fallback z URL search parametrov
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("cat")) activeCat = searchParams.get("cat");
    if (searchParams.get("tier")) activeTr = searchParams.get("tier");
    if (searchParams.get("audio")) activeAudioId = searchParams.get("audio");

    setActiveSubcat(activeCat.toUpperCase() === "ALL" ? "ALL" : activeCat);
    setActiveTier(activeTr.toUpperCase());

    if (activeAudioId) {
      const found = SHOP_AUDIO_DATA.find(
        (a) =>
          a.id.toLowerCase() === activeAudioId.toLowerCase() ||
          a.nodeKey?.toLowerCase() === activeAudioId.toLowerCase(),
      );
      if (found) setSelectedDocId(found.id);
    } else {
      setSelectedDocId(null);
    }
  }, [location.pathname, location.search, KNOWN_TIERS]);

  // Handlery pre zmenu kategórie, TIERu a kanonický detail produktu
  const handleSubcatChange = (newSubcat) => {
    triggerClick();
    const cleanSub = String(newSubcat || "all").toLowerCase();
    const cleanTier = String(activeTier || "all").toLowerCase();
    if (cleanTier !== "all") {
      navigate(`/shop/audios/${cleanSub}/${cleanTier}`);
    } else {
      navigate(`/shop/audios/${cleanSub}`);
    }
  };

  const handleTierChange = (newTier) => {
    triggerClick();
    const cleanSub = String(activeSubcat || "all").toLowerCase();
    const cleanTier = String(newTier || "all").toLowerCase();
    navigate(`/shop/audios/${cleanSub}/${cleanTier}`);
  };

  const handleOpenDetail = (itemOrId) => {
    triggerClick();
    const item =
      typeof itemOrId === "object"
        ? itemOrId
        : SHOP_AUDIO_DATA.find((a) => a.id === itemOrId);
    if (!item) return;

    setSelectedDocId(item.id);
    const cat = String(item.subCategory || activeSubcat || "all").toLowerCase();
    // 👑 Kanonická 1-to-1 URL adresa pre produkt
    navigate(`/shop/audios/${cat}/${item.id}`);
  };

  const handleCloseDetail = () => {
    triggerClick();
    setSelectedDocId(null);
    const cleanSub = String(activeSubcat || "all").toLowerCase();
    const cleanTier = String(activeTier || "all").toLowerCase();
    if (cleanTier !== "all") {
      navigate(`/shop/audios/${cleanSub}/${cleanTier}`);
    } else {
      navigate(`/shop/audios/${cleanSub}`);
    }
  };

  // --------------------------------------------------------------------------
  // 1. FILTROVACÍ KERNEL (STRIKTNÉ TIER POROVNANIE - ELIMINÁCIA "0 oc" PASCE)
  // --------------------------------------------------------------------------
  const filteredAudioItems = useMemo(() => {
    return SHOP_AUDIO_DATA.filter((item) => {
      if (!item) return false;

      // 1. Primárny filter (Kategória)
      if (activeSubcat && String(activeSubcat).toUpperCase() !== "ALL") {
        const itemCat = String(
          item.subCategory || item.category || "",
        ).toLowerCase();
        const targetCat = String(activeSubcat).toLowerCase();
        if (itemCat !== targetCat && !itemCat.includes(targetCat)) return false;
      }

      // 2. Sekundárny filter (Sekcia TIER)
      if (activeTier && String(activeTier).toUpperCase() !== "ALL") {
        const targetTier = String(activeTier).toUpperCase().trim();
        const itemTier = String(item.tier || "")
          .toUpperCase()
          .trim();

        if (targetTier === "FREE" || targetTier === "ZDARMA") {
          const isFreeTier = itemTier === "FREE" || itemTier === "ZDARMA";
          if (!isFreeTier) return false;
        } else if (targetTier === "FREEMIUM") {
          if (itemTier !== "FREEMIUM") return false;
        } else if (targetTier === "PROMIUM" || targetTier === "PRO") {
          if (
            itemTier !== "PROMIUM" &&
            itemTier !== "PRO" &&
            !itemTier.includes("PRO")
          )
            return false;
        } else if (targetTier === "OMEGAMIUM" || targetTier === "OMEGA") {
          if (
            itemTier !== "OMEGAMIUM" &&
            itemTier !== "OMEGA" &&
            !itemTier.includes("OMEGA")
          )
            return false;
        } else if (targetTier === "MASTERMIUM" || targetTier === "MASTER") {
          if (
            itemTier !== "MASTERMIUM" &&
            itemTier !== "MASTER" &&
            !itemTier.includes("MASTER") &&
            !itemTier.includes("ARCHITECT")
          )
            return false;
        }
      }

      // 3. Vyhľadávací text
      if (searchTerm && searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase().trim();
        const titleMatch = String(item.title || "")
          .toLowerCase()
          .includes(query);
        const idMatch = String(item.id || "")
          .toLowerCase()
          .includes(query);
        const descMatch = String(item.scanDetail?.zameranieAPointa || "")
          .toLowerCase()
          .includes(query);
        if (!titleMatch && !idMatch && !descMatch) return false;
      }

      return true;
    });
  }, [activeSubcat, activeTier, searchTerm]);

  // Vybraný Súbor pre Detail Modal
  const selectedDoc = useMemo(() => {
    if (!selectedDocId) return null;
    return (
      allAudioItems.find(
        (a) => a.id === selectedDocId || a.nodeKey === selectedDocId,
      ) || null
    );
  }, [selectedDocId, allAudioItems]);

  // Master ZIP Balíky Dáta
  const masterPacks = useMemo(() => {
    return BALENE_DIGITALNE_DATA || [];
  }, []);

  // --------------------------------------------------------------------------
  // 3. NEPRIESTRELNÝ CHECKER ODOMKNUTIA (BULLETPROOF UNLOCKED DETECTOR)
  // --------------------------------------------------------------------------
  const checkIsUnlocked = (item) => {
    if (!item) return false;

    const isPack =
      item.subCategory === "kt-balene-aktiva" ||
      item.subCategory === "kt-bundled-audio" ||
      String(item.id || "")
        .toUpperCase()
        .startsWith("PACK_") ||
      String(item.category || "").includes("Balené") ||
      item.isPack === true;

    // 1. FREE kontrola (iba ak je cena 0 alebo TIER FREE)
    const isFree =
      item.tier === "FREE" ||
      item.priceOc === 0 ||
      (item.displayPrice && String(item.displayPrice).startsWith("0 OC"));
    if (isFree) return true;

    // 2. React state unlockedItems
    const itemId = String(item.id || "")
      .toLowerCase()
      .trim();
    const itemKey = String(item.nodeKey || "")
      .toLowerCase()
      .trim();

    if (unlockedItems && Array.isArray(unlockedItems)) {
      const matchInState = unlockedItems.some((u) => {
        const clean = String(u || "")
          .toLowerCase()
          .trim();
        const isDirect = clean === itemId || (itemKey && clean === itemKey);
        if (isPack) return isDirect; // 🛡️ PACKY IGNORUJÚ MASTER KEY!
        return (
          isDirect || clean === "nexus_master_key" || clean === "founder_pack"
        );
      });
      if (matchInState) return true;
    }

    // 3. LocalStorage standalone check
    try {
      const savedUnlocked = JSON.parse(
        localStorage.getItem("nexus_unlocked_items") || "[]",
      );
      if (Array.isArray(savedUnlocked)) {
        const matchInLocal = savedUnlocked.some((u) => {
          const clean = String(u || "")
            .toLowerCase()
            .trim();
          const isDirect = clean === itemId || (itemKey && clean === itemKey);
          if (isPack) return isDirect;
          return (
            isDirect || clean === "nexus_master_key" || clean === "founder_pack"
          );
        });
        if (matchInLocal) return true;
      }
    } catch (e) {}

    // 4. LocalStorage active identity check
    try {
      const activeIdentityStr = localStorage.getItem("nexus_active_identity");
      if (activeIdentityStr) {
        const active = JSON.parse(activeIdentityStr);
        const userNodes = Array.isArray(active.unlocked_nodes)
          ? active.unlocked_nodes
          : Array.isArray(active.unlockedNodes)
            ? active.unlockedNodes
            : [];
        const matchInProfile = userNodes.some((u) => {
          const clean = String(u || "")
            .toLowerCase()
            .trim();
          const isDirect = clean === itemId || (itemKey && clean === itemKey);
          if (isPack) return isDirect;
          return (
            isDirect || clean === "nexus_master_key" || clean === "founder_pack"
          );
        });
        if (matchInProfile) return true;
      }
    } catch (e) {}

    // 5. LocalStorage transaction history check (fallback)
    try {
      const historyStr =
        localStorage.getItem("nexus_global_shop_history") ||
        localStorage.getItem("nexus_transaction_history");
      if (historyStr) {
        const txArr = JSON.parse(historyStr);
        if (Array.isArray(txArr)) {
          const matchInTx = txArr.some((tx) => {
            if (!tx) return false;
            const txItem = String(
              tx.item || tx.item_id || tx.asset_id || tx.title || "",
            ).toLowerCase();
            return (
              txItem.includes(itemId) || (itemKey && txItem.includes(itemKey))
            );
          });
          if (matchInTx) return true;
        }
      }
    } catch (e) {}

    return false;
  };

  // --------------------------------------------------------------------------
  // 4. STRICT 3-FAREBNÁ MATICA OPRÁVNENÍ
  // --------------------------------------------------------------------------
  const getItemAccess = (item) => {
    if (!item)
      return {
        status: "LOCKED_OC",
        color: "#FFD700",
        buttonText: "🔒 ZAMKNUTÉ",
      };

    const isPack =
      item.subCategory === "kt-balene-aktiva" ||
      item.subCategory === "kt-bundled-audio" ||
      String(item.id || "")
        .toUpperCase()
        .startsWith("PACK_") ||
      String(item.category || "").includes("Balené") ||
      item.isPack === true;

    // 1. ZELENÁ (#39FF14): Ak je FREE alebo reálne odomknuté priamym nákupom
    const isUnlocked = checkIsUnlocked(item);

    if (isUnlocked) {
      return {
        status: "UNLOCKED",
        color: "#39FF14", // ZELENÁ
        badgeText: "ODOMKNUTÉ",
        buttonText: isPack ? "📦 STIAHNUŤ ZIP" : "🔓 STIAHNUŤ MP3 / ZIP",
        canDownload: true,
        useVip: false,
      };
    }

    // 2. TRETIA FARBA (#BF00FF): Ak je zamknuté A MÁ VIP lístok (LEN PRE KUSOVÉ STOPY, NIE PRE PACKY!)
    if (!isPack && ticketStatus && ticketStatus.available > 0) {
      return {
        status: "VIP_AVAILABLE",
        color: "#BF00FF", // NEÓNOVO FIALOVÁ
        badgeText: `VIP LÍSTOK (${ticketStatus.available}/${ticketStatus.max})`,
        buttonText: `🎫 ODOMKNÚŤ CEZ VIP LÍSTOK (${ticketStatus.available}/${ticketStatus.max})`,
        canDownload: false,
        useVip: true,
      };
    }

    // 3. ŽLTÁ (#FFD700): Ak ide o PACK, alebo sú VIP lístky vyčerpané
    return {
      status: "LOCKED_OC",
      color: "#FFD700", // ŽLTÁ
      badgeText: isPack ? "PACK (OC)" : "ZAMKNUTÉ (OC)",
      buttonText: `🔒 ODOMKNÚŤ ZA ${item.displayPrice || (item.priceOc || 0) + " OC"}`,
      canDownload: false,
      useVip: false,
    };
  };

  // --------------------------------------------------------------------------
  // 5. EXEKÚCIA AKCIÍ (VIP LÍSTOK, ZÁPIS DO LEDGERA & INBOXU, STIAHNUTIE)
  // --------------------------------------------------------------------------
  const handleItemAction = async (item, e) => {
    if (e) e.stopPropagation();
    triggerClick();

    const access = getItemAccess(item);

    // A) Ak je odomknuté -> Priamy Stiahnutie / Open
    if (access.status === "UNLOCKED") {
      triggerSuccess();
      const downloadTarget = item.zipUrl || item.audioUrl || item.mp4Url;
      if (downloadTarget) {
        window.open(downloadTarget, "_blank");
      } else {
        alert(
          `✅ Súbor "${item.title}" je odomknutý doživotne v tvojom profile!`,
        );
      }
      return;
    }

    // B) Ak je k dispozícii VIP Lístok -> Čerpanie Lístka + Zápis do Ledgera & Inboxu & Supabase
    if (access.useVip) {
      if (
        !window.confirm(
          `🎫 Chceš použiť 1 VIP Lístok na odomknutie audio stopy/balíka "${item.title}"? (Zostane ti ${ticketStatus.available - 1} lístkov pre tento mesiac).`,
        )
      ) {
        return;
      }

      try {
        // 1. Strhnutie VIP Lístka
        const newUsed = (ticketStatus.used || 0) + 1;
        localStorage.setItem("nexus_vip_tickets_used_audios", String(newUsed));
        localStorage.setItem(
          "nexus_vip_tickets_month_audios",
          ticketStatus.month,
        );

        // 2. Pridanie do odomknutých uzlov
        const updatedUnlocked = [
          ...new Set([...unlockedItems, item.id, item.nodeKey].filter(Boolean)),
        ];
        setUnlockedItems(updatedUnlocked);
        localStorage.setItem(
          "nexus_unlocked_items",
          JSON.stringify(updatedUnlocked),
        );

        // 3. Vytvorenie unifikovaného Transakčného Záznamu pre Peňaženku (GlobalShopHistory)
        const newTx = {
          id: `TXN-VIP-${Date.now()}`,
          category: "AUDIOS", // Pre filter AUDIOS
          itemType: "AUDIOS",
          item_id: item.id || item.nodeKey,
          item: item.id || item.nodeKey,
          title: `🎫 VIP Odomknutie: ${item.title}`,
          amount_oc: 0,
          price: "1 VIP Lístok", // Nepriestrelný string pre GlobalShopHistory costStr filter
          amount: "1 VIP Lístok",
          type: "VIP_TICKET_USE",
          source: "ShopAudioMedia",
          timestamp: new Date().toISOString(),
        };

        // 3a. Zápis do LocalStorage histories & active identity
        try {
          const rawHistory =
            localStorage.getItem("nexus_global_shop_history") ||
            localStorage.getItem("nexus_transaction_history") ||
            "[]";
          const historyArr = JSON.parse(rawHistory);
          if (Array.isArray(historyArr)) {
            historyArr.unshift(newTx);
            localStorage.setItem(
              "nexus_global_shop_history",
              JSON.stringify(historyArr),
            );
            localStorage.setItem(
              "nexus_transaction_history",
              JSON.stringify(historyArr),
            );
          } else {
            localStorage.setItem(
              "nexus_global_shop_history",
              JSON.stringify([newTx]),
            );
            localStorage.setItem(
              "nexus_transaction_history",
              JSON.stringify([newTx]),
            );
          }
        } catch (e) {
          localStorage.setItem(
            "nexus_global_shop_history",
            JSON.stringify([newTx]),
          );
          localStorage.setItem(
            "nexus_transaction_history",
            JSON.stringify([newTx]),
          );
        }

        try {
          const activeIdentityStr = localStorage.getItem(
            "nexus_active_identity",
          );
          if (activeIdentityStr) {
            const activeIdentity = JSON.parse(activeIdentityStr);
            const curTx = Array.isArray(activeIdentity.transaction_history)
              ? activeIdentity.transaction_history
              : [];
            activeIdentity.transaction_history = [newTx, ...curTx];
            const curUnlocked = Array.isArray(activeIdentity.unlocked_nodes)
              ? activeIdentity.unlocked_nodes
              : [];
            activeIdentity.unlocked_nodes = [
              ...new Set(
                [...curUnlocked, item.id, item.nodeKey].filter(Boolean),
              ),
            ];
            localStorage.setItem(
              "nexus_active_identity",
              JSON.stringify(activeIdentity),
            );
          }
        } catch (e) {}

        // 3b. Zápis do Supabase DB Table (users)
        if (supabase && userEmail && userEmail !== "Hosť") {
          try {
            const { data: profile } = await supabase
              .from("users")
              .select("transaction_history, unlocked_nodes")
              .eq("email", userEmail)
              .single();

            let curTx = [];
            if (profile && profile.transaction_history) {
              if (Array.isArray(profile.transaction_history))
                curTx = profile.transaction_history;
              else if (typeof profile.transaction_history === "string") {
                try {
                  curTx = JSON.parse(profile.transaction_history);
                } catch (e) {}
              }
            }

            let curUnlocked = [];
            if (profile && profile.unlocked_nodes) {
              if (Array.isArray(profile.unlocked_nodes))
                curUnlocked = profile.unlocked_nodes;
              else if (typeof profile.unlocked_nodes === "string") {
                try {
                  curUnlocked = JSON.parse(profile.unlocked_nodes);
                } catch (e) {}
              }
            }

            const updatedTx = [newTx, ...curTx];
            const updatedUnlocked = [
              ...new Set(
                [...curUnlocked, item.id, item.nodeKey].filter(Boolean),
              ),
            ];

            await supabase
              .from("users")
              .update({
                transaction_history: updatedTx,
                unlocked_nodes: updatedUnlocked,
              })
              .eq("email", userEmail);
          } catch (err) {
            console.warn("[SUPABASE_VIP_TX_UPDATE_WARN]:", err);
          }
        }

        // 4. Odoslanie Správy do INBOXU (GlobalMessages) s Defenzívnym Objektom
        try {
          if (
            NexusDB &&
            NexusDB.sendMessage &&
            userEmail &&
            userEmail !== "Hosť"
          ) {
            const activeMail = String(
              userEmail || "dusan.fajnor.codex@gmail.com",
            );
            const senderObj = {
              email: activeMail,
              displayName: activeMail.split("@")[0] || "Operátor",
              avatar: "",
            };
            NexusDB.sendMessage(
              senderObj,
              activeMail,
              `🎫 VIP LÍSTOK POUŽITÝ: ${item.title}

Úspešne ste použili 1 VIP lístok na odomknutie audio stopy/balíka: "${item.title}". Zostávajúce VIP lístky pre tento mesiac: ${ticketStatus.available - 1}/${ticketStatus.max}.`,
            );
          }
        } catch (e) {
          console.warn(
            "[INBOX_NOTIFY_WARNING]: Direct NexusDB.sendMessage completed safely.",
            e,
          );
        }

        // 5. Globálne Eventy pre Reakciu Hlavičky a Peňaženky bez Reloadu
        window.dispatchEvent(new Event("nexus_vip_tickets_updated"));
        window.dispatchEvent(new Event("nexus_user_updated"));
        window.dispatchEvent(new Event("nexus_shop_history_updated"));
        window.dispatchEvent(new Event("nexus_unlocked_items_updated"));
        window.dispatchEvent(new Event("storage"));

        triggerSuccess();
        alert(
          `🎉 VIP Lístok úspešne uplatnený! "${item.title}" bol odomknutý doživotne.`,
        );

        // Priamy download ak existuje URL
        const downloadTarget = item.zipUrl || item.audioUrl || item.mp4Url;
        if (downloadTarget) {
          window.open(downloadTarget, "_blank");
        }
      } catch (err) {
        console.error("[VIP_TICKET_ERROR]:", err);
        triggerError();
      }
      return;
    }

    // C) Ak sú VIP Lístky vyčerpané / FREE Účet -> Otvoriť Paywall Modal za OC Kredity
    setPaywallCampaign({
      id: item.id || item.nodeKey,
      title: item.title,
      category: "AUDIOS", // Striktná sémantická kategória pre zápis do Peňaženky
      itemType: "AUDIOS",
      price: item.displayPrice || `${item.priceOc || 4900} OC`,
      priceOc: item.priceOc || 4900,
      tier: item.tier || "PRO",
      color: access.color,
    });
    setPaywallOpen(true);
  };

  // Callback po úspešnom nákupe cez Paywall Modal
  const handlePaywallSuccess = (purchasedItem) => {
    try {
      const itemId = purchasedItem?.id || paywallCampaign?.id;
      const itemKey = purchasedItem?.nodeKey || paywallCampaign?.nodeKey;
      const updatedUnlocked = [
        ...new Set([...unlockedItems, itemId, itemKey].filter(Boolean)),
      ];
      setUnlockedItems(updatedUnlocked);
      localStorage.setItem(
        "nexus_unlocked_items",
        JSON.stringify(updatedUnlocked),
      );

      window.dispatchEvent(new Event("nexus_unlocked_items_updated"));
      window.dispatchEvent(new Event("nexus_user_updated"));
      window.dispatchEvent(new Event("nexus_shop_history_updated"));
      window.dispatchEvent(new Event("storage"));
    } catch (e) {}
  };

  // --------------------------------------------------------------------------
  // 6. AUDIO STREAM PLAYER CONTROL (Anti-Piracy Stream Engine)
  // --------------------------------------------------------------------------
  const handleToggleAudioPlay = (item, e) => {
    if (e) e.stopPropagation();
    triggerClick();

    const targetUrl = item.audioUrl;
    if (!targetUrl) {
      alert(
        `⚡ Ukážka MP3 stopy "${item.title}" očakáva CDN export. Prehraj si MP4 Signal Video v Detail Modale.`,
      );
      return;
    }

    if (playingTrackId === item.id) {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlayingTrackId(null);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(targetUrl);
      audioRef.current = newAudio;
      setPlayingTrackId(item.id);

      newAudio.play().catch(() => {});
      newAudio.ontimeupdate = () => {
        setAudioProgress(newAudio.currentTime);
        setAudioDuration(newAudio.duration || 0);
      };
      newAudio.onended = () => {
        setPlayingTrackId(null);
        setAudioProgress(0);
      };
    }
  };

  const handleCopyLink = (docId) => {
    triggerSuccess();
    const fullUrl = `${window.location.origin}/shop/audios?audio=${docId}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // --------------------------------------------------------------------------
  // 7. FILTROVACÍ DÁTOVÝ KERNEL (UNIFIKOVANÝ SEPARÁTNY DUAL-FILTER V20)
  // --------------------------------------------------------------------------

  const filteredDocs = useMemo(() => {
    return allAudioItems.filter((item) => {
      if (!item) return false;

      // 1. PRIMÁRNY FILTER: KATEGÓRIA (activeSubcat)
      if (activeSubcat && String(activeSubcat).toUpperCase() !== "ALL") {
        const itemCat = String(
          item.subCategory || item.category || "",
        ).toLowerCase();
        if (!itemCat.includes(String(activeSubcat).toLowerCase())) return false;
      }

      // 2. SEKUNDÁRNY FILTER: TIER (activeTier)
      if (activeTier && String(activeTier).toUpperCase() !== "ALL") {
        const targetTier = String(activeTier).toUpperCase().trim();
        const itemTier = String(item.tier || "FREE")
          .toUpperCase()
          .replace("NEXUS ", "")
          .replace("TIER_", "")
          .trim();
        const priceStr = String(
          item.price || item.priceEur || "",
        ).toLowerCase();

        // Exaktná kontrola nulovej ceny bez false-positive centov
        const isZeroPrice =
          item.ocPrice === 0 ||
          item.priceOc === 0 ||
          item.isFree === true ||
          priceStr === "zdarma" ||
          priceStr.includes("0 oc") ||
          priceStr.includes("0.00 €") ||
          priceStr === "0 €";

        if (targetTier === "ZDARMA" && !isZeroPrice) return false;
        if (targetTier === "FREE" && itemTier !== "FREE") return false;
        if (targetTier === "FREEMIUM" && itemTier !== "FREEMIUM") return false;
        if (
          (targetTier === "PRO" || targetTier === "PROMIUM") &&
          !itemTier.includes("PRO")
        )
          return false;
        if (
          (targetTier === "OMEGA" || targetTier === "OMEGAMIUM") &&
          !itemTier.includes("OMEGA")
        )
          return false;
        if (
          (targetTier === "MASTER" || targetTier === "MASTERMIUM") &&
          !itemTier.includes("MASTER") &&
          !itemTier.includes("ARCHITECT")
        )
          return false;
      }

      // 3. VYHĽADÁVANIE (searchTerm)
      if (searchTerm && searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase().trim();
        const titleMatch = String(item.title || "")
          .toLowerCase()
          .includes(query);
        const idMatch = String(item.id || "")
          .toLowerCase()
          .includes(query);
        const descMatch = String(
          item.scanDetail?.zameranieAPointa || item.spoilerIntro || "",
        )
          .toLowerCase()
          .includes(query);
        if (!titleMatch && !idMatch && !descMatch) return false;
      }

      return true;
    });
  }, [allAudioItems, activeSubcat, activeTier, searchTerm]);

  const filteredItems = filteredDocs || [];

  /**
   * 👑 NEXUS OS: DUAL-STREAM MEDIA ENGINE (V20 KÁNON)
   * Automatický prepínač prehrávačov podľa TIERu a pôvodu dátovej stopy.
   */
  const renderMediaStreamer = (doc) => {
    if (!doc) return null;

    // 1. Defenzívna detekcia FREE / ZDARMA statusu (Strict & Future-Proof)
    const rawTier = String(doc.tier || "")
      .toUpperCase()
      .trim();
    const isFree =
      rawTier === "FREE" ||
      rawTier === "ZDARMA" ||
      doc.isFree === true ||
      doc.priceOc === 0 ||
      doc.ocPrice === 0;

    // 2. Extrakcia priamej čistej Supabase CDN MP4 adresy
    const cleanMp4Url =
      doc.mp4Url ||
      doc.cleanMp4Url ||
      doc.supabaseMp4Url ||
      doc.videoUrl ||
      doc.cleanDeliverable?.downloadUrl ||
      "";

    // 🟢 VETVA A: FREE PRODUKTY -> ČISTÝ NATÍVNY MP4 PREHRÁVAČ ZO SUPABASE CDN (BEZ VODOZNAKOV)
    if (isFree && cleanMp4Url) {
      return (
        <div className="p-5 bg-black/90 border border-[#39FF14]/50 rounded-2xl space-y-3 shadow-[0_0_25px_rgba(57,255,20,0.15)] animate-in fade-in duration-300 font-mono">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="text-xs font-black text-[#39FF14] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
              [ 🟢 SUPABASE PUBLIC CDN // CLEAN MP4 STREAM ]
            </div>
            <span className="text-[9px] px-2.5 py-0.5 rounded bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/40 uppercase font-black tracking-wider">
              100% BEZ REKLÁM & VODOZNAKOV
            </span>
          </div>

          {/* ⚡ NATÍVNY HTML5 PREHRÁVAČ S PLNÝMI OVLÁDACÍMI PRVKAMI */}
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#39FF14]/30 bg-black relative shadow-2xl">
            <video
              key={cleanMp4Url}
              src={cleanMp4Url}
              poster={doc.imageUrl || doc.image}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            >
              Váš prehliadač nepodporuje prehrávanie HTML5 MP4 videa.
            </video>
          </div>

          <div className="text-[10px] text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1 border-t border-white/5">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />⚡
              SUPABASE PUBLIC CDN STREAM | ČISTÝ KOMERČNÝ MASTER
            </span>
            <span className="text-[#39FF14]/80 font-bold">
              Kontejner: MP4 (H.264 / AAC 320 kbps)
            </span>
          </div>
        </div>
      );
    }

    // 🟡 VETVA B: FREEMIUM, PROMIUM, OMEGAMIUM & MASTERMIUM -> YOUTUBE TEASER PREVIEW
    const ytId = doc.youtubeId || "mF0v6VBQlbw";
    const tierColor = getTierColor(doc.tier || "PROMIUM");

    return (
      <div
        className="p-5 bg-black/90 border rounded-2xl space-y-3 shadow-2xl transition-all font-mono"
        style={{ borderColor: `${tierColor}50` }}
      >
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div
            className="text-xs font-black uppercase tracking-widest flex items-center gap-2"
            style={{ color: tierColor }}
          >
            <PlayCircle
              size={16}
              className="animate-pulse"
              style={{ color: tierColor }}
            />
            [ 🎬 YOUTUBE STREAM // PROMO WATERMARKED TEASER ]
          </div>
          <span
            className="text-[9px] px-2.5 py-0.5 rounded border uppercase font-black tracking-wider"
            style={{
              color: tierColor,
              backgroundColor: `${tierColor}15`,
              borderColor: `${tierColor}40`,
            }}
          >
            {doc.tier || "PRODUKT"} PREVIEW
          </span>
        </div>

        {/* ⚡ YOUTUBE IFRAME EMBED PRE PLATENÝ OBSAH */}
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black relative">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1&enablejsapi=1`}
            title={doc.title || "YouTube Promo Teaser"}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="text-[10px] text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1 border-t border-white/5">
          <span className="text-zinc-400 flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: tierColor }}
            />
            ⚡ PROMO STREAM | Pre čistú bezvodoznakovú MP4 stopu odomknite{" "}
            {doc.tier || "TIER"}
          </span>
          <span className="text-zinc-500">Komerčná B2B licencia v balíku</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full text-zinc-300 font-mono pb-32 animate-in fade-in duration-700 selection:bg-[#BF00FF] selection:text-white relative text-left">
      {/* FLOATING TOOLTIP ENGINE */}
      {floatingTooltip.visible && (
        <div
          className="fixed pointer-events-none z-[99999] bg-[#080d12]/95 border border-[#BF00FF]/60 rounded-xl p-3.5 shadow-[0_0_25px_rgba(191,0,255,0.3)] text-left max-w-xs backdrop-blur-xl animate-in fade-in duration-150"
          style={{
            top: `${floatingTooltip.y}px`,
            left: `${floatingTooltip.x}px`,
          }}
        >
          <div className="font-extrabold text-[#BF00FF] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5 border-b border-white/10 pb-1">
            <HelpCircle size={12} /> {floatingTooltip.title}
          </div>
          <div className="text-[10px] text-zinc-300 leading-snug font-mono">
            {floatingTooltip.text}
          </div>
        </div>
      )}

      {/* 🚀 SEO METATAGY */}
      {selectedDoc ? (
        <MetaTags
          title={`NEXUS AUDIO | ${selectedDoc.title}`}
          description={
            selectedDoc.scanDetail?.zameranieAPointa || "Audio Stopa OS Genesis"
          }
          image={selectedDoc.imageUrl || "/img-nexus/pages/ShopAudioMedia.jpg"}
          color={getDimensionColor(selectedDoc.dimension) || "#BF00FF"}
          url={`/shop/audios?audio=${selectedDoc.id}`}
        />
      ) : (
        <MetaTags
          title="NEXUS AUDIO | Focus Tracky, Podcasts & CoDM Soundtracks"
          description="Kompletný sémantický audio register OS Genesis: Focus Backdrops, Terapeutická hudba, Podcasty a CoDM Zombies soundtracks."
          image="/img-nexus/pages/ShopAudioMedia.jpg"
          color="#BF00FF"
          url="/shop/audios"
        />
      )}

      {/* 1. 👑 JEDNOTNÁ MASTER HLAVIČKA A WALLET NAVIGÁCIA */}
      <ShopHeaderComponent
        activeTab="audios"
        onShowTooltip={handleShowTooltip}
        onUpdateTooltipPos={handleUpdateTooltipPos}
        onHideTooltip={handleHideTooltip}
      />

      {/* 2. 👑 VÝHODY ČLENSTVA (SPOILER ACCORDION) */}
      <VyhodyClenstva
        onShowTooltip={handleShowTooltip}
        onUpdateTooltipPos={handleUpdateTooltipPos}
        onHideTooltip={handleHideTooltip}
      />

      {/* 3. ⏳ SHOP PRIPRAVUJEME (SYSTEM STANDBY BANNER) */}
      <ShopPripravujeme
        type="audios"
        handleShowTooltip={handleShowTooltip}
        handleUpdateTooltipPos={handleUpdateTooltipPos}
        handleHideTooltip={handleHideTooltip}
      />

      {/* 5. 🎛️ UNIFIKOVANÉ FILTRAČNÉ CENTRUM V20 */}
      <ShopFilters
        type="audios"
        activeSubcat={activeSubcat}
        activeTier={activeTier}
        onSubcatChange={handleSubcatChange}
        onTierChange={handleTierChange}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        layoutView={layoutView}
        onLayoutChange={setLayoutView}
        onResetFilters={() => {
          triggerClick();
          setActiveSubcat("ALL");
          setActiveTier("ALL");
          setSearchTerm("");
          navigate("/shop/audios/all/all");
        }}
        dataItems={SHOP_AUDIO_DATA}
        onSelectItem={(docId) => handleOpenDetail(docId)}
        handleShowTooltip={handleShowTooltip}
        handleUpdateTooltipPos={handleUpdateTooltipPos}
        handleHideTooltip={handleHideTooltip}
      />

      <ModalPreFilterDrawer
        isOpen={isPreFilterOpen}
        onClose={() => setIsPreFilterOpen(false)}
        items={filteredItems}
        activeScope={activeScope}
        onChangeScope={setActiveScope}
        selectedTag={preFilterTag}
        onSelectTag={setPreFilterTag}
        onResetFilters={() => {
          setActiveScope("ALL");
          setPreFilterTag("");
        }}
      />

      {/* 6. 🎴 PODROBNÝ ZOZNAM / KARTIČKY V MRIEŽKE (GRID 3) */}
      {filteredDocs.length === 0 ? (
        <div className="bg-[#050A0E] border border-red-500/30 p-12 rounded-2xl text-center flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300 my-8">
          <Activity size={48} className="text-red-500 animate-pulse" />
          <div className="text-lg font-bold text-white tracking-widest uppercase">
            ŽIADNA AUDIO STOPA NENÁJDENÁ
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-mono">
            Skontroluj zadatý text vo vyhľadávaní alebo resetuj filtre kategórií
            a TIER úrovní.
          </p>
          <button
            onClick={() => {
              triggerClick();
              setSearchTerm("");
              setActiveSubcat("ALL");
            }}
            className="px-6 py-2.5 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-black border border-red-500 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-mono"
          >
            Resetovať Filtre
          </button>
        </div>
      ) : layoutView === "LIST" ? (
        /* 📋 PODROBNÝ ZOZNAM (LIST LAYOUT) */
        <div className="bg-[#050A0E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-6 font-mono">
          <div className="divide-y divide-white/10">
            {filteredDocs.map((item) => {
              const access = getItemAccess(item);
              const tierColor = getTierColor(item.tier);
              const isPlaying = playingTrackId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenDetail(item.id)}
                  className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Visual Art Thumbnail */}
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20 shrink-0 bg-black select-none">
                      <img
                        src={item.imageUrl || "/img-nexus/pages/ShopPage.jpg"}
                        alt={item.title}
                        className="w-full h-full object-cover pointer-events-none"
                        onContextMenu={(e) => e.preventDefault()}
                        onError={(e) => {
                          e.target.src = "/img-nexus/pages/ShopPage.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className="px-2 py-0.5 rounded text-[8px] font-black uppercase border shrink-0"
                          style={{
                            color: tierColor,
                            borderColor: `${tierColor}60`,
                            backgroundColor: `${tierColor}15`,
                          }}
                        >
                          {item.tier}
                        </span>
                        <h4 className="text-xs font-bold text-white group-hover:text-[#BF00FF] transition-colors truncate">
                          {item.title}
                        </h4>
                        {item.duration && (
                          <span className="text-[9px] px-2 py-0.5 rounded bg-black/80 text-zinc-400 border border-white/10 font-mono">
                            ⏱️ {item.duration}
                          </span>
                        )}
                      </div>
                      {item?.subtitle && (
                        <p className="text-[11px] font-mono text-yellow-400/90 italic truncate mb-1">
                          „{String(item.subtitle)}“
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase border border-red-500/40 bg-red-950/60 text-red-300">
                          🎸 {String(item?.genre || "AUDIO")}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-mono border border-neutral-700 bg-neutral-900 text-neutral-400">
                          {String(item?.konceptZvuku || "100x bez spevu")}
                        </span>
                        {item?.vibe && (
                          <span className="text-[9px] font-mono text-cyan-400/80 truncate">
                            ⚡ {String(item.vibe)}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                        {String(item.scanDetail?.zameranieAPointa || "")}
                      </p>
                    </div>
                  </div>

                  {/* Right Actions Bar */}
                  <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                    {/* Sadzba */}
                    <div className="text-right hidden sm:block">
                      <div className="text-[8px] text-zinc-500 uppercase tracking-widest">
                        Sadzba
                      </div>
                      <div
                        className="text-xs font-black"
                        style={{ color: access.color }}
                      >
                        {item.displayPrice || `${item.priceOc || 0} OC`}
                      </div>
                    </div>

                    {/* 3-Color Action Button */}
                    <button
                      onClick={(e) => handleItemAction(item, e)}
                      onMouseEnter={triggerHover}
                      className="px-3.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer border shadow-sm"
                      style={{
                        backgroundColor: `${access.color}20`,
                        color: access.color,
                        borderColor: `${access.color}80`,
                        boxShadow: `0 0 10px ${access.color}20`,
                      }}
                    >
                      {access.buttonText}
                    </button>

                    {/* Detail Button */}
                    <button
                      onClick={() => handleOpenDetail(item.id)}
                      onMouseEnter={triggerHover}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/15 text-zinc-300 border border-white/15 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Eye size={12} /> Detail
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* 🎴 MRIEŽKOVÉ ZOBRAZENIE (GRID 3 / GRID_MEDIUM) WITH MOBILE RESPONSIVE STANDARD */
        <div
          className={`grid gap-6 my-6 ${
            layoutView === "GRID_MEDIUM"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredDocs.map((item) => {
            const access = getItemAccess(item);
            const tierColor = getTierColor(item.tier);
            const dimColor = getDimensionColor(item.dimension);
            const isPlaying = playingTrackId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenDetail(item.id)}
                className="bg-[#050A0E] border rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] cursor-pointer group relative shadow-2xl"
                style={{
                  borderColor: `${access.color}40`,
                  boxShadow: `0 0 20px rgba(0,0,0,0.8)`,
                }}
              >
                {/* Visual Art Header */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-black select-none"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    src={item.imageUrl || "/img-nexus/pages/ShopPage.jpg"}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    onError={(e) => {
                      e.target.src = "/img-nexus/pages/ShopPage.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-transparent to-transparent opacity-90 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
                    <span
                      className="px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border backdrop-blur-md"
                      style={{
                        color: tierColor,
                        backgroundColor: "rgba(5,10,14,0.85)",
                        borderColor: `${tierColor}60`,
                      }}
                    >
                      {item.tier}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border backdrop-blur-md"
                      style={{
                        color: dimColor,
                        backgroundColor: "rgba(5,10,14,0.85)",
                        borderColor: `${dimColor}60`,
                      }}
                    >
                      {item.dimension || "ID09"}
                    </span>
                  </div>

                  {/* Sadzba Badge */}
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span
                      className="px-2 py-0.5 rounded text-[9px] font-black border backdrop-blur-md font-mono"
                      style={{
                        color: access.color,
                        backgroundColor: "rgba(5,10,14,0.85)",
                        borderColor: `${access.color}60`,
                      }}
                    >
                      {item.displayPrice || `${item.priceOc || 0} OC`}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-3 bg-gradient-to-b from-[#050A0E] to-black">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#BF00FF] transition-colors tracking-wide mb-1.5 line-clamp-2">
                      {item.title}
                    </h3>
                    {item?.subtitle && (
                      <p className="text-xs font-mono text-yellow-400/90 italic truncate -mt-0.5 mb-2">
                        „{String(item.subtitle)}“
                      </p>
                    )}
                    <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase border border-red-500/40 bg-red-950/70 text-red-300">
                        🎸 {String(item?.genre || "AUDIO")}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono border border-neutral-800 bg-neutral-900/80 text-neutral-400">
                        {String(item?.konceptZvuku || "100x bez spevu")}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-mono mb-3">
                      {item.scanDetail?.zameranieAPointa ||
                        "Bionická audio stopa OS Genesis."}
                    </p>

                    {/* Informačný Rámec Stopy (Žiadne MP3 zadarmo na exteriéri) */}
                    <div className="p-2 bg-black/60 border border-white/10 rounded-xl flex items-center justify-between gap-2 text-[10px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                          ⏱️ {String(item.duration || "180s")}
                        </span>
                        {item.tier === "FREE" ||
                        item.isFree ||
                        item.priceOc === 0 ? (
                          <span className="px-2 py-0.5 rounded bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/30 font-black flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                            🟢 CLEAN MP4
                          </span>
                        ) : item.youtubeId ? (
                          <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30 font-bold">
                            🎬 YT STREAM
                          </span>
                        ) : null}
                      </div>
                      {item.ipSecurity?.sha256CleanMaster && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/30">
                          🛡️ SHA-256
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Action Row */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => handleItemAction(item, e)}
                      onMouseEnter={triggerHover}
                      className="flex-1 py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                      style={{
                        backgroundColor: `${access.color}20`,
                        color: access.color,
                        border: `1px solid ${access.color}80`,
                        boxShadow: `0 0 10px ${access.color}20`,
                      }}
                    >
                      {access.buttonText}
                    </button>

                    <button
                      onClick={() => handleOpenDetail(item.id)}
                      onMouseEnter={triggerHover}
                      className="py-2 px-3 bg-white/5 hover:bg-white/15 text-zinc-300 border border-white/15 rounded-xl text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <Eye size={12} /> Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 7. 👁️ DETAIL MODAL (KINEMATOGRAFICKÝ MP4 PREHRÁVAČ & 6 SÉMANTICKÝCH OTÁZOK) */}
      {selectedDoc && (
        <div
          onClick={handleCloseDetail}
          style={{ zIndex: 10000 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-hidden animate-in fade-in duration-300 cursor-pointer font-mono text-left"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#050A0E] border-2 rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative cursor-default"
            style={{
              borderColor:
                getDimensionColor(selectedDoc.dimension) || "#BF00FF",
            }}
          >
            {/* Modal Header */}
            <div className="p-5 md:p-6 bg-black/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-xl text-xs font-black uppercase border"
                  style={{
                    color: getTierColor(selectedDoc.tier),
                    borderColor: `${getTierColor(selectedDoc.tier)}60`,
                    backgroundColor: `${getTierColor(selectedDoc.tier)}15`,
                  }}
                >
                  {selectedDoc.tier}
                </span>
                <div>
                  <h2 className="text-base md:text-xl font-extrabold text-white truncate max-w-lg">
                    {selectedDoc.title}
                  </h2>
                  {selectedDoc?.subtitle && (
                    <div className="text-xs font-mono text-yellow-400 italic">
                      „{String(selectedDoc.subtitle)}“
                    </div>
                  )}
                  <div className="text-[10px] text-zinc-500 uppercase mt-0.5">
                    ID: {selectedDoc.id} | {selectedDoc.dimension || "ID09"}
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseDetail}
                onMouseEnter={triggerHover}
                className="p-2 bg-white/5 hover:bg-red-500 text-zinc-400 hover:text-white rounded-xl border border-white/10 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 flex-1 overflow-y-auto custom-scroll">
              {/* 1. ZAMERANIE A POINTA */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-[10px] text-[#BF00FF] font-black uppercase mb-1 flex items-center gap-2 tracking-widest">
                  <Sparkles size={12} /> 1. ZAMERANIE A POINTA
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed font-bold">
                  {selectedDoc.scanDetail?.zameranieAPointa ||
                    selectedDoc.title}
                </p>
                {selectedDoc?.scanDetail?.detailnyPopis && (
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-mono mt-2 pt-2 border-t border-white/5">
                    {String(selectedDoc.scanDetail.detailnyPopis)}
                  </p>
                )}
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-red-950/70 border border-red-500/50 text-red-300 rounded-lg">
                    ŽÁNER: {String(selectedDoc?.genre || "Inštrumentál")}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono bg-neutral-900 border border-neutral-700 text-neutral-300 rounded-lg">
                    KONCEPT:{" "}
                    {String(selectedDoc?.konceptZvuku || "100x bez spevu")}
                  </span>
                  {selectedDoc?.vibe && (
                    <span className="px-2.5 py-1 text-xs font-mono bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 rounded-lg">
                      ⚡ VIBE: {String(selectedDoc.vibe)}
                    </span>
                  )}
                </div>
              </div>

              {/* 🎛️ DUAL-STREAM MEDIA ENGINE (SUPABASE CLEAN vs YOUTUBE TEASER) */}
              {renderMediaStreamer(selectedDoc)}

              {/* 🛡️ 2. DUAL-HASH IP SHIELD (SHA-256 OVERENIE) */}
              {selectedDoc.ipSecurity && (
                <div className="p-4 bg-black/60 border border-green-500/30 rounded-2xl space-y-2">
                  <div className="text-[10px] text-green-400 font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Shield size={13} /> DUAL-HASH IP SHIELD & AUDIT INTEGRITY
                    (SHA-256)
                  </div>
                  <div className="space-y-1.5 text-xs text-zinc-300 font-mono">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-black/50 p-2 rounded-lg border border-white/5">
                      <span className="text-zinc-400 text-[11px]">
                        Čistý Master Hash:
                      </span>
                      <span className="text-green-300 font-black text-[10px] break-all select-all">
                        {String(
                          selectedDoc.ipSecurity.sha256CleanMaster || "N/A",
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] px-1 text-zinc-400">
                      <span>
                        Licencia:{" "}
                        <strong className="text-white">
                          {String(
                            selectedDoc.ipSecurity.licenseTier || "B2B License",
                          )}
                        </strong>
                      </span>
                      <span>
                        Autor:{" "}
                        <strong className="text-white">
                          {String(
                            selectedDoc.ipSecurity.author || "Dušan Fajnor",
                          )}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* 📦 3. ČISTÝ STIAHNUTEĽNÝ ARCHÍV PO ODOMKNUTÍ */}
              {selectedDoc.cleanDeliverable && (
                <div className="p-4 bg-black/60 border border-[#00f3ff]/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#00f3ff]/10 border border-[#00f3ff]/30 rounded-xl text-[#00f3ff]">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#00f3ff] font-black uppercase">
                        Čistý Komerčný Balík
                      </div>
                      <div className="text-xs font-bold text-white break-all">
                        {String(
                          selectedDoc.cleanDeliverable.fileName || "Asset.zip",
                        )}
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        {String(
                          selectedDoc.cleanDeliverable.format || "ZIP Archív",
                        )}{" "}
                        • {selectedDoc.cleanDeliverable.fileSizeMb || 150} MB
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-white/5 text-zinc-300 border border-white/10 shrink-0">
                    ZERO WATERMARK
                  </span>
                </div>
              )}

              {/* 🧠 4. NEUROMARKETINGOVÁ MATRICA OTÁZOK */}
              {selectedDoc.scanDetail && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl space-y-1">
                      <div className="text-[10px] text-green-400 font-black uppercase flex items-center gap-1.5 tracking-widest">
                        <Check size={12} /> ČO ZÍSKAŠ
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {String(selectedDoc.scanDetail.coZiskas || "")}
                      </p>
                    </div>

                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl space-y-1">
                      <div className="text-[10px] text-orange-400 font-black uppercase flex items-center gap-1.5 tracking-widest">
                        <Zap size={12} /> K ČOMU SA TO DÁ POUŽIŤ
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {String(
                          selectedDoc.scanDetail.kCemuSaTotoDaPouzit ||
                            selectedDoc.scanDetail.kComuSaToDaPouzit ||
                            "",
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-black/60 border border-white/10 rounded-2xl space-y-2">
                    <div className="text-[10px] text-purple-400 font-black uppercase flex items-center gap-1.5 tracking-widest">
                      <Layers size={12} /> CIEĽOVÝ PROFIL OPERÁTORA A
                      ORGANIZÁCIE
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-zinc-300 pt-1 font-mono">
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                        <span className="text-[10px] text-zinc-500 uppercase block font-bold">
                          Človek
                        </span>
                        {String(
                          selectedDoc.scanDetail.preAkyTypCloveka ||
                            selectedDoc.scanDetail.preKohoJeToto
                              ?.preAkyTypCloveka ||
                            "",
                        )}
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                        <span className="text-[10px] text-zinc-500 uppercase block font-bold">
                          Typ Ľudí
                        </span>
                        {String(
                          selectedDoc.scanDetail.preAkyTypLudi ||
                            "Hráči, športovci, programátori",
                        )}
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                        <span className="text-[10px] text-zinc-500 uppercase block font-bold">
                          Spoločnosť
                        </span>
                        {String(
                          selectedDoc.scanDetail.preAkyTypSpolocnosti ||
                            selectedDoc.scanDetail.preKohoJeToto
                              ?.preAkyTypSpolocnosti ||
                            "",
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl space-y-1">
                      <div className="text-[10px] text-yellow-400 font-black uppercase flex items-center gap-1.5 tracking-widest">
                        <Radio size={12} /> AKO TO FUNGUJE
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                        {String(selectedDoc.scanDetail.akoToFunguje || "")}
                      </p>
                    </div>

                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl space-y-1">
                      <div className="text-[10px] text-amber-400 font-black uppercase flex items-center gap-1.5 tracking-widest">
                        <Terminal size={12} /> AKO OVERIŤ SHA-256
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                        {String(
                          selectedDoc.scanDetail.akoOveritSha256 ||
                            "Vo Windows stlač Win+R -> powershell -> Get-FileHash [Subor] -Algorithm SHA256",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ⚙️ 5. NEXUS AGENCY: 5 FÁZ // 20 AUDÍTOVANÝCH ÚKONOV */}
              {selectedDoc.phases && selectedDoc.phases.length > 0 && (
                <div className="p-4 bg-black/60 border border-white/10 rounded-2xl space-y-3 font-mono">
                  <div className="text-[10px] text-zinc-400 font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Layers size={13} className="text-[#00f3ff]" />
                    PROCES EXEKÚCIE: 5 FÁZ // 20 AUDÍTOVANÝCH ÚKONOV
                  </div>
                  <div className="space-y-2">
                    {selectedDoc.phases.map((phase) => (
                      <details
                        key={phase.phaseId}
                        className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-colors"
                      >
                        <summary className="p-3 text-xs font-bold text-white hover:text-[#00f3ff] cursor-pointer flex items-center justify-between select-none list-none">
                          <span className="flex items-center gap-2">
                            <span className="text-[#00f3ff] text-[10px] font-black">
                              [{phase.phaseId}/5]
                            </span>
                            {String(phase.title || "")}
                          </span>
                          <span className="text-zinc-500 group-open:rotate-180 transition-transform text-xs">
                            ▼
                          </span>
                        </summary>
                        <div className="p-3 pt-0 space-y-1.5 border-t border-white/5 bg-black/40">
                          {phase.steps.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="text-[11px] text-zinc-300 flex items-start gap-2"
                            >
                              <span className="text-green-400 shrink-0 font-bold">
                                ✓
                              </span>
                              <span>{String(step || "")}</span>
                            </div>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="p-6 bg-black border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Sadzba Audio Stopy
                  </div>
                  <div
                    className="text-xl font-black"
                    style={{ color: getItemAccess(selectedDoc).color }}
                  >
                    {selectedDoc.displayPrice ||
                      `${selectedDoc.priceOc || 0} OC`}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                  {/* 1. Kopírovať Link */}
                  <button
                    onClick={() => handleCopyLink(selectedDoc.id)}
                    onMouseEnter={triggerHover}
                    className="px-4 py-2.5 bg-white/5 hover:bg-white/15 text-white border border-white/15 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedLink ? (
                      <Check size={14} className="text-green-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                    {copiedLink ? "Link Skopírovaný!" : "Kopírovať Link"}
                  </button>

                  {selectedDoc?.socialPosts && (
                    <button
                      onClick={() => {
                        triggerClick();
                        const post =
                          selectedDoc.socialPosts.longPost ||
                          selectedDoc.socialPosts.shortPost;
                        const payload = `${String(post?.title || "")}\n\n${String(post?.description || "")}\n\n${String(post?.hashtags || "")}\n\n${String(post?.shopLink || "")}`;
                        navigator.clipboard?.writeText(payload);
                      }}
                      onMouseEnter={triggerHover}
                      className="px-4 py-2.5 bg-purple-950/30 hover:bg-purple-900/50 text-purple-300 border border-purple-500/40 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                      title="Kopírovať predpripravený YouTube / TikTok popis"
                    >
                      <Sparkles size={14} className="text-[#BF00FF]" /> YouTube
                      Popis
                    </button>
                  )}

                  {/* 2. Dobiť Kredity (Ko-Fi / Shop Packs) */}
                  <button
                    onClick={() => {
                      triggerClick();
                      navigate("/shop/packs");
                    }}
                    onMouseEnter={triggerHover}
                    className="px-4 py-2.5 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/40 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Zap size={14} /> Dobiť OC Kredity
                  </button>

                  {/* 3. 3-Color Action Button */}
                  <button
                    onClick={(e) => handleItemAction(selectedDoc, e)}
                    onMouseEnter={triggerHover}
                    className="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg border"
                    style={{
                      backgroundColor: `${getItemAccess(selectedDoc).color}20`,
                      color: getItemAccess(selectedDoc).color,
                      borderColor: `${getItemAccess(selectedDoc).color}80`,
                      boxShadow: `0 0 15px ${getItemAccess(selectedDoc).color}30`,
                    }}
                  >
                    {getItemAccess(selectedDoc).buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. GLOBAL PAYWALL MODAL */}
      <GlobalPaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        onSuccess={handlePaywallSuccess}
        campaign={paywallCampaign}
        userBalance={balance}
        userTier={userTier}
        requiredTier={paywallCampaign?.tier || "FREE"}
      />
    </div>
  );
};

export default ShopAudioMedia;
