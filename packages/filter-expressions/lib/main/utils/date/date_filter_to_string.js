"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateFilterToString = void 0;
var _user_attribute_to_string = require("../user_attribute/user_attribute_to_string");
var _null_item_to_string = _interopRequireDefault(require("../to_string/null_item_to_string"));
var _tree_to_string = require("../tree/tree_to_string");
var _is_date_time = require("./is_date_time");
var _zero_pad = require("./zero_pad");
var _date_conversions = require("./date_conversions");

var datetime = function datetime(date, showTime) {
  if (!date) return 'Invalid Date';
  var year = date.year,
    month = date.month,
    day = date.day,
    hour = date.hour,
    minute = date.minute;
  var result = String((0, _zero_pad.zeroPad4)(year));
  result += month ? "/".concat((0, _zero_pad.zeroPad2)(month)) : '';
  result += day ? "/".concat((0, _zero_pad.zeroPad2)(day)) : '';
  if (showTime) {
    result += hour !== undefined ? " ".concat((0, _zero_pad.zeroPad2)(hour)) : '';
    result += minute !== undefined ? ":".concat((0, _zero_pad.zeroPad2)(minute)) : '';
  }
  return result;
};
var beforeAfter = function beforeAfter(item, showTime) {
  var type = item.type,
    range = item.range,
    date = item.date,
    fromnow = item.fromnow,
    unit = item.unit;
  if (range === 'absolute') {
    return "".concat(type, " ").concat(datetime(date, showTime));
  }
  var fromNowAgoText = fromnow ? 'from now' : 'ago';
  return unit === 'now' ? "".concat(type, " 0 minutes ").concat(fromNowAgoText) : "".concat(type, " ").concat(intervalToString(item), " ").concat(fromNowAgoText);
};
var dateRange = function dateRange(_ref, showTime) {
  var start = _ref.start,
    end = _ref.end;
  return "".concat(datetime(start, showTime), " to ").concat(datetime(end, showTime));
};
var thisRange = function thisRange(_ref2) {
  var startInterval = _ref2.startInterval,
    endInterval = _ref2.endInterval;
  return "this ".concat(startInterval, " to ").concat(endInterval);
};
var intervalToString = function intervalToString(_ref3) {
  var value = _ref3.value,
    unit = _ref3.unit;
  return "".concat(value, " ").concat(unit);
};
var typeAndUnitToString = function typeAndUnitToString(_ref4) {
  var type = _ref4.type,
    unit = _ref4.unit;
  return "".concat(type, " ").concat(unit);
};
var yearToString = function yearToString(_ref5) {
  var year = _ref5.year;
  return "".concat((0, _zero_pad.zeroPad4)(year));
};
var monthToString = function monthToString(_ref6) {
  var year = _ref6.year,
    month = _ref6.month;
  return "".concat((0, _zero_pad.zeroPad4)(year), "-").concat((0, _zero_pad.zeroPad2)(month));
};
var dayToString = function dayToString(_ref7) {
  var day = _ref7.day;
  return "".concat(day);
};
var on = function on(_ref8, showTime) {
  var date = _ref8.date;
  return "".concat(datetime(date, showTime && (0, _date_conversions.hasTimeFilterDateTimeModel)(date)));
};
var relative = function relative(_ref9) {
  var startInterval = _ref9.startInterval,
    intervalType = _ref9.intervalType,
    endInterval = _ref9.endInterval;
  return "".concat(intervalToString(startInterval), " ").concat(intervalType, " for ").concat(intervalToString(endInterval));
};
var pastToString = function pastToString(item) {
  return "".concat(intervalToString(item)).concat(item.complete ? ' ago for ' + intervalToString(item) : '');
};
var pastAgoToString = function pastAgoToString(item) {
  return "".concat(intervalToString(item), " ago");
};
var notNullToString = function notNullToString() {
  return "not null";
};
var filterToStringMap = {
  "null": _null_item_to_string["default"],
  notnull: notNullToString,
  past: pastToString,
  pastAgo: pastAgoToString,
  "this": typeAndUnitToString,
  next: typeAndUnitToString,
  last: typeAndUnitToString,
  year: yearToString,
  month: monthToString,
  day: dayToString,
  before: beforeAfter,
  after: beforeAfter,
  range: dateRange,
  thisRange: thisRange,
  on: on,
  relative: relative,
  anyvalue: function anyvalue() {
    return '';
  },
  user_attribute: _user_attribute_to_string.userAttributeToString
};

var dateToString = function dateToString(showTime) {
  return function (item) {
    var toStringFunction = filterToStringMap[item.type];
    return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item, showTime)) || '';
  };
};

var dateFilterToString = function dateFilterToString(root, type) {
  return (0, _tree_to_string.treeToString)(root, dateToString((0, _is_date_time.isDateTime)(type)));
};
exports.dateFilterToString = dateFilterToString;
//# sourceMappingURL=date_filter_to_string.js.map