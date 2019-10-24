import { CompatibleHTMLProps } from 'looker-design-tokens'
import styled from 'styled-components'
import { TableCellProps, tableCellCSS, tableCellDefaults } from './tableCell'

export interface TableHeaderCellProps
  extends TableCellProps,
    CompatibleHTMLProps<HTMLTableHeaderCellElement> {}

export const TableHeaderCell = styled.th<TableHeaderCellProps>`
  ${tableCellCSS}
`

TableHeaderCell.defaultProps = {
  ...tableCellDefaults,
  color: 'palette.charcoal400',
  fontSize: 'xsmall',
  fontWeight: 'semiBold',
}
