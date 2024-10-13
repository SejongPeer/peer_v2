import { useNavigate } from "react-router-dom";

import { BuddyStore } from "../../../store/useBuddyStore";

import { COLORS } from "../../../theme";
import { 
  BuddyContainer,
  BuddyContainer2,
  InfoContainer,
  MatchingTitle,
  MatchingInfo,
  ButtonContainer,
} from "../../../styles/buddy-styles";

import { BuddyHeader } from "../../header/buddyHeader";
import { ConfirmButton } from "../../button/confirmButton";
import styled from "styled-components";
export const BuddyFinal = () => {
  const { gender, major, subMajor, type, grade } = BuddyStore();

  // 해당 값을 누르면 그 페이지로 이동
  const navigate = useNavigate();
  const navigateHandler = ( step:string ): void => {
    navigate(`/buddy?step=${step}`);
  }

  console.log(gender, major, subMajor, type, grade);

  // 텍스트 변환
  // 버디 범위 텍스트 변환
  const majorText: { [key: string]: string } = {
    "SAME_COLLEGE": "같은 단과대 버디",
    "SAME_DEPARTMENT": "같은 학과 버디",
    "NO_MATTER": "상관없음"
  }
  // 버디 타입 텍스트 변환
  const getTypeText: { [key: string]: string } = {
    "MATE": "동기",
    "SENIOR": "선배",
    "JUNIOR": "후배"
  }
  const TypeText = type
  .filter((t) => getTypeText[t]) // TypeText에 존재하는 값만 필터링
  .map((t) => getTypeText[t])  // 해당 값을 매핑
  .join(", ");                 // 문자열로 나열
  
  // 버디 학년 텍스트 변환
  const getGradeText: { [key: string]: string } = {
    "GRADE_1": "1학년",
    "GRADE_2": "2학년",
    "GRADE_3": "3학년",
    "GRADE_4": "4학년(이상)"
  }
  const gradeText = grade
  .filter((g) => getGradeText[g]) // TypeText에 존재하는 값만 필터링
  .map((g) => getGradeText[g])    // 해당 값을 매핑
  .join(", ");                    // 문자열로 나열

  return (
    <BuddyContainer>
      <BuddyHeader />
      <BuddyContainer2>
        <InfoContainer>
          <MatchingTitle>입력 정보</MatchingTitle>
          <MatchingInfo>마지막으로 입력하신 정보를 확인해주세요!</MatchingInfo>
        </InfoContainer>

        <ButtonContainer>
          <BuddyConditionContainer>
            <BuddyConditionTitle>버디 성별</BuddyConditionTitle>
            <BuddyConditionInput 
              onClick={() => navigateHandler('1')}>
              {gender === "SAME" ? "동성" : "상관없음"}
            </BuddyConditionInput>
          </BuddyConditionContainer>

          <BuddyConditionContainer2>
            <BuddyConditionContainer>
              <BuddyConditionTitle>버디 범위</BuddyConditionTitle>
              <BuddyConditionInput
                onClick={() => navigateHandler('2')}>
                {majorText[major] || "오류"}
                </BuddyConditionInput>
            </BuddyConditionContainer>
            <BuddyConditionContainer>
              <BuddyConditionTitle>버디 관계</BuddyConditionTitle>
              <BuddyConditionInput onClick={() => navigateHandler('3')}>
                {TypeText}
              </BuddyConditionInput>
          </BuddyConditionContainer>
          </BuddyConditionContainer2>

          <BuddyConditionContainer>
            <BuddyConditionTitle>버디 학년</BuddyConditionTitle>
            <BuddyConditionInput onClick={() => navigateHandler('4')}>
              {gradeText}
            </BuddyConditionInput>
          </BuddyConditionContainer>

          <BuddyConditionContainer2>
            <BuddyConditionContainer>
              <BuddyConditionTitle>카카오톡 아이디</BuddyConditionTitle>
              <BuddyConditionInput>aaaaaaaa</BuddyConditionInput>
            </BuddyConditionContainer>
            <BuddyConditionContainer>
              <BuddyConditionTitle>전화번호</BuddyConditionTitle>
              <BuddyConditionInput>010-1111-2222</BuddyConditionInput>
            </BuddyConditionContainer>
          </BuddyConditionContainer2>
        </ButtonContainer>

        <ConfirmButton 
          text={'다음'}
          backgroundcolor={`${COLORS.main}`}
        />
      </BuddyContainer2>
    </BuddyContainer>
  );
}

const BuddyConditionContainer = styled.div`
  width: 100%;
`;
const BuddyConditionTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.font1};
`;
const BuddyConditionInput = styled.button`
  min-width: 156px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${COLORS.line1};
  background-color: #FFF;
  padding: 13px 16px;
  margin-top: 8px;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
`;

const BuddyConditionContainer2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;