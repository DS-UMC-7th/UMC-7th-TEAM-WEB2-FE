import StarRating from "../../Post/StarRating";
import DetailStar from "../DetailStar/DetailStar";
import Graph from "../Graph/Graph";
import { ReviewContainer, Section, Count, ReviewButton } from "./DetailReview.style";
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

          <DetailStar selectedStars={[true, true, true, true, false]} />

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
