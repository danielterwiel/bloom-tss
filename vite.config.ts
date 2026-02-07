import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  server: {
    port: 3001,
  },
  optimizeDeps: {
    include: ["uplot"],
  },
  plugins: [
    tanstackStart({
      srcDirectory: "app",
    }),
    react(),
    tailwindcss(),
  ],
});
