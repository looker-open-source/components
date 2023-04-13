"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intentUIBlend = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = require("styled-components");
var _blendPoints = require("../blendPoints");
var _mixScaledColors = require("./mixScaledColors");
var _templateObject;
var intentUIBlend = function intentUIBlend(intent, level) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
    var colors = _ref.theme.colors;
    return (0, _mixScaledColors.mixScaledColors)(_blendPoints.uiBlends[level], colors[intent], colors.background);
  });
};
exports.intentUIBlend = intentUIBlend;
//# sourceMappingURL=intentUIBlend.js.map