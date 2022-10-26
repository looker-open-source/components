"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _common = require("../utils/common");

var _Header = require("./Header");

var _templateObject;

var Footer = _styledComponents["default"].footer.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Footer",
  componentId: "sc-1ief1vb-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  width: 100%;\n"])), _common.commonLayoutCSS, _Header.headerFooterCSS);

exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map