import gallery1 from "../../../assets/img/gallery1.png";
import gallery2 from "../../../assets/img/gallery2.png";
import gallery3 from "../../../assets/img/gallery3.png";
import { HeaderImg, HeaderP } from "../DetailHeader/DetailHeader.style";
import { GalleryContainer, GalleryImgDiv, GalleryImg } from "./Gallery.style";

const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <p style={{ fontSize: "17px" }}>클래스 갤러리</p>

        <GalleryImgDiv>
          <div>
            <GalleryImg src={gallery1}></GalleryImg>
          </div>
          <div>
            <GalleryImg src={gallery2}></GalleryImg>
          </div>
          <div>
            <GalleryImg src={gallery3}></GalleryImg>
          </div>
        </GalleryImgDiv>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
