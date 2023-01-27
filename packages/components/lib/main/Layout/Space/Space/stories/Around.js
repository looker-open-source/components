"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Around;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../..");
var _excluded = ["around"];
function Around(props) {
  var _props$around = props.around,
    around = _props$around === void 0 ? true : _props$around,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Space, (0, _extends2["default"])({}, rest, {
    around: around
  }), _react["default"].createElement(_.Button, null, "Button A"), _react["default"].createElement(_.Button, null, "Button B"), _react["default"].createElement(_.Button, null, "Button C"));
}
//# sourceMappingURL=Around.js.map