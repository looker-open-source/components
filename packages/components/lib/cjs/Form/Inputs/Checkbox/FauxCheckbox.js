"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FauxCheckbox = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _height = require("../height");

var _templateObject;

var FauxCheckbox = _styledComponents["default"].div.withConfig({
  displayName: "FauxCheckbox",
  componentId: "sc-1yuna8r-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border: solid 2px\n    ", ";\n  border-radius: ", ";\n  color: ", ";\n  height: ", ";\n  position: relative;\n  width: ", ";\n  svg {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n"])), function (_ref) {
  var isSelected = _ref.isSelected,
      theme = _ref.theme;
  return isSelected ? theme.colors.key : 'currentColor';
}, function (_ref2) {
  var isSelected = _ref2.isSelected,
      colors = _ref2.theme.colors;
  return isSelected ? colors.key : colors.ui4;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.keyText;
}, _height.checkboxRadioHeight, _height.checkboxRadioHeight);

exports.FauxCheckbox = FauxCheckbox;
//# sourceMappingURL=FauxCheckbox.js.map