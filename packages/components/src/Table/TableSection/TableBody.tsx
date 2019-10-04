import styled from 'styled-components'
import {
  tableSectionCSS,
  tableSectionDefaults,
  TableSectionProps,
} from './tableSection'

export const TableBody = styled.tbody<TableSectionProps>`
  ${tableSectionCSS}
`

TableBody.defaultProps = tableSectionDefaults
