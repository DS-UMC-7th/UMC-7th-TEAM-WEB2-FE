import { useState } from "react";
import banner from "../../assets/HomeImg/banner.png"; // 이미지를 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// 스타일 컴포넌트 가져오기
import { GalleryContainer, ImageContainer, Image, PrevButton, NextButton } from "./ImageGallery.style";

const Banner = () => {
  const images = [banner, banner, banner, banner];  // 예시 이미지

  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 이미지로 이동
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 다음 이미지로 이동
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <GalleryContainer>
      <ImageContainer>
        <PrevButton onClick={prevImage}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </PrevButton>
        <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <NextButton onClick={nextImage}>
          <FontAwesomeIcon icon={faAngleRight} />
        </NextButton>
      </ImageContainer>
    </GalleryContainer>
  );
};

export default Banner;
