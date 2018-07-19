import styled from '../../styled_components'

export const Link = styled('a')`
  color: ${props => props.theme.colors.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
