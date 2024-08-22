import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: [
      "src/**/*.js",
      "src/**/*.ts",
      "src/**/*.test.ts",
      "src/**/*.spec.ts",
    ], // src 디렉토리 내의 모든 .js, .ts 파일 포함
    exclude: ["**/*.test.js", "**/*.spec.js"], // 테스트 파일은 제외
  },
});
