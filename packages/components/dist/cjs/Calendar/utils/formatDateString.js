"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDateString = void 0;
var _i18n = require("@looker/i18n");
var _format = _interopRequireDefault(require("date-fns-tz/format"));
var _utcToZonedTime = _interopRequireDefault(require("date-fns-tz/utcToZonedTime"));
var _repeat = _interopRequireDefault(require("lodash/repeat"));
var _trim = _interopRequireDefault(require("lodash/trim"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var dateFormatRepetitions = {
  full: 4,
  "long": 3,
  medium: 2,
  "short": 1
};
var isDateFormat = function isDateFormat(stringFormat) {
  return dateFormatRepetitions[stringFormat];
};
var getStringFormat = function getStringFormat(stringFormat) {
  var timeZone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var _ref = arguments.length > 2 ? arguments[2] : undefined,
    _ref$date = _ref.date,
    date = _ref$date === void 0 ? true : _ref$date,
    _ref$time = _ref.time,
    time = _ref$time === void 0 ? true : _ref$time;
  var dateFormat = (0, _repeat["default"])('P', dateFormatRepetitions[stringFormat]);
  var timeFormat = (0, _repeat["default"])('p', dateFormatRepetitions[stringFormat]);
  var timeZoneFormat = (0, _repeat["default"])('z', dateFormatRepetitions[stringFormat]);
  return (0, _trim["default"])("".concat(date ? dateFormat : '').concat(time ? timeFormat : '', " ").concat(timeZone ? timeZoneFormat : ''));
};
var formatDateString = function formatDateString(date) {
  var stringFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'P';
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _i18n.getDateLocale)();
  var timeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  if (!date) {
    return '';
  }
  var renderedDate = timeZone ? (0, _utcToZonedTime["default"])(date, timeZone) : date;
  var actualFormat = isDateFormat(stringFormat) ? getStringFormat(stringFormat, timeZone, options) : stringFormat;
  return (0, _format["default"])(renderedDate, actualFormat, _objectSpread({
    locale: locale
  }, timeZone && {
    timeZone: timeZone
  }));
};
exports.formatDateString = formatDateString;
//# sourceMappingURL=formatDateString.js.map