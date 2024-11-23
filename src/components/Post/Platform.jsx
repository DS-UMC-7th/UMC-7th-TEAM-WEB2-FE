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

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 34px;
`;

const Tag = styled.span`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};

  font-family: 'Elice DX Neolli';
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

  font-family: 'Elice DX Neolli';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Platform = ({
  tagInput,
  onTagInputChange,
  onTagKeyDown,
  tags,
  onTagRemove,
}) => {
  return (
    <Section>
      <Label>
        <Icon src="/src/assets/Vector.svg" alt="필수 항목" /> 플랫폼
      </Label>
      <StyledInputContainer>
        <StyledInput
          placeholder="플랫폼을 입력해주세요."
          value={tagInput}
          onChange={onTagInputChange}
          onKeyDown={onTagKeyDown}
        />
        <img
          src="/src/assets/search.svg"
          alt="검색"
          style={{ position: 'absolute', right: 16 }}
        />
      </StyledInputContainer>
      <TagList>
        {tags.map((tag, index) => (
          <Tag key={index}>
            {tag}
            <TagDeleteButton onClick={() => onTagRemove(index)}>✕</TagDeleteButton>
          </Tag>
        ))}
      </TagList>
    </Section>
  );
};

export default Platform;
