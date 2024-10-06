export interface SejongAuthResponse {
  data: {
    isAuth: boolean;
    name: string; // 사용자 이름
    grade: string; // 학년
    major: string; // 전공
  };
  msg: string;
  grade: string;
  major: string;
  name: string;
  status: string;
  isAuth: boolean;
  statusCode: number;
  success: boolean;
}

export interface CheckAccountResponse {
  data: {
    isExist: boolean;
  };
  msg: string;
  statusCode: number;
}

export interface CheckNicknameResponse {
  isExist: boolean;
}
