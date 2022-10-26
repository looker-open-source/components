"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

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

var Checkbox = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      onChange = props.onChange,
      readOnly = props.readOnly,
      style = props.style,
      validationType = props.validationType,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useState = (0, _react.useState)(!!defaultChecked),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var _useRipple = (0, _Ripple.useRipple)({
    className: className,
    color: (0, _Ripple.inputRippleColor)(isChecked !== false, validationType === 'error'),
    size: _Ripple.RIPPLE_RATIO,
    style: style
  }),
      callbacks = _useRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(restProps, _Ripple.rippleHandlerKeys), restProps.disabled);
  var handleClick = readOnly ? undefined : function (e) {
    if ((0, _isUndefined["default"])(checked)) {
      setIsChecked(!isChecked);
    }

    if (onChange) {
      onChange(e);
    }
  };
  (0, _react.useEffect)(function () {
    if (!(0, _isUndefined["default"])(checked)) {
      setIsChecked(checked);
    }
  }, [checked]);
  return _react["default"].createElement("div", rippleProps, _react["default"].createElement("input", (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n\n  align-items: center;\n  display: flex;\n  height: ", ";\n  justify-content: center;\n  position: relative;\n  width: ", ";\n\n  input {\n    cursor: ", ";\n    height: 100%;\n    left: 0;\n    margin: 0;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n\n    &[aria-invalid='true'] {\n      + ", " {\n        border-color: ", ";\n      }\n      &:checked + ", " {\n        background: ", ";\n      }\n    }\n    &:disabled {\n      + ", ", &:not(:checked):hover + ", " {\n        border-color: ", ";\n      }\n      &:checked + ", " {\n        background: ", ";\n      }\n    }\n    &:not(:checked):not([aria-invalid='true']):not(:disabled) {\n      &:hover,\n      &:focus {\n        + ", " {\n          border-color: ", ";\n        }\n      }\n    }\n  }\n"])), _designTokens.reset, _designTokens.space, _Ripple.rippleStyle, function (_ref) {
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