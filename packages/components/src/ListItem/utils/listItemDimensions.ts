/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityRamp } from '@looker/design-tokens'
import type { ListItemDimensions } from '../types'

export const density0: ListItemDimensions = {
  descriptionFontSize: 'xsmall',
  descriptionLineHeight: 'xsmall',
  gap: 'u3',
  height: 36,
  iconSize: 'small',
  labelFontSize: 'small',
  labelLineHeight: 'small',
  px: 'u4',
  py: 'u2',
}

// Positive density values
export const densityPositive1: ListItemDimensions = {
  ...density0,
  descriptionFontSize: 'small',
  descriptionLineHeight: 'small',
  gap: 'u4',
  height: 48,
  iconSize: 'medium',
  labelFontSize: 'medium',
  labelLineHeight: 'medium',
  py: 'u3',
}

// Negative density values
export const densityNegative1: ListItemDimensions = {
  ...density0,
  height: 32,
  py: '0.375rem', // Note: We could get this value with "calc(${theme.xxsmall} + ${theme.xxxsmall})"
}
export const densityNegative2: ListItemDimensions = {
  ...densityNegative1,
  height: 28,
  py: 'u1',
}
export const densityNegative3: ListItemDimensions = {
  ...densityNegative2,
  gap: 'u2',
  height: 24,
  iconSize: 'xxsmall',
  labelFontSize: 'xsmall',
  labelLineHeight: 'xsmall',
}

// Lookup object
export const densities = {
  '-1': densityNegative1,
  '-2': densityNegative2,
  '-3': densityNegative3,
  '0': density0,
  '1': densityPositive1,
}

/**
 * Returns an object with size and spacing scaled to "density" parameter value
 * @param density Accepts values from -3 (smallest) to 1 (largest)
 */
export const listItemDimensions = (density: DensityRamp): ListItemDimensions =>
  densities[density]
