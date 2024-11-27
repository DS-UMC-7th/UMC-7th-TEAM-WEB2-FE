import { useNavigate } from "react-router-dom";

import Banner from "../../components/Home/Banner";
import GradientCard from "../../components/Home/GradientCard";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListCard from "../../components/Home/ListCard";
import * as S from "./HomePage.style";
import cardData from "../../utils/mocks/cardData";
import listData from "../../utils/mocks/listData";

const HomePage = () => {
  const navigate = useNavigate();

  // 클릭 시 각 필터에 맞는 쿼리 파라미터를 전달
  const handleClick = (filterType) => {
    navigate(`/list?filter=${filterType}`);
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
        {cardData.map((card) => (
          <GradientCard key={card.id} image={card.image} title={card.title} score={card.score} content={card.content} />
        ))}
      </S.CardContainer>
      <S.Line2 />

      <S.Title>
        최신리뷰
        <S.TitleIcon icon={faAngleRight} onClick={() => handleClick("latest")} />
      </S.Title>
      <S.ListCardContainer>
        {listData.map((list) => (
          <ListCard
            key={list.id}
            title={list.title}
            score={list.score}
            company={list.company}
            author={list.author}
            date={list.date}
            description={list.description}
            onClick={() => handleListCardClick(list.id)}
          />
        ))}
      </S.ListCardContainer>
    </S.HomeContainer>
  );
};

export default HomePage;
