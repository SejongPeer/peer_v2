import styled from "styled-components";
import { COLORS } from "../../../theme";

interface EditInformProps {
  disabledProps?: boolean;
  title: string;
  cont: string;
}

export const EditInform: React.FC<EditInformProps> = ({
  disabledProps,
  title,
  cont,
}) => {
  return (
    <InformBox disabledProps={disabledProps}>
      <Title>{title}</Title>
      <Content disabled={disabledProps} placeholder={cont} />
    </InformBox>
  );
};

const InformBox = styled.div<{ disabledProps?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLORS.regular};
  border-radius: 35px;
  padding: 0 20px;
  margin-bottom: 8px;
  font-size: 15px;
  height: 48px;
  background-color: ${(props) =>
    props.disabledProps ? `${COLORS.light}` : `${COLORS.white}`};

  color: ${(props) =>
    props.disabledProps ? `${COLORS.font4}` : `${COLORS.font1}`};
`;

const Title = styled.span`
  font-weight: 600;
`;

const Content = styled.input<{ disabled?: boolean }>`
  border: none;
  text-align: right;
  width: 30%;
`;
