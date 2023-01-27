"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _excluded = ["children"];
function Basic(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? 'Hey! This is a message to you.' : _props$children,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.MessageBar, rest, children);
}
//# sourceMappingURL=Basic.js.map