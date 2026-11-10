/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (V20 SUBDOMAINS NETWORK CONFIG)
// Súbor: apps/subdomena/vite.config.js
// Status: 100% GROUNDED // UNIFIKOVANÝ PORT MATRIX [51800 - 51815]
// ============================================================================
// 📡 REGISTER PORTOV SUBDOMÉN OS GENESIS:
// uplink (5170) 
// Base Modul: main-web (5171), 
// agency (5172), apps/agency/vite.config.js
// blog (5173), 
// operators (5174), 
// shop (5175), 
// settings (5176), 
// admin (5177),
// subdomeny (51800 - 51815)
// ============================================================================
// Súbor: shared/vite.config.js
// ============================================================================
// shared (51900)
// ============================================================================

import createViteConfig from "../../vite.config.base.js";

const config = createViteConfig(__dirname, 5172);
config.base = "./";

export default config;
