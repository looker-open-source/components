"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeFormat = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../Calendar/utils");

var DateTimeFormat = function DateTimeFormat(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? new Date(Date.now()) : _ref$children,
      _ref$date = _ref.date,
      date = _ref$date === void 0 ? true : _ref$date,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'medium' : _ref$format,
      locale = _ref.locale,
      _ref$time = _ref.time,
      time = _ref$time === void 0 ? true : _ref$time,
      timeZone = _ref.timeZone;

  try {
    return _react["default"].createElement(_react["default"].Fragment, null, (0, _utils.formatDateString)(children, format, locale, timeZone, {
      date: date,
      time: time
    }));
  } catch (error) {
    return _react["default"].createElement(_react["default"].Fragment, null, error);
  }
};

exports.DateTimeFormat = DateTimeFormat;
//# sourceMappingURL=DateTimeFormat.js.map