"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FauxRadio = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _height = require("../height");

var _templateObject;

var FauxRadio = _styledComponents["default"].div.withConfig({
  displayName: "FauxRadio",
  componentId: "sc-1how668-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background: ", ";\n  border: solid 2px ", ";\n  border-color: currentColor;\n  border-radius: 50%;\n  color: ", ";\n  height: ", ";\n  padding: ", ";\n  transition: background-color 25ms linear, border-color 25ms linear,\n    box-shadow 25ms linear;\n  width: ", ";\n\n  &::after {\n    background: ", ";\n    border-radius: 50%;\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n  }\n"])), _designTokens.reset, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.field;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui4;
}, _height.checkboxRadioHeight, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u05;
}, _height.checkboxRadioHeight, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.field;
});

exports.FauxRadio = FauxRadio;
//# sourceMappingURL=FauxRadio.js.map