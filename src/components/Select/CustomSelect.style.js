import styled, { createGlobalStyle } from "styled-components";
import Select from "react-select";

const CustomStyle = styled(Select).attrs({
  classNamePrefix: "react-select",
})`
  .css-13cymwt-control {
    border: 1px solid red;
  }

  .react-select__option--is-focused {
    background: transparent;
    color: black; /* hover 상태의 option 텍스트 색상 */
  }
`;

export { CustomStyle };
