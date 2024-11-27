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
  height: 3.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: #fff;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 시각적 강조 */
  }
`;


const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 24px;
`;

const Tag = styled.span`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};

  font-family: 'Elice DX Neolli';
  font-size: 12px;
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
  font-size: 12px;
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
