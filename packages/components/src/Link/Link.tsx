import {
  CompatibleHTMLProps,
  ColorProps,
  color,
  reset,
} from '@looker/design-tokens'
import styled from 'styled-components'

export interface LinkProps
  extends CompatibleHTMLProps<HTMLAnchorElement>,
    ColorProps {}

export const Link = styled.a<LinkProps>`
  ${reset}
  ${color}

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

Link.defaultProps = {
  color: 'palette.blue500',
}
