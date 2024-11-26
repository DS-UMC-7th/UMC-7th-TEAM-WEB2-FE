import logo_footer from "../../assets/img/logo_footer.png";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.FooterDiv>
      <S.ImgDiv>
        <S.Img src={logo_footer}></S.Img>
      </S.ImgDiv>
      <S.FooterLink>
        <S.FooterP>개인정보처리방침</S.FooterP>
        <S.FooterP>이용약관</S.FooterP>
        <S.FooterP>이메일무단수집거부</S.FooterP>
        <S.FooterP>사이트맵</S.FooterP>
      </S.FooterLink>
    </S.FooterDiv>
  );
};

export default Footer;
