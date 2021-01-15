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

import { ItemDimensions } from '../types'

export const density0: ItemDimensions = {
  height: 36,
  iconGap: 'small',
  iconSize: 'small',
  labelFontSize: 'small',
  labelLineHeight: 'small',
  px: 'medium',
  py: 'xsmall',
}

// Positive density values
export const densityPositive1: ItemDimensions = {
  ...density0,
  height: 48,
  iconSize: 'medium',
  labelFontSize: 'medium',
  labelLineHeight: 'medium',
  py: 'small',
}

// Negative density values
export const densityNegative1: ItemDimensions = {
  ...density0,
  height: 32,
  py: '0.375rem', // Note: We could get this value with "calc(${theme.xxsmall} + ${theme.xxxsmall})"
}
export const densityNegative2: ItemDimensions = {
  ...densityNegative1,
  height: 28,
  iconGap: 'xsmall',
  iconSize: 'xsmall',
  py: 'xxsmall',
}
export const densityNegative3: ItemDimensions = {
  ...densityNegative2,
  height: 24,
  iconSize: 'xxsmall',
  labelFontSize: 'xxsmall',
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
