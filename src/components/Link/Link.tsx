import { reset } from '../../style/helpers'
import styled from '../../styled_components'

export const Link = styled.a`
  ${reset};
  color: ${props => props.theme.semanticColors.primary.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
