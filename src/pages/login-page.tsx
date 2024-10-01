import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { SigninType, signInSchema } from "../lib/schema/auth.schema"; // 스키마 및 타입 임포트
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../theme";
import { LoginHeader } from "../components/loginHeader";

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninType>({
    resolver: zodResolver(signInSchema), // Zod 스키마를 리졸버로 사용
  });

  const onSubmit = (data: SigninType) => {
    console.log("유효한 데이터:", data);
    // 로그인 처리 로직 추가
    toast.success("로그인 성공!");
    navigate("/dashboard"); // 로그인 성공 시 대시보드로 이동 예시
  };

  return (
    <Container>
      <LoginHeader text="로그인" backgroundColor="white" textColor="black" />
      <LoginContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem>
            <Input
              type="text"
              id="username"
              {...register("username")}
              placeholder="아이디"
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <Input
              type="password"
              id="password"
              {...register("password")}
              placeholder="비밀번호"
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FormItem>
        </Form>
        <SubmitButton type="submit">로그인</SubmitButton>
        <Container2>
          <Find>ID • PW 찾기</Find>
          <Divider></Divider>
          <Find onClick={() => navigate("/register")}>회원가입</Find>
        </Container2>
        <Warning>
          *로그인이 안되신다면 팝업이 차단되어 있는지 확인해 주세요.
        </Warning>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

const Find = styled.p`
  font-size: 14px;
  color: ${COLORS.font3};
`;

const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: ${COLORS.font3};
  margin: 0 8px;
`;

const LoginContainer = styled.div`
  padding: 44px 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 16px 20px;
  font-size: 16px;
  border: 1px solid ${COLORS.line2};
  border-radius: 35px;
  height: 56px;
  background-color: white;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: ${COLORS.main};
  border: none;
  border-radius: 35px;
  cursor: pointer;
  margin-top: 20px;
  height: 56px;
  width: 100%;
`;

const Warning = styled.p`
  display: flex;
  justify-content: center;
  color: ${COLORS.font1};
  font-weight: 500;
  font-size: 14px;
  margin-top: 60px;
`;
