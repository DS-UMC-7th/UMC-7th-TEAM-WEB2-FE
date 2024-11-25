import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Platform from './Platform';
import ImageUpload from './ImageUpload';
import ReviewInput from './ReviewInput';
import StarRating from './StarRating';
import CompletionTimeInput from './CompletionTimeInput';

/*const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 260px;
`;*/

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

  background-color: ${(props) =>
    props.disabled ? '#cc4e00' : props.theme.colors.main}; 
  color: ${(props) => (props.disabled ? '#fff' : '#FFF')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 124.9%; /* 38.719px */
`;



const ErrorMessage = styled.p`
  color: red;
  font-size: 11px;
  margin-top: 10px;
font-family: "Pretendard Variable";

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
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedStars, setSelectedStars] = useState([false, false, false, false, false]);
  const [selectedOption, setSelectedOption] = useState(null);
    // 개별 오류 메시지 상태
    const [lectureNameError, setLectureNameError] = useState('');
    const [instructorNameError, setInstructorNameError] = useState('');
    const [reviewError, setReviewError] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const lectureData = [
    { id: 1, name: '초보자를 위한 화초 기르기', platform: '플로스', instructor: '갸또디솔레 대표 서지현' },
    { id: 2, name: '중급자를 위한 화초 관리법', platform: '플로스', instructor: '갸또디솔레 대표 서지현' },
    { id: 3, name: '고급 화초 재배 가이드', platform: '플로스', instructor: '갸또디솔레 대표 서지현' },
  ];
  

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    // 검색 결과 필터링
    if (value.trim() !== '') {
      const filteredResults = lectureData.filter((lecture) =>
        lecture.name.includes(value)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };
    
      const handleResultClick = (result) => {
        setSearchTerm(result.name); // 검색어에 선택된 결과를 설정
        setLectureName(result.name); // 강의명 저장
        setInstructorName(result.instructor); // 강사명 자동 설정
        setSearchResults([]); // 결과 초기화
      };
      

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };


  // 실시간 강사명 유효성 검사
  const handleInstructorNameChange = (e) => {
    const value = e.target.value;
    setInstructorName(value);
    if (value.length > 10) {
      setInstructorNameError('10자 이내로 입력해주세요.');
    }  if (value.trim() === '') {
        setLectureNameError('강의명이 입력되지 않았습니다.');
      } else {
      setInstructorNameError('');
    }
  };

   // 강의평 유효성 검사
   const handleReviewChange = (e) => {
    const value = e.target.value;
    if (value.length <= 300) {
        setReview(value); 
      }
    if (value.trim() === '') {
      setReviewError('강의평이 입력되지 않았습니다.');
    } else {
      setReviewError('');
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
  

 const handleRadioClick = (option) => {
  setSelectedOption((prev) => (prev === option ? null : option)); // 라디오 선택 상태 관리
  setCompletionTime(option === selectedOption ? '' : option); // completionTime 값 설정
};


  const radioOptions = ['일주일 이내', '3달 이내', '6달 이내', '1년 이내', '아직 수강중임'];

  const handleSubmit = () => {
    if (!lectureName) setLectureNameError('강의명이 입력되지 않았습니다.');
    if (instructorName.length > 10)
      setInstructorNameError('10자 이내로 입력해주세요.');
    if (!review.trim()) setReviewError('강의평이 입력되지 않았습니다.');

    if (
      lectureName &&
      instructorName.length <= 10 &&
      review.trim() &&
      rating > 0 &&
      completionTime
    ) {
      const data = {
        lectureName,
        instructorName,
        tags,
        rating,
        review,
        uploadedImage,
        completionTime,
      };

      console.log('Form Submitted:', data);
      alert('리뷰가 성공적으로 제출되었습니다!');
      setErrorMessage('');
    }
    if (!lectureName || !instructorName || rating === 0 || !review || !completionTime) {
      setErrorMessage('* 필수 항목을 모두 입력해주세요.');
      return;
    }

    const data = {
      lectureName,
      instructorName,
      tags,
      rating,
      review,
      uploadedImage,
      completionTime,
    };

    console.log('Form Submitted:', data);
    alert('리뷰가 성공적으로 제출되었습니다!');
    setErrorMessage('');
  };

  return (
    <Container>
      <Title>강의평 등록</Title>
      <RequiredNote>
        <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 표시 항목은 필수 항목입니다.
      </RequiredNote>

      <Input
  label="강의명"
  iconSrc="/src/assets/Vector.svg"
  placeholder="강의명을 검색해주세요."
  value={searchTerm}
  onChange={handleSearchChange}
  searchResults={searchResults}
  onResultClick={handleResultClick}
/>

<Input
  label="강사명"
  iconSrc="/src/assets/Vector.svg"
  placeholder="강사명을 입력해주세요."
  value={instructorName}
  onChange={handleInstructorNameChange}
  characterLimit={10}
/>

<Platform
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
    !completionTime
  }
>
  리뷰 등록하기
</SubmitButton>

    </Container>
  );
};

export default PostForm;
