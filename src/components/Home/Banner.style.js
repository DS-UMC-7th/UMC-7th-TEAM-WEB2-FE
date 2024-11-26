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

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  text-align: left;
  color: black;
  font-weight: bold;
  width: 73.3rem;
  padding-left: 148px;
  z-index: 2;
`;

export const Title = styled.div`
  font-size: 5rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

export const Rating = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
`;

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
