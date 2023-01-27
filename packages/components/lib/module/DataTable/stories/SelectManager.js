
import React from 'react';
import { DataTableAction, DataTableItem, DataTableCell, DataTable, useSelectManager } from '../..';
export default function SelectManager() {
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
    size: 20,
    title: 'ID',
    type: 'number'
  }, {
    id: 'name',
    size: 80,
    title: 'Name',
    type: 'string'
  }];
  const allSelectableItems = data.map(({
    id
  }) => String(id));
  const {
    onSelect,
    onSelectAll,
    selections
  } = useSelectManager(allSelectableItems);
  const items = data.map(({
    id,
    name
  }) => React.createElement(DataTableItem, {
    id: String(id),
    key: id,
    onClick: () => alert(`${name} clicked`),
    actions: React.createElement(React.Fragment, null, React.createElement(DataTableAction, {
      onClick: () => alert(`${name} deleted`)
    }, "Delete"))
  }, React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name)));
  return React.createElement(DataTable, {
    caption: "Cheeses example",
    columns: columns,
    select: {
      onSelect,
      onSelectAll,
      pageItems: allSelectableItems,
      selectedItems: selections
    }
  }, items);
}
//# sourceMappingURL=SelectManager.js.map