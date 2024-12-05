import React, { useState ,useCallback,useEffect  } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce'; // lodash.debounce 사용
import * as yup from 'yup';
import Input from './Input';
import Platform from './Platform';
import ImageUpload from './ImageUpload';
import ReviewInput from './ReviewInput';
import StarRating from './StarRating';
import axios from 'axios';
import CompletionTimeInput from './CompletionTimeInput';
import { searchLecture, registerLecture, submitReview } from '../../utils/api/api';


const Container = styled.div`
 display: flex;
  flex-direction: column;
  margin: 0 auto;
 padding: 7rem 30rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 30px;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 124.9%;
  font-family: 'Elice DX Neolli', sans-serif;
`;

const RequiredNote = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-family: 'Elice DX Neolli';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
  margin-bottom: 25px;
  text-align: right;
`;


const Icon = styled.img`
  width: 9px;
  height: 10.145px;
  margin-right: 13px;
`;


const SubmitButton = styled.button`
  display: block;
  height: 55px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  color:${({ theme }) => theme.colors.white};
 background-color:${({ theme }) => theme.colors.main};
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 124.9%; /* 38.719px */
`;
const ErrorMessage = styled.p`
  position: flex;
  color: red;
  font-size: 12px;
 
`;


const PostForm = () => {
  const [lectureName, setLectureName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [completionTime, setCompletionTime] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedStars, setSelectedStars] = useState([false, false, false, false, false]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

 
  const [instructorNameError, setInstructorNameError] = useState('');
  const [reviewError, setReviewError] = useState('');

  const [selectedLectureId, setSelectedLectureId] = useState(null);
  const [file, setFile] = useState(null); // 업로드된 파일 상태

  const [isManualInput, setIsManualInput] = useState(false); // 직접 입력 여부

  const [lectureId, setLectureId] = useState(null); // 강의 ID 저장
  const [isLectureSubmitted, setIsLectureSubmitted] = useState(false); // 강의 등록 여부

  const [isSearchVisible, setIsSearchVisible] = useState(true); // 검색 결과 표시 상태
  const [registeredLectures, setRegisteredLectures] = useState([]); // 등록된 강의 목록
  const [lectureNameError, setLectureNameError] = useState('');



  const handleLectureNameChange = (e) => {
    const value = e.target.value.trim();
    setLectureName(value);
  
    if (isManualInput) {
      // 중복 확인
      const isDuplicate = registeredLectures.some(
        (lecture) => lecture.name === value
      );
  
      if (isDuplicate) {
        setLectureNameError('이미 등록된 강의명입니다.');
      } else {
        setLectureNameError('');
      }
    } else {
      setLectureNameError(''); // 직접입력 모드가 아니면 에러 메시지 초기화
    }
  };
  

 // Yup validation schema
 const schema = yup.object().shape({
  lectureName: yup.string().required('강의명을 입력해주세요.'),
  instructorName: yup.string().required('강사명을 입력해주세요.'),
  review: yup.string().required('강의평이 입력되지 않았습니다.'),
});

const validateField = async (field, value, setError) => {
  try {
    await schema.validateAt(field, { [field]: value });
    setError(''); // 유효하면 에러 메시지 초기화
  } catch (error) {
    setError(error.message); // 유효하지 않으면 에러 메시지 설정
  }
};



const handleManualInputClick = () => {
  setIsManualInput(true); // 수동 입력 모드 활성화
  setLectureName(''); // 강의명 초기화
  setInstructorName(''); // 강사명 초기화
  setTags([]); // 태그 초기화
  setSelectedLectureId(null); // 기존 선택된 강의 초기화
  setIsSearchVisible(false); // 검색 결과 숨기기
};




const handleSearch = useCallback(
  debounce(async (value) => {
    try {
      if (!isManualInput && value) { // 직접입력 모드가 아니고 검색어가 있을 경우에만 실행
        const response = await searchLecture(value); // `/api/search` 호출
        if (response.data.isSuccess) {
          const { lectureId, lectureName, platform, teacher } = response.data.result;
          setSearchResults([
            {
              lectureId,
              name: lectureName,
              platform,
              instructor: teacher,
            },
          ]);
        } else {
          setSearchResults([]); // 검색 실패 시 빈 배열
        }
      } else {
        setSearchResults([]); // 검색어가 비어있으면 결과 초기화
      }
    } catch (error) {
      console.error('검색 실패:', error.response?.data || error.message);
      setSearchResults([]);
    }
  }, 500), // 디바운스 500ms
  [isManualInput] // 직접입력 모드 상태를 의존성에 추가
);


useEffect(() => {
  if (
    isManualInput &&
    lectureName &&
    instructorName &&
    tags.length > 0 &&
    !lectureNameError // 강의명 중복 에러가 없을 때만 실행
  ) {
    handleLectureSubmit();
  }
}, [lectureName, instructorName, tags, isManualInput, lectureNameError]);

useEffect(() => {
  const fetchRegisteredLectures = async () => {
    try {
      const response = await axios.get('http://52.78.171.209:8080/api/lectures'); // 서버에서 모든 강의 정보 가져오기
      if (response.data.isSuccess) {
        // 응답 데이터를 바로 setRegisteredLectures로 설정
        setRegisteredLectures(
          response.data.result.map((lecture) => ({
            id: lecture.lectureId,
            name: lecture.lectureName,
            teacher: lecture.teacher,
          }))
        );

        console.log("Registered lectures fetched:", response.data.result); // 확인용 로그
      } else {
        console.error("Failed to fetch lectures:", response.data.message);
      }
    } catch (error) {
      console.error('등록된 강의 목록을 가져오는 중 오류 발생:', error.response?.data || error.message);
    }
  };

  fetchRegisteredLectures();
}, []);

useEffect(() => {
  if (isLectureSubmitted && lectureId) {
    setSelectedLectureId(lectureId);
  }
}, [isLectureSubmitted, lectureId]);







const handleTagKeyDown = (e) => {
  if (e.key === 'Enter' && tagInput.trim() !== '') {
    e.preventDefault();
    setTags((prevTags) => [...prevTags, tagInput.trim()]);
    setTagInput('');
  }
};


/*const handleLectureNameChange = (e) => {
  const value = e.target.value;
  setLectureName(value);
  validateField('lectureName', value, setLectureNameError); // 실시간 유효성 검사
};*/


const handleInstructorNameChange = (e) => {
  const value = e.target.value;
  setInstructorName(value);
  validateField('instructorName', value, setInstructorNameError); // 실시간 유효성 검사
};

const handleReviewChange = (e) => {
  const value = e.target.value;
  setReview(value);
  validateField('review', value, setReviewError); // 실시간 유효성 검사
};


const handleResultClick = (result) => {
  console.log("Selected lecture result:", result); // 디버깅: 선택된 강의 정보
  setLectureName(result.name); // 강의명 설정
  setInstructorName(result.instructor); // 강사명 설정
  setTags([result.platform]); // 플랫폼 설정
  setSelectedLectureId(result.lectureId); // 검색된 강의 ID 설정
  setSearchResults([]); // 검색 결과 초기화
  setIsManualInput(false); // 수동 입력 비활성화
  setIsSearchVisible(false); // 검색 결과 숨기기
};


  
  const lectureData = [
    { id: 1, name: '초보자를 위한 화초 기르기', platform: '플로스', instructor: '갸또디솔레 대표 서지현' },
    { id: 2, name: '중급자를 위한 화초 관리법', platform: '플로스', instructor: '갸또디솔레 대표 서지현' },
    { id: 3, name: '고급 화초 재배 가이드', platform: '플로스', instructor: '갸또디솔레 대표 서지현' },
  ];
  


  const handleSearchChange = (e) => {
    const value = e.target.value.trim();
    setSearchTerm(value);
    setIsSearchVisible(true); // 검색 결과 다시 표시
    handleSearch(value); // Debounced 검색 실행
  };
  

  


  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile); // 브라우저 미리보기 URL 생성
      setUploadedImage(fileUrl); // 미리보기 설정
      setFile(selectedFile); // 실제 파일 저장
    }
  };
  

  



  const handleStarClick = (index) => {
    setSelectedStars((prevStars) =>
      prevStars.map((selected, i) => {
        if (i === index) {
          return !selected; // 클릭된 별의 선택 상태를 반전
        }
        if (i > index) {
          return false; // 클릭한 별 이후는 선택 해제
        }
        return true; // 클릭한 별 이전은 선택 유지
      })
    );
  
    setRating((prevRating) =>
      selectedStars[index] ? prevRating - 1 : index + 1 // 선택 상태에 따라 별점 변경
    );
  };

  const handleTagRemove = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  
  const handleRadioClick = (optionValue) => {
    setSelectedOption((prev) => (prev === optionValue ? null : optionValue)); // 선택된 옵션 값 설정
    setCompletionTime((prev) => (prev === optionValue ? '' : optionValue)); // `completionTime` 업데이트
  };
  

const radioOptions = [
  { label: "일주일 이내", value: "A_WEEK" },
  { label: "3달 이내", value: "THREE_MONTH" },
  { label: "6달 이내", value: "SIX_MONTH" },
  { label: "1년 이내", value: "A_YEAR" },
  { label: "아직 수강중임", value: "STILL_ENROLLING" },
];



 
const handleLectureSubmit = async () => {
  try {
    if (lectureNameError) {
      alert('이미 등록된 강의명입니다. 강의명을 다시 확인해주세요.');
      return null;
    }

    if (!lectureName || !instructorName || tags.length === 0) {
      alert('강의명, 강사명, 플랫폼을 입력해주세요.');
      return null;
    }

    const lectureData = {
      name: lectureName,
      teacher: instructorName,
      platform: tags[0]?.toUpperCase(),
      category: null,
      level: null,
      image: file || null,
    };

    const registerResponse = await registerLecture(lectureData);

    const lectureId = registerResponse.result?.lectureId;
    if (!lectureId) {
      throw new Error('강의 등록 후 반환된 lectureId가 없습니다.');
    }

    setRegisteredLectures((prevLectures) => [
      ...prevLectures,
      { id: lectureId, name: lectureName, teacher: instructorName },
    ]);

    setLectureId(lectureId);
    setSelectedLectureId(lectureId);
    setIsLectureSubmitted(true);

    alert('강의 정보가 등록되었습니다.');
    return lectureId; // 성공적으로 등록된 lectureId 반환
  } catch (error) {
    console.error('강의 등록 실패:', error.response?.data || error.message);
    alert('강의 등록 중 오류가 발생했습니다.');
    return null; // 실패 시 null 반환
  }
};

const handleSubmit = async () => {
  try {
    await schema.validate(
      { lectureName, instructorName, review },
      { abortEarly: false }
    );

    let lectureId = selectedLectureId; // 검색 또는 등록된 lectureId 사용

    if (!lectureId && isManualInput) {
      const lectureResponse = await registerLecture({
        name: lectureName,
        teacher: instructorName,
        platform: tags[0],
        category: null,
        level: null,
      });
      lectureId = lectureResponse.result.lectureId; // 등록된 강의 ID
    }

    // 리뷰 등록 요청
    const reviewData = {
      rating,          // 숫자
      content: review, // 문자열
      studyTime: completionTime, // 이미 올바른 value 값
      lectureId: selectedLectureId,       // 검색 또는 등록된 lectureId 사용
      image: file,     // 파일 객체
    };

    console.log("Sending review data to API:", reviewData);

    const response = await submitReview(reviewData);

    console.log("Review submitted successfully:", response);
    alert('리뷰가 성공적으로 등록되었습니다!');
  } catch (error) {
    console.error('리뷰 등록 실패:', error.response?.data || error.message);
    if (error.response?.data?.message) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage('리뷰 등록 중 문제가 발생했습니다.');
    }
  }
};


  
  
  return (
    <Container>
      <Title>강의평 등록</Title>
      <RequiredNote>
        <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 표시 항목은 필수 항목입니다.
      </RequiredNote>

      <Input
  label={`강의명${isManualInput ? " (직접입력)" : ""}`}
  iconSrc="/src/assets/Vector.svg"
  placeholder={isManualInput ? "강의명을 입력해주세요." : "강의명을 검색해주세요."}
  value={isManualInput ? lectureName : searchTerm}
  
  onResultClick={!isManualInput ? handleResultClick : undefined}
  searchResults={!isManualInput ? searchResults : []}
  variant="lecture"
  onManualInputClick={!isManualInput ? handleManualInputClick : undefined}
  isManualInput={isManualInput}
  setIsSearchVisible={setIsSearchVisible} // 추가
  isSearchVisible={isSearchVisible && !isManualInput}
  error={isManualInput ? lectureNameError : ''}
  onChange={isManualInput ? handleLectureNameChange : handleSearchChange}

/>


<Input
 label={`강사명${isManualInput ? " (직접입력)" : ""}`}
  iconSrc="/src/assets/Vector.svg"
   placeholder={isManualInput ? "강사명을 입력해주세요." : "강사명을 입력해주세요."}
  value={instructorName}
  onChange={handleInstructorNameChange}
  characterLimit={10}
  error={instructorNameError}
/>


<Platform
label={`플랫폼${isManualInput ? " (직접입력)" : ""}`}
  tagInput={tagInput}
  onTagInputChange={(e) => setTagInput(e.target.value)}
  onTagKeyDown={handleTagKeyDown}
  tags={tags}
  onTagRemove={handleTagRemove}
/>

<ImageUpload
  uploadedImage={uploadedImage}
  onImageUpload={handleImageUpload}
/>

<StarRating
  selectedStars={selectedStars}
  rating={rating}
  onStarClick={handleStarClick}
/>

<ReviewInput
  review={review}
  onReviewChange={handleReviewChange}
  reviewError={reviewError}
/>


<CompletionTimeInput
  selectedOption={selectedOption}
  onOptionClick={handleRadioClick}
  radioOptions={radioOptions}
/>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <SubmitButton
  onClick={handleSubmit}
  disabled={
    !lectureName || 
    !instructorName || 
    rating === 0 || 
    !review.trim() || 
    !completionTime || 
    !!lectureNameError // 에러가 있으면 비활성화
  }
>
  리뷰 등록하기
</SubmitButton>

    </Container>
  );
};

export default PostForm;
