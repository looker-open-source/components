import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["bulk", "caption", "columns", "filters", "pageItems", "select", "selectedItems", "canSort"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { InputFilters } from '../../Form/Inputs/InputFilters';
import { filters as defaultFilters } from '../../fixtures/filters';
import { columns as mockColumns } from '../../fixtures/DataTable/columns';
import { data } from '../../fixtures/DataTable/data';
import { DataTable } from '../DataTable';
import { DataTableAction } from '../Item';
import { useSelectManager, doDataTableSort } from '../utils';
import { actions, itemBuilder, itemsActionsActionPrimary, itemsActionPrimary } from './items';

const Template = _ref => {
  let {
    bulk,
    caption,
    columns,
    filters,
    pageItems,
    select,
    selectedItems,
    canSort
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const cleanColumns = columns.map(c => _objectSpread({}, c));
  const allPageItems = pageItems || data.map(({
    id
  }) => id);
  const [cheeseData, setCheeseData] = useState(data);
  const [cheeseColumns, setCheeseColumns] = useState(cleanColumns);
  const items = itemBuilder(cheeseData, actions);

  const onSort = (id, sortDirection) => {
    const {
      columns: sortedColumns,
      data: sortedData
    } = doDataTableSort(cheeseData, cheeseColumns, id, sortDirection);
    setCheeseData(sortedData);
    setCheeseColumns(sortedColumns);
  };

  const {
    onSelect,
    onSelectAll,
    selections,
    setSelections
  } = useSelectManager(allPageItems, selectedItems);
  const [listFilters, setListFilters] = useState(defaultFilters);

  const onTotalSelectAll = () => setSelections([...allPageItems, 'roquefort', 'mozzarella', 'ricotta', 'feta']);

  const onTotalClearAll = () => setSelections([]);

  const onBulkActionClick = () => {
    alert(`Performing a bulk action on these items: \n${selections.join(', ')}`);
  };

  const selectConfig = {
    onSelect,
    onSelectAll,
    pageItems: allPageItems,
    selectedItems: selections
  };
  const bulkActionsConfig = {
    actions: React.createElement(DataTableAction, {
      onClick: onBulkActionClick
    }, "Some bulk action"),
    onTotalClearAll,
    onTotalSelectAll,
    pageCount: items.length,
    totalCount: 8
  };
  return React.createElement(DataTable, _extends({
    bulk: bulk ? bulkActionsConfig : undefined,
    caption: "DataTable Interactions",
    columns: cheeseColumns,
    filters: filters ? React.createElement(InputFilters, {
      filters: listFilters,
      onChange: f => setListFilters(f)
    }) : undefined,
    select: select ? selectConfig : undefined,
    onSort: canSort ? onSort : undefined
  }, args), items);
};

const TemplateAction = _ref2 => {
  let args = _extends({}, _ref2);

  return React.createElement(DataTable, args);
};

export const Basic = Template.bind({});
Basic.args = {
  canSort: true,
  columns: mockColumns,
  headerRowId: 'headerId'
};
export const Focused = Template.bind({});
Focused.args = _objectSpread({}, Basic.args);
Focused.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
export const Filters = Template.bind({});
Filters.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  filters: true
});
const noHiddenColumns = mockColumns.map(c => {
  return _objectSpread(_objectSpread({}, c), {}, {
    hide: undefined
  });
});
export const FilterNoColumnSelector = Template.bind({});
FilterNoColumnSelector.args = _objectSpread(_objectSpread({}, Filters.args), {}, {
  columns: noHiddenColumns
});
export const Select = Template.bind({});
Select.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  select: true
});
export const SelectActiveItems = Template.bind({});
SelectActiveItems.args = _objectSpread(_objectSpread({}, Select.args), {}, {
  selectedItems: ['cheddar', 'gouda']
});
export const SelectBulkActiveItems = Template.bind({});
SelectBulkActiveItems.args = _objectSpread(_objectSpread({}, Select.args), {}, {
  bulk: true,
  selectedItems: ['cheddar', 'gouda']
});
export const SelectNoSelectedItemsOrPageItems = Template.bind({});
SelectNoSelectedItemsOrPageItems.args = _objectSpread(_objectSpread({}, Select.args), {}, {
  pageItems: [],
  selectedItems: []
});
export const ActionsAndPrimaryAction = TemplateAction.bind({});
ActionsAndPrimaryAction.args = {
  children: itemsActionsActionPrimary,
  columns: mockColumns
};
export const PrimaryAction = TemplateAction.bind({});
PrimaryAction.args = {
  children: itemsActionPrimary,
  columns: mockColumns
};
//# sourceMappingURL=Interaction.js.map