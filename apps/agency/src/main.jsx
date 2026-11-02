/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY ENTRY POINT V20)
// Súbor: apps/agency/src/main.jsx
// Status: 100% GROUNDED // REACT BOOTSTRAP // VITE ENGINE
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// ⚠️ ZDIEĽANÉ GLOBÁLNE ŠTÝLY EKOSYSTÉMU OS GENESIS
import "@shared/styles/global.css";

// ⚙️ UCHOPENIE HTML KONTAJNERA A INJEKCIA REACT DOM STROMU
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}
