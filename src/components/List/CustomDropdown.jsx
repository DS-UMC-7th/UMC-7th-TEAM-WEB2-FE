import { useState } from "react";
import * as S from "./CustomDropdown.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CustomDropdown = ({ title, options, onChange }) => { 
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
              <span>{option}</span>

              <label>
                <input 
                  type="checkbox" 
                  checked={selectedOption === option}
                  onChange={() => handleOptionClick(option)} 
                />
                <span />
              </label>
            </S.Option>
          ))}
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

export default CustomDropdown;
