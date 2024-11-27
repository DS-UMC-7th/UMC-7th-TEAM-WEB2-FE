import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 1.2rem 2rem;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  background: linear-gradient(180deg, #E55F00 0%, #FFF 43%);
  width: 27.5rem;
  max-width: 100%;
  height: 41.5rem;
  box-shadow: 0 4px 6px rgba(229, 95, 0, 0.3); 
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 23.5rem;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1.2rem;
`;

export const Score = styled.div`
  display: flex; 
  justify-content: flex-start; 
  align-items: center;
  text-align: left;
  width: 23.5rem;
`;

export const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis; 
  color: #000;
  font-family: "Elice DX Neolli";
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%; 
  letter-spacing: 0.48px;
  margin: 0.7rem 0;
  line-height: 124.9%;
  width: 23.5rem;

`;

export const Content = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0.5rem 0;
  box-sizing: border-box;
  width: 23.5rem;

`;
