"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardMedia = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CardMedia = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "CardMedia",
  componentId: "sc-1y4pdp-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  ", "\n  background-size: cover;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56%;\n"])), _designTokens.backgroundColor, function (_ref) {
  var image = _ref.image;
  return image;
}, _designTokens.backgroundPosition);
exports.CardMedia = CardMedia;
//# sourceMappingURL=CardMedia.js.map