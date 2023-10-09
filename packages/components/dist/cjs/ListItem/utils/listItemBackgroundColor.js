"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemBackgroundColor = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = require("styled-components");
var _isListColor = require("./isListColor");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var listItemBackgroundColor = function listItemBackgroundColor(_ref) {
  var color = _ref.color,
    colorOnHover = _ref.colorOnHover,
    disabled = _ref.disabled,
    propsHovered = _ref.hovered,
    ripple = _ref.ripple,
    selected = _ref.selected,
    colors = _ref.theme.colors;
  var stateColors = (0, _isListColor.isListColor)(color) ? {
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
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), renderedColor);
};
exports.listItemBackgroundColor = listItemBackgroundColor;
//# sourceMappingURL=listItemBackgroundColor.js.map