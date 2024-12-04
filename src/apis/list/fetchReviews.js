import instance from "../home/instance";
import { categoryMap, difficultyMap, durationMap, sortMap } from "../../utils/constants/listConstants";

/**
 * @param {Object} filters -
 * @param {string} filters.category
 * @param {string} filters.level
 * @param {string} filters.studyTime
 * @param {string} filters.sort
 * @returns {Promise<Array>}
 */
export const fetchReviews = async (filters, sortOrder) => {
  try {
    const params = {
      category: categoryMap[filters.category],
      level: difficultyMap[filters.difficulty],
      studyTime: durationMap[filters.duration],
      sort: sortMap[sortOrder],
    };

    const { data } = await instance.get("/api/reviews", { params });
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
