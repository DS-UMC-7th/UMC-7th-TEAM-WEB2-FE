import { ListCardContainer, ListCardTitle, ListCardDescription, TitleContainer, InfoContainer, Stars } from './ListCard.style';
import star from "../../assets/star.svg";
import starSelect from "../../assets/star_select.svg";

const ListCard = ({ title, description, score, company, author, date, onClick  }) => {

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= score ? starSelect : star} 
          alt={i <= score ? "Selected star" : "Empty star"}
          style={{ width: '27px', height: '27px'}} 
        />
      );
    }
    return stars;
  };

  return (
    <ListCardContainer onClick={onClick}>
      <TitleContainer>
        <ListCardTitle>{title}</ListCardTitle>
        <Stars>{renderStars()}</Stars>
      </TitleContainer>
      <InfoContainer>
        <div>
          <span>{company}</span>
          <span>|</span>
          <span>{author}</span>
        </div>
        <span>{date}</span>
      </InfoContainer>
      <ListCardDescription>{description}</ListCardDescription>
    </ListCardContainer>
  );
};

export default ListCard;
