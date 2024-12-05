import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: "Elice DX Neolli";
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 124.9%;
  text-align: left;
  margin-left: 10.4rem;
`;

export const TitleIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.main};
  margin-left: 2.2rem;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4.4rem;
  margin: 4.2rem 10.4rem;
`;

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5rem;
  margin: 2.2rem 0 9.5rem 0;
  width: 100%;
`;

export const Line = styled.div`
  width: 1232px;
  height: 1px;
  background-color: #D9D9D9;
  margin-top: 5.7rem;
  margin-bottom: 5.9rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Line2 = styled.div`
  width: 1232px;
  height: 1px;
  background-color: #D9D9D9;
  margin-top: 6.9rem;
  margin-bottom: 11.8rem;
  margin-left: auto;
  margin-right: auto;
`;
