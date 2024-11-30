import GraphBar from "./GraphBar";

const Graph = ({ review, count }) => {
  return (
    <>
      <GraphBar text={"아주 좋아요"} review={review} count={10} />
      <GraphBar text={"맘에 들어요"} review={review} count={9} />
      <GraphBar text={"보통이에요"} review={review} count={5} />
      <GraphBar text={"그냥 그래요"} review={review} count={2} />
      <GraphBar text={"별로예요"} review={review} count={0} />
    </>
  );
};

export default Graph;
