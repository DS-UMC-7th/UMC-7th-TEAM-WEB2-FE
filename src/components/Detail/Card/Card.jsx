import DetailStar from "../DetailStar/DetailStar";
import { CardDiv, ReviewDiv, LikeBtn, ReviewHeader, ReviewInfo, ReviewTxt } from "./Card.style";
import likeImg from "../../../assets/img/like.png";
import { useState } from "react";

const Card = ({ selectedStars, date, studyDate, content, likes }) => {
  const [isLiked, setIsLiked] = useState(false); //좋아요 눌렀는지
  const [likeCount, setLikeCount] = useState(0); // 초기 좋아요 숫자

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount((prevCount) => prevCount - 1); // 좋아요 취소
    } else {
      setLikeCount((prevCount) => prevCount + 1); // 좋아요 누름
    }
    setIsLiked((prevLiked) => !prevLiked);
  };

  return (
    <CardDiv>
      <ReviewHeader>
        <DetailStar selectedStars={selectedStars} width={"2vw"} />
        <LikeBtn onClick={handleLikeClick}>
          <img src={likeImg}></img>
          <span style={{ fontSize: "17px", fontWeight: "400" }}>{likes}</span>
        </LikeBtn>
      </ReviewHeader>

      <ReviewDiv>
        <ReviewInfo>{date}</ReviewInfo>
        <ReviewInfo style={{ marginLeft: "10px" }}>공부기간 : {studyDate}</ReviewInfo>
      </ReviewDiv>

      <ReviewDiv>
        <ReviewTxt>{content}</ReviewTxt>
      </ReviewDiv>
    </CardDiv>
  );
};

export default Card;
