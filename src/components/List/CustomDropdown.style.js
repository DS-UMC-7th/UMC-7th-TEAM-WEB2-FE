import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: 1.5px solid ${({ theme }) => theme.colors.main};
  cursor: pointer;
  gap: 1.1rem;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;

  span {
    font-size: 20px;

  }
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.main};
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; 
  padding: 1.9rem 1.1rem 2.1rem;
  gap: 1.2rem;
`;

export const Option = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  justify-content: space-between;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 1rem; /* 텍스트와 체크박스 사이 간격 */
  }

  span:first-child {
    font-family: "Elice DX Neolli";
    font-size: 1.4rem;
    flex-grow: 1;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + span {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    background-image: url('/src/assets/no_check.svg'); 
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + span {
    background-image: url('/src/assets/check.svg');
  }
`;
