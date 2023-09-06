import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const clickHandle = (nextIndex) => {
    setExpandedIndex(nextIndex);
  }; // Bu fonksiyonu aşağıda bulunan map fonksiyonu içerisinde tanımlayabilir, ve daha kısa kod yazarak kurtulabilirdik. Ancak bu durumda map fonksiyonu karışık bir hal alacaktı. Biz de bu nedenle dışarıda tanımladık. Dışarıda tanımlayınca map içerisindeki index'e erişebilmesi için de map fonksiyonunda bulunan JSX içerisindeki onClick metoduna arrow function ekleyerek index'i prop olarak bu fonksiyona atamış olduk.

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div onClick={() => clickHandle(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
