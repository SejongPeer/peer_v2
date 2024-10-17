import { UseFormRegisterReturn } from "react-hook-form";

export interface EditInformProps {
  disabledProps?: boolean;
  title: string;
  cont: string;
  register?: UseFormRegisterReturn;
}

export interface GuideInfo {
  title: string;
  addCon: string;
}
export interface MatchingInfoProps {
  title: string;
  explain: string;
  img?: string;
}

export interface MyPageResponse {
  name: string;
  grade: number;
  kakaoAccount: string;
  major: string;
  minor: string;
  nickname: string;
  phoneNumber: string;
  account: string;
  studentId: string;
  gender: string;
}
