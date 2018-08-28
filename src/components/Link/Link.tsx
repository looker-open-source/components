import styled from '../../styled_components'

export const Link = styled('a')`
  color: ${props => props.theme.semanticColors.primary.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
