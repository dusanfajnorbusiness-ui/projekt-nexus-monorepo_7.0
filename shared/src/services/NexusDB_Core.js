import { EXODUS_CONFIG } from "./NexusDB_Config";
import { NexusDB_Blog } from "./NexusDB_Blog";
import { NexusDB_Shop } from "./NexusDB_Shop";
import { NexusDB_Users } from "./NexusDB_Users";
import { SupabaseProvider, supabase } from "./NexusDB_Supabase";

const FirebaseProvider = {
  ...NexusDB_Blog,
  ...NexusDB_Shop,
  ...NexusDB_Users,
};

const ActiveDB =
  EXODUS_CONFIG.ACTIVE_PROVIDER === "SUPABASE"
    ? SupabaseProvider
    : FirebaseProvider;

// ============================================================================
// 📊 SÉMANTICKÁ TELEMETRIA UZLOV (EXODUS V2) - OPRAVENÉ CHYBY 406
// ============================================================================

const isLocal =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const recordNodeView = async (nodeId) => {
  try {
    if (!supabase) return;
    if (isLocal) {
      console.log(
        `🛡️ [SHIELD]: Zápis VIEW pre uzol ${nodeId} zablokovaný na LocalHoste.`,
      );
      return;
    }
    // ⚡ FIX: maybeSingle() namiesto single() zabráni chybe 406, ak uzol ešte neexistuje
    const { data } = await supabase
      .from("node_telemetry")
      .select("views_count")
      .eq("node_id", nodeId)
      .maybeSingle();
    const currentViews = data ? data.views_count : 0;

    await supabase.from("node_telemetry").upsert({
      node_id: nodeId,
      views_count: currentViews + 1,
      last_updated: new Date().toISOString(),
    });
  } catch (err) {}
};

const recordNodeCompletion = async (nodeId) => {
  try {
    if (!supabase) return;
    const { data } = await supabase
      .from("node_telemetry")
      .select("completed_count")
      .eq("node_id", nodeId)
      .maybeSingle();
    const currentComp = data ? data.completed_count : 0;

    await supabase.from("node_telemetry").upsert({
      node_id: nodeId,
      completed_count: currentComp + 1,
      last_updated: new Date().toISOString(),
    });
  } catch (err) {}
};

const addNodeReadTime = async (nodeId, seconds) => {
  try {
    if (!supabase) return;
    const { data } = await supabase
      .from("node_telemetry")
      .select("total_time_seconds")
      .eq("node_id", nodeId)
      .maybeSingle();
    const currentTime = data ? data.total_time_seconds : 0;

    await supabase.from("node_telemetry").upsert({
      node_id: nodeId,
      total_time_seconds: currentTime + seconds,
      last_updated: new Date().toISOString(),
    });
  } catch (err) {}
};

const getTelemetry = async (nodeId) => {
  try {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("node_telemetry")
      .select("*")
      .eq("node_id", nodeId)
      .maybeSingle();
    if (error || !data) return null;

    const completionRate =
      data.views_count > 0
        ? Math.round((data.completed_count / data.views_count) * 100)
        : 0;
    const avgTime =
      data.views_count > 0
        ? Math.round(data.total_time_seconds / data.views_count)
        : 0;

    return {
      views: data.views_count,
      completion: Math.min(100, completionRate),
      time: avgTime,
    };
  } catch (err) {
    return null;
  }
};

// ============================================================================
// 🛡️ OCHRANA REAKCIÍ (BYPASS PRE CHYBU 409 CONFLICT)
// ============================================================================
const saveReactions = async (nodeId, newReactions) => {
  try {
    if (!supabase) return;
    // Ak je uzol aktualizovaný Quest hosťom, zabezpečíme korektný zapisovací payload
    const targetNodeId = String(nodeId || "").trim();
    if (!targetNodeId) return;

    // ⚡ FIX: Používame striktný UPDATE namiesto INSERTU.
    const { error } = await supabase
      .from("nexus_posts")
      .update({ reactions: newReactions })
      .eq("id", targetNodeId);

    if (error) {
      console.warn(
        "⚠️ [NexusDB]: Supabase RLS zachytil zápis reakcie. Vizuál beží lokálne (Optimistic UI).",
        error.message,
      );
    }
  } catch (err) {
    console.error("Chyba pri ukladaní reakcie:", err);
  }
};

export const NexusDB = {
  // ⚡ OČISTA: Zmazali sme natvrdo vložený ...FirebaseProvider. O riadenie sa stará už len ActiveDB!
  ...ActiveDB,

  // Injektované funkcie
  recordNodeView,
  recordNodeCompletion,
  addNodeReadTime,
  getTelemetry,
  saveReactions, // ⚡ Nová funkcia pre lajky

  // 🛡️ OMEGA PROTOKOL: Načítanie profilu pre Firewall (SUPABASE VERZIA)
  getUserProfile: async (email) => {
    try {
      const safeEmail = String(email || "").trim();
      if (!safeEmail || safeEmail === "quest" || safeEmail === "NEXUS_GUEST") {
        return {
          data: {
            email: "quest",
            displayName: "Anonymný Hosť",
            tier: "QUEST",
            isGuest: true,
            credits: 0,
          },
          error: null,
        };
      }
      if (!supabase) return { data: null, error: "NO_DB" };

      // ⚡ EXODUS FIX: Pýtame sa priamo Supabase tabuľky
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", safeEmail)
        .maybeSingle();

      if (error) throw error;

      return { data: data || null, error: data ? null : "USER_NOT_FOUND" };
    } catch (err) {
      console.error("🔴 [NexusDB]: Chyba pri čítaní profilu zo Supabase:", err);
      return { data: null, error: err };
    }
  },

  getDiagnostics() {
    return {
      status:
        typeof window !== "undefined" && window.navigator.onLine
          ? "CONNECTED"
          : "DISCONNECTED",
      active_provider: EXODUS_CONFIG.ACTIVE_PROVIDER,
      protocol: "EXODUS_V2",
      version: EXODUS_CONFIG.VERSION,
    };
  },
};

export default NexusDB;
