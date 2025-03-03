import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../services/axios-instance";
import { SigninType } from "../../lib/schema/auth.schema";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const signin = async (data: SigninType) => {
  const response = await axiosInstance.post("/auth/sign-in", {
    account: data.username,
    password: data.password,
  });
  return response.data;
};

// 로그인 mutation 훅
export const useSignin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signin,
    onError: (error) => {
      console.error("로그인 중 오류 발생:", error);
      toast.error("로그인 실패! 아이디 또는 비밀번호를 확인해 주세요.");
    },
    onSuccess: (data) => {
      const {
        accessToken,
        refreshToken,
        ...userInfo // 나머지 유저 정보
      } = data.data;

      // localStorage에 토큰 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      console.log(data.data);

      // React Query 캐시에 토큰 및 사용자 정보 저장
      queryClient.setQueryData(["user", "auth"], {
        accessToken,
        refreshToken,
        userInfo,
      });

      toast.success("로그인 성공!");
      navigate("/"); // 로그인 성공 시 메인 페이지로 이동
    },
  });
};
