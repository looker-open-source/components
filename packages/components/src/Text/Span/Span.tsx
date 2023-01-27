/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  TextTransformProps,
} from '@looker/design-tokens'
import { textTransform } from '@looker/design-tokens'
import type { TextBaseProps } from '../Text/TextBase'
import { TextBase } from '../Text/TextBase'

export interface SpanProps
  extends TextBaseProps,
    TextTransformProps,
    Omit<CompatibleHTMLProps<HTMLSpanElement>, 'wrap'> {}

/**
 * Outputs a `span` HTML element with specified props.
 *
 * NOTE: Component will inherit all styling from the parent DOM element unless otherwise
 * specified. `line-height` will match the `font-size` if expliclity specified.
 */
export const Span = styled(TextBase).attrs<SpanProps>(
  ({ fontSize, lineHeight }) => ({
    lineHeight: lineHeight || fontSize,
  })
)<SpanProps>`
  ${textTransform}
`
