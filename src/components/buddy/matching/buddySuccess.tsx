import styled from "styled-components";
import { MatchingContainer, MatchingText } from "./buddyWaiting";
import { LoginHeader } from "../../loginHeader";
import { COLORS } from "../../../theme";
import { BuddyStatus } from "../buddyStatus";
import left from "../../../assets/images/left-controller.svg";
import right from "../../../assets/images/right-controller.svg";
import { ConfirmButton } from "../../button/confirmButton";
import { useState } from "react";

interface BuddyInfoWrapperProps {
  activeIndex: number;
}

export const BuddySuccess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buddyInfoList = [
    {
      name: "장유진",
      department: "전자정보통신공학과",
      grade: "4학년",
      kakaoId: "yujinyujin",
    },
    {
      name: "장유진",
      department: "전자정보통신공학과",
      grade: "4학년",
      kakaoId: "yujinyujin",
    },
    {
      name: "장유진",
      department: "전자정보통신공학과",
      grade: "4학년",
      kakaoId: "yujinyujin",
    },
  ];

  const handleNext = () => {
    if (activeIndex < buddyInfoList.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  return (
    <MatchingContainer>
      <LoginHeader
        text={""}
        backgroundColor={COLORS.white}
        textColor={COLORS.font1}
        showGoBack={true}
      />
      <BuddyStatus step={3} />
      <BuddyTitle>버디 매칭 성공!</BuddyTitle>
      <MatchingText>버디와 연락해 보세요!</MatchingText>
      <Slider>
      <BuddyInfoControllerL onClick={handlePrev} />
      <BuddyInfoContainer>
        <BuddyInfoWrapper activeIndex={activeIndex}>
          <BuddyInfoWrapper activeIndex={activeIndex}>
            {buddyInfoList.map((buddy, index) => (
              <BuddyInfo key={index}>
                <InfoTitle>{index+1}번째 버디 정보</InfoTitle>
                <Line />
                <BuddyName>{buddy.name}</BuddyName>
                <BuddyInfoText>{buddy.department}</BuddyInfoText>
                <BuddyInfoText>{buddy.grade}</BuddyInfoText>
                <BuddyKakao>
                  <BuddyKakaoTitle>카카오톡 아이디</BuddyKakaoTitle>
                  <BuddyKakaoText>{buddy.kakaoId}</BuddyKakaoText>
                </BuddyKakao>
              </BuddyInfo>
            ))}
          </BuddyInfoWrapper>
        </BuddyInfoWrapper>
      </BuddyInfoContainer>
      <BuddyInfoControllerR onClick={handleNext} />
      </Slider>

      <Notice>*옆으로 넘겨 다른 버디를 확인해주세요.</Notice>

      <ConfirmButton />
    </MatchingContainer>
  );
};

const BuddyTitle = styled.h3`
  color: ${COLORS.main};
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 4px;
  line-height: 1.3;
`;
const Slider = styled.div`
  display: flex;
  align-items: center;
`;
const BuddyInfoWrapper = styled.div<BuddyInfoWrapperProps>`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => -props.activeIndex * 140}px);
  margin-top: 16px;
`;
const BuddyInfoControllerL = styled.button`
  background-image: url(${left});
  background-repeat: no-repeat;
  width: 20px;
  height: 200px;
  padding: 0;
  background-color: transparent;
  background-position: center;
`;
const BuddyInfoControllerR = styled.button`
  background-image: url(${right});
  background-repeat: no-repeat;
  width: 20px;
  height: 200px;
  padding: 0;
  background-color: transparent;
  background-position: center;
`;
const BuddyInfoContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 280px;
  gap: 50px;
`;
const BuddyInfo = styled.div`
  border-radius: 16px;
  border: 1px solid ${COLORS.line2};
  padding: 14px 16px;
  width: 280px;
  flex-shrink: 0;
`;
const InfoTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.font1};
`;
const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid ${COLORS.regular};
  margin: 10px 0;
`;
const BuddyName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  line-height: 1.5;
`;
const BuddyInfoText = styled.p`
  color: ${COLORS.font2};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;
const BuddyKakao = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${COLORS.line2};
  padding: 13px 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BuddyKakaoTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #000;
  line-height: 1.5;
`;
const BuddyKakaoText = styled.p`
  color: ${COLORS.font2};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
`;
const Notice = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.main};
  text-align: center;
  margin: 8px 0 63px;
`;
