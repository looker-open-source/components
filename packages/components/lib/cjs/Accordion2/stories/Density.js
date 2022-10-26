"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Density;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Density() {
  return _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.Grid, {
    columns: 5
  }, _react["default"].createElement(_.Accordion2, {
    defaultOpen: true,
    density: 1,
    label: "Density Example: 1"
  }, "Content within accordion."), _react["default"].createElement(_.Accordion2, {
    defaultOpen: true,
    density: 0,
    label: "Density Example: 0"
  }, "Content within accordion."), _react["default"].createElement(_.Accordion2, {
    defaultOpen: true,
    density: -1,
    label: "Density Example: -1"
  }, "Content within accordion."), _react["default"].createElement(_.Accordion2, {
    defaultOpen: true,
    density: -2,
    label: "Density Example: -2"
  }, "Content within accordion."), _react["default"].createElement(_.Accordion2, {
    defaultOpen: true,
    density: -3,
    label: "Density Example: -3"
  }, "Content within accordion.")));
}
//# sourceMappingURL=Density.js.map