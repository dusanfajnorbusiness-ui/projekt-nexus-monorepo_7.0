/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SYS03 MASTER DATASET V20.142)
// Súbor: src/components/GlobalKeyboard.jsx
// Status: 100% GROUNDED // DEDICATED VIRTUAL KEYBOARD & VIEWPORT ENGINE
// ============================================================================

import React, { useEffect } from "react";

export const GlobalKeyboard = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const vv = window.visualViewport;

    // 🧠 REAL-TIME SKENEROVANIE VÝŠKY MOBILNEJ KLÁVESNICE
    const handleViewportChange = () => {
      if (!vv) return;
      const keyboardHeight = window.innerHeight - vv.height;

      // Ak je klávesnica vysunutá (> 150px)
      if (keyboardHeight > 150) {
        document.documentElement.style.setProperty(
          "--keyboard-height",
          `${keyboardHeight}px`,
        );
        document.documentElement.classList.add("keyboard-active");

        // Automatické posunutie aktívneho inputu do zorného poľa (Scroll-into-view)
        const activeEl = document.activeElement;
        if (
          activeEl &&
          (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")
        ) {
          setTimeout(() => {
            activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 100);
        }
      } else {
        document.documentElement.style.setProperty("--keyboard-height", "0px");
        document.documentElement.classList.remove("keyboard-active");
      }
    };

    // Lapač pre dotyky a focus
    const handleFocusIn = (e) => {
      const target = e.target;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        target.style.pointerEvents = "auto";
        if (!target.hasAttribute("inputmode")) {
          target.setAttribute(
            "inputmode",
            target.type === "search" ? "search" : "text",
          );
        }
      }
    };

    window.addEventListener("focusin", handleFocusIn);
    if (vv) {
      vv.addEventListener("resize", handleViewportChange);
      vv.addEventListener("scroll", handleViewportChange);
    }

    return () => {
      window.removeEventListener("focusin", handleFocusIn);
      if (vv) {
        vv.removeEventListener("resize", handleViewportChange);
        vv.removeEventListener("scroll", handleViewportChange);
      }
    };
  }, []);

  return null; // Bezvizuálny engine
};

export default GlobalKeyboard;
