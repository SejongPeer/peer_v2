import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { signUpStep3Schema } from "../../lib/schema/auth.schema";
import styled from "styled-components";
import { COLORS } from "../../theme";
import { buttonStyle, Head2 } from "../../styles/global-styles";
import { useEffect } from "react";
import { z } from "zod";

type SignUpFormData = z.infer<typeof signUpStep3Schema>;

export const RegisterStep3Part2 = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpStep3Schema),
  });

  useEffect(() => {
    const name = localStorage.getItem("name");
    const studentId = localStorage.getItem("studentId");
    const grade = localStorage.getItem("grade");

    if (name) {
      setValue("name", name);
    }
    if (studentId) {
      setValue("studentId", studentId);
    }
    if (grade) {
      setValue("grade", Number(grade));
    }
  }, [setValue]);

  const goStep4 = () => {
    navigate("/register?step=4");
  };

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    navigate("/register?step=4");
  };

  return (
    <Container>
      <Text>기본정보</Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <NextBtn onClick={goStep4} type="submit">
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
  font-weight: 600;
  color: ${COLORS.font1};
`;

const Text = styled.p`
  ${Head2}
  color: ${COLORS.font1};
  margin-bottom: 4px;
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

const Warning = styled.p`
  color: ${COLORS.main};
  margin-bottom: 2px;
`;

const NextBtn = styled.button`
  ${buttonStyle}
  margin-top: 40px;
`;

export default RegisterStep3Part2;
