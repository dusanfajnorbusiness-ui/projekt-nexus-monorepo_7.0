import { HAMBURGER_MENU_DATA } from "@shared/data/MenuHamburgerData.js";
import { Menu, X } from "lucide-react";
import * as LucideIcons from "lucide-react";
/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ============================================================================
// 👑 NEXUS OS: GLOBÁLNE HAMBURGER MENU (CHAMELEÓN PROTOKOL & HYBRID ROUTING V20)
// Súbor: src/components/GlobalHamburgerMenu.jsx
// Status: 100% GROUNDED // CHAMELEON COLOR ENGINE // DUAL ROUTE + SMOOTH SCROLL
// Core Version: BC-HAMBURGER-MENU V20.65
// ============================================================================

// 🎨 KÁNONICKÁ FAREBNÁ MATICA SEKTOROV A DIMENZIÍ (CHAMELEÓN PROTOKOL)
const CHAMELEON_COLOR_MAP = {
  uplink: "#00f3ff",
  home: "#39FF14",
  shop: "#FFD700",
  videos: "#FF0000",
  audios: "#FF003C",
  images: "#39FF14",
  documents: "#00f3ff",
  apps: "#00f3ff",
  agency: "#00f3ff",
  blog: "#FF1493",
  operators: "#00f3ff",
  settings: "#8A2BE2",
  admin: "#FF003C",
  profil: "#39FF14",
  messages: "#3B82F6",
  // 16 Kognitívnych Dimenzií (ID00 - ID15)
  id00: "#FFFFFF",
  id01: "#39FF14",
  id02: "#FFEB3B",
  id03: "#FFD700",
  id04: "#FFAA00",
  id05: "#FF8C00",
  id06: "#BF00FF",
  id07: "#8A2BE2",
  id08: "#00f3ff",
  id09: "#FF003C",
  id10: "#0044FF",
  id11: "#FFBF00",
  id12: "#00E5FF",
  id13: "#00008B",
  id14: "#FF1493",
  id15: "#8A8A8A",
  // Systémové Porty
  sys01: "#FF0000",
  sys02: "#E91E63",
  sys03: "#BF00FF",
  sys04: "#FF0000",
  sys05: "#39FF14",
};

export const GlobalHamburgerMenu = ({
  activeTab = "home",
  themeColor = null,
  targetScrollId = null,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isMasterHidden, setIsMasterHidden] = useState(false);

  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleOpenProfil = () => setActiveModal("profil");
    const handleCloseProfil = () => setActiveModal(null);
    const handleOpenInbox = () => setActiveModal("messages");
    const handleCloseInbox = () => setActiveModal(null);

    window.addEventListener("nexus_open_profil_modal", handleOpenProfil);
    window.addEventListener("nexus_close_profil_modal", handleCloseProfil);
    window.addEventListener("nexus_open_inbox_modal", handleOpenInbox);
    window.addEventListener("nexus_close_inbox_modal", handleCloseInbox);

    return () => {
      window.removeEventListener("nexus_open_profil_modal", handleOpenProfil);
      window.removeEventListener("nexus_close_profil_modal", handleCloseProfil);
      window.removeEventListener("nexus_open_inbox_modal", handleOpenInbox);
      window.removeEventListener("nexus_close_inbox_modal", handleCloseInbox);
    };
  }, []);

  // Sound FX Triggers
  const triggerHover = () =>
    typeof SoundFX !== "undefined" && SoundFX.hover && SoundFX.hover();
  const triggerClick = () =>
    typeof SoundFX !== "undefined" && SoundFX.click && SoundFX.click();

  // Režim Skrytia z LocalStorage
  useEffect(() => {
    const hiddenState = localStorage.getItem("nexus_hide_hamburger");
    if (hiddenState === "true") setIsMasterHidden(true);
  }, []);

  const userTier = useMemo(() => {
    try {
      const raw = localStorage.getItem("nexus_active_identity");
      if (raw) return JSON.parse(raw)?.tier?.toUpperCase() || "QUEST";
    } catch (e) {}
    return "QUEST"; // Default je QUEST (Host)
  }, []);

  const isArchitect = userTier === "ARCHITECT" || userTier === "MASTER";
  const isRegisteredUser = userTier !== "QUEST" && userTier !== "GUEST"; // Kontrola pre Inbox

  // 🧠 AUTO-SENSE KONTEXTU Z URL LIŠTY (Rieši prepínanie medzi 6 súrodencami a dimenziami)
  const detectedTab = useMemo(() => {
    const path = String(location.pathname || "").toLowerCase();

    // 1. ŠESŤ SÚRODENCOV OBCHODU (Najvyššia priorita detekcie z URL)
    if (path.includes("/shop/audios") || path === "/audios") return "audios";
    if (path.includes("/shop/videos") || path === "/videos") return "videos";
    if (path.includes("/shop/images") || path === "/images") return "images";
    if (path.includes("/shop/documents") || path === "/documents")
      return "documents";
    if (path.includes("/shop/apps") || path === "/apps") return "apps";

    // 2. Ak je explicitne aktívny modál
    if (activeModal) return activeModal;

    // 3. Modály / trasy v URL
    if (path.includes("/profil") || path.includes("/profile")) return "profil";
    if (path.includes("/messages") || path.includes("/inbox"))
      return "messages";

    // 4. Koreňový uzol (Home)
    if (path === "/" || path === "") return "home";

    // 5. Obchod & Agency & Jadrové moduly
    if (path.includes("/agency")) return "agency";
    if (path.startsWith("/shop")) return "shop";
    if (path.includes("/blog")) return "blog";
    if (path.includes("/operators") || path.includes("/operator/"))
      return "operators";
    if (path.includes("/settings")) return "settings";
    if (path.includes("/admin")) return "admin";

    // Fallback na activeTab len ak URL neobsahuje známu trasu
    return activeTab && activeTab !== "home" ? activeTab : "home";
  }, [location.pathname, activeTab, activeModal]);

  // 🎨 DYNAMICKÁ FARBA CHAMELEÓNA (Priority: 1. Ručný prop -> 2. Auto-detegovaný kľúč -> 3. activeTab -> 4. Default Cyan)
  const activeColor = useMemo(() => {
    if (themeColor && themeColor !== "#39FF14" && themeColor !== "#00f3ff") {
      return themeColor;
    }
    return (
      CHAMELEON_COLOR_MAP[detectedTab] ||
      CHAMELEON_COLOR_MAP[activeTab] ||
      themeColor ||
      "#00f3ff"
    );
  }, [themeColor, detectedTab, activeTab]);

  // Výber dátového poľa z SSOT databázy
  const currentMenu = useMemo(() => {
    return (
      HAMBURGER_MENU_DATA[detectedTab] ||
      HAMBURGER_MENU_DATA[activeTab] ||
      HAMBURGER_MENU_DATA.home ||
      []
    );
  }, [detectedTab, activeTab]);

  const [openSections, setOpenSections] = useState({ 0: true }); // Prvá sekcia je defaultne otvorená

  // Transformácia zoznamu z MenuHamburgerData.js na zbaľovacie spoiler sekcie
  const groupedSections = useMemo(() => {
    const sections = [];
    let currentSection = { title: " HLAVNÉ LINKY", items: [] };

    currentMenu.forEach((item) => {
      if (item.isDivider) {
        if (currentSection.items.length > 0 || sections.length > 0) {
          sections.push(currentSection);
        }
        currentSection = { title: item.label, items: [] };
      } else {
        currentSection.items.push(item);
      }
    });

    if (currentSection.items.length > 0) {
      sections.push(currentSection);
    }
    return sections;
  }, [currentMenu]);

  const toggleSection = (idx) => {
    triggerClick();
    setOpenSections((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // ⚡ DUAL-ACTION HANDLER: NAVIGÁCIA + PLYNULÝ SCROLL (V20 KÁNON)
  const handleItemClick = (item) => {
    triggerClick();

    // 🌐 Ak je odkaz externá doména (https://...), otvor v novom okne alebo presmeruj
    if (item.isExternal || (item.url && item.url.startsWith("http"))) {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }

    // 0. Ak klikne na "Písať / Otvoriť Klávesnicu" -> Vynúti focus na cieľový input
    if (item.actionTab === "focus_input" || item.targetInputId) {
      setIsOpen(false);

      // 🧠 Dynamic targeting podľa aktuálneho portu
      let targetId = item.targetInputId;

      if (detectedTab === "messages" || activeTab === "messages") {
        targetId = "nexus-inbox-input";
        window.dispatchEvent(new CustomEvent("nexus_open_inbox_modal"));
      } else if (detectedTab === "profil" || activeTab === "profil") {
        targetId = "nexus-profil-dossier-input";
        window.dispatchEvent(new CustomEvent("nexus_open_profil_modal"));
      } else {
        // Pre Home / Shop / Blog zhasne modály a zacieli hlavné search pole
        window.dispatchEvent(new CustomEvent("nexus_close_profil_modal"));
        window.dispatchEvent(new CustomEvent("nexus_close_inbox_modal"));
        targetId = item.targetInputId || "nexus-global-search-input";
      }

      setTimeout(() => {
        const inputEl = document.getElementById(targetId);
        if (inputEl) {
          inputEl.style.pointerEvents = "auto";
          inputEl.focus();
          inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
      return;
    }

    // 1. Ak klikne na Profil Operátora -> Otvor vyskakovací Profil Modál
    if (item.actionTab === "open_profil" || item.url === "/profil") {
      window.dispatchEvent(new CustomEvent("nexus_close_inbox_modal"));
      window.dispatchEvent(new CustomEvent("nexus_open_profil_modal"));
      setIsOpen(false);
      return;
    }

    // 2. Ak klikne na Inbox -> Otvor vyskakovací Inbox Terminál (len pre prihlásených)
    if (item.actionTab === "open_inbox" || item.url === "/messages") {
      if (!isRegisteredUser) {
        // Ak je QUEST -> Vyzve ho na prihlásenie / otvoria sa Quest Auth zábrany
        window.dispatchEvent(
          new CustomEvent("nexus_open_quest_auth", {
            detail: { reason: "inbox_locked" },
          }),
        );
      } else {
        // Ak je prihlásený -> Otvorí sa Inbox vyskakovacie okno
        window.dispatchEvent(new CustomEvent("nexus_close_profil_modal"));
        window.dispatchEvent(new CustomEvent("nexus_open_inbox_modal"));
      }
      setIsOpen(false);
      return;
    }

    // 3. Ak klikne na akúkoľvek inú navigáciu v systéme -> ZATVOR VŠETKY MODÁLY
    if (item.url) {
      window.dispatchEvent(new CustomEvent("nexus_close_profil_modal"));
      window.dispatchEvent(new CustomEvent("nexus_close_inbox_modal"));
    }

    // A) Externý odkaz
    if (item.targetUrl) {
      window.open(item.targetUrl, "_blank", "noopener,noreferrer");
      setIsOpen(false);
      return;
    }

    // B) Lokálny signál pre tab/akordeón (actionTab / radarAction)
    if (item.actionTab || item.radarAction) {
      window.dispatchEvent(
        new CustomEvent("nexus_switch_local_tab", {
          detail: item.actionTab || item.radarAction,
        }),
      );
    }

    const hasUrl = Boolean(item.url);
    const hasTargetId = Boolean(item.targetId);
    const currentBase = location.pathname.toLowerCase();
    const targetBase = hasUrl ? item.url.split("?")[0].toLowerCase() : "";
    const isDifferentPath = hasUrl && currentBase !== targetBase;

    // C) Sme na inej stránke -> Navigujeme na novú URL
    if (isDifferentPath) {
      navigate(item.url);
      setIsOpen(false);

      // Ak je zadané targetId, po prechode na novú stránku doscrollujeme na element
      if (hasTargetId) {
        let attempts = 0;
        const scan = setInterval(() => {
          const el = document.getElementById(item.targetId);
          if (el) {
            clearInterval(scan);
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          if (++attempts > 25) clearInterval(scan);
        }, 100);
      }
      return;
    }

    // D) Sme na rovnakej stránke, ale menia sa filtre v URL (?cat=..., ?tier=...)
    if (hasUrl && item.url.includes("?")) {
      navigate(item.url);
    }

    // D2) Klik na Home bez kotvy na existujúcej stránke -> Reset na vrch
    if (hasUrl && item.url === "/" && !hasTargetId && currentBase === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // E) Plynulý Scroll na element v rámci existujúcej stránky
    if (hasTargetId) {
      const targetEl = document.getElementById(item.targetId);
      if (targetEl) {
        if (item.targetId.startsWith("SEC_")) {
          targetEl.click(); // Kliknutie na sekčné tlačidlo
        }

        if (targetScrollId) {
          const scrollContainer = document.getElementById(targetScrollId);
          if (scrollContainer) {
            scrollContainer.scrollTo({
              top: targetEl.offsetTop - 20,
              behavior: "smooth",
            });
          }
        } else {
          const y = targetEl.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }

    setIsOpen(false);
  };

  const toggleMenu = () => {
    triggerHover();
    setIsOpen(!isOpen);
  };

  if (isMasterHidden) return null;

  return (
    <div
      id="nexus-global-hamburger"
      className="fixed bottom-6 left-6 z-[9999] font-mono pointer-events-auto"
    >
      {/* 🔮 VYŤAHOVACÍ PANEL S POLOŽKAMI MENU */}
      {isOpen && (
        <div
          className="absolute bottom-16 left-0 w-72 sm:w-80 max-h-[75vh] overflow-y-auto bg-[#050A0E]/95 border rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl p-3 space-y-1 custom-scroll animate-in fade-in slide-in-from-bottom-5 duration-200"
          style={{
            borderColor: `${activeColor}40`,
            boxShadow: `0 0 30px ${activeColor}20`,
          }}
        >
          {/* HLAVIČKA AKTUÁLNEHO MENU */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 px-2">
            <span
              className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5"
              style={{ color: activeColor }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: activeColor }}
              />
              PORT: {detectedTab.toUpperCase()}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white p-1 text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* SPOILER AKORDEÓN SEKCIE */}
          <div className="space-y-1.5">
            {groupedSections.map((sec, sIdx) => {
              const isExpanded = Boolean(openSections[sIdx]);

              return (
                <div
                  key={`sec-${sIdx}`}
                  className="border border-white/10 rounded-xl overflow-hidden bg-black/40"
                >
                  {/* TLAČIDLO PRE ZBALENIE / ROZBALENIE SEKCIE */}
                  <button
                    onClick={() => toggleSection(sIdx)}
                    className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-black uppercase tracking-wider text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-left"
                  >
                    <span className="truncate pr-2">{sec.title}</span>
                    <span style={{ color: activeColor }}>
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </button>

                  {/* OBSAH SEKCIE */}
                  {isExpanded && (
                    <div className="p-1 space-y-0.5 bg-black/60 divide-y divide-white/5">
                      {sec.items.map((item, iIdx) => {
                        const IconComponent =
                          LucideIcons[item.icon] || LucideIcons.Circle;
                        return (
                          <button
                            key={`item-${sIdx}-${iIdx}`}
                            onClick={() => handleItemClick(item)}
                            className="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-all text-left text-xs font-bold cursor-pointer group"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <IconComponent
                                size={13}
                                className="group-hover:scale-110 transition-transform shrink-0"
                                style={{ color: activeColor }}
                              />
                              <span className="truncate text-[11px]">
                                {item.label}
                              </span>
                            </div>
                            {item.url && (
                              <span className="text-[7px] font-mono text-zinc-600 group-hover:text-zinc-400 shrink-0 uppercase">
                                LINK
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ⚡ SPÚŠŤACIE FLOATING TLAČIDLO S DYNAMICKOU FARBOU */}
      <button
        onClick={toggleMenu}
        className="p-3.5 bg-black/80 hover:bg-black rounded-2xl border transition-all flex items-center justify-center cursor-pointer backdrop-blur-xl hover:scale-105"
        style={{
          color: activeColor,
          borderColor: `${activeColor}60`,
          boxShadow: isOpen
            ? `0 0 25px ${activeColor}80`
            : `0 0 20px ${activeColor}33`,
        }}
        title="Globálne Navigačné Menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  );
};

export default GlobalHamburgerMenu;
