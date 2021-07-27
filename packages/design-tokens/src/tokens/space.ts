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

import { SpaceRamp, SpacingRamp } from '../system'

/**
 * @deprecated Use `spacing` instead
 */
/* eslint-disable sort-keys-fix/sort-keys-fix */
export const space: SpaceRamp = {
  none: '0rem',
  xxxsmall: '0.125rem',
  xxsmall: '0.25rem',
  xsmall: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '2rem',
  xxlarge: '2.5rem',
  xxxlarge: '3.75rem',
  xxxxlarge: '5rem',
}

export const spacing: SpacingRamp = {
  none: '0rem',
  'size0.5': '0.125rem',
  size1: '0.25rem',
  size2: '0.5rem',
  size3: '0.75rem',
  size4: '1rem',
  size5: '1.25rem',
  size6: '1.5rem',
  size7: '1.75rem',
  size8: '2rem',
  size9: '2.25rem',
  size10: '2.5rem',
  size11: '2.75rem',
  size12: '3rem',
  size13: '3.25rem',
  size14: '3.5rem',
  size15: '3.75rem',
  size16: '4em',
}
