/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import path from "path";

const ignoreTests = ["postcss.config.js", "tailwind.config.js", "src/main.tsx"];

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    exclude: [...configDefaults.exclude, ...ignoreTests],
    coverage: {
      exclude: [...(configDefaults.coverage.exclude ?? []), ...ignoreTests],
    },
  },
});
