import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// ✅ Vite config with plugins, alias, and proxy in one place
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": "https://info.keyway-dispatch.com/",
    },
  },
});
