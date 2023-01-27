"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiConditionTier;
var _react = _interopRequireDefault(require("react"));
var _Filter = require("../Filter");

function MultiConditionTier() {
  return _react["default"].createElement(_Filter.Filter, {
    name: "test",
    allowMultipleValues: true,
    expressionType: "tier",
    expression: "20 to 29,{{ _user_attributes['locale'] }}"
  });
}
//# sourceMappingURL=MultiConditionTier.js.map