import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Zustand
import { BuddyStore } from "../../../store/useBuddyStore";

// Components
import { BuddyHeader } from "../../header/buddyHeader";
import { BuddyButton } from "../buddyButton";
import { ConfirmButton } from "../../button/confirmButton";

// style
import styled from "styled-components";
import { COLORS } from "../../../theme";
import {
  BuddyContainer,
  BuddyContainer2,
  InfoContainer,
  MatchingTitle,
  MatchingInfo,
  ButtonContainer,
  ApplicationContainer,
} from "../../../styles/buddy-styles";

export const BuddyMajor = () => {
  const { major, setMajor, subMajor, setSubMajor } = BuddyStore();
  const [isMajor, setIsMajor] = useState(false);
  const [isCollege, setIsCollege] = useState(false);
  const [isAll, setIsAll] = useState(false);

  // 값 유지
  useEffect(() => {
    if (major === "SAME_COLLEGE") {
      setIsCollege(true);
    } else if (major === "SAME_DEPARTMENT") {
      setIsMajor(true);
    } else if (major === "NO_MATTER") {
      setIsAll(true);
    }
  }, [major]);

  // 범위 선택 핸들러
  const majorHandler = () => {
    setIsMajor(!isMajor);
    setMajor("SAME_DEPARTMENT");
    if (isCollege || isAll) {
      setIsCollege(false);
      setIsAll(false);
    }
  };
  const collegeHandler = () => {
    setIsCollege(!isCollege);
    setMajor("SAME_COLLEGE");
    if (isMajor || isAll) {
      setIsMajor(false);
      setIsAll(false);
    }
  };
  const allHandler = () => {
    setIsAll(!isAll);
    setMajor("NO_MATTER");
    if (isMajor || isCollege) {
      setIsMajor(false);
      setIsCollege(false);
    }
  };

  const subCheckedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubMajor(e.target.checked);
  };
  console.log("학과: ", major);
  console.log("복수 전공: ", subMajor);

  // 다음 단계
  const navigate = useNavigate();
  const NextStepHandler = () => {
    navigate("/buddy?step=3");
  };

  return (
    <BuddyContainer>
      <BuddyHeader />

      <BuddyContainer2>
        <InfoContainer>
          <MatchingTitle>버디 범위 선택</MatchingTitle>
          <MatchingInfo>우리 학과부터 학교 전체까지</MatchingInfo>
          <MatchingInfo>찾고 싶은 버디의 범위를 선택해 주세요!</MatchingInfo>
        </InfoContainer>

        <ButtonContainer>
          <BuddyButton
            text={"우리 학과 버디"}
            ischecked={isMajor}
            onClick={majorHandler}
          />
          <BuddyButton
            text={"우리 단과대 버디"}
            ischecked={isCollege}
            onClick={collegeHandler}
          />
          <BuddyButton
            text={"학교 전체"}
            ischecked={isAll}
            onClick={allHandler}
          />
        </ButtonContainer>

        <SecondMajorContainer>
          <SecondMajorText>*복수/부전공 학과 기준으로 찾기</SecondMajorText>

          <Toggle
            type="checkbox"
            id="toggle"
            checked={subMajor}
            onChange={subCheckedHandler}
          />
          <ToggleLabel htmlFor="toggle" />
        </SecondMajorContainer>

        <ApplicationContainer>
          <TipText>TIP. 신규 학과는 단과대 단위로 선택해주세요!</TipText>
          <ConfirmButton
            text={"다음"}
            backgroundcolor={major ? `${COLORS.main}` : `${COLORS.disabled}`}
            onClick={major ? NextStepHandler : () => {}}
          />
        </ApplicationContainer>
      </BuddyContainer2>
    </BuddyContainer>
  );
};

const TipText = styled.p`
  color: ${COLORS.font1};
  font-weight: 400;
  font-size: 14px;
`;

const SecondMajorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
`;
const SecondMajorText = styled.p`
  color: ${COLORS.font3};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
`;

const Toggle = styled.input`
  display: none;
`;
const ToggleLabel = styled.label`
  display: block;
  width: 48px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid ${COLORS.line1};
  position: relative;
  cursor: pointer;
  background-color: #fff;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${COLORS.line1};
    position: absolute;
    top: 3.5px;
    left: 4px;
    transition: transform 0.3s;
  }

  ${Toggle}:checked + &::after {
    background-color: ${COLORS.main};
    transform: translateX(20px);
  }
`;
