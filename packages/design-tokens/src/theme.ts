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

import { DefaultTheme, InterpolationValue } from 'styled-components'
import {
  Colors,
  Easings,
  FontFamilyChoices,
  FontSizeRamp,
  FontWeightRamp,
  LineHeightRamp,
  Radii,
  SizeRamp,
  Shadows,
  SpaceRamp,
  Transitions,
} from './system'

/**
 * Theme attributes shouldn't be exported as they should be consumed via `theme` rather than via
 * direct import.
 */
import {
  breakpoints,
  easings,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  colors,
  sizes,
  shadows,
  space,
  transitions,
} from './tokens'

export interface Theme {
  breakpoints: string[]
  colors: Colors
  easings: Easings
  fontSizes: FontSizeRamp
  fonts: FontFamilyChoices
  fontWeights: FontWeightRamp
  lineHeights: LineHeightRamp
  radii: Radii
  /**
   * A function that can be overridden to return different reset css properties
   * or null to remove all resets. Most base elements implement the reset.
   */
  reset?: () => InterpolationValue
  sizes: SizeRamp
  shadows: Shadows
  space: SpaceRamp
  transitions: Transitions
  zIndexFloor: number
}

export const theme: DefaultTheme = {
  breakpoints,
  colors,
  easings,
  fontSizes,
  fontWeights,
  fonts: fontFamilies,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndexFloor: 1,
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
