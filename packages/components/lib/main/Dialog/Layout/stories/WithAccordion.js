"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithAccordion;
var _react = _interopRequireDefault(require("react"));
var _Accordion = require("../../../Accordion2");
var _DialogLayout = require("../DialogLayout");

function WithAccordion() {
  return _react["default"].createElement(_DialogLayout.DialogLayout, {
    header: "Error details",
    footer: "Just text"
  }, _react["default"].createElement(_Accordion.Accordion2, {
    label: "Show me the cheese!"
  }, "Cheddar"));
}
//# sourceMappingURL=WithAccordion.js.map