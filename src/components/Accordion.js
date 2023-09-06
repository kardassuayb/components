import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  }; // Bu fonksiyonu aşağıda bulunan map fonksiyonu içerisinde tanımlayabilir, ve daha kısa kod yazarak kurtulabilirdik. Ancak bu durumda map fonksiyonu karışık bir hal alacaktı. Biz de bu nedenle dışarıda tanımladık. Dışarıda tanımlayınca map içerisindeki index'e erişebilmesi için de map fonksiyonunda bulunan JSX içerisindeki onClick metoduna arrow function ekleyerek index'i prop olarak bu fonksiyona atamış olduk.

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
