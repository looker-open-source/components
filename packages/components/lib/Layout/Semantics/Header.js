let _ = t => t,
    _t,
    _t2;

import { shouldForwardProp } from '@looker/design-tokens';
import styled, { css } from 'styled-components';
import { commonLayoutCSS } from '../utils/common';
export const headerFooterCSS = css(_t || (_t = _`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
`));
export const Header = styled.header.withConfig({
  shouldForwardProp,
  displayName: "Header",
  componentId: "sc-1vrujk8-0"
})(_t2 || (_t2 = _`
  ${0}
  ${0}
  width: 100%;
`), commonLayoutCSS, headerFooterCSS);
//# sourceMappingURL=Header.js.map