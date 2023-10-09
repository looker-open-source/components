let _ = t => t,
  _t;
import { css } from 'styled-components';
import { isListColor, listItemDimensions } from '../../ListItem';
const getColor = (theme, color) => {
  if (isListColor(color)) {
    return theme.colors[`${color}Focus`];
  }
  return color || theme.colors.ui2;
};
export const generateTreeBorder = ({
  border,
  color,
  density,
  theme,
  depth: _depth = 0
}) => {
  if (!border) return false;
  const {
    iconSize
  } = listItemDimensions(density || theme.defaults.density);
  const itemBorderSize = '1px';
  const itemGutter = '0.25rem';
  const indicatorIconSize = theme.sizes[iconSize];
  const depthSize = `(${indicatorIconSize} + ${itemGutter}) * ${_depth}`;
  const borderSpacer = `(${indicatorIconSize} + ${itemBorderSize}) / 2 + ${depthSize}`;
  const preBorderStop = `calc(${borderSpacer} - ${itemBorderSize})`;
  const postBorderStop = `calc(${borderSpacer})`;
  return css(_t || (_t = _`
    background-image: linear-gradient(
      90deg,
      transparent ${0},
      ${0} ${0} ${0},
      transparent ${0}
    );
  `), preBorderStop, getColor(theme, color), preBorderStop, postBorderStop, postBorderStop);
};
//# sourceMappingURL=generateTreeBorder.js.map