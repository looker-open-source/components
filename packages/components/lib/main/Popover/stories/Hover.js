"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hover;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Hover() {
  var hoverRef = _react["default"].useRef(null);
  var content = _react["default"].createElement(_.PopoverLayout, null, "I'm in the popover");
  return _react["default"].createElement(_components.Card, {
    ref: hoverRef,
    raised: true
  }, _react["default"].createElement(_components.CardContent, null, _react["default"].createElement(_components.Space, {
    between: true
  }, _react["default"].createElement(_components.Paragraph, null, "Hovering in this card will show the button that triggers the popover."), _react["default"].createElement(_.Popover, {
    content: content,
    hoverDisclosureRef: hoverRef
  }, _react["default"].createElement(_components.Button, null)))));
}
//# sourceMappingURL=Hover.js.map