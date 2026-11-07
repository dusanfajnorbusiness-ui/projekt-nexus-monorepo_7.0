// import { NexusAgencyPage } from "@shared/components/GlobalNexusMasterLayout";
import  NexusAgencyPage  from "@agency/pages/NexusAgencyPage.jsx";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (AGENCY ROUTING APP V20.95)
// Súbor: apps/agency/src/App.jsx
// Status: 100% GROUNDED // ROUTING MATRIX FOR AGENCY SUBDOMAIN
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React from "react";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NexusAgencyPage />} />
      <Route path="/agency" element={<NexusAgencyPage />} />
      <Route path="/services" element={<NexusAgencyPage />} />
      <Route path="*" element={<NexusAgencyPage />} />
    </Routes>
  );
};

export default App;
