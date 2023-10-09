"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateIndentCalculation = exports.generateIndent = void 0;
var _styledComponents = require("styled-components");
var _accordionDimensions2 = require("../../Accordion2/accordionDimensions");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var generateIndentCalculation = function generateIndentCalculation(depth, density, theme) {
  var space = theme.space,
    sizes = theme.sizes;
  var _accordionDimensions = (0, _accordionDimensions2.accordionDimensions)(density),
    indicatorGap = _accordionDimensions.indicatorGap,
    indicatorSize = _accordionDimensions.indicatorSize;
  return "calc((".concat(sizes[indicatorSize], " + ").concat(space[indicatorGap], ") * ").concat(depth, ")");
};
exports.generateIndentCalculation = generateIndentCalculation;
var generateIndent = function generateIndent(_ref) {
  var _ref$depth = _ref.depth,
    depth = _ref$depth === void 0 ? 0 : _ref$depth,
    density = _ref.density;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-left: ", ";\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return generateIndentCalculation(depth, density || theme.defaults.density, theme);
  });
};
exports.generateIndent = generateIndent;
//# sourceMappingURL=generateIndent.js.map