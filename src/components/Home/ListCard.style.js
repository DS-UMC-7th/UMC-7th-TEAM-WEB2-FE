import styled from 'styled-components';

export const ListCardContainer = styled.div`
  display: flex;
  height: 32.2rem;
  padding: 5.4rem 12.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid #E55F00;
  border-bottom: 1px solid #E55F00;
  background: #FFFAF4;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ListCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.main};
  font-family: "Elice DX Neolli";
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
  letter-spacing: 0.48px;
`;

export const Stars = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin: 0.5rem 0 2.3rem 0;

  span {
    color: #000;
    font-family: "Elice DX Neolli";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 124.9%;
    letter-spacing: 0.3px;
  }

  span:first-child {
    margin-right: 1rem;
  }
  span:nth-child(2) {
    margin-right: 1.3rem;
  }
  span:last-child {
    margin-right: 0;
  }
`;

export const ListCardDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #232323;
  text-align: justify;
  text-overflow: ellipsis;
  font-family: "Pretendard Variable";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 176%; /* 31.68px */
  letter-spacing: 0.36px;
  white-space: pre-line; 
  max-width: 100.7rem;
  width: 100%;
`;
