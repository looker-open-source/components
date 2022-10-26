"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = require("../../Card");

var _Paragraph = require("../../../Text/Paragraph");

var _default = function _default() {
  return _react["default"].createElement(_Card.Card, {
    raised: true
  }, _react["default"].createElement(_Paragraph.Paragraph, {
    color: "text1",
    fontSize: "xlarge"
  }, "Hello World!"));
};

exports["default"] = _default;
//# sourceMappingURL=Example.js.map