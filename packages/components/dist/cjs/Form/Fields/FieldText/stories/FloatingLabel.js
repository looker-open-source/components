"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingLabel;
var _componentsProviders = require("@looker/components-providers");
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _excluded = ["name", "label", "description", "detail"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function FloatingLabel(props) {
  var _props$name = props.name,
    name = _props$name === void 0 ? 'firstName' : _props$name,
    _props$label = props.label,
    label = _props$label === void 0 ? 'First Name' : _props$label,
    _props$description = props.description,
    description = _props$description === void 0 ? 'Some important information about this field' : _props$description,
    _props$detail = props.detail,
    detail = _props$detail === void 0 ? '0/50' : _props$detail,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_.FieldText, _extends({
    detail: detail,
    description: description,
    name: name,
    label: label
  }, restProps)));
}
//# sourceMappingURL=FloatingLabel.js.map