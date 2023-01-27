
import React, { useState } from 'react';
import { DataTableAction, DataTableItem, DataTableCell, DataTable } from '../..';
export default function SelectRow() {
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
  const [selections, setSelections] = useState([]);
  const onSelect = selection => {
    setSelections(selections.includes(selection) ? selections.filter(item => item !== selection) : [...selections, selection]);
  };
  const allSelectableItems = data.map(({
    id
  }) => String(id));
  const onSelectAll = () => {
    setSelections(selections.length ? [] : allSelectableItems);
  };
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
  return React.createElement(React.Fragment, null, React.createElement(DataTable, {
    caption: "Cheeses example",
    columns: columns,
    select: {
      onSelect,
      onSelectAll,
      pageItems: allSelectableItems,
      selectedItems: selections
    }
  }, items));
}
//# sourceMappingURL=SelectRow.js.map