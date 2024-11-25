import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
  padding
`;

const GalleryImgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: space-evenly;
  align-items: center;

  width: 100%;
  height: 240px;
  overflow: hidden;

  margin-top: 1vw;
`;

const GalleryImg = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
`;

export { GalleryContainer, GalleryImgDiv, GalleryImg };
