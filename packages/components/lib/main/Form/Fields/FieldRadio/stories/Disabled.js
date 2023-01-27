"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");

function Disabled() {
  return _react["default"].createElement(_.FieldRadio, {
    id: "fieldRadioId",
    label: "Field Radio Example",
    name: "thumbsUp",
    disabled: true
  });
}
//# sourceMappingURL=Disabled.js.map