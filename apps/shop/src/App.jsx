/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (SUBDOMAIN ROUTING APP V20.95)
// Súbor: apps/shop/src/App.jsx
// Status: 100% GROUNDED // ROUTING MATRIX FOR SUBDOMAIN
// CORE_VERSION: APP-ROUTER-V20.95
// ============================================================================

import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "@shop/pages/ShopPage.jsx";
import SharedPage from "@shared/pages/SharedPage.jsx";

export const App = () => (
  <Routes>
    <Route path="/" element={<ShopPage />} />
    <Route path="*" element={<SharedPage nodeTitle="SHOP NODE" subId="404 STANDBY" />} />
  </Routes>
);
export default App;