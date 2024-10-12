import styled from "styled-components";

import { Header } from "../components/header";
import { EditInform } from "../components/mypage/editInform/edit-inform";
import { COLORS } from "../theme";

export const MyPageEdit = () => {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <Section>
          <Title>
            정보 수정<Notice>*각 정보 클릭 시, 수정 가능</Notice>
          </Title>
          <EditInform title="닉네임" cont="세종냥이" />
          <EditInform title="아이디" cont="jesse823" disabledProps={true} />
          <EditInform title="카카오톡 아이디" cont="sejongsejong" />
          <EditInform title="전화번호" cont="01012345678" />
        </Section>
        <Section>
          <Title>정보 수정</Title>
          <Label>현재 비밀번호 입력</Label>
          <PWInput
            placeholder="비밀번호 입력"
            style={{ marginBottom: "16px" }}
          />
          <Label>
            새 비밀번호 입력<span>(10-16자의 영문,숫자)</span>
          </Label>
          <PWInput placeholder="비밀번호 입력" />
          <PWInput placeholder="비밀번호 입력" />
        </Section>
        <Section>
          <Title>
            내 학과 <Notice>*학과 정보는 새로운 학기에 수정 가능합니다.</Notice>
          </Title>
          <Cont>소프트웨어학과 • 3학년</Cont>
        </Section>
        <EditBtn>수정하기</EditBtn>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.sub2};
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const Section = styled.section`
  width: 100%;
  padding: 20px 16px;
  background-color: white;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.font1};
  margin-bottom: 12px;
`;
const Notice = styled.span`
  color: ${COLORS.sub1};
  font-size: 14px;
  margin-left: 4px;
  font-weight: 500;
`;
const Label = styled.div`
  color: ${COLORS.font1};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  span {
    color: ${COLORS.font2};
  }
`;
const PWInput = styled.input`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLORS.regular};
  border-radius: 35px;
  padding: 0 20px;
  font-size: 15px;
  color: ${COLORS.font1};
  margin-bottom: 8px;
`;
const Cont = styled.div`
  color: ${COLORS.font2};
  font-size: 16px;
`;
const EditBtn = styled.button`
  width: 90%;
  height: 52px;
  background-color: ${COLORS.main};
  color: ${COLORS.white};
  font-size: 16px;
  border-radius: 28px;
  margin: 60px 16px 20px 16px;
`;
