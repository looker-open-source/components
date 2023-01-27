"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Suggestions;
var _react = _interopRequireDefault(require("react"));
var _Filter = require("../Filter");

function Suggestions() {
  return _react["default"].createElement(_Filter.Filter, {
    name: "Status",
    expressionType: "string",
    expression: "pending",
    suggestions: ['complete', 'pending', 'cancelled']
  });
}
//# sourceMappingURL=Suggestions.js.map