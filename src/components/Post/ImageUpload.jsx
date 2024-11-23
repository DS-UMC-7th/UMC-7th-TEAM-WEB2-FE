import React, { useRef } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 106px;
  position: relative;
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

const AddImageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px dashed ${({ theme }) => theme.colors.main};
  width: 160px;
  height: 160px;
  padding: 10px;
  gap: 10px;
  flex-shrink: 0;
  position: relative;

  color: ${({ theme }) => theme.colors.black};
  font-family: 'Elice DX Neolli';
  font-size: 64px;
  font-style: normal;
  font-weight: 300;
  line-height: 124.9%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.main};
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover; /* 이미지를 버튼 크기에 맞게 조정 */
  border-radius: 4px; /* 버튼과 일치하는 모서리 둥글기 */
`;


const ImageUpload = ({ uploadedImage, onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // 숨겨진 input 클릭 트리거
  };

  return (
    <Section>
      <Label>강의 사진 등록</Label>
      <AddImageButton onClick={handleButtonClick}>
        {uploadedImage && <UploadedImage src={uploadedImage} alt="Uploaded" />}
        {!uploadedImage && '+'}
      </AddImageButton>
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onImageUpload}
      />
    </Section>
  );
};

export default ImageUpload;
