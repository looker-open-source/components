"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDateFromString = exports.formatYear = void 0;

var _isValid = _interopRequireDefault(require("date-fns/isValid"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var formatYear = function formatYear(date) {
  var year = date.getFullYear();

  if (year < 100) {
    return year + 2000;
  } else if (year < 1000) {
    return parseInt("".concat(year, "0"));
  }

  return year;
};

exports.formatYear = formatYear;

var parseDateFromString = function parseDateFromString(value) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _enUS["default"];
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'P';
  var parsedValue = (0, _parse["default"])(value, format, new Date(), {
    locale: locale
  });
  parsedValue.setFullYear(formatYear(parsedValue));
  return (0, _isValid["default"])(parsedValue) && parsedValue;
};

exports.parseDateFromString = parseDateFromString;
//# sourceMappingURL=parseDateFromString.js.map