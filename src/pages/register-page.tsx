import { useSearchParams } from "react-router-dom";
import RegisterPage1 from "../components/register/registerStep1";
import RegisterPage2 from "../components/register/registerStep2";
import { RegisterStep3 } from "../components/register/registerStep3_1";
// import RegisterStep3Part2 from "../components/register/registerStep3_2";
import RegisterPage4 from "../components/register/registerStep4";

import { useEffect } from "react";
import { LoginHeader } from "../components/loginHeader";

export const RegisterPage = () => {
  // 쿼리 파라미터 사용
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step") || "1"; // 기본값을 '1'로 설정

  useEffect(() => {
    // 페이지가 로드될 때 body 배경색 변경
    document.body.style.backgroundColor = "#FAF5F5"; // 원하는 색상으로 변경

    // 컴포넌트가 언마운트될 때 배경색 원래대로 복구
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // 각 단계별로 다른 컴포넌트를 렌더링
  const renderStep = () => {
    switch (step) {
      case "1":
        return <RegisterPage1 />; // 약관 동의
      case "2":
        return <RegisterPage2 />; // 세종대학교 학생 인증
      case "3-1":
        return <RegisterStep3 />; // 아이디
      case "3-2":
      // return <RegisterStep3Part2 />; // 아이디
      case "4":
        return <RegisterPage4 />;
      default:
        return <RegisterPage1 />; // 잘못된 쿼리일 경우 기본값으로 1단계 렌더링
    }
  };

  return (
    <div>
      <LoginHeader backgroundColor="#FAF5F5" text={""} />
      {renderStep()}
    </div>
  );
};
