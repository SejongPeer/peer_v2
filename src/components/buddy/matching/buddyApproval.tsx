import { useNavigate } from "react-router-dom";

// Components
import { LoginHeader } from "../../loginHeader";
import { BuddyStatus } from "../buddyStatus";
import { NoticeBox } from "../../noticeBox";
import { ConfirmButton } from "../../button/confirmButton";

// style
import styled from "styled-components";
import { COLORS } from "../../../theme";
import { MatchingContainer, MatchingTitle, MatchingText } from "./buddyWaiting";

// Img
import BuddyApprovalImg from "../../../assets/images/buddyApproval.svg";
import { useEffect, useState } from "react";
import { ConfirmModal } from "../../modals/confirmModal";
//import { getBuddyInfoFirst } from "../../../services/apis/buddy.service";

export const BuddyApproval = () => {
  //const [buddyInfo, setBuddyInfo] = useState('');
  const navigate = useNavigate();
  const HandleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    // const info = getBuddyInfoFirst();
    // setBuddyInfo(info);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <MatchingContainer>
      {isModalOpen && (
        <ConfirmModal 
          text="매칭을 거절 하시겠습니까?" 
          subText="거절 시 1시간 버디이용 제한 패널티가 부여됩니다."
          onClick={() => {
            console.log("확인 버튼 클릭");
            closeModal(); // 모달 닫기
          }} 
          onClose={closeModal} // 백드롭 또는 취소 버튼 클릭 시 모달 닫기
        />
      )}
      <LoginHeader
        text={""}
        backgroundColor={COLORS.white}
        textColor={COLORS.font1}
        showGoBack={true}
      />

      <BuddyStatus step={2} />
      <MatchingTitle>버디를 찾았습니다</MatchingTitle>
      <MatchingText>24시간 내로 수락여부를 선택해주세요!</MatchingText>
      <MatchingImg src={BuddyApprovalImg} />
      <MatchingBuddyInfo>미디어커뮤니케이션 · 4학년</MatchingBuddyInfo>
      <NoticeBox
        text={"서로 수락하면 상대방에게 카카오톡ID가 추가로 전달됩니다."}
      />

      <ButtonContainer>
        <ConfirmButton
          width={"168px"}
          text={"거절하기"}
          backgroundcolor={`${COLORS.sub4}`}
          textcolor={`${COLORS.main}`}
          onClick={openModal}
        />
        <ConfirmButton
          width={"168px"}
          text={"수락하기"}
          backgroundcolor={`${COLORS.main}`}
          onClick={HandleGoHome}
        />
      </ButtonContainer>
    </MatchingContainer>
  );
};

const MatchingBuddyInfo = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.font1};
  margin-bottom: 21px;
`;
const MatchingImg = styled.img`
  margin: 16px 0 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  margin-top: auto;
`;
