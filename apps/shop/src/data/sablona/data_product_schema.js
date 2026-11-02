/**
 * ============================================================================
 * 👑 NEXUS-CORE_2Mb :: UNIFIKOVANÝ GLOBÁLNY DÁTOVÝ MODEL PRODUKTOV (data.js)
 * [ ARCHITEKTÚRA: DUŠAN FAJNOR @NEXUS-CORE2MB | LEVEL 48 ARCHITECT ]
 * [ MASTER SCHÉMA: VIDEOS | AUDIOS | DOCUMENTS | IMAGES | APPS | SERVICES ]
 * [ ŠTANDARD: V20.40 ZERO-BREAKING-CHANGE // BACKWARD COMPATIBLE ]
 * ============================================================================
 */

export const GLOBAL_PRODUCT_SCHEMA_TEMPLATE = {
  // =========================================================================
  // 1. ZÁKLADNÁ IDENTIFIKÁCIA & ROUTING (SSOT)
  // =========================================================================
  id: "PROD-CODM-LV08A", // Unikátne ID (napr. AUDIO_CODM_LV-08A, CAMP_32B, AVATAR-ID00)
  nodeKey: "LV-08A", // Kódové systémové označenie uzla
  title: "LV-08A UNDEAD SIEGE NIGHTMARE ROCK", // Krátky reprezentatívny názov pre kartu a filter
  fullName: "CoDM Zombies: Undead Siege Nightmare Rock (180s Master Track)", // Úplný názov pre Detail Modal
  slug: "lv-08a-undead-siege-nightmare-rock", // URL routing slug pre deep-linking

  // Sémantická klasifikácia:
  // "VIDEOS" | "AUDIOS" | "DOCUMENTS" | "IMAGES" | "APPS" | "SERVICES" | "MATRIX_FX" | "MEMBERSHIP" | "PACKS"
  category: "AUDIOS",
  subCategory: "kt-codm-zombies", // Súlad s filtrami v ShopFilters.jsx
  subCategoryTitle: "Undead Siege (Nightmare Mode)",

  // Dimenzia vedomia (ID00 až ID15)
  dimension: "ID09",
  dimensionTitle: "SERGEANT-CORE (Taktická Bojová Svätyňa)",

  // Licenčný TIER: "FREE" | "FREEMIUM" | "PRO" | "PROMIUM" | "OMEGA" | "OMEGAMIUM" | "MASTER" | "MASTERMIUM"
  tier: "MASTER",
  tierCode: "TIER_MASTER_CROWN",
  color: "#FF003C", // Sémantická farba (#FF003C Red, #39FF14 Green, #FFD700 Gold...)
  status: "ACTIVE", // "ACTIVE" | "PENDING" | "STANDBY" | "LOCKED"

  // =========================================================================
  // 2. TOKENOMIKA & CENOTVORBA (Dual-Currency Firewall)
  // =========================================================================
  // ⚡ ZÁRUKA SPÄTNEJ KOMPATIBILITY: Definujeme number aj string tvary pre všetky JSX komponenty
  priceEur: 99.0, // Číselná hodnota fiat meny pre výpočty
  priceOc: 9900, // Číselná hodnota OC kreditov pre transakcie
  ocPrice: 9900, // 🛡️ ALIAS: Kompatibilita pre ShopPage a Paywall
  price: "99.00 €", // Vizuálny reťazec pre zobrazenie
  displayPrice: "9 900 OC / 99.00 €", // Vizuálny text pre tlačidlá a karty
  discountPercent: 0, // Aktívna zľava (napr. 50% balíková zľava)
  discountedPriceEur: 99.0,
  discountedPriceOc: 9900,
  isFree: false, // True pri bezplatných Lead Magnetoch (0 OC / 0.00 €)

  // =========================================================================
  // 3. 🛡️ SPÄTNÉ KOREŇOVÉ MOSTÍKY PRE EXISTUJÚCI JSX KÓD (ROOT COMPATIBILITY)
  // =========================================================================
  // ⚠️ Tieto kľúče MUSIA zostať v koreni, inak spadnú súčasné komponenty v obchode!
  imageUrl: "/img-nexus/codm/undead-siege_nightmare-mode.jpg", // Primárny obrázok na kartičke
  image: "/img-nexus/codm/undead-siege_nightmare-mode.jpg", // 🛡️ ALIAS pre ShopPage.jsx
  youtubeId: "ACNHbfVLiO0", // Priame 11-miestne YouTube ID pre prehrávač v detaile
  duration: "180s", // Časový rámec (180s, 70s, 15 min, 5 strán...)

  // Priame Supabase cesty (Zákazník sťahuje po overení TIERu):
  zipUrl:
    "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/codm-zombies-are-back/codmZ_single-zip/LV-08A.zip",
  audioUrl:
    "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/codm-zombies-are-back/codmZ_mp3/LV-08A.mp3",
  mp4Url:
    "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/codm-zombies-are-back/codmZ_mp4/LV-08A.mp4",

  // Špecifické koreňové kľúče pre DOCUMENTS (PDF/PPTX):
  pdfUrl: "", // Ostré PDF aktívum (pre ShopDocumentsMedia.jsx)
  supabasePdfPath: "", // Cesta v Supabase buckete (pre Telemetriu)

  // Špecifické koreňové kľúče pre IMAGES (Bot Avatary):
  localImage: "", // Lokálna záloha v /img-nexus/bot-avatars/
  standbyUrl: "", // Záložný standby cover

  // Špecifické koreňové kľúče pre APPS & SERVICES:
  platform: "", // "WEB" | "DESKTOP" | "MOBIL" (pre ShopAppsMedia.jsx)
  kofiLink: "", // Odkaz na externý fiat port (Ko-Fi)
  spoilerIntro: "", // Rýchly spoiler popis pre zoznamy

  // =========================================================================
  // 4. DIGITÁLNA INTEGRITA & OCHRANNÁ ZNÁMKA (Dual-Hash IP Shield)
  // =========================================================================
  ipSecurity: {
    trademark: true,
    atomsQuickTime: true,
    author: "Dušan Fajnor @nexus-core2Mb",
    publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
    cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
    copyrightYear: "2026",
    copyrightText:
      "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
    licenseTier: "MASTER TIER (B2B Royalty-Free & Commercial Lifetime License)",

    // Dvojitý hash pre ochranu originálu a streamu:
    sha256CleanMaster:
      "60BB3FE1C58B6798825503B41CAD17F9FEFBCC57853FA301CB80749A02B75FF0",
    sha256PromoWatermark:
      "B2C3D4E5F60718293A4B5C6D7E8F901A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E",
  },

  // =========================================================================
  // 5. PREHRÁVAČ & STREAMING (Zero Supabase Load cez YouTube CDN)
  // =========================================================================
  mediaAssets: {
    aspectRatio: "16:9", // "16:9" (Widescreen) alebo "9:16" (Vertikálny Shorts)
    durationSeconds: 180,
    youtubeEmbedUrl: "https://www.youtube.com/embed/ACNHbfVLiO0",
    youtubeWatchUrl: "https://www.youtube.com/watch?v=ACNHbfVLiO0",
    thumbnailImage: "https://img.youtube.com/vi/ACNHbfVLiO0/maxresdefault.jpg",
    watermarkPreviewAudioTag: "www projekt nexus sk",
    watermarkPreviewVisual: "Projekt Nexus Level 48 Omega VIP Watermark Stamp",
  },

  // =========================================================================
  // 6. ČISTÝ STIAHNUTEĽNÝ SÚBOR PO KÚPE (Clean Deliverable Asset)
  // =========================================================================
  cleanDeliverable: {
    fileName:
      "LV-08A_UNDEAD_SIEGE_NIGHTMARE_ROCK-Protect_The_Cracking_Core.zip",
    format:
      "ZIP (Obsahuje 100% čisté WAV, MP3 320kbps a MP4 Master bez vodoznaku)",
    fileSizeBytes: 157286400,
    fileSizeMb: 150.0,
    cleanAudioWatermark: false,
    cleanVisualWatermark: false,
    downloadStorageType: "SUPABASE_AUTHENTICATED_BUCKET",
    downloadUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/authenticated/codm-zombies/clean/LV-08A.zip",
  },

  // =========================================================================
  // 7. NEUROMARKETINGOVÁ MATRICA MODALU (7 Kľúčových Otázok)
  // =========================================================================
  scanDetail: {
    zameranieAPointa:
      "Master evakuačný a finálny soundtrack LV-08A pre extrémny režim Nightmare.",
    detailnyPopisKampane:
      "Pompézny temný alternative rockový štít (110 BPM) s gotickými sláčikovými stenami pre finálny stand na heliporte v Isolated.",
    detailnyPopis:
      "Pompézny temný alternative rockový štít (110 BPM) s gotickými sláčikovými stenami pre finálny stand na heliporte v Isolated.", // 🛡️ ALIAS
    coZiskas:
      "Kompletný MP3, MP4 a ZIP balík s MASTER komerčnou licenciou a SHA-256 certifikátom.",

    // 7 kľúčových otázok pre Modal okno:
    preKoho:
      "Pre elitných operátorov, vytrvalostných športovcov a CoDM Zombies veteránov.",
    preAkyTypLudi:
      "Pre e-športovcov, hráčov a programátorov hľadajúcich hlboké sústredenie.",
    preAkyTypCloveka:
      "Pre človeka s preťaženým procesorom vyžadujúceho okamžitý nábeh do flow.",
    preAkyTypSpolocnosti:
      "Pre komerčné e-sports federácie, akčné herné agentúry a mediálne domy.",
    kComuSaToDaPouzit:
      "Absolútny akustický triumf, workout vrchol a hudobný podmaz pre Deep Work.",
    akoToFunguje:
      "Ukážku s vodoznakom streamuješ cez YouTube. Po odomknutí sťahuješ 100% čistý master súbor s overeným SHA-256 z trezoru Supabase.",
    akoOveritSha256:
      "Vo Windows stlač Win+R -> powershell -> Get-FileHash 'LV-08A.zip' -Algorithm SHA256. Výsledok musí 100% sedieť s hodnotou sha256CleanMaster.",

    // 🛡️ Spätná podpora pre komponenty čítajúce starý vnorený formát:
    preKohoJeToto: {
      preAkyTypLudi:
        "Pre e-športovcov, hráčov a programátorov hľadajúcich hlboké sústredenie.",
      preAkyTypCloveka:
        "Pre človeka s preťaženým procesorom vyžadujúceho okamžitý nábeh do flow.",
      preAkyTypSpolocnosti:
        "Pre komerčné e-sports federácie, akčné herné agentúry a mediálne domy.",
    },
  },

  // =========================================================================
  // 8. NEXUS AGENCY: 20 PROFESIONÁLNYCH ÚKONOV (SOP & Proof of Process)
  // =========================================================================
  phases: [
    {
      phaseId: 1,
      title: "FÁZA 1: INICIALIZÁCIA A ZBER DÁT (0 - 10 min)",
      steps: [
        "Úkon 01: Detekcia nákupu / autorizácia JWT relácie a overenie UID operátora.",
        "Úkon 02: Načítanie unikátneho identifikátora produktu a overenie integrity v databáze.",
        "Úkon 03: Zafixovanie transakčnej ceny a kontrola dostatočného zostatku OC peňaženky.",
        "Úkon 04: Izolácia požiadavky do asynchrónnej karantény a štart exekučného časovača.",
      ],
    },
    {
      phaseId: 2,
      title: "FÁZA 2: AUDIT, ANALÝZA A DEFRAGMENTÁCIA (10 - 25 min)",
      steps: [
        "Úkon 05: Skenovanie zdrojových súborov a kontrola vstupných frekvenčných/grafických parametrov.",
        "Úkon 06: Odstránenie kognitívneho šumu a limbického trenia z dátového toku.",
        "Úkon 07: Overenie časového kódovania (presný 180s Master audio rámec / 70s video lievik).",
        "Úkon 08: Testovanie spektrálnej vyváženosti na referenčnom monitore v Strojovni.",
      ],
    },
    {
      phaseId: 3,
      title: "FÁZA 3: HĹBKOVÁ EXEKÚCIA & CHIRURGIA KÓDU (25 - 45 min)",
      steps: [
        "Úkon 09: Aplikácia systémových profilov a bionická syntéza zvukového/video obsahu.",
        "Úkon 10: Vytvorenie propagačného bumperu s 25% transparentným vodoznakom pre YouTube.",
        "Úkon 11: Renderovanie 100% čistého štúdiového originálu bez rušivých elementov.",
        "Úkon 12: Kódovanie asymetrického predajného lievika Matrix Funnel (7x 10s modulov).",
      ],
    },
    {
      phaseId: 4,
      title: "FÁZA 4: ZABEZPEČENIE, ATÓMY & SHA-256 AUDIT (45 - 55 min)",
      steps: [
        "Úkon 13: Injekcia autorských QuickTime Atoms / XMP metadát priamo do binárnej hlavičky.",
        "Úkon 14: Streamovaný výpočet unikátneho 64-miestneho kontrolného súčtu SHA-256.",
        "Úkon 15: Zápis digitálneho rodného listu do centrálneho audítorského manifestu.",
        "Úkon 16: Trvalé vymazanie citlivých dočasných pracovných súborov z disku (GDPR Safe).",
      ],
    },
    {
      phaseId: 5,
      title: "FÁZA 5: UPLINK, ODOVZDANIE A B2B UP-SELL (55 - 60 min)",
      steps: [
        "Úkon 17: Uvoľnenie Paywall zámku a okamžitý re-render klientskeho rozhrania.",
        "Úkon 18: Generovanie autorizovaného časovo obmedzeného odkazu na stiahnutie čistého súboru.",
        "Úkon 19: Odoslanie systémového potvrdzujúceho e-mailu s exekutívnym reportom z vyhradeného portu.",
        "Úkon 20: Aplikácia B2B Up-Sell protokolu pre odomknutie celého 32-kusového balíka Master All-In.",
      ],
    },
  ],

  // =========================================================================
  // 9. MARKETINGOVÉ PRÍSPEVKY PRE SOCIÁLNE SIETE (Social Broadcast Hooks)
  // =========================================================================
  socialPosts: {
    longPost: {
      title: "🔴 CoDM ZOMBIES ARE BACK | LV-08A Undead Siege Nightmare Rock",
      description:
        "Horda ťa zakaždým prevalcuje na heliporte? Inštalujeme bionický rockový štít...",
      shopLink: "https://projekt-nexus.sk/shop",
      agencyLink: "https://agency.projekt-nexus.sk/",
      hashtags: "#codmzombies #nightmare #gamingmusic #deepwork #osgenesis",
      pinnedComment:
        "📌 Odomkni si čistý 180s master track bez vodoznakov: https://projekt-nexus.sk/shop",
    },
    shortPost: {
      title: "🎬 LV-08A Nightmare Rock | 70s Trojan Horse Hook",
      description:
        "Padá jadro teleportu v Isolated? Odomkni si kognitívny overclocking v bio!",
      shopLink: "https://projekt-nexus.sk/shop",
      hashtags: "#shorts #codm #nightmare #flowstate",
      pinnedComment: "👉 Odkaz na čistý balík nájdeš priamo v profile.",
    },
  },
};
