import { useState } from "react";
import Card from "../Card/Card";
import { ReviewsContainer, SortBtn, Span } from "./DetailReviews.style";
import CustomSelect from "../../Select/CustomSelect";

const DetailReviews = () => {
  const [order, setOrder] = useState("recommended");

  const reviews = [
    {
      selectedStars: [true, true, true, true, false],
      date: "2024.05.30",
      studyDate: "일주일 이내",
      content:
        "좋았던 부분이 정말 너무 많지만 그중 최고는 전적으로 모든 배움의 과정을 스스로 경험할 수 있다는 점이었습니다! 대부분의 클래스가 기본적인 레시피를 제공하긴 하지만, 대개 수업 시간을 고려해 미리 조색을 해놓는 등 수강생 입장에선 처음에 이해가 되어도 돌아서면 잘 감이 잡히지 않는 과정으로 운영되는 경우가 많은데요. 작업 시간, 농도나 점도, 색감 등 실무에서 제품에 정말 큰 영향을 주는 감각들을 1부터 10까지 꼼꼼하게 경험할 수 있었습니다. 이 업계에 입문하며 정말 많은 배움을 얻어간 선생님의 수업이기에 강추합니다!",
    },
    {
      selectedStars: [true, true, false, false, false],
      date: "2024.05.20",
      studyDate: "일주일 이내",
      content:
        "전국 또는 세계 각지에서 오는 수강생들이 모두 레벨이 다를 텐데도, 이를 굉장히 빨리 캐치하시고 편하게 수업을 들을 수 있도록 배려해 주시는 모습이 무엇보다 인상 깊었습니다. 손이 느려도 급하지 않게 모든 과정을 꼼꼼하게 알려주시고요. 모든 과정을 스킵 없이 제 힘으로 해낼 수 있게 도와주시기 때문에 복습을 하기도 무척 수월했고 덕분에 지인들 선물이나 명절 디저트로 화과자를 내놓게 될 수도 있었습니다. 다음엔 선생님의 어떤 수업을 들을 수 있을까 설레네요.",
    },
    {
      selectedStars: [true, true, true, false, false],
      date: "2024.04.30",
      studyDate: "일주일 이내",
      content:
        "작년 겨울 선생님의 수업을 듣고 3개월 만에 가게를 오픈하게 될 수 있었습니다. 벌써 1년째 무사히 운영을 하며, 색감 표현하는 법도 몰랐던 제가 혼자서 조색을 하고, 화과자를 만드는 시간을 너무 행복하게 느끼며 하루하루 새로이 살아가고 있습니다. 선생님의 감사함을 항상 잊지 않으며, 덕분에 화과자라는 업종을 알게 되어서 정말 행복하다는 말씀 드리고 싶어요",
    },
    {
      selectedStars: [true, false, false, false, false],
      date: "2024.04.20",
      studyDate: "일주일 이내",
      content:
        "작년 겨울 선생님의 수업을 듣고 3개월 만에 가게를 오픈하게 될 수 있었습니다. 벌써 1년째 무사히 운영을 하며, 색감 표현하는 법도 몰랐던 제가 혼자서 조색을 하고, 화과자를 만드는 시간을 너무 행복하게 느끼며 하루하루 새로이 살아가고 있습니다. 선생님의 감사함을 항상 잊지 않으며, 덕분에 화과자라는 업종을 알게 되어서 정말 행복하다는 말씀 드리고 싶어요",
    },
  ];

  // 정렬
  const sortedReview =
    order === "latest"
      ? [...reviews].sort((a, b) => new Date(a.date) - new Date(b.date)) // 최신순
      : [...reviews].sort((a, b) => b.selectedStars.filter((star) => star).length - a.selectedStars.filter((star) => star).length); // 추천순

  return (
    <>
      <ReviewsContainer>
        <div>
          <SortBtn>
            <Span onClick={() => setOrder("recommended")} isActive={order === "recommended"}>
              추천순
            </Span>
          </SortBtn>
          <Span>|</Span>
          <SortBtn>
            <Span onClick={() => setOrder("latest")} isActive={order === "latest"}>
              최신순
            </Span>
          </SortBtn>
        </div>
        <div>
          <CustomSelect />
        </div>
      </ReviewsContainer>

      <div style={{ width: "100%" }}>
        {sortedReview.map((review, index) => (
          <Card key={index} selectedStars={review.selectedStars} date={review.date} studyDate={review.studyDate} content={review.content} />
        ))}
      </div>
    </>
  );
};

export default DetailReviews;
