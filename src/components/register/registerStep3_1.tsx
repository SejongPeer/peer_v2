import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signUpSchema, SignUpFormData } from "../../lib/schema/auth.schema";
import { toast } from "sonner";

// 스타일 임포트 (COLORS나 buttonStyle 등은 프로젝트 내부 정의에 맞게)
import { COLORS } from "../../theme";
import { Body2Sb, buttonStyle, Head2 } from "../../styles/global-styles";

// 만약 아이디 중복확인 API 같은 게 필요하다면, import해서 사용하면 됨.
// import { checkAccountAvailability } from "../../services/apis/user.service";

export const RegisterStep3 = () => {
  const navigate = useNavigate();

  // ★ useForm 설정
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      account: "",
      password: "",
      passwordCheck: "",
      name: "",
      studentId: "",
      grade: 1, // 기본값 예시
    },
  });

  // 아이디 중복확인 로직을 쓰고 싶으면 이런 식으로:
  /*
  const [isAccountChecked, setIsAccountChecked] = useState(false);
  const handleCheckAccount = async () => {
    const accountValue = watch("account");
    if (!accountValue) return;
    const isAvailable = await checkAccountAvailability(accountValue);
    if (!isAvailable) {
      setError("account", { type: "manual", message: "이미 사용중인 아이디입니다." });
      setIsAccountChecked(false);
    } else {
      clearErrors("account");
      setIsAccountChecked(true);
      alert("사용 가능한 아이디입니다!");
    }
  };
  */

  // 폼 제출시 (회원가입 로직)
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log("전송 데이터:", data);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("응답 상태:", response.status);

      const result = await response.json();
      console.log("MSW 응답:", result);

      toast.success("회원가입 완료되었습니다!");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 오류:", error);
      toast.error("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <SubTitle>아이디, 비밀번호, 기본정보 입력</SubTitle>

      {/* 
        handleSubmit(onSubmit) → 성공시 onSubmit 실행, 
        실패 시 내부적으로 errors에 저장
      */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* 아이디 */}
        <Label>아이디</Label>
        <Input {...register("account")} placeholder="아이디 입력" />
        {errors.account && <ErrorMsg>{errors.account.message}</ErrorMsg>}

        {/* 비밀번호 */}
        <Label>비밀번호</Label>
        <Input
          type="password"
          {...register("password")}
          placeholder="비밀번호 입력"
        />
        {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

        {/* 비밀번호 확인 */}
        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          {...register("passwordCheck")}
          placeholder="비밀번호 확인"
        />
        {errors.passwordCheck && (
          <ErrorMsg>{errors.passwordCheck.message}</ErrorMsg>
        )}

        {/* 이름 */}
        <Label>이름</Label>
        <Input {...register("name")} placeholder="이름 입력" />
        {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}

        {/* 학번 */}
        <Label>학번</Label>
        <Input {...register("studentId")} placeholder="학번 입력" />
        {errors.studentId && <ErrorMsg>{errors.studentId.message}</ErrorMsg>}

        {/* 학년 */}
        <Label>학년</Label>
        <Input
          type="number"
          {...register("grade", { valueAsNumber: true })} // number로 변환
          placeholder="학년 (1~4)"
        />
        {errors.grade && <ErrorMsg>{errors.grade.message}</ErrorMsg>}

        {/* "회원가입" 버튼 */}
        <SubmitButton type="submit">회원가입</SubmitButton>
      </Form>
    </Container>
  );
};

// ================== styled-components 예시 ================== //
const Container = styled.div`
  padding: 24px;
`;

const Form = styled.form`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${Head2};
  color: ${COLORS.font1};
`;

const SubTitle = styled.h2`
  ${Body2Sb}
  color: ${COLORS.font2};
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-top: 12px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  height: 48px;
  border: 1px solid ${COLORS.line2};
  border-radius: 35px;
  padding: 10px 20px;
  font-size: 16px;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 4px;
`;

const SubmitButton = styled.button`
  ${buttonStyle}
  margin-top: 24px;
  background-color: ${COLORS.main};
  color: #fff;
`;
