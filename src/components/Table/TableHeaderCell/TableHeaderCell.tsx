import styled from '../../../styled_components'
import { charcoal400 } from '../../../styles/colors'

export const TableHeaderCell = styled.th`
  padding: ${props => props.theme.spacing.s} 0;
  font-size: font-size(6);
  color: ${charcoal400};
  font-weight: 600;
`
