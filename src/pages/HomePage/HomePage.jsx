import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../components/Home/Banner";
import GradientCard from "../../components/Home/GradientCard";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListCard from "../../components/Home/ListCard";
import * as S from "./HomePage.style";
import { getRecommendedReviews, getLatestReviews } from "../../apis/home/getHomeReviews";

const HomePage = () => {
  const navigate = useNavigate();

  const [recommendedReviews, setRecommendedReviews] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);

  useEffect(() => {
    getRecommendedReviews().then(data => setRecommendedReviews(data)).catch(console.error);
    getLatestReviews().then(data => setLatestReviews(data)).catch(console.error);
  }, []);

  const handleClick = (filterType) => {
    navigate(`/list?sort=${filterType}`);
  };

  const handleListCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.HomeContainer>
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
            imageUrls = {card.imageUrls}
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
    </S.HomeContainer>
  );
};

export default HomePage;
