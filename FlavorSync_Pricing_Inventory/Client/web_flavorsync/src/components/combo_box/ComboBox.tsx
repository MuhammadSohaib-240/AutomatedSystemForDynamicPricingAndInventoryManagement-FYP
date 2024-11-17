import { useEffect, useState } from "react";
import "./ComboBox.scss";

interface ComboBoxProps {
  options: string[]; // An array of options
  selectedOption: string; // The selected option
  onSelect: (selectedOption: string) => void;
}

const ComboBox = ({ options, selectedOption, onSelect }: ComboBoxProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setIsOpen(false); // Close the menu when an option is selected
    onSelect(option);
  };

  useEffect(() => {
    // Update the selectedOption whenever it changes from props
  }, [selectedOption]);

  return (
    <>
      <div className={`dropdown ${isOpen ? "menu-open" : ""}`}>
        <div
          className={`select ${isOpen ? "select-clicked" : ""}`}
          onClick={toggleMenu}
        >
          <span className="selected">{selectedOption}</span>
          <div className={`caret ${isOpen ? "caret-rotate" : ""}`}></div>
        </div>
        <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
          {options.map((option, index) => (
            <li
              key={index}
              className={option === selectedOption ? "active" : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ComboBox;
