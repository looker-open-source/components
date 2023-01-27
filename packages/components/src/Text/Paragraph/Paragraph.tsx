/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  LayoutProps,
  TextTransformProps,
} from '@looker/design-tokens'
import { layout, textTransform } from '@looker/design-tokens'
import type { TruncateCSSProps } from '../truncate'
import { truncateCSS } from '../truncate'
import type { TextBaseProps } from '../Text/TextBase'
import { TextBase } from '../Text/TextBase'

export interface ParagraphProps
  extends TextBaseProps,
    LayoutProps,
    TextTransformProps,
    TruncateCSSProps,
    Omit<CompatibleHTMLProps<HTMLParagraphElement>, 'wrap'> {}

export const Paragraph = styled(TextBase).attrs<ParagraphProps>(
  ({ color = 'body', fontSize = 'inherit', lineHeight }) => ({
    as: 'p',
    color,
    fontSize,
    lineHeight: lineHeight || fontSize,
  })
)<ParagraphProps>`
  ${layout}
  ${textTransform}
  ${truncateCSS}
`
