"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiConditionDate;
var _react = _interopRequireDefault(require("react"));
var _Filter = require("../Filter");

function MultiConditionDate() {
  return _react["default"].createElement(_Filter.Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "date",
    expression: "this week,last week, next week"
  });
}
//# sourceMappingURL=MultiConditionDate.js.map