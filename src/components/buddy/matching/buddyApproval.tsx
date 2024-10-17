import styled from "styled-components";
import { COLORS } from "../../../theme";
import { LoginHeader } from "../../loginHeader";
import { BuddyStatus } from "../buddyStatus";
import BuddyApprovalImg from "../../../assets/images/buddyApproval.svg";
import { NoticeBox } from "../../noticeBox";
import { ConfirmButton } from "../../button/confirmButton";
import { useNavigate } from "react-router-dom";
import { 
  MatchingContainer, 
  MatchingTitle,
  MatchingText
} from './buddyWaiting';

export const BuddyApproval = () => {
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
      step={2}
    />
    <MatchingTitle>버디를 찾았습니다</MatchingTitle>
    <MatchingText>24시간 내로 수락여부를 선택해주세요!</MatchingText>
    <MatchingImg src={BuddyApprovalImg}/>
    <MatchingBuddyInfo>미디어커뮤니케이션 · 4학년</MatchingBuddyInfo>
    <NoticeBox 
      text={"서로 수락하면 상대방에게 카카오톡ID가 추가로 전달됩니다."}
    />

    <ButtonContainer>
      <ConfirmButton 
        width={"168px"}
        text={"거절하기"}
        backgroundcolor={`${COLORS.sub4}`}
        textcolor={`${COLORS.main}`}
        onClick={HandleGoHome}
      />
      <ConfirmButton 
        width={"168px"}
        text={"수락하기"}
        backgroundcolor={`${COLORS.main}`}
        onClick={HandleGoHome}
      />
    </ButtonContainer>
  </MatchingContainer>
};

const MatchingBuddyInfo = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.font1};
  margin-bottom: 21px;
`;
const MatchingImg = styled.img`
  margin: 16px 0 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  margin-top: auto;
`;