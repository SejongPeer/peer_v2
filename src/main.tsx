import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

// MSW 초기화
import { initMockServer } from "./mocks";

// 개발 환경에서만 MSW 시작
if (process.env.NODE_ENV === "development") {
  initMockServer();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
