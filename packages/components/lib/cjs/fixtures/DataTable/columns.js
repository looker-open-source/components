"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columns = void 0;

var _react = _interopRequireDefault(require("react"));

var _Info = require("@styled-icons/material/Info");

var columns = [{
  canSort: true,
  id: 'name',
  size: 'medium',
  title: 'Name',
  type: 'string'
}, {
  canSort: true,
  id: 'status',
  title: 'Status',
  titleIcon: _react["default"].createElement(_Info.Info, null),
  type: 'string'
}, {
  canSort: true,
  hide: false,
  id: 'inventory',
  title: 'Inventory',
  type: 'number'
}, {
  canSort: true,
  id: 'color',
  size: 'nowrap',
  title: 'Color',
  type: 'string'
}, {
  canSort: true,
  id: 'description',
  size: 'large',
  title: 'Description',
  type: 'string'
}, {
  canSort: true,
  id: 'origin',
  size: 'medium',
  title: 'Origin / Region / Proof of truncated headers',
  type: 'string'
}, {
  canSort: true,
  hide: true,
  id: 'calories',
  title: 'Calories',
  type: 'number'
}, {
  canSort: true,
  hide: true,
  id: 'fat',
  title: 'Fat',
  type: 'number'
}, {
  canSort: true,
  hide: true,
  id: 'protein',
  title: 'Protein',
  type: 'number'
}, {
  canSort: true,
  hide: true,
  id: 'calcium',
  title: 'Calcium',
  type: 'number'
}];
exports.columns = columns;
//# sourceMappingURL=columns.js.map