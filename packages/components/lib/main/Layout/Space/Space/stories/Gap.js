"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Gap;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../..");
var _excluded = ["gap"];
function Gap(props) {
  var _props$gap = props.gap,
    gap = _props$gap === void 0 ? 'u8' : _props$gap,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Space, (0, _extends2["default"])({}, rest, {
    gap: gap
  }), _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, null, "Button B"), _react["default"].createElement(_.Button, null, "Button C"));
}
//# sourceMappingURL=Gap.js.map