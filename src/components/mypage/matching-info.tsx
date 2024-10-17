import styled from "styled-components";
import { COLORS } from "../../theme";
//타입
import { MatchingInfoProps } from "../../types/mypage/mypage";

export const MatchingInfo: React.FC<MatchingInfoProps> = ({
  title,
  explain,
  img,
}) => {
  return (
    <Box>
      <ContBox>
        <Title>{title}</Title>
        <Explain>{explain}</Explain>
      </ContBox>
      {img && <Img src={img} alt={title} />}
    </Box>
  );
};
const Box = styled.div`
  width: 100%;
  height: 76px;
  border-radius: 16px;
  border: 1px solid ${COLORS.regular};
  padding: 14px 16px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ContBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Title = styled.h2`
  color: ${COLORS.main};
  font-size: 18px;
`;
const Explain = styled.p`
  margin: 0;
  padding: 0;
  color: ${COLORS.font1};
  font-size: 14px;
`;

const Img = styled.img`
  width: 64px;
  height: 58px;
`;
