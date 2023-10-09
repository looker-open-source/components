"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableSectionDefaults = exports.tableSectionCSS = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = require("styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var tableSectionCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.border, _designTokens.typography);
exports.tableSectionCSS = tableSectionCSS;
var tableSectionDefaults = {
  textAlign: 'left'
};
exports.tableSectionDefaults = tableSectionDefaults;
//# sourceMappingURL=tableSection.js.map