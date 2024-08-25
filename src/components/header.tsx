import styled from "styled-components";
import { COLORS } from "../theme";

import logo from "../assets/images/peerLogo.png";

export const Header = () => {
  return (
    <Container>
      <Container2>
        <Logo src={logo}></Logo>
        <Login>로그인</Login>
      </Container2>
    </Container>
  );
};

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
`;
