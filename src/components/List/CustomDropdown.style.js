import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  cursor: pointer;
  font-size: 20px;
  gap: 1.1rem;

  span {
    font-family: "Elice DX Neolli";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.main};
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.main};
  border-top: none;
  border-radius: 0 0 20px 20px;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Option = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:first-child {
    border-top: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    width: 100%;
    justify-content: space-between;
  }

  span {
    font-family: "Elice DX Neolli";
    font-size: 1.5rem;
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
