"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _noop = _interopRequireDefault(require("lodash/noop"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Ripple = require("../../../Ripple");

var _constants = require("../../constants");

var _InputProps = require("../InputProps");

var _Handle = require("./Handle");

var _Track = require("./Track");

var _excluded = ["className", "disabled", "on", "onChange", "readOnly", "validationType"],
    _excluded2 = ["callbacks"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ToggleSwitch = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      on = _ref.on,
      onChange = _ref.onChange,
      readOnly = _ref.readOnly,
      validationType = _ref.validationType,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useRipple = (0, _Ripple.useRipple)({
    color: (0, _Ripple.inputRippleColor)(!!on, validationType === 'error'),
    size: _Ripple.RIPPLE_RATIO
  }),
      callbacks = _useRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys), disabled);
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("input", (0, _extends2["default"])({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: readOnly ? _noop["default"] : onChange,
    role: "switch",
    "aria-checked": on,
    "aria-invalid": validationType === 'error' ? 'true' : undefined,
    ref: ref
  }, (0, _InputProps.pickInputProps)(props), rippleHandlers)), _react["default"].createElement(_Track.Track, {
    on: on,
    validationType: validationType
  }), _react["default"].createElement(_Handle.Handle, (0, _extends2["default"])({
    on: on,
    validationType: validationType
  }, rippleProps)));
})).withConfig({
  displayName: "ToggleSwitch",
  componentId: "sc-wcqgi4-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  align-items: center;\n  display: flex;\n  height: ", ";\n  justify-content: center;\n  opacity: ", ";\n  position: relative;\n  width: ", ";\n\n  input {\n    cursor: ", ";\n    height: 100%;\n    left: 0;\n    margin: 0; /* Suppress browser default styling */\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1;\n  }\n"])), _designTokens.reset, _designTokens.space, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u6;
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && _constants.DISABLED_OPACITY;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u10;
}, function (_ref5) {
  var disabled = _ref5.disabled,
      readOnly = _ref5.readOnly;
  return disabled || readOnly ? 'not-allowed' : 'pointer';
});
exports.ToggleSwitch = ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.js.map