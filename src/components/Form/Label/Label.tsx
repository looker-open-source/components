import styled from '../../../styled_components'
import { charcoal800 } from '../../../styles/colors'
import { reset } from '../../../styles/reset'

export const Label = styled.label`
  ${reset};
  font-weight: 600;
  color: ${charcoal800};
  margin-right: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[5]};
`
