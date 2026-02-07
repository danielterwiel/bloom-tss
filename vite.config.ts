import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

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
    nitro({
      preset: "vercel",
    }),
    react(),
    tailwindcss(),
  ],
});
