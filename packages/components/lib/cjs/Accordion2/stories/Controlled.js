"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

var _useToggle2 = require("../../utils/useToggle");

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function Controlled() {
  var _useToggle = (0, _useToggle2.useToggle)(true),
      value = _useToggle.value,
      change = _useToggle.change;

  return _react["default"].createElement(_.Accordion2, {
    isOpen: value,
    toggleOpen: change,
    label: "See more"
  }, lorem);
}
//# sourceMappingURL=Controlled.js.map