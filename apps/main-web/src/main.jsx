import App from "@main-web/App.jsx";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (MAIN ENTRY POINT V20.95)
// Súbor: main.jsx
// Status: 100% GROUNDED // REACT 18 MOUNTING ENGINE V20
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ⚡ 1. DIAGNOSTICKÁ SONDA ŠTARTU
console.log(
  `%c[📡 OS GENESIS MAIN]: Inicializujem React 18 Root Engine na porte 5171...`,
  "background: #050a0e; color: #00F3FF; font-weight: bold; border: 1px solid #00F3FF; padding: 3px;",
);

// ⚡ 2. DEFENZÍVNA KONTROLA ELEMNETU #root
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.error(
    "🚨 [CRITICAL ERROR]: Element #root nebol nájdený v index.html!",
  );
}
