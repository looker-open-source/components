let _ = t => t,
  _t;

import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { tableSectionCSS } from '../tableSection';
export const TableBody = styled.tbody.withConfig({
  shouldForwardProp,
  displayName: "TableBody",
  componentId: "sc-1c7fa9v-0"
}).attrs(({
  textAlign: _textAlign = 'left'
}) => ({
  textAlign: _textAlign
}))(_t || (_t = _`
  ${0}
`), tableSectionCSS);
//# sourceMappingURL=index.js.map