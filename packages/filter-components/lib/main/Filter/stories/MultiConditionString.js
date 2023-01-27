"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiConditionString;
var _react = _interopRequireDefault(require("react"));
var _Filter = require("../Filter");

function MultiConditionString() {
  return _react["default"].createElement(_Filter.Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "string",
    expression: "%Active%,MV Sport,-Activewear Apparel"
  });
}
//# sourceMappingURL=MultiConditionString.js.map