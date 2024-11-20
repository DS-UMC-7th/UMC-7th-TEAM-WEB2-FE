import { ListCardContainer, ListCardTitle, ListCardSubtitle, ListCardDescription } from './ListCard.style';

const ListCard = ({ title, subtitle, description }) => {
  return (
    <ListCardContainer>
      <ListCardTitle>{title}</ListCardTitle>
      <ListCardSubtitle>{subtitle}</ListCardSubtitle>
      <ListCardDescription>{description}</ListCardDescription>
    </ListCardContainer>
  );
};

export default ListCard;
