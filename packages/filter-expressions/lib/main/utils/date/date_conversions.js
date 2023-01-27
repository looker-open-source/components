"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasTimeFilterDateTimeModel = exports.filterDateTimeModelToDate = exports.dateToFilterDateTimeModel = exports.clearTimeFilterDateTimeModel = exports.addDays = void 0;

var dateToFilterDateTimeModel = function dateToFilterDateTimeModel() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};
exports.dateToFilterDateTimeModel = dateToFilterDateTimeModel;
var filterDateTimeModelToDate = function filterDateTimeModelToDate(_ref) {
  var year = _ref.year,
    month = _ref.month,
    day = _ref.day,
    _ref$hour = _ref.hour,
    hour = _ref$hour === void 0 ? 0 : _ref$hour,
    _ref$minute = _ref.minute,
    minute = _ref$minute === void 0 ? 0 : _ref$minute,
    _ref$second = _ref.second,
    second = _ref$second === void 0 ? 0 : _ref$second;
  return new Date(year, month - 1, day, hour, minute, second);
};
exports.filterDateTimeModelToDate = filterDateTimeModelToDate;
var addDays = function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

exports.addDays = addDays;
var clearTimeFilterDateTimeModel = function clearTimeFilterDateTimeModel(model) {
  return {
    year: model.year,
    month: model.month,
    day: model.day
  };
};

exports.clearTimeFilterDateTimeModel = clearTimeFilterDateTimeModel;
var hasTimeFilterDateTimeModel = function hasTimeFilterDateTimeModel(model) {
  return model !== undefined && model.hour !== undefined && model.minute !== undefined && model.second !== undefined;
};
exports.hasTimeFilterDateTimeModel = hasTimeFilterDateTimeModel;
//# sourceMappingURL=date_conversions.js.map