"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickInputProps = exports.inputPropKeys = exports.getAutoFocusProps = void 0;
var _pick = _interopRequireDefault(require("lodash/pick"));
var _excluded = ["autoFocus"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var inputPropKeys = ['accept', 'autoFocus', 'autoComplete', 'checked', 'data-autofocus', 'data-testid', 'defaultValue', 'defaultChecked', 'disabled', 'id', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'onBlur', 'onChange', 'onClick', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onFocus', 'onKeyDown', 'onKeyPress', 'onPaste', 'placeholder', 'readOnly', 'required', 'pattern', 'step', 'tabIndex', 'value', 'aria-activedescendant', 'aria-autocomplete', 'aria-invalid', 'aria-label', 'aria-describedby', 'aria-labelledby'];
exports.inputPropKeys = inputPropKeys;
var getAutoFocusProps = function getAutoFocusProps(autoFocus) {
  return autoFocus ? {
    autoFocus: autoFocus,
    'data-autofocus': 'true'
  } : {};
};
exports.getAutoFocusProps = getAutoFocusProps;
var pickInputProps = function pickInputProps(_ref) {
  var autoFocus = _ref.autoFocus,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputProps = (0, _pick["default"])(props, inputPropKeys);
  return _objectSpread(_objectSpread({}, getAutoFocusProps(autoFocus)), inputProps);
};
exports.pickInputProps = pickInputProps;
//# sourceMappingURL=InputProps.js.map