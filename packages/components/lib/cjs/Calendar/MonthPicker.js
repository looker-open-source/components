"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _Ripple = require("../Ripple");

var _dateConfirmations = require("./utils/dateConfirmations");

var _excluded = ["className", "date", "isTodaysMonth", "locale", "monthNumber", "onMonthClick", "selected", "selectedMonth", "style"],
    _excluded2 = ["callbacks"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MonthPicker = (0, _styledComponents["default"])(function (_ref) {
  var _locale$localize;

  var className = _ref.className,
      _ref$date = _ref.date,
      date = _ref$date === void 0 ? new Date() : _ref$date,
      isTodaysMonth = _ref.isTodaysMonth,
      locale = _ref.locale,
      monthNumber = _ref.monthNumber,
      onMonthClick = _ref.onMonthClick,
      selected = _ref.selected,
      selectedMonth = _ref.selectedMonth,
      style = _ref.style,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
    className: className,
    color: 'neutral',
    style: style
  }),
      callbacks = _useBoundedRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useBoundedRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(restProps, _Ripple.rippleHandlerKeys), restProps.disabled);
  var isMonth = selectedMonth && (0, _dateConfirmations.isThisMonth)(selectedMonth, monthNumber, date);
  isTodaysMonth = isTodaysMonth && (0, _dateConfirmations.isThisMonth)(new Date(), monthNumber, date);
  return _react["default"].createElement("button", (0, _extends2["default"])({
    "aria-current": isTodaysMonth,
    "aria-selected": isMonth,
    type: "button",
    onClick: (0, _react.useCallback)(function () {
      return onMonthClick(monthNumber);
    }, [monthNumber, onMonthClick])
  }, restProps, rippleProps, rippleHandlers), (_locale$localize = locale.localize) === null || _locale$localize === void 0 ? void 0 : _locale$localize.month(monthNumber, {
    width: 'abbreviated'
  }));
}).withConfig({
  displayName: "MonthPicker",
  componentId: "sc-mrnrtl-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background: transparent;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  height: ", ";\n  width: ", ";\n  &[aria-current='true'] {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n  &[aria-selected='true'] {\n    background: ", ";\n    color: ", ";\n  }\n"])), _Ripple.rippleStyle, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u5;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text3;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fontSizes.xsmall;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontWeights.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.u7;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.u12;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.key;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.key;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.key;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.keyText;
});
exports.MonthPicker = MonthPicker;
//# sourceMappingURL=MonthPicker.js.map