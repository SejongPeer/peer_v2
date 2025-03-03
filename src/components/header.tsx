import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../theme";
import logo from "../assets/images/peerLogo.png";
import userIcon from "../assets/images/user.png";
import { useUserAuth } from "../services/queries/user.queries";

export const Header = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  // React Query 캐시에서 로그인 정보 및 토큰 가져오기
  const { data: authData } = useUserAuth();
  const token = authData?.accessToken; // 캐시된 토큰
  console.log(token);

  const handleLoginClick = () => {
    if (token) {
      navigate("/my-page"); // 유저 아이콘 클릭 시 /my-page로 이동
    } else {
      navigate("/login"); // 로그인 텍스트 클릭 시 /login-page로 이동
    }
  };

  return (
    <Container>
      <Container2>
        <Logo src={logo} alt="Logo" />
        {token ? (
          <UserIcon src={userIcon} alt="User Icon" onClick={handleLoginClick} />
        ) : (
          <Login onClick={handleLoginClick}>로그인</Login>
        )}
      </Container2>
    </Container>
  );
};

// 스타일 컴포넌트는 동일
const Container = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${COLORS.main};
  display: flex;
  justify-content: center;
`;

const Container2 = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 86px;
  height: 20px;
`;

const Login = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
