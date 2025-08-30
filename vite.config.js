import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // Ensure proper module handling
    target: "esnext",
    // Optional: Configure base path if needed
    // base: '/',
  },
  server: {
    // Ensure proper MIME types in development
    headers: {
      "Content-Type": "application/javascript",
    },
  },
});
