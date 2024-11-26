import { useState, useEffect } from "react";
import banner1 from "../../assets/HomeImg/banner1.png"; // 배너 1
import banner2 from "../../assets/HomeImg/banner2.png"; // 배너 2
import banner3 from "../../assets/HomeImg/banner3.png"; // 배너 1
import banner4 from "../../assets/HomeImg/banner4.png"; // 배너 1
import banner5 from "../../assets/HomeImg/banner5.png"; // 배너 1
import {
  GalleryContainer,
  ImageContainer,
  Image,
  // TextOverlay,
  // Title,
  // Rating,
  // Content,
  Indicator,
  IndicatorItem,
} from "./Banner.style";

const Banner = () => {
  const banners = [
    {
      image: banner1,
      title: "블렌더로 귀여운 3D 일러스트레이션 만들기",
      rating: "⭐⭐⭐⭐⭐",
      score: "평점 4.37",
      content: "이번에는 색감과 분위기를 제 스타일대로 해보고 싶어서 이른 아침 장면을 시도했는데... 결과는 썩 좋지 않았어요 😆 손봐야 할 부분이 정말 많더라고요... 그래도 포기하지 않고 끝까지 완성했다는 점에서 그나마 진전이 있었던 것 같아요! 😅...",
    },
    {
      image: banner2,
      title: "따뜻한 느낌의 3D 일러스트레이션",
      rating: "⭐⭐⭐⭐",
      score: "평점 4.15",
      content: "이번에는 색상과 분위기를 변화시키는 작업을 해봤어요. 이른 아침 장면을 따뜻한 느낌으로 시도했는데, 결과물이 예상보다 더 좋았어요! 🔥 그래도 여전히 완벽하지 않아서 조금 더 손봐야 할 부분이 있습니다.",
    },
    {
      image: banner3,
      title: "차분한 분위기의 아침 풍경",
      rating: "⭐⭐⭐⭐⭐",
      score: "평점 4.75",
      content: "그림 작업을 하며 나만의 스타일을 찾고자 하는 여정이 계속됩니다. 이른 아침의 차분한 분위기를 담고 싶었어요. 평온한 느낌을 표현했는데, 그래도 더 개선할 점이 많아요. 😌",
    },
    {
      image: banner4,
      title: '',
      rating: '',
      score: '',
      content: '',
    },
    {
      image: banner5,
      title: '',
      rating: '',
      score: '',
      content: '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 이미지 자동 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5초마다 자동으로 전환

    return () => clearInterval(interval); // 컴포넌트가 언마운트되면 interval을 정리
  }, []);


  return (
    <GalleryContainer>
      <ImageContainer>

        <Image src={banners[currentIndex].image} alt={`Image ${currentIndex + 1}`} />

        {/* <TextOverlay>
          <Title>{banners[currentIndex].title}</Title>
          <Rating>{banners[currentIndex].rating} {banners[currentIndex].score}</Rating>
          <Content>
            {banners[currentIndex].content.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Content>
        </TextOverlay> */}
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
