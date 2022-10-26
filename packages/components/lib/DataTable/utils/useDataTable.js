import React from 'react';
import { DataTable } from '../DataTable';
import { DataTableItem } from '../Item';
import { DataTableCell } from '../Column';
export const useDataTable = (data, columns, caption) => {
  const items = data.map(dataObj => {
    const defaultOrderColumn = columns[0].id;
    const id = dataObj[defaultOrderColumn];
    return React.createElement(DataTableItem, {
      id: id,
      key: id
    }, columns.map(column => React.createElement(DataTableCell, {
      key: column.id
    }, dataObj[column.id])));
  });
  return React.createElement(DataTable, {
    caption: caption,
    columns: columns
  }, items);
};
//# sourceMappingURL=useDataTable.js.map