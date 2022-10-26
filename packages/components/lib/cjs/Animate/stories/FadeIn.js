"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

var _useToggle2 = require("../../utils/useToggle");

var _default = function _default() {
  var _useToggle = (0, _useToggle2.useToggle)(false),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    onClick: toggle
  }, "Toggle Content"), value && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.FadeIn, null, "This fades in."), _react["default"].createElement(_.FadeIn, {
    delay: "complex",
    duration: "intricate"
  }, "This fades in more slowly.")));
};

exports["default"] = _default;
//# sourceMappingURL=FadeIn.js.map