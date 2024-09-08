export interface SejongAuthResponse {
  data: any;
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
  isExist: boolean;
  msg: string;
  statusCode: number;
}

export interface CheckNicknameResponse {
  isExist: boolean;
}
