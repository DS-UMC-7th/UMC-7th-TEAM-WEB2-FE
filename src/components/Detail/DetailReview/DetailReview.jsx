import StarRating from "../../Post/StarRating";
import DetailStar from "../DetailStar/DetailStar";
import Graph from "../Graph/Graph";
import { ReviewContainer, Section, Count, ReviewButton } from "./DetailReview.style";
import { NavLink } from "react-router-dom";
import reviewsData from "/public/data/reviews.json";

const DetailReview = () => {
  const reviews = reviewsData.reviews; // 리뷰 데이터 배열
  const reviewCount = reviews.length; // 리뷰 개수

  // 모든 리뷰의 selectedStars에서 true 개수를 모두 합산
  const totalTrueStars = reviews.reduce((acc, review) => {
    const trueCount = review.selectedStars.filter((star) => star === true).length;
    return acc + trueCount; // true의 개수를 누적
  }, 0);

  const average = Math.round(totalTrueStars / reviewCount); //정수까지 나타냄
  console.log(average);

  const averageRating = Math.round((totalTrueStars / reviewCount) * 100) / 100; // 전체 평균 별점 -> 소수점 둘째자리까지

  const selectedStars = Array(5).fill(false); // 기본적으로 false로 채운 5개의 배열
  for (let i = 0; i < average; i++) {
    selectedStars[i] = true; // average 값만큼 true로 설정
  }

  const onStarClick = () => {};

  return (
    <>
      <ReviewContainer>
        <Section>
          <Count fontSize={"32px"}>{averageRating}</Count>

          <DetailStar selectedStars={selectedStars} />

          <Count fontSize={"15px"}>{reviewCount}개의 리뷰가 있습니다.</Count>

          <NavLink to="/post">
            <ReviewButton>상세 리뷰 작성하기</ReviewButton>
          </NavLink>
        </Section>

        <div>
          <Graph review={reviewCount} count={reviews} />
        </div>
      </ReviewContainer>
    </>
  );
};

export default DetailReview;
