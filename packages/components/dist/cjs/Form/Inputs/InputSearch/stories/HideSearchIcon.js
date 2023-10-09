"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HideSearchIcon;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["hideSearchIcon", "placeholder"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function HideSearchIcon(props) {
  var _props$hideSearchIcon = props.hideSearchIcon,
    hideSearchIcon = _props$hideSearchIcon === void 0 ? false : _props$hideSearchIcon,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? 'No search icon here' : _props$placeholder,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.InputSearch, _extends({
    hideSearchIcon: hideSearchIcon,
    placeholder: placeholder
  }, restProps));
}
//# sourceMappingURL=HideSearchIcon.js.map