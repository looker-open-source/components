"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accept;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["handleFile", "accept", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Accept(props) {
  var _props$handleFile = props.handleFile,
    handleFile = _props$handleFile === void 0 ? function () {} : _props$handleFile,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? '.pdf' : _props$accept,
    _props$value = props.value,
    value = _props$value === void 0 ? 'Accepts only PDF files' : _props$value,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.InputFile, _extends({
    handleFile: handleFile,
    accept: accept,
    value: value
  }, restProps));
}
//# sourceMappingURL=Accept.js.map