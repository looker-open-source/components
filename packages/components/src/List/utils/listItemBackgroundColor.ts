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

import { itemSelectedColor, Theme } from '@looker/design-tokens'
import { css } from 'styled-components'
import { ListItemStatefulWithHoveredProps } from '../types'

export const listItemBackgroundColor = ({
  statefulColor,
  keyColor,
  current,
  disabled,
  hovered,
  selected,
  theme: { colors },
}: ListItemStatefulWithHoveredProps & { theme: Theme }) => {
  /* Provide fallback support for `keyColor` until we're able to deprecate it */
  const intent = statefulColor || keyColor ? 'key' : undefined

  const stateColors = intent
    ? {
        all: colors[`${intent}Subtle`],
        hovered: colors.ui1,
        selected: colors[`${intent}Subtle`],
      }
    : {
        all: itemSelectedColor(colors.ui2),
        hovered: colors.ui1,
        selected: itemSelectedColor(colors.ui2),
      }

  let renderedColor

  if (disabled) renderedColor = 'transparent'
  else if ((selected || current) && hovered) renderedColor = stateColors.all
  else if (selected || current) renderedColor = stateColors.selected
  else if (hovered) renderedColor = stateColors.hovered
  else renderedColor = 'transparent'

  return css`
    background: ${renderedColor};
  `
}
