/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityRamp, SpaceRamp } from '@looker/design-tokens'
import { css } from 'styled-components'
import { listItemDimensions } from './listItemDimensions'

const calculatePaddingY = (density: DensityRamp, space: SpaceRamp) => {
  const { py } = listItemDimensions(density)

  /**
   * The check for 0.375rem gets density = -1 ListItems to the desired 48px min height.
   * Without it, density = -1 ListItems would be at 44px.
   */
  return css`
    padding-bottom: ${py === '0.375rem' ? py : space[py]};
    padding-top: ${py === '0.375rem' ? py : space[py]};
  `
}

export const listItemPaddingY = (density: DensityRamp = 0) => css`
  ${({ theme }) => calculatePaddingY(density, theme.space)}
`
