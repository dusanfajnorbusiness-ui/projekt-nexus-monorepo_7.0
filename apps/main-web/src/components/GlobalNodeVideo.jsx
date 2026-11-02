import React, { useState } from "react";
import {
  Presentation,
  PlayCircle,
  Settings2,
  Save,
  MousePointerClick,
  Eye,
  Clock,
  Lock,
  ShieldAlert,
} from "lucide-react";
// Zabezpeč, aby táto cesta k videoRegistry bola správna pre tvoj projekt:
import { videoRegistry } from "@main-web/data/videoRegistry";

const GlobalNodeVideo = ({ themeColor = "#FF003C", nodeId }) => {
  const [activeFormat, setActiveFormat] = useState("explainer");

  // NotebookLM 2 Formáty pre Video s FULL textami
  const formats = [
    {
      id: "explainer",
      label: "Vysvetľujúci",
      icon: Presentation,
      desc: "Štrukturovaný komplexný prehľad so zhrnutím jednotlivých informácií v našich zdrojoch",
    },
    {
      id: "overview",
      label: "Video-Prehľad",
      icon: PlayCircle,
      desc: "Stručný prehľad, ktorý nám pomôže rýchlo pochopiť hlavné myšlienky z našich zdrojov",
    },
  ];

  // 👑 AUTH MATRIX IDENTITY (Striktne iba ARCHITECT)
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("nexus_active_identity") || "{}")
      : {};
  const currentTier = currentUser?.tier || "QUEST";
  const isArchitect = currentTier.toUpperCase() === "ARCHITECT";

  // ⚡ PERZISTENCIA PAMÄTE (Prežije F5 Refresh)
  const storageKey = `nexus_media_override_${nodeId}`;
  const [liveMediaOverride, setLiveMediaOverride] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const [isEditing, setIsEditing] = useState(false);

  // ⚡ Zlúčený State pre Editor (URLs + Metriky)
  const [localData, setLocalData] = useState({
    urls: { explainer: "", overview: "" },
    metrics: { clicks: 15052, attention: 64, timeH: 717, timeM: 45 },
  });

  // 🔍 DATA MINING
  let activeMedia = null;
  if (nodeId && videoRegistry) {
    for (const dim of videoRegistry) {
      for (const sec of dim.sections) {
        const found = sec.videos.find((v) => v.nodeId === nodeId);
        if (found) {
          activeMedia = found;
          break;
        }
      }
      if (activeMedia) break;
    }
  }

  // ⚡ ZDROJ PRAVDY
  const currentMedia = liveMediaOverride || activeMedia;

  const handleEdit = () => {
    setLocalData({
      urls: {
        explainer: currentMedia?.urls?.explainer || currentMedia?.id || "",
        overview: currentMedia?.urls?.overview || "",
      },
      metrics: currentMedia?.metrics || {
        clicks: 15052,
        attention: 64,
        timeH: 717,
        timeM: 45,
      },
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    const payload = {
      ...currentMedia,
      urls: localData.urls,
      metrics: localData.metrics,
      id: localData.urls.explainer || localData.urls.overview, // Záchytný fallback
    };
    setLiveMediaOverride(payload);
    // ⚡ TVRDÝ ZÁPIS DO PREHLIADAČA
    localStorage.setItem(storageKey, JSON.stringify(payload));
    setIsEditing(false);
  };

  // 🛡️ GHOST-MODE PASC
  const hasRealVideo =
    currentMedia &&
    (currentMedia.urls?.explainer ||
      currentMedia.urls?.overview ||
      currentMedia.id);

  if (!isArchitect && !hasRealVideo) return null;

  if (isArchitect && !hasRealVideo && !isEditing) {
    return (
      <div className="w-full flex justify-center z-50 my-4">
        <button
          onClick={handleEdit}
          className="opacity-0 hover:opacity-40 transition-opacity cursor-crosshair border border-dashed border-zinc-500 bg-white/5 flex items-center justify-center rounded-lg"
          style={{ width: "6cm", height: "2cm" }}
          title="Awaiting Payload // Editovať Modul"
        >
          <Lock size={20} className="text-zinc-500" />
        </button>
      </div>
    );
  }

  const activeVideoUrl = currentMedia?.urls?.[activeFormat] || currentMedia?.id;
  const metrics = currentMedia?.metrics || {
    clicks: 15052,
    attention: 64,
    timeH: 717,
    timeM: 45,
  };
  const activeData = formats.find((f) => f.id === activeFormat);

  return (
    <div
      className="w-full bg-black/60 border border-white/10 rounded-[1.5rem] p-1.5 shadow-xl relative overflow-hidden group my-8"
      style={{ boxShadow: `0 0 40px ${themeColor}15` }}
    >
      {/* Gradient Top Line */}
      <div
        className="absolute top-0 left-0 w-full h-1 opacity-50 z-20"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${themeColor}, transparent)`,
        }}
      ></div>

      {/* ⚡ PREPÍNAČ VIDEÍ */}
      {hasRealVideo && !isEditing && (
        <div className="absolute top-3 left-3 z-30 flex items-center gap-2 flex-wrap max-w-[70%]">
          {formats.map((format) => {
            const Icon = format.icon;
            const isActive = activeFormat === format.id;
            return (
              <button
                key={format.id}
                onClick={() => setActiveFormat(format.id)}
                className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md flex items-center gap-2 backdrop-blur-md transition-all duration-300 ${
                  isActive
                    ? "bg-black/90 border text-white shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                    : "bg-black/60 border border-white/10 text-zinc-500 hover:text-white hover:border-white/30"
                }`}
                style={
                  isActive
                    ? {
                        borderColor: themeColor,
                        color: themeColor,
                        boxShadow: `0 0 15px ${themeColor}40`,
                      }
                    : {}
                }
              >
                <Icon size={12} className={isActive ? "animate-pulse" : ""} />{" "}
                {format.label}
              </button>
            );
          })}
        </div>
      )}

      {/* 👑 TLAČIDLO ARCHITEKTA */}
      {isArchitect && (
        <button
          onClick={() => {
            if (isEditing) handleSave();
            else handleEdit();
          }}
          className={`absolute top-3 right-3 z-30 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md flex items-center gap-2 backdrop-blur-md transition-all duration-300 ${
            isEditing
              ? "bg-red-900/80 border border-red-500 text-red-400 shadow-[0_0_15px_rgba(255,0,60,0.4)]"
              : "bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
          }`}
        >
          {isEditing ? (
            <>
              <Save size={12} /> ULOŽIŤ DÁTA
            </>
          ) : (
            <>
              <Settings2 size={12} /> ARCHITECT EDIT
            </>
          )}
        </button>
      )}

      {/* 🎬 PREHRÁVAČ & EDITOR OVERLAY */}
      {/* ⚡ ZMENŠENÉ O ŠTVRŤINU (md:w-3/4 mx-auto) */}
      <div className="relative mx-auto rounded-[1.25rem] overflow-hidden bg-black mt-12 md:mt-0 aspect-video flex items-center justify-center w-full md:w-3/4 transition-all duration-500">
        {isEditing ? (
          // ⚡ EDITOR PRE VIDEO (S Metrikami)
          <div
            className="absolute inset-0 flex flex-col justify-center items-center bg-[#050a14]/95 backdrop-blur-md p-6 border-2 z-40 overflow-y-auto"
            style={{ borderColor: `${themeColor}40` }}
          >
            <h3
              className="font-black mb-4 uppercase tracking-widest text-[10px] flex items-center gap-2"
              style={{ color: themeColor }}
            >
              <Settings2 size={14} /> Root Access: URL Injekcia
            </h3>

            <div className="w-full max-w-[280px] flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-zinc-500 text-[8px] uppercase tracking-widest">
                  Vysvetľujúce Video (YT ID):
                </label>
                <input
                  type="text"
                  value={localData.urls.explainer}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      urls: { ...localData.urls, explainer: e.target.value },
                    })
                  }
                  className="w-full bg-black border border-zinc-700 text-white p-1.5 rounded text-xs outline-none transition-colors focus:border-white/50"
                  placeholder="napr. EOHcOTh5d7E"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1">
                <label className="text-zinc-500 text-[8px] uppercase tracking-widest">
                  Video Prehľad (YT ID):
                </label>
                <input
                  type="text"
                  value={localData.urls.overview}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      urls: { ...localData.urls, overview: e.target.value },
                    })
                  }
                  className="w-full bg-black border border-zinc-700 text-white p-1.5 rounded text-xs outline-none transition-colors focus:border-white/50"
                  placeholder="napr. I2hKsPvqL2M"
                />
              </div>
            </div>

            {/* Injekcia Metrík */}
            <div className="w-full max-w-[280px] grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <label className="text-zinc-500 text-[8px] uppercase tracking-widest">
                  Klik
                </label>
                <input
                  type="number"
                  value={localData.metrics.clicks}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      metrics: {
                        ...localData.metrics,
                        clicks: parseInt(e.target.value) || 0,
                      },
                    })
                  }
                  className="w-full bg-black border border-zinc-700 text-white p-1 rounded text-xs outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-zinc-500 text-[8px] uppercase tracking-widest">
                  Pozor(%)
                </label>
                <input
                  type="number"
                  value={localData.metrics.attention}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      metrics: {
                        ...localData.metrics,
                        attention: parseInt(e.target.value) || 0,
                      },
                    })
                  }
                  className="w-full bg-black border border-zinc-700 text-white p-1 rounded text-xs outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-zinc-500 text-[8px] uppercase tracking-widest">
                  Hod
                </label>
                <input
                  type="number"
                  value={localData.metrics.timeH}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      metrics: {
                        ...localData.metrics,
                        timeH: parseInt(e.target.value) || 0,
                      },
                    })
                  }
                  className="w-full bg-black border border-zinc-700 text-white p-1 rounded text-xs outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-zinc-500 text-[8px] uppercase tracking-widest">
                  Min
                </label>
                <input
                  type="number"
                  value={localData.metrics.timeM}
                  onChange={(e) =>
                    setLocalData({
                      ...localData,
                      metrics: {
                        ...localData.metrics,
                        timeM: parseInt(e.target.value) || 0,
                      },
                    })
                  }
                  className="w-full bg-black border border-zinc-700 text-white p-1 rounded text-xs outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="mt-5 w-full max-w-[280px] bg-zinc-900 border border-zinc-700 text-white py-2 rounded text-[10px] font-bold uppercase hover:bg-zinc-800 transition-colors shadow-lg"
              style={{
                borderColor: `${themeColor}50`,
                color: themeColor,
                backgroundColor: `${themeColor}10`,
              }}
            >
              Nasadiť Kód
            </button>
          </div>
        ) : (
          <>
            {/* CRT Scanlines Filter */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />

            {activeVideoUrl ? (
              <iframe
                className="absolute inset-0 w-full h-full z-0"
                src={`https://www.youtube.com/embed/${activeVideoUrl}?rel=0&modestbranding=1`}
                title="Nexus Video Engine"
                frameBorder="0"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-sm z-0">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-500"
                  style={{ boxShadow: `0 0 20px ${themeColor}40` }}
                >
                  <PlayCircle
                    size={24}
                    style={{ color: themeColor }}
                    className="ml-1"
                  />
                </div>
                <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                  Video Engine Offline // Čakám na Payload
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {/* 📊 METRIKY A POPIS FORMÁTU */}
      {!isEditing && hasRealVideo && (
        <div className="w-full mt-4 flex flex-col gap-2">
          {/* SÉMANTICKÝ POPIS FORMÁTU (Full Text) */}
          <div className="flex items-start gap-3 p-3 border border-white/5 rounded-xl bg-black/40 text-xs text-zinc-300 md:w-3/4 mx-auto">
            <ShieldAlert
              size={14}
              className="mt-0.5 shrink-0"
              style={{ color: themeColor }}
            />
            <span className="leading-relaxed">
              <strong className="text-white uppercase tracking-wider">
                {activeData?.label}:{" "}
              </strong>
              {activeData?.desc}
            </span>
          </div>

          {/* TAKTICKÝ PANEL METRÍK */}
          <div className="grid grid-cols-3 gap-2 px-1 md:w-3/4 mx-auto">
            <div className="bg-black/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center group transition-colors hover:border-white/20">
              <MousePointerClick
                size={14}
                className="mb-1 group-hover:animate-pulse"
                style={{ color: themeColor }}
              />
              <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">
                Klik
              </span>
              <span className="text-xs md:text-sm font-bold text-white">
                {metrics.clicks}x
              </span>
            </div>
            <div className="bg-black/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center group transition-colors hover:border-white/20">
              <Eye
                size={14}
                className="mb-1 group-hover:animate-pulse"
                style={{ color: themeColor }}
              />
              <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">
                Pozornosť
              </span>
              <span className="text-xs md:text-sm font-bold text-white">
                {metrics.attention}%
              </span>
            </div>
            <div className="bg-black/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center group transition-colors hover:border-white/20">
              <Clock
                size={14}
                className="mb-1 group-hover:animate-pulse"
                style={{ color: themeColor }}
              />
              <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">
                Time
              </span>
              <span className="text-xs md:text-sm font-bold text-white">
                {metrics.timeH}h {metrics.timeM.toString().padStart(2, "0")}m
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { GlobalNodeVideo };
export default GlobalNodeVideo;
