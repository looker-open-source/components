"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RenderProps;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function RenderProps() {
  var popoverContent = _react["default"].createElement(_.PopoverContent, null, _react["default"].createElement(_components.Paragraph, {
    width: 300,
    p: "u10"
  }, "\uD83D\uDC4B Hello, I am a popover!"));
  return _react["default"].createElement(_.Popover, {
    content: popoverContent
  }, function (props) {
    return _react["default"].createElement("button", props, "Test");
  });
}
//# sourceMappingURL=RenderProps.js.map