"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Scroll;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _ = require("../..");

function Scroll() {
  return _react["default"].createElement(_components.Box, {
    height: "10rem",
    display: "flex",
    bg: "white",
    p: "u5"
  }, _react["default"].createElement(_.PopoverContent, null, _react["default"].createElement(_components.Paragraph, null, "Scroll down here..."), _react["default"].createElement(_components.Box, {
    height: "6rem",
    bg: "rebeccapurple"
  })));
}
//# sourceMappingURL=Scroll.js.map