import axios from 'axios';

// 기본 axios 설정 (Base URL 추가)
const apiClient = axios.create({
  baseURL: 'http://52.78.171.209:8080', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// 강의 검색 API
export const searchLecture = (query) => apiClient.get(`/api/search?query=${query}`);

// 강의 등록 API
export const registerLecture = (lectureData) => apiClient.post('/api/lectures', lectureData);

// 리뷰 등록 API
export const submitReview = (reviewData) => apiClient.post('/api/reviews', reviewData);
