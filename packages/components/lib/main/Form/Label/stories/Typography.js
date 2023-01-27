"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Typography;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["children", "color", "fontSize", "fontWeight"];
function Typography(props) {
  var _props$children = props.children,
    children = _props$children === void 0 ? 'Label Text' : _props$children,
    _props$color = props.color,
    color = _props$color === void 0 ? 'key' : _props$color,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === void 0 ? 'xlarge' : _props$fontSize,
    _props$fontWeight = props.fontWeight,
    fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Label, (0, _extends2["default"])({
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight
  }, restProps), children);
}
//# sourceMappingURL=Typography.js.map