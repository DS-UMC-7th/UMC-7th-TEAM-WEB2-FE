import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #000;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
`;

const RequiredNote = styled.p`
  font-size: 14px;
  color: #ff6f00;
  margin-bottom: 40px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #ff6f00;
  display: block;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #ff6f00;
    box-shadow: 0 0 0 2px rgba(255, 111, 0, 0.2);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #ff6f00;
    box-shadow: 0 0 0 2px rgba(255, 111, 0, 0.2);
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Tag = styled.span`
  background-color: #f1f1f1;
  color: #333;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const AddImageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px dashed #ddd;
  border-radius: 10px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    border-color: #ff6f00;
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Star = styled.span`
  font-size: 24px;
  color: ${(props) => (props.selected ? '#ff6f00' : '#ddd')};
  cursor: pointer;

  &:hover,
  &:hover ~ span {
    color: #ff6f00;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  cursor: pointer;

  input {
    accent-color: #ff6f00;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) => (props.disabled ? '#ddd' : '#ff6f00')};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ddd' : '#e65e00')};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const PostForm = () => {
  const [lectureName, setLectureName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [platform, setPlatform] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [completionTime, setCompletionTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    if (!lectureName || !instructorName || !platform || rating === 0 || !review || !completionTime) {
      setErrorMessage('* 필수 항목을 모두 입력해주세요.');
      return;
    }

    const data = {
      lectureName,
      instructorName,
      platform,
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
      <RequiredNote>* 표시 항목은 필수 항목입니다.</RequiredNote>

      <Section>
        <Label>강의명 *</Label>
        <StyledInput
          placeholder="강의명을 입력해주세요."
          value={lectureName}
          onChange={(e) => setLectureName(e.target.value)}
        />
      </Section>

      <Section>
        <Label>강사명 *</Label>
        <StyledInput
          placeholder="강사명을 입력해주세요."
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
        />
      </Section>

      <Section>
        <Label>플랫폼 *</Label>
        <StyledInput
          placeholder="플랫폼을 입력해주세요."
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <StyledInput
          placeholder="태그를 입력 후 Enter를 누르세요."
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
        />
        <TagList>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
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
        <Label>평점 *</Label>
        <StarRating>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              selected={index < rating}
              onClick={() => handleRatingClick(index)}
            >
              ★
            </Star>
          ))}
          <span>{rating}/5</span>
        </StarRating>
      </Section>

      <Section>
        <Label>강의평 *</Label>
        <StyledTextarea
          placeholder="강의평을 작성해주세요."
          rows="5"
          maxLength={300}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </Section>

      <Section>
        <Label>강의를 다 듣는데 얼마나 걸렸나요? *</Label>
        <RadioGroup>
          {['일주일 이내', '3달 이내', '6달 이내', '1년 이내', '아직 수강중임'].map((option) => (
            <RadioOption key={option}>
              <input
                type="radio"
                name="completionTime"
                value={option}
                onChange={(e) => setCompletionTime(e.target.value)}
              />
              {option}
            </RadioOption>
          ))}
        </RadioGroup>
      </Section>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <SubmitButton
        onClick={handleSubmit}
        disabled={
          !lectureName || !instructorName || !platform || rating === 0 || !review || !completionTime
        }
      >
        리뷰 등록하기
      </SubmitButton>
    </Container>
  );
};

export default PostForm;
