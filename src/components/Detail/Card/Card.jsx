import DetailStar from "../DetailStar/DetailStar";
import { CardDiv, ReviewDiv, LikeBtn, ReviewHeader, ReviewInfo, ReviewTxt } from "./Card.style";
import likeImg from "../../../assets/img/like.png";

const Card = ({ selectedStars, date, studyDate, content }) => {
  return (
    <CardDiv>
      <ReviewHeader>
        <DetailStar selectedStars={selectedStars} width={"2vw"} />
        <LikeBtn>
          <img src={likeImg}></img>
          <span style={{ fontSize: "17px", fontWeight: "400" }}>31</span>
        </LikeBtn>
      </ReviewHeader>

      <ReviewDiv>
        <ReviewInfo>{date}</ReviewInfo>
        <ReviewInfo>공부기간 : {studyDate}</ReviewInfo>
      </ReviewDiv>

      <ReviewDiv>
        <ReviewTxt>{content}</ReviewTxt>
      </ReviewDiv>
    </CardDiv>
  );
};

export default Card;
