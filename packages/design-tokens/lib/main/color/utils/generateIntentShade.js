"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateIntentShade = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _darken = _interopRequireDefault(require("polished/lib/color/darken"));
var _getLuminance = _interopRequireDefault(require("polished/lib/color/getLuminance"));
var _lighten = _interopRequireDefault(require("polished/lib/color/lighten"));
var _styledComponents = require("styled-components");
var _templateObject;
var generateIntentShade = function generateIntentShade(color) {
  var intentColorLuminance = (0, _getLuminance["default"])(color);
  var adjustAmount = intentColorLuminance > 0.3 ? intentColorLuminance * 0.55 : 0.125;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "])), function (_ref) {
    var colors = _ref.theme.colors;
    return (0, _getLuminance["default"])(colors.background) > 0.5 ? (0, _darken["default"])(adjustAmount, color) : (0, _lighten["default"])(adjustAmount, color);
  });
};
exports.generateIntentShade = generateIntentShade;
//# sourceMappingURL=generateIntentShade.js.map