import { TextDecorationProperty } from 'csstype'
import styled from 'styled-components'
import {
  typography,
  space,
  CompatibleHTMLProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { textVariant, TextVariants } from '../Text/textHelpers'

export interface TextProps
  extends SpaceProps,
    TypographyProps,
    Omit<CompatibleHTMLProps<HTMLSpanElement>, 'wrap'> {
  textDecoration?: TextDecorationProperty
  /** Adjust style of text with more meaning by using an intent */
  variant?: TextVariants
  /** Should browser insert line breaks within words to prevent text from overflowing its content box  */
  wrap?: boolean
}

export const Text = styled.span<TextProps>`
  ${typography}
  ${space}

  font-size: ${props => props.fontSize || 'medium'};
  text-decoration: ${props => props.textDecoration};

  ${props => props.wrap && 'overflow-wrap: break-word'};
  ${props => textVariant(props.theme, props.variant)};
`
