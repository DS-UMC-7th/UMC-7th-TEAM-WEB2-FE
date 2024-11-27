import { GraphContainer, Progress, ProgressBar, TextP } from "./Graph.style";

const GraphBar = ({ text, review, count }) => {
  return (
    <GraphContainer>
      <TextP width={"100px"}>{text}</TextP>
      <ProgressBar>
        <Progress reviewCount={review} count={count} />
      </ProgressBar>
      <TextP width={"30px"}>{count}</TextP>
    </GraphContainer>
  );
};

export default GraphBar;
