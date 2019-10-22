import styled from 'styled-components'
import {
  color,
  reset,
  typography,
  space,
  SpaceProps,
  TypographyProps,
  textDecoration,
  TextDecorationProps,
} from '@looker/design-tokens'

export interface TextBaseProps
  extends SpaceProps,
    TextDecorationProps,
    TypographyProps {
  /** Should browser insert line breaks within words to prevent text from overflowing its content box
   * @default: false
   */
  wrap?: boolean
}

export const TextBase = styled.span.attrs((props: TypographyProps) => ({
  lineHeight: props.lineHeight || props.fontSize,
}))<TextBaseProps>`
  ${reset}
  ${typography}
  ${space}
  ${color}
  ${textDecoration}
  ${props => props.wrap && 'overflow-wrap: break-word'};
`
