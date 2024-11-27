import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 418px;
  overflow: hidden;

  position: relative;
`;

const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeaderP = styled.p`
  position: absolute;
  top: ${(props) => props.top};

  font-size: ${(props) => props.fontsize};
  color: ${(props) => (props.color ? ({ theme }) => theme.colors.main : ({ theme }) => theme.colors.black)};

  margin-left: 5vw;
`;

export { HeaderDiv, HeaderImg, HeaderP };
