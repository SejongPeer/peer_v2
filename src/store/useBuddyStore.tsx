import { create } from "zustand";
import {  SetBuddyMatchingType } from "../types/buddy/buddyType";

export const BuddyStore = create<SetBuddyMatchingType>(set => ({
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