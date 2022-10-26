"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DaysOfWeek = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Layout = require("../Layout");

var _templateObject;

var DaysOfWeek = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
      firstDayOfWeek = _ref.firstDayOfWeek,
      locale = _ref.locale;
  var allDays = Array.from(Array(7), function (_, i) {
    var _locale$localize;

    return (_locale$localize = locale.localize) === null || _locale$localize === void 0 ? void 0 : _locale$localize.day(i, {
      width: 'narrow'
    });
  });
  var daysOfWeek = [].concat((0, _toConsumableArray2["default"])(allDays.slice(firstDayOfWeek)), (0, _toConsumableArray2["default"])(allDays.slice(0, firstDayOfWeek)));
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement(_Layout.Grid, {
    columns: 7,
    gap: "none"
  }, daysOfWeek.map(function (day, i) {
    return _react["default"].createElement("div", {
      key: i
    }, day);
  })));
}).withConfig({
  displayName: "DaysOfWeek",
  componentId: "sc-10k3m05-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  ", " {\n    padding-left: ", ";\n    width: fit-content;\n    div {\n      color: ", ";\n      font-family: ", ";\n      font-size: ", ";\n      line-height: ", ";\n      text-align: center;\n      width: ", ";\n    }\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui1;
}, _Layout.Grid, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u5;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text2;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.fonts.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSizes.xsmall;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.u8;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.u8;
});
exports.DaysOfWeek = DaysOfWeek;
//# sourceMappingURL=DaysOfWeek.js.map