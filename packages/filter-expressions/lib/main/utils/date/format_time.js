"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTimeInput = exports.meridiemFrom24HourTime = exports.isTimeAndFormatAccurate = exports.get24HourTime = exports.formatAndDisplayTime = exports.displayTimeAsIs = exports.allowedTimeInputValues = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _convert_to_number = require("./convert_to_number");
var _zero_pad = require("./zero_pad");

var meridiemChange = 12;
var hourCeil = 24;
var minuteCeil = 60;
var defaultMinuteValue = 0;
var meridiemAm = 'AM';
var meridiemPm = 'PM';
var allowedTimeInputValues = /\d|[a|p|m]|\s|^$/gi;
exports.allowedTimeInputValues = allowedTimeInputValues;
var exactTimeMatch = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):([0-5][0-9])\s(am|pm)$/gi;

var maxHourValue = function maxHourValue(hour) {
  return hour <= 0 || hour >= hourCeil ? 0 : hour;
};

var maxMinuteValue = function maxMinuteValue(minute) {
  return !minute || minute < 0 || minute >= minuteCeil ? 0 : minute;
};

var getAccurateMeridiem = function getAccurateMeridiem(_ref) {
  var hour = _ref.hour,
    _ref$meridiem = _ref.meridiem,
    meridiem = _ref$meridiem === void 0 ? meridiemAm : _ref$meridiem;
  return hour > meridiemChange ? meridiemPm : meridiem.toUpperCase();
};
var meridiemFrom24HourTime = function meridiemFrom24HourTime(hour) {
  return hour >= meridiemChange && hour < hourCeil ? meridiemPm : meridiemAm;
};
exports.meridiemFrom24HourTime = meridiemFrom24HourTime;
var get12HourTimeValue = function get12HourTimeValue(hour) {
  if (hour > meridiemChange) {
    hour = hour - meridiemChange;
  }
  if (hour === 0) {
    hour = meridiemChange;
  }
  return hour;
};

var displayTimeAsIs = function displayTimeAsIs(_ref2) {
  var hour = _ref2.hour,
    _ref2$minute = _ref2.minute,
    minute = _ref2$minute === void 0 ? defaultMinuteValue : _ref2$minute,
    _ref2$meridiem = _ref2.meridiem,
    meridiem = _ref2$meridiem === void 0 ? '' : _ref2$meridiem;
  return "".concat(hour, ":").concat((0, _zero_pad.zeroPad2)(minute), " ").concat(meridiem).trim();
};

exports.displayTimeAsIs = displayTimeAsIs;
var formatAndDisplayTime = function formatAndDisplayTime(_ref3) {
  var hour = _ref3.hour,
    _ref3$minute = _ref3.minute,
    minute = _ref3$minute === void 0 ? 0 : _ref3$minute,
    _ref3$meridiem = _ref3.meridiem,
    meridiem = _ref3$meridiem === void 0 ? meridiemAm : _ref3$meridiem;
  return displayTimeAsIs({
    hour: get12HourTimeValue(maxHourValue(hour)),
    minute: maxMinuteValue(minute),
    meridiem: getAccurateMeridiem({
      hour: maxHourValue(hour),
      meridiem: meridiem
    })
  });
};

exports.formatAndDisplayTime = formatAndDisplayTime;
var get24HourTime = function get24HourTime(_ref4) {
  var hour = _ref4.hour,
    _ref4$minute = _ref4.minute,
    minute = _ref4$minute === void 0 ? 0 : _ref4$minute,
    _ref4$meridiem = _ref4.meridiem,
    meridiem = _ref4$meridiem === void 0 ? '' : _ref4$meridiem;
  hour = maxHourValue(hour);
  if (meridiem.toUpperCase() === meridiemPm && hour < meridiemChange) {
    hour = meridiemChange + hour;
  }
  return {
    hour: hour,
    minute: maxMinuteValue(minute),
    meridiem: hour < meridiemChange ? meridiemAm : meridiemPm
  };
};
exports.get24HourTime = get24HourTime;
var parseTimeInput = function parseTimeInput(inputValue) {
  var _inputValue$split$fil = inputValue.split(exactTimeMatch).filter(Boolean),
    _inputValue$split$fil2 = (0, _slicedToArray2["default"])(_inputValue$split$fil, 3),
    hour = _inputValue$split$fil2[0],
    minute = _inputValue$split$fil2[1],
    meridiem = _inputValue$split$fil2[2];
  return {
    hour: (0, _convert_to_number.convertToNumber)(hour),
    minute: (0, _convert_to_number.convertToNumber)(minute),
    meridiem: meridiem
  };
};

exports.parseTimeInput = parseTimeInput;
var isTimeAndFormatAccurate = function isTimeAndFormatAccurate(input) {
  return !!input.match(exactTimeMatch);
};
exports.isTimeAndFormatAccurate = isTimeAndFormatAccurate;
//# sourceMappingURL=format_time.js.map