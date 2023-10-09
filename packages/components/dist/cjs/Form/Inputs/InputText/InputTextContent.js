"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTextContent = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _inputIconSize = require("../inputIconSize");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var InputTextContent = _styledComponents["default"].div.withConfig({
  displayName: "InputTextContent",
  componentId: "sc-1cvjzox-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  align-items: center;\n  color: ", ";\n  display: flex;\n  height: 100%;\n  pointer-events: none;\n\n  > svg {\n    ", "\n  }\n"])), _designTokens.space, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.text1;
}, _inputIconSize.inputIconSize);
exports.InputTextContent = InputTextContent;
//# sourceMappingURL=InputTextContent.js.map