import styled from '../../../styled_components'
import { gray200 } from '../../../styles/colors'

export const TableDataCell = styled('td')`
  padding: ${props => props.theme.spacing.s} 0;
  border-top: solid 1px ${gray200};
`
