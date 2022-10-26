"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonBase = require("./ButtonBase");

var _templateObject;

var Button = (0, _styledComponents["default"])(_ButtonBase.ButtonBase).attrs(function () {
  return {
    rippleBackgroundColor: 'background'
  };
}).withConfig({
  displayName: "Button",
  componentId: "sc-18euc9m-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n\n  &[aria-expanded='true'] {\n    background: ", ";\n    border-color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'key' : _ref$color;
  return theme.colors[color];
}, function (_ref2) {
  var theme = _ref2.theme,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'key' : _ref2$color;
  return theme.colors[color];
}, function (_ref3) {
  var theme = _ref3.theme,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'key' : _ref3$color;
  return theme.colors["".concat(color, "Text")];
}, function (_ref4) {
  var theme = _ref4.theme,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? 'key' : _ref4$color;
  return theme.colors["".concat(color, "Pressed")];
}, function (_ref5) {
  var theme = _ref5.theme,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? 'key' : _ref5$color;
  return theme.colors["".concat(color, "Pressed")];
});
exports.Button = Button;
//# sourceMappingURL=Button.js.map