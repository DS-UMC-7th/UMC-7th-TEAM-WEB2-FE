import styled from "styled-components";

import logo_footer from "../../assets/img/logo_footer.png";

const FooterDiv = styled.footer`
  margin-top: auto;
  background-color: #f1f1f1;
  height: 180px;
  margin-bottom: 20px;
  padding-left: 50px;
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
  font-size: 13px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div>
        <img src={logo_footer}></img>
      </div>
      <FooterLink>
        <FooterP>개인정보처리방침</FooterP>
        <FooterP>이용약관</FooterP>
        <FooterP>이메일무단수집거부</FooterP>
        <FooterP>사이트맵</FooterP>
      </FooterLink>
    </FooterDiv>
  );
};

export default Footer;
