"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTreeBorder = void 0;
var _styledComponents = require("styled-components");
var _ListItem = require("../../ListItem");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var getColor = function getColor(theme, color) {
  if ((0, _ListItem.isListColor)(color)) {
    return theme.colors["".concat(color, "Focus")];
  }
  return color || theme.colors.ui2;
};
var generateTreeBorder = function generateTreeBorder(_ref) {
  var border = _ref.border,
    color = _ref.color,
    density = _ref.density,
    theme = _ref.theme,
    _ref$depth = _ref.depth,
    depth = _ref$depth === void 0 ? 0 : _ref$depth;
  if (!border) return false;
  var _listItemDimensions = (0, _ListItem.listItemDimensions)(density || theme.defaults.density),
    iconSize = _listItemDimensions.iconSize;
  var itemBorderSize = '1px';
  var itemGutter = '0.25rem';
  var indicatorIconSize = theme.sizes[iconSize];
  var depthSize = "(".concat(indicatorIconSize, " + ").concat(itemGutter, ") * ").concat(depth);
  var borderSpacer = "(".concat(indicatorIconSize, " + ").concat(itemBorderSize, ") / 2 + ").concat(depthSize);
  var preBorderStop = "calc(".concat(borderSpacer, " - ").concat(itemBorderSize, ")");
  var postBorderStop = "calc(".concat(borderSpacer, ")");
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-image: linear-gradient(\n      90deg,\n      transparent ", ",\n      ", " ", " ", ",\n      transparent ", "\n    );\n  "])), preBorderStop, getColor(theme, color), preBorderStop, postBorderStop, postBorderStop);
};
exports.generateTreeBorder = generateTreeBorder;
//# sourceMappingURL=generateTreeBorder.js.map