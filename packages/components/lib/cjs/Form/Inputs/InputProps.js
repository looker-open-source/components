"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickInputProps = exports.inputPropKeys = exports.getAutoFocusProps = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _excluded = ["autoFocus"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var inputProps = (0, _pick["default"])(props, inputPropKeys);
  return _objectSpread(_objectSpread({}, getAutoFocusProps(autoFocus)), inputProps);
};

exports.pickInputProps = pickInputProps;
//# sourceMappingURL=InputProps.js.map