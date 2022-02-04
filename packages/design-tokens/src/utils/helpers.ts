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

import rgba from 'polished/lib/color/rgba'
import lighten from 'polished/lib/color/lighten'
import mix from 'polished/lib/color/mix'
import { css } from 'styled-components'
import type { ExtendedStatefulColor } from '../color/types/stateful'

export const buttonShadow = (color: ExtendedStatefulColor = 'key') =>
  css`
    box-shadow: 0 0 0 0.15rem ${({ theme }) => rgba(theme.colors[color], 0.25)};
  `

export const iconButtonColorDerivation = () => css`
  color: ${({ theme }) => lighten(0.14, theme.colors.neutral)};
`

export const tabShadowColor = () => css`
  box-shadow: 0 0 0 0.15rem ${({ theme }) => rgba(theme.colors.keyFocus, 0.25)};
`

export const calendarMixColor = () => css`
  color: ${({ theme: { colors } }) =>
    mix(0.65, colors.keyAccent, colors.neutralInteractive)};
`
