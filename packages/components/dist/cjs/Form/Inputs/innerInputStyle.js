"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.innerInputStyle = void 0;
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var innerInputStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  caret-color: ", ";\n  color: inherit;\n  font-family: inherit;\n  height: 100%;\n  outline: none;\n  width: 100%;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.key;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text2;
});
exports.innerInputStyle = innerInputStyle;
//# sourceMappingURL=innerInputStyle.js.map