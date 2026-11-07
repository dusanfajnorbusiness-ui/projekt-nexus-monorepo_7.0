/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (V20 SUBDOMAINS NETWORK CONFIG)
// Súbor: apps/subdomena_[XX]/vite.config.js
// Status: 100% GROUNDED // UNIFIKOVANÝ PORT MATRIX [51800 - 51815]
// ============================================================================
// 📡 REGISTER PORTOV SUBDOMÉN OS GENESIS:
// uplink (5170)
// Base Modul: main-web (5171),
// agency (5172),
// blog (5173),
// operators (5174),
// shop (5175),
// settings (5176),
// admin (5177),
// subdomeny (51800 - 51815)
// ============================================================================
// Súbor: shared/vite.config.js
// ============================================================================
// shared (51900)
// ============================================================================

import react from "@vitejs/plugin-react";

import path from "path";
import { defineConfig } from "vite";
import { exec, execSync } from "child_process";

const getGitCommitHash = () => {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch (err) {
    console.warn("⚠️ [NEXUS VITE] Git Hash missing, falling back to default build hash.", err?.message);
    return "v20.95-master";
  }
};
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (V20 MASTER VITE BASE CONFIG)
// Status: 100% GROUNDED // ALL SUBDOMAINS & PAGES RESOLUTION
// ============================================================================

export const createViteConfig = (appDir, port = 5173) => {
  const rootDir = path.resolve(appDir, "../../");
  const currentGitHash = getGitCommitHash();

  return defineConfig({
    base: "./",
    root: appDir,
    define: {
      "import.meta.env.VITE_GIT_COMMIT_HASH": JSON.stringify(currentGitHash),
    },
    plugins: [
      react(),
      {
        name: "nexus-windows-auto-open",
        configureServer(server) {
          server.httpServer?.once("listening", () => {
            setTimeout(() => {
              const url = `http://localhost:${port}`;
              // 🎯 Prinúti Windows OS otvoriť predvolený prehliadač (Chrome/Edge/Brave) okamžite po štarte servera
              exec(`cmd /c start ${url}`, (err) => {
                if (err) console.warn("⚠️ [NEXUS AUTO-OPEN WARN]:", err.message);
              });
            }, 500);
          });
        },
      },
    ],
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
        "@subdomeny": path.resolve(rootDir, "apps/subdomeny/src"),
        "@operators": path.resolve(rootDir, "apps/operators/src"),
        "@settings": path.resolve(rootDir, "apps/settings/src"),
        "@apps": path.resolve(rootDir, "apps"),
      },
    },
    build: {
      outDir: path.resolve(appDir, "dist"),
      emptyOutDir: true,
      sourcemap: false,
    chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (
                id.includes("react") ||
                id.includes("react-dom") ||
                id.includes("react-router") ||
                id.includes("scheduler")
              ) {
                return "vendor-react";
              }
              if (id.includes("lucide-react")) {
                return "vendor-icons";
              }
              return "vendor-libs";
            }
            if (id.includes("shared/src")) {
              return "vendor-shared";
            }
          },
        },
      },
    },
  });
};

export default createViteConfig;
