import React, { useEffect, useState } from "react";
import DetailHeader from "../../components/Detail/DetailHeader/DetailHeader";
import Gallery from "../../components/Detail/Gallery/Gallery";
import DetailReview from "../../components/Detail/DetailReview/DetailReview";
import DetailReviews from "../../components/Detail/DetailReviews/DetailReviews";
import listData from "../../utils/mocks/listData";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

  // id에 해당하는 데이터 찾기
  useEffect(() => {
    const data = listData.find((item) => item.id === Number(id));
    setDetailData(data);

    window.scrollTo(0, 0);
  }, [id]);

  console.log(detailData);

  if (!detailData) {
    return <div>Loading...</div>;
  }

  const { title, company, author } = detailData;
  console.log(title);

  return (
    <>
      <DetailHeader title={title} company={company} author={author} />
      <div style={{ paddingLeft: "6vw", paddingRight: "6vw", marginTop: "4vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Gallery />
        <DetailReview />
        <DetailReviews />
      </div>
    </>
  );
};

export default DetailPage;
