import React, { useState } from "react";
import {
  PlayCircle,
  Settings2,
  Save,
  MousePointerClick,
  Eye,
  Clock,
} from "lucide-react";

export default function GlobalUplinkVideo({ userTier = "ARCHITECT" }) {
  // 🛑 MOCK PRE CANVAS / AUTH: Tu napojíš reálny TIER užívateľa z tvojho Contextu
  const isArchitect = userTier === "ARCHITECT" || userTier === "MASTER";

  const [activeVideo, setActiveVideo] = useState("OS");
  const [isEditing, setIsEditing] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPinPromptOpen, setIsPinPromptOpen] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const MASTER_PIN = "7812187460";

  // Dynamický State pre Odkazy
  const [videos, setVideos] = useState({
    OS: "EOHcOTh5d7E", // PROJEKT NEXUS | OS Genesis
    NA: "I2hKsPvqL2M", // NEXUS AGENCY SHOWCASE
  });

  // Dynamický State pre Metriky
  const [metrics, setMetrics] = useState({
    clicks: 10032,
    attention: 84,
    timeH: 987,
    timeM: 32,
  });

  const handleTrackClick = (stream) => {
    setActiveVideo(stream);
    // Zvýšenie metriky "Klik" pri každom prepnutí
    setMetrics((prev) => ({ ...prev, clicks: prev.clicks + 1 }));
  };

  const handleSave = () => {
    setIsEditing(false);

    // TODO: Sem neskôr vložíš volanie tvojho NexusDB_Core na zápis do Supabase/Firebase
  };

  return (
    <div className="w-full bg-black/60 border border-white/10 rounded-[1.5rem] p-1.5 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 z-20"></div>

      {/* ⚡ PREPÍNAČ VIDEÍ */}
      <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
        <button
          onClick={() => handleTrackClick("OS")}
          className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md flex items-center gap-2 backdrop-blur-md transition-all duration-300 ${
            activeVideo === "OS"
              ? "bg-black/90 border border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              : "bg-black/60 border border-white/10 text-zinc-500 hover:text-white hover:border-white/30"
          }`}
        >
          <PlayCircle
            size={12}
            className={activeVideo === "OS" ? "animate-pulse" : ""}
          />{" "}
          OS GENESIS
        </button>
        <button
          onClick={() => handleTrackClick("NA")}
          className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md flex items-center gap-2 backdrop-blur-md transition-all duration-300 ${
            activeVideo === "NA"
              ? "bg-black/90 border border-[#00FFFF] text-[#00FFFF] shadow-[0_0_15px_rgba(0,255,255,0.4)]"
              : "bg-black/60 border border-white/10 text-zinc-500 hover:text-white hover:border-white/30"
          }`}
        >
          <PlayCircle
            size={12}
            className={activeVideo === "NA" ? "animate-pulse" : ""}
          />{" "}
          AGENCY
        </button>
      </div>

      {/* 👑 TLAČIDLO ARCHITEKTA (Edit Mode) */}
      {/* 👑 TLAČIDLO ARCHITEKTA (Root Access s PIN ochranou) */}
      <button
        onClick={() => {
          if (isEditing) handleSave();
          else if (!isUnlocked) setIsPinPromptOpen(true);
          else setIsEditing(true);
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

      {/* 🎬 PREHRÁVAČ */}
      <div
        className="relative w-full rounded-[1.25rem] overflow-hidden bg-black mt-10 md:mt-0"
        style={{ paddingTop: "56.25%" }}
      >
        {isPinPromptOpen ? (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#050a14]/95 backdrop-blur-md p-6 border-2 border-purple-500/30 z-40">
            <h3 className="text-zinc-300 font-black mb-4 uppercase tracking-widest text-[10px] flex items-center gap-2">
              <Settings2
                size={14}
                className={pinError ? "text-red-500" : "text-purple-500"}
              />
              {pinError ? "ACCESS DENIED" : "VYŽADUJE SA ROOT ACCESS KĽÚČ"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (pinInput === MASTER_PIN) {
                  setIsUnlocked(true);
                  setIsEditing(true);
                  setIsPinPromptOpen(false);
                  setPinInput("");
                } else {
                  setPinError(true);

                  setTimeout(() => setPinError(false), 2000);
                }
              }}
              className="w-full max-w-[220px] flex flex-col gap-3"
            >
              <input
                type="password"
                autoFocus
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="ZADAJ KÓD..."
                className={`w-full bg-black border ${pinError ? "border-red-500 text-red-500" : "border-purple-500/50 text-purple-400"} text-center p-2 rounded text-lg font-black tracking-widest outline-none shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-colors`}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsPinPromptOpen(false);
                    setPinInput("");
                  }}
                  className="w-1/2 bg-zinc-900 border border-zinc-700 text-zinc-400 p-2 rounded text-[10px] font-bold uppercase hover:bg-zinc-800 transition-colors"
                >
                  Zrušiť
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-purple-900/40 border border-purple-500 text-purple-400 p-2 rounded text-[10px] font-bold uppercase hover:bg-purple-800/60 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                >
                  Uplink
                </button>
              </div>
            </form>
          </div>
        ) : !isEditing ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videos[activeVideo]}`}
            title="Nexus Protocol Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#050a14] p-6 border-2 border-red-500/30 overflow-y-auto">
            <h3 className="text-red-500 font-bold mb-4 uppercase tracking-widest text-xs">
              🔧 Root Access: Editácia Uzla
            </h3>

            <div className="w-full max-w-md space-y-3">
              <label className="text-zinc-400 text-xs">
                YT ID (OS GENESIS):
              </label>
              <input
                type="text"
                value={videos.OS}
                onChange={(e) => setVideos({ ...videos, OS: e.target.value })}
                className="w-full bg-black border border-zinc-700 text-white p-2 rounded text-sm focus:border-red-500 outline-none"
              />

              <label className="text-zinc-400 text-xs">YT ID (AGENCY):</label>
              <input
                type="text"
                value={videos.NA}
                onChange={(e) => setVideos({ ...videos, NA: e.target.value })}
                className="w-full bg-black border border-zinc-700 text-white p-2 rounded text-sm focus:border-red-500 outline-none"
              />

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-zinc-400 text-xs">
                    Kliknutia (x):
                  </label>
                  <input
                    type="number"
                    value={metrics.clicks}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        clicks: parseInt(e.target.value),
                      })
                    }
                    className="w-full bg-black border border-zinc-700 text-white p-2 rounded text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs">
                    Pozornosť (%):
                  </label>
                  <input
                    type="number"
                    value={metrics.attention}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        attention: parseInt(e.target.value),
                      })
                    }
                    className="w-full bg-black border border-zinc-700 text-white p-2 rounded text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs">
                    Time (Hodiny):
                  </label>
                  <input
                    type="number"
                    value={metrics.timeH}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        timeH: parseInt(e.target.value),
                      })
                    }
                    className="w-full bg-black border border-zinc-700 text-white p-2 rounded text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs">
                    Time (Minúty):
                  </label>
                  <input
                    type="number"
                    value={metrics.timeM}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        timeM: parseInt(e.target.value),
                      })
                    }
                    className="w-full bg-black border border-zinc-700 text-white p-2 rounded text-sm outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 📊 METRIKY (Taktický panel pod videom) */}
      <div className="w-full grid grid-cols-3 gap-2 mt-2 px-1">
        <div className="bg-black/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center group hover:border-[#00FFFF]/30 transition-colors">
          <MousePointerClick
            size={14}
            className="text-[#00FFFF] mb-1 group-hover:animate-pulse"
          />
          <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">
            Klik
          </span>
          <span className="text-xs md:text-sm font-bold text-white">
            {metrics.clicks}x
          </span>
        </div>

        <div className="bg-black/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center group hover:border-[#39FF14]/30 transition-colors">
          <Eye
            size={14}
            className="text-[#39FF14] mb-1 group-hover:animate-pulse"
          />
          <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">
            Pozornosť
          </span>
          <span className="text-xs md:text-sm font-bold text-white">
            {metrics.attention}%
          </span>
        </div>

        <div className="bg-black/80 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center group hover:border-purple-500/30 transition-colors">
          <Clock
            size={14}
            className="text-purple-400 mb-1 group-hover:animate-pulse"
          />
          <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">
            Time
          </span>
          <span className="text-xs md:text-sm font-bold text-white">
            {metrics.timeH}h {metrics.timeM.toString().padStart(3, "0")}m
          </span>
        </div>
      </div>
    </div>
  );
}
