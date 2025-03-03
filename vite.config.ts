import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  build: {
    outDir: "public", // Vercel에서 찾을 수 있도록 public 폴더로 변경
  },
});
