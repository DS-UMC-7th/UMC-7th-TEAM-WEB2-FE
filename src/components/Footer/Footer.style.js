import styled from "styled-components";

const FooterDiv = styled.footer`
  margin-top: auto;
  background-color: #f1f1f1;
  height: 170px;
  margin-bottom: 20px;
  padding-left: 60px;
  padding-top: 25px;
`;

const FooterLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 25%;
  margin-top: 25px;
`;

const FooterP = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "Pretendard Variable";
  font-size: 12px;
`;

const ImgDiv = styled.div`
  width: 80px;
  height: 40px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export { FooterDiv, FooterLink, FooterP, ImgDiv, Img };
