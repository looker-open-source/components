let _ = t => t,
    _t;

import { border, boxShadow, color, reset, typography } from '@looker/design-tokens';
import { css } from 'styled-components';
import { simpleLayoutCSS } from './simple';
export const complexLayoutCSS = css(_t || (_t = _`
  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box cursor='copy'/>.
   */
  ${0}
  ${0}

  /**
   * Style Utilities that extend Box's props. Most of these come from
   * styled-system but some are Looker UI Components specific.
   *
   * These should be last to override rules with lower priority.
   */
  ${0}
  ${0}
  ${0}
  ${0}
`), reset, simpleLayoutCSS, border, boxShadow, color, typography);
//# sourceMappingURL=complex.js.map