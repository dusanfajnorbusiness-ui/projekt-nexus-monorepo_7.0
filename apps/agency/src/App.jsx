/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY ROUTING APP V20.95)
// Súbor: apps/agency/src/App.jsx
// Status: 100% GROUNDED // ROUTING MATRIX FOR AGENCY SUBDOMAIN
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import { Route, Routes } from "react-router-dom";
import NexusAgencyPage from "@agency/pages/NexusAgencyPage.jsx";
import SharedPage from "@shared/pages/SharedPage.jsx";

export const App = () => (
  <Routes>
    <Route path="/" element={<NexusAgencyPage />} />
    <Route path="/services" element={<NexusAgencyPage />} />
    <Route path="*" element={<SharedPage nodeTitle="AGENCY NODE" subId="404 STANDBY" />} />
  </Routes>
);
export default App;
