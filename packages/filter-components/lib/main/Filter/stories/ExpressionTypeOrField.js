"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpressionTypeOrField;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _Filter = require("../Filter");

function ExpressionTypeOrField() {
  return _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_Filter.Filter, {
    name: "Age",
    expressionType: "number",
    expression: "[0,100]"
  }), _react["default"].createElement(_Filter.Filter, {
    name: "Age",
    type: "field_filter",
    field: {
      is_numeric: true
    },
    expression: "[0,100]"
  }));
}
//# sourceMappingURL=ExpressionTypeOrField.js.map