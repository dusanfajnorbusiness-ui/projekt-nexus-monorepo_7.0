import { SoundFX } from "@shared/utils/SoundEngine.js";
import { getFiltersConfig } from "@shop/data/ShopFilters.js";
/* eslint-disable no-undef */
import { Activity, BookOpen, Bot, Cpu, Crown, DollarSign, FileText, Film, Globe, Grid, Grid3X3, HelpCircle, Image, Laptop, Layers, List, Mic, Music, PlayCircle, Radio, RefreshCw, Search, Shield, ShoppingCart, Smartphone, Terminal, TrendingUp, Video, Volume2, X, Zap } from "lucide-react";
import { useMemo, useState } from "react";

// Icon Resolver Map for dynamic rendering
const ICON_MAP = {
  Cpu,
  Globe,
  Smartphone,
  Laptop,
  Video,
  Volume2,
  Image,
  FileText,
  ShoppingCart,
  Crown,
  Zap,
  Activity,
  Terminal,
  DollarSign,
  PlayCircle,
  Film,
  Mic,
  Radio,
  Music,
  Bot,
  Shield,
  BookOpen,
  TrendingUp,
  Layers,
};

const renderIcon = (iconName, size = 14, className = "") => {
  const Component = ICON_MAP[iconName] || Cpu;
  return <Component size={size} className={className} />;
};

// 🎨 KÁNONICKÁ FAREBNÁ MATICA PRE TIERY
const TIER_COLOR_MAP = {
  ALL: "#A1A1AA",
  FREE: "#00f3ff",
  FREEMIUM: "#00f3ff",
  PRO: "#39FF14",
  PROMIUM: "#39FF14",
  OMEGA: "#FFD700",
  OMEGAMIUM: "#FFD700",
  MASTER: "#FF003C",
  MASTERMIUM: "#FF003C",
};

/**
 * 👑 NEXUS OS // UNIVERSAL SHOP FILTERS COMPONENT (V20.90)
 * Reusable filter bar for all 6 media siblings & main shop with Primary & Secondary filters.
 */
export const ShopFilters = ({
  type = "shop",
  activeSubcat = "ALL",
  onSubcatChange,
  activeTier = "ALL",
  onTierChange,
  searchTerm = "",
  onSearchChange,
  layoutView = "GRID_3",
  onLayoutChange,
  onResetFilters,
  dataItems = [],
  tierCounts = {},
  subcatCounts = {},
  onSelectItem,
  handleShowTooltip,
  handleUpdateTooltipPos,
  handleHideTooltip,
}) => {
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);

  // Load configuration for active sibling
  const config = useMemo(() => getFiltersConfig(type), [type]);

  // Sound triggers
  const triggerHover = () => SoundFX && SoundFX.hover && SoundFX.hover();
  const triggerClick = () => SoundFX && SoundFX.click && SoundFX.click();

  // Autocomplete Suggestions
  const autocompleteSuggestions = useMemo(() => {
    const query = String(searchTerm || "")
      .toLowerCase()
      .trim();
    if (!query || query.length < 2 || !Array.isArray(dataItems)) return [];

    return dataItems
      .filter((item) => {
        const titleMatch = String(item?.title || "")
          .toLowerCase()
          .includes(query);
        const idMatch = String(item?.id || "")
          .toLowerCase()
          .includes(query);
        const keyMatch = String(item?.nodeKey || "")
          .toLowerCase()
          .includes(query);
        const platMatch = String(item?.platform || "")
          .toLowerCase()
          .includes(query);
        const catMatch = String(item?.category || "")
          .toLowerCase()
          .includes(query);
        return titleMatch || idMatch || keyMatch || platMatch || catMatch;
      })
      .slice(0, 8);
  }, [searchTerm, dataItems]);

  // Determine if Reset Button should be visible
  const showResetButton =
    Boolean(searchTerm) ||
    activeSubcat !== "ALL" ||
    (activeTier && activeTier !== "ALL") ||
    (Array.isArray(dataItems) &&
      dataItems.length > 0 &&
      autocompleteSuggestions.length === 0 &&
      Boolean(searchTerm));

  // Tooltip helper wrappers
  const showFn = (title, text, e) => {
    triggerHover();
    if (typeof handleShowTooltip === "function") {
      handleShowTooltip(title, text, e);
    }
  };

  const posFn = (e) => {
    if (typeof handleUpdateTooltipPos === "function") {
      handleUpdateTooltipPos(e);
    }
  };

  const hideFn = () => {
    if (typeof handleHideTooltip === "function") {
      handleHideTooltip();
    }
  };

  return (
    <div className="mb-8 p-4 md:p-6 bg-[#050A0E]/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl space-y-4 font-mono w-full max-w-full min-w-0 overflow-x-hidden relative z-20">
      {/* HEADER LABEL WITH NEON BADGE */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <span
            className="h-2.5 w-2.5 rounded-full animate-pulse"
            style={{
              backgroundColor: config.color || "#00f3ff",
              boxShadow: `0 0 10px ${config.color || "#00f3ff"}`,
            }}
          />
          <span className="text-xs font-black uppercase tracking-widest text-white">
            {config.title} // FILTRAČNÉ CENTRUM V20
          </span>
        </div>
        <span
          className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border"
          style={{
            color: config.color || "#00f3ff",
            borderColor: `${config.color || "#00f3ff"}60`,
            backgroundColor: `${config.color || "#00f3ff"}15`,
          }}
        >
          {config.subtitle}
        </span>
      </div>

      {/* TOP CONTROL ROW: SEARCH INPUT, RESET BUTTON, LAYOUT SWITCHER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* 🔍 SEARCH INPUT WITH AUTOCOMPLETE */}
        <div className="relative flex-1">
          <div className="relative flex items-center">
            <Search
              size={18}
              className="absolute left-3.5 text-zinc-500 pointer-events-none"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                if (typeof onSearchChange === "function")
                  onSearchChange(e.target.value);
                setIsAutocompleteOpen(true);
              }}
              onFocus={() => setIsAutocompleteOpen(true)}
              onBlur={() => setTimeout(() => setIsAutocompleteOpen(false), 200)}
              placeholder={config.searchPlaceholder}
              className="w-full pl-10 pr-10 py-2.5 bg-black/60 border border-white/15 focus:border-[#00f3ff] rounded-xl text-xs text-white placeholder-zinc-500 outline-none transition-all font-mono"
            />
            {searchTerm && (
              <button
                onClick={() => {
                  triggerClick();
                  if (typeof onSearchChange === "function") onSearchChange("");
                }}
                className="absolute right-3 text-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* AUTOCOMPLETE POPUP DROPDOWN */}
          {isAutocompleteOpen && autocompleteSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#080d12] border border-[#00f3ff]/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in duration-200">
              <div className="p-2.5 bg-black/80 border-b border-white/10 flex items-center justify-between text-[9px] text-[#00f3ff] uppercase font-bold tracking-wider">
                <span className="flex items-center gap-1.5">
                  <HelpCircle size={12} className="animate-spin" />
                  Našepkávač Dát OS Genesis
                </span>
                <span>{autocompleteSuggestions.length} Výsledkov</span>
              </div>
              <div className="max-h-64 overflow-y-auto divide-y divide-white/5 custom-scroll">
                {autocompleteSuggestions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      triggerClick();
                      if (typeof onSelectItem === "function")
                        onSelectItem(item.id);
                      setIsAutocompleteOpen(false);
                    }}
                    className="w-full p-3 flex items-center justify-between gap-3 hover:bg-white/10 transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 rounded-lg object-cover border border-white/20 shrink-0 pointer-events-none"
                          onError={(e) => {
                            e.target.src = "/img-nexus/pages/ShopPage.jpg";
                          }}
                        />
                      )}
                      <div>
                        <div className="text-xs text-white group-hover:text-[#00f3ff] font-bold tracking-wide">
                          {item.title}
                        </div>
                        <div className="text-[10px] text-zinc-400 truncate max-w-md">
                          {item.scanDetail?.zameranieAPointa ||
                            item.desc ||
                            item.spoilerIntro ||
                            item.id}
                        </div>
                      </div>
                    </div>
                    {item.price && (
                      <span className="text-[10px] font-black text-[#FFD700] shrink-0">
                        {item.price}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RESET BUTTON */}
        {showResetButton && (
          <button
            onClick={() => {
              triggerClick();
              if (typeof onResetFilters === "function") onResetFilters();
            }}
            onMouseEnter={(e) =>
              showFn(
                "RESET FILTROV",
                "Vynulovať všetky aktívne filtre a obnoviť kompletný zoznam",
                e,
              )
            }
            onMouseMove={posFn}
            onMouseLeave={hideFn}
            className="px-3.5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 hover:border-red-500/60 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shrink-0 shadow-[0_0_15px_rgba(255,0,60,0.2)]"
          >
            <RefreshCw size={14} className="animate-spin-once" />
            <span>Resetovať Filtre</span>
          </button>
        )}

        {/* LAYOUT SWITCHER */}
        <div className="flex items-center gap-1 bg-black/60 p-1.5 rounded-xl border border-white/10 shrink-0">
          {[
            { id: "GRID_3", icon: Grid3X3, title: "Normálna Mriežka" },
            { id: "GRID_MEDIUM", icon: Grid, title: "Kompaktná Mriežka" },
            { id: "LIST", icon: List, title: "Podrobný Zoznam" },
          ].map((gv) => {
            const IconComp = gv.icon;
            const isActive = layoutView === gv.id;
            return (
              <button
                key={gv.id}
                onClick={() => {
                  triggerClick();
                  if (typeof onLayoutChange === "function")
                    onLayoutChange(gv.id);
                }}
                onMouseEnter={(e) =>
                  showFn(
                    gv.title,
                    "Prepne vizuálne rozvrhnutie zobrazenia produktov",
                    e,
                  )
                }
                onMouseMove={posFn}
                onMouseLeave={hideFn}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#00E5FF] text-black shadow-md font-bold scale-105"
                    : "text-zinc-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <IconComp size={16} />
              </button>
            );
          })}
        </div>
      </div>

      {/* 👑 PRIMÁRNY FILTER (MAIN CATEGORIES) ROW */}
      {Array.isArray(config.mainCategories) &&
        config.mainCategories.length > 0 && (
          <div
            id="nexus-primary-filter"
            className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-white/10 pt-1 hide-scroll"
          >
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest shrink-0 mr-1 flex items-center gap-1">
              <Volume2 size={12} className="text-[#00f3ff]" />
              Primárny filter:
            </span>
            {config.mainCategories.map((mcat) => {
              const isActive =
                String(activeSubcat).toLowerCase() ===
                String(mcat.key).toLowerCase();
              const countVal =
                subcatCounts[mcat.key] ??
                subcatCounts[mcat.key.toLowerCase()] ??
                null;
              return (
                <button
                  key={mcat.key}
                  onClick={() => {
                    triggerClick();
                    hideFn();
                    if (typeof onSubcatChange === "function")
                      onSubcatChange(mcat.key);
                    const el = document.getElementById("nexus-primary-filter");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                      });
                  }}
                  onMouseEnter={(e) =>
                    showFn(mcat.label, "Primárny sektor filtrovania", e)
                  }
                  onMouseMove={posFn}
                  onMouseLeave={hideFn}
                  className={`px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#00f3ff] text-black border-[#00f3ff] shadow-[0_0_15px_rgba(0,243,255,0.5)] scale-105 font-black"
                      : "bg-black/60 text-zinc-300 border-white/15 hover:text-white hover:border-white/50 hover:bg-white/10"
                  }`}
                >
                  {renderIcon(mcat.iconName, 13)}
                  <span>{mcat.label}</span>
                  {countVal !== null && countVal !== undefined && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${isActive ? "bg-black/30 text-black font-black" : "bg-white/10 text-zinc-300 font-bold"}`}
                    >
                      {String(countVal).padStart(2, "0")}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

      {/* 🎯 SEKUNDÁRNY FILTER (SUB-CATEGORIES / TIERS) ROW */}
      <div
        id="nexus-secondary-filter"
        className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scroll pt-2"
      >
        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest shrink-0 mr-1 flex items-center gap-1">
          <Layers size={12} className="text-[#00f3ff]" />
          Sekundárny filter:
        </span>
        {config.categories.map((cat) => {
          const isTierMode =
            typeof onTierChange === "function" || type === "shop";

          const normCatKey = String(cat.key || "")
            .toUpperCase()
            .trim();
          const normActiveTier = String(activeTier || "ALL")
            .toUpperCase()
            .trim();
          const normActiveSubcat = String(activeSubcat || "ALL")
            .toUpperCase()
            .trim();

          const isActive = isTierMode
            ? normCatKey === normActiveTier ||
              (normActiveTier === "ALL" && normCatKey === "ALL") ||
              ((normActiveTier === "PRO" || normActiveTier === "PROMIUM") &&
                (normCatKey === "PRO" || normCatKey === "PROMIUM")) ||
              ((normActiveTier === "OMEGA" || normActiveTier === "OMEGAMIUM") &&
                (normCatKey === "OMEGA" || normCatKey === "OMEGAMIUM")) ||
              ((normActiveTier === "MASTER" ||
                normActiveTier === "MASTERMIUM") &&
                (normCatKey === "MASTER" || normCatKey === "MASTERMIUM"))
            : normCatKey === normActiveSubcat ||
              String(cat.key).toLowerCase() ===
                String(activeSubcat).toLowerCase();

          const tierColor = isTierMode
            ? TIER_COLOR_MAP[normCatKey] || config.color || "#00f3ff"
            : config.color || "#00f3ff";

          const countVal = isTierMode
            ? (tierCounts[normCatKey] ?? tierCounts[cat.key] ?? null)
            : (subcatCounts[cat.key] ?? null);

          return (
            <button
              key={cat.key}
              onClick={() => {
                triggerClick();
                hideFn();
                if (isTierMode && typeof onTierChange === "function") {
                  onTierChange(cat.key);
                } else if (typeof onSubcatChange === "function") {
                  onSubcatChange(cat.key);
                }

                const filterEl = document.getElementById(
                  "nexus-secondary-filter",
                );
                if (filterEl)
                  filterEl.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                  });
              }}
              onMouseEnter={(e) =>
                showFn(
                  cat.label,
                  cat.tooltipText || `Filtrovať podľa ${cat.label}`,
                  e,
                )
              }
              onMouseMove={posFn}
              onMouseLeave={hideFn}
              className={`px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "text-black border-transparent shadow-lg scale-105 font-black"
                  : "bg-black/40 text-zinc-300 border-white/15 hover:text-white hover:border-white/50 hover:bg-white/10"
              }`}
              style={
                isActive
                  ? {
                      backgroundColor: tierColor,
                      borderColor: tierColor,
                      color: "#000000",
                      boxShadow: `0 0 15px ${tierColor}80`,
                    }
                  : {}
              }
            >
              {renderIcon(cat.iconName, 13)}
              <span>{cat.label}</span>
              {countVal !== null && countVal !== undefined && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${isActive ? "bg-black/30 text-black font-black" : "bg-white/10 text-zinc-300 font-bold"}`}
                >
                  {String(countVal).padStart(2, "0")}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShopFilters;
