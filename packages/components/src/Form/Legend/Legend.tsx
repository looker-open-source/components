/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import {
  color,
  reset,
  space,
  shouldForwardProp,
  typography,
} from '@looker/design-tokens'

export interface LegendProps
  extends SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLLegendElement> {}

export const Legend = styled.legend
  .withConfig({ shouldForwardProp })
  .attrs<LegendProps>(
    ({
      color = 'text4',
      fontFamily = 'brand',
      fontSize = 'medium',
      fontWeight = 'semiBold',
    }) => ({
      color,
      fontFamily,
      fontSize,
      fontWeight,
    })
  )<LegendProps>`
  ${reset}
  border: none;
  ${color}
  ${space}
  ${typography}
`

/**
 * `border: none;` override is a product-targeted fix
 * @TODO - Remove targeted fix when mitigated downstream
 **/
