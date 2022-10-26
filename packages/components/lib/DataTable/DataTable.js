import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import styled from 'styled-components';
import React, { useState } from 'react';
import { BulkActions } from './BulkActions';
import { DataTableContext } from './DataTableContext';
import { DataTableFilters } from './Filters/DataTableFilters';
import { Table } from './Table';
import { allItemsSelected } from './utils/allItemsSelected';
export const DataTableLayout = props => {
  const {
    bulk,
    className,
    caption,
    columns,
    filters: filterInput,
    firstColumnStuck: explicitFirstColumnStuck,
    onSort,
    select
  } = props;
  const columnsVisibleDefault = columns.filter(c => c.hide === false).map(c => c.id);
  const [columnsVisible, setColumnsVisible] = useState(columnsVisibleDefault);
  const columnsDisplayState = columns.map(c => c.hide === undefined || columnsVisible.includes(c.id));
  let firstColumnStuck = Boolean(select);

  if (columnsDisplayState[0] === false) {
    firstColumnStuck = false;
  } else if (explicitFirstColumnStuck !== undefined) {
    firstColumnStuck = explicitFirstColumnStuck;
  }

  const context = {
    allSelected: allItemsSelected(select),
    columns,
    columnsDisplayState,
    onSort,
    select
  };
  const filters = filterInput && React.createElement(DataTableFilters, {
    columns: columns,
    columnsVisible: columnsVisible,
    onColumnVisibilityChange: setColumnsVisible
  }, filterInput);
  return React.createElement(DataTableContext.Provider, {
    value: context
  }, React.createElement("div", {
    className: className
  }, filters, bulk && select && select.selectedItems.length > 0 && React.createElement(BulkActions, bulk), React.createElement(Table, _extends({}, props, {
    caption: caption,
    columns: columns,
    columnsVisible: columnsVisible,
    firstColumnStuck: firstColumnStuck
  }))));
};
export const DataTable = styled(DataTableLayout).withConfig({
  displayName: "DataTable",
  componentId: "sc-mgms8t-0"
})(_t || (_t = _`
  width: 100%;
`));
//# sourceMappingURL=DataTable.js.map