import styled from 'styled-components'

// 배너 컨테이너 스타일
export const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 이미지 컨테이너 스타일
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 499px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.5s ease;
`;

// 이미지 스타일
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out; // 부드러운 전환
`;

// 버튼 스타일
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

export const NextButton = styled.button`
  position: absolute;
  right: 20px;
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

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  text-align: left;
  color: black;
  font-weight: bold;
  width: 733px;
  padding-left: 148px;
  z-index: 2;
`;

// 타이틀 스타일
export const Title = styled.div`
  font-size: 5rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

// 별점 스타일
export const Rating = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
`;

// 내용 스타일
export const Content = styled.p`
  font-size: 2rem;
  margin: 10px 0;
  line-height: 1;
  max-height: 6em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 2;
`;

export const IndicatorItem = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#000" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #000;
  }
`;
