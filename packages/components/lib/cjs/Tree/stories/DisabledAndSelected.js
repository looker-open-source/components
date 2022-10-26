"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisabledAndSelected = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _Grid = require("../../Layout/Grid");

var _excluded = ["children"];

var Basic = function Basic(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, (0, _extends2["default"])({
    label: children,
    defaultOpen: true
  }, props), _react["default"].createElement(_.Tree, {
    disabled: true,
    label: _react["default"].createElement("strong", null, "Disabled Tree"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    disabled: true
  }, "Disabled TreeItem"), _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Selected TreeItem")), _react["default"].createElement(_.Tree, {
    selected: true,
    label: _react["default"].createElement("strong", null, "Selected Tree"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, {
    disabled: true
  }, "Disabled TreeItem"), _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Selected TreeItem"))));
};

var DisabledAndSelected = function DisabledAndSelected() {
  return _react["default"].createElement(_Grid.Grid, {
    columns: 3
  }, _react["default"].createElement(Basic, null, _react["default"].createElement("strong", null, "Default")), _react["default"].createElement(Basic, {
    color: "key"
  }, _react["default"].createElement("strong", null, "Key")), _react["default"].createElement(Basic, {
    color: "calculation"
  }, _react["default"].createElement("strong", null, "Dimension")));
};

exports.DisabledAndSelected = DisabledAndSelected;
//# sourceMappingURL=DisabledAndSelected.js.map