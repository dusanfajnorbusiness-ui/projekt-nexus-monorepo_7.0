
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (STANDBY NODE ROUTER V20.95)
// Súbor: apps/admin/src/App.jsx
// Status: 100% GROUNDED // UNIFIED STANDBY ROUTER V20
// CORE_VERSION: APP-ROUTER-V20.95
// ============================================================================

import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "@admin/pages/AdminPage.jsx";
import SharedPage from "@shared/pages/SharedPage.jsx";

export const App = () => (
  <Routes>
    <Route path="/" element={<AdminPage />} />
    <Route path="*" element={<SharedPage nodeTitle="ADMIN NODE" subId="404 STANDBY" />} />
  </Routes>
);
export default App;
