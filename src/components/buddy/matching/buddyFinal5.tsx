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
import { ConfirmButton } from "../../button/confirmButton";
import styled from "styled-components";
export const BuddyFinal = () => {
    const navigate = useNavigate();
    const navigateHandler = ( step:string ): void => {
        navigate(`/buddy?step=${step}`);
    }

    return (
        <BuddyContainer>
            <BuddyHeader />
            <BuddyContainer2>
                <InfoContainer>
                    <MatchingTitle>입력 정보</MatchingTitle>
                    <MatchingInfo>마지막으로 입력하신 정보를 확인해주세요!</MatchingInfo>
                </InfoContainer>

                <ButtonContainer>
                    <BuddyConditionContainer>
                        <BuddyConditionTitle>버디 성별</BuddyConditionTitle>
                        <BuddyConditionInput 
                            onClick={() => navigateHandler('1')}>
                            상관없음
                        </BuddyConditionInput>
                    </BuddyConditionContainer>

                    <BuddyConditionContainer2>
                        <BuddyConditionContainer>
                            <BuddyConditionTitle>버디 범위</BuddyConditionTitle>
                            <BuddyConditionInput
                                onClick={() => navigateHandler('2')}>
                                    우리 단과대 버디
                                </BuddyConditionInput>
                        </BuddyConditionContainer>
                        <BuddyConditionContainer>
                            <BuddyConditionTitle>버디 관계</BuddyConditionTitle>
                            <BuddyConditionInput onClick={() => navigateHandler('3')}>
                                선배, 후기, 동기
                            </BuddyConditionInput>
                        </BuddyConditionContainer>
                    </BuddyConditionContainer2>

                    <BuddyConditionContainer>
                        <BuddyConditionTitle>버디 학년</BuddyConditionTitle>
                        <BuddyConditionInput onClick={() => navigateHandler('4')}>
                            1학년, 2학년, 3학년, 4학년(이상)
                        </BuddyConditionInput>
                    </BuddyConditionContainer>

                    <BuddyConditionContainer2>
                        <BuddyConditionContainer>
                            <BuddyConditionTitle>카카오톡 아이디</BuddyConditionTitle>
                            <BuddyConditionInput>aaaaaaaa</BuddyConditionInput>
                        </BuddyConditionContainer>
                        <BuddyConditionContainer>
                            <BuddyConditionTitle>전화번호</BuddyConditionTitle>
                            <BuddyConditionInput>010-1111-2222</BuddyConditionInput>
                        </BuddyConditionContainer>
                    </BuddyConditionContainer2>
                </ButtonContainer>

                <ConfirmButton 
                    text={'다음'}
                    backgroundcolor={`${COLORS.main}`}
                />
            </BuddyContainer2>
        </BuddyContainer>
    );
}

const BuddyConditionContainer = styled.div`
    width: 100%;
`;
const BuddyConditionTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${COLORS.font1};
`;
const BuddyConditionInput = styled.button`
    min-width: 156px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${COLORS.line1};
    background-color: #FFF;
    padding: 13px 16px;
    margin-top: 8px;
    text-align: left;
    font-size: 15px;
    font-weight: 400;
`;

const BuddyConditionContainer2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`;