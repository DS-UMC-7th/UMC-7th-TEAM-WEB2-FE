import logo from "../../assets/img/logo.png";
import { ImgDiv, Img } from "../Footer/Footer.style";
import * as S from "./Navbar.style";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <S.NavContainer>
        <S.NavDiv>
          <S.LogoImgDiv>
            <S.NavLink to="/">
              <Img src={logo}></Img>
            </S.NavLink>
          </S.LogoImgDiv>

          <S.NavMenu>
            <S.NavLink to="/list">전체 리뷰</S.NavLink>
            <S.NavLink to="/post">강의평 등록하기</S.NavLink>
          </S.NavMenu>
        </S.NavDiv>

        <S.SearchDiv>
          <S.SearchInput placeholder="강의명을 검색하면 연관된 리뷰를 보여드릴게요."></S.SearchInput>
          <S.SearchButton></S.SearchButton>
        </S.SearchDiv>
      </S.NavContainer>
    </nav>
  );
};

export default Navbar;
