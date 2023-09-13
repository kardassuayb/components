import { Fragment } from "react";
//! Yukarıdaki bu özellik, "renderedHeaders" içerisindeki return değerine key prop'u aktarabilmek için kullandık. Başka hiç bir amacı yok. Zira tablo içerisinde HTML ögeleri(div, p vs.) kullanamıyoruz, dolayısıyla key propu verebileceğimiz bir öge de olamıyor.

const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2 ">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
