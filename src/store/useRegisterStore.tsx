import { create } from "zustand";

interface SignupFormData {
  name: string;
  studentId: string;
  grade: number;
  account: string;
  password: string;
  passwordCheck: string;
  college: string;
  major: string;
  subCollege?: string;
  subMajor?: string;
  gender: string;
  phoneNumber: string;
  nickname: string;
  kakaoId: string;
}

interface SignupStore {
  formData: Partial<SignupFormData>; // 전체 데이터를 가져올 수 있음
  saveFormData: (data: Partial<SignupFormData>) => void; // 각 페이지에서 데이터를 저장
  resetFormData: () => void; // 필요 시 폼 초기화 가능
}

export const useSignupStore = create<SignupStore>((set) => ({
  formData: {},
  saveFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  resetFormData: () => set({ formData: {} }),
}));
