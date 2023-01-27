/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import styled from 'styled-components'
import type { ParagraphProps } from '../Text'
import { Paragraph } from '../Text'
import type { TooltipProps } from './types'

export const TooltipContent = styled(Paragraph).attrs<TooltipProps>(
  ({ textAlign = 'center', width }) => ({
    color: 'inherit',
    fontSize: 'xsmall',
    lineHeight: 'xsmall',
    m: 'none',
    maxWidth: width || '16rem',
    p: 'u2',
    textAlign,
    width: 'auto',
  })
)<ParagraphProps>`
  hyphens: auto;
  overflow-wrap: anywhere;
  text-transform: none;
  white-space: normal;
  word-break: break-word;
`
