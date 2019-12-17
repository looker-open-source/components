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

import { InterpolationValue } from 'styled-components'
import {
  Colors,
  Easings,
  FontFamilyChoices,
  FontSizeRamp,
  FontWeightRamp,
  LineHeightRamp,
  Palette,
  Radii,
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
  palette,
  radii,
  colors,
  shadows,
  space,
  transitions,
} from './tokens'

interface ThemeColors extends Colors {
  palette: Palette
}

export interface Theme {
  breakpoints: string[]
  colors: ThemeColors
  easings: Easings
  fontSizes: FontSizeRamp
  fontWeights: FontWeightRamp
  fonts: FontFamilyChoices
  lineHeights: LineHeightRamp
  radii: Radii
  /**
   * A function that can be overridden to return different reset css properties
   * or null to remove all resets. Most base elements implement the reset.
   */
  reset?: () => InterpolationValue
  shadows: Shadows
  space: SpaceRamp
  transitions: Transitions
}

export const theme: Theme = {
  breakpoints,
  colors: { palette, ...colors },
  easings,
  fontSizes,
  fontWeights,
  fonts: fontFamilies,
  lineHeights,
  radii,
  shadows,
  space,
  transitions,
}
