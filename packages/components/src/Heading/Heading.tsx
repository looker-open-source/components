import styled from 'styled-components'
import { typography, ResponsiveValue, space } from 'styled-system'
import {
  CompatibleHTMLProps,
  FontSizes,
  SpaceProps,
  TypographyProps,
  reset,
} from '@looker/design-tokens'

import { textVariant, TextVariantProps } from '../Text/text_variant'
import { TruncateProps, truncate } from '../Text/truncate'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends TruncateProps,
    SpaceProps,
    TypographyProps,
    TextVariantProps,
    CompatibleHTMLProps<HTMLHeadingElement> {
  /** Heading level from h1-h6
   * @default: 'h2'
   */
  as?: HeadingLevels
}

const headingLevelSize = (as?: HeadingLevels) => {
  switch (as) {
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

const headingLineHeight = (
  as?: HeadingLevels,
  size?: ResponsiveValue<FontSizes>
): ResponsiveValue<FontSizes> => {
  if (size) return size

  switch (as) {
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

export const Heading = styled.h2<HeadingProps>`
  ${reset}
  ${typography}
  ${space}

  ${truncate}
  ${textVariant};

  font-size: ${props => props.fontSize || headingLevelSize(props.as)};
  line-height: ${props =>
    props.lineHeight || headingLineHeight(props.as, props.fontSize)};
`

Heading.defaultProps = { as: 'h2', fontWeight: 'normal' }
