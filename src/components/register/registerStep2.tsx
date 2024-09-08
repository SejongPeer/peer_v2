import styled from "styled-components";
import { COLORS } from "../../theme";
import { useState } from "react";
import { authenticateSejongUser } from "../../services/apis/user.service";
import { useNavigate } from "react-router-dom";
import { buttonStyle } from "../../styles/global-styles";
import { toast } from "sonner";

export const RegisterStep2: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    // console.log(value);
    localStorage.setItem("studentId", value);
  };

  const handleLogin = async () => {
    const result = await authenticateSejongUser(id, pw);
    localStorage.setItem("studentId", id);
    // 세종대학교 인증이 성공적으로 되었을 때만 studentId를 저장하고 다음 단계로 이동
    if (result && result.data.name !== null) {
      localStorage.setItem("studentId", id);
      navigate("/register?step=3");
    } else {
      // 인증 실패 시 다음 단계로 이동하지 않고, 에러 메시지를 표시합니다.
      toast.error("인증에 실패했습니다. 정보를 다시 확인해 주세요.");
    }
  };

  return (
    <Container>
      <TermsContainer>
        <TermsText>세종대학교 학생 인증</TermsText>
        <Text>세종대학교 통합로그인을 통해 인증합니다</Text>
        <Text>(세종대학교 포털 ID/Pw)</Text>
      </TermsContainer>
      <InputContainer>
        <Id
          placeholder="포털 로그인 아이디(학번)"
          value={id}
          onChange={handleIdChange}
        />
        <Pw
          placeholder="포털 로그인 비밀번호"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <Confirm onClick={handleLogin}>통합 로그인 인증</Confirm>
        <Address href="http://portal.sejong.ac.kr" target="_blank">
          http://portal.sejong.ac.kr
        </Address>
      </InputContainer>
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
  font-size: 18px;
  font-weight: 800;
  color: ${COLORS.font1};
  margin-bottom: 4px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 4px;
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
  margin-top: 12px;
`;

const Address = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  color: #777;
  font-size: 14px;
  margin-top: 8px;
`;

export default RegisterStep2;
