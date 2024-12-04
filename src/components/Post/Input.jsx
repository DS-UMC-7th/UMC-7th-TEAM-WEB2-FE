import React from 'react';
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
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
`;

const Icon = styled.img`
  width: 9px;
  height: 10.145px;
  margin-right: 13px;
`;

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;



const StyledInput = styled.input`
  width: 100%;
  font-size: 14px; /* 반응형 글꼴 크기 */
  height: 3.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: #fff;
  box-shadow: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
    box-shadow: none; /* 시각적 강조 */
    outline: none; 
  }
`;


const SearchResultContainer = styled.div`
  margin-top: 4px;
  position: absolute;
  left: 0;
  top: calc(100% + 4px);
  width: 99.9%;
  max-height: 250px;
  overflow-y: auto;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: var(--WHITE, #fff);
  box-shadow: none;
  
`;

const SearchResultItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
  color: #3f3f3f;
  font-family: 'Pretendard Variable';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 124.9%;
  letter-spacing: 0.4px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

/*const PlaceholderText = styled.span`
  position: absolute;
  right: 16px;
  color: ${({ theme }) => theme.colors.main};
  font-family: 'Pretendard Variable';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
`;*/

const PlaceholderText = styled.span`
  position: absolute;
  right: 16px;
  color: ${({ theme }) => theme.colors.main};
  font-family: 'Pretendard Variable';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
cursor: pointer; /* 클릭 가능하도록 */
  transition: opacity 0.2s ease-in-out;
`;

const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px; /* 입력 필드 바로 아래에 표시 */
  left: 0;
  color: red;
  font-size: 12px;
  margin: 0; /* 불필요한 여백 제거 */
  font-family: 'Pretendard Variable';
`;



const Input = ({
  label,
  iconSrc,
  placeholder,
  value,
  onChange,
  searchResults = [],
  onResultClick,
  tagInput,
  onTagInputChange,
  onTagKeyDown,
  tags = [],
  onTagRemove,
  characterLimit,
  error,
  variant,
  onManualInputClick, // 직접 입력하기 클릭 핸들러
  isManualInput,
  isSearchVisible,
}) => {
  return (
    <Section>
      <Label>
        <Icon src={iconSrc} alt="필수 항목" />
        {label}
      </Label>
      <StyledInputContainer>
  <StyledInput
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
  {variant === 'lecture' && (
 <PlaceholderText onClick={onManualInputClick}>직접 입력하기</PlaceholderText>

        )}
  {error && <ErrorMessage>{error}</ErrorMessage>} {/* 에러가 있을 때만 렌더링 */}
  {characterLimit && (
    <PlaceholderText>{`${value.length}/${characterLimit}`}</PlaceholderText>
  )}
 {!isManualInput &&isSearchVisible&&searchResults.length > 0 && (
  <SearchResultContainer>
  {searchResults.map((result, index) => (
    <SearchResultItem
      key={index} // key 추가
      onClick={() => onResultClick(result)} // 클릭 시 실행
    >
      {result.name}
      <br />
      <div style={{ fontSize: '14px', color: '#888' }}>
        {result.platform} | {result.instructor}
      </div>
    </SearchResultItem>
  ))}
</SearchResultContainer>

  )}
</StyledInputContainer>

      
    </Section>
  );
};

export default Input;
