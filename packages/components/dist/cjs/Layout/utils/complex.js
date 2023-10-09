"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complexLayoutCSS = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = require("styled-components");
var _simple = require("./simple");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var complexLayoutCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /**\n   * Rules here should provide convenience styling for Box derived components.\n   * Generally anything here could be overwritten by explicit values set via\n   * Box's prop values. For example a function here that sets 'cursor: pointer'\n   * would be overwritten by an explicit <Box cursor='copy'/>.\n   */\n  ", "\n  ", "\n\n  /**\n   * Style Utilities that extend Box's props. Most of these come from\n   * styled-system but some are Looker UI Components specific.\n   *\n   * These should be last to override rules with lower priority.\n   */\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _simple.simpleLayoutCSS, _designTokens.border, _designTokens.boxShadow, _designTokens.color, _designTokens.typography);
exports.complexLayoutCSS = complexLayoutCSS;
//# sourceMappingURL=complex.js.map