import { ListCardContainer, ListCardTitle, ListCardDescription, TitleContainer, InfoContainer, Stars } from './ListCard.style';
import star from "../../assets/star.svg";
import starSelect from "../../assets/star_select.svg";

const ListCard = ({ lectureName, rating, platform, lectureTeacher, createdAt, content, onClick }) => {

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? starSelect : star} 
          alt={i <= rating ? "Selected star" : "Empty star"}
          style={{ width: '2.7rem', height: '2.7rem'}} 
        />
      );
    }
    return stars;
  };

  return (
    <ListCardContainer onClick={onClick}>
      <TitleContainer>
        <ListCardTitle>{lectureName}</ListCardTitle>
        <Stars>{renderStars()}</Stars>
      </TitleContainer>
      <InfoContainer>
        <div>
          <span>{platform}</span>
          <span>|</span>
          <span>{lectureTeacher}</span>
        </div>
        <span>{formatDate(createdAt)}</span>
      </InfoContainer>
      <ListCardDescription>{content}</ListCardDescription>
    </ListCardContainer>
  );
};

export default ListCard;