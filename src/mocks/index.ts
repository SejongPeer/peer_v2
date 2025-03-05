// src/mocks/index.ts
import { setupWorker } from "msw/browser";
import { registerHandlers } from "./handlers";

export const initMockServer = () => {
  // console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    const worker = setupWorker(...registerHandlers);
    worker.start({
      onUnhandledRequest: "bypass", // 등록되지 않은 요청은 그대로 통과
    });
  }
};
