import React, { useState } from 'react';
import { DataTable } from '../DataTable';
import { DataTableItem } from '../Item';
import { DataTableCell } from '../Column';
import { doDataTableSort } from './sort_utils';
export const useDataTableSortManager = (caption, defaultData, defaultColumns, generateActions, onClickItem) => {
  const [data, setData] = useState(defaultData);
  const [columns, setColumns] = useState(defaultColumns);

  const onSort = (id, sortDirection) => {
    const {
      columns: sortedColumns,
      data: sortedData
    } = doDataTableSort(data, columns, id, sortDirection);
    setData(sortedData);
    setColumns(sortedColumns);
  };

  const items = data.map(dataObj => {
    const defaultOrderColumn = columns[0].id;
    const id = dataObj[defaultOrderColumn];
    return React.createElement(DataTableItem, {
      id: id,
      key: id,
      onClick: onClickItem,
      actions: generateActions(dataObj)
    }, columns.map(column => React.createElement(DataTableCell, {
      key: column.id
    }, dataObj[column.id])));
  });
  return React.createElement(DataTable, {
    caption: caption,
    columns: columns,
    onSort: onSort
  }, items);
};
//# sourceMappingURL=useDataTableSortManager.js.map