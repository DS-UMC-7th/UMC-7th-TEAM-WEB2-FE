import Pagination from "react-js-pagination";
import "./Pagination.css";

const Paging = ({ page, postPerPage, count, setPage, totalPages }) => {
  return (
    <div>
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={postPerPage} // 한 페이지 당 아이템
        totalItemsCount={totalPages * postPerPage} // 강의별 총 아이템 수
        pageRangeDisplayed={5} // paginator에서 보여줄 페이지 범위
        prevPageText={"<"} // 이전 페이지 텍스트
        nextPageText={">"}
        onChange={setPage}
      />
    </div>
  );
};

export default Paging;
