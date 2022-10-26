import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["caption", "select"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { DataTable } from '../';
import { useSelectManager } from '../utils/useSelectManager';
import { columns as mockColumns } from '../../fixtures/DataTable/columns';
import { data } from '../../fixtures/DataTable/data';
import { items, itemsNoActions } from './items';

const Template = _ref => {
  let {
    caption,
    select: selectActive
  } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);

  const allPageItems = data.map(({
    id
  }) => id);
  const {
    onSelect,
    onSelectAll,
    selections
  } = useSelectManager(allPageItems);
  const select = selectActive ? {
    onSelect,
    onSelectAll,
    pageItems: allPageItems,
    selectedItems: selections
  } : undefined;
  return React.createElement(DataTable, _extends({
    caption: "DataTable Responsive",
    select: select
  }, args));
};

const hideAllColumns = mockColumns.map(c => {
  return _objectSpread(_objectSpread({}, c), {}, {
    hide: true
  });
});
hideAllColumns[0].hide = false;
export const ResponsiveMinimal = Template.bind({});
ResponsiveMinimal.args = {
  children: items,
  columns: hideAllColumns
};
ResponsiveMinimal.parameters = {
  storyshots: {
    disable: true
  }
};
export const ResponsiveOverflow = Template.bind({});
ResponsiveOverflow.args = {
  children: items,
  columns: mockColumns
};
export const ResponsiveOverflowFirstColumnStuck = Template.bind({});
ResponsiveOverflowFirstColumnStuck.args = _objectSpread(_objectSpread({}, ResponsiveOverflow.args), {}, {
  firstColumnStuck: true
});
export const ResponsiveOverflowSelectFirstColumnNotStuck = Template.bind({});
ResponsiveOverflowSelectFirstColumnNotStuck.args = _objectSpread(_objectSpread({}, ResponsiveOverflow.args), {}, {
  firstColumnStuck: false,
  select: true
});
export const ResponsiveOverflowSelectNoActions = Template.bind({});
ResponsiveOverflowSelectNoActions.args = _objectSpread(_objectSpread({}, ResponsiveOverflow.args), {}, {
  children: itemsNoActions,
  select: true
});
//# sourceMappingURL=Responsive.js.map