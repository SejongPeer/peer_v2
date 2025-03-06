// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { SignUpFormData } from "../lib/schema/auth.schema";

export const registerHandlers = [
  http.post("/api/register", async ({ request }) => {
    const { account, password, passwordCheck, name, studentId, grade } =
      (await request.json()) as SignUpFormData;

    // 아이디가 'blockedId'면 가입 불가 처리
    if (account === "blockedId") {
      return HttpResponse.json(
        { success: false, message: "사용할 수 없는 아이디입니다." },
        { status: 400 }
      );
    }

    // 비밀번호 불일치 처리
    if (password !== passwordCheck) {
      return HttpResponse.json(
        { success: false, message: "비밀번호 확인이 일치하지 않습니다." },
        { status: 400 }
      );
    }

    // 정상 응답 반환
    return HttpResponse.json(
      {
        success: true,
        message: "회원가입이 완료되었습니다!",
        data: { account, name, studentId, grade },
      },
      { status: 200 }
    );
  }),
];
