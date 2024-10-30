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

export const BuddyGrade = () => {
  const { grade, setGrade } = BuddyStore();
  const [is1st, setIs1st] = useState(false);
  const [is2nd, setIs2nd] = useState(false);
  const [is3rd, setIs3rd] = useState(false);
  const [is4th, setIs4th] = useState(false);

  useEffect(() => {
    if (grade.includes("GRADE_1")) {
      setIs1st(true);
    }
    if (grade.includes("GRADE_2")) {
      setIs2nd(true);
    }
    if (grade.includes("GRADE_3")) {
      setIs3rd(true);
    }
    if (grade.includes("GRADE_4")) {
      setIs4th(true);
    }
  }, [grade]);

  // 범위 선택 핸들러
  const firstHandler = () => {
    setIs1st(!is1st);
    if (!grade.includes("GRADE_1")) {
      const typeArr: string[] = [...grade, "GRADE_1"];
      setGrade(typeArr);
    }
  };
  const secondHandler = () => {
    setIs2nd(!is2nd);
    if (!grade.includes("GRADE_2")) {
      const typeArr: string[] = [...grade, "GRADE_2"];
      setGrade(typeArr);
    }
  };
  const thirdHandler = () => {
    setIs3rd(!is3rd);
    if (!grade.includes("GRADE_3")) {
      const typeArr: string[] = [...grade, "GRADE_3"];
      setGrade(typeArr);
    }
  };
  const fourthHandler = () => {
    setIs4th(!is4th);
    if (!grade.includes("GRADE_4")) {
      const typeArr: string[] = [...grade, "GRADE_4"];
      setGrade(typeArr);
    }
  };
  console.log(grade);

  // 다음 단계
  const navigate = useNavigate();
  const NextStepHandler = () => {
    navigate("/buddy?step=5");
  };

  return (
    <BuddyContainer>
      <BuddyHeader />

      <BuddyContainer2>
        <InfoContainer>
          <MatchingTitle>버디 학년 선택(복수선택 가능)</MatchingTitle>
          <MatchingInfo>선호하는 버디의 학년을 선택해주세요!</MatchingInfo>
          <MatchingInfo>
            초과학기, 졸업유예 등은 4학년에 포함됩니다.
          </MatchingInfo>
        </InfoContainer>

        <ButtonContainer>
          <BuddyButton
            text={"1학년"}
            ischecked={is1st}
            onClick={firstHandler}
          />
          <BuddyButton
            text={"2학년"}
            ischecked={is2nd}
            onClick={secondHandler}
          />
          <BuddyButton
            text={"3학년"}
            ischecked={is3rd}
            onClick={thirdHandler}
          />
          <BuddyButton
            text={"4학년"}
            ischecked={is4th}
            onClick={fourthHandler}
          />
        </ButtonContainer>

        <ConfirmButton
          text={"다음"}
          backgroundcolor={
            is1st || is2nd || is3rd || is4th
              ? `${COLORS.main}`
              : `${COLORS.disabled}`
          }
          onClick={
            is1st || is2nd || is3rd || is4th ? NextStepHandler : () => {}
          }
        />
      </BuddyContainer2>
    </BuddyContainer>
  );
};
