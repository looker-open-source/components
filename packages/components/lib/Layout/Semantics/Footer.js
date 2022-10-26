let _ = t => t,
    _t;

import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { commonLayoutCSS } from '../utils/common';
import { headerFooterCSS } from './Header';
export const Footer = styled.footer.withConfig({
  shouldForwardProp,
  displayName: "Footer",
  componentId: "sc-1ief1vb-0"
})(_t || (_t = _`
  ${0}
  ${0}
  width: 100%;
`), commonLayoutCSS, headerFooterCSS);
//# sourceMappingURL=Footer.js.map