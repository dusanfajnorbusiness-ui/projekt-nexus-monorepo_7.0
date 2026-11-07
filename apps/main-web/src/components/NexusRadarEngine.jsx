import React, { useEffect } from "react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE)
// ============================================================================
import { SoundFX } from "@shared/utils/SoundEngine.js";

// ============================================================================
// ⚠️ MOCK PRE CANVAS NÁHĽAD (ZMAZAŤ V LOKÁLNOM PROJEKTE) ⚠️
// ============================================================================

// ============================================================================

const CORE_VERSION = "C-NexusRadarEngine V20.0-MVP";

export const NexusRadarEngine = ({ defaultColor = "#E91E63" }) => {
  useEffect(() => {
    console.log(
      `%c 🛰️ [RADAR_ONLINE]: ${CORE_VERSION} bootuje na pozadí.`,
      "color: #00FFFF; font-weight: bold; padding: 2px;",
    );

    // Hlavná funkcia Zameriavača
    const handleRadarVisualLock = (e) => {
      // Zoberieme cieľ z rôznych typov eventov (Radar Jump alebo Radar Scan)
      const targetId = e?.detail?.targetId || e?.detail;
      if (!targetId) return;

      let attempts = 0;
      // Interval hľadá element, pretože po scrolle môže chvíľu trvať, kým sa DOM usadí
      const findAndZoom = setInterval(() => {
        attempts++;

        let el =
          document.getElementById(`post-${targetId}`) ||
          document.getElementById(`topic-${targetId}`);
        if (!el) el = document.getElementById(targetId); // Fallback na čisté ID

        if (el) {
          clearInterval(findAndZoom);

          if (SoundFX?.success) SoundFX.success(); // Zvukové potvrdenie zamerania

          // Zazálohovanie pôvodných hodnôt
          const originalTransform = el.style.transform;
          const originalBoxShadow = el.style.boxShadow;
          const originalTransition = el.style.transition;
          const originalZIndex = el.style.zIndex;

          // ⚡ APLIKÁCIA 3D ZOOM EFEKTU (Cyber-Brutalism)
          el.style.transition =
            "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          el.style.transform = "scale(1.02) translateY(-4px)";
          el.style.boxShadow = `0 15px 35px -5px ${defaultColor}80, 0 0 20px ${defaultColor}50`;
          el.style.zIndex = "50";

          // Návrat do normálu po 1.2 sekunde
          setTimeout(() => {
            if (el) {
              el.style.transform = "scale(1) translateY(0)";
              el.style.boxShadow = originalBoxShadow || "none";

              // Odstránenie transition poistky
              setTimeout(() => {
                if (el) {
                  el.style.transition = originalTransition || "";
                  el.style.zIndex = originalZIndex || "";
                }
              }, 400);
            }
          }, 1200);
        } else if (attempts > 25) {
          // Záchranná brzda - ak element nenájde do 5 sekúnd (25 * 200ms), vzdá to.
          clearInterval(findAndZoom);
          console.warn(
            `[RADAR_ENGINE]: Cieľ ${targetId} nenájdený v DOMe po 25 pokusoch.`,
          );
        }
      }, 200);
    };

    // 🛑 FIX: Odstránili sme starý predčasný "nexus_radar_jump".
    // Radar teraz poslušne čaká na povel "nexus_radar_visual_lock" z BlogPage.
    window.addEventListener("nexus_radar_visual_lock", handleRadarVisualLock);

    return () => {
      window.removeEventListener(
        "nexus_radar_visual_lock",
        handleRadarVisualLock,
      );
    };
  }, [defaultColor]);

  // Tento komponent nemá vlastné HTML. Je to "Duch", ktorý beží v pamäti a ovláda DOM.
  return null;
};
