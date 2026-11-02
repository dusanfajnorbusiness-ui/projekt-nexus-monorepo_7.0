/* eslint-disable no-undef */
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (V20 MASTER VITE BASE CONFIG)
// Status: 100% GROUNDED // ALL SUBDOMAINS & PAGES RESOLUTION
// ============================================================================

export const createViteConfig = (appDir, port = 5173) => {
  const rootDir = path.resolve(__dirname);

  return defineConfig({
    root: appDir, // 🎯 Garantuje, že Vite okamžite nájde index.html a všetky stránky v src/pages/
    plugins: [react()],
    server: {
      port,
      host: true,
    },
    resolve: {
      alias: {
        "@shared": path.resolve(rootDir, "shared/src"),
        "@nexus/shared": path.resolve(rootDir, "shared/src"),
        "@main-web": path.resolve(rootDir, "apps/main-web/src"),
        "@uplink": path.resolve(rootDir, "apps/uplink/src"),
        "@shop": path.resolve(rootDir, "apps/shop/src"),
        "@agency": path.resolve(rootDir, "apps/agency/src"),
        "@blog": path.resolve(rootDir, "apps/blog/src"),
        "@admin": path.resolve(rootDir, "apps/admin/src"),
        "@dimenzie": path.resolve(rootDir, "apps/dimenzie/src"),
        "@operators": path.resolve(rootDir, "apps/operators/src"),
        "@settings": path.resolve(rootDir, "apps/settings/src"),
        "@apps": path.resolve(rootDir, "apps"),
      },
    },
    build: {
      outDir: path.resolve(appDir, "dist"),
      emptyOutDir: true,
      sourcemap: false,
    },
  });
};

export default createViteConfig;
