import GraphBar from "./GraphBar";

const Graph = ({ review, count }) => {
  // 별점별 개수
  const [veryGood, good, average, bad, veryBad] = count;

  return (
    <>
      <GraphBar text={"아주 좋아요"} review={review} count={veryGood} />
      <GraphBar text={"맘에 들어요"} review={review} count={good} />
      <GraphBar text={"보통이에요"} review={review} count={average} />
      <GraphBar text={"그냥 그래요"} review={review} count={bad} />
      <GraphBar text={"별로예요"} review={review} count={veryBad} />
    </>
  );
};

export default Graph;
