let _ = t => t,
    _t;

import { flexbox, shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { complexLayoutCSS } from '../utils/complex';
export const FlexItem = styled.div.withConfig({
  shouldForwardProp,
  displayName: "FlexItem",
  componentId: "sc-1xhpm9o-0"
})(_t || (_t = _`
  ${0}
  ${0}
  /*
   * A min-width must be set here to resolve a firefox bug where any children
   * with style of text-overflow: ellipsis; will otherwise not truncate the
   * text appropriately. */
  min-width: 0; /* IMPORTANT!! Do not delete! */
`), complexLayoutCSS, flexbox);
//# sourceMappingURL=FlexItem.js.map