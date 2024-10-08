import { create } from "zustand";

interface UserStore {
  name: string;
  grade: string;
  studentId: string;
  account: string;
  password: string;
  passwordCheck: string;
  setUserData: (name: string, grade: string, studentId: string) => void;
  setUserDataStep3_1: (
    account: string,
    password: string,
    passwordCheck: string
  ) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  name: "",
  grade: "",
  studentId: "",
  account: "",
  password: "",
  passwordCheck: "",
  setUserData: (name, grade, studentId) => set({ name, grade, studentId }),
  setUserDataStep3_1: (account, password, passwordCheck) =>
    set({ account, password, passwordCheck }),
}));
