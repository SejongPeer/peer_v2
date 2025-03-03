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

    if (result.data.isAuth === true) {
      toast.success("세종대학교 학생 인증이 완료되었습니다!");
      return result; // 성공 시 결과 반환
    } else {
      return null; // 실패 시 null 반환
    }
  } catch (error) {
    console.error("인증 중 오류 발생: ", error);
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
    console.log(result);
    console.log(result.data.isExist);
    if (result.data.isExist) {
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

    console.log(response);
    return !response.data.isExist;
  } catch (error) {
    console.error("닉네임 중복 확인 중 오류 발생: ", error);
    return false;
  }
};

// 회원가입 API 요청 함수
export const registerUser = async (formData: object) => {
  try {
    const response = await axiosInstance.post("/member/sign-up", formData);

    if (response.status === 201 || response.status === 200) {
      toast.success("회원가입이 성공적으로 완료되었습니다.");
      return response.data;
    } else {
      toast.error("회원가입에 실패했습니다.");
      return null;
    }
  } catch (error) {
    console.error("회원가입 중 오류 발생: ", error);
    toast.error("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
    return null;
  }
};

// 회원탈퇴 API 요청 함수
export const deleteUserAccount = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    console.log(accessToken);
    console.log(refreshToken);

    if (!accessToken || !refreshToken) {
      toast.error("로그인이 필요합니다. 다시 로그인 해주세요.");
      return null;
    }

    const response = await axiosInstance.delete("/member/my-page", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-refresh-token": refreshToken,
      },
    });

    if (response.status === 200) {
      toast.success("회원 탈퇴가 성공적으로 완료되었습니다.");
      return response.data;
    } else {
      toast.error("회원 탈퇴에 실패했습니다.");
      return null;
    }
  } catch (error) {
    console.error("회원 탈퇴 중 오류 발생: ", error);
    toast.error("회원 탈퇴 중 오류가 발생했습니다. 다시 시도해주세요.");
    return null;
  }
};
