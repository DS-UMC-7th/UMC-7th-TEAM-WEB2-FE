import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 9.5rem;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.8rem 10.3rem 9rem 12.3rem;
`;

export const LeftOptions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const Dropdown = styled.select`
  padding: 1rem 2rem;
  font-size: 2rem;
  height: 42px;
  border: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.main};
  font-family: "Elice DX Neolli";
  font-weight: 500;
  outline: none;
  option {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
  }

`;

export const SearchButton = styled.button`
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};
  font-family: "Elice DX Neolli";
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const RightOptions = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const Divider = styled.div`
  width: 2px;
  height: 17px;
  background-color: #545454;
`;

export const SortButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.main : "#6C6C6C")};
  font-family: "Elice DX Neolli";
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const ListDataComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
`;
