import React, { useEffect, useState } from "react";
import DetailHeader from "../../components/Detail/DetailHeader/DetailHeader";
import Gallery from "../../components/Detail/Gallery/Gallery";
import DetailReview from "../../components/Detail/DetailReview/DetailReview";
import DetailReviews from "../../components/Detail/DetailReviews/DetailReviews";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams(); // reviewId 가져오기
  const [lectureDetail, setLectureDetail] = useState(null); // 강의 상세 데이터
  const [loading, setLoading] = useState(true);
  const [foundLectureId, setFoundLectureId] = useState(null); // 강의 ID 상태 추가

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchLectureDetails = async () => {
      try {
        // 1. 모든 강의 목록 가져오기
        const lecturesResponse = await axios.get(`${API_BASE_URL}/api/lectures`);
        const allLectures = lecturesResponse.data;

        // 2. 모든 리뷰 목록 가져오기
        const reviewsResponse = await axios.get(`${API_BASE_URL}/api/reviews`);
        const allReviews = reviewsResponse.data;

        // 3. matchingReview를 찾기
        const matchingReview = allReviews.find((review) => review.reviewId === parseInt(id, 10));

        if (!matchingReview) {
          throw new Error("해당 리뷰를 찾을 수 없습니다.");
        }

        // 4. 모든 강의에 대해 각각의 리뷰를 조회
        let lectureIdFound = null; // 찾은 강의 ID 변수

        for (const lecture of allLectures.result) {
          const lectureId = lecture.lectureId;

          // 각 강의에 대해 리뷰 목록을 가져오기
          const reviewsForLectureResponse = await axios.get(`${API_BASE_URL}/api/reviews/${lectureId}?lectureId=${lectureId}&page=0&sort=createdAt`);
          const reviewsForLecture = reviewsForLectureResponse.data.result.reviewList;

          // 5. 해당 강의의 리뷰 목록에서 matchingReviewId와 일치하는 리뷰 찾기
          const matchingReview_ = reviewsForLecture.find((review) => review.reviewId === matchingReview.reviewId);

          // 6. 일치하는 리뷰를 찾으면 해당 lectureId를 기록하고 종료
          if (matchingReview_) {
            lectureIdFound = lectureId;
            setFoundLectureId(lectureIdFound); // 상태 업데이트
            break; // 일치하는 리뷰를 찾았으므로 반복 종료
          }
        }

        // 7. foundLectureId에 해당하는 강의 상세 정보를 가져오기
        if (lectureIdFound !== null) {
          const lectureDetailResponse = await axios.get(`${API_BASE_URL}/api/lecture_info/${lectureIdFound}`);
          setLectureDetail(lectureDetailResponse.data);
        } else {
          throw new Error("해당하는 강의를 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLectureDetails();
    window.scrollTo(0, 0); // 페이지 로드 시 스크롤을 맨 위로
  }, [id]);

  // foundLectureId가 변경될 때마다 로그를 출력
  useEffect(() => {
    if (foundLectureId !== null) {
      // 상태 변경에 따른 로그는 필요 없으므로 주석 처리
    }
  }, [foundLectureId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!lectureDetail) {
    return <div>강의 데이터를 찾을 수 없습니다.</div>;
  }

  const { lectureName, platform, teacher, imageUrl } = lectureDetail.result;

  return (
    <>
      <DetailHeader title={lectureName} company={platform} author={teacher} imageUrl={imageUrl} />
      <div
        style={{
          paddingLeft: "6vw",
          paddingRight: "6vw",
          marginTop: "4vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Gallery />
        <DetailReview foundLectureId={foundLectureId} /> {/* 이제 상태로 전달됨 */}
        <DetailReviews foundLectureId={foundLectureId} />
      </div>
    </>
  );
};

export default DetailPage;
