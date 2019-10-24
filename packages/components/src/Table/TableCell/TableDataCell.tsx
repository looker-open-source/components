import { CompatibleHTMLProps } from 'looker-design-tokens'
import styled from 'styled-components'
import { TableCellProps, tableCellCSS, tableCellDefaults } from './tableCell'

export interface TableDataCellProps
  extends TableCellProps,
    Omit<CompatibleHTMLProps<HTMLTableDataCellElement>, 'color'> {}

export const TableDataCell = styled.td<TableDataCellProps>`
  ${tableCellCSS}
`

/* eslint-disable sort-keys */
TableDataCell.defaultProps = {
  ...tableCellDefaults,
  borderTop: 'solid 1px',
  borderColor: 'palette.charcoal200',
  /**
   * It's important that `borderColor` go after `borderTop`,
   *   otherwise borderColor is inferred to black
   **/
}
