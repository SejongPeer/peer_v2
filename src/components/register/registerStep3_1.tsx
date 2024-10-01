import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { signUpStep3Schema } from "../../lib/schema/auth.schema";
import styled from "styled-components";
import { COLORS } from "../../theme";
import {
  Body2Sb,
  Body3Sb,
  buttonStyle,
  Head2,
} from "../../styles/global-styles";
import { checkAccountAvailability } from "../../services/apis/user.service";
import { z } from "zod";

type SignUpFormData = z.infer<typeof signUpStep3Schema>;

export const RegisterStep3Part1 = () => {
  const navigate = useNavigate();

  const goStep3_2 = () => {
    navigate("/register?step=3-2");
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpStep3Schema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    localStorage.setItem("account", data.account);
    localStorage.setItem("password", data.password);
    localStorage.setItem("passwordCheck", data.passwordCheck);
    navigate("/register?step=3-part2"); // 다음 페이지로 이동
  };

  const handleCheckAccount = async () => {
    const account = getValues("account");
    if (account) {
      const isAvailable = await checkAccountAvailability(account);
      if (isAvailable) {
        console.log("사용 가능한 아이디입니다.");
      }
    }
  };

  return (
    <Container>
      <Text>아이디, 비밀번호</Text>
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
          <Input
            type="password"
            {...register("passwordCheck")}
            placeholder="비밀번호 확인"
          />
          {errors.passwordCheck && (
            <Warning>{errors.passwordCheck.message}</Warning>
          )}
        </LabelContainer>

        <NextBtn onClick={goStep3_2} type="submit">
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

const Warning = styled.p`
  color: ${COLORS.main};
  margin-bottom: 2px;
`;

const NextBtn = styled.button`
  ${buttonStyle}
`;

export default RegisterStep3Part1;
