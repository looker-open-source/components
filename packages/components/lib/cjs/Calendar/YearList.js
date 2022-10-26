"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearList = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _dateFns = require("date-fns");

var _react = _interopRequireDefault(require("react"));

var _ScrollableDateList = require("./ScrollableDateList");

var _Year = require("./Year");

var _excluded = ["baseMonth", "setBaseMonth", "onMonthChange", "currentDate"];

var getItemMonth = function getItemMonth(baseDate, offset) {
  var currentMonthIndex = (0, _dateFns.getYear)(baseDate);
  return (0, _dateFns.setYear)(baseDate, currentMonthIndex + offset);
};

var YearList = function YearList(_ref) {
  var baseMonth = _ref.baseMonth,
      setBaseMonth = _ref.setBaseMonth,
      onMonthChange = _ref.onMonthChange,
      currentDate = _ref.currentDate,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_ScrollableDateList.ScrollableDateList, {
    currentDate: currentDate,
    baseMonth: baseMonth,
    setBaseMonth: setBaseMonth,
    onMonthChange: onMonthChange,
    buffer: 10,
    getItemDate: getItemMonth,
    itemComponent: _Year.Year,
    itemProps: props,
    thresholdRatio: 7 / 11
  });
};

exports.YearList = YearList;
//# sourceMappingURL=YearList.js.map