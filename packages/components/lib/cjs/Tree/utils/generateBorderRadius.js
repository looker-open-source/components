"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateBorderRadius = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _LkFieldItemLabel = require("../../LkFieldTree/LkFieldItemLabel");

var _TreeItemContent = require("../TreeItemContent");

var _templateObject;

var generateBorderRadius = function generateBorderRadius(borderRadius, theme) {
  var radii = theme.radii;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", ", ", " {\n      border-radius: ", ";\n    }\n  "])), _TreeItemContent.TreeItemContent, _LkFieldItemLabel.LkFieldItemLabel, radii[borderRadius]);
};

exports.generateBorderRadius = generateBorderRadius;
//# sourceMappingURL=generateBorderRadius.js.map