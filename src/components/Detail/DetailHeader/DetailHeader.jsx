import detailHeader from "../../../assets/img/detailHeader.png";
import { HeaderDiv, HeaderImg, HeaderP } from "./DetailHeader.style";

const DetailHeader = () => {
  return (
    <HeaderDiv>
      <HeaderImg src={detailHeader}></HeaderImg>

      <HeaderP top={"55%"} fontsize={"36px"} color={"main"}>
        초보자도 가능한 그림 같은 화과자,
        <br />
        갸또디솔레의 계절별 고나시
      </HeaderP>

      <HeaderP top={"80%"} fontsize={"17px"}>
        18종 콜로소 | 갸또디솔레 대표 서지현
      </HeaderP>
    </HeaderDiv>
  );
};

export default DetailHeader;
