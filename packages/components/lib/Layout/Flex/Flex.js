let _ = t => t,
    _t;

import { flexbox, shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { complexLayoutCSS } from '../utils/complex';
export const Flex = styled.div.withConfig({
  shouldForwardProp,
  displayName: "Flex",
  componentId: "sc-1ak395a-0"
})(_t || (_t = _`
  ${0}
  ${0}
  display: flex;
`), complexLayoutCSS, flexbox);
//# sourceMappingURL=Flex.js.map