let _ = t => t,
  _t;

import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { tableSectionCSS } from '../tableSection';
export const TableHead = styled.thead.withConfig({
  shouldForwardProp,
  displayName: "TableHead",
  componentId: "sc-1bzogra-0"
}).attrs(({
  textAlign: _textAlign = 'left'
}) => ({
  textAlign: _textAlign
}))(_t || (_t = _`
  ${0}
`), tableSectionCSS);
//# sourceMappingURL=index.js.map