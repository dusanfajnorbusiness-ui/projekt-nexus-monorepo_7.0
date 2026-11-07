import { MetaTags } from "@shared/components/MetaTags.jsx";
import { getTooltip, TOOLTIP_CONFIG } from "@shared/data/TooltipsShop.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { GlobalPaywallModal } from "@shop/components/GlobalPaywallModal.jsx";
import { ModalPreFilterDrawer } from "@shop/components/ModalPreFilterDrawer.jsx";
import { ShopFilters } from "@shop/components/ShopFilters.jsx";
import { ShopHeaderComponent } from "@shop/components/ShopHeaderComponent.jsx";
import { VyhodyClenstva } from "@shop/components/Vyhody-Clenstva.jsx";
import { getDimensionColor, getTierColor, SHOP_IMAGE_DATA } from "@shop/data/ShopImageMedia.js";
/* eslint-disable no-undef */
import { Activity, CheckCircle2, Copy, Cpu, Download, Eye, Filter, HelpCircle, Info, PlayCircle, Share2, Shield, Sparkles, Terminal, X, Zap } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ============================================================================
// 👑 NEXUS OS: SHOPIMAGEMEDIA COMPONENT V20.80 (3S MYSTERY SCANNER & MP4 STANDBY)
// File: src/components/ShopImageMedia.jsx
// Status: 100% GROUNDED // ANTI-PIRACY SHIELD // 21 BOT AVATARS (ID00 - ID20)
// ============================================================================

export const ShopImageMedia = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // --- COMPONENT STATES ---
  const [activeSubcat, setActiveSubcat] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState("ALL");
  const [layoutView, setLayoutView] = useState("GRID_3"); // GRID_3 | GRID_MEDIUM | LIST
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAvatarId, setCopiedAvatarId] = useState(null);
  const [modalTab, setModalTab] = useState("OVERVIEW"); // OVERVIEW | PHASES | SECURITY | SOCIAL
  const [copiedSocialKey, setCopiedSocialKey] = useState(null);
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
  const [isPreFilterOpen, setIsPreFilterOpen] = useState(false);
  const [preFilterTag, setPreFilterTag] = useState("");

  // --- 1. ČÍTANIE URL PARAMETROV (DEEP LINKING) ---
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const catFromUrl = searchParams.get("cat");
    const tierFromUrl = searchParams.get("tier");
    const avatarFromUrl =
      searchParams.get("avatar") || searchParams.get("image");
    const prefilterFromUrl = searchParams.get("prefilter");

    if (avatarFromUrl) {
      const found = SHOP_IMAGE_DATA.find(
        (img) => img.id === avatarFromUrl || img.nodeKey === avatarFromUrl,
      );
      if (found) setSelectedDocId(found.id);
    } else {
      setSelectedDocId(null);
    }

    if (catFromUrl) {
      setActiveSubcat(catFromUrl);
    } else {
      setActiveSubcat("ALL");
    }

    if (tierFromUrl) {
      const normTier = tierFromUrl.toUpperCase().trim();
      if (normTier === "PRO") setTierFilter("PROMIUM");
      else if (normTier === "OMEGA") setTierFilter("OMEGAMIUM");
      else if (normTier === "MASTER") setTierFilter("MASTERMIUM");
      else setTierFilter(normTier);
    } else {
      setTierFilter("ALL");
    }

    if (prefilterFromUrl) {
      setPreFilterTag(prefilterFromUrl);
    }
  }, [location.pathname, location.search]);

 
  const handleSelectCategory = (catKey) => {
    if (typeof triggerClick === "function") triggerClick();
    setActiveSubcat(catKey);
  };

  const handleSelectTier = (tierKey) => {
    if (typeof triggerClick === "function") triggerClick();
    const cleanTier = String(tierKey || "ALL").toUpperCase();
    setTierFilter(cleanTier);
  };

  const handleResetAllFilters = () => {
    if (typeof triggerClick === "function") triggerClick();
    setActiveSubcat("ALL");
    setTierFilter("ALL");
    if (typeof setPreFilterTag === "function") setPreFilterTag("");
    setSearchTerm("");
  };

  // --- 3. DYNAMICKÝ VÝPOČET TIER POČÍTADIEL (-MIUM KÁNON) ---
  const tierCounts = useMemo(() => {
    const counts = {
      ALL: SHOP_IMAGE_DATA.length,
      FREE: 0,
      FREEMIUM: 0,
      PROMIUM: 0,
      OMEGAMIUM: 0,
      MASTERMIUM: 0,
    };
    SHOP_IMAGE_DATA.forEach((item) => {
      const t = String(item.tier || "FREE")
        .toUpperCase()
        .trim();
      if (t === "FREE" || t === "ZDARMA" || item.priceOc === 0) counts.FREE++;
      else if (t === "FREEMIUM") counts.FREEMIUM++;
      else if (t === "PRO" || t === "PROMIUM") counts.PROMIUM++;
      else if (t === "OMEGA" || t === "OMEGAMIUM") counts.OMEGAMIUM++;
      else if (t === "MASTER" || t === "MASTERMIUM") counts.MASTERMIUM++;
    });
    return counts;
  }, []);

  // --- 4. FILTROVACÍ KERNEL SO 100% ZHODOU PRE SÉMANTIKU ---
  const filteredDocs = useMemo(() => {
    return SHOP_IMAGE_DATA.filter((item) => {
      // 1. Primárny filter (Kategória)
      if (activeSubcat !== "ALL" && item.subCategory !== activeSubcat) {
        return false;
      }

      // 2. Sekundárny filter: Striktný -MIUM TIER
      if (tierFilter !== "ALL") {
        const itemTier = String(item.tier || "FREE")
          .toUpperCase()
          .trim();
        const target = String(tierFilter).toUpperCase().trim();

        if (
          target === "FREE" &&
          itemTier !== "FREE" &&
          itemTier !== "ZDARMA" &&
          item.priceOc !== 0
        )
          return false;
        if (target === "FREEMIUM" && itemTier !== "FREEMIUM") return false;
        if (
          (target === "PRO" || target === "PROMIUM") &&
          itemTier !== "PRO" &&
          itemTier !== "PROMIUM"
        )
          return false;
        if (
          (target === "OMEGA" || target === "OMEGAMIUM") &&
          itemTier !== "OMEGA" &&
          itemTier !== "OMEGAMIUM"
        )
          return false;
        if (
          (target === "MASTER" || target === "MASTERMIUM") &&
          itemTier !== "MASTER" &&
          itemTier !== "MASTERMIUM"
        )
          return false;
      }

      // 3. Terciárny Sémantický filter (100% zhodný normalizátor s Drawerom)
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
            (item?.nodeKey || "") +
            " " +
            (item?.desc || "") +
            " " +
            (detail.zameranieAPointa || "") +
            " " +
            (detail.detailnyPopis || "") +
            " " +
            (detail.coZiskas || "") +
            " " +
            (detail.preKoho || "") +
            " " +
            (detail.preAkyTypLudi || sub.preAkyTypLudi || "") +
            " " +
            (detail.preAkyTypCloveka || sub.preAkyTypCloveka || "") +
            " " +
            (detail.preAkyTypSpolocnosti || sub.preAkyTypSpolocnosti || "") +
            " " +
            (detail.kCemuSaTotoDaPouzit || "") +
            " " +
            (detail.akoToFunguje || ""),
        );
        const cleanTag = normalizeText(preFilterTag);
        if (!corpus.includes(cleanTag)) return false;
      }

      // 4. Fulltext Vyhľadávanie
      if (searchTerm && searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const titleMatch = String(item.title || "")
          .toLowerCase()
          .includes(query);
        const idMatch = String(item.id || "")
          .toLowerCase()
          .includes(query);
        const keyMatch = String(item.nodeKey || "")
          .toLowerCase()
          .includes(query);
        const descMatch = String(item.desc || "")
          .toLowerCase()
          .includes(query);
        const zameranieMatch = String(item.scanDetail?.zameranieAPointa || "")
          .toLowerCase()
          .includes(query);
        return titleMatch || idMatch || keyMatch || descMatch || zameranieMatch;
      }

      return true;
    });
  }, [activeSubcat, tierFilter, preFilterTag, searchTerm]);

  // Paywall & User Balance States
  const [balance, setBalance] = useState(0);
  const [userTier, setUserTier] = useState("FREE");
  const [userEmail, setUserEmail] = useState("");
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallCampaign, setPaywallCampaign] = useState(null);

  // Synchronizácia účtu a odomknutých uzlov v reálnom čase
  useEffect(() => {
    const loadUserData = () => {
      let parsed = null;
      const activeIdentity =
        localStorage.getItem("nexus_active_identity") ||
        localStorage.getItem("nexus_user");
      if (activeIdentity) {
        try {
          parsed = JSON.parse(activeIdentity);
        } catch (e) {}
      }
      if (parsed) {
        if (parsed.email) setUserEmail(parsed.email);
        if (parsed.tier) setUserTier(parsed.tier);
        const creds = parsed.credits ?? parsed.ocCredits ?? parsed.balance;
        if (creds !== undefined && creds !== null)
          setBalance(Number(creds) || 0);
        const unl = parsed.unlockedNodes || parsed.unlocked_nodes || [];
        setUnlockedNodes(Array.isArray(unl) ? unl : []);
      }
      const credsVal =
        localStorage.getItem("nexus_credits") ||
        localStorage.getItem("nexus_balance");
      if (credsVal !== null && credsVal !== undefined)
        setBalance(Number(credsVal) || 0);
    };

    loadUserData();

    const handleUpdate = () => loadUserData();
    window.addEventListener("nexus_user_updated", handleUpdate);
    window.addEventListener("nexus_credits_updated", handleUpdate);
    window.addEventListener("nexus_identity_changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("nexus_user_updated", handleUpdate);
      window.removeEventListener("nexus_credits_updated", handleUpdate);
      window.removeEventListener("nexus_identity_changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  // Kontrola odomknutia avatara
  const isAvatarUnlocked = (doc) => {
    if (!doc) return false;
    if (doc.tier === "ZDARMA" || doc.priceOc === 0) return true;
    const cId = (doc.id || doc.nodeKey || "").toUpperCase();
    const nodeK = (doc.nodeKey || "").toUpperCase();
    return unlockedNodes.some((u) => {
      const uUpper = String(u).toUpperCase();
      return uUpper === cId || uUpper === nodeK;
    });
  };

  // Konverzia URL adresy na .jpg sémantiku pre Settings profil
  const getAvatarJpgUrl = (doc) => {
    if (!doc) return "";
    let url = doc.imageUrl || doc.localImage || "";
    if (url.endsWith(".png")) {
      url = url.substring(0, url.length - 4) + ".jpg";
    }
    if (!url.startsWith("http") && !url.startsWith("/")) {
      url = "/" + url;
    }
    return url;
  };

  const handleCopyAvatarJpgUrl = (doc) => {
    if (!doc) return;
    // Berieme priamo čistú Supabase PNG URL adresu bez volania getAvatarJpgUrl
    const cleanPngUrl = doc.imageUrl || doc.localImage || "";

    triggerSuccess();
    navigator.clipboard.writeText(cleanPngUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleDownloadZip = (zipUrl, fileName) => {
    if (!zipUrl) {
      console.warn("⚠️ [NEXUS-V20-CHIRURG] Chýbajúca zipUrl v dátach aktíva!");
      triggerError();
      return;
    }
    triggerSuccess();
    const safeUrl = String(zipUrl || "");
    const safeFileName = String(fileName || "avatar_bundle.zip");
    const link = document.createElement("a");
    link.href = safeUrl;
    link.setAttribute("download", safeFileName);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPaywall = (doc) => {
    triggerClick();
    // Premapovanie pre Paywall Modal (ocPrice + priceOc)
    const normalized = {
      ...doc,
      ocPrice: doc.ocPrice ?? doc.priceOc ?? 6900,
    };

    setPaywallCampaign(normalized);
    setPaywallOpen(true);
  };

  // 3s Mystery Radar Scanner Tooltip State
  const scanTimerRef = useRef(null);
  const [floatingTooltip, setFloatingTooltip] = useState({
    title: "",
    text: "",
    visible: false,
    isScanning: false,
    x: 0,
    y: 0,
  });

  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();
  const triggerSuccess = () => SoundFX && SoundFX.success && SoundFX.success();
  const triggerError = () => SoundFX && SoundFX.error && SoundFX.error();

  // --- 3S MYSTERY RADAR SCANNER TOOLTIP HANDLERS ---
  const handleShowTooltip = (title, text, e) => {
    triggerHover();
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    if (scanTimerRef.current) clearTimeout(scanTimerRef.current);

    setFloatingTooltip((prev) => ({
      ...prev,
      title: title || "[ 💡 NEXUS NÁPOVEDA ]",
      text: text || "Dátový uzol OS Genesis.",
      isScanning: false,
    }));

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
        text: text || "Dátový uzol OS Genesis.",
        isScanning: false,
      }));
    }, TOOLTIP_CONFIG?.SCAN_DELAY_MS || 3000);
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

  // Selected document resolver (PURE REACT STATE SSOT)
  const selectedDoc = useMemo(() => {
    if (!selectedDocId) return null;
    return SHOP_IMAGE_DATA.find((img) => img.id === selectedDocId) || null;
  }, [selectedDocId]);

  // Zámok scrollovania okna pri otvorenom detaile Avatara
  useEffect(() => {
    if (selectedDoc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDoc]);

  // Autocomplete Suggestions
  const autocompleteSuggestions = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    if (!query || query.length < 2) return [];

    return SHOP_IMAGE_DATA.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const idMatch = item.id.toLowerCase().includes(query);
      const keyMatch = item.nodeKey.toLowerCase().includes(query);
      return titleMatch || idMatch || keyMatch;
    }).slice(0, 8);
  }, [searchTerm]);

 const handleSelectAutocomplete = (item) => {
    triggerClick();
    setSearchTerm("");
    setIsAutocompleteOpen(false);
    setSelectedDocId(item.id);
  };

  const handleOpenDetail = (docId) => {
    triggerClick();
    setModalTab("OVERVIEW");
    setSelectedDocId(docId);
  };

  const handleCloseDetail = () => {
    triggerClick();
    setSelectedDocId(null);
  };

  // 👑 ZACHOVANÝ KÁNONICKÝ COPY HANDLER PRE PROFILE AVATAR CDN URL (SETTINGS INTEGRÁCIA)
  const handleCopyAvatarUrl = (imageUrl, isFreeOrUnlocked) => {
    if (!isFreeOrUnlocked) {
      triggerError();
      alert(
        "🔒 Tento Avatar je zamknutý! Pre získanie URL do profilu je vyžadovaný príslušný TIER alebo odomknutie za OC Kredity.",
      );
      return;
    }
    // Kopírujeme priamo originálnu CDN URL obrázka do schránky pre profil v Settings
    triggerSuccess();
    navigator.clipboard.writeText(imageUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="w-full text-zinc-300 font-mono pb-32 animate-in fade-in duration-700 selection:bg-[#FFD700] selection:text-black relative">
      {/* 🚀 SEO & DYNAMICKÉ METATAGY */}
      {selectedDoc ? (
        <MetaTags
          title={`NEXUS AVATARS | ${selectedDoc.title}`}
          description={
            selectedDoc.scanDetail?.zameranieAPointa ||
            selectedDoc.desc ||
            "3D Hybrid Bot Avatar pre OS Genesis Profil"
          }
          image={selectedDoc.imageUrl || "/img-nexus/pages/ShopImageMedia.jpg"}
          color={getDimensionColor(selectedDoc.dimension) || "#39FF14"}
          url={`/shop/images?avatar=${selectedDoc.id}`}
        />
      ) : (
        <MetaTags
          title="NEXUS AVATARS | 21 Bot Avatarov & Vizuálne Aktíva"
          description="Katalóg 21 3D Bot Avatarov, vizuálne rozhrania a grafické aktíva pre modifikáciu profilu."
          image="/img-nexus/pages/ShopImageMedia.jpg"
          color="#39FF14"
          url="/shop/images"
        />
      )}

      {/* 👑 SHOP HEADER WITH VIP WALLET */}
      {/*Zmazané dualne zobrazenie*/}

      {/* 👑 VÝHODY ČLENSTVA SPOILER ACCORDION */}
      <VyhodyClenstva
        onShowTooltip={handleShowTooltip}
        onUpdateTooltipPos={handleUpdateTooltipPos}
        onHideTooltip={handleHideTooltip}
      />

      {/* 🎛️ DVOJÚROVŇOVÉ UNIFIKOVANÉ FILTRAČNÉ CENTRUM (ShopFilters.jsx) */}
      <ShopFilters
        type="images"
        activeSubcat={activeSubcat}
        onSubcatChange={handleSelectCategory}
        activeTier={tierFilter}
        onTierChange={handleSelectTier}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        layoutView={layoutView}
        onLayoutChange={setLayoutView}
        onResetFilters={handleResetAllFilters}
        dataItems={SHOP_IMAGE_DATA}
        onSelectItem={(docId) => handleOpenDetail(docId)}
        handleShowTooltip={handleShowTooltip}
        handleUpdateTooltipPos={handleUpdateTooltipPos}
        handleHideTooltip={handleHideTooltip}
      />

      {/* 🧠 TERCIÁRNA SÉMANTICKÁ DIAGNOSTIKA (IDENTICKÉ UI/UX SO SÚRODENCAMI) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 -mt-2">
        <div className="flex items-center gap-2">
          {preFilterTag && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-zinc-500 font-mono">Aktívny filter:</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#00f3ff]/15 text-[#00f3ff] border border-[#00f3ff]/40 font-bold flex items-center gap-1.5 font-mono">
                {preFilterTag}
                <button
                  type="button"
                  onClick={() => {
                    triggerClick();
                    setPreFilterTag("");
                    const params = new URLSearchParams(location.search);
                    params.delete("prefilter");
                    navigate(
                      `/shop/images${params.toString() ? `?\${params.toString()}` : ""}`,
                    );
                  }}
                  className="hover:text-red-400 cursor-pointer ml-1 text-zinc-400"
                >
                  <X size={12} />
                </button>
              </span>
            </div>
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

      {/* 🚪 TERCIÁRNY SÉMANTICKÝ DRAWER (OPRAVENÝ: STRICTLY SHOP_IMAGE_DATA) */}
      <ModalPreFilterDrawer
        isOpen={isPreFilterOpen}
        onClose={() => setIsPreFilterOpen(false)}
        items={SHOP_IMAGE_DATA}
        selectedTag={preFilterTag}
        onSelectTag={(tag) => {
          setPreFilterTag(tag);
          if (tag) setActiveSubcat("ALL");
          const params = new URLSearchParams(location.search);
          if (tag) params.set("prefilter", tag);
          else params.delete("prefilter");
          navigate(
            `/shop/images${params.toString() ? `?\${params.toString()}` : ""}`,
          );
        }}
        onResetFilters={() => {
          setPreFilterTag("");
          const params = new URLSearchParams(location.search);
          params.delete("prefilter");
          navigate(
            `/shop/images${params.toString() ? `?\${params.toString()}` : ""}`,
          );
        }}
      />

      {/* ==================================================================== */}
      {/* 🖼️ AVATAR CARD GRID RENDERER (21 BOT AVATARS WITH ANTI-PIRACY SHIELD) */}
      {/* ==================================================================== */}
      {filteredDocs.length === 0 ? (
        <div className="bg-[#050A0E] border border-red-500/30 p-12 rounded-2xl text-center flex flex-col items-center justify-center gap-4 animate-in fade-in duration-300">
          <Activity size={48} className="text-red-500 animate-pulse" />
          <div className="text-lg font-bold text-white tracking-widest uppercase">
            ŽIADNY AVATAR NENÁJDENÝ
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
          {/* MOBILE LIST STRIPS */}
          <div className="md:hidden divide-y divide-white/10">
            {filteredDocs.map((doc) => {
              const tierColor = getTierColor(doc.tier);
              return (
                <div
                  key={doc.id}
                  className="p-4 flex items-center justify-between gap-3 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={doc.imageUrl}
                      alt={doc.title}
                      className="w-10 h-10 rounded-lg object-cover border border-white/20 shrink-0 select-none pointer-events-none"
                      onContextMenu={(e) => e.preventDefault()}
                      onError={(e) => {
                        e.target.src =
                          doc.localImage ||
                          `/img-nexus/operatorsBot/${doc.nodeKey}.jpg`;
                      }}
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-white text-xs truncate">
                        {doc.title}
                      </div>
                      <div className="text-[10px] text-zinc-500 flex items-center gap-2">
                        <span>{doc.nodeKey}</span>
                        <span style={{ color: tierColor }}>{doc.tier}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleOpenDetail(doc.id)}
                    onMouseEnter={(e) =>
                      handleShowTooltip(
                        "SKENOVAŤ DETAIL",
                        getTooltip("DETAIL"),
                        e,
                      )
                    }
                    onMouseMove={handleUpdateTooltipPos}
                    onMouseLeave={handleHideTooltip}
                    className="px-3 py-1.5 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-lg text-[10px] font-bold uppercase transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <Eye size={12} /> Detail
                  </button>
                </div>
              );
            })}
          </div>

          {/* DESKTOP TABLE */}
          <table className="hidden md:table w-full text-left text-xs">
            <thead className="bg-black/80 text-[#FFD700] uppercase font-black tracking-wider border-b border-white/10">
              <tr>
                <th className="p-4">Avatar ID / Node</th>
                <th className="p-4">Názov Avatara</th>
                <th className="p-4">TIER</th>
                <th className="p-4">Cena (OC / EUR)</th>
                <th className="p-4 text-right">Akcie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredDocs.map((doc) => {
                const tierColor = getTierColor(doc.tier);
                return (
                  <tr
                    key={doc.id}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="p-4 font-bold text-[#00f3ff]">
                      {doc.id}
                      <div className="text-[9px] text-zinc-500 font-normal uppercase">
                        {doc.nodeKey}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-white group-hover:text-[#FFD700] transition-colors">
                        {doc.title}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate max-w-md">
                        {doc.scanDetail?.zameranieAPointa || doc.desc}
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
                      {doc.priceOc === 0
                        ? "ZDARMA"
                        : `${doc.priceOc.toLocaleString("sk-SK")} OC / ${doc.priceEur}`}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleOpenDetail(doc.id)}
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "SKENOVAŤ DETAIL",
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
        /* 🖼️ MRIEŽKOVÝ RENDER (3 STĹPCE alebo 4 STĹPCE WITH ANTI-PIRACY SHIELD & MP4 STANDBY) */
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
            const isFree = docItem.tier === "ZDARMA" || docItem.priceOc === 0;

            return (
              <div
                key={docItem.id}
                className="bg-[#050A0E] border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative"
                style={{
                  boxShadow: `0 0 20px rgba(0,0,0,0.8)`,
                }}
              >
                {/* TOP IMAGE WITH ANTI-PIRACY SHIELD LAYER */}
                <div
                  className="relative aspect-square overflow-hidden bg-black/80 select-none cursor-pointer"
                  onClick={() => handleOpenDetail(docItem.id)}
                  onMouseEnter={(e) =>
                    handleShowTooltip(
                      docItem.title,
                      getTooltip("DETAIL", docItem.desc),
                      e,
                    )
                  }
                  onMouseMove={handleUpdateTooltipPos}
                  onMouseLeave={handleHideTooltip}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <img
                    src={docItem.imageUrl}
                    alt={docItem.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    onError={(e) => {
                      e.target.src =
                        docItem.localImage ||
                        `/img-nexus/operatorsBot/${docItem.nodeKey}.jpg`;
                    }}
                  />

                  {/* TRANSPARENT GLASS CAGE (Prevents Right-Click Save) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A0E] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* EXACT TIER BADGE TOP LEFT */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 pointer-events-none">
                    <span
                      className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border backdrop-blur-md shadow-lg"
                      style={{
                        color: exactTierColor,
                        backgroundColor: "rgba(5, 10, 14, 0.85)",
                        borderColor: `${exactTierColor}60`,
                      }}
                    >
                      {docItem.tier}
                    </span>
                    <span
                      className="px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border backdrop-blur-md shadow-lg"
                      style={{
                        color: exactDimColor,
                        backgroundColor: "rgba(5, 10, 14, 0.85)",
                        borderColor: `${exactDimColor}60`,
                      }}
                    >
                      {docItem.dimension}
                    </span>
                  </div>

                  {/* PRICE BADGE TOP RIGHT */}
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-black/80 text-[#FFD700] border border-[#FFD700]/40 backdrop-blur-md shadow-lg">
                      {isFree
                        ? "ZDARMA"
                        : `${docItem.priceOc.toLocaleString("sk-SK")} OC`}
                    </span>
                  </div>
                </div>

                {/* CARD CONTENT BODY */}
                <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-gradient-to-b from-[#050A0E] to-black">
                  <div>
                    {/* SUBTITLE & RESOLUTION HEADER */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[9px] font-black text-[#FFD700] uppercase tracking-wider truncate">
                        {docItem.subtitle || docItem.dimension}
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono shrink-0">
                        {docItem.mediaAssets?.resolution || "1024x1024 px"}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FFD700] transition-colors tracking-wide mb-1 line-clamp-1">
                      {docItem.title}
                    </h3>

                    {/* FULL DIMENSION TITLE */}
                    <div
                      className="text-[10px] font-bold mb-2 line-clamp-1"
                      style={{ color: exactDimColor }}
                    >
                      {docItem.dimensionTitle || docItem.dimension}
                    </div>

                    {/* POPIS / ZAMERANIE */}
                    <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                      {docItem.scanDetail?.zameranieAPointa || docItem.desc}
                    </p>

                    {/* V20 CYBER VIBE TAG */}
                    {docItem.vibe && (
                      <div className="text-[9px] text-zinc-400 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 line-clamp-1 mb-3 font-mono">
                        ⚡ {docItem.vibe}
                      </div>
                    )}

                    {/* 🎬 MP4 STANDBY VIDEO PLAYER BADGE IN CARD */}
                    <div className="p-2 bg-black/60 border border-white/10 rounded-xl flex items-center justify-between gap-2 text-[10px]">
                      <div className="flex items-center gap-1.5 text-[#FFD700] font-bold">
                        <PlayCircle
                          size={14}
                          className="text-[#FFD700] animate-pulse shrink-0"
                        />
                        <span>MP4 STANDBY PREVIEW</span>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded uppercase font-bold shrink-0">
                        AWAITING EXPORT
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM ACTIONS */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    {isAvatarUnlocked(docItem) ? (
                      <button
                        onClick={() => handleCopyAvatarJpgUrl(docItem)}
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "SKOPÍROVAŤ URL",
                            "Skopíruje priamu JPG URL adresu avatara do profilu Settings",
                            e,
                          )
                        }
                        onMouseMove={handleUpdateTooltipPos}
                        onMouseLeave={handleHideTooltip}
                        className="flex-1 py-2 px-3 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/40 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                      >
                        <Copy size={12} />{" "}
                        {copiedLink ? "URL Skopírovaná!" : "Skopírovať URL"}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleOpenPaywall(docItem)}
                        onMouseEnter={(e) =>
                          handleShowTooltip(
                            "ODOMKNÚŤ AVATARA",
                            docItem.priceOc === 0
                              ? "Aktivovať bezplatného avatara"
                              : `Odomknúť a kúpiť za ${(docItem.priceOc ?? 4900).toLocaleString("sk-SK")} OC`,
                            e,
                          )
                        }
                        onMouseMove={handleUpdateTooltipPos}
                        onMouseLeave={handleHideTooltip}
                        className="flex-1 py-2 px-3 bg-[#FFD700] hover:bg-[#FFD700]/80 text-black border border-[#FFD700] rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                      >
                        <Zap size={12} />{" "}
                        {docItem.priceOc === 0
                          ? "Aktivovať ZDARMA"
                          : `Odomknúť za ${(docItem.priceOc ?? 4900).toLocaleString("sk-SK")} OC`}
                      </button>
                    )}

                    <button
                      onClick={() => handleOpenDetail(docItem.id)}
                      onMouseEnter={(e) =>
                        handleShowTooltip(
                          "SKENOVAŤ DETAIL",
                          getTooltip("DETAIL"),
                          e,
                        )
                      }
                      onMouseMove={handleUpdateTooltipPos}
                      onMouseLeave={handleHideTooltip}
                      className="py-2 px-3 bg-[#FFD700]/10 hover:bg-[#FFD700] text-[#FFD700] hover:text-black border border-[#FFD700]/30 rounded-xl text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1"
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

      {/* ==================================================================== */}
      {/* 🔮 AVATAR DETAIL MODAL WITH FULL SCAN DETAIL PROTOCOL & SUPABASE CDN */}
      {/* ==================================================================== */}
      {selectedDoc && (
        <div
          onClick={handleCloseDetail}
          style={{ zIndex: 1000000 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 pt-20 md:pt-24 pb-12 overflow-y-auto animate-in fade-in duration-300 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#050A0E] border-2 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto font-mono text-left cursor-default"
            style={{
              borderColor: getTierColor(selectedDoc.tier),
              zIndex: 1000001,
            }}
          >
            {/* MODAL HEADER */}
            <div className="p-5 bg-black/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-[#FFD700]" />
                <div>
                  <h2 className="text-sm md:text-base font-bold text-white tracking-wide">
                    {selectedDoc.title}
                  </h2>
                  <div className="text-[10px] text-zinc-400 font-mono uppercase flex flex-wrap items-center gap-2">
                    <span className="text-[#FFD700] font-bold">
                      {selectedDoc.subtitle || selectedDoc.nodeKey}
                    </span>
                    <span>|</span>
                    <span>NODE: {selectedDoc.nodeKey}</span>
                    <span>|</span>
                    <span className="text-[#00f3ff]">
                      BUCKET: {selectedDoc.mediaAssets?.storageBucket || "shop"}
                    </span>
                    <span>|</span>
                    <span className="text-green-400">
                      {selectedDoc.mediaAssets?.resolution || "1024x1024 px"}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseDetail}
                onMouseEnter={(e) =>
                  handleShowTooltip(
                    "ZAVRIEŤ OKNO",
                    "Zavrieť detailný protokol avatara",
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

            {/* 🧭 V20 INDUSTRIAL TABS NAVIGATION */}
            <div className="px-6 pt-3 bg-black/60 border-b border-white/10 flex items-center gap-2 overflow-x-auto hide-scroll">
              {[
                { id: "OVERVIEW", label: "👁️ PREHĽAD & VZHĽAD" },
                {
                  id: "PHASES",
                  label: `⚙️ 5 FÁZ EXEKÚCIE (${selectedDoc.phases?.length ? "20 ÚKONOV" : "AUDIT"})`,
                },
                { id: "SECURITY", label: "🛡️ KRYPTO RODNÝ LIST & SHA-256" },
                { id: "SOCIAL", label: "📢 SOCIÁLNE VYSIELANIE" },
              ].map((tab) => {
                const isActive = modalTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      triggerClick();
                      setModalTab(tab.id);
                    }}
                    className={`px-4 py-2.5 rounded-t-xl text-[10px] font-black uppercase tracking-wider transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "text-[#FFD700] border-[#FFD700] bg-[#FFD700]/10"
                        : "text-zinc-500 hover:text-white border-transparent hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* MODAL BODY */}
            <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scroll">
              {/* ============================================================ */}
              {/* TAB 1: 👁️ PREHĽAD & PROTOKOL SCAN DETAIL */}
              {/* ============================================================ */}
              {modalTab === "OVERVIEW" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* TOP IMAGE & ZAMERANIE GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {/* IMAGE CONTAINER WITH ANTI-PIRACY GLASS CAGE */}
                    <div
                      className="aspect-square relative rounded-2xl overflow-hidden border border-white/20 bg-black/90 select-none shrink-0"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <img
                        src={selectedDoc.imageUrl}
                        alt={selectedDoc.title}
                        className="w-full h-full object-cover pointer-events-none"
                        onError={(e) => {
                          e.target.src =
                            selectedDoc.localImage ||
                            `/img-nexus/operatorsBot/${selectedDoc.nodeKey}.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 text-[9px] text-[#FFD700] font-black bg-black/80 px-2 py-1 rounded border border-[#FFD700]/40 pointer-events-none">
                        SUPABASE CDN VERIFIED
                      </div>
                    </div>

                    {/* DETAILS & SPECS */}
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase border"
                          style={{
                            color: getTierColor(selectedDoc.tier),
                            borderColor: `${getTierColor(selectedDoc.tier)}60`,
                            backgroundColor: `${getTierColor(selectedDoc.tier)}15`,
                          }}
                        >
                          {selectedDoc.tier}
                        </span>
                        <span
                          className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase border"
                          style={{
                            color: getDimensionColor(selectedDoc.dimension),
                            borderColor: `${getDimensionColor(selectedDoc.dimension)}60`,
                            backgroundColor: `${getDimensionColor(selectedDoc.dimension)}15`,
                          }}
                        >
                          {selectedDoc.dimensionTitle || selectedDoc.dimension}
                        </span>
                        {selectedDoc.genre && (
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-400">
                            {selectedDoc.genre}
                          </span>
                        )}
                      </div>

                      {/* ZAMERANIE A POINTA */}
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="text-[10px] text-[#FFD700] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                          <Sparkles size={12} /> ZAMERANIE A POINTA
                        </div>
                        <p className="text-xs text-zinc-200 leading-relaxed font-bold">
                          {selectedDoc.scanDetail?.zameranieAPointa ||
                            selectedDoc.desc}
                        </p>
                      </div>

                      {/* 🤖 DETAILNÝ VZHĽAD ROBOTA Z DÁT KAMPANE */}
                      {selectedDoc.scanDetail?.detailnyPopisKampane && (
                        <div className="p-4 bg-[#FF00FF]/5 border border-[#FF00FF]/20 rounded-2xl">
                          <div className="text-[10px] text-[#FF00FF] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                            <Cpu size={12} /> FYZICKÁ ŠPECIFIKÁCIA 3D HYBRID
                            ROBOTA
                          </div>
                          <p className="text-xs text-zinc-300 leading-relaxed italic">
                            "{selectedDoc.scanDetail.detailnyPopisKampane}"
                          </p>
                        </div>
                      )}

                      {/* DETAILNÝ POPIS */}
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="text-[10px] text-[#00f3ff] font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                          <Info size={12} /> DETAILNÝ POPIS & AUDIT
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {selectedDoc.scanDetail?.detailnyPopis ||
                            selectedDoc.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 6-BODOVÝ PROTOKOL SCAN DETAIL */}
                  {selectedDoc.scanDetail && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                        <div className="text-[10px] text-green-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                          <CheckCircle2 size={12} /> ČO ZÍSKAŠ
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {selectedDoc.scanDetail.coZiskas}
                        </p>
                      </div>

                      <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                        <div className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Cpu size={12} /> PRE KOHO JE URČENÝ
                        </div>
                        <div className="text-xs text-zinc-300 space-y-1">
                          <div>
                            <strong className="text-white">Ľudia:</strong>{" "}
                            {selectedDoc.scanDetail.preKohoJeToto
                              ?.preAkyTypLudi ||
                              selectedDoc.scanDetail.preKohoJeToto
                                ?.preAkyTypCloveka ||
                              selectedDoc.scanDetail.preKoho}
                          </div>
                          <div>
                            <strong className="text-white">Spoločnosť:</strong>{" "}
                            {selectedDoc.scanDetail.preKohoJeToto
                              ?.preAkyTypSpolocnosti || "B2B uzly a komunity"}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                        <div className="text-[10px] text-yellow-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Zap size={12} /> AKO TO FUNGUJE
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {selectedDoc.scanDetail.akoToFunguje}
                        </p>
                      </div>

                      <div className="p-4 bg-black/60 border border-white/10 rounded-2xl">
                        <div className="text-[10px] text-orange-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Terminal size={12} /> K ČOMU SA DÁ POUŽIŤ
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {selectedDoc.scanDetail.kComuSaToDaPouzit ||
                            selectedDoc.scanDetail.kCemuSaTotoDaPouzit ||
                            "Vizuálny odznak pre profil operátora a terminál OS Genesis."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ============================================================ */}
              {/* TAB 2: ⚙️ 5 FÁZ EXEKÚCIE & AUDITU (20 ÚKONOV) */}
              {/* ============================================================ */}
              {modalTab === "PHASES" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 bg-black/80 border border-[#FFD700]/30 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-wider">
                        CHIRURGICKÁ MAPA EXEKÚCIE // V20 WORKFLOW
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Presný 60-minútový technologický postup generovania a
                        overenia aktíva.
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/40 text-[#FFD700] rounded-xl text-[10px] font-black uppercase">
                      5 FÁZ / 20 ÚKONOV
                    </span>
                  </div>

                  {selectedDoc.phases && selectedDoc.phases.length > 0 ? (
                    selectedDoc.phases.map((phase) => (
                      <div
                        key={phase.phaseId}
                        className="p-5 bg-black/60 border border-white/10 rounded-2xl space-y-3"
                      >
                        <div className="text-xs font-black text-[#FFD700] uppercase tracking-wider flex items-center justify-between border-b border-white/10 pb-2">
                          <span>{phase.title}</span>
                          <span className="text-[10px] text-zinc-500 font-mono">
                            FÁZA {phase.phaseId} / 5
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                          {phase.steps.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="text-[11px] text-zinc-300 flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5 font-mono"
                            >
                              <span className="text-[#00f3ff] font-bold shrink-0">
                                ›
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-zinc-500 text-xs">
                      5-fázová schéma sa pripravuje pre tento uzol.
                    </div>
                  )}
                </div>
              )}

              {/* ============================================================ */}
              {/* TAB 3: 🛡️ KRYPTO RODNÝ LIST & SHA-256 OVERENIE */}
              {/* ============================================================ */}
              {modalTab === "SECURITY" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {selectedDoc.ipSecurity && (
                    <div className="p-5 bg-black/80 border border-white/15 rounded-2xl space-y-4 font-mono text-xs">
                      <div className="text-[#FFD700] font-black uppercase tracking-widest flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="flex items-center gap-2">
                          <Shield size={16} /> CERTIFIKÁT DIGITÁLNEJ INTEGRITY &
                          AUTORSTVA
                        </span>
                        <span className="text-green-400 text-[10px]">
                          {selectedDoc.cleanDeliverable?.fileSizeMb
                            ? `${selectedDoc.cleanDeliverable.fileSizeMb} MB CLEAN MASTER`
                            : "1024x1024 px MASTER"}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <span className="text-zinc-500 uppercase block text-[9px]">
                            Autor & Vlastník:
                          </span>
                          <span className="text-white font-bold">
                            {selectedDoc.ipSecurity.author}
                          </span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <span className="text-zinc-500 uppercase block text-[9px]">
                            Vydavateľ:
                          </span>
                          <span className="text-white font-bold">
                            {selectedDoc.ipSecurity.publisher}
                          </span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <span className="text-zinc-500 uppercase block text-[9px]">
                            Licenčná Úroveň:
                          </span>
                          <span className="text-[#00f3ff] font-bold">
                            {selectedDoc.ipSecurity.licenseTier}
                          </span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                          <span className="text-zinc-500 uppercase block text-[9px]">
                            Súbor pre profil:
                          </span>
                          <span className="text-yellow-300 font-bold">
                            {selectedDoc.cleanDeliverable?.fileName ||
                              `${selectedDoc.nodeKey}.jpg`}
                          </span>
                        </div>
                      </div>

                      {/* SHA-256 CLEAN MASTER HASH */}
                      <div className="bg-black/90 p-4 rounded-xl border border-green-500/30 space-y-2">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-zinc-400 font-bold uppercase tracking-wider">
                            SHA-256 CLEAN MASTER CONTROL HASH:
                          </span>
                          <button
                            onClick={() => {
                              triggerSuccess();
                              navigator.clipboard.writeText(
                                selectedDoc.ipSecurity.sha256CleanMaster,
                              );
                              setCopiedSocialKey("SHA256");
                              setTimeout(() => setCopiedSocialKey(null), 2500);
                            }}
                            className="px-2 py-1 bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-black rounded text-[9px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1"
                          >
                            <Copy size={10} />{" "}
                            {copiedSocialKey === "SHA256"
                              ? "Hash Skopírovaný!"
                              : "Kopírovať Hash"}
                          </button>
                        </div>
                        <div className="text-green-400 text-xs font-mono font-bold break-all bg-black/60 p-2.5 rounded-lg border border-white/10 select-all">
                          {selectedDoc.ipSecurity.sha256CleanMaster}
                        </div>
                      </div>

                      {/* AKO OVERIŤ SHA-256 MANUÁL */}
                      {selectedDoc.scanDetail?.akoOveritSha256 && (
                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                          <div className="text-[#00f3ff] font-bold text-[10px] uppercase flex items-center gap-1.5">
                            <Terminal size={12} /> TERMINÁLOVÝ PROTOKOL OVERENIA
                            PRAVOSTI:
                          </div>
                          <p className="text-[11px] text-zinc-300 leading-relaxed font-mono">
                            {selectedDoc.scanDetail.akoOveritSha256}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* ============================================================ */}
              {/* TAB 4: 📢 SOCIÁLNE VYSIELANIE (POSTY & VIRAL SCRIPTS) */}
              {/* ============================================================ */}
              {modalTab === "SOCIAL" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {selectedDoc.socialPosts ? (
                    <div className="space-y-4">
                      {/* DLHÝ PRÍSPEVOK (BLOG / LINKEDIN / FACEBOOK) */}
                      {selectedDoc.socialPosts.longPost && (
                        <div className="p-5 bg-black/80 border border-white/10 rounded-2xl space-y-3 font-mono">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <div className="text-xs font-black text-[#FFD700] uppercase tracking-wider flex items-center gap-2">
                              <Share2 size={14} /> HLAVNÝ SÉMANTICKÝ PRÍSPEVOK
                              (LONG POST)
                            </div>
                            <button
                              onClick={() => {
                                triggerSuccess();
                                const p = selectedDoc.socialPosts.longPost;
                                const text = `${p.title}\n\n${p.description}\n\nShop: ${p.shopLink}\n${p.hashtags}\n\n${p.pinnedComment}`;
                                navigator.clipboard.writeText(text);
                                setCopiedSocialKey("LONG");
                                setTimeout(
                                  () => setCopiedSocialKey(null),
                                  2500,
                                );
                              }}
                              className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700] hover:text-black rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1"
                            >
                              <Copy size={12} />{" "}
                              {copiedSocialKey === "LONG"
                                ? "Skopírované!"
                                : "Kopírovať Celý Post"}
                            </button>
                          </div>
                          <div className="text-white text-xs font-bold">
                            {selectedDoc.socialPosts.longPost.title}
                          </div>
                          <p className="text-[11px] text-zinc-300 leading-relaxed whitespace-pre-line bg-white/5 p-3 rounded-xl border border-white/5">
                            {selectedDoc.socialPosts.longPost.description}
                          </p>
                          <div className="text-[10px] text-[#00f3ff] break-all">
                            {selectedDoc.socialPosts.longPost.hashtags}
                          </div>
                          <div className="text-[10px] text-zinc-400 italic bg-black/40 p-2 rounded-lg border border-white/5">
                            {selectedDoc.socialPosts.longPost.pinnedComment}
                          </div>
                        </div>
                      )}

                      {/* KRÁTKY PRÍSPEVOK (SHORTS / REELS / TIKTOK) */}
                      {selectedDoc.socialPosts.shortPost && (
                        <div className="p-5 bg-black/80 border border-white/10 rounded-2xl space-y-3 font-mono">
                          <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <div className="text-xs font-black text-[#00f3ff] uppercase tracking-wider flex items-center gap-2">
                              <Share2 size={14} /> DYNAMICKÝ SHORT / REEL SCRIPT
                            </div>
                            <button
                              onClick={() => {
                                triggerSuccess();
                                const p = selectedDoc.socialPosts.shortPost;
                                const text = `${p.title}\n\n${p.description}\n\nShop: ${p.shopLink}\n${p.hashtags}\n\n${p.pinnedComment}`;
                                navigator.clipboard.writeText(text);
                                setCopiedSocialKey("SHORT");
                                setTimeout(
                                  () => setCopiedSocialKey(null),
                                  2500,
                                );
                              }}
                              className="px-3 py-1 bg-[#00f3ff]/20 text-[#00f3ff] hover:bg-[#00f3ff] hover:text-black rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1"
                            >
                              <Copy size={12} />{" "}
                              {copiedSocialKey === "SHORT"
                                ? "Skopírované!"
                                : "Kopírovať Script"}
                            </button>
                          </div>
                          <div className="text-white text-xs font-bold">
                            {selectedDoc.socialPosts.shortPost.title}
                          </div>
                          <p className="text-[11px] text-zinc-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                            {selectedDoc.socialPosts.shortPost.description}
                          </p>
                          <div className="text-[10px] text-yellow-300">
                            {selectedDoc.socialPosts.shortPost.hashtags}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-zinc-500 text-xs">
                      Sociálne posty nie sú pre túto entitu definované.
                    </div>
                  )}
                </div>
              )}

              {/* 🎬 MP4 VIDEO STANDBY PLAYER BLOCK (PRE KAŽDÝ DETAIL) */}
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
                    AWAITING EXPORT
                  </span>
                </div>

                <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedDoc.youtubeId || "mF0v6VBQlbw"}`}
                    title="Video Prehľad"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="text-[10px] text-zinc-400 flex items-center justify-between pt-1">
                  <span>
                    ⚡ SYSTEM STANDBY | AWAITING MP4 VIDEO DATA UPLOADED
                  </span>
                  <span>Pripravujeme: MP4 Video prehľad pre tento avatar.</span>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="p-6 bg-black border border-white/10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Sadzba Avatara
                  </div>
                  <div
                    className="text-xl font-black"
                    style={{ color: getTierColor(selectedDoc.tier) }}
                  >
                    {selectedDoc.displayPrice ||
                      (selectedDoc.priceOc === 0
                        ? "ZDARMA (0 OC)"
                        : `${(selectedDoc.priceOc || 0).toLocaleString("sk-SK")} OC / ${selectedDoc.priceEur}`)}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                  {isAvatarUnlocked(selectedDoc) ? (
                    <>
                      <button
                        onClick={() => handleCopyAvatarJpgUrl(selectedDoc)}
                        className="px-5 py-3 bg-[#00f3ff] hover:bg-[#00f3ff]/80 text-black border border-[#00f3ff] rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                      >
                        <Copy size={14} />{" "}
                        {copiedAvatarId === selectedDoc.id || copiedLink
                          ? "URL Skopírovaná!"
                          : "Skopírovať URL do Profilu"}
                      </button>
                      <button
                        onClick={() =>
                          handleDownloadZip(
                            selectedDoc.zipUrl ||
                              selectedDoc.cleanDeliverable?.downloadUrl,
                            selectedDoc.cleanDeliverable?.fileName ||
                              `${selectedDoc.nodeKey}_all-formats.zip`,
                          )
                        }
                        className="px-5 py-3 bg-[#00E5FF]/10 hover:bg-[#00E5FF] text-[#00E5FF] hover:text-black border border-[#00E5FF]/40 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                      >
                        <Download size={14} /> Stiahnuť ZIP Balík (
                        {selectedDoc.cleanDeliverable?.fileSizeMb || "6.57"} MB)
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleOpenPaywall(selectedDoc)}
                      className="px-6 py-3 bg-[#FFD700] hover:bg-[#FFD700]/80 text-black border border-[#FFD700] rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                    >
                      <Zap size={14} />{" "}
                      {selectedDoc.priceOc === 0
                        ? "Aktivovať ZDARMA do Profilu"
                        : `Odomknúť a kúpiť za ${(selectedDoc.priceOc ?? 4900).toLocaleString("sk-SK")} OC`}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* GLOBAL PAYWALL MODAL */}
      <GlobalPaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        campaign={paywallCampaign}
        userBalance={balance}
        userTier={userTier}
        requiredTier={paywallCampaign?.tier || "FREE"}
      />
      {/* 🔮 VIEWPORT FLOATING TOOLTIP ENGINE WITH 3S MYSTERY SCANNER EFFECT */}
      {floatingTooltip.visible && (
        <div
          className={`fixed pointer-events-none rounded-xl border font-mono text-xs shadow-2xl backdrop-blur-xl transition-all duration-200 ${
            floatingTooltip.isScanning
              ? "bg-black/90 border-[#00f3ff] text-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.4)] animate-pulse p-2.5"
              : "bg-[#080d12]/95 border-[#FFD700]/60 text-zinc-200 shadow-[0_0_25px_rgba(255,215,0,0.25)] max-w-xs p-3.5"
          }`}
          style={{
            zIndex: 1000010,
            left: `${Math.min(floatingTooltip.x, typeof window !== "undefined" ? window.innerWidth - 320 : 1000)}px`,
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
                <HelpCircle size={12} /> {floatingTooltip.title}
              </div>
              <div className="text-[10px] text-zinc-300 leading-snug font-mono">
                {floatingTooltip.text}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopImageMedia;
