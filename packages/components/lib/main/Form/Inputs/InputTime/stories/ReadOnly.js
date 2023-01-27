"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadOnly;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["readOnly", "defaultValue"];
function ReadOnly(props) {
  var _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? true : _props$readOnly,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '10:01' : _props$defaultValue,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputTime, (0, _extends2["default"])({
    readOnly: readOnly,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=ReadOnly.js.map