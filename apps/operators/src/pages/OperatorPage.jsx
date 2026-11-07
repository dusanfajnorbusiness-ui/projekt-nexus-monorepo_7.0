// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (ODKOMENTUJ VO SVOJOM VS CODE)
// ============================================================================
import GlobalProfil from "@shared/components/GlobalProfil.jsx";
import { NexusDB } from "@shared/services/NexusDB_Core.js";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";

// import MetaTags from "@operators/components/MetaTags";

export default function OperatorPage() {
  

  const { entityId } = useParams();
  const navigate = useNavigate();
  const [targetOperator, setTargetOperator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!entityId) {
      navigate("/operators");
      return;
    }

    const unsub = NexusDB.subscribeToAllUsers((users) => {
      const found = users.find((u) => {
        const searchTarget = entityId.toLowerCase().trim();
        const dbId = String(u.id || "").toLowerCase();
        const dbEmail = String(u.email || "").toLowerCase();
        const dbName1 = String(u.displayName || "")
          .toLowerCase()
          .replace(/\s+/g, "");
        const dbName2 = String(u.display_name || "")
          .toLowerCase()
          .replace(/\s+/g, "");

        return (
          dbId === searchTarget ||
          dbEmail === searchTarget ||
          dbName1 === searchTarget ||
          dbName2 === searchTarget ||
          dbEmail.startsWith(searchTarget) ||
          dbId.startsWith(searchTarget)
        );
      });

      if (found) {
        setTargetOperator(found);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [entityId, navigate]);

  // 🛑 FIX 1: Loading obrazovka ako Portal (s opraveným z- stacking contextom)
  if (loading) {
    const loadingScreen = (
      <div className="fixed inset-0 z-[999999] bg-[#030507] flex items-center justify-center font-mono">
        <span className="text-[#39FF14] text-[10px] uppercase font-black tracking-[0.3em] animate-pulse">
          Dekódujem Súradnice Entity...
        </span>
      </div>
    );
    return typeof document !== "undefined"
      ? createPortal(loadingScreen, document.body)
      : null;
  }

  // 🛑 FIX 2: Záchytná hláška ako Portal (s opraveným z- stacking contextom)
  if (!targetOperator) {
    const isBot =
      typeof navigator !== "undefined" &&
      /ReactSnap|HeadlessChrome|bot|facebookexternalhit|LinkedInBot|Slurp/i.test(
        navigator.userAgent,
      );
    if (isBot) {
      return (
        <div className="min-h-screen bg-[#03080a] flex items-center justify-center">
          {/* <MetaTags /> */}
          <div className="opacity-0 text-[1px]">NEXUS GHOST NODE</div>
        </div>
      );
    }
    const errorScreen = (
      <div className="fixed inset-0 z-[999999] bg-[#030507] flex flex-col items-center justify-center font-mono gap-6">
        <span className="text-[#FF003C] text-[12px] uppercase font-black tracking-widest">
          Entita [ {entityId} ] Nenájdená
        </span>
        <button
          onClick={() => navigate("/operators")}
          className="px-6 py-3 border border-white/10 text-white/50 hover:text-white rounded-xl text-[10px] uppercase font-black tracking-widest transition-all hover:bg-white/5"
        >
          Návrat do Siete
        </button>
      </div>
    );
    return typeof document !== "undefined"
      ? createPortal(errorScreen, document.body)
      : null;
  }

  // 🛑 FIX 3: Samotný Profil (Profil sa už portaluje sám vnútri komponentu)
  return (
    <GlobalProfil
      isOpen={true}
      isMaximized={true}
      isStandalonePage={true}
      onClose={() => navigate("/operators")}
      onToggleMaximize={() => {}}
      profileData={targetOperator}
      title={`Verejný Záznam: ${targetOperator.displayName || entityId}`}
    />
  );
}
