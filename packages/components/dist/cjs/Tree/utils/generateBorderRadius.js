"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateBorderRadius = void 0;
var _styledComponents = require("styled-components");
var _LkFieldItemLabel = require("../../LkFieldTree/LkFieldItemLabel");
var _TreeItemContent = require("../TreeItemContent");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var generateBorderRadius = function generateBorderRadius(borderRadius, theme) {
  var radii = theme.radii;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", ", ", " {\n      border-radius: ", ";\n    }\n  "])), _TreeItemContent.TreeItemContent, _LkFieldItemLabel.LkFieldItemLabel, radii[borderRadius]);
};
exports.generateBorderRadius = generateBorderRadius;
//# sourceMappingURL=generateBorderRadius.js.map