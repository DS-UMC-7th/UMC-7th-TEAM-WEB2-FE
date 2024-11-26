import styled from "styled-components";

const StarRatingContainer = styled.div`
  gap: 5px;
  display: flex;
  align-items: flex-end;
  align-self: stretch;
`;
const Star = styled.span`
  width: ${(props) => props.width};
  height: 3.3vw;

  img {
    width: 100%;
    height: 100%;
  }
`;

export { StarRatingContainer, Star };
