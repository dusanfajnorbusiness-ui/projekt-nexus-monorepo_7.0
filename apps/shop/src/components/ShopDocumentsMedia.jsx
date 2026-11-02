/* eslint-disable no-undef */
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Search,
  Grid3X3,
  Grid,
  List,
  Terminal,
  Cpu,
  Activity,
  CheckCircle2,
  Folder,
  FileText,
  Download,
  Eye,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Lock,
  Unlock,
  X,
  Zap,
  PlayCircle,
  ExternalLink,
  Copy,
  Share2,
  Sparkles,
  Check,
  Info,
  ChevronDown,
  ChevronUp,
  Package,
  Shield,
  Wallet,
  Filter,
  Layers,
} from "lucide-react";

import { SoundFX } from "@shared/utils/SoundEngine";
import {
  SHOP_DOCUMENTS_DATA,
  CATEGORY_MAP,
  CATEGORY_TOOLTIPS,
  TIER_COLOR_MAP,
  TIER_TOOLTIPS,
  getTierColor,
  DIMENSION_COLOR_MAP,
  getDimensionColor,
} from "../data/ShopDocumentsMedia";
import { SHOP_TOOLTIPS, getTooltip } from "../data/TooltipsShop";
import { MetaTags } from "../MetaTags";
import { VyhodyClenstva } from "./Vyhody-Clenstva";
import { GlobalPaywallModal } from "./GlobalPaywallModal";
import { supabase } from "@shared/services/NexusDB_Supabase";
import {
  canPreviewPdf,
  getVipTicketsStatus,
} from "../data/permissionsRegistry";
import { ShopHeaderComponent } from "./ShopHeaderComponent";
import { DOCUMENT_BALENE_DIGITALNE_DATA } from "../data/ShopDocumentsMedia/Document_Balene-Digitalne";
import { ShopFilters } from "./ShopFilters";
import { ModalPreFilterDrawer } from "./ModalPreFilterDrawer";
import { NexusDB } from "@shared/services/NexusDB_Core";

// ============================================================================
// 👑 NEXUS OS: ZIP ALL-PACKS REGISTER (5 MASTER ARCHIVES IN CLOUD)
// ============================================================================

export const ZIP_ALL_PACKS_DATA = [
  {
    id: "zip_free_all_pack",
    title: "FREE ALL-PACK (KT-01 až KT-08)",
    tier: "FREE",
    priceOc: 0,
    priceEur: "0.00 €",
    displayPrice: "0 OC / 0.00 €",
    size: "301.95 MB",
    filesCount: 16,
    color: "#00f3ff",
    downloadUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/zip-assets/packs/zip-assets_free-all-packs_kt-01-08.zip",
    desc: "Všetky bezplatné PDF a PPTX kódexy KT-01 až KT-08.",
  },
  {
    id: "zip_freemium_all_pack",
    title: "FREEMIUM ALL-PACK (KT-01 až KT-08)",
    tier: "FREEMIUM",
    priceOc: 2500,
    priceEur: "25.00 €",
    displayPrice: "2 500 OC / 25.00 €",
    size: "1277.83 MB",
    filesCount: 66,
    color: "#00f3ff",
    downloadUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/zip-assets/packs/zip-assets_freemium-all-packs_kt-01-08.zip",
    desc: "Kompletné Freemium kódexy vrátane FREE podkladov.",
  },
  {
    id: "zip_promium_all_pack",
    title: "PROMIUM ALL-PACK (KT-01 až KT-08)",
    tier: "PROMIUM",
    priceOc: 24500,
    priceEur: "245.00 €",
    displayPrice: "24 500 OC / 245.00 €",
    size: "1860.51 MB",
    filesCount: 94,
    color: "#39FF14",
    downloadUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/zip-assets/packs/zip-assets_promium-all-packs_kt-01-08.zip",
    desc: "Taktické manuály pre PROMIUM operátorov (50% komplet zľava).",
  },
  {
    id: "zip_omegamium_all_pack",
    title: "OMEGAMIUM ALL-PACK (KT-01 až KT-08)",
    tier: "OMEGAMIUM",
    priceOc: 25900,
    priceEur: "259.00 €",
    displayPrice: "25 900 OC / 259.00 €",
    size: "2557.01 MB",
    filesCount: 128,
    color: "#FFD700",
    downloadUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/zip-assets/packs/zip-assets_omegamium-all-packs_kt-01-08.zip",
    desc: "Kompletný OMEGA archív obsahujúci 128 manuálov (60% komplet zľava).",
  },
  {
    id: "zip_mastermium_all_pack",
    title: "MASTERMIUM ALL-PACK (KT-01 až KT-08)",
    tier: "MASTERMIUM",
    priceOc: 29900,
    priceEur: "299.00 €",
    displayPrice: "29 900 OC / 299.00 €",
    size: "2651.84 MB",
    filesCount: 138,
    color: "#FF003C",
    downloadUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/zip-assets/packs/zip-assets_mastermium-all-packs_kt-01-08.zip",
    desc: "100% CROWN ROOT ACCESS pre celú knižnicu (70% komplet zľava).",
  },
];

// ============================================================================
// 👑 NEXUS OS: SHOP DOCUMENTS MEDIA COMPONENT V20.25 (PRODUCTION GRADE)
// Status: 100% GROUNDED // ALL STATES DECLARED AT TOP // ZERO REFERENCE ERROR
// ============================================================================

export const ShopDocumentsMedia = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // --- 1. COMPONENT STATES (ALL DECLARED AT VERY TOP) ---
  const [activeSubcat, setActiveSubcat] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState("ALL");
  const [isPreFilterOpen, setIsPreFilterOpen] = useState(false);
  const [preFilterTag, setPreFilterTag] = useState("");

  // 📦 UNIFIKOVANÝ DÁTOVÝ TOK: KUSOVÉ KÓDEXY (69) + 5x MASTER ALL-PACKS (6)
  const allDocumentItems = useMemo(() => {
    const singles = Array.isArray(SHOP_DOCUMENTS_DATA)
      ? SHOP_DOCUMENTS_DATA
      : [];
    const packs = Array.isArray(DOCUMENT_BALENE_DIGITALNE_DATA)
      ? DOCUMENT_BALENE_DIGITALNE_DATA
      : [];
    return [...singles, ...packs];
  }, []);
  const [layoutView, setLayoutView] = useState("GRID_3"); // GRID_3 | GRID_MEDIUM | LIST
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
  const [isPacksBannerOpen, setIsPacksBannerOpen] = useState(false);

  // Paywall & User State
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallCampaign, setPaywallCampaign] = useState(null);
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [userBalance, setUserBalance] = useState(0);
  const [userTier, setUserTier] = useState("FREE");
  const [userEmail, setUserEmail] = useState("");
  // 🛡️ KÁNON V20 (SYMETRIA S AUDIOM): FREE ODOMKNUTÉ, OSTATNÉ ZAMKNUTÉ PRE VŠETKÝCH
  const isDocUnlocked = (doc) => {
    if (!doc) return false;
    const docTier = String(doc.tier || "FREE")
      .toUpperCase()
      .trim();
    const docPrice = Number(doc.priceOc ?? 0);
    if (
      docPrice === 0 ||
      docTier === "FREE" ||
      doc.displayPrice === "0 OC / Zdarma"
    ) {
      return true;
    }

    const docId = String(doc.id || "")
      .toLowerCase()
      .trim();
    const docKey = String(doc.nodeKey || "")
      .toLowerCase()
      .trim();
    const unlockedSet = new Set(
      (Array.isArray(unlockedNodes) ? unlockedNodes : []).map((i) =>
        String(i).toLowerCase().trim(),
      ),
    );

    return unlockedSet.has(docId) || unlockedSet.has(docKey);
  };

  // 🎨 3-STAVOVÁ FAREBNÁ MATICA PRE TLAČIDLÁ (ZELENÁ #39FF14 / FIALOVÁ #BF00FF / ŽLTÁ #FFD700)
  const getDocAccessInfo = (doc) => {
    if (!doc)
      return {
        status: "LOCKED",
        color: "#FFD700",
        isUnlocked: false,
        label: "ZAMKNUTÉ",
      };

    if (isDocUnlocked(doc)) {
      const isFree =
        Number(doc.priceOc ?? 0) === 0 ||
        String(doc.tier || "").toUpperCase() === "FREE";
      return {
        status: "UNLOCKED",
        color: "#39FF14",
        isUnlocked: true,
        label: isFree ? "FREE // ODOMKNUTÉ" : "DOŽIVOTNÁ LICENCIA",
      };
    }
    const isPack =
      String(doc.subCategory || "").toLowerCase() === "kt-balene-aktiva" ||
      String(doc.subCategory || "").toLowerCase() === "zip-packs" ||
      String(doc.id || "").startsWith("PACK_") ||
      doc.isPack === true;

    // Na balené All-Packs sa VIP lístok nevzťahuje – odomknutie len cez OC Kredity!
    if (isPack) {
      return {
        status: "LOCKED_PACK",
        color: "#FFD700",
        isUnlocked: false,
        label: `ODOMKNÚŤ BALÍK ZA ${doc.priceOc || 24500} OC`,
        isPack: true,
      };
    }
    // Načítanie minútých lístkov pre zistenie zostatku
    const userKey = userEmail
      ? userEmail.replace(/[^a-zA-Z0-9]/g, "_")
      : "guest";
    const savedUsed = Number(
      localStorage.getItem(`nexus_vip_tickets_used_documents_${userKey}`) ||
        localStorage.getItem("nexus_vip_tickets_used_documents") ||
        0,
    );
    const savedMonth =
      localStorage.getItem(`nexus_vip_tickets_month_documents_${userKey}`) ||
      localStorage.getItem("nexus_vip_tickets_month_documents") ||
      "";
    const vipStatus = getVipTicketsStatus(
      userTier,
      "documents",
      savedUsed,
      savedMonth,
    );

    if (vipStatus.available > 0) {
      return {
        status: "VIP_AVAILABLE",
        color: "#BF00FF",
        isUnlocked: false,
        label: `VIP LÍSTOK (${vipStatus.available}/${vipStatus.max})`,
        availableTickets: vipStatus.available,
        maxTickets: vipStatus.max,
      };
    }

    return {
      status: "LOCKED",
      color: "#FFD700",
      isUnlocked: false,
      label: `ODOMKNÚŤ ZA ${doc.priceOc || 2500} OC`,
    };
  };

  // Viewport Floating Tooltip State
  const scanTimerRef = useRef(null);
  const [floatingTooltip, setFloatingTooltip] = useState({
    title: "",
    text: "",
    visible: false,
    isScanning: false,
    x: 0,
    y: 0,
  });

  // Supabase Signed URL State
  const [loadingSignedUrl, setLoadingSignedUrl] = useState(false);
  const [signedUrl, setSignedUrl] = useState("");

  // Sound triggers
  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();
  const triggerError = () => SoundFX && SoundFX.error && SoundFX.error();

  // --- 2. USER DATA & UNLOCKED NODES LOADER ---
  useEffect(() => {
    let currentEmail = "";

    const loadLocalUserData = () => {
      let parsed = null;
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
        setTransactionHistory([]);
        return; // STOP: Ak je Quest, nepokračuj v čítaní operátora!
      }
      const activeIdentity = localStorage.getItem("nexus_active_identity");
      if (activeIdentity) {
        try {
          parsed = JSON.parse(activeIdentity);
        } catch (e) {}
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
        setTransactionHistory(Array.isArray(rawTx) ? rawTx : []);
        const txItems = Array.isArray(rawTx)
          ? rawTx
              .map(
                (t) => t?.item || t?.item_id || t?.asset_id || t?.id || t?.code,
              )
              .filter(Boolean)
          : [];
        setUnlockedNodes([
          ...new Set([
            ...(Array.isArray(rawUnlocked) ? rawUnlocked : []),
            ...txItems,
          ]),
        ]);
      }
    };

    loadLocalUserData();

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
              setUserBalance(Number(data.credits) || 0);
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
            setTransactionHistory(parsedTx);
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
        console.error("Live user fetch error in ShopDocumentsMedia:", e);
      }
    };

    fetchLiveUserData(currentEmail);

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

  // --- 3. UNLOCKED INFO RESOLVER ---
  const getUnlockedInfo = (doc) => {
    if (!doc)
      return {
        isUnlocked: false,
        label: "ZAMKNUTÝ DOKUMENT",
        isLifetime: false,
      };

    const cleanUserTier = String(userTier || "FREE")
      .toUpperCase()
      .trim();
    const docTier = String(doc.tier || "FREE")
      .toUpperCase()
      .trim();
    const docId = String(doc.id || "")
      .toLowerCase()
      .trim();
    const docKey = String(doc.nodeKey || "")
      .toLowerCase()
      .trim();

    // 1. Bezplatné položky
    if (
      doc.priceOc === 0 ||
      docTier === "FREE" ||
      doc.displayPrice === "0 OC / Zdarma"
    ) {
      return {
        isUnlocked: true,
        label: "ODOMKNUTÝ // BEZPLATNÝ KÓDEX",
        isLifetime: true,
      };
    }

    // 2. Crown Root Access
    if (
      cleanUserTier === "ARCHITECT" ||
      cleanUserTier === "MASTER" ||
      cleanUserTier === "MASTERMIUM"
    ) {
      return {
        isUnlocked: true,
        label: "ODOMKNUTÝ // CROWN ROOT ACCESS",
        isLifetime: true,
      };
    }

    // 3. Kontrola odomknutých kľúčov v Set
    let safeUnlocked = Array.isArray(unlockedNodes) ? unlockedNodes : [];
    const unlockedSet = new Set(
      safeUnlocked.map((item) => String(item).toLowerCase().trim()),
    );

    if (
      unlockedSet.has(docId) ||
      unlockedSet.has(docKey) ||
      unlockedSet.has("nexus_master_key") ||
      unlockedSet.has("zip_mastermium_all_pack")
    ) {
      // Find timestamp if available
      const tx = transactionHistory.find((t) => {
        const itemCode = String(
          t?.item || t?.item_id || t?.code || "",
        ).toLowerCase();
        return itemCode === docId || itemCode === docKey;
      });
      const timeLabel = tx?.timestamp
        ? new Date(tx.timestamp).toLocaleString("sk-SK")
        : "TRVALÁ LICENCIA";
      return {
        isUnlocked: true,
        label: `ODOMKNUTÉ // ${timeLabel}`,
        isLifetime: true,
      };
    }

    // 4. BEZPEČNOSTNÝ FIREWALL: Predplatné PRO/OMEGA NEODOMYKÁ všetky produkty neobmedzene zadarmo!
    // Nárok na prístup k nezakúpeným produktom sa čerpá Výhradne cez VIP Lístky (+2/mesiac) v handleGetSignedUrl.

    return { isUnlocked: false, label: "ZAMKNUTÝ DOKUMENT", isLifetime: false };
  };

  // --- 4. TOOLTIP HANDLERS ---
  const handleShowTooltip = (title, text, e) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    triggerHover();
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
        text: text || getTooltip("TAB_DOCUMENTS"),
        isScanning: false,
      }));
    }, 500); // 0.5s Mystery Scanning delay
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
    setFloatingTooltip((prev) => ({
      ...prev,
      visible: false,
      isScanning: false,
    }));
  };

  // --- 5. URL DEEP LINKING & ROUTING ---
  useEffect(() => {
    const currentPath =
      typeof window !== "undefined"
        ? window.location.pathname
        : location.pathname;
    const currentSearch =
      typeof window !== "undefined" ? window.location.search : location.search;

    const pathParts = currentPath.split("/").filter(Boolean);
    const searchParams = new URLSearchParams(currentSearch);

    const [root, p1, p2, p3, p4] = pathParts;

    let docFromUrl = searchParams.get("doc");
    let catFromUrl = searchParams.get("cat");
    let tierFromUrl = searchParams.get("tier");

    if (root && root.toLowerCase() === "shop") {
      if (p1 && p1.toLowerCase() === "documents") {
        if (p2) {
          if (
            p2.toLowerCase().startsWith("kt-") ||
            (typeof CATEGORY_MAP !== "undefined" && CATEGORY_MAP[p2])
          ) {
            catFromUrl = p2;
            if (p3) {
              docFromUrl =
                p3.toLowerCase() === "camp" && p4
                  ? `CAMP_${p4.replace(/^[_/-]/, "")}`
                  : p3;
            }
          } else {
            docFromUrl = p2;
          }
        }
      } else if (
        p1 &&
        (p1.toLowerCase().startsWith("kt-") ||
          (typeof CATEGORY_MAP !== "undefined" && CATEGORY_MAP[p1]))
      ) {
        catFromUrl = p1;
        if (p2) docFromUrl = p2;
      }
    }

    if (docFromUrl) {
      const found = allDocumentItems.find(
        (d) => d.id === docFromUrl || d.nodeKey === docFromUrl,
      );
      if (found) setSelectedDocId(found.id);
    } else {
      setSelectedDocId(null);
    }

    if (catFromUrl && CATEGORY_MAP[catFromUrl]) {
      setActiveSubcat(catFromUrl);
    }
    if (tierFromUrl && TIER_TOOLTIPS[tierFromUrl]) {
      setTierFilter(tierFromUrl);
    }
  }, [location.pathname, location.search, allDocumentItems]);

  // Selected document resolver (OPRAVA: hľadá v allDocumentItems namiesto len SHOP_DOCUMENTS_DATA)
  const selectedDoc = useMemo(() => {
    if (!selectedDocId) return null;
    return allDocumentItems.find((d) => d.id === selectedDocId) || null;
  }, [selectedDocId, allDocumentItems]);

  // --- 6. AUTOCOMPLETE ENGINE ---
  const autocompleteSuggestions = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    if (!query || query.length < 2) return [];

    return SHOP_DOCUMENTS_DATA.filter((doc) => {
      const titleMatch = doc.title.toLowerCase().includes(query);
      const idMatch = doc.id.toLowerCase().includes(query);
      const keyMatch = doc.nodeKey
        ? doc.nodeKey.toLowerCase().includes(query)
        : false;
      return titleMatch || idMatch || keyMatch;
    }).slice(0, 8);
  }, [searchTerm]);

  const handleSelectAutocomplete = (doc) => {
    triggerClick();
    setSearchTerm(doc.title);
    setIsAutocompleteOpen(false);
    handleOpenDetail(doc.id, doc.subCategory);
  };

  // --- 7. FILTERING ENGINE ---
  const filteredDocs = useMemo(() => {
    return allDocumentItems.filter((docItem) => {
      // 1. PRIMÁRNY FILTER: VŠETKO vs 69x TAKTICKÉ KÓDEXY vs 5x MASTER ALL-PACKS
      if (activeSubcat !== "ALL") {
        const itemCat = String(docItem.subCategory || "")
          .toLowerCase()
          .trim();
        const targetCat = String(activeSubcat).toLowerCase().trim();
        const isPack =
          itemCat === "zip-packs" ||
          itemCat === "kt-balene-aktiva" ||
          String(docItem.id || "").startsWith("PACK_") ||
          String(docItem.id || "").startsWith("zip_");

        if (targetCat === "zip-packs" || targetCat === "kt-balene-aktiva") {
          if (!isPack) return false;
        } else if (
          targetCat === "kt-kodexy" ||
          targetCat === "kt-kodexy-singles" ||
          targetCat === "singles"
        ) {
          if (isPack) return false;
        } else if (itemCat !== targetCat) {
          return false;
        }
      }

      // 2. SEKUNDÁRNY FILTER: STRIKTNÝ -MIUM TIER (FREE, FREEMIUM, PROMIUM, OMEGAMIUM, MASTERMIUM)
      if (tierFilter !== "ALL") {
        const itemTier = String(docItem.tier || "FREE")
          .toUpperCase()
          .trim();
        const targetFilter = String(tierFilter).toUpperCase().trim();

        if (targetFilter === "FREE" && itemTier !== "FREE") return false;
        if (targetFilter === "FREEMIUM" && itemTier !== "FREEMIUM")
          return false;
        if (
          (targetFilter === "PRO" || targetFilter === "PROMIUM") &&
          itemTier !== "PROMIUM" &&
          itemTier !== "PRO"
        )
          return false;
        if (
          (targetFilter === "OMEGA" || targetFilter === "OMEGAMIUM") &&
          itemTier !== "OMEGAMIUM" &&
          itemTier !== "OMEGA"
        )
          return false;
        if (
          (targetFilter === "MASTER" || targetFilter === "MASTERMIUM") &&
          itemTier !== "MASTERMIUM" &&
          itemTier !== "MASTER"
        )
          return false;
      }

      // 3. TERCIÁRNY SÉMANTICKÝ TAG Z DRAWERA (4x PRE, Vibe, Benefit)
      if (preFilterTag && preFilterTag.trim()) {
        const detail = docItem?.scanDetail || {};
        const sub = detail?.preKohoJeToto || {};

        // Normalizátor diakritiky (odstráni dĺžne a mäkčene pre 100% zhodu)
        const normalizeText = (str) =>
          String(str || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();

        const searchCorpus = normalizeText(
          (docItem?.title || "") +
            " " +
            (docItem?.subCategory || "") +
            " " +
            (docItem?.vibe || "") +
            " " +
            (docItem?.desc || "") +
            " " +
            (detail.zameranieAPointa || "") +
            " " +
            (detail.detailnyPopis || detail.desc || "") +
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
            (detail.akoToFunguje || "") +
            " " +
            (detail.coZiskas || ""),
        );

        const cleanTag = normalizeText(preFilterTag);
        if (!searchCorpus.includes(cleanTag)) return false;
      }

      // 4. TEXTOVÉ VYHĽADÁVANIE (Search Bar)
      if (searchTerm && searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const titleMatch = String(docItem.title || "")
          .toLowerCase()
          .includes(query);
        const idMatch = String(docItem.id || "")
          .toLowerCase()
          .includes(query);
        const keyMatch = docItem.nodeKey
          ? String(docItem.nodeKey).toLowerCase().includes(query)
          : false;
        const subCatMatch = docItem.subCategory
          ? String(docItem.subCategory).toLowerCase().includes(query)
          : false;
        const zameranieMatch = docItem.scanDetail?.zameranieAPointa
          ? String(docItem.scanDetail.zameranieAPointa)
              .toLowerCase()
              .includes(query)
          : false;

        return (
          titleMatch || idMatch || keyMatch || subCatMatch || zameranieMatch
        );
      }

      return true;
    });
  }, [allDocumentItems, activeSubcat, tierFilter, preFilterTag, searchTerm]);

  // Tier Counts Calculation
  const tierCounts = useMemo(() => {
    const counts = {
      ALL: SHOP_DOCUMENTS_DATA.length,
      FREE: 0,
      FREEMIUM: 0,
      PROMIUM: 0,
      OMEGAMIUM: 0,
      MASTERMIUM: 0,
    };
    SHOP_DOCUMENTS_DATA.forEach((d) => {
      const t = (d.tier || "FREE").toUpperCase().trim();
      if (t === "FREE") counts.FREE++;
      else if (t === "FREEMIUM") counts.FREEMIUM++;
      else if (t === "PROMIUM" || t === "PRO") counts.PROMIUM++;
      else if (t === "OMEGAMIUM" || t === "OMEGA") counts.OMEGAMIUM++;
      else if (t === "MASTERMIUM" || t === "MASTER") counts.MASTERMIUM++;
    });
    return counts;
  }, []);

  // --- 8. HANDLERS ---
  const handleOpenDetail = (docId, subCat) => {
    triggerClick();
    setSelectedDocId(docId);
    setSignedUrl("");
    setCopiedLink(false);

    const doc = allDocumentItems.find((d) => d.id === docId);
    const cat = subCat || doc?.subCategory || "kt-01";
    navigate(`/shop/documents/${cat}/${docId}`);
  };

  const handleCloseDetail = () => {
    triggerClick();
    setSelectedDocId(null);
    setSignedUrl("");

    const currentCat = activeSubcat !== "ALL" ? activeSubcat : "";
    const newPath = currentCat
      ? `/shop/documents/${currentCat}`
      : "/shop/documents";
    navigate(newPath);
  };

  const handleSelectCategory = (catKey) => {
    triggerClick();
    setActiveSubcat(catKey);
    const newPath =
      catKey !== "ALL" ? `/shop/documents/${catKey}` : "/shop/documents";
    navigate(newPath);
  };

  const handleCopyLink = (docId, subCat) => {
    triggerSuccess();
    const doc = SHOP_DOCUMENTS_DATA.find((d) => d.id === docId);
    const cat = subCat || doc?.subCategory || "kt-01";
    const fullUrl = `${window.location.origin}/shop/documents/${cat}/${docId}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleUnlockWithVipTicket = async (docItem) => {
    if (!docItem) return;
    const docObj = typeof docItem === "object" ? docItem : selectedDoc;
    if (!docObj) return;

    const docId = String(docObj.id || "");
    const docKey = String(docObj.nodeKey || "");

    if (isDocUnlocked(docObj)) {
      alert(
        `✅ Kódex "${docObj.title}" je už doživotne odomknutý v tvojom profile!`,
      );
      return;
    }

    const userKey = userEmail
      ? userEmail.replace(/[^a-zA-Z0-9]/g, "_")
      : "guest";
    const savedUsedTickets = Number(
      localStorage.getItem(`nexus_vip_tickets_used_documents_${userKey}`) || 0,
    );
    const savedMonth =
      localStorage.getItem(`nexus_vip_tickets_month_documents_${userKey}`) ||
      "";

    const ticketStatus = getVipTicketsStatus(
      userTier,
      "documents",
      savedUsedTickets,
      savedMonth,
    );

    if (ticketStatus.available <= 0) {
      triggerError();
      alert(
        `🔒 NEMÁŠ DOSTUPNÝ VIP LÍSTOK!\n\n` +
          `Tvoja kvóta pre [TIER: ${userTier}] je ${ticketStatus.max} ks/mesiac.\n` +
          `Vyčerpané: ${ticketStatus.used}/${ticketStatus.max}.\n` +
          `Odomkni kódex za OC kredity alebo počkaj na 1. deň v mesiaci.`,
      );
      return;
    }

    const confirmUnlock = window.confirm(
      `🎫 Chceš použiť 1 VIP Lístok na doživotné odomknutie celého kódexu:\n"${docObj.title}"?\n\n(Zostane ti ${ticketStatus.available - 1}/${ticketStatus.max} lístkov).`,
    );
    if (!confirmUnlock) return;

    try {
      triggerSuccess();
      const newUsed = ticketStatus.used + 1;
      const currentMonth = ticketStatus.month;

      // 🛡️ A) Zápis do izolovaného kľúča používateľa
      localStorage.setItem(
        `nexus_vip_tickets_used_documents_${userKey}`,
        String(newUsed),
      );
      localStorage.setItem(
        `nexus_vip_tickets_month_documents_${userKey}`,
        currentMonth,
      );

      // 🛡️ B) Zápis do univerzálneho kľúča PRE HLAVIČKU (ShopVIP_Wallet v ShopHeaderComponent)
      localStorage.setItem("nexus_vip_tickets_used_documents", String(newUsed));
      localStorage.setItem("nexus_vip_tickets_month_documents", currentMonth);

      const newUnlockedNodes = [
        ...new Set(
          [...unlockedNodes, docObj.id, docObj.nodeKey].filter(Boolean),
        ),
      ];
      setUnlockedNodes(newUnlockedNodes);

      const newTx = {
        id: `TXN-VIP-${Date.now()}`,
        category: "DOCUMENTS", // 👈 Zaručí zobrazenie v záložke [Docs] aj [Všetko]
        type: "VIP_TICKET_USE", // 👈 Zaručí zobrazenie v záložke [🎫 VIP Lístky]
        item: docId,
        title: `🎫 VIP Odomknutie: ${String(docObj?.title || "Taktický Kódex")}`,
        amount_oc: 0,
        price: "1 VIP Lístok", // 👈 Ochrana pred filtrom costStr v GlobalShopHistory
        amount: "1 VIP Lístok",
        timestamp: new Date().toISOString(),
      };

      setTransactionHistory((prev) => [
        newTx,
        ...(Array.isArray(prev) ? prev : []),
      ]);

      // 2. Bezpečné zistenie aktívneho emailu operátora
      const activeEmail =
        userEmail ||
        (() => {
          try {
            return JSON.parse(
              localStorage.getItem("nexus_active_identity") || "{}",
            ).email;
          } catch (e) {
            return null;
          }
        })() ||
        "dusan.fajnor.personall@gmail.com";

      // 3. Zápis do LocalStorage (Peňaženka, Identita, Globálna história)
      try {
        const localHist = JSON.parse(
          localStorage.getItem("nexus_global_shop_history") || "[]",
        );
        localStorage.setItem(
          "nexus_global_shop_history",
          JSON.stringify([
            newTx,
            ...(Array.isArray(localHist) ? localHist : []),
          ]),
        );

        const localTxHist = JSON.parse(
          localStorage.getItem("nexus_transaction_history") || "[]",
        );
        localStorage.setItem(
          "nexus_transaction_history",
          JSON.stringify([
            newTx,
            ...(Array.isArray(localTxHist) ? localTxHist : []),
          ]),
        );

        ["nexus_active_identity", "nexus_user", "nexus_active_user"].forEach(
          (key) => {
            const item = localStorage.getItem(key);
            if (item) {
              try {
                const parsed = JSON.parse(item);
                parsed.unlockedNodes = newUnlockedNodes;
                parsed.unlocked_nodes = newUnlockedNodes;
                const curTx = Array.isArray(parsed.transaction_history)
                  ? parsed.transaction_history
                  : Array.isArray(parsed.transactionHistory)
                    ? parsed.transactionHistory
                    : [];
                parsed.transaction_history = [newTx, ...curTx];
                parsed.transactionHistory = [newTx, ...curTx];
                localStorage.setItem(key, JSON.stringify(parsed));
              } catch (e) {}
            }
          },
        );
      } catch (err) {
        console.error("❌ [VIP_LOCAL_TX_ERROR]:", err);
      }

      // 4. Zápis do Supabase DB (Tabuľka users: unlocked_nodes + transaction_history)
      if (activeEmail && supabase) {
        try {
          const { data: dbUser } = await supabase
            .from("users")
            .select("transaction_history, unlocked_nodes")
            .eq("email", activeEmail)
            .maybeSingle();

          let txList = [];
          try {
            txList =
              typeof dbUser?.transaction_history === "string"
                ? JSON.parse(dbUser.transaction_history)
                : Array.isArray(dbUser?.transaction_history)
                  ? dbUser.transaction_history
                  : [];
          } catch (e) {}

          txList.unshift(newTx);

          await supabase
            .from("users")
            .update({
              unlocked_nodes: newUnlockedNodes,
              transaction_history: JSON.stringify(txList),
            })
            .eq("email", activeEmail);
        } catch (dbErr) {
          console.error("❌ [SUPABASE VIP TX UPDATE ERROR]:", dbErr);
        }
      }

      // 5. Doručenie systémovej správy do INBOXu cez NexusDB
      if (NexusDB && typeof NexusDB.sendMessage === "function") {
        try {
          await NexusDB.sendMessage(
            { email: "system_core", displayName: "NEXUS_SYSTEM" },
            activeEmail,
            `🎫 [VIP LÍSTOK POUŽITÝ]\n\nPoužili ste 1 VIP Lístok na doživotné odomknutie kódexu: "${docObj?.title}".\nZostáva VIP lístkov pre dokumenty tento mesiac: ${ticketStatus.max - newUsed}/${ticketStatus.max}.\nDoživotný prístup (PDF náhľad, PPTX aj ZIP balík) bol aktivovaný.`,
          );
        } catch (msgErr) {
          console.error("❌ [INBOX SEND ERROR]:", msgErr);
        }
      }

      // 6. Vyvolanie globálnych reaktívnych eventov pre okamžitú obnovu Peňaženky a UI
      window.dispatchEvent(new Event("nexus_vip_tickets_updated"));
      window.dispatchEvent(new Event("nexus_user_updated"));
      window.dispatchEvent(new Event("nexus_shop_history_updated"));
      window.dispatchEvent(new Event("storage"));
      alert(
        `🎉 KÓDEX USPEŠNE ODOMKNUTÝ!\n\nKódex "${docObj.title}" máš natrvalo sprístupnený (Náhľad PDF, PPTX aj ZIP balík).`,
      );
    } catch (err) {
      console.error("[NEXUS VIP UNLOCK ERROR]:", err);
      triggerError();
    }
  };

  // ⚡ GENERUJE SUPABASE SECURE SIGNED URL (60s EXPIRÁCIA + TIER CLEARANCE)
  const handleGetSignedUrl = async (docItem) => {
    if (!docItem) return;
    const docObj = typeof docItem === "object" ? docItem : selectedDoc;
    if (!docObj) return;

    // Kontrola oprávnenia: Musí byť odomknutý (FREE, zakúpený alebo cez VIP)
    if (!isDocUnlocked(docObj)) {
      triggerError();
      const access = getDocAccessInfo(docObj);
      if (access.status === "VIP_AVAILABLE") {
        handleUnlockWithVipTicket(docObj);
      } else {
        alert(
          `🔒 Kódex je zamknutý. Najprv ho odomkni cez VIP lístok alebo OC kredity.`,
        );
        setPaywallCampaign(docObj);
        setPaywallOpen(true);
      }
      return;
    }

    const targetPath = docObj?.supabasePdfPath || docObj?.pdfUrl || "";
    if (!targetPath) {
      alert("⚠️ Chýba URL adresa dokumentu.");
      return;
    }

    const pdfWindow = window.open("about:blank", "_blank");
    setLoadingSignedUrl(true);

    try {
      // 🛡️ Očistenie cesty a oprava bucketu na "shop"
      const cleanPath = targetPath
        .replace(
          /^https?:\/\/[^\/]+\/storage\/v1\/object\/(public|authenticated)\/[^\/]+\//,
          "",
        )
        .replace(/^shop[\/\\]+/, "")
        .replace(/^pdf-assets[\/\\]+/, "")
        .replace(/^\/+/, "");

      const { data, error } = await supabase.storage
        .from("shop") // 👈 OPRAVENÝ BUCKET ZO ZLÉHO "pdf-assets" NA "shop"
        .createSignedUrl(cleanPath, 60);

      if (!error && data?.signedUrl) {
        setSignedUrl(data.signedUrl);
        triggerSuccess();
        if (pdfWindow) pdfWindow.location.href = data.signedUrl;
      } else {
        // Okamžitý záchranný fallback na priame overené CDN URL
        console.warn(
          "⚠️ [SUPABASE SIGNED URL FALLBACK] Používam priame CDN:",
          docObj.pdfUrl,
        );
        if (pdfWindow) {
          pdfWindow.location.href = docObj.pdfUrl || targetPath;
        } else {
          window.open(docObj.pdfUrl || targetPath, "_blank");
        }
      }
    } catch (err) {
      console.warn("⚠️ [SUPABASE ERROR]: Fallback na priame CDN URL:", err);
      if (pdfWindow) {
        pdfWindow.location.href = docObj.pdfUrl || targetPath;
      } else {
        window.open(docObj.pdfUrl || targetPath, "_blank");
      }
    } finally {
      setLoadingSignedUrl(false);
    }
  };

  const CAT_FOLDER_MAP = {
    "kt-01": "kt-01-kodex-dead-books",
    "kt-02": "kt-02-digital-data-books",
    "kt-03": "kt-03-digital-data-books-arzenal",
    "kt-04": "kt-04-oc-apps-saas",
    "kt-05": "kt-05-oc-sluzby-mentoring",
    "kt-06": "kt-06-system-engine-infra",
    "kt-07": "kt-07-cognitive-lexicons",
    "kt-08": "kt-08-core-systems-id00-id15",
  };

  const TIER_FOLDER_MAP = {
    FREE: "zdarma",
    ZDARMA: "zdarma",
    FREEMIUM: "freemium",
    PRO: "promium",
    PROMIUM: "promium",
    OMEGA: "omegamium",
    OMEGAMIUM: "omegamium",
    MASTER: "mastermium",
    MASTERMIUM: "mastermium",
  };

  // 🛡️ REZOLVER ŽIVÝCH SUPABASE CDN ADRIES PRE ZIP ARCHÍVY
  const resolveZipUrl = (target) => {
    if (!target) return "";

    // A) Ak je odovzdaný priamy string
    if (typeof target === "string") {
      if (target.startsWith("http")) return target;
      const cleanName = target.split("/").pop();
      return `https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/${cleanName}`;
    }

    // B) Ak má objekt už definovanú priamu zipUrl alebo downloadUrl
    const directUrl =
      target.zipUrl || target.downloadUrl || target.zip_url || "";
    if (directUrl && directUrl.startsWith("http")) {
      // Ak odkaz náhodou obsahuje starý prefix "zip-assets", presmerujeme ho na ostrý bucket "shop"
      if (directUrl.includes("/object/public/zip-assets/")) {
        const rawFileName = directUrl.split("/").pop();
        return `https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/${rawFileName}`;
      }
      return directUrl;
    }

    // C) Deterministická rekonštrukcia z ID alebo PDF cesty
    let baseFileName = "";
    if (target.pdfUrl) {
      baseFileName = target.pdfUrl
        .split("/")
        .pop()
        .replace(/\.pdf\$/i, ".zip");
    } else if (target.pptxUrl) {
      baseFileName = target.pptxUrl
        .split("/")
        .pop()
        .replace(/\.pptx\$/i, ".zip");
    } else if (target.id) {
      baseFileName = `${target.id}.zip`;
    }

    return `https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/documents/prezentacia-snimok_69x_pdf-pptx/zip-assets-doubles-packs/${baseFileName}`;
  };

  const handleDownloadZip = (target, title) => {
    triggerSuccess();

    const finalUrl = resolveZipUrl(target);

    if (finalUrl) {
      const docId = String(target?.id || "");
      const docKey = String(target?.nodeKey || "");
      if (docId || docKey) {
        setUnlockedNodes((prev) => [
          ...new Set([...prev, docId, docKey].filter(Boolean)),
        ]);
      }

      window.dispatchEvent(new Event("nexus_user_updated"));

      const a = document.createElement("a");
      a.href = finalUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.warn(
        "⚠️ [NEXUS ZIP WARNING]: No valid URL resolved for:",
        title || target,
      );
      alert("⚠️ Nepodarilo sa získať platnú URL adresu pre ZIP balík.");
    }
  };

  return (
    <div className="w-full text-zinc-300 font-mono pb-32 animate-in fade-in duration-700 selection:bg-[#FFD700] selection:text-black relative">
      {/* 🚀 SEO & METATAGY */}
      {selectedDoc ? (
        <MetaTags
          title={`NEXUS CODEXES | ${selectedDoc.title}`}
          description={
            selectedDoc.scanDetail?.zameranieAPointa ||
            selectedDoc.desc ||
            "Taktický kódex OS Genesis"
          }
          image={
            selectedDoc.imageFormats?.ratio16x9 ||
            selectedDoc.imageUrl ||
            "/img-nexus/pages/ShopDocumentsMedia.jpg"
          }
          color={getDimensionColor(selectedDoc.dimension) || "#00F3FF"}
          url={`/shop/documents/${selectedDoc.subCategory}/${selectedDoc.id}`}
        />
      ) : (
        <MetaTags
          title="NEXUS CODEXES | 69 Taktických Kódexov & PDF Knihy"
          description="Knižnica 69 taktických kódexov, sémantické výťahy z mŕtvych kníh a PDF/PPTX študijné materiály."
          image="/img-nexus/pages/ShopDocumentsMedia.jpg"
          color="#00F3FF"
          url="/shop/documents"
        />
      )}

      {/* 👑 JEDNOTNÁ MASTER HLAVIČKA A NAVIGÁCIA */}
      <ShopHeaderComponent
        onShowTooltip={handleShowTooltip}
        onUpdateTooltipPos={handleUpdateTooltipPos}
        onHideTooltip={handleHideTooltip}
        activeTab="documents"
      />

      {/* 👑 VÝHODY ČLENSTVA (SPOILER ACCORDION) */}
      <VyhodyClenstva
        onShowTooltip={handleShowTooltip}
        onUpdateTooltipPos={handleUpdateTooltipPos}
        onHideTooltip={handleHideTooltip}
      />

      {/* 🎛️ DVOJÚROVŇOVÉ FILTRAČNÉ CENTRUM (ShopFilters.jsx) */}
      <ShopFilters
        type="documents"
        activeSubcat={activeSubcat}
        onSubcatChange={(catKey) => handleSelectCategory(catKey)}
        activeTier={tierFilter}
        onTierChange={(newTier) => setTierFilter(newTier)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        layoutView={layoutView}
        onLayoutChange={setLayoutView}
        onResetFilters={() => {
          triggerClick();
          setActiveSubcat("ALL");
          setTierFilter("ALL");
          setPreFilterTag("");
          setSearchTerm("");
          navigate("/shop/documents");
        }}
        dataItems={allDocumentItems}
        onSelectItem={(docId) => {
          const item = allDocumentItems.find((d) => d.id === docId);
          handleOpenDetail(docId, item?.subCategory);
        }}
        handleShowTooltip={handleShowTooltip}
        handleUpdateTooltipPos={handleUpdateTooltipPos}
        handleHideTooltip={handleHideTooltip}
      />

      {/* 🧠 TERCIÁRNA SÉMANTICKÁ DIAGNOSTIKA (TRINITY PRE-FILTER SPÚŠŤAČ) */}
      <div className="flex justify-end mb-6 -mt-2">
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

      {/* 🚪 TERCIÁRNY SÉMANTICKÝ DRAWER */}
      <ModalPreFilterDrawer
        isOpen={isPreFilterOpen}
        onClose={() => setIsPreFilterOpen(false)}
        items={allDocumentItems}
        selectedTag={preFilterTag}
        onSelectTag={(tag) => {
          setPreFilterTag(tag);
          if (tag) setActiveSubcat("ALL"); // 👈 Zaručí, že nájdený produkt z inej kategórie nezostane skrytý
        }}
        onResetFilters={() => {
          setPreFilterTag("");
        }}
      />

      {/* ==================================================================== */}
      {/* 🖼️ CARD GRID RENDERER (69 UNIFIED NODES) */}
      {/* ==================================================================== */}
      {filteredDocs.length === 0 ? (
        <div className="bg-[#050A0E] border border-red-500/30 p-12 rounded-2xl text-center flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300">
          <Activity size={48} className="text-red-500 animate-pulse" />
          <div className="text-lg font-bold text-white tracking-widest uppercase">
            ŽIADNE SÚBORY NENÁJDENÉ
          </div>
          <p className="text-xs text-zinc-400 max-w-md">
            Skontroluj zadatý text vo vyhľadávaní alebo resetuj filtre kategórií
            a TIER úrovní.
          </p>
          <button
            onClick={() => {
              triggerClick();
              setSearchTerm("");
              setActiveSubcat("ALL");
              setTierFilter("ALL");
            }}
            className="px-6 py-2.5 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-black border border-red-500 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Resetovať Filtre
          </button>
        </div>
      ) : layoutView === "LIST" ? (
        /* 📋 PODROBNÝ ZOZNAM (DATABÁZOVÁ TABUĽKA & MOBILE STRIPS) */
        <div className="bg-[#050A0E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* MOBILE LIST STRIPS (< 768px) */}
          <div className="md:hidden divide-y divide-white/10">
            {filteredDocs.map((docItem) => {
              const tierColor = getTierColor(docItem.tier);
              const cardImg =
                docItem.imageFormats?.ratio16x9 || docItem.imageUrl;
              return (
                <div
                  key={docItem.id}
                  className="p-3.5 flex items-center justify-between gap-3 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={cardImg}
                      alt={docItem.title}
                      className="w-12 h-12 rounded-lg object-cover border border-white/20 shrink-0 select-none pointer-events-none"
                      onError={(e) => {
                        e.target.src = "/img-nexus/pages/ShopPage.jpg";
                      }}
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-white text-xs truncate">
                        {docItem.title}
                      </div>
                      <div className="text-[10px] text-zinc-400 flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-[#00f3ff] font-mono">
                          {docItem.id}
                        </span>
                        <span
                          style={{ color: tierColor }}
                          className="font-black uppercase"
                        >
                          {docItem.tier}
                        </span>
                        <span className="text-zinc-300 font-bold">
                          {docItem.displayPrice || `${docItem.priceOc} OC`}
                        </span>
                        {docItem.cleanDeliverable?.fileSizeMb && (
                          <span className="text-zinc-500 text-[9px]">
                            {docItem.cleanDeliverable.fileSizeMb} MB
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        handleOpenDetail(docItem.id, docItem.subCategory)
                      }
                      className="px-3 py-2 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-xl text-[10px] font-extrabold uppercase transition-all shrink-0 cursor-pointer flex items-center gap-1 shadow-md"
                    >
                      <Eye size={12} /> Detail
                    </button>
                    {(() => {
                      const unlockedInfo = getUnlockedInfo(docItem);
                      return unlockedInfo.isUnlocked ? (
                        <button
                          onClick={() =>
                            handleDownloadZip(docItem, docItem.title)
                          }
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              "ZIP BALÍK",
                              "Stiahnuť zbalený ZIP archív zo Supabase Storage",
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="p-2 bg-black/60 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 rounded-xl transition-all cursor-pointer"
                        >
                          <Download size={14} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            triggerError();
                            setPaywallCampaign({
                              id: docItem.id,
                              title: docItem.title,
                              tier: docItem.tier,
                              priceOc: docItem.priceOc,
                              priceEur: docItem.priceEur,
                              price: `${docItem.priceOc} OC / ${docItem.priceEur}`,
                              category: "DOCUMENTS",
                              image: cardImg,
                            });
                            setPaywallOpen(true);
                          }}
                          onMouseEnter={(e) =>
                            handleShowTooltip(
                              "[ 🔒 ZIP ARCHÍV ZAMKNUTÝ ]",
                              `Tento kódex [TIER: ${docItem.tier || "FREE"}] je uzamknutý. Pre stiahnutie ZIP je potrebné ho odomknúť za OC kredity.`,
                              e,
                            )
                          }
                          onMouseMove={handleUpdateTooltipPos}
                          onMouseLeave={handleHideTooltip}
                          className="p-2 bg-[#FFD700]/10 hover:bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/50 rounded-xl transition-all cursor-pointer shadow-[0_0_10px_rgba(255,215,0,0.2)]"
                        >
                          <Lock size={14} />
                        </button>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP TABLE (>= 768px) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-black/80 text-[#FFD700] uppercase font-black tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-4">ID / Kategória</th>
                  <th className="p-4">Titul Dokumentu & Špecifikácia</th>
                  <th className="p-4">Formát / Veľkosť</th>
                  <th className="p-4">TIER</th>
                  <th className="p-4">Cena (OC / EUR)</th>
                  <th className="p-4 text-right">Akcie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredDocs.map((doc) => {
                  const tierColor = getTierColor(doc.tier);
                  const isPptx =
                    doc.pptxUrl || doc.specs?.format?.includes("PPTX");
                  return (
                    <tr
                      key={doc.id}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="p-4 font-bold text-[#00f3ff]">
                        {doc.id}
                        <div className="text-[9px] text-zinc-500 font-normal uppercase">
                          {doc.subCategory}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-white group-hover:text-[#FFD700] transition-colors">
                          {doc.title}
                        </div>
                        <div className="text-[10px] text-zinc-400 truncate max-w-md">
                          {doc.scanDetail?.zameranieAPointa || doc.desc}
                        </div>
                        <div className="text-[9px] text-zinc-500 mt-1 flex items-center gap-2">
                          <span>CDN: {doc.specs?.storageBucket || "shop"}</span>
                          <span>•</span>
                          <span className="text-[#39FF14]">
                            SHA-256 IP Overené
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-bold text-zinc-300">
                            {isPptx ? "PDF + PPTX" : "PDF"}
                          </span>
                          {doc.cleanDeliverable?.fileSizeMb && (
                            <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[9px] text-zinc-400 font-mono">
                              {doc.cleanDeliverable.fileSizeMb} MB
                            </span>
                          )}
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
                          {doc.tier}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-white">
                        {doc.displayPrice ||
                          `${doc.priceOc} OC / ${doc.priceEur}`}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() =>
                            handleOpenDetail(doc.id, doc.subCategory)
                          }
                          className="px-3 py-1.5 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer inline-flex items-center gap-1 shadow-sm"
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
        /* 🖼️ MRIEŽKOVÝ RENDER (3 STĹPCE alebo 4 STĹPCE) */
        <div
          className={`grid gap-6 ${
            layoutView === "GRID_3"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {filteredDocs.map((docItem) => {
            const exactTierColor = getTierColor(docItem.tier);
            const exactDimColor = getDimensionColor(docItem.dimension);
            const unlockedInfo = getUnlockedInfo(docItem);
            const cardImg = docItem.imageFormats?.ratio16x9 || docItem.imageUrl;
            const isPptx =
              docItem.pptxUrl || docItem.specs?.format?.includes("PPTX");
            const packMb =
              docItem.cleanDeliverable?.fileSizeMb || docItem.specs?.fileSizeMb;

            return (
              <div
                key={docItem.id}
                className="bg-[#050A0E] border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative"
                style={{
                  boxShadow: `0 0 20px rgba(0,0,0,0.8)`,
                }}
              >
                {/* TOP IMAGE WITH HOVER GLOW EFFECT */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black/60">
                  <img
                    src={cardImg}
                    alt={docItem.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/img-nexus/pages/ShopPage.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-transparent to-transparent opacity-80" />

                  {/* EXACT TIER BADGE TOP LEFT */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 flex-wrap">
                    {isDocUnlocked(docItem) && (
                      <span
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "[ 🔓 ODOMKNUTÝ UZOL ]",
                            unlockedInfo.label ||
                              "Tento kódex máte trvalo odomknutý.",
                            e,
                          )
                        }
                        onMouseMove={handleUpdateTooltipPos}
                        onMouseLeave={handleHideTooltip}
                        className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest bg-[#050A0E]/95 text-[#39FF14] border border-[#39FF14] backdrop-blur-md shadow-[0_0_10px_rgba(57,255,20,0.3)] flex items-center gap-1 cursor-help"
                      >
                        <CheckCircle2 size={10} className="text-[#39FF14]" />{" "}
                        ODOMKNUTÉ
                      </span>
                    )}
                    <span
                      onMouseEnter={(e) =>
                        handleShowTooltip(
                          `[ 🏷️ TIER: ${docItem.tier || "FREE"} ]`,
                          TIER_TOOLTIPS[docItem.tier] ||
                            `Prístupová úroveň: ${docItem.tier || "FREE"}`,
                          e,
                        )
                      }
                      onMouseMove={handleUpdateTooltipPos}
                      onMouseLeave={handleHideTooltip}
                      className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest border backdrop-blur-md shadow-md cursor-help"
                      style={{
                        color: exactTierColor,
                        borderColor: `${exactTierColor}80`,
                        backgroundColor: "rgba(5, 10, 14, 0.90)",
                      }}
                    >
                      {docItem.tier}
                    </span>
                    <span
                      onMouseEnter={(e) =>
                        handleShowTooltip(
                          `[ 📁 KATEGÓRIA: ${docItem.subCategory} ]`,
                          CATEGORY_TOOLTIPS[docItem.subCategory] ||
                            CATEGORY_MAP[docItem.subCategory] ||
                            docItem.subCategory,
                          e,
                        )
                      }
                      onMouseMove={handleUpdateTooltipPos}
                      onMouseLeave={handleHideTooltip}
                      className="px-2 py-0.5 rounded-md text-[9px] font-bold text-zinc-300 bg-black/80 border border-white/10 uppercase cursor-help"
                    >
                      {docItem.subCategory}
                    </span>
                  </div>

                  {/* EXACT DIMENSION BADGE TOP RIGHT */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className="px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider border backdrop-blur-md shadow-md block"
                      style={{
                        color: exactDimColor,
                        borderColor: `${exactDimColor}80`,
                        backgroundColor: "rgba(5, 10, 14, 0.90)",
                      }}
                    >
                      {docItem.dimension || "OS GENESIS"}
                    </span>
                  </div>

                  {/* ⚡ EXTERIÉR: TECHNICKÝ FORMÁT & VEĽKOSŤ SÚBORU NAD OBRÁZKOM */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[9px] font-mono pointer-events-none">
                    <span className="px-2 py-0.5 rounded bg-black/85 text-[#00f3ff] border border-[#00f3ff]/40 font-bold uppercase backdrop-blur-md flex items-center gap-1 shadow-md">
                      <FileText size={10} />{" "}
                      {isPptx ? "PDF + PPTX" : "PDF MASTER"}
                    </span>
                    {packMb && (
                      <span className="px-2 py-0.5 rounded bg-black/85 text-zinc-300 border border-white/20 font-bold backdrop-blur-md flex items-center gap-1 shadow-md">
                        <Download size={10} /> {packMb} MB
                      </span>
                    )}
                  </div>
                </div>

                {/* CARD BODY CONTENT */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-extrabold text-white group-hover:text-[#FFD700] transition-colors leading-snug line-clamp-2">
                      {docItem.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                      {docItem.scanDetail?.zameranieAPointa ||
                        docItem.desc ||
                        "Sémanticky dekomprimovaný kódex OS Genesis."}
                    </p>

                    {/* 🛡️ EXTERIÉR: MICRO DÁTOVÉ METADÁTA Z DATA.JS */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-2 border-t border-white/5 text-zinc-400">
                      <div className="truncate">
                        <span className="text-zinc-600">CDN:</span>{" "}
                        <strong className="text-zinc-300">
                          {docItem.specs?.storageBucket || "shop"}
                        </strong>
                      </div>
                      <div className="truncate text-right">
                        <span className="text-zinc-600">BEZPEČNOSŤ:</span>{" "}
                        <strong className="text-[#39FF14]">
                          {docItem.ipSecurity?.sha256Pdf
                            ? "SHA-256 IP"
                            : "SECURED"}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* PRICE & ACTION BUTTONS */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[9px] text-zinc-500 uppercase tracking-widest">
                        Cena
                      </div>
                      <div
                        className="text-xs font-black"
                        style={{ color: exactTierColor }}
                      >
                        {docItem.displayPrice ||
                          `${docItem.priceOc} OC / ${docItem.priceEur}`}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() =>
                          handleOpenDetail(docItem.id, docItem.subCategory)
                        }
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "SKENOVAŤ DETAIL",
                            "Otvoriť kompletný 6-dielny protokol a technický pas",
                            e,
                          )
                        }
                        onMouseMove={handleUpdateTooltipPos}
                        onMouseLeave={handleHideTooltip}
                        className="px-3 py-2 bg-white/5 hover:bg-[#FFD700] text-white hover:text-black border border-white/15 hover:border-[#FFD700] rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Eye size={12} /> Detail
                      </button>

                      {(() => {
                        const access = getDocAccessInfo(docItem);

                        // 1. Odomknuté (alebo FREE Balík 1) -> Povolené zelené stiahnutie
                        if (access.isUnlocked) {
                          return (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownloadZip(
                                  docItem.downloadUrl || docItem.zipUrl,
                                  docItem.title,
                                );
                              }}
                              onMouseEnter={(e) =>
                                handleShowTooltip(
                                  "STIAHNUŤ ZIP",
                                  "Stiahnuť zbalený ZIP archív zo Supabase Storage",
                                  e,
                                )
                              }
                              onMouseMove={handleUpdateTooltipPos}
                              onMouseLeave={handleHideTooltip}
                              className="p-2 bg-[#39FF14]/10 hover:bg-[#39FF14] text-[#39FF14] hover:text-black border border-[#39FF14]/40 rounded-xl transition-all cursor-pointer shadow-[0_0_10px_rgba(57,255,20,0.2)]"
                            >
                              <Download size={14} />
                            </button>
                          );
                        }

                        // 2. Kusový kódex s dostupným VIP lístkom -> Fialové VIP tlačidlo
                        if (access.status === "VIP_AVAILABLE") {
                          return (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUnlockWithVipTicket(docItem);
                              }}
                              onMouseEnter={(e) =>
                                handleShowTooltip(
                                  "VIP LÍSTOK",
                                  `Odomknúť doživotne cez VIP lístok (${access.availableTickets}/${access.maxTickets})`,
                                  e,
                                )
                              }
                              onMouseMove={handleUpdateTooltipPos}
                              onMouseLeave={handleHideTooltip}
                              className="px-2.5 py-2 bg-[#BF00FF]/15 hover:bg-[#BF00FF] text-[#BF00FF] hover:text-black border border-[#BF00FF]/60 rounded-xl transition-all cursor-pointer shadow-[0_0_12px_rgba(191,0,255,0.35)] flex items-center gap-1 text-[10px] font-black"
                            >
                              <Zap size={12} /> VIP
                            </button>
                          );
                        }

                        // 3. Zamknutý All-Pack alebo kódex bez lístka -> Žltý Paywall Zámok
                        return (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerClick();
                              setPaywallCampaign(docItem);
                              setPaywallOpen(true);
                            }}
                            onMouseEnter={(e) =>
                              handleShowTooltip(
                                "ZAMKNUTÉ",
                                `Odomknúť za ${docItem.priceOc || 2500} OC`,
                                e,
                              )
                            }
                            onMouseMove={handleUpdateTooltipPos}
                            onMouseLeave={handleHideTooltip}
                            className="p-2 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/40 rounded-xl transition-all cursor-pointer"
                          >
                            <Lock size={14} />
                          </button>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ==================================================================== */}
      {/* 🔍 DETAILED MODAL: SKENOVAŤ DETAIL V20 — OPRAVA Z-INDEXU & VIEWPORTU */}
      {/* ==================================================================== */}
      {selectedDoc && (
        <div
          onClick={handleCloseDetail}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[10000] flex items-start justify-center p-3 sm:p-4 md:p-6 pt-20 md:pt-24 pb-12 md:pb-16 overflow-y-auto animate-in fade-in duration-300 cursor-pointer"
          style={{ zIndex: 10000 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#050A0E] border-2 rounded-3xl max-w-5xl w-full my-auto overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] relative text-left font-mono cursor-default flex flex-col max-h-[calc(100vh-6.5rem)]"
            style={{
              borderColor: getTierColor(selectedDoc.tier),
              boxShadow: `0 0 35px ${getTierColor(selectedDoc.tier)}30`,
            }}
          >
            {/* 👑 MODAL HEADER (STICKY NA VRCHU MODALU, NIKDY SA NESTRÁCA POD MENU) */}
            <div className="p-4 sm:p-5 md:p-6 bg-black/95 border-b border-white/10 flex items-center justify-between relative shrink-0">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <span
                  className="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-widest border shrink-0"
                  style={{
                    color: getTierColor(selectedDoc.tier),
                    borderColor: `${getTierColor(selectedDoc.tier)}80`,
                    backgroundColor: `${getTierColor(selectedDoc.tier)}20`,
                  }}
                >
                  {selectedDoc.tier}
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm sm:text-base md:text-xl font-extrabold text-white tracking-wide truncate">
                    {selectedDoc.title}
                  </h2>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5 truncate">
                    ID: {selectedDoc.id} | {selectedDoc.dimension} |{" "}
                    {selectedDoc.subCategory}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCloseDetail}
                onMouseEnter={triggerHover}
                className="p-2 bg-white/5 hover:bg-red-500 text-zinc-400 hover:text-white rounded-xl border border-white/10 transition-all cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* 📜 MODAL CONTENT BODY (SCROLLOVATEĽNÉ VNÚTRO — RÁMČEK MODALU STÁLE DRŽÍ) */}
            <div className="p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto custom-scroll flex-1">
              {/* TOP COVER & SUMMARY GRID + 3X FORMÁTY OBÁLKY */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video md:aspect-[4/3] flex items-center justify-center">
                    <img
                      src={
                        selectedDoc.imageFormats?.ratio16x9 ||
                        selectedDoc.imageUrl ||
                        "/img-nexus/pages/ShopPage.jpg"
                      }
                      alt={selectedDoc.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[9px] text-[#FFD700] font-black border border-[#FFD700]/30 uppercase">
                      16:9 MASTER
                    </div>
                  </div>

                  {/* 🖼️ INTERIÉR: PREPÍNAČ / PREHĽAD 3 FORMÁTOV OBÁLOK Z DATA.JS */}
                  {selectedDoc.imageFormats && (
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-2">
                      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider flex items-center justify-between">
                        <span>Formáty Obálok:</span>
                        <span className="text-[#00f3ff] text-[9px]">
                          16:9 • 1:1 • 9:16
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[9px]">
                        {selectedDoc.imageFormats.ratio16x9 && (
                          <a
                            href={selectedDoc.imageFormats.ratio16x9}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 bg-black/60 hover:bg-[#00f3ff]/20 text-zinc-300 hover:text-[#00f3ff] border border-white/10 rounded-lg transition-colors truncate"
                          >
                            Desktop
                          </a>
                        )}
                        {selectedDoc.imageFormats.ratio1x1 && (
                          <a
                            href={selectedDoc.imageFormats.ratio1x1}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 bg-black/60 hover:bg-[#00f3ff]/20 text-zinc-300 hover:text-[#00f3ff] border border-white/10 rounded-lg transition-colors truncate"
                          >
                            Feed 1:1
                          </a>
                        )}
                        {selectedDoc.imageFormats.ratio9x16 && (
                          <a
                            href={selectedDoc.imageFormats.ratio9x16}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 bg-black/60 hover:bg-[#00f3ff]/20 text-zinc-300 hover:text-[#00f3ff] border border-white/10 rounded-lg transition-colors truncate"
                          >
                            Shorts
                          </a>
                        )}
                      </div>
                      {selectedDoc.imageFormats.zip && (
                        <button
                          type="button"
                          onClick={() =>
                            window.open(selectedDoc.imageFormats.zip, "_blank")
                          }
                          className="w-full py-1 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-lg text-[9px] font-bold uppercase transition-all flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Download size={10} /> Stiahnuť Obálky (ZIP)
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* ZAMERANIE A POINTA + DETAILNÝ POPIS */}
                <div className="md:col-span-2 space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-[#FFD700] font-black uppercase tracking-widest mb-1.5 flex items-center gap-2">
                      <Sparkles size={14} className="text-[#FFD700]" />{" "}
                      ZAMERANIE A POINTA
                    </div>
                    <p className="text-xs text-zinc-200 leading-relaxed font-bold">
                      {selectedDoc.scanDetail?.zameranieAPointa ||
                        selectedDoc.desc}
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-[#00f3ff] font-black uppercase tracking-widest mb-1.5 flex items-center gap-2">
                      <Info size={14} className="text-[#00f3ff]" /> DETAILNÝ
                      POPIS
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {selectedDoc.scanDetail?.detailnyPopis ||
                        selectedDoc.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* 🛠️ INTERIÉR: TECHNICKÝ PAS & SPECS TREZORU (Z DATA.JS) */}
              <div className="p-4 md:p-5 bg-black/60 border border-[#00f3ff]/30 rounded-2xl space-y-3">
                <div className="text-xs font-black text-[#00f3ff] uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
                  <Cpu size={16} className="text-[#00f3ff]" />
                  TECHNICKÝ PAS & ARCHÍV SPECIFIKÁCIE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                      Formát Dodania
                    </div>
                    <div className="text-white font-bold truncate">
                      {selectedDoc.specs?.format ||
                        (selectedDoc.pptxUrl
                          ? "PDF Master + PPTX"
                          : "PDF Master")}
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                      Veľkosť Archívu
                    </div>
                    <div className="text-[#39FF14] font-black">
                      {selectedDoc.cleanDeliverable?.fileSizeMb ||
                        selectedDoc.specs?.fileSizeMb ||
                        "25.0"}{" "}
                      MB
                      <span className="text-[9px] text-zinc-500 font-normal ml-1">
                        ({selectedDoc.cleanDeliverable?.fileName || "ZIP"})
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                      Cloudové Úložisko
                    </div>
                    <div className="text-[#FFD700] font-bold truncate">
                      Supabase Bucket: '
                      {selectedDoc.specs?.storageBucket || "shop"}'
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                      Rozlíšenie & Render
                    </div>
                    <div className="text-zinc-300 font-bold truncate">
                      {selectedDoc.specs?.resolution || "Vector & 4K High-Res"}
                    </div>
                  </div>
                </div>
              </div>

              {/* 6-PART PROTOCOL SECTIONS */}
              {selectedDoc.scanDetail && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 1. ČO ZÍSKAŠ */}
                  <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-green-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <CheckCircle2 size={12} /> ČO ZÍSKAŠ
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      {selectedDoc.scanDetail.coZiskas ||
                        "Kompletný digitálny balík vrátane PDF taktického blueprintu, PPTX prezentácie a SHA-256 licenčného kľúča."}
                    </p>
                  </div>

                  {/* 2. KOMPLETNÝ 4x PRE PROTOKOL (VŠETKY 4 PARAMETRE Z DATA.JS) */}
                  <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Cpu size={12} /> 4x PRE PROTOKOL (SÉMANTICKÁ ŠTRUKTÚRA)
                    </div>
                    <div className="text-xs text-zinc-300 space-y-1.5 font-mono">
                      {/* PRE KOHO */}
                      {(selectedDoc.scanDetail.preKoho ||
                        selectedDoc.preKoho) && (
                        <div>
                          <span className="text-purple-300 font-bold">
                            1. Pre koho:
                          </span>{" "}
                          <span>
                            {selectedDoc.scanDetail.preKoho ||
                              selectedDoc.preKoho}
                          </span>
                        </div>
                      )}
                      {/* PRE AKÝ TYP ĽUDÍ */}
                      {(selectedDoc.scanDetail.preAkyTypLudi ||
                        selectedDoc.scanDetail.preKohoJeToto
                          ?.preAkyTypLudi) && (
                        <div>
                          <span className="text-purple-300 font-bold">
                            2. Typ ľudí:
                          </span>{" "}
                          <span>
                            {selectedDoc.scanDetail.preAkyTypLudi ||
                              selectedDoc.scanDetail.preKohoJeToto
                                ?.preAkyTypLudi}
                          </span>
                        </div>
                      )}
                      {/* PRE AKÝ TYP ČLOVEKA */}
                      {(selectedDoc.scanDetail.preAkyTypCloveka ||
                        selectedDoc.scanDetail.preKohoJeToto
                          ?.preAkyTypCloveka) && (
                        <div>
                          <span className="text-purple-300 font-bold">
                            3. Typ človeka:
                          </span>{" "}
                          <span>
                            {selectedDoc.scanDetail.preAkyTypCloveka ||
                              selectedDoc.scanDetail.preKohoJeToto
                                ?.preAkyTypCloveka}
                          </span>
                        </div>
                      )}
                      {/* PRE AKÝ TYP SPOLOČNOSTI */}
                      {(selectedDoc.scanDetail.preAkyTypSpolocnosti ||
                        selectedDoc.scanDetail.preKohoJeToto
                          ?.preAkyTypSpolocnosti) && (
                        <div>
                          <span className="text-purple-300 font-bold">
                            4. Spoločnosť:
                          </span>{" "}
                          <span>
                            {selectedDoc.scanDetail.preAkyTypSpolocnosti ||
                              selectedDoc.scanDetail.preKohoJeToto
                                ?.preAkyTypSpolocnosti}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. AKO TO FUNGUJE */}
                  <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-yellow-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Zap size={12} /> AKO TO FUNGUJE
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      {selectedDoc.scanDetail.akoToFunguje ||
                        "Po overení transakcie získa operátor okamžitý prístup k CDN serveru Supabase."}
                    </p>
                  </div>

                  {/* 4. K ČOMU SA DÁ POUŽIŤ */}
                  <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                    <div className="text-[10px] text-orange-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Terminal size={12} /> K ČOMU SA DÁ POUŽIŤ
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      {selectedDoc.scanDetail.kCemuSaTotoDaPouzit ||
                        selectedDoc.scanDetail.kComuSaToDaPouzit ||
                        "Na okamžitú optimalizáciu systémových procesov."}
                    </p>
                  </div>
                </div>
              )}

              {/* 🔐 INTERIÉR: KRYPTO RODNÝ LIST & SHA-256 OVEROVACÍ PROTOKOL (Z DATA.JS) */}
              {selectedDoc.ipSecurity && (
                <div className="p-5 bg-black/80 border border-green-500/40 rounded-2xl space-y-4 font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="text-xs font-black text-green-400 uppercase tracking-widest flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-400" />
                      KRYPTO RODNÝ LIST & OVERENIE SHA-256 INTEGRITY
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/30 uppercase font-black">
                      V20 SHIELD VERIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-0.5">
                        Autor & Bionický Kľúč
                      </div>
                      <div className="text-white font-bold truncate">
                        {selectedDoc.ipSecurity.author}
                      </div>
                      <div className="text-[9px] text-zinc-400 truncate mt-0.5">
                        CryptoKey: {selectedDoc.ipSecurity.cryptoKey}
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-0.5">
                        Vydavateľ & Infraštruktúra
                      </div>
                      <div className="text-white font-bold truncate">
                        {selectedDoc.ipSecurity.publisher}
                      </div>
                      <div className="text-[9px] text-zinc-400 truncate mt-0.5">
                        {selectedDoc.ipSecurity.copyrightText}
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-0.5">
                        Licenčná Úroveň
                      </div>
                      <div className="text-[#FFD700] font-black truncate">
                        {selectedDoc.ipSecurity.licenseTier}
                      </div>
                      <div className="text-[9px] text-zinc-400 truncate mt-0.5">
                        Vodoznak:{" "}
                        {selectedDoc.specs?.watermark || "PROPRIETARY NEXUS"}
                      </div>
                    </div>
                  </div>

                  {/* SHA-256 HASH & TERMINÁLOVÁ SONDA */}
                  {selectedDoc.ipSecurity.sha256Pdf && (
                    <div className="p-3.5 bg-black/90 border border-white/10 rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#39FF14] font-black tracking-widest uppercase">
                          SHA-256 PDF KONTROLNÝ SÚČET:
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              selectedDoc.ipSecurity.sha256Pdf,
                            );
                            triggerSuccess();
                          }}
                          className="text-[#FFD700] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Copy size={12} /> Kopírovať Hash
                        </button>
                      </div>
                      <div className="text-[10px] text-zinc-300 font-mono bg-white/5 p-2 rounded-lg break-all select-all border border-white/5">
                        {selectedDoc.ipSecurity.sha256Pdf}
                      </div>
                      {selectedDoc.scanDetail?.akoOveritSha256 && (
                        <p className="text-[10px] text-zinc-400 leading-relaxed pt-1">
                          {selectedDoc.scanDetail.akoOveritSha256}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 🎬 MP4 VIDEO STANDBY PLAYER BLOCK */}
              <div className="p-5 bg-black/80 border border-[#FFD700]/40 rounded-2xl space-y-3">
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
                    src={`https://www.youtube.com/embed/${selectedDoc.youtubeId || "mF0v6VBQlbw"}`}
                    title="Video Prehľad"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>

                <div className="text-[10px] text-zinc-400 flex items-center justify-between pt-1">
                  <span>⚡ SYSTEM STANDBY | AWAITING VIDEO DATA UPLOADED</span>
                  <span>Pripravujeme: MP4 Video prehľad pre tento manuál.</span>
                </div>
              </div>
            </div>

            {Array.isArray(selectedDoc.phases) &&
              selectedDoc.phases.length > 0 && (
                <div className="p-6 bg-black/90 border border-cyan-500/30 rounded-2xl space-y-4 shadow-[0_0_25px_rgba(0,243,255,0.15)] font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="text-xs font-black text-[#00f3ff] uppercase tracking-widest flex items-center gap-2">
                      <Layers size={16} />[ 🛡️ PROOF OF PROCESS — 4 FÁZY & 20
                      ÚKONOV EXEKÚCIE ]
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase font-black">
                      20 ÚKONOV AKTÍVNYCH
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedDoc.phases.map((ph) => (
                      <div
                        key={ph.phaseId || ph.title}
                        className="p-3.5 bg-white/5 border border-white/10 rounded-xl space-y-2"
                      >
                        <div className="text-[11px] font-black text-[#FFD700] uppercase tracking-wider flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-[#39FF14]" />
                          {ph.title}
                        </div>
                        <ul className="space-y-1 text-[10px] text-zinc-300">
                          {Array.isArray(ph.steps) &&
                            ph.steps.map((st, sIdx) => (
                              <li
                                key={sIdx}
                                className="flex items-start gap-1.5 leading-relaxed"
                              >
                                <span className="text-zinc-600 shrink-0">
                                  ▸
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

            {/* 💰 ACTION PORT & CHECKOUT BUTTONS (STICKY NA SPODKU MODALU — NIKDY SA NEUTOPÍ) */}
            <div className="p-4 sm:p-5 md:p-6 bg-black/95 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 shrink-0">
              <div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  Cena Dokumentu
                </div>
                <div
                  className="text-xl font-black"
                  style={{ color: getTierColor(selectedDoc.tier) }}
                >
                  {selectedDoc.displayPrice ||
                    `${selectedDoc.priceOc} OC / ${selectedDoc.priceEur}`}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                <button
                  onClick={() =>
                    handleCopyLink(selectedDoc.id, selectedDoc.subCategory)
                  }
                  onMouseEnter={(e) =>
                    handleShowTooltip(
                      "KOPÍROVAŤ LINK",
                      "Kopírovať priamy canonical URL odkaz na kódex",
                      e,
                    )
                  }
                  onMouseLeave={handleHideTooltip}
                  className="px-4 py-3 bg-white/5 hover:bg-white/15 text-white border border-white/15 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? (
                    <Check size={14} className="text-green-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                  {copiedLink ? "Link Skopírovaný!" : "Kopírovať Link"}
                </button>

                {/* 📦 ZIP BALÍK */}
                {(() => {
                  const unlockedInfo = getUnlockedInfo(selectedDoc);
                  return unlockedInfo.isUnlocked ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadZip(selectedDoc, selectedDoc.title);
                      }}
                      onMouseEnter={triggerHover}
                      className="px-4 py-3 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <Download size={14} /> ZIP Balík
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        triggerError();
                        setPaywallCampaign(selectedDoc);
                        setPaywallOpen(true);
                      }}
                      onMouseEnter={(e) =>
                        handleShowTooltip(
                          "[ 🔒 ZIP ARCHÍV ZAMKNUTÝ ]",
                          "Vyžaduje sa odomknutie kódexu pre prístup k zbalenému ZIP archívu.",
                          e,
                        )
                      }
                      onMouseMove={handleUpdateTooltipPos}
                      onMouseLeave={handleHideTooltip}
                      className="px-4 py-3 bg-[#FFD700]/10 hover:bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/50 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                    >
                      <Lock size={14} /> ZIP Zamknutý
                    </button>
                  );
                })()}

                {/* 🛡️ JEDINÉ ZABEZPEČENÉ TLAČIDLO (60s SIGNED URL + TIER CLEARANCE) */}
                <button
                  onClick={() => handleGetSignedUrl(selectedDoc)}
                  onMouseEnter={triggerHover}
                  disabled={loadingSignedUrl}
                  className={`px-4 py-3 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
                    isDocUnlocked(selectedDoc)
                      ? "bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-black border border-green-500/30"
                      : "bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-zinc-500"
                  }`}
                >
                  <Eye size={14} />{" "}
                  {loadingSignedUrl ? "Nahrávam..." : "Náhľad PDF"}
                </button>

                {/* 📊 PPTX PREZENTÁCIA (ZABEZPEČENÁ POD isDocUnlocked FIREWALL) */}
                {selectedDoc.pptxUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      if (isDocUnlocked(selectedDoc)) {
                        triggerSuccess();
                        window.open(selectedDoc.pptxUrl, "_blank");
                      } else {
                        triggerError();
                        const access = getDocAccessInfo(selectedDoc);
                        if (access.status === "VIP_AVAILABLE") {
                          handleUnlockWithVipTicket(selectedDoc);
                        } else {
                          alert(
                            "🔒 PPTX prezentácia je dostupná len pre odomknuté kódexy.",
                          );
                          setPaywallCampaign(selectedDoc);
                          setPaywallOpen(true);
                        }
                      }
                    }}
                    onMouseEnter={triggerHover}
                    className={`px-4 py-3 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 cursor-pointer ${
                      isDocUnlocked(selectedDoc)
                        ? "bg-[#FF6600]/10 hover:bg-[#FF6600] text-[#FF6600] hover:text-black border border-[#FF6600]/30 shadow-[0_0_10px_rgba(255,102,0,0.2)]"
                        : "bg-zinc-800/60 text-zinc-500 border border-zinc-700 cursor-not-allowed"
                    }`}
                  >
                    <Download size={14} /> PPTX
                  </button>
                )}

                {/* 🔓 UNLOCK / VIP / PAYWALL TLAČIDLO */}
                {(() => {
                  const access = getDocAccessInfo(selectedDoc);

                  // 1. Odomknuté
                  if (access.isUnlocked) {
                    return (
                      <button
                        type="button"
                        disabled
                        className="px-6 py-3 bg-[#050A0E] text-[#39FF14] border-2 border-[#39FF14] rounded-xl text-xs font-black uppercase flex items-center gap-2 cursor-default select-none shadow-[0_0_20px_rgba(57,255,20,0.35)]"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#39FF14] animate-pulse"
                        />{" "}
                        ODOMKNUTÉ // DOŽIVOTNÝ PRÍSTUP
                      </button>
                    );
                  }

                  // 2. K dispozícii VIP lístok -> Fialové tlačidlo
                  if (access.status === "VIP_AVAILABLE") {
                    return (
                      <button
                        type="button"
                        onClick={() => handleUnlockWithVipTicket(selectedDoc)}
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "UPLATNIŤ VIP LÍSTOK",
                            `Použiť 1 z ${access.availableTickets} VIP lístkov pre doživotné odomknutie celého kódexu.`,
                            e,
                          )
                        }
                        onMouseLeave={handleHideTooltip}
                        className="px-6 py-3 bg-[#BF00FF] hover:bg-[#BF00FF]/80 text-black border-2 border-[#BF00FF] rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(191,0,255,0.5)]"
                      >
                        <Zap size={16} /> ODOMKNÚŤ CEZ VIP LÍSTOK (
                        {access.availableTickets}/{access.maxTickets})
                      </button>
                    );
                  }

                  // 3. Zamknuté bez lístka -> Žltý Paywall
                  return (
                    <button
                      type="button"
                      onClick={() => {
                        triggerClick();
                        setPaywallCampaign({
                          ...selectedDoc,
                          priceOc: selectedDoc.priceOc ?? 2500,
                          priceEur: selectedDoc.priceEur ?? "25.00 €",
                        });
                        setPaywallOpen(true);
                      }}
                      onMouseEnter={(e) =>
                        handleShowTooltip(
                          "ODOMKNÚŤ UZOL",
                          `Odomknúť doživotný prístup za ${selectedDoc.priceOc || 2500} OC kreditov`,
                          e,
                        )
                      }
                      onMouseLeave={handleHideTooltip}
                      className="px-6 py-3 bg-[#FFD700] hover:bg-[#FFD700]/80 text-black border border-[#FFD700] rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                    >
                      <Zap size={14} /> Odomknúť za{" "}
                      {selectedDoc.priceOc || 2500} OC
                    </button>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 🔮 GLOBAL PAYWALL MODAL FOR DOCUMENTS PURCHASES */}
      {/* ==================================================================== */}
      <GlobalPaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        campaign={paywallCampaign}
        userBalance={userBalance}
        userTier={userTier}
        requiredTier={paywallCampaign?.tier || "FREE"}
      />

      {/* ==================================================================== */}
      {/* 🚀 VIEWPORT FLOATING TOOLTIP OVERLAY */}
      {/* ==================================================================== */}
      {floatingTooltip.visible && (
        <div
          className={`fixed z-[99999] pointer-events-none rounded-xl border font-mono text-xs shadow-2xl backdrop-blur-xl transition-all duration-150 ${
            floatingTooltip.isScanning
              ? "bg-black/90 border-[#00f3ff] text-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.4)] animate-pulse p-2.5"
              : "bg-[#080d12]/95 border-[#00f3ff]/60 text-zinc-200 shadow-[0_0_25px_rgba(0,243,255,0.3)] max-w-xs p-3.5"
          }`}
          style={{
            zIndex: 99999,
            left: Math.min(
              Math.max(floatingTooltip.x, 10),
              typeof window !== "undefined" ? window.innerWidth - 320 : 800,
            ),
            top: Math.max(floatingTooltip.y - 90, 10),
          }}
        >
          {floatingTooltip.isScanning ? (
            <div className="flex items-center gap-1.5 text-[#00f3ff] font-black text-xs">
              <HelpCircle size={14} className="animate-spin text-[#00f3ff]" />
              <span>❓</span>
            </div>
          ) : (
            <>
              {floatingTooltip.title && (
                <div className="font-bold text-[#00f3ff] text-[11px] mb-1 uppercase tracking-wider border-b border-white/10 pb-1">
                  {floatingTooltip.title}
                </div>
              )}
              <div className="text-[10px] text-zinc-300 leading-snug">
                {floatingTooltip.text}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopDocumentsMedia;
