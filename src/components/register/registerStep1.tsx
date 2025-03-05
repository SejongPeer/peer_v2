import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";
import filledCheck from "../../assets/images/filledCheck.png";
import unfilledCheck from "../../assets/images/unfilledCheck.png";
import { useNavigate } from "react-router-dom";
import {
  Body1M,
  Body1Sb,
  buttonStyle,
  Head2,
} from "../../styles/global-styles";

export const RegisterStep1 = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isTermChecked, setIsTermChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const navigate = useNavigate();

  // 전체 체크 상태를 관리하는 useEffect 추가
  useEffect(() => {
    if (isTermChecked && isPrivacyChecked) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [isTermChecked, isPrivacyChecked]);

  const handleAllCheck = () => {
    const newState = !isAllChecked;
    setIsAllChecked(newState);
    setIsTermChecked(newState);
    setIsPrivacyChecked(newState);
  };

  const handleTermCheck = () => {
    setIsTermChecked(!isTermChecked);
  };

  const handlePrivacyCheck = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };

  const handleNextClick = () => {
    if (isTermChecked && isPrivacyChecked) {
      navigate("/register?step=3-1");
    }
  };

  const isNextButtonEnabled = isTermChecked && isPrivacyChecked;

  return (
    <Container>
      <TermsContainer>
        <TermsText>이용 약관</TermsText>
        <MainAgreement>
          <AgreementText>전체 약관 동의</AgreementText>
          <Checkbox
            onClick={handleAllCheck}
            src={isAllChecked ? filledCheck : unfilledCheck}
            alt="All Terms Checkbox"
          />
        </MainAgreement>
        <SubAgreement>
          <SubItem>
            <SubItemContainer>
              <SubText style={{ color: "#ff4b4b" }}>[필수] </SubText>
              <SubText>이용약관 동의</SubText>
            </SubItemContainer>
            <Checkbox
              onClick={handleTermCheck}
              src={isTermChecked ? filledCheck : unfilledCheck}
              alt="Terms Checkbox"
            />
          </SubItem>
          <SubItem>
            <SubItemContainer>
              <SubText style={{ color: "#ff4b4b" }}>[필수] </SubText>
              <SubText>개인정보 수집 및 이용약관</SubText>
            </SubItemContainer>
            <Checkbox
              onClick={handlePrivacyCheck}
              src={isPrivacyChecked ? filledCheck : unfilledCheck}
              alt="Privacy Checkbox"
            />
          </SubItem>
        </SubAgreement>
        <NextButton
          $enabled={isNextButtonEnabled}
          onClick={handleNextClick} // 버튼 클릭 시 handleNextClick 호출
        >
          다음
        </NextButton>
      </TermsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TermsContainer = styled.div`
  padding: 24px;
`;

const TermsText = styled.p`
  ${Head2}
  color: ${COLORS.font1};
  margin-bottom: 16px;
`;

const MainAgreement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
  height: 52px;
  background-color: white;
  border-radius: 28px;
  padding: 14px 12px 14px 20px;
`;

const SubAgreement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

const SubItem = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AgreementText = styled.p`
  ${Body1M}
  color: ${COLORS.font1};
`;

const SubText = styled.p`
  ${Body1M}
  color: ${COLORS.font1};
`;

const Checkbox = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const NextButton = styled.button<{ $enabled: boolean }>`
  ${buttonStyle}
  background-color: ${({ $enabled }) =>
    $enabled ? COLORS.main : COLORS.line1}; // 조건에 따라 배경색 변경
  cursor: ${({ $enabled }) => ($enabled ? "pointer" : "not-allowed")};
  margin-top: 20px;
  ${Body1Sb}
`;

export default RegisterStep1;
