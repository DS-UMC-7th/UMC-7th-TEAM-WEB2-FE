import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomDropdown from "../../components/List/CustomDropdown";
import listPageData from "../../utils/mocks/listPageData";
import ListCard from "../../components/Home/ListCard";
import * as S from "./ListPage.style";

const ListPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const [filters, setFilters] = useState({
    category: "",
    difficulty: "",
    duration: "",
  });

  const [sortOrder, setSortOrder] = useState("최신순");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter");

    if (filterParam) {
      setSortOrder(filterParam === "recommended" ? "추천순" : "최신순");
    }
  }, [location.search]);

  const handleDropdownChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const categoryOptions = ["", "디자인", "라이프스타일", "언어", "요리", "IT/프로그래밍", "금융/재테크"];

  const difficultyOptions = ["", "입문자", "초급자", "중급자", "상급자"];

  const durationOptions = ["", "일주일 이내", "3달 이내", "6달 이내", "1년 이내"];

  const sortedData = () => {
    const filteredData = listPageData.filter((item) => {
      return (
        (filters.category ? item.category === filters.category : true) &&
        (filters.difficulty ? item.difficulty === filters.difficulty : true) &&
        (filters.duration ? item.duration === filters.duration : true)
      );
    });

    if (sortOrder === "추천순") {
      return filteredData.sort((a, b) => b.score - a.score);
    }

    if (sortOrder === "최신순") {
      return filteredData.sort((a, b) => {
        const dateA = new Date(a.date.split(".").reverse().join("-"));
        const dateB = new Date(b.date.split(".").reverse().join("-"));
        return dateB - dateA;
      });
    }

    return filteredData;
  };
  const handleListCardClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <S.Container>
      <S.OptionContainer>
        <S.LeftOptions>
          <CustomDropdown title="카테고리" options={categoryOptions} onChange={(value) => handleDropdownChange("category", value)} />
          <CustomDropdown title="난이도" options={difficultyOptions} onChange={(value) => handleDropdownChange("difficulty", value)} />
          <CustomDropdown title="수강 기간" options={durationOptions} onChange={(value) => handleDropdownChange("duration", value)} />
          <S.SearchButton>검색</S.SearchButton>
        </S.LeftOptions>

        <S.RightOptions>
          <S.SortButton $isActive={sortOrder === "추천순"} onClick={() => handleSortChange("추천순")}>
            추천순
          </S.SortButton>
          <S.Divider />
          <S.SortButton $isActive={sortOrder === "최신순"} onClick={() => handleSortChange("최신순")}>
            최신순
          </S.SortButton>
        </S.RightOptions>
      </S.OptionContainer>

      <S.ListDataComponent>
        {sortedData().map((list) => (
          <ListCard
            key={list.id}
            title={list.title}
            score={list.score}
            company={list.company}
            author={list.author}
            date={list.date}
            description={list.description}
            onClick={() => handleListCardClick(list.id)}
          />
        ))}
      </S.ListDataComponent>
    </S.Container>
  );
};

export default ListPage;
