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
  try {
    // FormData 객체 생성
    const formData = new FormData();

    // 강의 데이터 JSON을 Blob으로 변환하여 추가
    const dataWithDefaults = {
      name: lectureData.name || "",
      teacher: lectureData.teacher || "",
      platform: lectureData.platform || "",
      category: lectureData.category || null, // category 기본값 null
      level: lectureData.level || null, // level 기본값 null
    };
    formData.append('lectureRequest', new Blob([JSON.stringify(dataWithDefaults)], { type: 'application/json' }));

    // 이미지 처리 (이미지 파일이 있으면 추가, 없으면 빈 문자열로 추가)
    if (lectureData.image) {
      formData.append('image', lectureData.image); // 이미지 파일 추가
    } else {
      formData.append('image', ""); // 이미지 없는 경우 빈 문자열 추가
    }

    // API 요청
    const response = await apiClient.post('/api/lectures', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('강의 등록 실패:', error.response?.data || error.message);
    throw error;
  }
};



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
