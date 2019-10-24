import {
  CompatibleHTMLProps,
  ColorProps,
  color,
  reset,
  textDecoration,
  TextDecorationProps,
  typography,
  TypographyProps,
} from 'looker-design-tokens'
import styled from 'styled-components'

export interface LinkProps
  extends CompatibleHTMLProps<HTMLAnchorElement>,
    ColorProps,
    TextDecorationProps,
    TypographyProps {}

export const Link = styled.a<LinkProps>`
  ${reset}
  ${color}
  ${typography}
  ${textDecoration}

  &:hover {
    text-decoration: underline;
  }
`

Link.defaultProps = {
  color: 'palette.blue500',
  textDecoration: 'none',
}
