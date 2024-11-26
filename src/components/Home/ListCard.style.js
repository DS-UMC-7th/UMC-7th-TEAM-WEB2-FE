import styled from 'styled-components';

// ListCard의 컨테이너 스타일
export const ListCardContainer = styled.div`
  display: flex;
  height: 32.2rem;
  padding: 5.4rem 12.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.3rem;
  align-self: stretch;
  border-top: 1px solid #E55F00;
  border-bottom: 1px solid #E55F00;
  background: #FFFAF4;
`;

// 제목 스타일
export const ListCardTitle = styled.div`
  color: #E55F00;
  font-family: "Elice DX Neolli OTF";
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 124.9%;
  letter-spacing: 0.48px;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

`;

// 소속 스타일
export const ListCardSubtitle = styled.div`
  color: #000;
  font-family: "Elice DX Neolli OTF";
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.4px;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

// 설명 스타일
export const ListCardDescription = styled.div`
  color: #000;
  font-family: "Elice DX Neolli OTF";
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.4px;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
