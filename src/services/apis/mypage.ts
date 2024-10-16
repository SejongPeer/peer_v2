import { axiosInstance } from "../../services/axios-instance";
import { MyPageResponse } from "../../types/mypage/mypage";

export const getMypageData = async (): Promise<
  MyPageResponse | null | undefined
> => {
  try {
    const response = await axiosInstance.get("/member/my-page");

    const result = response.data;
    if (result) {
      return result.data;
    }
  } catch (error) {
    console.log("mypage:", error);
    return null;
  }
};

export const postMyPageData = async (formData: object): Promise<null> => {
  try {
    const response = await axiosInstance.patch("/member/my-page", formData);

    const result = response.data;
    console.log(result);

    if (result) {
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error("인증 중 오류 발생: ", error);
    return null;
  }
};
