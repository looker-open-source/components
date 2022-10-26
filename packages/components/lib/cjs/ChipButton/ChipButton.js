"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _height = require("../Form/Inputs/height");

var _Chip = require("../Chip/Chip");

var _templateObject;

var ChipButton = (0, _styledComponents["default"])(_Chip.Chip).attrs(function () {
  return {
    role: 'button'
  };
}).withConfig({
  displayName: "ChipButton",
  componentId: "sc-1ov80kq-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  height: ", ";\n  padding: 0 ", ";\n\n  &:active,\n  &:hover,\n  &[aria-pressed='true'] {\n    border-color: ", ";\n  }\n\n  &[aria-selected='true'] {\n    background: ", ";\n    color: ", ";\n  }\n\n  &.focus,\n  &:focus {\n    box-shadow: inset 0 0 0 1px ", ";\n  }\n\n  &[disabled] {\n    background: ", ";\n    color: ", ";\n    cursor: default;\n\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n  }\n\n  &[aria-selected='false'] {\n    background: ", ";\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n\n    &:active {\n      border-color: ", ";\n    }\n\n    &[disabled] {\n      opacity: 0.4;\n    }\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.ui3;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.small;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.normal;
}, _height.inputHeight, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u4;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.key;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.keyAccent;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.text5;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.key;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.neutralAccent;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.neutral;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.neutralAccent;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.keyAccent;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.background;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.text3;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.ui1;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.ui4;
});
exports.ChipButton = ChipButton;
//# sourceMappingURL=ChipButton.js.map