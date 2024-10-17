import styled from "styled-components";
import notice from "../assets/images/notice_black.svg";
import { COLORS } from "../theme";

interface NoticeTextType {
  text: string;
}

export const NoticeBox = ({text}:NoticeTextType) => {
  return (
    <NoticeContainer>
      <img src={notice} alt="경고 아이콘"/>
      <NoticeText>{text}</NoticeText>
    </NoticeContainer>
  )
};

const NoticeContainer = styled.div`
  margin: 0 8px 16px 8px;
  padding: 10px 16px;
  display: flex;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid ${COLORS.regular};
`;
const NoticeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: ${COLORS.font1};
`;