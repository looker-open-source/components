/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { DensityRamp, ListItemDimensions } from '../types'

const density0: ListItemDimensions = {
  height: 36,
  iconGap: 'small',
  iconSize: 'small',
  labelFontSize: 'small',
  labelLineHeight: 'small',
  px: 'medium',
  py: 'xsmall',
}

// Positive density values
const densityP1: ListItemDimensions = {
  ...density0,
  height: 48,
  iconSize: 'medium',
  labelFontSize: 'medium',
  labelLineHeight: 'medium',
  py: 'small',
}

// Negative density values
const densityN1: ListItemDimensions = {
  ...density0,
  height: 32,
  py: '0.375rem',
}
const densityN2: ListItemDimensions = {
  ...densityN1,
  height: 28,
  iconGap: 'xsmall',
  iconSize: 'xsmall',
  py: 'xxsmall',
}
const densityN3: ListItemDimensions = {
  ...densityN2,
  height: 24,
  iconSize: 'xxsmall',
  labelFontSize: 'xxsmall',
  labelLineHeight: 'xsmall',
}

export const getListItemDimensions = (
  density: DensityRamp
): ListItemDimensions => {
  switch (density) {
    case -1:
      return densityN1
    case -2:
      return densityN2
    case -3:
      return densityN3
    case 1:
      return densityP1
    default:
      return density0
  }
}
