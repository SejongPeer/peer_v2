import styled from "styled-components";

import { Header } from "../components/header";
import { EditInform } from "../components/mypage/editInform/edit-inform";
import { COLORS } from "../theme";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { mypageEditSchema } from "../lib/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

type MyPageEditData = z.infer<typeof mypageEditSchema>;

//타입
import { MyPageResponse } from "../types/mypage/mypage";

//apis
import { getMypageData } from "../services/apis/mypage";
import { postMyPageData } from "../services/apis/mypage";

export const MyPageEdit = () => {
  const [data, setData] = useState<MyPageResponse | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<MyPageEditData>({
    resolver: zodResolver(mypageEditSchema),
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMypageData();
      if (response) {
        setData(response);
        setValue("nickname", response.nickname);
        setValue("kakaoAccount", response.kakaoAccount);
        setValue("phoneNumber", response.phoneNumber);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (data: MyPageEditData) => {
    const postDatas = {
      nickname: data.nickname,
      phoneNumber: data.phoneNumber,
      kakaoAccount: data.kakaoAccount,
      currentPassword: data.currentPassword,
      newPassword: data.password,
      newPassWordCheck: data.passwordCheck,
    };
    const response = await postMyPageData(postDatas);
    toast.success("수정이 완료되었습니다.");

    console.log(response);
    console.log("Submitted data: ", postDatas);
  };

  return (
    <Container>
      <Header />
      <InnerContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Section>
            <Title>
              정보 수정<Notice>*각 정보 클릭 시, 수정 가능</Notice>
            </Title>
            <EditInform
              title="닉네임"
              cont={data ? data.nickname : ""}
              register={register("nickname")}
            />
            <EditInform
              title="아이디"
              cont={data ? data.account : ""}
              disabledProps={true}
            />
            <EditInform
              title="카카오톡 아이디"
              cont={data ? data.kakaoAccount : ""}
              register={register("kakaoAccount")}
            />
            <EditInform
              title="전화번호"
              cont={data ? data.phoneNumber : ""}
              register={register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
            )}
          </Section>
          <Section>
            <Title>정보 수정</Title>
            <Label>현재 비밀번호 입력</Label>
            <PWInput
              placeholder="비밀번호 입력"
              style={{ marginBottom: "16px" }}
              {...register("currentPassword")}
              type="password"
            />
            {errors.currentPassword && (
              <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>
            )}
            <Label>
              새 비밀번호 입력<span>(10-16자의 영문,숫자)</span>
            </Label>{" "}
            <PWInput
              placeholder="비밀번호 입력"
              {...register("password")}
              type="password"
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            <PWInput
              type="password"
              placeholder="비밀번호 확인"
              {...register("passwordCheck")}
            />
            {errors.passwordCheck && (
              <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>
            )}
          </Section>
          <Section>
            <Title>
              내 학과{" "}
              <Notice>*학과 정보는 새로운 학기에 수정 가능합니다.</Notice>
            </Title>
            <Cont>
              {data && data.major} • {data && data.grade}학년
            </Cont>
          </Section>
          <EditBtn type="submit">수정하기</EditBtn>{" "}
        </Form>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.sub2};
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  padding: 20px 16px;
  background-color: white;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.font1};
  margin-bottom: 12px;
`;
const Notice = styled.span`
  color: ${COLORS.sub1};
  font-size: 14px;
  margin-left: 4px;
  font-weight: 500;
`;
const Label = styled.div`
  color: ${COLORS.font1};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  span {
    color: ${COLORS.font2};
  }
`;
const PWInput = styled.input`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLORS.regular};
  border-radius: 35px;
  padding: 0 20px;
  font-size: 15px;
  color: ${COLORS.font1};
  margin-bottom: 8px;
`;
const Cont = styled.div`
  color: ${COLORS.font2};
  font-size: 16px;
`;
const EditBtn = styled.button`
  width: 90%;
  height: 52px;
  background-color: ${COLORS.main};
  color: ${COLORS.white};
  font-size: 16px;
  border-radius: 28px;
  margin: 60px 16px 20px 16px;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  padding: 0 20px;
  position: relative;
  bottom: 5px;
`;
