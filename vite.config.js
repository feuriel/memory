import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      output: {
        // This ensures CSS is properly bundled
        manualChunks: undefined,
        inlineDynamicImports: false,
      },
    },
  },
});
