import React, { useState } from 'react';
import {ReactComponent as Dovn} from "images/svgMobile/down.svg"


const CustomSelect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsHovered(false);
  };

  return (
    <div className="custom-select" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`selected-option ${isHovered ? 'hovered' : ''}`}>
        <input type="radio" id="option1" name="options" value="option1" checked={selectedOption === 'option1'} onChange={() => handleOptionChange('option1')} />
        <label htmlFor="option1">
          <Dovn />
          {selectedOption}
        </label>
      </div>
      {isHovered && (
        <div className="options">
          {options.map((option) => (
            <div key={option} className="option">
              <input type="radio" id={option} name="options" value={option} checked={selectedOption === option} onChange={() => handleOptionChange(option)} />
              <label htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;