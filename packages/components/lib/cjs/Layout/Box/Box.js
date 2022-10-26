"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _common = require("../utils/common");

var _templateObject;

var Box = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Box",
  componentId: "sc-5738oh-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n   ", "\n   ", "\n"])), _common.commonLayoutCSS, _designTokens.userSelect, _designTokens.flexbox, _designTokens.cursor);

exports.Box = Box;
//# sourceMappingURL=Box.js.map