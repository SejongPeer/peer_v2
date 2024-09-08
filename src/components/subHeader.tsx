import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../theme";

import backArrow from "../assets/images/backArrow.png";
import user from "../assets/images/user.png";

interface textProps {
  text: string;
}

export const SubHeader = ({ text }: textProps) => {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (token) {
      navigate("/my-page"); // 유저 아이콘 클릭 시 /my-page로 이동
    } else {
      navigate("/login"); // 로그인 텍스트 클릭 시 /login-page로 이동
    }
  };

  const handleGoBack = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <Container>
      <Container3>
        <Container2>
          <GoBack src={backArrow} onClick={handleGoBack} alt="Go Back" />
          <Text>{text}</Text>
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

const Container = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${COLORS.main};
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

const Text = styled.div`
  font-family: "jalnan";
  font-size: 18px;
  color: white;
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
