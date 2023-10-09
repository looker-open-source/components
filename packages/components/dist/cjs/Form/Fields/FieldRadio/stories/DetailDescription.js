"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DetailDescription;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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