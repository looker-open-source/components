"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Placement;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Placement() {
  var popoverContent = _react["default"].createElement(_.PopoverContent, null, _react["default"].createElement(_components.Paragraph, {
    width: 300,
    p: "u10"
  }, "\uD83D\uDC4B Hello, I am a popover!"));
  return _react["default"].createElement(_components.Box, {
    mt: "large"
  }, _react["default"].createElement(_components.Heading, null, "Placement"), _react["default"].createElement(_components.Box, {
    my: "medium"
  }, _react["default"].createElement(_.Popover, {
    content: popoverContent
  }, _react["default"].createElement(_components.Button, null, "Default")), _react["default"].createElement(_.Popover, {
    content: popoverContent
  }, _react["default"].createElement(_components.Button, null, "Default"))));
}
//# sourceMappingURL=Placement.js.map