/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'

import type {
  SpaceProps,
  TextDecorationProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontStyle,
  reset,
  space,
  shouldForwardProp,
  textAlign,
  textColor,
  textDecoration,
} from '@looker/design-tokens'

export interface TextBaseProps
  extends SpaceProps,
    TextDecorationProps,
    TypographyProps {
  color?: string

  /**
   * Should browser insert line breaks within words to prevent text from overflowing its content box
   * @default: false
   */
  breakword?: boolean
}

export const TextBase = styled.span.withConfig({
  shouldForwardProp,
})<TextBaseProps>`
  ${reset}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${textColor}
  ${textDecoration}
  ${({ breakword }) => breakword && 'overflow-wrap: break-word;'}
`
