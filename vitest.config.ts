import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts", "src/**/*.spec.ts"], // 테스트 파일 경로 수정
    exclude: ["node_modules", "dist"],
  },
});
