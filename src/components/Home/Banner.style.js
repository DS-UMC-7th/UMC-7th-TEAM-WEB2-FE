import styled from "styled-components";

// 배너의 전체 컨테이너 스타일
export const GalleryContainer = styled.div`
  position: relative;  // 버튼을 절대 위치로 배치하기 위해 상대 위치 설정
  width: 100%;         // 배너가 가로로 전체를 차지하도록 설정
  height: 300px;       // 배너의 높이를 지정 (원하는 높이에 맞게 조정)
  overflow: hidden;    // 이미지가 컨테이너를 벗어나지 않도록 숨김 처리
  margin-top: 20px;    // 상단 여백 추가
`;

// 이미지가 들어갈 컨테이너 스타일
export const ImageContainer = styled.div`
  display: flex;                 // 이미지가 가로로 나열될 수 있도록 flexbox 사용
  align-items: center;           // 이미지를 세로로 가운데 정렬
  justify-content: center;       // 이미지를 가로로 가운데 정렬
  position: relative;            // 버튼을 절대 위치로 배치하기 위해 상대 위치 설정
  width: 100%;
  height: 100%;
`;

// 이미지 스타일
export const Image = styled.img`
  width: 100%;  // 이미지가 컨테이너의 너비에 맞게 100% 차지
  object-fit: cover;  // 이미지의 비율을 유지하면서 잘림을 방지
  height: 100%;
`;

// 이전 버튼 스타일
export const PrevButton = styled.button`
  position: absolute;
  left: 10px;       // 왼쪽 위치
  top: 50%;
  transform: translateY(-50%); // 버튼이 수직으로 가운데 정렬되도록 함
  background: rgba(0, 0, 0, 0.5); // 반투명 배경
  border: none;
  padding: 10px;
  border-radius: 50%; // 둥근 버튼
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);  // 호버 시 배경색 변화
  }
`;

// 다음 버튼 스타일
export const NextButton = styled.button`
  position: absolute;
  right: 10px;      // 오른쪽 위치
  top: 50%;
  transform: translateY(-50%); // 버튼이 수직으로 가운데 정렬되도록 함
  background: rgba(0, 0, 0, 0.5); // 반투명 배경
  border: none;
  padding: 10px;
  border-radius: 50%; // 둥근 버튼
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);  // 호버 시 배경색 변화
  }
`;
