import { GlobalMediaPlayer } from "@shared/components/GlobalMediaPlayer.jsx";
// ============================================================================
// 6. SYSTÉMOVÉ & SEO KOMPONENTY
// ============================================================================
import { MetaTags } from "@shared/components/MetaTags.jsx";
import { getTooltip, TOOLTIP_CONFIG } from "@shared/data/TooltipsShop.js";
// ============================================================================
// 4. BACKEND & SERVISY (SUPABASE / DB)
// ============================================================================
import { supabase } from "@shared/services/NexusDB_Supabase.js";
// ============================================================================
// 3. UTILS & ENGINE (ZVUK / EFEKTY)
// ============================================================================
import { SoundFX } from "@shared/utils/SoundEngine.js";
// --- Modály, Peňaženka, História & Paywall ---
import GlobalCashflow from "@shop/components/GlobalCashflow.jsx";
import GlobalPaywallModal from "@shop/components/GlobalPaywallModal.jsx";
// ============================================================================
// 7. NEXUS SHOP ECOSYSTEM (src/components/shop/)
// ============================================================================
// --- Hlavička, Navigácia & Filtre ---
import ModalPreFilterDrawer from "@shop/components/ModalPreFilterDrawer.jsx";
// --- Súrodenci a Médiá Obchodu ---
import ShopAppsMedia from "@shop/components/ShopAppsMedia.jsx";
import ShopAudioMedia from "@shop/components/ShopAudioMedia.jsx";
import ShopDocumentsMedia from "@shop/components/ShopDocumentsMedia.jsx";
import ShopFilters from "@shop/components/ShopFilters.jsx";
import ShopHeaderComponent, {
  SHOP_NAV_TABS,
} from "@shop/components/ShopHeaderComponent.jsx";
import ShopImageMedia from "@shop/components/ShopImageMedia.jsx";
import ShopVideoMedia from "@shop/components/ShopVideoMedia.jsx";
// --- VIP Vstupenky & Členstvo ---
import VyhodyClenstva from "@shop/components/Vyhody-Clenstva.jsx";
import { Zmenaren } from "@shop/components/Zmenaren.jsx";
// ============================================================================
// 5. DÁTOVÉ REGISTRE & TOOLTIPY
// ============================================================================
import { getTierColor, SHOP_CAMPAIGN_DATA } from "@shop/data/ShopPage.js";
// ============================================================================
// 2. UI IKONY (LUCIDE-REACT)
// ============================================================================
import {
  Activity,
  CheckCircle2,
  Copy,
  Cpu,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Folder,
  HelpCircle,
  Image as ImageIcon,
  Info,
  Layers,
  Music,
  PlayCircle,
  Shield,
  ShoppingBag,
  Sparkles,
  Terminal,
  Video,
  X,
  Zap,
} from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 1. CORE REACT & ROUTER HOOKS
// ============================================================================
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ============================================================================
// 👑 NEXUS OS: SHOP PAGE MASTER COMPONENT V20.80
// File: src/pages/ShopPage.jsx
// Status: 100% GROUNDED // 3S MYSTERY RADAR SCANNER // CATEGORY ROUTING MEMORY
// ============================================================================

const VALID_TABS = ["shop", "videos", "audios", "images", "documents"];
const VALID_SUBCATS = [
  "all",
  "membership",
  "packs",
  "matrix_fx",
  
  "zmenaren",
  "cashflow",
];
const VALID_TIERS = [
  "ALL",
  "FREE",
  "FREEMIUM",
  "PRO",
  "PROMIUM",
  "OMEGA",
  "OMEGAMIUM",
  "MASTER",
  "MASTERMIUM",
];

// 1. Defenzívny Normalizátor Záložiek (SSOT)
const normalizeTab = (tab) => {
  if (!tab || typeof tab !== "string") return "shop";
  const t = tab.toLowerCase().trim();
  if (t === "video" || t === "videos") return "videos";
  if (t === "audio" || t === "audios") return "audios";
  if (t === "image" || t === "images") return "images";
  if (t === "document" || t === "documents") return "documents";
  if (t === "app" || t === "apps") return "apps";
  return "shop";
};

export const ShopPage = ({
  onThemeChange,
  setThemeColor,
  userState,
  getTierColor = (tier) => "#FFD700", // Default Kybernetická Zlatá
  themeColor = "#FFD700",
  setActiveTab: setGlobalActiveTab,
}) => {
  // 🛡️ Defenzívny garant funkčnosti pre mapovacie slučky
  const safeGetTierColor =
    typeof getTierColor === "function" ? getTierColor : (t) => "#FFD700";
  const navigate = useNavigate();
  const location = useLocation();

  // 🎯 Kánonická Zlatá farba pre Shop Mainframe (#FFD700)
  useEffect(() => {
    const triggerTheme = onThemeChange || setThemeColor;
    if (typeof triggerTheme === "function") {
      triggerTheme("#FFD700");
    }
  }, [onThemeChange, setThemeColor]);

 // --- TAB & SUBCATEGORY STATES (PURE REACT STATE) ---
  const [activeTab, setActiveTab] = useState("shop");
  const [activeSubcat, setActiveSubcat] = useState("all");

  // --- LOCAL STATES ---
  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState("ALL");
  const [serviceGroupFilter, setServiceGroupFilter] = useState("ALL");
  const [isPreFilterOpen, setIsPreFilterOpen] = useState(false);
  const [preFilterTag, setPreFilterTag] = useState("");
  const [layoutView, setLayoutView] = useState("GRID_3"); // GRID_1 | GRID_3 | GRID_MEDIUM | LIST
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);

  // Paywall & User State
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallCampaign, setPaywallCampaign] = useState(null);
  const [balance, setBalance] = useState(0);
  const [userTier, setUserTier] = useState("FREE");
  const [userEmail, setUserEmail] = useState("");
  const [unlockedNodes, setUnlockedNodes] = useState([]);

  // Viewport Floating Tooltip State & 3s Mystery Scanner Ref

  const scanTimerRef = useRef(null);
  const [floatingTooltip, setFloatingTooltip] = useState({
    title: "",
    text: "",
    visible: false,
    isScanning: false,
    x: 0,
    y: 0,
  });

  // Sound triggers
  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();

  // Defensive Helper Function for Clean Titles
  const getCleanTitle = (title) => {
    if (!title) return "";
    const str = String(title);
    const parts = str.split("(");
    return parts[0] ? parts[0].trim() : str;
  };

  const handleShowTooltip = (titleOrKey, textOrEvent, eParam) => {
    let actualTitle = titleOrKey;
    let actualText = textOrEvent;
    let e = eParam;

    // 🛡️ Ak 2. argument prišiel ako SyntheticEvent (napr. z Hlavičky: showFn(key, e))
    if (
      textOrEvent &&
      typeof textOrEvent === "object" &&
      (textOrEvent._reactName || textOrEvent.nativeEvent)
    ) {
      e = textOrEvent;
      const tooltipData =
        typeof getTooltip === "function" ? getTooltip(titleOrKey) : null;
      if (tooltipData) {
        actualTitle = tooltipData.title || titleOrKey;
        actualText = tooltipData.text || tooltipData.desc || "";
      } else {
        actualText = "";
      }
    }

    if (
      window.innerWidth < 1024 ||
      ("ontouchstart" in window && navigator.maxTouchPoints > 0) ||
      (e && (e.pointerType === "touch" || e.pointerType === "pen"))
    ) {
      return;
    }

    if (typeof triggerHover === "function") triggerHover();
    if (window.innerWidth < 768) return; // Disable floating cursor tooltip on touch screens

    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);

    // Initial 3-second Mystery Scanning State: ONLY Question Mark (❓), NO TEXT!
    setFloatingTooltip({
      title: "",
      text: "",
      visible: true,
      isScanning: true,
      x: e && typeof e.clientX === "number" ? e.clientX + 15 : 100,
      y: e && typeof e.clientY === "number" ? e.clientY + 15 : 100,
    });

    scanTimerRef.current = setTimeout(() => {
      setFloatingTooltip((prev) => ({
        ...prev,
        title: actualTitle || "[ 💡 NEXUS NÁPOVEDA ]",
        text:
          typeof actualText === "string"
            ? actualText
            : "Dátový uzol OS Genesis.",
        isScanning: false,
      }));
    }, TOOLTIP_CONFIG?.SCAN_DELAY_MS || 3000);
  };

  const handleUpdateTooltipPos = (e) => {
    if (floatingTooltip.visible && window.innerWidth >= 768) {
      setFloatingTooltip((prev) => ({
        ...prev,
        x: e.clientX + 15,
        y: e.clientY + 15,
      }));
    }
  };

  const handleHideTooltip = () => {
    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
    setFloatingTooltip((prev) => ({
      ...prev,
      visible: false,
      isScanning: false,
    }));
  };

  // --------------------------------------------------------------------------
  // 🛡️ V20 CANONICAL URL & SESSION SYNC (3-ÚROVŇOVÝ RESOLVER BEZ ARRAY BUGU)
  // --------------------------------------------------------------------------
useEffect(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const partsLower = parts.map((p) => String(p || "").toLowerCase().trim());
    const searchParams = new URLSearchParams(location.search);

    const validTabs = ["shop", "videos", "audios", "images", "documents", "apps"];

    // 1. URČENIE AKTÍVNEHO TABU / SÚRODENCA (napr. /shop/shop/... -> partsLower = "shop")
    let targetTab = searchParams.get("tab") || sessionStorage.getItem("nexus_shop_active_tab") || "shop";
    if (partsLower.length >= 2 && validTabs.includes(partsLower)) {
      targetTab = partsLower;
    }

    // 2. URČENIE SUBKATEGÓRIE (napr. /shop/shop/membership -> partsLower = "membership")
    let targetSubcat = "all";
    if (partsLower.length >= 3 && partsLower) {
      targetSubcat = partsLower;
    } else {
      const catParam = searchParams.get("cat");
      if (catParam) {
        targetSubcat = catParam.toLowerCase().trim();
      } else if (sessionStorage.getItem("nexus_shop_active_subcat")) {
        targetSubcat = sessionStorage.getItem("nexus_shop_active_subcat");
      }
    }

    // 3. URČENIE DETAIL PRODUKTU ID (napr. /shop/shop/membership/CAMP_14 -> parts = "CAMP_14")
    let prodId = null;
    if (parts.length >= 4 && parts) {
      prodId = parts;
    } else {
      prodId = searchParams.get("doc") || searchParams.get("item") || searchParams.get("id");
    }

    // Aplikácia stavov jednorazovo a synchrónne
    setActiveTab(targetTab);
    sessionStorage.setItem("nexus_shop_active_tab", targetTab);

    setActiveSubcat(targetSubcat);
    sessionStorage.setItem("nexus_shop_active_subcat", targetSubcat);

    // Otvorenie Campaign Detail Modalu pre Main Shop
    if (prodId && targetTab === "shop") {
      const cleanProdId = String(prodId || "").toLowerCase().trim();
      const found = Object.values(SHOP_CAMPAIGN_DATA || {}).find(
        (c) =>
          String(c?.id || "").toLowerCase().trim() === cleanProdId ||
          String(c?.nodeKey || "").toLowerCase().trim() === cleanProdId
      );
      if (found) {
        setSelectedCampaign(found);
        setIsDetailOpen(true);
      } else {
        setSelectedCampaign(null);
        setIsDetailOpen(false);
      }
    } else if (targetTab === "shop" && !prodId) {
      setSelectedCampaign(null);
      setIsDetailOpen(false);
    }
  }, [location.pathname, location.search]);

  // Load User Data, Email, Tier & Wallet Balance
  useEffect(() => {
    let currentEmail = "";

    const loadLocalUserData = () => {
      let parsed = null;
      const activeIdentity = localStorage.getItem("nexus_active_identity");

      if (activeIdentity) {
        try {
          parsed = JSON.parse(activeIdentity);
        } catch (e) {}
      }

      // AK JE USER HOSŤ / QUEST / NENÁJDENÝ V APP.JSX -> STRIKTNE 0 OC A FREE TIER
      const isGuest =
        !parsed ||
        !parsed.email ||
        parsed.isGuest ||
        parsed.email === "quest" ||
        parsed.email === "anonymous";

      if (isGuest) {
        setUserEmail("quest");
        setUserTier("FREE");
        setBalance(0);
        setUnlockedNodes([]);
        return; // ⛔ STOP! ŽIADNE FALLBACKY NA KĽÚČE "nexus_credits" A POD.
      }

      // PRE PRIHLÁSENÉHO OPERÁTORA Z APP.JSX
      setUserEmail(parsed.email);
      currentEmail = parsed.email;
      setUserTier(parsed.tier || "FREE");
      setBalance(Number(parsed.credits ?? parsed.balance ?? 0));

      let rawUnlocked = parsed.unlockedNodes || parsed.unlocked_nodes || [];
      if (typeof rawUnlocked === "string") {
        try {
          rawUnlocked = JSON.parse(rawUnlocked);
        } catch (e) {
          rawUnlocked = [];
        }
      }
      setUnlockedNodes(Array.isArray(rawUnlocked) ? rawUnlocked : []);
    };

    // 4. Fetch Live Data from Supabase database
    const fetchLiveUserData = async (emailToFetch) => {
      const email = emailToFetch || currentEmail || userEmail;
      if (!email) return;

      try {
        if (supabase) {
          const { data, error } = await supabase
            .from("users")
            .select("credits, tier, email, unlocked_nodes, transaction_history")
            .eq("email", email)
            .single();

          if (data) {
            if (data.credits !== undefined && data.credits !== null) {
              const liveCreds = Number(data.credits) || 0;
              setBalance(liveCreds);

              // Sync local storage identity so all components stay updated
              const activeId = localStorage.getItem("nexus_active_identity");
              if (activeId) {
                try {
                  const idObj = JSON.parse(activeId);
                  idObj.credits = liveCreds;
                  if (data.tier) idObj.tier = data.tier;
                  localStorage.setItem(
                    "nexus_active_identity",
                    JSON.stringify(idObj),
                  );
                } catch (e) {}
              }
            }
            if (data.tier) setUserTier(data.tier);

            const liveUnlocked = data.unlocked_nodes || [];
            const liveTx = data.transaction_history || [];
            let parsedUnlocked = Array.isArray(liveUnlocked)
              ? liveUnlocked
              : [];
            if (typeof liveUnlocked === "string") {
              try {
                parsedUnlocked = JSON.parse(liveUnlocked);
              } catch (e) {}
            }
            let parsedTx = Array.isArray(liveTx) ? liveTx : [];
            if (typeof liveTx === "string") {
              try {
                parsedTx = JSON.parse(liveTx);
              } catch (e) {}
            }
            const txItems = parsedTx
              .map(
                (t) => t?.item || t?.item_id || t?.asset_id || t?.id || t?.code,
              )
              .filter(Boolean);
            setUnlockedNodes((prev) => [
              ...new Set([...prev, ...parsedUnlocked, ...txItems]),
            ]);
          }
        }
      } catch (e) {
        console.error("Live user fetch error:", e);
      }
    };

    fetchLiveUserData(currentEmail);

    // 5. Subscribe to real-time events & storage changes
    const handleStorageChange = () => {
      loadLocalUserData();
      fetchLiveUserData(currentEmail || userEmail);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("nexus_user_updated", handleStorageChange);
    window.addEventListener("nexus_credits_updated", handleStorageChange);
    window.addEventListener("nexus_identity_changed", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("nexus_user_updated", handleStorageChange);
      window.removeEventListener("nexus_credits_updated", handleStorageChange);
      window.removeEventListener("nexus_identity_changed", handleStorageChange);
    };
  }, []);

  // Body Scroll Lock for Modal and Paywall
  useEffect(() => {
    if ((selectedCampaign && isDetailOpen) || paywallOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCampaign, isDetailOpen, paywallOpen]);

  useEffect(() => {
    const handleTouchOrScroll = () => {
      handleHideTooltip();
    };
    window.addEventListener("touchstart", handleTouchOrScroll, {
      passive: true,
    });
    window.addEventListener("scroll", handleTouchOrScroll, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchOrScroll);
      window.removeEventListener("scroll", handleTouchOrScroll);
    };
  }, []);

  useEffect(() => {
    handleHideTooltip();
  }, [location.pathname, isDetailOpen]);

  // ⚡ HANDLER PRE PREPÍNANIE TABOV
  const handleTabChange = (tabInput) => {
    if (typeof triggerClick === "function") triggerClick();
    if (typeof handleHideTooltip === "function") handleHideTooltip();

    const rawId = typeof tabInput === "object" ? tabInput?.id : tabInput;
    const cleanTab = normalizeTab(rawId);
    setActiveTab(cleanTab);
  };

  // ⚡ HANDLER PRE PREPÍNANIE SUBKATEGÓRIÍ (MEMBERSHIP, PACKS, SERVICES...)
  const handleSubcatChange = (subKey) => {
    if (typeof triggerClick === "function") triggerClick();
    if (typeof handleHideTooltip === "function") handleHideTooltip();

    const cleanSubcat = String(subKey || "all").toLowerCase().trim();
    setActiveSubcat(cleanSubcat);
    setServiceGroupFilter("ALL");
  };

  // ⚡ HANDLER PRE PREPÍNANIE TIER FILTROV (ALL, FREE, PROMIUM...)
  const handleTierChange = (tierKey) => {
    if (typeof triggerClick === "function") triggerClick();
    if (typeof handleHideTooltip === "function") handleHideTooltip();

    const cleanTier = String(tierKey || "ALL").toUpperCase().trim();
    setTierFilter(cleanTier);
  };

  // ⚡ HANDLER PRE OTVORENIE DETAILU PRODUKTU
  const handleOpenCampaignDetail = (camp) => {
    if (typeof triggerClick === "function") triggerClick();
    if (typeof handleHideTooltip === "function") handleHideTooltip();
    setSelectedCampaign(camp);
    setIsDetailOpen(true);
  };

  // ⚡ HANDLER PRE ZATVORENIE DETAILU PRODUKTU
  function handleCloseCampaignDetail() {
    if (typeof triggerClick === "function") triggerClick();
    if (typeof handleHideTooltip === "function") handleHideTooltip();
    setIsDetailOpen(false);
    setSelectedCampaign(null);
  }

  const handleCopyLink = (url) => {
    if (typeof triggerSuccess === "function") triggerSuccess();
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // --- 🔒 STATUS ODOMKNUTIA & LICENCIE ---
  const getUnlockedInfo = (camp) => {
    if (!camp)
      return { isUnlocked: false, label: "ZAMKNUTÝ MODUL", isLifetime: false };

    const cleanUserTier = String(userTier || "FREE")
      .toUpperCase()
      .trim();
    const campTier = String(camp.tier || "FREE")
      .toUpperCase()
      .trim();
    const campId = String(camp.id || "")
      .toLowerCase()
      .trim();
    const campCat = String(camp.category || "")
      .toUpperCase()
      .trim();

    // 0. PACKS a SERVICES sú opakovateľné komerčné balíčky / B2B zákazky (nie trvalé uzly)
    if (campCat === "PACKS") {
      return {
        isUnlocked: false,
        label: "OPAKOVATEĽNÝ NÁKUP",
        isLifetime: false,
      };
    }
    // 1. Bezplatné položky / 0 OC
    if (
      camp.ocPrice === 0 ||
      campTier === "FREE" ||
      camp.price === "0 OC / Zdarma"
    ) {
      return {
        isUnlocked: true,
        label: "ODOMKNUTÝ // BEZPLATNÝ MODUL",
        isLifetime: true,
      };
    }

    // 2. Root Access pre ARCHITECT a MASTER
    if (cleanUserTier === "ARCHITECT" || cleanUserTier === "MASTER") {
      return {
        isUnlocked: true,
        label: "ODOMKNUTÝ // CROWN ROOT ACCESS",
        isLifetime: true,
      };
    }

    // 3. Príprava poľa odomknutých kľúčov
    let safeUnlocked = [];
    if (Array.isArray(unlockedNodes)) {
      safeUnlocked = unlockedNodes;
    } else if (typeof unlockedNodes === "string") {
      try {
        safeUnlocked = JSON.parse(unlockedNodes);
      } catch (e) {
        safeUnlocked = [];
      }
    }

    const unlockedSet = new Set(
      safeUnlocked.map((item) => String(item).toLowerCase().trim()),
    );

    // 4. Špeciálna kontrola pre MATRIX_FX
    if (campCat === "MATRIX_FX") {
      if (
        unlockedSet.has("komp-09-omega-matrix-fx-bundle") ||
        unlockedSet.has("camp_09") ||
        unlockedSet.has("nexus_master_key") ||
        cleanUserTier === "OMEGA"
      ) {
        return {
          isUnlocked: true,
          label: "ODOMKNUTÝ // MATRIX FX BUNDLE",
          isLifetime: true,
        };
      }

      const numCode = campId.replace(/[^0-9]/g, "");
      const isFxUnlocked = Array.from(unlockedSet).some((u) => {
        if (!u) return false;
        if (u === campId) return true;
        if (numCode && (u.includes(numCode) || u.includes(`kampan-${numCode}`)))
          return true;
        return false;
      });

      if (isFxUnlocked) {
        return {
          isUnlocked: true,
          label: "ODOMKNUTÝ // MATRIX FX AKTÍVNY",
          isLifetime: true,
        };
      }
    }

    // 5. Priamy zápis ID v odomknutých uzloch
    if (
      unlockedSet.has(campId) ||
      unlockedSet.has("nexus_master_key") ||
      unlockedSet.has("founder_pack")
    ) {
      return {
        isUnlocked: true,
        label: "ODOMKNUTÝ // TRVALÁ LICENCIA",
        isLifetime: true,
      };
    }

    // 6. Prístup podľa TIER predplatného
    if (campTier === "PRO" && cleanUserTier === "PRO") {
      return {
        isUnlocked: true,
        label: "ODOMKNUTÝ // PRO MEMBERSHIP",
        isLifetime: false,
      };
    }
    if (campTier === "OMEGA" && cleanUserTier === "OMEGA") {
      return {
        isUnlocked: true,
        label: "ODOMKNUTÝ // OMEGA MEMBERSHIP",
        isLifetime: false,
      };
    }

    return { isUnlocked: false, label: "ZAMKNUTÝ MODUL", isLifetime: false };
  };

  // Autocomplete Suggestions
  const autocompleteSuggestions = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    if (!query || query.length < 2) return [];

    return Object.values(SHOP_CAMPAIGN_DATA)
      .filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const idMatch = item.id.toLowerCase().includes(query);
        const categoryMatch = item.category
          ? item.category.toLowerCase().includes(query)
          : false;
        return titleMatch || idMatch || categoryMatch;
      })
      .slice(0, 8);
  }, [searchTerm]);

  const handleSelectAutocomplete = (item) => {
    triggerClick();
    setSearchTerm("");
    setIsAutocompleteOpen(false);
    handleOpenCampaignDetail(item);
  };

  // Filtered Campaigns
  const filteredCampaigns = useMemo(() => {
    const cleanSubcat = String(activeSubcat || "all")
      .toLowerCase()
      .trim();
    const cleanTier = String(tierFilter || "ALL")
      .toUpperCase()
      .trim();

    return Object.entries(SHOP_CAMPAIGN_DATA).filter(([key, camp]) => {
      const campCat = String(camp.category || "")
        .toUpperCase()
        .trim();

      // 1. PRIMÁRNY FILTER KATEGÓRIE (MEMBERSHIP | PACKS | MATRIX_FX | SERVICES)
      if (cleanSubcat === "membership" && campCat !== "MEMBERSHIP")
        return false;
      if (cleanSubcat === "packs" && campCat !== "PACKS") return false;
      if (cleanSubcat === "matrix_fx" && campCat !== "MATRIX_FX") return false;
      if (cleanSubcat === "services") {
        if (campCat !== "SERVICES") return false;
        if (
          serviceGroupFilter !== "ALL" &&
          camp.serviceGroup !== serviceGroupFilter
        )
          return false;
      }

      // 2. SEKUNDÁRNY TIER FILTER (-MIUM PÁROVANIE FOR ALL CATEGORIES INCLUDING SERVICES)
      if (cleanTier !== "ALL") {
        const itemTier = String(camp.tier || "FREE")
          .toUpperCase()
          .trim();
        if (
          cleanTier === "FREE" &&
          itemTier !== "FREE" &&
          itemTier !== "ZDARMA"
        )
          return false;
        if (cleanTier === "FREEMIUM" && itemTier !== "FREEMIUM") return false;
        if (
          (cleanTier === "PRO" || cleanTier === "PROMIUM") &&
          !itemTier.includes("PRO")
        )
          return false;
        if (
          (cleanTier === "OMEGA" || cleanTier === "OMEGAMIUM") &&
          !itemTier.includes("OMEGA")
        )
          return false;
        if (
          (cleanTier === "MASTER" || cleanTier === "MASTERMIUM") &&
          !itemTier.includes("MASTER") &&
          !itemTier.includes("ARCHITECT")
        )
          return false;
      }

      // 3. TERCIÁRNY SÉMANTICKÝ FILTER Z DRAWERA (100% ZHODA S POČÍTADLOM V DRAWERI)
      if (preFilterTag && preFilterTag.trim()) {
        const detail = camp?.scanDetail || {};
        const sub = detail?.preKohoJeToto || {};
        const norm = (s) =>
          String(s || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        const corpus = norm(
          [
            camp?.title,
            camp?.fullName,
            camp?.category,
            camp?.subCategory,
            camp?.dimension,
            camp?.dimensionTitle,
            detail?.zameranieAPointa,
            detail?.detailnyPopis,
            detail?.detailnyPopisKampane,
            detail?.preKoho,
            detail?.preAkyTypLudi,
            typeof sub === "object" ? sub?.preAkyTypLudi : "",
            detail?.preAkyTypCloveka,
            typeof sub === "object" ? sub?.preAkyTypCloveka : "",
            detail?.preAkyTypSpolocnosti,
            typeof sub === "object" ? sub?.preAkyTypSpolocnosti : "",
            detail?.kCemuSaTotoDaPouzit,
            detail?.kComuSaToDaPouzit,
            detail?.akoToFunguje,
          ]
            .filter(Boolean)
            .join(" "),
        );

        const needle = norm(preFilterTag).trim();
        const escaped = needle.replace(/[.*+?^\${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(^|[^a-z0-9])${escaped}`, "i");
        if (!regex.test(corpus)) return false;
      }

      // 4. FULLTEXT VYHĽADÁVANIE (searchTerm)
      const query = searchTerm.toLowerCase().trim();
      if (!query) return true;

      const titleMatch = camp.title
        ? camp.title.toLowerCase().includes(query)
        : false;
      const idMatch = camp.id ? camp.id.toLowerCase().includes(query) : false;
      const introMatch = camp.spoilerIntro
        ? camp.spoilerIntro.toLowerCase().includes(query)
        : false;

      return titleMatch || idMatch || introMatch;
    });
  }, [searchTerm, tierFilter, activeSubcat, serviceGroupFilter, preFilterTag]);

  // Primary Subcategory Counts (Total & Per Subcategory)
  const subcatCounts = useMemo(() => {
    const counts = {
      all: 0,
      membership: 0,
      packs: 0,
      matrix_fx: 0,
      services: 0,
      zmenaren: 0,
      cashflow: 0,
    };
    Object.values(SHOP_CAMPAIGN_DATA).forEach((c) => {
      counts.all++;
      const cat = String(c.category || "")
        .toUpperCase()
        .trim();
      if (cat === "MEMBERSHIP") counts.membership++;
      else if (cat === "PACKS") counts.packs++;
      else if (cat === "MATRIX_FX") counts.matrix_fx++;
      
    });
    return counts;
  }, []);

  // Tier Counts (Dynamically Filtered By Active Parent Subcategory!)
  const tierCounts = useMemo(() => {
    const counts = {
      ALL: 0,
      FREE: 0,
      FREEMIUM: 0,
      PROMIUM: 0,
      OMEGAMIUM: 0,
      MASTERMIUM: 0,
    };
    Object.values(SHOP_CAMPAIGN_DATA).forEach((c) => {
      const cat = String(c.category || "")
        .toUpperCase()
        .trim();
      if (activeSubcat === "membership" && cat !== "MEMBERSHIP") return;
      if (activeSubcat === "packs" && cat !== "PACKS") return;
      if (activeSubcat === "matrix_fx" && cat !== "MATRIX_FX") return;
      

      counts.ALL++;
      const t = String(c.tier || "FREE")
        .toUpperCase()
        .trim();
      if (t === "FREE" || t === "ZDARMA") counts.FREE++;
      else if (t === "FREEMIUM") counts.FREEMIUM++;
      else if (t.includes("PRO")) counts.PROMIUM++;
      else if (t.includes("OMEGA")) counts.OMEGAMIUM++;
      else if (t.includes("MASTER") || t.includes("ARCHITECT"))
        counts.MASTERMIUM++;
    });
    return counts;
  }, [activeSubcat]);

  const CDN_FALLBACK_IMG =
    "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/pagesMaster/16x9_desktop/homePage-16x9.jpg";

  return (
    <div className="w-full text-zinc-300 font-mono pb-32 animate-in fade-in duration-700 selection:bg-[#FFD700] selection:text-black relative">
      {/* 🚀 SEO & DYNAMICKÉ METATAGY */}
      {selectedCampaign ? (
        <MetaTags
          title={`NEXUS SHOP | ${selectedCampaign.title}`}
          description={
            selectedCampaign.spoilerIntro || "Komerčný produkt OS Genesis"
          }
          image={selectedCampaign.image}
          color={selectedCampaign.color || "#FFD700"}
          url={`/shop/shop/${selectedCampaign.subCategory || "item"}/${selectedCampaign.id}`}
        />
      ) : (
        <MetaTags
          title="NEXUS SHOP | KOMERČNÝ E-SHOP OS GENESIS"
          description="Spravujte Členstvá, OC Kredity, Matrix FX a B2B IT Služby Nexus Agency."
          image="https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/system-standby/system-standby-16-9.jpg"
          color="#FFD700"
          url="/shop/shop"
        />
      )}

      {/* 👑 UNIFIED NEXUS SHOP HEADER COMPONENT (VOĽNE MIMO PODMIENOK TABOV) */}
      <ShopHeaderComponent
        activeTab={String(activeTab || sessionStorage.getItem("nexus_shop_active_tab") || "shop")}
        handleTabClick={(tab) => {
          const rawId = typeof tab === "object" ? tab?.id : tab;
          handleTabChange(rawId);
        }}
        tabConfig={SHOP_NAV_TABS}
        userTier={userTier}
        getTierColor={getTierColor}
        showFn={handleShowTooltip}
        posFn={handleUpdateTooltipPos}
        hideFn={handleHideTooltip}
      />

      <header className="max-w-[1600px] mx-auto px-4 md:px-8 my-8 space-y-6 text-center md:text-left border-b border-white/10 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border"
              style={{
                borderColor: `${themeColor || "#FFD700"}40`,
                backgroundColor: `${themeColor || "#FFD700"}10`,
                color: themeColor || "#FFD700",
              }}
            >
              <ShoppingBag size={14} className="animate-pulse" />
              NEXUS SHOP // COMMERCIAL DIGITAL ASSETS & OC CENTER
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              KOMERČNÉ{" "}
              <span
                style={{
                  color: themeColor || "#FFD700",
                  filter: `drop-shadow(0 0 15px ${themeColor || "#FFD700"}60)`,
                }}
              >
                CENTRUM
              </span>{" "}
              & MEMBERSHIP
            </h1>
            <p className="text-sm text-zinc-400 font-sans leading-relaxed">
              Komerčné jadro OS Genesis. Správa členstiev (PRO, OMEGA, MASTER
              Architekt), nakupovanie OC Kreditných balíkov, aktivácia Matrix FX
              modifikátorov a prístup k digitálnym aktívam 6 súrodencov.
            </p>
          </div>
        </div>
      </header>

      {/* 👑 TAB 1: MAIN SHOP TAB CONTENT (ISOLATED ONLY FOR "shop") */}
      {activeTab === "shop" && (
        <div className="space-y-6">
          {/* Tu beží hlavný Shop: Zmenáreň, Cashflow, Grid produktov, Filtre */}

          <VyhodyClenstva />
          <ShopFilters
            type="shop"
            activeSubcat={activeSubcat}
            activeTier={tierFilter}
            onSubcatChange={handleSubcatChange}
            onTierChange={handleTierChange}
            searchTerm={searchTerm}
            onSearchChange={(s) => setSearchTerm(s)}
            layoutView={layoutView}
            onLayoutChange={(l) => setLayoutView(l)}
            onResetFilters={() => {
              if (typeof triggerClick === "function") triggerClick();
              setSearchTerm("");
              setActiveSubcat("all");
              setTierFilter("ALL");
              sessionStorage.removeItem("nexus_shop_tier_filter");
              sessionStorage.setItem("nexus_shop_active_subcat", "all");
              navigate("/shop/shop/all");
            }}
            dataItems={Object.values(SHOP_CAMPAIGN_DATA)}
            tierCounts={tierCounts}
            onSelectItem={(itemId) => {
              const item = Object.values(SHOP_CAMPAIGN_DATA).find(
                (c) => c.id === itemId,
              );
              if (item) handleOpenCampaignDetail(item);
            }}
            handleShowTooltip={handleShowTooltip}
            handleUpdateTooltipPos={handleUpdateTooltipPos}
            handleHideTooltip={handleHideTooltip}
          />

          {/* 🧠 TERCIÁRNA SÉMANTICKÁ DIAGNOSTIKA (DRAWER SPÚŠŤAČ) */}
          <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              {preFilterTag && (
                <span className="px-3 py-1.5 rounded-xl bg-[#00f3ff]/15 text-[#00f3ff] border border-[#00f3ff]/40 text-xs font-bold flex items-center gap-2">
                  <span>
                    Sémantický filter: <strong>{preFilterTag}</strong>
                  </span>
                  <button
                    onClick={() => setPreFilterTag("")}
                    className="hover:text-white cursor-pointer ml-1 text-sm"
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                triggerClick();
                setIsPreFilterOpen(true);
              }}
              onMouseEnter={(e) =>
                handleShowTooltip(
                  "SÉMANTICKÁ DIAGNOSTIKA",
                  "Otvoriť terciárny sémantický drawer (4x PRE, Vibe, Cieľová skupina)",
                  e,
                )
              }
              onMouseMove={handleUpdateTooltipPos}
              onMouseLeave={handleHideTooltip}
              className="self-end px-4 py-2 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/40 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,243,255,0.2)]"
            >
              <Filter size={13} className="animate-pulse" />
              <span>Sémantická Diagnostika (4x PRE)</span>
              {Boolean(preFilterTag) && (
                <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
              )}
            </button>
          </div>

          {/* SUBCATEGORY CONDITION RENDERER: ZMENÁREŇ / CASHFLOW / CARD GRID */}
          {activeSubcat === "zmenaren" ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Zmenaren />
            </div>
          ) : activeSubcat === "cashflow" ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <GlobalCashflow
                userTier={userTier}
                userEmail={userEmail}
                handleShowTooltip={handleShowTooltip}
                handleUpdateTooltipPos={handleUpdateTooltipPos}
                handleHideTooltip={handleHideTooltip}
              />
            </div>
          ) : filteredCampaigns.length === 0 ? (
            <div className="bg-[#050A0E] border border-red-500/30 p-12 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
              <Activity size={48} className="text-red-500 animate-pulse" />
              <div className="text-lg font-bold text-white tracking-widest uppercase">
                ŽIADNY PRODUKT NENÁJDENÝ
              </div>
              <button
                onClick={() => {
                  triggerClick();
                  setSearchTerm("");
                  setActiveSubcat("all");
                  setTierFilter("ALL");
                }}
                className="px-6 py-2.5 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-black border border-red-500 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Resetovať Filtre
              </button>
            </div>
          ) : layoutView === "LIST" ? (
            /* 📋 PODROBNÝ ZOZNAM (DATABÁZOVÁ TABUĽKA & MOBILNÉ PÁSY) */
            <div className="bg-[#050A0E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* MOBILE LIST STRIPS (< 768px) */}
              <div className="md:hidden divide-y divide-white/10">
                {filteredCampaigns.map(([key, camp]) => {
                  const tierColor = getTierColor(camp.tier);
                  return (
                    <div
                      key={key}
                      className="p-4 flex items-center justify-between gap-3 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={camp.image}
                          alt={camp.title}
                          className="w-12 h-12 rounded-xl object-cover border border-white/20 shrink-0"
                          onError={(e) => {
                            e.target.src = "/img-nexus/pages/ShopPage.jpg";
                          }}
                        />
                        <div className="min-w-0">
                          <div className="font-bold text-white text-xs truncate">
                            {camp.title}
                          </div>
                          <div className="text-[10px] text-zinc-400 flex items-center gap-2">
                            <span>{camp.price}</span>
                            <span style={{ color: tierColor }}>
                              {camp.tier || "FREE"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleOpenCampaignDetail(camp)}
                        className="px-3.5 py-2 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-xl text-[10px] font-black uppercase transition-all shrink-0 cursor-pointer flex items-center gap-1 shadow-md"
                      >
                        <Eye size={12} /> Detail
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* DESKTOP TABLE (≥ 768px) */}
              <table className="hidden md:table w-full text-left text-xs">
                <thead className="bg-black/80 text-[#FFD700] uppercase font-black tracking-wider border-b border-white/10">
                  <tr>
                    <th className="p-4">ID / Kategória</th>
                    <th className="p-4">Titul Položky</th>
                    <th className="p-4">TIER</th>
                    <th className="p-4">Sadzba</th>
                    <th className="p-4 text-right">Akcie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredCampaigns.map(([key, camp]) => {
                    const tierColor = getTierColor(camp.tier);
                    return (
                      <tr
                        key={key}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="p-4 font-bold text-[#00f3ff]">
                          {camp.id}
                          <div className="text-[9px] text-zinc-500 uppercase font-normal">
                            {camp.category}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-white group-hover:text-[#FFD700] transition-colors">
                            {camp.title}
                          </div>
                          <div className="text-[10px] text-zinc-400 truncate max-w-md">
                            {camp.spoilerIntro}
                          </div>
                        </td>
                        <td className="p-4">
                          <span
                            className="px-2 py-0.5 rounded text-[9px] font-black uppercase border"
                            style={{
                              color: tierColor,
                              borderColor: `${tierColor}60`,
                              backgroundColor: `${tierColor}15`,
                            }}
                          >
                            {camp.tier || "FREE"}
                          </span>
                        </td>
                        <td
                          className="p-4 font-bold text-white"
                          style={{ color: camp.color || "#FFD700" }}
                        >
                          {camp.price}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleOpenCampaignDetail(camp)}
                            onMouseEnter={(e) =>
                              handleShowTooltip(
                                "DETAIL",
                                getTooltip("DETAIL"),
                                e,
                              )
                            }
                            onMouseMove={handleUpdateTooltipPos}
                            onMouseLeave={handleHideTooltip}
                            className="px-3 py-1.5 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer inline-flex items-center gap-1"
                          >
                            <Eye size={12} /> Detail
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            /* GRID RENDER (GRID_1 / GRID_3 / GRID_MEDIUM) */
            <div
              className={`grid gap-6 ${
                layoutView === "GRID_1"
                  ? "grid-cols-1"
                  : layoutView === "GRID_MEDIUM"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {filteredCampaigns.map(([key, camp]) => {
                const exactTierColor = getTierColor(camp.tier);
                const cardColor = camp.color || "#FFD700";

                return (
                  <div
                    key={key}
                    className="bg-[#050A0E] border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative"
                    style={{ boxShadow: "0 0 20px rgba(0,0,0,0.8)" }}
                  >
                    {/* TOP IMAGE S BEZPEČNÝM CDN FALLBACKOM */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-black/60">
                      <img
                        src={
                          camp.image ||
                          camp.imageUrl ||
                          (camp.imageFormats && camp.imageFormats.ratio16x9) ||
                          CDN_FALLBACK_IMG
                        }
                        alt={camp.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = CDN_FALLBACK_IMG;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-transparent to-transparent opacity-80" />

                      {/* TIER, CATEGORY & DIMENSION BADGES */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 flex-wrap">
                        {getUnlockedInfo(camp).isUnlocked && (
                          <span className="px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/40 backdrop-blur-md shadow-lg flex items-center gap-1">
                            <CheckCircle2 size={10} /> ODOMKNUTÉ
                          </span>
                        )}
                        <span
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              `${String(camp.tier || "FREE")} TIER`,
                              getTooltip(String(camp.tier || "FREE")),
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border backdrop-blur-md shadow-lg cursor-help"
                          style={{
                            color: exactTierColor,
                            borderColor: `${exactTierColor}60`,
                            backgroundColor: "rgba(5, 10, 14, 0.85)",
                          }}
                        >
                          {String(camp.tier || "FREE")}
                        </span>
                        <span
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              camp.category,
                              getTooltip("BADGE_CATEGORY"),
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="px-2 py-1 rounded-lg text-[9px] font-bold text-zinc-300 bg-black/80 border border-white/10 uppercase cursor-help backdrop-blur-md"
                        >
                          {camp.category}
                        </span>
                        {camp.dimension && (
                          <span
                            onMouseEnter={(e) =>
                              handleShowTooltip(
                                camp.dimensionTitle || camp.dimension,
                                `Kognitívna Dimenzia ${camp.dimension}`,
                                e,
                              )
                            }
                            onMouseMove={handleUpdateTooltipPos}
                            onMouseLeave={handleHideTooltip}
                            className="px-2 py-1 rounded-lg text-[9px] font-black text-[#00f3ff] bg-[#00f3ff]/10 border border-[#00f3ff]/30 uppercase cursor-help backdrop-blur-md"
                          >
                            {camp.dimension}
                          </span>
                        )}
                      </div>

                      {/* FORMÁTOVÉ INDIKÁTORY V PRAVOM HORNOM ROHU */}
                      {camp.imageFormats && (
                        <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
                          {camp.imageFormats.ratio1x1 && (
                            <span className="px-1.5 py-0.5 rounded text-[8px] font-black bg-black/80 text-zinc-400 border border-white/10">
                              1:1
                            </span>
                          )}
                          {camp.imageFormats.ratio9x16 && (
                            <span className="px-1.5 py-0.5 rounded text-[8px] font-black bg-black/80 text-zinc-400 border border-white/10">
                              9:16
                            </span>
                          )}
                          {(camp.imageFormats.zipUrl ||
                            camp.imageFormats.zip) && (
                            <span className="px-1.5 py-0.5 rounded text-[8px] font-black bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30">
                              ZIP
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* CARD BODY CONTENT */}
                    <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] text-[#00f3ff] font-bold tracking-wider">
                            {camp.id}
                          </span>
                          {camp.deliveryTime && (
                            <span className="text-[9px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                              ⏱️ {camp.deliveryTime}
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-extrabold text-white group-hover:text-[#FFD700] transition-colors leading-snug mb-2 line-clamp-2">
                          {camp.title}
                        </h3>
                        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                          {camp.spoilerIntro}
                        </p>
                      </div>

                      {/* PRICE & ACTION BUTTONS */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-[9px] text-zinc-500 uppercase tracking-widest">
                            Sadzba
                          </div>
                          <div
                            className="text-xs font-black"
                            style={{ color: cardColor }}
                          >
                            {camp.price}
                          </div>
                        </div>

                        <button
                          onClick={() => handleOpenCampaignDetail(camp)}
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              "SKENOVAŤ DETAIL",
                              getTooltip("DETAIL"),
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="px-4 py-2 bg-white/5 hover:bg-[#FFD700] text-white hover:text-black border border-white/15 hover:border-[#FFD700] rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
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
        </div>
      )}

      {/* 🔮 CAMPAIGN DETAIL MODAL WITH FULL 6-PART PROTOCOL & 20-STEP PROOF OF PROCESS */}
      {selectedCampaign && isDetailOpen && (
        <div className="fixed inset-0 z-[10000] bg-[#03070A]/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-in fade-in duration-300">
          <div className="bg-[#050A0E] border-2 border-[#FFD700]/60 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto font-mono text-left">
            {/* MODAL HEADER */}
            <div className="p-5 bg-black/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="px-2.5 py-1 rounded-xl text-xs font-black uppercase border"
                  style={{
                    color: getTierColor(selectedCampaign.tier),
                    borderColor: `${getTierColor(selectedCampaign.tier)}60`,
                    backgroundColor: `${getTierColor(selectedCampaign.tier)}15`,
                  }}
                >
                  {String(selectedCampaign.tier || "FREE")}
                </span>
                <div>
                  <h2 className="text-sm md:text-base font-bold text-white tracking-wide">
                    {selectedCampaign.fullName || selectedCampaign.title}
                  </h2>
                  <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-2 flex-wrap pt-0.5">
                    <span className="text-[#00f3ff] font-bold">
                      ID: {selectedCampaign.id}
                    </span>
                    <span>|</span>
                    <span>KATEGÓRIA: {selectedCampaign.category}</span>
                    {selectedCampaign.dimension && (
                      <>
                        <span>|</span>
                        <span className="text-[#FFD700] font-bold">
                          {selectedCampaign.dimensionTitle ||
                            selectedCampaign.dimension}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseCampaignDetail}
                onMouseEnter={(e) =>
                  handleShowTooltip(
                    "ZAVRIEŤ",
                    "Zatvoriť detailný kódex modal",
                    e,
                  )
                }
                onMouseMove={handleUpdateTooltipPos}
                onMouseLeave={handleHideTooltip}
                className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* MODAL BODY CONTENT */}
            <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scroll">
              {/* TOP COVER & ZAMERANIE */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="space-y-3 shrink-0">
                  <div className="aspect-[16/9] md:aspect-square relative rounded-2xl overflow-hidden border border-white/20 bg-black">
                    <img
                      src={
                        selectedCampaign.image ||
                        selectedCampaign.imageUrl ||
                        (selectedCampaign.imageFormats &&
                          selectedCampaign.imageFormats.ratio16x9) ||
                        CDN_FALLBACK_IMG
                      }
                      alt={selectedCampaign.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = CDN_FALLBACK_IMG;
                      }}
                    />
                  </div>

                  {/* FORMÁTOVÉ ODKAZY ZO SUPABASE CDN (16:9, 1:1, 9:16, ZIP) */}
                  {selectedCampaign.imageFormats && (
                    <div className="p-3 bg-black/60 border border-white/10 rounded-xl space-y-2 text-[10px]">
                      <div className="text-[#FFD700] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Folder size={12} /> DOSTUPNÉ FORMÁTY CDN:
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {selectedCampaign.imageFormats.ratio16x9 && (
                          <a
                            href={selectedCampaign.imageFormats.ratio16x9}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded text-center text-zinc-300 hover:text-white transition-colors"
                          >
                            🖥️ 16:9 Desktop
                          </a>
                        )}
                        {selectedCampaign.imageFormats.ratio1x1 && (
                          <a
                            href={selectedCampaign.imageFormats.ratio1x1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded text-center text-zinc-300 hover:text-white transition-colors"
                          >
                            📱 1:1 Feed
                          </a>
                        )}
                        {selectedCampaign.imageFormats.ratio9x16 && (
                          <a
                            href={selectedCampaign.imageFormats.ratio9x16}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded text-center text-zinc-300 hover:text-white transition-colors"
                          >
                            🎬 9:16 Shorts
                          </a>
                        )}
                        {(selectedCampaign.imageFormats.zipUrl ||
                          selectedCampaign.imageFormats.zip) && (
                          <a
                            href={
                              selectedCampaign.imageFormats.zipUrl ||
                              selectedCampaign.imageFormats.zip
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-[#FFD700]/10 hover:bg-[#FFD700]/20 border border-[#FFD700]/30 rounded text-center text-[#FFD700] font-bold transition-colors"
                          >
                            📦 Stiahnuť ZIP
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2 space-y-4">
                  {/* OPERAČNÉ ŠPECIFIKÁCIE (SLA, NÁROČNOSŤ, TOOLS) */}
                  {(selectedCampaign.deliveryTime ||
                    selectedCampaign.difficulty ||
                    selectedCampaign.tools) && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {selectedCampaign.deliveryTime && (
                        <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
                          <div className="text-[9px] text-zinc-500 uppercase">
                            Dodanie
                          </div>
                          <div className="font-bold text-white text-[11px]">
                            {selectedCampaign.deliveryTime}
                          </div>
                        </div>
                      )}
                      {selectedCampaign.difficulty && (
                        <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
                          <div className="text-[9px] text-zinc-500 uppercase">
                            Náročnosť
                          </div>
                          <div className="font-bold text-white text-[11px]">
                            {selectedCampaign.difficulty}
                          </div>
                        </div>
                      )}
                      {selectedCampaign.tools && (
                        <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl col-span-2 sm:col-span-1">
                          <div className="text-[9px] text-zinc-500 uppercase">
                            Technológie
                          </div>
                          <div className="font-bold text-[#00f3ff] text-[11px] truncate">
                            {selectedCampaign.tools}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-[#FFD700] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                      <Sparkles size={12} /> ZAMERANIE A POINTA
                    </div>
                    <p className="text-xs text-zinc-200 leading-relaxed font-bold">
                      {selectedCampaign.scanDetail?.zameranieAPointa ||
                        selectedCampaign.spoilerIntro}
                    </p>
                  </div>

                  {(selectedCampaign.scanDetail?.detailnyPopis ||
                    selectedCampaign.scanDetail?.detailnyPopisKampane) && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="text-[10px] text-[#00f3ff] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                        <Info size={12} /> DETAILNÝ POPIS
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedCampaign.scanDetail.detailnyPopis ||
                          selectedCampaign.scanDetail.detailnyPopisKampane}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 🎬 MP4 VIDEO STANDBY PLAYER BLOCK */}
              <div className="p-4 bg-black/80 border border-[#FFD700]/30 rounded-2xl space-y-3 font-mono">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black text-[#FFD700] uppercase tracking-widest flex items-center gap-2">
                    <PlayCircle
                      size={16}
                      className="text-[#FFD700] animate-pulse"
                    />
                    [ 🎬 MP4 VIDEO PREHĽAD | SYSTEM STANDBY ]
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 uppercase font-bold">
                    AWAITING UPLOAD
                  </span>
                </div>

                <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedCampaign.youtubeId || "mF0v6VBQlbw"}`}
                    title="Video Prehľad System Standby"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>

                <div className="text-[10px] text-zinc-400 flex items-center justify-between pt-1 font-mono">
                  <span>
                    ⚡ SYSTEM STANDBY | AWAITING MP4 VIDEO DATA UPLOADED
                  </span>
                  <span className="text-[#FFD700] font-bold">
                    YOUTUBE / SUPABASE CDN
                  </span>
                </div>
              </div>

              {/* 6-DIELNY SCAN DETAIL PROTOKOL ZO SHOPPAGE.JS */}
              {selectedCampaign.scanDetail && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCampaign.scanDetail.coZiskas && (
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                      <div className="text-[10px] text-green-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <CheckCircle2 size={12} /> ČO ZÍSKAŠ
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedCampaign.scanDetail.coZiskas}
                      </p>
                    </div>
                  )}

                  {selectedCampaign.scanDetail.preKohoJeToto && (
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                      <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Cpu size={12} /> PRE KOHO JE URČENÝ
                      </div>
                      <div className="text-xs text-zinc-300 space-y-1">
                        {selectedCampaign.scanDetail.preKohoJeToto
                          .preAkyTypLudi && (
                          <div>
                            <strong className="text-white">Ľudia:</strong>{" "}
                            {
                              selectedCampaign.scanDetail.preKohoJeToto
                                .preAkyTypLudi
                            }
                          </div>
                        )}
                        {selectedCampaign.scanDetail.preKohoJeToto
                          .preAkyTypCloveka && (
                          <div>
                            <strong className="text-white">Človek:</strong>{" "}
                            {
                              selectedCampaign.scanDetail.preKohoJeToto
                                .preAkyTypCloveka
                            }
                          </div>
                        )}
                        {selectedCampaign.scanDetail.preKohoJeToto
                          .preAkyTypSpolocnosti && (
                          <div>
                            <strong className="text-white">Spoločnosť:</strong>{" "}
                            {
                              selectedCampaign.scanDetail.preKohoJeToto
                                .preAkyTypSpolocnosti
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedCampaign.scanDetail.akoToFunguje && (
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                      <div className="text-[10px] text-yellow-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={12} /> AKO TO FUNGUJE
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedCampaign.scanDetail.akoToFunguje}
                      </p>
                    </div>
                  )}

                  {selectedCampaign.scanDetail.kCemuSaTotoDaPouzit && (
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                      <div className="text-[10px] text-orange-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Terminal size={12} /> K ČEMU SA DÁ POUŽIŤ
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedCampaign.scanDetail.kCemuSaTotoDaPouzit}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 🛡️ PROOF OF PROCESS — 5-FÁZOVÝ & 20-KROKOVÝ EXEKUČNÝ PROTOKOL (PRE IT SLUŽBY) */}
              {selectedCampaign.phases &&
                selectedCampaign.phases.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-[#FFD700] font-black uppercase text-xs tracking-wider">
                      <Layers size={14} className="text-[#FFD700]" />
                      <span>
                        PROOF OF PROCESS // 5-FÁZOVÝ EXEKUČNÝ PROTOKOL (
                        {selectedCampaign.phases.reduce(
                          (acc, p) => acc + (p.steps ? p.steps.length : 0),
                          0,
                        )}{" "}
                        KROKOV)
                      </span>
                    </div>

                    <div className="space-y-4">
                      {selectedCampaign.phases.map((phase, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 bg-black/80 border border-white/10 rounded-2xl space-y-3"
                        >
                          <div className="text-xs font-black text-[#00f3ff] uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
                            <CheckCircle2
                              size={12}
                              className="text-[#00f3ff]"
                            />
                            <span>{phase.title}</span>
                          </div>
                          {phase.steps && phase.steps.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-300">
                              {phase.steps.map((step, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="p-2 bg-white/5 rounded-xl border border-white/5 flex items-start gap-2"
                                >
                                  <span className="text-[#FFD700] font-black shrink-0">
                                    ›
                                  </span>
                                  <span className="leading-snug">{step}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* 🛡️ DUAL-HASH IP SHIELD & DIGITÁLNA INTEGRITA (KÁNON V20) */}
              {selectedCampaign.ipSecurity && (
                <div className="p-4 bg-[#080d12] border border-[#00f3ff]/30 rounded-2xl space-y-3 font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="text-xs font-black text-[#00f3ff] uppercase tracking-wider flex items-center gap-2">
                      <Shield size={14} className="text-[#00f3ff]" />
                      <span>
                        DUAL-HASH IP SHIELD // KRYPTOGRAFICKÝ AUDIT INTEGRITY
                      </span>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/30 uppercase font-black">
                      VERIFIED V20
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px]">
                    <div className="space-y-1">
                      <div className="text-zinc-500 uppercase">
                        Autor & Vydavateľ:
                      </div>
                      <div className="text-zinc-200 font-bold">
                        {selectedCampaign.ipSecurity.author}
                      </div>
                      <div className="text-zinc-400">
                        {selectedCampaign.ipSecurity.publisher}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-zinc-500 uppercase">
                        Licenčná Úroveň:
                      </div>
                      <div className="text-[#FFD700] font-bold">
                        {selectedCampaign.ipSecurity.licenseTier}
                      </div>
                      <div className="text-zinc-400">
                        {selectedCampaign.ipSecurity.copyrightText}
                      </div>
                    </div>
                  </div>

                  {/* SHA-256 KONTROLNÉ SÚČTY */}
                  <div className="space-y-2 pt-2 border-t border-white/5 text-[9px]">
                    {selectedCampaign.ipSecurity.sha256CleanMaster && (
                      <div className="bg-black/60 p-2 rounded-lg border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-zinc-400 font-bold">
                          SHA-256 CLEAN MASTER:
                        </span>
                        <code className="text-[#39FF14] select-all break-all">
                          {selectedCampaign.ipSecurity.sha256CleanMaster}
                        </code>
                      </div>
                    )}
                    {selectedCampaign.ipSecurity.sha256PromoWatermark && (
                      <div className="bg-black/60 p-2 rounded-lg border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-zinc-400 font-bold">
                          SHA-256 WATERMARK:
                        </span>
                        <code className="text-zinc-400 select-all break-all">
                          {selectedCampaign.ipSecurity.sha256PromoWatermark}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ACTION FOOTER */}
              <div className="p-6 bg-black border border-white/10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Sadzba Produktu
                  </div>
                  <div className="text-xl font-black text-[#FFD700]">
                    {selectedCampaign.price}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                  <button
                    onClick={() => handleCopyLink(window.location.href)}
                    onMouseEnter={(e) =>
                      handleShowTooltip(
                        "KOPÍROVAŤ LINK",
                        getTooltip("COPY_LINK"),
                        e,
                      )
                    }
                    onMouseMove={handleUpdateTooltipPos}
                    onMouseLeave={handleHideTooltip}
                    className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Copy size={14} />{" "}
                    {copiedLink
                      ? "Trvalý Odkaz Skopírovaný!"
                      : "Kopírovať Link"}
                  </button>

                  {getUnlockedInfo(selectedCampaign).isUnlocked ? (
                    <button
                      type="button"
                      disabled
                      onMouseEnter={(e) =>
                        handleShowTooltip(
                          "ODOMKNUTÝ MODUL",
                          getUnlockedInfo(selectedCampaign).label,
                          e,
                        )
                      }
                      onMouseMove={handleUpdateTooltipPos}
                      onMouseLeave={handleHideTooltip}
                      className="px-6 py-3 bg-[#080d12] hover:bg-black text-zinc-400 border border-[#39FF14]/40 rounded-xl text-xs font-black uppercase flex items-center gap-2 cursor-not-allowed opacity-90 select-none transition-colors shadow-[0_0_15px_rgba(57,255,20,0.15)]"
                    >
                      <CheckCircle2 size={16} className="text-[#39FF14]" />
                      {getUnlockedInfo(selectedCampaign).label}
                    </button>
                  ) : (
                    <>
                      {selectedCampaign.ocPrice !== null &&
                        selectedCampaign.ocPrice !== undefined && (
                          <button
                            onClick={() => {
                              triggerClick();
                              setPaywallCampaign(selectedCampaign);
                              setPaywallOpen(true);
                            }}
                            onMouseEnter={(e) =>
                              handleShowTooltip(
                                "ODOMKNÚŤ ZA OC",
                                selectedCampaign.ocPrice === 0
                                  ? "Odomknúť tento modul zdarma"
                                  : `Odomknúť za ${(selectedCampaign.ocPrice || 0).toLocaleString("sk-SK")} OC`,
                                e,
                              )
                            }
                            onMouseMove={handleUpdateTooltipPos}
                            onMouseLeave={handleHideTooltip}
                            className="px-6 py-3 bg-[#FFD700] hover:bg-[#FFD700]/80 text-black border border-[#FFD700] rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                          >
                            <Zap size={14} />{" "}
                            {selectedCampaign.ocPrice === 0
                              ? "ODOMKNÚŤ ZDARMA"
                              : `Odomknúť za ${(selectedCampaign.ocPrice || 0).toLocaleString("sk-SK")} OC`}
                          </button>
                        )}

                      {selectedCampaign.category !== "MATRIX_FX" && (
                        <a
                          href={
                            selectedCampaign.category === "MEMBERSHIP"
                              ? "https://ko-fi.com/cybertech_architect/tiers"
                              : selectedCampaign.kofiLink ||
                                "https://ko-fi.com/cybertech_architect/shop"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              selectedCampaign.category === "PACKS"
                                ? `KÚPIŤ ${selectedCampaign.title}`
                                : selectedCampaign.category === "MEMBERSHIP"
                                  ? "KÚPIŤ ČLENSTVO"
                                  : "OBJEDNAŤ SLUŽBU",
                              `Aktivovať cez Ko-fi platobnú bránu v EUR (${selectedCampaign.price})`,
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="px-6 py-3 bg-[#00f3ff] hover:bg-[#00f3ff]/80 text-black border border-[#00f3ff] rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                        >
                          <ExternalLink size={14} />{" "}
                          {selectedCampaign.category === "PACKS"
                            ? `KÚPIŤ ${String(selectedCampaign.title || "")
                                .split("(")[0]
                                ?.trim()} (${selectedCampaign.price})`
                            : selectedCampaign.category === "MEMBERSHIP"
                              ? `Kúpiť Členstvo (${selectedCampaign.price})`
                              : `Objednať Službu (${selectedCampaign.price})`}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 👑 GLOBAL PAYWALL MODAL */}
      {paywallOpen && (
        <GlobalPaywallModal
          isOpen={paywallOpen}
          onClose={() => setPaywallOpen(false)}
          campaign={paywallCampaign}
          userBalance={balance}
          userTier={userTier}
          requiredTier={paywallCampaign?.tier || "FREE"}
        />
      )}

      {/* 👑 MODAL PRE-FILTER DRAWER */}
      <ModalPreFilterDrawer
        isOpen={isPreFilterOpen}
        onClose={() => setIsPreFilterOpen(false)}
        items={Object.values(SHOP_CAMPAIGN_DATA)}
        selectedTag={preFilterTag}
        onSelectTag={(tag) => {
          setPreFilterTag(tag);
          if (tag) {
            setActiveSubcat("all");
            setTierFilter("ALL");
            sessionStorage.setItem("nexus_shop_active_subcat", "all");
            sessionStorage.setItem("nexus_shop_active_tier", "ALL");
            navigate("/shop/shop/all");
          }
        }}
        onResetFilters={() => setPreFilterTag("")}
      />

      {/* 👑 TAB 2-6: SÚRODENCI S INJEKTOVANÝMI PROPS PRE BEZCHYBNÝ RE-ROUTING A NÁVRAT */}
      {(activeTab === "videos" || activeTab === "video") && (
        <ShopVideoMedia
          setActiveTab={handleTabChange}
          activeTab={activeTab}
          userState={userState}
        />
      )}
      {(activeTab === "audios" || activeTab === "audio") && (
        <ShopAudioMedia
          setActiveTab={handleTabChange}
          activeTab={activeTab}
          userState={userState}
        />
      )}
      {(activeTab === "images" || activeTab === "image") && (
        <ShopImageMedia
          setActiveTab={handleTabChange}
          activeTab={activeTab}
          userState={userState}
        />
      )}
      {(activeTab === "documents" || activeTab === "document") && (
        <ShopDocumentsMedia
          setActiveTab={handleTabChange}
          activeTab={activeTab}
          userState={userState}
        />
      )}
      {(activeTab === "apps" || activeTab === "app") && (
        <ShopAppsMedia
          setActiveTab={handleTabChange}
          activeTab={activeTab}
          userState={userState}
        />
      )}

      {/* 🔮 VIEWPORT FLOATING TOOLTIP CONTAINER WITH INLINE Z-INDEX */}
      {floatingTooltip && floatingTooltip.visible && (
        <div
          className={`fixed pointer-events-none rounded-xl border font-mono text-xs shadow-2xl backdrop-blur-xl transition-all duration-75 ${
            floatingTooltip.isScanning
              ? "bg-[#080d12] border-[#00f3ff] text-[#00f3ff] shadow-[0_0_25px_rgba(0,243,255,0.6)] animate-pulse p-2.5 opacity-100"
              : "bg-[#080d12] border-[#FFD700] text-zinc-100 shadow-[0_10px_35px_rgba(0,0,0,0.95)] max-w-xs p-3.5 opacity-100"
          }`}
          style={{
            zIndex: 99999,
            left: `${Math.min(Math.max(floatingTooltip.x + 15, 10), window.innerWidth - 320)}px`,
            top: `${
              floatingTooltip.y < 220
                ? floatingTooltip.y + 25
                : Math.max(10, floatingTooltip.y - 85)
            }px`,
          }}
        >
          {floatingTooltip.isScanning ? (
            <div className="flex items-center gap-1.5 text-[#00f3ff] font-black text-xs">
              <HelpCircle size={14} className="animate-spin text-[#00f3ff]" />
              <span>❓</span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 font-black uppercase text-[11px] mb-1 tracking-wider border-b border-white/10 pb-1 text-[#FFD700]">
                <HelpCircle size={12} /> {floatingTooltip.title}
              </div>
              <div className="text-[10px] text-zinc-300 leading-snug font-mono">
                {floatingTooltip.text || floatingTooltip.desc}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
