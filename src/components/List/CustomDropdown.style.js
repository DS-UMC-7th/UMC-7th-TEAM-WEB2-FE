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
  border-radius: 21px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem 0;
  box-sizing: border-box; 
`;

export const Option = styled.div`
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:first-child {
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
    width: 100%;
    justify-content: space-between;
  }

  span {
    font-family: "Elice DX Neolli";
    font-size: 1.6rem;
  }

  input[type="checkbox"] {
    width: 1.8rem;
    height: 1.8rem;
    border: none;
    border-radius: 4px;
    accent-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;
