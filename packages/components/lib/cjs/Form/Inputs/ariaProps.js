"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omitAriaAndValidationProps = omitAriaAndValidationProps;
exports.pickAriaAndValidationProps = pickAriaAndValidationProps;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _excluded = ["required", "validationType"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ariaKeys = ['aria-describedby', 'aria-invalid', 'aria-label', 'aria-labelledby'];

function pickAriaAndValidationProps(_ref) {
  var required = _ref.required,
      validationType = _ref.validationType,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var ariaProps = (0, _pick["default"])(props, ariaKeys);
  return _objectSpread(_objectSpread({}, ariaProps), {}, {
    'aria-invalid': validationType === 'error',
    required: required
  });
}

function omitAriaAndValidationProps(props) {
  return (0, _omit["default"])(props, [].concat(ariaKeys, ['validationType', 'required']));
}
//# sourceMappingURL=ariaProps.js.map