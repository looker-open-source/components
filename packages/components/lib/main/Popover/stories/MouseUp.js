"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MouseUp;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _ = require("..");

function MouseUp() {
  return _react["default"].createElement(_components.SpaceVertical, null, _react["default"].createElement(_components.Paragraph, null, "Test that the the 1st click outside is cancelled and that clicking the Popover's trigger a 2nd time closes the Popover"), _react["default"].createElement(_components.Paragraph, null, "Previously, the useCapture = true on the mouseup listener caused the click outside behavior to break on any page that has a React onMouseUp on any element."), _react["default"].createElement(_components.Space, null, _react["default"].createElement(_.Popover, {
    content: "Popover 1"
  }, _react["default"].createElement(_components.Button, null, "Open 1st Popover")), _react["default"].createElement(_.Popover, {
    content: "Popover 2"
  }, _react["default"].createElement(_components.Button, null, "Open 2nd Popover")), _react["default"].createElement(_components.Button, {
    onClick: function onClick() {
      return alert('I should be canceled if a Popover was open');
    }
  }, "Click"), _react["default"].createElement(_components.Button, {
    onMouseUp: function onMouseUp() {
      return alert('A simple onMouseUp');
    }
  }, "onMouseUp")));
}
//# sourceMappingURL=MouseUp.js.map