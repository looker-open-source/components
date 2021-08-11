/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { DensityRamp, FontSizes, SpacingSizes } from '@looker/design-tokens'
import { IconSize } from '../Icon'

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
