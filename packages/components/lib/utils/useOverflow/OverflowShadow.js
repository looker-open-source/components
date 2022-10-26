let _ = t => t,
    _t,
    _t2;

import styled, { css } from 'styled-components';
import { padding, reset } from '@looker/design-tokens';
const OverflowShadowStyle = css(_t || (_t = _`
  border-bottom: 1px solid ${0};
  border-top: 1px solid ${0};
  box-shadow: inset 0 -4px 4px -4px ${0};
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.colors.ui2);
export const OverflowShadow = styled.div.withConfig({
  displayName: "OverflowShadow",
  componentId: "sc-1d4s5ma-0"
})(_t2 || (_t2 = _`
  ${0}
  ${0}
  ${0}
`), reset, ({
  hasOverflow
}) => hasOverflow && OverflowShadowStyle, padding);
//# sourceMappingURL=OverflowShadow.js.map