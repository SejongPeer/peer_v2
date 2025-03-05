// 로그인 스키마
import { z } from "zod";

export const signInSchema = z.object({
  username: z
    .string()
    .min(6, "아이디는 최소 6글자 이상이어야 합니다.")
    .regex(
      /^[a-zA-Z][a-zA-Z0-9]{5,}$/,
      "아이디는 영어로 시작하고 숫자와 조합되어야 하며 특수문자는 사용할 수 없습니다."
    ),
  password: z
    .string()
    .min(10, "비밀번호는 최소 10글자 이상이어야 합니다.")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{10,}$/,
      "비밀번호는 영어와 숫자가 조합되어야 합니다."
    ),
});

// export const signUpStep3_1Schema = z
//   .object({
//     account: z
//       .string()
//       .min(8, { message: "아이디는 8자 이상이어야 합니다." })
//       .regex(/^[a-zA-Z][a-zA-Z0-9]*$/, {
//         message: "아이디는 영어로 시작하고, 영어 + 숫자 조합만 가능합니다.",
//       }),
//     password: z
//       .string()
//       .min(10, { message: "비밀번호는 10자 이상이어야 합니다." })
//       .max(20, { message: "비밀번호는 20자 이하이어야 합니다." })
//       .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).*$/, {
//         message: "비밀번호는 영어 + 숫자를 포함해야 합니다.",
//       }),
//     passwordCheck: z
//       .string()
//       .min(10, { message: "비밀번호는 10자 이상이어야 합니다." })
//       .max(20, { message: "비밀번호는 20자 이하이어야 합니다." })
//       .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).*$/, {
//         message: "비밀번호는 영어 + 숫자를 포함해야 합니다.",
//       }),
//   })
//   .refine((data) => data.password === data.passwordCheck, {
//     path: ["passwordCheck"],
//     message: "비밀번호 확인이 일치하지 않습니다.",
//   });

// export const signUpStep3_2Schema = z.object({
//   name: z
//     .string()
//     .min(2, { message: "이름은 2자 이상이어야 합니다." })
//     .regex(/^[가-힣]+$/, { message: "이름은 한글만 입력 가능합니다." }),
//   studentId: z.string(),
//   grade: z
//     .number()
//     .min(1, { message: "학년은 1학년 이상이어야 합니다." })
//     .max(4, { message: "학년은 4학년 이하이어야 합니다." }),
// });

// "3-1"과 "3-2"에서 나눠 쓰던 스키마를 합친 단일 스키마
export const signUpSchema = z
  .object({
    account: z
      .string()
      .min(8, { message: "아이디는 8자 이상이어야 합니다." })
      .regex(/^[a-zA-Z][a-zA-Z0-9]*$/, {
        message: "아이디는 영어로 시작하고, 영어 + 숫자 조합만 가능합니다.",
      }),
    password: z
      .string()
      .min(10, { message: "비밀번호는 10자 이상이어야 합니다." })
      .max(20, { message: "비밀번호는 20자 이하이어야 합니다." })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).*$/, {
        message: "비밀번호는 영어 + 숫자를 포함해야 합니다.",
      }),
    passwordCheck: z.string(),
    name: z
      .string()
      .min(2, { message: "이름은 2자 이상이어야 합니다." })
      .regex(/^[가-힣]+$/, { message: "이름은 한글만 입력 가능합니다." }),
    studentId: z.string().min(1, { message: "학번을 입력해주세요." }),
    grade: z
      .number({
        // number 필드는 React Hook Form에서 valueAsNumber 옵션을 통해 변환
        required_error: "학년을 입력해주세요.",
        invalid_type_error: "학년은 숫자만 입력 가능합니다.",
      })
      .min(1, { message: "학년은 1학년 이상이어야 합니다." })
      .max(4, { message: "학년은 4학년 이하이어야 합니다." }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호가 일치하지 않습니다.",
  });

// 회원가입 4단계 스키마 정의
export const signUpStep4Schema = z.object({
  nickname: z
    .string()
    .regex(
      /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9]{2,8}$/,
      "닉네임은 2자에서 8자 사이여야 하며, 영문 대소문자, 한글(완성된 글자와 자음/모음), 숫자만 포함할 수 있습니다."
    )
    .nonempty("닉네임을 입력해주세요."),
  kakaoId: z
    .string()
    .regex(
      /^[a-zA-Z][a-zA-Z0-9]*$/,
      "카카오톡 아이디는 영어로 시작해야 하며, 영어와 숫자의 조합만 가능합니다."
    )
    .nonempty("카카오톡 아이디를 입력해주세요."),
  phoneNumber: z
    .string()
    .regex(/^010\d{8}$/, "전화번호는 010으로 시작하는 11자리 숫자여야 합니다.")
    .nonempty("전화번호를 입력해주세요."),
  gender: z.enum(["MALE", "FEMALE"]),
  college: z
    .string()
    .regex(/^[가-힣]+$/, "단과대는 한글만 포함할 수 있습니다.")
    .nonempty("단과대를 선택해주세요."), // 단과대 추가
  department: z
    .string()
    .regex(
      /^[가-힣a-zA-Z\s]+$/,
      "학과는 한글 또는 한글과 영어 조합만 가능합니다."
    )
    .nonempty("학과를 선택해주세요."), // 학과 추가
});

//마이페이지 edit 스키마 정의
export const mypageEditSchema = z
  .object({
    currentPassword: z
      .string()
      .min(10, { message: "비밀번호는 10자 이상이어야 합니다." })
      .max(20, { message: "비밀번호는 20자 이하이어야 합니다." })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).*$/, {
        message: "비밀번호는 영어 + 숫자를 포함해야 합니다.",
      }),
    password: z
      .string()
      .min(10, { message: "비밀번호는 10자 이상이어야 합니다." })
      .max(20, { message: "비밀번호는 20자 이하이어야 합니다." })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).*$/, {
        message: "비밀번호는 영어 + 숫자를 포함해야 합니다.",
      }),
    passwordCheck: z.string(),
    nickname: z.string(),
    kakaoAccount: z.string(),
    phoneNumber: z
      .string()
      .regex(
        /^010\d{8}$/,
        "전화번호는 010으로 시작하는 11자리 숫자여야 합니다."
      )
      .nonempty("전화번호를 입력해주세요."),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호 확인이 일치하지 않습니다.",
  });
export type SigninType = z.infer<typeof signInSchema>;
// export type SignUpStep3FormData = z.infer<typeof signUpStep3_1Schema>;
export type SignUpStep4FormData = z.infer<typeof signUpStep4Schema>;
export type MyPageEditData = z.infer<typeof mypageEditSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
