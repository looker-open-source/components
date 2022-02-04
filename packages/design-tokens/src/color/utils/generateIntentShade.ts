/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import darken from 'polished/lib/color/darken'
import getLuminance from 'polished/lib/color/getLuminance'
import lighten from 'polished/lib/color/lighten'
import { css } from 'styled-components'

// Returns a tint or shade of an intent color, used for text that sits on top of an intentUIBlend
// Adjust amount of lightening or darkening based on color's luminance as well as background color's luminance
export const generateIntentShade = (color: string) => {
  const intentColorLuminance = getLuminance(color)

  const adjustAmount =
    intentColorLuminance > 0.3 ? intentColorLuminance * 0.55 : 0.125
  return css`
    ${({ theme: { colors } }) =>
      getLuminance(colors.background) > 0.5
        ? darken(adjustAmount, color)
        : lighten(adjustAmount, color)}
  `
}
