import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Vite 환경 변수 사용
});

// 강의 검색 API
export const searchLecture = async (keyword) => {
  const response = await apiClient.get('api/search', {
    params: { keyword }, // 쿼리 파라미터 전달
  });
  return response;
};

export const registerLecture = async (lectureData) => {
  const response = await apiClient.post('/api/lectures', lectureData, {
    headers: {
      'Content-Type': 'application/json', // 명세에 따른 JSON 요청
    },
  });
  return response.data;
};

/*export const submitReview = async ({ rating, content, studyTime, lectureId, image }) => {
  if (!image) {
    // JSON 요청 처리 (이미지 없는 경우)
    const response = await apiClient.post('/api/reviews', {
      rating,
      content,
      studyTime,
      lectureId,
    });
    return response.data;
  } else {
    // multipart/form-data 요청 처리 (이미지 있는 경우)
    const formData = new FormData();

    // JSON 데이터를 Blob으로 변환하여 FormData에 추가
    const reviewBlob = new Blob(
      [JSON.stringify({ rating, content, studyTime, lectureId })],
      { type: 'application/json' }
    );
    formData.append('review', reviewBlob);

    // 이미지 파일 추가
    formData.append('image', image);

    // API 요청
    const response = await apiClient.post('/api/reviews', formData);

    return response.data;
  }
};*/

export const submitReview = async ({ rating, content, studyTime, lectureId, image }) => {
  const formData = new FormData();

  // JSON 데이터를 Blob으로 변환하여 FormData에 추가
  const reviewBlob = new Blob(
    [JSON.stringify({ rating, content, studyTime, lectureId })],
    { type: 'application/json' }
  );
  formData.append('review', reviewBlob);

  // 이미지가 존재하면 추가, 없으면 null로 처리
  if (image) {
    formData.append('image', image);
  } else {
    formData.append('image', null); // 이미지 없는 경우 null로 처리
  }

  // API 요청
  const response = await apiClient.post('/api/reviews', formData);

  return response.data;
};
