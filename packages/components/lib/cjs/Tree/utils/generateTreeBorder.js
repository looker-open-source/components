"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTreeBorder = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _ListItem = require("../../ListItem");

var _templateObject;

var generateTreeBorder = function generateTreeBorder(_ref) {
  var border = _ref.border,
      density = _ref.density,
      depth = _ref.depth,
      theme = _ref.theme;
  if (!border) return false;

  var _listItemDimensions = (0, _ListItem.listItemDimensions)(density),
      iconSize = _listItemDimensions.iconSize;

  var itemBorderSize = '1px';
  var itemGutter = '0.25rem';
  var indicatorIconSize = theme.sizes[iconSize];
  var depthSize = "(".concat(indicatorIconSize, " + ").concat(itemGutter, ") * ").concat(depth);
  var borderSpacer = "(".concat(indicatorIconSize, " + ").concat(itemBorderSize, ") / 2 + ").concat(depthSize);
  var preBorderStop = "calc(".concat(borderSpacer, " - ").concat(itemBorderSize, ")");
  var postBorderStop = "calc(".concat(borderSpacer, ")");
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background: linear-gradient(\n      90deg,\n      transparent ", ",\n      ", " ", " ", ",\n      transparent ", "\n    );\n  "])), preBorderStop, theme.colors.ui2, preBorderStop, postBorderStop, postBorderStop);
};

exports.generateTreeBorder = generateTreeBorder;
//# sourceMappingURL=generateTreeBorder.js.map