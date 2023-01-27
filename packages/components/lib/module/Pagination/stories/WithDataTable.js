

import React, { useState } from 'react';
import { Pagination, DataTable, DataTableItem, DataTableAction, DataTableCell, Flex, Box } from '../..';
export default function WithDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const cheesePerPage = 1;
  const data = [{
    id: 1,
    name: 'Gouda'
  }, {
    id: 2,
    name: 'Pepper Jack'
  }, {
    id: 3,
    name: `Swiss`
  }, {
    id: 4,
    name: `Cheddar`
  }];
  const totalPages = data.length / cheesePerPage;
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
  }, index) => {
    return index + 1 === currentPage && React.createElement(DataTableItem, {
      key: id,
      id: `${id}`,
      onClick: () => alert(`Row clicked`),
      actions: React.createElement(DataTableAction, {
        onClick: () => alert(`${name} selected!`)
      }, "Select Cheese")
    }, React.createElement(DataTableCell, null, id), React.createElement(DataTableCell, null, name));
  });
  return React.createElement(Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, React.createElement(Box, {
    width: "100%",
    mb: "u3"
  }, React.createElement(DataTable, {
    caption: "Cheeses example",
    columns: columns
  }, items)), React.createElement(Pagination, {
    current: currentPage,
    pages: totalPages,
    onChange: setCurrentPage
  }));
}
//# sourceMappingURL=WithDataTable.js.map