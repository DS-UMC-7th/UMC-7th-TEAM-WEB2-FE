import React from "react";
import DetailHeader from "../../components/Detail/DetailHeader/DetailHeader";
import Gallery from "../../components/Detail/Gallery/Gallery";
import DetailReview from "../../components/Detail/DetailReview/DetailReview";

const DetailPage = () => {
  return (
    <>
      <DetailHeader />
      <div style={{ paddingLeft: "5vw", marginTop: "4vw" }}>
        <Gallery />
        <DetailReview />
      </div>
    </>
  );
};

export default DetailPage;
