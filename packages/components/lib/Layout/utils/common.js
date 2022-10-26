let _ = t => t,
    _t;

import { color, typography, borderHelper } from '@looker/design-tokens';
import { css } from 'styled-components';
import { simpleLayoutCSS } from './simple';
export const commonLayoutCSS = css(_t || (_t = _`
  /**
   * Rules here should provide convenience styling for Box derived components.
   * Generally anything here could be overwritten by explicit values set via
   * Box's prop values. For example a function here that sets 'cursor: pointer'
   * would be overwritten by an explicit <Box2 cursor='copy'/>.
   */
  ${0}

  ${0}
  ${0}
  ${0}
`), simpleLayoutCSS, borderHelper, color, typography);
//# sourceMappingURL=common.js.map