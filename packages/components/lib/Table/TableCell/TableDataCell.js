let _ = t => t,
    _t;

import { shouldForwardProp } from '@looker/design-tokens';
import styled from 'styled-components';
import { tableCellCSS } from './tableCell';
export const TableDataCell = styled.td.withConfig({
  shouldForwardProp,
  displayName: "TableDataCell",
  componentId: "sc-1ehugof-0"
}).attrs(({
  borderTop: _borderTop = 'ui2'
}) => ({
  borderTop: _borderTop
}))(_t || (_t = _`
  ${0}
`), tableCellCSS);
//# sourceMappingURL=TableDataCell.js.map