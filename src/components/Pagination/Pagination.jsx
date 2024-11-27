import Pagination from "react-js-pagination";
import "./Pagination.css";

const Paging = ({ page, postPerPage, count, setPage }) => {
  return (
    <div>
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={postPerPage} // 한 페이지 당 아이템
        totalItemsCount={count} // 전체 아이템
        pageRangeDisplayed={5} // paginator에서 보여줄 페이지 범위
        prevPageText={"<"} // 이전 페이지 텍스트
        nextPageText={">"}
        onChange={setPage}
      />
    </div>
  );
};

export default Paging;
