"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTimeInput = exports.meridiemFrom24HourTime = exports.isTimeAndFormatAccurate = exports.get24HourTime = exports.formatAndDisplayTime = exports.displayTimeAsIs = exports.allowedTimeInputValues = void 0;
var _convert_to_number = require("./convert_to_number");
var _zero_pad = require("./zero_pad");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _inputValue$split$fil2 = _slicedToArray(_inputValue$split$fil, 3),
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