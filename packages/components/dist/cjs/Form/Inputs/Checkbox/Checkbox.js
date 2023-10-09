"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _noop = _interopRequireDefault(require("lodash/noop"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _Ripple = require("../../../Ripple");
var _InputProps = require("../InputProps");
var _CheckMark = require("./CheckMark");
var _CheckMarkMixed = require("./CheckMarkMixed");
var _FauxCheckbox = require("./FauxCheckbox");
var _excluded = ["className", "checked", "defaultChecked", "onChange", "readOnly", "style", "validationType"],
  _excluded2 = ["callbacks"];
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Checkbox = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
    checked = props.checked,
    defaultChecked = props.defaultChecked,
    onChange = props.onChange,
    readOnly = props.readOnly,
    style = props.style,
    validationType = props.validationType,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _react.useState)(!!defaultChecked),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var _useRipple = (0, _Ripple.useRipple)({
      className: className,
      color: (0, _Ripple.inputRippleColor)(isChecked !== false, validationType === 'error'),
      size: _Ripple.RIPPLE_RATIO,
      style: style
    }),
    callbacks = _useRipple.callbacks,
    rippleProps = _objectWithoutProperties(_useRipple, _excluded2);
  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(restProps, _Ripple.rippleHandlerKeys), restProps.disabled);
  var handleClick = readOnly ? undefined : function (e) {
    if ((0, _isUndefined["default"])(checked)) {
      setIsChecked(!isChecked);
    }
    if (onChange) {
      var changeEvent = _objectSpread(_objectSpread({}, e), {}, {
        target: e.currentTarget
      });
      onChange(changeEvent);
    }
  };
  (0, _react.useEffect)(function () {
    if (!(0, _isUndefined["default"])(checked)) {
      setIsChecked(checked);
    }
  }, [checked]);
  return _react["default"].createElement("div", rippleProps, _react["default"].createElement("input", _extends({
    type: "checkbox"
  }, (0, _InputProps.pickInputProps)(restProps), {
    checked: !!isChecked,
    "aria-checked": checked,
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    onClick: handleClick,
    onChange: _noop["default"],
    ref: ref
  }, rippleHandlers)), _react["default"].createElement(_FauxCheckbox.FauxCheckbox, {
    isSelected: !!isChecked
  }, checked === 'mixed' ? _react["default"].createElement(_CheckMarkMixed.CheckMarkMixed, null) : _react["default"].createElement(_CheckMark.CheckMark, null)));
})).withConfig({
  displayName: "Checkbox",
  componentId: "sc-9j2vap-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n\n  align-items: center;\n  display: flex;\n  height: ", ";\n  justify-content: center;\n  position: relative;\n  width: ", ";\n\n  input {\n    cursor: ", ";\n    height: 100%;\n    left: 0;\n    margin: 0;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n\n    &[aria-invalid='true'] {\n      + ", " {\n        border-color: ", ";\n      }\n      &:checked + ", " {\n        background: ", ";\n      }\n    }\n    &:disabled {\n      + ", ", &:not(:checked):hover + ", " {\n        border-color: ", ";\n      }\n      &:checked + ", " {\n        background: ", ";\n      }\n    }\n    &:not(:checked):not([aria-invalid='true']):not(:disabled) {\n      &:hover,\n      &:focus {\n        + ", " {\n          border-color: ", ";\n        }\n      }\n    }\n  }\n"])), _designTokens.reset, _designTokens.space, _Ripple.rippleStyle, function (_ref) {
  var space = _ref.theme.space;
  return space.u6;
}, function (_ref2) {
  var space = _ref2.theme.space;
  return space.u6;
}, function (_ref3) {
  var readOnly = _ref3.readOnly,
    disabled = _ref3.disabled;
  return readOnly || disabled ? 'not-allowed' : undefined;
}, _FauxCheckbox.FauxCheckbox, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.critical;
}, _FauxCheckbox.FauxCheckbox, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.critical;
}, _FauxCheckbox.FauxCheckbox, _FauxCheckbox.FauxCheckbox, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.ui2;
}, _FauxCheckbox.FauxCheckbox, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.ui2;
}, _FauxCheckbox.FauxCheckbox, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.ui5;
});
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map