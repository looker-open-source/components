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
  SizeXSmall,
  FontSizes,
} from '@looker/design-tokens'
import { variant } from 'styled-system'

export type SliderSizes = SizeXSmall | SizeSmall | SizeMedium | SizeLarge

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
    xsmall: {
      knobSize: 14,
      trackHeight: 4,
      fontSize: 'xsmall',
      valueSpacing: '1.25rem',
    },
    small: {
      knobSize: 18,
      trackHeight: 6,
      fontSize: 'small',
      valueSpacing: '1.4rem',
    },
    medium: {
      knobSize: 24,
      trackHeight: 10,
      fontSize: 'medium',
      valueSpacing: '1.5rem',
    },
    large: {
      knobSize: 32,
      trackHeight: 12,
      fontSize: 'large',
      valueSpacing: '1.75rem',
    },
  },
}
/* eslint-enable sort-keys */

export const sliderSize = variant(sliderSizeMap)
