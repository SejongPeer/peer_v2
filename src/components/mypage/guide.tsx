import styled from "styled-components";
import { COLORS } from "../../theme";
interface GuideInfo {
  title: string;
  addCon: string;
}
export const Guide: React.FC<GuideInfo> = ({ title, addCon }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <AddCon>{addCon}</AddCon>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${COLORS.regular};
  width: 30%;
  height: 72px;
  border-radius: 16px;
  padding: 14px 16px;
`;
const Title = styled.span`
  color: ${COLORS.font1};
  font-size: 16px;
  font-weight: 600;
`;
const AddCon = styled.span`
  color: ${COLORS.font1};
  font-size: 14px;
`;
