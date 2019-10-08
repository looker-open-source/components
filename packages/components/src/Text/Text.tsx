import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  textTransform,
  TextTransformProps,
} from '@looker/design-tokens'
import { textVariant, TextVariantProps } from './text_variant'
import { TextBase, TextBaseProps } from './TextBase'

export interface TextProps
  extends TextBaseProps,
    TextTransformProps,
    TextVariantProps,
    Omit<CompatibleHTMLProps<HTMLSpanElement>, 'wrap'> {}

export const Text = styled(TextBase)<TextProps>`
  ${textVariant}
  ${textTransform}
`

Text.defaultProps = { fontSize: 'medium' }
