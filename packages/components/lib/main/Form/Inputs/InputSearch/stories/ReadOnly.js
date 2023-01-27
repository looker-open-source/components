"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadOnly;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["value", "readOnly"];
function ReadOnly(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? "You can't change me." : _props$value,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? true : _props$readOnly,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputSearch, (0, _extends2["default"])({
    value: value,
    readOnly: readOnly
  }, restProps));
}
//# sourceMappingURL=ReadOnly.js.map