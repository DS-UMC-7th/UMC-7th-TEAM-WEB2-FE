import React, { useEffect, useState } from "react";
import DetailHeader from "../../components/Detail/DetailHeader/DetailHeader";
import Gallery from "../../components/Detail/Gallery/Gallery";
import DetailReview from "../../components/Detail/DetailReview/DetailReview";
import DetailReviews from "../../components/Detail/DetailReviews/DetailReviews";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams(); // lectureId 가져오기
  const [detailData, setDetailData] = useState(null);

  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // lectureId에 해당하는 데이터 API 호출
  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await axios.get(`${VITE_API_BASE_URL}/api/lecture_info/${id}`);
        setDetailData(response.data); // 받아온 데이터를 상태에 저장
        console.log(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생", error);
      }
    };

    fetchDetailData();
    window.scrollTo(0, 0); // 페이지 로드 시 스크롤을 맨 위로
  }, [id]); // id가 변경될 때마다 호출됨

  if (!detailData) {
    return <div>Loading...</div>;
  }

  const { result } = detailData;
  const { lectureName, platform, teacher, imageUrl } = result;

  return (
    <>
      <DetailHeader title={lectureName} company={platform} author={teacher} imageUrl={imageUrl} />
      <div style={{ paddingLeft: "6vw", paddingRight: "6vw", marginTop: "4vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Gallery />
        <DetailReview />
        <DetailReviews />
      </div>
    </>
  );
};

export default DetailPage;
