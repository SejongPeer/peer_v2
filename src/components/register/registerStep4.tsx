import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { signUpStep4Schema } from "../../lib/schema/auth.schema";
import GenderToggleButton from "./genderToggleButton";
import MajorDropDown from "./majorDropDown";
import { toast } from "sonner";
import { COLORS } from "../../theme";
import { buttonStyle } from "../../styles/global-styles";
import { useNavigate } from "react-router-dom";
import { checkNicknameAvailability } from "../../services/apis/user.service";

type SignUpStep4FormData = {
  nickname: string;
  kakaoId: string;
  phoneNumber: string;
  gender: "남성" | "여성";
  college: string;
  major: string;
  subCollege?: string;
  subMajor?: string;
};

export const RegisterStep4 = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<SignUpStep4FormData>({
    resolver: zodResolver(signUpStep4Schema),
  });

  const [isMinorChecked, setIsMinorChecked] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  localStorage.setItem("subCollege", "null");
  localStorage.setItem("subMajor", "null");

  const handleCheckNickname = async () => {
    const nickname = getValues("nickname");
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

  const onSubmit = (data: SignUpStep4FormData) => {
    console.log("onSubmit 함수가 호출되었습니다.", data);

    // Fetching data from localStorage
    const account = localStorage.getItem("account");
    const password = localStorage.getItem("password");
    const passwordCheck = localStorage.getItem("passwordCheck");
    const name = localStorage.getItem("name");
    const studentId = localStorage.getItem("studentId");
    const grade = localStorage.getItem("grade");
    const major = localStorage.getItem("major");
    const gender = localStorage.getItem("gender");
    const college = localStorage.getItem("college");
    const subCollege = isMinorChecked
      ? localStorage.getItem("subCollege")
      : null;
    const subMajor = isMinorChecked ? localStorage.getItem("subMajor") : null;

    // Final form data combining both localStorage and form data
    const finalFormData = {
      account,
      password,
      passwordCheck,
      name,
      studentId,
      college: college || "",
      major: major || "",
      subCollege: subCollege || "",
      subMajor: subMajor || "",
      grade: grade ? Number(grade) : null,
      nickname: data.nickname,
      kakaoId: data.kakaoId,
      phoneNumber: data.phoneNumber,
      gender,
    };

    console.log("최종 Form Data:", finalFormData);

    // Here you would submit finalFormData to your server
    // await submitFormDataToServer(finalFormData);

    toast.success("회원가입 정보가 저장되었습니다.");
    navigate("/login");
  };

  return (
    <Container>
      <Text>매칭 필요정보</Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelContainer>
          <Label>닉네임</Label>
          <InputContainer>
            <Input {...register("nickname")} placeholder="닉네임 입력" />
            <CheckButton type="button" onClick={handleCheckNickname}>
              중복확인
            </CheckButton>
          </InputContainer>
          {errors.nickname && <Warning>{errors.nickname.message}</Warning>}
        </LabelContainer>

        <LabelContainer>
          <Label>카카오톡 아이디</Label>
          <Input
            {...register("kakaoId")}
            placeholder="카카오톡 아이디 입력 (매칭 상대방에게 전달)"
          />
          {errors.kakaoId && <Warning>{errors.kakaoId.message}</Warning>}
        </LabelContainer>

        <LabelContainer>
          <Label>전화번호</Label>
          <Input
            {...register("phoneNumber")}
            placeholder="전화번호 - 없이 입력"
          />
          {errors.phoneNumber && (
            <Warning>{errors.phoneNumber.message}</Warning>
          )}
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
                {...register("subCollege")}
                placeholder="부전공 단과대 입력"
              />
              {errors.subCollege && (
                <Warning>{errors.subCollege.message}</Warning>
              )}
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
  font-size: 18px;
  font-weight: 800;
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
  height: 44px;
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
  font-size: 15px;
  font-weight: 600;
  color: white;
  background-color: ${COLORS.main};
  border: none;
  border-radius: 35px;
  cursor: pointer;
  width: 80px;
`;

const Warning = styled.p`
  color: ${COLORS.main};
  margin-bottom: 2px;
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
