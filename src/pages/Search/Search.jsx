import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListCard from "../../components/Home/ListCard";
import * as S from "../ListPage/ListPage.style";

const fetchSearchResults = async (keyword, page = 0) => {
  try {
    const response = await fetch(`http://52.78.171.209:8080/api/search?keyword=${encodeURIComponent(keyword)}&page=${page}`, {
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

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const page = parseInt(searchParams.get("page") || "0", 10);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!keyword) return;

    setLoading(true);
    setError(null);

    fetchSearchResults(keyword, page)
      .then((data) => {
        setResults(data.result.reviewList || []); // API 결과의 `content` 배열
        console.log(data.result.reviewList);

        setTotalPages(data.totalPages || 1); // API의 `totalPages` 값
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [keyword, page]);

  const handleListCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    window.history.replaceState(null, "", `?${params.toString()}`);
    window.location.reload();
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error}</div>;

  return (
    <S.Container>
      <S.ListDataComponent>
        {results.length > 0 ? (
          results.map((list) => (
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
          ))
        ) : (
          <S.ListDataComponent style={{ alignItems: "center", fontSize: "20px", display: "flex", justifyContent: "center", marginTop: "50px" }}>
            등록된 리뷰가 없습니다.
          </S.ListDataComponent>
        )}
      </S.ListDataComponent>

      <div>
        {page > 0 && <button onClick={() => handlePageChange(page - 1)}>이전 페이지</button>}
        {page < totalPages - 1 && <button onClick={() => handlePageChange(page + 1)}>다음 페이지</button>}
      </div>
    </S.Container>
  );
};

export default SearchPage;
