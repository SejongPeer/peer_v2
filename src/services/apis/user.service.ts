import { axiosInstance } from "../../services/axios-instance";
import { toast } from "sonner";
import {
  CheckAccountResponse,
  CheckNicknameResponse,
  SejongAuthResponse,
} from "../../types/user";

// 세종 Auth
export const authenticateSejongUser = async (
  id: string,
  pw: string
): Promise<SejongAuthResponse | null> => {
  try {
    const response = await axiosInstance.post<SejongAuthResponse>(
      "/auth/sejong-auth",
      {
        id,
        pw,
      }
    );

    const result = response.data;
    console.log(result);
    localStorage.setItem("name", result.data.name);
    localStorage.setItem("grade", result.data.grade);
    // console.log(result.data.name);
    // console.log(result.data.grade);

    if (result.success) {
      toast.success("세종대학교 학생 인증이 완료되었습니다!");
      return result; // 성공 시 결과 반환
    } else {
      toast.error(result.msg);
      return null; // 실패 시 null 반환
    }
  } catch (error) {
    console.error("인증 중 오류 발생: ", error);
    toast.error("인증에 실패했습니다. 다시 시도해주세요.");
    return null; // 오류 발생 시 null 반환
  }
};

// 아이디 중복확인
export const checkAccountAvailability = async (
  account: string
): Promise<boolean | null> => {
  try {
    const response = await axiosInstance.get<CheckAccountResponse>(
      "/member/check-account",
      {
        params: { account },
      }
    );

    const result = response.data;

    if (result.isExist) {
      toast.error("이미 존재하는 아이디입니다. 다른 아이디를 사용해 주세요.");
      return false; // 중복된 아이디가 있을 경우 false 반환
    } else {
      toast.success("사용 가능한 아이디입니다!");
      return true; // 사용 가능한 아이디일 경우 true 반환
    }
  } catch (error) {
    console.error("아이디 중복 체크 중 오류 발생: ", error);
    toast.error("아이디 중복 체크에 실패했습니다. 다시 시도해주세요.");
    return null; // 오류 발생 시 null 반환
  }
};

// 닉네임 중복 확인
export const checkNicknameAvailability = async (
  nickname: string
): Promise<boolean> => {
  try {
    const response = await axiosInstance.get<CheckNicknameResponse>(
      "/member/check-nickname",
      {
        params: {
          nickname,
        },
      }
    );

    return !response.data.isExist;
  } catch (error) {
    console.error("닉네임 중복 확인 중 오류 발생: ", error);
    return false;
  }
};
