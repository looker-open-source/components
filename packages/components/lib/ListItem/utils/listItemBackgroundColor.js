let _ = t => t,
    _t;

import { itemSelectedColor } from '@looker/design-tokens';
import { css } from 'styled-components';
export const listItemBackgroundColor = ({
  color,
  disabled,
  hovered: propsHovered,
  ripple,
  selected,
  theme: {
    colors
  }
}) => {
  const stateColors = color ? {
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
    background: ${0};
  `), renderedColor);
};
//# sourceMappingURL=listItemBackgroundColor.js.map