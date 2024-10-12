import { create } from "zustand";

interface Buddy {
  gender: string;
  major: string;
  subMajor: boolean;
  type: string[];
  grade: string[];
  setGender: (gender: string) => void;
  setMajor: (major: string) => void;
  setSubMajor: (subMajor: boolean) => void;
  setType: (type: string[]) => void;
  setGrade: (grade: string[]) => void;
}

export const BuddyStore = create<Buddy>(set => ({
  gender: '',
  major: '',
  subMajor: false,
  type: [],
  grade: [],
  setGender: (gender) => set(() => ({ gender })),
  setMajor: (major) => set(() => ({ major })),
  setSubMajor: (subMajor) => set(() => ({ subMajor })),
  setType: (type) => set(() => ({ type })),
  setGrade: (grade) => set(() => ({ grade })),
}));