"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableCellCSS = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = require("styled-components");

var _templateObject;

var tableCellCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  padding: ", " 0;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, function (_ref) {
  var theme = _ref.theme;
  return theme.space.u2;
}, _designTokens.border, _designTokens.color, _designTokens.layout, _designTokens.space, _designTokens.typography);
exports.tableCellCSS = tableCellCSS;
//# sourceMappingURL=tableCell.js.map