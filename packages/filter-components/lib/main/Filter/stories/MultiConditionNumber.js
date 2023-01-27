"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiConditionNumber;
var _react = _interopRequireDefault(require("react"));
var _Filter = require("../Filter");

function MultiConditionNumber() {
  return _react["default"].createElement(_Filter.Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "number",
    expression: "[0,20],>30"
  });
}
//# sourceMappingURL=MultiConditionNumber.js.map