"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthList = void 0;
var _dateFns = require("date-fns");
var _react = _interopRequireDefault(require("react"));
var _ScrollableDateList = require("./ScrollableDateList");
var _Month = require("./Month");
var _excluded = ["currentDate", "baseMonth", "setBaseMonth", "onMonthChange"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getItemMonth = function getItemMonth(baseDate, offset) {
  var currentMonthIndex = (0, _dateFns.getMonth)(baseDate);
  return (0, _dateFns.setMonth)(baseDate, currentMonthIndex + offset);
};
var MonthList = function MonthList(_ref) {
  var currentDate = _ref.currentDate,
    baseMonth = _ref.baseMonth,
    setBaseMonth = _ref.setBaseMonth,
    onMonthChange = _ref.onMonthChange,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_ScrollableDateList.ScrollableDateList, {
    currentDate: currentDate,
    baseMonth: baseMonth,
    setBaseMonth: setBaseMonth,
    onMonthChange: onMonthChange,
    buffer: 12,
    getItemDate: getItemMonth,
    itemComponent: _Month.Month,
    itemProps: props,
    thresholdRatio: 5 / 7
  });
};
exports.MonthList = MonthList;
//# sourceMappingURL=MonthList.js.map