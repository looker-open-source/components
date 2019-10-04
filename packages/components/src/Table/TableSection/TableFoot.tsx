import styled from 'styled-components'
import {
  tableSectionCSS,
  tableSectionDefaults,
  TableSectionProps,
} from './tableSection'

export const TableFoot = styled.tbody<TableSectionProps>`
  ${tableSectionCSS}
`

TableFoot.defaultProps = tableSectionDefaults
