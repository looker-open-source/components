"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Indicator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@styled-icons/material");

var _react = _interopRequireDefault(require("react"));

var _Avatar = require("../../Avatar");

var _ = require("..");

var data = [{
  description: 'User',
  id: '1',
  indicator: _react["default"].createElement(_Avatar.AvatarIcon, {
    color: "key",
    icon: _react["default"].createElement(_material.PersonOutline, null)
  }),
  name: 'Gorgonzola'
}, {
  description: 'User',
  id: '2',
  indicator: _react["default"].createElement(_Avatar.AvatarIcon, {
    color: "key",
    icon: _react["default"].createElement(_material.PersonOutline, null)
  }),
  name: 'Cheddar'
}, {
  description: 'User',
  id: '3',
  indicator: _react["default"].createElement(_Avatar.AvatarIcon, {
    color: "key",
    icon: _react["default"].createElement(_material.PersonOutline, null)
  }),
  name: "Blue"
}];
var columns = [{
  id: 'id',
  title: 'ID'
}, {
  id: 'name',
  title: 'Name'
}];
var items = data.map(function (_ref) {
  var description = _ref.description,
      id = _ref.id,
      indicator = _ref.indicator,
      name = _ref.name;
  return _react["default"].createElement(_.DataTableItem, {
    key: id,
    id: id
  }, _react["default"].createElement(_.DataTableCell, null, id), _react["default"].createElement(_.DataTableCell, {
    indicator: indicator,
    description: description
  }, name));
});

var Template = function Template(_ref2) {
  var args = (0, _extends2["default"])({}, _ref2);
  return _react["default"].createElement(_.DataTable, args);
};

var Indicator = Template.bind({});
exports.Indicator = Indicator;
Indicator.args = {
  children: items,
  columns: columns
};
Indicator.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Indicator.js.map