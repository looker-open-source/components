"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonLayoutCSS = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = require("styled-components");
var _simple = require("./simple");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var commonLayoutCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /**\n   * Rules here should provide convenience styling for Box derived components.\n   * Generally anything here could be overwritten by explicit values set via\n   * Box's prop values. For example a function here that sets 'cursor: pointer'\n   * would be overwritten by an explicit <Box2 cursor='copy'/>.\n   */\n  ", "\n\n  ", "\n  ", "\n  ", "\n"])), _simple.simpleLayoutCSS, _designTokens.borderHelper, _designTokens.color, _designTokens.typography);
exports.commonLayoutCSS = commonLayoutCSS;
//# sourceMappingURL=common.js.map