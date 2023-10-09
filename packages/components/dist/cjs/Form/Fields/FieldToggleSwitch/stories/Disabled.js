"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checked;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["label", "name", "id", "disabled"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Checked(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? 'Toggle Switch' : _props$label,
    _props$name = props.name,
    name = _props$name === void 0 ? 'thumbsUp' : _props$name,
    _props$id = props.id,
    id = _props$id === void 0 ? 'id' : _props$id,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? true : _props$disabled,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.FieldToggleSwitch, _extends({
    id: id,
    label: label,
    name: name,
    disabled: disabled
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map