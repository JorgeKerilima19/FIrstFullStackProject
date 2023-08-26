import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const CssFileName = "index.min.css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "/public",
  build: {
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "/path/to/main.js",
      output: {
        assetFileNames: (file) => {
          return `assets/css/${CssFileName}`;
        },
        entryFileNames: (file) => {
          return `assets/js/[name].min.js`;
        },
      },
    },
  },
});
