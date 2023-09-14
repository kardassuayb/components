import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  // Eğer sortOrder && sortBy değerleri "null" değil ise "data" yı sırala
  // "Data" prop'unun bir kopyasını oluştur.
  //! Çünkü react'ta özellikle prop olarak aktarılan herhangi bir array'i doğrudan değiştirmek çok büyük bir olaydır ve bu istenmez
  // Doğru sortValue fonksiyonunu bul ve sıralama için onu kullan

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return "two icon";
  }

  if (sortOrder === null) {
    return "two icon";
  } else if (sortOrder === "asc") {
    return "up icon";
  } else if (sortOrder === "desc") {
    return "down icon";
  }
}

export default SortableTable;
