import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { ReviewsContainer, SortBtn, Span } from "./DetailReviews.style";
import Paging from "../../Pagination/Pagination";
import reviewsData from "/public/data/reviews.json";
import CustomDropdown from "../../List/CustomDropdown";

const DetailReviews = () => {
  const [reviews, setReviews] = useState(reviewsData.reviews);

  // 페이지 관련 상태
  //const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  //const [count, setCount] = useState(5); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지, 기본 1
  const [postPerPage] = useState(5); // 한 페이지에 5개씩
  //const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템의 인덱스
  //const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템의 인덱스
  //const [currentPost, setCurrentPost] = useState(0); // 현재 페이지에서 보여줄 아이템

  // 리뷰 정렬
  const [order, setOrder] = useState("recommended");

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
          currentPost.map((review, index) => (
            <Card key={index} selectedStars={review.selectedStars} date={review.date} studyDate={review.studyDate} content={review.content} />
          ))
        ) : (
          <div>no posts.</div>
        )}
      </div>

      <Paging page={currentPage} postPerPage={postPerPage} count={reviews.length} setPage={handlePageChange} />
    </>
  );
};

export default DetailReviews;
