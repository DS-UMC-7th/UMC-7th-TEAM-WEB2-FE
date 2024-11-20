import styled from "styled-components";

// 배너 컨테이너 스타일
export const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
`;

// 이미지 컨테이너 스타일
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 이미지 스타일
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PrevButton = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  font-size: 25px;
`;

// 다음 버튼 스타일
export const NextButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  font-size: 25px;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 5%; 
  transform: translateY(-50%); /* 세로 중앙 정렬 */
  text-align: left;
  color: black;
  font-weight: bold;
  width: 60%; 
  padding: 20px;
  z-index: 2;
`;

// 타이틀 스타일
export const Title = styled.div`
  font-size: 5rem; /* 타이틀 크기 조정 */
  margin-bottom: 15px;
  font-weight: 700;
`;

// 별점 스타일
export const Rating = styled.div`
  font-size: 2rem; /* 별점 크기 조정 */
  margin-bottom: 15px;
`;

// 내용 스타일
export const Content = styled.p`
  font-size: 2rem; /* 내용 크기 조정 */
  margin: 10px 0;
  line-height: 1;
  max-height: 6em;
  overflow: hidden;
  text-overflow: ellipsis; /* 글자가 넘치면 '...'으로 처리 */
`;
