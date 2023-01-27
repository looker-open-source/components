"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Error;
var _react = _interopRequireDefault(require("react"));
var _InputDateRange = require("../InputDateRange");

var noop = function noop() {
  return undefined;
};
function Error() {
  return _react["default"].createElement(_InputDateRange.InputDateRange, {
    value: {},
    onChange: noop,
    validationType: "error"
  });
}
//# sourceMappingURL=Error.js.map