"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VerticalReverse;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../..");
var _excluded = ["reverse"];
function VerticalReverse(props) {
  var _props$reverse = props.reverse,
    reverse = _props$reverse === void 0 ? true : _props$reverse,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.SpaceVertical, (0, _extends2["default"])({}, rest, {
    reverse: reverse
  }), _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, null, "Button B"), _react["default"].createElement(_.Button, null, "Button C"));
}
//# sourceMappingURL=VerticalReverse.js.map