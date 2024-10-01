import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { signUpStep3Schema } from "../../lib/schema/auth.schema";
import styled from "styled-components";
import { COLORS } from "../../theme";
import { buttonStyle } from "../../styles/global-styles";
import { useEffect } from "react";
import { checkAccountAvailability } from "../../services/apis/user.service";
import { z } from "zod";

type SignUpFormData = z.infer<typeof signUpStep3Schema>;

export const RegisterStep3 = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpStep3Schema),
  });

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 값을 가져와서 설정
  useEffect(() => {
    const name = localStorage.getItem("name");
    const studentId = localStorage.getItem("studentId");
    const grade = localStorage.getItem("grade");

    if (name) {
      setValue("name", name);
    }
    if (studentId) {
      setValue("studentId", studentId); // 학번을 설정합니다.
    }
    if (grade) {
      setValue("grade", Number(grade)); // 학년을 숫자 값으로 변환하여 설정
    }
  }, [setValue]);

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    // 회원가입 데이터를 처리하는 로직 추가
    localStorage.setItem("account", data.account);
    localStorage.setItem("password", data.password);
    localStorage.setItem("passwordCheck", data.passwordCheck);
    navigate("/register?step=4");
  };

  const handleCheckAccount = async () => {
    const account = getValues("account"); // 입력된 아이디 가져오기
    if (account) {
      const isAvailable = await checkAccountAvailability(account);
      if (isAvailable) {
        console.log("사용 가능한 아이디입니다.");
      }
    }
  };

  return (
    <Container>
      <Text>기본정보</Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelContainer>
          <Label>아이디</Label>
          <InputContainer>
            <Input {...register("account")} placeholder="아이디 입력" />
            <CheckButton type="button" onClick={handleCheckAccount}>
              중복확인
            </CheckButton>
          </InputContainer>
          {errors.account && <Warning>{errors.account.message}</Warning>}
        </LabelContainer>

        <LabelContainer>
          <Label>비밀번호</Label>
          <Input
            type="password"
            {...register("password")}
            placeholder="비밀번호 입력"
          />
          {errors.password && <Warning>{errors.password.message}</Warning>}
        </LabelContainer>

        <LabelContainer>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            {...register("passwordCheck")}
            placeholder="비밀번호 확인"
          />
          {errors.passwordCheck && (
            <Warning>{errors.passwordCheck.message}</Warning>
          )}
        </LabelContainer>

        <LabelContainer>
          <Label>이름</Label>
          <Input {...register("name")} placeholder="이름 입력" readOnly />
          {errors.name && <Warning>{errors.name.message}</Warning>}
        </LabelContainer>

        <LabelContainer>
          <Label>학번</Label>
          <Input {...register("studentId")} placeholder="학번 입력" readOnly />
          {errors.studentId && <Warning>{errors.studentId.message}</Warning>}
        </LabelContainer>

        <LabelContainer>
          <Label>학년</Label>
          <Input
            type="number"
            {...register("grade", { valueAsNumber: true })}
            placeholder="학년 입력"
            readOnly
          />
          {errors.grade && <Warning>{errors.grade.message}</Warning>}
        </LabelContainer>

        <NextBtn type="submit">다음</NextBtn>
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

export default RegisterStep3;
