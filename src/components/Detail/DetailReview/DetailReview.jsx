import StarRating from "../../Post/StarRating";
import Graph from "../Graph/Graph";
import { ReviewContainer, Section, Label, Icon, StarRatingContainer, Star, Count, ReviewButton } from "./DetailReview.style";
import { NavLink } from "react-router-dom";

const DetailReview = () => {
  const selectedStars = [true, true, true, true, false];
  const rating = 4.25;
  const review = 32;
  const onStarClick = () => {};

  return (
    <>
      <ReviewContainer>
        <Section>
          <Count fontSize={"32px"}>{rating}</Count>

          <StarRatingContainer>
            {selectedStars.map((isSelected, index) => (
              <Star key={index} onClick={() => onStarClick(index)}>
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

          <Count fontSize={"15px"}>{review}개의 리뷰가 있습니다.</Count>

          <NavLink to="/post">
            <ReviewButton>상세 리뷰 작성하기</ReviewButton>
          </NavLink>
        </Section>

        <div>
          <Graph review={review} count={32} />
        </div>
      </ReviewContainer>
    </>
  );
};

export default DetailReview;
