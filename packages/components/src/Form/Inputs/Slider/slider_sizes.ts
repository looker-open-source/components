/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
  FontSizes,
} from '@looker/design-tokens'
import { variant } from 'styled-system'

export type SliderSizes = SizeSmall | SizeMedium | SizeLarge

export interface SliderSizeProps {
  /**
   * Defines the size of the slider.
   * @default "medium"
   */
  size?: SliderSizes
}

interface SliderSizeMap {
  prop: 'size'
  variants: {
    [key in SliderSizes]: {
      knobSize: number
      trackHeight: number
      fontSize: FontSizes
      valueSpacing: string
    }
  }
}

/* eslint-disable sort-keys */
const sliderSizeMap: SliderSizeMap = {
  prop: 'size',
  variants: {
    small: {
      knobSize: 12,
      trackHeight: 3,
      fontSize: 'xxsmall',
      valueSpacing: '-0.75rem',
    },
    medium: {
      knobSize: 16,
      trackHeight: 4,
      fontSize: 'xsmall',
      valueSpacing: '-0.85rem',
    },
    large: {
      knobSize: 18,
      trackHeight: 6,
      fontSize: 'small',
      valueSpacing: '-1rem',
    },
  },
}
/* eslint-enable sort-keys */

export const sliderSize = variant(sliderSizeMap)
