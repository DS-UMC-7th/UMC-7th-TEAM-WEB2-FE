import { StarRatingContainer, Star } from "./Detail.style";

const DetailStar = ({ selectedStars, width }) => {
  return (
    <>
      <StarRatingContainer>
        {selectedStars.map((isSelected, index) => (
          <Star key={index} onClick={() => onStarClick(index)} width={width}>
            <img
              src={
                isSelected
                  ? "/src/assets/star_select.svg" // 선택된 별
                  : "/src/assets/star.svg" // 선택되지 않은 별
              }
              alt="별"
            />
          </Star>
        ))}
      </StarRatingContainer>
    </>
  );
};

export default DetailStar;
