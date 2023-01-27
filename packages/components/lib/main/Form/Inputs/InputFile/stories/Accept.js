"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accept;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["handleFile", "accept", "value"];
function Accept(props) {
  var _props$handleFile = props.handleFile,
    handleFile = _props$handleFile === void 0 ? function () {
    } : _props$handleFile,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? '.pdf' : _props$accept,
    _props$value = props.value,
    value = _props$value === void 0 ? 'Accepts only PDF files' : _props$value,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.InputFile, (0, _extends2["default"])({
    handleFile: handleFile,
    accept: accept,
    value: value
  }, restProps));
}
//# sourceMappingURL=Accept.js.map