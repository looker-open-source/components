"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _common = require("../utils/common");
var _Header = require("./Header");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Footer = _styledComponents["default"].footer.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Footer",
  componentId: "sc-1ief1vb-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  width: 100%;\n"])), _common.commonLayoutCSS, _Header.headerFooterCSS);
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map