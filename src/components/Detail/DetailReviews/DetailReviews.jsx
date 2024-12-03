import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { ReviewsContainer, SortBtn, Span } from "./DetailReviews.style";
import Paging from "../../Pagination/Pagination";
import CustomDropdown from "../../List/CustomDropdown";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardDiv } from "../Card/Card.style";

const DetailReviews = () => {
  const { id } = useParams(); // lectureId 가져오기
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [reviews, setReviews] = useState([]); // 리뷰데이터
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지, 기본 1
  const [postPerPage] = useState(5); // 한 페이지에 5개씩
  const [order, setOrder] = useState("recommended"); // 리뷰 정렬 기준
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/api/reviews/${id}?lectureId=${id}&page=${currentPage - 1}&sort=createdAt`);
        if (response.data.isSuccess) {
          setReviews(response.data.result.reviewList);
          setTotalPages(response.data.result.totalPage);
        }
      } catch (error) {
        console.log("DetailReviews 리뷰 데이터 가져오기 실패", error);
      }
    };
    fetchReviews();
  }, [id, currentPage]);

  // 정렬된 리뷰
  const sortedReview =
    order === "latest"
      ? [...reviews].sort((a, b) => new Date(a.date) - new Date(b.date)) // 최신순
      : [...reviews].sort((a, b) => b.likeCount - a.likeCount); // 추천순

  // 페이지네이션
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = sortedReview.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // ReviewsContainer로 스크롤 이동
    const reviewsElement = document.getElementById("reviewsContainer");
    if (reviewsElement) {
      const offsetTop = reviewsElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  // 드롭다운
  const starOptions = ["", "전체", "5", "4", "3", "2", "1"];

  const handleDropdownChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <ReviewsContainer id="reviewsContainer">
        <div>
          <SortBtn>
            <Span onClick={() => setOrder("recommended")} isActive={order === "recommended"}>
              추천순
            </Span>
          </SortBtn>
          <Span>|</Span>
          <SortBtn>
            <Span onClick={() => setOrder("latest")} isActive={order === "latest"}>
              최신순
            </Span>
          </SortBtn>
        </div>
        <div>
          <CustomDropdown title="전체" options={starOptions} onChange={(value) => handleDropdownChange("category", value)} />
        </div>
      </ReviewsContainer>

      <div style={{ width: "100%" }}>
        {currentPost.length > 0 ? (
          currentPost.map((review) => (
            <Card
              key={review.reviewId}
              selectedStars={new Array(5).fill(false).map((_, index) => index < Math.floor(review.rating))}
              date={new Date(review.createdAt).toLocaleDateString("ko-KR")}
              studyDate={review.studyTime}
              content={review.content}
            />
          ))
        ) : (
          <CardDiv style={{ alignItems: "center", fontSize: "20px", display: "flex", justifyContent: "center" }}>등록된 리뷰가 없습니다.</CardDiv>
        )}
      </div>

      <Paging page={currentPage} postPerPage={postPerPage} count={reviews.length} setPage={handlePageChange} />
    </>
  );
};

export default DetailReviews;
