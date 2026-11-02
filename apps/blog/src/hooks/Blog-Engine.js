import { useState, useEffect, useMemo, useCallback } from "react";
import { SoundFX } from "@shared/utils/SoundEngine";
import { checkPermission } from "@blog/data/permissionsRegistry";

// ⚡ JEDINÝ IMPORT DÁT: Náš nový abstraktný most
import { NexusDB } from "@shared/services/GlobalNexusDB_Core";

const CORE_VERSION = "H-BlogEngine V30.0-EXODUS-CLEAN";

export const useBlogEngine = (userState) => {
  const [allRawPosts, setAllRawPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readPosts, setReadPosts] = useState([]);
  const [liveUsers, setLiveUsers] = useState({});

  const [filters, setFilters] = useState({
    type: "ALL",
    category: "ALL",
    searchTxt: "",
    operatorSearch: "",
    pinnedOnly: false,
    focusedThread: null,
  });

  useEffect(() => {
    // console.log(
    //   `%c [LOADED]: ${CORE_VERSION} `,
    //   "background: #000; color: #39FF14; font-weight: bold;",
    // );
  }, []);

  const storageKey = userState?.email
    ? `nexus_read_posts_${userState.email}`
    : "nexus_read_posts_guest";

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
    setReadPosts(stored);
  }, [storageKey]);

  // ==========================================================================
  // 📡 SYNCHRONIZÁCIA CEZ NEXUS MOST (EXODUS PROTOCOL)
  // ==========================================================================
  useEffect(() => {
    // Tieto funkcie z NexusDB už vedia, či použiť Firebase, Supabase alebo Lokálny JSON
    const unsubPosts = NexusDB.subscribeToPosts((data) => {
      const sorted = data.sort(
        (a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0),
      );
      setAllRawPosts(sorted);
      setLoading(false);
    });

    const unsubUsers = NexusDB.subscribeToUsers((data) => {
      setLiveUsers(data);
    });

    return () => {
      if (unsubPosts) unsubPosts();
      if (unsubUsers) unsubUsers();
    };
  }, []);

  // ==========================================================================
  // 🧠 SPRACOVANIE DÁT A KATEGORIZÁCIA
  // ==========================================================================
  const processedAllPosts = useMemo(() => {
    if (allRawPosts.length === 0) return [];

    const getRootId = (postId) => {
      let current = allRawPosts.find((p) => p.id === postId);
      let depth = 0;
      while (current && current.parentId && depth < 50) {
        current = allRawPosts.find((p) => p.id === current.parentId);
        depth++;
      }
      return current ? current.id : null;
    };

    const enhanced = allRawPosts.map((p) => {
      const liveAuthor = liveUsers[p.authorId];
      return {
        ...p,
        authorName: liveAuthor?.displayName || p.authorName || "Neznáma Entita",
        authorAvatar: liveAuthor?.avatar || p.authorAvatar || "",
        authorTier: liveAuthor?.tier || p.authorTier || "FREE",
        lastActive: liveAuthor?.lastActive || p.lastActive || null,
      };
    });

    const timelineSorted = [...enhanced].sort(
      (a, b) => (a.timestamp?.seconds || 0) - (b.timestamp?.seconds || 0),
    );
    const rootsOnly = timelineSorted.filter((p) => !p.parentId);

    rootsOnly.forEach((root, rIdx) => {
      const idtStr = `IDT${String(rIdx + 1).padStart(3, "0")}`;
      const cluster = timelineSorted.filter((p) => getRootId(p.id) === root.id);
      root.totalReplies = Math.max(0, cluster.length - 1);
      cluster.forEach((post, pIdx) => {
        post.displayId = `${idtStr}-V${String(pIdx + 1).padStart(3, "0")}`;
      });
    });

    return enhanced;
  }, [allRawPosts, liveUsers]);

  const pinnedRootIds = useMemo(() => {
    const ids = new Set();
    const getRootId = (postId) => {
      let current = processedAllPosts.find((p) => p.id === postId);
      let depth = 0;
      while (current && current.parentId && depth < 50) {
        current = processedAllPosts.find((p) => p.id === current.parentId);
        depth++;
      }
      return current ? current.id : null;
    };

    processedAllPosts.forEach((post) => {
      if (!!post.isPinned || !!post.pinned) {
        const rId = getRootId(post.id);
        if (rId) ids.add(rId);
      }
    });
    return ids;
  }, [processedAllPosts]);

  const roots = useMemo(() => {
    return processedAllPosts
      .filter((p) => !p.parentId)
      .sort((a, b) => {
        const aPinned = pinnedRootIds.has(a.id);
        const bPinned = pinnedRootIds.has(b.id);
        if (aPinned && !bPinned) return -1;
        if (!aPinned && bPinned) return 1;
        const timeA = a.timestamp?.seconds || 0;
        const timeB = b.timestamp?.seconds || 0;
        return timeB - timeA;
      });
  }, [processedAllPosts, pinnedRootIds]);

  const replies = useMemo(
    () => processedAllPosts.filter((p) => p.parentId),
    [processedAllPosts],
  );

  const filteredRoots = useMemo(() => {
    const getRootId = (postId) => {
      let current = processedAllPosts.find((p) => p.id === postId);
      let depth = 0;
      while (current && current.parentId && depth < 50) {
        current = processedAllPosts.find((p) => p.id === current.parentId);
        depth++;
      }
      return current ? current.id : null;
    };

    const myRepliedRoots = new Set();
    const myInteractionRoots = new Set();

    if (userState?.email) {
      processedAllPosts.forEach((post) => {
        // 🧠 Ochrana: Berieme do úvahy Email aj DisplayName (kvôli Mock dátam)
        const isMine =
          post.authorId === userState.email ||
          post.authorName === userState.displayName;
        const rootId = getRootId(post.id);
        if (!rootId) return;

        // Ak som odpovedal a post má rodiča (je to odpoveď), zapíšeme si rootId
        if (isMine && post.parentId) myRepliedRoots.add(rootId);

        if (filters.type === "REACTIONS") {
          if (isMine) {
            const hasOthersReacts = Object.entries(post.reactions || {}).some(
              ([type, arr]) => {
                if (type === "mention") return false;
                return (
                  Array.isArray(arr) && arr.some((e) => e !== userState.email)
                );
              },
            );
            if (hasOthersReacts) myInteractionRoots.add(rootId);
          }
          if (!isMine && post.reactions?.mention?.includes(userState.email))
            myInteractionRoots.add(rootId);
          if (!isMine && post.parentId) {
            const parentPost = processedAllPosts.find(
              (p) => p.id === post.parentId,
            );
            if (
              parentPost &&
              (parentPost.authorId === userState.email ||
                parentPost.authorName === userState.displayName)
            )
              myInteractionRoots.add(rootId);
          }
        }
      });
    }

    return roots.filter((root) => {
      const sTxt = filters.searchTxt?.toLowerCase();
      const oTxt = filters.operatorSearch?.toLowerCase();

      // ⚡ FINÁLNY CHAMELEÓN FILTER
      const rawCat = String(
        root.category || root.cluster || "uncategorized",
      ).toLowerCase();
      const activeFilterCat = String(filters.category || "ALL").toLowerCase();

      if (activeFilterCat !== "all") {
        const cleanRootCat = rawCat
          .replace("stk", "")
          .replace("dim", "")
          .trim();
        const cleanActiveCat = activeFilterCat
          .replace("stk", "")
          .replace("dim", "")
          .trim();
        if (cleanRootCat !== cleanActiveCat) {
          return false;
        }
      }

      if (filters.pinnedOnly && !pinnedRootIds.has(root.id)) return false;

      // 🛑 OCHRANA "MOJE VLÁKNA": Zlučuje všetky možné signály z Toolbaru (MINE, MY, PARTICIPATED)
      if (
        filters.type === "MINE" ||
        filters.type === "MY" ||
        filters.type === "PARTICIPATED"
      ) {
        const isRootMine =
          root.authorId === userState?.email ||
          root.authorName === userState?.displayName;
        const didIReply = myRepliedRoots.has(root.id);

        // Ak nie som autorom hlavnej témy a ani som v nej nikdy neodpovedal, filter ju zničí!
        if (!isRootMine && !didIReply) return false;
      }

      if (filters.type === "NEW") {
        const isThreadUnread = !readPosts.includes(root.id);
        // 🛑 FIX: Zmenené r.parentId na getRootId(r.id), aby to bralo do úvahy aj 5. úroveň hĺbky!
        const hasUnreadReply = replies.some(
          (r) => getRootId(r.id) === root.id && !readPosts.includes(r.id),
        );
        if (!isThreadUnread && !hasUnreadReply) return false;
      }

      if (filters.type === "REACTIONS" && !myInteractionRoots.has(root.id))
        return false;

      // 🧠 SMART SEARCH: Vyhľadáva aj vo vnútri hlbokých odpovedí
      if (
        sTxt &&
        !(
          root.content?.toLowerCase().includes(sTxt) ||
          root.title?.toLowerCase().includes(sTxt) ||
          root.text?.toLowerCase().includes(sTxt)
        )
      ) {
        const matchInReply = processedAllPosts.some(
          (p) =>
            getRootId(p.id) === root.id &&
            (p.content?.toLowerCase().includes(sTxt) ||
              p.text?.toLowerCase().includes(sTxt)),
        );
        if (!matchInReply) return false;
      }

      if (
        oTxt &&
        !(
          root.authorName?.toLowerCase().includes(oTxt) ||
          root.authorId?.toLowerCase().includes(oTxt)
        )
      )
        return false;

      if (filters.focusedThread && root.id !== filters.focusedThread)
        return false;

      return true;
    });
  }, [
    roots,
    replies,
    processedAllPosts,
    filters,
    userState,
    readPosts,
    pinnedRootIds,
  ]);

  // ==========================================================================
  // ⚔️ EXEKUTÍVNE AKCIE (Presmerované do NexusDB)
  // ==========================================================================
  const handleAction = useCallback(
    async (postId, action, data) => {
      try {
        await NexusDB.executeAction(
          postId,
          action,
          data,
          userState,
          processedAllPosts,
        );
        if (SoundFX?.click) SoundFX.click();
        if (action !== "react" && SoundFX?.success) SoundFX.success();
      } catch (e) {
        alert(`EXODUS_ERROR: ${e.message}`);
      }
    },
    [processedAllPosts, userState],
  );

  // 1. NAJPRV definujeme markAsRead
  const markAsRead = (id) => {
    if (readPosts.includes(id)) return;
    const newRead = [...readPosts, id];
    setReadPosts(newRead);
    localStorage.setItem(storageKey, JSON.stringify(newRead));
  };

  // 2. POTOM markAllAsRead
  const markAllAsRead = () => {
    const allIds = allRawPosts.map((p) => p.id);
    setReadPosts(allIds);
    localStorage.setItem(storageKey, JSON.stringify(allIds));
  };

  // 3. A AŽ TERAZ deployPost (ktorý markAsRead bezpečne využije)
  const deployPost = async (payload) => {
    try {
      // 🛡️ EXODUS POISTKA: Odstránime STK aj DIM a pošleme čisté kľúče
      let rawCat = payload.category || payload.cluster || "uncategorizedSTK";
      if (rawCat.toLowerCase() === "uncategorized") {
        rawCat = "uncategorizedSTK";
      }

      const safePayload = {
        ...payload,
        category: rawCat,
        cluster: rawCat,
      };

      const result = await NexusDB.createPost(
        safePayload,
        userState,
        processedAllPosts,
      );

      // Zistíme, či nám DB vrátila iba ID (Ostrá prevádzka) alebo celý Mock Objekt (LocalHost)
      const isMockObject = typeof result === "object" && result !== null;
      const docId = isMockObject ? result.id : result;

      // // OPTIMISTIC UPDATE: Ak sme na lokáli, narveme Mock natvrdo do Mriežky
      // if (isMockObject) {
      //   console.warn("🟢 [OPTIMISTIC_UI]: Vkladám Mock príspevok do RAM.");
      //   setAllRawPosts((prev) => [result, ...prev]);
      // }

      markAsRead(docId);
      if (SoundFX?.success) SoundFX.success();
      return docId;
    } catch (e) {
      if (SoundFX?.error) SoundFX.error();
      throw e;
    }
  };

  return {
    posts: filteredRoots,
    replies,
    allRawPosts: processedAllPosts,
    readPosts,
    markAsRead,
    markAllAsRead,
    loading,
    filters,
    setFilters,
    deployPost,
    handleAction,
    pinnedCount: pinnedRootIds.size,
    updatePost: async (id, payload) => {
      try {
        // 🛡️ EXODUS POISTKA AJ PRE UPDATE
        const safePayload = {
          ...payload,
          ...(payload.category && { cluster: payload.category }),
        };
        await NexusDB.updatePost(id, safePayload);
        if (SoundFX?.success) SoundFX.success();
      } catch (e) {
        console.error("EXODUS UPDATE ERROR:", e);
      }
    },
  };
};
