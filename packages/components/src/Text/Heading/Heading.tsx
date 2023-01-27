/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  FontSizes,
  ResponsiveValue,
  TextTransformProps,
} from '@looker/design-tokens'
import { textTransform } from '@looker/design-tokens'
import type { TextBaseProps } from '../Text/TextBase'
import { TextBase } from '../Text/TextBase'
import type { TruncateCSSProps } from '../truncate'
import { truncateCSS } from '../truncate'

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingProps
  extends TextBaseProps,
    TextTransformProps,
    TruncateCSSProps,
    Omit<CompatibleHTMLProps<HTMLHeadingElement>, 'wrap'> {
  /** Heading level from h1-h6
   * @default: 'h2'
   */
  as?: HeadingLevels
}

const headingLevelFontSize = (as: HeadingLevels) => {
  switch (as) {
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

const headingLineHeight = (
  as: HeadingLevels,
  fontSize?: ResponsiveValue<FontSizes>
): ResponsiveValue<FontSizes> => fontSize || headingLevelFontSize(as)

export const Heading = styled(TextBase).attrs<HeadingProps>(
  ({
    as = 'h2',
    color = 'title',
    fontFamily = 'brand',
    fontSize,
    fontWeight = 'normal',
    lineHeight,
  }) => ({
    as,
    color,
    fontFamily,
    fontSize: fontSize || headingLevelFontSize(as),
    fontWeight,
    lineHeight: lineHeight || headingLineHeight(as, fontSize),
  })
)<HeadingProps>`
  ${textTransform}
  ${truncateCSS}
`
