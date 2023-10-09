"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Typography;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["children", "color", "fontSize", "fontWeight"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Typography(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? 'Label Text' : _props$children,
    _props$color = props.color,
    color = _props$color === void 0 ? 'key' : _props$color,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === void 0 ? 'xlarge' : _props$fontSize,
    _props$fontWeight = props.fontWeight,
    fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.Label, _extends({
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight
  }, restProps), children);
}
//# sourceMappingURL=Typography.js.map