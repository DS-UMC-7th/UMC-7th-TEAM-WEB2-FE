import styled from "styled-components";

// 카드 컨테이너 스타일
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px 20px 12px 20px; /* 내부 여백 */
  border-radius: 10px;
  border: 1px solid #D9D9D9; /* 테두리 색상 */
  background: linear-gradient(180deg, #E55F00 0%, #FFF 43%); /* 그라디언트 배경 */
  width: 275px;
  max-width: 100%; /* 최대 너비 100% */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 추가 */
  overflow: hidden; /* 이미지가 카드 밖으로 나가지 않도록 */
`;

// 이미지 스타일
export const Image = styled.img`
  width: 100%; /* 이미지가 부모의 너비를 차지하도록 설정 */
  height: auto; /* 이미지 비율에 맞춰 높이 자동 조정 */
  border-radius: 8px; /* 이미지 테두리 둥글게 */
  object-fit: cover; /* 이미지 크기가 카드의 크기에 맞게 잘림 */
`;

// 제목 스타일
export const Title = styled.h2`
  font-size: 1.5rem; /* 제목 크기 */
  font-weight: bold;
  color: #333;
  text-align: center;
`;

// 평점 스타일
export const Rating = styled.div`
  font-size: 1.2rem; /* 평점 크기 */
  color: #555;
  text-align: center;
`;

// 내용 스타일
export const Content = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center; /* 내용 중앙 정렬 */
  line-height: 1.5; /* 내용 줄 간격 */
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis; /* 내용이 길면 ... 으로 표시 */
  max-height: 100px; /* 설명이 길어지면 제한된 높이로 표시 */
`;
