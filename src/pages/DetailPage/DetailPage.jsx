import React from "react";
import DetailHeader from "../../components/Detail/DetailHeader/DetailHeader";
import Gallery from "../../components/Detail/Gallery/Gallery";
import DetailReview from "../../components/Detail/DetailReview/DetailReview";
import DetailReviews from "../../components/Detail/DetailReviews/DetailReviews";

const DetailPage = () => {
  return (
    <>
      <DetailHeader />
      <div style={{ paddingLeft: "6vw", paddingRight: "6vw", marginTop: "4vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Gallery />
        <DetailReview />
        <DetailReviews />
      </div>
    </>
  );
};

export default DetailPage;
