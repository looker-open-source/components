let _ = t => t,
    _t;

import { css } from 'styled-components';
import { accordionDimensions } from '../../Accordion2/accordionDimensions';
export const generateIndentCalculation = (depth, density, theme) => {
  const {
    space,
    sizes
  } = theme;
  const {
    indicatorGap,
    indicatorSize
  } = accordionDimensions(density);
  return `calc((${sizes[indicatorSize]} + ${space[indicatorGap]}) * ${depth})`;
};
export const generateIndent = ({
  depth: _depth = 0,
  density
}) => css(_t || (_t = _`
  padding-left: ${0};
`), ({
  theme
}) => generateIndentCalculation(_depth, density || theme.defaults.density, theme));
//# sourceMappingURL=generateIndent.js.map