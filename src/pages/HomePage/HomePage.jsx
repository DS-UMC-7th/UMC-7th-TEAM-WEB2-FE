import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../components/Home/Banner";
import GradientCard from "../../components/Home/GradientCard";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListCard from "../../components/Home/ListCard";
import * as S from "./HomePage.style";
import { getRecommendedReviews, getLatestReviews } from "../../apis/home/getHomeReviews";
import Loading from "../../components/Loading/Loading"; // Loading 컴포넌트 추가

const HomePage = () => {
  const navigate = useNavigate();

  const [recommendedReviews, setRecommendedReviews] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    Promise.all([getRecommendedReviews(), getLatestReviews()])
      .then(([recommendedData, latestData]) => {
        setRecommendedReviews(recommendedData);
        setLatestReviews(latestData);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false)); // 데이터 로딩 완료 후 로딩 상태 false
  }, []);

  const handleClick = (filterType) => {
    navigate(`/list?sort=${filterType}`);
  };

  const handleListCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.HomeContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner />
          <S.Line />

          <S.Title>
            지금 뜨는 인기 리뷰
            <S.TitleIcon icon={faAngleRight} onClick={() => handleClick("recommended")} />
          </S.Title>
          <S.CardContainer>
            {recommendedReviews.map((card) => (
              <GradientCard
                key={card.reviewId}
                imageUrls={card.imageUrls}
                lectureName={card.lectureName}
                rating={card.rating}
                content={card.content}
              />
            ))}
          </S.CardContainer>
          <S.Line2 />

          <S.Title>
            최신리뷰
            <S.TitleIcon icon={faAngleRight} onClick={() => handleClick("latest")} />
          </S.Title>
          <S.ListCardContainer>
            {latestReviews.map((list) => (
              <ListCard
                key={list.reviewId}
                lectureName={list.lectureName}
                rating={list.rating}
                platform={list.platform}
                lectureTeacher={list.lectureTeacher}
                createdAt={list.createdAt}
                content={list.content}
                onClick={() => handleListCardClick(list.reviewId)}
              />
            ))}
          </S.ListCardContainer>
        </>
      )}
    </S.HomeContainer>
  );
};

export default HomePage;
