import { useState, useEffect } from "react";
import styled from "styled-components";
import GenderToggleButton from "./genderToggleButton";
import MajorDropDown from "./majorDropDown";
import { toast } from "sonner";
import { COLORS } from "../../theme";
import { Body3Sb, buttonStyle, Head2 } from "../../styles/global-styles";
import { useNavigate } from "react-router-dom";
import {
  checkNicknameAvailability,
  registerUser,
} from "../../services/apis/user.service";

export const RegisterStep4 = () => {
  const navigate = useNavigate();

  // Zustand에서 전역 상태 데이터를 가져옴
  // const { name, studentId, grade, account, password, passwordCheck } =
  //   useUserStore();

  // useState로 입력값 관리
  const [nickname, setNickname] = useState("");
  const [kakaoId, setKakaoId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState<"MALE" | "FEMALE">("MALE");
  const [subCollege, setSubCollege] = useState("");
  const [subMajor, setSubMajor] = useState("");
  const [isMinorChecked, setIsMinorChecked] = useState(false);
  const [_isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const account = localStorage.getItem("account");
  const password = localStorage.getItem("password");
  const passwordCheck = localStorage.getItem("passwordCheck");
  const grade = localStorage.getItem("grade");
  const studentId = localStorage.getItem("studentId");
  const college = localStorage.getItem("college");
  const major = localStorage.getItem("major");
  const name = localStorage.getItem("name");

  // 닉네임 중복 확인
  const handleCheckNickname = async () => {
    if (nickname) {
      const isAvailable = await checkNicknameAvailability(nickname);
      if (isAvailable) {
        toast.success("사용 가능한 닉네임입니다.");
        setIsNicknameAvailable(true);
      } else {
        toast.error(
          "이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해 주세요."
        );
        setIsNicknameAvailable(false);
      }
    } else {
      toast.error("닉네임을 입력해 주세요.");
    }
  };

  // 회원가입 요청을 위한 최종 데이터 전송
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 최종 데이터 구성
    const finalFormData = {
      account,
      password,
      passwordCheck,
      name,
      studentId,
      college,
      major,
      subCollege: isMinorChecked && subCollege ? subCollege : null, // 값이 없으면 null로 처리
      subMajor: isMinorChecked && subMajor ? subMajor : null, // 값이 없으면 null로 처리
      grade: Number(grade),
      gender,
      phoneNumber,
      nickname,
      kakaoAccount: kakaoId,
    };

    // 회원가입 API 호출
    const response = await registerUser(finalFormData);

    if (response) {
      toast.success("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return (
    <Container>
      <Text>매칭 필요정보</Text>
      <Form onSubmit={onSubmit}>
        <LabelContainer>
          <Label>닉네임</Label>
          <InputContainer>
            <Input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임 입력"
            />
            <CheckButton type="button" onClick={handleCheckNickname}>
              중복확인
            </CheckButton>
          </InputContainer>
        </LabelContainer>

        <LabelContainer>
          <Label>카카오톡 아이디</Label>
          <Input
            value={kakaoId}
            onChange={(e) => setKakaoId(e.target.value)}
            placeholder="카카오톡 아이디 입력 (매칭 상대방에게 전달)"
          />
        </LabelContainer>

        <LabelContainer>
          <Label>전화번호</Label>
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="전화번호 - 없이 입력"
          />
        </LabelContainer>

        <LabelContainer>
          <Label>성별</Label>
          <GenderToggleButton />
        </LabelContainer>

        <LabelContainer>
          <Label>학과 선택</Label>
          <MajorDropDown />
        </LabelContainer>
        <Text2>*학과선택은 2024 수강편람을 기준으로 정리되었습니다.</Text2>

        <LabelContainer>
          <CheckboxContainer>
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              checked={isMinorChecked}
              onChange={() => setIsMinorChecked(!isMinorChecked)}
            />
            <Text3>복수/부전공</Text3>
          </CheckboxContainer>
        </LabelContainer>

        {isMinorChecked && (
          <>
            <LabelContainer>
              <Label>부전공 단과대 선택</Label>
              <Input
                value={subCollege}
                onChange={(e) => setSubCollege(e.target.value)}
                placeholder="부전공 단과대 입력"
              />
            </LabelContainer>
            <LabelContainer>
              <MajorDropDown />
            </LabelContainer>
          </>
        )}

        <NextBtn type="submit">가입하기</NextBtn>
      </Form>
    </Container>
  );
};

// Styled-components로 스타일링한 컴포넌트들
const Container = styled.div`
  padding: 24px;
`;

const Form = styled.form`
  margin-top: 12px;
`;

const LabelContainer = styled.div``;
const Label = styled.div`
  margin-bottom: 8px;
  font-weight: 600;
  color: ${COLORS.font2};
`;

const Text = styled.p`
  ${Head2}
  color: ${COLORS.font1};
  margin-bottom: 4px;
`;

const Text2 = styled.p`
  font-size: 14px;
  color: ${COLORS.font4};
  margin-top: 4px;
  margin-bottom: 8px;
`;

const Text3 = styled.p`
  font-size: 16px;
  color: ${COLORS.font3};
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

const NextBtn = styled.button`
  ${buttonStyle}
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export default RegisterStep4;
