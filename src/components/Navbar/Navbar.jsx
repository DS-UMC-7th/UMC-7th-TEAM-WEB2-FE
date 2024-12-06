import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { Img } from "../Footer/Footer.style";
import * as S from "./Navbar.style";
import { useState } from "react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchSearchResults = async (keyword, page = 0) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/search?keyword=${encodeURIComponent(keyword)}&page=${page}`, {
        method: "GET",
        headers: {
          accept: "*/*",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  };

  const onClick = async () => {
    if (!searchValue.trim()) return;

    setError(null);

    try {
      const data = await fetchSearchResults(searchValue);
      console.log("Search Results:", data); // 데이터 확인용
      navigate(`/search?keyword=${encodeURIComponent(searchValue)}`);
    } catch (err) {
      navigate(`/search?`);
    } finally {
      setSearchValue(""); // 검색 후 입력 초기화
    }
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

      {error && <p style={{ color: "red" }}>{error}</p>}
    </nav>
  );
};

export default Navbar;
