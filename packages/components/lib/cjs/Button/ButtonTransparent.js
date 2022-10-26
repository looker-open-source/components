"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonTransparent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonBase = require("./ButtonBase");

var _templateObject;

var ButtonTransparent = (0, _styledComponents["default"])(_ButtonBase.ButtonBase).withConfig({
  displayName: "ButtonTransparent",
  componentId: "sc-799h13-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  border: 1px solid transparent;\n  color: ", ";\n  padding: 0 ", ";\n\n  &[aria-expanded='true'] {\n    background: ", ";\n    border-color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'key' : _ref$color;
  return theme.colors[color];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u2;
}, function (_ref3) {
  var theme = _ref3.theme,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'key' : _ref3$color;
  return theme.colors["".concat(color, "Accent")];
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? 'key' : _ref4$color;
  return theme.colors["".concat(color, "Accent")];
});
exports.ButtonTransparent = ButtonTransparent;
//# sourceMappingURL=ButtonTransparent.js.map