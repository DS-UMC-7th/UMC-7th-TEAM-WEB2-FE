import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomDropdown from "../../components/List/CustomDropdown";
import ListCard from "../../components/Home/ListCard";
import { fetchReviews } from "../../apis/list/fetchReviews";
import * as S from "./ListPage.style";
import { categoryMap, difficultyMap, durationMap, sortMap } from "../../utils/constants/listConstants";
import Loading from "../../components/Loading/Loading";

const ListPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    difficulty: searchParams.get("level") || "",
    duration: searchParams.get("studyTime") || "",
  });

  const [sortOrder, setSortOrder] = useState(searchParams.get("sort") === "recommended" ? "추천순" : "최신순");

  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  const updateSearchParams = () => {
    const params = {};
    if (filters.category) params.category = categoryMap[filters.category];
    if (filters.difficulty) params.level = difficultyMap[filters.difficulty];
    if (filters.duration) params.studyTime = durationMap[filters.duration];
    params.sort = sortMap[sortOrder];
    setSearchParams(params);
  };

  const handleSearch = () => {
    setIsLoading(true); // 검색 시작 시 로딩 상태 true
    fetchReviews(filters, sortOrder)
      .then((data) => {
        setListData(data);
        updateSearchParams();
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
      })
      .finally(() => {
        setIsLoading(false); // 데이터 로딩 후 로딩 상태 false
      });
  };

  useEffect(() => {
    handleSearch();
  }, [sortOrder]);

  const handleDropdownChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const categoryOptions = ["", "디자인", "라이프스타일", "언어", "요리", "IT/프로그래밍", "금융/재테크"];
  const difficultyOptions = ["", "입문자", "초급자", "중급자", "상급자"];
  const durationOptions = ["", "일주일 이내", "3달 이내", "6달 이내", "1년 이내"];

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
          <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
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

      {/* 로딩 상태일 때 로딩 컴포넌트 표시 */}
      {isLoading ? (
        <Loading />
      ) : (
        <S.ListDataComponent>
          {listData.map((list) => (
            <ListCard
              key={list.reviewId}
              lectureName={list.lectureName}
              rating={list.rating}
              platform={list.platform}
              lectureTeacher={list.lectureTeacher}
              createdAt={list.createdAt}
              content={list.content}
              onClick={() => handleListCardClick(list.reviewId)}
            />
          ))}
        </S.ListDataComponent>
      )}
    </S.Container>
  );
};

export default ListPage;
