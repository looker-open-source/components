"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _InputDateRange = require("../InputDateRange");
var _excluded = ["value", "onChange"];
var noop = function noop() {
  return undefined;
};
function Basic(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? {} : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_InputDateRange.InputDateRange, (0, _extends2["default"])({
    value: value,
    onChange: onChange
  }, props));
}
//# sourceMappingURL=Basic.js.map