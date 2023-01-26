import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolvedAlias = Object.fromEntries(
  [
    ["@components", "./src/components"],
    ["@layouts", "./src/layouts"],
    ["@pages", "./src/pages"],
    ["@common", "./src/common"],
  ].map((value) => [
    value[0],
    fileURLToPath(new URL(value[1], import.meta.url)),
  ])
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: resolvedAlias,
  },
});
