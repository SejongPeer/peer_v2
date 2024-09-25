import React from "react";
import styled from "styled-components";

import buddyBtn from "../assets/images/buddyBtn.png";
import honbobBtn from "../assets/images/honbabBtn.png";
import schoolBtn from "../assets/images/schoolBtn.png";
import externalBtn from "../assets/images/externalBtn.png";
import kakaoImg from "../assets/images/kakao.png";

import { COLORS } from "../theme";
import { Header } from "../components/header";

const Banner = React.lazy(() => import("../components/banner"));

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <BtnContainer1>
          <Btn1 src={buddyBtn}></Btn1>
          <Btn1 src={honbobBtn}></Btn1>
        </BtnContainer1>
        <StudyContainer>
          <TitleContainer>
            <Title1>세종스터디</Title1>
            <Title2>인생 팀원 구하기</Title2>
          </TitleContainer>
          <BtnContainer1>
            <Btn2 src={schoolBtn}></Btn2>
            <Btn2 src={externalBtn}></Btn2>
          </BtnContainer1>
        </StudyContainer>
        <KakaoBtn>
          <KakaoImg src={kakaoImg}></KakaoImg>
          <Text>카카오톡 문의하기</Text>
        </KakaoBtn>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #fff7f7;
`;

const BtnContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
`;

const StudyContainer = styled.div`
  width: 100%;
  height: 216px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  margin-top: 10px;
  background-color: white;
  padding: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;
const Title1 = styled.p`
  font-family: "jalnan";
  font-weight: 600;
  font-size: 18px;
  color: black;
`;
const Title2 = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: black;
`;

const Btn1 = styled.img`
  width: 45vw;
  /* height: 160px; */
`;

const Btn2 = styled.img`
  width: 40vw;
`;

const KakaoBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${COLORS.line2};
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

const KakaoImg = styled.img`
  width: 20px;
  height: 20px;
`;
const Text = styled.p`
  color: ${COLORS.font2};
  font-size: 13px;
  font-weight: 800;
`;
