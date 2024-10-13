import styled from "styled-components";
import { COLORS } from "../../theme";

// 컴포넌트
import { ConfirmButton } from "../button/confirmButton";
import { BuddyHeader } from "../header/buddyHeader";
import { useNavigate } from "react-router-dom";

// styled-components
import { BuddyContainer, BuddyContainer2, ApplicationContainer } from "../../styles/buddy-styles";

// 이미지
import startImg from '../../assets/images/buddyStart.svg';
import nugul from '../../assets/images/nugul.svg';
import { useEffect } from "react";

export const BuddyStart = () => {
    const navigate = useNavigate();

    // localStorage에서 토큰 가져오기
    // const token = localStorage.getItem("accessToken");

    // 조건 선택 페이지 이동
    const navigateHandler = () => {
        navigate('/buddy?step=1');
        // 로그인 하면 이동할 수 있도록 했는데 테스트 끝나면 주석해제 예정입니다~
        // if(token) {
        //     navigate('/buddy?step=1');
        // } else {
        //     alert('로그인이 필요한 서비스 입니다!');
        //     navigate('/login');
        // }
    };

    useEffect(() => {
      
    }, [])

    return (
        <BuddyContainer>
            <BuddyHeader />
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
                    onClick={navigateHandler}
                />
            </ApplicationContainer>
            </BuddyContainer2>
        </BuddyContainer>
    );
}

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