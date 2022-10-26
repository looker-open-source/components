let _ = t => t,
    _t;

import { css } from 'styled-components';
import { listItemDimensions } from './listItemDimensions';
export const listItemPaddingX = (density = 0) => css(_t || (_t = _`
  ${0}
`), ({
  theme: {
    space
  }
}) => `
      padding-left: ${space[listItemDimensions(density).px]};
      padding-right: ${space[listItemDimensions(density).px]};
    `);
//# sourceMappingURL=listItemPaddingX.js.map