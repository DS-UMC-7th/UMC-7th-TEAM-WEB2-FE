import StarRating from "../../Post/StarRating";
import DetailStar from "../DetailStar/DetailStar";
import Graph from "../Graph/Graph";
import { ReviewContainer, Section, Count, ReviewButton } from "./DetailReview.style";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailReview = () => {
  const { id } = useParams(); // lectureId 가져오기
  const [totalRating, setTotalRating] = useState(0); // 총 평점
  const [reviewCounts, setReviewCounts] = useState(0); // 리뷰 개수
  const [ratingCounts, setRatingCounts] = useState([]); // 별점별 개수

  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/api/rating_info/${id}`);
        const data = response.data.result;

        setTotalRating(data.totalRating); // 총 평점
        setReviewCounts(data.reviewCounts); // 리뷰 개수
        setRatingCounts(data.ratingCounts); // 별점별 개수
      } catch (error) {
        console.log("DetailReview.jsx 데이터 가져오는 중 오류", error);
      }
    };

    fetchReviews();
  }, [id]);

  // 별점 계산을 위해 총 평점에서 별점별 개수를 분리
  const averageRating = Math.round(totalRating * 10) / 10; // 소수점 첫째자리까지 표시

  // DetailStar에 넘길 별점 상태 설정
  const selectedStars = Array(5).fill(false); // 기본적으로 false로 채운 5개의 배열
  const fullStars = Math.round(averageRating); // 평균 별점만큼 fullStars를 설정
  for (let i = 0; i < fullStars; i++) {
    selectedStars[i] = true; // average 값만큼 true로 설정
  }
  const onStarClick = () => {};

  return (
    <>
      <ReviewContainer>
        <Section>
          <Count fontSize={"32px"}>{averageRating}</Count>

          <DetailStar selectedStars={selectedStars} />

          <Count fontSize={"15px"}>{reviewCounts}개의 리뷰가 있습니다.</Count>

          <NavLink to="/post">
            <ReviewButton>상세 리뷰 작성하기</ReviewButton>
          </NavLink>
        </Section>

        <div>
          <Graph review={reviewCounts} count={ratingCounts} />
        </div>
      </ReviewContainer>
    </>
  );
};

export default DetailReview;
