import { reset, styled } from '../../style'

export const Link = styled.a`
  ${reset};
  color: ${props => props.theme.semanticColors.primary.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
