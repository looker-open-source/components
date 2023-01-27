/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { SpanProps } from '../Span/Span'
import { Span } from '../Span/Span'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextProps extends SpanProps {}

/**
 * Outputs a `span` HTML element with specified props.
 *
 * NOTE: This component has a historic "quirk" where the `font-size` defaults to medium rather
 * than simply inheriting it's size from the parent DOM element (what one might expect of a
 * "normal" inline element.  `line-height` will match the `font-size` (`medium` unless  otherwise specified) as well.
 *
 * @deprecated - Use `Span` component instead for a more predictable behavior
 */
export const Text = styled(Span).attrs<TextProps>(
  ({ fontSize = 'medium', lineHeight }) => ({
    fontSize,
    lineHeight: lineHeight || fontSize,
  })
)<TextProps>``
