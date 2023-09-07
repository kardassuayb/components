import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // let content = "Select...";
  // if (value) {
  //   content = value.label;
  // }
  //! JSX içerisindeki seçim yaptığımız div'e bunu koymuştuk, ancak onun yerine JS özelliği olan bu kısa yazımı elde ettik.

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between item-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-2xl" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full ">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
