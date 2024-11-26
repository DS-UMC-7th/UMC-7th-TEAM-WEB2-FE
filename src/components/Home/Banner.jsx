import { useState, useEffect } from "react";
import banner1 from "../../assets/HomeImg/banner1.png";
import banner2 from "../../assets/HomeImg/banner2.png";
import banner3 from "../../assets/HomeImg/banner3.png";
import banner4 from "../../assets/HomeImg/banner4.png";
import banner5 from "../../assets/HomeImg/banner5.png";
import {
  GalleryContainer,
  ImageContainer,
  Image,
  Indicator,
  IndicatorItem,
} from "./Banner.style";

const Banner = () => {
  const banners = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
    {
      image: banner4,
    },
    {
      image: banner5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); 
  }, []);


  return (
    <GalleryContainer>
      <ImageContainer>

        <Image src={banners[currentIndex].image} alt={`Image ${currentIndex + 1}`} />
        <Indicator>
          {banners.map((_, index) => (
            <IndicatorItem
              key={index}
              $isActive={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Indicator>
      </ImageContainer>
    </GalleryContainer>
  );
};

export default Banner;
