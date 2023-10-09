"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HitArea = exports.Day = void 0;
var _dateFns = require("date-fns");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _Ripple = require("../Ripple");
var _utils = require("./utils");
var _excluded = ["className", "date", "locale", "onDraftSelect", "onSelect", "selected", "style"],
  _excluded2 = ["callbacks"];
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HitArea = _styledComponents["default"].div.withConfig({
  displayName: "Day__HitArea",
  componentId: "sc-14dncin-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.space.u8;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u8;
});
exports.HitArea = HitArea;
var Day = (0, _styledComponents["default"])(function (_ref3) {
  var className = _ref3.className,
    date = _ref3.date,
    locale = _ref3.locale,
    onDraftSelect = _ref3.onDraftSelect,
    onSelect = _ref3.onSelect,
    selected = _ref3.selected,
    style = _ref3.style,
    props = _objectWithoutProperties(_ref3, _excluded);
  var dateString = (0, _utils.formatDateString)(date, 'EEE MMM dd, yyyy', locale);
  var today = (0, _dateFns.isSameDay)(date, new Date());
  var handleClick = function handleClick() {
    onSelect(date);
  };
  var handleHoverFocus = function handleHoverFocus() {
    return onDraftSelect(date);
  };
  var _useRipple = (0, _Ripple.useRipple)({
      className: className,
      color: 'neutral',
      style: style
    }),
    callbacks = _useRipple.callbacks,
    rippleProps = _objectWithoutProperties(_useRipple, _excluded2);
  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, _objectSpread(_objectSpread({}, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys)), {}, {
    onFocus: handleHoverFocus,
    onMouseEnter: handleHoverFocus
  }), props.disabled);
  return _react["default"].createElement("button", _extends({}, props, {
    "aria-current": today ? 'date' : 'false',
    "aria-label": dateString,
    "aria-selected": selected,
    onClick: handleClick,
    title: dateString,
    type: "button"
  }, rippleProps, rippleHandlers), _react["default"].createElement(HitArea, null), (0, _dateFns.getDate)(date));
}).withConfig({
  displayName: "Day",
  componentId: "sc-14dncin-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  background-color: transparent;\n  border: none;\n  border-radius: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  height: ", ";\n  line-height: ", ";\n  margin: 0 ", ";\n  outline: none;\n  position: relative;\n  width: ", ";\n  &[aria-current='date'] {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  &[aria-selected='true'] {\n    background: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n"])), _Ripple.rippleStyle, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u5;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.text3;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fonts.body;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontSizes.xsmall;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.u7;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.space.u4;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.space.u05;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.space.u7;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.key;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.key;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.key;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.key;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.background;
});
exports.Day = Day;
//# sourceMappingURL=Day.js.map