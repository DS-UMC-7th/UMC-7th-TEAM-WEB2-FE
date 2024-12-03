import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { ReviewsContainer, SortBtn, Span } from "./DetailReviews.style";
import Paging from "../../Pagination/Pagination";
import CustomDropdown from "../../List/CustomDropdown";
import axios from "axios";
import { CardDiv } from "../Card/Card.style";

const DetailReviews = ({ foundLectureId }) => {
  const id = foundLectureId;
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [reviews, setReviews] = useState([]); // 모든 리뷰 데이터
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지, 기본 1
  const [postPerPage] = useState(5); // 한 페이지에 5개씩
  const [order, setOrder] = useState("recommended"); // 리뷰 정렬 기준
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        let allReviews = [];
        let currentPage = 0;
        let totalPageCount = 1; // 초기 총 페이지 수

        while (currentPage < totalPageCount) {
          const response = await axios.get(`${VITE_API_BASE_URL}/api/reviews/${id}?lectureId=${id}&page=${currentPage}&sort=createdAt`);
          if (response.data.isSuccess) {
            const { reviewList, totalPage } = response.data.result;
            allReviews = [...allReviews, ...reviewList]; // 리뷰 병합
            totalPageCount = totalPage; // 총 페이지 수 업데이트
            currentPage++; // 다음 페이지 요청
          } else {
            console.log("리뷰 데이터를 가져오는 데 실패했습니다.");
            break;
          }
        }

        setReviews(allReviews); // 모든 리뷰 상태 저장
        setTotalPages(totalPageCount); // 총 페이지 수 업데이트
      } catch (error) {
        console.log("DetailReviews 리뷰 데이터 가져오기 실패", error);
      }
    };

    fetchAllReviews();
  }, [id]);

  useEffect(() => {
    setCurrentPage(1); // 강의 변경 시 페이지 초기화
  }, [id]);

  // 정렬된 리뷰
  const sortedReviews = [...reviews].sort((a, b) => {
    if (order === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt); // 최신순 정렬
    } else {
      return b.likes - a.likes; // 추천순 정렬
    }
  });

  // 페이지네이션
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = sortedReviews.slice(indexOfFirstPost, indexOfLastPost);

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
              likes={review.likes}
            />
          ))
        ) : (
          <CardDiv style={{ alignItems: "center", fontSize: "20px", display: "flex", justifyContent: "center" }}>등록된 리뷰가 없습니다.</CardDiv>
        )}
      </div>
      <Paging
        page={currentPage} // 현재 페이지
        postPerPage={postPerPage} // 한 페이지 당 포스트 개수
        count={reviews.length} // 모든 리뷰 수
        totalPages={totalPages} // 총 페이지 수
        setPage={handlePageChange} // 페이지 변경 핸들러
      />
    </>
  );
};

export default DetailReviews;
