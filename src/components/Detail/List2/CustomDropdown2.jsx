import { useState } from "react";
import * as S from "./CustomDropdown2.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CustomDropdown2 = ({ title, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const newSelectedOption = selectedOption === option ? null : option;
    setSelectedOption(newSelectedOption);

    if (onChange) {
      onChange(newSelectedOption);
    }
  };

  return (
    <S.Container>
      <S.Header onClick={toggleDropdown} $isOpen={isOpen}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </S.Header>
      {isOpen && (
        <S.OptionsContainer>
          {options.map((option) => (
            <S.Option key={option}>
              <img src="/src/assets/star_select.svg" style={{ width: "15px", height: "15px" }} />
              <span style={{ marginRight: "20px" }}>{option}</span>

              <label>
                <input type="checkbox" checked={selectedOption === option} onChange={() => handleOptionClick(option)} />
                <span />
              </label>
            </S.Option>
          ))}
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

export default CustomDropdown2;
