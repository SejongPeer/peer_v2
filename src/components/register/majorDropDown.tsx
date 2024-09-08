import React, { useState } from "react";
import styled from "styled-components";
import EIE from "./Major";

const MajorDropDown = () => {
  const [selectedCollege, setSelectedCollege] = useState<
    keyof typeof EIE | null
  >(() => {
    return (localStorage.getItem("college") as keyof typeof EIE) || null;
  });
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    () => {
      return localStorage.getItem("major") || null;
    }
  );

  const handleCollegeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const college = e.target.value as keyof typeof EIE;
    setSelectedCollege(college);
    setSelectedDepartment(null); // 새로운 단과대학 선택 시 학과 초기화
    localStorage.setItem("college", college); // 선택한 단과대 로컬 스토리지에 저장
    localStorage.removeItem("major"); // 학과 초기화 시 로컬 스토리지에서도 제거
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    localStorage.setItem("major", department); // 선택한 학과 로컬 스토리지에 저장
  };

  return (
    <Container>
      <Label>단과대학 선택</Label>
      <Dropdown value={selectedCollege || ""} onChange={handleCollegeChange}>
        <option value="" disabled>
          단과대학을 선택하세요
        </option>
        {Object.keys(EIE).map((college) => (
          <option key={college} value={college}>
            {college}
          </option>
        ))}
      </Dropdown>

      {selectedCollege && (
        <>
          <Label>학과 선택</Label>
          <Dropdown
            value={selectedDepartment || ""}
            onChange={handleDepartmentChange}
          >
            <option value="" disabled>
              학과를 선택하세요
            </option>
            {(EIE[selectedCollege] || []).map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </Dropdown>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export default MajorDropDown;
