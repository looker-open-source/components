"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonOutline = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonBase = require("./ButtonBase");

var _templateObject;

var ButtonOutline = (0, _styledComponents["default"])(_ButtonBase.ButtonBase).withConfig({
  displayName: "ButtonOutline",
  componentId: "sc-ncggc7-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n\n  &[aria-expanded='true'] {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'key' : _ref$color;
  return theme.colors["".concat(color, "Text")];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui3;
}, function (_ref3) {
  var theme = _ref3.theme,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'key' : _ref3$color;
  return theme.colors[color];
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? 'key' : _ref4$color;
  return theme.colors["".concat(color, "Accent")];
}, function (_ref5) {
  var theme = _ref5.theme,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? 'key' : _ref5$color;
  return theme.colors["".concat(color, "Focus")];
}, function (_ref6) {
  var theme = _ref6.theme,
      _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? 'key' : _ref6$color;
  return theme.colors[color];
});
exports.ButtonOutline = ButtonOutline;
//# sourceMappingURL=ButtonOutline.js.map