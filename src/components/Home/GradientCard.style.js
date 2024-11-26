import styled from "styled-components";

// 카드 컨테이너 스타일
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem 2rem 1.2rem 2rem;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  background: linear-gradient(180deg, #E55F00 0%, #FFF 43%);
  width: 27.5rem;
  max-width: 100%;
  height: 41.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// 이미지 스타일
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

// 제목 스타일
export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Rating = styled.div`
  display: flex;
  font-size: 2rem;
  color: #555;
  text-align: left;
`;

// 내용 스타일
export const Content = styled.p`
  font-size: 2rem;
  color: #666;
  text-align: center;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 10rem; 
`;
