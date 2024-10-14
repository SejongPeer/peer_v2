// 버디 신청자 수 타입
interface BuddyCount {
  count: number;
}

// 버디 신청자 수 axios 응답 타입
export interface AxiosResponseData {
  data: BuddyCount;
}

// 버디 신청 타입
export interface BuddyMatchingType {
  gender: string;
  major: string;
  subMajor: boolean;
  type: string[];
  grade: string[];
}

// set 버디 타입
export interface SetBuddyMatchingType extends BuddyMatchingType {
  setGender: (gender: string) => void;
  setMajor: (major: string) => void;
  setSubMajor: (subMajor: boolean) => void;
  setType: (type: string[]) => void;
  setGrade: (grade: string[]) => void;
}
