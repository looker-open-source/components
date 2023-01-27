let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
import styled, { css } from 'styled-components';
export const RowIndexStyles = css(_t || (_t = _`
  border-right: 1px solid ${0};
  text-align: right;
  position: sticky;
  left: 0;
  z-index: 1;
`), ({
  theme
}) => theme.colors.ui4);
export const TableCellStyles = css(_t2 || (_t2 = _`
  border-right: 1px solid ${0};
  font-size: ${0};
  line-height: ${0};
  padding: ${0};
  &:last-child {
    border-right: none;
  }
`), ({
  theme
}) => theme.colors.ui2, ({
  theme
}) => theme.fontSizes.small, ({
  theme
}) => theme.lineHeights.small, ({
  theme
}) => css(_t3 || (_t3 = _`
      ${0} ${0}
    `), theme.space.xxsmall, theme.space.xsmall));
export const TableCell = styled.td(_t4 || (_t4 = _`
  ${0}
  ${0}
`), TableCellStyles, ({
  stickyLeft
}) => stickyLeft ? RowIndexStyles : null);
//# sourceMappingURL=index.js.map