import React, { useState, useEffect, useRef } from "react";
import {
  Lock,
  User,
  QrCode,
  Unlock,
  AlertTriangle,
  Terminal,
  Shield,
  Activity,
  Eye,
  EyeOff,
  PlayCircle,
  Fingerprint,
  Github,
  Twitch,
  Gamepad2,
  Youtube,
  Camera,
  X,
  BrainCircuit,
  ZoomIn,
  ZoomOut,
  Focus,
  // ⚡ NOVÉ IKONY PRE DUAL-LOGIN A LAYOUT:
  Chrome,
  Linkedin,
  Facebook,
  Twitter,
  Globe,
  Layers,
  ArrowRight,
} from "lucide-react";

// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY
// ============================================================================
import { supabase } from "@shared/services/NexusDB_Supabase";
import { EXODUS_CONFIG } from "@shared/services/NexusDB_Config";
import { getTierColor } from "@shared/data/nexusConfig";
import { SoundFX } from "@shared/utils/SoundEngine";
import { GlobalHamburgerMenu } from "@shared/components/GlobalHamburgerMenu";
import { GlobalComponents } from "@shared/components/GlobalComponents";
import { GlobalFooter } from "@shared/components/GlobalFooter";
import { useNavigate } from "react-router-dom";
import GlobalUplinkVideo from "./GlobalUplinkVideo";

// ⚡ ZMAZANÝ LOKÁLNY createClient (Aby nevznikali Multiple Instances a Ghost Identity bug)

const CORE_VERSION = "UM-UplinkModal V38.0-PURE-MATRIX-FAST-SCAN";

// ⚡ VSTAVANÝ TOOLTIP COMPONENT
export const TooltipHover = ({
  text,
  dimColor = "#a855f7",
  position = "top",
  align = "center",
}) => {
  const isTop = position === "top";
  let alignClasses = "left-1/2 -translate-x-1/2";
  let arrowClasses = "left-1/2 -translate-x-1/2";
  if (align === "right") {
    alignClasses = "right-0";
    arrowClasses = "right-4";
  } else if (align === "left") {
    alignClasses = "left-0";
    arrowClasses = "left-4";
  }

  const animationClass = isTop
    ? "translate-y-2 group-hover/tooltip:translate-y-0"
    : "-translate-y-2 group-hover/tooltip:translate-y-0";

  return (
    <div
      className={`absolute ${isTop ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"} ${alignClasses} w-max max-w-[220px] opacity-0 group-hover/tooltip:opacity-100 invisible group-hover/tooltip:visible transition-all duration-300 pointer-events-none z-[999999] ${animationClass}`}
    >
      <div
        className="bg-[#050505] border rounded-xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl text-left break-words"
        style={{
          borderColor: `${dimColor}50`,
          boxShadow: `0 5px 20px ${dimColor}30`,
        }}
      >
        <span className="text-[10px] text-white/90 font-mono leading-relaxed normal-case tracking-normal whitespace-pre-wrap block">
          {text}
        </span>
      </div>
      <div
        className={`w-2.5 h-2.5 rotate-45 bg-[#050505] absolute ${arrowClasses} ${isTop ? "border-b border-r -bottom-1.5" : "border-t border-l -top-1.5"}`}
        style={{ borderColor: `${dimColor}50` }}
      />
    </div>
  );
};

// Odstránené staré props (onUnlock, onViewVop). Zavádzame Bypass navigáciu.
export const UplinkModal = ({ startMode = "login" }) => {
  const navigate = useNavigate(); // 🟢 INICIALIZÁCIA NAVIGÁTORA

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetMsg, setResetMsg] = useState("");
  const [isScanningQR, setIsScanningQR] = useState(false);

  // ⚡ STAVY PRE ZOOM
  const [zoomSettings, setZoomSettings] = useState({
    min: 1,
    max: 1,
    step: 0.1,
    current: 1,
  });
  const [isZoomSupported, setIsZoomSupported] = useState(false);

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const scanLoopRef = useRef(null);
  const lastScanTimeRef = useRef(0); // ⚡ PRIDANÉ: Throttling časovač pre CPU

  // ⚡ DYNAMICKÝ IMPORT DEKODÉRA (jsQR)
  useEffect(() => {
    if (!window.jsQR) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleError = (errMsg) => {
    if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
    setError(errMsg);
    setIsLoading(false);
    setTimeout(() => setError(""), 5000);
  };

  const handlePasswordReset = async () => {
    if (!email) {
      handleError("Najprv zadajte E-MAIL pre obnovu hesla.");
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;

      if (typeof SoundFX !== "undefined" && SoundFX.success) SoundFX.success();
      setResetMsg("✅ Link na obnovu hesla bol odoslaný na váš e-mail!");
      setTimeout(() => setResetMsg(""), 6000);
    } catch (err) {
      handleError("Chyba obnovy hesla: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async () => {
    if (!email || !password) return handleError("Zadajte E-mail aj Heslo.");

    setIsLoading(true);
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error && error.message.includes("Invalid login credentials")) {
        const regRes = await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (regRes.error) throw regRes.error;

        if (regRes.data?.user?.identities?.length === 0) {
          throw new Error(
            "Tento e-mail už existuje. Zadali ste nesprávne heslo.",
          );
        }
        data = regRes.data;
      } else if (error) {
        throw error;
      }

      // Oklamanie Colníka: Zápis identity okamžite do localStorage PRED zmenou stavu!
      if (data?.user?.email) {
        localStorage.removeItem("nexus_quest_mode");
        sessionStorage.removeItem("nexus_quest_mode");
        const currentIdentity = JSON.parse(
          localStorage.getItem("nexus_active_identity") || "{}",
        );
        localStorage.setItem(
          "nexus_active_identity",
          JSON.stringify({
            ...currentIdentity,
            email: data.user.email,
            tier: currentIdentity.tier || "FREE", // Ak mal nejaký tier, ponechá ho, inak FREE
            isGuest: false,
          }),
        );
      }

      if (typeof SoundFX !== "undefined" && SoundFX.success) SoundFX.success();
      // 1. Plynulý Ghost-Mode presun IBA v prípade úspešného prihlásenia
      navigate("/settings/registration", { replace: true });
    } catch (err) {
      handleError(err.message);
      setIsLoading(false);
    }
  };

  const handleOAuth = async (provider) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: { redirectTo: window.location.origin },
      });
      if (error) throw error;
    } catch (err) {
      handleError(`Chyba ${provider.toUpperCase()} Login: ` + err.message);
      setIsLoading(false);
    }
  };

  const handleFeatureInDev = (featureName) => {
    if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
    handleError(
      `[${featureName}] momentálne čaká na API Kľúč. Zvoľte iný protokol.`,
    );
  };

  // ⚡ ZOOM HANDLER
  const handleZoomChange = async (e) => {
    const newZoom = Number(e.target.value);
    if (!streamRef.current) return;
    const [track] = streamRef.current.getVideoTracks();
    try {
      await track.applyConstraints({ advanced: [{ zoom: newZoom }] });
      setZoomSettings((prev) => ({ ...prev, current: newZoom }));
    } catch (err) {
      console.error("Zoom failed", err);
    }
  };

  // ⚡ BLESKOVÝ QR SKENER - Optimalizovaný pre CPU!
  const scanQRCode = (timestamp) => {
    if (
      videoRef.current &&
      videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA &&
      window.jsQR
    ) {
      // ⚡ THROTTLING: Skenujeme iba každých 300ms (cca 3x za sekundu), čím šetríme 90% CPU!
      if (timestamp - lastScanTimeRef.current > 300) {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d", { willReadFrequently: true });

        // ⚡ DOWNSCALING: Zmenšíme obraz z kamery pre bleskovú matematiku
        const scale = Math.min(400 / videoRef.current.videoWidth, 1);
        canvas.width = videoRef.current.videoWidth * scale;
        canvas.height = videoRef.current.videoHeight * scale;

        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height,
        );

        const code = window.jsQR(
          imageData.data,
          imageData.width,
          imageData.height,
          {
            inversionAttempts: "dontInvert", // ⚡ Rýchly režim bez otáčania farieb
          },
        );

        if (code && code.data) {
          if (typeof SoundFX !== "undefined" && SoundFX.success)
            SoundFX.success();
          stopQRScanner();
          setEmail(code.data);
          setResetMsg("✅ BIOMETRIA PRIJATÁ! Zadajte heslo.");

          // ⚡ AUTO-FOCUS na heslo
          setTimeout(() => {
            const pwInput = document.getElementById("uplink-password");
            if (pwInput) pwInput.focus();
          }, 300);
          return;
        }
        lastScanTimeRef.current = timestamp; // Uložíme čas posledného skenu
      }
    }
    scanLoopRef.current = requestAnimationFrame(scanQRCode);
  };

  const startQRScanner = async () => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    setIsScanningQR(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;

      // ⚡ KONTROLA HARDVÉROVÉHO ZOOMU
      const [track] = stream.getVideoTracks();
      const capabilities = track.getCapabilities();
      if (capabilities.zoom) {
        setIsZoomSupported(true);
        setZoomSettings({
          min: capabilities.zoom.min,
          max: capabilities.zoom.max,
          step: capabilities.zoom.step,
          current: track.getSettings().zoom || capabilities.zoom.min,
        });
      } else {
        setIsZoomSupported(false);
      }

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          scanLoopRef.current = requestAnimationFrame(scanQRCode);
        };
      }
    } catch (err) {
      handleError("Kamera zamietnutá alebo nedostupná.");
      setIsScanningQR(false);
    }
  };

  function stopQRScanner() {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (scanLoopRef.current) {
      cancelAnimationFrame(scanLoopRef.current);
    }
    setIsScanningQR(false);
  }

  const handleQuestAuth = async () => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    setIsLoading(true);
    console.log("🛡️ [NEXUS UPLINK]: Spúšťam QUEST FLUSH PROTOCOL V20.12...");

    try {
      // 1. Zápis anonymnej relácie priamo do databázy (Supabase)
      const { error } = await supabase.auth.signInAnonymously();
      if (error) throw error;

      if (typeof SoundFX !== "undefined" && SoundFX.success) SoundFX.success();

      // 2. QUEST FLUSH: Výmaz znečistenia zo starých relácií a MOCK testov
      const keysToFlush = [
        "nexus_user",
        "nexus_active_user",
        "nexus_credits",
        "nexus_oc_credits",
        "nexus_balance",
        "nexus_unlocked_nodes",
        "nexus_matrix_fx",
        "nexus_advanced_fx",
      ];
      // 1. Výmaz starých kľúčov po predchádzajúcom prihlásenom operátorovi
      keysToFlush.forEach((k) => localStorage.removeItem(k));

      // 2. Nastavenie striktného Quest príznaku
      localStorage.setItem("nexus_quest_mode", "true");
      localStorage.setItem(
        "nexus_active_identity",
        JSON.stringify({
          isGuest: true,
          role: "QUEST",
          tier: "FREE",
          email: "quest",
          credits: 0,
          unlockedNodes: [],
        }),
      );

      // 3. Nastavenie striktného Quest príznaku & 0 OC identity
      localStorage.setItem("nexus_quest_mode", "true");
      sessionStorage.setItem("nexus_quest_mode", "true");

      localStorage.setItem(
        "nexus_active_identity",
        JSON.stringify({
          isGuest: true,
          role: "QUEST",
          tier: "FREE",
          email: "quest",
          displayName: "Neznámy Uzol",
          credits: 0,
          oc_balance: 0,
          unlockedNodes: [],
        }),
      );

      console.log(
        "✅ [NEXUS UPLINK]: Quest dekontaminácia dokončená (0 OC locked). Presmerovávam...",
      );

      // 4. Aktivácia Routera a čistenie stavu
      navigate("/");
      window.location.reload();
    } catch (err) {
      handleError("Quest prístup zlyhal: " + err.message);
      setIsLoading(false);
    }
  };

  const loginMethods = [
    {
      name: "NEXUS Core",
      icon: <Lock size={12} />,
      status: "ONLINE",
      color: "#39FF14",
    },
    {
      name: "Quest Protocol",
      icon: <User size={12} />,
      status: "ONLINE",
      color: "#39FF14",
      action: handleQuestAuth,
      className: "flex", // Zobrazené všade (desktop aj mobil)
    },
    {
      name: "GitHub Dev",
      icon: <Github size={12} />,
      status: "ONLINE",
      color: "#39FF14",
    },
    {
      name: "Discord",
      icon: <Gamepad2 size={12} />,
      status: "ONLINE",
      color: "#39FF14",
    },
    {
      name: "Twitch",
      icon: <Twitch size={12} />,
      status: "ONLINE",
      color: "#39FF14",
    },
    {
      name: "YouTube",
      icon: <Youtube size={12} />,
      status: "API KEY",
      color: "#EAB308",
    },
    {
      name: "QR Bio-Scan",
      icon: <QrCode size={12} />,
      status: "ONLINE",
      color: "#39FF14",
      action: startQRScanner,
      className: "md:hidden flex", // Skryté na desktope (md:hidden), zobrazené len na mobile
    },
  ];

  // ⚡ GHOST-MODE V3: Absolútna anihilácia Matrixu (App.jsx)
  useEffect(() => {
    // 1. Krok: Skryjeme všetky hlavičky a navigácie mimo nášho modalu
    const targets = document.querySelectorAll(
      "header, nav, #nexus-global-hamburger, .nexus-main-nav",
    );
    targets.forEach((el) => {
      if (!el.closest("#nexus-uplink-root")) {
        el.setAttribute("data-nexus-hidden", el.style.display || "");
        el.style.setProperty("display", "none", "important");
      }
    });

    // 2. Krok: Nekompromisný lov na "GlobalComponents" (lasery, blesky, šípky z App.jsx)
    // Keďže nevieme ich presné ID, skryjeme všetky fixné elementy s vysokým Z-indexom mimo modalu.
    const fixedElements = document.querySelectorAll(".fixed, [class*='fixed']");
    fixedElements.forEach((el) => {
      if (!el.closest("#nexus-uplink-root") && el.id !== "nexus-uplink-root") {
        const style = window.getComputedStyle(el);
        if (style.zIndex !== "auto" && parseInt(style.zIndex) > 50) {
          el.setAttribute("data-nexus-hidden", el.style.display || "");
          el.style.setProperty("display", "none", "important");
        }
      }
    });

    return () => {
      // Obnovenie pôvodného stavu po zavretí modalu
      const hidden = document.querySelectorAll("[data-nexus-hidden]");
      hidden.forEach((el) => {
        el.style.display = el.getAttribute("data-nexus-hidden");
        el.removeAttribute("data-nexus-hidden");
      });
    };
  }, []);

  return (
    // ⚡ 1. ROOT WRAPPER: Masívny Z-Index. (Ak sa číslo zmaže, ručne doplň z-)
    <div
      id="nexus-uplink-root"
      className="fixed inset-0 z-[999999] bg-[#03080a] font-mono text-center lg:text-left animate-in fade-in duration-1000 flex flex-col"
    >
      {/* ⚡ OPRAVA: CSS Kill-Switch zmazaný (rieši ho useEffect). Ponechaný len dizajn scrollbaru. */}
      <style>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168,85,247,0.3); border-radius: 10px; }`}</style>

      {/* <MetaTags
        title="NEXUS UPLINK: Prihlásenie a Klientska zóna | NEXUS OS"
        description="Prihlásenie a registrácia do systému Projektu Nexus. Inicializujte bezpečné spojenie, získajte prístup do klientskej zóny, k Master-Protokolom a do IT komunity."
        image="https://projekt-nexus.sk/img-nexus/pages/UplinkModal.jpg"
        color="#8A2BE2"
        url="https://projekt-nexus.sk/login"
        ogTitle="NEXUS UPLINK: Tvoj hardvér beží na chybný kód. Odomkni systém"
        ogDescription="Spoločnosť ťa programuje k poslušnosti a tvoj systém hlási Error. Inicializuj bezpečné spojenie, získaj prístup k Master-Protokolom a odstráň Malvér zo svojho jadra."
        twitterTitle="NEXUS UPLINK: Tvoj hardvér beží na chybný kód. Odomkni systém"
        twitterDescription="Spoločnosť ťa programuje k poslušnosti. Inicializuj bezpečné spojenie, získaj prístup k Master-Protokolom a odstráň Malvér zo svojho jadra."
      /> */}

      {/* ⚡ POZADIE */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0044FF]/5 blur-[150px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* ⚡ 3. SCROLL KONTAJNER: Toto ID je Kľúčové! Vďaka nemu fialové menu a šípky vedia, čo majú posúvať. */}
      <div
        id="nexus-uplink-scroll"
        className="relative z-10 flex flex-col flex-1 h-full w-full overflow-y-auto custom-scrollbar transform-gpu will-change-scroll"
      >
        {/* ⚡ OPRAVA 1: Zmazané 'min-h-full' a 'flex-1' (ktoré spôsobovali zlievanie) a pridaný flex-grow s tvrdým shrink-0 */}
        <div className="w-full max-w-6xl mx-auto flex flex-col justify-center gap-4 lg:gap-6 px-4 py-6 md:p-8 flex-grow shrink-0">
          {/* ========================================================================= */}
          {/* 🟢 HORNÝ RAD (Trailer + Hlavička a System Tiers)                           */}
          {/* ========================================================================= */}
          <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 items-start py-2">
            {/* 🛑 ĽAVÁ STRANA HORE: Trailer a Hlavička */}
            <div
              id="nexus-uplink-trailer"
              className="w-full lg:w-1/2 flex flex-col gap-3 shrink-0"
            >
              {/* ⚡ OSTRÉ NASADENIE AUTONÓMNEHO PREHRÁVAČA */}
              <GlobalUplinkVideo />

              {/* hlavička pod videom */}
              <div className="w-full flex flex-col items-center lg:items-start mt-2">
                <div className="flex items-center gap-3 mb-1 w-full justify-center lg:justify-start">
                  <Fingerprint
                    size={36}
                    className="text-purple-500 animate-pulse shadow-[0_0_20px_rgba(168,85,247,0.4)] rounded-full shrink-0"
                  />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-[0.2em] mb-0.5 italic leading-none">
                      Nexus{" "}
                      <span className="text-purple-500 not-italic">Uplink</span>
                    </h1>
                    <p className="text-gray-500 text-[9px] uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2">
                      <Terminal size={10} /> Verifikácia Entity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🛡️ PRAVÁ STRANA HORE: System Tiers */}
            <div
              id="nexus-uplink-tiers"
              className="w-full lg:w-1/2 flex flex-col gap-2 mt-2 lg:mt-0"
            >
              <h3 className="text-white font-black uppercase tracking-widest text-xs border-b border-white/10 pb-1.5 flex items-center gap-2">
                <Layers size={14} className="text-purple-500" /> System Tiers
              </h3>

              {/* ⚡ EXEKÚCIA: Pridaných 8 Tierov. Zmenšený padding (p-2.5) a text pre perfektné spasovanie */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-full">
                {/* QUEST */}
                <div className="flex flex-col p-2.5 rounded-xl border border-white/20 bg-black/40 hover:bg-white/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70 font-black uppercase tracking-widest text-[10px]">
                      QUEST
                    </span>
                    <User
                      size={12}
                      className="text-white/30 group-hover:text-white/70"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Anonymný hosťovský prístup.
                  </p>
                </div>

                {/* FREE */}
                <div className="flex flex-col p-2.5 rounded-xl border border-[#00FFFF]/20 bg-black/40 hover:bg-[#00FFFF]/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#00FFFF] font-black uppercase tracking-widest text-[10px]">
                      FREE
                    </span>
                    <User
                      size={12}
                      className="text-[#00FFFF]/30 group-hover:text-[#00FFFF]"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Základný prístup do Siete a Blogu.
                  </p>
                </div>

                {/* PRO */}
                <div className="flex flex-col p-2.5 rounded-xl border border-[#39FF14]/20 bg-black/40 hover:bg-[#39FF14]/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#39FF14] font-black uppercase tracking-widest text-[10px]">
                      PRO
                    </span>
                    <Lock
                      size={12}
                      className="text-[#39FF14]/30 group-hover:text-[#39FF14]"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Pokročilé dáta a expertné uzly.
                  </p>
                </div>

                {/* OMEGA */}
                <div className="flex flex-col p-2.5 rounded-xl border border-[#FFD700]/20 bg-black/40 hover:bg-[#FFD700]/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#FFD700] font-black uppercase tracking-widest text-[10px]">
                      OMEGA
                    </span>
                    <Lock
                      size={12}
                      className="text-[#FFD700]/30 group-hover:text-[#FFD700]"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Prístup k Omega VIP Archívom a k Omega Klastrom a k
                    prémiovým vedomostným PRO a OMEGA dimenziám.
                  </p>
                </div>

                {/* MODERATOR */}
                <div className="flex flex-col p-2.5 rounded-xl border border-[#D2B48C]/20 bg-black/40 hover:bg-[#D2B48C]/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#D2B48C] font-black uppercase tracking-widest text-[10px]">
                      MODERATOR
                    </span>
                    <Shield
                      size={12}
                      className="text-[#D2B48C]/30 group-hover:text-[#D2B48C]"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Správa siete a komunitný štít.
                  </p>
                </div>

                {/* ADMIN */}
                <div className="flex flex-col p-2.5 rounded-xl border border-[#FF6600]/20 bg-black/40 hover:bg-[#FF6600]/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#FF6600] font-black uppercase tracking-widest text-[10px]">
                      ADMIN
                    </span>
                    <Shield
                      size={12}
                      className="text-[#FF6600]/30 group-hover:text-[#FF6600]"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Správa databázy a exekutíva.
                  </p>
                </div>

                {/* MASTER */}
                <div className="flex flex-col p-2.5 rounded-xl border border-[#FF1493]/20 bg-black/40 hover:bg-[#FF1493]/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#FF1493] font-black uppercase tracking-widest text-[10px]">
                      MASTER
                    </span>
                    <Lock
                      size={12}
                      className="text-[#FF1493]/30 group-hover:text-[#FF1493]"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Čestný člen a elitný operátor. Prístup k Omega VIP Archívom
                    a k Master Protokolom, k Master Klastrom a k Osobnému
                    Mentoringu, k Root Access a k prémiovým vedomostným Omega
                    dimenziám.
                  </p>
                </div>

                {/* ARCHITECT */}
                <div className="flex flex-col p-2.5 rounded-xl border border-[#FF003C]/20 bg-black/40 hover:bg-[#FF003C]/5 transition-all backdrop-blur-sm group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#FF003C] font-black uppercase tracking-widest text-[10px]">
                      ARCHITECT
                    </span>
                    <Unlock
                      size={12}
                      className="text-[#FF003C]/30 group-hover:text-[#FF003C]"
                    />
                  </div>
                  <p className="text-gray-500 text-[8px] uppercase tracking-wider leading-tight">
                    Plný Root Access a prepis kódov.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 🔴 SPODNÝ RAD (Dual Login - Asymetrická mriežka)                           */}
          {/* ========================================================================= */}
          {/* ⚡ OPRAVA: Injektované id="nexus-uplink-protocols" pre Hamburger výťah */}
          <div
            id="nexus-uplink-security"
            className="w-full border-t border-white/5 pt-4 flex flex-col lg:flex-row gap-4 lg:gap-8 relative z-30"
          >
            {" "}
            {/* 🛑 ĽAVÁ STRANA DOLE: Core Access */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <h3 className="text-purple-500 font-black uppercase tracking-widest text-sm border-b border-purple-500/20 pb-1.5 flex items-center gap-2">
                <Lock size={14} /> Core Access
              </h3>

              <div className="bg-black/50 border border-white/10 p-4 md:p-5 rounded-[1.5rem] shadow-[0_0_40px_rgba(168,85,247,0.1)] backdrop-blur-md w-full relative z-30 min-h-[300px] flex flex-col justify-center">
                {!isScanningQR ? (
                  <div className="w-full flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-300">
                    {/* 🟢 1. TIER: RÝCHLY VSTUP */}
                    <div className="relative group/tooltip hover:z-[4]">
                      <button
                        onClick={handleQuestAuth}
                        disabled={isLoading}
                        className="w-full py-3.5 border border-[#00FFFF]/40 bg-[#00FFFF]/10 hover:bg-[#00FFFF]/20 text-[#00FFFF] hover:text-white rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:scale-[1.02] disabled:opacity-50 text-xs"
                      >
                        <User size={16} /> Quest Access (Hosť)
                      </button>
                      <TooltipHover
                        text="Hosťovský prístup do Siete (Anonym)"
                        dimColor="#00FFFF"
                        position="top"
                      />
                    </div>

                    {/* ⚖️ ODDELOVAČ: ADMINISTRÁCIA */}
                    <div className="relative py-1 flex items-center justify-center mt-1">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                      </div>
                      <div className="relative bg-[#050a0e] px-4 text-[8px] text-white/40 uppercase tracking-widest">
                        Administrácia
                      </div>
                    </div>

                    {/* 🟣 2. TIER: KLASICKÝ LOGIN */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEmailAuth();
                      }}
                      className="w-full flex flex-col gap-2.5"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-MAIL"
                        autoComplete="username"
                        className="w-full bg-black/80 border border-white/20 text-white focus:border-purple-500 rounded-xl p-3 text-center font-black tracking-widest outline-none transition-all duration-300 text-xs"
                      />
                      <div className="relative w-full">
                        <input
                          id="uplink-password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="HESLO (Min. 6 znakov)"
                          className="w-full bg-black/80 border border-white/20 text-white focus:border-purple-500 rounded-xl p-3 pr-12 text-center font-black tracking-widest outline-none transition-all duration-300 text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handlePasswordReset}
                          className="text-[9px] text-white/40 hover:text-purple-400 uppercase font-black tracking-widest transition-colors"
                        >
                          Zabudol som heslo
                        </button>
                      </div>

                      {resetMsg && (
                        <p className="text-[#39FF14] text-[9px] font-black uppercase tracking-widest mt-1 text-center animate-pulse">
                          {resetMsg}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] mt-1 mb-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                      >
                        {isLoading ? (
                          <Activity size={16} className="animate-spin" />
                        ) : (
                          <>
                            <Lock size={14} /> Login / Register
                          </>
                        )}
                      </button>

                      <p className="text-[7px] text-white/30 text-center uppercase tracking-widest font-mono leading-tight mt-1">
                        Vstupom súhlasíte so <br />
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof SoundFX !== "undefined" && SoundFX.click)
                              SoundFX.click();
                            navigate("/vop");
                          }}
                          className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
                        >
                          Všeobecnými Obchodnými Podmienkami
                        </button>
                        .
                      </p>
                    </form>

                    {/* ⚡ 4. TIER: QR SCANNER (Mobil) */}
                    <div className="relative group/tooltip hover:z-[4] block sm:hidden mt-1">
                      <button
                        onClick={startQRScanner}
                        className="w-full bg-[#39FF14]/5 hover:bg-[#39FF14]/10 text-[#39FF14]/50 hover:text-[#39FF14] font-bold uppercase tracking-widest py-2.5 rounded-xl transition-all border border-[#39FF14]/10 flex items-center justify-center gap-2 text-[10px]"
                      >
                        <QrCode size={12} /> QR Bio-Scan
                      </button>
                      <TooltipHover
                        text="Biometrický login"
                        dimColor="#39FF14"
                        position="top"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center animate-in fade-in zoom-in duration-300 py-2 z-50 relative">
                    <h3 className="text-white font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                      <Camera size={14} className="text-[#00FFFF]" /> Optický
                      Skener
                    </h3>
                    <p className="text-gray-400 text-[9px] mb-4 uppercase tracking-widest text-center">
                      Namierte kód do zameriavača
                    </p>

                    <div className="relative w-full aspect-square max-w-[220px] mx-auto rounded-xl overflow-hidden border border-[#00FFFF]/20 shadow-[0_0_40px_rgba(0,255,255,0.15)] bg-black flex items-center justify-center group">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
                      />
                      <canvas ref={canvasRef} className="hidden" />

                      {/* ⚡ HUD OVERLAY */}
                      <div className="absolute inset-0 z-10 pointer-events-none p-5">
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00FFFF] animate-[corner-tl_2s_ease-in-out_infinite]"></div>
                        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#00FFFF] animate-[corner-tr_2s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00FFFF] animate-[corner-bl_2s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00FFFF] animate-[corner-br_2s_ease-in-out_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                          <Focus size={32} className="text-[#00FFFF]" />
                        </div>
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#00FFFF]/80 shadow-[0_0_15px_#00FFFF] animate-[scan_2s_ease-in-out_infinite]"></div>
                      </div>

                      <div className="absolute inset-0 bg-[#00FFFF]/5 mix-blend-overlay pointer-events-none"></div>
                    </div>

                    {isZoomSupported && (
                      <div className="w-full max-w-[220px] mt-4 flex flex-col gap-2">
                        <div className="flex justify-between text-[8px] text-[#00FFFF]/70 font-black uppercase tracking-widest px-1">
                          <span>Vzdialiť</span>
                          <span>Priblížiť</span>
                        </div>
                        <div className="flex items-center gap-3 bg-black/60 p-2.5 rounded-xl border border-[#00FFFF]/20 shadow-inner">
                          <ZoomOut
                            size={16}
                            className="text-gray-400 shrink-0"
                          />
                          <input
                            type="range"
                            min={zoomSettings.min}
                            max={zoomSettings.max}
                            step={zoomSettings.step}
                            value={zoomSettings.current}
                            onChange={handleZoomChange}
                            className="flex-1 accent-[#00FFFF] h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer"
                          />
                          <ZoomIn
                            size={16}
                            className="text-[#00FFFF] shrink-0"
                          />
                        </div>
                      </div>
                    )}

                    <p className="text-[#00FFFF] text-[9px] font-mono tracking-widest uppercase mt-4 animate-pulse flex items-center gap-2">
                      <Activity size={10} /> Skenujem prostredie...
                    </p>

                    <button
                      onClick={stopQRScanner}
                      className="mt-3 w-full max-w-[220px] bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      <X size={14} /> Prerušiť Skenovanie
                    </button>

                    <style>{`
                      @keyframes scan { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
                      @keyframes corner-tl { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-3px, -3px); } }
                      @keyframes corner-tr { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(3px, -3px); } }
                      @keyframes corner-bl { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-3px, 3px); } }
                      @keyframes corner-br { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(3px, 3px); } }
                    `}</style>
                  </div>
                )}
              </div>

              {/* CHYBOVÁ HLÁŠKA */}
              <div
                className={`transition-opacity duration-300 w-full ${error ? "opacity-100" : "opacity-0 hidden"}`}
              >
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-xl flex items-start gap-3 mt-2">
                  <AlertTriangle
                    size={14}
                    className="text-[#FF003C] shrink-0 mt-0.5 animate-bounce"
                  />
                  <p className="text-[#FF003C] text-[9px] font-black uppercase tracking-widest leading-relaxed text-left">
                    {error}
                  </p>
                </div>
              </div>
            </div>
            {/* ⚡ PRAVÁ STRANA DOLE: SSO Porty & Dev Grid */}
            <div
              id="nexus-uplink-ports"
              className="w-full lg:w-1/2 flex flex-col gap-3"
            >
              <h3 className="text-white font-black uppercase tracking-widest text-sm border-b border-white/10 pb-1.5 mb-1 flex items-center gap-2">
                <Globe size={14} className="text-[#00FFFF]" /> Rýchle Porty
              </h3>

              {/* HLAVNÉ SSO TLAČIDLÁ */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleOAuth("google")}
                  className="flex items-center justify-between w-full p-3.5 bg-black/40 border border-white/10 hover:border-white/30 hover:bg-white/5 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Chrome
                      size={18}
                      className="text-[#EA4335] group-hover:scale-110 transition-transform"
                    />
                    <span className="text-white font-bold uppercase tracking-widest text-sm group-hover:text-[#EA4335] transition-colors">
                      Google Port
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-white/20 group-hover:text-[#EA4335] group-hover:translate-x-1 transition-all"
                  />
                </button>

                <button
                  onClick={() => handleOAuth("linkedin_oidc")}
                  className="flex items-center justify-between w-full p-3.5 bg-black/40 border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin
                      size={18}
                      className="text-[#0A66C2] group-hover:scale-110 transition-transform"
                    />
                    <span className="text-white font-bold uppercase tracking-widest text-sm group-hover:text-[#0A66C2] transition-colors">
                      LinkedIn Port
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-white/20 group-hover:text-[#0A66C2] group-hover:translate-x-1 transition-all"
                  />
                </button>

                {/* TAKTICKÝ ÚSTUP */}
                <button
                  disabled
                  className="flex items-center justify-between w-full p-3.5 bg-white/5 border border-white/5 rounded-xl opacity-30 grayscale cursor-not-allowed"
                >
                  <div className="flex items-center gap-3">
                    <Facebook size={18} className="text-gray-500" />
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                      Facebook{" "}
                      <span className="text-[8px] text-[#FF003C] ml-2 tracking-widest uppercase">
                        [Dev]
                      </span>
                    </span>
                  </div>
                </button>

                <button
                  disabled
                  className="flex items-center justify-between w-full p-3.5 bg-white/5 border border-white/5 rounded-xl opacity-30 grayscale cursor-not-allowed"
                >
                  <div className="flex items-center gap-3">
                    <Twitter size={18} className="text-gray-500" />
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                      X (Twitter){" "}
                      <span className="text-[8px] text-[#FF003C] ml-2 tracking-widest uppercase">
                        [Dev]
                      </span>
                    </span>
                  </div>
                </button>
              </div>

              {/* 🔵 3. TIER: DEV & GAMING SIETE */}
              <div className="relative py-1 flex items-center justify-center mt-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative bg-[#03080a] px-4 text-[8px] text-white/40 uppercase tracking-widest">
                  Dev & Gaming
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div className="relative group/tooltip hover:z-[4]">
                  <button
                    onClick={() => handleOAuth("github")}
                    type="button"
                    className="w-full p-2.5 bg-[#24292e]/80 hover:bg-white text-white hover:text-black font-black border border-white/10 rounded-xl flex items-center justify-center transition-all"
                  >
                    <Github
                      size={16}
                      className="hover:scale-110 transition-transform"
                    />
                  </button>
                  <TooltipHover
                    text="Dev Login (GitHub)"
                    dimColor="#ffffff"
                    position="top"
                  />
                </div>

                <div className="relative group/tooltip hover:z-[4]">
                  <button
                    onClick={() => handleOAuth("discord")}
                    type="button"
                    className="w-full p-2.5 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-[#5865F2] border border-[#5865F2]/30 rounded-xl flex items-center justify-center transition-all"
                  >
                    <Gamepad2
                      size={16}
                      className="hover:scale-110 transition-transform"
                    />
                  </button>
                  <TooltipHover
                    text="Discord Login"
                    dimColor="#5865F2"
                    position="top"
                  />
                </div>

                <div className="relative group/tooltip hover:z-[4]">
                  <button
                    onClick={() => handleOAuth("twitch")}
                    type="button"
                    className="w-full p-2.5 bg-[#9146FF]/10 hover:bg-[#9146FF]/20 text-[#9146FF] border border-[#9146FF]/30 rounded-xl flex items-center justify-center transition-all"
                  >
                    <Twitch
                      size={16}
                      className="hover:scale-110 transition-transform"
                    />
                  </button>
                  <TooltipHover
                    text="Twitch Login"
                    dimColor="#9146FF"
                    position="top"
                  />
                </div>

                <div className="relative group/tooltip hover:z-[4]">
                  <button
                    onClick={() => handleFeatureInDev("YouTube API")}
                    disabled={isLoading}
                    className="w-full p-2.5 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] border border-[#FF0000]/30 rounded-xl flex items-center justify-center transition-all cursor-not-allowed opacity-50"
                  >
                    <Youtube
                      size={16}
                      className="hover:scale-110 transition-transform"
                    />
                  </button>
                  <TooltipHover
                    text="YouTube (Čaká na API)"
                    dimColor="#FF0000"
                    position="top"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ⚡ OPRAVA 2: Tvrdý fyzický oddeľovač (Spacer), ktorý nedovolí 4-časti kvadrantu dotknúť sa Footera! */}
          <div className="w-full h-12 md:h-16 shrink-0"></div>

          {/* ========================================================================= */}
          {/* KONIEC OBSAHOVÉHO WRAPPERU max-w-6xl */}
        </div>

        {/* ========================================================================= */}
        {/* ⚡ OPRAVA FOOTERU: Uložený v rámci rolovacieho kontajnera */}
        {/* ========================================================================= */}
        <div className="w-full bg-[#050a0e] border-t border-white/10 mt-auto pt-6 pb-6 relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] shrink-0">
          <GlobalFooter themeColor="#a855f7" />
        </div>
      </div>
      {/* KONIEC SCROLL KONTAJNERA nexus-uplink-scroll */}

      {/* ========================================================================= */}
      {/* 📹 QR SKENER OVERLAY (Fixná vrstva úplne navrchu)                           */}
      {/* ========================================================================= */}
      {isScanningQR && (
        // ⚡ OPRAVA 2: Extrémny Z-Index  pre Skener Overlay (nič ho neprebije)
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center font-mono">
          <div className="relative w-full max-w-sm px-4">
            <h3 className="text-[#00FFFF] font-black uppercase tracking-[0.2em] text-center mb-6 text-xl flex items-center justify-center gap-3">
              <Camera className="animate-pulse" /> QR BIO-SCAN
            </h3>
            <div className="relative w-full aspect-square border-2 border-[#00FFFF]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.15)] bg-black group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00FFFF] shadow-[0_0_20px_#00FFFF] z-50 animate-[scanline_2s_linear_infinite]" />

              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
                playsInline
                autoPlay
                muted
              />
              <canvas ref={canvasRef} className="hidden" />

              <div className="absolute inset-0 z-10 pointer-events-none p-5">
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00FFFF] animate-[corner-tl_2s_ease-in-out_infinite]"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#00FFFF] animate-[corner-tr_2s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00FFFF] animate-[corner-bl_2s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00FFFF] animate-[corner-br_2s_ease-in-out_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                  <Focus size={32} className="text-[#00FFFF]" />
                </div>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#00FFFF]/80 shadow-[0_0_15px_#00FFFF] animate-[scan_2s_ease-in-out_infinite]"></div>
              </div>
              <div className="absolute inset-0 bg-[#00FFFF]/5 mix-blend-overlay pointer-events-none"></div>

              {isZoomSupported && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-black/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md w-[80%]">
                  <ZoomOut size={16} className="text-white/50 shrink-0" />
                  <input
                    type="range"
                    min={zoomSettings.min}
                    max={zoomSettings.max}
                    step={zoomSettings.step}
                    value={zoomSettings.current}
                    onChange={handleZoomChange}
                    className="w-full accent-[#00FFFF] bg-white/10 rounded-full h-1 appearance-none cursor-pointer"
                  />
                  <ZoomIn size={16} className="text-white/50 shrink-0" />
                </div>
              )}
            </div>

            <p className="text-[#00FFFF] text-[9px] font-mono tracking-widest uppercase mt-5 animate-pulse flex items-center justify-center gap-2">
              <Activity size={10} /> Skenujem prostredie...
            </p>
            <p className="text-white/50 text-center mt-2 text-xs uppercase tracking-widest mb-8">
              Zamerajte objektív na kybernetický podpis entít.
            </p>
            <button
              onClick={stopQRScanner}
              className="mx-auto flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/30 px-6 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-red-500 hover:text-black transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)]"
            >
              <X size={18} /> Prerušiť Skenovanie
            </button>

            <style>{`
              @keyframes scan { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
              @keyframes scanline { 0% { top: 0%; } 50% { top: 100%; } 100% { top: 0%; } }
              @keyframes corner-tl { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-3px, -3px); } }
              @keyframes corner-tr { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(3px, -3px); } }
              @keyframes corner-bl { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-3px, 3px); } }
              @keyframes corner-br { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(3px, 3px); } }
            `}</style>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ⚡ LOKÁLNE ŠTÍTY A UI KOMPONENTY (Vložené bez blokujúcich obalov)         */}
      {/* ========================================================================= */}
      {/* ⚡ OPRAVA: Zmazaný obalový div pointer-events. Komponenty sú voľné a KLIKATEĽNÉ! */}

      <GlobalHamburgerMenu
        activeTab="uplink"
        themeColor="#a855f7"
        targetScrollId="nexus-uplink-scroll"
      />
      <GlobalComponents
        themeColor="#a855f7"
        targetScrollId="nexus-uplink-scroll"
      />
    </div>
  );
};

export default UplinkModal;
