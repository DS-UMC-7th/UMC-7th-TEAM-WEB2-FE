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

const StyledTextareaContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;


const StyledTextarea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 20px 18px;
  border: none;
  border-radius: 10px;
  background: #fff6eb;
  resize: none;
  outline: none;
  box-shadow: none;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
  color: #232323;
  font-family: 'Pretendard Variable';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 157%; 
  letter-spacing: 0.36px;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none; 
    border-color: ${({ theme }) => theme.colors.main}; 
    box-shadow: none; 
  }
`;



const CharacterCount = styled.span`
  position: absolute;
  bottom: 10px;
  left: 25px;
  font-family: 'Pretendard Variable';
  color: #888;
  text-align: justify;
  leading-trim: both;
  text-edge: cap;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 157%; /* 28.26px */
  letter-spacing: 0.36px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  margin-top: 10px;
  font-family: 'Pretendard Variable';
`;

const ReviewInput = ({ review, onReviewChange, reviewError }) => {
  return (
    <Section>
      <Label>
        <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 강의평
      </Label>
      <StyledTextareaContainer>
        <StyledTextarea
          placeholder="강의에 대한 후기를 작성해주세요. 욕설, 비하적인 말은 지양해주세요."
          maxLength={300}
          value={review}
          onChange={onReviewChange}
        />
        <CharacterCount>{review.length}/300</CharacterCount>
      </StyledTextareaContainer>
      {reviewError && <ErrorMessage>{reviewError}</ErrorMessage>}
    </Section>
  );
};

export default ReviewInput;
