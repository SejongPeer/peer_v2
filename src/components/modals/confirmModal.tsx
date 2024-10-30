import styled from "styled-components";
import { Modal } from "./modal";
import { COLORS } from "../../theme";

interface ConfirmModalElements {
  text: string;
  subText?: string;
  onClick: () => void;
  onClose: () => void;
}

const ModalContainer = styled.div`
  min-width: 279px;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

const ModalTitle = styled.h3`
  color: ${COLORS.font1};
  font-size: 18px;
  font-weight: 600;
  margin-top: 16px;
  line-height: 1.4;
`;
const ModalSubTitle = styled.p`
  color: ${COLORS.font2};
  font-size: 15px;
  font-weight: 400;
  margin: 4px 0 20px;
  line-height: 1.4;
  padding: 0 22px;
  text-align: center;
`;

const ControllerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
const CancelBtn = styled.button`
  padding: 10px 36px;
  background-color: ${COLORS.sub4};
  color: ${COLORS.main};
  border-radius: 50px;
`;
const ConfirmBtn = styled.button`
  padding: 10px 36px;
  background-color: ${COLORS.main};
  color: ${COLORS.white};
  border-radius: 50px;
`;

export const ConfirmModal = ({ text, subText, onClick, onClose }: ConfirmModalElements) => {
  return <Modal onClose={onClose}>
    <ModalContainer>
      <ModalTitle>{text}</ModalTitle>
      <ModalSubTitle>{subText}</ModalSubTitle>
      <ControllerContainer>
        <CancelBtn onClick={onClose}>취소하기</CancelBtn>
        <ConfirmBtn onClick={onClick}>거절하기</ConfirmBtn>
      </ControllerContainer>
    </ModalContainer>
  </Modal>;
};
