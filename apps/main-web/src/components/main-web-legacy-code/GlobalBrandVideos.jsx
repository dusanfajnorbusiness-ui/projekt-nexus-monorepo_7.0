import React, { useState, useEffect } from "react";
import {
  Play,
  Activity,
  Clock,
  MousePointerClick,
  Edit3,
  Save,
  Globe,
  Eye,
  ShieldAlert,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY
// ============================================================================
import { NexusDB } from "@shared/services/NexusDB_Core.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import { supabase } from "@shared/services/NexusDB_Supabase.js";

export const GlobalBrandVideos = ({ moduleId = "nexus_main_brand" }) => {
  // 👑 AUTONÓMNA DETEKCIA ARCHITEKTA CEZ LOCAL STORAGE
  const getIsArchitect = () => {
    if (typeof window !== "undefined") {
      try {
        const identity = JSON.parse(
          localStorage.getItem("nexus_active_identity") || "{}",
        );
        // 🛑 FIX: Striktné odrezanie MASTERA a iných entít. Iba ROOT ARCHITECT má prístup.

        return identity.tier === "ARCHITECT";
      } catch (e) {
        return false;
      }
    }
    return false;
  };

  const isArchitect = getIsArchitect();

  // Lokálne stavy pre videá
  const [activeLang, setActiveLang] = useState("SK");
  const [videoUrls, setVideoUrls] = useState({
    SK: "https://www.youtube.com/embed/occO14OTZ0w", // Default SK
    EN: "https://www.youtube.com/embed/eTuw6DdfMMI", // Default EN
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editUrls, setEditUrls] = useState({ SK: "", EN: "" });
  const [isSaving, setIsSaving] = useState(false);

  // 📊 DYNAMICKÉ METRIKY (Živé dáta z Matrixu)
  const [metrics, setMetrics] = useState({
    clicks: 0,
    attention: 0,
    time: "0h 0m",
  });
  const [editMetrics, setEditMetrics] = useState({
    clicks: 0,
    attention: 0,
    time: "0h 0m",
  });

  // 📡 NAČÍTANIE DÁT ZO SUPABASE PRI ŠTARTE KOMPONENTU
  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const { data, error } = await supabase
          .from("brand_videos")
          .select("*")
          .eq("module_id", moduleId)
          .single();

        if (data && !error) {
          setVideoUrls({ SK: data.url_sk || "", EN: data.url_en || "" });
          setMetrics({
            clicks: data.clicks || 0,
            attention: data.attention || 0,
            time: data.time_watched || "0h 0m",
          });
        }
      } catch (err) {}
    };
    fetchVideoData();
  }, [moduleId]);

  // ==========================================
  // EXEKUČNÉ FUNKCIE
  // ==========================================
  const handleLangSwitch = (lang) => {
    if (SoundFX && SoundFX.click) SoundFX.click();
    setActiveLang(lang);
  };

  const handleEditToggle = () => {
    if (SoundFX && SoundFX.click) SoundFX.click();
    setEditUrls(videoUrls);
    setEditMetrics(metrics);
    setIsEditing(!isEditing);
  };

  // 💾 ULOŽENIE DO SUPABASE (Zápis Architekta)
  const handleSave = async () => {
    if (SoundFX && SoundFX.click) SoundFX.click();
    setIsSaving(true);

    try {
      const { error } = await supabase.from("brand_videos").upsert(
        {
          module_id: moduleId,
          url_sk: editUrls.SK,
          url_en: editUrls.EN,
          clicks: editMetrics.clicks,
          attention: editMetrics.attention,
          time_watched: editMetrics.time,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "module_id" },
      );

      if (!error) {
        setVideoUrls(editUrls);
        setMetrics(editMetrics);
        setIsEditing(false);
        if (SoundFX && SoundFX.success) SoundFX.success();

        //
      } else {
        console.error("[SUPABASE ERROR]:", error);
        if (SoundFX && SoundFX.error) SoundFX.error();
      }
    } catch (err) {
      if (SoundFX && SoundFX.error) SoundFX.error();
    }
    setIsSaving(false);
  };

  // 🛡️ AUTO-PARSER PRE YOUTUBE ODKAZY (Prevencia X-Frame-Options Erroru)
  const parseYouTubeUrl = (url) => {
    if (!url) return "";
    if (url.includes("/embed/")) return url; // Ak už je vložený správne, ignoruj

    let videoId = "";
    try {
      if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?");
      } else if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1]?.split("&");
      } else if (url.includes("/shorts/")) {
        videoId = url.split("/shorts/")[1]?.split("?");
      }
    } catch (e) {
      console.error("[SYS_LOG]: Chyba pri parsovaní YouTube URL", e);
    }

    // Vrátime čistý embed kód aj s vyčistením zbytočných videí na konci (rel=0)
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : url;
  };

  // ⚡ Získanie aktuálneho videa pre iframe s auto-korekciou
  const activeVideoUrl = parseYouTubeUrl(videoUrls[activeLang]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 font-mono animate-in fade-in duration-500">
      {/* 🎛️ HLAVIČKA A PREPÍNAČ JAZYKOV */}
      <div className="flex items-center justify-between bg-[#050a0e] border border-white/10 p-2 rounded-xl">
        <div className="flex items-center gap-2 px-2">
          <Globe size={16} className="text-[#FF003C]" />
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
            Video Sémantika
          </span>
        </div>
        <div className="flex bg-black/50 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => handleLangSwitch("SK")}
            onMouseEnter={() => SoundFX && SoundFX.hover && SoundFX.hover()}
            className={`px-4 py-1.5 text-xs font-black tracking-widest rounded-md transition-all duration-300 ${
              activeLang === "SK"
                ? "bg-[#FF003C] text-white shadow-[0_0_15px_rgba(255,0,60,0.4)]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            SK
          </button>
          <button
            onClick={() => handleLangSwitch("EN")}
            onMouseEnter={() => SoundFX && SoundFX.hover && SoundFX.hover()}
            className={`px-4 py-1.5 text-xs font-black tracking-widest rounded-md transition-all duration-300 ${
              activeLang === "EN"
                ? "bg-[#FF003C] text-white shadow-[0_0_15px_rgba(255,0,60,0.4)]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* 🎬 VIDEO PREHRÁVAČ */}
      <div className="relative w-full aspect-video bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl group">
        {/* Scanlines efekt */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 z-10"></div>

        {activeVideoUrl ? (
          <iframe
            src={activeVideoUrl}
            title={`NEXUS VIDEO ${activeLang}`}
            className="w-full h-full relative z-0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-600 uppercase tracking-widest text-xs">
            [ ERROR: CHÝBAJÚCE DÁTA - ZADAJ URL ]
          </div>
        )}
      </div>

      {/* 📊 ANALYTICKÝ PANEL (Metriky) */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#050a0e] border border-white/5 p-3 rounded-xl text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400">
        <div className="flex gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-start">
          <div
            className="flex items-center gap-2 group relative cursor-help"
            title="Počet kliknutí na tento video uzol v Sieti"
          >
            <MousePointerClick
              size={14}
              className="text-[#39FF14] group-hover:text-white transition-colors"
            />
            <span>
              Klik: <strong className="text-white">{metrics.clicks}x</strong>
            </span>
          </div>

          <div
            className="flex items-center gap-2 group relative cursor-help"
            title="Priemerné udržanie pozornosti plazieho mozgu (Retention)"
          >
            <Activity
              size={14}
              className="text-[#00FFFF] group-hover:text-white transition-colors"
            />
            <span>
              Pozornosť:{" "}
              <strong className="text-white">{metrics.attention}%</strong>
            </span>
          </div>

          <div
            className="flex items-center gap-2 group relative cursor-help"
            title="Celkový napálený výpočtový čas (Watch Time)"
          >
            <Clock
              size={14}
              className="text-[#FFD700] group-hover:text-white transition-colors"
            />
            <span>
              Time: <strong className="text-white">{metrics.time}</strong>
            </span>
          </div>
        </div>

        {/* 👑 ROOT ACCESS TOGGLE (Iba pre Teba) */}
        {isArchitect && (
          <button
            onClick={handleEditToggle}
            className="flex items-center gap-2 text-[#FF003C] hover:text-white transition-colors border border-[#FF003C]/30 hover:bg-[#FF003C]/20 px-3 py-1.5 rounded-lg"
            title="Architekt: Upraviť parametre uzla"
          >
            <Edit3 size={12} />
            <span className="hidden sm:block">Edit Node</span>
          </button>
        )}
      </div>

      {/* 👑 ROOT ACCESS PANEL: EDITÁCIA URL (Iba pre Teba) */}
      {isArchitect && isEditing && (
        <div className="mt-2 bg-black/80 border border-[#FF003C]/50 p-4 rounded-xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 shadow-[0_0_30px_rgba(255,0,60,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <ShieldAlert size={100} />
          </div>

          <h3 className="text-[#FF003C] font-black uppercase tracking-widest text-xs flex items-center gap-2">
            <ShieldAlert size={14} /> [ ROOT OVERRIDE ]: Injekcia URL odkazov
          </h3>

          <div className="space-y-3 relative z-10">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                URL Odkaz (Slovenská verzia - Embed):
              </label>
              <input
                type="text"
                value={editUrls.SK}
                onChange={(e) =>
                  setEditUrls({ ...editUrls, SK: e.target.value })
                }
                placeholder="https://www.youtube.com/embed/..."
                className="w-full bg-black border border-white/10 rounded-lg p-3 text-xs text-white font-mono focus:border-[#39FF14] outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                URL Odkaz (Anglická verzia - Embed):
              </label>
              <input
                type="text"
                value={editUrls.EN}
                onChange={(e) =>
                  setEditUrls({ ...editUrls, EN: e.target.value })
                }
                placeholder="https://www.youtube.com/embed/..."
                className="w-full bg-black border border-white/10 rounded-lg p-3 text-xs text-white font-mono focus:border-[#39FF14] outline-none transition-colors"
              />
            </div>
          </div>
          {/* 📊 ROOT OVERRIDE: MANUÁLNA INJEKCIA METRÍK */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#FF003C]/20 mt-2 relative z-10">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest flex items-center gap-1">
                <MousePointerClick size={10} /> Kliky
              </label>
              <input
                type="number"
                value={editMetrics.clicks}
                onChange={(e) =>
                  setEditMetrics({
                    ...editMetrics,
                    clicks: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-lg p-2 text-xs text-[#39FF14] font-mono outline-none focus:border-[#39FF14]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest flex items-center gap-1">
                <Activity size={10} /> Pozornosť (%)
              </label>
              <input
                type="number"
                value={editMetrics.attention}
                onChange={(e) =>
                  setEditMetrics({
                    ...editMetrics,
                    attention: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-lg p-2 text-xs text-[#00FFFF] font-mono outline-none focus:border-[#00FFFF]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest flex items-center gap-1">
                <Clock size={10} /> Čas (Text)
              </label>
              <input
                type="text"
                value={editMetrics.time}
                onChange={(e) =>
                  setEditMetrics({ ...editMetrics, time: e.target.value })
                }
                placeholder="napr. 1h 35m"
                className="w-full bg-black border border-white/10 rounded-lg p-2 text-xs text-[#FFD700] font-mono outline-none focus:border-[#FFD700]"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2 border-t border-white/5 relative z-10">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#FF003C] text-white font-black uppercase tracking-widest text-xs rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              <Save size={14} />
              {isSaving ? "Zapisujem..." : "Uložiť do Matrixu"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
