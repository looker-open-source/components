
import React, { useState } from 'react';
import { DataTableAction, DataTableItem, DataTableCell, DataTable, DateFormat, doDataTableSort } from '../..';
export default function Sorting() {
  const [data, setData] = useState([{
    createdDate: new Date('11/11/2001'),
    id: 1,
    name: 'Gorgonzola'
  }, {
    createdDate: new Date('03/15/2001'),
    id: 2,
    name: 'Cheddar'
  }, {
    createdDate: new Date('07/20/2001'),
    id: 3,
    name: `Blue`
  }]);
  const [columns, setColumns] = useState([{
    canSort: true,
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    canSort: true,
    id: 'name',
    title: 'Name',
    type: 'string'
  }, {
    canSort: true,
    id: 'createdDate',
    size: 'nowrap',
    title: 'Created Date',
    type: 'date'
  }]);
  const onSort = (id, sortDirection) => {
    const {
      columns: sortedColumns,
      data: sortedData
    } = doDataTableSort(data, columns, id, sortDirection);
    setData(sortedData);
    setColumns(sortedColumns);
  };
  const items = data.map(({
    id,
    name,
    createdDate
  }) => {
    const actions = React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
      onClick: () => alert(`${name} selected!`)
    }, "Select Cheese"));
    return React.createElement(DataTableItem, {
      id: `${id}`,
      key: id,
      onClick: () => alert('Row clicked'),
      actions: actions
    }, React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name), React.createElement(DataTableCell, null, React.createElement(DateFormat, null, createdDate)));
  });
  return React.createElement(DataTable, {
    caption: "Cheeses example",
    onSort: onSort,
    columns: columns
  }, items);
}
//# sourceMappingURL=Sorting.js.map