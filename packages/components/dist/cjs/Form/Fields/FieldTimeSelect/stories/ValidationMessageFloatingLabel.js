"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ValidationMessageFloatingLabel;
var _react = _interopRequireDefault(require("react"));
var _componentsProviders = require("@looker/components-providers");
var _ = require("..");
var _excluded = ["description", "detail", "interval", "label", "required", "validationMessage"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ValidationMessageFloatingLabel(props) {
  var _props$description = props.description,
    description = _props$description === void 0 ? 'this is the description is a very long one' : _props$description,
    _props$detail = props.detail,
    detail = _props$detail === void 0 ? 'detail' : _props$detail,
    _props$interval = props.interval,
    interval = _props$interval === void 0 ? 10 : _props$interval,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Select Time' : _props$label,
    _props$required = props.required,
    required = _props$required === void 0 ? true : _props$required,
    _props$validationMess = props.validationMessage,
    validationMessage = _props$validationMess === void 0 ? {
      message: 'validation Message',
      type: 'error'
    } : _props$validationMess,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_.FieldTimeSelect, _extends({
    description: description,
    detail: detail,
    interval: interval,
    label: label,
    required: required,
    validationMessage: validationMessage
  }, restProps)));
}
//# sourceMappingURL=ValidationMessageFloatingLabel.js.map