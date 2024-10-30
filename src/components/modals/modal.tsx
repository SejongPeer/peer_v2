import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { COLORS } from '../../theme';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.3);
  z-index: 999;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.white};
  padding: 16px;
  z-index: 1000;
  border-radius: 32px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Modal = ({ children, onClose }: ModalProps) => {
  const modal = document.getElementById('modal');
  
  if (!modal) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose} />
      <ModalContent>{children}</ModalContent>
    </>,
    modal
  );
};
