"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _getSortAssets4 = require("./getSortAssets");
var _material = require("@styled-icons/material");
var _identity = _interopRequireDefault(require("lodash/identity"));

it('renders swap icon when sorting state is undefined', function () {
  var _getSortAssets = (0, _getSortAssets4.getSortAssets)(_identity["default"]),
    SortIcon = _getSortAssets.SortIcon,
    sortText = _getSortAssets.sortText;
  expect(SortIcon).toEqual(_material.SwapVert);
  expect(sortText).toEqual('Shift + Click to sort additional columns');
});
it('renders arrow down icon when sorting state is descending', function () {
  var _getSortAssets2 = (0, _getSortAssets4.getSortAssets)(_identity["default"], {
      id: 'orders.count',
      desc: true
    }),
    SortIcon = _getSortAssets2.SortIcon,
    sortText = _getSortAssets2.sortText;
  expect(SortIcon).toEqual(_material.KeyboardArrowDown);
  expect(sortText).toEqual('Sort ascending');
});
it('renders arrow up icon when sorting state is ascending', function () {
  var _getSortAssets3 = (0, _getSortAssets4.getSortAssets)(_identity["default"], {
      id: 'orders.count',
      desc: false
    }),
    SortIcon = _getSortAssets3.SortIcon,
    sortText = _getSortAssets3.sortText;
  expect(SortIcon).toEqual(_material.KeyboardArrowUp);
  expect(sortText).toEqual('Sort descending');
});
//# sourceMappingURL=getSortAssets.spec.js.map