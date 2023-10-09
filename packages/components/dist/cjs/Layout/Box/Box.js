"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _common = require("../utils/common");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Box = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Box",
  componentId: "sc-5738oh-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n   ", "\n   ", "\n"])), _common.commonLayoutCSS, _designTokens.userSelect, _designTokens.flexbox, _designTokens.cursor);
exports.Box = Box;
//# sourceMappingURL=Box.js.map