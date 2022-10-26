"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeFormat = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _DateTimeFormat = require("../../../Form/Inputs/DateTimeFormat");

var TimeFormat = function TimeFormat(props) {
  return _react["default"].createElement(_DateTimeFormat.DateTimeFormat, (0, _extends2["default"])({}, props, {
    date: false
  }));
};

exports.TimeFormat = TimeFormat;
//# sourceMappingURL=TimeFormat.js.map