import { useQuery } from "@tanstack/react-query";
import { AuthData } from "../../types/user";

// 캐시된 사용자 정보 및 토큰 가져오기 훅
export const useUserAuth = () => {
  return useQuery<AuthData | null>({
    queryKey: ["user", "auth"],
    queryFn: () => {
      // 여기는 실제 데이터를 가져오지 않으므로 비어 있을 수 있음
      return null;
    },
    enabled: false, // 이미 캐시에 있는 데이터를 가져오므로 API 호출을 하지 않음
    select: (data) => data, // 캐시된 전체 데이터를 선택하여 반환
  });
};
