import styled from "styled-components";

import { ConfirmButton } from "../button/confirmButton";
import { SubHeader } from "../subHeader";
import { COLORS } from "../../theme";
import startImg from '../../assets/images/buddyStart.svg';
import nugul from '../../assets/images/nugul.svg';

export const BuddyStart = () => {
    return (
        <BuddyContainer>
            <SubHeader backgroundColor="#FAF5F5" text={""} />
            <BuddyContainer2>
            <StartImg src={startImg} />

            <BuddyStartTextContainer>
                <BuddyStartTitle>세종버디란?</BuddyStartTitle>
                <BuddyStartText1>세종버디(Buddy)는</BuddyStartText1>
                <BuddyStartText1>
                    <BuddyStartTextB>맞춤형 캠퍼스 짝꿍</BuddyStartTextB>을 찾는 서비스 입니다.
                </BuddyStartText1>
                <BuddyStartText2>한 명의 학우와 한 학기 동안 버디로 매칭 되며,</BuddyStartText2>
                <BuddyStartText2>다음 학기에 새로운 버디를 찾을 수 있습니다.</BuddyStartText2>
            </BuddyStartTextContainer>

            <ApplicationContainer>
                <ApplicationNum>
                    <ApplicationImg src={nugul}/>
                    <ApplicationText>216명의 학생들이 버디를 찾고 있어요!</ApplicationText>
                </ApplicationNum>
                <ConfirmButton 
                    width='100%'
                    height='52px'
                    text='세종버디 신청하기' 
                    textcolor= '#FFF'
                    backgroundcolor= {COLORS.main}
                    borderradius='50px'
                    border='none'
                />
            </ApplicationContainer>
            </BuddyContainer2>
        </BuddyContainer>
    );
}

const BuddyContainer = styled.div`
    max-width: 674px;
    height: 100vh;
    margin: auto;
`;
const BuddyContainer2 = styled.div`
    width: 100%;
    height: 94%;
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

const StartImg = styled.img`
    width: 100%;
    height: 132px;
    text-align: center;
    margin: 20% 0 17%;
`;

const BuddyStartTextContainer = styled.div`
    padding: 0 6px;
    @media (min-width: 430px) {
        max-width: 398px;
        margin: 0 auto;
    }
`;
const BuddyStartTitle = styled.h3`
    color: #111;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 12px;
`;
const BuddyStartText1 = styled.p`
    color: ${COLORS.font1};
    font-weight: 700;
    line-height: 1.5;
`;
const BuddyStartTextB = styled.b`
    color: ${COLORS.main};
`;
const BuddyStartText2 = styled.p`
    color: #555;
    line-height: 1.5;
`;

const ApplicationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: auto;
`;
const ApplicationNum = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const ApplicationImg = styled.img`
    object-fit:cover;
    border-raidus: 12px;
`;
const ApplicationText = styled.p`
    color: #111;
    font-weight: 700;
`;