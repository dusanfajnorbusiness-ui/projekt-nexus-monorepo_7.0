import {
  Brain,
  Building2,
  Check,
  ChevronDown,
  ChevronUp,
  Filter,
  RotateCcw,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE V PRÍPADE POTREBY)
// ============================================================================

const CORE_VERSION = "BC-PRE-FILTER-DRAWER V20.1";

// 🛑 MOCK DÁTA PRE SÉMANTICKÚ MATRICU OTÁZOK "PRE"
const PRE_FILTER_TAXONOMY = [
  {
    id: "preKoho",
    label: "PRE KOHO",
    icon: UserCheck,
    options: [
      {
        key: "codm",
        label: "CoDM Hráči & E-šport",
        scope: "BOTH",
        tag: "hráč",
      },
      {
        key: "operator",
        label: "Operátori & Študenti Kódexov",
        scope: "IN_NEXUS",
        tag: "operátor",
      },
      {
        key: "streamer",
        label: "Streameri & Tvorcovia Videa",
        scope: "ON_NEXUS",
        tag: "stream",
      },
      {
        key: "b2b",
        label: "B2B Podnikatelia & Franšízy",
        scope: "ON_NEXUS",
        tag: "b2b",
      },
    ],
  },
  {
    id: "preAkyTypLudi",
    label: "PRE AKÝ TYP ĽUDÍ",
    icon: Users,
    options: [
      {
        key: "pressure",
        label: "Taktici pracujúci pod tlakom",
        scope: "BOTH",
        tag: "tlak",
      },
      {
        key: "limbic",
        label: "Limbický šum & Rozptýlenie",
        scope: "IN_NEXUS",
        tag: "šum",
      },
      {
        key: "procrastination",
        label: "Blokovaní prokrastináciou",
        scope: "IN_NEXUS",
        tag: "disciplín",
      },
      {
        key: "executors",
        label: "Lídri vyžadujúci exekúciu",
        scope: "ON_NEXUS",
        tag: "exekúc",
      },
    ],
  },
  {
    id: "preAkyTypCloveka",
    label: "PRE AKÝ TYP ČLOVEKA",
    icon: Brain,
    options: [
      {
        key: "flow",
        label: "Hľadajúci stav Flow & Wu-wei",
        scope: "IN_NEXUS",
        tag: "flow",
      },
      {
        key: "overclock",
        label: "Preťažený procesor (100% CPU)",
        scope: "IN_NEXUS",
        tag: "preťažen",
      },
      {
        key: "copyright",
        label: "Vyžadujúci čisté autorské práva",
        scope: "ON_NEXUS",
        tag: "licenc",
      },
      {
        key: "results",
        label: "Zameraný na výsledok bez omáčok",
        scope: "BOTH",
        tag: "výsledok",
      },
    ],
  },
  {
    id: "preAkyTypSpolocnosti",
    label: "PRE AKÝ TYP SPOLOČNOSTI",
    icon: Building2,
    options: [
      {
        key: "nodes",
        label: "Komunitné uzly Siete Nexus",
        scope: "IN_NEXUS",
        tag: "nexus",
      },
      {
        key: "gaming_teams",
        label: "Herné tímy & Kanály",
        scope: "BOTH",
        tag: "herné",
      },
      {
        key: "agencies",
        label: "Digitálne & Kreatívne Agentúry",
        scope: "ON_NEXUS",
        tag: "agentúr",
      },
      {
        key: "enterprises",
        label: "B2B Technologické Firmy",
        scope: "ON_NEXUS",
        tag: "spoločnos",
      },
    ],
  },
];

export const ModalPreFilterDrawer = ({
  isOpen = false,
  onClose = () => {},
  items = [],
  activeScope = "ALL", // "ALL" | "IN_NEXUS" | "ON_NEXUS"
  onChangeScope = () => {},
  selectedTag = "",
  onSelectTag = () => {},
  onResetFilters = () => {},
}) => {
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleSection = (id) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const normalize = (str) =>
    String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  // Defenzívny prepočet počtu produktov pre každé tlačidlo
  const matchesMap = useMemo(() => {
    const map = {};
    const safeItems = Array.isArray(items)
      ? items
      : items && typeof items === "object"
        ? Object.values(items)
        : [];

    if (safeItems.length === 0) return map;

    // Pripravíme sémantický text pre každý produkt
    const corpora = safeItems.map((item) => {
      const detail = item?.scanDetail || {};
      const sub = detail?.preKohoJeToto || {};
      const parts = [
        item?.title,
        item?.fullName,
        item?.category,
        item?.subCategory,
        item?.dimension,
        item?.dimensionTitle,
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
      ];
      return normalize(parts.filter(Boolean).join(" "));
    });

    // Spočítame zhody cez presné hranice slov (Word-Boundary Shield)
    (PRE_FILTER_TAXONOMY || []).forEach((group) => {
      (group.options || []).forEach((opt) => {
        const needle = normalize(opt.tag).trim();
        if (!needle) {
          map[opt.key] = 0;
          return;
        }
        const escaped = needle.replace(/[.*+?^\${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(^|[^a-z0-9])${escaped}`, "i");
        let count = 0;
        for (let i = 0; i < corpora.length; i++) {
          if (regex.test(corpora[i])) count++;
        }
        map[opt.key] = count;
      });
    });

    return map;
  }, [items]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 999999, // 👈 Nadradený z-index, aby navigácia neprekrývala vrchnú lištu
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "90px", // 👈 Bezpečné odsadenie pod 70-80px fixné menu App.jsx
        paddingBottom: "60px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      {/* MONOLIT CONTAINER */}
      <div
        style={{
          width: "95%",
          maxWidth: "880px",
          backgroundColor: "#0B0F19",
          border: "1px solid rgba(0, 243, 255, 0.3)",
          borderRadius: "16px",
          boxShadow:
            "0 0 60px rgba(0, 243, 255, 0.2), inset 0 0 25px rgba(0,0,0,0.9)",
          padding: "24px",
          position: "relative",
          maxHeight: "calc(100vh - 140px)", // 👈 Zaručuje, že spodok modalu je vždy v okne
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "16px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Filter size={20} color="#00f3ff" />
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "900",
                  letterSpacing: "1px",
                  color: "#00f3ff",
                }}
              >
                SÉMANTICKÝ FILTER KATEGÓRIÍ (4x PRE)
              </div>
              <div style={{ fontSize: "11px", color: "#94A3B8" }}>
                Filtruj produkty podľa psychologického a systémového profilu
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {selectedTag && (
              <button
                onClick={onResetFilters}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(255, 0, 60, 0.15)",
                  border: "1px solid #FF003C",
                  color: "#FF003C",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                <RotateCcw size={12} /> RESET
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "none",
                color: "#94A3B8",
                cursor: "pointer",
                padding: "4px",
              }}
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* 🧠 DIAGNOSTICKÝ SKENER: 4x OTÁZKY "PRE" & SÉMANTICKÉ PARAMETRE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {PRE_FILTER_TAXONOMY.map((group) => {
            const Icon = group.icon;
            const isCollapsed = collapsedSections[group.id];
            const visibleOptions = Array.isArray(group.options)
              ? group.options
              : [];

            return (
              <div
                key={group.id}
                style={{
                  backgroundColor: "#0F172A",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  marginBottom: "10px",
                }}
              >
                {/* HLAVIČKA AKORDEÓNU */}
                <div
                  onClick={() => toggleSection(group.id)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 14px",
                    cursor: "pointer",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderBottom: isCollapsed
                      ? "none"
                      : "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon size={14} color="#00f3ff" />
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        letterSpacing: "0.5px",
                        color: "#F8FAFC",
                      }}
                    >
                      {group.label}
                    </span>
                  </div>
                  {isCollapsed ? (
                    <ChevronDown size={14} color="#94A3B8" />
                  ) : (
                    <ChevronUp size={14} color="#00f3ff" />
                  )}
                </div>

                {/* ZOZNAM TVOJICH TLAČIDIEL S TVOJÍM DIZAJNOM */}
                {!isCollapsed && (
                  <div
                    style={{
                      padding: "12px",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(240px, 1fr))",
                      gap: "8px",
                    }}
                  >
                    {visibleOptions.map((opt) => {
                      const isSelected = selectedTag === opt.tag;
                      // Číslo zhôd čítame bezpečne z pamäte
                      const count = matchesMap[opt.key] ?? 0;

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => onSelectTag(isSelected ? "" : opt.tag)}
                          disabled={count === 0 && !isSelected}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: isSelected
                              ? "rgba(0, 243, 255, 0.18)"
                              : "#1E293B",
                            border: isSelected
                              ? "1px solid #00f3ff"
                              : "1px solid rgba(255, 255, 255, 0.04)",
                            color: isSelected
                              ? "#00f3ff"
                              : count > 0
                                ? "#CBD5E1"
                                : "#475569",
                            padding: "8px 12px",
                            borderRadius: "4px",
                            fontSize: "11px",
                            cursor:
                              count > 0 || isSelected
                                ? "pointer"
                                : "not-allowed",
                            textAlign: "left",
                            transition: "all 0.15s ease",
                            opacity: count === 0 && !isSelected ? 0.4 : 1,
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            {isSelected && <Check size={12} color="#00f3ff" />}
                            {opt.label}
                          </span>
                          <span
                            style={{
                              backgroundColor: isSelected
                                ? "#00f3ff"
                                : "rgba(0,0,0,0.4)",
                              color: isSelected
                                ? "#000"
                                : count > 0
                                  ? "#64748B"
                                  : "#334155",
                              padding: "2px 6px",
                              borderRadius: "10px",
                              fontSize: "9px",
                              fontWeight: "bold",
                            }}
                          >
                            [{String(count).padStart(3, "0")}]
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FOOTER & VERSION STAMP */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "12px",
          }}
        >
          <div style={{ fontSize: "8px", opacity: 0.2, letterSpacing: "1px" }}>
            {CORE_VERSION} // OS GENESIS MONOLITH
          </div>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#00f3ff",
              color: "#000",
              fontWeight: "900",
              border: "none",
              padding: "8px 20px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
              letterSpacing: "0.5px",
            }}
          >
            POTVRDIŤ A ZOBRAZIŤ VÝSLEDKY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPreFilterDrawer;
