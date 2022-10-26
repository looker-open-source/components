let _ = t => t,
    _t;

import { reset, border, color, layout, typography, space } from '@looker/design-tokens';
import { css } from 'styled-components';
export const tableCellCSS = css(_t || (_t = _`
  ${0}
  padding: ${0} 0;
  ${0}
  ${0}
  ${0}
  ${0}
  ${0}
`), reset, ({
  theme
}) => theme.space.u2, border, color, layout, space, typography);
//# sourceMappingURL=tableCell.js.map