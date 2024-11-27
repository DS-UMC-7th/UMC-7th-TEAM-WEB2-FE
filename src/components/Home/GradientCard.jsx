import { CardContainer, Image, Title, Score, Content } from "./GradientCard.style";
import star from "../../assets/star.svg"; 
import starSelect from "../../assets/star_select.svg";

const GradientCard = ({ image, title, score, content }) => {
  // `score` 값을 숫자로 변환
  const numericScore = Number(score);

  // 별점 생성 함수
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= numericScore ? starSelect : star} // 변환된 `numericScore` 사용
          alt={i <= numericScore ? "Selected star" : "Empty star"}
          style={{ width: '15px', height: '15px'}} // 크기 조정
        />
      );
    }
    return stars;
  };

  return (
    <CardContainer>
      <Image src={image} alt="Card image" />
      <Title>{title}</Title>
      <Score>{renderStars()}</Score>
      <Content>{content}</Content>
    </CardContainer>
  );
};

export default GradientCard;
