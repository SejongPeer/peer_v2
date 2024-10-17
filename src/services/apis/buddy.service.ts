import { axiosInstance } from "../../services/axios-instance";
import { AxiosResponseData } from "../../types/buddy/buddyType.ts";
import { toast } from "sonner";

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

export const registerBuddy = async(buddyData: object) => {
  try {
    const response = await axiosInstance.post("/buddy/register", buddyData);

    if (response.status === 200) {
      toast.success("버디 등록이 완료되었습니다.");
      return response.data;
    } else {
      toast.error("버디 등록에 실패했습니다.");
      return null;
    }

  } catch (error) {
    console.error("버디 등록에 실패했습니다.", error);
    return null;
  }
};