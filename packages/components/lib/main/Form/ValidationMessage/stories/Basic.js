"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["message", "type"];
function Basic(props) {
  var _props$message = props.message,
    message = _props$message === void 0 ? 'Error' : _props$message,
    _props$type = props.type,
    type = _props$type === void 0 ? 'error' : _props$type,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.ValidationMessage, (0, _extends2["default"])({
    message: message,
    type: type
  }, restProps));
}
//# sourceMappingURL=Basic.js.map