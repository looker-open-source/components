"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HitArea = exports.Day = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _dateFns = require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _Ripple = require("../Ripple");

var _utils = require("./utils");

var _excluded = ["className", "date", "locale", "onDraftSelect", "onSelect", "selected", "style"],
    _excluded2 = ["callbacks"];

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var HitArea = _styledComponents["default"].div.withConfig({
  displayName: "Day__HitArea",
  componentId: "sc-14dncin-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", ";\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: ", ";\n"])), function (_ref) {
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
      props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded);
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
      rippleProps = (0, _objectWithoutProperties2["default"])(_useRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, _objectSpread(_objectSpread({}, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys)), {}, {
    onFocus: handleHoverFocus,
    onMouseEnter: handleHoverFocus
  }), props.disabled);
  return _react["default"].createElement("button", (0, _extends2["default"])({}, props, {
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
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: transparent;\n  border: none;\n  border-radius: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  height: ", ";\n  line-height: ", ";\n  margin: 0 ", ";\n  outline: none;\n  position: relative;\n  width: ", ";\n  &[aria-current='date'] {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  &[aria-selected='true'] {\n    background: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n  }\n"])), _Ripple.rippleStyle, function (_ref4) {
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