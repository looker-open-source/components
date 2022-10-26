let _ = t => t,
    _t,
    _t2;

import { css } from 'styled-components';
import { listItemDimensions } from './listItemDimensions';

const calculatePaddingY = (density, space) => {
  const {
    py
  } = listItemDimensions(density);
  return css(_t || (_t = _`
    padding-bottom: ${0};
    padding-top: ${0};
  `), py === '0.375rem' ? py : space[py], py === '0.375rem' ? py : space[py]);
};

export const listItemPaddingY = (density = 0) => css(_t2 || (_t2 = _`
  ${0}
`), ({
  theme
}) => calculatePaddingY(density, theme.space));
//# sourceMappingURL=listItemPaddingY.js.map