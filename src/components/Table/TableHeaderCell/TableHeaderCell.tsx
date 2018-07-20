import styled from '../../../styled_components'
import { gray400 } from '../../../styles/colors'

export const TableHeaderCell = styled('th')`
  padding: ${props => props.theme.spacing.s} 0;
  font-size: font-size(6);
  color: ${gray400};
  font-weight: 600;
`
