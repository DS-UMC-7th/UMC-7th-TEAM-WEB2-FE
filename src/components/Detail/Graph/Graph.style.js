import styled from "styled-components";

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2vw;
`;

const ProgressBar = styled.div`
  width: 32vw;
  height: 20px;
  background-color: #fff6eb;
  border: 0.5px solid #888888;
`;

const Progress = styled.div`
  width: ${(props) => (props.count / props.reviewCount) * 100}%;
  height: 20px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.main};
`;

const TextP = styled.p`
  font-size: 16px;
  font-weight: 300;
  width: ${(props) => props.width};
  margin-left: 1.5vw;
`;

export { GraphContainer, ProgressBar, Progress, TextP };
