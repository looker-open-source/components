let _ = t => t,
  _t;
import { TableCellStyles, RowIndexStyles } from '../TableCell';
import styled from 'styled-components';
export const TableHeadCell = styled.th.attrs(({
  width
}) => ({
  width
}))(_t || (_t = _`
  ${0}
  text-align: left;
  background: ${0};
  border-bottom: 1px solid ${0};
  ${0}
`), TableCellStyles, ({
  theme
}) => theme.colors.background, ({
  theme
}) => theme.colors.ui4, ({
  stickyLeft
}) => stickyLeft ? RowIndexStyles : null);
//# sourceMappingURL=index.js.map