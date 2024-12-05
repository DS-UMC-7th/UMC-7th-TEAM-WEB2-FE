import { CardContainer, Image, Title, Score, Content } from "./GradientCard.style";
import star from "../../assets/star.svg"; 
import starSelect from "../../assets/star_select.svg";
import defaultCardImage from "../../assets/HomeImg/defaultCardImage.png"

const GradientCard = ({ lectureName, rating, content, imageUrls }) => {

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? starSelect : star}
          alt={i <= rating ? "Selected star" : "Empty star"}
          style={{ width: '15px', height: '15px' }}
        />
      );
    }
    return stars;
  };

  return (
    <CardContainer>
      <Image
        src={imageUrls && imageUrls !== "" ? imageUrls : defaultCardImage}
        alt="Card image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultCardImage;
        }}
      />
      <Title>{lectureName}</Title>
      <Score>{renderStars()}</Score>
      <Content>{content}</Content>
    </CardContainer>
  );
};

export default GradientCard;
