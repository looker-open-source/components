"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _complex = require("../utils/complex");

var _templateObject;

var FlexItem = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "FlexItem",
  componentId: "sc-1xhpm9o-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  /*\n   * A min-width must be set here to resolve a firefox bug where any children\n   * with style of text-overflow: ellipsis; will otherwise not truncate the\n   * text appropriately. */\n  min-width: 0; /* IMPORTANT!! Do not delete! */\n"])), _complex.complexLayoutCSS, _designTokens.flexbox);

exports.FlexItem = FlexItem;
//# sourceMappingURL=FlexItem.js.map