// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SHOP PACKS DATA REGISTER V20.50)
// File: src/data/ShopPage/Packs.js
// Status: STRICTLY GROUNDED // 5 OC PACKS // 100% SUPABASE CDN READY
// Standard: V20 TRINITY SPECIFICATION // FULL NEUROMARKETING & 20-STEP PROTOCOL
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

export const PACKS_DATA = {
  "pocket-pack-18": {
    id: "CAMP_18",
    nodeKey: "pocket-pack-18",
    title: "POCKET PACK (500 OC)",
    fullName: "POCKET PACK (500 OC) // POCKET PACK (500 OC KREDITOV)",
    slug: "pocket-pack-18",
    category: "PACKS",
    subCategory: "oc-packs",
    subCategoryTitle: "Kreditné Balíky OS Genesis (Tokenomics)",
    dimension: "ID03",
    dimensionTitle: "ID03 | CASH-ENGINE (Finance UI Space)",
    tier: "FREE",
    tierCode: "TIER_FREE_ONBOARDING",
    color: "#00FFFF",
    price: "5.00 €",
    priceEur: 5.0,
    priceOc: 500,
    ocPrice: null,
    displayPrice: "5.00 € (500 OC)",
    discountPercent: 0,
    isFree: false,
    isLifetime: false,
    isPack: true,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/18-pocket-pack-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/18-pocket-pack-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/18-pocket-pack-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/1x1_feed/18.%20POCKET_PACK-%28500%20OC%29-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/18-pocket-pack-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/18-pocket-pack_all-formats.zip",
      zipUrl:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/18-pocket-pack_all-formats.zip",
    },
    youtubeId: "mF0v6VBQlbw",
    kofiLink: "https://ko-fi.com/s/f20aa188e8",
    spoilerIntro:
      "Jednorazové palivo v hodnote 5.00 € (500 OC). Slúži na bleskové premostenie Paywallu pri špecifických uzloch bez mesačných záväzkov.",
    goal: "Základná kreditná dotácia na vyskúšanie Tokenomics a odomknutie jednotlivých mikro-modulov.",
    funnel:
      "Nedostatok kreditov ➔ Výber balíka POCKET PACK (500 OC) ➔ Realtime dotácia peňaženky cez Ko-Fi.",
    deliveryTime: "Okamžite (Automatizovaný systémový Auto-Uplink).",
    execTime: "1 - 3 minúty (Realtime webhook synchronizácia)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools: "Stripe, Ko-Fi Webhook API, Supabase Auth, GlobalWallet",
    phases: [
      {
        phaseId: 1,
        title: "📥 FÁZA 1: INICIALIZÁCIA A CHECK-OUT (POCKET PACK (500 OC))",
        steps: [
          "Úkon 01: Výber balíka POCKET PACK (500 OC) v obchodnom rozhraní OS Genesis.",
          "Úkon 02: Presmerovanie na zabezpečenú platobnú bránu Ko-Fi.",
          "Úkon 03: Potvrdenie transakcie 5.00 € za kreditnú dotáciu.",
          "Úkon 04: Zápis autorizačného e-mailu operátora do platobného príkazu.",
        ],
      },
      {
        phaseId: 2,
        title: "💳 FÁZA 2: SYSTÉMOVÁ VALIDÁCIA (Routing & Webhook)",
        steps: [
          "Úkon 05: Bezpečná transakcia 5.00 € cez šifrovaný portál.",
          "Úkon 06: Zachytenie webhooku a verifikácia transakčného ID.",
          "Úkon 07: Spárovanie identity s tabuľkou profiles v Supabase.",
          "Úkon 08: Vygenerovanie auditného logu s časovou pečiatkou.",
        ],
      },
      {
        phaseId: 3,
        title: "🔓 FÁZA 3: PRIPÍSANIE KREDITOV (Balance Injection)",
        steps: [
          "Úkon 09: Pripísanie +500 OC do digitálnej peňaženky operátora.",
          "Úkon 10: Inkrementácia zostatku v komponente GlobalWallet.",
          "Úkon 11: Zápis úspešného nákupu do histórie GlobalShopHistory.",
          "Úkon 12: Odoslanie potvrdzujúcej notifikácie do GlobalMessages.",
        ],
      },
      {
        phaseId: 4,
        title: "👁️ FÁZA 4: SÉMANTICKÁ INTEGRÁCIA (Tokenomics Sync)",
        steps: [
          "Úkon 13: Odomknutie nákupných tlačidiel pre cieľové moduly a kódexy.",
          "Úkon 14: Odstránenie Paywall bariér pri zodpovedajúcich uzloch.",
          "Úkon 15: Automatická rekalibrácia peňaženky pre plynulú prácu.",
          "Úkon 16: Nastavenie bezpečnostného firewallu pre bezpečný zostatok.",
        ],
      },
      {
        phaseId: 5,
        title: "🚀 FÁZA 5: UPLINK A STABILIZÁCIA (Runtime Ready)",
        steps: [
          "Úkon 17: Uvoľnenie systémovej pamäte a potvrdenie pripravenosti.",
          "Úkon 18: Audit dátového toku a fixácia kreditu bez expirácie.",
          "Úkon 19: Asynchrónna kontrola integrity peňaženky s cloudom.",
          "Úkon 20: Plná kontrola operátora nad využitím 500 OC v celom e-shope.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Základná kreditná dotácia na vyskúšanie Tokenomics a odomknutie jednotlivých mikro-modulov.",
      detailnyPopis:
        "Jednorazové palivo v hodnote 5.00 € (500 OC). Slúži na bleskové premostenie Paywallu pri špecifických uzloch bez mesačných záväzkov.",
      coZiskas:
        "500 Oracle Kreditov (OC) pripísaných okamžite na tvoj Cloud Balance účet.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre operátorov, vývojárov a architektov budujúcich vlastný digitálny systém.",
        preAkyTypCloveka:
          "Pre človeka, ktorý potrebuje jednorazovo stiahnuť jeden konkrétny súbor.",
        preAkyTypSpolocnosti: "Pre mikro-projekty s minimálnym rozpočtom.",
      },
      kCemuSaTotoDaPouzit:
        "Na odomknutie 1x Matrix FX efektu alebo mikro-manuálu.",
      akoToFunguje:
        "Po úhrade cez Stripe / Ko-Fi webhook automaticky pripíše kredity do profilu operátora.",
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "TIER FREE / PACKS SPECIFICATION",
      sha256CleanMaster:
        "ADE051B7CFBE5B974BE44FEEA7F010C1C5F23F7FEF449BB4A048AEDBF4AE0119",
      sha256PromoWatermark:
        "F0B71C2D12147C801D9869B96DED35B85475FC35316721FD1CAF98418FCDEFE3",
    },
  },
  "starter-pack-19": {
    id: "CAMP_19",
    nodeKey: "starter-pack-19",
    title: "STARTER PACK (2 500 OC)",
    fullName: "STARTER PACK (2 500 OC) // STARTER PACK (2 500 OC KREDITOV)",
    slug: "starter-pack-19",
    category: "PACKS",
    subCategory: "oc-packs",
    subCategoryTitle: "Kreditné Balíky OS Genesis (Tokenomics)",
    dimension: "ID03",
    dimensionTitle: "ID03 | CASH-ENGINE (Finance UI Space)",
    tier: "PRO",
    tierCode: "TIER_PRO_VIP",
    color: "#00F3FF",
    price: "25.00 €",
    priceEur: 25.0,
    priceOc: 2500,
    ocPrice: null,
    displayPrice: "25.00 € (2 500 OC)",
    discountPercent: 0,
    isFree: false,
    isLifetime: false,
    isPack: true,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/19-starter-pack-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/19-starter-pack-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/19-starter-pack-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/1x1_feed/19.%20STARTER_PACK-%282500%20OC%29-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/19-starter-pack-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/19-starter-pack_all-formats.zip",
      zipUrl:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/19-starter-pack_all-formats.zip",
    },
    youtubeId: "mF0v6VBQlbw",
    kofiLink: "https://ko-fi.com/s/be1ce2d9a6",
    spoilerIntro:
      "Štandardná dátová dotácia v hodnote 25.00 € (2 500 OC). Vhodná na získanie celých balíkov KaaS manuálov alebo FREE/FREEMIUM archívov.",
    goal: "Štartovací balík pre aktívneho operátora na odomknutie Knižných Sémantických Výťahov.",
    funnel:
      "Nedostatok kreditov ➔ Výber balíka STARTER PACK (2 500 OC) ➔ Realtime dotácia peňaženky cez Ko-Fi.",
    deliveryTime: "Okamžite (Automatizovaný systémový Auto-Uplink).",
    execTime: "1 - 3 minúty (Realtime webhook synchronizácia)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools: "Stripe, Ko-Fi Webhook API, Supabase Auth, GlobalWallet",
    phases: [
      {
        phaseId: 1,
        title: "📥 FÁZA 1: INICIALIZÁCIA A CHECK-OUT (STARTER PACK (2 500 OC))",
        steps: [
          "Úkon 01: Výber balíka STARTER PACK (2 500 OC) v obchodnom rozhraní OS Genesis.",
          "Úkon 02: Presmerovanie na zabezpečenú platobnú bránu Ko-Fi.",
          "Úkon 03: Potvrdenie transakcie 25.00 € za kreditnú dotáciu.",
          "Úkon 04: Zápis autorizačného e-mailu operátora do platobného príkazu.",
        ],
      },
      {
        phaseId: 2,
        title: "💳 FÁZA 2: SYSTÉMOVÁ VALIDÁCIA (Routing & Webhook)",
        steps: [
          "Úkon 05: Bezpečná transakcia 25.00 € cez šifrovaný portál.",
          "Úkon 06: Zachytenie webhooku a verifikácia transakčného ID.",
          "Úkon 07: Spárovanie identity s tabuľkou profiles v Supabase.",
          "Úkon 08: Vygenerovanie auditného logu s časovou pečiatkou.",
        ],
      },
      {
        phaseId: 3,
        title: "🔓 FÁZA 3: PRIPÍSANIE KREDITOV (Balance Injection)",
        steps: [
          "Úkon 09: Pripísanie +2,500 OC do digitálnej peňaženky operátora.",
          "Úkon 10: Inkrementácia zostatku v komponente GlobalWallet.",
          "Úkon 11: Zápis úspešného nákupu do histórie GlobalShopHistory.",
          "Úkon 12: Odoslanie potvrdzujúcej notifikácie do GlobalMessages.",
        ],
      },
      {
        phaseId: 4,
        title: "👁️ FÁZA 4: SÉMANTICKÁ INTEGRÁCIA (Tokenomics Sync)",
        steps: [
          "Úkon 13: Odomknutie nákupných tlačidiel pre cieľové moduly a kódexy.",
          "Úkon 14: Odstránenie Paywall bariér pri zodpovedajúcich uzloch.",
          "Úkon 15: Automatická rekalibrácia peňaženky pre plynulú prácu.",
          "Úkon 16: Nastavenie bezpečnostného firewallu pre bezpečný zostatok.",
        ],
      },
      {
        phaseId: 5,
        title: "🚀 FÁZA 5: UPLINK A STABILIZÁCIA (Runtime Ready)",
        steps: [
          "Úkon 17: Uvoľnenie systémovej pamäte a potvrdenie pripravenosti.",
          "Úkon 18: Audit dátového toku a fixácia kreditu bez expirácie.",
          "Úkon 19: Asynchrónna kontrola integrity peňaženky s cloudom.",
          "Úkon 20: Plná kontrola operátora nad využitím 2,500 OC v celom e-shope.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Štartovací balík pre aktívneho operátora na odomknutie Knižných Sémantických Výťahov.",
      detailnyPopis:
        "Štandardná dátová dotácia v hodnote 25.00 € (2 500 OC). Vhodná na získanie celých balíkov KaaS manuálov alebo FREE/FREEMIUM archívov.",
      coZiskas:
        "2 500 Oracle Kreditov (OC) na neobmedzené použitie v celom obchode.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre operátorov, vývojárov a architektov budujúcich vlastný digitálny systém.",
        preAkyTypCloveka:
          "Pre operátora, ktorý študuje Mŕtve Knihy (Eckhart Tolle, Osho, Ruiz).",
        preAkyTypSpolocnosti: "Pre malé vývojové tímy a začínajúcich tvorcov.",
      },
      kCemuSaTotoDaPouzit:
        "Na nákup 1x kompletného Knižného Výťahu (2500 OC) alebo 5x mikro-modulov.",
      akoToFunguje:
        "Po úhrade cez Stripe / Ko-Fi webhook automaticky pripíše kredity do profilu operátora.",
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "TIER PRO / PACKS SPECIFICATION",
      sha256CleanMaster:
        "292F26E0CCF4DC216E49587670E1D41FB9E4F379D288BAD356F74E3867BBD8AE",
      sha256PromoWatermark:
        "AD99DA0F61E09D561141A727649F5ECC4220D9A716F2C731613D08ACAAAADC0B",
    },
  },
  "marathon-pack-20": {
    id: "CAMP_20",
    nodeKey: "marathon-pack-20",
    title: "MARATHON PACK (5 500 OC)",
    fullName: "MARATHON PACK (5 500 OC) // MARATHON PACK (5 500 OC KREDITOV)",
    slug: "marathon-pack-20",
    category: "PACKS",
    subCategory: "oc-packs",
    subCategoryTitle: "Kreditné Balíky OS Genesis (Tokenomics)",
    dimension: "ID03",
    dimensionTitle: "ID03 | CASH-ENGINE (Finance UI Space)",
    tier: "PRO",
    tierCode: "TIER_PRO_VIP",
    color: "#A855F7",
    price: "50.00 €",
    priceEur: 50.0,
    priceOc: 5500,
    ocPrice: null,
    displayPrice: "50.00 € (5 500 OC Promo)",
    discountPercent: 10,
    isFree: false,
    isLifetime: false,
    isPack: true,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/20-marathon-pack-promo-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/20-marathon-pack-promo-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/20-marathon-pack-promo-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/1x1_feed/20.%20MARATHON_PACK-%285500%20OC%29-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/20-marathon-pack-promo-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/20-marathon-pack-promo_all-formats.zip",
      zipUrl:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/20-marathon-pack-promo_all-formats.zip",
    },
    youtubeId: "mF0v6VBQlbw",
    kofiLink: "https://ko-fi.com/s/79934a3103",
    spoilerIntro:
      "Výhodný energetický balík v hodnote 50.00 € (5 500 OC). Obsahuje bonusové kredity (+500 OC zdarma) pre plynulú prácu bez prerušenia.",
    goal: "Zvýhodnená promo zásoba paliva pre intenzívnu dekompresiu dát a dlhodobú študijnú sériu.",
    funnel:
      "Nedostatok kreditov ➔ Výber balíka MARATHON PACK (5 500 OC) ➔ Realtime dotácia peňaženky cez Ko-Fi.",
    deliveryTime: "Okamžite (Automatizovaný systémový Auto-Uplink).",
    execTime: "1 - 3 minúty (Realtime webhook synchronizácia)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools: "Stripe, Ko-Fi Webhook API, Supabase Auth, GlobalWallet",
    phases: [
      {
        phaseId: 1,
        title:
          "📥 FÁZA 1: INICIALIZÁCIA A CHECK-OUT (MARATHON PACK (5 500 OC))",
        steps: [
          "Úkon 01: Výber balíka MARATHON PACK (5 500 OC) v obchodnom rozhraní OS Genesis.",
          "Úkon 02: Presmerovanie na zabezpečenú platobnú bránu Ko-Fi.",
          "Úkon 03: Potvrdenie transakcie 50.00 € za kreditnú dotáciu.",
          "Úkon 04: Zápis autorizačného e-mailu operátora do platobného príkazu.",
        ],
      },
      {
        phaseId: 2,
        title: "💳 FÁZA 2: SYSTÉMOVÁ VALIDÁCIA (Routing & Webhook)",
        steps: [
          "Úkon 05: Bezpečná transakcia 50.00 € cez šifrovaný portál.",
          "Úkon 06: Zachytenie webhooku a verifikácia transakčného ID.",
          "Úkon 07: Spárovanie identity s tabuľkou profiles v Supabase.",
          "Úkon 08: Vygenerovanie auditného logu s časovou pečiatkou.",
        ],
      },
      {
        phaseId: 3,
        title: "🔓 FÁZA 3: PRIPÍSANIE KREDITOV (Balance Injection)",
        steps: [
          "Úkon 09: Pripísanie +5,500 OC do digitálnej peňaženky operátora.",
          "Úkon 10: Inkrementácia zostatku v komponente GlobalWallet.",
          "Úkon 11: Zápis úspešného nákupu do histórie GlobalShopHistory.",
          "Úkon 12: Odoslanie potvrdzujúcej notifikácie do GlobalMessages.",
        ],
      },
      {
        phaseId: 4,
        title: "👁️ FÁZA 4: SÉMANTICKÁ INTEGRÁCIA (Tokenomics Sync)",
        steps: [
          "Úkon 13: Odomknutie nákupných tlačidiel pre cieľové moduly a kódexy.",
          "Úkon 14: Odstránenie Paywall bariér pri zodpovedajúcich uzloch.",
          "Úkon 15: Automatická rekalibrácia peňaženky pre plynulú prácu.",
          "Úkon 16: Nastavenie bezpečnostného firewallu pre bezpečný zostatok.",
        ],
      },
      {
        phaseId: 5,
        title: "🚀 FÁZA 5: UPLINK A STABILIZÁCIA (Runtime Ready)",
        steps: [
          "Úkon 17: Uvoľnenie systémovej pamäte a potvrdenie pripravenosti.",
          "Úkon 18: Audit dátového toku a fixácia kreditu bez expirácie.",
          "Úkon 19: Asynchrónna kontrola integrity peňaženky s cloudom.",
          "Úkon 20: Plná kontrola operátora nad využitím 5,500 OC v celom e-shope.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Zvýhodnená promo zásoba paliva pre intenzívnu dekompresiu dát a dlhodobú študijnú sériu.",
      detailnyPopis:
        "Výhodný energetický balík v hodnote 50.00 € (5 500 OC). Obsahuje bonusové kredity (+500 OC zdarma) pre plynulú prácu bez prerušenia.",
      coZiskas:
        "5 000 OC + 500 OC BONUS (spolu 5 500 Oracle Kreditov) do internej peňaženky operátora.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre operátorov, vývojárov a architektov budujúcich vlastný digitálny systém.",
        preAkyTypCloveka:
          "Pre človeka, ktorý absolvuje hĺbkový reštart návykov a mysle.",
        preAkyTypSpolocnosti: "Pre IT agentúry nakupujúce podklady pre tímy.",
      },
      kCemuSaTotoDaPouzit:
        "Na odomknutie PRO kódexov, aplikácií a taktických manuálov.",
      akoToFunguje:
        "Po úhrade cez Stripe / Ko-Fi webhook automaticky pripíše kredity do profilu operátora.",
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "TIER PRO / PACKS SPECIFICATION",
      sha256CleanMaster:
        "B90040E15B3801AEC48F04B40FF5C3D64D6C5063BC1CA942A413BE7C0700E344",
      sha256PromoWatermark:
        "9A57D20B98970B46B3426CA2849648E2D41CD461D7465D4B68295A4C72FFDDD3",
    },
  },
  "omega-key-pack-21": {
    id: "CAMP_21",
    nodeKey: "omega-key-pack-21",
    title: "OMEGA KEY PACK (11 000 OC)",
    fullName:
      "OMEGA KEY PACK (11 000 OC) // OMEGA KEY PACK (11 000 OC KREDITOV)",
    slug: "omega-key-pack-21",
    category: "PACKS",
    subCategory: "oc-packs",
    subCategoryTitle: "Kreditné Balíky OS Genesis (Tokenomics)",
    dimension: "ID05",
    dimensionTitle: "ID05 | ASSETS-MATRIX (Investičný Kvadrant)",
    tier: "OMEGA",
    tierCode: "TIER_OMEGA_VIP",
    color: "#FFD700",
    price: "99.00 €",
    priceEur: 99.0,
    priceOc: 11000,
    ocPrice: null,
    displayPrice: "99.00 € (11 000 OC Full Access)",
    discountPercent: 10,
    isFree: false,
    isLifetime: false,
    isPack: true,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/21-omega-key-pack-full-access-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/21-omega-key-pack-full-access-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/21-omega-key-pack-full-access-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/1x1_feed/21.%20OMEGAMIUM_Key_PACK-%2811%20000%20OC%29-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/21-omega-key-pack-full-access-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/21-omega-key-pack-full-access_all-formats.zip",
      zipUrl:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/21-omega-key-pack-full-access_all-formats.zip",
    },
    youtubeId: "mF0v6VBQlbw",
    kofiLink: "https://ko-fi.com/s/661a7ac973",
    spoilerIntro:
      "Veľkokapacitný dátový trezor v hodnote 99.00 € (11 000 OC). Odomyká celú databázu OMEGA VIP Archívov a ročné licencie aplikácií.",
    goal: "Masívna alokácia internej energie pre náročných operátorov vyžadujúcich VIP prístupy.",
    funnel:
      "Nedostatok kreditov ➔ Výber balíka OMEGA KEY PACK (11 000 OC) ➔ Realtime dotácia peňaženky cez Ko-Fi.",
    deliveryTime: "Okamžite (Automatizovaný systémový Auto-Uplink).",
    execTime: "1 - 3 minúty (Realtime webhook synchronizácia)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools: "Stripe, Ko-Fi Webhook API, Supabase Auth, GlobalWallet",
    phases: [
      {
        phaseId: 1,
        title:
          "📥 FÁZA 1: INICIALIZÁCIA A CHECK-OUT (OMEGA KEY PACK (11 000 OC))",
        steps: [
          "Úkon 01: Výber balíka OMEGA KEY PACK (11 000 OC) v obchodnom rozhraní OS Genesis.",
          "Úkon 02: Presmerovanie na zabezpečenú platobnú bránu Ko-Fi.",
          "Úkon 03: Potvrdenie transakcie 99.00 € za kreditnú dotáciu.",
          "Úkon 04: Zápis autorizačného e-mailu operátora do platobného príkazu.",
        ],
      },
      {
        phaseId: 2,
        title: "💳 FÁZA 2: SYSTÉMOVÁ VALIDÁCIA (Routing & Webhook)",
        steps: [
          "Úkon 05: Bezpečná transakcia 99.00 € cez šifrovaný portál.",
          "Úkon 06: Zachytenie webhooku a verifikácia transakčného ID.",
          "Úkon 07: Spárovanie identity s tabuľkou profiles v Supabase.",
          "Úkon 08: Vygenerovanie auditného logu s časovou pečiatkou.",
        ],
      },
      {
        phaseId: 3,
        title: "🔓 FÁZA 3: PRIPÍSANIE KREDITOV (Balance Injection)",
        steps: [
          "Úkon 09: Pripísanie +11,000 OC do digitálnej peňaženky operátora.",
          "Úkon 10: Inkrementácia zostatku v komponente GlobalWallet.",
          "Úkon 11: Zápis úspešného nákupu do histórie GlobalShopHistory.",
          "Úkon 12: Odoslanie potvrdzujúcej notifikácie do GlobalMessages.",
        ],
      },
      {
        phaseId: 4,
        title: "👁️ FÁZA 4: SÉMANTICKÁ INTEGRÁCIA (Tokenomics Sync)",
        steps: [
          "Úkon 13: Odomknutie nákupných tlačidiel pre cieľové moduly a kódexy.",
          "Úkon 14: Odstránenie Paywall bariér pri zodpovedajúcich uzloch.",
          "Úkon 15: Automatická rekalibrácia peňaženky pre plynulú prácu.",
          "Úkon 16: Nastavenie bezpečnostného firewallu pre bezpečný zostatok.",
        ],
      },
      {
        phaseId: 5,
        title: "🚀 FÁZA 5: UPLINK A STABILIZÁCIA (Runtime Ready)",
        steps: [
          "Úkon 17: Uvoľnenie systémovej pamäte a potvrdenie pripravenosti.",
          "Úkon 18: Audit dátového toku a fixácia kreditu bez expirácie.",
          "Úkon 19: Asynchrónna kontrola integrity peňaženky s cloudom.",
          "Úkon 20: Plná kontrola operátora nad využitím 11,000 OC v celom e-shope.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Masívna alokácia internej energie pre náročných operátorov vyžadujúcich VIP prístupy.",
      detailnyPopis:
        "Veľkokapacitný dátový trezor v hodnote 99.00 € (11 000 OC). Odomyká celú databázu OMEGA VIP Archívov a ročné licencie aplikácií.",
      coZiskas:
        "10 000 OC + 1 000 OC BONUS (spolu 11 000 Oracle Kreditov) s maximálnou objemovou zľavou.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre operátorov, vývojárov a architektov budujúcich vlastný digitálny systém.",
        preAkyTypCloveka:
          "Pre operátora, ktorý chce mať neobmedzenú zásobu kreditov na celej Sieti.",
        preAkyTypSpolocnosti: "Pre technologické firmy a B2B partnerov.",
      },
      kCemuSaTotoDaPouzit:
        "Na odomknutie OMEGA Master Kódexov, PWA aplikácií a B2B licenčných záloh.",
      akoToFunguje:
        "Po úhrade cez Stripe / Ko-Fi webhook automaticky pripíše kredity do profilu operátora.",
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "TIER OMEGA / PACKS SPECIFICATION",
      sha256CleanMaster:
        "05AFFB63EC8988F072F1396D99570CE76ACA92A0244A047492F96D0D7A8A9E6D",
      sha256PromoWatermark:
        "A337FF3591830BAFDDFC86848854D4AE21519443343C2DE910F48FCCFE18BF44",
    },
  },
  "founders-pack-17": {
    id: "CAMP_17",
    nodeKey: "founders-pack-17",
    title: "NEXUS FOUNDER'S PACK (Lifetime Access)",
    fullName:
      "NEXUS FOUNDER'S PACK (Lifetime Access) // NEXUS FOUNDER'S PACK (150 000 OC - DOŽIVOTNÝ MASTER STATUS)",
    slug: "founders-pack-17",
    category: "PACKS",
    subCategory: "oc-packs",
    subCategoryTitle: "Kreditné Balíky OS Genesis (Tokenomics)",
    dimension: "ID09",
    dimensionTitle: "ID09 | SERGEANT-CORE (Taktická Strojovňa)",
    tier: "MASTER",
    tierCode: "TIER_MASTER_VIP",
    color: "#FF003C",
    price: "1 500.00 €",
    priceEur: 1500.0,
    priceOc: 150000,
    ocPrice: null,
    displayPrice: "1 500.00 € (150 000 OC - Doživotný Prístup)",
    discountPercent: 0,
    isFree: false,
    isLifetime: true,
    isPack: true,
    image:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/17-nexus-founder-s-pack-16x9.jpg",
    imageUrl:
      "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/17-nexus-founder-s-pack-16x9.jpg",
    imageFormats: {
      ratio16x9:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/16x9_desktop/17-nexus-founder-s-pack-16x9.jpg",
      ratio1x1:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/1x1_feed/17.%20NEXUS_FOUNDER%27S_PACK-%28Lifetime%20Access%29-1x1.jpg",
      ratio9x16:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/9x16_shorts/17-nexus-founder-s-pack-9x16.jpg",
      zip: "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/17-nexus-founder-s-pack_all-formats.zip",
      zipUrl:
        "https://ljyvsolsgliephsfkfgx.supabase.co/storage/v1/object/public/shop/images/packsMaster/zip-all-formaty/17-nexus-founder-s-pack_all-formats.zip",
    },
    youtubeId: "mF0v6VBQlbw",
    kofiLink: "https://ko-fi.com/s/3331c0750a",
    spoilerIntro:
      "Najvyšší investičný modul v hodnote 1 500.00 € (150 000 OC). Poskytuje trvalý MASTER STATUS ku všetkým súčasným aj budúcim 1 600 uzlom, aplikáciám, kódexom a službám.",
    goal: "Absolútne doživotné zakladateľské právo v Sieti OS Genesis s nulovými ďalšími poplatkami.",
    funnel:
      "Nedostatok kreditov ➔ Výber balíka NEXUS FOUNDER'S PACK (Lifetime Access) ➔ Realtime dotácia peňaženky cez Ko-Fi.",
    deliveryTime: "Okamžite (Automatizovaný systémový Auto-Uplink).",
    execTime: "1 - 3 minúty (Realtime webhook synchronizácia)",
    difficulty: "🟢 LOW (100% automatizovaný proces kódu)",
    tools: "Stripe, Ko-Fi Webhook API, Supabase Auth, GlobalWallet",
    phases: [
      {
        phaseId: 1,
        title:
          "📥 FÁZA 1: INICIALIZÁCIA A CHECK-OUT (NEXUS FOUNDER'S PACK (Lifetime Access))",
        steps: [
          "Úkon 01: Výber balíka NEXUS FOUNDER'S PACK (Lifetime Access) v obchodnom rozhraní OS Genesis.",
          "Úkon 02: Presmerovanie na zabezpečenú platobnú bránu Ko-Fi.",
          "Úkon 03: Potvrdenie transakcie 1 500.00 € za kreditnú dotáciu.",
          "Úkon 04: Zápis autorizačného e-mailu operátora do platobného príkazu.",
        ],
      },
      {
        phaseId: 2,
        title: "💳 FÁZA 2: SYSTÉMOVÁ VALIDÁCIA (Routing & Webhook)",
        steps: [
          "Úkon 05: Bezpečná transakcia 1 500.00 € cez šifrovaný portál.",
          "Úkon 06: Zachytenie webhooku a verifikácia transakčného ID.",
          "Úkon 07: Spárovanie identity s tabuľkou profiles v Supabase.",
          "Úkon 08: Vygenerovanie auditného logu s časovou pečiatkou.",
        ],
      },
      {
        phaseId: 3,
        title: "🔓 FÁZA 3: PRIPÍSANIE KREDITOV (Balance Injection)",
        steps: [
          "Úkon 09: Pripísanie +150,000 OC do digitálnej peňaženky operátora.",
          "Úkon 10: Inkrementácia zostatku v komponente GlobalWallet.",
          "Úkon 11: Zápis úspešného nákupu do histórie GlobalShopHistory.",
          "Úkon 12: Odoslanie potvrdzujúcej notifikácie do GlobalMessages.",
        ],
      },
      {
        phaseId: 4,
        title: "👁️ FÁZA 4: SÉMANTICKÁ INTEGRÁCIA (Tokenomics Sync)",
        steps: [
          "Úkon 13: Odomknutie nákupných tlačidiel pre cieľové moduly a kódexy.",
          "Úkon 14: Odstránenie Paywall bariér pri zodpovedajúcich uzloch.",
          "Úkon 15: Automatická rekalibrácia peňaženky pre plynulú prácu.",
          "Úkon 16: Nastavenie bezpečnostného firewallu pre bezpečný zostatok.",
        ],
      },
      {
        phaseId: 5,
        title: "🚀 FÁZA 5: UPLINK A STABILIZÁCIA (Runtime Ready)",
        steps: [
          "Úkon 17: Uvoľnenie systémovej pamäte a potvrdenie pripravenosti.",
          "Úkon 18: Audit dátového toku a fixácia kreditu bez expirácie.",
          "Úkon 19: Asynchrónna kontrola integrity peňaženky s cloudom.",
          "Úkon 20: Plná kontrola operátora nad využitím 150,000 OC v celom e-shope.",
        ],
      },
    ],
    scanDetail: {
      zameranieAPointa:
        "Absolútne doživotné zakladateľské právo v Sieti OS Genesis s nulovými ďalšími poplatkami.",
      detailnyPopis:
        "Najvyšší investičný modul v hodnote 1 500.00 € (150 000 OC). Poskytuje trvalý MASTER STATUS ku všetkým súčasným aj budúcim 1 600 uzlom, aplikáciám, kódexom a službám.",
      coZiskas:
        "Doživotný MASTER STATUS, 150 000 OC kreditov, neobmedzený download všetkých produktov bez expirácie.",
      preKohoJeToto: {
        preAkyTypLudi:
          "Pre operátorov, vývojárov a architektov budujúcich vlastný digitálny systém.",
        preAkyTypCloveka:
          "Pre človeka, ktorý odmieta subscription model a chce raz a navždy vlastniť celú infraštruktúru.",
        preAkyTypSpolocnosti:
          "Pre franšízové pobočky, kapitálových partnerov a Enterprise klientov.",
      },
      kCemuSaTotoDaPouzit:
        "Na neobmedzené čerpanie akéhokoľvek výpočtového výkonu v Sieti OS Genesis navždy.",
      akoToFunguje:
        "Po úhrade cez Stripe / Ko-Fi webhook automaticky pripíše kredity do profilu operátora.",
    },
    ipSecurity: {
      trademark: true,
      author: "Dušan Fajnor @nexus-core2Mb",
      publisher: "NEXUS AGENCY DIGITAL INFRASTRUCTURE",
      cryptoKey: "DUŠAN FAJNOR @NEXUS-CORE2MB",
      copyrightYear: "2026",
      copyrightText:
        "© 2026 Dušan Fajnor (@nexus-core2Mb). Všetky práva vyhradené.",
      licenseTier: "TIER MASTER / PACKS SPECIFICATION",
      sha256CleanMaster:
        "872C1F90A4775175077C10E5D7D56F2495FD39B5C6EE127F925C855E3624AAB6",
      sha256PromoWatermark:
        "8853381FAE3106AB32845BCEFBC1C8676AFB2958CE75ADCD0594E9EDC7747681",
    },
  },
};

export const PacksData = Object.values(PACKS_DATA);
export default PACKS_DATA;
