import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 106px;
  position: relative;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  display: block;
  margin-bottom: 13px;
  font-family: 'Elice DX Neolli';
  font-size: 32px;
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
  margin-top: 15px;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 30px;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    color: #000;
    font-family: 'Pretendard Variable';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 124.9%; /* 27.478px */
    margin-left: 23px;
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
          <RadioOption key={index} onClick={() => onOptionClick(option)}>
            <img
              src={
                selectedOption === option
                  ? '/src/assets/radio_select.svg' // 선택된 상태
                  : '/src/assets/radio.svg' // 선택되지 않은 상태
              }
              alt="라디오 버튼"
            />
            <span>{option}</span>
          </RadioOption>
        ))}
      </RadioGroup>
    </Section>
  );
};

export default CompletionTimeInput;
