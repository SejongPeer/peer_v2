import { axiosInstance } from "../../services/axios-instance";
import { AxiosResponseData } from "../../types/buddy/buddyType.ts";
import { toast } from "sonner";

// 버디 신청 유저 수 확인하기
export const getBuddyUsers = async (): Promise<number | null> => {
  try {
    const response = await axiosInstance.get<AxiosResponseData>(
      "/buddy/active-count"
    );

    console.log(response.data.data.count);

    const result = response.data.data.count;
    return result ?? null;
  } catch (error) {
    console.error("이용자 수 불러오기 실패", error);
    toast.error("버디 신청자 수를 불러오는데 실패했습니다.");
    return null;
  }
};

// 버디 신청 상태 확인하기
export const getStatusBuddy = async () => {
  try {
    const response = await axiosInstance.get("/buddy/matching-status");

    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("버디 신청 상태를 확인할 수 없습니다.");
    return null;
  }
};

// 버디 신청하기
export const registerBuddy = async (buddyData: object) => {
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
    toast.error("버디 등록에 실패했습니다.");
    return null;
  }
};

// 버디 신청 취소하기
export const cancelBuddy = async () => {
  try {
    const response = await axiosInstance.get("/buddy/cancel");

    if (response.status === 200) {
      toast.success("버디 신청 취소가 완료되었습니다.");
      return true;
    } else {
      toast.error("버디 신청 취소에 실패했습니다.");
    }
  } catch (error) {
    console.error(error);
    toast.error("버디 신청 취소에 실패했습니다.");
    return null;
  }
};

// 버디 수락/거절 창에서의 상대방 정보 요청
export const getBuddyInfoFirst = async () => {
  try {
    const response = await axiosInstance.get("/buddy/partner/details");

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("버디 정보를 가져오지 못했습니다.");
    return null;
  }
};

// 버디 매칭 수락/거절
export const approvalBuddy = async (approvalData: string) => {
  const approval = {
    isAccept: approvalData,
  };
  try {
    const response = await axiosInstance.post(
      "/buddy/matching/status",
      approval
    );

    if (response.status === 200) {
      if (approvalData) {
        toast.success(
          "매칭이 수락되었습니다! \n상대방이 매칭을 수락할 때까지 기다려주세요."
        );
      } else {
        toast.success(
          "매칭이 거절되었습니다. \n거절 패널티로 1시간동안 매칭을 등록할 수 없습니다."
        );
      }
      return true;
    } else {
      toast.error("오류가 발생했습니다.");
      return null;
    }
  } catch (error) {
    console.error(error);
    toast.error("버디 정보를 가져오지 못했습니다.");
    return null;
  }
};

// 매칭 수락 완료 후 상대방 정보요청
export const getBuddyInfo = async () => {
  try {
    const response = await axiosInstance.get("/buddy/matched-partner/details");

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("버디 정보를 가져오지 못했습니다.");
    return null;
  }
};
