import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    fs: {
      allow: [
        path.resolve(__dirname, "../../"), // Povolí prístup k celému monorepu (apps/* a shared/*)
      ],
    },
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../../shared/src"),
      "@main-web": path.resolve(__dirname, "src"),
      "@shop": path.resolve(__dirname, "../shop/src"),
      "@uplink": path.resolve(__dirname, "../uplink/src"),
      "@operators": path.resolve(__dirname, "../operators/src"),
      "@admin": path.resolve(__dirname, "../admin/src"),
      "@blog": path.resolve(__dirname, "../blog/src"),
      "@settings": path.resolve(__dirname, "../settings/src"),
    },
  },
});
