"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFormat = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _DateTimeFormat = require("../DateTimeFormat");

var DateFormat = function DateFormat(props) {
  return _react["default"].createElement(_DateTimeFormat.DateTimeFormat, (0, _extends2["default"])({}, props, {
    time: false
  }));
};

exports.DateFormat = DateFormat;
//# sourceMappingURL=DateFormat.js.map