import React from "react";
import ReactDOM from "react-dom/client";
// ⚡⚡⚡ ZAČIATOK OPRAVA ⚡⚡⚡
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import "./index.css";

// ============================================================================
// ⚠️ DEFENZÍVNY CENTRÁLNY BOOTSTRAPPER PRE OS GENESIS (S ROUTER ENGINE)
// ============================================================================

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error(
    "%c[NEXUS CRITICAL ERROR]: DOM SOCKET '#root' NEBOLA NÁJDENÁ!",
    "color: #FF0055; font-weight: bold; background: #000; padding: 4px;"
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  console.log(
    "%c[NEXUS OS]: UNIFIED_BOOT_SEQUENCE_COMPLETE // 100% READY",
    "color: #39FF14; font-weight: bold; background: #000; padding: 4px 8px; border-radius: 4px;"
  );
}