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

import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
} from '@looker/design-tokens/src'

export type ProgressCircularSizes =
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface ProgressCircularSizeProps {
  dimensions: number
  stroke: number
}

export const lookupSpinnerSize = (size: ProgressCircularSizes) => {
  switch (size) {
    case 'medium':
      return { dimensions: 36, stroke: 3 }
    case 'small':
      return { dimensions: 24, stroke: 2.5 }
    case 'xsmall':
      return { dimensions: 20, stroke: 2 }
    case 'large':
    default:
      return { dimensions: 48, stroke: 4 }
  }
}

export const calculateProgressSizes = (
  size: ProgressCircularSizeProps,
  determinate: boolean
) => {
  const half = size.dimensions / 2

  return {
    dashArray: half * 4.7,
    dashOffset: determinate ? half * 4.7 : half * 2.3,
    half: half,
    radius: half / 1.34,
  }
}
