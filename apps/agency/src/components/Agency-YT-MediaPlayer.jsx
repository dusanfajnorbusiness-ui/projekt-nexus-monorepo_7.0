// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (GLOBAL YT MEDIA PLAYER COMPONENT V20.95)
// Súbor: apps/agency/src/components/Agency-YT-MediaPlayer.jsx
// Status: 100% GROUNDED // 6-SWITCH HARDWARE MATRIX // REALTIME TELEMETRY
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import { SoundFX } from "@shared/utils/SoundEngine.js";

// import { trackEvent } from "@shared/utils/Globaltelemetry"; // 🛑 ZAKOMENTOVANÉ: Chýbajúci modul telemetry
const trackEvent = () => {}; // Defenzívny mock pre V20 stav bez chýb
import {
  Award,
  Brain,
  Clock,
  Eye,
  Film,
  MousePointer,
  Play,
  ShieldAlert,
  Swords,
  Video,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AGENCY_BRAND_MANIFESTO_MEDIA,
  getServiceSwitches,
} from "@agency/data/Agency-YT-MediaPlayer";

const SWITCH_ICONS = {
  VP_V: Video,
  VP_K: Film,
  AP_HA: Brain,
  AP_EP: Award,
  AP_SK: ShieldAlert,
  AP_DD: Swords,
};

const formatWatchTime = (seconds = 0) => {
  const totalSecs = Math.floor(Number(seconds) || 0);
  const hrs = Math.floor(totalSecs / 3600);
  const mins = Math.floor((totalSecs % 3600) / 60);
  const secs = totalSecs % 60;

  const result =
    hrs > 0
      ? `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
      : `${mins}:${String(secs).padStart(2, "0")}`;

  return result;
};

console.log(
  "🛡️ [MEDIA PLAYER]: Helper formatWatchTime úspešne inicializovaný.",
);

// 🛡️ DEFENZÍVNY PARSER PRE YOUTUBE EMBED URL (PREVENCIA REKURZIE IFRAME)
const parseYouTubeEmbedUrl = (rawId) => {
  const safeId = String(rawId || "").trim();
  if (!safeId) return "about:blank";

  if (safeId.includes("youtube.com") || safeId.includes("youtu.be")) {
    const match = safeId.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
    );
    if (match && match) {
      return `https://www.youtube-nocookie.com/embed/${match}`;
    }
  }
  return `https://www.youtube-nocookie.com/embed/${safeId}`;
};

export const GlobalYTMediaPlayer = ({
  mode = "manifesto", // "manifesto" | "card" | "service"
  serviceData = null,
  compact = false,
}) => {
  const [activeSwitchIndex, setActiveSwitchIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // 📊 POČÍTAJÚCE TELEMETRICKÉ STAVY
  const [clickCount, setClickCount] = useState(0);
  const [viewCount, setViewCount] = useState(1);
  const [watchTimeSec, setWatchTimeSec] = useState(0);

  // Dynamický výpočet 6 spínačov (Manifesto vs Produktová kartička)
  const switches = useMemo(() => {
    if (mode === "service" || mode === "card" || serviceData) {
      return getServiceSwitches(serviceData);
    }
    return AGENCY_BRAND_MANIFESTO_MEDIA;
  }, [mode, serviceData]);

  const activeSwitch = useMemo(() => {
    if (Array.isArray(switches)) {
      return switches[activeSwitchIndex] || switches;
    }
    return switches;
  }, [switches, activeSwitchIndex]);

  const timerRef = useRef(null);

  // ⏱️ ČASOVÝ POČÍTAČ SLEDOVANIA (WATCHTIME TRACKER)
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setWatchTimeSec((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  // 🎛️ PREPÍNANIE MEDZI 6 SPÍNAČMI (INDEX 0 až 5)
  const handleSwitchChannel = (index) => {
    if (SoundFX?.playSwitch) SoundFX.playSwitch();
    else if (SoundFX?.click) SoundFX.click();

    setClickCount((prev) => prev + 1);
    setViewCount((prev) => prev + 1);
    setActiveSwitchIndex(index);
    setIsPlaying(true);

    if (switches && switches[index]) {
      recordEvent?.("MEDIA_PLAYER_SWITCH_6X", {
        switchKey: switches[index].key || index,
        title: switches[index].title || "",
        youtubeId: switches[index].youtubeId || "",
        mode,
      });
    }
  };

  const embedUrl = parseYouTubeEmbedUrl(
    activeSwitch?.youtubeId || activeSwitch?.id,
  );
  return (
    <div
      className={`w-full bg-[#03070A]/95 border border-[#00f3ff]/30 rounded-3xl shadow-[0_0_40px_rgba(0,243,255,0.15)] font-mono text-white relative overflow-hidden backdrop-blur-2xl ${
        compact ? "p-3 md:p-4 text-xs" : "p-5 md:p-8"
      }`}
    >
      {/* 📺 SCREEN CONTAINER */}
      <div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {isPlaying ? (
          <iframe
            src={`${embedUrl}?autoplay=1&rel=0`}
            title={activeSwitch?.title || "Nexus Media Stream"}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="group cursor-pointer relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#081018] to-[#020508]"
          >
            <div className="w-16 h-16 rounded-full bg-[#00f3ff]/20 border border-[#00f3ff] flex items-center justify-center shadow-[0_0_20px_#00f3ff] group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-[#00f3ff] fill-[#00f3ff] ml-1" />
            </div>
            <p className="mt-4 text-xs md:text-sm font-bold tracking-widest text-[#00f3ff] uppercase">
              {activeSwitch?.title || "SPUSTIŤ MEDIA STREAM"}
            </p>
            <p className="text-[10px] text-gray-400 mt-1">
              {activeSwitch?.subtitle || "Kliknite pre aktiváciu vysielania"}
            </p>
          </div>
        )}
      </div>

      {/* 🎛️ 6 SPÍNAČOV MATICE (VP_V, VP_K, AP_HA, AP_EP, AP_SK, AP_DD) */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-4">
        {Array.isArray(switches) &&
          switches.map((item, idx) => {
            const IconComp = SWITCH_ICONS[item.key] || Video;
            const isActive = activeSwitchIndex === idx;
            return (
              <button
                key={item.key || idx}
                onClick={() => handleSwitchChannel(idx)}
                onMouseEnter={() => SoundFX?.playHover?.()}
                className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all duration-200 text-left ${
                  isActive
                    ? "bg-[#00f3ff]/15 border-[#00f3ff] text-[#00f3ff] shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                <IconComp className="w-4 h-4 flex-shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[10px] font-bold uppercase truncate">
                    {item.badge || item.key}
                  </div>
                  <div className="text-[9px] opacity-70 truncate">
                    {item.title}
                  </div>
                </div>
              </button>
            );
          })}
      </div>

      {/* 📊 TELEMETRICKÁ LIŠTA */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-white/10 text-[10px] text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-[#00f3ff]" /> Zobrazenia:{" "}
            {viewCount}
          </span>
          <span className="flex items-center gap-1">
            <MousePointer className="w-3.5 h-3.5 text-[#FFD700]" /> Kliky:{" "}
            {clickCount}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#FF0055]" /> Čas:{" "}
            {formatWatchTime
              ? formatWatchTime(watchTimeSec)
              : `${watchTimeSec}s`}
          </span>
        </div>
        <div className="text-[#00f3ff] font-bold tracking-wider">
          STATUS: {isPlaying ? "VYSIELANIE AKTÍVNE" : "STANDBY REŽIM"}
        </div>
      </div>
    </div>
  );
};

export default GlobalYTMediaPlayer;
