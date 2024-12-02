import instance from "./instance";

export const getRecommendedReviews = async () => {
  try {
    const response = await instance.get("/api/reviews?sort=recommended");
    return response.data.slice(0, 4);
  } catch (error) {
    console.error("추천 리뷰 가져오기 실패:", error);
    throw error;
  }
};

export const getLatestReviews = async () => {
  try {
    const response = await instance.get("/api/reviews?sort=latest");
    return response.data.slice(0, 4);
  } catch (error) {
    console.error("최신 리뷰 가져오기 실패:", error);
    throw error;
  }
};
