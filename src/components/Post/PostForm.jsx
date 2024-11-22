import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 260px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 20px;
  font-size: 48px;
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
  margin-bottom: 15px;
  text-align: right;
`;

const Section = styled.div`
  margin-bottom: 106px;
  position: relative;
`;

const Icon = styled.img`
  width: 9px;
  height: 10.145px;
  margin-right: 13px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  display: block;
  margin-bottom: 13px;
  font-family: 'Elice DX Neolli';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
`;

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
    height:45px;
  padding: 15px 16px;
  font-family: 'Pretendard Variable';
  font-weight: 300;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: #fff;
  box-shadow: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
font-size: 20px;
font-style: normal;
font-family: 'Pretendard Variable';
  font-weight: 300;
line-height: 124.9%; /* 24.98px */
letter-spacing: 0.4px;
  }

  &:focus {
    outline: none; /* 기본 outline 제거 */
    border-color: ${({ theme }) => theme.colors.main}; /* 테두리 색상 유지 */
    box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;


const PlaceholderText = styled.span`
  position: absolute;
  right: 16px;
  color: ${({ theme }) => theme.colors.main};
  font-family: 'Pretendard Variable';
  font-size:20px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 34px;
`;

const Tag = styled.span`
border-radius: 20px;
border: 1px solid  ${({ theme }) => theme.colors.main};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color:  ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};

font-family: "Elice DX Neolli";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
  cursor: pointer;

`;

const TagDeleteButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

font-family: "Elice DX Neolli";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;


const AddImageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 25px;
  background-color:  ${({ theme }) => theme.colors.white};
border: 1px dashed  ${({ theme }) => theme.colors.main};
  display: flex;
width: 160px;
height: 160px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;

color:  ${({ theme }) => theme.colors.black};
font-family: "Elice DX Neolli";
font-size: 64px;
font-style: normal;
font-weight: 300;
line-height: 124.9%; /* 79.936px */

&:focus {
    border: 1px solid  ${({ theme }) => theme.colors.main};
 
  }
`;

const StarRating = styled.div`
gap:5px;
  display: flex;
align-items: flex-end;
align-self: stretch;
`;


const Star = styled.span`
  width: 46px;
  height: 48px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Count=styled.span`
color: ${({ theme }) => theme.colors.black};
font-family: "Elice DX Neolli";
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 124.9%; /* 39.968px */
margin-left:36px;
`;

const StyledTextareaContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 316px;
  padding: 28px 20px;
  border: none;
  border-radius: 10px;
  background: #fff6eb;
  resize: none; 
  outline: none;
 box-shadow: none;
  overflow-wrap: break-word; 
  word-break: break-word; 
  white-space: pre-wrap; 
  color: #232323;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 157%; /* 28.26px */
  letter-spacing: 0.36px;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none; /* 기본 outline 제거 */
    border-color: ${({ theme }) => theme.colors.main}; /* 테두리 색상 유지 */
    box-shadow: none; /* 추가적인 효과 제거 */
  }
`;


const CharacterCount = styled.span`
  position: absolute;
  bottom: 10px;
  left: 28px;
  font-family: "Pretendard Variable";
  color: #888;
text-align: justify;
leading-trim: both;
text-edge: cap;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 157%; /* 28.26px */
letter-spacing: 0.36px;
`;


const RadioGroup = styled.div`
margin-top:15px;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
   margin-bottom: 30px;

  img {
    width: 24px; 
    height: 24px;
  }

  span {
    color: #000;
    font-family: 'Pretendard Variable';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 124.9%; /* 27.478px */
margin-left:23px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  height: 76px;
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
  font-size: 31px;
  font-style: normal;
  font-weight: 800;
  line-height: 124.9%; /* 38.719px */
`;



const ErrorMessage = styled.p`
  color: red;
  font-size: 15px;
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

  const handleLectureNameChange = (e) => {
    const value = e.target.value;
    setLectureName(value);
    if (value.trim() === '') {
      setLectureNameError('강의명이 입력되지 않았습니다.');
    } else {
      setLectureNameError('');
    }
  };
  // 실시간 강사명 유효성 검사
  const handleInstructorNameChange = (e) => {
    const value = e.target.value;
    setInstructorName(value);
    if (value.length > 10) {
      setInstructorNameError('10자 이내로 입력해주세요.');
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
      prevStars.map((selected, i) => (i <= index ? true : false)) // 선택된 별 갯수 반영
    );
    setRating(index + 1); 
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

      <Section>
        <Label>
          <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 강의명
        </Label>
        <StyledInputContainer>
          <StyledInput
            placeholder="강의명을 입력해주세요."
            value={lectureName}
            onChange={handleLectureNameChange}
          />
          {!lectureName && <PlaceholderText>직접 입력하기</PlaceholderText>}
        </StyledInputContainer>
        {lectureNameError && <ErrorMessage>{lectureNameError}</ErrorMessage>}
      </Section>

      <Section>
  <Label>
    <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 강사명
  </Label>
  <StyledInputContainer>
    <StyledInput
      placeholder="강사명을 입력해주세요."
      value={instructorName}
      onChange={handleInstructorNameChange}
    />
    <PlaceholderText>{`${instructorName.length}/10`}</PlaceholderText>
  </StyledInputContainer>
  {instructorNameError && (
          <ErrorMessage>{instructorNameError}</ErrorMessage>
        )}
</Section>


      <Section>
        <Label>
          <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 플랫폼
        </Label>
        <StyledInputContainer>
          <StyledInput
            placeholder="플랫폼을 입력해주세요."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
          />
          <img src="/src/assets/search.svg" alt="검색" style={{ position: 'absolute', right: 16 }} />
        </StyledInputContainer>
        <TagList>
          {tags.map((tag, index) => (
            <Tag key={index}>
            {tag}
            <TagDeleteButton onClick={() => handleTagRemove(index)}>✕</TagDeleteButton>
          </Tag>
          
          ))}
        </TagList>
      </Section>

      <Section>
        <Label>강의 사진 등록</Label>
        <AddImageButton>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          +
        </AddImageButton>
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" width="100px" />}
      </Section>

      <Section>
        <Label>
          <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 별점
        </Label>
        <StarRating>
        {selectedStars.map((isSelected, index) => (
            <Star
              key={index}
              selected={index < rating}
              onClick={() => handleStarClick(index)}
            >
              <img
                src={
                  isSelected
                    ? '/src/assets/star_select.svg' // 선택된 별
                    : '/src/assets/star.svg' // 선택되지 않은 별
                }
                alt="별"
              />
            </Star>
          ))}
          <Count>{selectedStars.filter(Boolean).length}/5</Count>
        </StarRating>
      </Section>

      <Section>
        <Label>
          <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 강의평
        </Label>
        <StyledTextareaContainer>
      <StyledTextarea
        placeholder="강의에 대한 후기를 작성해주세요. 욕설, 비하적인 말은 지양해주세요."
        maxLength={300}
        value={review}
        onChange={handleReviewChange}
        
      />
      <CharacterCount>
        {review.length}/300
      </CharacterCount>
    </StyledTextareaContainer>
    {reviewError && <ErrorMessage>{reviewError}</ErrorMessage>}
      </Section>

      <Section>
        <Label>
          <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 강의를 다 듣는데 얼마나 걸렸나요?
        </Label>
        <RadioGroup>
        {radioOptions.map((option, index) => (
          <RadioOption key={index} onClick={() => handleRadioClick(option)}>
            <img
              src={
                selectedOption === option
                  ? '/src/assets/radio_select.svg' // 선택된 상태
                  : '/src/assets/radio.svg' // 선택되지 않은 상태
              }
              alt="라디오 버튼"
            />
            <span>{option}</span>
          </RadioOption>
        ))}
      </RadioGroup>
      </Section>

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
