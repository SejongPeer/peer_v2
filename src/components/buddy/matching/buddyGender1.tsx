import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Zustand
import { BuddyStore } from "../../../store/useBuddyStore";

// Components
import { BuddyHeader } from "../../header/buddyHeader";
import { BuddyButton } from "../buddyButton";
import { ConfirmButton } from "../../button/confirmButton";

// style
import { COLORS } from "../../../theme";
import {
  BuddyContainer,
  BuddyContainer2,
  InfoContainer,
  MatchingTitle,
  MatchingInfo,
  ButtonContainer,
} from "../../../styles/buddy-styles";

export const BuddyGender = () => {
  const { gender, setGender } = BuddyStore();
  const [isSame, setIsSame] = useState(false);
  const [isAny, setIsAny] = useState(false);

  // 값 유지
  useEffect(() => {
    if (gender === "SAME") {
      setIsSame(true);
    } else if (gender === "NO_MATTER") {
      setIsAny(true);
    }
  }, [gender]);

  // 동성 선택
  const ClickSameHandler = () => {
    setIsSame(!isSame);
    setGender("SAME");
    if (isAny) {
      setIsAny(false);
    }
  };
  // 상관없음 선택
  const ClickAnyHandler = () => {
    setIsAny(!isAny);
    setGender("NO_MATTER");
    if (isSame) {
      setIsSame(false);
    }
  };
  console.log("성별: ", gender);

  // 다음 단계
  const navigate = useNavigate();
  const NextStepHandler = () => {
    navigate("/buddy?step=2");
  };

  return (
    <BuddyContainer>
      <BuddyHeader />
      <BuddyContainer2>
        <InfoContainer>
          <MatchingTitle>버디 성별 선택</MatchingTitle>
          <MatchingInfo>이성과의 매칭이 부담스러우신 분들은</MatchingInfo>
          <MatchingInfo>'동성' 옵션을 선택해 주세요!</MatchingInfo>
        </InfoContainer>

        <ButtonContainer>
          <BuddyButton
            text={"동성"}
            ischecked={isSame}
            onClick={ClickSameHandler}
          />
          <BuddyButton
            text={"상관없음(이성 포함)"}
            ischecked={isAny}
            onClick={ClickAnyHandler}
          />
        </ButtonContainer>

        <ConfirmButton
          text={"다음"}
          backgroundcolor={gender ? `${COLORS.main}` : `${COLORS.disabled}`}
          onClick={gender ? NextStepHandler : () => {}}
        />
      </BuddyContainer2>
    </BuddyContainer>
  );
};
