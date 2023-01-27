/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  DensityRamp,
  FontSizes,
  SpacingSizes,
} from '@looker/design-tokens'
import type { IconSize } from '../Icon'

type AccordionDensityDimensions = {
  indicatorGap: SpacingSizes
  indicatorSize: IconSize
  fontSize: FontSizes
}

// Positive density values
export const densityPositive1: AccordionDensityDimensions = {
  fontSize: 'medium',
  indicatorGap: 'u1',
  indicatorSize: 'medium',
}

export const density0: AccordionDensityDimensions = {
  ...densityPositive1,
  fontSize: 'small',
  indicatorSize: 'small',
}

// Negative density values
export const densityNegative1: AccordionDensityDimensions = {
  ...density0,
}
export const densityNegative2: AccordionDensityDimensions = {
  ...densityNegative1,
}
export const densityNegative3: AccordionDensityDimensions = {
  ...densityNegative2,
  fontSize: 'xsmall',
  indicatorSize: 'xxsmall',
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
export const accordionDimensions = (
  density: DensityRamp = 0
): AccordionDensityDimensions => densities[density]
