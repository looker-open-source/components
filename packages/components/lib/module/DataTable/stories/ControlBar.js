
import React, { useState } from 'react';
import { DataTableAction, DataTableItem, DataTableCell, DataTable, Flex, Box, Pagination, useSelectManager } from '../..';
export default function ControlBar() {
  const data = [{
    id: 1,
    name: 'Gorgonzola'
  }, {
    id: 2,
    name: 'Cheddar'
  }, {
    id: 3,
    name: `Blue`
  }, {
    id: 4,
    name: 'American'
  }, {
    id: 5,
    name: 'Cheddar'
  }, {
    id: 6,
    name: 'Pepper Jack'
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
  const [page, setPage] = useState(1);
  const perPageCount = 3;

  const pageItemData = data.filter(({
    id
  }) => id > (page - 1) * perPageCount && id <= page * perPageCount);
  const pageItemIds = pageItemData.map(({
    id
  }) => String(id));
  const pageItems = pageItemData.map(({
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
  const {
    onSelect,
    onSelectAll,
    selections,
    setSelections
  } = useSelectManager(pageItemIds);
  const allItems = [...data].map(({
    id
  }) => String(id));
  const onTotalSelectAll = () => setSelections(allItems);
  const onTotalClearAll = () => setSelections([]);
  const bulkActionsConfig = {
    actions: React.createElement(DataTableAction, {
      onClick: () => alert(`Selected Items: ${selections}`)
    }, "View Selected Item IDs"),
    onTotalClearAll,
    onTotalSelectAll,
    pageCount: pageItems.length,
    totalCount: allItems.length
  };
  return React.createElement(Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, React.createElement(Box, {
    width: "100%",
    mb: "u3"
  }, React.createElement(DataTable, {
    bulk: bulkActionsConfig,
    caption: "Cheeses example",
    select: {
      onSelect,
      onSelectAll,
      pageItems: pageItemIds,
      selectedItems: selections
    },
    columns: columns
  }, pageItems)), React.createElement(Pagination, {
    current: page,
    pages: data.length / perPageCount,
    onChange: nextPage => {
      setSelections([]);
      setPage(nextPage);
    }
  }));
}
//# sourceMappingURL=ControlBar.js.map