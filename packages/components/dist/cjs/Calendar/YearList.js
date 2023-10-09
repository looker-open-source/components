"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YearList = void 0;
var _dateFns = require("date-fns");
var _react = _interopRequireDefault(require("react"));
var _ScrollableDateList = require("./ScrollableDateList");
var _Year = require("./Year");
var _excluded = ["baseMonth", "setBaseMonth", "onMonthChange", "currentDate"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getItemMonth = function getItemMonth(baseDate, offset) {
  var currentMonthIndex = (0, _dateFns.getYear)(baseDate);
  return (0, _dateFns.setYear)(baseDate, currentMonthIndex + offset);
};
var YearList = function YearList(_ref) {
  var baseMonth = _ref.baseMonth,
    setBaseMonth = _ref.setBaseMonth,
    onMonthChange = _ref.onMonthChange,
    currentDate = _ref.currentDate,
    props = _objectWithoutProperties(_ref, _excluded);
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