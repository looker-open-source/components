import styled from 'styled-components'
import { typography, ResponsiveValue, space } from 'styled-system'
import {
  CompatibleHTMLProps,
  FontSizes,
  reset,
  SpaceProps,
  TypographyProps,
  TextTransformProps,
  textTransform,
} from '@looker/design-tokens'

import { textVariant, TextVariantProps } from '../Text/text_variant'
import { TruncateProps, truncate } from '../Text/truncate'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends TruncateProps,
    SpaceProps,
    TypographyProps,
    TextTransformProps,
    TextVariantProps,
    CompatibleHTMLProps<HTMLHeadingElement> {
  /** Heading level from h1-h6
   * @default: 'h2'
   */
  as?: HeadingLevels
}

const headingLevelFontSize = (props: HeadingProps) => {
  switch (props.as) {
    case 'h1':
      return 'xxlarge'
    case 'h2':
      return 'xlarge'
    case 'h3':
      return 'large'
    case 'h4':
      return 'medium'
    case 'h5':
      return 'small'
    case 'h6':
      return 'xsmall'
    default:
      return 'large'
  }
}

const headingLineHeight = (props: HeadingProps): ResponsiveValue<FontSizes> =>
  props.fontSize ? props.fontSize : headingLevelFontSize(props)

export const Heading = styled.h2.attrs((props: HeadingProps) => ({
  fontSize: props.fontSize || headingLevelFontSize(props),
  lineHeight: props.lineHeight || headingLineHeight(props),
}))<HeadingProps>`
  ${reset}
  ${typography}
  ${textTransform}
  ${space}

  ${truncate}
  ${textVariant};
`

Heading.defaultProps = { fontWeight: 'normal' }
