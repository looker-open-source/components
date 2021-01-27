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

import { itemSelectedColor, Theme } from '@looker/design-tokens'
import { css } from 'styled-components'
import { ItemBackgroundColorProps } from '../types'

export const getItemBackgroundColor = ({
  keyColor,
  disabled,
  hovered,
  selected,
  theme: { colors },
}: ItemBackgroundColorProps & { theme: Theme }) => {
  const keyColors = {
    all: colors.keySubtle,
    hovered: colors.ui1,
    selected: colors.keySubtle,
  }
  const uiColors = {
    all: itemSelectedColor(colors.ui2),
    hovered: colors.ui1,
    selected: itemSelectedColor(colors.ui2),
  }
  const stateColors = keyColor ? keyColors : uiColors
  let renderedColor

  if (disabled) renderedColor = 'transparent'
  else if (selected && hovered) renderedColor = stateColors.all
  else if (selected) renderedColor = stateColors.selected
  else if (hovered) renderedColor = stateColors.hovered
  else renderedColor = 'transparent'

  return css`
    background-color: ${renderedColor};
  `
}
