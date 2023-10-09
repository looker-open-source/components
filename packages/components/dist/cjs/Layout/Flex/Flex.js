"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _complex = require("../utils/complex");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Flex = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Flex",
  componentId: "sc-1ak395a-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  display: flex;\n"])), _complex.complexLayoutCSS, _designTokens.flexbox);
exports.Flex = Flex;
//# sourceMappingURL=Flex.js.map