import styled from "styled-components";

import { Header } from "../components/header";
import { MatchingInfo } from "../components/mypage/matching-info";
import { Guide } from "../components/mypage/guide";
import { COLORS } from "../theme";
import { useNavigate } from "react-router-dom";

import buddyImg from "../assets/images/buddyImg.png";
import honbabImg from "../assets/images/honbabImg.png";

//타입
import { BtnProps } from "../types/mypage/css";

export const MyPage = () => {
  const navigate = useNavigate();
  const moveToEdit = () => {
    navigate("/my-page/edit");
  };
  return (
    <Container>
      <Header />
      <InnerContainer>
        <Section>
          <Title>매칭정보</Title>
          <MatchingInfo
            title="지원한 스터디 확인"
            explain="내가 지원한 스터디 현황 확인하기"
          />
          <MatchingInfo
            title="내 스터디 게시글 관리"
            explain="내가 업로드한 게시글, 신청자 관리하기"
          />
          <MatchingInfo
            title="세종버디"
            explain="매칭 상대 확인"
            img={buddyImg}
          />
          <MatchingInfo
            title="혼밥탈출"
            explain="밥짝꿍 확인"
            img={honbabImg}
          />
        </Section>
        <Section>
          <Title>내 정보</Title>
          <MyInfoBox onClick={moveToEdit}>
            <Name>송성환</Name>
            <Info>
              소프트웨어학과 <span>• 3학년</span>
            </Info>
          </MyInfoBox>
        </Section>
        <Section>
          <Title>사용방법</Title>
          <GuideBox>
            <Guide title="세종스터디" addCon="사용법" />
            <Guide title="세종버디" addCon="사용법" />
            <Guide title="혼밥탈출" addCon="세종버디" />
          </GuideBox>
        </Section>
        <Section>
          <Title>이용안내</Title>
          <InnerBox>
            <Course>개인정보처리방침</Course>
            <Course>이용약관</Course>
            <Course>커뮤니티 이용규칙</Course>
            <Course>공지사항</Course>
          </InnerBox>
          <Btn btnState="logOut">로그아웃</Btn>
          <Btn btnState="withDraw">탈퇴하기</Btn>
        </Section>
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

const MyInfoBox = styled.div`
  width: 100%;
  height: 78px;
  border-radius: 16px;
  border: 1px solid ${COLORS.regular};
  padding: 14px 16px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
`;
const Name = styled.span`
  color: ${COLORS.font1};
  font-size: 18px;
  font-weight: 600;
`;
const Info = styled.span`
  color: ${COLORS.font1};
  font-size: 15px;
  font-weight: 600;
  span {
    color: ${COLORS.font2};
  }
`;
const GuideBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 60px;
`;
const Course = styled.a`
  font-size: 14px;
  color: ${COLORS.font2};
  text-decoration: underline;
`;
const Btn = styled.button<BtnProps>`
  width: 100%;
  height: 52px;
  border-radius: 28px;
  font-size: 16px;
  background-color: ${(props) =>
    props.btnState === "logOut" ? `${COLORS.black}` : `${COLORS.white}`};
  color: ${(props) =>
    props.btnState === "logOut" ? `${COLORS.white}` : `${COLORS.font2}`};
`;
