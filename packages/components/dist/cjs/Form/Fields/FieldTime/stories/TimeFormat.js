"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeFormat;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["defaultValue", "description", "detail", "label", "format"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function TimeFormat(props) {
  var _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '14:34' : _props$defaultValue,
    _props$description = props.description,
    description = _props$description === void 0 ? 'set "format" prop to either `12h` or `24h`' : _props$description,
    _props$detail = props.detail,
    detail = _props$detail === void 0 ? 'detail' : _props$detail,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Label' : _props$label,
    _props$format = props.format,
    format = _props$format === void 0 ? '24h' : _props$format,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.FieldTime, _extends({
    format: format,
    label: label,
    defaultValue: defaultValue,
    description: description,
    detail: detail
  }, restProps));
}
//# sourceMappingURL=TimeFormat.js.map