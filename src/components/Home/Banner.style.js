import styled from 'styled-components'

export const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 49.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
