import { reset } from '../../../style/helpers'
import styled from '../../../style/styled_components'

export const Label = styled.label`
  ${reset};
  font-weight: 600;
  color: ${props => props.theme.palette.charcoal800};
  margin-right: ${props => props.theme.space.small};
  font-size: ${props => props.theme.fontSizes[5]};
`
