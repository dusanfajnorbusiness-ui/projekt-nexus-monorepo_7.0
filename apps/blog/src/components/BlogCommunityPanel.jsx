import React, { useMemo } from "react";
import { Activity, Layers, Hash, Globe, Box, Cpu } from "lucide-react";
import { DIMENSION_DESCRIPTIONS } from "@shared/data/DimensionDescriptions";
import { SoundFX } from "@shared/utils/SoundEngine";

export const BlogCommunityPanel = ({ engine, setActiveView }) => {
  const activeColor = "#E91E63";

  // Získanie aktuálne aktívnej kategórie z jadra
  const activeCategory = engine?.filters?.category || "ALL";

  const topTopics = useMemo(() => {
    if (!engine?.allRawPosts) return [];
    const counts = {};

    engine.allRawPosts.forEach((p) => {
      if (!p.parentId) {
        // ⚡ FIX: Extrakcia kategórie s ochranou voči case a formátu
        let cat = p.category
          ? String(p.category).toLowerCase().trim()
          : "uncategorized";
        // Váha: +1 za samotný post, +1 za každú odpoveď
        counts[cat] = (counts[cat] || 0) + 1 + (p.totalReplies || 0);
      }
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4); // Top 4 najžeravejšie témy
  }, [engine?.allRawPosts]);

  const groupedCategories = useMemo(() => {
    const groups = { core: [], sys: [], topic: [] };
    if (!DIMENSION_DESCRIPTIONS) return groups;

    Object.entries(DIMENSION_DESCRIPTIONS).forEach(([key, data]) => {
      if (data && data.group && groups[data.group]) {
        groups[data.group].push({
          id: key,
          name: data.name,
          color: data.color,
        });
      }
    });
    return groups;
  }, []);

  const handleCategorySelect = (catId) => {
    if (SoundFX?.click) SoundFX.click();
    if (engine?.setFilters) {
      engine.setFilters((p) => ({ ...p, category: catId }));
    }
    // Ak sme na mobile, po výbere zavrieme bočný panel a ukážeme feed
    if (setActiveView) setActiveView("feed");
  };

  return (
    <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
      {/* 📊 WIDGET: TRENDING TOPICS */}
      <div
        id="nexus-blog-trends" // ⚡ TOTO ID TU MUSÍ BYŤ
        className="bg-[#050505] border border-[#222] rounded-[2rem] overflow-hidden shadow-2xl relative group"
      >
        <div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, transparent, ${activeColor}, transparent)`,
          }}
        />
        <div className="p-5 border-b border-[#222] bg-[#0a0a0a] flex items-center gap-3">
          <Activity
            size={16}
            style={{ color: activeColor }}
            className="animate-pulse"
          />
          <h2 className="text-[10px] font-black uppercase text-white tracking-[0.3em]">
            Aktuálne Trendy
          </h2>
        </div>
        <div className="p-4 flex flex-col gap-2">
          {topTopics.length > 0 ? (
            topTopics.map(([cat, score], idx) => {
              // ⚡ FIX: Imúnne hľadanie topTém v konfigu
              const searchTarget = cat.toLowerCase();
              let catMeta = null;
              if (typeof DIMENSION_DESCRIPTIONS === "object") {
                const matchKey = Object.keys(DIMENSION_DESCRIPTIONS).find(
                  (k) =>
                    k.toLowerCase() === searchTarget ||
                    k.toLowerCase() ===
                      searchTarget.replace("stk", "").replace("dim", ""),
                );
                if (matchKey) catMeta = DIMENSION_DESCRIPTIONS[matchKey];
              }

              const catName = catMeta ? catMeta.name : cat;
              const catColor = catMeta ? catMeta.color : "#555";

              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#111] border border-[#222] hover:bg-[#1a1a1a] transition-all group/item text-left"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-[10px] font-black text-[#444] group-hover/item:text-white transition-colors w-4">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-[#aaa] group-hover/item:text-white transition-colors truncate">
                      {catName}
                    </span>
                  </div>
                  <div
                    className="text-[9px] font-black px-2 py-1 rounded-md"
                    style={{
                      backgroundColor: `${catColor}20`,
                      color: catColor,
                    }}
                  >
                    {score} OC
                  </div>
                </button>
              );
            })
          ) : (
            <div className="text-center py-6 text-[10px] text-[#555] font-black uppercase tracking-widest">
              Analyzujem dáta...
            </div>
          )}
        </div>
      </div>

      {/* 📊 WIDGET: KATALÓG KATEGÓRIÍ (alebo Klastre) */}
      <div
        id="nexus-blog-categories" // ⚡ PRIDAJ TOTO NOVÉ ID
        className="bg-[#050505] border border-[#222] rounded-[2rem] overflow-hidden shadow-2xl relative group"
      >
        <div className="p-5 border-b border-[#222] bg-[#0a0a0a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers size={16} className="text-[#00f3ff]" />
            <h2 className="text-[10px] font-black uppercase text-white tracking-[0.3em]">
              Katalóg Kategórií
            </h2>
          </div>
        </div>

        <div className="p-3 flex flex-col gap-1.5 h-[50vh] overflow-y-auto custom-scrollbar relative z-10">
          {/* TLAČIDLO: VŠETKY VLÁKNA */}
          <button
            onClick={() => handleCategorySelect("ALL")}
            className={`text-left px-4 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3 rounded-xl group border mb-2`}
            style={{
              backgroundColor:
                activeCategory === "ALL" ? `#ffffff10` : "transparent",
              borderColor:
                activeCategory === "ALL" ? `#ffffff30` : "transparent",
              borderLeft:
                activeCategory === "ALL"
                  ? `4px solid #ffffff`
                  : "4px solid transparent",
              color: activeCategory === "ALL" ? "#fff" : "#888",
            }}
          >
            <Globe
              size={14}
              style={{ color: activeCategory === "ALL" ? "#fff" : "#444" }}
              className="group-hover:scale-110 transition-transform shrink-0"
            />
            <span className="group-hover:text-white transition-colors truncate">
              Všetky Signály
            </span>
          </button>

          {/* --- KOGNITÍVNE JADRÁ --- */}
          {groupedCategories.core.length > 0 && (
            <>
              <div className="text-[8px] font-black uppercase text-white/30 tracking-[0.3em] pl-2 mt-2 mb-1 flex items-center gap-2">
                <Cpu size={10} /> Kognitívne Jadrá
              </div>
              {groupedCategories.core.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`text-left px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 rounded-lg group border`}
                    style={{
                      backgroundColor: isActive
                        ? `${cat.color}15`
                        : "transparent",
                      borderColor: isActive ? `${cat.color}30` : "transparent",
                      borderLeft: isActive
                        ? `3px solid ${cat.color}`
                        : "3px solid transparent",
                      color: isActive ? "#fff" : "#888",
                    }}
                  >
                    <Hash
                      size={12}
                      style={{ color: isActive ? cat.color : "#444" }}
                      className="group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="group-hover:text-white transition-colors truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </>
          )}

          {/* --- SYSTÉMOVÉ UZLY --- */}
          {groupedCategories.sys.length > 0 && (
            <>
              <div className="text-[8px] font-black uppercase text-white/30 tracking-[0.3em] pl-2 mt-4 mb-1 flex items-center gap-2">
                <Box size={10} /> Systémové Uzly
              </div>
              {groupedCategories.sys.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`text-left px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 rounded-lg group border`}
                    style={{
                      backgroundColor: isActive
                        ? `${cat.color}15`
                        : "transparent",
                      borderColor: isActive ? `${cat.color}30` : "transparent",
                      borderLeft: isActive
                        ? `3px solid ${cat.color}`
                        : "3px solid transparent",
                      color: isActive ? "#fff" : "#888",
                    }}
                  >
                    <Hash
                      size={12}
                      style={{ color: isActive ? cat.color : "#444" }}
                      className="group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="group-hover:text-white transition-colors truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </>
          )}

          {/* --- SÉMANTICKÉ TÉMY --- */}
          {groupedCategories.topic.length > 0 && (
            <>
              <div className="text-[8px] font-black uppercase text-white/30 tracking-[0.3em] pl-2 mt-4 mb-1 flex items-center gap-2">
                <Layers size={10} /> Sémantické Témy
              </div>
              {groupedCategories.topic.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`text-left px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition-all flex items-center gap-3 rounded-lg group border`}
                    style={{
                      backgroundColor: isActive
                        ? `${cat.color}15`
                        : "transparent",
                      borderColor: isActive ? `${cat.color}30` : "transparent",
                      borderLeft: isActive
                        ? `3px solid ${cat.color}`
                        : "3px solid transparent",
                      color: isActive ? "#fff" : "#888",
                    }}
                  >
                    <Hash
                      size={12}
                      style={{ color: isActive ? cat.color : "#444" }}
                      className="group-hover:scale-110 transition-transform shrink-0"
                    />
                    <span className="group-hover:text-white transition-colors truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </>
          )}
        </div>
      </div>
      <style>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(233, 30, 99, 0.3); border-radius: 10px; }`}</style>
    </aside>
  );
};

export default BlogCommunityPanel;
