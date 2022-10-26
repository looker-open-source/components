"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExampleRenderProp;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

function ExampleRenderProp() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: "Example using render props exploded"
  }, function (props) {
    return _react["default"].createElement(_Button.Button, {
      "aria-describedby": props['aria-describedby'],
      className: props.className,
      onBlur: props.onBlur,
      onFocus: props.onFocus,
      onMouseOut: props.onMouseOut,
      onMouseOver: props.onMouseOver,
      ref: props.ref
    }, "Render Props Example");
  });
}
//# sourceMappingURL=ExampleRenderProp.js.map