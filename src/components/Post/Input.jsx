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
  font-size: 32px;
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
  font-size: 20px;
  height: 45px;
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
    line-height: 124.9%;
    letter-spacing: 0.4px;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.main};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const SearchResultContainer = styled.div`
  margin-top: 15px;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  max-height: 450px;
  overflow-y: auto;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: var(--WHITE, #fff);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SearchResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  display: flex;
  padding: 21px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  align-self: stretch;
  color: #3f3f3f;
  font-family: 'Pretendard Variable';
  font-size: 20px;
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

const PlaceholderText = styled.span`
  position: absolute;
  right: 16px;
  color: ${({ theme }) => theme.colors.main};
  font-family: 'Pretendard Variable';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.9%;
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
        {characterLimit && (
          <PlaceholderText>{`${value.length}/${characterLimit}`}</PlaceholderText>
        )}
        {searchResults.length > 0 && (
          <SearchResultContainer>
            {searchResults.map((result) => (
              <SearchResultItem
                key={result.id}
                onClick={() => onResultClick(result)}
              >
                {result.name}
                <br />
                <div style={{ fontSize: '20px', color: '#888' }}>
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
