import SettingsHeaderComponent from "@settings/components/SettingsHeaderComponent.jsx";
import { GlobalProfil } from "@shared/components/GlobalProfil.jsx";
// ⚡ EXODUS FIX: Zmazané všetky importy 'firebase/firestore' !

import { getTierColor } from "@shared/data/nexusConfig.js";
import { checkPermission, PERMISSIONS_MATRIX } from "@shared/data/permissionsRegistry.js";
import { NexusDB } from "@shared/services/NexusDB_Core.js";
import { supabase } from "@shared/services/NexusDB_Supabase.js";
import { SoundFX } from "@shared/utils/SoundEngine.js";
import GlobalShopHistory from "@shop/components/GlobalShopHistory.jsx";
// ============================================================================
// ⚠️ OSTRÉ LOKÁLNE IMPORTY (VO SVOJOM VS CODE ODKOMENTUJ ORIGINÁLY) ⚠️
// ============================================================================
import { EmailAuthProvider, getAuth, onAuthStateChanged, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { Activity, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, ArrowDownCircle, ArrowUpCircle, AtSign, Ban, Bell, Bold, Calendar, CheckCircle2, Chrome, Clock, Code, CornerDownLeft, Crown, Database, Download, Eraser, Eye, EyeOff, Facebook, FileText, Film, Gamepad2, Github, Globe, Heading, Heart, HeartPulse, Image as ImageIcon, Info, Instagram, Italic, Key, Link, Linkedin, List, ListOrdered, Lock, LogIn, Mail, Maximize2, Menu, MessageCircle, Minimize2, Music, Music2, Palette, Phone, PlusCircle, QrCode, Quote, Save, Send, Settings, Share2, Shield, ShieldAlert, ShieldCheck, Smartphone, Star, Strikethrough, Table, Terminal, Trash2, Twitch, Twitter, Type, Underline, User, Users, Wallet, X, Youtube } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// ============================================================================
// 🌟 POMOCNÝ KOMPONENT PRE TOOLTIPY (ALIGN CENTER FIX & OVERFLOW PREVENT)
// ============================================================================
const TooltipHover = ({
  text,
  dimColor = "#39FF14",
  position = "top",
  align = "left",
}) => {
  const isTop = position === "top";
  let alignClasses = "left-0";
  let arrowClasses = "left-4";
  let originClass = isTop ? "origin-bottom-left" : "origin-top-left";

  if (align === "right") {
    alignClasses = "right-0";
    arrowClasses = "right-4";
    originClass = isTop ? "origin-bottom-right" : "origin-top-right";
  } else if (align === "center") {
    alignClasses = "left-1/2 -translate-x-1/2";
    arrowClasses = "left-1/2 -translate-x-1/2";
    originClass = isTop ? "origin-bottom" : "origin-top";
  }

  return (
    <div
      className={`absolute ${isTop ? `bottom-full mb-3 ${originClass}` : `top-full mt-3 ${originClass}`} ${alignClasses} w-48 md:w-56 max-w-[85vw] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 pointer-events-none z-[99999] scale-95 group-hover:scale-100`}
    >
      <div
        className="bg-black/95 border rounded-xl p-3 md:p-4 shadow-2xl backdrop-blur-xl text-left break-words"
        style={{
          borderColor: `${dimColor}50`,
          boxShadow: `0 10px 40px ${dimColor}30`,
        }}
      >
        <span
          className="text-[9px] font-black uppercase block mb-1.5 tracking-[0.2em] border-b border-white/10 pb-1.5"
          style={{ color: dimColor }}
        >
          Info_Log
        </span>
        <span className="text-[10px] text-white/80 font-mono leading-relaxed normal-case tracking-normal whitespace-pre-wrap block break-words">
          {text}
        </span>
      </div>
      <div
        className={`w-3 h-3 rotate-45 bg-black/95 absolute ${arrowClasses} ${isTop ? "border-b border-r -bottom-1.5" : "border-t border-l -top-1.5"}`}
        style={{ borderColor: `${dimColor}50` }}
      />
    </div>
  );
};

// ============================================================================
// 🎨 SÉMANTICKÉ AVATARY (GENEROVANIE IDENTÍT)
// ============================================================================
const NEXUS_AVATARS = [
  { id: "ID00", name: "Mentor-Hub (Pure White)", color: "FFFFFF" },
  { id: "ID01", name: "Identity-Core (Neon Green)", color: "39FF14" },
  { id: "ID02", name: "The-Workflow (Yellow)", color: "FFEB3B" },
  { id: "ID03", name: "Cash-Engine (Gold)", color: "FFD700" },
  { id: "ID04", name: "Revenue-Architect (Orange)", color: "FFAA00" },
  { id: "ID05", name: "Assets-Matrix (Dark Orange)", color: "FF8C00" },
  { id: "ID06", name: "Data-Absorber (Purple)", color: "BF00FF" },
  { id: "ID07", name: "Skills-Tree (Deep Violet)", color: "8A2BE2" },
  { id: "ID08", name: "Empty-Book (Cyan)", color: "00FFFF" },
  { id: "ID09", name: "Sergeant-Core (Blood Red)", color: "FF003C" },
  { id: "ID10", name: "NonIdentity-Core (Deep Blue)", color: "0044FF" },
  { id: "ID11", name: "The-Recovery (Amber)", color: "FFBF00" },
  { id: "ID12", name: "Nexus-Codex (Dark Purple)", color: "6B21A8" },
  { id: "ID13", name: "Nexus-Habits (Navy Blue)", color: "1E3A8A" },
  { id: "ID14", name: "Nexus-Blog (Pink)", color: "E91E63" },
].map((dim) => ({
  url: `https://api.dicebear.com/7.x/bottts/svg?seed=NexusEntity${dim.id}&backgroundColor=${dim.color.replace("#", "")}`,
  title: `Systémový Avatar: ${dim.id} - ${dim.name}`,
  color: `#${dim.color.replace("#", "")}`,
}));

// ============================================================================
// 💾 TOVÁRENSKÉ NASTAVENIA FORMULÁRA
// ============================================================================
const DEFAULT_FORM_DATA = {
  displayName: "",
  email: "",
  dossier: "",
  avatar: "",
  diagnosis: "",
  medication: "",
  www: "",
  credits: 0,
  phone: "",
  facebook: "",
  google: "",
  youtube1: "",
  youtube2: "",
  tiktok: "",
  instagram: "",
  whatsapp: "",
  // ⚡ EXISTUJÚCE
  notifyEmail: false,
  notifySMS: false,
  blogAlerts: true,
  defaultUnreadFilter: false,
  // ⚡ NOVÉ: Detailné sémantické notifikácie
  notifyMentions: true,
  notifyReplies: true,
  notifyReactions: false,
};

/**
 * 🟢 NEXUS CORE SETUP (V6.4 - Očistený Kód bez zdvojených divov)
 */
export default function SettingsPage({
  setActiveTab: setActiveTabProp,
  userState,
  setUserState,
  themeColor,
  setThemeColor,
  onThemeChange,
}) {
   const userTier =
    userState?.isGuest || userState?.tier === "QUEST" || !userState?.email
      ? "QUEST"
      : userState?.tier || "FREE";
  const params = useParams();
  const navigate = useNavigate();
  const urlSection = params["*"];

  // 🎯 Kánonická Fialová pre Settings / Nexus Core (#8A2BE2) 1:1 podľa Operators
  useEffect(() => {
    const triggerTheme = onThemeChange || setThemeColor;
    if (triggerTheme) {
      triggerTheme("#8A2BE2"); // Settings / Nexus Core Purple
    }
  }, [onThemeChange, setThemeColor]);

  // 🚀 FORCED SCROLL-TO-TOP (Reset osi Y pri načítaní stránky)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Ak prídeme na čisté /settings, hodí nás to na "registration"
  const [activeTab, setActiveTab] = useState(urlSection || "registration");

  // 1. SYNC: Ak sa zmení URL zvonku, okamžite sa prepne záložka
  useEffect(() => {
    if (urlSection && urlSection !== activeTab) {
      setActiveTab(urlSection);
    } else if (!urlSection) {
      setActiveTab("registration");
    }
  }, [urlSection]);

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");

  // ⚡ ZÁKLADNÝ STAV FORMULÁRA (Načítava predvolené hodnoty z továrne)
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  // 🕵️‍♂️ SONDA + PAMÄŤ FORMULÁRA: Zabezpečuje, že po refreshi sa načítajú uložené notifikácie z DB!
  useEffect(() => {
    if (userState && !userState.isGuest) {
      setFormData((prev) => ({
        ...prev,
        ...userState, // Prepíše defaultné hodnoty tými z tvojho profilu
        // Explicitný fallback pre boolean hodnoty, aby systém nepadol na 'undefined'
        notifyEmail: userState.notifyEmail ?? false,
        notifySMS: userState.notifySMS ?? false,
        blogAlerts: userState.blogAlerts ?? true,
        notifyMentions: userState.notifyMentions ?? true,
        notifyReplies: userState.notifyReplies ?? true,
        notifyReactions: userState.notifyReactions ?? false,
      }));
    }
  }, [userState]);

  const [isPreview, setIsPreview] = useState(false);
  const [isPreviewMaximized, setIsPreviewMaximized] = useState(false);

  const dossierRef = useRef(null);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passMessage, setPassMessage] = useState("");

  // ⚡ NEXUS: Stav pre uložené identity (siete)
  const [linkedIdentities, setLinkedIdentities] = useState([]);
  // 🛑 MASTER KILL-SWITCH (HARDWARE-SAFE PROTOCOL)
  const [matrixFxEnabled, setMatrixFxEnabled] = useState(false); // DEFAULTNE VYPNUTÉ!

  // 🎛️ ADVANCED CONTROL PANEL STATES (Záznam nastavení)
  const [fxAdvanced, setFxAdvanced] = useState({
    timing: "off", // Defaultne žiadna slučka
    audioEnabled: false,
    laser: false,
    lightning: false,
    crtGlitch: false,
    textScramble: false,
    empSurge: false,
    neuralCursor: false,
    dataCascade: false,
    focusShield: false,
  });

  // 1. Načítanie existujúcich nastavení po refreshi
  useEffect(() => {
    const savedFxSettings = localStorage.getItem("nexus_advanced_fx");
    if (savedFxSettings) {
      try {
        setFxAdvanced(JSON.parse(savedFxSettings));
      } catch (e) {
        console.error("🔥 Error parsing FX settings:", e);
      }
    }
  }, []);

  // 2. Real-time zápis pri každom zakliknutí
  const handleFxChange = (key, value) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    setFxAdvanced((prev) => {
      const nextState = { ...prev, [key]: value };
      localStorage.setItem("nexus_advanced_fx", JSON.stringify(nextState));

      // Odoslanie signálu do Siete, aby efekty zareagovali okamžite (bez F5)
      window.dispatchEvent(
        new CustomEvent("nexus_advanced_fx_changed", { detail: nextState }),
      );
      return nextState;
    });
  };
  // 1. Načítanie stavu vypínača z pamäte Skafandra (Default: ZAPNUTÉ)
  useEffect(() => {
    const savedFx = localStorage.getItem("nexus_matrix_fx");
    if (savedFx === "false") {
      setMatrixFxEnabled(false);
    } else {
      setMatrixFxEnabled(true);
    }
  }, []);

  // 2. Exekučný povel: Real-time zápis a varovný signál do Matrixu
  const handleToggleMatrixFx = () => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    const nextState = !matrixFxEnabled;
    setMatrixFxEnabled(nextState);
    localStorage.setItem("nexus_matrix_fx", nextState.toString());

    // Okamžitý bypass pre GlobalComponents (zhodí efekty BEZ reštartu webu)
    window.dispatchEvent(new Event("nexus_settings_updated"));
    window.dispatchEvent(new Event("nexus_matrix_fx_changed"));
  };
  // ⚡ LAPAČ SIGNÁLOV: Zmena pohľadu z Globálneho Hamburger Menu (Settings)
  useEffect(() => {
    const handleSwitchTab = (e) => {
      if (e.detail) {
        setActiveTab(e.detail);
        navigate(`/settings/${e.detail}`, { replace: true });
      }
    };
    window.addEventListener("nexus_switch_local_tab", handleSwitchTab);
    return () =>
      window.removeEventListener("nexus_switch_local_tab", handleSwitchTab);
  }, [navigate]);

  // ⚡ NEXUS: Načítanie už prepojených sociálnych sietí zo Supabase pri načítaní stránky
  useEffect(() => {
    const fetchIdentities = async () => {
      if (!userState) return;
      try {
        const {
          data: { user: currentUser },
        } = await supabase.auth.getUser();
        if (currentUser && currentUser.identities) {
          const providers = currentUser.identities.map((id) => id.provider);

          setLinkedIdentities(providers);
        }
      } catch (err) {
        console.error("Chyba pri načítaní identít zo Supabase:", err);
      }
    };

    fetchIdentities();

    // 🛡️ LAPAČ MATRIXU: Ak Supabase potvrdí prepojenie po návrate, okamžite prekresli zelenú fajfku
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "USER_UPDATED" || event === "SIGNED_IN") {
          fetchIdentities();
        }
      },
    );

    return () => {
      if (authListener?.subscription) authListener.subscription.unsubscribe();
    };
  }, [userState]);

  const [broadcastText, setBroadcastText] = useState("");
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [adminOperators, setAdminOperators] = useState([]);

  const dossierLimitStr = checkPermission(userTier, "dossier_limit");
  const MAX_DOSSIER_CHARS =
    parseInt(String(dossierLimitStr).replace(/\D/g, "")) * 1000 || 5000;

  // ⚡ NEXUS SONDY: Vylepšená detekcia hosťa (Guesta)
  const isGuestEntity =
    !userState ||
    userState.isGuest === true ||
    userState.tier === "QUEST" ||
    userState.email === "quest" ||
    userState.email === "NEXUS_GUEST" ||
    !userState.email;
  const isArchitect = userTier === "ARCHITECT";
  const isMaster = userTier === "MASTER";
  const isAdmin = userTier === "ADMIN";
  const canAdministrate = isArchitect || isAdmin || isMaster;

  const tierColor = getTierColor(userTier);

  // ⚡ EXODUS FIX (REZ B): Bezpečný Sync dát z databázy do formulára
  useEffect(() => {
    if (userState?.email && !userState.isGuest && userState.email !== "quest") {
      setFormData((prev) => {
        if (prev.email !== userState.email) {
          const safeState = { ...userState };
          Object.keys(safeState).forEach((key) => {
            if (safeState[key] === null) safeState[key] = "";
          });
          return { ...DEFAULT_FORM_DATA, ...safeState };
        }
        const merged = { ...prev };
        let hasChanges = false;
        Object.keys(userState).forEach((key) => {
          if (
            (prev[key] === "" || prev[key] === 0 || prev[key] === false) &&
            userState[key] !== null &&
            userState[key] !== undefined
          ) {
            merged[key] = userState[key];
            hasChanges = true;
          }
        });
        return hasChanges ? merged : prev;
      });
    }
  }, [userState]);

  // ⚡ EXODUS FIX: Zoznam operátorov pre administrátora sťahuje z mosta
  useEffect(() => {
    if (canAdministrate && activeTab === "auth_matrix") {
      const unsub = NexusDB.subscribeToAllUsers((ops) => {
        const tierRank = {
          ARCHITECT: 7,
          MASTER: 6,
          ADMIN: 5,
          MODERATOR: 4,
          OMEGA: 3,
          PRO: 2,
          FREE: 1,
          BANNED: 0,
        };
        const sortedOps = [...ops].sort(
          (a, b) =>
            (tierRank[b.tier || "FREE"] || 0) -
            (tierRank[a.tier || "FREE"] || 0),
        );
        setAdminOperators(sortedOps);
      });
      return () => unsub();
    }
  }, [canAdministrate, activeTab]);

  // ⚡ EXODUS FIX: Update dát delegovaný na most (OPRAVA CLOUD + LOCAL SYNC)
  const handleSave = async () => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();

    // 🟡 SONDA 1: Štart
    if (isGuestEntity || !userState?.email) {
      console.warn(
        "🔴 [SYNC SONDA] Zrušené: Operátor je Guest alebo chýba e-mail v userState.",
      );
      return;
    }

    if (formData.displayName) {
      const nameRegex = /^[a-zA-Z0-9_.-]{3,20}$/;
      if (!nameRegex.test(formData.displayName)) {
        if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
        alert(
          "🛑 SYSTEM ERROR: Neplatný formát pre Meno Operátora (Identitu).\n\nPovolené znaky: A-Z, 0-9, bodka (.), pomlčka (-) a podtržovník (_).\nZakázané: Medzery, diakritika (š, č, á), zátvorky.\nDĺžka: 3 až 20 znakov.\n\nPríklad: REVENUE_ARCHITECT",
        );
        return;
      }
    }

    setIsSaving(true);
    try {
      const newData = {
        displayName: (formData.displayName || "").trim(),
        dossier: (formData.dossier || "").trim(),
        avatar: (formData.avatar || "").trim(),
        diagnosis: (formData.diagnosis || "").trim(),
        medication: (formData.medication || "").trim(),
        www: (formData.www || "").trim(),
        phone: (formData.phone || "").trim(),
        facebook: (formData.facebook || "").trim(),
        google: (formData.google || "").trim(),
        youtube1: (formData.youtube1 || "").trim(),
        youtube2: (formData.youtube2 || "").trim(),
        tiktok: (formData.tiktok || "").trim(),
        instagram: (formData.instagram || "").trim(),
        whatsapp: (formData.whatsapp || "").trim(),
        tier: userState?.tier || "FREE",
        email: userState.email,

        notifyEmail: !!formData.notifyEmail,
        notifySMS: !!formData.notifySMS,
        blogAlerts: !!formData.blogAlerts,
        defaultUnreadFilter: !!formData.defaultUnreadFilter,

        // ⚡ PRIDANÉ PRE ZÁPIS DO DATABÁZY:
        notifyMentions: !!formData.notifyMentions,
        notifyReplies: !!formData.notifyReplies,
        notifyReactions: !!formData.notifyReactions,
      };

      // 1. ⚡ ZÁPIS DO CLOUDU CEZ MOST (Toto bol ten chýbajúci fragment!)
      await NexusDB.updateProfileData(userState.email, newData);

      // 2. ⚡ OKAMŽITÝ ZÁPIS DO LOKÁLNEJ PAMÄTE A REACT STAVU (Aby prežilo F5)
      if (setUserState) {
        setUserState((prev) => {
          const nextState = { ...prev, ...newData };
          localStorage.setItem(
            "nexus_active_identity",
            JSON.stringify(nextState),
          );
          return nextState;
        });
      }
      setSaveStatus("SUCCESS");
      if (typeof SoundFX !== "undefined" && SoundFX.success) SoundFX.success();
    } catch (e) {
      console.error("❌ [SYNC SONDA ERROR]: Chyba pri zápise do NexusDB!", e);
      setSaveStatus("ERROR");
      if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
    }
    setTimeout(() => {
      setIsSaving(false);
      setSaveStatus("");
    }, 3000);
  };

  const handleInputChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleBroadcast = async () => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    if (!broadcastText.trim()) return alert("⚠️ Správa nemôže byť prázdna.");
    if (
      !window.confirm(
        `Odoslať túto správu hromadne všetkým operátorom (${adminOperators.length} entít)?`,
      )
    )
      return;

    setIsBroadcasting(true);
    try {
      await NexusDB.broadcastSystemMessage(
        broadcastText.trim(),
        adminOperators,
      );
      setBroadcastText("");
      if (typeof SoundFX !== "undefined" && SoundFX.success) SoundFX.success();
      alert("✅ Hromadná správa bola úspešne odoslaná celej Sieti!");
    } catch (e) {
      alert("❌ Chyba pri odosielaní hromadnej správy.");
      if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
    }
    setIsBroadcasting(false);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();

    if (newPassword.length < 6) {
      setPassMessage("❌ Nové heslo musí mať aspoň 6 znakov.");
      return;
    }
    if (!oldPassword) {
      setPassMessage("❌ Zadajte vaše aktuálne (staré) heslo.");
      return;
    }
    try {
      // ⚡ EXODUS FIX: Zmena hesla cez Supabase
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.warn("🔴 [PASS SONDA] Supabase hlási, že user neexistuje.");
        setPassMessage("❌ Systém hlási: Užívateľ nie je overený.");
        return;
      }

      // 1. Overenie starého hesla
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: oldPassword,
      });

      if (signInError) {
        throw new Error("Staré heslo je nesprávne.");
      }

      // 2. Nastavenie nového hesla
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) {
        throw updateError;
      }

      setPassMessage("✅ Heslo bolo úspešne zmenené!");
      setOldPassword("");
      setNewPassword("");
      if (typeof SoundFX !== "undefined" && SoundFX.success) SoundFX.success();
      // console.log("🟢 [PASS SONDA] Zmena hesla v Supabase úspešná!");
    } catch (error) {
      console.error("❌ [PASS SONDA ERROR] Chyba pri zmene hesla:", error);
      setPassMessage("❌ " + (error.message || "Neznáma chyba"));
      if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
    }
    setTimeout(() => setPassMessage(""), 5000);
  };

  // ⚡ OBNOVA HAMBURGER MENU
  const handleRestoreMenu = () => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    localStorage.removeItem("nexus_hide_hamburger");
    alert(
      "Rýchly Navigačný Uzol bol úspešne obnovený! Systém sa teraz reštartuje.",
    );
    window.location.reload();
  };

  // 🛡️ NEXUS OAUTH PROTOKOL: Plynulý prechod Hosťa na plnú Entitu (Bypass Uplinku)
  const handleOAuthLink = async (providerName) => {
    // ⚡⚡⚡ BOJOVÝ PING: AK TOTO NEVYSKOČÍ, CHYBA JE V KOMPILÁCII ALEBO BINDINGU! ⚡⚡⚡
    alert(`📡 PING DETEGUTÝ PRE: ${providerName}`);
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();

    // Bezpečné vyhodnotenie Quest stavu z userState propu
    const isGuest = userState?.isGuest || false;

    if (isGuest) {
      console.warn(
        "⚠️ [NEXUS SECURITY]: Pokus o prepojenie OAuth zablokovaný. Hosť nemá permanentnú identitu.",
      );
      alert(
        "⚠️ Ako Quest (Hosť) sa musíte najprv zaregistrovať (vytvoriť e-mail a heslo v sekcii Registračné údaje) a až potom si môžete úspešne pripojiť ďalšie účty.",
      );
      setActiveTab("registration");
      return;
    }

    try {
      const redirectUrl = `${window.location.origin}/settings/login_connections`;
      console.log(
        `🔗 [NEXUS SSO]: Smerujem návratový uplink na: ${redirectUrl}`,
      );

      const { data, error } = await supabase.auth.linkIdentity({
        provider: providerName,
        options: {
          redirectTo: redirectUrl,
        },
      });

      if (error) {
        console.error(
          `🔴 [NEXUS OAUTH ERROR]: Chyba linkovania:`,
          error.message,
        );
        alert(`Chyba prepojenia: ${error.message}`);
        return;
      }

      console.log(
        "🟢 [NEXUS OAUTH SUCCESS]: Handshake úspešne inicializovaný.",
      );
    } catch (err) {
      console.error(
        "🚨 [NEXUS OAUTH FATAL]: Zlyhanie zbernice pri OAuth prepojení:",
        err,
      );
    }
  };

  // 🛡️ NEXUS OAUTH PROTOKOL: Odpojenie (Unlink) existujúcej siete
  const handleOAuthUnlink = async (providerName) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    console.log(`📡 [NEXUS OAUTH]: Odpájam providera: ${providerName}`);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const identity = user?.identities?.find(
        (id) => id.provider === providerName,
      );

      if (!identity) {
        alert("⚠️ Táto prepojená identita nebola v Skafandri nájdená.");
        return;
      }

      const { error } = await supabase.auth.unlinkIdentity(identity);

      if (error) {
        console.error(
          `🔴 [NEXUS OAUTH ERROR]: Chyba odpojenia:`,
          error.message,
        );
        alert(`Chyba odpojenia: ${error.message}`);
        return;
      }

      alert(`🟢 Účet ${providerName} bol úspešne odpojený od vášho profilu.`);
      window.location.reload();
    } catch (err) {
      console.error(
        "🚨 [NEXUS OAUTH FATAL]: Zlyhanie pri odpájaní identity:",
        err,
      );
    }
  };
  // 🛡️ ADMIN PROTOKOL: Pred-registrácia nových entít do Matrixu
  const adminPreRegister = async () => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();

    const newEmail = window.prompt("Zadajte presný E-MAIL pre novú entitu:");
    if (!newEmail) return;

    const cleanEmail = newEmail.trim().toLowerCase();
    const newTier = window.prompt(
      "Zadajte počiatočný TIER (FREE, PRO, OMEGA, MODERATOR, ADMIN, MASTER, ARCHITECT):",
      "PRO",
    );
    if (!newTier) return;

    try {
      // console.log(
      //   `[ADMIN_LOG]: Zápis novej entity: ${cleanEmail} | TIER: ${newTier.trim().toUpperCase()}`,
      // );
      await NexusDB.preRegisterEntity(cleanEmail, newTier.trim().toUpperCase());

      if (typeof SoundFX !== "undefined" && SoundFX.success) SoundFX.success();
      alert(
        `✅ [MATRIX SYNC]: Entita [ ${cleanEmail} ] úspešne pred-registrovaná do Matrixu.`,
      );
    } catch (e) {
      console.error("[ADMIN_ERROR]:", e);
      if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
      alert("⚠️ [FATAL ERROR]: Chyba pri vytváraní záznamu.");
    }
  };

  const adminPromote = async (op) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    if (op.tier === "BANNED")
      return alert("Operátor je zabanovaný. Najprv vykonajte UNBAN.");
    if (op.tier === "ARCHITECT")
      return alert("Tento operátor už má najvyššiu možnú rolu (ARCHITECT).");
    if (op.tier === "MASTER")
      return alert("Úroveň MASTER je najvyššia, ktorú možno udeliť.");

    const tiers = ["FREE", "PRO", "OMEGA", "MODERATOR", "ADMIN", "MASTER"];
    const currentIdx = tiers.indexOf(op.tier || "FREE");
    const nextTier = tiers[(currentIdx + 1) % tiers.length];

    if (
      window.confirm(
        `Povrdiť POVÝŠENIE operátora ${op.email} na úroveň [ ${nextTier} ]?`,
      )
    ) {
      try {
        await NexusDB.updateUserTier(op.id, nextTier);
        alert(
          `✅ Operátor [ ${op.email} ] bol úspešne povýšený na ${nextTier}`,
        );
      } catch (e) {
        console.error(e);
        alert(`❌ Zlyhalo povýšenie: ${e.message}`);
      }
    }
  };

  const adminDemote = async (op) => {
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    if (op.tier === "BANNED")
      return alert("Zabanovaný operátor. Ďalšie zníženie nie je možné.");
    if (op.tier === "ARCHITECT" && userTier !== "ARCHITECT")
      return alert("Nemáte oprávnenie degradovať entitu ARCHITECT.");

    const tiers = ["FREE", "PRO", "OMEGA", "MODERATOR", "ADMIN", "MASTER"];
    let nextTier = "FREE";

    if (op.tier === "ARCHITECT") nextTier = "MASTER";
    else {
      const currentIdx = tiers.indexOf(op.tier || "FREE");
      if (currentIdx === 0) return alert("Entita má už základný FREE TIER.");
      nextTier = tiers[currentIdx - 1];
    }

    if (
      window.confirm(
        `Povrdiť ZNÍŽENIE TIERu pre operátora ${op.email} na úroveň [ ${nextTier} ]?`,
      )
    ) {
      try {
        await NexusDB.updateUserTier(op.id, nextTier);
        alert(`✅ TIER operátora [ ${op.email} ] bol znížený na ${nextTier}`);
      } catch (e) {
        console.error(e);
        alert(`❌ Zlyhalo zníženie: ${e.message}`);
      }
    }
  };

  const adminBan = async (op) => {
    if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
    if (op.tier === "ARCHITECT" && userTier !== "ARCHITECT")
      return alert("Nemáte oprávnenie zabanovať entitu ARCHITECT.");

    const isBanned = op.tier === "BANNED";
    if (
      window.confirm(
        isBanned
          ? `OBNOVIŤ prístup pre operátora ${op.email}?`
          : `Trvalo ZABANOVAŤ operátora ${op.email}?`,
      )
    ) {
      try {
        await NexusDB.updateUserTier(op.id, isBanned ? "FREE" : "BANNED");
        alert(isBanned ? `✅ Entita ODBLOKOVANÁ.` : `🚨 Entita ZABANOVANÁ.`);
      } catch (e) {
        console.error(e);
        alert(`❌ Zlyhalo udelenie BANu: ${e.message}`);
      }
    }
  };

  const adminDelete = async (op) => {
    if (typeof SoundFX !== "undefined" && SoundFX.error) SoundFX.error();
    if (
      window.confirm(
        `VAROVANIE: Naozaj chcete TRVALO VYMAZAŤ operátora ${op.email}?`,
      )
    ) {
      try {
        await NexusDB.deleteUserRecord(op.id);
        alert(`🗑️ Entita [ ${op.email} ] bola trvalo vymazaná z Matrixu.`);
      } catch (e) {
        console.error(e);
        alert(`❌ Zlyhal výmaz: ${e.message}`);
      }
    }
  };

  const insertFormat = (format, e) => {
    if (e) e.preventDefault();
    if (typeof SoundFX !== "undefined" && SoundFX.click) SoundFX.click();
    const textarea = dossierRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.dossier;
    const selectedText = text.substring(start, end);
    const savedScrollTop = textarea.scrollTop;
    let before = "",
      after = "",
      replaceWith = null;

    if (format === "image") {
      const url = window.prompt("Zadaj URL obrázka:", "https://");
      if (url) {
        before = `![Obrázok](${url})`;
        replaceWith = before;
      } else return;
    } else if (format === "link") {
      const url = window.prompt("Zadaj URL:", "https://");
      const name = window.prompt("Názov odkazu:", selectedText || "Klikni sem");
      if (url && name) replaceWith = `[${name}](${url})`;
      else return;
    } else if (format === "embed") {
      const url = window.prompt("Zadaj URL adresu videa:", "https://");
      if (url) {
        before = `[embed]${url}[/embed]`;
        replaceWith = before;
      } else return;
    } else if (format === "color") {
      const color = window.prompt(
        "Zadaj farbu v HEX kóde alebo anglicky (napr. red):",
        "#39FF14",
      );
      if (color) {
        before = `[color=${color}]`;
        after = "[/color]";
      } else return;
    } else if (format === "size") {
      const size = window.prompt("Zadaj veľkosť písma v pixeloch:", "20");
      if (size) {
        before = `[size=${size}]`;
        after = "[/size]";
      } else return;
    } else if (format === "font") {
      const font = window.prompt("Zadaj názov písma:", "monospace");
      if (font) {
        before = `[font=${font}]`;
        after = "[/font]";
      } else return;
    } else if (format === "spoiler") {
      const spoilerTitle = window.prompt(
        "Zadaj nadpis pre zbalený text:",
        "Zobraziť skryté dáta",
      );
      if (spoilerTitle) {
        before = `\n[spoiler="${spoilerTitle}"]\n`;
        after = "\n[/spoiler]\n";
      } else return;
    } else if (format === "header") {
      const hText = window.prompt(
        "Zadaj text nadpisu:",
        selectedText || "Môj Nadpis",
      );
      if (hText) replaceWith = `\n### ${hText}\n`;
      else return;
    } else {
      switch (format) {
        case "bold":
          before = "**";
          after = "**";
          break;
        case "italic":
          before = "*";
          after = "*";
          break;
        case "underline":
          before = "[u]";
          after = "[/u]";
          break;
        case "strike":
          before = "~~";
          after = "~~";
          break;
        case "alignLeft":
          before = "[align=left]";
          after = "[/align]";
          break;
        case "alignCenter":
          before = "[align=center]";
          after = "[/align]";
          break;
        case "alignRight":
          before = "[align=right]";
          after = "[/align]";
          break;
        case "justify":
          before = "[align=justify]";
          after = "[/align]";
          break;
        case "list":
          if (selectedText)
            replaceWith = selectedText
              .split("\n")
              .map((l) => `- ${l}`)
              .join("\n");
          else before = "\n- Položka 1\n- Položka 2\n";
          break;
        case "listOrd":
          if (selectedText)
            replaceWith = selectedText
              .split("\n")
              .map((l, i) => `${i + 1}. ${l}`)
              .join("\n");
          else before = "\n1. Položka 1\n2. Položka 2\n";
          break;
        case "break":
          before = "\n---\n";
          break;
        case "quote":
          before = "\n> ";
          break;
        case "code":
          before = "\n```\n";
          after = "\n```\n";
          break;
        case "hidden":
          before = "[hide]";
          after = "[/hide]";
          break;
        case "table":
          before =
            "\n| Hlavička 1 | Hlavička 2 |\n|---|---|\n| Dáta 1 | Dáta 2 |\n";
          break;
        case "date":
          replaceWith = new Date().toLocaleDateString("sk-SK");
          break;
        case "time":
          replaceWith = new Date().toLocaleTimeString("sk-SK");
          break;
        case "clear":
          replaceWith = selectedText.replace(/[\*\~\_\[\]<>\\/]/g, "");
          break;
        default:
          return;
      }
    }
    let newText =
      replaceWith !== null
        ? text.substring(0, start) + replaceWith + text.substring(end)
        : text.substring(0, start) +
          before +
          selectedText +
          after +
          text.substring(end);
    handleInputChange("dossier", newText);
    setTimeout(() => {
      textarea.focus();
      const newCursorPos =
        replaceWith !== null
          ? start + replaceWith.length
          : start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.scrollTop = savedScrollTop;
    }, 10);
  };

  const editorTools = [
    { id: "bold", icon: <Bold size={14} />, title: "Tučné" },
    { id: "italic", icon: <Italic size={14} />, title: "Kurzíva" },
    { id: "underline", icon: <Underline size={14} />, title: "Podčiarknuté" },
    { id: "strike", icon: <Strikethrough size={14} />, title: "Prečiarknuté" },
    { id: "alignLeft", icon: <AlignLeft size={14} />, title: "Zarovnať vľavo" },
    {
      id: "alignCenter",
      icon: <AlignCenter size={14} />,
      title: "Zarovnať na stred",
    },
    {
      id: "alignRight",
      icon: <AlignRight size={14} />,
      title: "Zarovnať vpravo",
    },
    { id: "justify", icon: <AlignJustify size={14} />, title: "Do bloku" },
    { id: "list", icon: <List size={14} />, title: "Odrážky" },
    { id: "listOrd", icon: <ListOrdered size={14} />, title: "Číslovanie" },
    {
      id: "break",
      icon: <CornerDownLeft size={14} />,
      title: "Oddeľovacia čiara",
    },
    { id: "quote", icon: <Quote size={14} />, title: "Citácia" },
    { id: "code", icon: <Code size={14} />, title: "Vložiť kód" },
    {
      id: "spoiler",
      icon: <ShieldAlert size={14} />,
      title: "Spoiler s nadpisom",
    },
    { id: "hidden", icon: <EyeOff size={14} />, title: "Skrytý text (Hide)" },
    { id: "table", icon: <Table size={14} />, title: "Tabuľka" },
    { id: "image", icon: <ImageIcon size={14} />, title: "Obrázok z URL" },
    { id: "link", icon: <Link size={14} />, title: "Odkaz (URL)" },
    { id: "embed", icon: <Film size={14} />, title: "Externé video" },
    { id: "header", icon: <Heading size={14} />, title: "Nadpis" },
    { id: "size", icon: <Type size={14} />, title: "Veľkosť písma" },
    { id: "color", icon: <Palette size={14} />, title: "Farba textu" },
    { id: "font", icon: <Type size={14} />, title: "Typ písma" },
    { id: "clear", icon: <Eraser size={14} />, title: "Zmazať formátovanie" },
    { id: "date", icon: <Calendar size={14} />, title: "Vložiť dnešný dátum" },
    { id: "time", icon: <Clock size={14} />, title: "Vložiť aktuálny čas" },
  ];

  const tabs = [
    {
      id: "registration",
      label: "Registračné údaje",
      icon: <User size={16} />,
    },
    {
      id: "login_connections",
      label: "Správa Identít (SSO)",
      icon: <Globe size={16} />,
    },
    { id: "dossier", label: "Dossier Editor", icon: <FileText size={16} /> },
    { id: "health", label: "Zdravotný stav", icon: <HeartPulse size={16} /> },
    { id: "contacts", label: "Contact field", icon: <Share2 size={16} /> },
    { id: "wallet", label: "Peňaženka", icon: <Wallet size={16} /> },
    { id: "permissions", label: "Oprávnenia", icon: <Key size={16} /> },
    { id: "notifications", label: "Notifikácie", icon: <Bell size={16} /> },
  ];

  if (canAdministrate) {
    tabs.push({
      id: "auth_matrix",
      label: "Auth Matrix (Admin)",
      icon: <ShieldAlert size={16} />,
    });
  }

  // Helper funkcia pre vyčistenie zložitých backtickov pre VS Code
  const getTabClass = (tabId) => {
    let base =
      "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest text-left ";
    if (activeTab === tabId) {
      return (
        base +
        (tabId === "auth_matrix"
          ? `bg-[${tierColor}]/20 text-[${tierColor}] border border-[${tierColor}]/50 shadow-lg scale-[1.02]`
          : "bg-white/10 text-white shadow-lg scale-[1.02]")
      );
    } else {
      return (
        base +
        (tabId === "auth_matrix"
          ? `text-[${tierColor}]/50 hover:bg-[${tierColor}]/10 hover:text-[${tierColor}]`
          : "text-white/40 hover:bg-white/5 hover:text-white")
      );
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-left w-full pb-32 overflow-x-hidden">
      {GlobalProfil && (
        <GlobalProfil
          isOpen={isPreview}
          onClose={() => setIsPreview(false)}
          isMaximized={isPreviewMaximized}
          onToggleMaximize={() => setIsPreviewMaximized(!isPreviewMaximized)}
          profileData={{ ...formData, tier: userTier }}
          title="Živý Náhľad Dossieru"
        />
      )}

      {/* 💜 UNIFIKOVANÝ 1:1 OPERATORS-STYLE HEADER PRE SETTINGS */}
      <SettingsHeaderComponent
        themeColor={themeColor || "#8A2BE2"}
        onThemeChange={onThemeChange}
      />


      {/* 🚀 HLAVIČKA NASTAVENÍ (1:1 OPERATORS UI SHAPE & LAYOUT) */}
      <header className="mb-8 md:mb-12 border-b border-white/10 pb-6 md:pb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10 w-full">
        {/* ĽAVÁ STRANA: POPIS UZLA A TITUL */}
        <div className="space-y-3 max-w-2xl text-left">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border"
            style={{
              borderColor: `${themeColor || "#8A2BE2"}40`,
              backgroundColor: `${themeColor || "#8A2BE2"}10`,
              color: themeColor || "#8A2BE2",
            }}
          >
            <Terminal size={14} className="animate-pulse" />
            CORE_SETUP_TERMINAL // V20.95
          </div>

          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none flex items-center gap-3">
            <Settings
              className="w-8 h-8 md:w-12 md:h-12"
              style={{ color: themeColor || "#8A2BE2" }}
            />
            NEXUS{" "}
            <span
              style={{
                color: themeColor || "#8A2BE2",
                filter: `drop-shadow(0 0 15px ${themeColor || "#8A2BE2"}80)`,
              }}
            >
              CORE
            </span>
          </h1>

          <p className="text-sm text-zinc-400 font-sans leading-relaxed">
            Profil Operátora & Systémové Práva OS Genesis. Konfigurácia systémových nastavení, Auth Matrix preverovanie a synchronizácia dát v reálnom čase.
          </p>
        </div>

        {/* PRAVÁ STRANA: EXEKUTÍVNE TLAČIDLO SYNC MATRIX */}
        <div className="flex items-center gap-4 w-full lg:w-auto flex-wrap justify-center lg:justify-end relative">
          <button
            type="button"
            onClick={handleSave}
            disabled={isGuestEntity || activeTab === "auth_matrix" || isSaving}
            className="relative group flex-1 lg:flex-none flex items-center justify-center gap-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 px-8 py-4 rounded-2xl transition-all shadow-lg font-black uppercase tracking-widest text-[11px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              boxShadow: `0 0 20px ${themeColor || "#8A2BE2"}25`,
            }}
          >
            {isSaving ? (
              <Activity size={18} className="animate-spin text-purple-400" />
            ) : (
              <Save
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            )}
            {saveStatus === "SUCCESS"
              ? "Synced!"
              : saveStatus === "ERROR"
                ? "Failed"
                : "Sync Matrix"}

            {TooltipHover && (
              <TooltipHover
                text="Trvalo uložiť všetky lokálne zmeny do Cloud Matrixu."
                dimColor={tierColor || themeColor || "#8A2BE2"}
                position="bottom"
                align="right"
              />
            )}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full relative mb-16">
        {/* ⚡ OPRAVA 1: Zmazaná podmienka isSidebarOpen. 
            Teraz je panel na mobile skrytý (hidden) a na desktope viditeľný (lg:block lg:col-span-3) */}
        <div className="hidden lg:block lg:col-span-3 w-full">
          <div className="lg:sticky lg:top-32 space-y-1">
            <div className="p-4 border-b border-white/5 mb-4 hidden lg:block">
              <div className="text-[10px] uppercase font-black tracking-[4px] text-white/40">
                System Menu
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-1 custom-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (typeof SoundFX !== "undefined" && SoundFX.click)
                      SoundFX.click();
                    setActiveTab(tab.id); // 1. Okamžitá odozva pre zafarbenie tlačidla
                    navigate(`/settings/${tab.id}`, { replace: true }); // 2. Zápis do URL (Deep Linking)
                  }}
                  className={getTabClass(tab.id)}
                  style={
                    tab.id !== "auth_matrix"
                      ? {
                          borderLeft:
                            activeTab === tab.id
                              ? `3px solid ${tierColor}`
                              : "3px solid transparent",
                        }
                      : {
                          borderColor:
                            activeTab === "auth_matrix"
                              ? tierColor
                              : "transparent",
                          color: activeTab === "auth_matrix" ? tierColor : "",
                        }
                  }
                >
                  <span className={activeTab === tab.id ? "" : "opacity-50"}>
                    {tab.icon}
                  </span>
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-9 w-full min-w-0">
          <div
            className={`bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-6 md:p-10 shadow-2xl relative min-h-[500px] ${activeTab === "auth_matrix" ? "shadow-[0_0_30px_rgba(255,102,0,0.1)]" : ""}`}
            style={{
              borderColor: activeTab === "auth_matrix" ? `${tierColor}40` : "",
            }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
              <div
                className="absolute -right-20 -top-20 w-80 h-80 blur-[100px] rounded-full opacity-10"
                style={{ backgroundColor: tierColor }}
              />
            </div>

            <h2
              id="nexus-settings-preregister"
              className="text-2xl font-black uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4 relative z-10 flex items-center justify-between gap-4 w-full"
            >
              <div className="flex items-center gap-4">
                {tabs.find((t) => t.id === activeTab)?.icon}{" "}
                {tabs.find((t) => t.id === activeTab)?.label}
              </div>
              {activeTab === "auth_matrix" && (
                <button
                  onClick={adminPreRegister}
                  className="bg-[#00FFFF]/10 border border-[#00FFFF]/30 hover:bg-[#00FFFF]/20 text-[#00FFFF] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                >
                  <PlusCircle size={14} /> Pred-registrovať Entitu
                </button>
              )}
            </h2>

            <div className="relative z-10 w-full">
              {activeTab === "registration" && (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex flex-col md:flex-row gap-8 items-start border-b border-white/5 pb-8">
                    <div
                      className="w-32 h-32 md:w-40 md:h-40 bg-black border-2 rounded-2xl p-2 shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(57,255,20,0.15)] relative group"
                      style={{ borderColor: tierColor }}
                    >
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${formData.email || "NEXUS_GUEST"}&bgcolor=000000&color=39FF14`}
                        alt="Nexus ID QR"
                        className="w-full h-full object-contain rounded-xl opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                      />
                      <TooltipHover
                        text={`Unikátny vizuálny hash vygenerovaný z vášho emailu: ${formData.email}`}
                        dimColor={tierColor}
                        position="bottom"
                        align="left"
                      />
                    </div>

                    <div
                      id="nexus-settings-user"
                      className="flex flex-col gap-2 w-full"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-lg font-black uppercase text-white tracking-widest flex items-center gap-3">
                          <QrCode size={18} style={{ color: tierColor }} />{" "}
                          Nexus ID Card
                        </h3>

                        <button
                          onClick={() => {
                            if (typeof SoundFX !== "undefined" && SoundFX.click)
                              SoundFX.click();
                            // Prečistenie relácie a odhlásenie
                            localStorage.removeItem("nexus_active_identity");
                            if (typeof setUserState === "function") {
                              setUserState({ isGuest: true, tier: "QUEST" });
                            }
                            // Presmerovanie na prihlasovací portál /login
                            if (typeof navigate === "function") {
                              navigate("/login");
                            } else {
                              window.location.href = "/login";
                            }
                          }}
                          className="relative group flex items-center gap-2 bg-[#00f3ff]/10 hover:bg-[#00f3ff] text-[#00f3ff] hover:text-black border border-[#00f3ff]/30 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_0_12px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] cursor-pointer"
                        >
                          <LogIn size={14} /> Prihlásiť Účet
                          <TooltipHover
                            text="Odhlási súčasného operátora, prečistí aktívnu reláciu a otvorí prihlasovací portál Matrixu (/login)."
                            dimColor="#00f3ff"
                            position="bottom"
                            align="right"
                          />
                        </button>
                      </div>
                      <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                        Unikátny biometrický kód pre rýchlu identifikáciu v
                        sieti.
                      </p>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative group">
                          <label className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-2 flex items-center gap-2">
                            Užívateľ / Meno{" "}
                            <Info size={10} className="text-[#39FF14]" />
                          </label>
                          <input
                            type="text"
                            value={formData.displayName}
                            onChange={(e) =>
                              handleInputChange("displayName", e.target.value)
                            }
                            disabled={isGuestEntity}
                            placeholder="Zadaj Meno_Alebo_Oznacenie"
                            className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white font-mono text-sm focus:border-[#39FF14]/50 outline-none transition-colors"
                          />
                          <p className="text-[9px] text-white/30 mt-2 font-mono uppercase">
                            Žiadne medzery, diakritika, zátvorky. Použi "_"
                            alebo "-".
                          </p>
                          <TooltipHover
                            text="Striktný formát: A-Z, 0-9. Týmto menom ťa označujú iní operátori na Blogu (Zavináč Engine)."
                            dimColor="#39FF14"
                            position="bottom"
                            align="left"
                          />
                        </div>
                        <div className="relative group">
                          <label className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-2 flex items-center gap-2">
                            System E-Mail (ID Entity){" "}
                            <Info size={10} className="text-[#39FF14]" />
                          </label>
                          <input
                            type="text"
                            readOnly
                            value={formData.email || "ANONYMOUS_SESSION"}
                            className="w-full bg-black/40 border border-white/5 rounded-xl p-4 text-white/40 font-mono text-xs outline-none cursor-not-allowed"
                          />
                          <TooltipHover
                            text="Tento e-mail sa nedá zmeniť. V Matrixe slúži ako pevný root kľúč k tvojej entite a dátam."
                            dimColor="#39FF14"
                            position="bottom"
                            align="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ZMENA HESLA */}

                  <div
                    id="nexus-settings-password"
                    className="border-b border-white/5 pb-8"
                  >
                    <label className="text-[10px] uppercase font-black text-[#39FF14] tracking-widest mb-4 flex items-center gap-2">
                      <Key size={14} /> Zmena Systémového Hesla
                    </label>
                    <form
                      onSubmit={handlePasswordChange}
                      className="flex flex-col gap-4 bg-black/40 border border-white/5 p-6 rounded-[2rem] shadow-inner relative"
                    >
                      <div className="relative w-full">
                        <input
                          type={showOldPassword ? "text" : "password"}
                          value={oldPassword}
                          autoComplete="current-password"
                          onChange={(e) => setOldPassword(e.target.value)}
                          disabled={isGuestEntity}
                          placeholder="Aktuálne (Staré) Heslo"
                          className="w-full bg-black/80 border border-white/10 rounded-xl p-4 pr-12 text-white font-mono text-sm focus:border-[#39FF14]/50 outline-none transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                        >
                          {showOldPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                      <div className="relative w-full">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          autoComplete="new-password"
                          onChange={(e) => setNewPassword(e.target.value)}
                          disabled={isGuestEntity}
                          placeholder="Nové Heslo (Min. 6 znakov)"
                          className="w-full bg-black/80 border border-white/10 rounded-xl p-4 pr-12 text-white font-mono text-sm focus:border-[#39FF14]/50 outline-none transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                        >
                          {showNewPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                      <button
                        type="submit"
                        disabled={isGuestEntity}
                        className="w-full px-8 py-4 bg-white/5 hover:bg-[#39FF14] hover:text-black border border-white/10 hover:border-[#39FF14] text-white font-black uppercase tracking-widest text-[10px] rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg mt-2"
                      >
                        Potvrdiť Zmenu Hesla
                      </button>
                      {passMessage && (
                        <p
                          className={`mt-2 text-[10px] font-black uppercase tracking-widest text-center ${passMessage.includes("✅") ? "text-[#39FF14]" : "text-[#FF003C] animate-pulse"}`}
                        >
                          {passMessage}
                        </p>
                      )}
                    </form>
                  </div>

                  {/* ⚡ OBNOVA RÝCHLEHO NAVIGAČNÉHO UZLA */}
                  <div
                    id="nexus-settings-menu"
                    className="mt-8 p-6 bg-black/40 border border-blue-500/20 rounded-2xl flex flex-col items-start gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <Menu size={18} className="text-blue-500" />
                      <h3 className="text-[12px] font-black uppercase tracking-widest text-white/70">
                        Rýchly Navigačný Uzol
                      </h3>
                    </div>
                    <p className="text-[10px] text-white/40 tracking-widest uppercase">
                      Ak ste vypli plávajúce Hamburger Menu vľavo dole, týmto
                      príkazom ho znovu inicializujete.
                    </p>
                    <button
                      onClick={handleRestoreMenu}
                      className="px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border border-blue-500/30 hover:border-blue-500/50 transition-all rounded-xl font-black uppercase text-[10px] tracking-widest"
                    >
                      Aktivovať Menu (Reštart UI)
                    </button>
                  </div>
                  {/* ⚡ MASTER KILL-SWITCH & CONTROL PANEL (HARDWARE-SAFE) */}
                  <div
                    id="nexus-settings-fx"
                    className={`mt-8 p-6 bg-black/40 border rounded-2xl flex flex-col items-start gap-4 transition-colors duration-500 ${matrixFxEnabled ? "border-[#39FF14]/30" : "border-red-500/30"}`}
                  >
                    {/* VRCHNÁ ČASŤ: MASTER VYPÍNAČ */}
                    <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <Activity
                            size={18}
                            className={
                              matrixFxEnabled
                                ? "text-[#39FF14]"
                                : "text-red-500"
                            }
                          />
                          <h3 className="text-[12px] font-black uppercase tracking-widest text-white/70">
                            Matrix FX (Ovládanie Anomálií)
                          </h3>
                        </div>
                        <p className="text-[10px] text-white/40 tracking-widest uppercase max-w-lg">
                          Hlavný vypínač a sekvenčný ovládač pre vizuálne a
                          zvukové anomálie Nexusu.
                        </p>
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggleMatrixFx();
                        }}
                        className={`shrink-0 px-6 py-3 border transition-all rounded-xl font-black uppercase text-[10px] tracking-widest w-full md:w-auto ${matrixFxEnabled ? "bg-[#39FF14]/10 hover:bg-[#39FF14]/20 text-[#39FF14] border-[#39FF14]/30 hover:border-[#39FF14]/50 shadow-[0_0_15px_rgba(57,255,20,0.1)]" : "bg-red-500/10 hover:bg-red-500/20 text-red-500 border-red-500/30 hover:border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]"}`}
                      >
                        {matrixFxEnabled
                          ? "Deaktivovať Celý Matrix FX"
                          : "Aktivovať Efekty (CyberPunk Mód)"}
                      </button>
                    </div>

                    {/* SPODNÁ ČASŤ: ADVANCED CONTROL PANEL */}
                    {matrixFxEnabled && (
                      <div className="w-full mt-4 pt-6 border-t border-white/5 flex flex-col gap-6 animate-in fade-in duration-500">
                        {/* 🎛️ ZVUK & ČASOVANIE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-black/50 p-4 rounded-xl border border-white/5 flex flex-col justify-center gap-2 group hover:border-[#39FF14]/30 transition-colors">
                            <div className="flex justify-between items-center">
                              <label className="text-[10px] uppercase tracking-widest text-[#39FF14] font-bold">
                                Native Audio FX
                              </label>
                              <input
                                type="checkbox"
                                checked={fxAdvanced.audioEnabled}
                                onChange={(e) =>
                                  handleFxChange(
                                    "audioEnabled",
                                    e.target.checked,
                                  )
                                }
                                className="accent-[#39FF14] w-4 h-4 cursor-pointer"
                              />
                            </div>
                            <p className="text-[9px] text-white/30 uppercase tracking-widest">
                              Aktivuje systémové pípnutia a Bass-Dropy pri
                              anomáliách.
                            </p>
                          </div>

                          <div className="bg-black/50 p-4 rounded-xl border border-white/5 flex flex-col justify-center gap-2 group hover:border-blue-400/30 transition-colors">
                            <label className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
                              Časovanie Slučky
                            </label>
                            <select
                              value={fxAdvanced.timing}
                              onChange={(e) =>
                                handleFxChange("timing", e.target.value)
                              }
                              className="bg-transparent border-b border-white/10 text-white text-[10px] uppercase tracking-widest py-1 outline-none focus:border-blue-400 cursor-pointer"
                            >
                              <option value="showcase" className="bg-[#050505]">
                                Showcase (Minimálne - 42s)
                              </option>
                              <option value="5" className="bg-[#050505]">
                                Každých 5 Minút
                              </option>
                              <option value="15" className="bg-[#050505]">
                                Každých 15 Minút
                              </option>
                              <option value="30" className="bg-[#050505]">
                                Každých 30 Minút
                              </option>
                              <option value="60" className="bg-[#050505]">
                                Každých 60 Minút
                              </option>
                              <option value="random" className="bg-[#050505]">
                                Random (Chaos Mód)
                              </option>
                            </select>
                          </div>
                        </div>

                        {/* 🧩 8 EFEKTOV (VŠETKY SÚ PLATENÉ) */}
                        {[
                          {
                            id: "laser",
                            name: "Biometric Scan (Laser)",
                            isFree: false,
                          },
                          {
                            id: "lightning",
                            name: "Network Short Circuit",
                            isFree: false,
                          },
                          {
                            id: "crtGlitch",
                            name: "CRT Signal Interference",
                            isFree: false,
                          },
                          {
                            id: "textScramble",
                            name: "Decrypting Data Nodes",
                            isFree: false,
                          },
                          {
                            id: "empSurge",
                            name: "EMP Power Surge",
                            isFree: false,
                          },
                          {
                            id: "neuralCursor",
                            name: "Neural Link Cursor",
                            isFree: false,
                          },
                          {
                            id: "dataCascade",
                            name: "Matrix Data Overflow",
                            isFree: false,
                          },
                          {
                            id: "focusShield",
                            name: "Cognitive Shield Active",
                            isFree: false,
                          },
                        ].map((fx) => {
                          // 🛡️ THE CONSTITUTION PROTOCOL: Striktný Paywall pre UI Nastavení

                          // 1. BEZPEČNOSTNÝ ŠTÍT (Fix proti pádom a -0 OC slučke)
                          let safeUnlocked = [];
                          try {
                            const rawNodes =
                              userState?.unlockedNodes ||
                              userState?.unlocked_nodes ||
                              [];
                            safeUnlocked = Array.isArray(rawNodes)
                              ? rawNodes
                              : JSON.parse(rawNodes || "[]");
                          } catch (err) {
                            safeUnlocked = [];
                          }
                          const unlocked = safeUnlocked;

                          // 👑 GOD MODE: Architekt vidí a ovláda všetko
                          const isArchitect = userState?.tier === "ARCHITECT";

                          // 2. Zlatý kľúč (Master Key)
                          const hasMasterKey =
                            unlocked.includes("NEXUS_MASTER_KEY");

                          // 3. Kúpený celý OMEGA BUNDLE
                          const hasFxBundle = unlocked.some((node) =>
                            String(node)
                              .toUpperCase()
                              .includes("MATRIX_FX_BUNDLE"),
                          );

                          // 4. INTELIGENTNÁ DETEKCIA (Prekladač Shop kľúčov na Settings ID)
                          const hasSingleNode = unlocked.some((node) => {
                            const n = String(node).toLowerCase();
                            if (fx.id === "laser")
                              return (
                                n.includes("laser") ||
                                n.includes("biometric") ||
                                n.includes("kampan-23")
                              );
                            if (fx.id === "lightning")
                              return (
                                n.includes("lightning") ||
                                n.includes("network") ||
                                n.includes("kampan-24")
                              );
                            if (fx.id === "crtGlitch")
                              return (
                                n.includes("crt") ||
                                n.includes("glitch") ||
                                n.includes("kampan-25")
                              );
                            if (fx.id === "empSurge")
                              return (
                                n.includes("emp") ||
                                n.includes("power") ||
                                n.includes("kampan-26")
                              );
                            if (fx.id === "textScramble")
                              return (
                                n.includes("scramble") ||
                                n.includes("decrypting") ||
                                n.includes("kampan-27")
                              );
                            if (fx.id === "dataCascade")
                              return (
                                n.includes("cascade") ||
                                n.includes("overflow") ||
                                n.includes("kampan-28")
                              );
                            if (fx.id === "focusShield")
                              return (
                                n.includes("shield") ||
                                n.includes("cognitive") ||
                                n.includes("kampan-29")
                              );
                            if (fx.id === "neuralCursor")
                              return (
                                n.includes("neural") ||
                                n.includes("cursor") ||
                                n.includes("kampan-30")
                              );
                            return n.includes(fx.id.toLowerCase());
                          });

                          // Prístup do UI máš LEN ak si to kúpil (alebo si Architekt)
                          const hasAccess =
                            isArchitect ||
                            hasMasterKey ||
                            hasFxBundle ||
                            hasSingleNode;

                          // ⏳ Výpočet expirácie pre konkrétny efekt
                          let expirationText = "LIFETIME";

                          if (hasAccess && !hasMasterKey && !hasFxBundle) {
                            const history = userState?.transactionHistory || [];
                            const tx = [...history].reverse().find((t) => {
                              const n = String(
                                t.item ||
                                  t.campaignId ||
                                  t.title ||
                                  t.description ||
                                  "",
                              ).toLowerCase();
                              if (fx.id === "laser")
                                return (
                                  n.includes("laser") || n.includes("kampan-23")
                                );
                              if (fx.id === "lightning")
                                return (
                                  n.includes("lightning") ||
                                  n.includes("kampan-24")
                                );
                              if (fx.id === "crtGlitch")
                                return (
                                  n.includes("crt") || n.includes("kampan-25")
                                );
                              if (fx.id === "empSurge")
                                return (
                                  n.includes("emp") || n.includes("kampan-26")
                                );
                              if (fx.id === "textScramble")
                                return (
                                  n.includes("scramble") ||
                                  n.includes("kampan-27")
                                );
                              if (fx.id === "dataCascade")
                                return (
                                  n.includes("cascade") ||
                                  n.includes("kampan-28")
                                );
                              if (fx.id === "focusShield")
                                return (
                                  n.includes("shield") ||
                                  n.includes("kampan-29")
                                );
                              if (fx.id === "neuralCursor")
                                return (
                                  n.includes("neural") ||
                                  n.includes("kampan-30")
                                );
                              return n.includes(fx.id.toLowerCase());
                            });

                            let validDate = null;
                            const raw = tx
                              ? tx.timestamp ||
                                tx.date ||
                                tx.createdAt ||
                                tx.created_at ||
                                tx.time
                              : null;

                            if (raw) {
                              validDate = new Date(raw);
                              if (
                                isNaN(validDate.getTime()) &&
                                typeof raw === "string"
                              ) {
                                const match = raw.match(
                                  /(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/,
                                );
                                if (match)
                                  validDate = new Date(
                                    `${match[1]}-${match[2]}-${match[3]}T12:00:00`,
                                  );
                              }
                            }

                            if (
                              (!validDate || isNaN(validDate.getTime())) &&
                              tx &&
                              tx.id &&
                              String(tx.id).startsWith("TX-")
                            ) {
                              const ms = parseInt(
                                String(tx.id).replace("TX-", ""),
                                10,
                              );
                              if (!isNaN(ms)) validDate = new Date(ms);
                            }

                            if (validDate && !isNaN(validDate.getTime())) {
                              validDate.setDate(validDate.getDate() + 90);
                              expirationText = `DO: ${validDate.toLocaleDateString("sk-SK")}`;
                            }
                          }

                          return (
                            <div
                              key={fx.id}
                              className={`flex flex-col justify-between p-3 rounded-lg border transition-colors ${hasAccess ? "border-white/10 bg-white/5 hover:border-white/20" : "border-red-500/10 bg-red-500/5 opacity-60 hover:opacity-100"}`}
                            >
                              <div className="flex justify-between items-center w-full mb-2">
                                <div className="flex flex-col gap-0.5">
                                  <span
                                    className={`text-[9px] uppercase tracking-widest font-bold truncate ${hasAccess ? "text-white/80" : "text-red-400"}`}
                                  >
                                    {fx.name}
                                  </span>
                                  {hasAccess && !hasMasterKey && (
                                    <span className="text-[7px] text-[#39FF14]/40 font-mono tracking-widest uppercase">
                                      {expirationText}
                                    </span>
                                  )}
                                </div>
                                {!hasAccess ? (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigate("/shop");
                                    }}
                                    className="hover:scale-110 transition-transform"
                                    title="Zamknuté. Kúpiť v NEXUS SHOPE."
                                  >
                                    <Lock size={12} className="text-red-500" />
                                  </button>
                                ) : (
                                  <input
                                    type="checkbox"
                                    checked={fxAdvanced[fx.id]}
                                    onChange={(e) =>
                                      handleFxChange(fx.id, e.target.checked)
                                    }
                                    className="accent-[#39FF14] w-3 h-3 cursor-pointer shrink-0"
                                  />
                                )}
                              </div>
                              <span className="text-[7px] uppercase tracking-[0.2em] font-bold">
                                {hasAccess ? (
                                  <span className="text-[#39FF14]">
                                    ODOMKNUTÉ
                                  </span>
                                ) : (
                                  <span className="text-red-500">
                                    LOCKED (80 OC)
                                  </span>
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* ⚡ PRÍSTUPOVÉ PROTOKOLY (LOGINS) ZMAZANÉ*/}

                  <div id="nexus-settings-avatar">
                    <label className="relative group w-max text-[10px] uppercase font-black text-white/30 tracking-widest mb-6 flex items-center gap-2">
                      Vizuálna Identita (Avatar){" "}
                      <Info size={12} className="text-[#39FF14]" />
                      <TooltipHover
                        text="Vyberte si jedného z 15 systémových avatarov. Jeho vlastná farba sa stane vašou Sémantickou Aurou na Blogu."
                        dimColor="#39FF14"
                        position="top"
                        align="left"
                      />
                    </label>

                    <div className="flex flex-col md:flex-row gap-8 items-start relative">
                      <div
                        className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full border-2 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black flex items-center justify-center relative group"
                        style={{ borderColor: tierColor, color: tierColor }}
                      >
                        {formData.avatar ? (
                          <img
                            src={formData.avatar}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User size={40} />
                        )}
                        <TooltipHover
                          text="Aktuálny aktívny avatar vo vašom profile."
                          dimColor="#39FF14"
                          position="bottom"
                          align="left"
                        />
                      </div>
                      <div className="flex-1 w-full space-y-6">
                        <div>
                          <label className="text-[9px] uppercase font-bold text-white/30 tracking-widest mb-2 block">
                            Vlastná URL adresa obrázka
                          </label>
                          <input
                            type="text"
                            value={formData.avatar}
                            onChange={(e) =>
                              handleInputChange("avatar", e.target.value)
                            }
                            disabled={isGuestEntity}
                            placeholder="https://..."
                            className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-white font-mono text-xs focus:border-white/30 outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] uppercase font-bold text-white/30 tracking-widest mb-4 block">
                            Alebo si vyberte Systémový Nexus Avatar
                            (Korešponduje s Dimenziou)
                          </label>
                          <div className="flex flex-wrap gap-3">
                            {NEXUS_AVATARS.map((avatarData, idx) => (
                              <div
                                key={idx}
                                className="relative group flex shrink-0"
                              >
                                <button
                                  onClick={() =>
                                    handleInputChange("avatar", avatarData.url)
                                  }
                                  disabled={isGuestEntity}
                                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 transition-transform hover:scale-110 disabled:opacity-30 ${formData.avatar === avatarData.url ? "border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.5)]" : "border-white/10"}`}
                                >
                                  <img
                                    src={avatarData.url}
                                    alt={`SysAvatar ${idx}`}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                                <TooltipHover
                                  text={avatarData.title}
                                  dimColor={avatarData.color}
                                  position="bottom"
                                  align="center"
                                />
                              </div>
                            ))}

                            {/* 🚨 SPÄTNÁ VÄZBA / BUG REPORT (Prepojené na Hamburger Menu) */}
                            <div
                              id="nexus-settings-feedback"
                              className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group transition-all hover:border-orange-500/60"
                            >
                              <div>
                                <h3 className="text-orange-500 font-black uppercase tracking-widest flex items-center gap-3 mb-2">
                                  <AlertTriangle
                                    size={18}
                                    className="animate-pulse"
                                  />
                                  Nahlásenie anomálie
                                </h3>
                                <p className="text-white/50 text-[10px] uppercase tracking-widest max-w-sm leading-relaxed">
                                  Našli ste v systéme chybu alebo navrhujete
                                  vylepšenie? Zašlite hlásenie priamo
                                  Architektovi do Inboxu.
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  if (
                                    typeof SoundFX !== "undefined" &&
                                    SoundFX.click
                                  )
                                    SoundFX.click();
                                  window.dispatchEvent(
                                    new CustomEvent("nexus_open_inbox", {
                                      detail: {
                                        recipientId:
                                          "dusan.fajnor.business@gmail.com",
                                        recipientName:
                                          "ARCHITECT [ PODPORA & BUGY ]",
                                        defaultText:
                                          "### 🚨 SYSTÉMOVÉ HLÁSENIE\n\n**Popis anomálie / bugu:**\n",
                                      },
                                    }),
                                  );
                                }}
                                className="px-6 py-4 bg-orange-500 hover:bg-orange-600 text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all w-full sm:w-auto text-center shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-105 active:scale-95"
                              >
                                Otvoriť Inbox
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* ⚡ ZÁLOŽKA: NOTIFIKÁCIE A UPOZORNENIA                            */}
              {/* ============================================================== */}
              {activeTab === "notifications" && (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <Bell size={24} style={{ color: tierColor }} />
                    <h2 className="text-xl font-black uppercase tracking-widest text-white">
                      Systémové Upozornenia
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* GLOBÁLNE ALERTY */}
                    <div className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-white/10 transition-all shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-cyan-500/10 rounded-xl">
                          <Globe size={16} className="text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-white uppercase tracking-widest">
                            Globálne Alerty
                          </div>
                          <div className="text-[9px] font-mono text-white/40 mt-1">
                            Správy adresované celej Sieti.
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange("blogAlerts", !formData.blogAlerts)
                        }
                        className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 outline-none"
                        style={{
                          backgroundColor: formData.blogAlerts
                            ? tierColor
                            : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${formData.notifyReactions ? "translate-x-6" : "translate-x-1"}`}
                        />
                      </button>
                    </div>

                    {/* OSOBNÉ ZMIENKY */}
                    <div className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-white/10 transition-all shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-xl">
                          <AtSign size={16} className="text-blue-400" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-white uppercase tracking-widest">
                            Zmienky (@Mention)
                          </div>
                          <div className="text-[9px] font-mono text-white/40 mt-1">
                            Upozorniť ma, ak ma niekto označí.
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange(
                            "notifyMentions",
                            !formData.notifyMentions,
                          )
                        }
                        className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 outline-none"
                        style={{
                          backgroundColor: formData.notifyMentions
                            ? tierColor
                            : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${formData.notifyMentions ? "translate-x-6" : "translate-x-1"}`}
                        />
                      </button>
                    </div>

                    {/* ODPOVEDE */}
                    <div className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-white/10 transition-all shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl">
                          <MessageCircle
                            size={16}
                            className="text-purple-400"
                          />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-white uppercase tracking-widest">
                            Odpovede (Citácie)
                          </div>
                          <div className="text-[9px] font-mono text-white/40 mt-1">
                            Reakcie priamo k mojim vláknam.
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange(
                            "notifyReplies",
                            !formData.notifyReplies,
                          )
                        }
                        className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 outline-none"
                        style={{
                          backgroundColor: formData.notifyReplies
                            ? tierColor
                            : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${formData.notifyReplies ? "translate-x-6" : "translate-x-1"}`}
                        />
                      </button>
                    </div>

                    {/* REAKCIE (LAJKY) */}
                    <div className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-white/10 transition-all shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-pink-500/10 rounded-xl">
                          <Heart size={16} className="text-pink-500" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-white uppercase tracking-widest">
                            Lajky a Ocenenia
                          </div>
                          <div className="text-[9px] font-mono text-white/40 mt-1">
                            Dostávať echo o udelených srdciach.
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange(
                            "notifyReactions",
                            !formData.notifyReactions,
                          )
                        }
                        className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 outline-none"
                        style={{
                          backgroundColor: formData.notifyReactions
                            ? tierColor
                            : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${formData.notifyReactions ? "translate-x-6" : "translate-x-1"}`}
                        />
                      </button>
                    </div>

                    {/* E-MAIL REPORT */}
                    <div className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-white/10 transition-all shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 rounded-xl">
                          <Mail size={16} className="text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-white uppercase tracking-widest">
                            E-mailové hlásenia
                          </div>
                          <div className="text-[9px] font-mono text-white/40 mt-1">
                            Kritické reporty na mail.
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange(
                            "notifyEmail",
                            !formData.notifyEmail,
                          )
                        }
                        className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 outline-none"
                        style={{
                          backgroundColor: formData.notifyEmail
                            ? tierColor
                            : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${formData.notifyEmail ? "translate-x-6" : "translate-x-1"}`}
                        />
                      </button>
                    </div>

                    {/* SMS UPOZORNENIA (LOCKED) */}
                    <div className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl opacity-40 cursor-not-allowed">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-500/10 rounded-xl">
                          <Smartphone size={16} className="text-gray-400" />
                        </div>
                        <div>
                          <div className="text-[11px] font-black text-white uppercase tracking-widest">
                            SMS Link
                          </div>
                          <div className="text-[9px] font-mono text-white/40 mt-1">
                            Modul sa momentálne pripravuje.
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        disabled
                        className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-white/5 transition-colors cursor-not-allowed"
                      >
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white/20 translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* ⚡ ZÁLOŽKA: SPRÁVA IDENTÍT (SSO)                               */}
              {/* ============================================================== */}
              {activeTab === "login_connections" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
                  <header className="border-b border-[#00FFFF]/20 pb-6 mb-8 flex flex-col gap-2">
                    <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-widest flex items-center gap-3">
                      <Globe className="text-[#00FFFF]" size={28} />
                      Správa Identít (SSO)
                    </h2>
                    <p className="text-[#00FFFF]/50 text-xs tracking-widest uppercase">
                      Pripoj alebo odpoj externé komunikačné porty pre rýchly a
                      bezpečný prístup do Siete Nexus.
                    </p>
                  </header>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12">
                    {[
                      {
                        id: "google",
                        label: "Google",
                        icon: Chrome,
                        color: "#EA4335",
                      },
                      {
                        id: "facebook",
                        label: "Facebook",
                        icon: Facebook,
                        color: "#1877F2",
                        isDev: true,
                      }, // 🛑 ZÁMOK
                      {
                        id: "linkedin",
                        label: "LinkedIn",
                        icon: Linkedin,
                        color: "#0A66C2",
                      },
                      {
                        id: "twitter",
                        label: "X (Twitter)",
                        icon: Twitter,
                        color: "#FFFFFF",
                        isDev: true,
                      }, // 🛑 ZÁMOK
                      {
                        id: "email",
                        label: "E-mail",
                        icon: Mail,
                        color: "#39FF14",
                      },
                      {
                        id: "github",
                        label: "GitHub",
                        icon: Github,
                        color: "#FFFFFF",
                      },
                      {
                        id: "discord",
                        label: "Discord",
                        icon: Gamepad2,
                        color: "#5865F2",
                      },
                      {
                        id: "twitch",
                        label: "Twitch",
                        icon: Twitch,
                        color: "#9146FF",
                      },
                    ].map((provider) => {
                      // 🛡️ MATRIX FIX: Zosúladenie UI s OIDC portmi databázy
                      let mappedId = provider.id.toLowerCase();
                      if (mappedId === "linkedin") mappedId = "linkedin_oidc";

                      const isLinked = linkedIdentities?.includes(mappedId);
                      const Icon = provider.icon;

                      return (
                        <button
                          key={provider.id}
                          disabled={provider.isDev} // Zablokovanie kliku pre porty vo vývoji
                          onClick={() => {
                            if (mappedId === "email") {
                              alert(
                                "⚠️ E-mailový port slúži ako vaša hlavná identita a nie je možné ho odpojiť.",
                              );
                              return;
                            }
                            isLinked
                              ? handleOAuthUnlink(mappedId)
                              : handleOAuthLink(mappedId);
                          }}
                          className={`flex items-center justify-between w-full p-4 rounded-xl border transition-all duration-300 ${
                            provider.isDev
                              ? "opacity-30 grayscale cursor-not-allowed border-white/5 bg-white/5" // Vizuál "Vo vývoji"
                              : isLinked
                                ? "border-[#39FF14]/30 bg-[#39FF14]/5 cursor-default" // Vizuál "Pripojené"
                                : "border-white/10 bg-black/40 hover:bg-white/5 hover:border-white/30" // Vizuál "Dostupné"
                          }`}
                          title={
                            provider.isDev
                              ? "Tento komunikačný port je momentálne vo vývoji"
                              : ""
                          }
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={20}
                              style={{
                                color: provider.isDev ? "#888" : provider.color,
                              }}
                            />
                            <span
                              className={`text-sm font-bold tracking-widest uppercase ${provider.isDev ? "text-gray-500" : "text-white"}`}
                            >
                              {provider.label}
                              {provider.isDev && (
                                <span className="text-[9px] uppercase tracking-widest text-[#FF003C] ml-2">
                                  [Vo vývoji]
                                </span>
                              )}
                            </span>
                          </div>

                          {/* STATUS TEXT (Ak nie je port vo vývoji) */}
                          {!provider.isDev && (
                            <span className="text-[10px] font-black uppercase tracking-widest">
                              {isLinked ? (
                                <span className="text-[#39FF14]">
                                  Pripojené
                                </span>
                              ) : (
                                <span className="text-white/30">Pripojiť</span>
                              )}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === "dossier" && (
                <div
                  id="nexus-settings-dossier"
                  className="space-y-4 animate-in fade-in zoom-in-95 duration-300 w-full"
                >
                  <div className="flex gap-1 flex-wrap bg-black/60 p-2 rounded-xl border border-white/10 mb-4">
                    {editorTools.map((tool, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => insertFormat(tool.id, e)}
                        title={tool.title}
                        disabled={isGuestEntity}
                        className="p-2 bg-white/5 hover:bg-[#39FF14]/20 border border-transparent hover:border-[#39FF14]/50 text-white/50 hover:text-[#39FF14] rounded-lg transition-all disabled:opacity-30"
                      >
                        {tool.icon}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                      Dossier Limit ({userTier}):
                    </span>
                    <span
                      className={`text-[10px] font-mono font-black ${(formData.dossier || "").length >= MAX_DOSSIER_CHARS ? "text-[#FF003C] animate-pulse" : "text-cyan-500"}`}
                    >
                      {(formData.dossier || "").length.toLocaleString()} /{" "}
                      {MAX_DOSSIER_CHARS.toLocaleString()}
                    </span>
                  </div>
                  <div className="relative group w-full">
                    <textarea
                      ref={dossierRef}
                      value={formData.dossier}
                      onChange={(e) =>
                        handleInputChange("dossier", e.target.value)
                      }
                      disabled={isGuestEntity}
                      maxLength={MAX_DOSSIER_CHARS}
                      placeholder="# Vložte svoj hlboký sémantický kód..."
                      className="w-full bg-black/50 border border-white/10 rounded-lg p-6 text-white font-mono text-[15px] leading-relaxed focus:border-cyan-500/50 outline-none transition-colors shadow-inner resize-y custom-scrollbar min-h-[300px]"
                    />
                    <TooltipHover
                      text="Tento Kybernetický Životopis si môžu prečítať iní operátori, ak kliknú na vašu kartu. Podporuje Markdown a vkladanie HTML tagov."
                      dimColor="#00FFFF"
                      position="top"
                      align="left"
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-4">
                    <button
                      onClick={() => setIsPreview(true)}
                      className="text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition-all flex items-center gap-2 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 border border-white/10"
                    >
                      <Eye size={12} /> Otvoriť Vyskakovací Náhľad
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "health" && (
                <div
                  id="nexus-settings-health"
                  className="space-y-8 animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="relative group">
                    <div className="flex justify-between items-end mb-2">
                      <label className="text-[10px] uppercase font-black text-white/30 tracking-widest block flex items-center gap-2">
                        Diagnóza (Systémové chyby hardvéru){" "}
                        <Info size={10} className="text-[#FF003C]" />
                      </label>
                      <span
                        className={`text-[10px] font-mono font-black ${(formData.diagnosis || "").length >= 250 ? "text-[#FF003C] animate-pulse" : "text-cyan-500"}`}
                      >
                        {(formData.diagnosis || "").length} / 250
                      </span>
                    </div>
                    <textarea
                      value={formData.diagnosis}
                      onChange={(e) =>
                        handleInputChange("diagnosis", e.target.value)
                      }
                      maxLength={250}
                      rows="4"
                      disabled={isGuestEntity}
                      className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white font-mono text-sm outline-none focus:border-[#FF003C]/50 transition-all"
                    />
                    <TooltipHover
                      text="Aké fyzické alebo mentálne chybové stavy (Bugs) momentálne hlási tvoj Skafander (telo)?"
                      dimColor="#FF003C"
                      position="bottom"
                      align="left"
                    />
                  </div>
                  <div className="relative group">
                    <div className="flex justify-between items-end mb-2">
                      <label className="text-[10px] uppercase font-black text-white/30 tracking-widest block flex items-center gap-2">
                        Súčasná medikácia (System Patches){" "}
                        <Info size={10} className="text-[#00FFFF]" />
                      </label>
                      <span
                        className={`text-[10px] font-mono font-black ${(formData.medication || "").length >= 250 ? "text-[#FF003C] animate-pulse" : "text-cyan-500"}`}
                      >
                        {(formData.medication || "").length} / 250
                      </span>
                    </div>
                    <textarea
                      value={formData.medication}
                      onChange={(e) =>
                        handleInputChange("medication", e.target.value)
                      }
                      maxLength={250}
                      rows="4"
                      disabled={isGuestEntity}
                      className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white font-mono text-sm outline-none focus:border-[#00FFFF]/50 transition-all"
                    />
                    <TooltipHover
                      text="Aké protokoly (šport, lieky, defragmentácia) využívate na nápravu týchto chýb?"
                      dimColor="#00FFFF"
                      position="bottom"
                      align="left"
                    />
                  </div>
                </div>
              )}

              {activeTab === "contacts" && (
                <div
                  id="nexus-settings-contacts"
                  className="space-y-6 animate-in fade-in zoom-in-95 duration-300"
                >
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-4">
                    Verejné kontakty operátora v Sieti (Viditeľné pre všetkých)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "www",
                        icon: Globe,
                        label: "Osobná Doména (Web Node)",
                        placeholder: "https://...",
                        tooltip:
                          "Odkaz na tvoj vlastný informačný uzol alebo web.",
                      },
                      {
                        name: "phone",
                        icon: Phone,
                        label: "Mobilné Číslo",
                        placeholder: "+421 900 000 000",
                        tooltip:
                          "Zabezpečená linka na priamy, nešifrovaný hlasový kontakt.",
                      },
                      {
                        name: "whatsapp",
                        icon: MessageCircle,
                        label: "WhatsApp Link",
                        placeholder: "https://wa.me/...",
                        tooltip:
                          "Skratka pre okamžitý skok do šifrovaného chatu (WhatsApp).",
                      },
                      {
                        name: "google",
                        icon: Chrome,
                        label: "Verejný E-mail / Google",
                        placeholder: "Verejný kontakt...",
                        tooltip:
                          "Adresa pre formálnu e-mailovú komunikáciu (Mimo Systém).",
                      },
                      {
                        name: "facebook",
                        icon: Facebook,
                        label: "Facebook URL",
                        placeholder: "https://facebook.com/...",
                        tooltip:
                          "Linka na osobný profil v matrixe sociálnych médií.",
                      },
                      {
                        name: "instagram",
                        icon: Instagram,
                        label: "Instagram URL",
                        placeholder: "https://instagram.com/...",
                        tooltip: "Odkaz na vizuálny profil.",
                      },
                      {
                        name: "youtube1",
                        icon: Youtube,
                        label: "YouTube Kanál (Primárny)",
                        placeholder: "https://youtube.com/@...",
                        tooltip:
                          "Odkaz na tvoj hlavný video kanál a zdroj pasívneho príjmu.",
                      },
                      {
                        name: "youtube2",
                        icon: Youtube,
                        label: "YouTube Kanál (Sekundárny)",
                        placeholder: "https://youtube.com/@...",
                        tooltip: "Odkaz na sekundárny / herný kanál.",
                      },
                      {
                        name: "tiktok",
                        icon: Music2,
                        label: "TikTok URL",
                        placeholder: "https://tiktok.com/@...",
                        tooltip:
                          "Odkaz na krátke video formáty a rýchly dosah.",
                      },
                    ].map((field) => (
                      <div key={field.name} className="relative group">
                        <label className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-2 flex items-center gap-2">
                          <field.icon size={12} /> {field.label}{" "}
                          <Info size={10} className="text-[#39FF14]" />
                        </label>
                        <input
                          type="text"
                          value={formData[field.name]}
                          onChange={(e) =>
                            handleInputChange(field.name, e.target.value)
                          }
                          disabled={isGuestEntity}
                          placeholder={field.placeholder}
                          className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-white font-mono text-sm outline-none focus:border-[#39FF14]/30 transition-colors"
                        />
                        <TooltipHover
                          text={field.tooltip}
                          dimColor="#39FF14"
                          position="bottom"
                          align="left"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "wallet" && (
                <div
                  id="nexus-settings-wallet"
                  className="space-y-10 animate-in fade-in zoom-in-95 duration-300"
                >
                  {userState?.email ? (
                    <GlobalShopHistory
                      userEmail={userState.email}
                      isCompact={false}
                      hideBalance={false}
                    />
                  ) : (
                    <div className="text-white/30 p-10 text-center font-mono">
                      Peňaženka vyžaduje autorizáciu operátora.
                    </div>
                  )}
                </div>
              )}

              {activeTab === "permissions" && (
                <div
                  id="nexus-settings-permissions"
                  className="space-y-6 animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="text-center mb-8 flex flex-col items-center">
                    <div
                      className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 mb-4 shadow-2xl bg-black/50"
                      style={{ borderColor: tierColor, color: tierColor }}
                    >
                      {canAdministrate ? (
                        <Crown size={40} />
                      ) : (
                        <ShieldCheck size={40} />
                      )}
                    </div>
                    <h2
                      className="text-3xl font-black uppercase tracking-tighter text-white mb-2"
                      style={{ color: tierColor }}
                    >
                      {userTier} TIER
                    </h2>
                  </div>

                  <div className="relative group mb-4">
                    <div className="flex items-center gap-2 mb-2 text-[#39FF14]">
                      <Info size={14} className="animate-pulse" />{" "}
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Informácia o tabuľke
                      </span>
                    </div>
                    <TooltipHover
                      text="Tento systémový index zobrazuje všetky vaše prístupové práva. Tabuľka sa načíta priamo zo zdrojového kódu Ústavy (permissionsRegistry)."
                      dimColor={tierColor}
                      position="top"
                      align="left"
                    />
                  </div>

                  <div className="bg-black/40 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden w-full">
                    <table className="w-full text-left border-collapse table-fixed">
                      <thead>
                        <tr className="bg-white/5 border-b border-white/10 font-black text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-wider text-white/40 italic">
                          <th className="p-2 sm:p-3 border-r border-white/5 w-[28%] sm:w-[30%]">
                            Oprávnenie
                          </th>
                          {[
                            { key: "QUEST", label: "QUEST" },
                            { key: "FREE", label: "FREE" },
                            { key: "PRO", label: "PRO" },
                            { key: "OMEGA", label: "OMEGA" },
                            { key: "MODERATOR", label: "MOD" },
                            { key: "ADMIN", label: "ADMIN" },
                            { key: "MASTER", label: "MASTER" },
                            { key: "ARCHITECT", label: "ARCH" },
                          ].map((t) => (
                            <th
                              key={t.key}
                              className="p-1 sm:p-2 text-center truncate"
                              style={{ color: getTierColor(t.key) }}
                            >
                              {t.label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-white/60 font-mono text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-wider">
                        {PERMISSIONS_MATRIX.map((perm, idx) => (
                          <tr
                            key={idx}
                            className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                          >
                            <td
                              className="p-1.5 sm:p-2 font-black text-white/80 italic border-r border-white/5 truncate"
                              title={perm.name}
                            >
                              {perm.name}
                            </td>

                            {[
                              "quest",
                              "free",
                              "pro",
                              "omega",
                              "mod",
                              "admin",
                              "master",
                              "arch",
                            ].map((level) => {
                              let fullTierName = level.toUpperCase();
                              if (fullTierName === "MOD")
                                fullTierName = "MODERATOR";
                              if (fullTierName === "ARCH")
                                fullTierName = "ARCHITECT";

                              const val = perm[level];
                              const color = getTierColor(fullTierName);

                              return (
                                <td
                                  key={level}
                                  className="p-1 sm:p-2 text-center align-middle"
                                >
                                  {typeof val === "boolean" ? (
                                    val ? (
                                      <CheckCircle2
                                        size={13}
                                        className="mx-auto shrink-0"
                                        style={{ color }}
                                      />
                                    ) : (
                                      <X
                                        size={13}
                                        className="mx-auto shrink-0 text-red-500/40"
                                      />
                                    )
                                  ) : (
                                    <span
                                      className="font-bold text-[7px] sm:text-[8px] md:text-[9px]"
                                      style={{ color }}
                                    >
                                      {val || "0"}
                                    </span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "auth_matrix" && canAdministrate && (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300 w-full overflow-x-auto custom-scrollbar">
                  <div className="bg-[#0044FF]/10 border border-[#0044FF]/30 p-6 md:p-8 rounded-[2rem] relative overflow-hidden min-w-[800px]">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0044FF]/20 blur-[50px] rounded-full pointer-events-none"></div>
                    <h3
                      id="nexus-settings-broadcast"
                      className="text-[#0044FF] font-black uppercase tracking-widest text-sm md:text-base mb-4 flex items-center gap-3"
                    >
                      <Send size={20} /> System Broadcast (Hromadná Správa)
                    </h3>
                    <p className="text-[10px] md:text-xs font-mono text-white/50 mb-6">
                      Zadajte text, ktorý sa odošle do INBOXU (Prijaté signály)
                      každému jednému registrovanému operátorovi v Sieti.
                    </p>
                    <textarea
                      value={broadcastText}
                      onChange={(e) => setBroadcastText(e.target.value)}
                      placeholder="Zadajte znenie systémovej správy..."
                      className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono text-sm min-h-[100px] outline-none focus:border-[#0044FF]/50 transition-colors mb-4 custom-scrollbar"
                    />
                    <button
                      onClick={handleBroadcast}
                      disabled={isBroadcasting}
                      className="bg-[#0044FF] hover:bg-white text-white hover:text-[#0044FF] font-black uppercase tracking-widest text-[10px] md:text-xs px-6 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(0,68,255,0.4)] flex items-center gap-2 relative group w-max"
                    >
                      {isBroadcasting ? (
                        <Activity size={16} className="animate-spin" />
                      ) : (
                        <Bell size={16} />
                      )}{" "}
                      Odoslať všetkým operátorom ({adminOperators.length})
                      <TooltipHover
                        text="Pošle varovanie [SYSTEM LOG] do doručenej pošty každej jednej entity v Matrixe."
                        dimColor="#0044FF"
                        position="bottom"
                        align="left"
                      />
                    </button>
                  </div>

                  <div
                    id="nexus-settings-admin-ops"
                    className="bg-black/40 border border-white/10 rounded-[2rem] p-6 md:p-8 mt-8 shadow-2xl relative overflow-hidden min-w-[800px]"
                  >
                    <h3 className="text-white font-black uppercase tracking-widest text-sm md:text-base mb-6 flex items-center gap-3">
                      <Users size={20} className="text-[#0044FF]" /> Sieť
                      Operátorov (Administratíva)
                    </h3>
                    <div className="overflow-x-auto custom-scrollbar">
                      <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                          <tr className="bg-white/5 border-b border-white/10 font-black text-[10px] uppercase tracking-widest text-white/30">
                            <th className="p-4">Identita</th>
                            <th className="p-4">Tier</th>
                            <th className="p-4">OC Kredity</th>
                            <th className="p-4 text-right">Akcie</th>
                          </tr>
                        </thead>
                        <tbody className="text-white/60 font-mono text-[10px] uppercase tracking-widest">
                          {adminOperators.map((op) => (
                            <tr
                              key={op.id}
                              className="border-b border-white/5 hover:bg-white/[0.02]"
                            >
                              <td className="p-4">
                                <div className="font-bold text-white/80">
                                  {op.displayName || "Neznáma Entita"}
                                </div>
                                <div className="text-[8px] text-white/30">
                                  {op.email}
                                </div>
                              </td>
                              <td
                                className="p-4 font-black"
                                style={{ color: getTierColor(op.tier) }}
                              >
                                {op.tier || "FREE"}
                              </td>
                              <td className="p-4 text-[#FFD700]">
                                {op.credits || 0} OC
                              </td>
                              <td className="p-4 text-right flex justify-end gap-2">
                                <button
                                  title="Povýšiť (Promote)"
                                  onClick={() => adminPromote(op)}
                                  className="p-2 bg-black/40 hover:bg-[#39FF14]/10 text-white/30 hover:text-[#39FF14] border border-white/5 hover:border-[#39FF14]/30 rounded-lg transition-colors"
                                >
                                  <ArrowUpCircle size={14} />
                                </button>
                                <button
                                  title="Degradovať (Demote)"
                                  onClick={() => adminDemote(op)}
                                  className="p-2 bg-black/40 hover:bg-yellow-500/10 text-white/30 hover:text-yellow-500 border border-white/5 hover:border-yellow-500/30 rounded-lg transition-colors"
                                >
                                  <ArrowDownCircle size={14} />
                                </button>
                                <button
                                  title="Uvaliť BAN (Blokovať prístup)"
                                  onClick={() => adminBan(op)}
                                  className="p-2 bg-black/40 hover:bg-[#FF003C]/10 text-white/30 hover:text-[#FF003C] border border-white/5 hover:border-[#FF003C]/30 rounded-lg transition-colors"
                                >
                                  <Ban size={14} />
                                </button>
                                <button
                                  title="Trvalo Vymazať Entitu"
                                  onClick={() => adminDelete(op)}
                                  className="p-2 bg-black/40 hover:bg-red-600/10 text-white/30 hover:text-red-600 border border-white/5 hover:border-red-600/30 rounded-lg transition-colors"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
