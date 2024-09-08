import { useSearchParams } from "react-router-dom";
import { RegisterStep1 } from "../components/register/registerStep1";
import { RegisterStep2 } from "../components/register/registerStep2";
import { RegisterStep3 } from "../components/register/registerStep3";
import { RegisterStep4 } from "../components/register/registerStep4";
import { SubHeader } from "../components/subHeader";

export const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  // const navigate = useNavigate();

  // 현재 step을 가져옴, 기본값은 1
  const step = searchParams.get("step") || "1";

  // 단계별 컴포넌트 렌더링
  const renderStep = () => {
    switch (step) {
      case "1":
        return <RegisterStep1 />;
      case "2":
        return <RegisterStep2 />;
      case "3":
        return <RegisterStep3 />;
      case "4":
        return <RegisterStep4 />;
      default:
        return <RegisterStep1 />;
    }
  };

  return (
    <div>
      <SubHeader text="회원가입" />
      {renderStep()}
      {/* <div>
        {step !== "1" && <button onClick={goToPreviousStep}>이전</button>}
        {step !== "4" && <button onClick={goToNextStep}>다음</button>}
      </div> */}
    </div>
  );
};
