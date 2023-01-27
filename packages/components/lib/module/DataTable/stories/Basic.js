
import React from 'react';
import { DataTableAction, DataTableItem, DataTableCell, DataTable } from '../..';
export default function Basic() {
  const data = [{
    id: 1,
    name: 'Gorgonzola'
  }, {
    id: 2,
    name: 'Cheddar'
  }, {
    id: 3,
    name: `Blue`
  }];
  const columns = [{
    id: 'id',
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    title: 'Name',
    type: 'string'
  }];
  const items = data.map(({
    id,
    name
  }) => {
    const actions = React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
      onClick: () => alert(`${name} selected!`)
    }, "Select Cheese"));
    return React.createElement(DataTableItem, {
      key: id,
      id: `${id}`,
      onClick: () => alert('Row clicked'),
      actions: actions
    }, React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name));
  });
  return React.createElement(DataTable, {
    caption: "Cheeses example",
    columns: columns
  }, items);
}
//# sourceMappingURL=Basic.js.map