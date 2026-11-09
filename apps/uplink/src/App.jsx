/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SUBDOMAIN ROUTING APP V20.95)
// Súbor: apps/uplink/src/App.jsx
// Status: 100% GROUNDED // ROUTING MATRIX FOR SUBDOMAIN
// CORE_VERSION: APP-ROUTER-V20.95
// ============================================================================

import React from "react";
import { Route, Routes } from "react-router-dom";
import UplinkModal from "@uplink/pages/UplinkModal.jsx";
import SharedPage from "@shared/pages/SharedPage.jsx";

export const App = () => (
  <Routes>
    <Route path="/" element={<UplinkModal />} />
    <Route path="*" element={<SharedPage nodeTitle="UPLINK NODE" subId="404 STANDBY" />} />
  </Routes>
);
export default App;