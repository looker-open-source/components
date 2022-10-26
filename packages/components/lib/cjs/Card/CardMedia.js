"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardMedia = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _templateObject;

var CardMedia = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "CardMedia",
  componentId: "sc-1y4pdp-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  ", "\n  background-size: cover;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56%;\n"])), _designTokens.backgroundColor, function (_ref) {
  var image = _ref.image;
  return image;
}, _designTokens.backgroundPosition);

exports.CardMedia = CardMedia;
//# sourceMappingURL=CardMedia.js.map