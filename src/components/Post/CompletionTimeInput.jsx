import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-bottom: 106px;
  position: relative;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  display: block;
  margin-bottom: 13px;
  font-family: "Elice DX Neolli";
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
`;

const Icon = styled.img`
  width: 9px;
  height: 10.145px;
  margin-right: 13px;
`;

const RadioGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 80%; 

`;


const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top:10px;
  cursor: pointer;
  margin-bottom: 25px;

  img {
    width: 18px;
    height: 18px;
  }

  span {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 124.9%; /* 27.478px */
    margin-left: 15px;
  }
`;

const CompletionTimeInput = ({ selectedOption, onOptionClick, radioOptions }) => {
  return (
    <Section>
      <Label>
        <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 강의를 다 듣는데 얼마나 걸렸나요?
      </Label>
      <RadioGroup>
        {radioOptions.map((option, index) => (
          <RadioOption key={index} onClick={() => onOptionClick(option.value)}>
            <img
              src={
                selectedOption === option.value
                  ? "/src/assets/radio_select.svg" // 선택된 상태
                  : "/src/assets/radio.svg" // 선택되지 않은 상태
              }
              alt="라디오 버튼"
            />
           <span>{option.label}</span>
          </RadioOption>
        ))}
      </RadioGroup>
    </Section>
  );
};

export default CompletionTimeInput;
