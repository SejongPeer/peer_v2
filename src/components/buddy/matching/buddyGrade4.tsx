import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { COLORS } from "../../../theme";
import { 
    BuddyContainer,
    BuddyContainer2,
    InfoContainer,
    MatchingTitle,
    MatchingInfo,
    ButtonContainer,
} from "../../../styles/buddy-styles";

import { BuddyHeader } from "../../header/buddyHeader";
import { BuddyButton } from "../buddyButton";
import { ConfirmButton } from "../../button/confirmButton";

export const BuddyGrade = () => {
    const [is1st, setIs1st] = useState(false);
    const [is2nd, setIs2nd] = useState(false);
    const [is3rd, setIs3rd] = useState(false);
    const [is4th, setIs4th] = useState(false);

    // 범위 선택 핸들러
    const firstHandler = () => {
        setIs1st(!is1st);
    }
    const secondHandler = () => {
        setIs2nd(!is2nd);
    }
    const thirdHandler = () => {
        setIs3rd(!is3rd);
    }
    const fourthHandler = () => {
        setIs4th(!is4th);
    }

    // 다음 단계
    const navigate = useNavigate();
    const NextStepHandler = () => {
        navigate("/buddy?step=5");
    }

    return (
        <BuddyContainer>
            <BuddyHeader/>

            <BuddyContainer2>
                <InfoContainer>
                    <MatchingTitle>버디 학년 선택(복수선택 가능)</MatchingTitle>
                    <MatchingInfo>입학년도(학번 앞 두자리)를 기준으로</MatchingInfo>
                    <MatchingInfo>선배·후배·동기 중 원하는 조건을 선택하세요!</MatchingInfo>
                </InfoContainer>

                <ButtonContainer>
                    <BuddyButton 
                        text={'1학년'}
                        ischecked={is1st}
                        onClick={firstHandler}
                    />
                    <BuddyButton 
                        text={'2학년'}
                        ischecked={is2nd}
                        onClick={secondHandler}
                    />
                    <BuddyButton 
                        text={'3학년'}
                        ischecked={is3rd}
                        onClick={thirdHandler}
                    />
                    <BuddyButton 
                        text={'4학년'}
                        ischecked={is4th}
                        onClick={fourthHandler}
                    />
                </ButtonContainer>

                    <ConfirmButton 
                        text={'다음'}
                        backgroundcolor={(is1st || is2nd || is3rd || is4th) ? `${COLORS.main}` : `${COLORS.disabled}`}
                        onClick={(is1st || is2nd || is3rd || is4th) ? NextStepHandler : () => {}}
                    />

            </BuddyContainer2>
        </BuddyContainer>
    );
}