"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FauxCheckbox = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _height = require("../height");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FauxCheckbox = _styledComponents["default"].div.withConfig({
  displayName: "FauxCheckbox",
  componentId: "sc-1yuna8r-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border: solid 2px\n    ", ";\n  border-radius: ", ";\n  color: ", ";\n  height: ", ";\n  position: relative;\n  width: ", ";\n  svg {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n"])), function (_ref) {
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