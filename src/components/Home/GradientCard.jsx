import { CardContainer, Image, Title, Rating, Content } from "./GradientCard.style"; // style.js에서 스타일을 불러옵니다.

const GradientCard = ({ image, title, rating, score, content }) => {
  return (
    <CardContainer>
      <Image src={image} alt="Card image" />
      <Title>{title}</Title>
      <Rating>{rating} ({score})</Rating>
      <Content>{content}</Content>
    </CardContainer>
  );
};

export default GradientCard;
