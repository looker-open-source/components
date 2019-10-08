import styled from 'styled-components'
import { ResponsiveValue } from 'styled-system'
import {
  CompatibleHTMLProps,
  FontSizes,
  textTransform,
  TextTransformProps,
} from '@looker/design-tokens'
import { TextBase, TextBaseProps } from './TextBase'
import { TextVariantProps, textVariant } from './text_variant'
import { TruncateProps, truncate } from './truncate'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends TextBaseProps,
    TextTransformProps,
    TextVariantProps,
    TruncateProps,
    Omit<CompatibleHTMLProps<HTMLHeadingElement>, 'wrap'> {
  /** Heading level from h1-h6
   * @default: 'h2'
   */
  as?: HeadingLevels
}

const headingLevelFontSize = (props: HeadingProps) => {
  switch (props.as) {
    case 'h1':
      return 'xxlarge'
    case 'h3':
      return 'large'
    case 'h4':
      return 'medium'
    case 'h5':
      return 'small'
    case 'h6':
      return 'xsmall'
    case 'h2':
    default:
      return 'xlarge'
  }
}

const headingLineHeight = (props: HeadingProps): ResponsiveValue<FontSizes> =>
  props.fontSize ? props.fontSize : headingLevelFontSize(props)

export const Heading = styled(TextBase).attrs((props: HeadingProps) => ({
  fontSize: props.fontSize || headingLevelFontSize(props),
  lineHeight: props.lineHeight || headingLineHeight(props),
}))<HeadingProps>`
  ${textTransform}
  ${textVariant}
  ${truncate}
`

Heading.defaultProps = { as: 'h2', fontWeight: 'normal' }
