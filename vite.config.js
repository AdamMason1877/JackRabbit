import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on both a custom domain
// (https://example.com) and a project page (https://user.github.io/jack-rabbit).
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    target: "es2020",
    sourcemap: false,
  },
});
