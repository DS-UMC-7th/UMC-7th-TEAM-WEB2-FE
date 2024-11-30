import styled from "styled-components";

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px 0;
`;

const Span = styled.span`
  font-family: "Elice DX Neolli";
  font-size: 17px;
  font-weight: 300;
  color: ${(props) => (props.isActive ? "#E55F00" : "#6C6C6C")};
  cursor: pointer;
`;

const SortBtn = styled.button`
  background: transparent;
  border: none;
`;

export { ReviewsContainer, Span, SortBtn };
