import { useNavigate, useSearchParams } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "../../theme";

import back from "../../assets/images/backArrow_Black.png";
import notice from "../../assets/images/notice.svg";

export const BuddyHeader = () => {
    const [searchParams] = useSearchParams();
    // 페이지 step 가져와서 숫자로 변환
    const step = searchParams.get('step') ? parseInt(searchParams.get('step')!, 10) : 0;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // 뒤로 가기
      };

    return (
        <Container>
            <BackButton onClick={handleGoBack}/>
            {/* start페이지에는 이용방법, 아니면 단계 표시 */}
            {step === 0 ? 
                <NoticeButton>이용방법 확인</NoticeButton>
            :
                <BuddyStep>{step}/5</BuddyStep>
            }
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 48px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
`;

const BackButton = styled.button`
    border: none;
    height: 100%;
    background-image: url(${back});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    padding: 0;
`;

const NoticeButton = styled.button`
    height: 100%;
    border: 1px solid #E5E5E5;
    background-color: ${COLORS.back2};
    border-radius: 24px;
    padding: 8px 34px 8px 12px;
    background-image: url(${notice});
    background-repeat: no-repeat;
    background-position: right 12px center;
    color: ${COLORS.font2};
    font-size: 14px;
    font-weight: 600;
    line-height: 0.7;
`;

const BuddyStep = styled.p`
    font-weight: 600;
    color: ${COLORS.font2};
    line-height: 1.5;
`;