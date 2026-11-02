/* eslint-disable no-undef */
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Grid3X3,
  Grid,
  List,
  Activity,
  Folder,
  Eye,
  X,
  Zap,
  Copy,
  Share2,
  Sparkles,
  Check,
  Info,
  Shield,
  CheckCircle2,
  Cpu,
  Terminal,
  Laptop,
  Smartphone,
  Globe,
  ExternalLink,
  Download,
  PlayCircle,
  HelpCircle,
  Crown,
  Lock,
  Unlock,
  ArrowRight,
  RefreshCw,
  Layers,
  Filter,
} from "lucide-react";

import { SoundFX } from "@shared/utils/SoundEngine";
import {
  SHOP_APPS_DATA,
  APPS_CATEGORY_MAP,
  APPS_CATEGORY_TOOLTIPS,
  TIER_COLOR_MAP,
  getTierColor,
  getDimensionColor,
} from "../data/ShopAppsMedia";
import { GlobalPaywallModal } from "./GlobalPaywallModal";
import { MetaTags } from "../MetaTags";
import { VyhodyClenstva } from "./Vyhody-Clenstva";
import { ShopHeaderComponent } from "./ShopHeaderComponent";
import { ShopPripravujeme } from "./ShopPripravujeme";
import { ShopFilters } from "./ShopFilters";
import { ModalPreFilterDrawer } from "./ModalPreFilterDrawer";

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP APPS MEDIA V20.8)
// File: src/components/ShopAppsMedia.jsx
// Status: 100% GROUNDED // 6TH SIBLING // UNLOCKED PREORDERS & LOCKED ZIP DOWNLOAD
// ============================================================================

export const ShopAppsMedia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scanTimerRef = useRef(null);

  // --- COMPONENT STATES ---
  const [activeSubcat, setActiveSubcat] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [layoutView, setLayoutView] = useState("GRID_3"); // GRID_3 | GRID_MEDIUM | LIST
  const [tierFilter, setTierFilter] = useState("ALL");
  const [isPreFilterOpen, setIsPreFilterOpen] = useState(false);
  const [preFilterTag, setPreFilterTag] = useState("");
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Paywall Modal State
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallCampaign, setPaywallCampaign] = useState(null);

  // User Balance, Tier & Identity
  const [userBalance, setUserBalance] = useState(0);
  const [userTier, setUserTier] = useState("FREE");
  const [userEmail, setUserEmail] = useState("");
  const [unlockedNodes, setUnlockedNodes] = useState([]);

  // Viewport Floating Tooltip State (3S Mystery Radar Scanner V20)
  const [floatingTooltip, setFloatingTooltip] = useState({
    title: "",
    text: "",
    visible: false,
    isScanning: false,
    x: 0,
    y: 0,
  });

  // Sound Triggers
  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();
  const triggerError = () => SoundFX && SoundFX.error && SoundFX.error();

  // Load User Identity, Credits & Unlocked Nodes from localStorage
  useEffect(() => {
    let currentEmail = "";

    const loadUserData = () => {
      try {
        const isQuest =
          localStorage.getItem("nexus_quest_mode") === "true" ||
          localStorage.getItem("nexus_guest_mode") === "true" ||
          sessionStorage.getItem("nexus_quest_mode") === "true" ||
          localStorage.getItem("nexus_mode") === "quest" ||
          localStorage.getItem("nexus_mode") === "guest";

        if (isQuest) {
          setUserEmail("Hosť");
          setUserBalance(0);
          setUserTier("FREE");
          setUnlockedNodes([]);
          return; // STOP: Ak je Quest, nepokračuj v čítaní operátora!
        }
        let parsed = null;
        const activeId = localStorage.getItem("nexus_active_identity");
        if (activeId) {
          try {
            parsed = JSON.parse(activeId);
          } catch (e) {}
        }
        const isGuestEntity =
          !parsed ||
          !parsed.email ||
          parsed.isGuest ||
          parsed.email === "Hosť" ||
          parsed.email === "quest" ||
          parsed.email === "anonymous" ||
          !String(parsed.email).includes("@");

        if (isGuestEntity) {
          setUserEmail("Hosť");
          setUserBalance(0);
          setUserTier("FREE");
          setUnlockedNodes([]);
          return; // ⛔ STOP: Pre Hosťa nepokračujeme v čítaní uzlov ani fallbackov na disk
        }
        if (!parsed || !parsed.email) {
          const altUser =
            localStorage.getItem("nexus_user") ||
            localStorage.getItem("nexus_active_user");
          if (altUser) {
            try {
              parsed = JSON.parse(altUser);
            } catch (e) {}
          }
        }

        if (parsed) {
          if (parsed.email) {
            setUserEmail(parsed.email);
            currentEmail = parsed.email;
          }
          if (parsed.tier) setUserTier(parsed.tier);

          const creds =
            parsed.credits ??
            parsed.ocCredits ??
            parsed.oc_credits ??
            parsed.balance;
          if (creds !== undefined && creds !== null)
            setUserBalance(Number(creds) || 0);

          let rawUnlocked = parsed.unlockedNodes || parsed.unlocked_nodes || [];
          let rawTx =
            parsed.transaction_history || parsed.transactionHistory || [];

          if (typeof rawUnlocked === "string") {
            try {
              rawUnlocked = JSON.parse(rawUnlocked);
            } catch (e) {
              rawUnlocked = [];
            }
          }
          if (typeof rawTx === "string") {
            try {
              rawTx = JSON.parse(rawTx);
            } catch (e) {
              rawTx = [];
            }
          }
          const extractKeys = (list) => {
            if (!Array.isArray(list)) return [];
            const k = [];
            list.forEach((t) => {
              if (!t) return;
              if (typeof t === "string") {
                k.push(t);
                return;
              }
              if (t.item_id) k.push(t.item_id);
              if (t.item) k.push(t.item);
              if (t.asset_id) k.push(t.asset_id);
              if (t.campaign_id) k.push(t.campaign_id);
              if (t.campaignId) k.push(t.campaignId);
              if (t.nodeKey) k.push(t.nodeKey);
              if (t.node_key) k.push(t.node_key);
              if (t.code) k.push(t.code);
              if (t.slug) k.push(t.slug);
              if (t.title) k.push(t.title);
              if (t.id && !String(t.id).startsWith("tx_")) k.push(t.id);
            });
            return k.filter(Boolean);
          };
          const txItems = extractKeys(rawTx);
          setUnlockedNodes([
            ...new Set([
              ...(Array.isArray(rawUnlocked) ? rawUnlocked : []),
              ...txItems,
            ]),
          ]);

          const combinedUnlocked = Array.from(
            new Set([
              ...(Array.isArray(rawUnlocked) ? rawUnlocked : []),
              ...txItems,
            ]),
          );
          setUnlockedNodes(combinedUnlocked);
        }
      } catch (err) {
        console.error(
          "⚡ [NEXUS V20]: Chyba načítania identity operátora:",
          err,
        );
      }
    };

    loadUserData();
    window.addEventListener("storage", loadUserData);
    window.addEventListener("nexus_user_updated", loadUserData);
    window.addEventListener("nexus_credits_updated", loadUserData);
    window.addEventListener("nexus_identity_changed", loadUserData);
    window.addEventListener("nexus_shop_history_updated", loadUserData);

    return () => {
      window.removeEventListener("storage", loadUserData);
      window.removeEventListener("nexus_user_updated", loadUserData);
      window.removeEventListener("nexus_credits_updated", loadUserData);
      window.removeEventListener("nexus_identity_changed", loadUserData);
      window.removeEventListener("nexus_shop_history_updated", loadUserData);
    };
  }, []);

  // --- FLOATING TOOLTIP HANDLERS (500MS MYSTERY RADAR SCANNER) ---
  const handleShowTooltip = (title, text, e) => {
    triggerHover();
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);

    setFloatingTooltip({
      title: "",
      text: "",
      visible: true,
      isScanning: true,
      x: e ? e.clientX + 15 : 100,
      y: e ? e.clientY + 15 : 100,
    });

    scanTimerRef.current = setTimeout(() => {
      setFloatingTooltip((prev) => ({
        ...prev,
        title: title || "[ 💡 NEXUS NÁPOVEDA ]",
        text: text || "Dátový uzol OS Genesis Edition.",
        isScanning: false,
      }));
    }, 500);
  };

  const handleUpdateTooltipPos = (e) => {
    if (
      floatingTooltip.visible &&
      typeof window !== "undefined" &&
      window.innerWidth >= 768
    ) {
      setFloatingTooltip((prev) => ({
        ...prev,
        x: e.clientX + 15,
        y: e.clientY + 15,
      }));
    }
  };

  const handleHideTooltip = () => {
    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);
    setFloatingTooltip({
      title: "",
      text: "",
      visible: false,
      isScanning: false,
      x: 0,
      y: 0,
    });
  };

  // --- URL DEEP LINKING & ROUTING SYNC ---
  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const searchParams = new URLSearchParams(location.search);

    let docFromUrl = searchParams.get("app") || searchParams.get("id");
    let catFromUrl = searchParams.get("cat");
    let tierFromUrl = searchParams.get("tier");
    let prefilterFromUrl = searchParams.get("prefilter"); // 🛑 OPRAVA: Injekcia chýbajúcej deklarácie

    // Čítanie z kanonickej cesty: /shop/apps/:plat/:id
    if (pathParts.length >= 2 && pathParts === "shop" && pathParts === "apps") {
      if (pathParts) {
        const p2 = pathParts.toLowerCase();
        if (p2.startsWith("camp_") || p2.startsWith("nexus-")) {
          docFromUrl = pathParts;
        } else {
          catFromUrl = p2;
        }
      }
      if (pathParts) {
        const p3 = pathParts.toLowerCase();
        if (p3.startsWith("camp_") || p3.startsWith("nexus-")) {
          docFromUrl = pathParts;
        } else {
          tierFromUrl = p3;
        }
      }
    }

    if (docFromUrl) {
      const found = SHOP_APPS_DATA.find(
        (item) =>
          item.id.toUpperCase() === docFromUrl.toUpperCase() ||
          item.nodeKey.toLowerCase() === docFromUrl.toLowerCase(),
      );
      if (found) {
        // 🛑 OCHRANNÝ ZÁMOK: Nastaví stav iba ak sa reálne líši, aby nezacyklil render
        setSelectedDocId((prev) => (prev !== found.id ? found.id : prev));
      }
    }

    if (catFromUrl) {
      const normCat = catFromUrl.toLowerCase();
      if (normCat.includes("web")) setActiveSubcat("kt-04-web");
      else if (normCat.includes("mob")) setActiveSubcat("kt-04-mob");
      else if (normCat.includes("desk")) setActiveSubcat("kt-04-desk");
      else setActiveSubcat("ALL");
    }

    if (tierFromUrl) {
      const normTier = String(tierFromUrl).toUpperCase().trim();
      // 🛑 ANTI-COLLISION: Najprv striktne FREEMIUM, až potom FREE!
      if (normTier === "FREEMIUM") {
        setTierFilter("FREEMIUM");
      } else if (normTier === "FREE" || normTier === "ZDARMA") {
        setTierFilter("FREE");
      } else if (normTier === "PRO" || normTier === "PROMIUM") {
        setTierFilter("PROMIUM");
      } else if (normTier === "OMEGA" || normTier === "OMEGAMIUM") {
        setTierFilter("OMEGAMIUM");
      } else if (normTier === "MASTER" || normTier === "MASTERMIUM") {
        setTierFilter("MASTERMIUM");
      } else {
        setTierFilter("ALL");
      }
    }

    if (prefilterFromUrl) {
      setPreFilterTag(prefilterFromUrl);
    }
  }, [location.pathname, location.search]);

  const selectedDoc = useMemo(() => {
    if (!selectedDocId) return null;
    return SHOP_APPS_DATA.find((item) => item.id === selectedDocId) || null;
  }, [selectedDocId]);

  const tierCounts = useMemo(() => {
    const counts = {
      ALL: 0,
      FREE: 0,
      FREEMIUM: 0,
      PROMIUM: 0,
      OMEGAMIUM: 0,
      MASTERMIUM: 0,
    };
    const sharpApps = SHOP_APPS_DATA.filter((item) =>
      String(item.id || "").startsWith("CAMP_"),
    );
    counts.ALL = sharpApps.length;
    sharpApps.forEach((item) => {
      const t = String(item.tier || "FREE")
        .toUpperCase()
        .trim();
      if (t === "FREEMIUM") counts.FREEMIUM++;
      else if (t === "FREE" || t === "ZDARMA") counts.FREE++;
      else if (t === "PRO" || t === "PROMIUM") counts.PROMIUM++;
      else if (t === "OMEGA" || t === "OMEGAMIUM") counts.OMEGAMIUM++;
      else if (t === "MASTER" || t === "MASTERMIUM") counts.MASTERMIUM++;
    });
    return counts;
  }, []);

  // Filtered Documents Logic (Strictly 9 OS Genesis Apps)
  const filteredDocs = useMemo(() => {
    const sharpAppsData = SHOP_APPS_DATA.filter((item) =>
      String(item.id || "").startsWith("CAMP_"),
    );

    return sharpAppsData.filter((item) => {
      // 1. PRIMÁRNY FILTER: Platforma (WEB | MOB | DESK)
      if (activeSubcat && activeSubcat !== "ALL") {
        const itemSub = String(item.subCategory || "")
          .toLowerCase()
          .trim();
        const itemPlat = String(item.platform || "")
          .toLowerCase()
          .trim();
        const targetSub = String(activeSubcat || "")
          .toLowerCase()
          .trim();

        if (targetSub === "web" || targetSub === "kt-04-web") {
          if (!itemSub.includes("web") && !itemPlat.includes("web"))
            return false;
        } else if (targetSub === "mob" || targetSub === "kt-04-mob") {
          if (!itemSub.includes("mob") && !itemPlat.includes("mob"))
            return false;
        } else if (targetSub === "desk" || targetSub === "kt-04-desk") {
          if (!itemSub.includes("desk") && !itemPlat.includes("desk"))
            return false;
        } else if (itemSub !== targetSub && itemPlat !== targetSub) {
          return false;
        }
      }

      // 2. SEKUNDÁRNY FILTER: Licenčný TIER (PRO | OMEGA | MASTER)
      if (tierFilter && tierFilter !== "ALL") {
        const itemTier = String(item.tier || "FREE")
          .toUpperCase()
          .trim();
        const targetFilter = String(tierFilter || "")
          .toUpperCase()
          .trim();

        // 🛑 STRIKTNÁ SEPARÁCIA FREE VS FREEMIUM (Žiadny .includes)
        if (targetFilter === "FREE") {
          if (itemTier !== "FREE" && itemTier !== "ZDARMA") return false;
        } else if (targetFilter === "FREEMIUM") {
          if (itemTier !== "FREEMIUM") return false;
        } else if (targetFilter === "PRO" || targetFilter === "PROMIUM") {
          if (itemTier !== "PRO" && itemTier !== "PROMIUM") return false;
        } else if (targetFilter === "OMEGA" || targetFilter === "OMEGAMIUM") {
          if (itemTier !== "OMEGA" && itemTier !== "OMEGAMIUM") return false;
        } else if (targetFilter === "MASTER" || targetFilter === "MASTERMIUM") {
          if (itemTier !== "MASTER" && itemTier !== "MASTERMIUM") return false;
        }
      }

      // 3. TERCIÁRNY SÉMANTICKÝ TAG Z DRAWERA (100% ZHODA S CALCULATEMATCHES)
      if (preFilterTag && preFilterTag.trim()) {
        const detail = item?.scanDetail || {};
        const sub = detail?.preKohoJeToto || {};
        const normalizeText = (str) =>
          String(str || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();

        const corpus = normalizeText(
          (item?.title || "") +
            " " +
            (item?.desc || "") +
            " " +
            (item?.subCategory || "") +
            " " +
            (item?.platform || "") +
            " " +
            (item?.vibe || "") +
            " " +
            (detail.zameranieAPointa || "") +
            " " +
            (detail.detailnyPopisKampane || "") +
            " " +
            (detail.preKoho || "") +
            " " +
            (detail.preAkyTypLudi || sub.preAkyTypLudi || "") +
            " " +
            (detail.preAkyTypCloveka || sub.preAkyTypCloveka || "") +
            " " +
            (detail.preAkyTypSpolocnosti || sub.preAkyTypSpolocnosti || "") +
            " " +
            (detail.kCemuSaTotoDaPouzit || detail.kComuSaToDaPouzit || "") +
            " " +
            (detail.akoToFunguje || ""),
        );
        const cleanTag = normalizeText(preFilterTag);
        if (!corpus.includes(cleanTag)) return false;
      }

      // 4. FULLTEXT VYHĽADÁVANIE
      const query = String(searchTerm || "")
        .toLowerCase()
        .trim();
      if (query) {
        const titleMatch = String(item.title || "")
          .toLowerCase()
          .includes(query);
        const idMatch = String(item.id || "")
          .toLowerCase()
          .includes(query);
        const keyMatch = String(item.nodeKey || "")
          .toLowerCase()
          .includes(query);
        const pointaMatch = String(item.scanDetail?.zameranieAPointa || "")
          .toLowerCase()
          .includes(query);

        return titleMatch || idMatch || keyMatch || pointaMatch;
      }

      return true;
    });
  }, [activeSubcat, tierFilter, preFilterTag, searchTerm]);

  // Handlers

  const handleResetFilters = () => {
    if (typeof triggerClick === "function") triggerClick();
    setActiveSubcat("ALL");
    setTierFilter("ALL");
    if (typeof setPreFilterTag === "function") setPreFilterTag("");
    setSearchTerm("");
    navigate("/shop/apps", { replace: true });
  };

  const getTierSlug = (tierKey) => {
    const t = String(tierKey || "all")
      .toUpperCase()
      .trim();
    if (t === "FREEMIUM") return "freemium";
    if (t === "FREE" || t === "ZDARMA") return "free";
    if (t === "PRO" || t === "PROMIUM") return "pro";
    if (t === "OMEGA" || t === "OMEGAMIUM") return "omega";
    if (t === "MASTER" || t === "MASTERMIUM") return "master";
    return "all";
  };

  const handleSelectTier = (tierKey) => {
    triggerClick();
    setTierFilter(tierKey);
    const cleanCat = String(activeSubcat || "all")
      .toLowerCase()
      .replace("kt-04-", "");
    const cleanTier = getTierSlug(tierKey);

    if (cleanCat !== "all" && cleanTier !== "all") {
      navigate(`/shop/apps/${cleanCat}/${cleanTier}`);
    } else if (cleanCat !== "all") {
      navigate(`/shop/apps/${cleanCat}`);
    } else if (cleanTier !== "all") {
      navigate(`/shop/apps/all/${cleanTier}`);
    } else {
      navigate("/shop/apps");
    }
  };

  const handleSelectCategory = (catKey) => {
    triggerClick();
    setActiveSubcat(catKey);
    const cleanCat = String(catKey || "all")
      .toLowerCase()
      .replace("kt-04-", "");
    const cleanTier = getTierSlug(tierFilter);

    if (cleanCat !== "all" && cleanTier !== "all") {
      navigate(`/shop/apps/${cleanCat}/${cleanTier}`);
    } else if (cleanCat !== "all") {
      navigate(`/shop/apps/${cleanCat}`);
    } else if (cleanTier !== "all") {
      navigate(`/shop/apps/all/${cleanTier}`);
    } else {
      navigate("/shop/apps");
    }
  };

  const handleOpenDetail = (id, e) => {
    if (e && typeof e.stopPropagation === "function") e.stopPropagation();
    if (typeof triggerClick === "function") triggerClick();
    setSelectedDocId(id);

    const item = (SHOP_APPS_DATA || []).find((a) => a.id === id);
    const plat = String(item?.platform || "web")
      .toLowerCase()
      .trim();
    // 🛡️ V20 STABLE ROUTING: pushState prepíše URL bez nežiaduceho unmountu modalu
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `/shop/apps/${plat}/${id}`);
    }
  };

  const handleCloseDetail = (e) => {
    if (e && typeof e.stopPropagation === "function") e.stopPropagation();
    if (typeof triggerClick === "function") triggerClick();
    setSelectedDocId(null);

    const cleanCat = String(activeSubcat || "all")
      .toLowerCase()
      .replace("kt-04-", "")
      .trim();
    const cleanTier = String(tierFilter || "all")
      .toLowerCase()
      .replace("mium", "")
      .trim();
    let newPath = "/shop/apps";
    if (cleanCat !== "all" && cleanTier !== "all") {
      newPath = `/shop/apps/${cleanCat}/${cleanTier}`;
    } else if (cleanCat !== "all") {
      newPath = `/shop/apps/${cleanCat}`;
    } else if (cleanTier !== "all") {
      newPath = `/shop/apps/all/${cleanTier}`;
    }

    if (typeof window !== "undefined") {
      window.history.pushState({}, "", newPath);
    }
  };

  const handleOpenPaywall = (appItem) => {
    triggerClick();

    if (!appItem) return;

    setPaywallCampaign({
      ...appItem,
      id: appItem.id,
      item: appItem.id,
      item_id: appItem.id,
      asset_id: appItem.id,
      campaign_id: appItem.id,
      nodeKey: appItem.nodeKey,
      title: appItem.title,
      category: "APPS",
      itemType: "APPS",
      priceOc: appItem.ocPrice || appItem.preorderPriceOc || 14900,
      priceEur: appItem.price || appItem.preorderPriceEur || "149.00 €",
      tier: appItem.tierCode || appItem.tier || "PRO",
    });
    setPaywallOpen(true);
  };

  // Unlock Status Resolver
  const getUnlockedInfo = (appItem) => {
    if (!appItem) return { isUnlocked: false, label: "ZAMKNUTÝ MODUL" };

    const cleanUserTier = String(userTier || "FREE")
      .toUpperCase()
      .trim();
    const itemId = String(appItem.id || "")
      .toLowerCase()
      .trim();
    const nodeKey = String(appItem.nodeKey || "")
      .toLowerCase()
      .trim();
    const itemTitle = String(appItem.title || "")
      .toLowerCase()
      .trim();
    const fullName = String(appItem.fullName || "")
      .toLowerCase()
      .trim();

    // 1. Root Access pre Systémové a Správcovské Roly
    if (
      cleanUserTier === "ARCHITECT" ||
      cleanUserTier === "MASTER" ||
      cleanUserTier === "MASTERMIUM" ||
      cleanUserTier === "CROWN" ||
      cleanUserTier === "ADMIN" ||
      cleanUserTier === "MOD" ||
      cleanUserTier === "DEVELOPER"
    ) {
      return { isUnlocked: true, label: "PREDOBJEDNANÉ // CROWN ROOT ACCESS" };
    }

    // 2. Kontrola v odomknutých uzloch a transakčnej histórii (Hĺbková Extrakcia)
    let safeUnlocked = [];
    if (Array.isArray(unlockedNodes)) safeUnlocked = unlockedNodes;
    else if (typeof unlockedNodes === "string") {
      try {
        safeUnlocked = JSON.parse(unlockedNodes);
      } catch (e) {
        safeUnlocked = [];
      }
    }

    const extractKeys = (list) => {
      if (!list) return [];
      const keys = [];
      const items = Array.isArray(list) ? list : [list];
      items.forEach((entry) => {
        if (!entry) return;
        if (typeof entry === "string") {
          const trimmed = entry.trim();
          if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
            try {
              keys.push(...extractKeys(JSON.parse(trimmed)));
              return;
            } catch (e) {}
          }
          keys.push(trimmed.toLowerCase());
        } else if (typeof entry === "object") {
          Object.values(entry).forEach((val) => {
            if (typeof val === "string" && val.length < 100) {
              keys.push(val.trim().toLowerCase());
            }
          });
        }
      });
      return keys;
    };

    const unlockedSet = new Set(extractKeys(safeUnlocked));

    const isMatched =
      (itemId && unlockedSet.has(itemId)) ||
      (nodeKey && unlockedSet.has(nodeKey)) ||
      (itemTitle && unlockedSet.has(itemTitle)) ||
      (fullName && unlockedSet.has(fullName)) ||
      unlockedSet.has("nexus_master_key") ||
      unlockedSet.has("founder_pack") ||
      Array.from(unlockedSet).some(
        (uKey) =>
          (uKey && itemId && uKey.includes(itemId)) ||
          (uKey && nodeKey && uKey.includes(nodeKey)) ||
          (uKey && itemTitle && uKey.includes(itemTitle)),
      );

    if (isMatched) {
      return { isUnlocked: true, label: "PREDOBJEDNANÉ // DOŽIVOTNÁ LICENCIA" };
    }

    return { isUnlocked: false, label: "ZAMKNUTÝ MODUL" };
  };

  const renderPlatformIcon = (platformStr) => {
    const p = String(platformStr || "").toUpperCase();
    if (p.includes("WEB") || p.includes("PWA"))
      return <Globe size={14} className="text-[#00E5FF]" />;
    if (p.includes("MOB") || p.includes("APK"))
      return <Smartphone size={14} className="text-[#FFD700]" />;
    if (p.includes("DESK") || p.includes("PC"))
      return <Laptop size={14} className="text-[#39FF14]" />;
    return <Cpu size={14} className="text-[#00f3ff]" />;
  };

  return (
    <div className="w-full max-w-full min-w-0 relative overflow-x-hidden text-zinc-300 font-mono pb-32 animate-in fade-in duration-700 selection:bg-[#FFD700] selection:text-black">
      {/* 🚀 SEO & DYNAMICKÉ METATAGY */}
      <MetaTags
        title="Kategória 4: OC APPs [SaaS a Izolované Terminály] | Projekt Nexus OS"
        description="Oficiálny distribučný terminál pre 9 SaaS aplikácií a izolovaných terminálov OS Genesis Edition (PWA, Mobile APK/iOS, Desktop Electron.js)."
      />

      {/* 👑 SHOP HEADER WITH VIP WALLET */}
      <div className="w-full max-w-full min-w-0 relative overflow-hidden rounded-2xl mb-8">
        <ShopHeaderComponent
          activeTab="apps"
          userBalance={userBalance}
          userEmail={userEmail}
          userTier={userTier}
          getTierColor={getTierColor}
          handleShowTooltip={handleShowTooltip}
          handleUpdateTooltipPos={handleUpdateTooltipPos}
          handleHideTooltip={handleHideTooltip}
        />
      </div>

      {/* 🚀 VÝHODY ČLENSTVA ACCORDION */}
      <VyhodyClenstva />

      {/* 📦 PRIPRAVUJEME ROADMAP ACCORDION (7 SUB-APLIKÁCIÍ) */}
      <ShopPripravujeme
        type="apps"
        handleShowTooltip={handleShowTooltip}
        handleUpdateTooltipPos={handleUpdateTooltipPos}
        handleHideTooltip={handleHideTooltip}
      />

      {/* 🎛️ DVOJÚROVŇOVÝ CENTRÁLNY FILTER OS GENESIS */}
      <ShopFilters
        type="apps"
        activeSubcat={activeSubcat}
        onSubcatChange={(catKey) => handleSelectCategory(catKey)}
        activeTier={tierFilter}
        onTierChange={(tierKey) => handleSelectTier(tierKey)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        layoutView={layoutView}
        onLayoutChange={setLayoutView}
        onResetFilters={handleResetFilters}
        dataItems={SHOP_APPS_DATA}
        onSelectItem={(docId) => handleOpenDetail(docId)}
        handleShowTooltip={handleShowTooltip}
        handleUpdateTooltipPos={handleUpdateTooltipPos}
        handleHideTooltip={handleHideTooltip}
      />

      {/* 🧠 TERCIÁRNA SÉMANTICKÁ DIAGNOSTIKA (IDENTICKÁ S DOCUMENTS) */}
      <div className="flex justify-end mb-6 -mt-2">
        <button
          type="button"
          onClick={() => {
            triggerClick();
            setIsPreFilterOpen(true);
          }}
          className="px-4 py-2 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/40 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,243,255,0.2)]"
        >
          <span>Sémantická Diagnostika (4x PRE)</span>
          {Boolean(preFilterTag) && (
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
          )}
        </button>
      </div>

      <ModalPreFilterDrawer
        isOpen={isPreFilterOpen}
        onClose={() => setIsPreFilterOpen(false)}
        items={SHOP_APPS_DATA}
        selectedTag={preFilterTag}
        onSelectTag={(tag) => {
          setPreFilterTag(tag);
          if (tag) setActiveSubcat("ALL");
        }}
        onResetFilters={() => setPreFilterTag("")}
      />

      {/* ==================================================================== */}
      {/* 🖼️ MRIEŽKOVÝ RENDER ALEBO ZOZNAM 9 OS GENESIS APLIKÁCIÍ */}
      {/* ==================================================================== */}
      {filteredDocs.length === 0 ? (
        <div className="p-12 text-center bg-[#050A0E]/90 border border-red-500/30 rounded-3xl space-y-4 my-8 backdrop-blur-xl">
          <div className="inline-flex p-4 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 animate-pulse">
            <RefreshCw size={32} />
          </div>
          <h3 className="text-lg font-black text-white uppercase tracking-widest">
            Nulový Výsledok Vyhľadávania
          </h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Žiadna OS Genesis aplikácia nezodpovedá zadanému filtru{" "}
            <span className="text-[#00f3ff] font-bold">"{searchTerm}"</span>.
          </p>
          <button
            onClick={(e) => handleOpenDetail(docItem.id, e)}
            onMouseEnter={(e) =>
              handleShowTooltip("SKENOVAŤ DETAIL", getTooltip("DETAIL"), e)
            }
            onMouseMove={handleUpdateTooltipPos}
            onMouseLeave={handleHideTooltip}
            className="px-6 py-3 bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            Resetovať Všetky Filtre
          </button>
        </div>
      ) : layoutView === "LIST" ? (
        /* 📋 PODROBNÝ ZOZNAM (RESPONZÍVNY MOBILE STRIP & DESKTOP TABLE) */
        <div className="bg-[#050A0E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-full min-w-0">
          {/* MOBILNÝ PÁS PRE MALÉ OBRAZOVKY (< 768px) - ZERO OVERFLOW */}
          <div className="block md:hidden divide-y divide-white/10 w-full max-w-full min-w-0">
            {filteredDocs.map((docItem) => {
              const tierColor = getTierColor(docItem.tier);
              return (
                <div
                  key={docItem.id}
                  className="p-4 space-y-3 bg-black/40 w-full max-w-full min-w-0 overflow-x-hidden"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-[#00f3ff]">
                      {docItem.id}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[9px] font-black uppercase border shrink-0"
                      style={{
                        color: tierColor,
                        borderColor: `${tierColor}60`,
                        backgroundColor: `${tierColor}15`,
                      }}
                    >
                      {docItem.tier}
                    </span>
                  </div>
                  <div className="font-bold text-white text-xs break-words">
                    {docItem.title}
                  </div>
                  <div className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {docItem.scanDetail?.zameranieAPointa ||
                      docItem.spoilerIntro}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 gap-2">
                    <span className="text-xs font-black text-[#FFD700] shrink-0">
                      {docItem.price}
                    </span>
                    <button
                      onClick={() => handleOpenDetail(docItem.id)}
                      className="px-3 py-1.5 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <Eye size={12} /> Detail
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOPOVÁ TABUĽKA (>= 768px) */}
          <div className="hidden md:block overflow-x-auto w-full">
            <table className="w-full text-left text-xs">
              <thead className="bg-black/80 text-[#00E5FF] uppercase font-black tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-4">ID / Kľúč</th>
                  <th className="p-4">Aplikácia & Popis</th>
                  <th className="p-4">TIER</th>
                  <th className="p-4">Sadzba</th>
                  <th className="p-4 text-right">Akcie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredDocs.map((docItem) => {
                  const tierColor = getTierColor(docItem.tier);
                  const unlocked = getUnlockedInfo(docItem).isUnlocked;
                  return (
                    <tr
                      key={docItem.id}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="p-4 font-bold text-[#00f3ff]">
                        {docItem.id}
                        <div className="text-[9px] text-zinc-500 uppercase font-normal">
                          {docItem.platform}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-white group-hover:text-[#00f3ff] transition-colors">
                          {docItem.title}
                        </div>
                        <div className="text-[10px] text-zinc-400 truncate max-w-md">
                          {docItem.scanDetail?.zameranieAPointa ||
                            docItem.spoilerIntro}
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
                          {docItem.tier}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-[#FFD700]">
                        {docItem.price}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleOpenDetail(docItem.id)}
                          className="px-3 py-1.5 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer inline-flex items-center gap-1"
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
        </div>
      ) : (
        /* 🖼️ MRIEŽKOVÉ ZOBRAZENIE (GRID_3 ALEBO GRID_MEDIUM) WITH RESPONSIVE COLUMNS */
        <div
          className={`grid gap-6 w-full max-w-full min-w-0 my-6 ${
            layoutView === "GRID_MEDIUM"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredDocs.map((docItem) => {
            const itemTierColor = getTierColor(docItem.tier);
            const unlockedInfo = getUnlockedInfo(docItem);

            return (
              <div
                key={docItem.id}
                className="group bg-[#050A0E]/90 border border-white/10 hover:border-[#00E5FF]/60 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.25)] flex flex-col justify-between font-mono relative"
              >
                {/* CARD TOP MEDIA HEADER */}
                <div className="relative aspect-[16/9] bg-black overflow-hidden border-b border-white/10 shrink-0">
                  <img
                    src={docItem.image}
                    alt={docItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    onError={(e) => {
                      e.target.src = "/img-nexus/pages/ShopPage.jpg";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                  {/* PLATFORM & TIER BADGES */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider bg-black/80 border border-white/20 text-white backdrop-blur-md flex items-center gap-1.5">
                      {renderPlatformIcon(docItem.platform)}
                      {docItem.platform}
                    </span>

                    <span
                      className="px-2.5 py-1 rounded-xl text-[10px] font-black uppercase border backdrop-blur-md"
                      style={{
                        color: itemTierColor,
                        borderColor: `${itemTierColor}60`,
                        backgroundColor: `${itemTierColor}20`,
                      }}
                    >
                      {docItem.tier}
                    </span>
                  </div>

                  {/* ID BADGE & STATUS */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono text-zinc-400 bg-black/80 px-2 py-0.5 rounded border border-white/10">
                      ID: {docItem.id}
                    </span>
                    <span className="text-[9px] font-bold text-[#FFD700] bg-yellow-500/10 border border-yellow-500/30 px-2 py-0.5 rounded uppercase">
                      PRE-ORDER WAITLIST
                    </span>
                  </div>
                </div>

                {/* CARD BODY CONTENT */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-tight mb-2">
                      {docItem.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                      {docItem.scanDetail?.zameranieAPointa ||
                        docItem.spoilerIntro}
                    </p>
                  </div>

                  {/* PRICE & ACTION BUTTONS ROW */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[9px] text-zinc-500 uppercase tracking-widest">
                          Predobjednávka
                        </div>
                        <div className="text-lg font-black text-[#FFD700]">
                          {docItem.price}
                        </div>
                      </div>

                      <button
                        onClick={() => handleOpenDetail(docItem.id)}
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "SKENOVAŤ DETAIL",
                            "Otvoriť 6-dielny kódex, zameranie a 20-krokový proces",
                            e,
                          )
                        }
                        onMouseMove={handleUpdateTooltipPos}
                        onMouseLeave={handleHideTooltip}
                        className="px-3 py-2 bg-white/5 hover:bg-white/15 text-white border border-white/20 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye size={14} /> Skenovať
                      </button>
                    </div>

                    {/* BUTTON ACTIONS GRID */}
                    {unlockedInfo.isUnlocked ? (
                      <button
                        disabled
                        className="w-full py-2.5 bg-[#080d12] text-[#39FF14] border border-[#39FF14]/60 rounded-xl text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-not-allowed select-none shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                      >
                        <CheckCircle2 size={14} className="text-[#39FF14]" />
                        <span>{unlockedInfo.label}</span>
                      </button>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={
                            docItem.kofiLink ||
                            "https://ko-fi.com/cybertech_architect/shop"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              "PREDOBJEDNAŤ (€ KO-FI)",
                              `Kúpiť predobjednávku v EUR (${docItem.price})`,
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="px-3 py-2.5 bg-[#FFD700] hover:bg-[#FFD700]/80 text-black border border-[#FFD700] rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                        >
                          <Zap size={12} /> Predobjednať
                        </a>

                        <button
                          onClick={() => {
                            handleOpenPaywall(docItem);
                          }}
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              "ODOMKNÚŤ ZA OC",
                              docItem.ocPrice === 0
                                ? "Odomknúť zdarma"
                                : `Odomknúť za ${(docItem.ocPrice || 0).toLocaleString("sk-SK")} OC`,
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="px-3 py-2.5 bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black border border-[#00E5FF] rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                        >
                          <Crown size={12} /> {docItem.ocPrice || 14900} OC
                        </button>
                      </div>
                    )}

                    {/* STRICTLY LOCKED ZIP DOWNLOAD BUTTON */}
                    <button
                      disabled
                      onMouseEnter={(e) =>
                        handleShowTooltip(
                          "ZIP VO VÝVOJI",
                          "[ 🔒 ZIP BALÍČEK VO VÝVOJI (STANDBY SUPABASE CDN) ]",
                          e,
                        )
                      }
                      onMouseMove={handleUpdateTooltipPos}
                      onMouseLeave={handleHideTooltip}
                      className="w-full py-2 bg-zinc-900/80 hover:bg-zinc-900 text-zinc-500 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed opacity-70 select-none transition-colors"
                    >
                      <Lock size={12} className="text-zinc-500" />
                      <span>[ 🔒 ZIP BALÍČEK VO VÝVOJI (STANDBY) ]</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ==================================================================== */}
      {/* 🔮 DETAILNÝ MODAL "SKENOVAŤ DETAIL V20" (KOMPLETNÝ PROTOKOL A PROCES) */}
      {/* ==================================================================== */}
      {selectedDoc && (
        <div className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-in fade-in duration-300 font-mono">
          <div className="bg-[#050A0E] border-2 border-[#00E5FF]/60 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto text-left">
            {/* MODAL HEADER */}
            <div className="p-5 bg-black/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="px-2.5 py-1 rounded-xl text-xs font-black uppercase border"
                  style={{
                    color: getTierColor(selectedDoc.tier),
                    borderColor: `${getTierColor(selectedDoc.tier)}60`,
                    backgroundColor: `${getTierColor(selectedDoc.tier)}15`,
                  }}
                >
                  {selectedDoc.tier || "PREMIUM"}
                </span>
                <div>
                  <h2 className="text-sm md:text-base font-bold text-white tracking-wide">
                    {selectedDoc.title}
                  </h2>
                  <div className="text-[10px] text-zinc-400 uppercase">
                    ID: {selectedDoc.id} | PLATFORMA: {selectedDoc.platform}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseDetail}
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
                <div className="aspect-[16/9] md:aspect-square relative rounded-2xl overflow-hidden border border-white/20 bg-black shrink-0">
                  <img
                    src={selectedDoc.image}
                    alt={selectedDoc.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/img-nexus/pages/ShopPage.jpg";
                    }}
                  />
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-[#FFD700] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                      <Sparkles size={12} /> ZAMERANIE A POINTA
                    </div>
                    <p className="text-xs text-zinc-200 leading-relaxed font-bold">
                      {selectedDoc.scanDetail?.zameranieAPointa ||
                        selectedDoc.spoilerIntro}
                    </p>
                  </div>

                  {selectedDoc.scanDetail?.detailnyPopisKampane && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="text-[10px] text-[#00f3ff] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                        <Info size={12} /> DETAILNÝ POPIS APLIKÁCIE
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedDoc.scanDetail.detailnyPopisKampane}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 📊 PROTOKOL 6 OTÁZOK (SOCIÁLNO-DEMOGRAFICKÉ PROFILOVANIE) */}
              {selectedDoc.scanDetail && (
                <div className="p-6 bg-black/70 border border-[#00f3ff]/30 rounded-2xl space-y-4 font-mono">
                  <div className="text-xs font-black text-[#00f3ff] uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-3">
                    <Shield
                      size={14}
                      className="text-[#00f3ff] animate-pulse"
                    />{" "}
                    [ 📊 PROTOKOL 6 OTÁZOK (SOCIÁLNO-DEMOGRAFICKÉ PROFILOVANIE)
                    ]
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* 1. ČO ZÍSKAŠ */}
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl hover:border-green-500/40 transition-colors">
                      <div className="text-[10px] text-green-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <CheckCircle2 size={12} /> 1. ČO ZÍSKAŠ
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedDoc.scanDetail?.coZiskas ||
                          selectedDoc.scanDetail?.detailnyPopisKampane ||
                          selectedDoc.spoilerIntro}
                      </p>
                    </div>

                    {/* 2. PRE KOHO (CIEĽOVÁ SKUPINA) */}
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-colors">
                      <div className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Shield size={12} /> 2. PRE KOHO JE URČENÝ
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedDoc.scanDetail?.preKoho ||
                          "Solopreneuri, kódery, študenti OS Genesis, AI architekti..."}
                      </p>
                    </div>

                    {/* 3. PRE AKÝ TYP ĽUDÍ & ČLOVEKA */}
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl hover:border-purple-500/40 transition-colors">
                      <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Cpu size={12} /> 3. PRE AKÝ TYP ĽUDÍ / ČLOVEKA
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedDoc.scanDetail?.preAkyTypLudi ||
                          selectedDoc.scanDetail?.preAkyTypCloveka}
                      </p>
                    </div>

                    {/* 4. PRE SPOLOČNOSTI */}
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl hover:border-indigo-500/40 transition-colors">
                      <div className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Laptop size={12} /> 4. PRE AKÝ TYP SPOLOČNOSTI
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedDoc.scanDetail?.preAkyTypSpolocnosti}
                      </p>
                    </div>

                    {/* 5. AKO TO FUNGUJE */}
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl hover:border-yellow-500/40 transition-colors">
                      <div className="text-[10px] text-yellow-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={12} /> 5. AKO TO FUNGUJE
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedDoc.scanDetail?.akoToFunguje}
                      </p>
                    </div>

                    {/* 6. K ČOMU SA DÁ POUŽIŤ */}
                    <div className="p-4 bg-black/60 border border-white/10 rounded-2xl hover:border-orange-500/40 transition-colors">
                      <div className="text-[10px] text-orange-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Terminal size={12} /> 6. K ČEMU SA DÁ POUŽIŤ
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {selectedDoc.scanDetail?.kComuSaToDaPouzit ||
                          selectedDoc.scanDetail?.kCemuSaTotoDaPouzit}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 🎬 MP4 VIDEO STANDBY PLAYER BLOCK */}
              <div className="p-4 bg-black/80 border border-[#00E5FF]/30 rounded-2xl space-y-3 font-mono">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black text-[#00E5FF] uppercase tracking-widest flex items-center gap-2">
                    <PlayCircle
                      size={16}
                      className="text-[#00E5FF] animate-pulse"
                    />
                    [ 🎬 MP4 VIDEO PREHĽAD | SYSTEM STANDBY ]
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 uppercase font-bold">
                    AWAITING UPLOAD
                  </span>
                </div>
                <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/mF0v6VBQlbw?rel=0"
                    title="Video Prehľad"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* ⚙️ 5 PHASES / 20 STEPS PROOF OF PROCESS */}
              {Array.isArray(selectedDoc.phases) &&
                selectedDoc.phases.length > 0 && (
                  <div className="space-y-4">
                    <div className="text-xs font-black text-[#FFD700] uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                      <Terminal size={14} /> [ 20-KROKOVÝ EXEKUČNÝ PROCES
                      PREDOBJEDNÁVKY ]
                    </div>
                    <div className="space-y-3">
                      {selectedDoc.phases.map((p, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2"
                        >
                          <div className="text-xs font-bold text-[#00E5FF] uppercase">
                            {p.title}
                          </div>
                          <ul className="space-y-1">
                            {p.steps.map((st, sIdx) => (
                              <li
                                key={sIdx}
                                className="text-[11px] text-zinc-300 flex items-start gap-2"
                              >
                                <span className="text-[#FFD700] font-black shrink-0">
                                  ›
                                </span>
                                <span>{st}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* ACTION FOOTER IN MODAL */}
              <div className="p-6 bg-black border border-white/10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Cena Predobjednávky
                  </div>
                  <div className="text-xl font-black text-[#FFD700]">
                    {selectedDoc.price}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                  <button
                    onClick={() => handleCopyLink(window.location.href)}
                    onMouseEnter={(e) =>
                      handleShowTooltip(
                        "KOPÍROVAŤ LINK",
                        "Skopírovať trvalý URL odkaz do schránky",
                        e,
                      )
                    }
                    onMouseMove={handleUpdateTooltipPos}
                    onMouseLeave={handleHideTooltip}
                    className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Copy size={14} />{" "}
                    {copiedLink ? "Link Skopírovaný!" : "Kopírovať Link"}
                  </button>

                  {getUnlockedInfo(selectedDoc).isUnlocked ? (
                    <button
                      type="button"
                      disabled
                      className="px-6 py-3 bg-[#080d12] text-[#39FF14] border border-[#39FF14]/60 rounded-xl text-xs font-black uppercase flex items-center gap-2 cursor-not-allowed shadow-[0_0_15px_rgba(57,255,20,0.2)] select-none"
                    >
                      <CheckCircle2 size={16} className="text-[#39FF14]" />
                      {getUnlockedInfo(selectedDoc).label}
                    </button>
                  ) : (
                    <>
                      <a
                        href={
                          selectedDoc.kofiLink ||
                          "https://ko-fi.com/cybertech_architect/shop"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "PREDOBJEDNAŤ NA KO-FI",
                            `Predobjednať na Ko-Fi platobnej bráne (${selectedDoc.price})`,
                            e,
                          )
                        }
                        onMouseMove={handleUpdateTooltipPos}
                        onMouseLeave={handleHideTooltip}
                        className="px-6 py-3 bg-[#FFD700] hover:bg-[#FFD700]/80 text-black border border-[#FFD700] rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                      >
                        <Zap size={14} /> Predobjednať na Ko-Fi (
                        {selectedDoc.price})
                      </a>

                      <button
                        onClick={() => {
                          handleOpenPaywall(selectedDoc);
                        }}
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "ODOMKNÚŤ ZA OC",
                            `Odomknúť za ${(selectedDoc.ocPrice || 14900).toLocaleString("sk-SK")} OC`,
                            e,
                          )
                        }
                        onMouseMove={handleUpdateTooltipPos}
                        onMouseLeave={handleHideTooltip}
                        className="px-6 py-3 bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black border border-[#00E5FF] rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                      >
                        <Crown size={14} /> Odomknúť (
                        {(selectedDoc.ocPrice || 14900).toLocaleString("sk-SK")}{" "}
                        OC)
                      </button>
                    </>
                  )}

                  <button
                    disabled
                    onMouseEnter={(e) =>
                      handleShowTooltip(
                        "ZIP VO VÝVOJI",
                        "[ 🔒 ZIP BALÍČEK VO VÝVOJI (STANDBY SUPABASE CDN) ]",
                        e,
                      )
                    }
                    onMouseMove={handleUpdateTooltipPos}
                    onMouseLeave={handleHideTooltip}
                    className="px-6 py-3 bg-zinc-900 text-zinc-500 border border-white/10 rounded-xl text-xs font-bold uppercase flex items-center gap-2 cursor-not-allowed opacity-60 select-none"
                  >
                    <Lock size={14} /> ZIP Balíček Vo Vývoji
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL PAYWALL MODAL INTEGRATION */}
      <GlobalPaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        campaign={
          paywallCampaign
            ? { ...paywallCampaign, category: "APPS", itemType: "APPS" }
            : null
        }
        userBalance={userBalance}
        userTier={userTier}
        userEmail={userEmail}
        requiredTier={paywallCampaign?.tier || "FREE"}
        onSuccessTransaction={(txData) => {
          if (txData?.newNodes) setUnlockedNodes(txData.newNodes);
          if (txData?.newCredits !== undefined)
            setUserBalance(txData.newCredits);
          if (txData?.newTier) setUserTier(txData.newTier);
          window.dispatchEvent(new Event("nexus_user_updated"));
        }}
      />

      {/* 🔮 VIEWPORT FLOATING TOOLTIP CONTAINER (500MS RADAR SCANNER) */}
      {floatingTooltip.visible && (
        <div
          className={`fixed z-[99999] pointer-events-none rounded-xl border font-mono text-xs shadow-2xl backdrop-blur-xl transition-all duration-200 ${
            floatingTooltip.isScanning
              ? "bg-black/90 border-[#00f3ff] text-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.4)] animate-pulse p-2.5"
              : "bg-[#080d12]/95 border-[#FFD700]/60 text-zinc-200 shadow-[0_0_25px_rgba(255,215,0,0.25)] max-w-xs p-3.5"
          }`}
          style={{
            left: `${Math.min(floatingTooltip.x, typeof window !== "undefined" ? window.innerWidth - 320 : 500)}px`,
            top: `${Math.max(floatingTooltip.y - 80, 20)}px`,
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
                <Sparkles size={12} className="text-[#FFD700]" />
                {floatingTooltip.title}
              </div>
              <div className="text-[11px] text-zinc-300 leading-relaxed">
                {floatingTooltip.text}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopAppsMedia;
