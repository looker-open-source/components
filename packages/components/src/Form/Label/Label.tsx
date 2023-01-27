/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  TextColorProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  reset,
  shouldForwardProp,
  textColor,
  typography,
} from '@looker/design-tokens'

export interface LabelProps
  extends TextColorProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLLabelElement> {}

export const Label = styled.label
  .withConfig({
    shouldForwardProp,
  })
  .attrs<LabelProps>(
    ({ color = 'text4', fontSize = 'xsmall', fontWeight = 'medium' }) => ({
      color,
      fontSize,
      fontWeight,
    })
  )<LabelProps>`
  ${reset}
  ${textColor}
  ${typography}
`
