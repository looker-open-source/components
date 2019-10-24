import styled from 'styled-components'
import {
  layout,
  CompatibleHTMLProps,
  LayoutProps,
  textTransform,
  TextTransformProps,
} from 'looker-design-tokens'
import { TruncateProps, truncate } from '../Text/truncate'
import { TextVariantProps, textVariant } from './text_variant'
import { TextBase, TextBaseProps } from './TextBase'

export interface ParagraphProps
  extends TextBaseProps,
    LayoutProps,
    TextVariantProps,
    TextTransformProps,
    TruncateProps,
    Omit<CompatibleHTMLProps<HTMLParagraphElement>, 'wrap'> {}

export const Paragraph = styled(TextBase).attrs({ as: 'p' })<ParagraphProps>`
  ${layout}
  ${textTransform}
  ${textVariant}
  ${truncate}
`

Paragraph.defaultProps = { fontSize: 'medium' }
