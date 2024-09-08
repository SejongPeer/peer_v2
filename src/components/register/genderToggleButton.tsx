import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../theme";

export const GenderToggleButton = () => {
  const [selectedGender, setSelectedGender] = useState<"MALE" | "FEMALE">(
    () => {
      // 컴포넌트가 처음 렌더링될 때 로컬스토리지에서 성별 값을 가져옴
      const savedGender = localStorage.getItem("gender");
      return (savedGender as "MALE" | "FEMALE") || "MALE";
    }
  );

  const handleGenderChange = (gender: "MALE" | "FEMALE") => {
    setSelectedGender(gender);
    localStorage.setItem("gender", gender); // 로컬 스토리지에 선택된 성별 저장
  };

  return (
    <GenderContainer>
      <GenderButton
        isSelected={selectedGender === "MALE"}
        onClick={() => handleGenderChange("MALE")}
      >
        남성
      </GenderButton>
      <GenderButton
        isSelected={selectedGender === "FEMALE"}
        onClick={() => handleGenderChange("FEMALE")}
      >
        여성
      </GenderButton>
    </GenderContainer>
  );
};

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 35px;
  overflow: hidden;
  background-color: ${COLORS.white}; /* 테두리 배경색 */
  border: 1px solid ${COLORS.line2};
  width: 120px;
  height: 44px;
  margin-bottom: 12px;
`;

const GenderButton = styled.button<{ isSelected: boolean }>`
  padding: 6px 15px;
  border: none;
  background-color: ${({ isSelected }) => (isSelected ? COLORS.main : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : COLORS.font1)};
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border-radius: 35px;
  height: 36px;
`;

export default GenderToggleButton;
