"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorfulTree = void 0;

var _react = _interopRequireDefault(require("react"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _ = require("..");

var ColorfulTree = function ColorfulTree() {
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    defaultOpen: true,
    label: _react["default"].createElement("strong", null, "Colorful Tree")
  }, _react["default"].createElement(_.TreeItem, {
    color: "green",
    icon: _react["default"].createElement(_materialOutlined.DateRange, null)
  }, "Green TreeItem"), _react["default"].createElement(_.Tree, {
    color: "blue",
    defaultOpen: true,
    icon: _react["default"].createElement(_materialOutlined.DateRange, null),
    label: _react["default"].createElement("strong", null, "Blue Tree")
  }, _react["default"].createElement(_.TreeItem, {
    color: "purple",
    icon: _react["default"].createElement(_materialOutlined.DateRange, null)
  }, "Purple TreeItem"))));
};

exports.ColorfulTree = ColorfulTree;
//# sourceMappingURL=ColorfulTree.js.map