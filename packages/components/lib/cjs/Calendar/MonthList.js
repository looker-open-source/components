"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MonthList = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _dateFns = require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _ScrollableDateList = require("./ScrollableDateList");

var _Month = require("./Month");

var _excluded = ["currentDate", "baseMonth", "setBaseMonth", "onMonthChange"];

var getItemMonth = function getItemMonth(baseDate, offset) {
  var currentMonthIndex = (0, _dateFns.getMonth)(baseDate);
  return (0, _dateFns.setMonth)(baseDate, currentMonthIndex + offset);
};

var MonthList = function MonthList(_ref) {
  var currentDate = _ref.currentDate,
      baseMonth = _ref.baseMonth,
      setBaseMonth = _ref.setBaseMonth,
      onMonthChange = _ref.onMonthChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
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