import { useState } from "react";
import Select from "react-select";
import { CustomStyle } from "./CustomSelect.style";

const CustomSelect = () => {
  const list = [
    { value: "0", label: "전체" },
    { value: "5", label: "5" },
    { value: "4", label: "4" },
    { value: "3", label: "3" },
    { value: "2", label: "2" },
    { value: "1", label: "1" },
  ];

  const [selectOption, setSelectOption] = useState(list[0]);

  return <CustomStyle options={list} onChange={setSelectOption} defaultValue={list[0]}></CustomStyle>;
};

export default CustomSelect;
