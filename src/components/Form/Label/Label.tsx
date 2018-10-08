import { reset, styled } from '../../../style'

export const Label = styled.label`
  ${reset};
  font-weight: 600;
  color: ${props => props.theme.colors.palette.charcoal800};
  margin-right: ${props => props.theme.space.small};
  font-size: ${props => props.theme.fontSizes[5]};
`
