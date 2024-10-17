import styled from "styled-components";
import { COLORS } from "../../../theme";
import { LoginHeader } from "../../loginHeader";
import { BuddyStatus } from "../buddyStatus";
import buddyWaitingImg from "../../../assets/images/buddyWaiting.svg";
import { NoticeBox } from "../../noticeBox";
import { ConfirmButton } from "../../button/confirmButton";
import { useNavigate } from "react-router-dom";

export const BuddyWaiting = () => {
  const navigate = useNavigate();
  const HandleGoHome = () => {
    navigate('/');
  }

  return <MatchingContainer>
    <LoginHeader 
      text={""}
      backgroundColor={COLORS.white}
      textColor={COLORS.font1}
      showGoBack={true}
    />

    <BuddyStatus 
      step={1}
    />
    <MatchingTitle>세종버디 신청 완료</MatchingTitle>
    <MatchingText><BuddyCount>216</BuddyCount>명의 학생들이 버디를 찾고 있어요!</MatchingText>
    <MatchingImg src={buddyWaitingImg}/>
    <NoticeBox 
      text={"버디를 찾으면 상대방의 정보(과, 학년) 확인 후 수락 / 거절할 수 있습니다!"}
    />
    <ConfirmButton 
      text={"홈페이지로 이동"}
      backgroundcolor={`${COLORS.main}`}
      onClick={HandleGoHome}
    />
    <Cancel>버디 신청 취소</Cancel>
  </MatchingContainer>
};

export const MatchingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  align-items: center;
  height: 100vh;
`;
export const MatchingTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${COLORS.font1};
  margin: 20px 0 4px;
`;
export const MatchingText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${COLORS.font1};
`;
const BuddyCount = styled.b`
  font-weight: 600;
`;
const MatchingImg = styled.img`
  margin: 4px 0 39px;
`;
export const Cancel = styled.button`
  background-color: transparent;
  color: ${COLORS.font2};
  margin-top: 5px;
  cursor: pointer;
`;