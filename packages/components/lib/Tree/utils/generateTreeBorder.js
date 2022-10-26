let _ = t => t,
    _t;

import { css } from 'styled-components';
import { listItemDimensions } from '../../ListItem';
export const generateTreeBorder = ({
  border,
  density,
  depth,
  theme
}) => {
  if (!border) return false;
  const {
    iconSize
  } = listItemDimensions(density);
  const itemBorderSize = '1px';
  const itemGutter = '0.25rem';
  const indicatorIconSize = theme.sizes[iconSize];
  const depthSize = `(${indicatorIconSize} + ${itemGutter}) * ${depth}`;
  const borderSpacer = `(${indicatorIconSize} + ${itemBorderSize}) / 2 + ${depthSize}`;
  const preBorderStop = `calc(${borderSpacer} - ${itemBorderSize})`;
  const postBorderStop = `calc(${borderSpacer})`;
  return css(_t || (_t = _`
    background: linear-gradient(
      90deg,
      transparent ${0},
      ${0} ${0} ${0},
      transparent ${0}
    );
  `), preBorderStop, theme.colors.ui2, preBorderStop, postBorderStop, postBorderStop);
};
//# sourceMappingURL=generateTreeBorder.js.map