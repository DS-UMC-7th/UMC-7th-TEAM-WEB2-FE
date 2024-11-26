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

const StarRatingContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  margin: 0 auto; /* 가운데 정렬 */
`;


const Star = styled.span`
  width: 35px;
  height: 36px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Count = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Elice DX Neolli';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
  margin-left: 32px;
`;

const StarRating = ({ selectedStars, rating, onStarClick }) => {
  return (
    <Section>
      <Label>
        <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 별점
      </Label>
      <StarRatingContainer>
        {selectedStars.map((isSelected, index) => (
          <Star key={index} onClick={() => onStarClick(index)}>
            <img
              src={
                isSelected
                  ? '/src/assets/star_select.svg' // 선택된 별
                  : '/src/assets/star.svg' // 선택되지 않은 별
              }
              alt="별"
            />
          </Star>
        ))}
        <Count>{rating}/5</Count>
      </StarRatingContainer>
    </Section>
  );
};

export default StarRating;
