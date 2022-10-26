"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _Ripple = require("../../../Ripple");

var _InputProps = require("../InputProps");

var _FauxRadio = require("./FauxRadio");

var _excluded = ["className", "style", "validationType"],
    _excluded2 = ["callbacks"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Radio = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      style = props.style,
      validationType = props.validationType,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useRipple = (0, _Ripple.useRipple)({
    className: className,
    color: (0, _Ripple.inputRippleColor)(props.checked === true, validationType === 'error'),
    size: _Ripple.RIPPLE_RATIO,
    style: style
  }),
      callbacks = _useRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(restProps, _Ripple.rippleHandlerKeys), restProps.disabled);
  return _react["default"].createElement("div", rippleProps, _react["default"].createElement("input", (0, _extends2["default"])({}, (0, _InputProps.pickInputProps)(restProps), {
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    ref: ref,
    type: "radio"
  }, rippleHandlers)), _react["default"].createElement(_FauxRadio.FauxRadio, null));
})).withConfig({
  displayName: "Radio",
  componentId: "sc-1e6vir3-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n\n  align-items: center;\n  display: flex;\n  height: ", ";\n  justify-content: center;\n  position: relative;\n  width: ", ";\n\n  input {\n    height: 100%;\n    left: 0;\n    margin: 0;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n\n    &:checked + ", " {\n      color: ", ";\n      &::after {\n        background: currentColor;\n      }\n    }\n    &[aria-invalid='true'] + ", " {\n      color: ", ";\n    }\n    &:disabled {\n      cursor: not-allowed;\n      + ", ", &:not(:checked):hover + ", " {\n        color: ", ";\n      }\n    }\n    &:not(:checked):not([aria-invalid='true']):not(:disabled) {\n      &:hover,\n      &:focus {\n        + ", " {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), _designTokens.reset, _designTokens.space, _Ripple.rippleStyle, function (_ref) {
  var space = _ref.theme.space;
  return space.u6;
}, function (_ref2) {
  var space = _ref2.theme.space;
  return space.u6;
}, _FauxRadio.FauxRadio, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.key;
}, _FauxRadio.FauxRadio, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.critical;
}, _FauxRadio.FauxRadio, _FauxRadio.FauxRadio, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.ui2;
}, _FauxRadio.FauxRadio, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.ui5;
});
exports.Radio = Radio;
//# sourceMappingURL=Radio.js.map