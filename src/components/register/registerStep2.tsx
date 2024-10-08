import styled from "styled-components";
import { COLORS } from "../../theme";
import { authenticateSejongUser } from "../../services/apis/user.service";
import { useNavigate } from "react-router-dom";
import { Body2R, buttonStyle, Head2 } from "../../styles/global-styles";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
// import { useUserStore } from "../../store/useUserStore";

export const RegisterStep2: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      id: "",
      pw: "",
      name: "",
      grade: "",
      studentId: "",
    },
  });

  // const { setUserData } = useUserStore(); // Zustand에서 studentId와 setUserData 가져오기
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const { id, pw } = data;

    // 입력한 studentId는 그대로 저장
    localStorage.setItem("studentId", id);

    const result = await authenticateSejongUser(id, pw);
    console.log(result);

    localStorage.setItem("name", result.data.name);
    localStorage.setItem("grade", result.data.grade);
    navigate("/register?step=3-1");

    if (result) {
    } else {
      toast.error("인증에 실패했습니다. 정보를 다시 확인해 주세요.");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TermsContainer>
          <TermsText>세종대학교 학생 인증</TermsText>
          <Text>세종대학교 통합로그인을 통해 인증합니다</Text>
          <Text>(세종대학교 포털 ID/Pw)</Text>
        </TermsContainer>
        <InputContainer>
          <Id placeholder="포털 로그인 아이디(학번)" {...register("id")} />
          <Pw
            placeholder="포털 로그인 비밀번호"
            type="password"
            {...register("pw")}
          />
          <Confirm type="submit">통합 로그인 인증</Confirm>
        </InputContainer>
      </form>
    </Container>
  );
};

// Styled-components로 스타일링한 컴포넌트들
const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TermsContainer = styled.div``;

const TermsText = styled.p`
  ${Head2}
  color: ${COLORS.font1};
  margin-bottom: 4px;
`;

const Text = styled.p`
  ${Body2R}
  color: #555;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 8px;
`;

const Id = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid ${COLORS.line2};
  border-radius: 35px;
  padding: 16px 20px;
`;

const Pw = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid ${COLORS.line2};
  border-radius: 35px;
  padding: 16px 20px;
`;

const Confirm = styled.button`
  ${buttonStyle}
  margin-top: 20px;
`;

export default RegisterStep2;
