import { reset, styled } from '../../style'

export const Link = styled.a`
  ${reset};
  color: ${props => props.theme.colors.semanticColors.primary.linkColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
