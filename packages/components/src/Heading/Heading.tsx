import styled from 'styled-components'
import { typography, ResponsiveValue, space } from 'styled-system'
import {
  CompatibleHTMLProps,
  FontSizes,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'

import { textVariant, TextVariants } from '../Text/textHelpers'
import { TruncateProps, truncate } from '../Text/truncate'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

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

export interface HeadingProps
  extends TruncateProps,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLHeadingElement> {
  /** Heading level from h1-h6 */
  as?: HeadingLevels
  /** Adjust style of text with more meaning by using an intent */
  variant?: TextVariants
}

export const Heading = styled.h1<HeadingProps>`
  ${typography}
  ${space}
  ${truncate}

  font-size: ${props => props.fontSize || headingLevelSize(props.as)};
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: ${props =>
    props.lineHeight || headingLineHeight(props.as, props.fontSize)};

  ${props => textVariant(props.theme, props.variant)};
`
