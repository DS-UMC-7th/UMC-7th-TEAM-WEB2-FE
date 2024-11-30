import detailHeader from "../../../assets/img/detailHeader.png";
import { HeaderDiv, HeaderImg, HeaderP } from "./DetailHeader.style";

const DetailHeader = ({ title, company, author }) => {
  return (
    <HeaderDiv>
      <HeaderImg src={detailHeader}></HeaderImg>

      <HeaderP top={"55%"} fontsize={"36px"} color={"main"}>
        {title}
      </HeaderP>

      <HeaderP top={"80%"} fontsize={"17px"}>
        {company} | {author}
      </HeaderP>
    </HeaderDiv>
  );
};

export default DetailHeader;
