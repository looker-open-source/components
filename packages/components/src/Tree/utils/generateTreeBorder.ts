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

import { css } from 'styled-components'
import { Theme } from '@looker/design-tokens'
import { indicatorDefaults } from './indicatorDefaults'

export const generateTreeBorder = (depth: number, theme: Theme) => {
  const { sizes, space } = theme
  const { indicatorSize, indicatorGap } = indicatorDefaults

  const itemBorderSize = '1px'
  const itemPaddingSize = space.xxsmall
  const indicatorIconSize = sizes[indicatorSize]
  const indicatorGapSize = space[indicatorGap]
  const depthSize = `${itemPaddingSize} + (${indicatorIconSize} + ${indicatorGapSize}) * ${depth}`
  const borderSpacer = `(${indicatorIconSize} + ${itemBorderSize}) / 2 + ${depthSize}`

  const preBorderStop = `calc(${borderSpacer} - ${itemBorderSize})`
  const postBorderStop = `calc(${borderSpacer})`

  return css`
    background: linear-gradient(
      90deg,
      transparent ${preBorderStop},
      ${theme.colors.ui2} ${preBorderStop} ${postBorderStop},
      transparent ${postBorderStop}
    );
  `
}
