import styled from '../../../styled_components'
import { reset } from '../../../styles/helpers'

export const Label = styled.label`
  ${reset};
  font-weight: 600;
  color: ${props => props.theme.palette.charcoal800};
  margin-right: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp[5]};
`
