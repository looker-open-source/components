"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTextContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _inputIconSize = require("../inputIconSize");

var _templateObject;

var InputTextContent = _styledComponents["default"].div.withConfig({
  displayName: "InputTextContent",
  componentId: "sc-1cvjzox-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  align-items: center;\n  color: ", ";\n  display: flex;\n  height: 100%;\n  pointer-events: none;\n\n  > svg {\n    ", "\n  }\n"])), _designTokens.space, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.text1;
}, _inputIconSize.inputIconSize);

exports.InputTextContent = InputTextContent;
//# sourceMappingURL=InputTextContent.js.map