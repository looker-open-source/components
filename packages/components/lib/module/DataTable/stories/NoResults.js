
import React from 'react';
import { DataTableItem, DataTableCell, DataTable } from '../..';
export default function State() {
  const columns = [{
    id: 'name',
    title: 'Name',
    type: 'string'
  }];

  return React.createElement(DataTable, {
    caption: "Cheeses example",
    columns: columns,
    state: "noResults"
  }, React.createElement(DataTableItem, {
    id: 'cheddar',
    onClick: () => alert(`Row clicked`)
  }, React.createElement(DataTableCell, null, "Cheddar")));
}
//# sourceMappingURL=NoResults.js.map