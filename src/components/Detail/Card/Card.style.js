import styled from "styled-components";

const CardDiv = styled.div`
  height: 200px;
  border-top: 1px solid #e55f00;
  border-bottom: 1px solid #e55f00;
  padding: 1.5vw 3vw;

  display: flex;
  flex-direction: column;

  margin-top: 1vw;
  margin-bottom: 4vw;
`;

const ReviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LikeBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 65px;
  height: 28px;
  border-radius: 20px;
  border: 1px solid #e55f00;
  background: #fffaf4;

  img {
    width: 17px;
    height: 17px;
  }

  cursor: pointer;

  &:hover {
    background: #fdead9;
  }
`;

const ReviewInfo = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const ReviewDiv = styled.div`
  width: 90%;
  margin-top: 1vw;
`;

const ReviewTxt = styled.p`
  font-family: "Pretendard Variable";
  font-size: 15px;
  line-height: 170%;
`;

export { CardDiv, ReviewHeader, LikeBtn, ReviewInfo, ReviewDiv, ReviewTxt };
