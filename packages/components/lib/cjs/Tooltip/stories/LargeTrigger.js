"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LargeTrigger;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Card = require("../../Card");

function LargeTrigger() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: "See what happens when you scroll",
    placement: "right"
  }, _react["default"].createElement(_Card.Card, {
    width: 500,
    height: 800,
    raised: true,
    p: "u5"
  }, "Very large trigger"));
}
//# sourceMappingURL=LargeTrigger.js.map