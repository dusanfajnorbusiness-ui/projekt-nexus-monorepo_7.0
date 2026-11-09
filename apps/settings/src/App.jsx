/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SUBDOMAIN ROUTING APP V20.95)
// Súbor: apps/setting/src/App.jsx
// Status: 100% GROUNDED // ROUTING MATRIX FOR SUBDOMAIN
// CORE_VERSION: APP-ROUTER-V20.95
// ============================================================================

import React from "react";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "@settings/pages/SettingsPage.jsx";
import SharedPage from "@shared/pages/SharedPage.jsx";

export const App = () => (
  <Routes>
    <Route path="/" element={<SettingsPage />} />
    <Route path="*" element={<SharedPage nodeTitle="SETTINGS NODE" subId="404 STANDBY" />} />
  </Routes>
);
export default App;