"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DetailDescription;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");

function DetailDescription() {
  return _react["default"].createElement(_.FieldRadio, {
    id: "fieldRadioId",
    label: "Field Radio Example",
    name: "thumbsUp",
    detail: "0/50",
    description: "Describe something here"
  });
}
//# sourceMappingURL=DetailDescription.js.map