import styled from "styled-components";
import { COLORS } from "../../theme";
import unchecked from "../../assets/images/unfilledCheck.png";
import checked from "../../assets/images/filledCheck.png";

interface BuddyMatchingStep {
  step: number;
}

export const BuddyStatus = ({step}:BuddyMatchingStep) => {

  return (
    <StatusContainer>
      <StatusIconContainer>
        <StatusIcon src={checked}/>
        {(step >= 2) ? 
        <StatusBarProgress />
        :
        <StatusBar/>}
        <StatusIcon src={(step >= 2) ? checked : unchecked}/>
        {(step >= 3) ? 
        <StatusBarProgress />
        :
        <StatusBar/>}
        <StatusIcon src={(step >= 3) ? checked : unchecked}/>
      </StatusIconContainer>

      <StatusTextContainer>
        <StatusTextTextNow>버디 찾는 중</StatusTextTextNow>
        {(step >= 2) ? 
        <StatusTextTextNow>버디 수락/거절</StatusTextTextNow>
        :
        <StatusTextText>버디 수락/거절</StatusTextText>}
        {(step >= 3) ? 
        <StatusTextTextNow>버디 정보확인</StatusTextTextNow>
        :
        <StatusTextText>버디 정보확인</StatusTextText>}

        
      </StatusTextContainer>
    </StatusContainer>
  )
}

const StatusContainer = styled.div`
  width: 301px;
  height: 78px;
  background-color: ${COLORS.sub3};
  border-radius: 16px;
  padding: 14px 0;
  margin: 0 auto;
  margin-top: 4px;
`;
const StatusIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`
const StatusIcon = styled.img`
  width: 24px;
  height: 24px
`;
const StatusBar = styled.div`
  width: 48px;
  height: 0;
  border: 1px solid ${COLORS.line1};
`;
const StatusBarProgress = styled.div`
  width: 48px;
  height: 0;
  border: 1px solid ${COLORS.main};
`;
const StatusTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 6px;
  justify-content: center;
`;
const StatusTextTextNow = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${COLORS.main};
`;
const StatusTextText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.font3};
  letter-spacing: -0.35px;
`;