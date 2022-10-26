"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableSectionDefaults = exports.tableSectionCSS = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = require("styled-components");

var _templateObject;

var tableSectionCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.border, _designTokens.typography);
exports.tableSectionCSS = tableSectionCSS;
var tableSectionDefaults = {
  textAlign: 'left'
};
exports.tableSectionDefaults = tableSectionDefaults;
//# sourceMappingURL=tableSection.js.map