// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP MEMBERSHIP DATA REGISTER V20.50)
// File: src/data/ShopPage/Membership.js
// Status: STRICTLY GROUNDED // 100% SUPABASE CDN // 3 MEMBERSHIP TIERS
// Standard: V20 TRINITY SPECIFICATION // FULL NEUROMARKETING & 20-STEP PROTOCOL
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

export const MEMBERSHIP_DATA = {
  "nexus-pro-14": {
    id: "CAMP_14",
    nodeKey: "nexus-pro-14",
    title: "NEXUS PRO (NEXUS SHOP MEMBERSHIP)",
    fullName: "NEXUS PRO (NEXUS SHOP MEMBERSHIP) // STREDNÁ VRSTVA MATRIXU",
    slug: "nexus-pro-shop-membership-14",
    category: "MEMBERSHIP",
    subCategory: "membership",
    subCategoryTitle: "Členstvá OS Genesis",
    dimension: "ID14",
    dimensionTitle: "BLOG UI SPACE (Nexus-Blog)",
    tier: "PRO",
    tierCode: "TIER_PRO_VIP",
    color: "#39FF14",
    price: "49.00 € / mes",
    priceEur: 49.0,
    priceOc: 4900,
    ocPrice: 4900,
    displayPrice: "4 900 OC / 49.00 € / mes.",
    discountPercent: 0,
    isFree: false,
    isLifetime: false,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/14-nexus-pro-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/14-nexus-pro-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/14-nexus-pro-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/1x1_feed/14.%20NEXUS-PROMIUM-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/9x16_shorts/14-nexus-pro-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/zip-all-formaty/14-nexus-pro_all-formats.zip",
    },
    youtubeId: "AYNiLdAb9Fo",
    kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
    spoilerIntro:
      "Základný prístupový modul pre strednú vrstvu Matrixu. Odstraňuje reklamný balast, inštaluje čistý Workspace pre tvoj Skafander a odomyká 5 kľúčových PRO dimenzií.",
    goal: "Masová akvizícia a konverzia Quest entít na plnohodnotných operátorov. Odomknutie uzamknutého výpočtového výkonu a stabilizácia osobného Workflow.",
    funnel:
      "Bolesť (Reklamný šum a zamknuté stredné uzly) ➔ Riešenie (PRO prístupový kľúč) ➔ Akcia (Aktivácia za 4 900 OC alebo 49.00 € na Ko-Fi).",
    deliveryTime:
      "Instantný Auto-Uplink v milisekunde po autorizácii transakcie.",
    execTime: "Okamžite (Automatický realtime zápis do profilu)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools:
      "Supabase Auth, permissionsRegistry.js, GlobalWallet, Ko-Fi Webhook API",
    phases: [
      {
        phaseId: 1,
        title: "FÁZA 1: INICIALIZÁCIA A PLATOBNÝ AUDIT (0 - 10 min)",
        steps: [
          "Krok 01:: Zaznamenanie kliknutia na 'KÚPIŤ ČLENSTVO' alebo 'ODOMKNÚŤ ZA 4900 OC'.",
          "Krok 02:: Prečítanie a verifikácia UID operátora z aktívnej JWT relácie (Session Token).",
          "Krok 03:: Overenie zostatku OC kreditov v peňaženke / Overenie Fiat platby cez Ko-Fi Tiers.",
          "Krok 04:: Fixácia predplatného na 4 900 OC / 49.00 € mesačne s možnosťou viacmesačného stohovania.",
        ],
      },
      {
        phaseId: 2,
        title: "FÁZA 2: ZÁPIS OPRÁVNENÍ DO KERNELU (10 - 20 min)",
        steps: [
          "Krok 05:: Aktivácia kľúča TIER_PRO_VIP v tabuľke public.users v Supabase databáze.",
          "Krok 06:: Prepis premennej tier na hodnotu 'PRO' a kalkulácia expiračného dátumu tier_expires_at.",
          "Krok 07:: Odomknutie brán do 5 stredných dimenzií: ID03 Cash-Engine, ID04 Revenue-Architect, ID06 Data-Absorber, ID07 Skills-Tree a ID11 The-Recovery.",
          "Krok 08:: Nastavenie mesačnej kvóty +2 VIP Lístky v permissionsRegistry.js pre voľné sťahovanie kódexov.",
        ],
      },
      {
        phaseId: 3,
        title: "FÁZA 3: OČISTA PRACOVNÉHO PROSTREDIA (20 - 30 min)",
        steps: [
          "Krok 09:: Trvalá deaktivácia reklamných bannerov a promo paywallov naprieč celým systémom OS Genesis.",
          "Krok 10:: Sprístupnenie čistého Dark-Mode kódovacieho rozhrania Workspace bez kognitívneho trenia.",
          "Krok 11:: Aktivácia protokolu 'The Bridge' na Blogu pre asynchrónne diskusie s komunitou operátorov.",
          "Krok 12:: Odomknutie základných klientskych terminálov a prístup k štúdiu taktických blueprintov.",
        ],
      },
      {
        phaseId: 4,
        title: "FÁZA 4: VERIFIKÁCIA INTEGRITY & TOKENOMIKA (30 - 45 min)",
        steps: [
          "Krok 13:: Generovanie kryptografického podpisu relácie s autorizáciou Dušan Fajnor @nexus-core2Mb.",
          "Krok 14:: Zápis transakcie do GlobalShopHistory a GlobalWallet pod kategóriou SHOP / MEMBERSHIP.",
          "Krok 15:: Notifikačná injekcia do internej schránky operátora: 'Status PRO úspešne aktivovaný'.",
          "Krok 16:: Spustenie asynchrónneho auditného logu na ochranu proti neoprávnenému zdieľaniu prístupu.",
        ],
      },
      {
        phaseId: 5,
        title: "FÁZA 5: GHOST-MODE UPLINK A EXPIRÁCIA (45 - 60 min)",
        steps: [
          "Krok 17:: Rozsvietenie neónovo zeleného indikátora (#39FF14) v hlavičke ShopHeaderComponent a Profile.",
          "Krok 18:: Automatické ukladanie stavu do lokálneho úložiska (SessionStorage / LocalStorage caching).",
          "Krok 19:: Aktivácia automatického upozornenia 48 hodín pred expiráciou časového bloku.",
          "Krok 20:: Bezproblémové predĺženie jedným klikom cez tlačidlo 'STOHOVAŤ ČLENSTVO'.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Základný prístupový modul pre strednú vrstvu Matrixu. Odstraňuje reklamný balast, čistí Workspace a odomyká výpočtový výkon pre denný Workflow.",
      detailnyPopis:
        "Bionický vstupný uzol v hodnote 4900 OC (49.00 € / mes.). Aktivuje nový strojový kód v permissionsRegistry.js, ruší Paywall bariéry na PRO uzloch (ID03, ID04, ID06, ID07, ID11) a garantuje čisté kódovacie prostredie bez rušivých elementov.",
      coZiskas:
        "+2 plné stiahnutia VIP kódexov a balíkov mesačne zdarma, neobmedzené online štúdium PRO dimenzií, 100% čistý Workspace bez reklám a prioritný zákaznícky support.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre aktívnych vývojárov, študentov kódexov a operátorov, ktorí chcú systematicky budovať svoj návykový a vývojový systém.",
        preAkyTypCloveka:
          "Pre človeka, ktorý odmieta platiť za zbytočnú teóriu a hľadá priamu, asynchrónnu exekúciu bez vyrušovania.",
        preAkyTypSpolocnosti:
          "Pre solopreneurov, junior vývojárov a začínajúce digitálne projekty.",
      },
      kCemuSaTotoDaPouzit:
        "Na odstraňovanie kognitívneho trenia pri štúdiu, zrýchlenie prístupu k taktickým kódexom a bezpečnú prácu v Sieti Nexus.",
      akoToFunguje:
        "Po kliknutí na odomknutie backend v milisekunde overí 4900 OC kreditov (alebo Fiat bránu), prepíše TIER status na PRO v Supabase databáze a okamžite sprístupní PRO zbernicu.",
    },
    socialPosts: {
      long: {
        title:
          "🎬 KAMPAŇ 14: NEXUS PRO (SHOP MEMBERSHIP) | 🛡️ Získaj Základný Prístupový Modul a Znič Reklamný Šum",
        description:
          "💠 Tvoj Skafander si zaslúži čistý kód. NEXUS PRO je tvoja vstupná brána k hlbokej práci bez vyrušovania. Za menej ako cenu jednej kávy odomykáš všetky PRO uzly v OS Genesis, získavaš prístup k pokročilým IT a finančným protokolom a čistíš svoj priestor od reklám. Získaj svoj Access Key a staň sa suverénnym operátorom.\\n\\n🔴 ERROR LOG: Závislosť na FREE limite zahlcuje tvoj procesor reklamami a blokuje prístup k stredným vrstvám systému.\\n\\n🟢 RIEŠENIE: NEXUS PRO inštaluje čistý Workspace, odomyká 5 PRO dimenzií a prináša +2 VIP stiahnutia mesačne.\\n\\n🔵 UPLINK: Aktivuj si PRO status tu: 👇 https://ko-fi.com/cybertech_architect/tiers",
        kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
        shopLink: "https://projekt-nexus.sk/shop/shop/membership/CAMP_14",
        hashtags:
          "#NexusPro #CyberTech #Workflow #Produktivita #OsobnyRozvoj #Zarobok #ITskills #CyberPunk",
        pinnedComment:
          "📌 Prečo bežať na obmedzenej pamäti? Odomkni svoj PRO status a získaj plný prístup k strednej vrstve Nexusu. Odkaz: 👇 https://ko-fi.com/cybertech_architect/tiers",
      },
      shorts: {
        title:
          "🎬 KAMPAŇ 14: NEXUS PRO (SHOP MEMBERSHIP) ⚡ Tvoj systém beží na FREE limite? Čas na UPGRADE.",
        description:
          "💠 Odstráň reklamný balast a odomkni svoj Workflow s NEXUS PRO prístupom. 5 kľúčových dimenzií otvorené ihneď. Link v BIO!",
        kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
        shopLink: "https://projekt-nexus.sk/shop/shop/membership/CAMP_14",
        hashtags: "#NexusPro #Produktivita #Tech #Koder #ZivotnyStyl #Matrix",
        pinnedComment:
          "📌 Limitovaný prístup ťa brzdí. Klikni na link v BIO, inicializuj NEXUS PRO za 49 € mesačne. 👇 https://ko-fi.com/cybertech_architect/tiers",
      },
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "PRO TIER (Sovereign Member Clearance)",
      sha256CleanMaster:
        "F8F1AC7619F6EFE3B3474E27192C2C4D32F2ED10B5C7F5B878EA29AE7CB1479F",
      sha256PromoWatermark:
        "B804B869EACBDC34E5E901BBFCEE650B5D8292BCAB48087D00E4C11502D61E85",
    },
  },
  "nexus-omega-15": {
    id: "CAMP_15",
    nodeKey: "nexus-omega-15",
    title: "NEXUS OMEGA (NEXUS SHOP MEMBERSHIP)",
    fullName:
      "NEXUS OMEGA (NEXUS SHOP MEMBERSHIP) // ELITNÝ INVESTIČNÝ KVADRANT",
    slug: "nexus-omega-shop-membership-15",
    category: "MEMBERSHIP",
    subCategory: "membership",
    subCategoryTitle: "Členstvá OS Genesis",
    dimension: "ID03",
    dimensionTitle: "CASH-ENGINE (Dlhová Defragmentácia a Tokenomics)",
    tier: "OMEGA",
    tierCode: "TIER_OMEGA_VIP",
    color: "#FFD700",
    price: "69.00 € / mes",
    priceEur: 69.0,
    priceOc: 6900,
    ocPrice: 6900,
    displayPrice: "6 900 OC / 69.00 € / mes.",
    discountPercent: 0,
    isFree: false,
    isLifetime: false,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/15-nexus-omega-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/15-nexus-omega-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/15-nexus-omega-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/1x1_feed/15.%20NEXUS-OMEGAMIUM-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/9x16_shorts/15-nexus-omega-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/zip-all-formaty/15-nexus-omega_all-formats.zip",
    },
    youtubeId: "AYNiLdAb9Fo",
    kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
    spoilerIntro:
      "Prémiový dátový uzol a zlatý prístupový kľúč k elitnej investičnej vrstve Matrixu, uzamknutým OMEGA VIP archívom a obsahu z API Oracle.",
    goal: "Upsell aktívnych operátorov do VIP vrstvy, odomknutie pokročilých investičných stratégií a trvalá stabilizácia kapitálového toku.",
    funnel:
      "Bolesť (Zastavený rast, uzamknuté VIP archívy) ➔ Riešenie (Zlatý OMEGA kľúč) ➔ Akcia (Aktivácia za 6 900 OC alebo 69.00 € na Ko-Fi).",
    deliveryTime:
      "Instantný Auto-Uplink a udelenie VIP Clearance v milisekunde.",
    execTime: "Okamžite (Automatický realtime zápis do profilu)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools:
      "Supabase Auth, permissionsRegistry.js, GlobalWallet, API Oracle Client, Ko-Fi Webhook",
    phases: [
      {
        phaseId: 1,
        title: "FÁZA 1: INICIALIZÁCIA A PLATOBNÝ AUDIT (0 - 10 min)",
        steps: [
          "Krok 01:: Zaznamenanie kliknutia na 'KÚPIŤ ČLENSTVO' alebo 'ODOMKNÚŤ ZA 6900 OC'.",
          "Krok 02:: Prečítanie a verifikácia UID operátora z aktívnej JWT relácie (Session Token).",
          "Krok 03:: Overenie zostatku OC kreditov v peňaženke / Overenie Fiat platby cez Ko-Fi Tiers.",
          "Krok 04:: Fixácia predplatného na 6 900 OC / 69.00 € mesačne s možnosťou stohovania na 3, 6 alebo 12 mesiacov.",
        ],
      },
      {
        phaseId: 2,
        title: "FÁZA 2: ZÁPIS OMEGA VIP PRIVILÉGIÍ (10 - 20 min)",
        steps: [
          "Krok 05:: Aktivácia kľúča TIER_OMEGA_VIP v tabuľke public.users v Supabase databáze.",
          "Krok 06:: Prepis premennej tier na hodnotu 'OMEGA' a udelenie VIP roly operátora.",
          "Krok 07:: Odomknutie elitných dimenzií: ID05 Assets-Matrix (Investičný kvadrant), ID12 Nexus-Codex, ID13 Nexus-Habits a SYS02 Mentoring.",
          "Krok 08:: Sprístupnenie instantného sťahovania OMEGA VIP Archívov (KaaS PDF výťahy a taktické blueprinty).",
        ],
      },
      {
        phaseId: 3,
        title: "FÁZA 3: OVERCLOCKING A API ORACLE (20 - 30 min)",
        steps: [
          "Krok 09:: Aktivácia pripojenia k AI Oracle Advanced s vyššími limitmi pre generovanie a sémantickú dekompresiu.",
          "Krok 10:: Nastavenie mesačnej kvóty +2 OMEGA VIP Lístky v permissionsRegistry.js.",
          "Krok 11:: Odomknutie prístupu k prémiovým video záznamom a kódovacím reláciám zo Strojovne.",
          "Krok 12:: Automatické zaradenie do elitného kanála komunity s priamou odozvou moderátorov.",
        ],
      },
      {
        phaseId: 4,
        title: "FÁZA 4: VERIFIKÁCIA INTEGRITY & TOKENOMIKA (30 - 45 min)",
        steps: [
          "Krok 13:: Generovanie zlatého kryptografického podpisu s autorizáciou Dušan Fajnor @nexus-core2Mb.",
          "Krok 14:: Zápis transakcie do GlobalShopHistory a GlobalWallet pod kategóriou SHOP / MEMBERSHIP.",
          "Krok 15:: Injekcia systémovej správy: 'Status OMEGA VIP úspešne odomknutý'.",
          "Krok 16:: Nastavenie ochranných filtrov pred zneužitím VIP sťahovacích kvót.",
        ],
      },
      {
        phaseId: 5,
        title: "FÁZA 5: GHOST-MODE UPLINK A EXPIRÁCIA (45 - 60 min)",
        steps: [
          "Krok 17:: Rozsvietenie zlatého indikátora (#FFD700) v hlavičke ShopHeaderComponent a Profile.",
          "Krok 18:: Realtime synchronizácia naprieč všetkými otvorenými oknami (BroadcastChannel event).",
          "Krok 19:: Automatická notifikácia pred vypršaním predplateného časového úseku.",
          "Krok 20:: Možnosť stohovania ďalších mesiacov bez prerušenia VIP statusu.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Zlatá stredná cesta. Odomyká elitné brány k tvorbe kapitálu, investičnému kvadrantu (ID05) a prístupu k najhlbším VIP archívom.",
      detailnyPopis:
        "Prémiový dátový uzol v hodnote 6900 OC (69.00 € / mes.). Aktivuje TIER_OMEGA_VIP, odstraňuje paywally z OMEGA dimenzií a sprístupňuje API Oracle Advanced pre čítanie AI generovaného obsahu.",
      coZiskas:
        "Všetko z PRO verzie PLUS plný prístup k ID05 Assets-Matrix, ID12 Nexus-Codex, ID13 Nexus-Habits, SYS02 Mentoring, +2 OMEGA VIP lístky mesačne a zlatý VIP status.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre pokročilých operátorov, investorov, skúsených programátorov a ľudí budujúcich vlastné autonómne systémy.",
        preAkyTypCloveka:
          "Pre operátora, ktorý vyžaduje neobmedzený prístup k exaktným investičným dátam a odmieta limitácie.",
        preAkyTypSpolocnosti:
          "Pre technologické startupy, investičné kluby a rastúce digitálne agentúry.",
      },
      kCemuSaTotoDaPouzit:
        "Na budovanie vlastného kapitálového krytia, defragmentáciu návykov a čerpanie z najhlbšej vedomostnej databázy.",
      akoToFunguje:
        "Systém overí 6 900 OC kreditov (alebo platbu cez Ko-Fi), prepíše oprávnenia na OMEGA a okamžite odomkne zabezpečené VIP linky.",
    },
    socialPosts: {
      long: {
        title:
          "🎬 KAMPAŇ 15: NEXUS OMEGA (SHOP MEMBERSHIP) | 👑 Odomkni OMEGA VIP ARCHÍVY a Ovládni Svoj Systém",
        description:
          "💠 Základná výbava ťa dostane len po určitú hranicu. NEXUS OMEGA je prémiový dátový uzol navrhnutý výhradne pre pokročilých operátorov. Získaš všetko z PRO verzie PLUS plný prístup k uzamknutým OMEGA VIP ARCHÍVOM, elitným investičným stratégiám a API Oraclu.\\n\\n🔴 ERROR LOG: Chýbajúci prístup k elitným protokolom ťa drží v pasívnom strede Matrixu.\\n\\n🟢 RIEŠENIE: NEXUS OMEGA odomyká investičný kvadrant ID05, VIP trezor kódexov a sprístupňuje pokročilú inteligenciu Oracle.\\n\\n🔵 UPLINK: Získaj zlatý OMEGA status tu: 👇 https://ko-fi.com/cybertech_architect/tiers",
        kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
        shopLink: "https://projekt-nexus.sk/shop/shop/membership/CAMP_15",
        hashtags:
          "#NexusOmega #Tech #Success #Matrix #OmegaKey #CyberPunk #Investovanie #VIP",
        pinnedComment:
          "📌 Neuspokoj sa so základom. Klikni na link, inicializuj NEXUS OMEGA a získaj VIP prístup k najhlbším kódom systému: 👇 https://ko-fi.com/cybertech_architect/tiers",
      },
      shorts: {
        title:
          "🎬 KAMPAŇ 15: NEXUS OMEGA (SHOP MEMBERSHIP) ⚡ OMEGA VIP ARCHÍVY sú pre teba zamknuté? Čas na OMEGA kľúč.",
        description:
          "💠 Získaj prémiový dátový uzol NEXUS OMEGA a odomkni absolútnu dominanciu v Matrixe. Investičný kvadrant a VIP archívy ihneď. Link v BIO!",
        kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
        shopLink: "https://projekt-nexus.sk/shop/shop/membership/CAMP_15",
        hashtags: "#NexusOmega #Tech #Matrix #OmegaKey #Investicie #VIP",
        pinnedComment:
          "📌 Prevezmi kontrolu nad svojím kapitálom. Inicializuj NEXUS OMEGA za 69 € mesačne. 👇 https://ko-fi.com/cybertech_architect/tiers",
      },
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "OMEGA VIP TIER (Elite Master Clearance)",
      sha256CleanMaster:
        "90125BAD2FC9424C54BA74C8991D551387B9D675AF646A7F8917A8C89F73A787",
      sha256PromoWatermark:
        "D39F925108BAC5F58436A4D83A8C58C19BEFC2F2D5D78E1108BE1D6E53D45D70",
    },
  },
  "master-architect-16": {
    id: "CAMP_16",
    nodeKey: "master-architect-16",
    title: "MASTER ARCHITECT (NEXUS SHOP MEMBERSHIP)",
    fullName:
      "MASTER ARCHITECT (NEXUS SHOP MEMBERSHIP) // ROOT ACCESS & 1V1 MENTORING",
    slug: "master-architect-shop-membership-16",
    category: "MEMBERSHIP",
    subCategory: "membership",
    subCategoryTitle: "Členstvá OS Genesis",
    dimension: "ID09",
    dimensionTitle: "SERGEANT-CORE (Taktické Riadiace Centrum)",
    tier: "MASTER",
    tierCode: "TIER_MASTER_VIP",
    color: "#FF003C",
    price: "99.00 € / mes",
    priceEur: 99.0,
    priceOc: 9900,
    ocPrice: 9900,
    displayPrice: "9 900 OC / 99.00 € / mes.",
    discountPercent: 0,
    isFree: false,
    isLifetime: false,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/16-master-architect-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/16-master-architect-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/16x9_desktop/16-master-architect-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/1x1_feed/16.%20%20MASTERMIUM-ARCHITECT-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/9x16_shorts/16-master-architect-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/membershipMaster/zip-all-formaty/16-master-architect_all-formats.zip",
    },
    youtubeId: "AYNiLdAb9Fo",
    kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
    spoilerIntro:
      "Absolútny prístup k jadru OS Genesis (Root Access) ku všetkým 16 kognitívnym dimenziám spojený s osobným, prioritným asynchrónnym mentoringom s Architektom.",
    goal: "Maximálna systémová nadvláda. Priamy mentoring na vyriešenie existenčných a kódových Error logov, stavba autonómnych systémov a B2B franšíz.",
    funnel:
      "Bolesť (Systémový kolaps, chaos v architektúre, limitované práva) ➔ Riešenie (Karmínový CROWN Root Access) ➔ Akcia (Aktivácia za 9 900 OC alebo 99.00 € na Ko-Fi).",
    deliveryTime:
      "Instantný Root Access a otvorenie priamej komunikačnej linky v Strojovni.",
    execTime: "Okamžite (Automatický realtime zápis do profilu)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools:
      "Supabase Root Auth, permissionsRegistry.js, GlobalWallet, Priamy mentoringový terminál",
    phases: [
      {
        phaseId: 1,
        title: "FÁZA 1: INICIALIZÁCIA A PLATOBNÝ AUDIT (0 - 10 min)",
        steps: [
          "Krok 01:: Zaznamenanie kliknutia na 'KÚPIŤ ČLENSTVO' alebo 'ODOMKNÚŤ ZA 9900 OC'.",
          "Krok 02:: Prečítanie a verifikácia UID operátora z aktívnej JWT relácie (Session Token).",
          "Krok 03:: Overenie zostatku OC kreditov v peňaženke / Overenie Fiat platby cez Ko-Fi Tiers.",
          "Krok 04:: Fixácia finálnej ceny na 9 900 OC / 99.00 € mesačne s možnosťou stohovania.",
        ],
      },
      {
        phaseId: 2,
        title: "FÁZA 2: ZÁPIS ROOT ACCESSU A CROWN LICENCIE (10 - 20 min)",
        steps: [
          "Krok 05:: Aktivácia kľúča TIER_MASTER_VIP a roly MASTER v tabuľke public.users v Supabase databáze.",
          "Krok 06:: Prepis premennej tier na 'MASTER' a odomknutie kompletného 16-dimenzionálneho priestoru (ID00 až ID15).",
          "Krok 07:: Udelenie CROWN odznaku s karmínovou žiarou (#FF003C) naprieč celým rozhraním OS Genesis.",
          "Krok 08:: Neobmedzený priepust ku všetkým 1 600 uzlom, B2B franšízam a taktickým kódexom.",
        ],
      },
      {
        phaseId: 3,
        title: "FÁZA 3: OTVORENIE MENTORINGOVÉHO PORTU (20 - 30 min)",
        steps: [
          "Krok 09:: Otvorenie priameho chráneného komunikačného portu na 1v1 prioritný asynchrónny mentoring s Architektom (Dušan Fajnor).",
          "Krok 10:: Nastavenie najvyššej priority pri spracovaní Error logov tvojho front-endu a biznis architektúry.",
          "Krok 11:: Odomknutie plného AI Oracle Advanced bez akýchkoľvek obmedzení tokenov a dopytov.",
          "Krok 12:: Prístup k privátnym vývojárskym repozitárom a proprietárnym blueprintom OS Genesis.",
        ],
      },
      {
        phaseId: 4,
        title: "FÁZA 4: VERIFIKÁCIA INTEGRITY & TOKENOMIKA (30 - 45 min)",
        steps: [
          "Krok 13:: Generovanie najvyššieho kryptografického odtlačku s podpisom Dušan Fajnor @nexus-core2Mb.",
          "Krok 14:: Zápis transakcie do GlobalShopHistory a GlobalWallet pod kategóriou SHOP / MEMBERSHIP.",
          "Krok 15:: Injekcia systémovej správy: 'Status MASTER ARCHITECT úspešne inicializovaný. Vitaj v jadre.'",
          "Krok 16:: Zosúladenie s permissionsRegistry.js: maximálna priepustnosť +2 MASTER VIP lístky mesačne.",
        ],
      },
      {
        phaseId: 5,
        title: "FÁZA 5: GHOST-MODE UPLINK A EXPIRÁCIA (45 - 60 min)",
        steps: [
          "Krok 17:: Rozsvietenie karmínového indikátora (#FF003C) v hlavičke ShopHeaderComponent a Profile.",
          "Krok 18:: Realtime synchronizácia stavu cez Supabase Realtime WebSocket kanál.",
          "Krok 19:: Automatická notifikácia pred koncom mesiaca s ponukou predĺženia za OC alebo EUR.",
          "Krok 20:: Možnosť neprerušeného stohovania na celú ročnú kampaň.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Absolútny administrátorský prístup (Root Access) k celému ekosystému OS Genesis spojený s osobným asynchrónnym mentoringom s Architektom.",
      detailnyPopis:
        "Najvyšší systémový rank v hodnote 9900 OC (99.00 € / mes.). Poskytuje neobmedzenú priepustnosť ku všetkým 1 600 uzlom, B2B franšízam, vývojárskym kapacitám a priamemu riešeniu systémových Error logov v tvojom biznise.",
      coZiskas:
        "Root Access k celej Sieti, 1v1 prioritný asynchrónny mentoring priamo s Architektom (Dušan Fajnor), +2 MASTER stiahnutia mesačne, prednostné B2B práva a karmínový CROWN odznak.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre lídrov, zakladateľov projektov, enterprise partnerov a vizionárov.",
        preAkyTypCloveka:
          "Pre človeka, ktorý hľadá priameho mentora a chce nemilosrdne vyrezať chyby zo svojho kódu, biznisu aj života.",
        preAkyTypSpolocnosti:
          "Pre B2B podniky, franšízové pobočky a technologické startupy.",
      },
      kCemuSaTotoDaPouzit:
        "Na kompletný audit vlastnej architektúry, stavbu vlastných SaaS terminálov, licencovanie franšízy a osobný overclocking.",
      akoToFunguje:
        "Systém zapíše CROWN privilegovaný kľúč, odomkne priamu linku do Strojovne a udelí neobmedzenú priepustnosť do všetkých dimenzií.",
    },
    socialPosts: {
      long: {
        title:
          "🎬 KAMPAŇ 16: MASTER ARCHITECT (SHOP MEMBERSHIP) | 🧠 Absolútny Prístup k Jadru a Osobný Mentoring",
        description:
          "💠 Tvoj Skafander je preťažený a dáta sú v chaose? Odomkni najvyššiu úroveň Matrixu. MASTER ARCHITECT ti dáva plný Root Access ku všetkým uzlom OS Genesis a garantuje môj osobný, prioritný asynchrónny mentoring. Zanalyzujem tvoj problém, odstránim informačný šum a spoločne preinštalujeme tvoj zlyhávajúci systém. Žiadny balast, len čistá exekúcia. Získaj svoj karmínový Access Key.\\n\\n🔴 ERROR LOG: Narážanie na systémové limity a neschopnosť vyriešiť hlboké architektonické chyby spomaľuje tvoj rast.\\n\\n🟢 RIEŠENIE: MASTER ARCHITECT prináša doživotné kľúče, priamy prístup do Strojovne a 1v1 mentoring s Architektom.\\n\\n🔵 UPLINK: Získaj karmínový Root Access tu: 👇 https://ko-fi.com/cybertech_architect/tiers",
        kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
        shopLink: "https://projekt-nexus.sk/shop/shop/membership/CAMP_16",
        hashtags:
          "#MasterArchitect #Tech #Mentor #Matrix #CyberPunk #Success #RootAccess #OSGenesis",
        pinnedComment:
          "📌 Keď bežné updaty nestačia, potrebuješ Root prístup. Klikni na link v BIO, inicializuj MASTER ARCHITECT a prevezmi kontrolu nad jadrom: 👇 https://ko-fi.com/cybertech_architect/tiers",
      },
      shorts: {
        title:
          "🎬 KAMPAŇ 16: MASTER ARCHITECT (SHOP MEMBERSHIP) ⚡ Chaos v dátach a živote? Potrebuješ ROOT prístup.",
        description:
          "💠 Zastav prehrievanie procesora a získaj môj osobný mentoring s najvyšším karmínovým kľúčom. Root Access ku všetkým 16 dimenziám ihneď. Link v BIO!",
        kofiLink: "https://ko-fi.com/cybertech_architect/tiers",
        shopLink: "https://projekt-nexus.sk/shop/shop/membership/CAMP_16",
        hashtags: "#MasterArchitect #Tech #Mentor #Matrix #CyberPunk #Success",
        pinnedComment:
          "📌 Prestaň si Matrix prenajímať, začni ho vlastniť. Inicializuj MASTER ARCHITECT tu: 👇 https://ko-fi.com/cybertech_architect/tiers",
      },
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "CROWN MASTER TIER (Absolute Root Clearance)",
      sha256CleanMaster:
        "7092FBB760F83ACF15156272DF3892A531C372E49D4E768DAF83733D8B129360",
      sha256PromoWatermark:
        "3EDD2BAF96C4DEC098BADDB8C53B7A7F7FFEEE066980BEE1602CAE4821754766",
    },
  },
};

export const MembershipData = Object.values(MEMBERSHIP_DATA);
export default MEMBERSHIP_DATA;
