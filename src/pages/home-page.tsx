import React from "react";
import styled from "styled-components";

import buddyChar from "../assets/images/main/buddy_character.png";
import honbobChar from "../assets/images/main/honbob_character.png";
import schoolChar from "../assets/images/main/study_school_character.png";
import contestChar from "../assets/images/main/study_contest_character.png";
import kakaoImg from "../assets/images/kakao.png";

import { COLORS } from "../theme";
import { Header } from "../components/header";

const Banner = React.lazy(() => import("../components/banner"));

export const HomePage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <ServiceContainer>
        <MatchingBtn>
          <ServiceTitle>세종버디</ServiceTitle>
          <ServiceInfo>새로운 캠퍼스 짝궁 찾기</ServiceInfo>
          <ServiceCharacter
            src={buddyChar}
            style={{ width: "96px", height: "88px", aspectRatio: "96/88" }}
            alt="세종버디 캐릭터"
          />
        </MatchingBtn>
        <MatchingBtn>
          <ServiceTitle>혼밥탈출</ServiceTitle>
          <ServiceInfo>혼밥하기 싫을 때</ServiceInfo>
          <ServiceCharacter
            src={honbobChar}
            style={{ width: "88px", height: "88px", aspectRatio: "1/1" }}
            alt="혼밥탈출 캐릭터"
          />
        </MatchingBtn>

        <StudyContainer>
          <TitleContainer>
            <ServiceTitle>세종스터디</ServiceTitle>
            <ServiceInfo>인생 팀원 구하기</ServiceInfo>
          </TitleContainer>
          <StudyBtnContainer>
            <StudyBtn>
              <ServiceCharacter
                src={schoolChar}
                alt="세종스터디 학교 수업 스터디 캐릭터"
              />
              <ServiceTitle style={{ fontSize: "14px" }}>
                학교 수업 스터디
              </ServiceTitle>
            </StudyBtn>
            <StudyBtn>
              <ServiceCharacter
                src={contestChar}
                alt="세종스터디 수업 외 활동 캐릭터"
              />
              <ServiceTitle style={{ fontSize: "14px" }}>
                수업 외 활동
              </ServiceTitle>
            </StudyBtn>
          </StudyBtnContainer>
        </StudyContainer>
      </ServiceContainer>

      <KakaoBtn>
        <KakaoImg src={kakaoImg} />
        <Text>카카오톡 문의하기</Text>
      </KakaoBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 768px;
`;

const ServiceContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(166px, 1fr));
  gap: 11px 10px;
  justify-items: center;
  align-items: center;
  margin: 12px 0 10px;
  padding: 16px;
`;
const MatchingBtn = styled.button`
  border: 1px solid ${COLORS.line2};
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  height: 160px;
  aspect-ratio: 166/160;
  padding: 16px 8px 16px 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    border: 1px solid ${COLORS.sub};
  }
  &:active {
    border: 1px solid ${COLORS.sub};
  }
`;

const ServiceTitle = styled.h2`
  font-family: "jalnan";
  font-size: 18px;
  width: fit-content;
`;
const ServiceInfo = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
const ServiceCharacter = styled.img`
  margin-left: auto;
`;

const StudyContainer = styled.section`
  grid-column: 1 / span 2;
  width: 100%;
  height: 216px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  background-color: white;
  padding: 16px;
`;
const StudyBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;
const StudyBtn = styled.button`
  width: 152px;
  height: 136px;
  aspect-ratio: 152/136;
  padding: 8px 16px;
  background-color: ${COLORS.back1};
  border: 1px solid ${COLORS.line2};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border: 1px solid ${COLORS.sub};
  }
  &:active {
    border: 1px solid ${COLORS.sub};
  }
`;

const KakaoBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid ${COLORS.line2};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  &:hover {
    border: 1px solid ${COLORS.sub};
  }
  &:active {
    border: 1px solid ${COLORS.sub};
  }
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
