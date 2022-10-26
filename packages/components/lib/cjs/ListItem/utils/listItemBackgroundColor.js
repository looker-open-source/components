"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemBackgroundColor = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = require("styled-components");

var _templateObject;

var listItemBackgroundColor = function listItemBackgroundColor(_ref) {
  var color = _ref.color,
      disabled = _ref.disabled,
      propsHovered = _ref.hovered,
      ripple = _ref.ripple,
      selected = _ref.selected,
      colors = _ref.theme.colors;
  var stateColors = color ? {
    all: colors["".concat(color, "Subtle")],
    hovered: colors.ui1,
    selected: colors["".concat(color, "Subtle")]
  } : {
    all: (0, _designTokens.itemSelectedColor)(colors.ui2),
    hovered: colors.ui1,
    selected: (0, _designTokens.itemSelectedColor)(colors.ui2)
  };
  var renderedColor;
  var hovered = !ripple && propsHovered;
  if (disabled) renderedColor = 'transparent';else if (selected && hovered) renderedColor = stateColors.all;else if (selected) renderedColor = stateColors.selected;else if (hovered) renderedColor = stateColors.hovered;else renderedColor = 'transparent';
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background: ", ";\n  "])), renderedColor);
};

exports.listItemBackgroundColor = listItemBackgroundColor;
//# sourceMappingURL=listItemBackgroundColor.js.map