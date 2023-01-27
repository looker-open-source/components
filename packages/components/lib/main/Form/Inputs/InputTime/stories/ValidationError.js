"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ValidationError;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["validationType"];
function ValidationError(props) {
  var _props$validationType = props.validationType,
    validationType = _props$validationType === void 0 ? 'error' : _props$validationType,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputTime, (0, _extends2["default"])({
    validationType: validationType
  }, restProps));
}
//# sourceMappingURL=ValidationError.js.map