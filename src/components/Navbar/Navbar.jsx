import { useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { ImgDiv, Img } from "../Footer/Footer.style";
import * as S from "./Navbar.style";
import React, { useState } from "react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const query = searchParams.get("query");

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onClick = () => {
    if (!searchValue.trim()) return;
    if (query === searchValue) return;
    navigate(`/list?query=${encodeURIComponent(searchValue)}`);
    setSearchValue("");
  };

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
          <S.SearchInput
            placeholder="강의명을 검색하면 연관된 리뷰를 보여드릴게요."
            value={searchValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
          ></S.SearchInput>
          <S.SearchButton onClick={onClick} />
        </S.SearchDiv>
      </S.NavContainer>
    </nav>
  );
};

export default Navbar;
