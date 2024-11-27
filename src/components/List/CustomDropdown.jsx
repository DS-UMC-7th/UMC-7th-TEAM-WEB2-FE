import { useState } from "react";
import * as S from "./CustomDropdown.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CustomDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(title);
  const [checkedOptions, setCheckedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const newCheckedOptions = checkedOptions.includes(option)
      ? checkedOptions.filter((item) => item !== option)
      : [...checkedOptions, option];
    setCheckedOptions(newCheckedOptions);
  };

  return (
    <S.Container>
      <S.Header onClick={toggleDropdown} $isOpen={isOpen}>
        <span>{selected}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </S.Header>
      {isOpen && (
        <S.OptionsContainer>
          {options.map((option) => (
            <S.Option key={option}>
              <span>{option}</span>

              <label>
                <input 
                  type="checkbox" 
                  checked={checkedOptions.includes(option)} 
                  onChange={() => handleOptionClick(option)} 
                />
                <span /> {/* 체크박스를 대체할 이미지 */}
              </label>
            </S.Option>
          ))}

        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

export default CustomDropdown;
