import { axiosInstance } from "../../services/axios-instance";
import { AxiosResponseData } from "../../types/buddy/buddyType.ts";

export const getBuddyUsers = async (): Promise<number | null> => {
  try {
    const response = await axiosInstance.get<AxiosResponseData>('/buddy/active-count');

    console.log(response.data.data.count);

    const result = response.data.data.count;
    return result ?? null;

  } catch (error) {
    console.error("이용자 수 불러오기 실패", error);
    return null;
  }
};