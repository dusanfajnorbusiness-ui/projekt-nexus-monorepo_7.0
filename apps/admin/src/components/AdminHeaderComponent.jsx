import { Database, Globe, Layout, Menu, ShieldAlert, Terminal, Users, X } from "lucide-react";
/* eslint-disable no-undef */

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (ADMIN HEADER WITH NAV V20.95)
// Súbor: apps/admin/src/components/AdminHeaderComponent.jsx
// Status: 100% GROUNDED // CRIMSON ARCHITECT CLEARANCE (#FF003C)
// Author: Dušan Fajnor @nexus-core2Mb (CyberTech Architect)
// ============================================================================

import React, { useState } from "react";

export const AdminHeaderComponent = ({
  activeTab = "DASHBOARD",
  setActiveTab,
  themeColor = "#FF003C",
  dimensionName = "ARCHITECT CONTROL CENTER",
  subTitle = "LEVEL 48 ARCHITECT",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeColor = themeColor || "#FF003C";

  const navItems = [
    { id: "DASHBOARD", icon: Layout, label: "Dashboard" },
    { id: "URL_SCANNER", icon: Globe, label: "URL Matrix Scanner" },
    { id: "LOGS", icon: Terminal, label: "System Logs & Diag" },
    { id: "USERS", icon: Users, label: "Operator Control" },
    { id: "DATABASE", icon: Database, label: "DB Management" },
  ];

  return (
    <header
      className="w-full bg-[#03070A]/95 border-b backdrop-blur-2xl sticky top-0 z-50 font-mono text-white py-3 px-4 md:px-8"
      style={{ borderColor: `${activeColor}40` }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* BRAND & IDENTITY */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0"
            style={{
              backgroundColor: `${activeColor}15`,
              borderColor: activeColor,
              borderWidth: "1px",
              boxShadow: `0 0 15px ${activeColor}60`,
            }}
          >
            <ShieldAlert className="w-5 h-5" style={{ color: activeColor }} />
          </div>
          <div className="text-left">
            <h1 className="text-sm md:text-base font-extrabold tracking-widest text-white uppercase flex items-center gap-2">
              ARCHITECT ACC{" "}
              <span
                className="text-[9px] px-2 py-0.5 rounded-full border hidden sm:inline-block"
                style={{
                  color: activeColor,
                  backgroundColor: `${activeColor}15`,
                  borderColor: `${activeColor}40`,
                }}
              >
                V20.95
              </span>
            </h1>
            <p
              className="text-[9px] md:text-xs font-semibold tracking-wider uppercase hidden sm:block"
              style={{ color: activeColor }}
            >
              {dimensionName} <span className="text-zinc-600">|</span>{" "}
              <span className="text-zinc-400">{subTitle}</span>
            </p>
          </div>
        </div>

        {/* DESKTOP HORIZONTÁLNA NAVIGÁCIA ZÁLOŽIEK */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-black/60 p-1.5 rounded-2xl border border-white/10">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab && setActiveTab(tab.id)}
                className={
                  "flex items-center gap-2 px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer " +
                  (isActive
                    ? "bg-[#FF003C]/20 text-white border border-[#FF003C]/50 shadow-[0_0_15px_rgba(255,0,60,0.3)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent")
                }
              >
                <Icon
                  size={14}
                  style={{ color: isActive ? activeColor : undefined }}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT STATUS & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: activeColor,
                boxShadow: `0 0 8px ${activeColor}`,
              }}
            />
            <span>ROOT ONLINE</span>
          </div>

          {/* MOBILNÉ HAMBURGER TLAČIDLO */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILNÉ DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-white/10 bg-[#050A0E] rounded-2xl p-3 space-y-1.5 animate-in fade-in duration-300">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (setActiveTab) setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                }}
                className={
                  "w-full flex items-center gap-3 p-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer " +
                  (isActive
                    ? "bg-[#FF003C]/20 text-white border border-[#FF003C]/50"
                    : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent")
                }
              >
                <Icon
                  size={16}
                  style={{ color: isActive ? activeColor : undefined }}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default AdminHeaderComponent;