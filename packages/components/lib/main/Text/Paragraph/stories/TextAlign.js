"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextAlign;
var _react = _interopRequireDefault(require("react"));
var _Card = require("../../../Card");
var _Paragraph = require("../Paragraph");

function TextAlign() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Card.Card, null, _react["default"].createElement(_Card.CardContent, null, _react["default"].createElement(_Paragraph.Paragraph, null, " I am aligned left by default"))), _react["default"].createElement(_Card.Card, null, _react["default"].createElement(_Card.CardContent, null, _react["default"].createElement(_Paragraph.Paragraph, {
    textAlign: "center"
  }, "This is how you can center align Paragraph text"))), _react["default"].createElement(_Card.Card, null, _react["default"].createElement(_Card.CardContent, null, _react["default"].createElement(_Paragraph.Paragraph, {
    textAlign: "right"
  }, "This is how you can right align Paragraph text"))));
}
//# sourceMappingURL=TextAlign.js.map