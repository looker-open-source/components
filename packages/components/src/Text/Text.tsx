import styled from 'styled-components'
import {
  reset,
  typography,
  space,
  CompatibleHTMLProps,
  SpaceProps,
  textTransform,
  TextTransformProps,
  textDecoration,
  TextDecorationProps,
  TypographyProps,
} from '@looker/design-tokens'
import { textVariant, TextVariantProps } from './text_variant'

export interface TextProps
  extends SpaceProps,
    TypographyProps,
    TextDecorationProps,
    TextTransformProps,
    TextVariantProps,
    Omit<CompatibleHTMLProps<HTMLSpanElement>, 'wrap'> {
  /** Should browser insert line breaks within words to prevent text from overflowing its content box
   * @default: false
   */
  wrap?: boolean
}

export const Text = styled.span<TextProps>`
  ${reset}
  ${typography}
  ${space}
  ${textDecoration}
  ${textVariant}
  ${textTransform}

  ${props => props.wrap && 'overflow-wrap: break-word'};
`

Text.defaultProps = { fontSize: 'medium' }
