/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type { SpanProps } from '../../../Text'
import { Span } from '../../../Text'

export const FieldDetail = styled(Span).attrs<SpanProps>(
  ({ color = 'inherit' }) => ({
    color,
    fontSize: 'xsmall',
    lineHeight: 'xsmall',
  })
)`
  white-space: nowrap;
`
