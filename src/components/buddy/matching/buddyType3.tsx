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

export const BuddyType = () => {
    const [isSenior, setIsSenior] = useState(false);
    const [isPeer, setIsPeer] = useState(false);
    const [isJunior, setIsJunior] = useState(false);

    // 범위 선택 핸들러
    const seniorHandler = () => {
        setIsSenior(!isSenior);
    }
    const peerHandler = () => {
        setIsPeer(!isPeer);
    }
    const juniorHandler = () => {
        setIsJunior(!isJunior);
    }

    // 다음 단계
    const navigate = useNavigate();
    const NextStepHandler = () => {
        navigate("/buddy?step=4");
    }

    return (
        <BuddyContainer>
            <BuddyHeader/>

            <BuddyContainer2>
                <InfoContainer>
                    <MatchingTitle>버디 관계 선택(복수선택 가능)</MatchingTitle>
                    <MatchingInfo>입학년도(학번 앞 두자리)를 기준으로</MatchingInfo>
                    <MatchingInfo>선배·후배·동기 중 원하는 조건을 선택하세요!</MatchingInfo>
                </InfoContainer>

                <ButtonContainer>
                    <BuddyButton 
                        text={'선배'}
                        ischecked={isSenior}
                        onClick={seniorHandler}
                    />
                    <BuddyButton 
                        text={'후배'}
                        ischecked={isPeer}
                        onClick={peerHandler}
                    />
                    <BuddyButton 
                        text={'동기'}
                        ischecked={isJunior}
                        onClick={juniorHandler}
                    />
                </ButtonContainer>

                    <ConfirmButton 
                        text={'다음'}
                        backgroundcolor={(isSenior || isPeer || isJunior) ? `${COLORS.main}` : `${COLORS.disabled}`}
                        onClick={(isSenior || isPeer || isJunior) ? NextStepHandler : () => {}}
                    />

            </BuddyContainer2>
        </BuddyContainer>
    );
}