import styled from 'styled-components'
import {
  tableSectionCSS,
  tableSectionDefaults,
  TableSectionProps,
} from './tableSection'

export const TableHead = styled.thead<TableSectionProps>`
  ${tableSectionCSS}
`

TableHead.defaultProps = tableSectionDefaults
