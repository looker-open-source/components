import styled from '../../../styled_components'
import { charcoal800 } from '../../../styles/colors'

export const Label = styled.label`
  font-weight: 600;
  color: ${charcoal800};
  margin-right: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[5]};
`
