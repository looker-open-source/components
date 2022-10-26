"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Legend = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _templateObject;

var Legend = _styledComponents["default"].legend.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Legend",
  componentId: "sc-jsk37b-0"
}).attrs(function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text4' : _ref$color,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'brand' : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 'medium' : _ref$fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 'semiBold' : _ref$fontWeight;
  return {
    color: color,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  border: none;\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.color, _designTokens.space, _designTokens.typography);

exports.Legend = Legend;
//# sourceMappingURL=Legend.js.map