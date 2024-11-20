import Banner from '../../components/Home/Banner';
import GradientCard from '../../components/Home/GradientCard';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListCard from '../../components/Home/ListCard';

// HomePage 스타일 컨테이너
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

// 제목 스타일
const Title = styled.div`
  color: #000;
  font-family: "Elice DX Neolli OTF";
  font-size: 36px;
  font-weight: 700;
  line-height: 124.9%;
  text-align: left; /* 제목을 왼쪽 정렬 */
  margin: 0 104px; /* 카드와 제목 사이의 여백 */
`;

// 제목에 아이콘 스타일
const TitleIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.main}; /* theme의 main 색상 적용 */
  margin-left: 10px;
`;

// 카드 컨테이너 스타일
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
  margin: 42px 104px;
`;

// ListCard 컨테이너 스타일
const ListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px; /* ListCard 간의 55px 간격 */
  margin: 22px 0; /* 최신리뷰와 ListCard 간의 22px 간격 */
  width: 100%;
`;

const HomePage = () => {
  const cards = [
    {
      image: 'https://via.placeholder.com/235x210', // 임시 이미지 URL
      title: '블렌더로 귀여운 3D 일러스트레이션 만들기',
      rating: '⭐⭐⭐⭐⭐',
      content: '이번에는 색감과 분위기를 제 스타일대로 해보고 싶어서...',
    },
    {
      image: 'https://via.placeholder.com/235x210',
      title: '따뜻한 느낌의 3D 일러스트레이션',
      rating: '⭐⭐⭐⭐',
      content: '이른 아침 장면을 따뜻한 느낌으로 시도했는데...',
    },
    {
      image: 'https://via.placeholder.com/235x210',
      title: '차분한 분위기의 아침 풍경',
      rating: '⭐⭐⭐⭐⭐',
      content: '평온한 느낌을 표현했는데, 그래도 더 개선할 점이 많아요...',
    },
    {
      image: 'https://via.placeholder.com/235x210',
      title: '따뜻한 커피와 함께하는 아침',
      rating: '⭐⭐⭐⭐',
      content: '아침 커피 한 잔과 함께하는 평화로운 아침 풍경...',
    },
  ];

  const listData = [
    {
      title: "초보자도 가능한 그림 같은 화과자",
      subtitle: "갸또디솔레의 계절별 고나시 18종",
      description: "이 고나시는 시즌별로 다채로운 맛을 자랑하는 예쁜 디저트입니다. 이 화과자는 초보자도 쉽게 만들 수 있습니다.",
    },
    {
      title: "겨울철 따뜻한 차와 함께",
      subtitle: "다양한 허브 차 세트",
      description: "겨울철에 따뜻하게 즐길 수 있는 다양한 허브 차 세트. 각기 다른 허브의 향긋함을 느낄 수 있습니다.",
    },
    {
      title: "조용한 오후, 책과 함께",
      subtitle: "차분한 분위기의 북카페",
      description: "책을 좋아하는 사람들을 위한 조용하고 아늑한 북카페. 차 한 잔과 책으로 여유로운 시간을 즐길 수 있습니다.",
    },
  ];

  return (
    <HomeContainer>
      <Banner />
      <Title>
        지금 뜨는 인기 리뷰
        <TitleIcon icon={faAngleRight} />
      </Title>
      <CardContainer>
        {cards.map((card, index) => (
          <GradientCard
            key={index}
            image={card.image}
            title={card.title}
            rating={card.rating}
            content={card.content}
          />
        ))}
      </CardContainer>
      <Title>
        최신리뷰
        <TitleIcon icon={faAngleRight} />
      </Title>
      <ListCardContainer>
        {listData.map((item, index) => (
          <ListCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </ListCardContainer>
    </HomeContainer>
  );
};

export default HomePage;
