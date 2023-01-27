"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadOnly;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckbox = require("../../FieldCheckbox");

function ReadOnly() {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    id: "id",
    label: "read only",
    name: "thumbsUp",
    readOnly: true
  });
}
//# sourceMappingURL=ReadOnly.js.map