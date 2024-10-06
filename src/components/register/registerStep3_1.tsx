import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../theme";
import {
  Body2Sb,
  Body3Sb,
  buttonStyle,
  Head2,
} from "../../styles/global-styles";
import { checkAccountAvailability } from "../../services/apis/user.service";
import { useState, useEffect } from "react";

export const RegisterStep3Part1 = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isAccountChecked, setIsAccountChecked] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // 모든 필드가 입력되고 아이디 중복 확인이 완료되었을 때만 버튼 활성화
    if (
      account &&
      password &&
      passwordCheck &&
      isAccountChecked &&
      password === passwordCheck
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [account, password, passwordCheck, isAccountChecked]);

  const onSubmit = () => {
    console.log("onSubmit 클릭됨!");
    // localStorage에 저장
    localStorage.setItem("회원가입_아이디", account);
    localStorage.setItem("회원가입_비밀번호", password);
    localStorage.setItem("회원가입_비밀번호확인", passwordCheck);
    navigate("/register?step=3-2"); // 다음 페이지로 이동
  };

  const handleCheckAccount = async () => {
    if (account) {
      const isAvailable = await checkAccountAvailability(account);
      if (isAvailable) {
        console.log("사용 가능한 아이디입니다.");
        setIsAccountChecked(true);
      } else {
        setIsAccountChecked(false);
      }
    }
  };

  return (
    <Container>
      <Text>아이디, 비밀번호</Text>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <LabelContainer>
          <Label>아이디</Label>
          <InputContainer>
            <Input
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="아이디 입력"
            />
            <CheckButton type="button" onClick={handleCheckAccount}>
              중복확인
            </CheckButton>
          </InputContainer>
        </LabelContainer>

        <LabelContainer>
          <Label>비밀번호</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
          />
        </LabelContainer>

        <LabelContainer>
          <Input
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="비밀번호 확인"
          />
        </LabelContainer>

        <NextBtn type="submit" disabled={!isButtonEnabled}>
          다음
        </NextBtn>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
`;

const Form = styled.form`
  margin-top: 12px;
`;

const LabelContainer = styled.div``;
const Label = styled.div`
  margin-bottom: 8px;
  ${Body2Sb}
  color: ${COLORS.font2};
`;

const Text = styled.p`
  ${Head2}
  color: ${COLORS.font1};
  margin-bottom: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  background-color: white;
  border-radius: 35px;
  border: 1px solid ${COLORS.line2};
  padding: 10px 0px 10px 20px;
  margin-bottom: 12px;
`;

const CheckButton = styled.button`
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  height: 36px;
  padding: 6px 14px;
  ${Body3Sb}
  color: white;
  background-color: ${COLORS.main};
  border: none;
  border-radius: 35px;
  cursor: pointer;
  width: 80px;
`;

const NextBtn = styled.button<{ disabled: boolean }>`
  ${buttonStyle}
  background-color: ${(props) =>
    props.disabled ? COLORS.disabled : COLORS.main};
  color: ${(props) => (props.disabled ? COLORS.white : COLORS.white)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export default RegisterStep3Part1;
