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

import { variant } from 'styled-system'
import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
} from '@looker/design-tokens'

export type ProgressCircularSizes =
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

const calculateValues = (half: number) => {
  return {
    dashArray: half * 4.7,
    dashOffset: half * 2.3,
    half: half,
    radius: half / 1.34,
  }
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const progressCircularSVG = variant({
  prop: 'size',
  variants: {
    xsmall: {
      stroke: 2,
      ...calculateValues(10),
    },
    small: {
      stroke: 2.5,
      ...calculateValues(12),
    },
    medium: {
      stroke: 3,
      ...calculateValues(18),
    },
    large: {
      stroke: 4,
      ...calculateValues(24),
    },
  },
})

export const progressCircularSize = variant({
  prop: 'size',
  variants: {
    xsmall: {
      height: '20px',
      width: '20px',
    },
    small: {
      height: '24px',
      width: '24px',
    },
    medium: {
      height: '36px',
      width: '36px',
    },
    large: {
      height: '48px',
      width: '48px',
    },
  },
})
