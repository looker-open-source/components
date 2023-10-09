let _ = t => t,
  _t;
import { itemSelectedColor } from '@looker/design-tokens';
import { css } from 'styled-components';
import { isListColor } from './isListColor';
export const listItemBackgroundColor = ({
  color,
  colorOnHover,
  disabled,
  hovered: propsHovered,
  ripple,
  selected,
  theme: {
    colors
  }
}) => {
  const stateColors = isListColor(color) ? {
    all: colors[`${color}Subtle`],
    hovered: colors.ui1,
    selected: colors[`${color}Subtle`]
  } : {
    all: itemSelectedColor(colors.ui2),
    hovered: colors.ui1,
    selected: itemSelectedColor(colors.ui2)
  };
  let renderedColor;
  const hovered = !ripple && propsHovered;
  if (disabled) renderedColor = 'transparent';else if (selected && hovered) renderedColor = stateColors.all;else if (selected) renderedColor = stateColors.selected;else if (hovered) renderedColor = stateColors.hovered;else renderedColor = 'transparent';
  return css(_t || (_t = _`
    background-color: ${0};
  `), renderedColor);
};
//# sourceMappingURL=listItemBackgroundColor.js.map