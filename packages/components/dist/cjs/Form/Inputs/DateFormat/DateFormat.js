"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFormat = void 0;
var _react = _interopRequireDefault(require("react"));
var _DateTimeFormat = require("../DateTimeFormat");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var DateFormat = function DateFormat(props) {
  return _react["default"].createElement(_DateTimeFormat.DateTimeFormat, _extends({}, props, {
    time: false
  }));
};
exports.DateFormat = DateFormat;
//# sourceMappingURL=DateFormat.js.map