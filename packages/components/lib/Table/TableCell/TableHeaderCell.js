let _ = t => t,
    _t;

import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { tableCellCSS } from './tableCell';
export const TableHeaderCell = styled.th.withConfig({
  shouldForwardProp,
  displayName: "TableHeaderCell",
  componentId: "sc-1gjfki4-0"
}).attrs(({
  color: _color = 'text2',
  fontSize: _fontSize = 'xsmall',
  fontWeight: _fontWeight = 'semiBold'
}) => ({
  color: _color,
  fontSize: _fontSize,
  fontWeight: _fontWeight
}))(_t || (_t = _`
  ${0}
`), tableCellCSS);
//# sourceMappingURL=TableHeaderCell.js.map