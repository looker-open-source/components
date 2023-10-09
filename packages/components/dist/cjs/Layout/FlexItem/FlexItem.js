"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexItem = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _complex = require("../utils/complex");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FlexItem = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "FlexItem",
  componentId: "sc-1xhpm9o-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  /*\n   * A min-width must be set here to resolve a firefox bug where any children\n   * with style of text-overflow: ellipsis; will otherwise not truncate the\n   * text appropriately. */\n  min-width: 0; /* IMPORTANT!! Do not delete! */\n"])), _complex.complexLayoutCSS, _designTokens.flexbox);
exports.FlexItem = FlexItem;
//# sourceMappingURL=FlexItem.js.map