import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../theme";

import backArrow from "../assets/images/backArrow.png";
import user from "../assets/images/user.png";

interface SubHeaderProps {
  text: string;
  backgroundColor?: string; // 선택적 배경색
  textColor?: string; // 선택적 텍스트 색상
  showGoBack?: boolean; // GoBack 버튼 표시 여부
}

export const SubHeader = ({
  text,
  backgroundColor = COLORS.main, // 기본값은 main 색상
  textColor = "white", // 기본값은 흰색
  showGoBack = true, // 기본값으로 GoBack 버튼 표시
}: SubHeaderProps) => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (token) {
      navigate("/my-page"); // 로그인된 경우 /my-page로 이동
    } else {
      navigate("/login"); // 로그인되지 않은 경우 /login으로 이동
    }
  };

  const handleGoBack = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <Container backgroundColor={backgroundColor}>
      <Container3>
        <Container2>
          {showGoBack && (
            <GoBack src={backArrow} onClick={handleGoBack} alt="Go Back" />
          )}
          <Text textColor={textColor}>{text}</Text>
        </Container2>
        {token ? (
          <Login src={user} onClick={handleUserClick} alt="User Icon" />
        ) : (
          <LoginText onClick={handleUserClick}>로그인</LoginText>
        )}
      </Container3>
    </Container>
  );
};

const Container = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Container3 = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GoBack = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Text = styled.div<{ textColor: string }>`
  font-family: "jalnan";
  font-size: 18px;
  color: ${({ textColor }) => textColor};
`;

const Login = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const LoginText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;
