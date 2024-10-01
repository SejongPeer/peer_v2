import axios from "axios";

// Axios 인스턴스 생성
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // API의 기본 URL 설정
  withCredentials: true, // 쿠키와 함께 요청을 보내려면 이 옵션을 활성화
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 시 Authorization 헤더에 토큰을 추가
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 중 오류가 발생한 경우
    console.error("[AXIOS_REQUEST_ERROR]: ", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => {
    // 로그인 요청에 대한 응답 처리
    if (
      response.config.url === "/members/login" &&
      response.data?.data?.token
    ) {
      // 응답에 토큰이 포함된 경우, 이를 로컬 스토리지에 저장
      window.localStorage.setItem("token", response.data.data.token);
    }
    return response;
  },
  (error) => {
    // 응답 중 오류가 발생한 경우
    if (error.response) {
      // 서버가 응답을 반환했지만 오류 상태 코드인 경우
      console.error(
        `[AXIOS_RESPONSE_ERROR_${error.response.status}]: `,
        error.response.data
      );
    } else if (error.request) {
      // 요청이 이루어졌지만 응답을 받지 못한 경우
      console.error("[AXIOS_ERROR_NO_RESPONSE]: ", error.request);
    } else {
      // 요청을 설정하는 중에 문제가 발생한 경우
      console.error("[AXIOS_ERROR_NET]: ", error.message);
    }

    return Promise.reject(error);
  }
);
